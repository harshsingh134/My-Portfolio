"use client";

import React, { useMemo, useState } from "react";
import {
  Search,
  FolderGit2,
  Sparkles,
  Filter,
  X,
} from "lucide-react";
import {
  portfolioProjects,
  projectFilterTags,
  siteConfig,
} from "@/config/siteConfig";
import {
  GitHubRepoSummary,
  PortfolioProject,
  ProjectFilterTag,
} from "@/types/portfolio";
import { ProjectCard } from "@/components/ProjectCard";

interface ProjectGridProps {
  liveRepos?: GitHubRepoSummary[];
}

export function ProjectGrid({ liveRepos = [] }: ProjectGridProps) {
  const [activeFilter, setActiveFilter] = useState<ProjectFilterTag>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [onlyFeatured, setOnlyFeatured] = useState(false);

  // Merge our rich case-study projects with any newly created GitHub repositories
  // that match our portfolio topic criteria (Sections 10, 11, 12).
  const allProjects = useMemo(() => {
    const baseProjects = [...portfolioProjects];
    const knownRepoNames = new Set(
      baseProjects.map((p) => p.repoName.toLowerCase())
    );
    for (const ex of siteConfig.githubAutomation.excludedRepoNames) {
      knownRepoNames.add(ex.toLowerCase());
    }

    // Automatically discover any new public repo on harshsingh134's GitHub
    const dynamicProjects: PortfolioProject[] = liveRepos
      .filter((repo) => {
        if (knownRepoNames.has(repo.name.toLowerCase())) return false;
        // Include if tagged with any supported portfolio topic or if it's a Python/Jupyter DS/ML repo
        const hasTopicMatch = repo.topics.some((t) =>
          siteConfig.githubAutomation.supportedFilterTopics.includes(
            t.toLowerCase()
          )
        );
        const isPythonOrNotebook =
          repo.language === "Python" || repo.language === "Jupyter Notebook";
        return hasTopicMatch || isPythonOrNotebook;
      })
      .map((repo) => ({
        slug: repo.name.toLowerCase().replace(/[^a-z0-9-]+/g, "-"),
        title: repo.name.replace(/[-_]/g, " "),
        tagline: repo.description || "Public GitHub Data Science / ML Repository",
        oneLineProblem:
          repo.description ||
          `Hands-on implementation and experimentation in ${repo.name}.`,
        shortDescription:
          repo.description ||
          `Automatically discovered repository from github.com/${siteConfig.githubUsername}/${repo.name}.`,
        featured: repo.isFeatured,
        sourceType: "github-discovered",
        categories: repo.matchedCategories,
        technologies: [
          ...(repo.language ? [repo.language] : ["Python"]),
          ...repo.topics.slice(0, 5),
        ],
        keyFeatures: [
          `Automatically synced from GitHub repository ${repo.fullName}`,
          `Primary language: ${repo.language || "Python"}`,
          `Topics: ${
            repo.topics.length > 0 ? repo.topics.join(", ") : "Data Science / ML"
          }`,
        ],
        githubUrl: repo.htmlUrl,
        liveDemoUrl: repo.homepage || undefined,
        repoName: repo.name,
        lastUpdated: repo.updatedAt ? repo.updatedAt.slice(0, 10) : undefined,
        previewType: "ml-notebooks",
        caseStudy: {
          problem: {
            summary:
              repo.description ||
              `Technical exploration and project work inside ${repo.fullName}.`,
            context: [
              `Automatically synchronized from github.com/${repo.fullName}.`,
            ],
            userImpact: "Public open-source code and reproducible notebooks.",
          },
          dataset: {
            source: "See repository README and data scripts",
            recordsInfo: "Public repository dataset",
            features: repo.topics,
            preprocessingNotes: ["Inspect repository notebooks for full pipeline."],
          },
          approach: {
            overview: "End-to-end experimentation and implementation.",
            steps: [
              {
                stepNumber: "01",
                title: "Repository Implementation",
                detail: `View full source code at ${repo.htmlUrl}`,
              },
            ],
          },
          technology: [
            {
              category: "Stack",
              items: [repo.language || "Python", ...repo.topics],
              rationale: "Extracted automatically from GitHub repository metadata.",
            },
          ],
          model: {
            algorithmUsed: "See repository notebooks",
            whySelected: "Tailored to repository objective.",
            pipelineArchitecture: ["Data → Preprocessing → Modeling → Evaluation"],
          },
          evaluation: {
            methodology: "Notebook evaluation metrics",
            metricsUsed: ["See repository outputs"],
            verifiedObservations: ["Synced via GitHub REST API"],
          },
          deployment: {
            platform: "GitHub Repository",
            architecture: repo.htmlUrl,
            interactiveFeatures: repo.homepage ? [repo.homepage] : [],
            liveDemoUrl: repo.homepage || undefined,
          },
          learnings: ["Continuous learning through public project building."],
          futureImprovements: ["Expand README documentation and live demo links."],
        },
      }));

    return [...baseProjects, ...dynamicProjects];
  }, [liveRepos]);

  const filteredProjects = useMemo(() => {
    return allProjects.filter((project) => {
      if (onlyFeatured && !project.featured) return false;

      if (
        activeFilter !== "All" &&
        !project.categories.includes(activeFilter) &&
        !project.technologies.some(
          (t) => t.toLowerCase() === activeFilter.toLowerCase()
        )
      ) {
        return false;
      }

      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const haystack = [
          project.title,
          project.tagline,
          project.oneLineProblem,
          project.shortDescription,
          ...project.technologies,
          ...project.categories,
          ...project.keyFeatures,
        ]
          .join(" ")
          .toLowerCase();

        if (!haystack.includes(q)) return false;
      }

      return true;
    });
  }, [allProjects, activeFilter, searchQuery, onlyFeatured]);

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="py-16 sm:py-24 border-b border-border bg-surface/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent font-mono text-xs font-semibold">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>04 · FEATURED PROJECTS &amp; CASE STUDIES</span>
            </div>
            <h2
              id="projects-heading"
              className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground"
            >
              Projects &amp; Engineering Case Studies
            </h2>
            <p className="text-sm sm:text-base text-muted leading-relaxed">
              Each project includes a 9-stage engineering breakdown covering the problem, dataset, EDA &amp; feature engineering approach, model architecture, evaluation, and lessons learned—backed by real code on GitHub.
            </p>
          </div>

          {/* Featured Toggle */}
          <div className="flex items-center gap-2 self-start lg:self-auto">
            <button
              type="button"
              onClick={() => setOnlyFeatured(false)}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                !onlyFeatured
                  ? "bg-secondary text-white shadow-sm"
                  : "bg-surface border border-border text-muted hover:text-foreground"
              }`}
            >
              All Projects ({allProjects.length})
            </button>
            <button
              type="button"
              onClick={() => setOnlyFeatured(true)}
              className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                onlyFeatured
                  ? "bg-secondary text-white shadow-sm"
                  : "bg-surface border border-border text-muted hover:text-foreground"
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Flagship Only ({allProjects.filter((p) => p.featured).length})</span>
            </button>
          </div>
        </div>

        {/* Filter Bar + Search Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 rounded-2xl bg-surface border border-border shadow-sm">
          {/* Category Filter Pills (Section 32) */}
          <div
            role="tablist"
            aria-label="Filter projects by domain or technology"
            className="flex flex-wrap items-center gap-1.5"
          >
            <span className="inline-flex items-center gap-1 text-xs font-mono text-muted mr-1.5">
              <Filter className="w-3.5 h-3.5" />
              Filter:
            </span>
            {projectFilterTags.map((tag) => (
              <button
                key={tag}
                type="button"
                role="tab"
                aria-selected={activeFilter === tag}
                onClick={() => setActiveFilter(tag)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeFilter === tag
                    ? "bg-secondary text-white"
                    : "bg-surface-elevated text-muted hover:text-foreground"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Search Input (Section 33) */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-muted absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search name, tech, PPI, regex..."
              aria-label="Search projects by name, technology, or topic"
              className="w-full pl-9 pr-8 py-2 rounded-xl text-xs bg-surface-elevated border border-border text-foreground placeholder:text-muted focus:outline-none focus:border-secondary"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                aria-label="Clear project search"
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted hover:text-foreground"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Project Cards Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl bg-surface border border-border p-10 text-center space-y-3">
            <p className="text-base font-semibold text-foreground">
              No projects match “{searchQuery || activeFilter}”
            </p>
            <p className="text-xs text-muted max-w-md mx-auto">
              {activeFilter === "SQL"
                ? "SQL is part of my verified technical toolkit and coursework; dedicated standalone SQL repository projects will appear here automatically once tagged with 'sql' on GitHub."
                : "Try clearing the search query or switching to the 'All' category filter."}
            </p>
            <button
              type="button"
              onClick={() => {
                setActiveFilter("All");
                setSearchQuery("");
                setOnlyFeatured(false);
              }}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-secondary text-white"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
