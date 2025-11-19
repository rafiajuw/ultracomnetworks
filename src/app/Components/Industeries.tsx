"use client";
import { motion } from "framer-motion";

const items = [
  { title: "Finance", desc: "Low-latency connectivity for trading & banking." },
  { title: "Healthcare", desc: "Secure, compliant links for hospitals & labs." },
  { title: "Education", desc: "Campus networks and dedicated cloud links." },
];

export default function Industries() {
  return (
    <section id="industries" className="py-16">
      <h3 className="text-2xl font-semibold text-primary">Industries</h3>
      <p className="text-textgray mt-2">Focused solutions for industry-specific requirements.</p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((it, idx) => (
          <motion.div key={it.title} whileHover={{ scale: 1.03 }} className="bg-white rounded-lg p-6 shadow relative overflow-hidden">
            <div className="text-lg font-semibold text-navy">{it.title}</div>
            <p className="mt-2 text-textgray">{it.desc}</p>
            <div className="absolute bottom-3 right-3 text-xs text-textgray">→ View</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
