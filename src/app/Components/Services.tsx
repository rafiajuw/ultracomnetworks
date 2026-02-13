// src/app/services/page.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const allServices = [
  { title: "Dedicated Internet", subtitle: "High-speed fiber internet", href: "/services/internet", category: "connectivity", image: "/internet.jpeg" },
  { title: "LAN & WAN Networking", subtitle: "Enterprise network deployment", href: "/services/lan-wan", category: "infrastructure", image: "/lanwan.jpeg" },
  { title: "Cloud WiFi Solution", subtitle: "Smart managed WiFi systems", href: "/services/cloud-wifi", category: "connectivity", image: "/webdevlopment2.jpg" },
  { title: "Network Support", subtitle: "24/7 monitoring & engineers", href: "/services/network-support", category: "infrastructure", image: "/internet.jpeg" },
  { title: "Data Center Services", subtitle: "Secure colocation & hosting", href: "/services/data-center", category: "infrastructure", image: "/datacenter.jpeg" },
  { title: "Call Center Solutions", subtitle: "PBX, IVR, omnichannel", href: "/services/call-center", category: "voice", image: "/callcenter.jpeg" },
  { title: "PBX Installation", subtitle: "Hybrid & on-prem systems", href: "/services/pbx-installation", category: "voice", image: "/mock-device.jpg" },
  { title: "IT Consultation", subtitle: "Professional IT roadmap", href: "/services/consultation", category: "consulting", image: "/consult.png" },
  { title: "Website Development", subtitle: "High-end modern websites", href: "/services/webdevlopment2", category: "web", image: "/webdevlopment.jpeg" },
  { title: "SEO Services", subtitle: "Rank higher on Google", href: "/services/seo", category: "web", image: "/seo.webp" },
  { title: "Branding & Identity", subtitle: "Logo + brand kits", href: "/services/branding", category: "web", image: "/branding.jpg" },
  { title: "Content Creation", subtitle: "Professional media content", href: "/services/content", category: "web", image: "/content.jpeg" },
  { title: "Social Media Marketing", subtitle: "Grow your online brand", href: "/services/social-media-marketing", category: "web", image: "/socialmedia.jpg" },
  { title: "AI Chatbot Development", subtitle: "Smart conversational bots", href: "/services/ai-chatbot", category: "ai", image: "/ai-chatbot-banner.jpg" },
  { title: "AI Applications", subtitle: "Custom ML & AI solutions", href: "/services/ai-applications", category: "ai", image: "/ai-chatbot-banner.jpg" },
  { title: "AI Agents", subtitle: "Autonomous business agents", href: "/services/ai-agents", category: "ai", image: "/ai-chatbot-banner.jpg" },
];

export default function ServicesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = allServices.length;

  // Kitne cards dikhaane hain?
  const slidesToShow = 3;        // Desktop pe 3
  const slidesToShowMobile = 2;  // Mobile pe 2

  // Auto slide every 4.5 seconds
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  useEffect(() => {
    timeoutRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, 4500);
    return () => clearInterval(timeoutRef.current!);
  }, [totalSlides]);

  const goNext = () => setCurrentIndex((prev) => (prev + 1) % totalSlides);
  const goPrev = () => setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);

  return (
    <section className="relative py-24 bg-[#021130] text-white overflow-hidden">
      {/* Background Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-20">
          <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight">
            Our
            <span className="block mt-3 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Premium Services
            </span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-cyan-100/80 tracking-wide max-w-3xl mx-auto">Explore all solutions with smooth sliding</p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <motion.div
              className="flex"
              animate={{
                x: `calc(-${currentIndex * (100 / slidesToShow)}% - ${currentIndex * 24}px)`
              }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              style={{ gap: "1.5rem" }}
            >
              {/* Duplicate for seamless loop */}
              {[...allServices, ...allServices].map((service, index) => (
                <div
                  key={index}
                  className={`
                    flex-shrink-0 
                    w-full 
                    sm:w-1/2 
                    lg:w-1/3 
                    px-4
                  `}
                >
                  <motion.div
                    whileHover={{ y: -16, scale: 1.04 }}
                    className="group relative bg-white/5 border border-white/15 rounded-2xl overflow-hidden backdrop-blur-xl h-[520px] shadow-2xl hover:shadow-2xl hover:shadow-cyan-500/40 transition-all duration-500"
                  >
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                      <span className="absolute top-4 left-4 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-cyan-300 bg-cyan-500/20 rounded-md backdrop-blur border border-cyan-400/40">
                        {service.category.toUpperCase()}
                      </span>
                    </div>

                    <div className="p-8 flex flex-col h-full">
                      <h3 className="text-2xl font-bold mb-2 tracking-tight">{service.title}</h3>
                      <p className="text-gray-300 mb-8 text-sm md:text-base leading-relaxed">{service.subtitle}</p>

                      <Link
                        href={service.href}
                        className="mt-auto inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-bold text-base hover:from-cyan-400 hover:to-blue-500 hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 border border-cyan-400/30 hover:border-cyan-300/50"
                      >
                        Explore
                        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Arrows */}
          <button
            onClick={goPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur p-4 rounded-full hover:bg-white/20 transition z-10"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          <button
            onClick={goNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur p-4 rounded-full hover:bg-white/20 transition z-10"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-12 flex-wrap">
            {Array.from({ length: totalSlides }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`transition-all duration-300 rounded-full ${
                  i === currentIndex
                    ? "w-12 h-3 bg-cyan-400"
                    : "w-3 h-3 bg-white/30 hover:bg-white/60"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}