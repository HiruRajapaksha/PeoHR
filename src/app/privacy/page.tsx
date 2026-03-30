import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Shield, Lock, Eye, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | PeoHR Solutions",
  description: "Read the Privacy Policy for PeoHR Solutions (Pvt) Ltd.",
};

const sections = [
  {
    icon: Shield,
    title: "1. Introduction",
    content: "PeoHR Solutions (Pvt) Ltd (\"we,\" \"us,\" or \"our\") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.",
  },
  {
    icon: Eye,
    title: "2. Information We Collect",
    content: "We may collect personal information that you provide directly to us, such as your name, email address, phone number, and company details when you fill out contact forms or request consultations. We also collect automated information through cookies and similar technologies.",
  },
  {
    icon: FileText,
    title: "3. How We Use Your Information",
    content: "We use the information we collect to provide and maintain our services, respond to your inquiries, send you administrative information, and improve our website's user experience. We do not sell your personal information to third parties.",
  },
  {
    icon: Lock,
    title: "4. Data Protection",
    content: "We implement appropriate technical and organizational security measures to protect the security of any personal information we process. However, please also remember that we cannot guarantee that the internet itself is 100% secure.",
  },
  {
    icon: Shield,
    title: "5. Cookies and Tracking",
    content: "We use cookies and similar tracking technologies to track the activity on our website and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.",
  },
  {
    icon: FileText,
    title: "6. Your Rights",
    content: "Depending on your location, you may have certain rights regarding your personal information, including the right to access, correct, or delete the data we hold about you. Please contact us if you wish to exercise these rights.",
  },
];

export default function PrivacyPage() {
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
            Privacy <span className="gradient-text">Policy</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Last updated: March 30, 2026. Please read this policy carefully to understand how we handle your data.
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
                Questions about our Privacy Policy?
              </h3>
              <p className="text-white/60 mb-6">
                If you have any questions or concerns about this policy, please contact us.
              </p>
              <Link href="/contact" className="btn-glass inline-flex items-center gap-2 px-8 py-3.5 text-white font-semibold rounded-full hover:border-accent/40 shadow-xl transition-all duration-300 hover:scale-105 active:scale-95">
                Contact Our DPO
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
