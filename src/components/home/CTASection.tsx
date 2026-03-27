import Link from "next/link";
import { ArrowRight, Calendar, MessageCircle } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 animated-gradient-bg opacity-80" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-dark/80 to-primary-dark" />

      {/* Decorative orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/15 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 border border-white/20 rounded-full mb-6">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="text-white/80 text-sm font-medium">Now accepting new clients</span>
        </div>

        <h2 className="font-heading font-bold text-4xl lg:text-6xl text-white mb-6 leading-tight">
          Let&apos;s Build a Strong{" "}
          <span className="gradient-text">HR System</span>{" "}
          for Your Business
        </h2>

        <p className="text-white/65 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
          Every great company is built on great people systems. Let PeoHR Solutions be
          your strategic partner in building those foundations.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link href="/contact" className="btn-primary text-base px-8 py-4">
            <Calendar size={18} />
            Book a Consultation
          </Link>
          <a
            href="mailto:info@peohrsolutions.com"
            className="btn-secondary text-base px-8 py-4"
          >
            <MessageCircle size={18} />
            Get HR Support
          </a>
        </div>

        {/* Trust note */}
        <p className="text-white/30 text-sm mt-8">
          Confidential · No obligation · Response within 24 hours
        </p>
      </div>
    </section>
  );
}
