"use client";

import React from "react";
import { MacbookScroll } from "@/components/ui/macbook-scroll";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { BlurFade } from "@/components/ui/blur-fade";
import Link from "next/link";
import Image from "next/image";

export function ProjectsIntro() {
  return (
    <section className="relative w-full bg-black overflow-hidden">
      {/* Sticky Background Container - Fix for stretching issue */}
      <div className="sticky top-0 h-screen w-full z-0 pointer-events-none">
        <div className="absolute inset-0">
          <Image
            src="/backgrounds/project-bg.jpg"
            alt="Project Background"
            fill
            className="object-cover object-center opacity-30 grayscale hover:grayscale-50 transition-all duration-1000"
            priority
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </div>

      {/* Content Layer */}
      <div className="relative z-10 container mx-auto px-6 -mt-[100vh] pt-24 pb-24">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16">
          <BlurFade delay={0.1} inView>
            <div className="flex items-center gap-4 mb-6 justify-center">
              <span className="h-[1px] w-12 bg-red-600" />
              <span className="text-red-500 font-bold tracking-[0.2em] text-sm uppercase">Live Showcase</span>
              <span className="h-[1px] w-12 bg-red-600" />
            </div>
          </BlurFade>
          
          <BlurFade delay={0.2} inView>
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase mb-8 text-white">
              Building <span className="text-red-600">Premium</span> <br />
              Digital Experiences.
            </h2>
          </BlurFade>
          
          <BlurFade delay={0.3} inView>
            <p className="max-w-2xl text-xl text-neutral-400 font-medium italic">
              "An interactive glimpse into my work—scroll, click, and explore. 
              The future of web experiences is here."
            </p>
          </BlurFade>
        </div>

        {/* Macbook Scroll Section - Using new thumbnail from user */}
        <div className="w-full">
          <BlurFade delay={0.4} inView>
            <MacbookScroll
              src="/projects/iphone-thumbnail.png"
              isLive={true}
              projectUrl="https://iphoneclonesuleman.vercel.app/"
              showGradient={false}
              title={
                <span className="text-white">
                  iPhone 15 Pro <span className="text-red-600">Live</span> Experience.
                </span>
              }
            />
          </BlurFade>
        </div>

        {/* View More Button */}
        <div className="flex justify-center mt-20">
          <BlurFade delay={0.5} inView>
            <Link href="/projects">
              <HoverBorderGradient
                containerClassName="rounded-full"
                className="bg-black text-white flex items-center space-x-2 px-8 py-3"
              >
                <div className="h-4 w-4 bg-red-600 rounded-full animate-pulse" />
                <span className="font-bold uppercase tracking-widest text-sm">View more projects</span>
              </HoverBorderGradient>
            </Link>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
