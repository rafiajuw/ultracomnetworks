"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface Service {
  title: string;
  subtitle: string;
  href: string;
  category: string;
  pdf?: string;
  image: string;
}

const allServices: Service[] = [
  // IT & Network
  { title: "Dedicated Internet", subtitle: "High-speed fiber internet", href: "/services/internet", category: "connectivity", image: "/internet.jpeg" },
  { title: "LAN & WAN Networking", subtitle: "Enterprise network deployment", href: "/services/lan-wan", category: "infrastructure", image: "/lanwan.jpeg" },
  { title: "Cloud WiFi Solution", subtitle: "Smart managed WiFi systems", href: "/services/cloud-wifi", category: "connectivity", image: "/webdevlopment2.jpg" },
  { title: "Network Support", subtitle: "24/7 monitoring & engineers", href: "/services/network-support", category: "infrastructure", image: "/internet.jpeg" },
  { title: "Data Center Services", subtitle: "Secure colocation & hosting", href: "/services/data-center", category: "infrastructure", image: "/datacenter.jpeg" },
  { title: "Call Center Solutions", subtitle: "PBX, IVR, omnichannel", href: "/services/call-center", category: "voice", image: "/callcenter.jpeg" },
  { title: "PBX Installation", subtitle: "Hybrid & on-prem systems", href: "/services/pbx-installation", category: "voice", image: "/mock-device.jpg" },
  { title: "IT Consultation", subtitle: "Professional IT roadmap", href: "/services/consultation", category: "consulting", image: "/consult.jpeg" },

  // Web Services
  { title: "Website Development", subtitle: "High-end modern websites", href: "/services/web-development", category: "web", image: "/webdevlopment.jpeg" },
  { title: "SEO Services", subtitle: "Rank higher on Google", href: "/services/seo", category: "web", image: "/seo.jpeg" },
  { title: "Branding & Identity", subtitle: "Logo + brand kits", href: "/services/branding", category: "web", image: "/branding.jpg" },
  { title: "Content Creation", subtitle: "Professional media content", href: "/services/content", category: "web", image: "/content.jpeg" },
  { title: "Social Media Marketing", subtitle: "Grow your online brand", href: "/services/social-media", category: "web", image: "/socialmedia.jpg" },
];

export default function ServicesPage() {
  return (
    <div className="relative py-24 bg-[#021130] text-white overflow-hidden">

      {/* 🔥 Background Glow Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-400/5 via-transparent to-blue-700/10 blur-2xl" />
      <div className="absolute -top-20 -left-10 w-[400px] h-[400px] bg-cyan-500/10 blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-blue-600/10 blur-[120px]" />

      <h1 className="text-center text-5xl md:text-6xl font-extrabold mb-16 tracking-tight">
        Our
        <span className="block mt-2 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(0,255,255,0.3)]">
          Premium Services
        </span>
      </h1>

      {/* ⚡ Horizontal Slider */}
      <div className="overflow-x-auto scrollbar-hide select-none">
        <div className="flex gap-8 min-w-max px-10 pb-6">

          {allServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ scale: 1.06, rotateY: 6, rotateX: -3 }}
              className="
              group relative w-80 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl 
              overflow-hidden shadow-[0_0_20px_rgba(0,0,0,0.3)] hover:shadow-[0_0_40px_rgba(0,200,255,0.3)]
              transition-all duration-500"
            >

              {/* 🔥 Image */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:blur-[2px]"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white tracking-wide drop-shadow-lg">
                  {service.title}
                </h3>

                <p className="text-gray-300 text-sm mt-2 leading-relaxed">
                  {service.subtitle}
                </p>

                {/* Buttons */}
                <div className="mt-6 flex items-center gap-3">
                  <Link
                    href={service.href}
                    className="
                    px-5 py-2.5 rounded-xl font-semibold 
                    bg-gradient-to-r from-cyan-500 to-blue-600
                    hover:from-cyan-400 hover:to-blue-500
                    shadow-lg hover:shadow-cyan-500/30 transition-all"
                  >
                    Explore
                  </Link>

                  {service.pdf && (
                    <a
                      href={service.pdf}
                      target="_blank"
                      className="
                      px-5 py-2.5 rounded-xl border border-white/20  
                      hover:bg-white hover:text-black transition-all"
                    >
                      PDF
                    </a>
                  )}
                </div>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
