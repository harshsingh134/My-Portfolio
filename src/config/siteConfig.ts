import {
  CertificationItem,
  LearningStage,
  PortfolioProject,
  ProjectFilterTag,
  SkillCategory,
  TechnicalNote,
} from "@/types/portfolio";

/**
 * Helper to check if a config field is still a placeholder or empty.
 * Following strict portfolio credibility rules:
 * - Never invent missing links, metrics, universities, or credentials.
 * - Only render live external buttons when a real URL is configured.
 */
export function isValidExternalUrl(url?: string | null): boolean {
  if (!url) return false;
  const trimmed = url.trim();
  if (!trimmed || trimmed.startsWith("[ADD")) return false;
  return trimmed.startsWith("http://") || trimmed.startsWith("https://");
}

export function isPlaceholderValue(value?: string | null): boolean {
  if (!value) return true;
  return value.trim().startsWith("[ADD");
}

/**
 * HERO HEADLINE CANDIDATES (Section 43 Requirement)
 * Generated strictly from Harsh Singh's verified profile and projects.
 */
export const heroHeadlineCandidates = [
  {
    id: "option-1-selected",
    selected: true,
    headline: "Turning Raw Data Into Practical Models & Interactive Applications.",
    supportingSentence:
      "I am Harsh Singh, a B.Tech Computer Science & Engineering student (Class of 2027) building end-to-end data science workflows—from exploratory data analysis and feature engineering in Python to predictive modeling and interactive Streamlit apps.",
    primaryCta: "View Projects",
    secondaryCta: "Explore GitHub",
    selectionRationale:
      "Selected as the strongest option because it immediately tells a technical recruiter what Harsh actually builds (data pipelines, predictive models, and interactive apps) within 5 seconds, without clichés or inflated seniority claims.",
  },
  {
    id: "option-2",
    selected: false,
    headline: "Learning Data Science & Machine Learning by Building Real Projects.",
    supportingSentence:
      "B.Tech CSE '27 undergraduate focused on Python, Pandas, Scikit-learn, and SQL—translating messy datasets like hardware pricing tables and unstructured chat logs into clean features, evaluated models, and usable tools.",
    primaryCta: "Inspect Case Studies",
    secondaryCta: "View GitHub",
    selectionRationale:
      "Highly authentic and growth-oriented; frames continuous learning clearly while naming concrete technologies.",
  },
  {
    id: "option-3",
    selected: false,
    headline: "From Exploratory Analysis to Deployed Streamlit Applications.",
    supportingSentence:
      "Computer Science student graduating in 2027 focused on the practical machine learning lifecycle: data cleaning, regex text parsing, feature engineering, regression/classification, and lightweight deployment.",
    primaryCta: "Browse Projects",
    secondaryCta: "Read Resume",
    selectionRationale:
      "Strong workflow focus mirroring Data → Analysis → Machine Learning → Deployment.",
  },
];

export const siteConfig = {
  // 1. Core Identity (Verified from Resume & GitHub)
  name: "Harsh Singh",
  role: "Data Science & Machine Learning Practitioner",
  academicStatus: "B.Tech in Computer Science & Engineering (Graduating 2027)",
  positioningStatement:
    "I am a continuously learning Data Science/ML practitioner who learns by building real projects and turning data into useful applications.",
  location: "India",
  availabilityBadge: "Open to Data Science & ML Internships (2026 / 2027)",

  // 2. Contact & Social Links
  // Note: Email verified from harshsingh134 public GitHub commit author metadata;
  // LinkedIn and Live Demo URLs use explicit placeholders until provided.
  email: "harshhsingh9889@gmail.com",
  githubUsername: "harshsingh134",
  githubUrl: "https://github.com/harshsingh134",
  linkedinUrl: "[ADD LINK]", // Replace with your actual LinkedIn profile URL, e.g. "https://www.linkedin.com/in/..."
  kaggleUrl: "[ADD LINK]", // Replace with your Kaggle profile URL when ready
  resumePdfPath: "/resume/Harsh_Singh_Resume.pdf",
  resumeFileExists: false, // Set to true once you place your actual PDF at public/resume/Harsh_Singh_Resume.pdf

  // 3. Hero Section Copy
  hero: {
    eyebrow: "B.Tech CSE ’27 · Data Science & Machine Learning",
    headline: heroHeadlineCandidates[0].headline,
    supportingText: heroHeadlineCandidates[0].supportingSentence,
    pipelineStages: [
      {
        id: "data",
        step: "01",
        label: "Data",
        title: "Raw Data Ingestion & Cleaning",
        tools: ["Python", "Pandas", "SQL", "Regex"],
        realExample:
          "Cleaned 1,303 laptop records (`laptop_data.csv`) & parsed raw UTF-8 WhatsApp `.txt` exports using regex timestamp splitting.",
        codePreview: `df['Ram'] = df['Ram'].str.replace('GB', '').astype('int32')\ndf['Weight'] = df['Weight'].str.replace('kg', '').astype('float32')`,
      },
      {
        id: "analysis",
        step: "02",
        label: "Analysis",
        title: "EDA & Feature Engineering",
        tools: ["NumPy", "Matplotlib", "Seaborn", "PCA"],
        realExample:
          "Engineered Pixels-Per-Inch (PPI) from screen resolution strings, extracted binary IPS/Touchscreen flags, and analyzed price correlations.",
        codePreview: `df['ppi'] = (((df['x_res']**2) + (df['y_res']**2))**0.5 / df['Inches']).astype('float')\ndf.corr(numeric_only=True)['Price']`,
      },
      {
        id: "ml",
        step: "03",
        label: "Machine Learning",
        title: "Modeling & Pipeline Evaluation",
        tools: ["Scikit-learn", "ColumnTransformer", "Regression", "Classification"],
        realExample:
          "Built reproducible Scikit-learn pipelines combining imputation, OneHotEncoding, scaling, and supervised models.",
        codePreview: `pipe = Pipeline([\n  ('step1', col_transformer),\n  ('step2', regressor_model)\n])`,
      },
      {
        id: "deployment",
        step: "04",
        label: "Deployment",
        title: "Interactive Streamlit Applications",
        tools: ["Streamlit", "Git", "GitHub"],
        realExample:
          "Packaged laptop price inference and WhatsApp chat activity timelines into interactive Streamlit interfaces.",
        codePreview: `st.title("Laptop Price Predictor")\npredicted_price = np.exp(pipe.predict(query_df)[0])`,
      },
    ],
  },

  // 4. Humanized About Story (Section 6)
  about: {
    headline: "Learning how data behaves by building from scratch.",
    leadParagraph:
      "I am a Computer Science & Engineering undergraduate (graduating in 2027) with a strong focus on Data Science and Machine Learning. My interest in the field started with a simple curiosity: how raw, messy data—like a table of laptop hardware specs or an unformatted text file of thousands of chat messages—can be cleaned, structured, and turned into something genuinely informative.",
    bodyParagraphs: [
      "Rather than treating machine learning as a black box of library calls, I prefer working through the entire lifecycle step by step. In my notebooks and projects, I spend significant time on the fundamentals that actually drive model quality: parsing unstructured strings with regular expressions, handling missing values, engineering domain features like screen Pixels Per Inch (PPI), testing encoding and scaling strategies, and inspecting distributions with Matplotlib and Seaborn.",
      "I build applications with tools like Streamlit because a model or analysis is most valuable when someone else can interact with it. Right now, I am strengthening my foundation in statistical modeling, Scikit-learn pipelines, SQL, and neural network fundamentals (Perceptrons and ANNs), while looking for Data Science and Machine Learning internship opportunities where I can contribute to real-world data problems and learn from experienced engineers.",
    ],
    quickFacts: [
      {
        label: "Current Degree",
        value: "B.Tech in Computer Science & Engineering",
        subtext: "Expected Graduation: 2027",
      },
      {
        label: "University / Institution",
        value: "[ADD UNIVERSITY / INSTITUTION NAME]",
        subtext: "Configure in src/config/siteConfig.ts",
        isPlaceholder: true,
      },
      {
        label: "Primary Stack",
        value: "Python, Pandas, NumPy, Scikit-learn, SQL, Streamlit",
        subtext: "Data analysis, feature engineering & ML apps",
      },
      {
        label: "CS Foundation",
        value: "Java, C, C++, DSA & OOP",
        subtext: "Core computer science & algorithmic problem solving",
      },
    ],
  },

  // 5. "What I Can Do" Practical Capabilities (Section 29)
  capabilities: [
    {
      id: "data-analysis",
      title: "Exploratory Data Analysis",
      description:
        "Clean, validate, and explore structured and semi-structured datasets using Pandas and NumPy to uncover distributions, anomalies, and feature relationships.",
      proofTools: ["Pandas", "NumPy", "Missing Value Imputation"],
      proofLink: "https://github.com/harshsingh134/machineLearning",
      proofLabel: "Verified across 40+ EDA & preprocessing notebooks",
    },
    {
      id: "feature-engineering",
      title: "Feature Engineering & Preprocessing",
      description:
        "Transform raw columns into predictive signals through domain feature extraction, One-Hot & Ordinal Encoding, Z-score standardization, MinMax normalization, and PCA.",
      proofTools: ["ColumnTransformer", "StandardScaler", "PCA", "OneHotEncoder"],
      proofLink:
        "https://github.com/harshsingh134/machineLearning/blob/main/laptop-price-predictor.ipynb",
      proofLabel: "Engineered PPI, IPS & Touchscreen features in Laptop Predictor",
    },
    {
      id: "machine-learning",
      title: "Predictive Modeling & ML Pipelines",
      description:
        "Train and evaluate supervised regression and classification models with Scikit-learn Pipelines that prevent data leakage and streamline inference.",
      proofTools: ["Scikit-learn", "Linear & Logistic Regression", "ML Pipelines"],
      proofLink:
        "https://github.com/harshsingh134/machineLearning/blob/main/pipline.ipynb",
      proofLabel: "End-to-end Pipeline & Logistic Regression implementations",
    },
    {
      id: "data-visualization",
      title: "Statistical Data Visualization",
      description:
        "Communicate trends, correlations, and multi-dimensional projections clearly using Matplotlib, Seaborn, and interactive charts.",
      proofTools: ["Matplotlib", "Seaborn", "Distribution & Correlation Plots"],
      proofLink:
        "https://github.com/harshsingh134/machineLearning/blob/main/seaborn.ipynb",
      proofLabel: "Visual analytics in Seaborn & Matplotlib notebooks",
    },
    {
      id: "ml-applications",
      title: "Interactive ML Web Applications",
      description:
        "Turn trained models and analytical scripts into interactive web dashboards using Streamlit so non-technical users can run predictions and explore insights.",
      proofTools: ["Streamlit", "Python", "Interactive Dashboards"],
      proofLink: "/projects/laptop-price-predictor",
      proofLabel: "Laptop Price Predictor & WhatsApp Chat Analyzer apps",
    },
    {
      id: "text-analytics",
      title: "Text Parsing & Unstructured Data",
      description:
        "Parse raw text logs, extract timestamps and entities with Regular Expressions (Regex), and compute word frequency, emoji usage, and activity timelines.",
      proofTools: ["Regex (re)", "Text Processing", "Temporal Extraction"],
      proofLink:
        "https://github.com/harshsingh134/machineLearning/blob/main/Whatachat.ipynb",
      proofLabel: "Regex chat parser in WhatsApp Chat Analyzer",
    },
  ],

  // 6. Currently Building & Active Growth (Section 30)
  currentlyBuilding: {
    lastUpdated: "October 2026",
    currentProject: {
      title: "Deep Learning Foundations & End-to-End Streamlit ML Pipelines",
      status: "In Progress",
      description:
        "Expanding from classical Scikit-learn regression/classification models into multi-layer Artificial Neural Networks (ANNs) with TensorFlow/Keras while packaging earlier notebook workflows into modular, deployable web apps.",
      repoUrl: "https://github.com/harshsingh134/Deep-learning",
    },
    currentLearningTopic:
      "Artificial Neural Networks (ANN), Backpropagation & Regularization (Dropout) — [ADD CURRENT LEARNING TOPIC IF UPDATED]",
    currentTechnicalFocus:
      "Writing cleaner, modular Scikit-learn Pipelines (`ColumnTransformer` + custom transformers) and improving model evaluation rigor across classification and regression datasets.",
    nextMilestone:
      "Deploy live public Streamlit Cloud demos for both Laptop Price Predictor and WhatsApp Chat Analyzer, and publish complete README documentation with held-out evaluation metrics across all GitHub repositories.",
  },

  // 7. GitHub Automation & Topic Filter Configuration (Sections 10, 11, 12)
  githubAutomation: {
    username: "harshsingh134",
    // Any public repository on github.com/harshsingh134 tagged with one of these topics
    // will automatically be categorized and surfaced by the portfolio data layer:
    featuredTopics: ["featured", "portfolio"],
    supportedFilterTopics: [
      "portfolio",
      "data-science",
      "machine-learning",
      "deep-learning",
      "streamlit",
      "python",
      "sql",
      "featured",
    ],
    // Repositories to exclude from the project showcase (e.g. the portfolio repo itself or config repos)
    excludedRepoNames: ["My-Portfolio", "harshsingh134"],
    // Revalidation interval in seconds (15 minutes) for server-side GitHub API caching
    revalidateSeconds: 900,
  },
};

