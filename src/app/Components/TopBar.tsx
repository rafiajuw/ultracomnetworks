"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function TopBar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* TOP BAR */}
      <div className="w-full bg-gradient-to-r from-[#001F5C] to-[#005B68] text-white text-sm py-2 px-6 flex justify-end">
        <div className="flex items-center gap-6">
          <button onClick={() => setOpen(true)} className="underline hover:text-gray-200 transition">
            Schedule a meeting
          </button>
          <a href="tel:+1-212-360-2370" className="underline hover:text-gray-200 transition">
            +1-212-360-2370
          </a>
        </div>
      </div>

      {/* MEETING POPUP FORM */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[999]"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white p-6 rounded-xl w-[90%] max-w-lg shadow-2xl"
            >
              <h2 className="text-xl font-semibold text-[#0a2640] mb-4">Schedule a Meeting</h2>

              <form onSubmit={(e) => { e.preventDefault(); alert("Form Submitted ✅"); }}>
                <div className="grid gap-4">
                  <input type="text" placeholder="Your Name" required className="border px-3 py-2 rounded-md w-full" />
                  <input type="email" placeholder="Email Address" required className="border px-3 py-2 rounded-md w-full" />
                  <input type="tel" placeholder="Phone Number" required className="border px-3 py-2 rounded-md w-full" />
                  <input type="date" required className="border px-3 py-2 rounded-md w-full" />
                  <textarea placeholder="Message (Optional)" className="border px-3 py-2 rounded-md w-full" rows={3} />
                </div>

                <button type="submit" className="w-full mt-4 bg-[#0072CE] hover:bg-[#005FAE] text-white py-2 rounded-md transition">
                  Submit Request
                </button>
              </form>

              <button onClick={() => setOpen(false)} className="mt-3 w-full text-center text-sm text-gray-600 hover:text-gray-800">Close</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
