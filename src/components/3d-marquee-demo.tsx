"use client";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";

export default function ThreeDMarqueeDemo() {
  const projects = [
    {
      title: "iPhone 15 Pro Clone",
      image: "/projects/iphoneclone.png",
      link: "https://iphoneclonesuleman.vercel.app",
    },
    {
      title: "Interactive Portfolio",
      image: "/projects/portfolio.png",
      link: "https://portfolio-cyan-zeta-931umgly6e.vercel.app",
    },
    {
      title: "Modi Airlines",
      image: "/projects/modihbird.png",
      link: "https://modihbird.vercel.app",
    },
    {
      title: "3D Component Lab",
      image: "https://assets.aceternity.com/cloudinary_bkp/3d-card.png",
      link: "https://dietcoke-virid.vercel.app",
    },
    {
      title: "Animated Experiences",
      image: "https://assets.aceternity.com/animated-modal.png",
      link: "https://modihbird.vercel.app",
    },
    {
      title: "iPhone 15 Pro Clone",
      image: "/projects/iphoneclone.png",
      link: "https://iphoneclonesuleman.vercel.app",
    },
    {
      title: "Interactive Portfolio",
      image: "/projects/portfolio.png",
      link: "https://portfolio-cyan-zeta-931umgly6e.vercel.app",
    },
    {
      title: "Modi Airlines",
      image: "/projects/modihbird.png",
      link: "https://modihbird.vercel.app",
    },
    {
      title: "High Performance Web",
      image: "https://assets.aceternity.com/animated-testimonials.webp",
      link: "https://dietcoke-virid.vercel.app",
    },
    {
      title: "Next.js Architecture",
      image: "https://assets.aceternity.com/github-globe.png",
      link: "https://modihbird.vercel.app",
    },
    {
      title: "iPhone 15 Pro Clone",
      image: "/projects/iphoneclone.png",
      link: "https://iphoneclonesuleman.vercel.app",
    },
    {
      title: "Interactive Portfolio",
      image: "/projects/portfolio.png",
      link: "https://portfolio-cyan-zeta-931umgly6e.vercel.app",
    },
  ];

  return (
    <div className="mx-auto my-10 max-w-7xl rounded-3xl bg-white/5 p-2 ring-1 ring-white/10 backdrop-blur-sm overflow-hidden border border-white/5">
      <ThreeDMarquee items={projects} />
    </div>
  );
}
