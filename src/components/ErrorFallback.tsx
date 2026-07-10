/* eslint-disable prettier/prettier */
import { useRouter } from "@tanstack/react-router";
import { ArrowRight, AlertCircle } from "lucide-react";

type ErrorFallbackProps = {
    error: Error;
    reset: () => void;
};

export function ErrorFallback({ error, reset }: ErrorFallbackProps) {
    console.error(error);
    const router = useRouter();

    return (
        <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white px-4">
            {/* Decorative premium background blob */}
            <div className="absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-50 opacity-50 blur-3xl pointer-events-none"></div>

            <div className="relative z-10 flex max-w-lg flex-col items-center text-center">
                <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-red-50 text-red-500">
                    <AlertCircle className="h-10 w-10" />
                </div>
                <h1 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
                    Something went wrong
                </h1>
                <p className="mt-4 max-w-sm text-base text-neutral-500">
                    An unexpected error occurred while loading this page. We've logged the issue and are
                    looking into it.
                </p>
                <div className="mt-10 flex flex-wrap justify-center gap-4">
                    <button
                        onClick={() => {
                            router.invalidate();
                            reset();
                        }}
                        className="inline-flex items-center justify-center rounded-full bg-black px-8 py-4 text-sm font-medium text-white transition-all hover:scale-105 hover:bg-neutral-800"
                    >
                        Try again
                    </button>
                    <a
                        href="/"
                        className="group inline-flex items-center justify-center gap-2 rounded-full border border-neutral-200 bg-white px-8 py-4 text-sm font-medium text-neutral-900 transition-all hover:bg-neutral-50"
                    >
                        Go home
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                </div>
            </div>
        </div>
    );
}
