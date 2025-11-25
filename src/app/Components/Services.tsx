"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Zap, Shield, Wifi, Server, PhoneCall, Globe } from "lucide-react";

const services = [
  {
    title: "High-Speed Internet",
    desc: "Business-grade fiber optic internet with 99.9% uptime & dedicated SLA",
    href: "/services/internet",
    image: "/internet.jpeg",
    icon: <Zap className="w-8 h-8" />,
    color: "from-cyan-500 to-blue-600"
  },
  {
    title: "Enterprise LAN / WAN",
    desc: "Complete network design, implementation & 24/7 monitoring",
    href: "/services/lan-wan",
    image: "/lanwan.jpeg",
    icon: <Globe className="w-8 h-8" />,
    color: "from-blue-600 to-indigo-700"
  },
  {
    title: "Cloud WiFi Solutions",
    desc: "Centralized management, guest portal, analytics & seamless roaming",
    href: "/services/cloud-wifi",
    image: "/cloudwifi.jpeg",
    icon: <Wifi className="w-8 h-8" />,
    color: "from-purple-500 to-pink-600"
  },
  {
    title: "24/7 Network Support",
    desc: "NOC monitoring, on-site engineers & proactive maintenance",
    href: "/services/network-support",
    image: "/itsupport.jpeg",
    icon: <Shield className="w-8 h-8" />,
    color: "from-green-500 to-emerald-600"
  },
  {
    title: "Data Center Services",
    desc: "Tier-3 colocation, private cages & disaster recovery solutions",
    href: "/services/data-center",
    image: "/datacenter.jpeg",
    icon: <Server className="w-8 h-8" />,
    color: "from-orange-500 to-red-600"
  },
  {
    title: "Call Center Setup",
    desc: "Complete IVR, predictive dialer, CRM integration & reporting",
    href: "/services/call-center",
    image: "/callcenter.jpeg",
    icon: <PhoneCall className="w-8 h-8" />,
    color: "from-pink-500 to-rose-600"
  },
];

export default function PremiumServices() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Hero Title */}
      <div className="text-center max-w-5xl mx-auto px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-[#0f172a] leading-tight">
            Complete IT & Connectivity
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
              Solutions Under One Roof
            </span>
          </h2>
          <p className="text-xl text-gray-600 mt-6">
            Trusted by 1000+ businesses across Pakistan for reliable, scalable & future-proof infrastructure
          </p>
        </motion.div>
      </div>

      {/* Premium Swiper Carousel */}
      <div className="max-w-7xl mx-auto px-6">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={32}
          slidesPerView={1.1}
          centeredSlides={false}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true, dynamicBullets: true }}
          navigation={true}
          breakpoints={{
            640: { slidesPerView: 1.5, spaceBetween: 20 },
            768: { slidesPerView: 2.2, spaceBetween: 24 },
            1024: { slidesPerView: 3, spaceBetween: 32 },
            1280: { slidesPerView: 3.5, spaceBetween: 32 },
          }}
          className="premium-services-swiper"
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <motion.div
                whileHover={{ y: -12 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
              >
                {/* Gradient Badge */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.color} opacity-10 rounded-bl-3xl`} />
                
                {/* Icon Badge */}
                <div className="absolute top-6 right-6 z-10">
                  <div className={`p-4 rounded-2xl bg-gradient-to-br ${service.color} text-white shadow-xl`}>
                    {service.icon}
                  </div>
                </div>

                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-2xl font-bold drop-shadow-lg">{service.title}</h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 pt-6">
                  <p className="text-gray-600 text-lg leading-relaxed mb-8">
                    {service.desc}
                  </p>

                  {/* CTA Button */}
                  <Link
                    href={service.href}
                    className="group/btn inline-flex items-center gap-3 bg-gradient-to-r from-gray-900 to-gray-800 text-white font-semibold px-8 py-4 rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300"
                  >
                    Explore Service
                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform" />
                  </Link>
                </div>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-cyan-500 transition-all duration-500 pointer-events-none" />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Custom Styles for Swiper */}
      <style jsx global>{`
        .premium-services-swiper .swiper-pagination-bullet {
          background: #cbd5e1;
          opacity: 0.5;
          width: 12px;
          height: 12px;
        }
        .premium-services-swiper .swiper-pagination-bullet-active {
          background: linear-gradient(to right, #06b6d4, #3b82f6);
          opacity: 1;
          transform: scale(1.3);
        }
        .premium-services-swiper .swiper-button-next,
        .premium-services-swiper .swiper-button-prev {
          background: white;
          width: 56px;
          height: 56px;
          border-radius: 50%;
          box-shadow: 0 10px 25px rgba(0,0,0,0.15);
          color: #1e40af;
        }
        .premium-services-swiper .swiper-button-next:after,
        .premium-services-swiper .swiper-button-prev:after {
          font-size: 20px;
          font-weight: bold;
        }
      `}</style>
    </section>
  );
}