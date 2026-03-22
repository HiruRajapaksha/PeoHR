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
    <div className="min-h-screen bg-primary">
      <section className="relative pt-40 pb-16 overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-60" />
        <div className="absolute left-0 top-20 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-pink-500/10 border border-pink-500/20 rounded-full mb-4">
              <span className="text-pink-400 text-sm font-medium">Training & Development</span>
            </div>
            <h1 className="font-heading font-bold text-5xl lg:text-6xl text-white mb-4">
              Unlock Your Team&apos;s{" "}
              <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                Full Potential
              </span>
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Strategic training programs designed to improve employee productivity, workplace
              culture, and organizational performance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {programs.map((p) => (
              <div key={p} className="glass-card p-5 border border-white/5 hover:border-pink-500/20 transition-all">
                <CheckCircle size={16} className="text-pink-400 mb-3" />
                <p className="text-white/70 text-sm">{p}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/contact" className="btn-primary">
              Design a Training Program <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