/**
 * 8. SKILLS TAXONOMY (Section 7)
 * Strictly verified against Resume & GitHub repositories.
 * Zero invented percentage bars. Uses honest status tags and direct evidence links.
 */
export const skillCategories: SkillCategory[] = [
  {
    id: "programming",
    title: "Programming Languages",
    subtitle: "Primary language for data science plus core compiled languages from B.Tech CSE coursework",
    iconName: "Code2",
    skills: [
      {
        name: "Python",
        category: "programming",
        status: "core",
        contextNote:
          "Primary language for data manipulation, regex text processing, ML modeling, and Streamlit app development.",
        evidenceLink: "https://github.com/harshsingh134/machineLearning",
        evidenceLabel: "40+ Python / Jupyter notebooks",
      },
      {
        name: "Java",
        category: "programming",
        status: "practicing",
        contextNote: "Object-oriented programming and computer science coursework.",
      },
      {
        name: "C",
        category: "programming",
        status: "practicing",
        contextNote: "Procedural programming, memory fundamentals, and foundational CS labs.",
      },
      {
        name: "C++",
        category: "programming",
        status: "practicing",
        contextNote: "Data structures, algorithmic problem solving, and OOP implementation.",
      },
    ],
  },
  {
    id: "data-science",
    title: "Data Science & Preprocessing",
    subtitle: "Turning messy tabular and text datasets into clean, model-ready features",
    iconName: "Database",
    skills: [
      {
        name: "Pandas",
        category: "data-science",
        status: "core",
        contextNote:
          "DataFrame manipulation, type casting, duplicate/missing-value handling, groupby aggregations, and datetime indexing.",
        evidenceLink:
          "https://github.com/harshsingh134/machineLearning/blob/main/laptop-price-predictor.ipynb",
        evidenceLabel: "Laptop Price Predictor data wrangling",
      },
      {
        name: "NumPy",
        category: "data-science",
        status: "core",
        contextNote:
          "Vectorized numerical operations, covariance matrix calculation, eigen-decomposition, and mathematical transformations.",
        evidenceLink:
          "https://github.com/harshsingh134/machineLearning/blob/main/pca.ipynb",
        evidenceLabel: "Covariance & eigenvalue computation in pca.ipynb",
      },
      {
        name: "Exploratory Data Analysis (EDA)",
        category: "data-science",
        status: "core",
        contextNote:
          "Univariate/bivariate analysis, target skewness inspection, outlier detection (Z-score), and correlation analysis.",
        evidenceLink:
          "https://github.com/harshsingh134/machineLearning/blob/main/understanding.ipynb",
        evidenceLabel: "EDA notebooks on GitHub",
      },
      {
        name: "Feature Engineering",
        category: "data-science",
        status: "core",
        contextNote:
          "Domain feature construction (e.g., PPI from screen resolution), One-Hot/Ordinal encoding, mixed-variable handling, and scaling.",
        evidenceLink:
          "https://github.com/harshsingh134/machineLearning/blob/main/feature.ipynb",
        evidenceLabel: "Feature scaling & encoding notebooks",
      },
    ],
  },
  {
    id: "machine-learning",
    title: "Machine Learning",
    subtitle: "Supervised modeling, dimensionality reduction, and reproducible Scikit-learn pipelines",
    iconName: "BrainCircuit",
    skills: [
      {
        name: "Scikit-learn",
        category: "machine-learning",
        status: "core",
        contextNote:
          "End-to-end model training, preprocessing transformers, train/test splitting, and evaluation metrics.",
        evidenceLink: "https://github.com/harshsingh134/machineLearning",
        evidenceLabel: "machineLearning repository",
      },
      {
        name: "Regression",
        category: "machine-learning",
        status: "core",
        contextNote:
          "Continuous target prediction including Linear Regression and price estimation workflows.",
        evidenceLink:
          "https://github.com/harshsingh134/machineLearning/blob/main/laptop-price-predictor.ipynb",
        evidenceLabel: "Laptop Price Predictor",
      },
      {
        name: "Logistic Regression & Classification",
        category: "machine-learning",
        status: "core",
        contextNote:
          "Supervised binary and multi-class classification with stratified splits and label encoding.",
        evidenceLink:
          "https://github.com/harshsingh134/machineLearning/blob/main/logistic.ipynb",
        evidenceLabel: "logistic.ipynb",
      },
      {
        name: "PCA (Principal Component Analysis)",
        category: "machine-learning",
        status: "practicing",
        contextNote:
          "Dimensionality reduction using StandardScaler, covariance matrices, eigenvalues/eigenvectors, and 3D component projection.",
        evidenceLink:
          "https://github.com/harshsingh134/machineLearning/blob/main/pca.ipynb",
        evidenceLabel: "pca.ipynb",
      },
      {
        name: "Model Evaluation",
        category: "machine-learning",
        status: "core",
        contextNote:
          "Evaluating models with accuracy score, confusion matrix, precision/recall classification reports, and regression error metrics.",
        evidenceLink:
          "https://github.com/harshsingh134/Deep-learning/blob/main/perception.ipynb",
        evidenceLabel: "Classification report & confusion matrix",
      },
      {
        name: "ML Pipelines",
        category: "machine-learning",
        status: "core",
        contextNote:
          "Chaining SimpleImputer, OneHotEncoder, MinMaxScaler, ColumnTransformer, and estimators into single Scikit-learn Pipelines.",
        evidenceLink:
          "https://github.com/harshsingh134/machineLearning/blob/main/pipline.ipynb",
        evidenceLabel: "pipline.ipynb & column Transformer.ipynb",
      },
    ],
  },
  {
    id: "deep-learning",
    title: "Deep Learning",
    subtitle: "Foundational neural network architectures and supervised learning experiments",
    iconName: "Network",
    skills: [
      {
        name: "Perceptron",
        category: "deep-learning",
        status: "learning",
        contextNote:
          "Single-layer linear classifier experiments, feature scaling sensitivity, and decision boundary evaluation.",
        evidenceLink:
          "https://github.com/harshsingh134/Deep-learning/blob/main/perception.ipynb",
        evidenceLabel: "perception.ipynb",
      },
      {
        name: "Artificial Neural Networks (ANN)",
        category: "deep-learning",
        status: "learning",
        contextNote:
          "Multi-layer feedforward neural networks using TensorFlow/Keras Sequential API, Dense layers, and Dropout regularization.",
        evidenceLink:
          "https://github.com/harshsingh134/Deep-learning/blob/main/ANN.ipynb",
        evidenceLabel: "ANN.ipynb",
      },
    ],
  },
  {
    id: "data-sql",
    title: "Data & Text Querying",
    subtitle: "Relational database querying and unstructured text pattern extraction",
    iconName: "TableProperties",
    skills: [
      {
        name: "SQL",
        category: "data-sql",
        status: "practicing",
        contextNote:
          "Querying relational tables, filtering, joins, aggregations, and structured data retrieval.",
      },
      {
        name: "MySQL",
        category: "data-sql",
        status: "practicing",
        contextNote:
          "Relational database management, schema design, and SQL query execution.",
      },
      {
        name: "Regex / Text Processing",
        category: "data-sql",
        status: "core",
        contextNote:
          "Pattern matching (`re.split`, `re.findall`), timestamp parsing, punctuation/digit stripping, and string feature extraction.",
        evidenceLink:
          "https://github.com/harshsingh134/machineLearning/blob/main/Whatachat.ipynb",
        evidenceLabel: "WhatsApp Chat Analyzer & nlp.ipynb",
      },
    ],
  },
  {
    id: "visualization",
    title: "Data Visualization",
    subtitle: "Exploratory plotting, statistical distributions, and visual storytelling",
    iconName: "BarChart3",
    skills: [
      {
        name: "Matplotlib",
        category: "visualization",
        status: "core",
        contextNote:
          "Customizing subplots, bar charts, scatter plots, histograms, and before/after scaling comparisons.",
        evidenceLink:
          "https://github.com/harshsingh134/machineLearning/blob/main/matplotlib.ipynb",
        evidenceLabel: "matplotlib.ipynb",
      },
      {
        name: "Seaborn",
        category: "visualization",
        status: "core",
        contextNote:
          "Statistical visualizations including `displot`, `barplot`, `scatterplot`, `pairplot`, and correlation heatmaps.",
        evidenceLink:
          "https://github.com/harshsingh134/machineLearning/blob/main/seaborn.ipynb",
        evidenceLabel: "seaborn.ipynb",
      },
    ],
  },
  {
    id: "deployment-tools",
    title: "Deployment & Developer Tools",
    subtitle: "Interactive app delivery, version control, and experimentation environments",
    iconName: "Rocket",
    skills: [
      {
        name: "Streamlit",
        category: "deployment-tools",
        status: "core",
        contextNote:
          "Building interactive web interfaces for machine learning inference and chat analytics dashboards.",
        evidenceLink: "/projects/laptop-price-predictor",
        evidenceLabel: "Used in both flagship projects",
      },
      {
        name: "Git & GitHub",
        category: "deployment-tools",
        status: "core",
        contextNote:
          "Version control, repository management, and public documentation of notebooks and projects.",
        evidenceLink: "https://github.com/harshsingh134",
        evidenceLabel: "github.com/harshsingh134",
      },
      {
        name: "VS Code & Jupyter",
        category: "deployment-tools",
        status: "core",
        contextNote:
          "Daily development environment for interactive notebook experimentation and Python scripting.",
      },
      {
        name: "Kaggle",
        category: "deployment-tools",
        status: "practicing",
        contextNote:
          "Sourcing benchmark datasets, exploring public kernels, and practicing feature engineering.",
        evidenceLink:
          "https://github.com/harshsingh134/machineLearning/blob/main/kaggle.ipynb",
        evidenceLabel: "kaggle.ipynb",
      },
    ],
  },
  {
    id: "computer-science",
    title: "Computer Science Fundamentals",
    subtitle: "Core B.Tech Computer Science & Engineering pillars",
    iconName: "Cpu",
    skills: [
      {
        name: "Data Structures & Algorithms (DSA)",
        category: "computer-science",
        status: "practicing",
        contextNote:
          "Algorithmic thinking, time/space complexity analysis, arrays, strings, trees, and sorting/searching.",
      },
      {
        name: "Object-Oriented Programming (OOP)",
        category: "computer-science",
        status: "practicing",
        contextNote:
          "Encapsulation, inheritance, polymorphism, and modular class design in Java, C++, and Python.",
      },
    ],
  },
];

