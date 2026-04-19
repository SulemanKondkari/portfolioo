"use client";

import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";

type Logo = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

type LogoCloudProps = React.ComponentProps<"div"> & {
  logos: Logo[];
};

export function LogoCloud({ logos }: LogoCloudProps) {
  return (
    <div className="relative mx-auto max-w-5xl bg-gradient-to-r from-black via-transparent to-black py-6 md:py-10 border-y border-white/5">
      <div className="-translate-x-1/2 -top-px pointer-events-none absolute left-1/2 w-screen border-t border-white/5" />

      <InfiniteSlider gap={60} reverse duration={30}>
        {logos.map((logo) => (
          <img
            alt={logo.alt}
            className="pointer-events-none h-8 select-none md:h-10 opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300 invert"
            height="auto"
            key={`logo-${logo.alt}`}
            loading="lazy"
            src={logo.src}
            width="auto"
          />
        ))}
      </InfiniteSlider>

      <ProgressiveBlur
        blurIntensity={1.5}
        className="pointer-events-none absolute top-0 left-0 h-full w-[200px] z-10"
        direction="left"
      />
      <ProgressiveBlur
        blurIntensity={1.5}
        className="pointer-events-none absolute top-0 right-0 h-full w-[200px] z-10"
        direction="right"
      />

      <div className="-translate-x-1/2 -bottom-px pointer-events-none absolute left-1/2 w-screen border-b border-white/5" />
    </div>
  );
}
