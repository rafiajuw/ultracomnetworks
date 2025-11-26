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
    color: "from-cyan-500 to-blue-600",
  },
  {
    title: "Enterprise LAN / WAN",
    desc: "Secure and scalable enterprise-grade networking solutions for modern businesses.",
    href: "/services/lan-wan",
    image: "/lanwan.jpeg",
    badge: "Infrastructure",
    color: "from-blue-600 to-indigo-700",
  },
  {
    title: "Cloud WiFi Solutions",
    desc: "Centralized cloud-managed WiFi with analytics, portal & seamless roaming.",
    href: "/services/cloud-wifi",
    image: "/cloudwifi.jpeg",
    badge: "Smart WiFi",
    color: "from-purple-500 to-pink-600",
  },
  {
    title: "24/7 Network Support",
    desc: "Round-the-clock NOC monitoring, on-site engineers, proactive maintenance.",
    href: "/services/network-support",
    image: "/itsupport.jpeg",
    badge: "Support",
    color: "from-emerald-500 to-green-600",
  },
  {
    title: "Data Center Services",
    desc: "Tier-3 colocation, private racks, power redundancy & disaster recovery.",
    href: "/services/data-center",
    image: "/datacenter.jpeg",
    badge: "Data Center",
    color: "from-orange-500 to-red-600",
  },
  {
    title: "Call Center Setup",
    desc: "IVR, CRM integration, predictive dialer & complete contact center setup.",
    href: "/services/call-center",
    image: "/callcenter.jpeg",
    badge: "Communication",
    color: "from-rose-500 to-red-600",
  },
];

export default function PremiumServices() {
  return (
    <section className="py-28 bg-[#f8fafc]">
      {/* Heading */}
      <div className="text-center max-w-4xl mx-auto px-6 mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl md:text-6xl font-bold text-[#0f172a]"
        >
          Premium IT & Connectivity
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
            Solutions for Modern Businesses
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-xl text-gray-600 mt-6 leading-relaxed"
        >
          Ultracom Networks delivers next-generation connectivity & IT solutions trusted by
          enterprises across Pakistan.
        </motion.p>
      </div>

      {/* Swiper */}
      <div className="max-w-7xl mx-auto px-6">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={40}
          slidesPerView={1.2}
          loop={true}
          autoplay={{ delay: 2800 }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1.4 },
            768: { slidesPerView: 2.2 },
            1024: { slidesPerView: 3 },
            1400: { slidesPerView: 3.3 },
          }}
        >
          {services.map((service, i) => (
            <SwiperSlide key={i}>
              <motion.div
                whileHover={{ y: -10 }}
                className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden relative"
              >
                {/* Image */}
                <div className="relative h-64">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-all duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  <span
                    className={`absolute top-6 left-6 text-sm px-4 py-2 rounded-full font-semibold bg-gradient-to-r ${service.color} text-white shadow-lg`}
                  >
                    {service.badge}
                  </span>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 mt-3 text-lg leading-relaxed">{service.desc}</p>

                  {/* CTA */}
                  <Link
                    href={service.href}
                    className="mt-8 inline-flex items-center gap-2 text-lg font-semibold text-cyan-600 hover:text-blue-700 transition-all"
                  >
                    Explore Service
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

                {/* Border Glow */}
                <div
                  className={`absolute inset-0 rounded-3xl border-2 opacity-0 group-hover:opacity-100 group-hover:border-cyan-500 transition-all duration-500`}
                />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Pagination Custom Style */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          background: #cbd5e1 !important;
          width: 12px;
          height: 12px;
        }
        .swiper-pagination-bullet-active {
          background: linear-gradient(to right, #06b6d4, #3b82f6) !important;
          transform: scale(1.25);
        }
      `}</style>
    </section>
  );
}