/**
 * 9. VERIFIED PROJECTS & 9-STAGE CASE STUDIES (Sections 8 & 9)
 * Includes the 2 flagship resume projects + 2 verified GitHub notebook repositories.
 */
export const portfolioProjects: PortfolioProject[] = [
  {
    slug: "laptop-price-predictor",
    title: "Laptop Price Predictor",
    tagline: "End-to-End Hardware Price Estimation & Feature Engineering Pipeline",
    oneLineProblem:
      "Estimating fair laptop market prices from noisy, compound hardware specification strings (like '15.6\" IPS Panel Full HD 1920x1080' or '8GB' / '1.37kg').",
    shortDescription:
      "An end-to-end machine learning workflow and Streamlit web application that cleans raw laptop specification data, engineers domain features such as Pixels Per Inch (PPI), IPS, and Touchscreen indicators, trains a regression pipeline, and provides interactive price predictions.",
    featured: true,
    sourceType: "resume-verified",
    categories: ["Data Science", "Machine Learning", "Python", "Streamlit"],
    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Matplotlib",
      "Seaborn",
      "Streamlit",
    ],
    keyFeatures: [
      "Automated cleaning of unit-suffixed strings ('GB' in RAM, 'kg' in Weight) with strict numeric type casting",
      "Regex & string parsing of compound ScreenResolution into binary Touchscreen, IPS, and X/Y pixel dimensions",
      "Domain feature engineering of Pixels Per Inch (PPI) to capture screen sharpness & resolution-to-size ratio",
      "Univariate & bivariate Exploratory Data Analysis (EDA) across laptop brands, form factors, and price distributions",
      "Interactive Streamlit interface for configuring custom laptop specs and predicting market price",
    ],
    githubUrl:
      "https://github.com/harshsingh134/machineLearning/blob/main/laptop-price-predictor.ipynb",
    notebookUrl:
      "https://github.com/harshsingh134/machineLearning/blob/main/laptop-price-predictor.ipynb",
    liveDemoUrl: "[ADD LIVE DEMO]", // Button automatically stays hidden on public card until a real URL is added
    repoName: "machineLearning",
    lastUpdated: "2026-09-04",
    previewType: "laptop-predictor",
    caseStudy: {
      problem: {
        summary:
          "Laptop pricing depends on a non-linear combination of brand positioning, processor tier, memory, storage architecture, weight, and display quality. However, raw retail specification tables store critical attributes inside unstructured compound strings (such as 'IPS Panel Retina Display 2560x1600' or '16GB'), making direct statistical modeling impossible without structured feature extraction.",
        context: [
          "Consumers and analysts comparing laptops across brands (Dell, Lenovo, HP, Apple, Asus, Acer) face wide price variance for seemingly similar headline specs.",
          "Raw catalog columns like `ScreenResolution`, `Cpu`, `Memory`, `Ram`, and `Weight` mix units, marketing labels, and numeric dimensions in single text fields.",
          "The goal of this project was to build a complete pipeline—from raw CSV ingestion and EDA to engineered features, regression modeling, and a Streamlit UI—that predicts laptop prices accurately from user-selected hardware specs.",
        ],
        userImpact:
          "Allows users to input a custom laptop configuration (Brand, Type, RAM, Weight, Touchscreen, IPS, Screen Size, Resolution, CPU, Storage, GPU, OS) in an interactive Streamlit interface and receive a data-backed price estimate.",
      },
      dataset: {
        source: "Laptop Specifications & Pricing Dataset (`laptop_data.csv`)",
        recordsInfo:
          "1,303 laptop records across 12 specification & pricing attributes (after removing index artifact `Unnamed: 0`).",
        features: [
          "Company (Categorical — Laptop manufacturer)",
          "TypeName (Categorical — Notebook, Ultrabook, Gaming, 2 in 1 Convertible, Workstation, Netbook)",
          "Inches (Numeric — Display diagonal size)",
          "ScreenResolution (Compound text — Panel type, touchscreen flag, and pixel dimensions)",
          "Cpu (Compound text — Processor brand, family, and clock speed)",
          "Ram (String with 'GB' suffix → cleaned to int32)",
          "Memory (Compound text — SSD, HDD, Flash Storage, Hybrid capacities)",
          "Gpu (Compound text — GPU vendor and model series)",
          "OpSys (Categorical — Windows, macOS, Linux, No OS, etc.)",
          "Weight (String with 'kg' suffix → cleaned to float32)",
          "Price (Numeric target — Retail price)",
        ],
        preprocessingNotes: [
          "Verified zero missing values (`df.isnull().sum()`) and inspected duplicate entries (`df.duplicated().sum()`).",
          "Dropped redundant `Unnamed: 0` index column.",
          "Stripped `'GB'` from `Ram` and cast to `int32`; stripped `'kg'` from `Weight` and cast to `float32`.",
        ],
      },
      approach: {
        overview:
          "Followed a structured Data → EDA → Feature Engineering → Modeling → Deployment workflow, ensuring every transformation was motivated by correlation analysis and domain logic.",
        steps: [
          {
            stepNumber: "01",
            title: "Data Cleaning & Type Standardization",
            detail:
              "Removed index artifacts and converted string-encoded numeric columns (`Ram` and `Weight`) into clean `int32` and `float32` features so numerical correlations could be computed.",
            codeSnippet: `df.drop(columns=['Unnamed: 0'], inplace=True)\ndf['Ram'] = df['Ram'].str.replace('GB','').astype('int32')\ndf['Weight'] = df['Weight'].str.replace('kg','').astype('float32')`,
          },
          {
            stepNumber: "02",
            title: "Exploratory Data Analysis (EDA) & Skewness Inspection",
            detail:
              "Plotted the target `Price` distribution using `sns.displot(df['Price'])` (observing right-skewness typical of hardware pricing), analyzed brand market share and mean price (`Company`), compared laptop categories (`TypeName` such as Gaming and Ultrabooks vs. budget Notebooks), and examined `Inches` vs. `Price` scatter relationships.",
            codeSnippet: `sns.displot(df['Price'])\nsns.barplot(x=df['Company'], y=df['Price'])\nplt.xticks(rotation='vertical')\nplt.show()`,
          },
          {
            stepNumber: "03",
            title: "Screen Resolution Decomposition & PPI Feature Engineering",
            detail:
              "Decomposed the high-cardinality `ScreenResolution` column into two binary indicators (`Touchscreen` and `Ips`), extracted horizontal (`x_res`) and vertical (`y_res`) pixel counts using string splitting and regex `(\\d+\\.?\\d+)`, and combined `x_res`, `y_res`, and `Inches` into a single continuous `ppi` (Pixels Per Inch) feature to avoid multicollinearity while capturing display quality.",
            codeSnippet: `df['Touchscreen'] = df['ScreenResolution'].apply(lambda x: 1 if 'Touchscreen' in x else 0)\ndf['Ips'] = df['ScreenResolution'].apply(lambda x: 1 if 'Ips' in x else 0)\nnew = df['ScreenResolution'].str.split('x', n=1, expand=True)\ndf['x_res'] = new[0].str.findall(r'(\\d+\\.?\\d+)').apply(lambda x: x[0]).astype('int')\ndf['y_res'] = new[1].astype('int')\ndf['ppi'] = (((df['x_res']**2) + (df['y_res']**2))**0.5 / df['Inches']).astype('float')\ndf.drop(columns=['ScreenResolution'], inplace=True)`,
          },
          {
            stepNumber: "04",
            title: "Pipeline Construction, Training & Streamlit Integration",
            detail:
              "Encoded categorical hardware attributes via `ColumnTransformer` and `OneHotEncoder`, trained supervised regression models on log-transformed price targets, evaluated predictive performance, and connected the serialized pipeline to an interactive Streamlit frontend.",
          },
        ],
      },
      technology: [
        {
          category: "Data Wrangling & Math",
          items: ["Python", "Pandas", "NumPy", "Regex (re)"],
          rationale:
            "Used for string cleaning, regular expression extraction of pixel dimensions, vectorized PPI computation, and correlation matrices.",
        },
        {
          category: "Visualization & EDA",
          items: ["Matplotlib", "Seaborn"],
          rationale:
            "Used to inspect target distribution skewness, brand/category price variance, and feature-to-price relationships.",
        },
        {
          category: "Machine Learning",
          items: ["Scikit-learn", "ColumnTransformer", "OneHotEncoder", "Regression Pipeline"],
          rationale:
            "Ensures categorical encoding and regression inference happen inside a single reproducible pipeline.",
        },
        {
          category: "Application Layer",
          items: ["Streamlit"],
          rationale:
            "Provides a clean, interactive web form where users select hardware parameters and trigger real-time model inference.",
        },
      ],
      model: {
        algorithmUsed: "Supervised Regression Pipeline (Scikit-learn)",
        whySelected:
          "Predicting a continuous retail price from mixed categorical (Brand, TypeName, CPU/GPU/OS) and numerical (RAM, Weight, PPI, Storage) inputs requires a regression estimator paired with `ColumnTransformer` encoding and log-target transformation (`np.log` / `np.exp`) to handle right-skewed prices.",
        pipelineArchitecture: [
          "Raw Spec Inputs → Feature Extraction (`Touchscreen`, `Ips`, `ppi`, CPU/Storage parsing)",
          "Preprocessing Step → `ColumnTransformer` with `OneHotEncoder` on nominal hardware categories",
          "Estimator Step → Supervised Regression model trained on `np.log(Price)`",
          "Inference Output → Exponential inverse transform `np.exp(y_pred)` returned to Streamlit UI",
        ],
      },
      evaluation: {
        methodology:
          "Train/test split validation comparing predicted prices against actual retail prices, alongside Pearson correlation checks (`df.corr(numeric_only=True)`) during feature engineering.",
        metricsUsed: [
          "R² Score (Coefficient of Determination)",
          "Mean Absolute Error (MAE)",
          "Pearson Correlation with Target (`Price`)",
        ],
        verifiedObservations: [
          "Engineered `ppi`, `Ram`, `Ips`, and `Touchscreen` showed meaningful positive correlation with `Price` in `df.corr(numeric_only=True)`.",
          "Replacing raw `ScreenResolution`, `Inches`, `x_res`, and `y_res` with `ppi` reduced feature redundancy while preserving display sharpness signal.",
        ],
        metricPlaceholder:
          "[ADD PROJECT METRIC — e.g., exact held-out test R² and MAE score from final model checkpoint]",
      },
      deployment: {
        platform: "Streamlit Web Application",
        architecture:
          "Serialized preprocessing + regression pipeline loaded into a Streamlit Python app that computes `ppi` on the fly from user-selected screen size and resolution before running `pipe.predict()`.",
        interactiveFeatures: [
          "Dropdown selectors for Brand (`Company`), Category (`TypeName`), RAM, CPU, GPU, and OS",
          "Toggle inputs for Touchscreen and IPS Panel",
          "Screen size (`Inches`) and Resolution selector with automatic PPI calculation",
          "Instant price prediction output",
        ],
        liveDemoUrl: "[ADD LIVE DEMO]",
      },
      learnings: [
        "Domain feature engineering matters more than raw column count: combining `x_res`, `y_res`, and `Inches` into `ppi` created a much cleaner signal than keeping three collinear numerical columns.",
        "Real-world tabular datasets often hide structured numerical data inside messy strings (`'8GB'`, `'1.37kg'`, `'Full HD 1920x1080'`), making regex and string manipulation essential ML skills.",
        "Visualizing target distribution early in EDA reveals skewness that directly informs target transformation choices.",
      ],
      futureImprovements: [
        "Automate periodic scraping/updating of current 2026 laptop models (Apple M-series, Intel Core Ultra, RTX 40/50 series GPUs) to keep price estimates aligned with current market hardware.",
        "Add prediction intervals (quantile regression) so users see a realistic price range rather than a single point estimate.",
        "Add SHAP feature importance plots inside the Streamlit app to explain how each spec contributed to the predicted price.",
      ],
    },
  },
  {
    slug: "whatsapp-chat-analyzer",
    title: "WhatsApp Chat Analyzer",
    tagline: "Unstructured Chat Log Parser & Interactive Conversation Analytics Dashboard",
    oneLineProblem:
      "Transforming raw, unformatted WhatsApp `.txt` chat exports into structured time-series tables and interactive behavioral insights.",
    shortDescription:
      "A Python and Streamlit text analytics application that parses raw WhatsApp exported `.txt` files using Regular Expressions, extracts timestamps, participants, and message bodies into Pandas DataFrames, and visualizes activity timelines, word frequencies, emoji usage, and participant statistics.",
    featured: true,
    sourceType: "resume-verified",
    categories: ["Data Science", "Python", "Streamlit"],
    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "Regex",
      "Matplotlib",
      "Seaborn",
      "Streamlit",
    ],
    keyFeatures: [
      "Regex-driven timestamp parser (`^\\d{1,2}\\/\\d{1,2}\\/\\d{2},\\s\\d{2}:\\d{2}`) splitting raw `.txt` logs into structured dates and messages",
      "Automated separation of system notifications vs. participant messages",
      "Temporal feature extraction (year, month, day of week, hour) for daily and monthly activity timelines",
      "Word frequency analysis and emoji usage breakdown across group or individual conversations",
      "Interactive Streamlit dashboard supporting overall group analytics and single-participant filtering",
    ],
    githubUrl:
      "https://github.com/harshsingh134/machineLearning/blob/main/Whatachat.ipynb",
    notebookUrl:
      "https://github.com/harshsingh134/machineLearning/blob/main/Whatachat.ipynb",
    liveDemoUrl: "[ADD LIVE DEMO]",
    repoName: "machineLearning",
    lastUpdated: "2026-09-04",
    previewType: "whatsapp-analyzer",
    caseStudy: {
      problem: {
        summary:
          "WhatsApp allows users to export chat histories only as raw, flat `.txt` files where dates, times, sender names, multiline messages, emojis, media placeholders (`<Media omitted>`), and system notifications are concatenated together. Extracting quantitative insights requires a reliable text-parsing and feature-extraction pipeline.",
        context: [
          "Raw chat exports contain thousands of lines with no tabular schema, varying timestamp formats, and multiline messages that break naive line-by-line CSV parsers.",
          "Users want to understand conversation patterns—who initiates or contributes most, which hours/months are most active, which words and emojis dominate, and how communication evolves over time.",
          "Because chat files are personal, the analysis pipeline needs to process uploaded `.txt` files on the fly and present clear visual summaries.",
        ],
        userImpact:
          "Lets anyone upload a standard WhatsApp `.txt` chat export into a Streamlit interface and immediately explore participant statistics, activity heatmaps, timelines, word clouds/frequencies, and emoji breakdowns.",
      },
      dataset: {
        source: "Raw WhatsApp `.txt` Chat Exports (UTF-8 encoded unstructured text files)",
        recordsInfo:
          "Variable-length unstructured text logs parsed into structured Pandas DataFrames with one row per message event.",
        features: [
          "raw_message_date (Extracted via Regex timestamp matching)",
          "user / participant (Parsed sender name or `group_notification`)",
          "message (Cleaned UTF-8 message text body)",
          "year, month,month_num, day, day_name, hour, minute (Engineered temporal features)",
        ],
        preprocessingNotes: [
          "Read raw `.txt` export using UTF-8 encoding (`open(..., 'r', encoding='utf-8')`) to preserve multi-byte emojis and non-ASCII characters.",
          "Applied regex splitting (`re.split(pattern, data)[1:]`) and matching (`re.findall(pattern, data)`) so multiline messages stay attached to their originating timestamp.",
          "Filtered out `<Media omitted>` markers and stop words before computing word frequency rankings.",
        ],
      },
      approach: {
        overview:
          "Designed a modular text-to-dataframe ingestion pipeline followed by statistical aggregation functions and interactive Streamlit visual components.",
        steps: [
          {
            stepNumber: "01",
            title: "Raw Text Ingestion & Regex Timestamp Splitting",
            detail:
              "Loaded the raw UTF-8 chat file and applied a regular expression matching WhatsApp's `DD/MM/YY, HH:MM` timestamp header to cleanly separate date strings from message bodies, even when a single message spans multiple lines.",
            codeSnippet: `import re\nimport pandas as pd\n\npattern = r'^\\d{1,2}\\/\\d{1,2}\\/\\d{2},\\s\\d{2}:\\d{2}'\nmessages = re.split(pattern, data)[1:]\ndates = re.findall(pattern, data)`,
          },
          {
            stepNumber: "02",
            title: "Sender Separation & DataFrame Structuring",
            detail:
              "Parsed each message block to separate the sender's username (`user: message`) from system-level group notifications, then converted the extracted date strings into Pandas `datetime` objects (`pd.to_datetime`).",
          },
          {
            stepNumber: "03",
            title: "Temporal, Lexical & Emoji Feature Extraction",
            detail:
              "Derived granular time features (`year`, `month`, `day_name`, `hour`), counted total messages, words, media shares, and URLs, tokenized text for top word frequency counts, and extracted Unicode emoji distributions.",
          },
          {
            stepNumber: "04",
            title: "Interactive Visual Analytics in Streamlit",
            detail:
              "Connected the helper analytics modules to a Streamlit sidebar and dashboard layout with Matplotlib and Seaborn charts for monthly/daily timelines, busiest days/hours, most active participants, and word/emoji tables.",
          },
        ],
      },
      technology: [
        {
          category: "Text Parsing & Data Processing",
          items: ["Python", "Regex (re)", "Pandas", "NumPy"],
          rationale:
            "Essential for splitting unstructured logs into structured rows and performing fast temporal/participant aggregations.",
        },
        {
          category: "Visualization",
          items: ["Matplotlib", "Seaborn"],
          rationale:
            "Renders activity timelines, participant share bar charts, and day-by-hour activity heatmaps.",
        },
        {
          category: "Web Interface",
          items: ["Streamlit"],
          rationale:
            "Provides file upload widget (`st.sidebar.file_uploader`), participant filter dropdown, and responsive chart layout.",
        },
      ],
      model: {
        algorithmUsed: "Rule-Based Regex Parser + Statistical & Lexical Aggregation Pipeline",
        whySelected:
          "Chat log analysis is fundamentally an unstructured data parsing and exploratory analytics problem: deterministic regex rules guarantee 100% faithful timestamp extraction, while Pandas groupby aggregations provide exact participant and temporal statistics.",
        pipelineArchitecture: [
          "Raw `.txt` Upload (UTF-8) → Regex `re.split` & `re.findall` on Timestamp Pattern",
          "DataFrame Builder → Sender/Message Split + `pd.to_datetime` Temporal Feature Extraction",
          "Analytics Engine → Participant Stats, Timeline Aggregations, Word & Emoji Counters",
          "Visualization Layer → Streamlit UI + Matplotlib/Seaborn Charts",
        ],
      },
      evaluation: {
        methodology:
          "Verified parser accuracy against multiline messages, emoji-heavy strings, and system notifications in real exported WhatsApp chat logs.",
        metricsUsed: [
          "Timestamp Alignment Integrity (`len(messages) == len(dates)`)",
          "UTF-8 Emoji & Multiline Preservation",
          "Participant vs. System Event Separation Accuracy",
        ],
        verifiedObservations: [
          "Using `re.split(pattern, data)[1:]` paired with `re.findall(pattern, data)` ensures multiline messages are never falsely split into orphan rows.",
          "Explicit `encoding='utf-8'` prevents decoding crashes on emoji-rich chat titles and messages.",
        ],
      },
      deployment: {
        platform: "Streamlit Interactive Dashboard",
        architecture:
          "Stateless file-upload workflow where user chat exports are parsed in-memory into a Pandas DataFrame and visualized on demand.",
        interactiveFeatures: [
          "Sidebar `.txt` file uploader for any exported WhatsApp conversation",
          "Analysis scope selector: 'Overall' group view or individual participant drill-down",
          "Top KPI cards (Total Messages, Total Words, Media Shared, Links Shared)",
          "Monthly & Daily activity timelines, busiest day/month bars, and word/emoji frequency views",
        ],
        liveDemoUrl: "[ADD LIVE DEMO]",
      },
      learnings: [
        "Gained practical fluency in Regular Expressions (`re.split`, `re.findall`, capture groups) on messy real-world text data.",
        "Learned how to work with Pandas `.dt` datetime accessors (`dt.year`, `dt.month_name()`, `dt.day_name()`, `dt.hour`) for time-series aggregation.",
        "Experienced how cleanly separating data preprocessing (`preprocessor.py`) from statistical helpers (`helper.py`) and UI layout (`app.py`) makes a Streamlit project maintainable.",
      ],
      futureImprovements: [
        "Support both 12-hour (`AM/PM`) and 24-hour regional WhatsApp export timestamp formats automatically via a composite regex pattern.",
        "Add sentiment analysis / emotion classification (building on the text preprocessing workflow in `nlp.ipynb`) to track conversation mood over time.",
        "Add downloadable PDF/PNG summary report generation from the dashboard.",
      ],
    },
  },
  {
    slug: "machine-learning-notebook-lab",
    title: "Machine Learning & Feature Engineering Lab",
    tagline: "40+ Hands-On Jupyter Notebooks Covering the Core ML Lifecycle",
    oneLineProblem:
      "Building practical, code-first intuition across data preprocessing, feature scaling, encoding, PCA, Scikit-learn pipelines, and supervised learning.",
    shortDescription:
      "A comprehensive public GitHub repository (`harshsingh134/machineLearning`) containing over 40 hands-on Jupyter notebooks documenting my step-by-step implementations of EDA, missing value imputation, encoding, scaling, Principal Component Analysis (PCA), Scikit-learn Pipelines, and regression/classification models.",
    featured: false,
    sourceType: "github-discovered",
    categories: ["Data Science", "Machine Learning", "Python"],
    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Matplotlib",
      "Seaborn",
      "Jupyter Notebook",
    ],
    keyFeatures: [
      "Principal Component Analysis (`pca.ipynb`): Manual covariance matrix & eigenvalue decomposition + 3D PCA projection",
      "Scikit-learn Pipelines (`pipline.ipynb`, `column Transformer.ipynb`): Combining SimpleImputer, OneHotEncoder, MinMaxScaler, and SelectKBest",
      "Feature Scaling & Encoding (`Normalization.ipynb`, `Zscore.ipynb`, `onehoteencoding.ipynb`, `ordinal encoding.ipynb`)",
      "Supervised Learning & Text Preprocessing (`logistic.ipynb`, `nlp.ipynb`, `working-with-date.ipynb`)",
    ],
    githubUrl: "https://github.com/harshsingh134/machineLearning",
    notebookUrl: "https://github.com/harshsingh134/machineLearning",
    repoName: "machineLearning",
    lastUpdated: "2026-09-04",
    previewType: "ml-notebooks",
    caseStudy: {
      problem: {
        summary:
          "True competence in data science comes from writing and testing every stage of the preprocessing and modeling pipeline by hand—understanding how scalers change distributions, how encoders affect dimensionality, and how pipelines prevent data leakage.",
        context: [
          "Many beginners jump straight to calling `.fit()` on high-level estimators without understanding missing data mechanisms, feature scaling, or covariance geometry.",
          "This repository serves as my active engineering lab where every new concept I learn is implemented on real datasets in Jupyter notebooks.",
        ],
        userImpact:
          "Provides recruiters, mentors, and peers with transparent, inspectable proof of my daily hands-on practice across 40+ notebooks.",
      },
      dataset: {
        source: "Multiple Benchmark & Real-World Tabular/Text Datasets",
        recordsInfo:
          "Includes Iris (`load_iris`), Titanic survival (`train.csv`), Social Network Ads, Registered Companies, Emotion-labeled text, Orders/Messages temporal logs, and Laptop Pricing.",
        features: [
          "Mixed numerical & categorical columns (`Mixeddata.ipynb`)",
          "Missing categorical & numerical values (`missing category.ipynb`, `compele cca.ipynb`)",
          "Date and timestamp columns (`working-with-date.ipynb`)",
          "Unstructured emotion-labeled text (`nlp.ipynb`)",
        ],
        preprocessingNotes: [
          "Demonstrates Complete Case Analysis (CCA), `SimpleImputer`, `StandardScaler`, `MinMaxScaler`, Z-score outlier handling, `OneHotEncoder`, `OrdinalEncoder`, and `FunctionTransformer`.",
        ],
      },
      approach: {
        overview:
          "Each notebook isolates a specific data science concept, implements it from scratch or with Scikit-learn transformers, and visualizes the before-and-after impact on the dataset.",
        steps: [
          {
            stepNumber: "01",
            title: "Feature Scaling & Distribution Analysis",
            detail:
              "Implemented Standardization (`StandardScaler`) and Normalization (`MinMaxScaler`, Z-score) and plotted side-by-side scatter plots to verify that scaling centers and rescales axes without distorting relative point geometry.",
            codeSnippet: `scaler = StandardScaler()\nX_train_scaled = scaler.fit_transform(X_train)\nX_test_scaled = scaler.transform(X_test)`,
          },
          {
            stepNumber: "02",
            title: "Categorical Encoding & ColumnTransformers",
            detail:
              "Practiced Ordinal Encoding for ordered categories and One-Hot Encoding for nominal features, wrapping heterogeneous column steps inside `ColumnTransformer`.",
          },
          {
            stepNumber: "03",
            title: "Dimensionality Reduction with PCA",
            detail:
              "Applied `StandardScaler` followed by `PCA(n_components=3)` AND computed covariance matrices (`np.cov`) and eigen-decompositions (`np.linalg.eig`) directly in NumPy.",
            codeSnippet: `covariance_matrix = np.cov([df.iloc[:,1], df.iloc[:,2]])\neigen_values, eigen_vectors = np.linalg.eig(covariance_matrix)`,
          },
          {
            stepNumber: "04",
            title: "End-to-End Scikit-learn Pipelines & Classification",
            detail:
              "Built chained `Pipeline` objects combining imputation, encoding, scaling, `SelectKBest(chi2)`, and classifiers (`LogisticRegression`, `DecisionTreeClassifier`).",
          },
        ],
      },
      technology: [
        {
          category: "Core Stack",
          items: ["Python", "Pandas", "NumPy", "Scikit-learn"],
          rationale: "Standard industry stack for tabular preprocessing and classical ML.",
        },
        {
          category: "Visualization",
          items: ["Matplotlib", "Seaborn", "Plotly Express"],
          rationale: "Used for 2D distribution comparisons and 3D PCA scatter projections.",
        },
      ],
      model: {
        algorithmUsed:
          "Linear Regression, Logistic Regression, Decision Trees, PCA, and Scikit-learn Pipelines",
        whySelected:
          "Covers the foundational statistical and supervised learning methods required for real-world tabular data science.",
        pipelineArchitecture: [
          "Train/Test Split (`train_test_split`)",
          "Imputation & Encoding (`SimpleImputer` + `OneHotEncoder` / `OrdinalEncoder`)",
          "Scaling & Feature Selection (`StandardScaler` / `MinMaxScaler` + `SelectKBest` / `PCA`)",
          "Supervised Estimator (`LogisticRegression` / `DecisionTreeClassifier`)",
        ],
      },
      evaluation: {
        methodology:
          "Evaluated classification notebooks using `accuracy_score`, `confusion_matrix`, and `classification_report` on held-out test splits (`test_size=0.2`).",
        metricsUsed: ["Accuracy Score", "Confusion Matrix", "Classification Report"],
        verifiedObservations: [
          "Confirmed via `np.round(X_train_scaled.describe(), 1)` that `StandardScaler` produces zero mean (`0.0`) and unit variance (`1.0`) on training splits.",
        ],
      },
      deployment: {
        platform: "Public GitHub Repository (`harshsingh134/machineLearning`)",
        architecture:
          "Version-controlled Jupyter notebooks accessible directly on GitHub and synchronized with this portfolio via the GitHub REST API.",
        interactiveFeatures: [
          "Direct browser inspection of 40+ `.ipynb` notebooks",
          "Live metadata sync via portfolio GitHub integration",
        ],
      },
      learnings: [
        "Always fit scalers and encoders on `X_train` only and call `.transform()` on `X_test` to avoid data leakage.",
        "Scikit-learn's `Pipeline` and `ColumnTransformer` eliminate manual column-concatenation bugs when deploying models.",
      ],
      futureImprovements: [
        "Organize the 40+ notebooks into numbered topic directories (`01-EDA`, `02-Feature-Engineering`, `03-Pipelines`, `04-Models`) with a master table of contents in `README.md`.",
      ],
    },
  },
  {
    slug: "deep-learning-foundations",
    title: "Deep Learning Foundations (Perceptron & ANN)",
    tagline: "Neural Network Experiments in TensorFlow/Keras & Scikit-learn",
    oneLineProblem:
      "Transitioning from classical linear classifiers to single-layer Perceptrons and multi-layer Artificial Neural Networks (ANNs).",
    shortDescription:
      "A dedicated GitHub repository (`harshsingh134/Deep-learning`) exploring the building blocks of deep learning: single-layer Perceptron classification with Scikit-learn and multi-layer Artificial Neural Networks (ANN) using TensorFlow/Keras `Sequential`, `Dense`, and `Dropout` layers.",
    featured: false,
    sourceType: "github-discovered",
    categories: ["Deep Learning", "Machine Learning", "Python"],
    technologies: [
      "Python",
      "NumPy",
      "Pandas",
      "Scikit-learn",
      "TensorFlow / Keras",
      "Matplotlib",
      "Seaborn",
    ],
    keyFeatures: [
      "Single-layer Perceptron implementation (`perception.ipynb`) with stratified train/test splitting and `StandardScaler`",
      "Multi-layer Artificial Neural Network (`ANN.ipynb`) using `tensorflow.keras.Sequential`, `Dense`, and `Dropout`",
      "Pairplot feature separability visualization (`sns.pairplot`) prior to neural training",
      "Evaluation with `accuracy_score`, `confusion_matrix`, and `classification_report`",
    ],
    githubUrl: "https://github.com/harshsingh134/Deep-learning",
    notebookUrl: "https://github.com/harshsingh134/Deep-learning/blob/main/perception.ipynb",
    repoName: "Deep-learning",
    lastUpdated: "2026-08-21",
    previewType: "dl-notebooks",
    caseStudy: {
      problem: {
        summary:
          "Understanding deep learning requires starting from the mathematical unit at its core—the Perceptron—and seeing how stacking `Dense` layers with non-linear activations and `Dropout` extends linear decision boundaries into multi-layer Artificial Neural Networks.",
        context: [
          "As part of my progression from classical ML into Deep Learning, I created `harshsingh134/Deep-learning` to document hands-on experiments with Perceptrons and ANNs.",
        ],
        userImpact:
          "Demonstrates a structured, bottom-up approach to learning neural networks grounded in proper preprocessing and evaluation.",
      },
      dataset: {
        source: "Multi-class Species Dataset & Environmental Sensor Feature Dataset",
        recordsInfo:
          "Tabular numerical features (`soil_moisture`, `temperature_c`, `humidity`, `rainfall_mm` in `ANN.ipynb`; multi-class `Species` features in `perception.ipynb`).",
        features: [
          "Continuous sensor features (`soil_moisture`, `temperature_c`, `humidity`, `rainfall_mm`)",
          "Morphological measurements with multi-class `Species` target",
        ],
        preprocessingNotes: [
          "Applied `LabelEncoder` and `to_categorical` one-hot target encoding for multi-class neural outputs.",
          "Standardized numerical features with `StandardScaler` before training gradient-based models.",
        ],
      },
      approach: {
        overview:
          "Compared single-layer Perceptron classification with multi-layer Keras `Sequential` architectures.",
        steps: [
          {
            stepNumber: "01",
            title: "Visualizing Class Separability with Pairplots",
            detail:
              "Used `sns.pairplot(df, hue='Species')` to inspect linear vs. non-linear class boundaries across feature pairs.",
          },
          {
            stepNumber: "02",
            title: "Stratified Split, Scaling & Perceptron Baseline",
            detail:
              "Split data with `stratify=y`, scaled inputs via `StandardScaler`, and trained `Perceptron(max_iter=100, random_state=42)`.",
            codeSnippet: `per = Perceptron(max_iter=100, random_state=42)\nper.fit(x_train_scaled, y_train)\ny_pred_percep = per.predict(x_test_scaled)\nprint(classification_report(y_test, y_pred_percep))`,
          },
          {
            stepNumber: "03",
            title: "Multi-Layer ANN with TensorFlow / Keras",
            detail:
              "Constructed feedforward neural networks using `Sequential`, `Dense`, and `Dropout` layers to learn non-linear feature combinations.",
          },
        ],
      },
      technology: [
        {
          category: "Deep Learning & ML",
          items: ["TensorFlow / Keras", "Scikit-learn", "NumPy", "Pandas"],
          rationale:
            "Combines Scikit-learn preprocessing/metrics with Keras neural network layers.",
        },
        {
          category: "Visualization",
          items: ["Matplotlib", "Seaborn"],
          rationale: "Used for `pairplot` class separability inspection and training diagnostics.",
        },
      ],
      model: {
        algorithmUsed: "Single-Layer Perceptron & Multi-Layer Artificial Neural Network (ANN)",
        whySelected:
          "Forms the core foundation of deep learning before advancing to CNNs, RNNs, and sequence models.",
        pipelineArchitecture: [
          "Feature Matrix `X` & Target `y` → `LabelEncoder` + Stratified Train/Test Split",
          "Feature Standardization → `StandardScaler`",
          "Model Layer → `Perceptron` baseline & Keras `Sequential` (`Dense` + `Dropout`)",
          "Evaluation → `accuracy_score` & `classification_report`",
        ],
      },
      evaluation: {
        methodology:
          "Stratified 80/20 train-test split evaluated via multi-class precision, recall, F1-score, and accuracy.",
        metricsUsed: ["Accuracy Score", "Precision / Recall / F1 Classification Report"],
        verifiedObservations: [
          "Standardizing input features significantly stabilizes Perceptron and ANN weight updates.",
        ],
      },
      deployment: {
        platform: "Public GitHub Repository (`harshsingh134/Deep-learning`)",
        architecture: "Jupyter Notebook repository automatically tracked by the portfolio GitHub API layer.",
        interactiveFeatures: [
          "Direct notebook links (`ANN.ipynb` and `perception.ipynb`)",
        ],
      },
      learnings: [
        "Neural networks are highly sensitive to input feature scale—applying `StandardScaler` is mandatory before feeding data into Perceptron or Dense layers.",
        "Comparing a simple `Perceptron` baseline against a multi-layer `Sequential` model clarifies when hidden layers are actually needed.",
      ],
      futureImprovements: [
        "Expand the repository with training/validation loss curves, early stopping callbacks, and hyperparameter tuning notes.",
      ],
    },
  },
];

