import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import skincareFace from "@/assets/skincare-face.jpg";

gsap.registerPlugin(ScrollTrigger);

export function SkincareSection() {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".skincare-top", {
        scrollTrigger: { trigger: panelRef.current, start: "top 75%" },
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.from(".skincare-arrow-line", {
        scrollTrigger: { trigger: ".skincare-arrow-wrapper", start: "top 60%" },
        height: 0,
        opacity: 0,
        duration: 1.2,
        ease: "power2.out",
      });

      gsap.from(".mindful-reveal", {
        scrollTrigger: { trigger: ".mindful-reveal", start: "top 85%" },
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });
    }, panelRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="skincare"
      className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 px-4 md:px-10 pb-10 md:pb-16"
    >
      {/* Image Panel – height scales with device */}
      <div className="relative overflow-hidden rounded-3xl">
        <img
          data-anim="skincare-img"
          src={skincareFace}
          alt="Applying cream"
          className="h-[280px] sm:h-[400px] md:h-[820px] w-full object-cover"
          loading="lazy"
        />
        {/* Pins remain absolutely positioned, scaled with container */}
        <span data-anim="pin" className="absolute left-[42%] top-[28%] flex flex-col items-center">
          <span className="h-2 w-2 rounded-full bg-white shadow-lg" />
          <span className="mt-2 text-[10px] font-semibold tracking-widest text-white drop-shadow">
            SLEEP WELL
          </span>
        </span>
        <span data-anim="pin" className="absolute left-[30%] top-[55%] flex flex-col items-center">
          <span className="h-2 w-2 rounded-full bg-white shadow-lg" />
          <span className="mt-2 text-[10px] font-semibold tracking-widest text-white drop-shadow">
            HYDRATE
          </span>
        </span>
        <span data-anim="pin" className="absolute left-[55%] top-[72%] flex flex-col items-center">
          <span className="h-2 w-2 rounded-full bg-white shadow-lg" />
          <span className="mt-2 text-[10px] font-semibold tracking-widest text-white drop-shadow">
            LESS STRESS
          </span>
        </span>
      </div>

      {/* Content Panel – padding and spacing adapt to screen size */}
      <div
        ref={panelRef}
        className="relative flex flex-col items-center justify-between rounded-3xl bg-gradient-to-b from-[oklch(0.96_0.03_305)] via-white to-white p-6 sm:p-10 md:p-12"
      >
        {/* AI Skincare Heading */}
        <div className="skincare-top mt-8 sm:mt-10 md:mt-12 max-w-full md:max-w-[360px] text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#2B2B2B]">
            AI Skincare
          </h2>
          <p className="mt-4 text-xs sm:text-sm text-[#555] leading-relaxed">
            AI doesn't promise perfection — it observes, learns, and adapts. Every scan interprets
            the natural passage of your skin's time, highlighting areas for thoughtful care and
            balance.
          </p>
        </div>

        {/* Decorative Arrow – height adapts to available space */}
        <div className="skincare-arrow-wrapper flex flex-1 flex-col items-center justify-center py-6 md:py-8">
          <div className="skincare-arrow-line w-px bg-gradient-to-b from-transparent via-[#d6c7ff] to-[#a881ff] h-32 sm:h-48 md:h-[260px]" />
          <div className="mt-0 h-2 w-2 rotate-45 border-b border-r border-[#a881ff]" />
        </div>

        {/* Mindful Beauty Section */}
        <div className="mindful-reveal mb-6 sm:mb-8 max-w-full md:max-w-[340px] text-center">
          <h3 className="mb-3 text-2xl md:text-3xl font-bold tracking-tight text-[#2B2B2B]">
            Mindful Beauty
          </h3>
          <p className="text-[11px] sm:text-xs text-[#666] leading-relaxed">
            Meaning: we can't stop aging, but we can guide it with awareness, insight, and gentle
            personalization.
          </p>
        </div>
      </div>
    </section>
  );
}