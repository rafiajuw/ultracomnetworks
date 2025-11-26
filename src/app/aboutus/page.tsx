// src/app/about-us/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
  Shield, Zap, Globe, Users, Target, Eye, Heart, Rocket,
  Linkedin, MapPin, ArrowRight
} from "lucide-react";

function useScrollToHash() {
  const pathname = usePathname();
  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      const id = window.location.hash.replace("#", "");
      const el = document.getElementById(id);
      el?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [pathname]);
}

export default function AboutUs() {
  useScrollToHash();

  // const leaders = [
  //   { name: "Muneeb Ali", role: "CEO & Founder" },
  //   { name: "Zohaib Ahmed", role: "Chief Operating Officer" },
  //   { name: "Omar Farooq", role: "Chief Technology Officer" },
  //   { name: "Ayesha Malik", role: "Head of Sales" },
  // ];

  // const offices = [
  //   { city: "Karachi (Head Office)", address: "Plot C-10/2, Shahrah-e-Faisal", phone: " +92 3111000929" },
  //   { city: "Lahore", address: "Gulberg III, Main Boulevard", phone: " +92 3111000929" },
  //   // { city: "Islamabad", address: "F-7 Markaz", phone: " +92 3111000929" },
  // ];

  return (
    <>
      {/* ==== HERO - Soft Navy ==== */}
      <section className="relative h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-blue-950 text-white overflow-hidden font-poppins">
        <Image
          src="/hero2.jpg"
          alt="UltraCom Networks"
          fill
          className="object-cover opacity-25"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        
        <div className="relative z-10 flex items-center justify-center h-full px-6 text-center">
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="max-w-5xl"
          >
            <h1 className="text-5xl md:text-8xl font-bold tracking-tight mb-6">
              UltraCom Networks
            </h1>
            <p className="text-2xl md:text-4xl font-light text-blue-200 mb-4">
              Secure. Reliable. Connected.
            </p>
            <p className="text-lg md:text-xl text-blue-100">
              Powering Pakistans Digital Future
            </p>
          </motion.div>
        </div>
      </section>

      {/* ==== WHO WE ARE ==== */}
      <section id="who-we-are" className="py-24 md:py-32 bg-gray-50 font-poppins">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-slate-800 mb-8">
              Who We Are
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-6">
              UltraCom Networks is Pakistan’s leading enterprise connectivity provider, delivering mission-critical internet, cloud, and managed IT infrastructure solutions.
            </p>
            <p className="text-base md:text-lg text-gray-500">
              Founded in 2020, we proudly serve over <strong className="text-slate-700">50+ enterprises</strong> including banks, multinationals, universities, and government institutions with <strong className="text-slate-700">99.99% uptime</strong> and dedicated 24/7 local support.
            </p>

            <div className="grid grid-cols-2 gap-8 mt-12">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
                <h3 className="text-5xl font-bold text-slate-800">50++</h3>
                <p className="text-gray-600 mt-2">Enterprise Clients</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
                <h3 className="text-5xl font-bold text-slate-800">10+</h3>
                <p className="text-gray-600 mt-2">Cities Connected</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-200">
              <Image
                src="/cloudwifi.jpeg"
                alt="UltraCom Team"
                width={700}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ==== MISSION & VISION ==== */}
      <section id="mission" className="py-24 md:py-32 bg-white font-poppins">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-bold text-center text-slate-800 mb-16">
            Our Mission & Vision
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              whileHover={{ y: -8 }}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 p-10 rounded-3xl border border-blue-100"
            >
              <Eye className="w-14 h-14 text-blue-600 mb-6" />
              <h3 className="text-3xl font-bold text-slate-800 mb-4">Vision</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                To be Pakistan’s most trusted digital infrastructure company — connecting every business to limitless global opportunities.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -8 }}
              className="bg-gradient-to-br from-indigo-50 to-purple-50 p-10 rounded-3xl border border-indigo-100"
            >
              <Target className="w-14 h-14 text-indigo-600 mb-6" />
              <h3 className="text-3xl font-bold text-slate-800 mb-4">Mission</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Deliver secure, ultra-fast, and affordable connectivity with unmatched reliability and customer-first service.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ==== CORE VALUES ==== */}
      <section id="values" className="py-24 md:py-32 bg-gray-50 font-poppins">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-slate-800 mb-16">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { icon: Shield, title: "Integrity", desc: "Honesty in everything we do" },
              { icon: Zap, title: "Innovation", desc: "Always pushing forward" },
              { icon: Heart, title: "Customer First", desc: "Your success is our success" },
              { icon: Globe, title: "Reliability", desc: "You can count on us" },
              { icon: Users, title: "Teamwork", desc: "Stronger together" },
              { icon: Rocket, title: "Excellence", desc: "Good is never enough" },
            ].map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -12 }}
                className="bg-white p-10 rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <v.icon className="w-14 h-14 text-blue-600 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-slate-800 mb-3">{v.title}</h3>
                <p className="text-gray-600">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==== LEADERSHIP ====
      <section id="leadership" className="py-24 md:py-32 bg-white font-poppins">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-bold text-center text-slate-800 mb-16">
            Leadership Team
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {leaders.map((leader, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition"
              >
                <div className="h-80 bg-gradient-to-br from-blue-100 to-indigo-100 border-2 border-dashed border-gray-300" />
                <div className="p-8 text-center">
                  <h3 className="text-xl font-bold text-slate-800">{leader.name}</h3>
                  <p className="text-blue-600 mt-1">{leader.role}</p>
                  <a href="#" className="inline-block mt-6 p-3 bg-slate-800 text-white rounded-full hover:bg-slate-700 transition">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* ==== OFFICE LOCATIONS ====
      <section id="office-locations" className="py-24 md:py-32 bg-gray-50 font-poppins">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-bold text-center text-slate-800 mb-16">
            Office Locations
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {offices.map((office, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white p-10 rounded-3xl shadow-md hover:shadow-xl transition text-center border border-gray-100"
              >
                <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-slate-800 mb-3">{office.city}</h3>
                <p className="text-gray-600 mb-4">{office.address}</p>
                <a href={`tel:${office.phone}`} className="text-blue-600 font-semibold hover:text-blue-800">
                  {office.phone}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* ==== CTA ==== */}
      <section className="py-24 md:py-32 bg-gradient-to-r from-slate-800 to-blue-900 text-white text-center font-poppins">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            Ready to Get Connected?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Join hundreds of leading Pakistani enterprises trusting UltraCom for their digital backbone.
          </p>
          <Link
            href="/contactus"
            className="inline-flex items-center gap-4 bg-white text-slate-800 px-10 py-5 rounded-full text-xl font-semibold hover:bg-gray-100 transition shadow-xl"
          >
            Contact Sales <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </section>
    </>
  );
}