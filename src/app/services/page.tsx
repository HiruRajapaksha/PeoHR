import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Users, DollarSign, Bot, Scale, FileText, GraduationCap, ArrowRight
} from "lucide-react";

export const metadata: Metadata = {
  title: "HR Outsourcing & Payroll Services | PeoHR Solutions",
  description:
    "Streamline your HR operations with professional HR outsourcing, payroll support, and HR advisory services.",
};

const services = [
  {
    icon: Users,
    title: "HR Outsourcing",
    description:
      "We manage essential HR functions so business owners can focus on growth. From recruitment to employee relations — we handle it all.",
    href: "/services/hr-outsourcing",
    color: "text-accent",
    bg: "bg-accent/10",
    border: "hover:border-accent/30",
  },
  {
    icon: DollarSign,
    title: "Payroll Management",
    description:
      "Accurate payroll processing with compliance to statutory requirements, including EPF, ETF, and tax deductions.",
    href: "/services/payroll",
    color: "text-green-400",
    bg: "bg-green-500/10",
    border: "hover:border-green-500/30",
  },
  {
    icon: Bot,
    title: "Virtual HR Assistant",
    description:
      "On-demand HR support for employee queries, policies, grievances, and HR administration — without hiring a full-time HR team.",
    href: "/services/virtual-hr",
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    border: "hover:border-purple-500/30",
  },
  {
    icon: Scale,
    title: "HR Compliance Support",
    description:
      "Expert guidance on labour law compliance, disciplinary processes, documentation, and legal HR practices in Sri Lanka.",
    href: "/services/compliance",
    color: "text-orange-400",
    bg: "bg-orange-500/10",
    border: "hover:border-orange-500/30",
  },
  {
    icon: FileText,
    title: "HR Policy Development",
    description:
      "Creation of employee handbooks, company policies, and HR procedures tailored to your industry and size.",
    href: "/services/policy",
    color: "text-gold",
    bg: "bg-gold/10",
    border: "hover:border-gold/30",
  },
  {
    icon: GraduationCap,
    title: "Training & Development",
    description:
      "Workshops design & coordination to improve employee productivity, leadership skills, and workplace culture.",
    href: "/services/training",
    color: "text-pink-400",
    bg: "bg-pink-500/10",
    border: "hover:border-pink-500/30",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-primary">
      {/* Hero */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-60" />
        <div className="absolute right-0 top-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent/10 border border-accent/20 rounded-full mb-4">
            <span className="text-accent text-sm font-medium">Our Services</span>
          </div>
          <h1 className="font-heading font-bold text-5xl lg:text-6xl text-white leading-tight mb-4">
            Complete HR Support{" "}
            <span className="gradient-text">Under One Roof</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            From payroll to compliance, policy to training — PeoHR Solutions covers every
            aspect of your HR operations.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {services.map(({ icon: Icon, title, description, href, color, bg, border }) => (
              <Link
                key={title}
                href={href}
                className={`glass-card p-8 border border-white/5 ${border} hover:shadow-xl transition-all duration-300 group`}
              >
                <div className={`w-14 h-14 rounded-2xl ${bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={26} className={color} />
                </div>
                <h2 className={`font-heading font-bold text-xl text-white mb-3 group-hover:${color} transition-colors`}>
                  {title}
                </h2>
                <p className="text-white/55 text-sm leading-relaxed mb-6">{description}</p>
                <div className={`flex items-center gap-2 ${color} text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity`}>
                  Learn more <ArrowRight size={14} />
                </div>
              </Link>
            ))}
          </div>

          {/* Featured image */}
          <div className="relative rounded-3xl overflow-hidden mb-20">
            <Image
              src="/images/services.png"
              alt="HR Service Network"
              width={1200}
              height={500}
              className="w-full object-cover max-h-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 text-center">
              <p className="text-white/80 text-lg font-medium">
                All services designed specifically for Sri Lankan businesses
              </p>
            </div>
          </div>

          {/* Pricing CTA */}
          <div className="glass-card p-10 text-center border border-gold/20">
            <h2 className="font-heading font-bold text-3xl text-white mb-4">
              Flexible Packages for Every Business
            </h2>
            <p className="text-white/60 mb-6 max-w-lg mx-auto">
              Every business has different HR needs. Our services are structured into flexible
              packages based on company size and HR support requirements.
            </p>
            <Link href="/contact" className="btn-gold">
              Request a Proposal
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
