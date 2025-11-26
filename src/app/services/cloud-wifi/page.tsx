import ServicePage from "@/app/Components/ServicePage";

export default function CloudWifi() {
  return (
    <ServicePage
      title="Cloud Based WiFi Solution"
      subtitle="Next-Gen Managed WiFi with Cloud Control, Security & Intelligent Analytics"
      description="
        Deliver fast, secure, and highly reliable wireless connectivity across your entire 
        business—managed completely from the cloud. Our Cloud WiFi solution provides advanced 
        monitoring, seamless roaming, multi-site control, guest access, and AI-driven analytics 
        to ensure maximum performance and enterprise-grade security. Perfect for offices, retail, 
        hospitality, campuses, hospitals, and large public venues.
      "
      features={[
        "Cloud controller with centralized monitoring & zero-touch provisioning",
        "Secure guest WiFi with SMS, voucher, OTP & social login options",
        "AI-based WiFi optimization & interference reduction",
        "Real-time bandwidth analytics, user behavior insights & heatmaps",
        "Load balancing, automatic failover & seamless AP-to-AP roaming",
        "WPA3 enterprise security with role-based access control",
        "Multi-site management: manage 1 or 100+ locations from one dashboard",
        "Application throttling, firewall, VLANs & traffic shaping",
        "Fully scalable WiFi for small offices to enterprise-level deployments",
      ]}
      heroImage="/cloudwifi.jpeg"
      extraSections={[
        {
          heading: "Why Choose Our Cloud WiFi Platform?",
          points: [
            "Ultra-fast, secure & stable WiFi designed for high-density environments",
            "99.9% uptime with AI-driven performance tuning",
            "Instant setup with plug-and-play access points",
            "Supports thousands of concurrent users seamlessly",
            "Built-in captive portal with brandable splash pages",
            "Automatic firmware updates & proactive threat detection",
          ],
        },
        {
          heading: "Perfect For",
          points: [
            "Corporate Offices & IT Parks",
            "Schools, Universities & Campuses",
            "Restaurants, Cafés & Retail Stores",
            "Hospitals & Healthcare Facilities",
            "Hotels, Resorts & Guest Houses",
            "Large Public Spaces & Events",
          ],
        },
        {
          heading: "Advanced WiFi Capabilities",
          points: [
            "Heatmap visualization for coverage planning",
            "Presence analytics to understand footfall & user behavior",
            "Smart QoS for voice, video & business-critical apps",
            "Cloud backup & multi-layer redundancy",
            "WiFi marketing — send targeted ads & campaigns",
            "AP health monitoring with proactive issue alerts",
          ],
        },
      ]}
    />
  );
}
