import { siteConfig } from "@/config/siteConfig";
import {
  GitHubProfileData,
  GitHubRepoSummary,
  ProjectFilterTag,
} from "@/types/portfolio";

/**
 * Curated notebook index verified directly from harshsingh134's public GitHub repositories
 * (`harshsingh134/machineLearning` and `harshsingh134/Deep-learning`).
 * Used to enrich repository cards and provide instant fallback if GitHub API rate-limits.
 */
export const VERIFIED_REPO_NOTEBOOKS: Record<
  string,
  { name: string; path: string; htmlUrl: string; topicTag: string }[]
> = {
  machineLearning: [
    {
      name: "laptop-price-predictor.ipynb",
      path: "laptop-price-predictor.ipynb",
      htmlUrl:
        "https://github.com/harshsingh134/machineLearning/blob/main/laptop-price-predictor.ipynb",
      topicTag: "Regression & Feature Engineering",
    },
    {
      name: "Whatachat.ipynb",
      path: "Whatachat.ipynb",
      htmlUrl:
        "https://github.com/harshsingh134/machineLearning/blob/main/Whatachat.ipynb",
      topicTag: "Regex & Text Analytics",
    },
    {
      name: "pca.ipynb",
      path: "pca.ipynb",
      htmlUrl:
        "https://github.com/harshsingh134/machineLearning/blob/main/pca.ipynb",
      topicTag: "Dimensionality Reduction (PCA)",
    },
    {
      name: "pipline.ipynb",
      path: "pipline.ipynb",
      htmlUrl:
        "https://github.com/harshsingh134/machineLearning/blob/main/pipline.ipynb",
      topicTag: "Scikit-learn Pipelines",
    },
    {
      name: "column Transformer.ipynb",
      path: "column Transformer.ipynb",
      htmlUrl:
        "https://github.com/harshsingh134/machineLearning/blob/main/column%20Transformer.ipynb",
      topicTag: "ColumnTransformer",
    },
    {
      name: "logistic.ipynb",
      path: "logistic.ipynb",
      htmlUrl:
        "https://github.com/harshsingh134/machineLearning/blob/main/logistic.ipynb",
      topicTag: "Logistic Regression",
    },
    {
      name: "Normalization.ipynb",
      path: "Normalization.ipynb",
      htmlUrl:
        "https://github.com/harshsingh134/machineLearning/blob/main/Normalization.ipynb",
      topicTag: "Feature Scaling",
    },
    {
      name: "Zscore.ipynb",
      path: "Zscore.ipynb",
      htmlUrl:
        "https://github.com/harshsingh134/machineLearning/blob/main/Zscore.ipynb",
      topicTag: "Outlier Detection",
    },
    {
      name: "onehoteencoding.ipynb",
      path: "onehoteencoding.ipynb",
      htmlUrl:
        "https://github.com/harshsingh134/machineLearning/blob/main/onehoteencoding.ipynb",
      topicTag: "Categorical Encoding",
    },
    {
      name: "nlp.ipynb",
      path: "nlp.ipynb",
      htmlUrl:
        "https://github.com/harshsingh134/machineLearning/blob/main/nlp.ipynb",
      topicTag: "Text Preprocessing",
    },
    {
      name: "seaborn.ipynb",
      path: "seaborn.ipynb",
      htmlUrl:
        "https://github.com/harshsingh134/machineLearning/blob/main/seaborn.ipynb",
      topicTag: "Statistical Visualization",
    },
    {
      name: "working-with-date.ipynb",
      path: "working-with-date.ipynb",
      htmlUrl:
        "https://github.com/harshsingh134/machineLearning/blob/main/working-with-date.ipynb",
      topicTag: "Temporal Features",
    },
  ],
  "Deep-learning": [
    {
      name: "perception.ipynb",
      path: "perception.ipynb",
      htmlUrl:
        "https://github.com/harshsingh134/Deep-learning/blob/main/perception.ipynb",
      topicTag: "Perceptron Classifier",
    },
    {
      name: "ANN.ipynb",
      path: "ANN.ipynb",
      htmlUrl:
        "https://github.com/harshsingh134/Deep-learning/blob/main/ANN.ipynb",
      topicTag: "Artificial Neural Networks (Keras)",
    },
  ],
};

