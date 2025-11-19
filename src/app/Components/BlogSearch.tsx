// src/components/BlogSearch.tsx
"use client";
import { useState } from "react";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";

export default function BlogSearch() {
  const [q, setQ] = useState("");
  const router = useRouter();

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    // navigate to blog listing with query param (client-side)
    router.push(`/blog?search=${encodeURIComponent(q)}`);
  };

  return (
    <form onSubmit={submit} className="relative max-w-2xl mx-auto">
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Search articles, tips, guides..."
        className="w-full pl-12 pr-4 py-3 rounded-2xl border bg-white"
      />
    </form>
  );
}
