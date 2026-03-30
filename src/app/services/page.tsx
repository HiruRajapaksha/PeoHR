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
    color: "text-accent",
    bg: "bg-accent/10",
    border: "hover:border-accent/30",
  },
  {
    icon: Bot,
    title: "Virtual HR Assistant",
    description:
      "On-demand HR support for employee queries, policies, grievances, and HR administration — without hiring a full-time HR team.",
    href: "/services/virtual-hr",
    color: "text-accent",
    bg: "bg-accent/10",
    border: "hover:border-accent/30",
  },
  {
    icon: Scale,
    title: "HR Compliance Support",
    description:
      "Expert guidance on labour law compliance, disciplinary processes, documentation, and legal HR practices in Sri Lanka.",
    href: "/services/compliance",
    color: "text-accent",
    bg: "bg-accent/10",
    border: "hover:border-accent/30",
  },
  {
    icon: FileText,
    title: "HR Policy Development",
    description:
      "Creation of employee handbooks, company policies, and HR procedures tailored to your industry and size.",
    href: "/services/policy",
    color: "text-accent",
    bg: "bg-accent/10",
    border: "hover:border-accent/30",
  },
  {
    icon: GraduationCap,
    title: "Training & Development",
    description:
      "Workshops design & coordination to improve employee productivity, leadership skills, and workplace culture.",
    href: "/services/training",
    color: "text-accent",
    bg: "bg-accent/10",
    border: "hover:border-accent/30",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-primary-dark">
      {/* Hero */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-60" />
        <div className="absolute right-0 top-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent/10 border border-accent/20 rounded-full mb-6">
            <span className="text-accent text-sm font-medium">Our Services</span>
          </div>
          <h1 className="font-heading font-bold text-5xl lg:text-7xl text-white leading-tight mb-6">
            Complete HR Solution{" "}
            <span className="gradient-text">Under One Roof</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
            From payroll to compliance, policy to training — PeoHR Solutions covers every
            aspect of your HR operations with precision and care.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 relative">
        <div className="absolute inset-x-0 top-0 divider-gradient" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
            {services.map(({ icon: Icon, title, description, href, bg }) => (
              <Link
                key={title}
                href={href}
                className="glass-card p-8 border border-white/5 hover:border-accent/30 hover:shadow-accent/5 transition-all duration-300 group"
              >
                <div className={`w-14 h-14 rounded-2xl ${bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={26} className="text-accent" />
                </div>
                <h2 className="font-heading font-bold text-xl text-white mb-3 group-hover:text-accent transition-colors">
                  {title}
                </h2>
                <p className="text-white/55 text-sm leading-relaxed mb-6">{description}</p>
                <div className="flex items-center gap-2 text-accent text-sm font-medium opacity-0 group-hover:opacity-100 translate-x-0 group-hover:translate-x-1 transition-all duration-300">
                  Learn more <ArrowRight size={14} />
                </div>
              </Link>
            ))}
          </div>

          {/* Featured image */}
          <div className="relative rounded-[2rem] overflow-hidden mb-24 glass-card p-2 border-white/5">
            <div className="relative rounded-[1.5rem] overflow-hidden">
              <Image
                src="/images/services.png"
                alt="HR Service Network"
                width={1200}
                height={500}
                className="w-full object-cover max-h-[400px] hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/40 to-transparent" />
              <div className="absolute bottom-10 left-10 right-10 text-center">
                <p className="text-white/90 text-xl font-heading font-bold tracking-wide">
                  Strategic HR Solutions for Progressive Sri Lankan Businesses
                </p>
              </div>
            </div>
          </div>

          {/* Pricing CTA */}
          <div className="glass-card p-12 text-center border border-accent/20 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-accent/10 transition-colors" />
            
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-white mb-6">
              Flexible Packages for Every Business
            </h2>
            <p className="text-white/60 mb-10 max-w-2xl mx-auto text-lg leading-relaxed">
              Every business has different HR needs. Our services are structured into flexible
              packages based on company size and HR support requirements.
            </p>
            <Link href="/contact" className="btn-glass inline-flex items-center gap-2 px-10 py-4 text-white font-semibold rounded-full hover:border-accent/40 shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 group">
              Request a Professional Proposal
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
