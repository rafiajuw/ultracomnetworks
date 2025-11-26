// src/app/services/call-center/page.tsx
import ServicePage from "@/app/Components/ServicePage";

export default function CallCenter() {
  return (
    <ServicePage
      title="Call Center Solutions"
      subtitle="Enterprise-grade IVR, ACD, Contact Center & Omnichannel Experience"
      description={`
Transform customer experience with a powerful, reliable, and scalable call center platform designed for modern businesses. Whether you need automated IVR, intelligent routing, cloud contact center, or a fully managed support operation — our solution ensures crystal-clear communication, reduced wait times, and seamless multi-channel engagement. 
Ideal for enterprises, support teams, banks, hospitals, e-commerce, government, telecom, fintech, and high-volume customer service environments.
      `}
      features={[
        "AI-powered IVR with speech recognition & intelligent call automation",
        "Automatic Call Distribution (ACD) with skill-based routing",
        "Call recording, quality monitoring & real-time agent analytics",
        "CRM integration (Salesforce, Zoho, HubSpot, Freshdesk, Dynamics)",
        "Omnichannel communication: Voice, WhatsApp, SMS, Email & Live Chat",
        "Cloud, hybrid, or on-premise deployment options",
        "Predictive, preview & auto dialer for sales teams",
        "Advanced reporting dashboards with KPIs & SLA tracking",
        "Highly scalable — from 5 to 5000+ agents",
      ]}
      heroImage="/callcenter.jpeg"
      extraSections={[
        {
          heading: "Why Choose Our Call Center Platform?",
          points: [
            "99.99% uptime with enterprise-grade reliability",
            "HD voice quality with low latency, QoS & jitter control",
            "Fully customizable IVR flows for any business model",
            "Dedicated onboarding, training & 24/7 technical support",
            "Flexible monthly/yearly billing — no hidden charges",
            "End-to-end security with TLS/SRTP encryption",
          ],
        },
        {
          heading: "Perfect For",
          points: [
            "Customer Support & Service Centers",
            "Banks, Telecom, Healthcare & Government",
            "E-commerce & Online Marketplaces",
            "Logistics, Dispatch & Delivery Centers",
            "Sales, Telemarketing & Lead Generation Teams",
          ],
        },
        {
          heading: "Advanced Capabilities",
          points: [
            "Customer journey mapping across all touchpoints",
            "Auto ticket creation in CRM & helpdesk systems",
            "Supervisor monitoring with whisper & barge-in",
            "Automation of repetitive workflows",
            "Live wallboards for real-time team performance",
            "Multi-location routing for distributed teams",
          ],
        },
      ]}
    />
  );
}
