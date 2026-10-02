import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  ArrowLeft,
  Github,
  ExternalLink,
  CheckCircle2,
  Code2,
  Database,
  BrainCircuit,
  BarChart3,
  Rocket,
  Lightbulb,
  Compass,
  Layers,
  AlertCircle,
  ArrowRight,
} from "lucide-react";
import {
  isValidExternalUrl,
  portfolioProjects,
  siteConfig,
} from "@/config/siteConfig";

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return portfolioProjects.map((project) => ({
    slug: project.slug,
  }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const project = portfolioProjects.find((p) => p.slug === params.slug);
  if (!project) {
    return {
      title: `Project Not Found | ${siteConfig.name}`,
    };
  }
  return {
    title: `${project.title} — Case Study | ${siteConfig.name}`,
    description: project.shortDescription,
    openGraph: {
      title: `${project.title} — Data Science Case Study | ${siteConfig.name}`,
      description: project.oneLineProblem,
      type: "article",
    },
  };
}

const sectionAnchors = [
  { id: "problem", num: "01", label: "Problem" },
  { id: "dataset", num: "02", label: "Dataset" },
  { id: "approach", num: "03", label: "Approach" },
  { id: "technology", num: "04", label: "Technology" },
  { id: "model", num: "05", label: "Model" },
  { id: "evaluation", num: "06", label: "Evaluation" },
  { id: "deployment", num: "07", label: "Deployment" },
  { id: "learnings", num: "08", label: "Learnings" },
  { id: "future", num: "09", label: "Future Improvements" },
];

export default function ProjectCaseStudyPage({ params }: PageProps) {
  const projectIndex = portfolioProjects.findIndex(
    (p) => p.slug === params.slug
  );
  if (projectIndex === -1) {
    notFound();
  }

  const project = portfolioProjects[projectIndex];
  const nextProject =
    portfolioProjects[(projectIndex + 1) % portfolioProjects.length];
  const { caseStudy } = project;
  const hasLiveDemo = isValidExternalUrl(project.liveDemoUrl);
  const hasGithub = isValidExternalUrl(project.githubUrl);

  return (
    <div className="min-h-screen bg-background">
      {/* Case Study Hero Header */}
      <section className="bg-data-grid border-b border-border pt-8 pb-12 sm:pt-12 sm:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-xs font-semibold text-muted hover:text-foreground px-3 py-1.5 rounded-lg bg-surface border border-border transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to All Projects</span>
            </Link>

            <div className="flex items-center gap-2">
              {project.categories.map((cat) => (
                <span
                  key={cat}
                  className="font-mono text-[11px] px-2.5 py-1 rounded-full bg-secondary/10 text-secondary font-medium"
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>

          <div className="max-w-4xl space-y-4">
            <p className="font-mono text-xs uppercase tracking-wider text-accent font-semibold">
              Engineering Case Study · {project.repoName}
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
              {project.title}
            </h1>
            <p className="text-base sm:text-xl text-muted leading-relaxed">
              {project.tagline}
            </p>
          </div>

          {/* Technology Pills & Action Links */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2 border-t border-border">
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-xs px-2.5 py-1 rounded-md bg-surface border border-border text-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-2.5 shrink-0">
              {hasGithub && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-secondary text-white hover:bg-secondary/90 shadow-sm transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>View Source on GitHub</span>
                </a>
              )}

              {hasLiveDemo && (
                <a
                  href={project.liveDemoUrl!}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-accent text-white hover:bg-accent/90 shadow-sm transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Open Live Demo</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Main 9-Section Case Study Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Sticky 01–09 Sidebar Navigation */}
          <aside className="lg:col-span-3 lg:sticky lg:top-24 rounded-2xl bg-surface border border-border p-4 space-y-3">
            <p className="font-mono text-[11px] uppercase tracking-wider text-muted font-semibold px-2">
              Case Study Index
            </p>
            <nav aria-label="Case study sections" className="space-y-1">
              {sectionAnchors.map((sec) => (
                <a
                  key={sec.id}
                  href={`#${sec.id}`}
                  className="flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-xs font-medium text-muted hover:text-foreground hover:bg-surface-elevated transition-colors"
                >
                  <span className="font-mono text-[11px] text-secondary font-semibold">
                    {sec.num}
                  </span>
                  <span>{sec.label}</span>
                </a>
              ))}
            </nav>
          </aside>

          {/* Right Content Column: 01 through 09 */}
          <div className="lg:col-span-9 space-y-10">
            {/* 01 — PROBLEM */}
            <section
              id="problem"
              className="rounded-2xl bg-surface border border-border p-6 sm:p-8 shadow-card space-y-4"
            >
              <div className="flex items-center gap-2 font-mono text-xs font-semibold text-secondary uppercase tracking-wider">
                <Compass className="w-4 h-4" />
                <span>01 — Problem</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                What problem was being solved?
              </h2>
              <p className="text-sm sm:text-base text-foreground leading-relaxed font-medium">
                {caseStudy.problem.summary}
              </p>
              <ul className="space-y-2 pt-1">
                {caseStudy.problem.context.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2.5 text-sm text-muted leading-relaxed"
                  >
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="p-4 rounded-xl bg-surface-elevated/70 border border-border mt-2">
                <p className="font-mono text-[11px] uppercase tracking-wider text-accent font-semibold">
                  Practical Application Goal
                </p>
                <p className="text-xs sm:text-sm text-foreground mt-1 leading-relaxed">
                  {caseStudy.problem.userImpact}
                </p>
              </div>
            </section>

            {/* 02 — DATASET */}
            <section
              id="dataset"
              className="rounded-2xl bg-surface border border-border p-6 sm:p-8 shadow-card space-y-5"
            >
              <div className="flex items-center gap-2 font-mono text-xs font-semibold text-accent uppercase tracking-wider">
                <Database className="w-4 h-4" />
                <span>02 — Dataset</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                Where did the data come from &amp; how is it structured?
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-surface-elevated/60 border border-border">
                  <p className="font-mono text-[11px] uppercase text-muted">
                    Data Source
                  </p>
                  <p className="text-sm font-semibold text-foreground mt-1">
                    {caseStudy.dataset.source}
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-surface-elevated/60 border border-border">
                  <p className="font-mono text-[11px] uppercase text-muted">
                    Shape &amp; Granularity
                  </p>
                  <p className="text-sm font-semibold text-foreground mt-1">
                    {caseStudy.dataset.recordsInfo}
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-bold text-foreground">
                  Features &amp; Attributes
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {caseStudy.dataset.features.map((feat, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded-lg bg-surface-elevated/40 border border-border font-mono text-xs text-foreground"
                    >
                      {feat}
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-bold text-foreground">
                  Data Cleaning &amp; Preprocessing Checks
                </h3>
                <ul className="space-y-1.5">
                  {caseStudy.dataset.preprocessingNotes.map((note, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-xs sm:text-sm text-muted"
                    >
                      <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                      <span>{note}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* 03 — APPROACH */}
            <section
              id="approach"
              className="rounded-2xl bg-surface border border-border p-6 sm:p-8 shadow-card space-y-6"
            >
              <div className="flex items-center gap-2 font-mono text-xs font-semibold text-secondary uppercase tracking-wider">
                <Layers className="w-4 h-4" />
                <span>03 — Approach</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                Step-by-Step Engineering Workflow
              </h2>
              <p className="text-sm sm:text-base text-muted leading-relaxed">
                {caseStudy.approach.overview}
              </p>

              <div className="space-y-4">
                {caseStudy.approach.steps.map((step) => (
                  <div
                    key={step.stepNumber}
                    className="p-5 rounded-xl bg-surface-elevated/50 border border-border space-y-3"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-md bg-secondary text-white">
                        Step {step.stepNumber}
                      </span>
                      <h3 className="text-base font-bold text-foreground">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-sm text-muted leading-relaxed">
                      {step.detail}
                    </p>
                    {step.codeSnippet && (
                      <div className="rounded-xl bg-slate-950 text-slate-100 p-4 font-mono text-xs overflow-x-auto border border-slate-800">
                        <div className="flex items-center justify-between text-[11px] text-slate-400 pb-2 mb-2 border-b border-slate-800">
                          <span className="flex items-center gap-1.5">
                            <Code2 className="w-3.5 h-3.5 text-teal-400" />
                            Verified Notebook Implementation
                          </span>
                          <span>Python</span>
                        </div>
                        <pre className="leading-relaxed">
                          <code>{step.codeSnippet}</code>
                        </pre>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* 04 — TECHNOLOGY */}
            <section
              id="technology"
              className="rounded-2xl bg-surface border border-border p-6 sm:p-8 shadow-card space-y-5"
            >
              <div className="flex items-center gap-2 font-mono text-xs font-semibold text-accent uppercase tracking-wider">
                <Code2 className="w-4 h-4" />
                <span>04 — Technology</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                Tools, Libraries &amp; Why They Were Chosen
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {caseStudy.technology.map((group) => (
                  <div
                    key={group.category}
                    className="p-4 rounded-xl bg-surface-elevated/50 border border-border space-y-2.5"
                  >
                    <h3 className="text-sm font-bold text-foreground">
                      {group.category}
                    </h3>
                    <div className="flex flex-wrap gap-1.5">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="font-mono text-xs px-2 py-0.5 rounded bg-surface border border-border text-secondary font-medium"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                    <p className="text-xs text-muted leading-relaxed">
                      {group.rationale}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* 05 — MODEL */}
            <section
              id="model"
              className="rounded-2xl bg-surface border border-border p-6 sm:p-8 shadow-card space-y-5"
            >
              <div className="flex items-center gap-2 font-mono text-xs font-semibold text-secondary uppercase tracking-wider">
                <BrainCircuit className="w-4 h-4" />
                <span>05 — Model &amp; Pipeline Architecture</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                {caseStudy.model.algorithmUsed}
              </h2>
              <p className="text-sm sm:text-base text-muted leading-relaxed">
                {caseStudy.model.whySelected}
              </p>

              <div className="space-y-2 pt-1">
                <p className="font-mono text-xs uppercase tracking-wider text-muted font-semibold">
                  Pipeline Flow
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {caseStudy.model.pipelineArchitecture.map((stage, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-xl bg-surface-elevated/60 border border-border flex items-start gap-2.5"
                    >
                      <span className="font-mono text-xs font-bold text-accent">
                        0{i + 1}
                      </span>
                      <span className="text-xs sm:text-sm text-foreground font-medium">
                        {stage}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 06 — EVALUATION */}
            <section
              id="evaluation"
              className="rounded-2xl bg-surface border border-border p-6 sm:p-8 shadow-card space-y-5"
            >
              <div className="flex items-center gap-2 font-mono text-xs font-semibold text-accent uppercase tracking-wider">
                <BarChart3 className="w-4 h-4" />
                <span>06 — Evaluation</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                How the Solution Was Evaluated
              </h2>
              <p className="text-sm sm:text-base text-muted leading-relaxed">
                {caseStudy.evaluation.methodology}
              </p>

              <div className="flex flex-wrap gap-2">
                {caseStudy.evaluation.metricsUsed.map((m) => (
                  <span
                    key={m}
                    className="font-mono text-xs px-3 py-1 rounded-lg bg-accent/10 text-accent border border-accent/25 font-medium"
                  >
                    {m}
                  </span>
                ))}
              </div>

              <ul className="space-y-2">
                {caseStudy.evaluation.verifiedObservations.map((obs, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2.5 text-sm text-foreground leading-relaxed"
                  >
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <span>{obs}</span>
                  </li>
                ))}
              </ul>

              {caseStudy.evaluation.metricPlaceholder && (
                <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/25 flex items-start gap-3">
                  <AlertCircle className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                  <div className="text-xs text-foreground space-y-1">
                    <p className="font-semibold text-amber-700 dark:text-amber-300">
                      Honest Metric Placeholder (No Fabricated Numbers)
                    </p>
                    <p className="font-mono text-muted">
                      {caseStudy.evaluation.metricPlaceholder}
                    </p>
                  </div>
                </div>
              )}
            </section>

            {/* 07 — DEPLOYMENT */}
            <section
              id="deployment"
              className="rounded-2xl bg-surface border border-border p-6 sm:p-8 shadow-card space-y-5"
            >
              <div className="flex items-center gap-2 font-mono text-xs font-semibold text-secondary uppercase tracking-wider">
                <Rocket className="w-4 h-4" />
                <span>07 — Deployment</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                Application Delivery ({caseStudy.deployment.platform})
              </h2>
              <p className="text-sm sm:text-base text-muted leading-relaxed">
                {caseStudy.deployment.architecture}
              </p>

              <div className="space-y-2">
                <h3 className="text-sm font-bold text-foreground">
                  Interactive Application Capabilities
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {caseStudy.deployment.interactiveFeatures.map((feat, i) => (
                    <li
                      key={i}
                      className="p-3 rounded-xl bg-surface-elevated/50 border border-border text-xs sm:text-sm text-foreground flex items-start gap-2"
                    >
                      <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* 08 — LEARNINGS & 09 — FUTURE IMPROVEMENTS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <section
                id="learnings"
                className="rounded-2xl bg-surface border border-border p-6 shadow-card space-y-4"
              >
                <div className="flex items-center gap-2 font-mono text-xs font-semibold text-accent uppercase tracking-wider">
                  <Lightbulb className="w-4 h-4" />
                  <span>08 — Key Learnings</span>
                </div>
                <h2 className="text-lg font-bold text-foreground">
                  What I Learned Building This
                </h2>
                <ul className="space-y-2.5">
                  {caseStudy.learnings.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-xs sm:text-sm text-muted leading-relaxed"
                    >
                      <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section
                id="future"
                className="rounded-2xl bg-surface border border-border p-6 shadow-card space-y-4"
              >
                <div className="flex items-center gap-2 font-mono text-xs font-semibold text-secondary uppercase tracking-wider">
                  <Compass className="w-4 h-4" />
                  <span>09 — Future Improvements</span>
                </div>
                <h2 className="text-lg font-bold text-foreground">
                  Next Engineering Iterations
                </h2>
                <ul className="space-y-2.5">
                  {caseStudy.futureImprovements.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-xs sm:text-sm text-muted leading-relaxed"
                    >
                      <ArrowRight className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            {/* Bottom Next Project Navigation */}
            <div className="rounded-2xl bg-surface border border-border p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <p className="font-mono text-xs text-muted uppercase">
                  Next Case Study
                </p>
                <p className="text-lg font-bold text-foreground mt-0.5">
                  {nextProject.title}
                </p>
                <p className="text-xs text-muted mt-0.5">
                  {nextProject.tagline}
                </p>
              </div>
              <Link
                href={`/projects/${nextProject.slug}`}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-secondary text-white hover:bg-secondary/90 transition-colors self-start sm:self-auto"
              >
                <span>Read Case Study</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
