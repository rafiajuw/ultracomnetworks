// src/components/ServiceFilter.tsx
"use client";

import { useState } from "react";

interface ServiceFilterProps {
  onSearch: (query: string) => void;
  onFilter: (category: string) => void;
}

export default function ServiceFilter({ onSearch, onFilter }: ServiceFilterProps) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value);
    onSearch(value);
  };

  const handleCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setCategory(value);
    onFilter(value);
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 mb-12">
      <div className="flex-1">
        <input
          type="text"
          placeholder="Search services..."
          value={search}
          onChange={handleSearch}
          className="w-full px-5 py-3 rounded-full border border-gray-300 focus:border-ultracom-primary focus:outline-none transition-colors"
        />
      </div>
      <select
        value={category}
        onChange={handleCategory}
        className="px-5 py-3 rounded-full border border-gray-300 focus:border-ultracom-primary focus:outline-none transition-colors"
      >
        <option value="all">All Categories</option>
        <option value="connectivity">Connectivity</option>
        <option value="infrastructure">Infrastructure</option>
        <option value="voice">Voice & Communication</option>
        <option value="consulting">Consulting</option>
      </select>
    </div>
  );
}