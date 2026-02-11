"use client";
import Hero from "@/app/Components/Hero";
import WhoWeAreSection from "@/app/Components/WhoWeAreSection"
import Services from "@/app/Components/Services";
import WebsiteIntroSection from "./Components/WebsiteIntroSection";
import TestimonialsPage from "./Components/testimonal";




export default function Page() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
    
      <main>
        <Hero />
        <WhoWeAreSection />
        <Services />
        <WebsiteIntroSection />
        <TestimonialsPage />
      </main>
    
    </div>
  );
}
