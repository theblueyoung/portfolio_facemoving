import React from 'react';
import { FadeIn } from './FadeIn';

const SERVICES = [
  {
    number: '01',
    name: '3D Modeling',
    description:
      'Creation of detailed objects, characters, or environments tailored to specific client needs, ideal for games, products, and visualizations.',
  },
  {
    number: '02',
    name: 'Rendering',
    description:
      'High-quality, photorealistic renders that showcase designs with custom lighting, textures, and materials to bring concepts to life.',
  },
  {
    number: '03',
    name: 'Motion Design',
    description:
      'Dynamic animations and motion graphics that add energy and storytelling to brands, products, and digital experiences.',
  },
  {
    number: '04',
    name: 'Branding',
    description:
      'Crafting cohesive visual identities -- from logos to full brand systems -- that communicate a clear and memorable presence.',
  },
  {
    number: '05',
    name: 'Web Design',
    description:
      'Designing clean, modern, and conversion-focused websites with attention to layout, typography, and user experience.',
  },
];

export function ServicesSection() {
  return (
    <section
      id="services"
      className="relative w-full rounded-t-[40px] bg-[#FFFFFF] px-5 pb-28 pt-20 text-[#0C0C0C] sm:rounded-t-[50px] sm:px-8 sm:pb-32 sm:pt-24 md:rounded-t-[60px] md:px-10 md:pb-40 md:pt-32"
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="mb-16 text-center font-black uppercase leading-none tracking-tight text-[#0C0C0C] sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Services
        </h2>
      </FadeIn>

      <div className="mx-auto max-w-5xl divide-y divide-[rgba(12,12,12,0.15)] border-y border-[rgba(12,12,12,0.15)]">
        {SERVICES.map((service, i) => (
          <FadeIn key={service.number} delay={i * 0.1} y={30}>
            <div className="flex flex-col items-start gap-4 py-8 sm:flex-row sm:items-center sm:gap-12 sm:py-10 md:gap-16 md:py-12">
              <span
                className="shrink-0 font-black leading-none text-[#0C0C0C] tabular-nums"
                style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
              >
                {service.number}
              </span>
              <div className="flex flex-col gap-2 sm:gap-3">
                <h3
                  className="font-medium uppercase leading-tight tracking-wide text-[#0C0C0C]"
                  style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                >
                  {service.name}
                </h3>
                <p
                  className="max-w-2xl font-light leading-relaxed text-[#0C0C0C] opacity-60"
                  style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
                >
                  {service.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
