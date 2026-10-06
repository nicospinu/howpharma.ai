(() => {
  const KEY = "howpharma.opinion.v1";
  const empty = () => ({ yes: 0, no: 0, vote: null, comments: [] });

  function load() {
    try {
      const raw = JSON.parse(localStorage.getItem(KEY) || "null");
      if (!raw || typeof raw !== "object") return empty();
      return {
        yes: raw.yes === 1 ? 1 : 0,
        no: raw.no === 1 ? 1 : 0,
        vote: raw.vote === "yes" || raw.vote === "no" ? raw.vote : null,
        comments: Array.isArray(raw.comments) ? raw.comments.slice(0, 40) : [],
      };
    } catch {
      return empty();
    }
  }

  function save(state) {
    localStorage.setItem(KEY, JSON.stringify(state));
  }

  const yesBtn = document.querySelector(".ballot-btn.yes");
  const noBtn = document.querySelector(".ballot-btn.no");
  const tallyMeta = document.getElementById("tally-meta");
  const barYes = document.getElementById("bar-yes");
  const barNo = document.getElementById("bar-no");
  const form = document.getElementById("comment-form");
  const textarea = document.getElementById("comment-text");
  const charCount = document.getElementById("char-count");
  const list = document.getElementById("comments");
  const fold = document.getElementById("thread-fold");
  const label = document.getElementById("thread-label");
  const forum = document.querySelector(".forum");

  let state = load();
  if (state.vote === "yes") {
    state.yes = 1;
    state.no = 0;
  } else if (state.vote === "no") {
    state.yes = 0;
    state.no = 1;
  }

  function fmt(n) {
    return n.toLocaleString("en-US");
  }

  function relTime(iso) {
    const ms = Date.now() - new Date(iso).getTime();
    const min = Math.round(ms / 60000);
    if (min < 1) return "just now";
    if (min < 60) return `${min} min ago`;
    const hr = Math.round(min / 60);
    if (hr < 24) return `${hr}h ago`;
    const day = Math.round(hr / 24);
    if (day < 14) return `${day}d ago`;
    return new Date(iso).toISOString().slice(0, 10);
  }

  function paintTally() {
    const total = state.yes + state.no;
    const yesPct = total ? Math.round((state.yes / total) * 100) : 0;
    const noPct = total ? 100 - yesPct : 0;
    document.querySelector('[data-count="yes"]').textContent = fmt(state.yes);
    document.querySelector('[data-count="no"]').textContent = fmt(state.no);
    document.querySelector('[data-pct="yes"]').textContent = total ? `${yesPct}%` : "—";
    document.querySelector('[data-pct="no"]').textContent = total ? `${noPct}%` : "—";
    barYes.style.width = total ? `${yesPct}%` : "50%";
    barNo.style.width = total ? `${noPct}%` : "50%";
    barYes.style.opacity = total ? "1" : "0.25";
    barNo.style.opacity = total ? "1" : "0.25";

    yesBtn.classList.toggle("is-on", state.vote === "yes");
    noBtn.classList.toggle("is-on", state.vote === "no");
    yesBtn.setAttribute("aria-pressed", state.vote === "yes" ? "true" : "false");
    noBtn.setAttribute("aria-pressed", state.vote === "no" ? "true" : "false");
    yesBtn.disabled = Boolean(state.vote);
    noBtn.disabled = Boolean(state.vote);

    if (!total) {
      tallyMeta.textContent = "No votes yet. Be the first.";
    } else if (state.vote) {
      tallyMeta.textContent = `You voted ${state.vote === "yes" ? "Yes" : "No"} · ${fmt(total)} anonymous vote${total === 1 ? "" : "s"}`;
    } else {
      tallyMeta.textContent = `${fmt(total)} anonymous vote${total === 1 ? "" : "s"}`;
    }
  }

  function paintFoldLabel() {
    const n = state.comments.length;
    fold.classList.toggle("is-empty", n === 0);
    if (n === 0) {
      label.textContent = "No notes yet";
      return;
    }
    label.textContent = fold.open
      ? `${fmt(n)} note${n === 1 ? "" : "s"}`
      : `${fmt(n)} note${n === 1 ? "" : "s"} · expand to read`;
  }

  function paintComments({ open } = {}) {
    const n = state.comments.length;
    if (n === 0) {
      fold.open = false;
      paintFoldLabel();
      list.replaceChildren();
      return;
    }

    if (open) fold.open = true;
    paintFoldLabel();

    list.replaceChildren();
    for (const item of state.comments) {
      const li = document.createElement("li");
      li.className = "comment";
      const meta = document.createElement("p");
      meta.className = "comment-meta";
      meta.textContent = `Anonymous · ${relTime(item.at)}`;
      const body = document.createElement("p");
      body.className = "comment-body";
      body.textContent = item.text;
      li.append(meta, body);
      list.append(li);
    }
  }

  function vote(choice) {
    if (state.vote) return;
    state.vote = choice;
    state.yes = choice === "yes" ? 1 : 0;
    state.no = choice === "no" ? 1 : 0;
    save(state);
    paintTally();
  }

  yesBtn.addEventListener("click", () => vote("yes"));
  noBtn.addEventListener("click", () => vote("no"));

  textarea.addEventListener("input", () => {
    charCount.textContent = String(400 - textarea.value.length);
  });

  fold.addEventListener("toggle", () => {
    if (fold.classList.contains("is-empty")) {
      fold.open = false;
      return;
    }
    paintFoldLabel();
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (form.website.value) return;
    const text = textarea.value.replace(/\s+/g, " ").trim();
    if (text.length < 3) {
      textarea.focus();
      return;
    }
    state.comments.unshift({
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      text: text.slice(0, 400),
      at: new Date().toISOString(),
    });
    state.comments = state.comments.slice(0, 40);
    save(state);
    textarea.value = "";
    charCount.textContent = "400";
    paintComments({ open: true });
  });

  if (forum && "IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      ([entry]) => {
        const on = entry.isIntersecting && entry.intersectionRatio > 0.08;
        document.body.classList.toggle("is-forum", on);
      },
      { threshold: [0, 0.08, 0.2, 0.5] }
    );
    io.observe(forum);
  }

  paintTally();
  paintComments();
})();
