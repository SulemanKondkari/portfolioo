"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Terminal, AnimatedSpan, TypingAnimation } from "@/components/ui/terminal";
import { BlurFade } from "@/components/ui/blur-fade";

export default function MegaProjectSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 20%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div ref={containerRef} className="relative w-full max-w-7xl mx-auto py-40 px-6 md:px-10 overflow-hidden">
      {/* Sidebar Stretch (Decorative Line) */}
      <div className="absolute md:left-8 left-8 top-0 bottom-0 w-[2px] bg-linear-to-b from-transparent via-neutral-800 to-transparent opacity-30" />
      <motion.div
        style={{
          height: heightTransform,
          opacity: opacityTransform,
        }}
        className="absolute md:left-8 left-8 top-0 w-[2px] bg-linear-to-b from-red-500 via-red-600 to-transparent rounded-full shadow-[0_0_15px_rgba(220,38,38,0.5)]"
      />

      <div className="relative pl-12 md:pl-24 space-y-24">
        {/* Header Section */}
        <BlurFade delay={0.1}>
          <div className="space-y-4">
            <h2 className="text-4xl md:text-8xl font-black tracking-tighter uppercase text-white">
              MEGA <span className="text-red-600 italic">PROJECT</span>
            </h2>
            <h3 className="text-2xl md:text-4xl font-bold text-neutral-500 uppercase tracking-widest">
              Temporary Email Agent
            </h3>
          </div>
        </BlurFade>

        {/* Description */}
        <BlurFade delay={0.2}>
          <p className="max-w-2xl text-lg md:text-xl text-neutral-400 leading-relaxed font-medium">
            An advanced <span className="text-white">Node.js automation agent</span> that merges Llama 3.2 intelligence with Puppeteer stealth. It automates complex web registrations using throwaway emails, voice commands, and sophisticated bot-bypass heuristics.
          </p>
        </BlurFade>

        {/* Execution Flow (Terminal) */}
        <BlurFade delay={0.3}>
          <div className="space-y-6">
            <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-red-600">Runtime Execution</h4>
            <Terminal className="max-w-none border-white/10 bg-black/60 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              <TypingAnimation duration={30}>npm install</TypingAnimation>
              <AnimatedSpan className="text-green-500">✔ Syncing local environment packages...</AnimatedSpan>
              <TypingAnimation duration={30} delay={500}>node agent.js</TypingAnimation>
              <AnimatedSpan className="text-blue-400">ℹ Bootstrapping Llama 3.2 (Ollama Engine)...</AnimatedSpan>
              <AnimatedSpan className="text-blue-400">ℹ Initializing Headless Chrome (Stealth Mode)...</AnimatedSpan>
              <AnimatedSpan className="text-yellow-500">⚠ Generating 1secmail security token...</AnimatedSpan>
              <AnimatedSpan className="text-green-500">✔ Temp Email: suleman_agent@1secmail.com</AnimatedSpan>
              <TypingAnimation duration={20} delay={1000}>[Agent] Navigating to target registration...</TypingAnimation>
              <AnimatedSpan className="text-purple-400">✦ AI Loop: Extracting interactive DOM components...</AnimatedSpan>
              <AnimatedSpan className="text-purple-400">✦ AI Loop: Mapping 'DisplayName' to Suleman Kondkari.</AnimatedSpan>
              <AnimatedSpan className="text-white font-bold italic border-l-2 border-red-600 pl-4 py-1 bg-red-600/5">
                "Form verification required. Does the layout look valid? (Voice Input: CONFIRMED)"
              </AnimatedSpan>
              <AnimatedSpan className="text-green-500">✔ Executing human-like keystrokes...</AnimatedSpan>
              <AnimatedSpan className="text-red-500 font-bold tracking-tighter shadow-sm">
                SUCCESS: CREDENTIALS STORED IN ACCOUNTS_DB.JSON
              </AnimatedSpan>
            </Terminal>
          </div>
        </BlurFade>

        {/* Visual Demonstration (Video) */}
        <BlurFade delay={0.4}>
          <div className="space-y-6">
            <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-red-600">Cinematic Probe</h4>
            <div className="relative aspect-video w-full overflow-hidden rounded-3xl border border-white/10 shadow-3xl bg-neutral-900 group">
              <video 
                src="/media/temp-mail-agent.mov" 
                controls 
                autoPlay 
              
                loop 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </BlurFade>
      </div>
    </div>
  );
}
