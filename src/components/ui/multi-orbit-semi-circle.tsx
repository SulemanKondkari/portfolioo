"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { 
  IconBrandGithub, 
  IconBrandLinkedin, 
  IconBrandInstagram, 
  IconBrandGmail, 
  IconBrandVercel, 
  IconExternalLink 
} from "@tabler/icons-react";

const SOCIALS = [
  { name: "GitHub", url: "https://github.com/SulemanKondkari", icon: IconBrandGithub },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/suleman-kondkari-4a6a57322/", icon: IconBrandLinkedin },
  { name: "Instagram", url: "https://www.instagram.com/kondkarizz/", icon: IconBrandInstagram },
  { name: "Gmail", url: "mailto:kondkarifareen9@gmail.com", icon: IconBrandGmail },
  { name: "Vercel", url: "https://vercel.com/sulemankondkaris-projects", icon: IconBrandVercel },
];

function SemiCircleOrbit({ radius, centerX, centerY, count, iconSize }: { radius: number; centerX: number; centerY: number; count: number; iconSize: number }) {
  return (
    <>
      {/* Orbit icons */}
      {Array.from({ length: count }).map((_, index) => {
        const angle = (index / (count - 1)) * 180;
        const x = radius * Math.cos((angle * Math.PI) / 180);
        const y = radius * Math.sin((angle * Math.PI) / 180);
        
        const social = SOCIALS[index % SOCIALS.length];
        const Icon = social.icon;

        // Tooltip positioning — above or below based on angle
        const tooltipAbove = angle > 90;

        return (
          <div
            key={index}
            className="absolute flex flex-col items-center group"
            style={{
              left: `${centerX + x - iconSize / 2}px`,
              top: `${centerY - y - iconSize / 2}px`,
              zIndex: 5,
            }}
          >
            <a 
              href={social.url} 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label={`Connect with me on ${social.name}`}
              className="relative p-3 rounded-full bg-black/40 border border-white/10 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-red-600/50 hover:bg-black/60 group-hover:shadow-[0_0_20px_rgba(220,38,38,0.3)] shadow-lg"
            >
              <Icon 
                size={iconSize * 0.6} 
                className="text-white group-hover:text-red-600 transition-colors" 
              />
            </a>

            {/* Tooltip */}
            <div
              className={`absolute left-1/2 -translate-x-1/2 ${
                tooltipAbove ? "bottom-[calc(100%+12px)]" : "top-[calc(100%+12px)]"
              } hidden group-hover:flex flex-col items-center gap-1 w-32 rounded-lg bg-black/90 border border-white/10 px-3 py-2 text-xs text-white shadow-2xl backdrop-blur-xl z-[100]`}
            >
              <span className="font-bold tracking-wider uppercase text-[10px] text-red-600">{social.name}</span>
              <div className="flex items-center gap-1 opacity-50">
                <span>Connect</span>
                <IconExternalLink size={10} />
              </div>
              <div
                className={`absolute left-1/2 -translate-x-1/2 w-2 h-2 rotate-45 bg-black/90 border-r border-b border-white/10 ${
                  tooltipAbove ? "top-full -translate-y-1/2" : "bottom-full translate-y-1/2"
                }`}
              ></div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default function MultiOrbitSemiCircle() {
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateSize = () => setSize({ width: window.innerWidth, height: window.innerHeight });
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const baseWidth = Math.min(size.width * 0.9, 1000);
  const centerX = baseWidth / 2;
  const centerY = baseWidth * 0.5;

  const iconSize =
    size.width < 480
      ? 40
      : size.width < 768
      ? 50
      : 60;

  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-black flex flex-col items-center justify-center py-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/connect-bg.jpg" 
          alt="Cinematic background" 
          fill
          className="object-cover opacity-80 grayscale-[0.2] contrast-100"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black" />
      </div>

      <div className="relative flex flex-col items-center text-center z-10 w-full max-w-7xl px-6">
        <h2 className="text-4xl sm:text-6xl md:text-8xl font-black uppercase tracking-tighter mb-4">
          Connect <span className="text-red-600 italic">With</span> Me
        </h2>
        <p className="mb-12 max-w-xl text-white/50 text-sm sm:text-base md:text-lg font-medium leading-relaxed uppercase tracking-widest">
            I&apos;m always open to new projects, collaborations, or just a friendly conversation.
        </p>

        <div
          className="relative mt-10"
          style={{ width: baseWidth, height: baseWidth * 0.6 }}
        >
          {/* Decorative semi-circles */}
          <div className="absolute left-1/2 -translate-x-1/2 border-t border-red-600/10 rounded-full pointer-events-none" style={{ top: centerY, width: baseWidth, height: baseWidth }} />
          <div className="absolute left-1/2 -translate-x-1/2 border-t border-red-600/5 rounded-full pointer-events-none" style={{ top: centerY, width: baseWidth * 0.7, height: baseWidth * 0.7 }} />
          
          <SemiCircleOrbit radius={baseWidth * 0.18} centerX={centerX} centerY={centerY} count={5} iconSize={iconSize} />
          <SemiCircleOrbit radius={baseWidth * 0.35} centerX={centerX} centerY={centerY} count={7} iconSize={iconSize} />
          <SemiCircleOrbit radius={baseWidth * 0.5} centerX={centerX} centerY={centerY} count={9} iconSize={iconSize} />
        </div>
      </div>

      {/* Footer-like subtle text */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-[10px] uppercase tracking-[0.3em] text-white/20 font-bold">
        Suleman Kondkari &copy; 2026 / All Rights Reserved
      </div>
    </section>
  );
}