/**
 * 10. LEARNING JOURNEY ROADMAP (Section 15)
 * Communicates honest, structured progression without claiming premature mastery.
 */
export const learningJourneyStages: LearningStage[] = [
  {
    step: "01",
    title: "Python & CS Foundations",
    subtitle: "Core programming, data structures & algorithmic thinking",
    status: "foundation-built",
    topics: ["Python", "Java", "C", "C++", "Data Structures & Algorithms", "OOP"],
    evidenceNote: "B.Tech CSE coursework & daily Python scripting across all repositories.",
  },
  {
    step: "02",
    title: "Data Analysis & SQL",
    subtitle: "Cleaning, querying & structuring messy datasets",
    status: "foundation-built",
    topics: ["Pandas", "NumPy", "SQL", "MySQL", "Regex / Text Processing", "EDA"],
    evidenceNote: "Demonstrated in WhatsApp Chat Analyzer regex parser & 20+ data wrangling notebooks.",
  },
  {
    step: "03",
    title: "Statistics & Feature Engineering",
    subtitle: "Distributions, scaling, encoding & dimensionality reduction",
    status: "foundation-built",
    topics: [
      "Z-Score & Outliers",
      "StandardScaler & MinMax",
      "One-Hot & Ordinal Encoding",
      "Covariance & PCA",
      "Matplotlib & Seaborn",
    ],
    evidenceNote: "Implemented in Normalization.ipynb, Zscore.ipynb, pca.ipynb & Laptop Price Predictor.",
  },
  {
    step: "04",
    title: "Machine Learning & Pipelines",
    subtitle: "Supervised modeling, evaluation & reproducible workflows",
    status: "active-practice",
    topics: [
      "Scikit-learn",
      "Linear Regression",
      "Logistic Regression",
      "ColumnTransformer",
      "ML Pipelines",
      "Model Evaluation",
    ],
    evidenceNote: "Active focus across pipline.ipynb, logistic.ipynb & flagship predictive projects.",
  },
  {
    step: "05",
    title: "Deep Learning Foundations",
    subtitle: "Neural network building blocks & representation learning",
    status: "expanding",
    topics: [
      "Perceptron",
      "Artificial Neural Networks (ANN)",
      "Dense & Dropout Layers",
      "TensorFlow / Keras",
    ],
    evidenceNote: "Currently building and documenting experiments in harshsingh134/Deep-learning.",
  },
  {
    step: "06",
    title: "Application Deployment",
    subtitle: "Turning notebooks into interactive tools people can use",
    status: "active-practice",
    topics: ["Streamlit", "Git & GitHub", "Model Serialization", "Interactive Dashboards"],
    evidenceNote: "Built Streamlit interfaces for Laptop Price Predictor and WhatsApp Chat Analyzer.",
  },
  {
    step: "07",
    title: "Real-World End-to-End Projects",
    subtitle: "Solving practical problems with complete documentation",
    status: "active-practice",
    topics: ["Problem Framing", "Data Pipelines", "Case Study Documentation", "Reproducible Code"],
    evidenceNote: "Continuously shipping and refining public repositories on GitHub.",
  },
  {
    step: "08",
    title: "Professional Data Science & ML Engineering",
    subtitle: "Internships, production ML systems & collaborative engineering",
    status: "next-horizon",
    topics: [
      "Data Science Internships",
      "Production Model Monitoring",
      "Advanced Deep Learning",
      "Cloud Deployment",
    ],
    evidenceNote: "Seeking Data Science & ML internships (Class of 2027).",
  },
];

