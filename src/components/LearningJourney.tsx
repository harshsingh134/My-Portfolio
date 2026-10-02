import React from "react";
import {
  TrendingUp,
  CheckCircle2,
  Clock,
  Target,
  Hammer,
  ArrowUpRight,
  BookOpenCheck,
} from "lucide-react";
import {
  learningJourneyStages,
  learningStatusHighlights,
  siteConfig,
} from "@/config/siteConfig";

const stageStatusBadge = {
  "foundation-built": {
    label: "Foundation Built",
    className: "bg-accent/10 text-accent border border-accent/25",
  },
  "active-practice": {
    label: "Active Practice",
    className: "bg-secondary/10 text-secondary border border-secondary/25",
  },
  expanding: {
    label: "Currently Learning",
    className:
      "bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/25",
  },
  "next-horizon": {
    label: "Next Horizon",
    className: "bg-surface-elevated text-muted border border-border",
  },
};

export function LearningJourney() {
  const { currentlyBuilding } = siteConfig;

  return (
    <section
      id="journey"
      aria-labelledby="journey-heading"
      className="py-16 sm:py-24 border-b border-border bg-surface/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent font-mono text-xs font-semibold">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>06 · LEARNING JOURNEY &amp; CURRENTLY BUILDING</span>
          </div>
          <h2
            id="journey-heading"
            className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground"
          >
            Continuous Progression: From Python Fundamentals to Applied ML
          </h2>
          <p className="text-sm sm:text-base text-muted leading-relaxed">
            Data science is a deep field. Rather than claiming premature mastery of everything, this roadmap documents what I have built, what I am actively practicing today, and where I am headed next.
          </p>
        </div>

        {/* "Currently Building" Status Dashboard (Section 30) */}
        <div className="rounded-2xl bg-surface border border-border p-6 sm:p-8 shadow-card space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border pb-4">
            <div className="flex items-center gap-2.5">
              <span className="p-2 rounded-xl bg-secondary/10 text-secondary">
                <Hammer className="w-5 h-5" />
              </span>
              <div>
                <h3 className="text-lg font-bold text-foreground">
                  Currently Building &amp; Learning
                </h3>
                <p className="text-xs text-muted">
                  Active technical focus · Updated {currentlyBuilding.lastUpdated}
                </p>
              </div>
            </div>

            <a
              href={currentlyBuilding.currentProject.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-surface-elevated hover:bg-border/50 text-foreground border border-border transition-colors"
            >
              <span>Inspect Active Repo</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-surface-elevated/60 border border-border space-y-1.5">
              <p className="font-mono text-[11px] uppercase tracking-wider text-secondary font-semibold">
                Current Project
              </p>
              <p className="text-sm font-bold text-foreground">
                {currentlyBuilding.currentProject.title}
              </p>
              <p className="text-xs text-muted leading-relaxed">
                {currentlyBuilding.currentProject.description}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-surface-elevated/60 border border-border space-y-1.5">
              <p className="font-mono text-[11px] uppercase tracking-wider text-accent font-semibold">
                Current Learning Topic
              </p>
              <p className="text-xs sm:text-sm text-foreground leading-relaxed font-medium">
                {currentlyBuilding.currentLearningTopic}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-surface-elevated/60 border border-border space-y-1.5">
              <p className="font-mono text-[11px] uppercase tracking-wider text-secondary font-semibold">
                Current Technical Focus
              </p>
              <p className="text-xs sm:text-sm text-muted leading-relaxed">
                {currentlyBuilding.currentTechnicalFocus}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-surface-elevated/60 border border-border space-y-1.5">
              <p className="font-mono text-[11px] uppercase tracking-wider text-amber-600 dark:text-amber-400 font-semibold">
                Next Milestone
              </p>
              <p className="text-xs sm:text-sm text-muted leading-relaxed">
                {currentlyBuilding.nextMilestone}
              </p>
            </div>
          </div>
        </div>

        {/* 3-Column Snapshot: Recently Learned / Currently Learning / Next Focus */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl bg-surface border border-border p-6 shadow-card space-y-4">
            <div className="flex items-center gap-2 text-accent font-bold text-sm">
              <BookOpenCheck className="w-4 h-4" />
              <span>Recently Learned &amp; Implemented</span>
            </div>
            <ul className="space-y-2.5">
              {learningStatusHighlights.recentlyLearned.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-xs sm:text-sm text-muted leading-relaxed"
                >
                  <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl bg-surface border border-border p-6 shadow-card space-y-4">
            <div className="flex items-center gap-2 text-secondary font-bold text-sm">
              <Clock className="w-4 h-4" />
              <span>Currently Learning</span>
            </div>
            <ul className="space-y-2.5">
              {learningStatusHighlights.currentlyLearning.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-xs sm:text-sm text-foreground leading-relaxed"
                >
                  <span className="w-2 h-2 rounded-full bg-secondary shrink-0 mt-1.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl bg-surface border border-border p-6 shadow-card space-y-4">
            <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-bold text-sm">
              <Target className="w-4 h-4" />
              <span>Next Focus Horizon</span>
            </div>
            <ul className="space-y-2.5">
              {learningStatusHighlights.nextFocus.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-xs sm:text-sm text-muted leading-relaxed"
                >
                  <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0 mt-1.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 8-Step Progression Pipeline: Python → Data Analysis → Statistics → ML → DL → Deployment → Real-world Projects → Professional DS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {learningJourneyStages.map((stage) => {
            const badge = stageStatusBadge[stage.status];
            return (
              <div
                key={stage.step}
                className="rounded-2xl bg-surface border border-border p-5 shadow-card flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-xs font-bold text-secondary">
                      STAGE {stage.step}
                    </span>
                    <span
                      className={`font-mono text-[10px] px-2 py-0.5 rounded-full font-medium ${badge.className}`}
                    >
                      {badge.label}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-foreground">
                      {stage.title}
                    </h3>
                    <p className="text-xs text-muted mt-0.5">{stage.subtitle}</p>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {stage.topics.map((topic) => (
                      <span
                        key={topic}
                        className="font-mono text-[10px] px-2 py-0.5 rounded bg-surface-elevated text-foreground border border-border"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="text-[11px] text-muted pt-3 border-t border-border leading-relaxed">
                  {stage.evidenceNote}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