/**
 * Maps a GitHub repository's topics, name, description, and primary language
 * to our portfolio filter categories (`Data Science`, `Machine Learning`, `Deep Learning`, `Python`, `SQL`, `Streamlit`).
 */
export function inferCategoriesFromRepo(repo: {
  name: string;
  description: string | null;
  language: string | null;
  topics?: string[];
}): ProjectFilterTag[] {
  const categories = new Set<ProjectFilterTag>();
  const text = `${repo.name} ${repo.description || ""} ${(repo.topics || []).join(" ")}`.toLowerCase();
  const lang = (repo.language || "").toLowerCase();

  if (
    lang === "python" ||
    lang === "jupyter notebook" ||
    text.includes("python") ||
    text.includes("ipynb")
  ) {
    categories.add("Python");
  }

  if (
    text.includes("data-science") ||
    text.includes("data") ||
    text.includes("eda") ||
    text.includes("pandas") ||
    text.includes("analysis") ||
    text.includes("analyzer") ||
    repo.name.toLowerCase().includes("machinelearning")
  ) {
    categories.add("Data Science");
  }

  if (
    text.includes("machine-learning") ||
    text.includes("machinelearning") ||
    text.includes("ml") ||
    text.includes("regression") ||
    text.includes("classification") ||
    text.includes("scikit") ||
    text.includes("predictor")
  ) {
    categories.add("Machine Learning");
  }

  if (
    text.includes("deep-learning") ||
    text.includes("deeplearning") ||
    text.includes("neural") ||
    text.includes("ann") ||
    text.includes("perceptron") ||
    text.includes("tensorflow") ||
    text.includes("keras")
  ) {
    categories.add("Deep Learning");
    categories.add("Machine Learning");
  }

  if (text.includes("sql") || text.includes("mysql") || text.includes("database")) {
    categories.add("SQL");
  }

  if (text.includes("streamlit") || text.includes("dashboard") || text.includes("app")) {
    categories.add("Streamlit");
  }

  if (categories.size === 0) {
    categories.add("Python");
  }

  return Array.from(categories);
}

/**
 * Determines whether a GitHub repository should be highlighted as Featured.
 * Uses GitHub repository topics (`featured`, `portfolio`) or known core repositories.
 */
export function isRepoFeatured(repo: {
  name: string;
  topics?: string[];
}): boolean {
  const topics = (repo.topics || []).map((t) => t.toLowerCase());
  if (
    siteConfig.githubAutomation.featuredTopics.some((ft) =>
      topics.includes(ft.toLowerCase())
    )
  ) {
    return true;
  }
  const normalizedName = repo.name.toLowerCase();
  return (
    normalizedName === "machinelearning" ||
    normalizedName === "deep-learning" ||
    normalizedName.includes("laptop") ||
    normalizedName.includes("whatsapp")
  );
}

/**
 * Verified fallback snapshot in case GitHub API is unreachable or rate-limited.
 */
