"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Calendar, ChevronDown, Search, ChevronRight } from "lucide-react";

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<null | "services" | "about">(null);
  const [showForm, setShowForm] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Services Dropdown Data
  const servicesColumns = [
    {
      title: "Connectivity",
      items: [
        { name: "INTERNET", href: "/services/internet" },
        { name: "LAN / WAN", href: "/services/lan-wan" },
        { name: "Cloud WiFi", href: "/services/cloud-wifi" },
      ],
    },
    {
      title: "Professional",
      items: [
        { name: "Network Support", href: "/services/network-support" },
        { name: "Data Center", href: "/services/data-center" },
        { name: "Consultation", href: "/services/consultation" },
      ],
    },
    {
      title: "Digital",
      items: [
        { name: "Website Development", href: "/webdevlopment2#website" },
        { name: "Social Media Marketing", href: "/webdevlopment2#Social" },
        { name: "Logo & Branding", href: "/webdevlopment2#Brand" },
        { name: "Web Services", href: "/services/web-services" },
      ],
    },
  ];

  // About Us Dropdown Data
  const aboutColumns = [
    {
      title: "Company",
      items: [
        { name: "Our Story", href: "/aboutus#story" },
        { name: "Mission & Vision", href: "/aboutus#mission" },
        { name: "Core Values", href: "/aboutus#values" },
      ],
    },
    {
      title: "Team",
      items: [
        { name: "Leadership", href: "/aboutus#leadership" },
        { name: "Careers", href: "/careers" },
      ],
    },
    {
      title: "More",
      items: [
        { name: "Partners", href: "/partners" },
        { name: "Blog", href: "/blog" },
      ],
    },
  ];

  return (
    <>
      {/* TOP BAR – چھوٹا، سمارٹ، بالکل WhalesMark جیسا */}
      <div className="bg-[#0f172a] text-white text-xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-5 py-2.5">
          {/* Left */}
          <div className="flex items-center gap-3">
            <Calendar className="w-3.5 h-3.5 text-cyan-400" />
            <span className="hidden lg:inline">Need Free Consultation?</span>
            <button
              onClick={() => setShowForm(true)}
              className="underline underline-offset-2 hover:text-cyan-300 transition font-medium"
            >
              Book Schedule Now
            </button>
          </div>

          {/* Right – Talk to Expert (پورا بٹن ہوور + کال) */}
          <a
            href="tel:+923111000929"
            className="group flex items-center gap-3 bg-gradient-to-r from-[#1e40af] to-[#2563eb] px-7 py-2.5 rounded-full text-xs font-semibold hover:from-[#1e40af] hover:to-[#3b82f6] hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <Phone className="w-4 h-4 text-cyan-300 group-hover:text-white transition" />
            <div className="leading-tight">
              <span className="block opacity-90 tracking-widest">TALK TO AN EXPERT!</span>
              <span className="font-bold tracking-wider">+92 3111000929</span>
            </div>
          </a>
        </div>
      </div>

      {/* MAIN NAVBAR */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Ultracom Networks"
              width={185}
              height={60}
              className="object-contain"
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-10 text-gray-700 font-medium text-[15px]">
            <Link href="/" className="hover:text-cyan-600 transition font-semibold">
              Home
            </Link>

            {/* Services */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("services")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 hover:text-cyan-600 transition">
                Services
                <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === "services" ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {activeDropdown === "services" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute left-1/2 -translate-x-1/2 top-full mt-4 w-[860px] bg-white rounded-2xl shadow-2xl border overflow-hidden z-50"
                  >
                    <div className="p-8 flex gap-10">
                      <div className="w-5/12">
                        <Image src="/services.webp" alt="Services" width={380} height={240} className="rounded-xl shadow-lg w-full" />
                        <h3 className="text-xl font-bold text-gray-900 mt-5">Complete IT + Digital Solutions</h3>
                        <p className="text-sm text-gray-600 mt-2">Connectivity, networking and digital growth solutions under one roof.</p>
                        <Link href="/services" className="mt-4 inline-flex items-center text-cyan-600 font-semibold hover:underline">
                          View All Services <ChevronRight className="w-4 h-4 ml-1" />
                        </Link>
                      </div>
                      <div className="w-7/12 grid grid-cols-3 gap-8">
                        {servicesColumns.map((col) => (
                          <div key={col.title}>
                            <h4 className="font-bold text-gray-900 mb-4">{col.title}</h4>
                            <ul className="space-y-3">
                              {col.items.map((item) => (
                                <li key={item.name}>
                                  <Link href={item.href} className="text-gray-600 hover:text-cyan-600 transition text-sm block">
                                    {item.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/blog" className="hover:text-cyan-600 transition">
              Business Spotlight
            </Link>

            {/* About Us */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("about")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 hover:text-cyan-600 transition">
                About Us
                <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === "about" ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {activeDropdown === "about" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute left-1/2 -translate-x-1/2 top-full mt-4 w-[860px] bg-white rounded-2xl shadow-2xl border overflow-hidden z-50"
                  >
                    <div className="p-8 flex gap-10">
                      <div className="w-5/12">
                        <Image src="/aboutus.jpg" alt="About" width={380} height={240} className="rounded-xl shadow-lg w-full" />
                        <h3 className="text-xl font-bold text-gray-900 mt-5">About Ultracom Networks</h3>
                        <p className="text-sm text-gray-600 mt-2">Trusted partner in connectivity & digital transformation.</p>
                        <Link href="/aboutus" className="mt-4 inline-flex items-center text-cyan-600 font-semibold hover:underline">
                          Company Overview <ChevronRight className="w-4 h-4 ml-1" />
                        </Link>
                      </div>
                      <div className="w-7/12 grid grid-cols-3 gap-8">
                        {aboutColumns.map((col) => (
                          <div key={col.title}>
                            <h4 className="font-bold text-gray-900 mb-4">{col.title}</h4>
                            <ul className="space-y-3">
                              {col.items.map((item) => (
                                <li key={item.name}>
                                  <Link href={item.href} className="text-gray-600 hover:text-cyan-600 transition text-sm block">
                                    {item.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/contactus" className="hover:text-cyan-600 transition">
              Contact Us
            </Link>

            <Search className="w-5 h-5 text-gray-600 hover:text-cyan-600 cursor-pointer transition ml-4" />
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setMobileOpen(true)} className="lg:hidden">
            <Menu className="w-7 h-7 text-gray-700" />
          </button>
        </nav>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} className="fixed inset-0 bg-white z-50 flex flex-col">
            <div className="flex justify-between items-center p-6 border-b">
              <Image src="/logo.png" alt="Logo" width={160} height={50} />
              <button onClick={() => setMobileOpen(false)}>
                <X className="w-8 h-8 text-gray-700" />
              </button>
            </div>
            <div className="p-8 space-y-6 text-lg font-medium text-gray-700">
              <Link href="/" onClick={() => setMobileOpen(false)}>Home</Link>
              <Link href="/services" onClick={() => setMobileOpen(false)}>Services</Link>
              <Link href="/blog" onClick={() => setMobileOpen(false)}>Business Spotlight</Link>
              <Link href="/aboutus" onClick={() => setMobileOpen(false)}>About Us</Link>
              <Link href="/contactus" onClick={() => setMobileOpen(false)}>Contact Us</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Consultation Form Modal */}
      <AnimatePresence>
        {showForm && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4" onClick={() => setShowForm(false)}>
            <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }} className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full relative" onClick={(e) => e.stopPropagation()}>
              <button onClick={() => setShowForm(false)} className="absolute top-4 right-6">
                <X className="w-6 h-6 text-gray-500 hover:text-gray-800" />
              </button>
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Book Free Consultation</h3>
              <form className="space-y-4">
                <input placeholder="Your Name" required className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:border-cyan-600 focus:outline-none" />
                <input type="email" placeholder="Email Address" required className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:border-cyan-600" />
                <input type="tel" placeholder="Phone Number" required className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:border-cyan-600" />
                <textarea placeholder="Your Message" rows={4} className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:border-cyan-600"></textarea>
                <button type="submit" className="w-full bg-gradient-to-r from-[#1e40af] to-cyan-600 text-white font-bold py-4 rounded-lg hover:shadow-xl transition">
                  Submit Request
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}