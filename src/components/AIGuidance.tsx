import React from "react";
import { Sparkles, ScanFace, FileText, CheckCircle2, ChevronRight } from "lucide-react";

export function AIGuidance() {
  return (
    <section
      id="ai-guidance"
      className="relative px-4 sm:px-6 md:px-10 py-12 sm:py-16 md:py-20 bg-white overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
        {/* Left Side: Mockup UI */}
        <div data-anim="ai-mockup" className="relative w-full max-w-md mx-auto lg:mx-0">
          {/* Ambient Glow behind the mockup */}
          <div className="absolute -inset-4 bg-gradient-to-br from-[#f8f5ff] to-[#e8d8f5] opacity-50 blur-2xl rounded-[3rem] -z-10" />

          <div className="relative h-[420px] sm:h-[500px] lg:h-[600px] w-full rounded-[2rem] sm:rounded-[2.5rem] bg-gradient-to-br from-[#f8f5ff] to-[#f0e8ff] p-4 sm:p-5 lg:p-6 shadow-lg border border-[#e8d8f5] flex flex-col">
            {/* Mockup Header */}
            <div className="relative z-10 bg-white rounded-2xl sm:rounded-3xl shadow-sm border border-gray-100 p-3 sm:p-4 lg:p-5 mb-4 sm:mb-6 flex items-center justify-between">
              <div>
                <p className="text-[9px] sm:text-[10px] font-bold tracking-widest text-[#a881ff] uppercase mb-0.5 sm:mb-1">
                  Today
                </p>
                <h4 className="font-bold text-gray-900 text-base sm:text-lg leading-none">
                  Morning Routine
                </h4>
              </div>
            </div>

            {/* Mockup List */}
            <div className="flex-1 flex flex-col gap-2 sm:gap-3 z-10">
              {[
                {
                  step: "Step 1",
                  title: "Gentle Cleanser",
                  detail: "Removes overnight buildup",
                  time: "1 min",
                  active: true,
                },
                {
                  step: "Step 2",
                  title: "Vitamin C Serum",
                  detail: "Brightens dark spots",
                  time: "2 mins",
                  active: false,
                },
                {
                  step: "Step 3",
                  title: "SPF 50 Moisturizer",
                  detail: "Crucial UV protection today",
                  time: "1 min",
                  active: false,
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="group relative flex gap-3 sm:gap-4 items-center p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 border border-transparent hover:border-[#e8d8f5] cursor-default"
                >
                  <CheckCircle2
                    className={`h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0 transition-colors duration-300 ${item.active ? "text-[#a881ff]" : "text-gray-200 group-hover:text-[#c9a8ff]"}`}
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-end mb-0.5">
                      <span className="text-[9px] sm:text-[10px] font-bold tracking-wider text-[#a881ff] uppercase">
                        {item.step}
                      </span>
                      <span className="text-[9px] sm:text-[10px] text-gray-400 font-medium">
                        {item.time}
                      </span>
                    </div>
                    <div className="font-semibold text-gray-900 text-xs sm:text-sm">
                      {item.title}
                    </div>
                    <div className="text-[10px] sm:text-xs text-gray-500 line-clamp-1">
                      {item.detail}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Mockup Footer / Progress */}
            <div className="mt-auto z-10 pt-4 sm:pt-5 lg:pt-6">
              <div className="flex justify-between text-[10px] sm:text-xs font-medium text-gray-500 mb-1.5 sm:mb-2">
                <span>Routine Progress</span>
                <span className="text-[#a881ff]">1/3 Completed</span>
              </div>
              <div className="h-1.5 sm:h-2 w-full bg-white rounded-full overflow-hidden shadow-inner">
                <div className="h-full bg-gradient-to-r from-[#c9a8ff] to-[#a881ff] w-1/3 rounded-full" />
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Copy */}
        <div data-anim="ai-copy" className="max-w-md xl:max-w-lg w-full">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#f8f5ff] border border-[#e8d8f5] px-3 py-1.5 text-xs font-semibold tracking-wide text-[#a881ff]">
            Personalized Care
          </div>

          <h2 className="mt-4 sm:mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight text-gray-900">
            Your routine,
            <br /> intelligently adapted.
          </h2>

          <p className="mt-4 sm:mt-6 text-sm sm:text-[15px] leading-relaxed text-gray-600">
            Nuvé's AI doesn't just give you a static list of products. It builds a dynamic
            relationship with your skin, adjusting your morning and evening rituals based on
            real-time scans, weather data, and your unique progression.
          </p>

          <div className="mt-8 sm:mt-10 space-y-3 sm:space-y-4">
            {/* Feature 1 */}
            <div className="group flex gap-3 sm:gap-5 p-3 sm:p-4 -ml-2 sm:-ml-4 rounded-2xl hover:bg-[#f8f5ff]/50 transition-colors">
              <div className="flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-xl sm:rounded-2xl bg-[#f8f5ff] text-[#a881ff] shadow-sm group-hover:scale-105 transition-transform">
                <ScanFace size={20} strokeWidth={1.5} className="sm:size-6" />
              </div>
              <div className="flex flex-col justify-center min-w-0">
                <h4 className="font-semibold text-gray-900 text-sm sm:text-base flex items-center gap-1.5 sm:gap-2">
                  Micro-climate Adjustments
                  <ChevronRight
                    size={16}
                    className="hidden sm:block text-gray-300 group-hover:text-[#a881ff] transition-colors group-hover:translate-x-1"
                  />
                </h4>
                <p className="mt-0.5 sm:mt-1 text-xs sm:text-sm text-gray-500 leading-relaxed">
                  If the air is dry or UV is high, your routine shifts instantly to protect and
                  hydrate.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="group flex gap-3 sm:gap-5 p-3 sm:p-4 -ml-2 sm:-ml-4 rounded-2xl hover:bg-[#f8f5ff]/50 transition-colors">
              <div className="flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-xl sm:rounded-2xl bg-[#f8f5ff] text-[#a881ff] shadow-sm group-hover:scale-105 transition-transform">
                <FileText size={20} strokeWidth={1.5} className="sm:size-6" />
              </div>
              <div className="flex flex-col justify-center min-w-0">
                <h4 className="font-semibold text-gray-900 text-sm sm:text-base flex items-center gap-1.5 sm:gap-2">
                  Progress Tracking
                  <ChevronRight
                    size={16}
                    className="hidden sm:block text-gray-300 group-hover:text-[#a881ff] transition-colors group-hover:translate-x-1"
                  />
                </h4>
                <p className="mt-0.5 sm:mt-1 text-xs sm:text-sm text-gray-500 leading-relaxed">
                  See what's working with clear, visual timelines of your skin's health over weeks
                  and months.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}