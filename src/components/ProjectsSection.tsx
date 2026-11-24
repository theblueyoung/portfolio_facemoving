import React, { useRef } from 'react';
import { motion, MotionValue, useScroll, useTransform } from 'framer-motion';
import { FadeIn } from './FadeIn';
import { LiveProjectButton } from './LiveProjectButton';

export interface ProjectItem {
  number: string;
  name: string;
  category: string;
  summary: string;
  deliverables: string[];
  col1Images: [string, string];
  col2Image: string;
}

export const PROJECTS: ProjectItem[] = [
  {
    number: '01',
    name: 'Nextlevel Studio',
    category: 'Client',
    summary:
      'Spatial 3D visual direction, custom metallic shader assets, and interactive web showcase crafted for a next-generation creative production studio.',
    deliverables: ['3D Art Direction', 'Custom Shaders', 'Web Experience'],
    col1Images: [
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85',
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85',
    ],
    col2Image:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85',
  },
  {
    number: '02',
    name: 'Aura Brand Identity',
    category: 'Personal',
    summary:
      'Sculptural brand exploration uniting tactile 3D product forms, soft atmospheric studio lighting, and minimalist editorial typography.',
    deliverables: ['Brand System', '3D Product Renders', 'Motion Loop'],
    col1Images: [
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85',
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85',
    ],
    col2Image:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85',
  },
  {
    number: '03',
    name: 'Solaris Digital',
    category: 'Client',
    summary:
      'High-contrast product visualization and kinetic digital launch identity designed to elevate an ambitious technology platform.',
    deliverables: ['3D Modeling', 'Photorealistic Lighting', 'Launch Site'],
    col1Images: [
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85',
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85',
    ],
    col2Image:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85',
  },
];

interface StickyProjectCardProps {
  project: ProjectItem;
  index: number;
  totalCards: number;
  progress: MotionValue<number>;
  onSelect: (project: ProjectItem) => void;
}

function StickyProjectCard({
  project,
  index,
  totalCards,
  progress,
  onSelect,
}: StickyProjectCardProps) {
  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const startRange = index / totalCards;
  const scale = useTransform(progress, [startRange, 1], [1, targetScale]);

  return (
    <div className="h-[85vh]">
      <div className="sticky top-24 md:top-32 flex justify-center">
        <motion.article
          style={{
            scale,
            top: `${index * 28}px`,
            transformOrigin: 'top center',
          }}
          className="relative w-full max-w-6xl rounded-[40px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:rounded-[50px] sm:p-6 md:rounded-[60px] md:p-8"
        >
          {/* Top row */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4 sm:gap-8">
              <span
                className="shrink-0 font-black leading-none text-[#D7E2EA] tabular-nums"
                style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
              >
                {project.number}
              </span>
              <div className="flex flex-col gap-1">
                <span className="text-xs font-medium uppercase tracking-widest text-[#D7E2EA]/60 sm:text-sm">
                  {project.category}
                </span>
                <h3
                  className="font-medium uppercase leading-tight tracking-wide text-[#D7E2EA]"
                  style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                >
                  {project.name}
                </h3>
              </div>
            </div>

            <div className="self-start sm:self-center">
              <LiveProjectButton onClick={() => onSelect(project)} />
            </div>
          </div>

          {/* Bottom row: 40% / 60% two-column image grid */}
          <div className="mt-4 grid grid-cols-1 gap-4 sm:mt-6 sm:gap-6 md:grid-cols-10">
            <div className="flex flex-col gap-4 sm:gap-6 md:col-span-4">
              <div
                className="w-full overflow-hidden rounded-[40px] bg-[#161616] sm:rounded-[50px] md:rounded-[60px]"
                style={{ height: 'clamp(130px, 16vw, 230px)' }}
              >
                <img
                  src={project.col1Images[0]}
                  alt={`${project.name} preview 1`}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover"
                />
              </div>
              <div
                className="w-full overflow-hidden rounded-[40px] bg-[#161616] sm:rounded-[50px] md:rounded-[60px]"
                style={{ height: 'clamp(160px, 22vw, 340px)' }}
              >
                <img
                  src={project.col1Images[1]}
                  alt={`${project.name} preview 2`}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="md:col-span-6">
              <div className="h-[220px] w-full overflow-hidden rounded-[40px] bg-[#161616] sm:h-[300px] sm:rounded-[50px] md:h-full md:rounded-[60px]">
                <img
                  src={project.col2Image}
                  alt={`${project.name} showcase`}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </motion.article>
      </div>
    </div>
  );
}

interface ProjectsSectionProps {
  onSelectProject: (project: ProjectItem) => void;
}

export function ProjectsSection({ onSelectProject }: ProjectsSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <section
      id="projects"
      className="relative z-10 -mt-10 w-full rounded-t-[40px] bg-[#0C0C0C] px-5 pb-28 pt-20 sm:-mt-12 sm:rounded-t-[50px] sm:px-8 sm:pt-24 md:-mt-14 md:rounded-t-[60px] md:px-10 md:pt-32"
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading mb-16 text-center font-black uppercase leading-none tracking-tight sm:mb-20 md:mb-24"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Project
        </h2>
      </FadeIn>

      <div ref={containerRef} className="relative mx-auto w-full max-w-6xl">
        {PROJECTS.map((project, index) => (
          <StickyProjectCard
            key={project.number}
            project={project}
            index={index}
            totalCards={PROJECTS.length}
            progress={scrollYProgress}
            onSelect={onSelectProject}
          />
        ))}
      </div>
    </section>
  );
}
