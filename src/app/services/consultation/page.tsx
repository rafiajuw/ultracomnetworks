// src/app/services/consultation/page.tsx

import ServicePage from "@/app/Components/ServicePage";

export default function Consultation() {
  return (
    <ServicePage
      title="IT Consultation & Infrastructure Audit"
      subtitle="Professional IT Assessment, Planning, Architecture & Digital Transformation"
      description="
        Our expert IT consultation service helps businesses build a reliable, scalable, and 
        secure technology foundation. Whether you're upgrading your network, expanding your 
        infrastructure, enhancing cybersecurity, or planning a complete digital transformation — 
        our certified consultants provide deep insights, actionable recommendations, and a 
        future-proof roadmap tailored to your organization.
      "
      features={[
        "Complete IT Infrastructure Audit (Network, Servers, WiFi, Security)",
        "Scalability & Capacity Planning for Future Growth",
        "Risk Assessment, Vulnerability Review & Compliance Checks",
        "Cybersecurity Standards: ISO, PCI, GDPR & Local Regulations",
        "Cloud Adoption & Migration Strategy (AWS, Azure, Private Cloud)",
        "Cost Optimization Across IT Assets, Licenses & Connectivity",
        "Disaster Recovery & High Availability Strategy",
        "Technology Roadmap for 1–5 Years",
      ]}
      heroImage="/consult.png"
      ctaText="Book Free Audit"
      extraSections={[
        {
          heading: "Why Your Business Needs Professional IT Consultation?",
          points: [
            "Identify performance bottlenecks before they cause downtime",
            "Reduce IT costs with optimized licensing & infrastructure planning",
            "Strengthen your cybersecurity posture with expert guidance",
            "Ensure scalability for fast-growing operations & remote teams",
            "Upgrade outdated systems without disruption",
            "Get a blueprint for digital transformation & automation",
          ],
        },
        {
          heading: "Who Is This Consultation For?",
          points: [
            "Small & Medium Businesses planning IT upgrades",
            "Enterprises needing a full technology audit",
            "Startups building a scalable IT foundation",
            "Firms facing security, WiFi, or network issues",
            "Organizations planning cloud migration or VoIP adoption",
            "Companies with multi-branch or remote work environments",
          ],
        },
        {
          heading: "What You Receive in the Final Audit Report",
          points: [
            "Complete network topology & documentation",
            "Performance graphs, heatmaps & bandwidth analysis",
            "Security vulnerabilities & risk scoring",
            "Hardware lifecycle & replacement recommendations",
            "Application & workload optimization plan",
            "Cost-saving suggestions & investment priorities",
            "A technology roadmap for the next 12–36 months",
          ],
        },
      ]}
    />
  );
}
