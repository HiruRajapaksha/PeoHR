import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Training & Development | PeoHR Solutions",
  description:
    "HR-led training workshops and employee development programs to improve productivity and workplace culture.",
};

const programs = [
  "Leadership & Management Skills",
  "Employee Induction & Onboarding Programs",
  "Workplace Culture & Team Building",
  "Performance Management Training",
  "HR Compliance & Labour Law Awareness",
  "Communication & Conflict Resolution",
  "Productivity & Time Management",
  "Custom Workshop Design & Facilitation",
];

export default function TrainingPage() {
  return (
    <div className="min-h-screen bg-primary-dark">
      <section className="relative pt-40 pb-16 overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-60" />
        <div className="absolute left-0 top-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent/10 border border-accent/20 rounded-full mb-4">
              <span className="text-accent text-sm font-medium">Training & Development</span>
            </div>
            <h1 className="font-heading font-bold text-5xl lg:text-6xl text-white mb-4">
              Unlock Your Team&apos;s{" "}
              <span className="gradient-text">Full Potential</span>
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Strategic training programs designed to improve employee productivity, workplace
              culture, and organizational performance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {programs.map((p) => (
              <div key={p} className="glass-card p-5 border border-white/5 hover:border-accent/20 transition-all">
                <CheckCircle size={16} className="text-accent mb-3" />
                <p className="text-white/70 text-sm">{p}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/contact" className="btn-glass inline-flex items-center gap-2 text-base px-8 py-3.5 text-white font-semibold rounded-full hover:border-accent/40 shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 group">
              Design a Training Program
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
