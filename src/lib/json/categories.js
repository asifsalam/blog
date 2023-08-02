const categories = [
    {
        id: "200",
        type: "category",
        name: "all",
        title: "all",
        img: "/img/icons/universe-svgrepo-com.svg",
        subCategory: ["all"],
        nArticles: 1093
    },
    {
        id: "240",
        type: "category",
        name: "book",
        title: "books",
        img: "/img/icons/book-svgrepo-com-2.svg",
        subCategory: ["book", "pdf"],
        nArticles: 81
    },
    {
        id: "235",
        type: "category",
        name: "cautionary-tale",
        title: "cautionary tale",
        img: "/img/icons/caution-svgrepo-com.svg",
        subCategory: ["dubious", "peril", "caution", "punditry", "mistake", "dystopian", "challenge", "speculation", "pitfall", "viztortion"],
        nArticles: 102
    },
    {
        id: "245",
        type: "category",
        name: "foundations",
        title: "foundations",
        img: "/img/icons/sprout-tree-svgrepo-com.svg",
        subCategory: ["standard", "principle", "theory", "practice", "concept", "explainer", "overview", "fundamentals"],
        nArticles: 174
    },
    {
        id: "250",
        type: "category",
        name: "inspiration",
        title: "inspiration",
        img: "/img/icons/inspiration-art-svgrepo-com.svg",
        subCategory: ["poetry", "art", "award", "digital-art", "data-art"],
        nArticles: 132
    },
    {
        id: "220",
        type: "category",
        name: "method",
        title: "methods",
        img: "/img/icons/method-chemistry-svgrepo-com.svg",
        subCategory: ["method", "technique", "design"],
        nArticles: 336
    },
    {
        id: "255",
        type: "category",
        name: "my-post",
        title: "my posts",
        img: "/img/logos/geometric-pattern-my-post.jpg",
        subCategory: ["my-post"],
        nArticles: 3
    },
    {
        id: "215",
        type: "category",
        name: "organization",
        title: "organization & process",
        img: "/img/icons/organization-people-group-public-svgrepo-com.svg",
        subCategory: ["process", "organization", "methodology", "workflow", "ecosystem"],
        nArticles: 83
    },
    {
        id: "210",
        type: "category",
        name: "python",
        title: "python",
        img: "/img/icons/python-svgrepo-com.svg",
        subCategory: ["python"],
        nArticles: 50
    },
    {
        id: "205",
        type: "category",
        name: "rstats",
        title: "rstats",
        img: "/img/icons/r-svgrepo-com.svg",
        subCategory: ["rstats"],
        nArticles: 257
    },
    {
        id: "230",
        type: "category",
        name: "technology",
        title: "technology",
        img: "/img/icons/industrial-robot-robot-svgrepo-com.svg",
        subCategory: ["javascript"],
        nArticles: 28
    },
    {
        id: "225",
        type: "category",
        name: "tools",
        title: "tools",
        img: "/img/icons/tools-svgrepo-com.svg",
        subCategory: ["toolbox", "tool", "framework", "toolkit", "package", "feature", "function", "component"],
        nArticles: 224
    }];

const themes = [
    {
        id: "100",
        type: "theme",
        name: "all",
        title: "all",
        img: "/img/icons/universe-svgrepo-com.svg",
        nArticles: 1093
    },
    {
        id: "115",
        type: "theme",
        name: "data-analysis",
        title: "data-analysis",
        img: "/img/icons/analytics-graph-svgrepo-com.svg",
        nArticles: 52
    },
    {
        id: "130",
        type: "theme",
        name: "data-driven-enterprise",
        title: "data-driven-enterprise",
        img: "/img/icons/ai-svgrepo-com.svg",
        nArticles: 7
    },
    {
        id: "110",
        type: "theme",
        name: "data-literacy",
        title: "data-literacy",
        img: "/img/icons/analytics-marketing-svgrepo-com.svg",
        nArticles: 7
    },
    {
        id: "120",
        type: "theme",
        name: "data-science",
        title: "data-science",
        img: "/img/icons/data-science-probability-distribution.svg",
        nArticles: 106
    },
    {
        id: "105",
        type: "theme",
        name: "data-viz",
        title: "data-viz",
        img: "/img/icons/analytics-graph-svgrepo-com-3.svg",
        nArticles: 368
    },
    {
        id: "135",
        type: "theme",
        name: "inspiration",
        title: "inspiration",
        img: "/img/icons/inspiration-art-svgrepo-com.svg",
        nArticles: 91
    },
    {
        id: "125",
        type: "theme",
        name: "pitfall",
        title: "pitfall",
        img: "/img/icons/caution-svgrepo-com.svg",
        nArticles: 33
    }
];

