"use client";

import React, { useState } from "react";
import {
  Mail,
  Github,
  Linkedin,
  Send,
  Copy,
  Check,
  ShieldCheck,
  ExternalLink,
} from "lucide-react";
import { isValidExternalUrl, siteConfig } from "@/config/siteConfig";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    companyWebsite: "", // Honeypot field
  });
  const [status, setStatus] = useState<{
    type: "idle" | "submitting" | "success" | "error";
    text?: string;
    mailtoUrl?: string;
  }>({ type: "idle" });

  const hasLinkedin = isValidExternalUrl(siteConfig.linkedinUrl);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: "submitting" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });
      const json = await res.json();

      if (!res.ok || !json.ok) {
        setStatus({
          type: "error",
          text: json.error || "Unable to submit message. Please try again.",
        });
        return;
      }

      setStatus({
        type: "success",
        text: json.message,
        mailtoUrl: json.mailtoUrl,
      });
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: "",
        companyWebsite: "",
      });
    } catch {
      setStatus({
        type: "error",
        text: "Network error. Please use the direct email link instead.",
      });
    }
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-16 sm:py-24 bg-background"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Direct Contact Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary font-mono text-xs font-semibold">
                <Mail className="w-3.5 h-3.5" />
                <span>09 · CONTACT &amp; COLLABORATION</span>
              </div>
              <h2
                id="contact-heading"
                className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground"
              >
                Let’s Connect
              </h2>
              <p className="text-sm sm:text-base text-muted leading-relaxed">
                Whether you are a recruiter hiring for Data Science or Machine Learning internships, a developer looking to collaborate on a project, or a mentor sharing feedback on my notebooks—I would love to hear from you.
              </p>
            </div>

            {/* Verified Contact Cards */}
            <div className="space-y-3">
              {/* Email Card */}
              <div className="p-4 rounded-2xl bg-surface border border-border shadow-card flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-mono text-[11px] uppercase text-muted">
                      Email
                    </p>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="text-sm font-semibold text-foreground hover:text-secondary truncate block"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={copyEmail}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono bg-surface-elevated hover:bg-border/60 text-foreground border border-border shrink-0 transition-colors"
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-accent" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* GitHub Card */}
              <a
                href={siteConfig.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-surface border border-border hover:border-secondary/40 shadow-card flex items-center justify-between gap-3 transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center shrink-0">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-mono text-[11px] uppercase text-muted">
                      GitHub
                    </p>
                    <p className="text-sm font-semibold text-foreground">
                      github.com/{siteConfig.githubUsername}
                    </p>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-muted" />
              </a>

              {/* LinkedIn Card */}
              {hasLinkedin ? (
                <a
                  href={siteConfig.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-surface border border-border hover:border-secondary/40 shadow-card flex items-center justify-between gap-3 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center shrink-0">
                      <Linkedin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-mono text-[11px] uppercase text-muted">
                        LinkedIn
                      </p>
                      <p className="text-sm font-semibold text-foreground">
                        Connect on LinkedIn
                      </p>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted" />
                </a>
              ) : (
                <div className="p-4 rounded-2xl bg-surface border border-dashed border-border flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-surface-elevated text-muted flex items-center justify-center shrink-0">
                      <Linkedin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-mono text-[11px] uppercase text-muted">
                        LinkedIn Profile
                      </p>
                      <p className="text-xs font-mono text-amber-600 dark:text-amber-400 mt-0.5">
                        {siteConfig.linkedinUrl} — Set in siteConfig.ts
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Secure Contact Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl bg-surface border border-border p-6 sm:p-8 shadow-card space-y-5"
              noValidate
            >
              <div className="flex items-center justify-between border-b border-border pb-4">
                <h3 className="text-lg font-bold text-foreground">
                  Send a Direct Message
                </h3>
                <span className="inline-flex items-center gap-1 font-mono text-[11px] text-accent">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Server-Validated
                </span>
              </div>

              {/* Honeypot anti-bot field (hidden from screen readers and human users) */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="companyWebsite">Company Website</label>
                <input
                  id="companyWebsite"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={formState.companyWebsite}
                  onChange={(e) =>
                    setFormState((s) => ({
                      ...s,
                      companyWebsite: e.target.value,
                    }))
                  }
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-semibold text-foreground"
                  >
                    Your Name <span className="text-error">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) =>
                      setFormState((s) => ({ ...s, name: e.target.value }))
                    }
                    placeholder="e.g., Priya Sharma"
                    className="w-full px-3.5 py-2.5 rounded-xl text-sm bg-surface-elevated border border-border text-foreground placeholder:text-muted focus:outline-none focus:border-secondary"
                  />
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-semibold text-foreground"
                  >
                    Your Email <span className="text-error">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) =>
                      setFormState((s) => ({ ...s, email: e.target.value }))
                    }
                    placeholder="name@company.com"
                    className="w-full px-3.5 py-2.5 rounded-xl text-sm bg-surface-elevated border border-border text-foreground placeholder:text-muted focus:outline-none focus:border-secondary"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="contact-subject"
                  className="block text-xs font-semibold text-foreground"
                >
                  Subject
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  value={formState.subject}
                  onChange={(e) =>
                    setFormState((s) => ({ ...s, subject: e.target.value }))
                  }
                  placeholder="Data Science Internship / Project Collaboration"
                  className="w-full px-3.5 py-2.5 rounded-xl text-sm bg-surface-elevated border border-border text-foreground placeholder:text-muted focus:outline-none focus:border-secondary"
                />
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-semibold text-foreground"
                >
                  Message <span className="text-error">*</span>
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  required
                  value={formState.message}
                  onChange={(e) =>
                    setFormState((s) => ({ ...s, message: e.target.value }))
                  }
                  placeholder="Hi Harsh, I reviewed your Laptop Price Predictor and WhatsApp Chat Analyzer projects..."
                  className="w-full px-3.5 py-2.5 rounded-xl text-sm bg-surface-elevated border border-border text-foreground placeholder:text-muted focus:outline-none focus:border-secondary resize-y"
                />
              </div>

              {status.type === "error" && (
                <div
                  role="alert"
                  className="p-3.5 rounded-xl bg-error/10 border border-error/25 text-xs text-error font-medium"
                >
                  {status.text}
                </div>
              )}

              {status.type === "success" && (
                <div
                  role="status"
                  className="p-4 rounded-xl bg-accent/10 border border-accent/25 space-y-2.5"
                >
                  <p className="text-xs sm:text-sm text-foreground font-medium">
                    {status.text}
                  </p>
                  {status.mailtoUrl && (
                    <a
                      href={status.mailtoUrl}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold bg-accent text-white"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Open Pre-Filled Email Client</span>
                    </a>
                  )}
                </div>
              )}

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1">
                <p className="text-[11px] text-muted">
                  Protected by server-side rate limiting &amp; input sanitization (`/api/contact`).
                </p>

                <button
                  type="submit"
                  disabled={status.type === "submitting"}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold bg-secondary text-white hover:bg-secondary/90 shadow-sm transition-all disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>
                    {status.type === "submitting"
                      ? "Sending..."
                      : "Send Message"}
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
