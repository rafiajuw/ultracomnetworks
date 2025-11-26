"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Search, ArrowRight, Download, Phone, Mail } from "lucide-react";

interface Service {
  title: string;
  subtitle: string;
  href: string;
  category: string;
  pdf?: string;
  icon: React.ReactNode;
}

const categories = [
  { value: "all", label: "All Services" },
  { value: "connectivity", label: "Connectivity" },
  { value: "infrastructure", label: "Infrastructure" },
  { value: "voice", label: "Voice & PBX" },
  { value: "consulting", label: "Consulting" },
];

export default function ServicesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const allServices: Service[] = [
    {
      title: "Dedicated Internet",
      subtitle: "High-speed fiber internet with SLA",
      href: "/services/internet",
      category: "connectivity",
      pdf: "/pdfs/internet.pdf",
      icon: <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center"><div className="w-6 h-6 bg-blue-600 rounded-full" /></div>,
    },
    {
      title: "LAN & WAN Networking",
      subtitle: "Enterprise network design & deployment",
      href: "/services/lan-wan",
      category: "infrastructure",
      icon: <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center"><div className="w-6 h-6 bg-indigo-600 rounded-full" /></div>,
    },
    {
      title: "Cloud WiFi Solution",
      subtitle: "Managed cloud WiFi with analytics",
      href: "/services/cloud-wifi",
      category: "connectivity",
      icon: <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center"><div className="w-6 h-6 bg-teal-600 rounded-full" /></div>,
    },
    {
      title: "Network Support",
      subtitle: "24/7 NOC & certified engineers",
      href: "/services/network-support",
      category: "infrastructure",
      pdf: "/pdfs/network-support.pdf",
      icon: <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center"><div className="w-6 h-6 bg-purple-600 rounded-full" /></div>,
    },
    {
      title: "Data Center Services",
      subtitle: "Colocation & secure hosting",
      href: "/services/data-center",
      category: "infrastructure",
      icon: <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center"><div className="w-6 h-6 bg-gray-700 rounded-full" /></div>,
    },
    {
      title: "Call Center Solutions",
      subtitle: "Cloud PBX, IVR & omnichannel",
      href: "/services/call-center",
      category: "voice",
      pdf: "/pdfs/call-center.pdf",
      icon: <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center"><div className="w-6 h-6 bg-emerald-600 rounded-full" /></div>,
    },
    {
      title: "PBX Installation",
      subtitle: "On-premise & hybrid PBX setup",
      href: "/services/pbx-installation",
      category: "voice",
      icon: <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center"><div className="w-6 h-6 bg-amber-600 rounded-full" /></div>,
    },
    {
      title: "IT Consultation",
      subtitle: "Free assessment & roadmap",
      href: "/services/consultation",
      category: "consulting",
      pdf: "/pdfs/consultation.pdf",
      icon: <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center"><div className="w-6 h-6 bg-pink-600 rounded-full" /></div>,
    },
  ];

  const filteredServices = useMemo(() => {
    return allServices.filter((service) => {
      const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           service.subtitle.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === "all" || service.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <>
      {/* HERO */}
      <section className="relative py-32 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white overflow-hidden font-poppins">
        <div className="absolute inset-0 bg-grid-white/5" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl text-blue-200 max-w-4xl mx-auto leading-relaxed">
            Complete enterprise IT solutions — from dedicated internet to managed voice services, all backed by local 24/7 support.
          </p>
        </div>
      </section>

      {/* SEARCH + FILTER */}
      <section className="py-12 bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Search */}
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input
              type="text"
              placeholder="Search services..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-6 py-4 border border-gray-300 rounded-2xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition text-gray-800 placeholder-gray-500"
            />
          </div>

          {/* Filter */}
          <div className="flex gap-3 flex-wrap justify-center md:justify-end">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  selectedCategory === cat.value
                    ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          {filteredServices.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-gray-500">No services found. Try adjusting your filters.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredServices.map((service) => (
                <Link href={service.href} key={service.href}>
                  <div className="group bg-white rounded-3xl shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-gray-100 overflow-hidden h-full flex flex-col">
                    <div className="p-8 flex-1">
                      <div className="mb-6">{service.icon}</div>
                      <h3 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-blue-700 transition">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">{service.subtitle}</p>
                    </div>

                    <div className="px-8 pb-8 mt-auto flex items-center justify-between">
                      <span className="text-sm font-medium text-blue-600 group-hover:text-blue-800 flex items-center gap-2">
                        View Details <ArrowRight className="w-4 h-4" />
                      </span>
                      {service.pdf && (
                        <a
                          href={service.pdf}
                          target="_blank"
                          className="text-gray-500 hover:text-blue-600 transition"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Download className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 bg-gradient-to-r from-blue-800 via-blue-900 to-slate-900 text-white">
        <div className="max-w-5xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-8">
            Not Sure What You Need?
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Let our senior engineers assess your current setup and recommend the perfect solution — completely free.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-12 py-6 rounded-full text-xl font-bold shadow-2xl hover:scale-105 transition transform"
            >
              Free Consultation
            </Link>
            <a
              href="tel:+923111000929"
              className="inline-flex items-center justify-center gap-3 border-2 border-white px-10 py-6 rounded-full text-xl font-semibold hover:bg-white/10 transition"
            >
              <Phone className="w-6 h-6" /> +92 3111000929
            </a>
            <a
              href="mailto:sales@ultracom.net"
              className="inline-flex items-center justify-center gap-3 border-2 border-white px-10 py-6 rounded-full text-xl font-semibold hover:bg-white/10 transition"
            >
              <Mail className="w-6 h-6" /> Email Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
