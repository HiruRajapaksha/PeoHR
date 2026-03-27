import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, Tag } from "lucide-react";

export const metadata: Metadata = {
  title: "HR Resources & Insights | PeoHR Solutions",
  description:
    "Practical HR knowledge, labour law insights, and HR best practices for Sri Lankan business leaders.",
};

const articles = [
  {
    tag: "HR Compliance",
    title: "Understanding Sri Lanka's Employment Law: A Guide for Employers",
    excerpt:
      "A comprehensive overview of key Labour Law requirements every employer in Sri Lanka should know.",
    readTime: "8 min read",
    tagColor: "text-primary bg-primary/10",
  },
  {
    tag: "Payroll",
    title: "EPF & ETF in Sri Lanka: What Every Business Needs to Know",
    excerpt:
      "Statutory contributions explained — obligations, rates, and how to stay compliant with payroll regulations.",
    readTime: "6 min read",
    tagColor: "text-secondary-light bg-secondary/10",
  },
  {
    tag: "Employee Management",
    title: "How to Handle Employee Grievances Effectively",
    excerpt:
      "A step-by-step guide to managing workplace grievances professionally and preventing escalation.",
    readTime: "5 min read",
    tagColor: "text-primary-light bg-primary/10",
  },
  {
    tag: "Workplace Culture",
    title: "Building a High-Performance Culture in SMEs",
    excerpt:
      "Practical strategies for small businesses to improve employee engagement and productivity.",
    readTime: "7 min read",
    tagColor: "text-secondary bg-secondary/10",
  },
  {
    tag: "HR Best Practices",
    title: "5 HR Mistakes Growing Businesses Make (And How to Fix Them)",
    excerpt:
      "Common pitfalls in HR management for scaling companies and the steps to correct them before they cost you.",
    readTime: "9 min read",
    tagColor: "text-primary bg-primary/10",
  },
  {
    tag: "Labour Law",
    title: "Termination of Employment in Sri Lanka: The Legal Framework",
    excerpt:
      "What employers need to know about legal termination procedures to avoid costly disputes.",
    readTime: "10 min read",
    tagColor: "text-secondary-light bg-secondary/10",
  },
];

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-primary-dark">
      {/* Hero */}
      <section className="relative pt-40 pb-16 overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-60" />
        <div className="absolute right-0 top-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full mb-4">
            <span className="text-primary text-sm font-medium">HR Insights</span>
          </div>
          <h1 className="font-heading font-bold text-5xl lg:text-6xl text-white mb-4">
            Practical HR Knowledge{" "}
            <span className="gradient-text">for Business Leaders</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Stay ahead with expert HR insights, labour law updates, and best practices
            designed for Sri Lankan businesses.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 relative">
        <div className="absolute inset-x-0 top-0 divider-gradient" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {articles.map((article) => (
              <div
                key={article.title}
                className="glass-card p-7 border border-white/5 hover:border-white/15 hover:shadow-xl transition-all duration-300 group cursor-pointer"
              >
                <div className="flex items-center justify-between mb-5">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${article.tagColor}`}>
                    <Tag size={10} className="inline mr-1" />
                    {article.tag}
                  </span>
                  <span className="text-white/30 text-xs flex items-center gap-1">
                    <Clock size={10} />
                    {article.readTime}
                  </span>
                </div>

                <h2 className="font-heading font-bold text-lg text-white mb-3 group-hover:text-accent transition-colors leading-snug">
                  {article.title}
                </h2>
                <p className="text-white/50 text-sm leading-relaxed mb-5">
                  {article.excerpt}
                </p>

                <div className="flex items-center gap-1 text-accent text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Read article <ArrowRight size={14} />
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="glass-card p-10 text-center border border-primary/15">
            <h2 className="font-heading font-bold text-3xl text-white mb-4">
              Need Expert HR Advice?
            </h2>
            <p className="text-white/60 mb-6 max-w-md mx-auto">
              Our team of HR professionals is ready to help you navigate complex HR challenges
              specific to your business.
            </p>
            <Link href="/contact" className="btn-primary">
              Book a Consultation
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
