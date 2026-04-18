"use client";
 
import Image from 'next/image'
import { Plus } from 'lucide-react'

import React from "react";
import Zoom from "react-medium-image-zoom"; 
import "react-medium-image-zoom/dist/styles.css";
import { cn } from '@/lib/utils';

export const Component = ({ name = "Suleman Kondkari", imageSrc = "/suit.png" }: { name?: string, imageSrc?: string }) => {  
  const names = name.split(" ");
  return (
    <div className="group">
       <div className={cn(
         "relative mx-auto my-6 flex flex-col items-center justify-center border border-white/10 p-4 transition-all duration-500",
         "h-[400px] w-full max-w-[320px] md:h-[500px] md:max-w-[400px]",
         "bg-neutral-900/40 backdrop-blur-md overflow-hidden"
       )}>
                        {/* Corner Pluses */}
                        <Plus strokeWidth={1} className="text-red-600 absolute -left-3 -top-3 h-6 w-6 opacity-60 group-hover:opacity-100 transition-opacity" />
                        <Plus strokeWidth={1} className="text-red-600 absolute -bottom-3 -left-3 h-6 w-6 opacity-60 group-hover:opacity-100 transition-opacity" />
                        <Plus strokeWidth={1} className="text-red-600 absolute -right-3 -top-3 h-6 w-6 opacity-60 group-hover:opacity-100 transition-opacity" />
                        <Plus strokeWidth={1} className="text-red-600 absolute -bottom-3 -right-3 h-6 w-6 opacity-60 group-hover:opacity-100 transition-opacity" />
                        
                        <ImageZoom>
                            <div className="relative w-full h-full flex flex-col items-center justify-center">
                                {/* Blended Image */}
                                <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden">
                                    {/* Using standard img tag to ensure visibility */}
                                    <img
                                        src={imageSrc}
                                        alt={name}
                                        className="h-full w-full object-contain object-top transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>



                                
                                {/* Name Overlay at the Bottom */}
                                <div className="absolute bottom-0 left-0 right-0 z-20 flex flex-col items-center pb-2 pointer-events-none">
                                    <div className="bg-black/80 backdrop-blur-sm border-y border-white/5 w-full py-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                        <h2 className="text-center flex flex-col items-center leading-none">
                                            {names.map((n, i) => (
                                                <span key={i} className={cn(
                                                    "text-3xl md:text-5xl font-black tracking-tighter uppercase block",
                                                    i === 1 ? "text-red-600 -mt-1" : "text-white"
                                                )}>
                                                    {n}
                                                </span>
                                            ))}
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </ImageZoom>
                    </div>
    </div>
  );
};


type ImageZoomProps = {
  children: React.ReactNode;
} & React.ComponentPropsWithoutRef<typeof Zoom>;

const ImageZoom = (props: ImageZoomProps) => {
  const { children, ...rest } = props;

  return (
    <Zoom zoomMargin={20} {...rest}>
      {children}
    </Zoom>
  );
};

export {ImageZoom};
