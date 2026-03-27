import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight, MessageSquare, BookOpen, AlertCircle,
  UserMinus, ShieldAlert, HeartHandshake
} from "lucide-react";

export const metadata: Metadata = {
  title: "Virtual HR Assistant | PeoHR Solutions",
  description:
    "Your HR Department — Without Hiring One. On-demand virtual HR support for businesses that need professional HR management.",
};

const supports = [
  { icon: MessageSquare, text: "Handling payroll-related employee inquiries" },
  { icon: AlertCircle, text: "Managing employee grievances procedure" },
  { icon: BookOpen, text: "Guidance on company policies" },
  { icon: ShieldAlert, text: "Conflict resolution support" },
  { icon: UserMinus, text: "Disciplinary management guidance" },
  { icon: HeartHandshake, text: "Counseling support with management recommendations" },
];

export default function VirtualHRPage() {
  return (
    <div className="min-h-screen bg-primary-dark">
      {/* Hero */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-60" />
        <div className="absolute right-0 top-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full mb-6">
                <span className="text-primary text-sm font-medium">Virtual HR Assistant</span>
              </div>
              <h1 className="font-heading font-bold text-5xl lg:text-6xl text-white mb-6 leading-tight">
                Your HR Department —{" "}
                <span className="gradient-text">
                  Without Hiring One
                </span>
              </h1>
              <p className="text-white/65 text-lg mb-8 leading-relaxed">
                Our Virtual HR Assistant service provides ongoing HR support for businesses
                that require professional HR management but do not have a full-time HR team.
              </p>
              <Link href="/contact" className="btn-primary">
                Get Started Today
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="rounded-3xl overflow-hidden">
                <Image
                  src="/images/virtual-hr.png"
                  alt="Virtual HR Assistant"
                  width={600}
                  height={500}
                  className="object-cover w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/40 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Includes */}
      <section className="py-20 relative">
        <div className="absolute inset-x-0 top-0 divider-gradient" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-4xl text-white mb-4">
              Support{" "}
              <span className="gradient-text">Includes</span>
            </h2>
            <p className="text-white/60 max-w-xl mx-auto">
              Comprehensive HR assistance available whenever you need it.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
            {supports.map(({ icon: Icon, text }) => (
              <div key={text} className="glass-card p-6 flex items-center gap-4 hover:border-primary/20 border border-white/5 transition-all duration-300 group">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Icon size={18} className="text-primary" />
                </div>
                <span className="text-white/75 text-sm font-medium">{text}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="glass-card p-10 text-center border border-primary/20">
            <h3 className="font-heading font-bold text-2xl text-white mb-4">
              Ready for on-demand HR support?
            </h3>
            <p className="text-white/60 mb-6 max-w-md mx-auto text-sm">
              Get the HR expertise your business needs — available when you need it, at a
              fraction of the cost of a full-time hire.
            </p>
            <Link href="/contact" className="btn-primary">
              Request HR Support
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
