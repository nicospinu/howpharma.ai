(() => {
  const agents = [...window.AGENTS]
    .sort((a, b) => {
      const byName = a.name.localeCompare(b.name, "en", { sensitivity: "base" });
      if (byName) return byName;
      return a.github.localeCompare(b.github, "en", { sensitivity: "base" });
    })
    .map((agent, i) => ({ ...agent, n: i + 1 }));
  const maxStars = Math.max(...agents.map((a) => a.stars));
  const table = document.getElementById("table");
  const inspect = document.getElementById("inspect");
  const find = document.getElementById("find");
  const chips = [...document.querySelectorAll(".chip")];

  const names = agents.reduce((acc, a) => {
    acc[a.name] = (acc[a.name] || 0) + 1;
    return acc;
  }, {});

  let role = "all";
  let query = "";
  let activeId = agents[0].id;
  let pinnedId = agents[0].id;
  const canHover = window.matchMedia("(hover: hover) and (pointer: fine)");
  const mobileList = window.matchMedia("(max-width: 720px)");

  function allowHoverPreview() {
    return canHover.matches && !mobileList.matches;
  }

  const fmt = (n) => n.toLocaleString("en-US");
  const yearShort = (y) => `’${String(y).slice(2)}`;
  const pad = (n) => String(n).padStart(2, "0");

  function paintSnapshot() {
    const orgs = new Set();
    let industry = 0;
    let beyond = 0;
    for (const agent of agents) {
      for (const part of agent.org.split(",")) {
        const name = part.trim();
        if (name) orgs.add(name);
      }
      if ((agent.orgType || "").includes("company")) industry += 1;
      if (["E5", "E6", "E7"].includes(agent.evalCode)) beyond += 1;
    }
    const set = (id, html) => {
      const node = document.getElementById(id);
      if (node) node.innerHTML = html;
    };
    set("stat-agents", String(agents.length));
    set("stat-orgs", String(orgs.size));
    set("stat-industry", String(industry));
    set("stat-beyond", String(beyond));
  }

  function bits(n) {
    const seed = n * 17 + 11;
    return Array.from({ length: 9 }, (_, i) => Boolean((seed >> i) & 1));
  }

  function matchesQuery(agent) {
    if (!query) return true;
    const hay = [
      agent.name,
      agent.symbol,
      agent.cite,
      agent.org,
      agent.github,
      agent.description,
      agent.roleLabel,
      agent.llms.join(" "),
      agent.evalCode,
      agent.evalLabel,
    ]
      .join(" ")
      .toLowerCase();
    return hay.includes(query);
  }

  function visible(agent) {
    const roleOk = role === "all" || agent.role === role;
    return roleOk && matchesQuery(agent);
  }

  function countFor(roleKey) {
    return agents.filter((agent) => {
      const roleOk = roleKey === "all" || agent.role === roleKey;
      return roleOk && matchesQuery(agent);
    }).length;
  }

  function syncChips() {
    for (const chip of chips) {
      const n = countFor(chip.dataset.role);
      const mark = chip.querySelector(".chip-n");
      if (mark) mark.textContent = String(n);
      chip.setAttribute("aria-label", `${chip.dataset.label} ${n}`);
    }
  }

  function cell(agent) {
    const print = bits(agent.n)
      .map((on) => `<b class="${on ? "on" : ""}"></b>`)
      .join("");
    const dup =
      names[agent.name] > 1 && agent.cite
        ? ` <span class="cell-cite">${agent.cite}</span>`
        : names[agent.name] > 1
          ? ` <span class="cell-cite">${agent.github}</span>`
          : "";
    const width = Math.max(6, Math.round((agent.stars / maxStars) * 100));
    return `
      <button
        class="cell ${agent.role}"
        role="option"
        id="${agent.id}"
        data-id="${agent.id}"
        style="--i:${agent.n - 1}"
        aria-selected="false"
        title="${agent.name}"
      >
        <span class="cell-top"><span>${pad(agent.n)}</span></span>
        <span class="cell-mark">
          <span class="cell-symbol">${agent.symbol}</span>
          <span class="cell-print" aria-hidden="true">${print}</span>
        </span>
        <span class="cell-name">${agent.name}${dup}</span>
        <span class="cell-meta"><span>${fmt(agent.stars)}</span><span>${yearShort(agent.year)}</span></span>
        <span class="cell-bar" aria-hidden="true"><i style="width:${width}%"></i></span>
        <span class="cell-veil" aria-hidden="true">
          <small>${agent.github}</small>
          <p>${agent.description}</p>
        </span>
      </button>
    `;
  }

  function paintTable() {
    table.innerHTML = agents.map(cell).join("");
    syncCells();
  }

  function syncCells() {
    for (const node of table.querySelectorAll(".cell")) {
      const agent = agents.find((a) => a.id === node.dataset.id);
      const id = node.dataset.id;
      node.classList.toggle("is-dim", !visible(agent));
      node.classList.toggle("is-on", id === pinnedId);
      node.classList.toggle("is-preview", id === activeId && id !== pinnedId);
      node.setAttribute("aria-selected", id === pinnedId ? "true" : "false");
    }
    table.setAttribute("aria-activedescendant", pinnedId);
  }

  function licenseLabel(license) {
    if (!license) return "Unspecified";
    if (license.includes("Commons-Clause")) return "Apache-2.0 + Commons Clause";
    return license;
  }

  const EVALS = [
    {
      code: "E1",
      label: "Knowledge / reasoning benchmark",
      asks: "Can the agent answer scientific questions correctly?",
    },
    {
      code: "E2",
      label: "Tool-use / workflow evaluation",
      asks: "Can it select and correctly use scientific tools?",
    },
    {
      code: "E3",
      label: "Computational discovery evaluation",
      asks: "Does it generate useful molecular or biological candidates?",
    },
    {
      code: "E4",
      label: "Expert evaluation",
      asks: "Are its hypotheses, explanations or plans scientifically reasonable?",
    },
    {
      code: "E5",
      label: "Experimental validation",
      asks: "Does the agent's output work experimentally?",
    },
    {
      code: "E6",
      label: "Prospective / closed-loop evaluation",
      asks: "Can it autonomously drive a real research cycle?",
    },
    {
      code: "E7",
      label: "Translational / clinical evaluation",
      asks: "Does it provide clinically meaningful evidence or decisions?",
    },
  ];

  function evalOf(code) {
    return EVALS.find((item) => item.code === code) || EVALS[0];
  }

  function grade(agent) {
    const item = evalOf(agent.evalCode);
    return `
      <div class="grade">
        <p class="pipe-kicker">AI evaluation framework</p>
        <p class="grade-name">${item.code}. ${item.label}</p>
        <p class="grade-asks">${item.asks}</p>
      </div>
    `;
  }

  const PIPELINE = [
    ["Target discovery", "Disc"],
    ["Target validation", "Val"],
    ["Hit discovery", "Hit"],
    ["Lead optimization", "Lead"],
    ["Synthesis", "Syn"],
    ["Preclinical", "Pre"],
    ["Clinical/translational", "Clin"],
  ];

  function stageName(stage, repurposing) {
    if (repurposing && stage === "Clinical/translational") return "Clinical/translational (Repurposing)";
    return stage;
  }

  function pipe(agent) {
    const on = new Set(agent.stages);
    const repurposing = on.has("Repurposing");
    const clinical = on.has("Clinical/translational");
    const flags = PIPELINE.map(([stage]) => on.has(stage));
    const n = flags.filter(Boolean).length;
    const nodes = PIPELINE.map(([stage, short], i) => {
      const active = flags[i];
      const run = flags[i] && flags[i + 1];
      const name = active ? stageName(stage, repurposing) : stage;
      return `
        <li class="${active ? "is-on" : ""} ${run ? "is-run" : ""}" title="${name}" aria-current="${active ? "true" : "false"}">
          <i>${pad(i + 1)}</i>
          <b></b>
          <span>${short}</span>
        </li>
      `;
    }).join("");
    const covered = PIPELINE.filter(([stage]) => on.has(stage)).map(([stage]) => stageName(stage, repurposing && clinical));
    if (repurposing && !clinical) covered.push("Repurposing");
    const readout = covered.join(" · ");
    return `
      <div class="pipe">
        <p class="pipe-kicker">Pipeline · ${n} of ${PIPELINE.length}</p>
        <ol class="pipe-rail" aria-label="Drug development stages covered">${nodes}</ol>
        ${readout ? `<p class="pipe-readout">${readout}</p>` : ""}
      </div>
    `;
  }

  function renderInspect(agent) {
    const paperLink = agent.paperUrl
      ? `<a href="${agent.paperUrl}" target="_blank" rel="noopener">Paper</a>`
      : "";
    inspect.style.setProperty("--c", `var(--${agent.role})`);
    inspect.innerHTML = `
      <div class="inspect-mark" aria-hidden="true">${agent.symbol}</div>
      <p class="kicker">${pad(agent.n)} · ${agent.roleLabel} · ${agent.year}</p>
      <h2>${agent.name}</h2>
      <p class="org">${agent.org.replaceAll(", ", " · ")}</p>
      <p class="lede">${agent.description}</p>
      ${pipe(agent)}
      ${grade(agent)}
      <div class="meta">
        <div><span>GitHub</span><strong>${agent.github}</strong></div>
        <div><span>Stars</span><strong>${fmt(agent.stars)}</strong></div>
        <div><span>License</span><strong>${licenseLabel(agent.license)}</strong></div>
        <div><span>Created</span><strong>${agent.created}</strong></div>
        <div><span>Models</span><strong>${agent.llms.join(" · ")}</strong></div>
      </div>
      <div class="actions">
        <a class="primary" href="${agent.repoUrl}" target="_blank" rel="noopener">Repository</a>
        ${paperLink}
      </div>
    `;
  }

  function show(id) {
    const agent = agents.find((a) => a.id === id);
    if (!agent) return;
    activeId = id;
    syncCells();
    renderInspect(agent);
  }

  function pin(id, scroll) {
    const agent = agents.find((a) => a.id === id);
    if (!agent) return;
    pinnedId = id;
    activeId = id;
    syncCells();
    renderInspect(agent);
    if (scroll) {
      document.getElementById(id)?.scrollIntoView({ block: "nearest" });
    }
  }

  function columns() {
    return getComputedStyle(table).gridTemplateColumns.split(" ").filter(Boolean).length;
  }

  function step(dx, dy = 0) {
    const cols = columns();
    let i = agents.findIndex((a) => a.id === activeId);
    if (i < 0) i = 0;
    if (dy) i += dy * cols;
    else i += dx;
    i = (i + agents.length) % agents.length;
    let guard = 0;
    while (!visible(agents[i]) && guard < agents.length) {
      i = (i + (dx || dy * cols || 1) + agents.length) % agents.length;
      guard += 1;
    }
    if (visible(agents[i])) pin(agents[i].id, true);
  }

  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      role = chip.dataset.role;
      chips.forEach((c) => c.classList.toggle("is-on", c === chip));
      syncChips();
      const shown = agents.filter(visible);
      if (!shown.some((a) => a.id === pinnedId) && shown[0]) {
        pin(shown[0].id);
      } else {
        show(pinnedId);
      }
    });
  });

  find.addEventListener("input", () => {
    query = find.value.trim().toLowerCase();
    syncChips();
    const shown = agents.filter(visible);
    if (!shown.some((a) => a.id === pinnedId) && shown[0]) {
      pin(shown[0].id);
    } else {
      show(pinnedId);
    }
  });

  table.addEventListener("pointerover", (e) => {
    if (!allowHoverPreview()) return;
    const btn = e.target.closest(".cell");
    if (!btn || btn.classList.contains("is-dim")) return;
    show(btn.dataset.id);
  });

  table.addEventListener("pointerleave", () => {
    if (!allowHoverPreview()) return;
    show(pinnedId);
  });

  table.addEventListener("click", (e) => {
    const btn = e.target.closest(".cell");
    if (!btn || btn.classList.contains("is-dim")) return;
    pin(btn.dataset.id);
  });

  table.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      step(1);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      step(-1);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      step(0, 1);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      step(0, -1);
    } else if (e.key === "Home") {
      e.preventDefault();
      const first = agents.find(visible);
      if (first) pin(first.id, true);
    } else if (e.key === "End") {
      e.preventDefault();
      const shown = agents.filter(visible);
      if (shown.length) pin(shown[shown.length - 1].id, true);
    } else if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      pin(activeId);
    }
  });

  window.addEventListener("keydown", (e) => {
    const tag = document.activeElement?.tagName;
    if (e.key === "/" && tag !== "INPUT" && tag !== "TEXTAREA") {
      e.preventDefault();
      find.focus();
    }
  });

  paintSnapshot();
  syncChips();
  paintTable();
  pin(agents[0].id);
})();
