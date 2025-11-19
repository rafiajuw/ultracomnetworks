// src/app/blogs/page.tsx
import Link from "next/link";
import Image from "next/image";

const blogs = [
  { title: "Why Every Business Needs a Professional Website in 2025", href: "/blog/professional-website", img: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&h=600&fit=crop" },
  { title: "Social Media Strategies That Actually Convert in 2025", href: "/blog/social-media", img: "https://images.unsplash.com/photo-1508385082359-f38ae991e8f2?auto=format&fit=crop&w=1200&q=80" },
  { title: "Next.js 14: The Secret to Lightning-Fast Websites", href: "/blog/nextjs", img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=600&fit=crop" },
  { title: "Google Ranking Factors 2025 – What Actually Matters", href: "/blog/seo", img: "https://images.unsplash.com/photo-1562577309-2592ab84b1bc?auto=format&fit=crop&w=1920&q=80" },
  { title: "Complete Brand Identity Guide for Growing Businesses", href: "/blog/branding", img: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=1200&h=600&fit=crop" },
  { title: "5 Google Ads Mistakes That Burn Your Budget", href: "/blog/google-ads", img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80" },
  { title: "How We Make $30K/Month with Email Marketing", href: "/blog/email-marketing", img: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=1200&h=600&fit=crop" },
  { title: "Website Redesign Checklist 2025 – 50+ Items", href: "/blog/redesign", img: "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?auto=format&fit=crop&w=1200&q=80" },

];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-5xl font-bold mb-4">Blog</h1>
        <p className="text-lg text-gray-600 mb-12">Loaded: {blogs.length} articles</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogs.map((blog, i) => (
            <Link key={i} href={blog.href}>
              <div className="group bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all cursor-pointer">
                <div className="relative h-56">
                  <Image src={blog.img} alt={blog.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute top-4 left-4 bg-gray-900 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">U</div>
                </div>
                <div className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {blog.title}
                  </h2>
                  <p className="text-gray-600">Click to read →</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}