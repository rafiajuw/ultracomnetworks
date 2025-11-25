"use client";

import Image from "next/image";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useRef, useEffect } from "react";

export default function UltracomTestimonials() {
  const residentialRef = useRef<HTMLDivElement>(null);
  const businessRef = useRef<HTMLDivElement>(null);

  // Auto scroll effect
  useEffect(() => {
    const residential = residentialRef.current;
    const business = businessRef.current;

    if (!residential || !business) return;

    const autoScroll = (container: HTMLDivElement, speed: number = 400) => {
      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        container.scrollBy({ left: speed, behavior: "smooth" });
      }
    };

    const residentialInterval = setInterval(() => autoScroll(residential, 380), 5000);
    const businessInterval = setInterval(() => autoScroll(business, 380), 5500);

    return () => {
      clearInterval(residentialInterval);
      clearInterval(businessInterval);
    };
  }, []);

  // Residential Clients
  const residentialClients = [
    { name: "Ayesha Siddiqua", role: "Home User", company: "Ayesha Boutique", text: "Best home internet I've ever had! Netflix, YouTube, online classes — everything runs smoothly even when the whole family is online.", avatar: "/clients/res1.jpg" },
    { name: "Muhammad Irfan", role: "Freelancer", company: "Remote Worker", text: "As a freelancer, stable internet is my lifeline. Ultracom gives me 100% uptime and blazing fast speed. Never lost a client call!", avatar: "/clients/res2.jpg" },
    { name: "Sana Ahmed", role: "Homemaker", company: "Family User", text: "WiFi reaches every corner of our house — even in the kitchen! I can watch recipes while cooking. Highly satisfied!", avatar: "/clients/res3.jpg" },
    { name: "Omar Farooq", role: "Student", company: "Online Learner", text: "Online exams used to get interrupted due to slow internet. Since switching to Ultracom — zero issues. Best decision!", avatar: "/clients/res4.jpg" },
  ];

  // Business Clients
  const businessClients = [
    { name: "Engr. Bilal Ahmed", role: "IT Manager", company: "TechVision Solutions", text: "50+ computers, CCTV, cloud servers — everything runs perfectly on Ultracom. 99.9% uptime and 24/7 support. True enterprise-grade service!", avatar: "/clients/biz1.jpg" },
    { name: "Dr. Sana Malik", role: "Clinic Owner", company: "Sana Medical & Dental", text: "Patient records, X-rays, online appointments — all super fast now. Ultracom transformed our clinic into a digital healthcare center.", avatar: "/clients/biz2.jpg" },
    { name: "Usman Ghani", role: "Director", company: "Ghani Textiles", text: "300+ machines and 200+ workers connected seamlessly. Industrial-grade network with zero downtime. Highly reliable!", avatar: "/clients/biz3.jpg" },
    { name: "Fatima Khan", role: "Principal", company: "Beaconhouse School System", text: "500+ students and teachers using internet simultaneously for online classes. No complaints since we switched to Ultracom!", avatar: "/clients/biz4.jpg" },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#1e40af] text-white py-28">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold leading-tight"
          >
            Trusted by Over 1000+ Happy Clients
            <span className="block text-cyan-400 text-4xl md:text-6xl mt-4">Across Pakistan</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 mt-8 max-w-4xl mx-auto"
          >
            From homes to large enterprises — everyone loves Ultracom's speed, stability & support
          </motion.p>
        </div>
      </section>

      {/* Residential Clients - Horizontal Scroll */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Happy Home Users</h2>
            <p className="text-xl text-gray-600 mt-4">Thousands of families trust Ultracom every day</p>
          </div>

          <div 
            ref={residentialRef}
            className="flex overflow-x-auto scrollbar-hide gap-8 pb-8 snap-x snap-mandatory scroll-smooth"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {[...residentialClients, ...residentialClients].map((client, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="flex-none w-96 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-3xl shadow-xl p-8 border border-cyan-100 snap-center hover:shadow-2xl transition-all duration-300"
              >
                <Quote className="w-12 h-12 text-cyan-500 mb-6 opacity-70" />
                <p className="text-gray-700 text-lg leading-relaxed mb-8 italic">"{client.text}"</p>
                
                <div className="flex items-center gap-5">
                  <div className="w-16 h-16 rounded-full ring-4 ring-cyan-500 ring-offset-4 overflow-hidden bg-white shadow-lg">
                    <Image 
                      src={client.avatar || "/avatar-placeholder.jpg"} 
                      alt={client.name} 
                      width={64} 
                      height={64} 
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">{client.name}</h4>
                    <p className="text-cyan-600 font-semibold">{client.role}</p>
                    <p className="text-sm text-gray-500">{client.company}</p>
                  </div>
                </div>

                <div className="flex gap-1 mt-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-cyan-500 text-cyan-500" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Clients - Horizontal Scroll */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Enterprise & Business Clients</h2>
            <p className="text-xl text-gray-600 mt-4">Pakistan's top companies rely on our network</p>
          </div>

          <div 
            ref={businessRef}
            className="flex overflow-x-auto scrollbar-hide gap-8 pb-8 snap-x snap-mandatory scroll-smooth"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {[...businessClients, ...businessClients].map((client, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="flex-none w-96 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl shadow-xl p-8 border border-blue-100 snap-center hover:shadow-2xl transition-all duration-300"
              >
                <Quote className="w-12 h-12 text-blue-600 mb-6 opacity-70" />
                <p className="text-gray-700 text-lg leading-relaxed mb-8 italic">"{client.text}"</p>
                
                <div className="flex items-center gap-5">
                  <div className="w-16 h-16 rounded-full ring-4 ring-blue-600 ring-offset-4 overflow-hidden bg-white shadow-lg">
                    <Image 
                      src={client.avatar || "/avatar-placeholder.jpg"} 
                      alt={client.name} 
                      width={64} 
                      height={64} 
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">{client.name}</h4>
                    <p className="text-blue-600 font-semibold">{client.role}</p>
                    <p className="text-sm text-gray-600">{client.company}</p>
                  </div>
                </div>

                <div className="flex gap-1 mt-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-blue-600 text-blue-600" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#0f172a] text-white py-24 text-center">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">Ready for Ultra-Fast Internet?</h2>
          <p className="text-2xl text-gray-300 mb-10">Join thousands of happy customers today</p>
          <a 
            href="tel:+923351305062"
            className="inline-block bg-gradient-to-r from-cyan-500 to-green-500 text-white font-bold px-16 py-7 rounded-full text-2xl hover:shadow-2xl hover:scale-110 transition-all duration-300"
          >
            Call Now: +92 335 1305 062
          </a>
        </div>
      </section>
    </>
  );
}