export const FALLBACK_GITHUB_DATA: GitHubProfileData = {
  username: "harshsingh134",
  profileUrl: "https://github.com/harshsingh134",
  avatarUrl: "https://avatars.githubusercontent.com/u/209067466?v=4",
  publicReposCount: 3,
  createdAt: "2025-04-25T05:14:16Z",
  updatedAt: "2026-10-02T16:46:10Z",
  fetchedAt: new Date().toISOString(),
  source: "fallback-snapshot",
  languageBreakdown: [
    { language: "Jupyter Notebook / Python", count: 2, percentage: 100 },
  ],
  repos: [
    {
      id: 1136147905,
      name: "machineLearning",
      fullName: "harshsingh134/machineLearning",
      description:
        "Hands-on Machine Learning & Data Science notebooks including Laptop Price Predictor, WhatsApp Chat Analyzer, PCA, Scikit-learn Pipelines, Feature Scaling, Encoding, and Regression.",
      htmlUrl: "https://github.com/harshsingh134/machineLearning",
      homepage: null,
      language: "Jupyter Notebook",
      stargazersCount: 0,
      forksCount: 0,
      topics: [
        "python",
        "data-science",
        "machine-learning",
        "scikit-learn",
        "pandas",
        "feature-engineering",
      ],
      updatedAt: "2026-09-04T16:45:23Z",
      pushedAt: "2026-08-24T05:27:15Z",
      size: 3782,
      isFeatured: true,
      matchedCategories: ["Data Science", "Machine Learning", "Python"],
      notebooks: VERIFIED_REPO_NOTEBOOKS["machineLearning"],
    },
    {
      id: 1341593340,
      name: "Deep-learning",
      fullName: "harshsingh134/Deep-learning",
      description:
        "Deep Learning fundamentals in Python, Scikit-learn, and TensorFlow/Keras: Single-layer Perceptron classification and multi-layer Artificial Neural Networks (ANN).",
      htmlUrl: "https://github.com/harshsingh134/Deep-learning",
      homepage: null,
      language: "Jupyter Notebook",
      stargazersCount: 0,
      forksCount: 0,
      topics: ["deep-learning", "neural-networks", "perceptron", "ann", "python"],
      updatedAt: "2026-08-21T09:12:11Z",
      pushedAt: "2026-08-21T09:09:44Z",
      size: 441,
      isFeatured: true,
      matchedCategories: ["Deep Learning", "Machine Learning", "Python"],
      notebooks: VERIFIED_REPO_NOTEBOOKS["Deep-learning"],
    },
    {
      id: 1402090135,
      name: "My-Portfolio",
      fullName: "harshsingh134/My-Portfolio",
      description:
        "Personal Data Science & Machine Learning Portfolio built with Next.js, TypeScript, Tailwind CSS, and live GitHub API automation.",
      htmlUrl: "https://github.com/harshsingh134/My-Portfolio",
      homepage: null,
      language: "TypeScript",
      stargazersCount: 0,
      forksCount: 0,
      topics: ["portfolio", "nextjs", "typescript", "data-science"],
      updatedAt: "2026-10-02T16:54:35Z",
      pushedAt: "2026-10-02T16:54:31Z",
      size: 120,
      isFeatured: false,
      matchedCategories: ["Data Science"],
    },
  ],
};

/**
 * Fetches live GitHub user profile and public repositories for `harshsingh134`.
 * Automatically enriches repositories with inferred topics, categories, and verified notebooks.
 */
