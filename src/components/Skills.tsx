"use client";

import React, { useState } from "react";
import {
  Code2,
  Database,
  BrainCircuit,
  Network,
  TableProperties,
  BarChart3,
  Rocket,
  Cpu,
  ExternalLink,
  Sparkles,
} from "lucide-react";
import { skillCategories } from "@/config/siteConfig";
import { SkillCategoryKey } from "@/types/portfolio";

const categoryIcons: Record<string, React.ReactNode> = {
  Code2: <Code2 className="w-4 h-4" />,
  Database: <Database className="w-4 h-4" />,
  BrainCircuit: <BrainCircuit className="w-4 h-4" />,
  Network: <Network className="w-4 h-4" />,
  TableProperties: <TableProperties className="w-4 h-4" />,
  BarChart3: <BarChart3 className="w-4 h-4" />,
  Rocket: <Rocket className="w-4 h-4" />,
  Cpu: <Cpu className="w-4 h-4" />,
};

const statusConfig = {
  core: {
    label: "Daily / Core Stack",
    badgeClass:
      "bg-accent/10 text-accent border border-accent/25",
    dotClass: "bg-accent",
  },
  practicing: {
    label: "Applied in Coursework & Labs",
    badgeClass:
      "bg-secondary/10 text-secondary border border-secondary/25",
    dotClass: "bg-secondary",
  },
  learning: {
    label: "Currently Learning",
    badgeClass:
      "bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/25",
    dotClass: "bg-amber-500",
  },
};

export function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<
    SkillCategoryKey | "all"
  >("all");

  const visibleCategories =
    selectedCategory === "all"
      ? skillCategories
      : skillCategories.filter((c) => c.id === selectedCategory);

  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="py-16 sm:py-24 border-b border-border bg-background"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary font-mono text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>03 · TECHNICAL SKILLS &amp; TOOLKIT</span>
            </div>
            <h2
              id="skills-heading"
              className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground"
            >
              Verified Technical Stack &amp; Focus Areas
            </h2>
            <p className="text-sm sm:text-base text-muted leading-relaxed">
              Organized by domain rather than arbitrary percentage bars. Each skill shows how I actually use it in projects, notebooks, or coursework—including areas I am actively learning right now.
            </p>
          </div>

          {/* Legend */}
          <div className="flex flex-wrap items-center gap-3 text-xs bg-surface border border-border rounded-xl px-4 py-2.5 shrink-0">
            <span className="flex items-center gap-1.5 text-foreground font-medium">
              <span className="w-2 h-2 rounded-full bg-accent" />
              Core Stack
            </span>
            <span className="flex items-center gap-1.5 text-foreground font-medium">
              <span className="w-2 h-2 rounded-full bg-secondary" />
              Applied / Practicing
            </span>
            <span className="flex items-center gap-1.5 text-foreground font-medium">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              Currently Learning
            </span>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div
          role="tablist"
          aria-label="Filter skills by category"
          className="flex flex-wrap items-center gap-2"
        >
          <button
            type="button"
            role="tab"
            aria-selected={selectedCategory === "all"}
            onClick={() => setSelectedCategory("all")}
            className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
              selectedCategory === "all"
                ? "bg-secondary text-white shadow-sm"
                : "bg-surface border border-border text-muted hover:text-foreground"
            }`}
          >
            All Categories ({skillCategories.reduce((acc, c) => acc + c.skills.length, 0)})
          </button>

          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              role="tab"
              aria-selected={selectedCategory === cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                selectedCategory === cat.id
                  ? "bg-secondary text-white shadow-sm"
                  : "bg-surface border border-border text-muted hover:text-foreground"
              }`}
            >
              {categoryIcons[cat.iconName]}
              <span>{cat.title}</span>
              <span className="font-mono text-[10px] opacity-80">
                ({cat.skills.length})
              </span>
            </button>
          ))}
        </div>

        {/* Skill Cluster Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {visibleCategories.map((category) => (
            <div
              key={category.id}
              className="rounded-2xl bg-surface border border-border p-6 shadow-card space-y-5"
            >
              <div className="flex items-start justify-between gap-3 border-b border-border pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-secondary/10 border border-secondary/20 text-secondary flex items-center justify-center shrink-0">
                    {categoryIcons[category.iconName]}
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-foreground">
                      {category.title}
                    </h3>
                    <p className="text-xs text-muted mt-0.5">
                      {category.subtitle}
                    </p>
                  </div>
                </div>
                <span className="font-mono text-xs px-2.5 py-1 rounded-lg bg-surface-elevated text-muted">
                  {category.skills.length} skills
                </span>
              </div>

              <div className="grid grid-cols-1 gap-3">
                {category.skills.map((skill) => {
                  const st = statusConfig[skill.status || "practicing"];
                  return (
                    <div
                      key={skill.name}
                      className="group p-3.5 rounded-xl bg-surface-elevated/50 hover:bg-surface-elevated border border-border hover:border-secondary/35 transition-all"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                        <div className="flex items-center gap-2">
                          <span
                            className={`w-2 h-2 rounded-full ${st.dotClass}`}
                          />
                          <span className="font-semibold text-sm text-foreground">
                            {skill.name}
                          </span>
                        </div>
                        <span
                          className={`font-mono text-[10px] px-2 py-0.5 rounded-full font-medium ${st.badgeClass}`}
                        >
                          {st.label}
                        </span>
                      </div>

                      <p className="text-xs text-muted leading-relaxed">
                        {skill.contextNote}
                      </p>

                      {skill.evidenceLink && (
                        <div className="mt-2 pt-2 border-t border-border/60 flex items-center justify-end">
                          <a
                            href={skill.evidenceLink}
                            target={
                              skill.evidenceLink.startsWith("http")
                                ? "_blank"
                                : undefined
                            }
                            rel={
                              skill.evidenceLink.startsWith("http")
                                ? "noopener noreferrer"
                                : undefined
                            }
                            className="inline-flex items-center gap-1 font-mono text-[11px] text-secondary hover:underline"
                          >
                            <span>{skill.evidenceLabel || "View Proof"}</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
