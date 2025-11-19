// src/lib/blogs.ts

export type Blog = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image?: string;
  category?: string;
  content: string;
};

export const allBlogs: Blog[] = [
  {
    slug: "why-professional-website-2025",
    title: "Why Every Business Needs a Professional Website in 2025",
    excerpt: "Your website is your 24/7 digital headquarters. In 2025, having a fast, secure, and professional website is non-negotiable.",
    date: "November 18, 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1600",
    category: "Web Design",
    content: `
      <p class="lead text-xl mb-8">2025 mein agar aapka business online nahi dikh raha online, toh aap exist hi nahi karte.</p>
      <h2>1. First Impression = Last Impression</h2>
      <p>75% log aapki company ko sirf website dekh kar judge karte hain. Slow ya purana site = trust khatam.</p>
      <h2>2. 24/7 Salesperson</h2>
      <p>Website bina salary maange raat-din kaam karta hai – inquiries leta hai, products dikhata hai, leads collect karta hai.</p>
      <blockquote class="border-l-4 border-blue-600 pl-6 italic my-8 text-lg">
        “Naye website ke 30 din mein inquiries 180% badh gayi.” – Rahul, Delhi
      </blockquote>
      <h2>3. Google Khud Bhejega Customers</h2>
      <p>Professional site = better SEO = top ranking = har din free traffic.</p>
      <p><strong>Conclusion:</strong> 2025 mein website hona “nice-to-have” nahi, survival hai.</p>
    `,
  },

  {
    slug: "social-media-strategy-2025",
    title: "Social Media Strategies That Actually Convert in 2025",
    excerpt: "Stop posting and hoping. Ye woh tactics hain jo Instagram, Facebook & WhatsApp pe real sales laati hain.",
    date: "November 15, 2025",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1600",
    category: "Marketing",
    content: `
      <p class="lead text-xl mb-8">2025 mein viral hona kaafi nahi – sales chahiye.</p>
      <h2>1. Reels = Growth Engine</h2>
      <p>Har week 3–5 reels daaloge toh organic reach 10x ho jayega.</p>
      <h2>2. WhatsApp Catalog + Status</h2>
      <p>India ke 500M+ users ke liye direct showroom ban jata hai.</p>
      <h2>3. DM Automation</h2>
      <p>ManyChat ya Wati se “Hi”, “Price” pe instant reply – conversion 4x.</p>
      <h2>4. UGC (Customer Photos)</h2>
      <p>Customers ko tag karo – trust skyrocket.</p>
      <p>Result: Ek client ka revenue 45 din mein ₹18 lakh extra.</p>
    `,
  },

  {
    slug: "nextjs-performance-guide",
    title: "Next.js 14: Lightning-Fast Websites Banane Ka Secret",
    excerpt: "90% new enterprise projects Next.js se ban rahe hain – speed, SEO aur scalability ka perfect combo.",
    date: "November 12, 2025",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1600",
    category: "Development",
    content: `
      <h2>Next.js Kyun No.1 Hai?</h2>
      <ul>
        <li>Automatic code splitting</li>
        <li>Built-in image optimization</li>
        <li>App Router + Server Components</li>
        <li>Edge & ISR</li>
      </ul>
      <h2>100/100 Lighthouse Score Tips</h2>
      <p>• next/image + next/font<br>• Dynamic imports<br>• Prefetching<br>• Proper caching</p>
      <p>Ultracom ke projects average 98+ score dete hain.</p>
    `,
  },

  {
    slug: "seo-ranking-factors-2025",
    title: "Google Ranking Factors 2025 – Sach Mein Kya Matter Karta Hai",
    excerpt: "Core Web Vitals, E-E-A-T, Helpful Content – Google ab kya dekhta hai?",
    date: "November 10, 2025",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1562577309-2592ab84b1bc?auto=format&fit=crop&q=80&w=1600",
    category: "SEO",
    content: `
      <h2>Top 5 Factors 2025 Mein</h2>
      <ol>
        <li>Page Speed (LCP &lt; 2.5s)</li>
        <li>Mobile Experience</li>
        <li>E-E-A-T (Experience, Expertise, Authoritativeness, Trust)</li>
        <li>Helpful Content (no AI spam)</li>
        <li>Quality Backlinks</li>
      </ol>
      <h2>Quick Wins</h2>
      <p>Author bio, internal links, schema markup, 6-month content refresh.</p>
    `,
  },

  {
    slug: "branding-guide-2025",
    title: "Complete Brand Identity Guide for Growing Businesses",
    excerpt: "Logo se tone of voice tak – ek yaadgar brand kaise banaye.",
    
    date: "November 8, 2025",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&q=80&w=1600",
    category: "Branding",
    content: `
      <h2>8 Elements of Killer Brand</h2>
      <p>1. Logo<br>2. Colors<br>3. Fonts<br>4. Tone of Voice<br>5. Story<br>6. Visual Style<br>7. Tagline<br>8. Consistency</p>
      <p>Strong brand = 23% zyada revenue.</p>
    `,
  },

  {
    slug: "google-ads-mistakes-2025",
    title: "5 Google Ads Mistakes Jo Aapka Budget Barbaad Kar Rahe Hain",
    excerpt: "Lakho rupaye waste ho rahe in common mistakes ki wajah se.",
    date: "November 5, 2025",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1600",
    category: "PPC",
    content: `
      <h2>Mistake #1: Sirf Broad Match</h2>
      <p>Exact + Phrase match use karo – ROI 3x.</p>
      <h2>Mistake #2: No Negative Keywords</h2>
      <p>“free”, “cheap”, “job” block karo.</p>
      <h2>Mistake #3: Landing Page Mismatch</h2>
      <p>Ad aur page ka message same hona chahiye.</p>
    `,
  },

  {
    slug: "email-marketing-2025",
    title: "Email Marketing Se ₹30 Lakh/Month Kaise Kamaye (Real Case)",
    excerpt: "Zero ads spend – sirf email list se consistent sales.",
    date: "November 3, 2025",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?auto=format&fit=crop&q=80&w=1600",
    category: "Email Marketing",
    content: `
      <p>18,000 subscribers → ₹30 lakh monthly revenue sirf emails se.</p>
      <p>Strategy: Weekly value + monthly offers.</p>
    `,
  },

  {
    slug: "website-redesign-checklist",
    title: "Website Redesign 2025-Point Checklist 2025",
    excerpt: "Purana website naya banane se pehle ye checklist zaroor dekho.",
    date: "November 1, 2025",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4d9da7?auto=format&fit=crop&q=80&w=1600",
    category: "Web Design",
    content: `
      <p>Design, Speed, SEO, Security, Conversion – 50+ points cover.</p>
    `,
  },
];

export function getAllBlogs() {
  return allBlogs;
}

export function getBlogBySlug(slug: string) {
  return allBlogs.find((b) => b.slug === slug) || null;
}