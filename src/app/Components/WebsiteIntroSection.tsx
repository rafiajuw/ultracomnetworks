"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function WebsiteIntroSection() {
  return (
    <section className="w-full py-24 bg-[#f8fafc] border-t border-gray-200">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 px-6 lg:px-10">

        {/* TEXT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a2640] leading-tight">
            We Design & Develop Modern Websites That Drive Growth
          </h2>

          <p className="text-gray-600 mt-4 text-lg leading-relaxed">
            Our expert development team builds high-performance, secure, and engaging websites 
            using Next.js, Tailwind CSS, and Sanity CMS. Whether you need a corporate site, 
            e-commerce platform, or AI-powered business website — we deliver elegant and scalable solutions.
          </p>

          <Link
            href="/website-development"
            className="inline-block mt-8 px-7 py-3 bg-[#0072CE] text-white rounded-lg shadow-md hover:bg-[#005FAE] transition font-medium text-lg w-fit"
          >
            Learn More →
          </Link>
        </motion.div>

        {/* IMAGE SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative w-full h-[420px] rounded-2xl overflow-hidden shadow-xl"
        >
          <Image
            src="/webdevlopment2.jpg"
            alt="Website Development"
            fill
            className="object-cover hover:scale-105 transition-all duration-700"
          />
        </motion.div>

      </div>
    </section>
  );
}
