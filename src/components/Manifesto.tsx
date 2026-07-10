import React from "react";

interface TagBadgeProps {
  imageSrc: string;
  label: string;
  className: string;
}

function TagBadge({ imageSrc, label, className }: TagBadgeProps) {
  return (
    <div
      data-anim="tag"
      className={`flex items-center gap-2 rounded-full border border-foreground/10 bg-white/90 px-3 py-1.5 shadow-sm backdrop-blur-sm transition-transform hover:scale-105 duration-300 ${className}`}
    >
      <img
        src={imageSrc}
        alt={label}
        className="h-5 w-5 rounded-full object-cover shrink-0 select-none"
      />
      <span className="text-xs font-semibold text-foreground/90 tracking-tight">{label}</span>
    </div>
  );
}

export function Manifesto() {
  const badges = [
    {
      label: "Beautiful",
      imageSrc:
        "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=150&auto=format&fit=crop&q=80",
      className: "lg:absolute lg:left-[22%] lg:top-4",
    },
    {
      label: "Healthy",
      imageSrc:
        "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=150&auto=format&fit=crop&q=80",
      className: "lg:absolute lg:right-[22%] lg:top-0",
    },
    {
      label: "Confident",
      imageSrc:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
      className: "lg:absolute lg:left-[8%] lg:top-[45%]",
    },
    {
      label: "Glowing",
      imageSrc:
        "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?w=150&auto=format&fit=crop&q=80",
      className: "lg:absolute lg:left-[35%] lg:bottom-8",
    },
    {
      label: "Happy",
      imageSrc:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80",
      className: "lg:absolute lg:right-[22%] lg:bottom-2",
    },
  ];

  return (
    <section
      id="manifesto"
      data-anim="manifesto"
      className="relative px-4 md:px-10 pb-0 bg-gradient-to-b from-white via-white to-[oklch(0.91_0_0)]"
    >
      <div className="relative mx-auto max-w-4xl pt-14 pb-20 md:pt-20 md:pb-28 text-center">
        {/* Badges: on mobile they form a flex row below the text; on desktop they become absolute floating tags */}
        <div className="relative flex flex-wrap gap-2 justify-center mb-6 lg:mb-0 lg:absolute lg:inset-0 lg:pointer-events-none">
          {badges.map((badge) => (
            <TagBadge
              key={badge.label}
              label={badge.label}
              imageSrc={badge.imageSrc}
              className={badge.className}
            />
          ))}
        </div>

        {/* Main text – sizes scale down smoothly */}
        <p className="text-2xl sm:text-3xl md:text-[2.6rem] font-medium leading-[1.35] tracking-tight text-foreground">
          {"Nuvé helps you understand and care for your skin like never before. Get insights and tips backed by AI and real science for your healthiest, happiest skin"
            .split(" ")
            .map((w, i) => (
              <span key={i} data-anim="word" className="inline-block">
                {w}&nbsp;
              </span>
            ))}
        </p>
      </div>
    </section>
  );
}