const tags = [
    {
        type: "tag",
        name: "level",
        title: "level",
        tags: ["basics", "fundamentals", "speculation", "advanced", "overview", "introduction", "intermediate", "definition", "explainer", "example", "getting-started", "beginner"],
        nArticles: ["38", "14", "0", "7", "42", "30", "10", "4", "72", "84", "6", "1"]
    },
    {
        type: "tag",
        name: "format",
        title: "format",
        tags: ["book", "notebook", "video", "article", "online", "package", "booklet", "site", "quote", "pdf", "audio", "multiformat", "application", "poetry", "service", "website", "podcast", "slides", "app", "interactive", "blog", "talk", "course", "presentation", "lecture", "post", "interview", "paper", "website"],
        nArticles: ["80", "2", "31", "69", "14", "93", "1", "32", "1", "1", "1", "0", "8", "1", "1", "0", "15", "4", "15", "19", "11", "13", "53", "7", "6", "562", "12", "28", "0"]
    },
    {
        type: "tag",
        name: "style",
        title: "style",
        tags: ["promise", "dubious", "caution", "mistake", "dystopian", "cautionary-tale", "peril", "challenge", "punditry"],
        nArticles: ["1", "23", "24", "1", "1", "22", "12", "4", "2"]
    },
    {
        type: "tag",
        name: "type",
        title: "type",
        tags: ["guide", "review", "recommendation", "repo", "template", "docs", "report", "gallery", "viewpoint", "formal", "taxonomy", "opinion", "case", "pr", "general", "discussion", "cheatsheet", "architecture", "essay", "exercise", "resource", "tutorial", "reference", "statement", "description", "code", "research", "project", "list", "news", "advice", "dataset", "certification", "recipe", "how-to", "demo", "perspective", "visual", "source", "terminology", "tip", "infographic"],
        nArticles: ["42", "19", "16", "4", "1", "4", "2", "1", "6", "1", "1", "22", "5", "101", "71", "1", "11", "1", "1", "5", "15", "137", "2", "1", "5", "10", "41", "8", "83", "8", "36", "22", "4", "1", "125", "3", "19", "53", "20", "1", "16", "9"]
    },
    {
        type: "tag",
        name: "topic",
        title: "topic",
        tags: ["toolkit", "design", "toolbox", "method", "workflow", "health", "data-art", "technique", "platform", "data", "standard", "use-case", "framework", "component", "tool", "principle", "function", "feature", "ecosystem", "process", "benefit", "technology", "root-cause", "guideline", "organization", "privacy", "practice", "methodology", "knowledge-management", "open", "infrastructure", "roadmap", "concept", "theory"],
        nArticles: ["2", "41", "0", "65", "10", "2", "3", "230", "2", "574", "2", "1", "3", "2", "110", "6", "3", "11", "1", "40", "2", "458", "1", "0", "5", "1", "4", "27", "1", "9", "1", "1", "29", "5"]
    },
    {
        type: "tag",
        name: "technology",
        title: "technology",
        tags: ["ggplot", "kubernetes", "python", "observable", "svelte", "nasa", "data-illustrator", "keras", "ggmap", "html", "tidyverse", "sql", "rl", "world-bank", "dendogram", "javascript", "powerbi", "lodash", "weapons", "azure", "arcgis", "spark", "d3js", "stamen-maps", "google", "tableau", "plot", "slopegraph", "docker", "chord", "rstats", "mongodb", "storage", "postgres", "generative", "highcharter", "powerpoint", "vega", "kibana", "radial-tree", "jupyter", "software", "pandas", "highchart", "dax", "leaflet", "excel", "open-source", "svg", "matplotlib", "tensorflow", "word", "lasso", "css", "t-sne", "chat-bot", "canvas", "bezier", "looker", "pca", "ggplot2", "dnn"],
        nArticles: ["34", "1", "50", "1", "0", "1", "1", "1", "1", "2", "24", "4", "4", "1", "1", "28", "11", "1", "1", "3", "1", "1", "67", "1", "2", "3", "36", "1", "1", "1", "257", "1", "0", "1", "6", "1", "6", "1", "1", "1", "2", "0", "1", "1", "1", "2", "6", "5", "5", "2", "5", "1", "1", "3", "5", "1", "2", "1", "1", "2", "17", "1"]
    },
    {
        type: "tag",
        name: "area",
        title: "area",
        tags: ["survival-analysis", "finance", "k-means", "bayesian", "bi", "survey", "text-mining", "usage", "philosophy", "project-management", "predictive-maintenance", "anomaly-detection", "predictive-modeling", "mfa", "glm", "image-processing", "classification", "eda", "reproducible-research", "web-scraping", "animation", "regression", "timeseries", "big-data", "sports", "mlops", "quality", "analysis", "development", "model", "ops", "exploration", "data-story", "interaction", "open-data", "deployment", "data-driven-decision", "coding", "inference", "statistics", "automation", "effect", "clustering", "scientific-method", "geospatial", "forecasting", "network-graph", "dl", "data-preparation", "api", "dashboard", "cpi", "ml-project-management", "nosql", "probability", "data-mining", "unit-test", "drl", "periodic", "monte-carlo", "imputation", "ab-testing", "interpretation", "encoding", "feature-visualization", "unsupervised", "logic", "graphics", "image-generation", "image-recognition", "lda", "causality", "style", "feature-selection", "simulation", "journalism", "data-governance", "hardware", "optimization", "polling", "pie-chart", "vision", "uncertainty", "real-time", "palette", "database", "data-driven", "testing", "hierarchichal-model", "flow-field", "count", "zero-inflated", "search", "self-driving-car", "food", "gam", "no-code", "lingtypology", "history", "analytics", "stats", "ml", "nlp", "data-processing", "colour", "ai", "3d", "graph", "chart", "feature-engineering"],
        nArticles: ["1", "1", "1", "5", "42", "3", "9", "4", "2", "3", "0", "2", "3", "1", "1", "1", "3", "3", "0", "6", "26", "4", "8", "6", "4", "6", "1", "56", "48", "10", "7", "3", "8", "1", "3", "3", "2", "2", "5", "53", "4", "1", "5", "2", "58", "10", "10", "23", "19", "7", "2", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "2", "2", "1", "2", "1", "1", "1", "1", "1", "1", "2", "1", "1", "2", "5", "1", "3", "1", "1", "1", "2", "1", "3", "3", "4", "10", "3", "1", "1", "1", "1", "42", "1", "1", "1", "1", "1", "1", "12", "257", "153", "12", "14", "32", "122", "10", "33", "31", "4"]
    },

    {
        type: "tag",
        name: "other",
        title: "other",
        tags: ["writing", "science", "vintage", "purpose", "population", "film", "validation", "sankey", "press", "medicine", "cricket", "interesting", "maturity", "betting", "reproducible", "ethics", "toread", "annotation", "semantic", "export", "my-post", "brain", "unique", "mathematics", "biology", "image", "eating", "expert", "misuse", "mortality", "investing", "communication", "accident", "inspiration", "digital-art", "environment", "experiment", "training", "data-discovery", "microsoft", "google-viz", "misc", "outlier", "storytelling", "award", "art", "random-forest", "humour", "viztortion", "geometric", "competition", "reproducability", "perception", "formula", "paid", "free", "abuse"],
        nArticles: ["1", "117", "1", "1", "1", "1", "1", "3", "1", "1", "1", "2", "1", "1", "2", "1", "1", "1", "1", "1", "3", "1", "1", "6", "1", "4", "1", "1", "2", "1", "1", "1", "1", "91", "1", "2", "1", "6", "1", "3", "1", "1", "2", "14", "2", "125", "1", "3", "2", "1", "2", "1", "3", "1", "6", "25", "1"]
    }
];

