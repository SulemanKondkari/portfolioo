"use client";
import React from "react";
import { BlurFade } from "@/components/ui/blur-fade";
import { Trophy, Users, Code, ExternalLink, Award } from "lucide-react";
import Link from "next/link";

import Image from "next/image";

export function HackathonSection() {
  return (
    <section id="achievements" className="relative w-full bg-black text-white py-24 md:py-40 overflow-hidden border-t border-white/5">
      {/* Cinematic Background */}
      <div className="absolute inset-0 z-0">
        {/* Desktop Image */}
        <div className="hidden md:block absolute inset-0">
          <Image
            src="/backgrounds/hackathon-bg.jpeg"
            alt="Hackathon Background"
            fill
            className="object-cover opacity-60 transition-opacity duration-1000"
            priority
          />
        </div>
        {/* Mobile Image - Optimized Ratio */}
        <div className="md:hidden absolute inset-0">
          <Image
            src="/backgrounds/hackathon-bg-mobile.png"
            alt="Hackathon Background Mobile"
            fill
            className="object-cover opacity-70"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <BlurFade delay={0.1} inView>
          <div className="flex flex-col items-center text-center mb-24">
            <div className="flex items-center gap-4 mb-6">
              <span className="h-px w-12 bg-red-600/50" />
              <span className="text-red-500 font-bold tracking-[0.3em] text-[10px] uppercase font-body">Elite Performance</span>
              <span className="h-px w-12 bg-red-600/50" />
            </div>
            <h2 className="text-6xl md:text-9xl font-black tracking-tighter uppercase font-display leading-[0.8]">
              Proven <br /> <span className="text-red-600 italic">Under</span> Pressure.
            </h2>
          </div>
        </BlurFade>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-10">
          
          {/* Main Winner Card */}
          <div className="col-span-1 lg:col-span-8 group relative overflow-hidden rounded-[2rem] bg-white/[0.01] border border-white/10 backdrop-blur-2xl p-8 md:p-14 transition-all duration-700 hover:bg-white/[0.03] hover:border-red-600/40">
            {/* Ambient Red Glow */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-red-600/10 blur-[100px] rounded-full group-hover:bg-red-600/20 transition-all duration-700" />
            
            <BlurFade delay={0.2} inView>
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex flex-wrap items-center gap-4 mb-10">
                  <div className="flex items-center gap-2 px-4 py-2 bg-red-600 rounded-full">
                    <Trophy size={14} className="text-black" />
                    <span className="text-black text-[10px] font-black uppercase tracking-widest">1st Place Winner</span>
                  </div>
                  <span className="text-neutral-500 text-[10px] font-bold uppercase tracking-[0.2em] border-l border-white/20 pl-4">Industrial Hackathon 2024</span>
                </div>

                <h3 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-8 leading-[0.9] group-hover:tracking-tight transition-all duration-700">
                  Real-time Shipment <br /> <span className="text-red-600">Tracking System</span>
                </h3>
                
                <p className="text-neutral-400 text-lg md:text-xl mb-12 max-w-2xl leading-relaxed font-medium/80 italic">
                  &quot;Architected and led the development of a mission-critical logistics engine, 
                  transforming complex supply chain data into a high-fidelity visual experience.&quot;
                </p>

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mt-auto border-t border-white/5 pt-10">
                  <div className="flex items-center gap-6">
                    <div className="flex flex-col">
                      <p className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold mb-1">Role</p>
                      <p className="text-base font-black uppercase tracking-tighter">Hackathon Leader</p>
                    </div>
                    <div className="w-px h-8 bg-white/10 hidden md:block" />
                    <div className="flex flex-col">
                      <p className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold mb-1">Category</p>
                      <p className="text-base font-black uppercase tracking-tighter text-red-600">Logistics & AI</p>
                    </div>
                  </div>
                  
                  <Link 
                    href="https://techshala.vpt.edu.in/hackathon-winners" 
                    target="_blank"
                    className="group/btn relative inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full text-xs font-black uppercase tracking-widest overflow-hidden transition-all hover:pr-10"
                  >
                    <span className="relative z-10">Verify Winner</span>
                    <ExternalLink size={14} className="relative z-10 group-hover/btn:translate-x-1 transition-transform" />
                    <div className="absolute inset-0 bg-red-600 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            </BlurFade>
          </div>

          {/* Secondary Participation Card */}
          <div className="col-span-1 lg:col-span-4 flex flex-col gap-6 md:gap-10">
            <div className="flex-1 group relative overflow-hidden rounded-[2rem] bg-neutral-900/50 border border-white/10 p-8 transition-all duration-500 hover:border-red-600/30">
              <BlurFade delay={0.4} inView>
                <div className="p-4 bg-red-600/10 rounded-2xl w-fit mb-6">
                  <Award className="text-red-600" size={28} />
                </div>
                <h4 className="text-2xl font-black uppercase tracking-tighter mb-4 leading-none">Internal <br /> Hackathon</h4>
                <p className="text-neutral-500 text-sm font-bold leading-relaxed uppercase tracking-widest mb-8">
                  Technical Participation <br /> & Full-stack design
                </p>
                <div className="h-px w-full bg-linear-to-r from-red-600/50 to-transparent" />
              </BlurFade>
            </div>
            
            {/* Call to Action Small Block */}
            <div className="flex-1 p-10 rounded-[2rem] border border-white/5 bg-black relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <Code size={120} />
              </div>
              <BlurFade delay={0.5} inView>
                 <p className="text-neutral-300 text-sm md:text-base font-medium italic relative z-10 leading-relaxed">
                    &quot;Innovation is the bridge between silence and success.&quot;
                 </p>
                 <div className="mt-6 flex items-center gap-2">
                   <div className="w-1 h-1 bg-red-600 rounded-full" />
                   <span className="text-[10px] uppercase tracking-[0.3em] font-black text-white/40">Suleman Kondkari</span>
                 </div>
              </BlurFade>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
