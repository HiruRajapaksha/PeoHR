"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import {
  Users, DollarSign, Bot, Scale, FileText, GraduationCap, ArrowRight
} from "lucide-react";

const services = [
  {
    icon: Users,
    title: "HR Outsourcing",
    description: "We manage essential HR functions so business owners can focus on growth.",
    href: "/services/hr-outsourcing",
    color: "from-primary/20 to-primary/5",
    iconColor: "text-primary",
    borderColor: "hover:border-primary/40",
  },
  {
    icon: DollarSign,
    title: "Payroll Management",
    description: "Accurate payroll processing with compliance to statutory requirements.",
    href: "/services/payroll",
    color: "from-secondary/20 to-secondary/5",
    iconColor: "text-secondary-light",
    borderColor: "hover:border-secondary/40",
  },
  {
    icon: Bot,
    title: "Virtual HR Assistant",
    description: "On-demand HR support for employee queries, policies, and HR administration.",
    href: "/services/virtual-hr",
    color: "from-primary/20 to-primary/5",
    iconColor: "text-primary",
    borderColor: "hover:border-primary/40",
  },
  {
    icon: Scale,
    title: "HR Compliance Support",
    description: "Guidance on labour law compliance, disciplinary processes, and documentation.",
    href: "/services/compliance",
    color: "from-secondary/20 to-secondary/5",
    iconColor: "text-secondary-light",
    borderColor: "hover:border-secondary/40",
  },
  {
    icon: FileText,
    title: "HR Policy Development",
    description: "Creation of employee handbooks, company policies, and HR procedures.",
    href: "/services/policy",
    color: "from-primary/20 to-primary/5",
    iconColor: "text-primary",
    borderColor: "hover:border-primary/40",
  },
  {
    icon: GraduationCap,
    title: "Training & Development",
    description: "Workshops design & coordination to improve employee productivity and workplace culture.",
    href: "/services/training",
    color: "from-secondary/20 to-secondary/5",
    iconColor: "text-secondary-light",
    borderColor: "hover:border-secondary/40",
  },
];

export default function ServicesPreview() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll(".service-card");
            cards.forEach((card, i) => {
              setTimeout(() => {
                card.classList.add("opacity-100", "translate-y-0");
                card.classList.remove("opacity-0", "translate-y-8");
              }, i * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 mesh-gradient opacity-60" />
      <div className="absolute top-0 inset-x-0 divider-gradient" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent/10 border border-accent/20 rounded-full mb-4">
            <span className="text-accent text-sm font-medium">What We Offer</span>
          </div>
          <h2 className="font-heading font-bold text-4xl lg:text-5xl text-white mb-4">
            Complete HR Support{" "}
            <span className="gradient-text">Under One Roof</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            From payroll processing to compliance advisory — we cover every aspect of your
            HR operations.
          </p>
        </div>

        {/* Services Grid */}
        <div ref={sectionRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.title}
                href={service.href}
                className={`service-card glass-card p-7 opacity-0 translate-y-8 transition-all duration-500 group cursor-pointer border border-white/5 ${service.borderColor} hover:shadow-xl`}
              >
                {/* Icon */}
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={22} className={service.iconColor} />
                </div>

                {/* Content */}
                <h3 className="font-heading font-bold text-lg text-white mb-2 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* CTA */}
                <div className="flex items-center gap-1 text-accent text-sm font-medium opacity-0 group-hover:opacity-100 translate-x-0 group-hover:translate-x-1 transition-all duration-300">
                  Learn more <ArrowRight size={14} />
                </div>

                {/* Bottom glow */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/0 to-transparent group-hover:via-accent/30 transition-all duration-500" />
              </Link>
            );
          })}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <Link href="/services" className="btn-secondary">
            View All Services
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
