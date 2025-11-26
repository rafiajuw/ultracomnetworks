import ServicePage from "@/app/Components/ServicePage";

export default function InternetService() {
  return (
    <ServicePage
      title="Internet Service"
      subtitle="Business internet connectivity & SLA"
      description="Dedicated fiber, MPLS, and SD-WAN solutions with guaranteed uptime and bandwidth."
      features={[
        "Dedicated business-grade fiber",
        "99.9% uptime SLA",
        "Symmetric speeds up to 10 Gbps",
        "DDoS protection included",
        "Priority support & failover",
      ]}
      heroImage="/internet.jpeg"
    />
  );
}