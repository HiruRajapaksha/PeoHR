import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "HR Policy Development | PeoHR Solutions",
  description:
    "Professional HR policy development, employee handbooks, and company policy frameworks for Sri Lankan businesses.",
};

const deliverables = [
  "Employee Handbook creation",
  "Company Policy Framework",
  "Code of Conduct development",
  "Leave & Attendance Policies",
  "Disciplinary & Grievance Procedures",
  "Remote Work & Flexible Work Policies",
  "Performance Review Frameworks",
  "Onboarding Process Documentation",
];

export default function PolicyPage() {
  return (
    <div className="min-h-screen bg-primary-dark">
      <section className="relative pt-40 pb-16 overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-60" />
        <div className="absolute right-0 top-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full mb-4">
              <span className="text-primary text-sm font-medium">HR Policy Development</span>
            </div>
            <h1 className="font-heading font-bold text-5xl lg:text-6xl text-white mb-4">
              Clear Policies.{" "}
              <span className="gold-text">Strong Foundations.</span>
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              We create comprehensive HR policies and employee handbooks that set clear
              expectations and protect your business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {deliverables.map((d) => (
              <div key={d} className="glass-card p-5 border border-white/5 hover:border-primary/20 transition-all">
                <CheckCircle size={16} className="text-primary mb-3" />
                <p className="text-white/70 text-sm">{d}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/contact" className="btn-primary">
              Get Your Policy Framework <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
