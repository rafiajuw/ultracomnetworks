// src/app/social-media-marketing/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Instagram, 
  Facebook, 
  Youtube, 
  TrendingUp, 
  Target, 
  Zap, 
  MessageCircle,
  BarChart3,
  Sparkles,
  CheckCircle,
  ArrowRight
} from "lucide-react";

export default function SocialMediaMarketing() {
  return (
    <>
      {/* Hero Section - Same as Web Dev Page */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6">
              Social Media Marketing Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              At Ultracom Networks, we don’t just post — we grow your brand with data-driven strategies, 
              high-engagement content, and targeted paid campaigns across Instagram, Facebook, YouTube & TikTok.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative rounded-3xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/hero3.jpeg"
              alt="Social Media Marketing by Ultracom Networks"
              width={1400}
              height={600}
              className="w-full h-auto object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 text-white">
              <p className="text-3xl font-bold">500+ Brands Trust Us</p>
              <p className="text-lg opacity-90">Across Pakistan</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid - Exactly like Web Dev page */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 text-lg text-gray-700">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <ul className="space-y-4">
                {[
                  "Instagram & Facebook Growth Strategy",
                  "High-Engagement Reels & Stories",
                  "Targeted Paid Ad Campaigns",
                  "Professional Content Creation",
                  "Page Management & Community Building",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <ul className="space-y-4">
                {[
                  "YouTube Channel Optimization",
                  "Monthly Performance Reports",
                  "Competitor Analysis & Benchmarking",
                  "Brand Voice & Visual Identity",
                  "Crisis Management & Reputation",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* CTA Buttons - Same Style */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mt-16 flex flex-col sm:flex-row gap-6 justify-center"
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-blue-600 text-white px-10 py-5 rounded-full text-xl font-bold hover:bg-blue-700 transition shadow-lg hover:shadow-xl hover:scale-105"
            >
              <MessageCircle className="w-6 h-6" />
              Start Growing Today
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-3 border-2 border-blue-600 text-blue-600 px-10 py-5 rounded-full text-xl font-bold hover:bg-blue-50 transition"
            >
              View Our Success Stories
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Limited Time Offer Banner */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-pink-600 text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur px-6 py-3 rounded-full text-sm font-bold mb-6">
              <Sparkles className="w-5 h-5 text-yellow-300" />
              LIMITED TIME OFFER
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-4">
              Only ₹7,999/month
            </h2>
            <p className="text-2xl mb-8">Complete Social Media Management + Paid Ads Included</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-4 bg-white text-red-600 px-16 py-6 rounded-full text-2xl font-bold hover:bg-gray-100 transition shadow-2xl"
            >
              Claim This Offer Now
              <ArrowRight className="w-7 h-7" />
            </Link>
            <p className="mt-6 text-yellow-300 font-bold text-lg">
              Only 8 Slots Left This Month
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}