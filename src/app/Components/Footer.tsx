// src/app/Components/Footer.tsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 py-12 font-geist-sans bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          
          {/* Who We Are */}
          <div>
            <h3 className="text-sm font-bold text-blue-900 uppercase tracking-widest mb-4">
              WHO WE ARE
            </h3>
            <nav className="space-y-3 text-base text-slate-700">
              <Link
                href="/aboutus"
                className="block hover:text-blue-900 transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-blue-900 after:transition-all after:duration-300 hover:after:w-full"
              >
                About us
              </Link>
              <Link
                href="/our-networks"
                className="block hover:text-blue-900 transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-blue-900 after:transition-all after:duration-300 hover:after:w-full"
              >
                Our network
              </Link>
              <Link
                href="/our-location"
                className="block hover:text-blue-900 transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-blue-900 after:transition-all after:duration-300 hover:after:w-full"
              >
                Office locations
              </Link>
              <Link
                href="/career"
                className="block hover:text-blue-900 transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-blue-900 after:transition-all after:duration-300 hover:after:w-full"
              >
                Careers
              </Link>
            </nav>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-bold text-blue-900 uppercase tracking-widest mb-4">
              LEGAL
            </h3>
            <nav className="space-y-3 text-base text-slate-700">
              <Link
                href="/privicy-policy"
                className="block hover:text-blue-900 transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-blue-900 after:transition-all after:duration-300 hover:after:w-full"
              >
                Privacy Policy
              </Link>
              <Link
                href="/accectable-policy"
                className="block hover:text-blue-900 transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-blue-900 after:transition-all after:duration-300 hover:after:w-full"
              >
                Acceptable Use Policy
              </Link>
              <Link
                href="/notice-of-cookies"
                className="block hover:text-blue-900 transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-blue-900 after:transition-all after:duration-300 hover:after:w-full"
              >
                Notice of Cookies
              </Link>
            </nav>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-sm font-bold text-blue-900 uppercase tracking-widest mb-4">
              FOLLOW US
            </h3>
            <nav className="space-y-3 text-base text-slate-700">
              <Link 
                href="https://linkedin.com/company/ultracomnetworks" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block hover:text-blue-900 transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-blue-900 after:transition-all after:duration-300 hover:after:w-full"
              >
                LinkedIn
              </Link>
              <Link 
                href="https://youtube.com/@ultracomnetworks" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block hover:text-blue-900 transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-blue-900 after:transition-all after:duration-300 hover:after:w-full"
              >
                YouTube
              </Link>
              <Link 
                href="https://x.com/ultracomnet" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block hover:text-blue-900 transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-blue-900 after:transition-all after:duration-300 hover:after:w-full"
              >
                X (Twitter)
              </Link>
            </nav>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-slate-600">
          <p className="text-center md:text-left">
            © Copyright 2025 - Ultracom Networks Corporation - All Rights Reserved
          </p>

          <div className="flex items-center gap-3 bg-blue-50 px-5 py-3 rounded-full shadow-sm">
            <span className="text-blue-700 font-medium">Pakistans #1 Enterprise Network</span>
          </div>
        </div>
      </div>
    </footer>
  );
}