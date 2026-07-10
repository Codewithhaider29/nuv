import React from "react";
import { ArrowRight, Instagram, Twitter, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[oklch(0.91_0_0)] text-black px-4 sm:px-6 md:px-10 pt-12 sm:pt-16 md:pt-20 pb-8">
      <div
        data-anim="footer-content"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 border-b border-black/10 pb-10 sm:pb-12 md:pb-16"
      >
        {/* Brand + Social */}
        <div className="sm:col-span-2 lg:col-span-5 flex flex-col justify-between gap-6 sm:gap-8">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-black">
              Nuvé
            </h2>
            <p className="mt-3 sm:mt-4 max-w-sm text-sm text-black/50 leading-relaxed">
              Empowering your skincare journey with intelligent analysis, mindful insights, and
              personalized guidance.
            </p>
          </div>
          <div className="flex gap-3 sm:gap-4">
            <button className="flex h-10 w-10 items-center justify-center rounded-full bg-black/10 text-black transition-colors hover:bg-black/20">
              <Instagram size={18} />
            </button>
            <button className="flex h-10 w-10 items-center justify-center rounded-full bg-black/10 text-black transition-colors hover:bg-black/20">
              <Twitter size={18} />
            </button>
            <button className="flex h-10 w-10 items-center justify-center rounded-full bg-black/10 text-black transition-colors hover:bg-black/20">
              <Linkedin size={18} />
            </button>
          </div>
        </div>

        {/* Product Links */}
        <div className="lg:col-span-2" data-anim="footer-col">
          <h4 className="font-semibold mb-4 sm:mb-6 text-black">Product</h4>
          <ul className="space-y-3 sm:space-y-4 text-sm text-black/50">
            <li>
              <a href="#" className="hover:text-black transition-colors">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black transition-colors">
                How it works
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black transition-colors">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black transition-colors">
                Download App
              </a>
            </li>
          </ul>
        </div>

        {/* Company Links */}
        <div className="lg:col-span-2" data-anim="footer-col">
          <h4 className="font-semibold mb-4 sm:mb-6 text-black">Company</h4>
          <ul className="space-y-3 sm:space-y-4 text-sm text-black/50">
            <li>
              <a href="#" className="hover:text-black transition-colors">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black transition-colors">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black transition-colors">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="sm:col-span-2 lg:col-span-3" data-anim="footer-col">
          <h4 className="font-semibold mb-4 sm:mb-6 text-black">Stay Updated</h4>
          <p className="text-sm text-black/50 mb-4 leading-relaxed">
            Get the latest skincare tips and AI updates delivered to your inbox.
          </p>
          <div className="relative">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-white/60 border border-black/10 rounded-xl py-2.5 sm:py-3 pl-4 pr-12 text-sm text-black placeholder:text-black/30 focus:outline-none focus:border-black/30 transition-colors"
            />
            <button className="absolute right-1.5 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-lg bg-black text-white hover:bg-black/80 transition-colors">
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-black/40 gap-4">
        <p>© 2026 Nuvé Inc. All rights reserved.</p>
        <div className="flex gap-4 sm:gap-6">
          <a href="#" className="hover:text-black transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-black transition-colors">
            Terms of Service
          </a>
          <a href="#" className="hover:text-black transition-colors">
            Cookie Settings
          </a>
        </div>
      </div>
    </footer>
  );
}