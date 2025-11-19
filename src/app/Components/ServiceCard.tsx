// src/components/ServiceCard.tsx
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

export default function ServiceCard({ title, subtitle, href, pdf, category }: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="group block p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-ultracom-primary"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-ultracom-dark group-hover:text-ultracom-primary transition-colors">
            {title}
          </h3>
          <p className="text-gray-600 text-sm">{subtitle}</p>
          <span className="inline-block px-3 py-1 text-xs font-medium bg-ultracom-primary/10 text-ultracom-primary rounded-full">
            {category}
          </span>
        </div>
        <div className="w-12 h-12 bg-ultracom-primary/10 rounded-full flex items-center justify-center group-hover:bg-ultracom-primary transition-colors">
          <ChevronRight className="w-6 h-6 text-ultracom-primary group-hover:text-white transition-colors" />
        </div>
      </div>

      <div className="flex items-center justify-between mt-6">
        <Link
          href={href}
          className="text-ultracom-primary font-medium text-sm flex items-center group-hover:translate-x-1 transition-transform"
        >
          Learn more
          <ChevronRight className="w-4 h-4 ml-1" />
        </Link>
        {pdf && (
          <a
            href={pdf}
            download
            className="text-gray-500 hover:text-ultracom-primary transition-colors"
            title="Download Brochure"
          >
            <Download className="w-5 h-5" />
          </a>
        )}
      </div>
    </motion.div>
  );
}