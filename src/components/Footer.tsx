import React from "react";
import { isValidExternalUrl, siteConfig } from "@/config/siteConfig";

export function Footer() {
  const hasLinkedin = isValidExternalUrl(siteConfig.linkedinUrl);

  return (
    <footer className="border-t border-border bg-surface py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div>
          <p className="text-sm font-bold text-foreground">
            {siteConfig.name}{" "}
            <span className="text-muted font-normal">
              — Data Science &amp; Machine Learning
            </span>
          </p>
          <p className="text-xs text-muted mt-0.5">
            Built with curiosity, data and continuous learning.
          </p>
        </div>

        <div className="flex items-center gap-3 text-xs font-mono text-muted">
          <a
            href={siteConfig.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-secondary transition-colors"
          >
            GitHub
          </a>
          <span aria-hidden="true">|</span>
          {hasLinkedin ? (
            <a
              href={siteConfig.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-secondary transition-colors"
            >
              LinkedIn
            </a>
          ) : (
            <span
              className="text-muted/70"
              title="Configure linkedinUrl in src/config/siteConfig.ts"
            >
              LinkedIn [ADD LINK]
            </span>
          )}
          <span aria-hidden="true">|</span>
          <a
            href={`mailto:${siteConfig.email}`}
            className="hover:text-secondary transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
