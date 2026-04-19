"use client";

import { BlurFade } from "@/components/ui/blur-fade";
import { PerspectiveMarquee } from "@/components/ui/perspective-marquee";
import { LogoCloud } from "@/components/ui/logo-cloud";
import { Player } from "@remotion/player";
import Image from "next/image";
import { LayoutGrid, Binary, Rocket } from "lucide-react";

const logos = [
  { src: "https://svgl.app/library/nextjs_icon_dark.svg", alt: "Next.js" },
  { src: "https://svgl.app/library/tailwindcss.svg", alt: "Tailwind CSS" },
  { src: "https://svgl.app/library/typescript.svg", alt: "TypeScript" },
  { src: "https://svgl.app/library/framer.svg", alt: "Framer Motion" },
  { src: "https://svgl.app/library/supabase.svg", alt: "Supabase" },
  { src: "https://svgl.app/library/vercel.svg", alt: "Vercel" },
  { src: "https://svgl.app/library/react.svg", alt: "React" },
  { src: "https://svgl.app/library/docker.svg", alt: "Docker" },
];

function PerspectiveMarqueeScene() {
  return (
    <PerspectiveMarquee
      rotateY={-28}
      rotateX={8}
      perspective={1200}
      pixelsPerFrame={2}
    />
  );
}

export function ServicesSection() {
  return (
    <section className="relative min-h-screen w-full bg-black text-white overflow-hidden py-12 md:py-32">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/services-bg.jpeg"
          alt="Services Background"
          fill
          className="object-cover opacity-30 grayscale"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black" />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Header */}
        <BlurFade delay={0.1} inView>
          <div className="flex flex-col items-center text-center mb-12 md:mb-24">
            <div className="flex items-center gap-4 mb-6">
              <span className="h-[1px] w-12 bg-red-600" />
              <span className="text-red-500 font-bold tracking-[0.2em] text-sm uppercase">Services</span>
              <span className="h-[1px] w-12 bg-red-600" />
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter uppercase mb-8 leading-tight">
              What I can <br className="sm:hidden" /><span className="text-red-600 text-outline">help you</span> with.
            </h2>
            <p className="max-w-2xl text-xl text-neutral-400 font-medium">
              From idea to deployment, I build websites that are fast, clean, and easy to use.
            </p>
          </div>
        </BlurFade>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 md:mb-40">
          <BlurFade delay={0.2} inView>
            <div className="group relative p-8 bg-neutral-900/50 border border-white/5 backdrop-blur-xl hover:border-red-600/50 transition-all duration-500">
              <div className="mb-6 text-red-600">
                <LayoutGrid size={40} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold mb-4 uppercase">Website Development</h3>
              <p className="text-neutral-400 mb-6 font-medium leading-relaxed">
                I build modern, responsive websites using clean code and best practices.
              </p>
              <ul className="space-y-2 text-sm text-neutral-500 font-bold uppercase tracking-wider">
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-red-600 rounded-full" /> Responsive design
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-red-600 rounded-full" /> Fast loading
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-red-600 rounded-full" /> Clean UI
                </li>
              </ul>
            </div>
          </BlurFade>

          <BlurFade delay={0.3} inView>
            <div className="group relative p-8 bg-black/50 border border-white/5 backdrop-blur-xl hover:border-red-600/50 transition-all duration-500 md:scale-105 z-10 ring-1 ring-white/10">
              <div className="mb-6 text-red-600">
                <Binary size={40} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold mb-4 uppercase">UI / UX Design</h3>
              <p className="text-neutral-400 mb-6 font-medium leading-relaxed">
                I design simple and intuitive interfaces that feel smooth and easy to use.
              </p>
              <ul className="space-y-2 text-sm text-neutral-500 font-bold uppercase tracking-wider">
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-red-600 rounded-full" /> Clean layouts
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-red-600 rounded-full" /> User-focused design
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-red-600 rounded-full" /> Minimal style
                </li>
              </ul>
            </div>
          </BlurFade>

          <BlurFade delay={0.4} inView>
            <div className="group relative p-8 bg-neutral-900/50 border border-white/5 backdrop-blur-xl hover:border-red-600/50 transition-all duration-500">
              <div className="mb-6 text-red-600">
                <Rocket size={40} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold mb-4 uppercase">Deployment & SEO</h3>
              <p className="text-neutral-400 mb-6 font-medium leading-relaxed">
                I help launch your website and make sure it’s optimized to be found online.
              </p>
              <ul className="space-y-2 text-sm text-neutral-500 font-bold uppercase tracking-wider">
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-red-600 rounded-full" /> Hosting setup
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-red-600 rounded-full" /> SEO basics
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-red-600 rounded-full" /> Performance
                </li>
              </ul>
            </div>
          </BlurFade>
        </div>

        {/* Technologies Section */}
        <div className="flex flex-col items-center">
          <BlurFade delay={0.5} inView>
            <h4 className="text-xs font-black tracking-[0.4em] uppercase text-neutral-500 mb-12">Technologies Used</h4>
          </BlurFade>
          
          <div className="w-full mb-12 md:mb-32">
            <LogoCloud logos={logos} />
          </div>

          <div className="relative w-full h-[250px] md:h-[400px] border border-white/5 bg-black/50 overflow-hidden">
            <Player
              component={PerspectiveMarqueeScene}
              durationInFrames={600}
              fps={30}
              compositionWidth={1280}
              compositionHeight={720}
              style={{ width: "100%", height: "100%" }}
              controls={false}
              autoPlay
              loop
              clickToPlay={false}
              acknowledgeRemotionLicense={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
