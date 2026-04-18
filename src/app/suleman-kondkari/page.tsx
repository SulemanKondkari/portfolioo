import React from "react";
import { AnimatedNavFramer } from "@/components/ui/navigation-menu";
import { BlurFade } from "@/components/ui/blur-fade";
import { CinematicFooter } from "@/components/ui/motion-footer";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Suleman Kondkari - Developer Portfolio & Identity",
  description: "Learn more about Suleman Kondkari, a developer and UX engineer dedicated to crafting high-performance, cinematic web experiences.",
};

export default function SulemanKondkariPage() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-red-500/10 selection:text-red-600 overflow-x-hidden">
      <AnimatedNavFramer />
      
      <main className="relative pt-32 pb-40">
        <div className="container mx-auto px-6 max-w-4xl">
          <BlurFade delay={0.1}>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter uppercase mb-12">
              Suleman <span className="text-red-600">Kondkari</span>
            </h1>
          </BlurFade>

          <BlurFade delay={0.2}>
            <div className="prose prose-invert prose-red max-w-none">
              <p className="text-2xl text-neutral-400 font-medium leading-relaxed mb-8">
                Suleman Kondkari is a digital architect specializing in bridging the gap between high-end cinematic design and robust engineering. 
                Based in Mumbai, Suleman Kondkari leverages the latest technologies to build experiences that resonate and perform.
              </p>
              
              <h2 className="text-3xl font-bold uppercase mt-16 mb-6 text-red-600">Engineering Philosophy</h2>
              <p className="text-neutral-500 text-lg leading-relaxed mb-6">
                For Suleman Kondkari, every line of code is a brushstroke in a larger narrative. 
                By utilizing frameworks like Next.js 15, React 19, and Tailwind CSS v4, 
                Suleman ensures that every project meets the highest standards of accessibility, 
                performance, and visual excellence.
              </p>

              <h2 className="text-3xl font-bold uppercase mt-16 mb-6">Core Focus Areas</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-neutral-400 list-none p-0">
                <li className="p-4 border border-white/5 bg-white/2 rounded-lg">
                  <span className="text-red-600 font-bold mr-2">01.</span> Cinematic UX Design
                </li>
                <li className="p-4 border border-white/5 bg-white/2 rounded-lg">
                  <span className="text-red-600 font-bold mr-2">02.</span> Full-Stack Performance
                </li>
                <li className="p-4 border border-white/5 bg-white/2 rounded-lg">
                  <span className="text-red-600 font-bold mr-2">03.</span> AI Integration
                </li>
                <li className="p-4 border border-white/5 bg-white/2 rounded-lg">
                  <span className="text-red-600 font-bold mr-2">04.</span> Scalable Architecture
                </li>
              </ul>

              <div className="mt-20 pt-20 border-t border-white/5 flex flex-col items-center">
                <p className="text-neutral-500 italic mb-8">Want to collaborate with Suleman Kondkari?</p>
                <Link 
                  href="/#contact"
                  className="px-12 py-4 bg-red-600 text-black font-bold uppercase tracking-widest rounded-full hover:scale-105 transition-transform"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </BlurFade>
        </div>
      </main>

      <CinematicFooter />
    </div>
  );
}