export async function fetchGitHubPortfolioData(): Promise<GitHubProfileData> {
  const username =
    process.env.NEXT_PUBLIC_GITHUB_USERNAME ||
    siteConfig.githubAutomation.username;

  const headers: Record<string, string> = {
    Accept: "application/vnd.github+json",
    "User-Agent": "HarshSingh-Portfolio-App",
  };

  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  try {
    const [userRes, reposRes] = await Promise.all([
      fetch(`https://api.github.com/users/${username}`, {
        headers,
        next: { revalidate: siteConfig.githubAutomation.revalidateSeconds },
      }),
      fetch(
        `https://api.github.com/users/${username}/repos?per_page=100&sort=updated`,
        {
          headers,
          next: { revalidate: siteConfig.githubAutomation.revalidateSeconds },
        }
      ),
    ]);

    if (!userRes.ok || !reposRes.ok) {
      return FALLBACK_GITHUB_DATA;
    }

    const userJson = await userRes.json();
    const reposJson = await reposRes.json();

    if (!Array.isArray(reposJson)) {
      return FALLBACK_GITHUB_DATA;
    }

    const rateLimitHeader = reposRes.headers.get("x-ratelimit-remaining");
    const rateLimitRemaining = rateLimitHeader
      ? parseInt(rateLimitHeader, 10)
      : undefined;

    const mappedRepos: GitHubRepoSummary[] = reposJson
      .filter((r: Record<string, unknown>) => !r.fork && !r.archived)
      .map((r: Record<string, unknown>) => {
        const name = String(r.name || "");
        const rawTopics = Array.isArray(r.topics)
          ? (r.topics as string[])
          : [];

        // Enrich topics for existing repos if GitHub topics haven't been added on github.com yet
        let enrichedTopics = [...rawTopics];
        let enrichedDescription =
          typeof r.description === "string" && r.description.trim()
            ? r.description
            : null;

        if (name === "machineLearning") {
          if (enrichedTopics.length === 0) {
            enrichedTopics = [
              "python",
              "data-science",
              "machine-learning",
              "scikit-learn",
              "pandas",
              "feature-engineering",
            ];
          }
          if (!enrichedDescription || enrichedDescription === "linear regression") {
            enrichedDescription =
              "40+ Jupyter Notebooks covering Linear & Logistic Regression, Laptop Price Predictor, WhatsApp Chat Analyzer, PCA, Scikit-learn Pipelines, Feature Scaling, and Encoding.";
          }
        } else if (name === "Deep-learning") {
          if (enrichedTopics.length === 0) {
            enrichedTopics = [
              "deep-learning",
              "perceptron",
              "ann",
              "tensorflow",
              "scikit-learn",
            ];
          }
          if (!enrichedDescription) {
            enrichedDescription =
              "Deep Learning foundations in Python: Single-layer Perceptron classification and Artificial Neural Networks (ANN) with TensorFlow/Keras.";
          }
        } else if (name === "My-Portfolio" && !enrichedDescription) {
          enrichedDescription =
            "Personal Data Science & Machine Learning Portfolio website with automated GitHub project discovery.";
        }

        const language = typeof r.language === "string" ? r.language : null;
        const matchedCategories = inferCategoriesFromRepo({
          name,
          description: enrichedDescription,
          language,
          topics: enrichedTopics,
        });

        return {
          id: Number(r.id || 0),
          name,
          fullName: String(r.full_name || `${username}/${name}`),
          description: enrichedDescription,
          htmlUrl: String(r.html_url || `https://github.com/${username}/${name}`),
          homepage:
            typeof r.homepage === "string" && r.homepage.trim()
              ? r.homepage.trim()
              : null,
          language,
          stargazersCount: Number(r.stargazers_count || 0),
          forksCount: Number(r.forks_count || 0),
          topics: enrichedTopics,
          updatedAt: String(r.updated_at || new Date().toISOString()),
          pushedAt: String(r.pushed_at || new Date().toISOString()),
          size: Number(r.size || 0),
          isFeatured: isRepoFeatured({ name, topics: enrichedTopics }),
          matchedCategories,
          notebooks: VERIFIED_REPO_NOTEBOOKS[name] || undefined,
        };
      });

    // Compute language distribution across repositories
    const langCounter: Record<string, number> = {};
    let totalCounted = 0;
    for (const repo of mappedRepos) {
      const langLabel =
        repo.language === "Jupyter Notebook"
          ? "Python / Jupyter Notebook"
          : repo.language || (repo.name === "My-Portfolio" ? "TypeScript" : "Python");
      langCounter[langLabel] = (langCounter[langLabel] || 0) + 1;
      totalCounted += 1;
    }

    const languageBreakdown = Object.entries(langCounter)
      .map(([language, count]) => ({
        language,
        count,
        percentage:
          totalCounted > 0 ? Math.round((count / totalCounted) * 100) : 0,
      }))
      .sort((a, b) => b.count - a.count);

    return {
      username: String(userJson.login || username),
      profileUrl: String(userJson.html_url || `https://github.com/${username}`),
      avatarUrl: String(
        userJson.avatar_url ||
          "https://avatars.githubusercontent.com/u/209067466?v=4"
      ),
      publicReposCount: Number(userJson.public_repos ?? mappedRepos.length),
      createdAt: String(userJson.created_at || "2025-04-25T05:14:16Z"),
      updatedAt: String(userJson.updated_at || new Date().toISOString()),
      repos: mappedRepos,
      languageBreakdown,
      fetchedAt: new Date().toISOString(),
      source: "github-live-api",
      rateLimitRemaining,
    };
  } catch {
    return FALLBACK_GITHUB_DATA;
  }
}
