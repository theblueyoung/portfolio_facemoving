import React, { useState } from 'react';
import { HeroSection } from './components/HeroSection';
import { MarqueeSection } from './components/MarqueeSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ProjectItem, ProjectsSection } from './components/ProjectsSection';
import { ContactModal, ProjectModal } from './components/Modals';

export default function App() {
  const [contactOpen, setContactOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <main
      className="min-h-screen w-full bg-[#0C0C0C]"
      style={{ overflowX: 'clip' }}
    >
      <HeroSection onContactClick={() => setContactOpen(true)} />
      <MarqueeSection />
      <AboutSection onContactClick={() => setContactOpen(true)} />
      <ServicesSection />
      <ProjectsSection onSelectProject={(project) => setSelectedProject(project)} />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onContact={() => setContactOpen(true)}
      />
      <ContactModal
        open={contactOpen}
        onClose={() => setContactOpen(false)}
      />
    </main>
  );
}
