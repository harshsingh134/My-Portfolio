import React from "react";
import Link from "next/link";
import {
  FileText,
  Clock,
  Calendar,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import { technicalNotes } from "@/config/siteConfig";

export function NotesSection() {
  return (
    <section
      id="notes"
      aria-labelledby="notes-heading"
      className="py-16 sm:py-24 border-b border-border bg-background"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary font-mono text-xs font-semibold">
            <FileText className="w-3.5 h-3.5" />
            <span>07 · TECHNICAL NOTES &amp; ML EXPERIMENTS</span>
          </div>
          <h2
            id="notes-heading"
            className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground"
          >
            Engineering Notes &amp; Notebook Breakdowns
          </h2>
          <p className="text-sm sm:text-base text-muted leading-relaxed">
            Short, practical write-ups documenting decisions from my Jupyter notebooks—from feature engineering math to dimensionality reduction experiments.
          </p>
        </div>

        {/* Notes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {technicalNotes.map((note) => (
            <article
              key={note.slug}
              className="group rounded-2xl bg-surface border border-border hover:border-secondary/40 p-6 shadow-card hover:shadow-card-hover transition-all flex flex-col justify-between space-y-5"
            >
              <div className="space-y-3.5">
                <div className="flex flex-wrap items-center gap-3 text-xs text-muted font-mono">
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-secondary" />
                    {note.date}
                  </span>
                  <span>·</span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-accent" />
                    {note.readingTime}
                  </span>
                </div>

                <Link
                  href={`/notes/${note.slug}`}
                  className="block focus:outline-none"
                >
                  <h3 className="text-lg sm:text-xl font-bold text-foreground group-hover:text-secondary transition-colors">
                    {note.title}
                  </h3>
                </Link>

                <p className="text-sm text-muted leading-relaxed">
                  {note.excerpt}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {note.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[11px] px-2.5 py-0.5 rounded-md bg-surface-elevated text-foreground border border-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-border flex items-center justify-between gap-2">
                <Link
                  href={`/notes/${note.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-secondary hover:underline"
                >
                  <span>Read Full Breakdown</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                {note.notebookSourceUrl && (
                  <a
                    href={note.notebookSourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-mono text-[11px] text-muted hover:text-foreground"
                  >
                    <span>Source .ipynb</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
