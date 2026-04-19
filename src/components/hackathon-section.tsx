"use client";
import React from "react";
import { BlurFade } from "@/components/ui/blur-fade";
import { Trophy, Users, Code, ExternalLink, Award } from "lucide-react";
import Link from "next/link";

export function HackathonSection() {
  return (
    <section id="achievements" className="relative w-full bg-black text-white py-24 md:py-32 overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <BlurFade delay={0.1} inView>
          <div className="flex flex-col items-center text-center mb-20">
            <div className="flex items-center gap-4 mb-6">
              <span className="h-[1px] w-12 bg-red-600" />
              <span className="text-red-500 font-bold tracking-[0.2em] text-sm uppercase font-body">Achievements</span>
              <span className="h-[1px] w-12 bg-red-600" />
            </div>
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase font-display leading-none">
              The <span className="text-red-600 italic">Hackathon</span> <br /> Chronicles.
            </h2>
          </div>
        </BlurFade>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Winner Card */}
          <div className="col-span-1 lg:col-span-8 group relative overflow-hidden rounded-3xl bg-neutral-900/40 border border-white/10 p-8 md:p-12 transition-all duration-500 hover:border-red-600/30">
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <Trophy size={180} className="text-red-600" />
            </div>
            
            <BlurFade delay={0.2} inView>
              <div className="flex flex-col h-full">
                <div className="flex items-center gap-3 mb-6">
                  <span className="px-4 py-1.5 bg-red-600 text-black text-[10px] font-black uppercase tracking-widest rounded-full">Winner</span>
                  <span className="text-neutral-500 text-[10px] font-bold uppercase tracking-widest">Industrial Hackathon 2024</span>
                </div>

                <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-4 group-hover:text-red-600 transition-colors">
                  Real-time Shipment <br /> Tracking System
                </h3>
                
                <p className="text-neutral-400 text-lg mb-8 max-w-2xl leading-relaxed font-medium">
                  Led a high-performance team to build an industrial-grade solution for logistics, 
                  optimizing supply chain visibility through real-time data orchestration and intuitive UI.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-auto">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-red-600/10 rounded-xl border border-red-600/20">
                      <Users className="text-red-600" size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold">Role</p>
                      <p className="text-sm font-bold uppercase">Hackathon Leader</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 font-body">
                    <Link 
                      href="https://techshala.vpt.edu.in/hackathon-winners" 
                      target="_blank"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition-colors"
                    >
                      Verify Credentials <ExternalLink size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            </BlurFade>
            
            {/* Animated Bottom Border */}
            <div className="absolute bottom-0 left-0 h-1 bg-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 w-full" />
          </div>

          {/* Secondary Participation Card */}
          <div className="col-span-1 lg:col-span-4 flex flex-col gap-8">
            <div className="flex-1 group relative overflow-hidden rounded-3xl bg-black border border-white/10 p-8 transition-all duration-500 hover:border-red-600/30">
              <BlurFade delay={0.4} inView>
                <Award className="text-red-600 mb-6" size={32} />
                <h4 className="text-xl font-bold uppercase tracking-tight mb-2">Internal Hackathon</h4>
                <p className="text-neutral-500 text-sm font-medium leading-relaxed mb-6 uppercase tracking-wider">
                  Participation & Design <br /> Contribution
                </p>
                <div className="flex items-center gap-2 text-red-600 font-black text-[10px] uppercase tracking-widest">
                  <div className="w-1.5 h-1.5 bg-red-600 rounded-full animate-pulse" />
                  Technical Growth
                </div>
              </BlurFade>
            </div>
            
            {/* Call to Action Small Block */}
            <div className="flex-1 p-8 rounded-3xl border border-white/5 bg-neutral-900/20 flex flex-col justify-center">
              <BlurFade delay={0.5} inView>
                 <Code className="text-neutral-500 mb-4" size={24} />
                 <p className="text-neutral-400 text-sm font-medium italic">
                    "Innovation is not just about code; it's about leadership and solving real-world puzzles."
                 </p>
              </BlurFade>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
