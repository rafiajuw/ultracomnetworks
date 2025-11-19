// src/app/blog/BlogCard.tsx
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export default function BlogCard({ slug, title, date, readTime, image }: any) {
  return (
    <Link href={`/blog/${slug}`}>
      <article className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 h-full flex flex-col">
        <div className="relative h-64">
          <Image src={image} alt={title} fill className="object-cover group-hover:scale-110 transition duration-500" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition" />
        </div>
        <div className="p-8 flex-1 flex flex-col">
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {date}</span>
            <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {readTime}</span>
          </div>
          <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-700 transition line-clamp-3">
            {title}
          </h3>
          <div className="mt-auto text-blue-600 font-semibold flex items-center group-hover:text-blue-800">
            Read Article <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition" />
          </div>
        </div>
      </article>
    </Link>
  );
}