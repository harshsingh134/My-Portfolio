import React from "react";
import {
  GraduationCap,
  Code,
  Compass,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export function About() {
  const { about } = siteConfig;

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="py-16 sm:py-24 border-b border-border bg-background"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Section Header & Personal Positioning */}
          <div className="lg:col-span-5 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary font-mono text-xs font-semibold">
              <Compass className="w-3.5 h-3.5" />
              <span>01 · ABOUT &amp; POSITIONING</span>
            </div>

            <h2
              id="about-heading"
              className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground leading-snug"
            >
              {about.headline}
            </h2>

            <blockquote className="p-4 rounded-xl bg-surface border-l-4 border-secondary text-sm text-foreground font-medium leading-relaxed shadow-sm">
              “{siteConfig.positioningStatement}”
            </blockquote>

            {/* Quick Verified Profile Facts */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3 pt-2">
              {about.quickFacts.map((fact) => (
                <div
                  key={fact.label}
                  className="p-3.5 rounded-xl bg-surface border border-border flex items-start justify-between gap-3"
                >
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-wider text-muted">
                      {fact.label}
                    </p>
                    <p className="text-sm font-semibold text-foreground mt-0.5">
                      {fact.value}
                    </p>
                    <p className="text-xs text-muted mt-0.5">{fact.subtext}</p>
                  </div>
                  {fact.isPlaceholder ? (
                    <span
                      className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 shrink-0"
                      title="Unverified in resume extract — set in src/config/siteConfig.ts"
                    >
                      <AlertCircle className="w-3 h-3" />
                      Placeholder
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono bg-accent/10 text-accent shrink-0">
                      <CheckCircle className="w-3 h-3" />
                      Verified
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Narrative Story & Core Pillars */}
          <div className="lg:col-span-7 space-y-6">
            <div className="rounded-2xl bg-surface border border-border p-6 sm:p-8 shadow-card space-y-4">
              <p className="text-base sm:text-lg font-medium text-foreground leading-relaxed">
                {about.leadParagraph}
              </p>

              {about.bodyParagraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-sm sm:text-base text-muted leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}

              {/* 3 Honest Working Principles */}
              <div className="pt-4 border-t border-border grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-3.5 rounded-xl bg-surface-elevated/60 border border-border">
                  <div className="flex items-center gap-2 text-secondary font-semibold text-xs mb-1">
                    <Code className="w-4 h-4" />
                    <span>Code-First Learning</span>
                  </div>
                  <p className="text-xs text-muted leading-relaxed">
                    Every concept—from Z-score outlier removal to PCA eigen-decomposition—is tested in public Jupyter notebooks.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-surface-elevated/60 border border-border">
                  <div className="flex items-center gap-2 text-accent font-semibold text-xs mb-1">
                    <GraduationCap className="w-4 h-4" />
                    <span>Strong CS Core</span>
                  </div>
                  <p className="text-xs text-muted leading-relaxed">
                    Backed by B.Tech Computer Science coursework in Data Structures, Algorithms, OOP, Java, C, and C++.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-surface-elevated/60 border border-border">
                  <div className="flex items-center gap-2 text-secondary font-semibold text-xs mb-1">
                    <CheckCircle className="w-4 h-4" />
                    <span>Practical Delivery</span>
                  </div>
                  <p className="text-xs text-muted leading-relaxed">
                    Translating trained models and regex parsers into interactive Streamlit web applications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
