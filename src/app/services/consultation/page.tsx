// src/app/services/consultation/page.tsx
import ServicePage from "@/app/Components/ServicePage";

export default function Consultation() {
  return (
    <ServicePage
      title="IT Consultation"
      subtitle="Assessment, planning & audit"
      description="Expert guidance to optimize your IT infrastructure and plan for future growth."
      features={[
        "Network health assessment",
        "Capacity & scalability planning",
        "Security & compliance audit",
        "Cost optimization analysis",
        "Roadmap & budget planning",
      ]}
      heroImage="/consult.png"
      ctaText="Book Free Audit"
    />
  );
}