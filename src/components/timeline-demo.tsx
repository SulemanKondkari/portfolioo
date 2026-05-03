"use client";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { NoiseBackground } from "@/components/ui/noise-background";
import Link from "next/link";
import Image from "next/image";

export default function TimelineDemo() {
  const data = [
    {
      title: "Modern Fitness",
      content: (
        <div className="space-y-8">
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-medium leading-relaxed">
            A premium, high-performance fitness platform for <span className="text-red-600 font-bold">Modern Fitness Club</span>. Featuring cinematic video backgrounds, GSAP-powered scrollytelling, and a sleek dark mode aesthetic.
          </p>
          <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
            <Image
              src="/projects/gymxkondkarizz.png"
              alt="Modern Fitness"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex justify-start">
            <Link href="https://gymxkondkarizz.vercel.app/" target="_blank">
              <NoiseBackground
                containerClassName="w-fit p-1 rounded-full"
                gradientColors={["rgb(220, 38, 38)", "rgb(0, 0, 0)", "rgb(255, 0, 0)"]}
              >
                <div className="cursor-pointer rounded-full bg-linear-to-r from-neutral-100 via-neutral-100 to-white px-8 py-3 text-black shadow-[0px_2px_0px_0px_var(--color-neutral-50)_inset,0px_0.5px_1px_0px_var(--color-neutral-400)] transition-all duration-100 active:scale-95 dark:from-black dark:via-black dark:to-neutral-900 dark:text-white dark:shadow-[0px_1px_0px_0px_var(--color-neutral-950)_inset,0px_1px_0px_0px_var(--color-neutral-800)] font-bold uppercase tracking-widest text-xs">
                  Experience Modern Fitness &rarr;
                </div>
              </NoiseBackground>
            </Link>
          </div>
        </div>
      ),
    },
    {
      title: "iPhone Clone",
      content: (
        <div className="space-y-8">
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-medium leading-relaxed">
            A pixel-perfect clone of the iPhone 15 Pro landing page. Built with <span className="text-red-600 font-bold">Three.js</span> and <span className="text-red-600 font-bold">GSAP</span> for ultra-smooth 3D interactions and scroll-driven storytelling.
          </p>
          <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
            <Image
              src="/projects/iphoneclone.png"
              alt="iPhone Clone"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex justify-start">
            <Link href="https://iphoneclonesuleman.vercel.app" target="_blank">
              <NoiseBackground
                containerClassName="w-fit p-1 rounded-full"
                gradientColors={["rgb(220, 38, 38)", "rgb(0, 0, 0)", "rgb(255, 0, 0)"]}
              >
                <div className="cursor-pointer rounded-full bg-linear-to-r from-neutral-100 via-neutral-100 to-white px-8 py-3 text-black shadow-[0px_2px_0px_0px_var(--color-neutral-50)_inset,0px_0.5px_1px_0px_var(--color-neutral-400)] transition-all duration-100 active:scale-95 dark:from-black dark:via-black dark:to-neutral-900 dark:text-white dark:shadow-[0px_1px_0px_0px_var(--color-neutral-950)_inset,0px_1px_0px_0px_var(--color-neutral-800)] font-bold uppercase tracking-widest text-xs">
                  Launch Experience &rarr;
                </div>
              </NoiseBackground>
            </Link>
          </div>
        </div>
      ),
    },
    {
      title: "Diet Coke",
      content: (
        <div className="space-y-8">
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-medium leading-relaxed">
            High-performance landing page for <span className="text-red-600 font-bold">Diet Coke</span>. Focused on liquid-smooth animations and premium product presentation using Framer Motion and custom CSS shaders.
          </p>
          <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
            <Image
              src="/projects/dietcoke.png"
              alt="Diet Coke"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex justify-start">
            <Link href="https://dietcoke-virid.vercel.app" target="_blank">
              <NoiseBackground
                containerClassName="w-fit p-1 rounded-full"
                gradientColors={["rgb(220, 38, 38)", "rgb(0, 0, 0)", "rgb(255, 0, 0)"]}
              >
                <div className="cursor-pointer rounded-full bg-linear-to-r from-neutral-100 via-neutral-100 to-white px-8 py-3 text-black shadow-[0px_2px_0px_0px_var(--color-neutral-50)_inset,0px_0.5px_1px_0px_var(--color-neutral-400)] transition-all duration-100 active:scale-95 dark:from-black dark:via-black dark:to-neutral-900 dark:text-white dark:shadow-[0px_1px_0px_0px_var(--color-neutral-950)_inset,0px_1px_0px_0px_var(--color-neutral-800)] font-bold uppercase tracking-widest text-xs">
                  View Live Site &rarr;
                </div>
              </NoiseBackground>
            </Link>
          </div>
        </div>
      ),
    },
    {
      title: "Interactive Portfolio",
      content: (
        <div className="space-y-8">
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-medium leading-relaxed">
            My previous <span className="text-red-600 font-bold">Interactive Portfolio</span> featuring a custom 3D environment, dynamic text reveals, and a unique editorial layout. Pushing the boundaries of web navigation.
          </p>
          <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
            <Image
              src="/projects/portfolio.png"
              alt="Portfolio"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex justify-start">
            <Link href="https://portfolio-cyan-zeta-931umgly6e.vercel.app" target="_blank">
              <NoiseBackground
                containerClassName="w-fit p-1 rounded-full"
                gradientColors={["rgb(220, 38, 38)", "rgb(0, 0, 0)", "rgb(255, 0, 0)"]}
              >
                <div className="cursor-pointer rounded-full bg-linear-to-r from-neutral-100 via-neutral-100 to-white px-8 py-3 text-black shadow-[0px_2px_0px_0px_var(--color-neutral-50)_inset,0px_0.5px_1px_0px_var(--color-neutral-400)] transition-all duration-100 active:scale-95 dark:from-black dark:via-black dark:to-neutral-900 dark:text-white dark:shadow-[0px_1px_0px_0px_var(--color-neutral-950)_inset,0px_1px_0px_0px_var(--color-neutral-800)] font-bold uppercase tracking-widest text-xs">
                  Explore Gallery &rarr;
                </div>
              </NoiseBackground>
            </Link>
          </div>
        </div>
      ),
    },
    {
      title: "Modi Airlines",
      content: (
        <div className="space-y-8">
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-medium leading-relaxed">
            A playful yet high-performance web experience for <span className="text-red-600 font-bold">Modi Airlines</span>. Featuring game-like physics, animated flight paths, and a retro-futuristic aesthetic.
          </p>
          <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
            <Image
              src="/projects/modihbird.png"
              alt="Modi Airlines"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex justify-start">
            <Link href="https://modihbird.vercel.app" target="_blank">
              <NoiseBackground
                containerClassName="w-fit p-1 rounded-full"
                gradientColors={["rgb(220, 38, 38)", "rgb(0, 0, 0)", "rgb(255, 0, 0)"]}
              >
                <div className="cursor-pointer rounded-full bg-linear-to-r from-neutral-100 via-neutral-100 to-white px-8 py-3 text-black shadow-[0px_2px_0px_0px_var(--color-neutral-50)_inset,0px_0.5px_1px_0px_var(--color-neutral-400)] transition-all duration-100 active:scale-95 dark:from-black dark:via-black dark:to-neutral-900 dark:text-white dark:shadow-[0px_1px_0px_0px_var(--color-neutral-950)_inset,0px_1px_0px_0px_var(--color-neutral-800)] font-bold uppercase tracking-widest text-xs">
                  Take Flight &rarr;
                </div>
              </NoiseBackground>
            </Link>
          </div>
        </div>
      ),
    },
  
  ];

  return (
    <div className="relative w-full overflow-clip bg-black">
      <Timeline data={data} />
    </div>
  );
}
