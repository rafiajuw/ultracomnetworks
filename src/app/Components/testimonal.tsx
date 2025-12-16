"use client";

import Image from "next/image";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";
import { useRef, useEffect } from "react";

export default function UltracomTestimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const autoScroll = () => {
      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        container.scrollBy({ left: 380, behavior: "smooth" });
      }
    };

    const interval = setInterval(autoScroll, 4500);
    return () => clearInterval(interval);
  }, []);

  const clients = [
    {
      name: "Bilal Ahmed",
      role: "IT Manager",
      company: "TechVision Solutions",
      text: "Ultracom Networks has been a game changer for our office. Stable 300 Mbps enterprise connectivity + fast support. Our entire IT operations run smoothly.",
      avatar: "/clients/b1.webp",
      service: "Enterprise Internet"
    },
    {
      name: "Sara Khan",
      role: "Marketing Lead",
      company: "Beauty Glow",
      text: "Ultracom developed our website with a premium design, stunning animations & lightning speed. Sales doubled within weeks!",
      avatar: "/clients/r1.webp",
      service: "Website Development"
    },
    {
      name: "Zain Ali",
      role: "Freelancer",
      company: "Upwork & Fiverr",
      text: "Stable internet is EVERYTHING for my remote work. Zero downtime, zero lag — just smooth productivity.",
      avatar: "/clients/r2.webp",
      service: "Home Internet"
    },
    {
      name: "Dr. Amna Qureshi",
      role: "Clinic Owner",
      company: "Qureshi Dental Care",
      text: "From digital records to HD video calls, Ultracom’s fiber internet helped our clinic shift to fully digital workflow.",
      avatar: "/clients/b2.webp",
      service: "Business Internet"
    },
    {
      name: "Usman Tariq",
      role: "CEO",
      company: "Tariq Traders",
      text: "Ultracom built our complete ecommerce website — fast, secure & highly converting. Best dev team we’ve worked with.",
      avatar: "/clients/b1.webp",
      service: "Web Development"
    },
  ];

  return (
    <>
      <section className="relative bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#1e40af] text-white py-28 overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/20 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/20 blur-[150px] rounded-full"></div>

        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold"
          >
            What Our Clients Say
            <span className="block text-cyan-400 text-4xl md:text-6xl mt-4">
              Ultracom Networks
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 mt-8 max-w-4xl mx-auto"
          >
            From blazing-fast Internet to modern Website Development — we deliver excellence.
          </motion.p>
        </div>

        {/* Testimonials Scroll Section */}
        <div className="mt-20 max-w-7xl mx-auto px-6 relative z-10">
          <div
            ref={scrollRef}
            className="flex overflow-x-auto scrollbar-hide gap-10 pb-10 snap-x snap-mandatory scroll-smooth"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {[...clients, ...clients].map((client, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.06 }}
                className="flex-none w-96 bg-white/10 backdrop-blur-xl border border-white/20 
                rounded-3xl shadow-xl p-8 snap-center hover:shadow-2xl transition-all duration-300"
              >
                <Quote className="w-12 h-12 text-cyan-400 mb-6 opacity-70" />
                <p className="text-gray-200 text-lg leading-relaxed mb-8 italic">
                  "{client.text}"
                </p>

                <div className="flex items-center gap-5">
                  <div className="w-16 h-16 rounded-full ring-4 ring-cyan-400 ring-offset-2 overflow-hidden">
                    <Image
                      src={client.avatar || "/avatar-placeholder.jpg"}
                      alt={client.name}
                      width={64}
                      height={64}
                      className="object-cover"
                    />
                  </div>

                  <div>
                    <h4 className="font-bold text-white text-lg">{client.name}</h4>
                    <p className="text-cyan-300 font-semibold">{client.role}</p>
                    <p className="text-sm text-gray-300">{client.company}</p>
                  </div>
                </div>

                <p className="mt-4 text-sm text-cyan-300 font-medium">
                  Service: {client.service}
                </p>

                <div className="flex gap-1 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-cyan-400 text-cyan-400" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
