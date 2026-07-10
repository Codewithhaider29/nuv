import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useSmoothScroll } from "@/lib/smooth-scroll";

import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { SkincareSection } from "@/components/SkincareSection";
import { OrbSection } from "@/components/OrbSection";
import { Manifesto } from "@/components/Manifesto";
import { AIGuidance } from "@/components/AIGuidance";
import { Footer } from "@/components/Footer";

gsap.registerPlugin(ScrollTrigger);

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const rootRef = useRef<HTMLDivElement>(null);
  useSmoothScroll();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Route/mount transition — the whole shell drops in
      gsap.from("[data-anim='shell']", {
        y: 24,
        opacity: 0,
        scale: 0.99,
        duration: 0.9,
        ease: "power3.out",
        delay: 2.2, // Matches the loader slide-out timing
      });

      gsap.from("[data-anim='header'] > *", {
        y: -20,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.08,
        delay: 2.2,
      });

      gsap.from("[data-anim='hero-left'] > *", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.1,
        delay: 2.35,
      });

      gsap.from("[data-anim='hero-image']", {
        scale: 1.08,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        delay: 2.25,
      });
      gsap.from("[data-anim='stat']", {
        x: 30,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.12,
        delay: 2.55,
      });

      // CTA — scroll-reactive highlight
      const cta = rootRef.current?.querySelector<HTMLElement>("[data-anim='cta']");
      const shine = rootRef.current?.querySelector<HTMLElement>("[data-anim='cta-shine']");
      if (cta && shine) {
        // Pulse scale tied to scroll
        gsap.to(cta, {
          scale: 1.06,
          boxShadow: "0 12px 30px -10px oklch(0.7 0.15 305 / 0.5)",
          scrollTrigger: {
            trigger: "[data-anim='skincare-img']",
            start: "top 90%",
            end: "bottom top",
            scrub: 1,
          },
        });

        // Periodic shine sweep
        gsap.to(shine, {
          xPercent: 200,
          duration: 1.2,
          ease: "power2.inOut",
          repeat: -1,
          repeatDelay: 3.5,
        });

        // One-shot highlight when the orb section enters
        ScrollTrigger.create({
          trigger: "#orb",
          start: "top 70%",
          onEnter: () => {
            gsap
              .timeline()
              .to(cta, { scale: 1.15, duration: 0.25, ease: "power2.out" })
              .to(
                cta,
                {
                  keyframes: {
                    backgroundColor: [
                      "oklch(0.88 0.06 305)",
                      "oklch(0.78 0.18 305)",
                      "oklch(0.88 0.06 305)",
                    ],
                  },
                  duration: 0.9,
                },
                "<",
              )
              .to(cta, { scale: 1, duration: 0.4, ease: "elastic.out(1, 0.5)" });
          },
        });
      }

      // Skincare scroll reveals
      gsap.from("[data-anim='skincare-img']", {
        scrollTrigger: { trigger: "[data-anim='skincare-img']", start: "top 80%" },
        scale: 1.1,
        opacity: 0,
        duration: 1.1,
        ease: "power3.out",
      });
      gsap.from("[data-anim='skincare-copy'] > *", {
        scrollTrigger: { trigger: "[data-anim='skincare-copy']", start: "top 75%" },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      });
      gsap.from("[data-anim='pin']", {
        scrollTrigger: { trigger: "[data-anim='skincare-img']", start: "top 70%" },
        scale: 0,
        opacity: 0,
        duration: 0.5,
        stagger: 0.2,
        ease: "back.out(2.5)",
        delay: 0.4,
      });

      // Orb section
      gsap.from("[data-anim='orb-copy'] > *", {
        scrollTrigger: { trigger: "#orb", start: "top 75%" },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
      });
      gsap.from("[data-anim='orb-canvas']", {
        scrollTrigger: { trigger: "#orb", start: "top 80%" },
        scale: 0.9,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
      gsap.to("[data-anim='orb-canvas']", {
        scrollTrigger: { trigger: "#orb", start: "top bottom", end: "bottom top", scrub: 1 },
        y: -60,
        ease: "none",
      });

      // Manifesto
      gsap.from("[data-anim='tag']", {
        scrollTrigger: { trigger: "[data-anim='manifesto']", start: "top 70%" },
        y: 20,
        scale: 0.7,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "back.out(2)",
      });
      const words = gsap.utils.toArray<HTMLElement>("[data-anim='word']");
      gsap.fromTo(
        words,
        { opacity: 0.15 },
        {
          opacity: 1,
          duration: 0.4,
          stagger: 0.05,
          ease: "none",
          scrollTrigger: {
            trigger: "[data-anim='manifesto']",
            start: "top 60%",
            end: "bottom 70%",
            scrub: 1,
          },
        },
      );

      // AI Guidance Scroll Animations
      gsap.from("[data-anim='ai-copy'] > *", {
        scrollTrigger: { trigger: "#ai-guidance", start: "top 75%" },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      });

      gsap.from("[data-anim='ai-mockup']", {
        scrollTrigger: { trigger: "#ai-guidance", start: "top 75%" },
        x: -40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
      // Footer scroll animations
      gsap.from("[data-anim='footer-content']", {
        scrollTrigger: { trigger: "footer", start: "top 90%" },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
      gsap.from("[data-anim='footer-col']", {
        scrollTrigger: { trigger: "footer", start: "top 85%" },
        y: 30,
        opacity: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: "power3.out",
        delay: 0.2,
      });

      ScrollTrigger.refresh();
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={rootRef} className="min-h-screen bg-white relative">
      <main data-anim="shell" className="w-full overflow-hidden">
        <Header />
        <Hero />
        <SkincareSection />
        <OrbSection />
        <AIGuidance />
        <Manifesto />
        <Footer />
      </main>
    </div>
  );
}
