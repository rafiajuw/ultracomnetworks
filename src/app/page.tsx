"use client";
import Hero from "@/app/Components/Hero";
import WhoWeAreSection from "@/app/Components/WhoWeAreSection"
import Services from "@/app/Components/Services";
import WebsiteIntroSection from "./Components/WebsiteIntroSection";




export default function Page() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
    
      <main>
        <Hero />
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          < WhoWeAreSection />
          <Services />
          <WebsiteIntroSection />
        
        
          
        </div>
      </main>
    
    </div>
  );
}
