"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowRight, 
  Globe, 
  Shield, 
  Zap, 
  Code2, 
  Smartphone, 
  CheckCircle,
  TrendingUp
} from "lucide-react";

export default function WebsiteIntroSection() {
  const features = [
    { icon: <Shield className="w-5 h-5" />, text: "Enterprise Security" },
    { icon: <Zap className="w-5 h-5" />, text: "Blazing Fast" },
    { icon: <Globe className="w-5 h-5" />, text: "SEO Optimized" },
    { icon: <Smartphone className="w-5 h-5" />, text: "Mobile First" },
  ];

  return (
    <section className="relative w-full py-32 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-cyan-50"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500"></div>
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 px-6 lg:px-10">
          
          {/* TEXT SIDE - Enhanced */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col justify-center space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-50 to-blue-50 text-cyan-700 px-4 py-2 rounded-full text-sm font-semibold border border-cyan-200 w-fit"
            >
              <Code2 className="w-4 h-4" />
              Premium Web Development
            </motion.div>

            {/* Main Heading with Gradient */}
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                <span className="block text-slate-900">We Design & Develop</span>
                <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Modern Digital Experiences
                </span>
              </h1>
              
              <p className="text-xl text-slate-600 leading-relaxed">
                Transform your digital presence with enterprise-grade websites built on cutting-edge 
                technologies. We combine stunning design with robust functionality to create websites 
                that not only look exceptional but perform exceptionally.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.text}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/50 backdrop-blur-sm border border-slate-200/50 hover:border-cyan-200 hover:bg-white transition-all duration-300 group"
                >
                  <div className="p-2 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-lg group-hover:from-cyan-200 group-hover:to-blue-200 transition-all">
                    <div className="text-cyan-600">{feature.icon}</div>
                  </div>
                  <span className="font-medium text-slate-700">{feature.text}</span>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-8 pt-4"
            >
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">99%</div>
                <div className="text-sm text-slate-500">Client Satisfaction</div>
              </div>
              <div className="h-12 w-px bg-gradient-to-b from-transparent via-slate-300 to-transparent"></div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">2.5x</div>
                <div className="text-sm text-slate-500">Faster Load Times</div>
              </div>
              <div className="h-12 w-px bg-gradient-to-b from-transparent via-slate-300 to-transparent"></div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">24/7</div>
                <div className="text-sm text-slate-500">Support</div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Link
                href="/website-development"
                className="group relative px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:shadow-cyan-500/30 hover:from-cyan-500 hover:to-blue-500 transition-all duration-300 flex items-center justify-center gap-3"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                <div className="absolute -inset-1 bg-cyan-500/20 rounded-xl blur-md group-hover:blur-xl transition-all"></div>
              </Link>
              
              <Link
                href="/contact"
                className="px-8 py-4 bg-white text-slate-700 font-semibold rounded-xl border-2 border-slate-300 hover:border-cyan-400 hover:bg-cyan-50 transition-all duration-300 flex items-center justify-center gap-3 group"
              >
                <TrendingUp className="w-5 h-5 text-cyan-600 group-hover:scale-110 transition-transform" />
                <span>Get Free Audit</span>
              </Link>
            </motion.div>
          </motion.div>

          {/* IMAGE SIDE - Enhanced */}
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
                src="/webdevlopment2.jpg"
                alt="Website Development"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Floating Elements */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute bottom-6 left-6 right-6"
              >
                <div className="bg-white/90 backdrop-blur-md p-5 rounded-2xl shadow-xl border border-white/50">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-slate-500">Current Project</div>
                      <div className="font-bold text-slate-800">E-commerce Platform</div>
                    </div>
                    <div className="flex items-center gap-2">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Floating Card 1 */}
            <motion.div
              initial={{ x: -20, y: -20, opacity: 0, rotate: -5 }}
              whileInView={{ x: 0, y: 0, opacity: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, type: "spring" }}
              className="absolute -left-6 -top-6 bg-gradient-to-br from-white to-slate-50 p-5 rounded-2xl shadow-2xl border border-slate-200/50 w-48"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-gradient-to-br from-green-100 to-green-50 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
                <div className="font-bold text-slate-800">SEO Ready</div>
              </div>
              <div className="text-sm text-slate-600">Built-in SEO optimization for better rankings</div>
            </motion.div>

            {/* Floating Card 2 */}
            <motion.div
              initial={{ x: 20, y: 20, opacity: 0, rotate: 5 }}
              whileInView={{ x: 0, y: 0, opacity: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, type: "spring" }}
              className="absolute -right-6 -bottom-6 bg-gradient-to-br from-white to-slate-50 p-5 rounded-2xl shadow-2xl border border-slate-200/50 w-48"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-gradient-to-br from-purple-100 to-purple-50 rounded-lg">
                  <Zap className="w-5 h-5 text-purple-600" />
                </div>
                <div className="font-bold text-slate-800">Fast & Secure</div>
              </div>
              <div className="text-sm text-slate-600">Industry-leading performance & security</div>
            </motion.div>

            {/* Tech Stack Badge */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, type: "spring" }}
              className="absolute -top-4 right-12"
            >
              <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                Next.js • Tailwind • Sanity
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 px-6 lg:px-10"
        >
          {[
            { value: "150+", label: "Projects Delivered" },
            { value: "98%", label: "Client Retention" },
            { value: "<1s", label: "Avg Load Time" },
            { value: "4.9/5", label: "Client Rating" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-slate-200/50 hover:bg-white hover:border-cyan-200 transition-all duration-300 group"
            >
              <div className="text-3xl font-bold text-slate-900 group-hover:bg-gradient-to-r group-hover:from-cyan-600 group-hover:to-blue-600 group-hover:bg-clip-text group-hover:text-transparent transition-all">
                {stat.value}
              </div>
              <div className="text-sm text-slate-500 mt-2">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}