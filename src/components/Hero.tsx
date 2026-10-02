"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Github,
  FileText,
  Linkedin,
  Database,
  BarChart2,
  BrainCircuit,
  Rocket,
  CheckCircle2,
  Sparkles,
  Code2,
} from "lucide-react";
import {
  isValidExternalUrl,
  siteConfig,
} from "@/config/siteConfig";

const stageIcons: Record<string, React.ReactNode> = {
  data: <Database className="w-4 h-4" />,
  analysis: <BarChart2 className="w-4 h-4" />,
  ml: <BrainCircuit className="w-4 h-4" />,
  deployment: <Rocket className="w-4 h-4" />,
};

export function Hero() {
  const [activeStageIndex, setActiveStageIndex] = useState(1); // Default to Analysis/Feature Engineering or let user click any
  const stages = siteConfig.hero.pipelineStages;
  const activeStage = stages[activeStageIndex] || stages[0];
  const hasLinkedin = isValidExternalUrl(siteConfig.linkedinUrl);

  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-data-grid border-b border-border pt-8 pb-16 sm:pt-14 sm:pb-24"
    >
      {/* Subtle radial glow — kept understated per Section 21 */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[680px] h-[340px] bg-gradient-to-tr from-secondary/10 via-accent/10 to-transparent blur-3xl rounded-full"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Core Positioning, Headline, Bio & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            {/* Status & Positioning Pill */}
            <div className="inline-flex flex-wrap items-center gap-2 px-3 py-1.5 rounded-full bg-surface border border-border shadow-sm">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="font-mono text-xs font-medium text-foreground">
                {siteConfig.hero.eyebrow}
              </span>
              <span className="hidden sm:inline text-muted">·</span>
              <span className="hidden sm:inline text-xs text-accent font-medium">
                {siteConfig.availabilityBadge}
              </span>
            </div>

            {/* Primary Headline */}
            <h1
              id="hero-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground leading-[1.15]"
            >
              Turning Raw Data Into{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">
                Practical Models
              </span>{" "}
              &amp; Interactive Applications.
            </h1>

            {/* Supporting Introduction */}
            <p className="text-base sm:text-lg text-muted leading-relaxed max-w-2xl">
              {siteConfig.hero.supportingText}
            </p>

            {/* Recruiter 10-Second Summary Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              <div className="p-3 rounded-xl bg-surface border border-border">
                <p className="font-mono text-[11px] uppercase tracking-wider text-muted">
                  Who I Am
                </p>
                <p className="text-sm font-semibold text-foreground mt-0.5">
                  B.Tech CSE Student (’27)
                </p>
                <p className="text-xs text-muted mt-0.5">
                  Data Science &amp; ML Focus
                </p>
              </div>
              <div className="p-3 rounded-xl bg-surface border border-border">
                <p className="font-mono text-[11px] uppercase tracking-wider text-muted">
                  What I Build
                </p>
                <p className="text-sm font-semibold text-foreground mt-0.5">
                  EDA, ML Pipelines &amp; Apps
                </p>
                <p className="text-xs text-muted mt-0.5">
                  Python, Scikit-learn, Streamlit
                </p>
              </div>
              <div className="p-3 rounded-xl bg-surface border border-border">
                <p className="font-mono text-[11px] uppercase tracking-wider text-muted">
                  Looking For
                </p>
                <p className="text-sm font-semibold text-foreground mt-0.5">
                  DS / ML Internships
                </p>
                <p className="text-xs text-muted mt-0.5">
                  Collaborative AI &amp; Data Teams
                </p>
              </div>
            </div>

            {/* CTA Buttons: Primary (View Projects), Secondary (View GitHub), Resume, LinkedIn */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href="/#projects"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm bg-secondary text-white hover:bg-secondary/90 shadow-sm transition-all"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href={siteConfig.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl font-semibold text-sm bg-surface hover:bg-surface-elevated text-foreground border border-border hover:border-secondary/40 transition-all"
              >
                <Github className="w-4 h-4" />
                <span>View GitHub</span>
              </a>

              <Link
                href="/#resume"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl font-medium text-sm bg-surface hover:bg-surface-elevated text-foreground border border-border hover:border-accent/40 transition-all"
              >
                <FileText className="w-4 h-4 text-accent" />
                <span>Resume</span>
              </Link>

              {hasLinkedin ? (
                <a
                  href={siteConfig.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-3 rounded-xl font-medium text-sm bg-surface hover:bg-surface-elevated text-foreground border border-border transition-all"
                >
                  <Linkedin className="w-4 h-4 text-secondary" />
                  <span>LinkedIn</span>
                </a>
              ) : (
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 px-4 py-3 rounded-xl font-medium text-sm bg-surface hover:bg-surface-elevated text-muted hover:text-foreground border border-dashed border-border transition-all"
                  title="LinkedIn URL configurable in src/config/siteConfig.ts"
                >
                  <Linkedin className="w-4 h-4 text-secondary" />
                  <span>LinkedIn</span>
                  <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-surface-elevated text-muted">
                    [ADD LINK]
                  </span>
                </Link>
              )}
            </div>
          </div>

          {/* Right Column: Interactive Data → Analysis → Machine Learning → Deployment Pipeline */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-surface border border-border shadow-card p-5 sm:p-6 space-y-5">
              <div className="flex items-center justify-between border-b border-border pb-3.5">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-accent" />
                  <span className="font-mono text-xs font-semibold uppercase tracking-wider text-foreground">
                    Applied Workflow Pipeline
                  </span>
                </div>
                <span className="font-mono text-[11px] text-muted">
                  Interactive · Click Stage
                </span>
              </div>

              {/* Pipeline Nodes: Data → Analysis → Machine Learning → Deployment */}
              <div
                role="tablist"
                aria-label="Data Science Workflow Stages"
                className="grid grid-cols-2 sm:grid-cols-4 gap-2"
              >
                {stages.map((stage, idx) => {
                  const isSelected = idx === activeStageIndex;
                  return (
                    <button
                      key={stage.id}
                      role="tab"
                      aria-selected={isSelected}
                      type="button"
                      onClick={() => setActiveStageIndex(idx)}
                      className={`flex flex-col items-start p-2.5 rounded-xl border text-left transition-all ${
                        isSelected
                          ? "bg-secondary/10 border-secondary text-foreground shadow-sm"
                          : "bg-surface-elevated/50 border-border text-muted hover:text-foreground hover:border-secondary/40"
                      }`}
                    >
                      <div className="flex items-center justify-between w-full mb-1.5">
                        <span
                          className={`p-1.5 rounded-lg ${
                            isSelected
                              ? "bg-secondary text-white"
                              : "bg-surface text-muted"
                          }`}
                        >
                          {stageIcons[stage.id]}
                        </span>
                        <span className="font-mono text-[10px] opacity-75">
                          {stage.step}
                        </span>
                      </div>
                      <span className="text-xs font-semibold leading-tight">
                        {stage.label}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Visual Connector Bar */}
              <div className="relative h-1.5 w-full rounded-full bg-surface-elevated overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-secondary to-accent transition-all duration-300 rounded-full"
                  style={{
                    width: `${((activeStageIndex + 1) / stages.length) * 100}%`,
                  }}
                />
              </div>

              {/* Active Stage Inspector Card */}
              <div
                role="tabpanel"
                className="rounded-xl bg-surface-elevated/60 border border-border p-4 space-y-3"
              >
                <div className="flex items-center justify-between gap-2">
                  <h2 className="text-sm font-bold text-foreground">
                    {activeStage.step}. {activeStage.title}
                  </h2>
                  <span className="font-mono text-[11px] px-2 py-0.5 rounded-md bg-accent/10 text-accent font-medium">
                    Verified in Repo
                  </span>
                </div>

                <p className="text-xs text-muted leading-relaxed">
                  {activeStage.realExample}
                </p>

                {/* Verified Code Excerpt from Harsh's actual notebooks */}
                <div className="rounded-lg bg-slate-950 text-slate-100 p-3 font-mono text-[11px] overflow-x-auto border border-slate-800">
                  <div className="flex items-center justify-between text-[10px] text-slate-400 pb-1.5 mb-1.5 border-b border-slate-800">
                    <span className="flex items-center gap-1">
                      <Code2 className="w-3 h-3 text-teal-400" />
                      notebook_excerpt.py
                    </span>
                    <span>Python 3</span>
                  </div>
                  <pre className="leading-relaxed whitespace-pre">
                    <code>{activeStage.codePreview}</code>
                  </pre>
                </div>

                {/* Stage Tools */}
                <div className="flex flex-wrap items-center gap-1.5 pt-1">
                  {activeStage.tools.map((tool) => (
                    <span
                      key={tool}
                      className="font-mono text-[11px] px-2 py-0.5 rounded bg-surface border border-border text-foreground"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Credibility Principle Quote */}
              <div className="flex items-center justify-between text-xs text-muted pt-1">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0" />
                  <span>Every project backed by public GitHub code</span>
                </span>
                <Link
                  href="/#projects"
                  className="font-mono text-xs text-secondary hover:underline font-medium"
                >
                  Inspect Work →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
