"use client";

import React from "react";
import Link from "next/link";
import {
  Github,
  ExternalLink,
  BookOpen,
  CheckCircle2,
  Laptop,
  MessageSquareText,
  BrainCircuit,
  Network,
  Sparkles,
} from "lucide-react";
import { PortfolioProject } from "@/types/portfolio";
import { isValidExternalUrl } from "@/config/siteConfig";

interface ProjectCardProps {
  project: PortfolioProject;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const hasLiveDemo = isValidExternalUrl(project.liveDemoUrl);
  const hasGithub = isValidExternalUrl(project.githubUrl);

  return (
    <article className="group rounded-2xl bg-surface border border-border hover:border-secondary/50 shadow-card hover:shadow-card-hover transition-all flex flex-col overflow-hidden">
      {/* Data-Science Visual Preview Header */}
      <div className="relative p-5 sm:p-6 bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950 text-white border-b border-border overflow-hidden">
        {/* Subtle decorative coordinate grid */}
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-15 bg-[radial-gradient(#6366f1_1px,transparent_1px)] [background-size:16px_16px]"
        />

        <div className="relative z-10 space-y-4">
          {/* Top badges */}
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              {project.featured && (
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-teal-500/20 text-teal-300 border border-teal-400/30">
                  <Sparkles className="w-3 h-3" />
                  Featured Project
                </span>
              )}
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-white/10 text-slate-200">
                {project.sourceType === "resume-verified"
                  ? "Resume + GitHub Verified"
                  : "GitHub Repository Lab"}
              </span>
            </div>

            {project.lastUpdated && (
              <span className="font-mono text-[11px] text-slate-400">
                Updated {project.lastUpdated}
              </span>
            )}
          </div>

          {/* Interactive Architecture Mini-Diagram inside Preview */}
          {project.previewType === "laptop-predictor" && (
            <div className="rounded-xl bg-slate-950/80 border border-slate-800 p-3.5 font-mono text-xs space-y-2">
              <div className="flex items-center justify-between text-slate-400 text-[11px]">
                <span className="flex items-center gap-1.5 text-indigo-300 font-semibold">
                  <Laptop className="w-3.5 h-3.5" />
                  laptop-price-predictor.ipynb
                </span>
                <span className="text-teal-400">1,303 rows · 12 cols</span>
              </div>
              <div className="grid grid-cols-4 gap-1.5 text-[10px] pt-1">
                <div className="p-2 rounded bg-slate-900 border border-slate-800 text-slate-300">
                  <div className="text-slate-500">01 Raw CSV</div>
                  <div className="font-semibold text-white truncate">
                    Ram / Weight / Screen
                  </div>
                </div>
                <div className="p-2 rounded bg-slate-900 border border-slate-800 text-slate-300">
                  <div className="text-slate-500">02 Engineer</div>
                  <div className="font-semibold text-teal-300 truncate">
                    PPI + IPS + Touch
                  </div>
                </div>
                <div className="p-2 rounded bg-slate-900 border border-slate-800 text-slate-300">
                  <div className="text-slate-500">03 Pipeline</div>
                  <div className="font-semibold text-indigo-300 truncate">
                    ColumnTransformer
                  </div>
                </div>
                <div className="p-2 rounded bg-slate-900 border border-slate-800 text-slate-300">
                  <div className="text-slate-500">04 App</div>
                  <div className="font-semibold text-emerald-300 truncate">
                    Streamlit UI
                  </div>
                </div>
              </div>
            </div>
          )}

          {project.previewType === "whatsapp-analyzer" && (
            <div className="rounded-xl bg-slate-950/80 border border-slate-800 p-3.5 font-mono text-xs space-y-2">
              <div className="flex items-center justify-between text-slate-400 text-[11px]">
                <span className="flex items-center gap-1.5 text-teal-300 font-semibold">
                  <MessageSquareText className="w-3.5 h-3.5" />
                  Whatachat.ipynb · Regex Engine
                </span>
                <span className="text-indigo-300">UTF-8 .txt Parser</span>
              </div>
              <div className="grid grid-cols-4 gap-1.5 text-[10px] pt-1">
                <div className="p-2 rounded bg-slate-900 border border-slate-800 text-slate-300">
                  <div className="text-slate-500">01 Export</div>
                  <div className="font-semibold text-white truncate">
                    Raw Chat .txt
                  </div>
                </div>
                <div className="p-2 rounded bg-slate-900 border border-slate-800 text-slate-300">
                  <div className="text-slate-500">02 Regex</div>
                  <div className="font-semibold text-teal-300 truncate">
                    re.split / findall
                  </div>
                </div>
                <div className="p-2 rounded bg-slate-900 border border-slate-800 text-slate-300">
                  <div className="text-slate-500">03 Extract</div>
                  <div className="font-semibold text-indigo-300 truncate">
                    Words, Emoji, Time
                  </div>
                </div>
                <div className="p-2 rounded bg-slate-900 border border-slate-800 text-slate-300">
                  <div className="text-slate-500">04 Dashboard</div>
                  <div className="font-semibold text-emerald-300 truncate">
                    Streamlit Charts
                  </div>
                </div>
              </div>
            </div>
          )}

          {project.previewType === "ml-notebooks" && (
            <div className="rounded-xl bg-slate-950/80 border border-slate-800 p-3.5 font-mono text-xs space-y-2">
              <div className="flex items-center justify-between text-slate-400 text-[11px]">
                <span className="flex items-center gap-1.5 text-indigo-300 font-semibold">
                  <BrainCircuit className="w-3.5 h-3.5" />
                  harshsingh134/machineLearning
                </span>
                <span className="text-teal-400">40+ Jupyter Notebooks</span>
              </div>
              <div className="flex flex-wrap gap-1.5 pt-1 text-[10px]">
                {[
                  "pca.ipynb",
                  "pipline.ipynb",
                  "logistic.ipynb",
                  "Normalization.ipynb",
                  "Zscore.ipynb",
                  "onehoteencoding.ipynb",
                ].map((nb) => (
                  <span
                    key={nb}
                    className="px-2 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300"
                  >
                    {nb}
                  </span>
                ))}
              </div>
            </div>
          )}

          {project.previewType === "dl-notebooks" && (
            <div className="rounded-xl bg-slate-950/80 border border-slate-800 p-3.5 font-mono text-xs space-y-2">
              <div className="flex items-center justify-between text-slate-400 text-[11px]">
                <span className="flex items-center gap-1.5 text-teal-300 font-semibold">
                  <Network className="w-3.5 h-3.5" />
                  harshsingh134/Deep-learning
                </span>
                <span className="text-indigo-300">Perceptron &amp; Keras ANN</span>
              </div>
              <div className="flex flex-wrap gap-1.5 pt-1 text-[10px]">
                {[
                  "perception.ipynb",
                  "ANN.ipynb",
                  "StandardScaler",
                  "Sequential(Dense, Dropout)",
                ].map((nb) => (
                  <span
                    key={nb}
                    className="px-2 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300"
                  >
                    {nb}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Title & Tagline */}
          <div>
            <Link
              href={`/projects/${project.slug}`}
              className="inline-block focus:outline-none"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-teal-300 transition-colors">
                {project.title}
              </h3>
            </Link>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              {project.tagline}
            </p>
          </div>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-5">
        <div className="space-y-4">
          {/* One-Line Problem Statement */}
          <div className="p-3.5 rounded-xl bg-surface-elevated/70 border border-border">
            <p className="font-mono text-[10px] uppercase tracking-wider text-secondary font-semibold">
              Problem Statement
            </p>
            <p className="text-xs sm:text-sm font-medium text-foreground mt-1 leading-relaxed">
              {project.oneLineProblem}
            </p>
          </div>

          {/* Short Description */}
          <p className="text-sm text-muted leading-relaxed">
            {project.shortDescription}
          </p>

          {/* Key Technical Highlights */}
          <div className="space-y-2">
            <p className="font-mono text-[11px] uppercase tracking-wider text-muted font-semibold">
              Key Technical Highlights
            </p>
            <ul className="space-y-1.5">
              {project.keyFeatures.slice(0, 4).map((feat, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-xs text-foreground leading-relaxed"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technology Tags */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="font-mono text-[11px] px-2.5 py-1 rounded-md bg-surface-elevated text-foreground border border-border"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons — Only show Live Demo or GitHub when corresponding URL exists */}
        <div className="pt-4 border-t border-border flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-2">
            <Link
              href={`/projects/${project.slug}`}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-secondary text-white hover:bg-secondary/90 transition-colors shadow-sm"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Case Study</span>
            </Link>

            {hasGithub && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-surface-elevated hover:bg-border/60 text-foreground border border-border transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
            )}

            {hasLiveDemo && (
              <a
                href={project.liveDemoUrl!}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-accent text-white hover:bg-accent/90 transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Live Demo</span>
              </a>
            )}
          </div>

          <Link
            href={`/projects/${project.slug}`}
            className="font-mono text-[11px] text-muted hover:text-secondary transition-colors"
          >
            01–09 Breakdown →
          </Link>
        </div>
      </div>
    </article>
  );
}
