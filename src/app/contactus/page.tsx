// src/app/contact/page.tsx
import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MessageSquare, Send, Zap, Shield, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      {/* HERO + FORM */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-blue-900 mb-16">
            Used by the world’s most connected companies
          </h1>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* LEFT: FORM */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-blue-100">
              <div className="mb-6">
                <p className="text-blue-600 text-sm font-semibold uppercase tracking-wider">
                  HOW CAN WE HELP?
                </p>
                <h2 className="text-3xl font-bold text-blue-900 mt-2">Talk about your needs</h2>
              </div>

              <form className="space-y-5">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                />
                <input
                  type="text"
                  placeholder="Company Name"
                  className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                />
                <textarea
                  placeholder="Tell us about your project..."
                  rows={5}
                  className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
                />
                <button
                  type="submit"
                  className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                >
                  <Send className="w-5 h-5" />
                  SEND MESSAGE
                </button>
              </form>
            </div>

            {/* RIGHT: IMAGE */}
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-blue-100">
              <Image
                src="/businessmeeting.jpg"
                alt="Business Meeting"
                width={600}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SUPPORT CARDS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Contact Sales */}
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg border border-blue-100">
              <Mail className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-blue-900 mb-3">Contact Sales</h3>
              <p className="text-gray-600 mb-4">
                Thank you for your interest in UltraCom Networks. Reach out directly:
              </p>
              <div className="space-y-2 text-sm text-gray-700">
                <p><strong>US:</strong> +1-212-360-2370</p>
                <p><strong>UK:</strong> +44 203 695 5078</p>
                <p><strong>Email:</strong> sales@ultracom.net</p>
              </div>
            </div>

            {/* Customer Support */}
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg border border-blue-100">
              <MessageSquare className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-blue-900 mb-3">Customer Support</h3>
              <p className="text-gray-600 mb-4">
                Our Service Surround Model ensures 24/7 assistance with dedicated support.
              </p>
            </div>

            {/* Technical Support */}
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg border border-blue-100">
              <Phone className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-blue-900 mb-3">Technical Support</h3>
              <p className="text-gray-600 mb-4">
                <strong>US Toll Free:</strong> 1-800-310-9077<br />
                <strong>US Local:</strong> +1-212-360-2378<br />
                <strong>UK:</strong> +44 203 695 7366
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES SECTION */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-blue-600 font-semibold uppercase tracking-wider text-center mb-4">
            WHY ULTRACOM NETWORKS?
          </p>
          <h2 className="text-4xl font-bold text-center text-blue-900 mb-16">
            Values that drive us
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="text-center bg-white p-8 rounded-2xl shadow-md border border-blue-50">
              <Zap className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-blue-900 mb-3">Innovative Connectivity</h3>
              <p className="text-gray-600">
                Cutting-edge, high-speed solutions that keep your business ahead.
              </p>
            </div>
            <div className="text-center bg-white p-8 rounded-2xl shadow-md border border-blue-50">
              <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-blue-900 mb-3">Client-centric Service</h3>
              <p className="text-gray-600">
                Personalized support and industry-specific expertise.
              </p>
            </div>
            <div className="text-center bg-white p-8 rounded-2xl shadow-md border border-blue-50">
              <Clock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-blue-900 mb-3">Resilient Infrastructure</h3>
              <p className="text-gray-600">
                99.99% uptime and enterprise-grade reliability.
              </p>
            </div>
          </div>
        </div>
      </section>

     
    </>
  );
}