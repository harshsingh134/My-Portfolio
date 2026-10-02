import { MetadataRoute } from "next";
import { portfolioProjects, technicalNotes } from "@/config/siteConfig";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://harshsingh-portfolio.vercel.app";

  const projectUrls = portfolioProjects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date(project.lastUpdated || "2026-10-02"),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const noteUrls = technicalNotes.map((note) => ({
    url: `${baseUrl}/notes/${note.slug}`,
    lastModified: new Date(note.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    ...projectUrls,
    ...noteUrls,
  ];
}
