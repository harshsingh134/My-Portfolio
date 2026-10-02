"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  FileText,
  Download,
  GraduationCap,
  Award,
  FolderGit2,
  Mail,
  Github,
  Printer,
  AlertCircle,
  ExternalLink,
  CheckCircle2,
} from "lucide-react";
import {
  certifications,
  isValidExternalUrl,
  portfolioProjects,
  siteConfig,
  skillCategories,
} from "@/config/siteConfig";

export function Resume() {
  const [showPdfNotice, setShowPdfNotice] = useState(false);

  const flagshipProjects = portfolioProjects.filter(
    (p) => p.sourceType === "resume-verified"
  );

  const handleDownloadClick = (e: React.MouseEvent) => {
    if (!siteConfig.resumeFileExists) {
      e.preventDefault();
      setShowPdfNotice((prev) => !prev);
    }
  };

  return (
    <section
      id="resume"
      aria-labelledby="resume-heading"
      className="py-16 sm:py-24 border-b border-border bg-surface/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Header + Download Actions */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent font-mono text-xs font-semibold">
              <FileText className="w-3.5 h-3.5" />
              <span>08 · RESUME &amp; CERTIFICATIONS</span>
            </div>
            <h2
              id="resume-heading"
              className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground"
            >
              Curriculum Vitae &amp; Verified Credentials
            </h2>
            <p className="text-sm sm:text-base text-muted leading-relaxed">
              Structured for quick recruiter review. All entries strictly reflect my verified profile; any field awaiting local PDF confirmation is explicitly marked rather than fabricated.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href={siteConfig.resumePdfPath}
              download="Harsh_Singh_Resume.pdf"
              onClick={handleDownloadClick}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold bg-secondary text-white hover:bg-secondary/90 shadow-sm transition-all"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume (PDF)</span>
            </a>

            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold bg-surface hover:bg-surface-elevated text-foreground border border-border transition-colors"
            >
              <Printer className="w-4 h-4 text-accent" />
              <span>Print / Save View</span>
            </button>
          </div>
        </div>

        {/* Honest Notice when original PDF file is not yet placed in public/resume/ */}
        {showPdfNotice && (
          <div className="rounded-2xl bg-amber-500/10 border border-amber-500/30 p-5 flex items-start gap-3.5">
            <AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
            <div className="space-y-1.5 text-xs sm:text-sm">
              <p className="font-bold text-foreground">
                Original Resume PDF Slot Ready (`[ADD RESUME PDF FILE]`)
              </p>
              <p className="text-muted leading-relaxed">
                To keep your downloadable resume 100% authentic and separate from generated content, place your official PDF file at{" "}
                <code className="font-mono px-1.5 py-0.5 rounded bg-surface border border-border text-foreground">
                  public/resume/Harsh_Singh_Resume.pdf
                </code>{" "}
                and set{" "}
                <code className="font-mono px-1.5 py-0.5 rounded bg-surface border border-border text-foreground">
                  resumeFileExists: true
                </code>{" "}
                in <code className="font-mono">src/config/siteConfig.ts</code>. In the meantime, recruiters can inspect the full structured resume below or click <strong>Print / Save View</strong>.
              </p>
            </div>
          </div>
        )}

        {/* Resume Sheet Card */}
        <div className="rounded-2xl bg-surface border border-border shadow-card p-6 sm:p-10 space-y-10">
          {/* Top Resume Identity Banner */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-border pb-6">
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground">
                {siteConfig.name}
              </h3>
              <p className="text-sm sm:text-base font-medium text-secondary mt-1">
                {siteConfig.academicStatus} · Data Science &amp; Machine Learning
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-muted">
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-elevated border border-border text-foreground hover:border-secondary"
              >
                <Mail className="w-3.5 h-3.5 text-secondary" />
                <span>{siteConfig.email}</span>
              </a>
              <a
                href={siteConfig.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-elevated border border-border text-foreground hover:border-secondary"
              >
                <Github className="w-3.5 h-3.5 text-accent" />
                <span>github.com/{siteConfig.githubUsername}</span>
              </a>
            </div>
          </div>

          {/* 1. Summary */}
          <div className="space-y-2">
            <h4 className="font-mono text-xs uppercase tracking-wider text-secondary font-semibold">
              Professional Summary
            </h4>
            <p className="text-sm sm:text-base text-muted leading-relaxed">
              {siteConfig.positioningStatement} Experienced in Python, Pandas, NumPy, Scikit-learn, SQL, Exploratory Data Analysis (EDA), Feature Engineering, Regex text parsing, and interactive Streamlit web application development, backed by core Computer Science foundations in Java, C, C++, Data Structures &amp; Algorithms, and OOP.
            </p>
          </div>

          {/* 2. Education & 3. Certifications */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Education */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-secondary font-semibold">
                <GraduationCap className="w-4 h-4" />
                <span>Education</span>
              </div>

              <div className="p-5 rounded-xl bg-surface-elevated/60 border border-border space-y-2">
                <div className="flex items-start justify-between gap-2">
                  <h5 className="text-base font-bold text-foreground">
                    Bachelor of Technology (B.Tech) — Computer Science &amp; Engineering
                  </h5>
                  <span className="font-mono text-xs px-2.5 py-0.5 rounded-md bg-secondary/10 text-secondary font-semibold shrink-0">
                    2023 – 2027
                  </span>
                </div>
                <p className="text-xs font-mono text-amber-600 dark:text-amber-400">
                  Institution: [ADD UNIVERSITY / INSTITUTION NAME]
                </p>
                <p className="text-xs text-muted leading-relaxed">
                  Relevant Coursework &amp; Focus: Data Structures &amp; Algorithms, Object-Oriented Programming (Java, C++), Database Management Systems (SQL/MySQL), Probability &amp; Statistics, Machine Learning, and Deep Learning Fundamentals.
                </p>
              </div>
            </div>

            {/* Certifications (Section 17) */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-accent font-semibold">
                <Award className="w-4 h-4" />
                <span>Verified Certifications</span>
              </div>

              <div className="space-y-3">
                {certifications.map((cert) => {
                  const hasValidUrl = isValidExternalUrl(cert.credentialUrl);
                  return (
                    <div
                      key={cert.id}
                      className="p-4 rounded-xl bg-surface-elevated/60 border border-border space-y-2"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <h5 className="text-sm sm:text-base font-bold text-foreground">
                          {cert.title}
                        </h5>
                        <span className="inline-flex items-center gap-1 font-mono text-[10px] px-2 py-0.5 rounded bg-accent/10 text-accent shrink-0">
                          <CheckCircle2 className="w-3 h-3" />
                          Resume Verified
                        </span>
                      </div>

                      <div className="flex flex-wrap items-center gap-2 text-xs text-muted font-mono">
                        <span>Provider: {cert.issuer}</span>
                        <span>·</span>
                        <span>Date: {cert.issueDate}</span>
                      </div>

                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {cert.skillsCovered.map((sk) => (
                          <span
                            key={sk}
                            className="font-mono text-[10px] px-2 py-0.5 rounded bg-surface border border-border text-foreground"
                          >
                            {sk}
                          </span>
                        ))}
                      </div>

                      {hasValidUrl && (
                        <div className="pt-1">
                          <a
                            href={cert.credentialUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs font-semibold text-secondary hover:underline"
                          >
                            <span>View Credential</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* 4. Resume Projects Summary */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-secondary font-semibold">
              <FolderGit2 className="w-4 h-4" />
              <span>Key Data Science &amp; ML Projects</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {flagshipProjects.map((proj) => (
                <div
                  key={proj.slug}
                  className="p-5 rounded-xl bg-surface-elevated/60 border border-border space-y-3 flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <h5 className="text-base font-bold text-foreground">
                        {proj.title}
                      </h5>
                      <Link
                        href={`/projects/${proj.slug}`}
                        className="font-mono text-xs text-secondary hover:underline"
                      >
                        Case Study →
                      </Link>
                    </div>
                    <p className="text-xs text-muted leading-relaxed">
                      {proj.shortDescription}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {proj.technologies.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[10px] px-2 py-0.5 rounded bg-surface border border-border text-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 5. Condensed Technical Skills Matrix */}
          <div className="space-y-4">
            <h4 className="font-mono text-xs uppercase tracking-wider text-accent font-semibold">
              Technical Skills Matrix
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {skillCategories.map((cat) => (
                <div
                  key={cat.id}
                  className="p-3.5 rounded-xl bg-surface-elevated/50 border border-border space-y-1.5"
                >
                  <p className="text-xs font-bold text-foreground">
                    {cat.title}
                  </p>
                  <p className="text-xs text-muted leading-relaxed">
                    {cat.skills.map((s) => s.name).join(", ")}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
