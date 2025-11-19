// src/components/BlogPost.tsx
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft } from "lucide-react";

interface BlogPostProps {
  title: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  category: string;
  children: React.ReactNode;
}

export default function BlogPost({
  title,
  author,
  date,
  readTime,
  image,
  category,
  children,
}: BlogPostProps) {
  return (
    <article className="max-w-4xl mx-auto px-6 py-16">
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium mb-8"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Blogs
      </Link>

      <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
        {category}
      </span>

      <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6 leading-tight">
        {title}
      </h1>

      <div className="flex items-center gap-6 text-sm text-gray-600 mb-10">
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4" />
          <span>{date}</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4" />
          <span>{readTime} read</span>
        </div>
        <span className="font-medium text-blue-700">by {author}</span>
      </div>

      <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-xl mb-12">
        <Image src={image} alt={title} fill className="object-cover" priority />
      </div>

      <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
        {children}
      </div>

      <div className="mt-16 p-8 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl border border-blue-100">
        <h3 className="text-2xl font-bold text-blue-900 mb-3">
          Ready to Upgrade Your IT Infrastructure?
        </h3>
        <p className="text-gray-700 mb-6">
          Let’s build a solution that scales with your business — fast, secure, and reliable.
        </p>
        <Link
          href="/contactus"
          className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition shadow-lg"
        >
          Get Free Quote
          <ArrowLeft className="w-4 h-4 rotate-180" />
        </Link>
      </div>
    </article>
  );
}