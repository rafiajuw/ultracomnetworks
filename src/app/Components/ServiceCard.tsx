"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Download, ChevronRight, ExternalLink, Sparkles, Zap, Shield, Clock } from "lucide-react";
import { useState } from "react";

interface ServiceCardProps {
  title: string;
  subtitle: string;
  href: string;
  pdf?: string;
  category: string;
  features?: string[];
  duration?: string;
  level?: "Beginner" | "Intermediate" | "Advanced" | "Enterprise";
  popular?: boolean;
}

export default function ServiceCard({
  title,
  subtitle,
  href,
  pdf,
  category,
  features = ["Fast Implementation", "24/7 Support", "Custom Solutions"],
  duration = "4-6 weeks",
  level = "Enterprise",
  popular = false,
}: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner": return "from-green-500 to-emerald-500";
      case "Intermediate": return "from-blue-500 to-cyan-500";
      case "Advanced": return "from-purple-500 to-pink-500";
      case "Enterprise": return "from-cyan-500 to-blue-600";
      default: return "from-cyan-500 to-blue-600";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ 
        y: -12,
        scale: 1.02,
        transition: { type: "spring", stiffness: 300, damping: 20 }
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      viewport={{ once: true, margin: "-50px" }}
      className="relative group"
    >
      {/* Glowing Background Effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 rounded-3xl opacity-0 group-hover:opacity-100 blur-md transition duration-500 group-hover:duration-200"></div>

      {/* Popular Badge */}
      {popular && (
        <div className="absolute -top-3 -right-3 z-20">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full blur-sm opacity-75"></div>
            <div className="relative bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-4 py-1.5 rounded-full text-xs font-bold flex items-center gap-1">
              <Sparkles className="w-3 h-3" />
              MOST POPULAR
            </div>
          </div>
        </div>
      )}

      {/* Main Card */}
      <div className="
        relative bg-gradient-to-br from-white via-white to-slate-50 
        rounded-3xl p-8 
        border border-slate-200/50
        backdrop-blur-sm
        overflow-hidden
        transition-all duration-500
        group-hover:border-cyan-200/50
        group-hover:shadow-2xl
        group-hover:shadow-cyan-500/10
      ">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/20 via-transparent to-blue-50/20"></div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-full translate-x-16 -translate-y-16"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-full -translate-x-16 translate-y-16"></div>
        </div>

        <div className="relative z-10">
          {/* Header with Category and Level */}
          <div className="flex items-start justify-between mb-6">
            <div className="space-y-2">
              {/* Category and Level Badges */}
              <div className="flex items-center gap-3">
                <span className="
                  inline-flex items-center gap-1.5 px-3 py-1.5 
                  bg-gradient-to-r from-cyan-500/10 to-blue-500/10 
                  text-cyan-700 text-xs font-bold rounded-full
                  border border-cyan-200/50
                  uppercase tracking-wide
                ">
                  <Zap className="w-3 h-3" />
                  {category}
                </span>
                
                <span className={`
                  inline-flex items-center gap-1.5 px-3 py-1.5 
                  bg-gradient-to-r ${getLevelColor(level)}/10 
                  text-xs font-bold rounded-full
                  border border-slate-200
                  uppercase tracking-wide
                `}>
                  <Shield className="w-3 h-3" />
                  {level}
                </span>
              </div>

              {/* Title */}
              <h3 className="
                text-2xl lg:text-3xl font-bold 
                bg-gradient-to-r from-slate-900 to-slate-800 
                bg-clip-text text-transparent
                tracking-tight
                group-hover:from-cyan-700 group-hover:to-blue-700
                transition-all duration-500
              ">
                {title}
              </h3>
            </div>

            {/* Icon */}
            <motion.div
              animate={{ 
                rotate: isHovered ? 360 : 0,
                scale: isHovered ? 1.1 : 1
              }}
              transition={{ duration: 0.5, type: "spring" }}
              className="
                w-14 h-14 rounded-2xl flex items-center justify-center
                bg-gradient-to-br from-cyan-500 to-blue-600
                text-white
                shadow-lg shadow-cyan-500/30
                group-hover:shadow-xl group-hover:shadow-cyan-500/50
                transition-all duration-300
                flex-shrink-0 ml-4
              "
            >
              <ExternalLink className="w-6 h-6" />
            </motion.div>
          </div>

          {/* Subtitle */}
          <p className="
            text-slate-600 text-base md:text-lg leading-relaxed mb-8 
            group-hover:text-slate-800 
            transition-colors duration-300
            font-medium
          ">
            {subtitle}
          </p>

          {/* Features List */}
          <div className="mb-8 space-y-3">
            <div className="flex items-center gap-2 text-sm text-slate-500 font-medium">
              <Clock className="w-4 h-4 text-cyan-500" />
              <span>Duration: <strong className="text-slate-700">{duration}</strong></span>
            </div>
            <div className="space-y-2">
              {features.slice(0, 3).map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 text-sm"
                >
                  <div className="
                    w-5 h-5 rounded-full 
                    bg-gradient-to-r from-cyan-500/20 to-blue-500/20
                    flex items-center justify-center
                    flex-shrink-0
                  ">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-500"></div>
                  </div>
                  <span className="text-slate-700">{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent my-6"></div>

          {/* Bottom Actions */}
          <div className="flex items-center justify-between pt-2">
            {/* Learn More Button */}
            <Link
              href={href}
              className="
                group/btn relative px-6 py-3 
                bg-gradient-to-r from-cyan-600 to-blue-600
                text-white font-bold rounded-xl
                hover:from-cyan-500 hover:to-blue-500
                transition-all duration-300
                flex items-center gap-2
                shadow-lg shadow-cyan-500/20
                hover:shadow-xl hover:shadow-cyan-500/30
                overflow-hidden
              "
            >
              <span>Explore Service</span>
              <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000"></div>
            </Link>

            {/* PDF Download */}
            {pdf && (
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href={pdf}
                download
                className="
                  p-3 rounded-xl
                  bg-gradient-to-br from-slate-100 to-slate-50
                  border border-slate-200
                  hover:border-cyan-300
                  hover:bg-gradient-to-br hover:from-cyan-50 hover:to-blue-50
                  transition-all duration-300
                  group/pdf
                  shadow-sm
                "
                title="Download Detailed Brochure"
              >
                <div className="relative">
                  <Download className="w-5 h-5 text-slate-600 group-hover/pdf:text-cyan-600 transition-colors" />
                  <div className="absolute -inset-1 bg-cyan-500/10 rounded-xl blur-md opacity-0 group-hover/pdf:opacity-100 transition-opacity"></div>
                </div>
              </motion.a>
            )}
          </div>

          {/* Hover Indicator */}
          <motion.div
            animate={{ 
              width: isHovered ? "100%" : "0%",
              opacity: isHovered ? 1 : 0
            }}
            transition={{ duration: 0.4 }}
            className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-b-3xl"
          />
        </div>
      </div>
    </motion.div>
  );
}