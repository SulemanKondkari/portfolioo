"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

interface Project {
  image: string;
  link: string;
  title?: string;
}

export const ThreeDMarquee = ({
  items,
  className,
}: {
  items: Project[];
  className?: string;
}) => {
  // Split the items array into 4 equal parts
  const chunkSize = Math.ceil(items.length / 4);
  const chunks = Array.from({ length: 4 }, (_, colIndex) => {
    const start = colIndex * chunkSize;
    return items.slice(start, start + chunkSize);
  });

  return (
    <div
      className={cn(
        "mx-auto block h-[600px] overflow-hidden rounded-3xl max-sm:h-100 relative bg-black/5 dark:bg-neutral-900/50 [perspective:2000px]",
        className,
      )}
    >
      <div className="flex size-full items-center justify-center [transform-style:preserve-3d]">
        <div className="size-[1720px] shrink-0 scale-50 sm:scale-75 lg:scale-100 [transform-style:preserve-3d] flex items-center justify-center">
          <div
            style={{
              transform: "rotateX(55deg) rotateY(0deg) rotateZ(-45deg)",
            }}
            className="relative grid grid-cols-4 gap-12 [transform-style:preserve-3d] w-full h-full"
          >
            {chunks.map((subarray, colIndex) => (
              <motion.div
                animate={{ 
                  y: colIndex % 2 === 0 ? [-200, 200] : [200, -200] 
                }}
                transition={{
                  duration: colIndex % 2 === 0 ? 20 : 25,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
                key={colIndex + "marquee"}
                className="flex flex-col items-start gap-12 [transform-style:preserve-3d]"
              >
                <GridLineVertical className="-left-6" offset="100px" />
                {subarray.map((item, imageIndex) => (
                  <div className="relative group/card [transform-style:preserve-3d]" key={imageIndex + item.image}>
                    <GridLineHorizontal className="-top-6" offset="30px" />
                    <Link 
                      href={item.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block transform-gpu"
                    >
                      <motion.div
                        whileHover={{
                          z: 50,
                          rotateX: -10,
                          rotateY: 10,
                        }}
                        transition={{
                          duration: 0.4,
                          ease: "easeOut",
                        }}
                        className="relative z-10 [transform-style:preserve-3d]"
                      >
                        {/* Using standard img for 3D stability */}
                        <img
                          src={item.image}
                          alt={item.title || `Project ${imageIndex + 1}`}
                          className="aspect-[970/700] rounded-2xl object-cover w-[400px] shadow-xl ring-1 ring-white/10 hover:shadow-[0_40px_100px_rgba(220,38,38,0.4)] transition-all duration-500 bg-neutral-900"
                        />
                        {item.title && (
                          <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/95 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 rounded-b-2xl">
                            <p className="text-white font-black text-2xl uppercase tracking-tighter italic">
                              {item.title}
                            </p>
                          </div>
                        )}
                      </motion.div>
                    </Link>
                  </div>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const GridLineHorizontal = ({
  className,
  offset,
}: {
  className?: string;
  offset?: string;
}) => {
  return (
    <div
      style={
        {
          "--background": "#ffffff",
          "--color": "rgba(255, 255, 255, 0.15)",
          "--height": "1px",
          "--width": "5px",
          "--fade-stop": "90%",
          "--offset": offset || "200px",
          "--color-dark": "rgba(255, 255, 255, 0.15)",
          maskComposite: "exclude",
        } as React.CSSProperties
      }
      className={cn(
        "absolute left-[calc(var(--offset)/2*-1)] h-[var(--height)] w-[calc(100%+var(--offset))]",
        "bg-[linear-gradient(to_right,var(--color),var(--color)_50%,transparent_0,transparent)]",
        "[background-size:var(--width)_var(--height)]",
        "[mask:linear-gradient(to_left,var(--background)_var(--fade-stop),transparent),_linear-gradient(to_right,var(--background)_var(--fade-stop),transparent),_linear-gradient(black,black)]",
        "[mask-composite:exclude]",
        className,
      )}
    ></div>
  );
};

const GridLineVertical = ({
  className,
  offset,
}: {
  className?: string;
  offset?: string;
}) => {
  return (
    <div
      style={
        {
          "--background": "#ffffff",
          "--color": "rgba(255, 255, 255, 0.15)",
          "--height": "5px",
          "--width": "1px",
          "--fade-stop": "90%",
          "--offset": offset || "150px",
          "--color-dark": "rgba(255, 255, 255, 0.15)",
          maskComposite: "exclude",
        } as React.CSSProperties
      }
      className={cn(
        "absolute top-[calc(var(--offset)/2*-1)] h-[calc(100%+var(--offset))] w-[var(--width)]",
        "bg-[linear-gradient(to_bottom,var(--color),var(--color)_50%,transparent_0,transparent)]",
        "[background-size:var(--width)_var(--height)]",
        "[mask:linear-gradient(to_top,var(--background)_var(--fade-stop),transparent),_linear-gradient(to_bottom,var(--background)_var(--fade-stop),transparent),_linear-gradient(black,black)]",
        "[mask-composite:exclude]",
        className,
      )}
    ></div>
  );
};
