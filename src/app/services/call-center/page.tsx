// src/app/services/call-center/page.tsx
import ServicePage from "@/app/Components/ServicePage";

export default function CallCenter() {
  return (
    <ServicePage
      title="Call Center Solutions"
      subtitle="IVR, contact center & routing"
      description="Complete voice platform with IVR, ACD, recording, and omnichannel routing."
      features={[
        "Cloud & on-premise IVR",
        "Automatic Call Distribution (ACD)",
        "Call recording & quality monitoring",
        "CRM integration (Salesforce, Zoho)",
        "Omnichannel: voice, chat, email",
      ]}
      heroImage="/call-center.jpeg"
    />
  );
}