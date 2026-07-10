import { Hexagon, Orbit, Cylinder } from "lucide-react";
import React, { useEffect } from "react";
import gsap from "gsap";
import heroFace from "@/assets/hero-face.mp4";

export function TrustedPill() {
  const avatars = [
    "https://i.pravatar.cc/100?img=68",
    "https://i.pravatar.cc/100?img=47",
    "https://i.pravatar.cc/100?img=33",
  ];

  return (
    <div className="mt-6 sm:mt-8 md:mt-12 inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-white/70 px-3 py-1.5 backdrop-blur">
      <div className="flex -space-x-2">
        {avatars.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Trusted user ${i + 1}`}
            className="h-5 w-5 sm:h-6 sm:w-6 rounded-full border-2 border-white object-cover"
          />
        ))}
      </div>
      <span className="text-[11px] sm:text-xs font-medium text-foreground/70">
        Trusted by 9,827+ users
      </span>
    </div>
  );
}

function StatRow({
  icon,
  endValue,
  suffix,
  label,
  delay = 0,
}: {
  icon: React.ReactNode;
  endValue: number;
  suffix: string;
  label: string;
  delay?: number;
}) {
  const numRef = React.useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!numRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        numRef.current,
        { textContent: 0 },
        {
          textContent: endValue,
          duration: 2.5,
          delay: delay,
          ease: "power3.out",
          snap: { textContent: 1 },
        },
      );
    });

    return () => ctx.revert();
  }, [endValue, delay]);

  return (
    <div data-anim="stat" className="flex items-center gap-3 sm:gap-4 md:gap-6">
      <div className="flex items-center justify-center text-foreground/60">{icon}</div>
      <div>
        <div className="text-xl sm:text-2xl md:text-3xl xl:text-4xl font-medium tracking-tight text-foreground">
          <span ref={numRef}>0</span>
          {suffix}
        </div>
        <div className="text-[11px] sm:text-xs text-muted-foreground leading-tight mt-0.5 sm:mt-1 whitespace-pre-line">
          {label}
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  const scanAnimRef = React.useRef<gsap.core.Tween>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      scanAnimRef.current = gsap.to("[data-anim='scan']", {
        x: -25,
        y: 5,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });

    return () => ctx.revert();
  }, []);

  const handleVideoEnded = () => {
    if (scanAnimRef.current) {
      scanAnimRef.current.pause();
    }
  };

  return (
    <section
      id="hero"
      className="relative flex flex-col md:grid md:grid-cols-12 gap-6 md:gap-8 px-4 sm:px-6 md:px-10 pt-6 md:pt-8 pb-10 md:pb-16 min-h-[550px] sm:min-h-[600px] md:min-h-[800px]"
    >
      {/* Background Video */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <video
          data-anim="hero-image"
          src={heroFace}
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover mix-blend-multiply"
        />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none" />
      </div>

      {/* Left: Text */}
      <div
        data-anim="hero-left"
        className="flex flex-col justify-start relative z-10 md:col-span-3 pt-2 sm:pt-4 md:pt-10"
      >
        <TrustedPill />
        <h1 className="mt-6 sm:mt-8 md:mt-14 text-4xl sm:text-5xl md:text-6xl font-medium leading-[1.02] tracking-tight text-foreground">
          Unlock
          <br />
          your skin's
          <br />
          potential
        </h1>
        <p className="mt-3 sm:mt-4 md:mt-6 text-sm text-muted-foreground max-w-[220px]">
          Our AI scans your face and shows what can be improved
        </p>
        <button
          data-anim="cta"
          className="group relative mt-5 sm:mt-6 md:mt-8 flex w-fit items-center gap-2 overflow-hidden rounded-md bg-[oklch(0.95_0.03_305)] px-5 sm:px-6 py-2.5 sm:py-3 text-sm font-medium text-foreground transition-colors hover:bg-[oklch(0.92_0.04_305)]"
        >
          <span
            data-anim="cta-shine"
            className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/50 to-transparent"
          />
          <span className="relative">Analyze Skin</span>
        </button>
      </div>

      {/* Right: Stats — bottom-right on desktop, row below on mobile */}
      <div className="md:col-span-3 md:col-start-10 flex flex-row md:flex-col justify-start md:justify-end gap-4 sm:gap-6 md:gap-12 relative z-10 md:pb-10 mt-6 sm:mt-8 md:mt-0">
        <StatRow
          icon={<Hexagon size={22} strokeWidth={1} className="sm:size-6 md:size-7" />}
          endValue={95}
          suffix="%"
          label={"accurate skin\nanalysis"}
        />
        <StatRow
          icon={<Orbit size={22} strokeWidth={1} className="sm:size-6 md:size-7" />}
          endValue={30}
          suffix="+"
          label={"skin concerns\nanalyzed"}
        />
        <StatRow
          icon={<Cylinder size={22} strokeWidth={1} className="sm:size-6 md:size-7" />}
          endValue={7}
          suffix="-day"
          label={"personalized\nroutine"}
          delay={1}
        />
      </div>
    </section>
  );
}
