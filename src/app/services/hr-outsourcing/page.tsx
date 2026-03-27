import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Users, CheckCircle, Clock, BarChart3, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "HR Outsourcing Services | PeoHR Solutions",
  description:
    "Professional HR outsourcing services for SMEs in Sri Lanka. Let us manage your HR so you can focus on growth.",
};

const features = [
  "Recruitment & Onboarding Management",
  "Employee Relations & Engagement",
  "Performance Management Systems",
  "HR Administration & Record Keeping",
  "Employee Handbook & Policy Development",
  "HR Reporting & Analytics",
];

const benefits = [
  { icon: Clock, title: "Save Time", desc: "Focus on revenue-generating activities" },
  { icon: BarChart3, title: "Reduce Costs", desc: "Fraction of the cost of an in-house HR team" },
  { icon: CheckCircle, title: "Stay Compliant", desc: "Expert guidance on labour law requirements" },
  { icon: Heart, title: "Better Culture", desc: "Improve employee experience and retention" },
];

export default function HROutsourcingPage() {
  return (
    <div className="min-h-screen bg-primary-dark">
      <section className="relative pt-40 pb-16 overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-60" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent/10 border border-accent/20 rounded-full mb-4">
              <span className="text-accent text-sm font-medium">HR Outsourcing</span>
            </div>
            <h1 className="font-heading font-bold text-5xl lg:text-6xl text-white mb-4">
              Focus on Growth.{" "}
              <span className="gradient-text">We Handle HR.</span>
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              We manage essential HR functions so business owners can concentrate on what
              matters most — growing their business.
            </p>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
            {features.map((feature) => (
              <div key={feature} className="glass-card p-5 flex items-center gap-3 border border-white/5">
                <CheckCircle size={16} className="text-accent shrink-0" />
                <span className="text-white/75 text-sm">{feature}</span>
              </div>
            ))}
          </div>

          {/* Benefits */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
            {benefits.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="glass-card p-6 text-center border border-white/5 hover:border-accent/20 transition-all">
                <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Icon size={20} className="text-accent" />
                </div>
                <h3 className="font-heading font-bold text-white text-base mb-1">{title}</h3>
                <p className="text-white/50 text-xs">{desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/contact" className="btn-primary text-base px-8 py-4">
              Get a Free Consultation
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
