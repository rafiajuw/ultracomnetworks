"use client";

import Image from "next/image";
import { Star, Quote, Sparkles, TrendingUp, Award, Zap, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export default function UltracomTestimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");

  // Enhanced client testimonials data
  const clients = [
    {
      id: 1,
      name: "Bilal Ahmed",
      role: "IT Manager",
      company: "TechVision Solutions",
      text: "Ultracom Networks has been a game changer for our office. Their enterprise connectivity solution provided 99.9% uptime and reduced our IT overhead by 40%. The support team is exceptional.",
      avatar: "/clients/b1.webp",
      service: "Enterprise Internet",
      rating: 5,
      duration: "2+ Years",
      results: ["40% cost reduction", "99.9% uptime", "24/7 support"],
      category: "connectivity"
    },
    {
      id: 2,
      name: "Sara Khan",
      role: "Marketing Director",
      company: "Beauty Glow",
      text: "Our website developed by Ultracom increased conversion rates by 210%. The animations, performance optimization, and SEO implementation were beyond expectations. Truly a premium experience.",
      avatar: "/clients/r1.webp",
      service: "Website Development",
      rating: 5,
      duration: "1 Year",
      results: ["210% conversion increase", "95+ PageSpeed score", "Mobile-first design"],
      category: "digital"
    },
    {
      id: 3,
      name: "Zain Ali",
      role: "Senior Developer",
      company: "Freelance",
      text: "As a remote developer, I need rock-solid internet. Ultracom's fiber connection gives me <10ms latency and zero downtime. It's transformed how I work with international clients.",
      avatar: "/clients/r2.webp",
      service: "Home Internet Pro",
      rating: 5,
      duration: "18 Months",
      results: ["<10ms latency", "Zero downtime", "24/7 reliability"],
      category: "connectivity"
    },
    {
      id: 4,
      name: "Dr. Amna Qureshi",
      role: "Clinic Director",
      company: "Qureshi Dental Care",
      text: "Ultracom helped digitize our entire clinic operations. From cloud records to telemedicine, their solutions are secure, HIPAA-compliant, and incredibly reliable.",
      avatar: "/clients/b2.webp",
      service: "Healthcare IT Solutions",
      rating: 5,
      duration: "2 Years",
      results: ["100% digital shift", "HIPAA compliant", "Secure cloud"],
      category: "enterprise"
    },
    {
      id: 5,
      name: "Usman Tariq",
      role: "CEO",
      company: "Tariq Traders",
      text: "Our e-commerce platform built by Ultracom handles 10,000+ daily visitors seamlessly. The attention to performance, security, and user experience is unmatched.",
      avatar: "/clients/b1.webp",
      service: "E-commerce Development",
      rating: 5,
      duration: "1.5 Years",
      results: ["10K+ daily visitors", "99.95% uptime", "PCI DSS compliant"],
      category: "digital"
    },
    {
      id: 6,
      name: "Maria Rodriguez",
      role: "Operations Head",
      company: "Global Logistics Inc.",
      text: "Ultracom's network infrastructure allowed us to connect 5 offices seamlessly. Their WAN solution improved inter-office communication by 300%.",
      avatar: "/clients/r1.webp",
      service: "WAN Solutions",
      rating: 5,
      duration: "3 Years",
      results: ["5 offices connected", "300% efficiency", "Scalable network"],
      category: "enterprise"
    }
  ];

  const filteredClients = activeCategory === "all" 
    ? clients 
    : clients.filter(client => client.category === activeCategory);

  const categories = [
    { id: "all", label: "All Services", count: clients.length },
    { id: "connectivity", label: "Connectivity", count: clients.filter(c => c.category === "connectivity").length },
    { id: "digital", label: "Digital", count: clients.filter(c => c.category === "digital").length },
    { id: "enterprise", label: "Enterprise", count: clients.filter(c => c.category === "enterprise").length },
  ];

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -380, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 380, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (!container || isPaused) return;

    const autoScroll = () => {
      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        container.scrollBy({ left: 400, behavior: "smooth" });
      }
    };

    const interval = setInterval(autoScroll, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const getCategoryColor = (category: string) => {
    switch(category) {
      case "connectivity": return "from-cyan-500 to-blue-500";
      case "digital": return "from-purple-500 to-pink-500";
      case "enterprise": return "from-green-500 to-emerald-500";
      default: return "from-cyan-500 to-blue-500";
    }
  };

  return (
    <section className="relative bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white py-32 overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-tr from-blue-500/10 via-cyan-500/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>
      </div>

      {/* Animated Gradient Border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          {/* Badge */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 px-4 py-2 rounded-full text-sm font-semibold border border-cyan-500/30 mb-6"
          >
            <Sparkles className="w-4 h-4" />
            TRUSTED BY 500+ ENTERPRISES
          </motion.div>

          {/* Main Heading */}
          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-6">
            <span className="block bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent">
              Client Success Stories
            </span>
            <span className="block text-cyan-400 text-4xl lg:text-5xl mt-4">
              Trusted Across Pakistan
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-slate-300 mt-8 max-w-4xl mx-auto leading-relaxed tracking-wide"
          >
            Discover how businesses transform with Ultracom's premium solutions. 
            <span className="block text-cyan-300 font-medium mt-2">
              Average rating: 4.9/5 across all services
            </span>
          </motion.p>
        </motion.div>

        {/* Categories Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-5 py-2.5 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 ${
                activeCategory === category.id
                  ? "bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg shadow-cyan-500/30"
                  : "bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white"
              }`}
            >
              {category.label}
              <span className={`text-xs px-2 py-1 rounded-full ${
                activeCategory === category.id 
                  ? "bg-white/20" 
                  : "bg-white/10"
              }`}>
                {category.count}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mb-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "50+", label: "Happy Clients", icon: TrendingUp },
              { value: "4.9/5", label: "Average Rating", icon: Star },
              { value: "99.8%", label: "Satisfaction Rate", icon: Award },
              { value: "24/7", label: "Support Available", icon: Zap },
            ].map((stat, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-cyan-500/30 transition-all duration-300 group">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg group-hover:from-cyan-500/30 group-hover:to-blue-500/30">
                    <stat.icon className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div className="text-3xl font-bold text-white">{stat.value}</div>
                </div>
                <div className="text-sm text-slate-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none z-20">
            <button
              onClick={scrollLeft}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              className="pointer-events-auto p-3 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full shadow-2xl hover:shadow-cyan-500/30 hover:scale-110 transition-all duration-300 ml-4"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={scrollRight}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              className="pointer-events-auto p-3 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full shadow-2xl hover:shadow-cyan-500/30 hover:scale-110 transition-all duration-300 mr-4"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>

          {/* Testimonials Container */}
          <div
            ref={scrollRef}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="flex overflow-x-auto scrollbar-hide gap-8 pb-10 snap-x snap-mandatory scroll-smooth px-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <AnimatePresence mode="wait">
              {filteredClients.map((client, index) => (
                <motion.div
                  key={client.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ 
                    y: -10,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                  className="flex-none w-96 lg:w-[420px] bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-8 snap-center hover:shadow-cyan-500/20 hover:border-cyan-500/30 transition-all duration-500 group relative overflow-hidden"
                >
                  {/* Background Glow */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${getCategoryColor(client.category)}/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  {/* Quote Icon */}
                  <div className="relative z-10">
                    <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl blur-xl"></div>
                    <Quote className="w-12 h-12 text-cyan-400 mb-6 relative z-10 opacity-90" />

                    {/* Testimonial Text */}
                    <p className="text-gray-100 text-lg leading-relaxed mb-8 italic relative z-10 min-h-[120px]">
                      "{client.text}"
                    </p>

                    {/* Results Badges */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {client.results.map((result, i) => (
                        <span key={i} className="px-3 py-1.5 bg-white/10 rounded-lg text-xs font-medium text-cyan-300">
                          {result}
                        </span>
                      ))}
                    </div>

                    {/* Client Info */}
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur-md opacity-50 group-hover:opacity-70 transition-opacity"></div>
                        <div className="w-16 h-16 rounded-2xl ring-4 ring-cyan-500/30 overflow-hidden flex-shrink-0 relative z-10">
                          <Image
                            src={client.avatar || "/avatar-placeholder.jpg"}
                            alt={client.name}
                            width={64}
                            height={64}
                            className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                      </div>

                      <div>
                        <h4 className="font-bold text-white text-lg">{client.name}</h4>
                        <p className="text-cyan-300 font-semibold text-sm">{client.role}</p>
                        <p className="text-sm text-gray-300">{client.company}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-xs text-slate-400">{client.duration}</span>
                          <div className="w-1 h-1 bg-slate-500 rounded-full"></div>
                          <span className={`text-xs font-bold bg-gradient-to-r ${getCategoryColor(client.category)} bg-clip-text text-transparent`}>
                            {client.service}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center justify-between mt-6 pt-6 border-t border-white/10">
                      <div className="flex gap-1">
                        {[...Array(client.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-cyan-400 text-cyan-400" />
                        ))}
                      </div>
                      <div className="text-sm text-slate-400 font-medium">
                        Verified Customer
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-12">
          <div className="flex items-center gap-2">
            {filteredClients.slice(0, 4).map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (scrollRef.current) {
                    scrollRef.current.scrollTo({ left: index * 400, behavior: 'smooth' });
                  }
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index ? 'w-8 bg-gradient-to-r from-cyan-500 to-blue-500' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-cyan-500/10 backdrop-blur-sm rounded-3xl p-8 border border-cyan-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who trust Ultracom Networks for their digital transformation journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold rounded-xl hover:from-cyan-500 hover:to-blue-500 hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300 flex items-center gap-3 group">
                Get Free Consultation
                <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-xl border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-300">
                View All Case Studies
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}