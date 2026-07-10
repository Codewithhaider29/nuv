import { Apple, Menu, X } from "lucide-react";
import { scrollToSection } from "@/lib/smooth-scroll";
import { useState } from "react";
import logo from "@/assets/logo.png";

function Logo() {
  return (
    <div className="flex items-center gap-2 shrink-0">
      <img src={logo} alt="Nuvé logo" className="h-8 w-8 sm:h-10 sm:w-10 object-contain" />
      <span className="text-lg sm:text-xl font-semibold tracking-tight text-black">Nuvé</span>
    </div>
  );
}

function Nav() {
  const items: { label: string; id: string }[] = [
    { label: "Explore", id: "hero" },
    { label: "Your Skin", id: "skincare" },
    { label: "Transformations", id: "orb" },
    { label: "AI Guidance", id: "ai-guidance" },
    { label: "Philosophy", id: "manifesto" },
  ];

  return (
    <nav className="hidden items-center gap-4 xl:gap-6 lg:flex">
      {items.map((i) => (
        <button
          key={i.label}
          onClick={() => scrollToSection(i.id)}
          className="text-[13px] font-semibold text-black/80 hover:text-black transition-colors whitespace-nowrap"
        >
          {i.label}
        </button>
      ))}
    </nav>
  );
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const items: { label: string; id: string }[] = [
    { label: "Explore", id: "hero" },
    { label: "Your Skin", id: "skincare" },
    { label: "Transformations", id: "orb" },
    { label: "AI Guidance", id: "ai-guidance" },
    { label: "Philosophy", id: "manifesto" },
  ];

  return (
    <div className="bg-[oklch(0.91_0_0)] pt-3 sm:pt-4 px-2 sm:px-4 md:px-6 lg:px-8">
      {/* Max-width container to center and constrain the header on large screens */}
      <div className="mx-auto max-w-7xl">
        <header
          data-anim="header"
          className="flex items-center justify-between rounded-3xl bg-white px-3 sm:px-5 md:px-6 py-2.5 sm:py-3 shadow-sm"
        >
          <Logo />
          <Nav />

          {/* Right-side actions */}
          <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3">
            {/* Contact Us – hidden on mobile, visible on md+ */}
            <button className="hidden md:inline-flex rounded-lg border border-gray-200 px-3 lg:px-5 py-2 text-[13px] sm:text-sm font-semibold text-black hover:bg-gray-50 transition-colors whitespace-nowrap">
              Contact Us
            </button>

            {/* App Store button */}
            <button className="flex items-center gap-1.5 sm:gap-2 rounded-lg bg-[#0F0F0F] px-2.5 sm:px-3 py-1.5 text-white hover:bg-black/90 transition-colors">
              <Apple size={16} className="fill-white shrink-0 sm:size-[18px]" />
              <div className="hidden sm:flex flex-col items-start leading-none">
                <span className="mb-[2px] text-[8px] sm:text-[9px] font-medium text-gray-300">
                  Download on the
                </span>
                <span className="text-[11px] sm:text-[13px] font-semibold">App Store</span>
              </div>
            </button>

            {/* Hamburger / Close toggle – visible below lg */}
            <button
              className="lg:hidden flex items-center justify-center h-8 w-8 sm:h-9 sm:w-9 rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors shrink-0"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </header>

        {/* Mobile dropdown nav */}
        {mobileOpen && (
          <div className="lg:hidden mx-0 mt-1 rounded-2xl bg-white shadow-lg border border-gray-100 px-5 py-4 flex flex-col gap-1.5 animate-in slide-in-from-top-2 duration-200">
            {items.map((i) => (
              <button
                key={i.label}
                onClick={() => {
                  scrollToSection(i.id);
                  setMobileOpen(false);
                }}
                className="text-left text-[15px] font-semibold text-black/80 hover:text-black transition-colors py-2"
              >
                {i.label}
              </button>
            ))}
            {/* Contact Us inside mobile menu (since the desktop button is hidden) */}
            <button
              onClick={() => setMobileOpen(false)}
              className="md:hidden mt-1 text-left text-[15px] font-semibold text-black/60 hover:text-black transition-colors py-2 border-t border-gray-100 pt-3"
            >
              Contact Us
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
