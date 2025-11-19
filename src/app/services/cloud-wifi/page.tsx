import ServicePage from "@/app/Components/ServicePage";

export default function CloudWifi() {
  return (
    <ServicePage
      title="Cloud Based WiFi Solution"
      subtitle="Managed cloud WiFi & analytics"
      description="Scalable, secure, and intelligent WiFi with centralized management and guest analytics."
      features={[
        "Cloud controller & zero-touch deploy",
        "Guest portal with SMS login",
        "Real-time bandwidth analytics",
        "Load balancing & roaming",
        "PCI compliance ready",
      ]}
      heroImage="/services/cloud-wifi.jpg"
    />
  );
}