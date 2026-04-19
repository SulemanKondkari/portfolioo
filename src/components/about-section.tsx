"use client";

import { BlurFade } from "@/components/ui/blur-fade";
import { TextRevealByWord } from "@/components/ui/text-reveal";
import { Component as ImageZoomComponent } from "@/components/ui/image-zoom";
import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Parallax effect for the background image to show more of the wide artwork
  const backgroundX = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);

  return (
    <section ref={sectionRef} className="relative min-h-[120vh] md:min-h-[150vh] w-full bg-black text-white overflow-hidden">
      {/* Dynamic Background Artwork */}
      <div className="sticky top-0 h-[60vh] md:h-screen w-full z-0 overflow-hidden">
        <motion.div 
          style={{ x: backgroundX, scale: backgroundScale }}
          className="relative w-[120%] h-full"
        >
          <Image
            src="/about-bg.jpeg"
            alt="About Background"
            fill
            className="object-cover opacity-80 transition-opacity duration-1000"
            priority
          />
        </motion.div>
        {/* Subtle cinematic overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-24 -mt-[40vh] md:-mt-[100vh]">
        {/* Small Label */}
        <BlurFade delay={0.1} inView>
          <div className="flex items-center gap-4 mb-20">
            <span className="h-[1px] w-12 bg-red-600" />
            <span className="text-red-500 font-bold tracking-[0.2em] text-sm uppercase">About</span>
          </div>
        </BlurFade>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Main Content Side */}
          <div className="flex flex-col gap-12">
            <BlurFade delay={0.2} inView>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] uppercase">
                I design and develop <br />
                <span className="text-red-600">clean web experiences.</span>
              </h2>
            </BlurFade>

            <div className="flex flex-col gap-8 max-w-xl">
              <BlurFade delay={0.3} inView>
                <p className="text-xl md:text-2xl text-neutral-300 leading-relaxed font-medium">
                  I’m a computer engineering student focused on web development. 
                  I started with C programming and gradually moved into building websites, 
                  learning how everything works from frontend to backend.
                </p>
              </BlurFade>
              
              <BlurFade delay={0.4} inView>
                <p className="text-lg text-neutral-400 leading-relaxed">
                  I like understanding the full system — how a website is built, 
                  deployed, and optimized to actually perform. I’m currently building 
                  real projects to improve both my technical skills and design thinking.
                </p>
              </BlurFade>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 mt-10">
              <BlurFade delay={0.5} inView>
                <div className="flex flex-col">
                  <span className="text-6xl font-black text-red-600">10+</span>
                  <span className="text-neutral-500 uppercase tracking-widest text-xs font-bold mt-2">Projects Built</span>
                </div>
              </BlurFade>
              <BlurFade delay={0.6} inView>
                <div className="flex flex-col">
                  <span className="text-6xl font-black text-red-600">5+</span>
                  <span className="text-neutral-500 uppercase tracking-widest text-xs font-bold mt-2">Technologies Learned</span>
                </div>
              </BlurFade>
              <BlurFade delay={0.7} inView>
                <div className="flex flex-col">
                  <span className="text-6xl font-black text-red-600">1+</span>
                  <span className="text-neutral-500 uppercase tracking-widest text-xs font-bold mt-2">Year of Learning</span>
                </div>
              </BlurFade>
            </div>
          </div>

          {/* Media Side */}
          <div className="flex flex-col items-center lg:items-end justify-center lg:pt-20">
              <div className="w-full max-w-lg">
                <ImageZoomComponent name="Suleman Kondkari" imageSrc="/profile-new.webp" />
             </div>
          </div>
        </div>
      </div>

    </section>
  );
}
