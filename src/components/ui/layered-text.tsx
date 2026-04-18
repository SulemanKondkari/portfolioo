"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import type React from "react"

interface LayeredTextProps {
  lines?: Array<{ top: string; bottom: string }>
  fontSize?: string
  fontSizeMd?: string
  lineHeight?: number
  lineHeightMd?: number
  className?: string
}

export function LayeredText({
  lines = [
    { top: "INFINITE", bottom: "INFINITE" },
    { top: "PROGRESS", bottom: "PROGRESS" },
    { top: "INNOVATION", bottom: "INNOVATION" },
    { top: "FUTURE", bottom: "FUTURE" },
    { top: "DREAMS", bottom: "FUTURE" },
    { top: "SULEMAN", bottom: "SULEMAN" },
  ],
  fontSize = "120px",
  fontSizeMd = "60px",
  lineHeight = 100,
  lineHeightMd = 50,
  className = "",
}: LayeredTextProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const timelineRef = useRef<gsap.core.Timeline>(null)

  const calculateTranslateX = (index: number) => {
    // Reduce offsets slightly for longer lists to stay centered
    const baseOffset = lines.length > 6 ? 25 : 35
    const baseOffsetMd = lines.length > 6 ? 10 : 20
    const centerIndex = Math.floor(lines.length / 2)
    return {
      desktop: (index - centerIndex) * baseOffset,
      mobile: (index - centerIndex) * baseOffsetMd,
    }
  }

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    const paragraphs = container.querySelectorAll("p")

    timelineRef.current = gsap.timeline({ paused: true })

    timelineRef.current.to(paragraphs, {
      y: window.innerWidth >= 768 ? -lineHeight : -lineHeightMd,
      duration: 0.8,
      ease: "power2.out",
      stagger: 0.08,
    })

    const handleMouseEnter = () => {
      timelineRef.current?.play()
    }

    const handleMouseLeave = () => {
      timelineRef.current?.reverse()
    }

    container.addEventListener("mouseenter", handleMouseEnter)
    container.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      container.removeEventListener("mouseenter", handleMouseEnter)
      container.removeEventListener("mouseleave", handleMouseLeave)
      timelineRef.current?.kill()
    }
  }, [lines, lineHeight, lineHeightMd])

  return (
    <div
      ref={containerRef}
      className={`mx-auto py-12 font-sans font-black tracking-[-4px] uppercase antialiased cursor-pointer ${className}`}
      style={{ 
        fontSize, 
        "--md-font-size": fontSizeMd 
      } as React.CSSProperties}
    >
      <style jsx>{`
        @media (max-width: 767px) {
          .layered-text-container {
            font-size: var(--md-font-size) !important;
          }
          .layered-text-item {
            height: var(--md-height) !important;
            transform: translateX(var(--md-translateX)) skew(var(--skew)) scaleY(var(--scale-y)) !important;
          }
          .layered-text-p {
             height: var(--md-height) !important;
             line-height: var(--md-height) !important;
          }
        }
      `}</style>
      <ul className="list-none p-0 m-0 flex flex-col items-center layered-text-container">
        {lines.map((line, index) => {
          const translateX = calculateTranslateX(index)
          return (
            <li
              key={index}
              className="overflow-hidden relative layered-text-item"
              style={
                {
                  height: `${lineHeight}px`,
                  transform: `translateX(${translateX.desktop}px) skew(${index % 2 === 0 ? "60deg, -30deg" : "0deg, -30deg"}) scaleY(${index % 2 === 0 ? "0.66667" : "1.33333"})`,
                  "--md-height": `${lineHeightMd}px`,
                  "--md-translateX": `${translateX.mobile}px`,
                  "--skew": index % 2 === 0 ? "60deg, -30deg" : "0deg, -30deg",
                  "--scale-y": index % 2 === 0 ? "0.66667" : "1.33333",
                } as React.CSSProperties
              }
            >
              <p
                className="px-[15px] align-top whitespace-nowrap m-0 transition-colors text-red-600 hover:text-red-500 layered-text-p"
                style={
                  {
                    height: `${lineHeight}px`,
                    lineHeight: `${lineHeight}px`,
                  } as React.CSSProperties
                }
              >
                {line.top}
              </p>
              <p
                className="px-[15px] align-top whitespace-nowrap m-0 transition-colors text-red-700 hover:text-red-600 layered-text-p"
                style={
                  {
                    height: `${lineHeight}px`,
                    lineHeight: `${lineHeight}px`,
                  } as React.CSSProperties
                }
              >
                {line.bottom}
              </p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
