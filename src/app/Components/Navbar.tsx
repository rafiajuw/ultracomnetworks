"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Menu, X } from "lucide-react";

export default function Navbar() {
  const [active, setActive] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const menu = [
    { name: "Home", href: "/" },
    {
      name: "About Us",
      mainLink: { name: "About Us", href: "/aboutus" },
      introTitle: "Reliable Network Ecosystems",
      introText: "Secure, scalable connectivity that powers your success.",
      image: "/aboutus.jpg",
      items: [
        { name: "Who We Are", href: "/aboutus#who-we-are" },
        { name: "Our Mission", href: "/aboutus#our-mission" },
        { name: "Our Location", href: "/aboutus#our-location" },
      ],
    },
    {
      name: "Services",
      mainLink: { name: "All Services", href: "/services" },
      introTitle: "Comprehensive IT Solutions",
      introText: "Explore our wide range of network and managed services.",
      image: "/services.webp",
      columns: [
        {
          title: "Connectivity Services",
          items: [
            { name: "INTERNET", href: "/services/internet" },
            { name: "LAN/WAN", href: "/services/lan-wan" },
            { name: "CLOUD WIFI", href: "/services/cloud-wifi" },
          ],
        },
        {
          title: "Professional Services",
          items: [
            { name: "NETWORK SUPPORT", href: "/services/network-support" },
            { name: "DATA CENTER", href: "/services/data-center" },
            { name: "CONSULTATION", href: "/services/consultation" },
          ],
        },
        {
          title: "Managed Services",
          items: [
            { name: "CALL CENTER", href: "/services/call-center" },
            { name: "PBX Installation", href: "/services/pbx-installation" },
          ],
        },
      ],
    },
    {
      name: "Web Services",
      mainLink: { name: "All Digital Solutions", href: "/webdevlopment2" },
      introTitle: "Digital Growth Solutions",
      introText: "Web, marketing, and branding solutions for your business.",
      image: "/internet.jpeg",
      columns: [
        {
          title: "Digital Services",
          items: [
            { name: "Website Development", href: "/webdevlopment2#website" },
            { name: "Social Media Marketing", href: "/webdevlopment2#Social" },
            { name: "Logo and Branding", href: "/webdevlopment2#Brand" },
          ],
        },
      ],
    },
    { name: "Blog", href: "/blog" },
    { name: "Contact Us", href: "/contactus" },
  ];

  return (
    <>
      {/* DESKTOP NAVBAR */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200 shadow-sm">
        <nav className="max-w-7xl mx-auto h-24 px-6 lg:px-10 flex items-center justify-between">

          {/* LOGO */}
          <Link href="/" className="flex items-center gap-4">
            <div className="relative w-36 h-16 bg-white border border-gray-300 rounded-lg shadow-sm overflow-hidden">
              <Image src="/logo.png" alt="Ultracom Networks" fill className="object-contain p-3" />
            </div>
            <span className="text-lg font-semibold text-[#0a2640]"></span>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center gap-10">
            {menu.map((item, idx) => (
              <div
                key={idx}
                className="relative"
                onMouseEnter={() => item.columns || item.items ? setActive(idx) : null}
                onMouseLeave={() => setActive(null)}
              >
                {item.href ? (
                  <Link
                    href={item.href}
                    className="group relative text-[16px] font-medium text-[#102b46] hover:text-[#0072CE] pb-1 transition-all"
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#0072CE] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                  </Link>
                ) : (
                  <button className="group flex items-center gap-1 text-[16px] font-medium text-[#102b46] hover:text-[#0072CE] pb-1 transition-all">
                    {item.name}
                    <motion.div
                      animate={{ rotate: active === idx ? 180 : 0 }}
                      className="w-3 h-3 border-r-2 border-b-2 border-current mt-1"
                    />
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#0072CE] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                  </button>
                )}

                {/* MEGA DROPDOWN */}
                <AnimatePresence>
                  {active === idx && (item.columns || item.items) && (
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 15 }}
                      className="absolute left-1/2 -translate-x-1/2 mt-6 w-[1100px] max-w-[95vw] bg-white/95 backdrop-blur-xl border border-gray-200 rounded-3xl shadow-2xl p-8 flex gap-10"
                    >
                      {/* LEFT IMAGE + INTRO + MAIN BUTTON */}
                      <div className="w-1/3 flex flex-col gap-4">
                        <div className="relative h-48 rounded-2xl overflow-hidden bg-linear-to-br from-blue-50 to-cyan-50">
                          <Image
                            src={item.image || "/internet.jpeg"}
                            alt={item.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        {item.introTitle && item.introText && (
                          <div className="mt-2">
                            <h4 className="text-base font-bold text-[#0072CE]">{item.introTitle}</h4>
                            <p className="text-sm text-gray-600 mt-1">{item.introText}</p>
                          </div>
                        )}

                        {/* MAIN BUTTON */}
                        {item.mainLink && (
                          <Link
                            href={item.mainLink.href}
                            className="mt-4 inline-flex items-center justify-center gap-2 bg-linear-to-r from-blue-600 to-cyan-600 text-white px-4 py-2 rounded-lg font-semibold hover:shadow-lg transition"
                            onClick={() => setActive(null)}
                          >
                            {item.mainLink.name} <ChevronRight className="w-4 h-4" />
                          </Link>
                        )}
                      </div>

                      {/* RIGHT CONTENT */}
                      <div className="w-2/3 grid grid-cols-3 gap-6 text-sm">
                        {item.columns ? (
                          item.columns.map((col) => (
                            <div key={col.title}>
                              <h4 className="text-base font-bold text-[#0072CE] mb-3">{col.title}</h4>
                              <ul className="space-y-2">
                                {col.items.map((sub) => (
                                  <li key={sub.name}>
                                    <Link
                                      href={sub.href}
                                      className="block py-1 text-gray-800 hover:text-[#0072CE] font-medium transition flex items-center gap-2 hover:translate-x-1"
                                      onClick={() => setActive(null)}
                                    >
                                      <span className="w-2 h-2 bg-[#0072CE] rounded-full" />
                                      {sub.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))
                        ) : item.items ? (
                          <ul className="space-y-2">
                            {item.items.map((sub) => (
                              <li key={sub.name}>
                                <Link
                                  href={sub.href}
                                  className="block py-1 text-gray-800 hover:text-[#0072CE] font-medium transition flex items-center gap-2 hover:translate-x-1"
                                  onClick={() => setActive(null)}
                                >
                                  <span className="w-2 h-2 bg-[#0072CE] rounded-full" />
                                  {sub.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        ) : null}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* MOBILE MENU BUTTON */}
          <button onClick={() => setMobileOpen(true)} className="lg:hidden">
            <Menu className="w-8 h-8 text-[#102b46]" />
          </button>
        </nav>
      </header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            className="fixed inset-0 z-50 bg-white lg:hidden"
          >
            <div className="flex justify-between items-center p-6 border-b">
              <h3 className="text-2xl font-bold">Menu</h3>
              <button onClick={() => setMobileOpen(false)}>
                <X className="w-8 h-8" />
              </button>
            </div>
            <div className="p-6 space-y-6 text-sm">
              {menu.map((item, idx) => (
                <div key={idx}>
                  {item.href ? (
                    <Link href={item.href} className="block text-lg font-medium py-3" onClick={() => setMobileOpen(false)}>
                      {item.name}
                    </Link>
                  ) : (
                    <details className="group">
                      <summary className="flex justify-between items-center text-lg font-bold text-[#0072CE] cursor-pointer py-3">
                        {item.name}
                        <span className="group-open:rotate-180 transition">↓</span>
                      </summary>
                      <div className="mt-4 pl-6 space-y-3">
                        {item.mainLink && (
                          <Link href={item.mainLink.href} className="block font-bold text-[#0072CE] py-2" onClick={() => setMobileOpen(false)}>
                            {item.mainLink.name} →
                          </Link>
                        )}
                        {(item.items || item.columns?.flatMap(c => c.items))?.map((sub) => (
                          <Link key={sub.name} href={sub.href} className="block py-2 text-gray-700" onClick={() => setMobileOpen(false)}>
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    </details>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
