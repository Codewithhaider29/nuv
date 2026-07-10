import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import logo from "@/assets/logo.png";

export function Loader() {
  const loaderRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // 1. Sleek staggered entrance sliding up from the mask
      tl.to([iconRef.current, textRef.current, ".loader-tagline"], {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.15,
        ease: "power4.out",
      })

        // 2. Hold on screen, then slide up and fade out
        .to([iconRef.current, textRef.current, ".loader-tagline"], {
          y: -30,
          opacity: 0,
          duration: 0.6,
          delay: 1.2, // Hold time extended slightly for readability
          stagger: 0.1,
          ease: "power3.in",
        })

        // 3. Slide the entire white background out of the way
        .to(loaderRef.current, {
          yPercent: -100,
          duration: 1.2,
          ease: "expo.inOut",
        });
    }, loaderRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-white pointer-events-none"
    >
      <div className="flex flex-col items-center gap-4">
        <div className="flex items-center gap-3">
          {/* Mask wrapper for the Icon */}
          <div className="overflow-hidden pt-2 pb-2">
            <img
              ref={iconRef}
              src={logo}
              alt="logo"
              className="h-12 w-12 object-contain translate-y-12 opacity-0"
            />
          </div>

          {/* Mask wrapper for the Text */}
          <div className="overflow-hidden pt-2 pb-2">
            <span
              ref={textRef}
              className="block text-5xl font-semibold tracking-tight text-black translate-y-12 opacity-0"
            >
              Nuvé
            </span>
          </div>
        </div>
        {/* Tagline */}
        <div className="overflow-hidden">
          <span className="block text-sm font-medium tracking-wide text-neutral-500 uppercase loader-tagline opacity-0 translate-y-12">
            Unlock your skin's potential
          </span>
        </div>
      </div>
    </div>
  );
}
