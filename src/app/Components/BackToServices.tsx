// src/components/BackToServices.tsx
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function BackToServices() {
  return (
    <Link
      href="/services"
      className="inline-flex items-center gap-2 text-ultracom-primary hover:text-ultracom-dark font-medium text-sm mb-8 transition-colors"
    >
      <ArrowLeft className="w-4 h-4" />
      Back to All Services
    </Link>
  );
}