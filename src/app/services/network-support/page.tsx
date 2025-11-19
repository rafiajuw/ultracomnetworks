// src/app/services/network-support/page.tsx
import ServicePage from "@/app/Components/ServicePage";

export default function NetworkSupport() {
  return (
    <ServicePage
      title="IT Network Support"
      subtitle="24/7 NOC and on-site engineers"
      description="Proactive monitoring, rapid response, and expert engineers ensure your network runs smoothly — day or night."
      features={[
        "24/7 Network Operations Center (NOC)",
        "On-site engineers within 2 hours",
        "Real-time performance monitoring",
        "Automated alerts & issue resolution",
        "Monthly health reports & optimization",
      ]}
      heroImage="/services/network-support.jpg"
    />
  );
}