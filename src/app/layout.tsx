import React from "react";
import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/config/siteConfig";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://harshsingh-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteConfig.name} — Data Science & Machine Learning Portfolio`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Personal Data Science & Machine Learning portfolio of Harsh Singh (B.Tech CSE ’27). Explore end-to-end projects including Laptop Price Predictor and WhatsApp Chat Analyzer built with Python, Pandas, NumPy, Scikit-learn, SQL, and Streamlit.",
  keywords: [
    "Harsh Singh",
    "Data Science Portfolio",
    "Machine Learning Projects",
    "Python",
    "Pandas",
    "Scikit-learn",
    "Streamlit",
    "Data Analyst",
    "Computer Science Student",
    "Laptop Price Predictor",
    "WhatsApp Chat Analyzer",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.githubUrl }],
  creator: siteConfig.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: `${siteConfig.name} — Data Science & Machine Learning Portfolio`,
    description: siteConfig.positioningStatement,
    siteName: `${siteConfig.name} Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — Data Science & Machine Learning Portfolio`,
    description: siteConfig.positioningStatement,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    jobTitle: "Computer Science Student — Data Science & Machine Learning",
    description: siteConfig.positioningStatement,
    url: siteUrl,
    sameAs: [siteConfig.githubUrl],
    knowsAbout: [
      "Python",
      "Data Science",
      "Machine Learning",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Exploratory Data Analysis",
      "Feature Engineering",
      "SQL",
      "Streamlit",
    ],
  };

  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased selection:bg-secondary/20 selection:text-secondary">
        <ThemeProvider>
          <Navbar />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
