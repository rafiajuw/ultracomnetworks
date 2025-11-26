// src/components/ServicePage.tsx
import ServiceHero from "./ServiceHero";
import BackToServices from "./BackToServices";

interface ServicePageProps {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  heroImage: string;
  ctaText?: string;
  ctaLink?: string;
}

export default function ServicePage({
  title,
  subtitle,
  description,
  features,
  heroImage,
  ctaText = "Get a Quote",
  ctaLink = "/contactus",
}: ServicePageProps) {
  return (
    <>
      <ServiceHero
        title={title}
        subtitle={subtitle}
        description={description}
        image={heroImage}
        ctaText={ctaText}
        ctaLink={ctaLink}
      />

      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <BackToServices />
      </div>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-ultracom-dark mb-12 text-center">Key Features</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-10 h-10 bg-ultracom-primary rounded-full flex items-center justify-center text-white flex-shrink-0">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-gray-700 leading-relaxed">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-ultracom-dark to-ultracom-primary text-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Deploy?</h2>
          <p className="text-lg mb-8 text-blue-100">
            Contact us for pricing, demo, or on-site assessment.
          </p>
          <a
            href="/contactus"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-ultracom-dark font-bold text-lg rounded-full shadow-xl hover:shadow-2xl transition-all"
          >
            Contact Us Now
          </a>
        </div>
      </section>
    </>
  );
}