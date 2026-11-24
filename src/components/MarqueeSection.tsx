import React, { useEffect, useRef } from 'react';

const ALL_IMAGES = [
  'https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif',
  'https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif',
  'https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif',
  'https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif',
  'https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif',
  'https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif',
  'https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif',
  'https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif',
  'https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif',
  'https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif',
  'https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif',
  'https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif',
  'https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif',
  'https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif',
  'https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif',
  'https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif',
  'https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif',
  'https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif',
  'https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif',
  'https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif',
  'https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif',
];

const ROW_1_BASE = ALL_IMAGES.slice(0, 11);
const ROW_2_BASE = ALL_IMAGES.slice(11);

const ROW_1 = [...ROW_1_BASE, ...ROW_1_BASE, ...ROW_1_BASE];
const ROW_2 = [...ROW_2_BASE, ...ROW_2_BASE, ...ROW_2_BASE];

export function MarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let rafId = 0;

    const updatePositions = () => {
      if (!sectionRef.current || !row1Ref.current || !row2Ref.current) return;
      const sectionTop = sectionRef.current.offsetTop;
      const offset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;

      row1Ref.current.style.transform = `translateX(calc(-33.3333% + ${offset - 200}px))`;
      row2Ref.current.style.transform = `translateX(calc(-33.3333% - ${offset - 200}px))`;
    };

    const handleScroll = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(updatePositions);
    };

    updatePositions();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full overflow-hidden bg-[#0C0C0C] pb-10 pt-24 sm:pt-32 md:pt-40"
    >
      <div className="flex flex-col gap-3">
        {/* Row 1: moves right on scroll */}
        <div
          ref={row1Ref}
          className="flex w-max gap-3"
          style={{ willChange: 'transform' }}
        >
          {ROW_1.map((src, index) => (
            <div
              key={`r1-${index}`}
              className="h-[270px] w-[420px] shrink-0 overflow-hidden rounded-2xl bg-[#141414]"
            >
              <img
                src={src}
                alt={`3D motion showcase ${(index % ROW_1_BASE.length) + 1}`}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Row 2: moves left on scroll */}
        <div
          ref={row2Ref}
          className="flex w-max gap-3"
          style={{ willChange: 'transform' }}
        >
          {ROW_2.map((src, index) => (
            <div
              key={`r2-${index}`}
              className="h-[270px] w-[420px] shrink-0 overflow-hidden rounded-2xl bg-[#141414]"
            >
              <img
                src={src}
                alt={`3D design preview ${(index % ROW_2_BASE.length) + 12}`}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
