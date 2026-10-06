/* Source catalog: data/open_source_ai_agents.csv */
window.AGENTS = [
  {
    "id": "a01",
    "n": 1,
    "symbol": "Ob",
    "name": "OpenBioMed",
    "org": "PharMolix",
    "orgType": "company",
    "description": "Biomedical agent platform and 45 Claude Code skills, jointly released by PharMolix Inc. and Tsinghua AIR, covering drug discovery, protein engineering, and single-cell analysis.",
    "github": "PharMolix",
    "stars": 1104,
    "created": "2023-04-13",
    "year": 2023,
    "license": "MIT",
    "paperTitle": null,
    "doi": null,
    "repoUrl": "https://github.com/PharMolix/OpenBioMed",
    "paperUrl": null,
    "llms": [
      "Claude Code"
    ],
    "role": "workflow",
    "roleLabel": "Programming & workflow",
    "stages": [
      "Target discovery",
      "Hit discovery",
      "Lead optimization",
      "Preclinical"
    ],
    "evalCode": "E2",
    "evalLabel": "Tool-use / workflow evaluation"
  },
  {
    "id": "a02",
    "n": 2,
    "symbol": "Cc",
    "name": "ChemCrow",
    "org": "University of Rochester, École Polytechnique Fédérale de Lausanne (EPFL)",
    "orgType": "academia",
    "description": "LangChain chemistry agent that calls RDKit, paper-qa, PubChem and related tools for synthesis, drug-discovery and materials tasks.",
    "github": "ur-whitelab",
    "stars": 957,
    "created": "2023-06-04",
    "year": 2023,
    "license": "MIT",
    "paperTitle": "Augmenting large language models with chemistry tools",
    "doi": "10.1038/s42256-024-00832-8",
    "repoUrl": "https://github.com/ur-whitelab/chemcrow-public",
    "paperUrl": "https://www.nature.com/articles/s42256-024-00832-8",
    "llms": [
      "GPT-4"
    ],
    "role": "knowledge",
    "roleLabel": "Interfaces & knowledge",
    "stages": [
      "Hit discovery",
      "Lead optimization",
      "Synthesis"
    ],
    "evalCode": "E2",
    "evalLabel": "Tool-use / workflow evaluation"
  },
  {
    "id": "a03",
    "n": 3,
    "symbol": "Cs",
    "name": "Coscientist",
    "org": "Carnegie Mellon University",
    "orgType": "academia",
    "description": "Supporting code and simple tool-using LLM implementation of Coscientist, the autonomous chemical-research agent.",
    "github": "gomesgroup",
    "stars": 211,
    "created": "2023-09-30",
    "year": 2023,
    "license": "Apache-2.0 WITH Commons-Clause",
    "paperTitle": "Autonomous chemical research with large language models",
    "doi": "10.1038/s41586-023-06792-0",
    "repoUrl": "https://github.com/gomesgroup/coscientist",
    "paperUrl": "https://www.nature.com/articles/s41586-023-06792-0",
    "llms": [
      "GPT-4"
    ],
    "role": "loop",
    "roleLabel": "Autonomous & closed-loop",
    "stages": [
      "Lead optimization",
      "Synthesis",
      "Preclinical"
    ],
    "evalCode": "E6",
    "evalLabel": "Prospective / closed-loop evaluation"
  },
  {
    "id": "a04",
    "n": 4,
    "symbol": "Bd",
    "name": "BioDiscoveryAgent",
    "org": "Stanford University",
    "orgType": "academia",
    "description": "BioDiscoveryAgent is an LLM-based AI agent for closed-loop design of genetic perturbation experiments.",
    "github": "snap-stanford",
    "stars": 131,
    "created": "2024-02-21",
    "year": 2024,
    "license": "MIT",
    "paperTitle": "BioDiscoveryAgent: An AI Agent for Designing Genetic Perturbation Experiments",
    "doi": "10.48550/arXiv.2405.17631",
    "repoUrl": "https://github.com/snap-stanford/BioDiscoveryAgent",
    "paperUrl": "https://arxiv.org/abs/2405.17631",
    "llms": [
      "Claude 3.5 Sonnet"
    ],
    "role": "loop",
    "roleLabel": "Autonomous & closed-loop",
    "stages": [
      "Target discovery",
      "Target validation",
      "Preclinical"
    ],
    "evalCode": "E6",
    "evalLabel": "Prospective / closed-loop evaluation"
  },
  {
    "id": "a05",
    "n": 5,
    "symbol": "Ca",
    "name": "CACTUS",
    "org": "Pacific Northwest National Laboratory",
    "orgType": "research organisation",
    "description": "CACTUS stands for Chemistry Agent Connecting Tool Usage to Science. A cheminformatics LLM agent that calls RDKit-style tools for property prediction, similarity search and drug-likeness.",
    "github": "pnnl",
    "stars": 52,
    "created": "2024-04-30",
    "year": 2024,
    "license": "BSD-2-Clause",
    "paperTitle": "CACTUS: Chemistry Agent Connecting Tool Usage to Science",
    "doi": "10.1021/acsomega.4c08408",
    "repoUrl": "https://github.com/pnnl/cactus",
    "paperUrl": "https://pubs.acs.org/doi/10.1021/acsomega.4c08408",
    "llms": [
      "Gemma-7b",
      "Mistral-7b",
      "Llama2-7b",
      "Llama3-8b",
      "Falcon-7b",
      "MPT-7b",
      "Phi2",
      "Phi3",
      "OLMo-1b"
    ],
    "role": "knowledge",
    "roleLabel": "Interfaces & knowledge",
    "stages": [
      "Target discovery",
      "Hit discovery",
      "Lead optimization"
    ],
    "evalCode": "E1",
    "evalLabel": "Knowledge / reasoning benchmark"
  },
  {
    "id": "a06",
    "n": 6,
    "symbol": "Ct",
    "name": "Coated-LLM",
    "org": "The University of Texas Health Science Center at Houston, Worcester Polytechnic Institute",
    "orgType": "academia",
    "description": "Researcher/Reviewer/Moderator multi-agent that proposes Alzheimer's drug combinations via structured in-context scientific debate.",
    "github": "QidiXu96",
    "stars": 2,
    "created": "2024-08-15",
    "year": 2024,
    "license": "MIT",
    "paperTitle": "Multi agent large language models for biomedical hypothesis generation in drug combination discovery",
    "doi": "10.1016/j.isci.2025.113984",
    "repoUrl": "https://github.com/QidiXu96/Coated-LLM",
    "paperUrl": "https://www.cell.com/iscience/fulltext/S2589-0042(25)02245-X",
    "llms": [
      "GPT-4",
      "Claude-3-Opus"
    ],
    "role": "hypothesis",
    "roleLabel": "Hypothesis generation",
    "stages": [
      "Preclinical"
    ],
    "evalCode": "E5",
    "evalLabel": "Experimental validation"
  },
  {
    "id": "a07",
    "n": 7,
    "symbol": "Vl",
    "name": "Virtual Lab",
    "org": "Stanford University, Chan Zuckerberg Biohub",
    "orgType": "academia",
    "description": "Human-plus-LLM multi-agent Virtual Lab that runs team and individual meetings; demonstrated on SARS-CoV-2 nanobody design with ESM, AlphaFold-Multimer and Rosetta.",
    "github": "zou-group",
    "stars": 738,
    "created": "2024-08-26",
    "year": 2024,
    "license": "MIT",
    "paperTitle": "The Virtual Lab of AI agents designs new SARS-CoV-2 nanobodies",
    "doi": "10.1038/s41586-025-09442-9",
    "repoUrl": "https://github.com/zou-group/virtual-lab",
    "paperUrl": "https://www.nature.com/articles/s41586-025-09442-9",
    "llms": [
      "GPT-4o"
    ],
    "role": "loop",
    "roleLabel": "Autonomous & closed-loop",
    "stages": [
      "Hit discovery",
      "Lead optimization",
      "Synthesis",
      "Preclinical"
    ],
    "evalCode": "E4",
    "evalLabel": "Expert evaluation"
  },
  {
    "id": "a08",
    "n": 8,
    "symbol": "A4",
    "name": "AIAgents4Pharma",
    "org": "BioMed X Institute",
    "orgType": "independent",
    "description": "Open-source Talk2* LangGraph agents for pharma R&D: biomodels, knowledge graphs, literature (Zotero) and sequencing data.",
    "github": "VirtualPatientEngine",
    "stars": 102,
    "created": "2024-10-30",
    "year": 2024,
    "license": "MIT",
    "paperTitle": "Talk2Biomodels: AI agent-based open-source LLM initiative for kinetic biological models",
    "doi": "10.1186/s12859-025-06310-1",
    "repoUrl": "https://github.com/VirtualPatientEngine/AIAgents4Pharma",
    "paperUrl": "https://link.springer.com/article/10.1186/s12859-025-06310-1",
    "llms": [
      "GPT-4o-mini",
      "Llama-3.3-70B-Instruct",
      "Llama-3.2-NV-EmbedQA-1B-V2"
    ],
    "role": "knowledge",
    "roleLabel": "Interfaces & knowledge",
    "stages": [
      "Target discovery",
      "Target validation",
      "Preclinical",
      "Clinical/translational"
    ],
    "evalCode": "E7",
    "evalLabel": "Translational / clinical evaluation"
  },
  {
    "id": "a09",
    "n": 9,
    "symbol": "Md",
    "name": "MADD",
    "org": "ITMO University, Sber AI Lab, D ONE AG, HSE University",
    "orgType": "academia",
    "description": "MADD stands for Multi-Agent Drug Discovery Orchestra. A platform whose agents generate molecules, gather ChEMBL/BindingDB data, predict properties and run AutoML pipelines.",
    "github": "sb-ai-lab",
    "stars": 47,
    "created": "2024-12-23",
    "year": 2024,
    "license": null,
    "paperTitle": "MADD: Multi-Agent Drug Discovery Orchestra",
    "doi": "10.48550/arXiv.2511.08217",
    "repoUrl": "https://github.com/sb-ai-lab/MADD",
    "paperUrl": "https://arxiv.org/abs/2511.08217",
    "llms": [
      "GPT-4o",
      "o1-mini",
      "Claude Sonnet 3.5",
      "Gemini 1.5 Pro"
    ],
    "role": "discovery",
    "roleLabel": "Computational discovery",
    "stages": [
      "Hit discovery",
      "Lead optimization"
    ],
    "evalCode": "E3",
    "evalLabel": "Computational discovery evaluation"
  },
  {
    "id": "a10",
    "n": 10,
    "symbol": "Da",
    "name": "DrugAgent",
    "cite": "Liu et al. (2024)",
    "org": "University of Southern California, Carnegie Mellon University, Stanford University",
    "orgType": "academia",
    "description": "Planner/Instructor multi-agent that writes domain-aware ML code for ADMET, screening and drug-target interaction tasks.",
    "github": "Steven51516",
    "stars": 8,
    "created": "2025-02-09",
    "year": 2025,
    "license": "MIT",
    "paperTitle": "DrugAgent: Automating AI-aided Drug Discovery Programming through LLM Multi-Agent Collaboration",
    "doi": "10.48550/arXiv.2411.15692",
    "repoUrl": "https://github.com/Steven51516/drugagent",
    "paperUrl": "https://arxiv.org/abs/2411.15692",
    "llms": [
      "GPT-4o"
    ],
    "role": "workflow",
    "roleLabel": "Programming & workflow",
    "stages": [
      "Hit discovery",
      "Lead optimization",
      "Preclinical"
    ],
    "evalCode": "E3",
    "evalLabel": "Computational discovery evaluation"
  },
  {
    "id": "a11",
    "n": 11,
    "symbol": "Tx",
    "name": "TxAgent",
    "org": "Harvard Medical School",
    "orgType": "academia",
    "description": "Tx stands for therapeutic. A tool-using agent that calls ToolUniverse biomedical APIs for drug interactions, contraindications and personalized treatment strategies.",
    "github": "mims-harvard",
    "stars": 655,
    "created": "2025-03-01",
    "year": 2025,
    "license": "MIT",
    "paperTitle": "TxAgent: An AI Agent for Therapeutic Reasoning Across a Universe of Tools",
    "doi": "10.48550/arXiv.2503.10970",
    "repoUrl": "https://github.com/mims-harvard/TxAgent",
    "paperUrl": "https://arxiv.org/abs/2503.10970",
    "llms": [
      "Llama-3.1-8B-Instruct"
    ],
    "role": "knowledge",
    "roleLabel": "Interfaces & knowledge",
    "stages": [
      "Clinical/translational"
    ],
    "evalCode": "E7",
    "evalLabel": "Translational / clinical evaluation"
  },
  {
    "id": "a12",
    "n": 12,
    "symbol": "Sp",
    "name": "SpatialAgent",
    "org": "Genentech, Stanford University, Harvard University, Tsinghua University, Yale University, University of California Los Angeles, Roche, Ludwig Maximilian University of Munich, Helmholtz Munich, Massachusetts Institute of Technology",
    "orgType": "academia, company",
    "description": "Autonomous AI agent for spatial biology that pairs LLMs with 72 tools and plan-act-conclude reasoning for spatial transcriptomics and scRNA-seq.",
    "github": "Genentech",
    "stars": 214,
    "created": "2025-03-22",
    "year": 2025,
    "license": "MIT",
    "paperTitle": "SpatialAgent: An autonomous AI agent for spatial biology",
    "doi": "10.1101/2025.04.03.646459",
    "repoUrl": "https://github.com/Genentech/SpatialAgent",
    "paperUrl": "https://www.biorxiv.org/content/10.1101/2025.04.03.646459v1",
    "llms": [
      "GPT-4o"
    ],
    "role": "workflow",
    "roleLabel": "Programming & workflow",
    "stages": [
      "Target discovery",
      "Target validation"
    ],
    "evalCode": "E2",
    "evalLabel": "Tool-use / workflow evaluation"
  },
  {
    "id": "a13",
    "n": 13,
    "symbol": "Dp",
    "name": "DrugPilot",
    "org": "Wuhan University, Griffith University",
    "orgType": "academia",
    "description": "ReAct/LlamaIndex LLM agent with a parameterized memory pool that plans and calls tools across eight drug-discovery tasks including generation, affinity and ADMET.",
    "github": "wzn99",
    "stars": 23,
    "created": "2025-03-28",
    "year": 2025,
    "license": "MIT",
    "paperTitle": "DrugPilot: LLM-based Parameterized Reasoning Agent for Drug Discovery",
    "doi": "10.48550/arXiv.2505.13940",
    "repoUrl": "https://github.com/wzn99/DrugPilot",
    "paperUrl": "https://arxiv.org/abs/2505.13940",
    "llms": [
      "Llama-3.1-8B"
    ],
    "role": "workflow",
    "roleLabel": "Programming & workflow",
    "stages": [
      "Hit discovery",
      "Lead optimization",
      "Synthesis",
      "Preclinical"
    ],
    "evalCode": "E3",
    "evalLabel": "Computational discovery evaluation"
  },
  {
    "id": "a14",
    "n": 14,
    "symbol": "Ad",
    "name": "agentD",
    "org": "Carnegie Mellon University, University of Nebraska, Texas A&M University",
    "orgType": "academia",
    "description": "Modular LLM agent (agentD) that coordinates literature extraction, property prediction, molecule generation and REINVENT4 tools for small-molecule discovery.",
    "github": "hoon-ock",
    "stars": 45,
    "created": "2025-05-06",
    "year": 2025,
    "license": "MIT",
    "paperTitle": "Large Language Model Agent for Modular Task Execution in Drug Discovery",
    "doi": "10.1021/acs.jcim.5c02454",
    "repoUrl": "https://github.com/hoon-ock/AgentD",
    "paperUrl": "https://pubs.acs.org/doi/10.1021/acs.jcim.5c02454",
    "llms": [
      "GPT-4o"
    ],
    "role": "workflow",
    "roleLabel": "Programming & workflow",
    "stages": [
      "Target discovery",
      "Hit discovery",
      "Lead optimization",
      "Synthesis"
    ],
    "evalCode": "E3",
    "evalLabel": "Computational discovery evaluation"
  },
  {
    "id": "a15",
    "n": 15,
    "symbol": "Rb",
    "name": "Robin",
    "org": "FutureHouse",
    "orgType": "nonprofit",
    "description": "Multi-agent discovery system that, given a disease, ranks experimental assays and therapeutic candidates from literature and can analyse follow-up in-vitro results via Finch.",
    "github": "Future-House",
    "stars": 723,
    "created": "2025-05-19",
    "year": 2025,
    "license": "Apache-2.0",
    "paperTitle": "A multi-agent system for automating scientific discovery",
    "doi": "10.1038/s41586-026-10652-y",
    "repoUrl": "https://github.com/Future-House/robin",
    "paperUrl": "https://www.nature.com/articles/s41586-026-10652-y",
    "llms": [
      "GPT-4o-mini",
      "Claude 3.7 Sonnet",
      "Crow",
      "Falcon"
    ],
    "role": "loop",
    "roleLabel": "Autonomous & closed-loop",
    "stages": [
      "Target discovery",
      "Target validation",
      "Preclinical"
    ],
    "evalCode": "E6",
    "evalLabel": "Prospective / closed-loop evaluation"
  },
  {
    "id": "a16",
    "n": 16,
    "symbol": "Ce",
    "name": "CellAtria",
    "org": "AstraZeneca",
    "orgType": "company",
    "description": "Agentic AI framework that uses an LLM with graph-based multi-actor orchestration to ingest, standardize, and analyze single-cell RNA-seq data.",
    "github": "AstraZeneca",
    "stars": 91,
    "created": "2025-07-29",
    "year": 2025,
    "license": "Apache-2.0",
    "paperTitle": "An agentic AI framework for ingestion and standardization of single-cell RNA-seq data analysis",
    "doi": "10.1038/s44387-025-00064-0",
    "repoUrl": "https://github.com/AstraZeneca/cellatria",
    "paperUrl": "https://www.nature.com/articles/s44387-025-00064-0",
    "llms": [
      "GPT-4o",
      "GPT-4o-mini"
    ],
    "role": "workflow",
    "roleLabel": "Programming & workflow",
    "stages": [
      "Target discovery",
      "Target validation"
    ],
    "evalCode": "E2",
    "evalLabel": "Tool-use / workflow evaluation"
  },
  {
    "id": "a17",
    "n": 17,
    "symbol": "Li",
    "name": "LIDDiA",
    "org": "The Ohio State University",
    "orgType": "academia",
    "description": "LIDDiA stands for Language-based Intelligent Drug Discovery Agent. A Reasoner–Executor–Evaluator–Memory agent from Xia Ning’s lab that calls generative and scoring tools to design and screen small-molecule candidates in silico.",
    "github": "ninglab",
    "stars": 9,
    "created": "2025-08-15",
    "year": 2025,
    "license": null,
    "paperTitle": "LIDDiA: Language-based Intelligent Drug Discovery Agent",
    "doi": "10.48550/arXiv.2502.13959",
    "repoUrl": "https://github.com/ninglab/LIDDIA",
    "paperUrl": "https://arxiv.org/abs/2502.13959",
    "llms": [
      "Claude 3.5 Sonnet"
    ],
    "role": "discovery",
    "roleLabel": "Computational discovery",
    "stages": [
      "Hit discovery",
      "Lead optimization"
    ],
    "evalCode": "E3",
    "evalLabel": "Computational discovery evaluation"
  },
  {
    "id": "a18",
    "n": 18,
    "symbol": "Sb",
    "name": "SABLE",
    "org": "University of North Carolina at Chapel Hill",
    "orgType": "academia",
    "description": "LLM-orchestrated hit-to-lead agent that enumerates reaction-templated analogs, scores ADMET and affinity, and runs Bayesian optimization as a computational DMTA twin.",
    "github": "molecularmodelinglab",
    "stars": 3,
    "created": "2025-08-25",
    "year": 2025,
    "license": "Apache-2.0",
    "paperTitle": "A Modular Agentic Framework for Synthetically Constrained Multi-Objective Hit-to-Lead Optimization",
    "doi": "10.48550/arXiv.2608.11483",
    "repoUrl": "https://github.com/molecularmodelinglab/SABLE",
    "paperUrl": "https://arxiv.org/abs/2608.11483",
    "llms": [
      "GPT-5"
    ],
    "role": "discovery",
    "roleLabel": "Computational discovery",
    "stages": [
      "Lead optimization"
    ],
    "evalCode": "E3",
    "evalLabel": "Computational discovery evaluation"
  },
  {
    "id": "a19",
    "n": 19,
    "symbol": "Cp",
    "name": "CP-Agent",
    "org": "University of Hong Kong, Nvidia AI Technology Center, Advanced Biomedical Instrumentation Centre",
    "orgType": "academia, company",
    "description": "CP stands for context-aware. A multimodal LLM agent that reasons over Cell Painting images and experimental context to explain morphological changes under chemical perturbations.",
    "github": "letitia-zhang",
    "stars": 1,
    "created": "2025-09-25",
    "year": 2025,
    "license": null,
    "paperTitle": "CP-Agent: Context-Aware Multimodal Reasoning for Cellular Morphological Profiling under Chemical Perturbations",
    "doi": "10.48550/arXiv.2606.03435",
    "repoUrl": "https://github.com/letitia-zhang/CP-Agent",
    "paperUrl": "https://arxiv.org/abs/2606.03435",
    "llms": [
      "GPT-5",
      "Claude 4 Sonnet",
      "Gemini 2.5 Pro",
      "Grok-4"
    ],
    "role": "hypothesis",
    "roleLabel": "Hypothesis generation",
    "stages": [
      "Target validation",
      "Preclinical"
    ],
    "evalCode": "E4",
    "evalLabel": "Expert evaluation"
  },
  {
    "id": "a20",
    "n": 20,
    "symbol": "Rp",
    "name": "RepurAgent",
    "org": "Uppsala University, Karolinska Institutet, Pixl Bio, Fraunhofer Institute for Translational Medicine and Pharmacology, University of Helsinki, University Medical Centre Göttingen",
    "orgType": "academia",
    "description": "Human-in-the-loop multi-agent system for drug repurposing that plans, mines literature and databases, predicts properties and drafts reports.",
    "github": "pharmbio",
    "stars": 22,
    "created": "2025-11-08",
    "year": 2025,
    "license": null,
    "paperTitle": "Human-supervised Agentic AI for Hypothesis Generation and Experimental Assistance in Drug Repurposing",
    "doi": "10.64898/2026.04.20.719538",
    "repoUrl": "https://github.com/pharmbio/repuragent",
    "paperUrl": "https://doi.org/10.64898/2026.04.20.719538",
    "llms": [
      "GPT-4o",
      "GPT-5-mini",
      "GPT-5.2"
    ],
    "role": "loop",
    "roleLabel": "Autonomous & closed-loop",
    "stages": [
      "Repurposing"
    ],
    "evalCode": "E3",
    "evalLabel": "Computational discovery evaluation"
  },
  {
    "id": "a21",
    "n": 21,
    "symbol": "Cl",
    "name": "CLADD",
    "org": "Genentech, Korea Advanced Institute of Science and Technology (KAIST)",
    "orgType": "company, academia",
    "description": "Official code for RAG-enhanced collaborative LLM agents that plan, retrieve biomedical context, and predict drug properties without domain fine-tuning.",
    "github": "Genentech",
    "stars": 27,
    "created": "2025-11-12",
    "year": 2025,
    "license": "Apache-2.0",
    "paperTitle": "RAG-Enhanced Collaborative LLM Agents for Drug Discovery",
    "doi": "10.48550/arXiv.2502.17506",
    "repoUrl": "https://github.com/Genentech/CLADD",
    "paperUrl": "https://ojs.aaai.org/index.php/AAAI/article/view/37020",
    "llms": [
      "GPT-4o mini",
      "GPT-4o",
      "pre-trained GNNs",
      "GraphMVP",
      "MoleculeSTM"
    ],
    "role": "knowledge",
    "roleLabel": "Interfaces & knowledge",
    "stages": [
      "Target discovery",
      "Hit discovery",
      "Lead optimization",
      "Preclinical"
    ],
    "evalCode": "E1",
    "evalLabel": "Knowledge / reasoning benchmark"
  },
  {
    "id": "a22",
    "n": 22,
    "symbol": "Se",
    "name": "SEISMO",
    "org": "Bayer, Technical University of Munich, Helmholtz Munich, Universitat de Barcelona, BIGCHEM GmbH",
    "orgType": "company, academia",
    "description": "Bayer/TUM/Helmholtz LangGraph LLM agent (SEISMO) that proposes molecules online from the full optimization trajectory and oracle feedback for sample-efficient lead optimisation.",
    "github": "FabianKruger",
    "stars": 17,
    "created": "2025-12-01",
    "year": 2025,
    "license": "MIT",
    "paperTitle": "SEISMO: Increasing Sample Efficiency in Molecular Optimization with a Trajectory-Aware LLM Agent",
    "doi": "10.48550/arXiv.2602.00663",
    "repoUrl": "https://github.com/FabianKruger/molecule-optimization-agent",
    "paperUrl": "https://arxiv.org/abs/2602.00663",
    "llms": [
      "Claude Opus 4.5"
    ],
    "role": "discovery",
    "roleLabel": "Computational discovery",
    "stages": [
      "Lead optimization"
    ],
    "evalCode": "E3",
    "evalLabel": "Computational discovery evaluation"
  },
  {
    "id": "a23",
    "n": 23,
    "symbol": "Ap",
    "name": "AgentPeptide",
    "org": "Carnegie Mellon University",
    "orgType": "academia",
    "description": "MCP server and CLI agent that calls peptide generators, property predictors and mutation tools to design and refine therapeutic sequences.",
    "github": "houxuc-rgb",
    "stars": 0,
    "created": "2026-02-09",
    "year": 2026,
    "license": "MIT",
    "paperTitle": "Pepti-Agent: An AI Agent for Peptide Design and Optimization",
    "doi": "10.48550/arXiv.2606.15422",
    "repoUrl": "https://github.com/houxuc-rgb/AgentPeptide",
    "paperUrl": "https://arxiv.org/abs/2606.15422",
    "llms": [
      "Claude Sonnet 4.6"
    ],
    "role": "discovery",
    "roleLabel": "Computational discovery",
    "stages": [
      "Hit discovery",
      "Lead optimization",
      "Preclinical"
    ],
    "evalCode": "E3",
    "evalLabel": "Computational discovery evaluation"
  },
  {
    "id": "a24",
    "n": 24,
    "symbol": "Ci",
    "name": "ChatInvent",
    "org": "AstraZeneca, Chalmers University of Technology, University of Gothenburg",
    "orgType": "company, academia",
    "description": "Open-source ChatInvent/LangDMTA: a supervisor LLM delegates to Design, Synthesis, Analyzer, and Utility agents for compound generation, scoring, and synthesis planning.",
    "github": "MolecularAI",
    "stars": 2,
    "created": "2026-02-25",
    "year": 2026,
    "license": "Apache-2.0",
    "paperTitle": "Democratising real-world drug discovery through agentic AI",
    "doi": "10.1016/j.drudis.2026.104605",
    "repoUrl": "https://github.com/MolecularAI/langdmta-lab",
    "paperUrl": "https://doi.org/10.1016/j.drudis.2026.104605",
    "llms": [
      "GPT-3.5 Turbo",
      "GPT-4 Turbo",
      "GPT-4o"
    ],
    "role": "discovery",
    "roleLabel": "Computational discovery",
    "stages": [
      "Hit discovery",
      "Lead optimization",
      "Synthesis"
    ],
    "evalCode": "E2",
    "evalLabel": "Tool-use / workflow evaluation"
  },
  {
    "id": "a25",
    "n": 25,
    "symbol": "Dc",
    "name": "DrugClaw",
    "org": "University of Florida, University of Macau",
    "orgType": "academia",
    "description": "LangGraph agentic RAG runtime for evidence-grounded drug questions spanning targets, repurposing, ADRs, DDIs and pharmacogenomics.",
    "github": "QSong-github",
    "stars": 116,
    "created": "2026-03-13",
    "year": 2026,
    "license": null,
    "paperTitle": "DrugClaw and DrugAudit: A Primary-Source-Grounded Agent and Authority-Aware Benchmark for Drug-Information Question Answering",
    "doi": "10.48550/arXiv.2606.01434",
    "repoUrl": "https://github.com/QSong-github/DrugClaw",
    "paperUrl": "https://arxiv.org/abs/2606.01434",
    "llms": [
      "GPT-5-mini"
    ],
    "role": "knowledge",
    "roleLabel": "Interfaces & knowledge",
    "stages": [
      "Repurposing",
      "Clinical/translational"
    ],
    "evalCode": "E1",
    "evalLabel": "Knowledge / reasoning benchmark"
  },
  {
    "id": "a26",
    "n": 26,
    "symbol": "Vc",
    "name": "VCR-Agent",
    "org": "Recursion Pharmaceuticals, Korea Advanced Institute of Science and Technology (KAIST), Valence Labs, University College London",
    "orgType": "company, academia",
    "description": "Multi-agent system that retrieves biological knowledge and verifier-filters mechanistic explanations for virtual-cell perturbation reasoning.",
    "github": "valence-labs",
    "stars": 14,
    "created": "2026-04-15",
    "year": 2026,
    "license": null,
    "paperTitle": "Towards Autonomous Mechanistic Reasoning in Virtual Cells",
    "doi": "10.48550/arXiv.2604.11661",
    "repoUrl": "https://github.com/valence-labs/VCR-Agent",
    "paperUrl": "https://arxiv.org/abs/2604.11661",
    "llms": [
      "Claude 4"
    ],
    "role": "hypothesis",
    "roleLabel": "Hypothesis generation",
    "stages": [
      "Target validation",
      "Preclinical"
    ],
    "evalCode": "E4",
    "evalLabel": "Expert evaluation"
  },
  {
    "id": "a27",
    "n": 27,
    "symbol": "Or",
    "name": "Orion",
    "org": "Genentech, University of Hong Kong, Stanford University",
    "orgType": "company, academia",
    "description": "Autonomous computer-using agent for biomedical image analysis that combines LLMs with terminal execution and GUI control of tools such as CellProfiler and QuPath.",
    "github": "Genentech",
    "stars": 14,
    "created": "2026-04-23",
    "year": 2026,
    "license": "MIT",
    "paperTitle": "Orion: Towards Lab Automation with Computer-Using Agents",
    "doi": "10.64898/2026.06.13.732095",
    "repoUrl": "https://github.com/Genentech/Orion",
    "paperUrl": "https://doi.org/10.64898/2026.06.13.732095",
    "llms": [
      "Claude Sonnet 4.6"
    ],
    "role": "loop",
    "roleLabel": "Autonomous & closed-loop",
    "stages": [
      "Target validation",
      "Preclinical"
    ],
    "evalCode": "E2",
    "evalLabel": "Tool-use / workflow evaluation"
  },
  {
    "id": "a28",
    "n": 28,
    "symbol": "Mm",
    "name": "MolMem",
    "org": "Northwestern University, AbbVie",
    "orgType": "academia, company",
    "description": "MolMem stands for memory-augmented molecular optimization. A Northwestern REAL Lab multi-turn agentic RL system that uses exemplar and skill memory to optimize lead compounds under a limited oracle budget.",
    "github": "REAL-Lab-NU",
    "stars": 3,
    "created": "2026-05-04",
    "year": 2026,
    "license": null,
    "paperTitle": "MolMem: Memory-Augmented Agentic Reinforcement Learning for Sample-Efficient Molecular Optimization",
    "doi": "10.48550/arXiv.2604.12237",
    "repoUrl": "https://github.com/REAL-Lab-NU/MolMem",
    "paperUrl": "https://arxiv.org/abs/2604.12237",
    "llms": [
      "GPT-4o"
    ],
    "role": "discovery",
    "roleLabel": "Computational discovery",
    "stages": [
      "Lead optimization"
    ],
    "evalCode": "E3",
    "evalLabel": "Computational discovery evaluation"
  },
  {
    "id": "a29",
    "n": 29,
    "symbol": "Di",
    "name": "DrugAgent",
    "cite": "Inoue et al. (2024)",
    "org": "University of Minnesota, National Library of Medicine, Northeastern University, National Cancer Institute, Nanjing University",
    "orgType": "academia",
    "description": "Multi-agent DTI system that reconciles ML scores, knowledge-graph signals and PubMed RAG into an evidence-backed interaction call.",
    "github": "inoue0426",
    "stars": 1,
    "created": "2026-05-22",
    "year": 2026,
    "license": "MIT",
    "paperTitle": "DrugAgent: Reliable Multi-Agent Integration of Conflicting Biomedical Evidence for Drug-Target Interaction Assessment",
    "doi": "10.48550/arXiv.2408.13378",
    "repoUrl": "https://github.com/inoue0426/DrugAgent",
    "paperUrl": "https://arxiv.org/abs/2408.13378",
    "llms": [
      "GPT-5.2"
    ],
    "role": "workflow",
    "roleLabel": "Programming & workflow",
    "stages": [
      "Target discovery",
      "Target validation",
      "Hit discovery"
    ],
    "evalCode": "E1",
    "evalLabel": "Knowledge / reasoning benchmark"
  },
  {
    "id": "a30",
    "n": 30,
    "symbol": "Vb",
    "name": "TheVirtualBiotech",
    "org": "Stanford University",
    "orgType": "academia",
    "description": "Multi-agent therapeutic-discovery framework in which a virtual CSO coordinates scientist agents for target prioritization, validation, modality selection and translation-failure analysis.",
    "github": "harrisongzhang",
    "stars": 112,
    "created": "2026-08-12",
    "year": 2026,
    "license": "MIT",
    "paperTitle": "The Virtual Biotech: A Multi-Agent AI Framework for Therapeutic Discovery and Development",
    "doi": "10.64898/2026.02.23.707551",
    "repoUrl": "https://github.com/harrisongzhang/TheVirtualBiotech",
    "paperUrl": "https://www.biorxiv.org/content/10.64898/2026.02.23.707551v1",
    "llms": [
      "Claude Sonnet 4.5",
      "Claude Haiku 4.5"
    ],
    "role": "knowledge",
    "roleLabel": "Interfaces & knowledge",
    "stages": [
      "Target discovery",
      "Target validation",
      "Preclinical",
      "Clinical/translational"
    ],
    "evalCode": "E4",
    "evalLabel": "Expert evaluation"
  }
];
