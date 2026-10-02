export type SkillCategoryKey =
  | "programming"
  | "data-science"
  | "machine-learning"
  | "deep-learning"
  | "data-sql"
  | "visualization"
  | "deployment-tools"
  | "computer-science";

export type ProjectFilterTag =
  | "All"
  | "Data Science"
  | "Machine Learning"
  | "Deep Learning"
  | "Python"
  | "SQL"
  | "Streamlit";

export interface SkillItem {
  name: string;
  category: SkillCategoryKey;
  status?: "core" | "practicing" | "learning";
  contextNote: string;
  evidenceLink?: string;
  evidenceLabel?: string;
}

export interface SkillCategory {
  id: SkillCategoryKey;
  title: string;
  subtitle: string;
  iconName: string;
  skills: SkillItem[];
}

export interface CaseStudyStep {
  stepNumber: string;
  title: string;
  detail: string;
  codeSnippet?: string;
}

export interface ProjectCaseStudy {
  problem: {
    summary: string;
    context: string[];
    userImpact: string;
  };
  dataset: {
    source: string;
    recordsInfo: string;
    features: string[];
    preprocessingNotes: string[];
  };
  approach: {
    overview: string;
    steps: CaseStudyStep[];
  };
  technology: {
    category: string;
    items: string[];
    rationale: string;
  }[];
  model: {
    algorithmUsed: string;
    whySelected: string;
    pipelineArchitecture: string[];
  };
  evaluation: {
    methodology: string;
    metricsUsed: string[];
    verifiedObservations: string[];
    metricPlaceholder?: string;
  };
  deployment: {
    platform: string;
    architecture: string;
    interactiveFeatures: string[];
    liveDemoUrl?: string;
  };
  learnings: string[];
  futureImprovements: string[];
}

export interface PortfolioProject {
  slug: string;
  title: string;
  tagline: string;
  oneLineProblem: string;
  shortDescription: string;
  featured: boolean;
  sourceType: "resume-verified" | "github-discovered";
  categories: ProjectFilterTag[];
  technologies: string[];
  keyFeatures: string[];
  githubUrl: string;
  notebookUrl?: string;
  liveDemoUrl?: string; // Omit or leave empty/placeholder if not deployed yet; UI only shows Live Demo button when valid URL exists
  repoName: string;
  lastUpdated?: string;
  previewType: "laptop-predictor" | "whatsapp-analyzer" | "ml-notebooks" | "dl-notebooks";
  caseStudy: ProjectCaseStudy;
}

export interface LearningStage {
  step: string;
  title: string;
  subtitle: string;
  status: "foundation-built" | "active-practice" | "expanding" | "next-horizon";
  topics: string[];
  evidenceNote: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string; // e.g. "[ADD ISSUING PLATFORM / PROVIDER]" if not on resume
  issueDate: string;
  credentialUrl?: string;
  skillsCovered: string[];
  verifiedFromResume: boolean;
}

export interface TechnicalNote {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  tags: string[];
  relatedProjectSlug?: string;
  notebookSourceUrl?: string;
  sections: {
    heading: string;
    paragraphs: string[];
    codeBlock?: {
      language: string;
      code: string;
      caption?: string;
    };
  }[];
}

export interface GitHubRepoSummary {
  id: number;
  name: string;
  fullName: string;
  description: string | null;
  htmlUrl: string;
  homepage: string | null;
  language: string | null;
  stargazersCount: number;
  forksCount: number;
  topics: string[];
  updatedAt: string;
  pushedAt: string;
  size: number;
  isFeatured: boolean;
  matchedCategories: ProjectFilterTag[];
  notebooks?: {
    name: string;
    path: string;
    htmlUrl: string;
    topicTag: string;
  }[];
}

export interface GitHubProfileData {
  username: string;
  profileUrl: string;
  avatarUrl: string;
  publicReposCount: number;
  createdAt: string;
  updatedAt: string;
  repos: GitHubRepoSummary[];
  languageBreakdown: { language: string; count: number; percentage: number }[];
  fetchedAt: string;
  source: "github-live-api" | "fallback-snapshot";
  rateLimitRemaining?: number;
}
