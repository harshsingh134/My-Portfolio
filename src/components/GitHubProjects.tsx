"use client";

import React, { useState } from "react";
import {
  Github,
  RefreshCw,
  ExternalLink,
  GitFork,
  Star,
  FileCode2,
  CheckCircle2,
  Clock,
  Tag,
  Sparkles,
  BookOpen,
} from "lucide-react";
import { GitHubProfileData } from "@/types/portfolio";
import { siteConfig } from "@/config/siteConfig";

interface GitHubProjectsProps {
  initialData: GitHubProfileData;
}

export function GitHubProjects({ initialData }: GitHubProjectsProps) {
  const [data, setData] = useState<GitHubProfileData>(initialData);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [refreshError, setRefreshError] = useState<string | null>(null);
  const [selectedRepoName, setSelectedRepoName] = useState<string>("machineLearning");

  const handleRefresh = async () => {
    setIsRefreshing(true);
    setRefreshError(null);
    try {
      const res = await fetch("/api/github", { cache: "no-store" });
      if (!res.ok) throw new Error("GitHub API request failed");
      const fresh: GitHubProfileData = await res.json();
      setData(fresh);
    } catch {
      setRefreshError(
        "GitHub API temporarily unavailable — displaying verified cached snapshot."
      );
    } finally {
      setIsRefreshing(false);
    }
  };

  const activeNotebookRepo =
    data.repos.find((r) => r.name === selectedRepoName) ||
    data.repos.find((r) => r.notebooks && r.notebooks.length > 0);

  return (
    <section
      id="github"
      aria-labelledby="github-heading"
      className="py-16 sm:py-24 border-b border-border bg-background"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary font-mono text-xs font-semibold">
              <Github className="w-3.5 h-3.5" />
              <span>05 · LIVE GITHUB INTEGRATION &amp; REPOSITORIES</span>
            </div>
            <h2
              id="github-heading"
              className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground"
            >
              GitHub Activity &amp; Automated Project Sync
            </h2>
            <p className="text-sm sm:text-base text-muted leading-relaxed">
              Connected directly to{" "}
              <a
                href={siteConfig.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-secondary hover:underline"
              >
                github.com/{siteConfig.githubUsername}
              </a>
              . New public repositories and updates are fetched automatically via a server-side GitHub API layer with topic filtering and fallback caching.
            </p>
          </div>

          {/* Sync Status & Refresh Action */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-surface border border-border text-xs">
              <span
                className={`w-2 h-2 rounded-full ${
                  data.source === "github-live-api"
                    ? "bg-emerald-500"
                    : "bg-amber-500"
                }`}
              />
              <span className="font-mono text-foreground font-medium">
                {data.source === "github-live-api"
                  ? "Live GitHub API Connected"
                  : "Verified Snapshot Active"}
              </span>
            </div>

            <button
              type="button"
              onClick={handleRefresh}
              disabled={isRefreshing}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-surface hover:bg-surface-elevated text-foreground border border-border transition-colors disabled:opacity-50"
            >
              <RefreshCw
                className={`w-3.5 h-3.5 ${isRefreshing ? "animate-spin" : ""}`}
              />
              <span>{isRefreshing ? "Syncing..." : "Sync GitHub"}</span>
            </button>

            <a
              href={data.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-secondary text-white hover:bg-secondary/90 transition-colors"
            >
              <span>Open GitHub Profile</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {refreshError && (
          <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/25 text-xs text-foreground">
            {refreshError}
          </div>
        )}

        {/* Top GitHub Profile Summary Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl bg-surface border border-border shadow-card">
            <p className="font-mono text-xs text-muted uppercase">
              GitHub Handle
            </p>
            <p className="text-lg font-bold text-foreground mt-1 font-mono">
              @{data.username}
            </p>
            <p className="text-xs text-muted mt-1">
              Active since {new Date(data.createdAt).getFullYear()}
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-surface border border-border shadow-card">
            <p className="font-mono text-xs text-muted uppercase">
              Public Repositories
            </p>
            <p className="text-2xl font-extrabold text-foreground mt-1">
              {data.publicReposCount}
            </p>
            <p className="text-xs text-muted mt-1">
              Machine Learning, Deep Learning &amp; Portfolio
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-surface border border-border shadow-card">
            <p className="font-mono text-xs text-muted uppercase">
              Primary Environment
            </p>
            <p className="text-lg font-bold text-foreground mt-1">
              Python &amp; Jupyter
            </p>
            <p className="text-xs text-muted mt-1">
              40+ hands-on `.ipynb` notebooks committed
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-surface border border-border shadow-card">
            <p className="font-mono text-xs text-muted uppercase">
              Topic Automation Filter
            </p>
            <div className="flex flex-wrap gap-1 mt-1.5">
              {["featured", "data-science", "machine-learning", "streamlit"].map(
                (topic) => (
                  <span
                    key={topic}
                    className="font-mono text-[10px] px-2 py-0.5 rounded bg-surface-elevated border border-border text-secondary"
                  >
                    #{topic}
                  </span>
                )
              )}
            </div>
          </div>
        </div>

        {/* Repository Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.repos.map((repo) => (
            <div
              key={repo.id}
              className="rounded-2xl bg-surface border border-border hover:border-secondary/40 p-6 shadow-card flex flex-col justify-between space-y-5 transition-all"
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <FileCode2 className="w-5 h-5 text-secondary shrink-0" />
                    <a
                      href={repo.htmlUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-base text-foreground hover:text-secondary transition-colors break-all"
                    >
                      {repo.name}
                    </a>
                  </div>
                  {repo.isFeatured && (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono bg-accent/10 text-accent border border-accent/25 shrink-0">
                      <Sparkles className="w-2.5 h-2.5" />
                      Featured
                    </span>
                  )}
                </div>

                <p className="text-xs sm:text-sm text-muted leading-relaxed">
                  {repo.description}
                </p>

                {/* Topics */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {repo.topics.slice(0, 6).map((topic) => (
                    <span
                      key={topic}
                      className="inline-flex items-center gap-1 font-mono text-[10px] px-2 py-0.5 rounded-md bg-surface-elevated text-foreground border border-border"
                    >
                      <Tag className="w-2.5 h-2.5 text-secondary" />
                      {topic}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-border space-y-3">
                <div className="flex items-center justify-between text-xs text-muted font-mono">
                  <span>{repo.language || "Python"}</span>
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center gap-1">
                      <Star className="w-3.5 h-3.5" />
                      {repo.stargazersCount}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <GitFork className="w-3.5 h-3.5" />
                      {repo.forksCount}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1 text-[11px] text-muted">
                    <Clock className="w-3 h-3" />
                    Updated {new Date(repo.updatedAt).toLocaleDateString()}
                  </span>

                  <a
                    href={repo.htmlUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-secondary hover:underline"
                  >
                    <span>Inspect Repo</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Notebook Explorer inside harshsingh134's ML & DL Repositories */}
        {activeNotebookRepo && activeNotebookRepo.notebooks && (
          <div className="rounded-2xl bg-surface border border-border p-6 sm:p-8 shadow-card space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border pb-4">
              <div>
                <div className="inline-flex items-center gap-1.5 text-xs font-mono text-accent font-semibold mb-1">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>DIRECT NOTEBOOK VERIFICATION</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-foreground">
                  Inspect My Public Jupyter Notebooks on GitHub
                </h3>
                <p className="text-xs sm:text-sm text-muted mt-0.5">
                  Click any notebook below to open the actual `.ipynb` code directly in{" "}
                  <span className="font-mono text-foreground">
                    {activeNotebookRepo.fullName}
                  </span>
                  .
                </p>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                {["machineLearning", "Deep-learning"].map((repoKey) => (
                  <button
                    key={repoKey}
                    type="button"
                    onClick={() => setSelectedRepoName(repoKey)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-mono font-semibold transition-all ${
                      selectedRepoName === repoKey
                        ? "bg-secondary text-white shadow-sm"
                        : "bg-surface-elevated text-muted hover:text-foreground border border-border"
                    }`}
                  >
                    {repoKey}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {activeNotebookRepo.notebooks.map((nb) => (
                <a
                  key={nb.path}
                  href={nb.htmlUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3.5 rounded-xl bg-surface-elevated/50 hover:bg-surface-elevated border border-border hover:border-secondary/40 flex items-start justify-between gap-3 transition-all"
                >
                  <div className="space-y-1 min-w-0">
                    <p className="font-mono text-xs font-semibold text-foreground group-hover:text-secondary truncate">
                      {nb.name}
                    </p>
                    <p className="text-[11px] text-muted flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-accent shrink-0" />
                      <span className="truncate">{nb.topicTag}</span>
                    </p>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-muted group-hover:text-secondary shrink-0 mt-0.5" />
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
