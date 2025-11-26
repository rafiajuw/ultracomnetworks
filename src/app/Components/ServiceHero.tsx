// src/components/ServiceHero.tsx
import Image from "next/image";
import Link from "next/link";

interface ServiceHeroProps {
  title: string;
  subtitle?: string;
  description: string;
  image: string;
  ctaText?: string;
  ctaLink?: string;
}

export default function ServiceHero({
  title,
  subtitle = "",
  description,
  image,
  ctaText = "Get a Free Quote",
  ctaLink = "/contactus",
}: ServiceHeroProps) {
  return (
    <section className="relative bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6 py-24 lg:py-32 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left: Text */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
            {title}
            {subtitle && (
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 font-semibold mt-2">
                {subtitle}
              </span>
            )}
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-xl leading-relaxed">
            {description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link
              href={ctaLink}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              {ctaText}
            </Link>
            <a
              href="tel:+92311-1000939"
              className="border border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 hover:scale-105 transition-all duration-300"
            >
              Call Now: +92 311 1000605
            </a>
          </div>
        </div>

        {/* Right: Image */}
        <div className="relative w-full h-80 md:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-500">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover rounded-2xl"
            priority
          />
        </div>
      </div>
    </section>
  );
}
