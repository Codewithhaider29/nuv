/* eslint-disable prettier/prettier */
import { ArrowRight } from "lucide-react";
export function NotFound() {
    return (
        <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white px-4">
            {/* Decorative premium background blob */}
            <div className="absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-neutral-100 opacity-70 blur-3xl pointer-events-none"></div>

            <div className="relative z-10 flex max-w-lg flex-col items-center text-center">
                <span className="mb-2 text-[120px] font-bold leading-none tracking-tighter text-black sm:text-[150px]">
                    404
                </span>
                <h2 className="text-2xl font-medium tracking-tight text-neutral-800 sm:text-3xl">
                    Page not found
                </h2>
                <p className="mt-4 max-w-xs text-base text-neutral-500">
                    The page you're looking for doesn't exist, has been moved, or is temporarily unavailable.
                </p>
                <div className="mt-10">
                    <a
                        href="/"
                        className="group inline-flex items-center justify-center gap-2 rounded-full bg-black px-8 py-4 text-sm font-medium text-white transition-all hover:scale-105 hover:bg-neutral-800"
                    >
                        Return Home
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                </div>
            </div>
        </div>
    );
}
