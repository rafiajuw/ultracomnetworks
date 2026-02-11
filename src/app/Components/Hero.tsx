"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

const slides = [
  {
    image: "/hero1.webp",
    title: "Secure. Reliable. Connected.",
    subtitle: "Powering your Enterprise Network with Ultracom Networks",
    cta1: "Explore Services",
    cta2: "Contact Us",
  },
  {
    image: "/hero2.jpg",
    title: "Seamless IT Solutions",
    subtitle: "Managed IT, LAN & WAN, Surveillance & Cloud Services",
    cta1: "View Solutions",
    cta2: "Get Free Consultation",
  },
  {
    image: "/hero3.jpeg",
    title: "Enterprise Connectivity",
    subtitle: "Ultra-fast corporate internet with 24/7 support",
    cta1: "Learn More",
    cta2: "Contact Sales",
  },
  {
    image: "/hero4.jpg",
    title: "Cloud & Network Services",
    subtitle: "Reliable cloud infrastructure and network management",
    cta1: "Explore Services",
    cta2: "Get Free Audit",
  },
  {
    image: "/hero6.jpeg",
    title: "Global Reach",
    subtitle: "Connecting businesses across Pakistan with secure networks",
    cta1: "Our Services",
    cta2: "Contact Us",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 7 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background images */}
      <AnimatePresence mode="wait">
        {slides.map((slide, index) =>
          index === current ? (
            <motion.div
              key={index}
              className="absolute inset-0"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 1 }}
            >
              <Image
                src={slide.image}
                alt={`Slide ${index + 1}`}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-black/50" />
            </motion.div>
          ) : null
        )}
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 h-screen flex items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 text-white max-w-xl"
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight tracking-tight">
              {slides[current].title}
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-blue-100 leading-relaxed tracking-wide max-w-2xl">
              {slides[current].subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <motion.a
                href="/services"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-8 py-4 bg-cyan-600 text-white font-bold text-base rounded-lg shadow-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 group border border-cyan-500/50 hover:border-cyan-400"
              >
                {slides[current].cta1}
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a
                href="/contactus"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-bold text-base rounded-lg backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
              >
                {slides[current].cta2}
              </motion.a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  );
}
