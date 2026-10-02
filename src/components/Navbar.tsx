"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Sun,
  Moon,
  Terminal,
  FileText,
  Github,
  Monitor,
} from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import { useTheme } from "@/components/ThemeProvider";

const navItems = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Projects", href: "/#projects" },
  { label: "Learning Journey", href: "/#journey" },
  { label: "GitHub", href: "/#github" },
  { label: "Resume", href: "/#resume" },
  { label: "Contact", href: "/#contact" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, resolvedTheme, setTheme } = useTheme();
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [mobileMenuOpen]);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const cycleTheme = () => {
    if (theme === "dark") setTheme("light");
    else if (theme === "light") setTheme("system");
    else setTheme("dark");
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        scrolled
          ? "bg-surface/90 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-background/80 backdrop-blur-sm border-b border-transparent"
      }`}
    >
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-secondary focus:text-white focus:font-medium"
      >
        Skip to main content
      </a>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Brand Identity */}
        <Link
          href="/#home"
          className="flex items-center gap-2.5 group focus:outline-none"
          aria-label={`${siteConfig.name} — Data Science & Machine Learning Portfolio Home`}
        >
          <span className="w-9 h-9 rounded-lg bg-secondary/10 border border-secondary/25 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-colors">
            <Terminal className="w-4 h-4" />
          </span>
          <div className="flex flex-col">
            <span className="font-bold text-sm sm:text-base tracking-tight text-foreground leading-none">
              {siteConfig.name}
            </span>
            <span className="font-mono text-[11px] text-muted mt-0.5">
              DS &amp; ML · B.Tech ’27
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav
          aria-label="Primary Navigation"
          className="hidden lg:flex items-center gap-1"
        >
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="px-3 py-1.5 rounded-md text-sm font-medium text-muted hover:text-foreground hover:bg-surface-elevated/70 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right Actions: GitHub, Resume CTA, Theme Switcher, Mobile Toggle */}
        <div className="flex items-center gap-2">
          <a
            href={siteConfig.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium text-muted hover:text-foreground border border-border hover:border-secondary/40 bg-surface transition-colors"
            aria-label="GitHub Profile"
          >
            <Github className="w-3.5 h-3.5" />
            <span className="font-mono">{siteConfig.githubUsername}</span>
          </a>

          <Link
            href="/#resume"
            className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-secondary text-white hover:bg-secondary/90 transition-colors shadow-sm"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </Link>

          <button
            type="button"
            onClick={cycleTheme}
            className="p-2 rounded-lg border border-border bg-surface text-muted hover:text-foreground hover:border-secondary/40 transition-colors"
            aria-label={`Switch theme (current: ${theme}, active: ${resolvedTheme})`}
            title={`Theme: ${theme.toUpperCase()} (click to switch Light / System / Dark)`}
          >
            {theme === "system" ? (
              <Monitor className="w-4 h-4 text-accent" />
            ) : resolvedTheme === "dark" ? (
              <Moon className="w-4 h-4 text-secondary" />
            ) : (
              <Sun className="w-4 h-4 text-amber-500" />
            )}
          </button>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="lg:hidden p-2 rounded-lg border border-border bg-surface text-foreground hover:bg-surface-elevated transition-colors"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-menu"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-menu"
          className="lg:hidden border-b border-border bg-surface px-4 pt-3 pb-5 space-y-3 shadow-lg"
        >
          <nav aria-label="Mobile Navigation" className="grid grid-cols-2 gap-1.5">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-sm font-medium text-foreground hover:bg-surface-elevated transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="pt-3 border-t border-border flex flex-wrap items-center justify-between gap-2">
            <a
              href={siteConfig.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium border border-border bg-surface-elevated text-foreground"
            >
              <Github className="w-4 h-4" />
              <span>github.com/{siteConfig.githubUsername}</span>
            </a>

            <Link
              href="/#resume"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold bg-secondary text-white"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>View Resume</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
