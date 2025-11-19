"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import Link from "next/link";
import Image from "next/image";

const services = [
  { title: "IT Network Support", desc: "24/7 NOC and on-site engineers.", href: "/services/network-support", image: "/itsupport.jpeg" },
  { title: "Internet Service", desc: "Business-grade internet with SLA.", href: "/services/internet", image: "/internet.jpeg" },
  { title: "LAN & WAN Networking", desc: "Enterprise LAN/WAN architecture.", href: "/services/lanwan", image: "/lanwan.jpeg" },
  { title: "Cloud WiFi Solution", desc: "Centralized WiFi + analytics.", href: "/services/cloud-wifi", image: "/cloudwifi.jpeg" },
  { title: "Data Center Solutions", desc: "Secure server colocation facility.", href: "/services/data-center", image: "/datacenter.jpeg" },
  { title: "Call Center Setup", desc: "IVR, routing, call logs & monitoring.", href: "/services/call-center", image: "/callcenter.jpeg" },
];

export default function Services() {
  return (
    <section className="py-24 bg-white">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-4xl font-bold text-[#0a2640]">Our Services</h2>
        <p className="text-gray-600 mt-3">We deliver complete IT infrastructure solutions.</p>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1.2}
          breakpoints={{
            640: { slidesPerView: 2.2 },
            1024: { slidesPerView: 3.2 },
          }}
          autoplay={{ delay: 2200 }}
          loop={true}
          pagination={{ clickable: true }}
        >
          {services.map((s, i) => (
            <SwiperSlide key={i}>
              <div className="group bg-white border border-gray-200 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300">
                
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    className="object-cover group-hover:scale-110 group-hover:blur-[1px] transition-all duration-500"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#0a2640]">{s.title}</h3>
                  <p className="mt-2 text-gray-600">{s.desc}</p>

                  <Link
                    href={s.href}
                    className="inline-block mt-6 px-5 py-2 rounded-lg border border-[#0a2640] text-[#0a2640] group-hover:bg-[#0a2640] group-hover:text-white transition-all duration-300 group-hover:scale-105"
                  >
                    Learn More →
                  </Link>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
    
  );



}
