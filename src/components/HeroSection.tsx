import React from 'react';
import { FadeIn } from './FadeIn';
import { ContactButton } from './ContactButton';
import { Magnet } from './Magnet';

interface HeroSectionProps {
  onContactClick: () => void;
}

export function HeroSection({ onContactClick }: HeroSectionProps) {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      className="relative flex h-screen w-full flex-col justify-between overflow-hidden bg-[#0C0C0C]"
    >
      {/* Navbar */}
      <FadeIn delay={0} y={-20} as="header" className="relative z-20 w-full px-6 pt-6 md:px-10 md:pt-8">
        <nav aria-label="Primary" className="flex w-full items-center justify-between gap-4">
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('about');
            }}
            className="whitespace-nowrap shrink-0 text-sm font-medium uppercase tracking-wider text-[#D7E2EA] transition-opacity duration-200 hover:opacity-70 md:text-lg lg:text-[1.4rem]"
          >
            About
          </a>
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('projects');
            }}
            className="whitespace-nowrap shrink-0 text-sm font-medium uppercase tracking-wider text-[#D7E2EA] transition-opacity duration-200 hover:opacity-70 md:text-lg lg:text-[1.4rem]"
          >
            Projects
          </a>
          <button
            type="button"
            onClick={onContactClick}
            className="cursor-pointer whitespace-nowrap shrink-0 text-sm font-medium uppercase tracking-wider text-[#D7E2EA] transition-opacity duration-200 hover:opacity-70 md:text-lg lg:text-[1.4rem]"
          >
            Contact
          </button>
        </nav>
      </FadeIn>

      {/* Hero Heading */}
      <div className="relative z-0 mt-6 w-full px-4 py-1 sm:mt-8 md:mt-9 lg:mt-10">
        <FadeIn delay={0.15} y={40}>
          <h1 className="hero-heading w-full whitespace-nowrap text-center text-[9.5vw] font-black uppercase leading-[1.05] tracking-tight sm:text-[9.8vw] md:text-[10vw] lg:text-[10.2vw]">
            Hi, i&rsquo;m Yooyoung
          </h1>
        </FadeIn>
      </div>

      {/* Living Portrait (centered both ways, NO Magnet effect) */}
      <div className="hero-portrait-wrap" id="magnetWrap">
        <FadeIn delay={0.6} y={30}>
          <div className="hero-portrait-inner" id="magnetInner">
            <img
              id="faceFallback"
              src="/face/rest.png"
              alt="Portrait"
              referrerPolicy="no-referrer"
            />
            <canvas id="faceGl" aria-hidden="true"></canvas>
            <div id="faceProps" aria-hidden="true">
              <svg id="faceFly" viewBox="0 0 32 32">
                <path
                  className="wing"
                  d="M15 15C12 9.500 4.500 8.500 2 13c2.500 4.500 10 4.500 13 2z"
                />
                <path
                  className="wing r"
                  d="M17 15c3-5.500 10.500-6.500 13-2-2.500 4.500-10 4.500-13 2z"
                />
                <ellipse cx="16" cy="19.500" rx="4" ry="6.500" />
                <circle cx="16" cy="11.500" r="3.300" />
              </svg>
              <svg id="faceHand" viewBox="0 0 32 32">
                <path
                  className="open"
                  d="M10.500 16.500V8.200a1.800 1.800 0 0 1 3.600 0V14v-8a1.800 1.800 0 0 1 3.600 0V14 7a1.800 1.800 0 0 1 3.600 0v8-5a1.800 1.800 0 0 1 3.600 0v10.500c0 5-3.400 8.500-8.400 8.500-3.600 0-5.700-1.600-7.600-4.600l-3.500-5.600c-.6-1 .1-2.200 1.200-2.400 1-.2 1.900.2 2.600 1z"
                />
                <path
                  className="grab"
                  d="M10.500 17v-3.300a1.800 1.800 0 0 1 3.600 0V14v-1.800a1.800 1.800 0 0 1 3.600 0V14v-1.300a1.800 1.800 0 0 1 3.600 0V14v-.3a1.800 1.800 0 0 1 3.600 0v6.800c0 5-3.400 8.500-8.400 8.500-3.600 0-5.700-1.600-7.600-4.600l-2.300-3.700c-.6-1 .1-2.200 1.200-2.400 1-.2 1.900.2 2.700 1z"
                />
              </svg>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-20 mt-auto flex w-full items-end justify-between px-6 pb-7 sm:pb-8 md:px-10 md:pb-10">
        <FadeIn delay={0.35} y={20}>
          <p
            className="max-w-[160px] font-light uppercase leading-snug tracking-wide text-[#D7E2EA] sm:max-w-[220px] md:max-w-[260px]"
            style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
          >
            a UX/UI designer driven by crafting striking and unforgettable projects
          </p>
        </FadeIn>

        <FadeIn delay={0.5} y={20}>
          <Magnet padding={50} magnetStrength={3}>
            <ContactButton onClick={onContactClick} />
          </Magnet>
        </FadeIn>
      </div>
    </section>
  );
}
