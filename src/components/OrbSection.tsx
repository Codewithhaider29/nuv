import Skin from "@/assets/2nd-image.jpeg";

export function OrbSection() {
  return (
    <section
      id="orb"
      className="relative grid grid-cols-1 lg:grid-cols-2 items-center gap-6 sm:gap-8 px-4 sm:px-6 md:px-10 pb-12 sm:pb-16 md:pb-20 overflow-hidden"
    >
      {/* Left Side: Copy */}
      <div data-anim="orb-copy" className="pl-0 md:pl-6 z-10">
        <span className="inline-block rounded-full bg-[oklch(0.95_0.03_305)] px-3 py-1 text-xs font-medium tracking-wide text-[oklch(0.35_0.08_305)]">
          Living Model
        </span>
        <h2 className="mt-4 sm:mt-5 text-3xl sm:text-4xl md:text-5xl font-medium leading-[1.05] tracking-tight text-foreground">
          A skin that
          <br />
          breathes with you
        </h2>
        <p className="mt-4 sm:mt-5 max-w-md text-sm sm:text-base text-muted-foreground leading-relaxed">
          Our real-time model reacts to every scan — shifting, softening, and glowing as your
          routine adapts. Move it, watch it, feel it.
        </p>
        {/* Instructions – stack vertically on tiny screens, row on larger */}
        <div className="mt-5 sm:mt-6 flex flex-col sm:flex-row gap-2 sm:gap-6 text-xs text-muted-foreground">
          <div>
            <span className="text-foreground font-medium">Hover</span> to interact
          </div>
          <div>
            <span className="text-foreground font-medium">Watch</span> the pulse
          </div>
        </div>
      </div>

      {/* Right Side: Image – height adapts responsively */}
      <img
        src={Skin}
        alt="Interactive skin model"
        className="w-full h-64 sm:h-80 md:h-96 lg:h-full rounded-[2rem] sm:rounded-[2.5rem] object-cover shadow-sm border border-[#e8d8f5]"
      />
    </section>
  );
}