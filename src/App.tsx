import React from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ThreeJSBackground from "@/components/ThreeJSBackground";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import CompetitiveProgramming from "@/components/CompetitiveProgramming";
import CertificationsSection from "@/components/CertificationsSection";
import SecretsSection from "@/components/SecretsSection";
import ContactSection from "@/components/ContactSection";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <div className="relative min-h-screen">
        <ThreeJSBackground />
        <Navbar />
        <main className="relative z-10">
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ExperienceSection />
          <CompetitiveProgramming />
          <CertificationsSection />
          <SecretsSection />
          <ContactSection />
        </main>
      </div>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