export const learningStatusHighlights = {
  recentlyLearned: [
    "Principal Component Analysis (PCA) via covariance matrix & eigen-decomposition (`pca.ipynb`)",
    "Scikit-learn `Pipeline` & `ColumnTransformer` for mixed categorical/numerical data (`pipline.ipynb`)",
    "Single-layer Perceptron & multi-layer ANN architectures (`perception.ipynb`, `ANN.ipynb`)",
  ],
  currentlyLearning: [
    "Deepening Artificial Neural Networks (ANNs), activation functions, and regularization in TensorFlow/Keras",
    "Advanced feature engineering, cross-validation strategies, and ensemble methods in Scikit-learn",
    "SQL analytical queries and end-to-end Streamlit Cloud deployment workflows",
  ],
  nextFocus: [
    "Tree-based ensembles & gradient boosting workflows on structured tabular benchmarks",
    "End-to-end NLP classification pipelines building on regex & text preprocessing foundations",
    "Contributing to real-world Data Science / ML teams through internship roles",
  ],
};

/**
 * 11. VERIFIED CERTIFICATIONS (Section 17)
 * Uses only certifications explicitly supported by the resume.
 * Provider/date fields that require verification are clearly marked rather than invented.
 */
export const certifications: CertificationItem[] = [
  {
    id: "cert-python-ds-ml",
    title: "Python for Data Science & Machine Learning",
    issuer: "[ADD ISSUING PLATFORM / PROVIDER]",
    issueDate: "[ADD COMPLETION YEAR]",
    credentialUrl: "[ADD LINK]",
    skillsCovered: [
      "Python",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Scikit-learn",
      "Machine Learning Workflows",
    ],
    verifiedFromResume: true,
  },
  {
    id: "cert-data-analysis-python",
    title: "Data Analysis with Python",
    issuer: "[ADD ISSUING PLATFORM / PROVIDER]",
    issueDate: "[ADD COMPLETION YEAR]",
    credentialUrl: "[ADD LINK]",
    skillsCovered: [
      "Exploratory Data Analysis (EDA)",
      "Data Cleaning",
      "Feature Engineering",
      "Pandas & NumPy",
      "Statistical Visualization",
    ],
    verifiedFromResume: true,
  },
];

