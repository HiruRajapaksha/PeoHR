import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "HR Compliance & Labour Law Support | PeoHR Solutions",
  description:
    "Expert HR compliance guidance and labour law support for businesses in Sri Lanka.",
};

const services = [
  "Labour law compliance audits",
  "Disciplinary procedure guidance",
  "Termination and resignation handling",
  "Employment contract review and drafting",
  "Grievance investigation support",
  "Workplace health and safety compliance",
  "Industrial relations advisory",
  "Documentation and record compliance",
];

export default function CompliancePage() {
  return (
    <div className="min-h-screen bg-primary-dark">
      <section className="relative pt-40 pb-16 overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-60" />
        <div className="absolute right-0 top-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-secondary/10 border border-secondary/20 rounded-full mb-4">
              <span className="text-secondary-light text-sm font-medium">HR Compliance</span>
            </div>
            <h1 className="font-heading font-bold text-5xl lg:text-6xl text-white mb-4">
              Stay Compliant.{" "}
              <span className="gradient-text"> Stay Protected.</span>
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Navigate Sri Lanka&apos;s labour laws with confidence. Our compliance experts
              provide practical guidance to keep your business protected.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {services.map((s) => (
              <div key={s} className="glass-card p-5 border border-white/5 hover:border-secondary/20 transition-all">
                <CheckCircle size={16} className="text-secondary-light mb-3" />
                <p className="text-white/70 text-sm">{s}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/contact" className="btn-glass inline-flex items-center gap-2 text-base px-8 py-3.5 text-white font-semibold rounded-full hover:border-accent/40 shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 group">
              Get Compliance Support
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
