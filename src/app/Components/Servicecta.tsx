// src/app/Components/ServiceCTA.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface ServiceCTAProps {
  heading?: string;
  subtext?: string;
  ctaText?: string;
  ctaLink?: string;
}

export default function ServiceCTA({
  heading = "Ready to Get Started?",
  subtext = "Contact us for a custom quote or free consultation for your project.",
  ctaText = "Book a Free Consultation",
  ctaLink = "/contactus",
}: ServiceCTAProps) {
  return (
    <section className="py-24 bg-gradient-to-r from-blue-800 via-blue-900 to-slate-900 text-white text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-white/10 blur-3xl opacity-20"></div>
      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight drop-shadow">
          {heading}
        </h2>
        <p className="text-xl mb-12 text-blue-100 leading-relaxed">{subtext}</p>
        <Link href={ctaLink}>
          <motion.button
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center px-12 py-4 text-lg font-bold rounded-full bg-white text-blue-900 shadow-2xl hover:shadow-ultracom-glow transition-all"
          >
            {ctaText}
          </motion.button>
        </Link>
      </div>
    </section>
  );
}
