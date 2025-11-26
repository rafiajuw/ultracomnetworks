"use client";

import ServiceHero from "./ServiceHero";
import BackToServices from "./BackToServices";
import { motion } from "framer-motion";
import Link from "next/link";

interface ServicePageProps {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  heroImage: string;
  ctaText?: string;
  ctaLink?: string;
}

export default function ServicePage({
  title,
  subtitle,
  description,
  features,
  heroImage,
  ctaText = "Get a Quote",
  ctaLink = "/contactus",
}: ServicePageProps) {
  return (
    <>
      {/* HERO */}
      <ServiceHero
        title={title}
        subtitle={subtitle}
        description={description}
        image={heroImage}
        ctaText={ctaText}
        ctaLink={ctaLink}
      />

      {/* Back to Services */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <BackToServices />
      </div>

      {/* FEATURES */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-[#0f172a] mb-14 text-center tracking-tight">
            Key Features
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="flex items-start gap-5 p-6 bg-white rounded-2xl shadow-md 
                hover:shadow-xl hover:bg-gray-50 transition-all border border-gray-100"
              >
                <div className="w-12 h-12 bg-ultracom-primary rounded-full text-white 
                flex items-center justify-center shadow">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>

                <p className="text-gray-700 text-lg leading-relaxed font-medium">
                  {feature}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

     {/* FINAL CTA */}
<section className="py-24 bg-gradient-to-r from-ultracom-dark to-ultracom-primary text-blue-950 relative overflow-hidden">
  <div className="absolute inset-0 bg-white/10 blur-3xl opacity-20"></div>

  <div className="max-w-3xl mx-auto text-center px-6 relative z-10">
    <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight drop-shadow">
      Ready to Deploy?
    </h2>

    <p className="text-xl mb-12 text-blue-300 leading-relaxed">
      Contact us for pricing, a custom quote, or a site survey.
    </p>

    <Link href="/contactus">
      <motion.button
        whileHover={{ scale: 1.07 }}
        whileTap={{ scale: 0.97 }}
        className="inline-flex items-center justify-center px-12 py-4 text-lg 
        font-bold rounded-full bg-white text-ultracom-dark shadow-2xl 
        hover:shadow-ultracom-glow transition-all"
      >
        {ctaText}
      </motion.button>
    </Link>
  </div>
</section>

    </>
  );
}
