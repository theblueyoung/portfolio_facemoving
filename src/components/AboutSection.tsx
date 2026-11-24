import React from 'react';
import { FadeIn } from './FadeIn';
import { AnimatedText } from './AnimatedText';
import { ContactButton } from './ContactButton';
import { Magnet } from './Magnet';

interface AboutSectionProps {
  onContactClick: () => void;
}

const ABOUT_TEXT =
  "With more than five years of experience in design, i focus on branding, web design, and user experience, i truly enjoy working with businesses that aim to stand out and present their best image. Let's build something incredible together!";

export function AboutSection({ onContactClick }: AboutSectionProps) {
  return (
    <section
      id="about"
      className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-[#0C0C0C] px-5 py-20 sm:px-8 md:px-10"
    >
      {/* Top-left decorative 3D image: Moon icon */}
      <div className="pointer-events-none absolute left-[1%] top-[4%] w-[120px] sm:left-[2%] sm:w-[160px] md:left-[4%] md:w-[210px]">
        <FadeIn delay={0.1} x={-80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
            alt=""
            aria-hidden="true"
            referrerPolicy="no-referrer"
            className="h-auto w-full object-contain"
          />
        </FadeIn>
      </div>

      {/* Bottom-left decorative 3D image: 3D object */}
      <div className="pointer-events-none absolute bottom-[8%] left-[3%] w-[100px] sm:left-[6%] sm:w-[140px] md:left-[10%] md:w-[180px]">
        <FadeIn delay={0.25} x={-80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
            alt=""
            aria-hidden="true"
            referrerPolicy="no-referrer"
            className="h-auto w-full object-contain"
          />
        </FadeIn>
      </div>

      {/* Top-right decorative 3D image: Lego icon */}
      <div className="pointer-events-none absolute right-[1%] top-[4%] w-[120px] sm:right-[2%] sm:w-[160px] md:right-[4%] md:w-[210px]">
        <FadeIn delay={0.15} x={80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
            alt=""
            aria-hidden="true"
            referrerPolicy="no-referrer"
            className="h-auto w-full object-contain"
          />
        </FadeIn>
      </div>

      {/* Bottom-right decorative 3D image: 3D group */}
      <div className="pointer-events-none absolute bottom-[8%] right-[3%] w-[130px] sm:right-[6%] sm:w-[170px] md:right-[10%] md:w-[220px]">
        <FadeIn delay={0.3} x={80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
            alt=""
            aria-hidden="true"
            referrerPolicy="no-referrer"
            className="h-auto w-full object-contain"
          />
        </FadeIn>
      </div>

      {/* Centered content */}
      <div className="relative z-10 flex flex-col items-center">
        <div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-16">
          <FadeIn delay={0} y={40}>
            <h2
              className="hero-heading text-center font-black uppercase leading-none tracking-tight"
              style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
            >
              About me
            </h2>
          </FadeIn>

          <AnimatedText
            text={ABOUT_TEXT}
            className="max-w-[560px] text-center font-medium leading-relaxed text-[#D7E2EA]"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
          />
        </div>

        <div className="mt-16 sm:mt-20 md:mt-24">
          <Magnet padding={50} magnetStrength={3}>
            <ContactButton onClick={onContactClick} />
          </Magnet>
        </div>
      </div>
    </section>
  );
}
