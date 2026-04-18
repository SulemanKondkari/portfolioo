"use client";
import React from "react";
import Link from "next/link";
import {
  IconBrandTwitter,
  IconBrandLinkedin,
  IconBrandGithub,
  IconMail,
  IconBrandInstagram,
  IconCode,
  IconExternalLink,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";

interface FooterLink {
  label: string;
  href: string;
}

interface SocialLink {
  icon: React.ReactNode;
  href: string;
  label: string;
}

interface FooterProps {
  brandName?: string;
  brandDescription?: string;
  socialLinks?: SocialLink[];
  navLinks?: FooterLink[];
  creatorName?: string;
  creatorUrl?: string;
  brandIcon?: React.ReactNode;
  className?: string;
}

export const Footer = ({
  brandName = "Suleman Kondkari",
  brandDescription = "Computer Engineering Student & Web Developer building dreams through the silence.",
  socialLinks = [
    { icon: <IconBrandGithub className="w-5 h-5" />, href: "https://github.com/SulemanKondkari", label: "GitHub" },
    { icon: <IconBrandLinkedin className="w-5 h-5" />, href: "https://www.linkedin.com/in/suleman-kondkari-4a6a57322/", label: "LinkedIn" },
    { icon: <IconBrandInstagram className="w-5 h-5" />, href: "https://www.instagram.com/kondkarizz/", label: "Instagram" },
    { icon: <IconMail className="w-5 h-5" />, href: "mailto:kondkarifareen9@gmail.com", label: "Email" },
  ],
  navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ],
  creatorName = "Suleman",
  creatorUrl = "https://github.com/SulemanKondkari",
  brandIcon,
  className,
}: FooterProps) => {
  return (
    <section className={cn("relative w-full mt-0 overflow-hidden bg-black text-white", className)}>
      <footer className="border-t border-white/5 bg-black mt-20 relative">
        <div className="max-w-7xl flex flex-col justify-between mx-auto min-h-[30rem] sm:min-h-[35rem] md:min-h-[40rem] relative p-4 py-10">
          <div className="flex flex-col mb-12 sm:mb-20 md:mb-0 w-full z-10">
            <div className="w-full flex flex-col items-center">
              <div className="space-y-4 flex flex-col items-center flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-white text-4xl md:text-6xl font-black uppercase tracking-tighter text-center">
                    {brandName.split(' ')[0]} <span className="text-red-600 italic">{brandName.split(' ')[1]}</span>
                  </span>
                </div>
                <p className="text-neutral-500 font-medium text-center w-full max-w-sm sm:w-[500px] px-4 sm:px-0 uppercase tracking-widest text-sm leading-relaxed">
                  {brandDescription}
                </p>
              </div>

              {socialLinks.length > 0 && (
                <div className="flex mb-12 mt-8 gap-6">
                  {socialLinks.map((link, index) => (
                    <Link
                      key={index}
                      href={link.href}
                      className="p-3 rounded-full bg-white/5 border border-white/10 text-neutral-400 hover:text-red-600 hover:border-red-600/50 hover:bg-red-600/5 transition-all duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="w-6 h-6 hover:scale-110 duration-300 transition-transform">
                        {link.icon}
                      </div>
                      <span className="sr-only">{link.label}</span>
                    </Link>
                  ))}
                </div>
              )}

              {navLinks.length > 0 && (
                <div className="flex flex-wrap justify-center gap-8 text-sm font-bold text-neutral-500 max-w-full px-4 uppercase tracking-[0.2em]">
                  {navLinks.map((link, index) => (
                    <Link
                      key={index}
                      className="hover:text-red-600 duration-300 transition-colors"
                      href={link.href}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="mt-20 md:mt-24 flex flex-col gap-4 md:gap-1 items-center justify-center md:flex-row md:items-center md:justify-between px-4 md:px-0 z-10">
            <p className="text-xs text-neutral-600 font-bold uppercase tracking-widest text-center md:text-left">
              ©{new Date().getFullYear()} {brandName}. All rights reserved.
            </p>
            {creatorName && creatorUrl && (
              <nav className="flex gap-4">
                <Link
                  href={creatorUrl}
                  target="_blank"
                  className="text-xs text-neutral-600 hover:text-red-600 transition-colors duration-300 font-bold uppercase tracking-widest"
                >
                  Crafted with ❤ by {creatorName}
                </Link>
              </nav>
            )}
          </div>
        </div>

        {/* Large background text */}
        <div 
          className="bg-gradient-to-b from-white/5 via-white/[0.02] to-transparent bg-clip-text text-transparent leading-none absolute left-1/2 -translate-x-1/2 bottom-40 md:bottom-28 font-black tracking-tighter pointer-events-none select-none text-center px-4 uppercase"
          style={{
            fontSize: 'clamp(5rem, 18vw, 15rem)',
            maxWidth: '100vw'
          }}
        >
          {brandName.split(' ')[0]}
        </div>

        {/* Bottom logo */}
        <div className="absolute hover:border-red-600/50 duration-500 bottom-24 md:bottom-20 backdrop-blur-md rounded-3xl bg-black/40 left-1/2 border border-white/10 flex items-center justify-center p-4 -translate-x-1/2 z-10 group transition-all shadow-[0_0_30px_rgba(220,38,38,0.1)]">
          <div className="w-16 md:w-24 h-16 md:h-24 bg-gradient-to-br from-red-600 to-red-900 rounded-2xl flex items-center justify-center shadow-2xl transition-transform group-hover:scale-105">
            {brandIcon || (
              <IconCode className="w-10 md:w-14 h-10 md:h-14 text-white drop-shadow-lg" />
            )}
          </div>
        </div>

        {/* Bottom line */}
        <div className="absolute bottom-32 md:bottom-34 backdrop-blur-sm h-[1px] bg-gradient-to-r from-transparent via-red-600/30 to-transparent w-full left-1/2 -translate-x-1/2"></div>

        {/* Bottom shadow/overlay to blend */}
        <div className="bg-gradient-to-t from-black via-black/80 to-transparent absolute bottom-0 w-full h-48 pointer-events-none" />
      </footer>
    </section>
  );
};
