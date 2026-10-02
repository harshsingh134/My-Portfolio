import React from "react";
import Link from "next/link";
import {
  Database,
  Sliders,
  BrainCircuit,
  BarChart3,
  LayoutDashboard,
  FileSearch,
  ExternalLink,
  Layers,
} from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

const capabilityIcons: Record<string, React.ReactNode> = {
  "data-analysis": <Database className="w-5 h-5 text-secondary" />,
  "feature-engineering": <Sliders className="w-5 h-5 text-accent" />,
  "machine-learning": <BrainCircuit className="w-5 h-5 text-secondary" />,
  "data-visualization": <BarChart3 className="w-5 h-5 text-accent" />,
  "ml-applications": <LayoutDashboard className="w-5 h-5 text-secondary" />,
  "text-analytics": <FileSearch className="w-5 h-5 text-accent" />,
};

export function Capabilities() {
  return (
    <section
      aria-labelledby="capabilities-heading"
      className="py-16 sm:py-20 border-b border-border bg-surface/40"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent font-mono text-xs font-semibold">
            <Layers className="w-3.5 h-3.5" />
            <span>02 · WHAT I CAN DO</span>
          </div>
          <h2
            id="capabilities-heading"
            className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground"
          >
            Translating Technical Skills Into Practical Capabilities
          </h2>
          <p className="text-sm sm:text-base text-muted leading-relaxed">
            Every capability listed below is grounded in my verified coursework and public GitHub notebooks—prioritizing inspectable evidence over generic claims.
          </p>
        </div>

        {/* Capabilities 6-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteConfig.capabilities.map((cap) => {
            const isInternal = cap.proofLink.startsWith("/");
            return (
              <div
                key={cap.id}
                className="group rounded-2xl bg-surface border border-border hover:border-secondary/40 p-6 shadow-card hover:shadow-card-hover transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-surface-elevated border border-border flex items-center justify-center">
                      {capabilityIcons[cap.id]}
                    </div>
                    <span className="font-mono text-[11px] text-muted">
                      Evidence-Backed
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-foreground group-hover:text-secondary transition-colors">
                    {cap.title}
                  </h3>

                  <p className="text-sm text-muted leading-relaxed">
                    {cap.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {cap.proofTools.map((tool) => (
                      <span
                        key={tool}
                        className="font-mono text-[11px] px-2 py-0.5 rounded-md bg-surface-elevated text-foreground border border-border"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 mt-5 border-t border-border">
                  {isInternal ? (
                    <Link
                      href={cap.proofLink}
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-secondary hover:underline"
                    >
                      <span>{cap.proofLabel}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </Link>
                  ) : (
                    <a
                      href={cap.proofLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-secondary hover:underline"
                    >
                      <span>{cap.proofLabel}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
