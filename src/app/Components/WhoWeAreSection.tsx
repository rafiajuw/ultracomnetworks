"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function WhoWeAreSection() {
  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 px-6 lg:px-10">

        {/* LEFT TEXT AREA */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a2640] leading-tight">
            We Build Reliable & Scalable Network Infrastructure
          </h2>

          <p className="text-gray-600 mt-4 text-lg leading-relaxed">
            With years of expertise in Internet, Data Connectivity, IT Networks and 
            Managed Infrastructure Solutions — we empower businesses with seamless 
            communication and mission-critical network stability.
          </p>

          <p className="text-gray-600 mt-3 text-lg leading-relaxed">
            Our engineering team works closely with organizations to plan, deploy, 
            and maintain high-availability network systems tailored to business needs.
          </p>

          <Link
            href="/about"
            className="inline-block mt-8 px-6 py-3 bg-[#0072CE] text-white rounded-lg shadow-md hover:bg-[#005FAE] transition font-medium text-lg w-fit"
          >
            Learn More About Us →
          </Link>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-xl"
        >
          <Image
            src="/whoweare.jpg"  // ← Change with your image
            alt="Who We Are"
            fill
            className="object-cover hover:scale-105 transition-all duration-700"
          />
        </motion.div>

      </div>
    </section>
  );
}
