// src/app/all-digital-solutions/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Globe, Instagram, Target, TrendingUp, ArrowRight, CheckCircle, Sparkles, Building2 } from "lucide-react";

export default function AllDigitalSolutions() {
  return (
    <>
      {/* HERO - بالکل آپ کے homepage جیسا */}
      <section className="relative h-screen bg-gradient-to-b from-black via-slate-900 to-blue-950 text-white overflow-hidden">
        <Image
          src="/digital-solutions.webp"
          alt="Digital Solutions"
          fill
          className="object-cover opacity-50"
          unoptimized={true}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col justify-center items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-6xl md:text-9xl font-black mb-6 tracking-tighter">
              All Digital Solutions
            </h1>
            <p className="text-2xl md:text-4xl font-light text-blue-200 mb-8">
              Website • Social Media • SEO • Branding
            </p>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              A complete digital growth division by Ultracom Networks — trusted by 500+ enterprises.
            </p>
          </motion.div>
        </div>
      </section>

      {/* WEBSITE DEVELOPMENT */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-slate-900 mb-4">Website Development</h2>
            <p className="text-lg text-gray-600">High-performance, secure, and scalable web solutions</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              {[
                "Corporate & Institutional Websites",
                "E-Commerce Platforms with Payment Gateway",
                "Custom Web Applications & Portals",
                "High-Conversion Landing Pages",
                "CMS Integration (Sanity/WordPress)",
                "API Development & Third-Party Integrations"
              ].map((item) => (
                <div key={item} className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <span className="text-lg text-gray-800">{item}</span>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-200">
              <Image
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=800&fit=crop"
                alt="Website Development"
                width={1200}
                height={800}
                className="rounded-2xl"
                unoptimized={true}
              />
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL MEDIA & DIGITAL MARKETING */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-slate-900 mb-4">Social Media & Digital Marketing</h2>
            <p className="text-lg text-gray-600">Strategic growth through data-driven campaigns</p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              { title: "Social Media Management", icon: Instagram },
              { title: "Paid Advertising", icon: Target },
              { title: "SEO & Content Strategy", icon: TrendingUp }
            ].map((item) => (
              <div key={item.title} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-10 text-center border border-blue-100">
                <item.icon className="w-16 h-16 text-blue-700 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-slate-900">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BRANDING & IDENTITY */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-slate-900 mb-4">Brand Identity Design</h2>
            <p className="text-lg text-gray-600">Complete corporate branding that reflects trust and excellence</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              {[
                "Logo Design & Brand Guidelines",
                "Complete Visual Identity System",
                "Business Stationery & Collateral",
                "Social Media Branding Kit",
                "Brand Messaging & Tone of Voice",
                "Presentation Templates"
              ].map((item) => (
                <div key={item} className="flex items-start gap-4">
                  <Sparkles className="w-6 h-6 text-indigo-600 mt-1 flex-shrink-0" />
                  <span className="text-lg text-gray-800">{item}</span>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-10 border border-gray-200">
              <Image
                src="/branding.jpg"
                alt="Brand Identity"
                width={1200}
                height={900}
                className="rounded-2xl shadow-lg"
                unoptimized={true}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA - بالکل آپ کے homepage جیسا */}
      <section className="py-24 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-7xl font-black mb-8">
            Ready to Get Connected?
          </h2>
          <p className="text-xl text-blue-100 mb-12">
            Join hundreds of leading enterprises trusting Ultracom for their digital transformation.
          </p>
          <Link
            href="/contactus"
            className="inline-flex items-center gap-4 bg-white text-blue-900 px-12 py-5 rounded-full text-xl font-bold hover:bg-gray-100 transition-all shadow-xl"
          >
            Contact Sales <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </section>
    </>
  );
}