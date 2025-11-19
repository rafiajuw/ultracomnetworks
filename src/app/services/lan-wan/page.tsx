import ServicePage from "@/app/Components/ServicePage";

export default function LanWan() {
  return (
    <ServicePage
      title="LAN & WAN Networking"
      subtitle="Design & deployment of LAN/WAN"
      description="End-to-end network design, deployment, and optimization for campuses and multi-site operations."
      features={[
        "Site survey & capacity planning",
        "Layer 2/3 switching & routing",
        "VLAN, QoS, and segmentation",
        "Zero-downtime migration",
        "Documentation & training",
      ]}
      heroImage="/services/lan-wan.jpg"
    />
  );
}