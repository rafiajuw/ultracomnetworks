"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "High-Speed Internet",
    desc: "Fiber optic connectivity designed for business reliability with guaranteed uptime.",
    href: "/services/internet",
    image: "/internet.jpeg",
    badge: "Connectivity",
  },
  {
    title: "Enterprise LAN / WAN",
    desc: "Secure and scalable enterprise-grade networking solutions for modern businesses.",
    href: "/services/lan-wan",
    image: "/lanwan.jpeg",
    badge: "Infrastructure",
  },
  {
    title: "Cloud WiFi Solutions",
    desc: "Cloud-managed WiFi with advanced analytics and seamless roaming.",
    href: "/services/cloud-wifi",
    image: "/cloudwifi.jpeg",
    badge: "Smart WiFi",
  },
  {
    title: "24/7 Network Support",
    desc: "NOC monitoring, on-site engineers & proactive maintenance.",
    href: "/services/network-support",
    image: "/itsupport.jpeg",
    badge: "Support",
  },
  {
    title: "Data Center Services",
    desc: "Tier-3 colocation, private racks, redundancy & disaster recovery.",
    href: "/services/data-center",
    image: "/datacenter.jpeg",
    badge: "Data Center",
  },
];

export default function PremiumServices() {
  return (
    <section className="py-28 bg-[#f1f5f9] relative">
      {/* Soft Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-200/40 via-transparent to-blue-200/30 blur-3xl" />

      <div className="text-center max-w-5xl mx-auto px-6 mb-20 relative">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold text-[#0f172a]"
        >
          Our
          <span className="block bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
            Premium IT Solutions
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-xl text-gray-600 mt-6 leading-relaxed"
        >
          Designed for performance, reliability and enterprise-grade scalability.
        </motion.p>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={40}
          slidesPerView={1.2}
          loop
          autoplay={{ delay: 2600 }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1.4 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1400: { slidesPerView: 3.2 },
          }}
        >
          {services.map((service, i) => (
            <SwiperSlide key={i}>
              <motion.div
                whileHover={{ y: -8, rotateX: 4, rotateY: -4 }}
                className="group relative backdrop-blur-xl bg-white/60 border border-white/40 shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-3xl overflow-hidden transition-all duration-700"
              >
                {/* Image Layer */}
                <div className="relative h-64">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                  <span className="absolute top-6 left-6 text-sm px-4 py-2 rounded-full font-semibold bg-white/10 backdrop-blur-md text-white border border-white/20 shadow-lg">
                    {service.badge}
                  </span>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 mt-3 text-lg leading-relaxed">
                    {service.desc}
                  </p>

                  <Link
                    href={service.href}
                    className="mt-8 inline-flex items-center gap-2 text-lg font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all"
                  >
                    Explore Service
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>

                {/* Glow Border */}
                <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-cyan-400/60 transition-all duration-500 shadow-[0_0_25px_rgba(6,182,212,0.35)] opacity-0 group-hover:opacity-100" />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Custom Pagination */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          background: #cbd5e1 !important;
          width: 12px;
          height: 12px;
        }
        .swiper-pagination-bullet-active {
          background: linear-gradient(to right, #06b6d4, #3b82f6) !important;
          transform: scale(1.3);
        }
      `}</style>
    </section>
  );
}
