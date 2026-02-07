"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { 
  Shield, 
  Zap, 
  Users, 
  Globe, 
  ArrowRight, 
  Award, 
  BarChart3,
  Server
} from "lucide-react";
import { useState } from "react";

export default function WhoWeAreSection() {
  const [hoveredIcon, setHoveredIcon] = useState<number | null>(null);

  const coreValues = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Reliability",
      description: "99.9% uptime guarantee",
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Innovation",
      description: "Cutting-edge solutions",
      color: "from-blue-500 to-purple-500"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Partnership",
      description: "Client-first approach",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Excellence",
      description: "Award-winning service",
      color: "from-green-500 to-emerald-500"
    }
  ];

  const stats = [
    { value: "10+", label: "Years Experience", icon: <Award className="w-4 h-4" /> },
    { value: "500+", label: "Enterprise Clients", icon: <Users className="w-4 h-4" /> },
    { value: "24/7", label: "Support", icon: <Server className="w-4 h-4" /> },
    { value: "99.9%", label: "Uptime", icon: <BarChart3 className="w-4 h-4" /> },
  ];

  return (
    <section className="relative w-full py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-cyan-50"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500"></div>
      <div className="absolute -right-32 top-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      <div className="absolute -left-32 bottom-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, #000 1px, transparent 1px),
                          linear-gradient(to bottom, #000 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 px-6 lg:px-10">
          
          {/* LEFT TEXT AREA - Enhanced */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col justify-center space-y-10"
          >
            {/* Section Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-50 to-blue-50 text-cyan-700 px-4 py-2.5 rounded-full text-sm font-bold border border-cyan-200 w-fit"
            >
              <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></div>
              ABOUT ULTRACOM NETWORKS
            </motion.div>

            {/* Main Heading with Gradient */}
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                <span className="block text-slate-900">Building The</span>
                <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Digital Backbone
                </span>
                <span className="block text-slate-900 mt-2">Of Pakistan</span>
              </h1>
              
              <p className="text-xl text-slate-600 leading-relaxed mb-6">
                As a leading enterprise network solutions provider, we specialize in designing, 
                deploying, and managing mission-critical infrastructure that powers business 
                growth across Pakistan.
              </p>
              
              <p className="text-lg text-slate-600 leading-relaxed">
                Our team of certified engineers combines technical expertise with strategic 
                insight to deliver reliable, scalable, and secure network solutions that 
                drive digital transformation.
              </p>
            </div>

            {/* Core Values Grid */}
            <div className="grid grid-cols-2 gap-4">
              {coreValues.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  onMouseEnter={() => setHoveredIcon(index)}
                  onMouseLeave={() => setHoveredIcon(null)}
                  className={`p-4 rounded-2xl bg-white border border-slate-200 hover:border-cyan-200 transition-all duration-300 cursor-pointer ${
                    hoveredIcon === index ? 'shadow-xl shadow-cyan-500/10' : 'shadow-sm'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <motion.div
                      animate={hoveredIcon === index ? { scale: 1.1 } : { scale: 1 }}
                      className={`p-2 bg-gradient-to-br ${value.color}/10 rounded-xl`}
                    >
                      <div className={`bg-gradient-to-br ${value.color} bg-clip-text text-transparent`}>
                        {value.icon}
                      </div>
                    </motion.div>
                    <h3 className="font-bold text-slate-800">{value.title}</h3>
                  </div>
                  <p className="text-sm text-slate-500">{value.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="grid grid-cols-4 gap-4 pt-6 border-t border-slate-200"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</div>
                  <div className="text-xs text-slate-500 flex items-center justify-center gap-1">
                    {stat.icon}
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Link
                href="/about"
                className="group relative px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:shadow-cyan-500/30 hover:from-cyan-500 hover:to-blue-500 transition-all duration-300 flex items-center justify-center gap-3"
              >
                <span>Discover Our Story</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                <div className="absolute -inset-1 bg-cyan-500/20 rounded-xl blur-md group-hover:blur-xl transition-all"></div>
              </Link>
              
              <Link
                href="/careers"
                className="px-8 py-4 bg-white text-slate-700 font-bold rounded-xl border-2 border-slate-300 hover:border-cyan-400 hover:bg-cyan-50 transition-all duration-300 flex items-center justify-center gap-3 group"
              >
                <Users className="w-5 h-5 text-cyan-600 group-hover:scale-110 transition-transform" />
                <span>Join Our Team</span>
              </Link>
            </motion.div>
          </motion.div>

          {/* RIGHT IMAGE AREA - Enhanced */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            {/* Main Image Container */}
            <div className="relative w-full h-[500px] rounded-3xl overflow-hidden shadow-2xl group">
              <Image
                src="/whoweare.jpg"
                alt="Ultracom Networks Team"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Floating Content */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute bottom-6 left-6 right-6"
              >
                <div className="bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/50">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center">
                        <Shield className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-slate-500">Certified Professionals</div>
                      <div className="font-bold text-slate-800 text-lg">Enterprise Network Specialists</div>
                      <div className="text-sm text-slate-600">CCNA, CCNP, PMP Certified</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Floating Certification Badges */}
            <motion.div
              initial={{ x: -20, y: -20, opacity: 0, rotate: -5 }}
              whileInView={{ x: 0, y: 0, opacity: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, type: "spring" }}
              className="absolute -left-6 -top-6 bg-gradient-to-br from-white to-slate-50 p-5 rounded-2xl shadow-2xl border border-slate-200/50 w-56"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-gradient-to-br from-green-100 to-green-50 rounded-lg">
                  <Award className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <div className="font-bold text-slate-800">Industry Recognized</div>
                  <div className="text-xs text-slate-600">PTA Certified Provider</div>
                </div>
              </div>
              <div className="text-sm text-slate-600">Official licensed network operator in Pakistan</div>
            </motion.div>

            {/* Floating Tech Badge */}
            <motion.div
              initial={{ x: 20, y: 20, opacity: 0, rotate: 5 }}
              whileInView={{ x: 0, y: 0, opacity: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, type: "spring" }}
              className="absolute -right-6 -bottom-6 bg-gradient-to-br from-white to-slate-50 p-5 rounded-2xl shadow-2xl border border-slate-200/50 w-56"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-lg">
                  <Server className="w-5 h-5 text-cyan-600" />
                </div>
                <div>
                  <div className="font-bold text-slate-800">Latest Technology</div>
                  <div className="text-xs text-slate-600">Fiber, 5G, SD-WAN</div>
                </div>
              </div>
              <div className="text-sm text-slate-600">Cutting-edge network infrastructure solutions</div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2 }}
          className="mt-24 grid grid-cols-2 lg:grid-cols-4 gap-6 px-6 lg:px-10"
        >
          {[
            { label: "Enterprise Security", value: "Military-grade encryption" },
            { label: "Network Coverage", value: "Nationwide reach" },
            { label: "Support Response", value: "<15 minutes average" },
            { label: "Client Satisfaction", value: "98% retention rate" },
          ].map((item, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-slate-200/50 hover:bg-white hover:border-cyan-200 transition-all duration-300 group"
            >
              <div className="text-sm text-slate-500 mb-2">{item.label}</div>
              <div className="text-xl font-bold text-slate-900 group-hover:bg-gradient-to-r group-hover:from-cyan-600 group-hover:to-blue-600 group-hover:bg-clip-text group-hover:text-transparent transition-all">
                {item.value}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}