// src/app/services/branding/page.tsx
"use client";

import { Type, Image, Palette, Layout, Book } from "lucide-react";
import ServiceCTA from "@/app/Components/Servicecta";

export default function Branding() {
  const features = [
    {
      icon: <Type className="w-10 h-10 text-purple-500" />,
      title: "Logo Design",
      desc: "Professional logos that reflect your brand identity and values.",
    },
    {
      icon: <Palette className="w-10 h-10 text-purple-500" />,
      title: "Color & Typography",
      desc: "Custom color schemes and font selections for consistent branding.",
    },
    {
      icon: <Image className="w-10 h-10 text-purple-500" />,
      title: "Visual Identity",
      desc: "Create graphics, imagery, and visual guidelines for your brand.",
    },
    {
      icon: <Layout className="w-10 h-10 text-purple-500" />,
      title: "Brand Guidelines",
      desc: "Documentation for logos, colors, and typography for consistent use.",
    },
    {
      icon: <Book className="w-10 h-10 text-purple-500" />,
      title: "Marketing Collateral",
      desc: "Business cards, flyers, brochures, and social templates.",
    },
  ];

  return (
    <div className="w-full">
      <div className="relative w-full h-[55vh] md:h-[70vh]">
        <img src="/branding.jpeg" alt="Branding & Identity" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
            Branding & Identity
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-3xl">
            Build a strong brand with professional logos, colors, and visual identity.
          </p>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
            Key Features
          </h2>
          <p className="text-center text-gray-600 mt-4 max-w-2xl mx-auto">
            Our branding services ensure your business stands out in the market.
          </p>

          <div className="grid gap-10 md:grid-cols-3 mt-14">
            {features.map((item, i) => (
              <div
                key={i}
                className="p-8 rounded-2xl bg-gray-50 shadow hover:shadow-lg hover:bg-gray-100 transition-all duration-300 text-center"
              >
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                <p className="text-gray-600 mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ServiceCTA
  heading="Boost Your Website Visibility"
  subtext="Our SEO experts will help you rank higher, increase traffic, and grow conversions."
  ctaText="Request SEO Consultation"
  ctaLink="/contactus"
/>

    </div>
  );
}
