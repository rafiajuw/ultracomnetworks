// src/app/services/data-center/page.tsx
import ServicePage from "@/app/Components/ServicePage";

export default function DataCenter() {
  return (
    <ServicePage
      title="Data Center"
      subtitle="Colocation & private racks"
      description="Secure, redundant, and carrier-neutral colocation with 24/7 access and power redundancy."
      features={[
        "Tier 3+ facility with N+1 redundancy",
        "Private cages & full racks",
        "Dual power feeds (A/B)",
        "Biometric access & CCTV",
        "Remote hands 24/7",
      ]}
      heroImage="/datacenter.jpeg"
    />
  );
}