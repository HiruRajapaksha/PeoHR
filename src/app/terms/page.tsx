import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Scale, User, FileText, ShieldAlert } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service | PeoHR Solutions",
  description: "Read the Terms of Service for PeoHR Solutions (Pvt) Ltd.",
};

const sections = [
  {
    icon: Scale,
    title: "1. Acceptance of Terms",
    content: "By accessing and using our website and services, you agree to comply with and be bound by these Terms of Service. If you do not agree to these terms, please do not use our website.",
  },
  {
    icon: FileText,
    title: "2. Services Provided",
    content: "PeoHR Solutions (Pvt) Ltd provides HR outsourcing, payroll management, and advisory services. We reserve the right to modify or discontinue any part of our services at any time without prior notice.",
  },
  {
    icon: User,
    title: "3. User Responsibilities",
    content: "You agree to provide accurate and complete information when requesting consultations or services. You are responsible for maintaining the confidentiality of any account details and for all activities that occur under your account.",
  },
  {
    icon: ShieldAlert,
    title: "4. Intellectual Property",
    content: "All content on this website, including text, graphics, logos, and software, is the property of PeoHR Solutions (Pvt) Ltd and is protected by copyright and other intellectual property laws.",
  },
  {
    icon: Scale,
    title: "5. Limitation of Liability",
    content: "PeoHR Solutions (Pvt) Ltd shall not be liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use our services or website.",
  },
  {
    icon: FileText,
    title: "6. Governing Law",
    content: "These Terms of Service shall be governed by and construed in accordance with the laws of Sri Lanka. Any disputes relating to these terms shall be subject to the exclusive jurisdiction of the courts of Sri Lanka.",
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-primary-dark">
      {/* Hero */}
      <section className="relative pt-40 pb-16 overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-60" />
        <div className="absolute right-0 top-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors mb-8 group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
          <h1 className="font-heading font-bold text-5xl lg:text-6xl text-white mb-6">
            Terms of <span className="gradient-text">Service</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Please read these terms carefully before using our services. Last updated: March 30, 2026.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {sections.map((section, i) => (
              <div 
                key={i} 
                className="glass-card p-8 border border-white/5 hover:border-white/10 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                    <section.icon size={20} className="text-accent" />
                  </div>
                  <h2 className="font-heading font-bold text-2xl text-white">
                    {section.title}
                  </h2>
                </div>
                <p className="text-white/60 leading-relaxed">
                  {section.content}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="glass-card p-8 border border-accent/20">
              <h3 className="font-heading font-bold text-xl text-white mb-4">
                Have questions about our Terms?
              </h3>
              <p className="text-white/60 mb-6">
                If you have any questions regarding these terms, please reach out to our legal department.
              </p>
              <Link href="/contact" className="btn-glass inline-flex items-center gap-2 px-8 py-3.5 text-white font-semibold rounded-full hover:border-accent/40 shadow-xl transition-all duration-300 hover:scale-105 active:scale-95">
                Contact Legal Support
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
