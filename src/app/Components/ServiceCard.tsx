import Link from "next/link";
import { motion } from "framer-motion";
import { Download, ChevronRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  subtitle: string;
  href: string;
  pdf?: string;
  category: string;
}

export default function ServiceCard({
  title,
  subtitle,
  href,
  pdf,
  category,
}: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="
        group relative p-8 rounded-3xl bg-white/90 
        shadow-[0_8px_30px_rgb(0,0,0,0.06)] 
        border border-gray-100 backdrop-blur-xl 
        overflow-hidden transition-all duration-500
      "
    >
      {/* Gradient Glow Border */}
      <div
        className="
          absolute inset-0 rounded-3xl border-2 opacity-0 
          group-hover:opacity-100 group-hover:border-transparent 
          transition duration-500
          bg-gradient-to-br from-cyan-500/60 to-blue-600/60
          pointer-events-none
        "
      />

      {/* Inner White Mask for Soft Glow */}
      <div className="absolute inset-[2px] rounded-3xl bg-white/90 backdrop-blur-xl pointer-events-none" />

      <div className="relative z-10">
        {/* Title + Subtitle + Badge */}
        <div className="flex items-start justify-between mb-6">
          <div className="space-y-2">
            <h3
              className="
                text-2xl font-bold text-gray-900 
                group-hover:text-cyan-600 
                transition-colors duration-300
              "
            >
              {title}
            </h3>

            <p className="text-gray-600 text-sm leading-relaxed">
              {subtitle}
            </p>

            <span
              className="
                inline-block px-4 py-1 text-xs font-semibold 
                bg-cyan-600/10 text-cyan-700 
                rounded-full tracking-wide
              "
            >
              {category}
            </span>
          </div>

          {/* Icon Circle */}
          <motion.div
            whileHover={{ scale: 1.15 }}
            className="
              w-12 h-12 rounded-2xl flex items-center justify-center
              bg-cyan-600/10 text-cyan-600
              group-hover:bg-cyan-600 group-hover:text-white 
              transition-all duration-300 shadow-sm
            "
          >
            <ChevronRight className="w-6 h-6" />
          </motion.div>
        </div>

        {/* Bottom Row: CTA + PDF Download */}
        <div className="flex items-center justify-between mt-8">
          <Link
            href={href}
            className="
              flex items-center gap-1 text-sm font-semibold 
              text-cyan-600 group-hover:text-blue-700 
              transition-all duration-300
            "
          >
            Learn More
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>

          {pdf && (
            <a
              href={pdf}
              download
              className="
                text-gray-500 hover:text-cyan-600 
                transition-colors duration-300
              "
              title="Download Service Brochure"
            >
              <Download className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
