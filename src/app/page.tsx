import React from "react";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Capabilities } from "@/components/Capabilities";
import { Skills } from "@/components/Skills";
import { ProjectGrid } from "@/components/ProjectGrid";
import { GitHubProjects } from "@/components/GitHubProjects";
import { LearningJourney } from "@/components/LearningJourney";
import { NotesSection } from "@/components/NotesSection";
import { Resume } from "@/components/Resume";
import { Contact } from "@/components/Contact";
import { fetchGitHubPortfolioData } from "@/lib/github";

export const revalidate = 900;

export default async function HomePage() {
  const githubData = await fetchGitHubPortfolioData();

  return (
    <>
      <Hero />
      <About />
      <Capabilities />
      <Skills />
      <ProjectGrid liveRepos={githubData.repos} />
      <GitHubProjects initialData={githubData} />
      <LearningJourney />
      <NotesSection />
      <Resume />
      <Contact />
    </>
  );
}
