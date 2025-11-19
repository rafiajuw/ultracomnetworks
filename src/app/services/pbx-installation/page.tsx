// src/app/services/pbx-installation/page.tsx
import ServicePage from "@/app/Components/ServicePage";

export default function PBXInstallation() {
  return (
    <ServicePage
      title="PBX Installation"
      subtitle="On-premise & cloud PBX installs"
      description="Professional installation and configuration of IP PBX systems with full training."
      features={[
        "Asterisk, 3CX, FreePBX deployment",
        "SIP trunking & VoIP setup",
        "Extension programming & IVR",
        "On-site installation & testing",
        "Staff training & documentation",
      ]}
      heroImage="/services/pbx.jpg"
    />
  );
}