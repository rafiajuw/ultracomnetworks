"use client";

import { ArrowRight } from "lucide-react";
import { useState } from "react";

export default function ClientFooter() {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Subscribed:", email);
    setEmail("");
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-3 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-xl shadow-xl hover:shadow-2xl hover:shadow-cyan-500/30 hover:scale-110 transition-all duration-300 z-40 group"
        aria-label="Back to top"
      >
        <div className="relative">
          <div className="absolute -inset-2 bg-cyan-500/20 rounded-xl blur-md group-hover:blur-xl transition-all"></div>
          <ArrowRight className="w-6 h-6 rotate-270 text-white relative" />
        </div>
      </button>

      {/* Interactive Newsletter Form */}
      <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="flex-1 px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all placeholder:text-slate-500"
        />
        <button
          type="submit"
          className="px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl font-semibold hover:from-cyan-500 hover:to-blue-500 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 flex items-center gap-2 group"
        >
          Subscribe
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </form>
    </>
  );
}