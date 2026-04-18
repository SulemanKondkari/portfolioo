"use client";

import React from "react";
import { AnimatedNavFramer } from "@/components/ui/navigation-menu";
import { BlurFade } from "@/components/ui/blur-fade";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import TimelineDemo from "@/components/timeline-demo";
import MegaProjectSection from "@/components/mega-project-section";
import { CinematicFooter } from "@/components/ui/motion-footer";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-red-500/10 selection:text-red-600 overflow-x-hidden">
      <AnimatedNavFramer />
      
      <main className="relative">
        <div className="container mx-auto px-6 pt-32 relative z-10">
          <BlurFade delay={0.1}>
            <Link 
              href="/" 
              className="flex items-center gap-2 text-neutral-500 hover:text-red-500 transition-colors uppercase tracking-widest text-xs font-bold font-sans"
            >
              <ChevronLeft size={16} />
              Back to Home
            </Link>
          </BlurFade>
        </div>

        <TimelineDemo />

        <MegaProjectSection />

        <div className="container mx-auto px-6 pb-40">
          <BlurFade delay={0.6} className="w-full mt-20 flex flex-col items-center gap-12 border-t border-white/5 pt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 w-full max-w-5xl">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold uppercase tracking-tighter italic text-red-600">The Philosophy</h3>
                <p className="text-neutral-400 leading-relaxed font-medium">
                  Every pixel serves a purpose. I don't just build websites; I craft digital narratives that resonate with users and push technical boundaries.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold uppercase tracking-tighter italic text-neutral-200">The Method</h3>
                <p className="text-neutral-500 leading-relaxed font-medium/80">
                  Leveraging cutting-edge technologies like React 19, Framer Motion, and Tailwind CSS v4 to deliver high-performance, fluid experiences.
                </p>
              </div>
            </div>
            
            <div className="w-[1px] h-32 bg-linear-to-b from-red-600 to-transparent mt-20" />
          </BlurFade>
        </div>
      </main>

      <CinematicFooter />
    </div>
  );
}
