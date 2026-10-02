import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  ArrowLeft,
  Calendar,
  Clock,
  Code2,
  ExternalLink,
  BookOpen,
} from "lucide-react";
import { siteConfig, technicalNotes } from "@/config/siteConfig";

interface NotePageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return technicalNotes.map((note) => ({
    slug: note.slug,
  }));
}

export function generateMetadata({ params }: NotePageProps): Metadata {
  const note = technicalNotes.find((n) => n.slug === params.slug);
  if (!note) {
    return { title: `Note Not Found | ${siteConfig.name}` };
  }
  return {
    title: `${note.title} | ${siteConfig.name}`,
    description: note.excerpt,
  };
}

export default function TechnicalNotePage({ params }: NotePageProps) {
  const note = technicalNotes.find((n) => n.slug === params.slug);
  if (!note) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background py-10 sm:py-16">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <Link
            href="/#notes"
            className="inline-flex items-center gap-2 text-xs font-semibold text-muted hover:text-foreground px-3 py-1.5 rounded-lg bg-surface border border-border transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Notes</span>
          </Link>

          {note.notebookSourceUrl && (
            <a
              href={note.notebookSourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-secondary hover:underline"
            >
              <span>Inspect Source Notebook on GitHub</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>

        {/* Header */}
        <header className="space-y-4 border-b border-border pb-6">
          <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-muted">
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

          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-foreground leading-tight">
            {note.title}
          </h1>

          <p className="text-base text-muted leading-relaxed">{note.excerpt}</p>

          <div className="flex flex-wrap gap-1.5 pt-1">
            {note.tags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-xs px-2.5 py-0.5 rounded-md bg-surface border border-border text-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        {/* Sections */}
        <div className="space-y-8">
          {note.sections.map((sec, idx) => (
            <section
              key={idx}
              className="rounded-2xl bg-surface border border-border p-6 sm:p-8 shadow-card space-y-4"
            >
              <h2 className="text-lg sm:text-xl font-bold text-foreground">
                {sec.heading}
              </h2>

              {sec.paragraphs.map((p, pIdx) => (
                <p
                  key={pIdx}
                  className="text-sm sm:text-base text-muted leading-relaxed"
                >
                  {p}
                </p>
              ))}

              {sec.codeBlock && (
                <div className="rounded-xl bg-slate-950 text-slate-100 p-4 font-mono text-xs overflow-x-auto border border-slate-800">
                  <div className="flex items-center justify-between text-[11px] text-slate-400 pb-2 mb-2 border-b border-slate-800">
                    <span className="flex items-center gap-1.5">
                      <Code2 className="w-3.5 h-3.5 text-teal-400" />
                      {sec.codeBlock.caption || "Python Snippet"}
                    </span>
                    <span>{sec.codeBlock.language}</span>
                  </div>
                  <pre className="leading-relaxed">
                    <code>{sec.codeBlock.code}</code>
                  </pre>
                </div>
              )}
            </section>
          ))}
        </div>

        {/* Related Project CTA */}
        {note.relatedProjectSlug && (
          <div className="rounded-2xl bg-surface border border-border p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <p className="font-mono text-xs text-accent uppercase font-semibold">
                Related Engineering Case Study
              </p>
              <p className="text-base font-bold text-foreground mt-0.5">
                Inspect the full 9-stage project breakdown
              </p>
            </div>
            <Link
              href={`/projects/${note.relatedProjectSlug}`}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-secondary text-white hover:bg-secondary/90 transition-colors self-start sm:self-auto"
            >
              <BookOpen className="w-4 h-4" />
              <span>Open Case Study</span>
            </Link>
          </div>
        )}
      </article>
    </div>
  );
}