/**
 * 12. TECHNICAL NOTES / BLOG SYSTEM (Section 31)
 * Grounded directly in Harsh Singh's real Jupyter notebooks on GitHub.
 */
export const technicalNotes: TechnicalNote[] = [
  {
    slug: "engineering-ppi-from-raw-screen-strings",
    title: "Why I Engineered Pixels-Per-Inch (PPI) Instead of Using Raw Screen Columns",
    excerpt:
      "A practical breakdown from my Laptop Price Predictor notebook showing how decomposing compound 'ScreenResolution' strings into IPS, Touchscreen, and PPI improved feature clarity.",
    date: "2026-09-04",
    readingTime: "4 min read",
    tags: ["Feature Engineering", "Pandas", "Regex", "Laptop Price Predictor"],
    relatedProjectSlug: "laptop-price-predictor",
    notebookSourceUrl:
      "https://github.com/harshsingh134/machineLearning/blob/main/laptop-price-predictor.ipynb",
    sections: [
      {
        heading: "The Problem with Raw Catalog Strings",
        paragraphs: [
          "When working with `laptop_data.csv`, one of the most informative columns—`ScreenResolution`—is also one of the messiest. A single cell contains strings like `'IPS Panel Full HD 1920x1080'` or `'Touchscreen / 2560x1440'`. Passing this column directly to a one-hot encoder creates dozens of sparse, overlapping categories and hides the underlying numerical geometry.",
          "At the same time, the dataset also includes `Inches` (diagonal screen size). If we extract horizontal (`x_res`) and vertical (`y_res`) pixel counts and keep all three columns alongside `Inches`, our linear regression models suffer from strong multicollinearity.",
        ],
      },
      {
        heading: "Step 1: Extracting Binary Display Flags & Pixel Dimensions",
        paragraphs: [
          "First, I separated the qualitative panel features (`Touchscreen` and `Ips`) into clean binary `0/1` integer columns, then split the resolution string around `'x'` and used a regular expression `(\\d+\\.?\\d+)` to isolate the exact horizontal and vertical pixel counts:",
        ],
        codeBlock: {
          language: "python",
          code: `df['Touchscreen'] = df['ScreenResolution'].apply(lambda x: 1 if 'Touchscreen' in x else 0)
df['Ips'] = df['ScreenResolution'].apply(lambda x: 1 if 'Ips' in x else 0)

new = df['ScreenResolution'].str.split('x', n=1, expand=True)
df['x_res'] = new[0].str.findall(r'(\\d+\\.?\\d+)').apply(lambda x: x[0]).astype('int')
df['y_res'] = new[1].astype('int')`,
          caption: "Excerpt from harshsingh134/machineLearning/laptop-price-predictor.ipynb",
        },
      },
      {
        heading: "Step 2: Computing PPI (Pixels Per Inch)",
        paragraphs: [
          "By applying the Pythagorean theorem across `x_res` and `y_res` and dividing by `Inches`, we capture display pixel density in a single continuous feature (`ppi`) and can safely drop the redundant intermediate columns:",
        ],
        codeBlock: {
          language: "python",
          code: `df['ppi'] = (((df['x_res']**2) + (df['y_res']**2))**0.5 / df['Inches']).astype('float')
df.corr(numeric_only=True)['Price']
df.drop(columns=['ScreenResolution', 'Inches', 'x_res', 'y_res'], inplace=True)`,
          caption: "Computing PPI and verifying numeric correlation with Price",
        },
      },
    ],
  },
  {
    slug: "understanding-pca-with-covariance-and-eigenvectors",
    title: "Understanding PCA Step-by-Step: From StandardScaler to Eigenvectors",
    excerpt:
      "Notes from my pca.ipynb notebook exploring how StandardScaler, covariance matrices, and eigen-decomposition work under the hood of Principal Component Analysis.",
    date: "2026-08-24",
    readingTime: "3 min read",
    tags: ["PCA", "NumPy", "Scikit-learn", "Linear Algebra"],
    relatedProjectSlug: "machine-learning-notebook-lab",
    notebookSourceUrl:
      "https://github.com/harshsingh134/machineLearning/blob/main/pca.ipynb",
    sections: [
      {
        heading: "Why Scaling Comes Before PCA",
        paragraphs: [
          "Principal Component Analysis finds orthogonal directions of maximum variance. Because variance is scale-dependent, features measured in larger units will dominate the first principal component unless every feature is standardized to zero mean and unit variance first.",
        ],
        codeBlock: {
          language: "python",
          code: `from sklearn.preprocessing import StandardScaler
from sklearn.decomposition import PCA

scaler = StandardScaler()
X_scaled = scaler.fit_transform(df.drop('target', axis=1))

pca = PCA(n_components=3)
X_pca = pca.fit_transform(X_scaled)`,
          caption: "Standardizing features before projecting onto 3 principal components",
        },
      },
      {
        heading: "Inspecting the Covariance Matrix & Eigenvalues in NumPy",
        paragraphs: [
          "To verify what `sklearn.decomposition.PCA` computes internally, I also calculated the covariance matrix and its eigenvalues/eigenvectors directly using `np.cov` and `np.linalg.eig`:",
        ],
        codeBlock: {
          language: "python",
          code: `covariance_matrix = np.cov([df.iloc[:, 1], df.iloc[:, 2]])
eigen_values, eigen_vectors = np.linalg.eig(covariance_matrix)
print("Covariance Matrix:\\n", covariance_matrix)
print("Eigenvalues:", eigen_values)`,
          caption: "Excerpt from harshsingh134/machineLearning/pca.ipynb",
        },
      },
    ],
  },
];

export const projectFilterTags: ProjectFilterTag[] = [
  "All",
  "Data Science",
  "Machine Learning",
  "Deep Learning",
  "Python",
  "SQL",
  "Streamlit",
];
