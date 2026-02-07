"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Menu, X, Phone, Calendar, ChevronDown, Search, ChevronRight, 
  Globe, Shield, Zap, Users, Mail, MapPin, Clock 
} from "lucide-react";

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<null | "services" | "about">(null);
  const [showForm, setShowForm] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formMessage, setFormMessage] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<null | "services" | "about">(null);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Services Dropdown Data
  const servicesColumns = [
    {
      title: "Connectivity",
      icon: <Globe className="w-4 h-4 text-cyan-500" />,
      items: [
        { name: "INTERNET", href: "/services/internet", desc: "High-speed broadband solutions" },
        { name: "LAN / WAN", href: "/services/lan-wan", desc: "Local & wide area networks" },
        { name: "Cloud WiFi", href: "/services/cloud-wifi", desc: "Enterprise wireless networks" },
      ],
    },
    {
      title: "Professional",
      icon: <Shield className="w-4 h-4 text-cyan-500" />,
      items: [
        { name: "Network Support", href: "/services/network-support", desc: "24/7 monitoring & support" },
        { name: "Data Center", href: "/services/data-center", desc: "Infrastructure & hosting" },
        { name: "Consultation", href: "/services/consultation", desc: "Expert IT strategy" },
        { name: "Call Center", href: "/services/call-center", desc: "Customer support solutions" },
      ],
    },
    {
      title: "Digital",
      icon: <Zap className="w-4 h-4 text-cyan-500" />,
      items: [
        { name: "Website Development", href: "/services/webdevlopment2", desc: "Custom web applications" },
        { name: "Social Media Marketing", href: "/services/social-media-marketing", desc: "Brand growth & engagement" },
        { name: "Logo & Branding", href: "/services/branding", desc: "Visual identity design" },
        { name: "Seo Services", href: "/services/seo", desc: "Search engine optimization" },
        { name: "Content Creation", href: "/services/content", desc: "Engaging media content" },
      ],
    },
  ];

  // About Us Dropdown Data
  const aboutColumns = [
    {
      title: "Company",
      icon: <Users className="w-4 h-4 text-cyan-500" />,
      items: [
        { name: "Our Story", href: "/aboutus#story", desc: "Journey & milestones" },
        { name: "Mission & Vision", href: "/aboutus#mission", desc: "Our purpose & future" },
        { name: "Core Values", href: "/aboutus#values", desc: "Principles we stand by" },
      ],
    },
    {
      title: "Team",
      icon: <Users className="w-4 h-4 text-cyan-500" />,
      items: [
        { name: "Leadership", href: "/aboutus#leadership", desc: "Meet our leaders" },
        { name: "Careers", href: "/careers", desc: "Join our team" },
      ],
    },
    {
      title: "More",
      icon: <Zap className="w-4 h-4 text-cyan-500" />,
      items: [
        { name: "Partners", href: "/partners", desc: "Strategic alliances" },
        { name: "Blog", href: "/blog", desc: "Insights & updates" },
      ],
    },
  ];

  return (
    <>
      {/* PREMIUM TOP BAR */}
      <div className="bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white py-2 border-b border-blue-900/30">
        <div className="max-w-7xl mx-auto px-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-cyan-400" />
              <span className="text-xs font-medium">Mon-Fri: 9AM-6PM</span>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-cyan-400" />
              <span className="text-xs font-medium">Lahore, Pakistan</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-cyan-400" />
              <a href="mailto:info@ultracomnetworks.com" className="text-xs hover:text-cyan-300 transition">
                info@ultracomnetworks.com
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowForm(true)}
              className="group flex items-center gap-2 text-xs font-medium px-4 py-1.5 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-full border border-cyan-500/30 hover:border-cyan-400/50 hover:from-cyan-600/30 hover:to-blue-600/30 transition-all duration-300"
            >
              <Calendar className="w-3.5 h-3.5 text-cyan-400 group-hover:scale-110 transition" />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent font-semibold">
                Free Consultation
              </span>
            </button>

            <a
              href="tel:+923111000929"
              className="group flex items-center gap-3 bg-gradient-to-r from-[#0ea5e9] via-[#3b82f6] to-[#0ea5e9] bg-[length:200%_100%] px-5 py-2.5 rounded-full text-xs font-semibold hover:bg-right transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/30 border border-blue-400/30"
            >
              <div className="relative">
                <Phone className="w-4 h-4 text-white group-hover:animate-pulse" />
                <div className="absolute -inset-1 bg-blue-400/20 rounded-full blur-sm group-hover:bg-blue-400/30 transition"></div>
              </div>
              <div className="leading-snug">
                <span className="block opacity-90 text-[10px] uppercase tracking-widest">Expert Support</span>
                <span className="font-bold text-sm tracking-wide">+92 311 1000929</span>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* PREMIUM MAIN NAVBAR */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-xl' : 'bg-white shadow-md'}`}>
        <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
          {/* Logo with Animation */}
          <Link href="/" className="group relative">
            <div className="relative overflow-hidden rounded-xl p-2">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <Image
                src="/logo.png"
                alt="Ultracom Networks"
                width={200}
                height={65}
                className="object-contain relative z-10 transition-transform group-hover:scale-105 duration-300"
                priority
              />
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-10 text-gray-800 font-medium">
            <Link 
              href="/" 
              className="relative group px-3 py-2 transition-all duration-300 hover:text-cyan-600 font-semibold"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 group-hover:w-full transition-all duration-300"></span>
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("services")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-2 px-3 py-2 group transition-all duration-300 hover:text-cyan-600 font-semibold">
                Services
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === "services" ? "rotate-180 text-cyan-600" : "text-gray-500"}`} />
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 group-hover:w-full transition-all duration-300"></span>
              </button>

              <AnimatePresence>
                {activeDropdown === "services" && (
                  <motion.div
                    initial={{ opacity: 0, y: 15, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 15, scale: 0.95 }}
                    transition={{ duration: 0.2, type: "spring", stiffness: 300 }}
                    className="absolute left-1/2 -translate-x-1/2 top-full mt-6 w-[900px] bg-white rounded-2xl shadow-2xl border border-gray-200/80 overflow-hidden z-50 before:absolute before:-top-4 before:left-0 before:w-full before:h-4 before:bg-transparent"
                  >
                    <div className="relative overflow-hidden">
                      {/* Background Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-white to-blue-50 opacity-50"></div>
                      
                      <div className="p-8 flex gap-10 relative z-10">
                        <div className="w-5/12">
                          <div className="relative overflow-hidden rounded-2xl shadow-xl group">
                            <Image 
                              src="/services.webp" 
                              alt="Services" 
                              width={400} 
                              height={260} 
                              className="rounded-2xl w-full h-60 object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          </div>
                          <h3 className="text-2xl font-bold text-gray-900 mt-6 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                            Complete IT + Digital Solutions
                          </h3>
                          <p className="text-sm text-gray-600 mt-3 leading-relaxed">
                            Enterprise-grade connectivity, networking infrastructure, and digital growth solutions under one roof.
                          </p>
                          <Link 
                            href="/services" 
                            className="mt-6 inline-flex items-center gap-2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold px-5 py-3 rounded-full hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 group"
                          >
                            Explore All Services
                            <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </div>
                        
                        <div className="w-7/12 grid grid-cols-3 gap-8">
                          {servicesColumns.map((col) => (
                            <div key={col.title} className="relative group/col">
                              <div className="flex items-center gap-2 mb-5">
                                <div className="p-2 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-lg">
                                  {col.icon}
                                </div>
                                <h4 className="font-bold text-gray-900 text-lg">{col.title}</h4>
                              </div>
                              <ul className="space-y-4">
                                {col.items.map((item) => (
                                  <li key={item.name}>
                                    <Link 
                                      href={item.href} 
                                      className="group/item block p-3 rounded-xl hover:bg-gradient-to-r hover:from-cyan-50 hover:to-blue-50 transition-all duration-300 border border-transparent hover:border-cyan-100"
                                    >
                                      <div className="font-semibold text-gray-800 group-hover/item:text-cyan-700 transition-colors">
                                        {item.name}
                                      </div>
                                      <p className="text-xs text-gray-500 mt-1">{item.desc}</p>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link 
              href="/blog" 
              className="relative group px-3 py-2 transition-all duration-300 hover:text-cyan-600 font-semibold"
            >
              Business Spotlight
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 group-hover:w-full transition-all duration-300"></span>
            </Link>

            {/* About Us Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("about")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-2 px-3 py-2 group transition-all duration-300 hover:text-cyan-600 font-semibold">
                About Us
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === "about" ? "rotate-180 text-cyan-600" : "text-gray-500"}`} />
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 group-hover:w-full transition-all duration-300"></span>
              </button>

              <AnimatePresence>
                {activeDropdown === "about" && (
                  <motion.div
                    initial={{ opacity: 0, y: 15, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 15, scale: 0.95 }}
                    transition={{ duration: 0.2, type: "spring", stiffness: 300 }}
                    className="absolute left-1/2 -translate-x-1/2 top-full mt-6 w-[900px] bg-white rounded-2xl shadow-2xl border border-gray-200/80 overflow-hidden z-50 before:absolute before:-top-4 before:left-0 before:w-full before:h-4 before:bg-transparent"
                  >
                    <div className="relative overflow-hidden">
                      {/* Background Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-white to-blue-50 opacity-50"></div>
                      
                      <div className="p-8 flex gap-10 relative z-10">
                        <div className="w-5/12">
                          <div className="relative overflow-hidden rounded-2xl shadow-xl group">
                            <Image 
                              src="/aboutus.jpg" 
                              alt="About" 
                              width={400} 
                              height={260} 
                              className="rounded-2xl w-full h-60 object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          </div>
                          <h3 className="text-2xl font-bold text-gray-900 mt-6 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                            About Ultracom Networks
                          </h3>
                          <p className="text-sm text-gray-600 mt-3 leading-relaxed">
                            Trusted partner in connectivity & digital transformation with 10+ years of excellence.
                          </p>
                          <Link 
                            href="/aboutus" 
                            className="mt-6 inline-flex items-center gap-2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold px-5 py-3 rounded-full hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 group"
                          >
                            Company Overview
                            <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </div>
                        
                        <div className="w-7/12 grid grid-cols-3 gap-8">
                          {aboutColumns.map((col) => (
                            <div key={col.title} className="relative group/col">
                              <div className="flex items-center gap-2 mb-5">
                                <div className="p-2 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-lg">
                                  {col.icon}
                                </div>
                                <h4 className="font-bold text-gray-900 text-lg">{col.title}</h4>
                              </div>
                              <ul className="space-y-4">
                                {col.items.map((item) => (
                                  <li key={item.name}>
                                    <Link 
                                      href={item.href} 
                                      className="group/item block p-3 rounded-xl hover:bg-gradient-to-r hover:from-cyan-50 hover:to-blue-50 transition-all duration-300 border border-transparent hover:border-cyan-100"
                                    >
                                      <div className="font-semibold text-gray-800 group-hover/item:text-cyan-700 transition-colors">
                                        {item.name}
                                      </div>
                                      <p className="text-xs text-gray-500 mt-1">{item.desc}</p>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link 
              href="/contactus" 
              className="relative group px-3 py-2 transition-all duration-300 hover:text-cyan-600 font-semibold"
            >
              Contact Us
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 group-hover:w-full transition-all duration-300"></span>
            </Link>

            {/* Search Button */}
            <button className="ml-6 p-3 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-full hover:shadow-md transition-all duration-300 group">
              <Search className="w-5 h-5 text-gray-600 group-hover:text-cyan-600 transition-colors" />
            </button>
          </div>

          {/* Premium Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden relative z-50 group"
            aria-label="Toggle menu"
          >
            <div className="relative w-12 h-12 flex flex-col justify-center items-center">
              <div className="relative w-8 h-8">
                <motion.span
                  className="absolute top-1 left-0 w-8 h-0.5 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full origin-center"
                  animate={mobileOpen ? { rotate: 45, top: "50%", translateY: "-50%" } : { rotate: 0, top: "25%" }}
                  transition={{ duration: 0.3, type: "spring" }}
                />
                <motion.span
                  className="absolute top-1/2 left-0 w-8 h-0.5 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full origin-center"
                  animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                  transition={{ duration: 0.2 }}
                />
                <motion.span
                  className="absolute bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full origin-center"
                  animate={mobileOpen ? { rotate: -45, bottom: "50%", translateY: "50%" } : { rotate: 0, bottom: "25%" }}
                  transition={{ duration: 0.3, type: "spring" }}
                />
              </div>
              
              {/* Animated Border */}
              <div className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-cyan-300/30 transition-all duration-300"></div>
              <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </button>
        </nav>
      </header>

      {/* PREMIUM MOBILE SIDEBAR */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop with Gradient */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 bg-gradient-to-br from-gray-900/80 via-blue-900/70 to-gray-900/80 backdrop-blur-sm z-40 lg:hidden"
            />

            {/* Sidebar Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed right-0 top-0 h-full w-11/12 max-w-md bg-gradient-to-b from-white via-white to-gray-50 shadow-2xl z-50 overflow-y-auto lg:hidden border-l border-gray-200"
            >
              <div className="flex flex-col h-full">
                {/* Header with Gradient */}
                <div className="relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-600"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  
                  <div className="relative flex items-center justify-between p-6 z-10">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-white/20 rounded-xl backdrop-blur-sm">
                        <Image 
                          src="/logo.png" 
                          alt="Ultracom Networks" 
                          width={140} 
                          height={45} 
                          className="object-contain brightness-0 invert"
                        />
                      </div>
                      <div className="text-white">
                        <div className="font-bold text-lg">Ultracom Networks</div>
                        <div className="text-xs opacity-80">Premium IT Solutions</div>
                      </div>
                    </div>
                    
                    <button 
                      onClick={() => setMobileOpen(false)} 
                      className="p-2 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm transition-all duration-300 hover:scale-110"
                    >
                      <X className="w-6 h-6 text-white" />
                    </button>
                  </div>
                </div>

                {/* Navigation Content */}
                <div className="flex-1 px-6 py-8 overflow-y-auto">
                  <div className="space-y-2">
                    <Link 
                      href="/" 
                      onClick={() => setMobileOpen(false)} 
                      className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-white to-gray-50 hover:from-cyan-50 hover:to-blue-50 border border-gray-100 hover:border-cyan-200 transition-all duration-300 group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-lg">
                          <div className="w-5 h-5 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full"></div>
                        </div>
                        <span className="font-bold text-gray-800 group-hover:text-cyan-700">Home</span>
                      </div>
                      <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-cyan-600" />
                    </Link>

                    {/* Services Accordion */}
                    <div className="rounded-xl overflow-hidden border border-gray-100">
                      <button
                        onClick={() => setOpenAccordion(openAccordion === "services" ? null : "services")}
                        className="w-full flex items-center justify-between p-4 bg-gradient-to-r from-white to-gray-50 hover:from-cyan-50 hover:to-blue-50 transition-all duration-300"
                      >
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-lg">
                            <Zap className="w-5 h-5 text-cyan-600" />
                          </div>
                          <span className="font-bold text-gray-800">Services</span>
                        </div>
                        <motion.div animate={{ rotate: openAccordion === "services" ? 180 : 0 }}>
                          <ChevronDown className="w-5 h-5 text-gray-600" />
                        </motion.div>
                      </button>
                      
                      <AnimatePresence>
                        {openAccordion === "services" && (
                          <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: "auto" }}
                            exit={{ height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="px-4 pb-6 space-y-4">
                              {servicesColumns.map((col, idx) => (
                                <div key={col.title} className="pt-4">
                                  <div className="flex items-center gap-2 mb-3">
                                    {col.icon}
                                    <h4 className="font-semibold text-gray-700">{col.title}</h4>
                                  </div>
                                  <ul className="space-y-2">
                                    {col.items.map((item) => (
                                      <li key={item.name}>
                                        <Link
                                          href={item.href}
                                          onClick={() => setMobileOpen(false)}
                                          className="block p-3 rounded-lg hover:bg-gradient-to-r hover:from-cyan-50 hover:to-blue-50 transition-all duration-200"
                                        >
                                          <div className="font-medium text-gray-800">{item.name}</div>
                                          <div className="text-xs text-gray-500 mt-1">{item.desc}</div>
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                              
                              <Link 
                                href="/services" 
                                onClick={() => setMobileOpen(false)}
                                className="block mt-6 p-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold text-center rounded-xl hover:shadow-lg transition-all duration-300"
                              >
                                View All Services
                              </Link>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    <Link 
                      href="/blog" 
                      onClick={() => setMobileOpen(false)} 
                      className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-white to-gray-50 hover:from-cyan-50 hover:to-blue-50 border border-gray-100 hover:border-cyan-200 transition-all duration-300 group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-lg">
                          <div className="w-5 h-5 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full"></div>
                        </div>
                        <span className="font-bold text-gray-800 group-hover:text-cyan-700">Business Spotlight</span>
                      </div>
                      <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-cyan-600" />
                    </Link>

                    {/* About Us Accordion */}
                    <div className="rounded-xl overflow-hidden border border-gray-100">
                      <button
                        onClick={() => setOpenAccordion(openAccordion === "about" ? null : "about")}
                        className="w-full flex items-center justify-between p-4 bg-gradient-to-r from-white to-gray-50 hover:from-cyan-50 hover:to-blue-50 transition-all duration-300"
                      >
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-lg">
                            <Users className="w-5 h-5 text-cyan-600" />
                          </div>
                          <span className="font-bold text-gray-800">About Us</span>
                        </div>
                        <motion.div animate={{ rotate: openAccordion === "about" ? 180 : 0 }}>
                          <ChevronDown className="w-5 h-5 text-gray-600" />
                        </motion.div>
                      </button>
                      
                      <AnimatePresence>
                        {openAccordion === "about" && (
                          <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: "auto" }}
                            exit={{ height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="px-4 pb-6 space-y-4">
                              {aboutColumns.map((col, idx) => (
                                <div key={col.title} className="pt-4">
                                  <div className="flex items-center gap-2 mb-3">
                                    {col.icon}
                                    <h4 className="font-semibold text-gray-700">{col.title}</h4>
                                  </div>
                                  <ul className="space-y-2">
                                    {col.items.map((item) => (
                                      <li key={item.name}>
                                        <Link
                                          href={item.href}
                                          onClick={() => setMobileOpen(false)}
                                          className="block p-3 rounded-lg hover:bg-gradient-to-r hover:from-cyan-50 hover:to-blue-50 transition-all duration-200"
                                        >
                                          <div className="font-medium text-gray-800">{item.name}</div>
                                          <div className="text-xs text-gray-500 mt-1">{item.desc}</div>
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    <Link 
                      href="/contactus" 
                      onClick={() => setMobileOpen(false)} 
                      className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-white to-gray-50 hover:from-cyan-50 hover:to-blue-50 border border-gray-100 hover:border-cyan-200 transition-all duration-300 group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-lg">
                          <Mail className="w-5 h-5 text-cyan-600" />
                        </div>
                        <span className="font-bold text-gray-800 group-hover:text-cyan-700">Contact Us</span>
                      </div>
                      <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-cyan-600" />
                    </Link>
                  </div>

                  {/* Mobile CTA Section */}
                  <div className="mt-12 p-6 rounded-2xl bg-gradient-to-br from-cyan-50 via-white to-blue-50 border border-cyan-100">
                    <h3 className="font-bold text-gray-800 text-lg mb-4">Need Immediate Support?</h3>
                    <a
                      href="tel:+923111000929"
                      className="flex items-center justify-center gap-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold py-4 rounded-xl hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300 mb-4"
                      onClick={() => setMobileOpen(false)}
                    >
                      <Phone className="w-5 h-5" />
                      Call Now: +92 311 1000929
                    </a>
                    <button
                      onClick={() => {
                        setMobileOpen(false);
                        setShowForm(true);
                      }}
                      className="w-full flex items-center justify-center gap-2 bg-white text-cyan-700 font-semibold py-3 rounded-xl border border-cyan-200 hover:border-cyan-400 hover:bg-cyan-50 transition-all duration-300"
                    >
                      <Calendar className="w-4 h-4" />
                      Schedule Free Consultation
                    </button>
                  </div>
                </div>

                {/* Footer */}
                <div className="p-6 border-t border-gray-100 text-center">
                  <div className="text-sm text-gray-500 mb-2">© 2025 Ultracom Networks</div>
                  <div className="text-xs text-gray-400">Premium IT & Digital Solutions Provider</div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* PREMIUM CONSULTATION FORM MODAL */}
      <AnimatePresence>
        {showForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-gradient-to-br from-gray-900/90 via-blue-900/80 to-gray-900/90 backdrop-blur-md flex items-center justify-center z-[60] p-4"
            onClick={() => setShowForm(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-gradient-to-br from-white via-white to-gray-50 rounded-3xl shadow-2xl p-8 max-w-md w-full relative overflow-hidden border border-gray-200"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Background Design Elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-cyan-500/10 to-blue-500/10 rounded-full translate-y-12 -translate-x-12"></div>
              
              <button 
                onClick={() => setShowForm(false)} 
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 transition-all duration-300 hover:scale-110"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
              
              <div className="relative z-10">
                <div className="text-center mb-2">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl mb-4">
                    <Calendar className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Book Free Consultation</h3>
                  <p className="text-sm text-gray-600 mb-8">Our experts will contact you within 24 hours</p>
                </div>
                
                <form 
                  onSubmit={async (e) => {
                    e.preventDefault();
                    setFormStatus("loading");
                    setFormMessage("");

                    const formData = new FormData(e.currentTarget);
                    const data = {
                      name: formData.get("consultation_name") as string,
                      email: formData.get("consultation_email") as string,
                      phone: formData.get("consultation_phone") as string,
                      message: formData.get("consultation_message") as string,
                      service: "Free Consultation"
                    };

                    try {
                      const res = await fetch("/api/form", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(data),
                      });

                      const result = await res.json();

                      if (res.ok) {
                        setFormStatus("success");
                        setFormMessage("✓ Consultation request sent! We'll contact you within 24 hours.");
                        (e.target as HTMLFormElement).reset();
                        setTimeout(() => {
                          setShowForm(false);
                          setFormStatus("idle");
                        }, 3000);
                      } else {
                        setFormStatus("error");
                        setFormMessage(result.error || "Failed to send request. Please try again.");
                      }
                    } catch (err) {
                      setFormStatus("error");
                      setFormMessage("Network error. Please try again.");
                    }
                  }}
                  className="space-y-4"
                >
                  <div className="space-y-4">
                    <input 
                      name="consultation_name" 
                      placeholder="Your Full Name" 
                      required 
                      className="w-full px-5 py-3.5 border border-gray-300 rounded-xl focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 bg-white/50 backdrop-blur-sm" 
                    />
                    <input 
                      type="email" 
                      name="consultation_email" 
                      placeholder="Email Address" 
                      required 
                      className="w-full px-5 py-3.5 border border-gray-300 rounded-xl focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 bg-white/50 backdrop-blur-sm" 
                    />
                    <input 
                      type="tel" 
                      name="consultation_phone" 
                      placeholder="Phone Number" 
                      required 
                      className="w-full px-5 py-3.5 border border-gray-300 rounded-xl focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 bg-white/50 backdrop-blur-sm" 
                    />
                    <textarea 
                      name="consultation_message" 
                      placeholder="Tell us about your requirements..." 
                      rows={4} 
                      required
                      className="w-full px-5 py-3.5 border border-gray-300 rounded-xl focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 bg-white/50 backdrop-blur-sm resize-none"
                    ></textarea>
                  </div>
                  
                  <AnimatePresence>
                    {(formStatus === "success" || formStatus === "error") && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className={`p-4 rounded-xl border text-center text-sm font-medium ${formStatus === "success" ? "bg-green-50 border-green-200 text-green-700" : "bg-red-50 border-red-200 text-red-700"}`}
                      >
                        {formMessage}
                      </motion.div>
                    )}
                  </AnimatePresence>
                  
                  <button 
                    type="submit" 
                    disabled={formStatus === "loading"}
                    className="w-full bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-600 bg-[length:200%_100%] text-white font-bold py-4 rounded-xl hover:bg-right hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed group"
                  >
                    {formStatus === "loading" ? (
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        <span>Processing...</span>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center gap-2">
                        <span>Submit Request</span>
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    )}
                  </button>
                </form>
                
                <p className="text-center text-xs text-gray-500 mt-6">
                  By submitting, you agree to our Privacy Policy
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}