const allThemes =
    ['all',
        'datadrivenenterprise',
        'dataliteracy',
        'dataviz',
        'method',
        'mypost',
        'pitfall',
        'inspiration',
        'process'
    ];

const allCategories = [
    {
        id: 0,
        category: 'all',
        title: 'All',
        subCategory: ['all'],
        img: '/img/icons/book-svgrepo-com-2.svg',
        numArticles: 95,
        type: 'all'
    },
    {
        id: 1,
        category: 'mypost',
        title: 'My posts',
        subCategory: ['mypost'],
        img: '/img/icons/book-svgrepo-com-2.svg',
        numArticles: 0,
        type: 'mypost'
    },

    {
        id: 100,
        category: 'all',
        title: 'All',
        subCategory: ['all'],
        img: '/img/icons/book-svgrepo-com-2.svg',
        numArticles: 10,
        type: 'category'
    },
    {
        id: 102,
        category: 'guidedlearning',
        subCategory: ['learning', 'tutorial', 'course', 'contest'],
        title: 'Guided Learning',
        img: '/img/icons/tutorials-svgrepo-com.svg',
        numArticles: 15,
        type: 'category'
    },
    {
        id: 103,
        category: 'rstats',
        subCategory: ['rstats'],
        title: 'Rstats',
        img: '/img/icons/r-svgrepo-com.svg',
        numArticles: 17,
        type: 'category'
    },
    {
        id: 104,
        category: 'python',
        subCategory: ['python'],
        title: 'Python',
        img: '/img/icons/python-svgrepo-com.svg',
        numArticles: 23,
        type: 'category'
    },
    {
        id: 105,
        category: 'method',
        title: 'Methods',
        subCategory: ['method', 'model'],
        img: '/img/icons/method-chemistry-svgrepo-com.svg',
        numArticles: 19,
        type: 'category'
    },
    {
        id: 106,
        category: 'organization',
        title: 'Organization & Process',
        subCategory: ['organization', 'process'],
        img: '/img/icons/organization-people-group-public-svgrepo-com.svg',
        img2: '/img/icons/process-graph-svgrepo-com.svg',
        numArticles: 6,
        type: 'category'
    },
    {
        id: 107,
        category: 'inspiration',
        title: 'Inspiration',
        subCategory: ['newsletter', 'inspiration', 'example'],
        img: '/img/icons/inspiration-art-svgrepo-com.svg',
        numArticles: 7,
        type: 'category'
    },
    {
        id: 108,
        category: 'cautionarytale',
        title: 'Cautionary Tales',
        subCategory: ['cautionarytale', 'pitfall'],
        img: '/img/icons/caution-svgrepo-com.svg',
        numArticles: 5,
        type: 'category'
    },
    {
        id: 201,
        category: 'dataviz',
        title: 'dataviz',
        subCategory: ['dataviz', 'chart', 'graph', 'visualization', 'visual'],
        img: '/img/icons/caution-svgrepo-com.svg',
        numArticles: 15,
        type: 'theme'
    },
    {
        id: 202,
        category: 'technique',
        title: 'Technique',
        subCategory: ['technique', 'method'],
        img: '/img/icons/caution-svgrepo-com.svg',
        numArticles: 5,
        type: 'theme'
    },
    {
        id: 203,
        category: 'pitfall',
        title: 'Pitfall',
        subCategory: ['cautionarytale', 'pitfall'],
        img: '/img/icons/caution-svgrepo-com.svg',
        numArticles: 5,
        type: 'theme'
    },
    {
        id: 204,
        category: 'datadrivenenterprise',
        title: 'Data Driven Enterprise',
        subCategory: ['datadrivenenterprise'],
        img: '/img/icons/caution-svgrepo-com.svg',
        numArticles: 10,
        type: 'theme'
    },
    {
        id: 205,
        category: 'dataliteracy',
        title: 'Data Literacy',
        subCategory: ['dataliteracy'],
        img: '/img/icons/caution-svgrepo-com.svg',
        numArticles: 13,
        type: 'theme'
    },
    {
        id: 206,
        category: 'inspiration',
        title: 'Inspiration',
        subCategory: ['art', 'literature', 'poetry', 'music', 'newsletter', 'example'],
        img: '/img/icons/caution-svgrepo-com.svg',
        numArticles: 5,
        type: 'theme'
    },
    {
        id: 207,
        category: 'process',
        title: 'Process',
        subCategory: ['workflow', 'process'],
        img: '/img/icons/caution-svgrepo-com.svg',
        numArticles: 5,
        type: 'theme'
    }

];

const allTopics = [
    'all',
    'mypost',
    'datadrivenenterprise',
    'rstats',
    'python',
    'tutorial',
    'book',
    'machinelearning',
    'datascience',
    'statistics',
    'dataliteracy',
    'art',
    'dataviz',
    'method',
    'process',
    'workflow',
    'tool',
    'technology',
    'literature',
    'poetry',
    'music',
    'newsletter',
    'example'
]

export { themes, categories, tags, allCategories, allThemes, allTopics }