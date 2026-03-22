import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Payroll Management Services | PeoHR Solutions",
  description:
    "Accurate payroll processing with full compliance to Sri Lankan statutory requirements including EPF, ETF, and tax.",
};

const features = [
  "Monthly payroll processing and payslip generation",
  "EPF (Employees' Provident Fund) management",
  "ETF (Employees' Trust Fund) contributions",
  "Tax (PAYE) computation and filing",
  "Payroll reporting and analytics",
  "Statutory compliance monitoring",
  "Bank transfer preparation",
  "Year-end tax declaration support",
];

export default function PayrollPage() {
  return (
    <div className="min-h-screen bg-primary">
      <section className="relative pt-40 pb-16 overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-60" />
        <div className="absolute left-0 top-20 w-96 h-96 bg-green-500/10 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-green-500/10 border border-green-500/20 rounded-full mb-4">
              <span className="text-green-400 text-sm font-medium">Payroll Management</span>
            </div>
            <h1 className="font-heading font-bold text-5xl lg:text-6xl text-white mb-4">
              Accurate Payroll.{" "}
              <span className="bg-gradient-to-r from-green-400 to-accent bg-clip-text text-transparent">
                Full Compliance.
              </span>
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              We handle your entire payroll process — from processing salaries to ensuring
              full compliance with Sri Lankan statutory requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {features.map((f) => (
              <div key={f} className="glass-card p-5 border border-white/5 hover:border-green-500/20 transition-all">
                <CheckCircle size={16} className="text-green-400 mb-3" />
                <p className="text-white/70 text-sm">{f}</p>
              </div>
            ))}
          </div>

          <div className="glass-card p-10 text-center border border-green-500/15 mb-8">
            <h2 className="font-heading font-bold text-2xl text-white mb-3">
              Never miss a payroll deadline again
            </h2>
            <p className="text-white/60 mb-6 max-w-lg mx-auto text-sm">
              Our payroll specialists ensure your team is paid accurately and on time, every
              time — with full statutory compliance built in.
            </p>
            <Link href="/contact" className="btn-primary">
              Get Payroll Support <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
