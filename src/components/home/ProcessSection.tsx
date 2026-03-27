"use client";

import { useEffect, useRef } from "react";
import { Search, Palette, Rocket, HeadphonesIcon } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Understand",
    description:
      "We analyze your company's HR challenges, workforce structure, and compliance requirements.",
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/30",
  },
  {
    number: "02",
    icon: Palette,
    title: "Design",
    description:
      "We create HR systems, policies, and processes suited to your organization.",
    color: "text-secondary-light",
    bgColor: "bg-secondary/10",
    borderColor: "border-secondary/30",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Implement",
    description:
      "We implement the HR framework and support your team in adopting the new processes.",
    color: "text-primary-light",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/30",
  },
  {
    number: "04",
    icon: HeadphonesIcon,
    title: "Support",
    description:
      "Continuous HR advisory support to ensure smooth operations and compliance.",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
    borderColor: "border-secondary/30",
  },
];

export default function ProcessSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll(".process-step");
            items.forEach((item, i) => {
              setTimeout(() => {
                item.classList.add("opacity-100", "translate-y-0");
                item.classList.remove("opacity-0", "translate-y-10");
              }, i * 150);
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
    <section className="py-24 relative overflow-hidden bg-primary-dark">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
      </div>
      <div className="absolute top-0 inset-x-0 divider-gradient" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full mb-4">
            <span className="text-primary text-sm font-medium">How It Works</span>
          </div>
          <h2 className="font-heading font-bold text-4xl lg:text-5xl text-white mb-4">
            Simple Process.{" "}
            <span className="gradient-text">Real Results.</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Our proven 4-step framework delivers structured HR transformation for your
            business.
          </p>
        </div>

        {/* Steps */}
        <div
          ref={sectionRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative"
        >
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-10 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent z-0 mx-24" />

          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className={`process-step relative opacity-0 translate-y-10 transition-all duration-600 glass-card p-7 text-center group hover:scale-[1.03] border border-white/5 ${step.borderColor} hover:border-opacity-60 transition-all duration-300`}
              >
                {/* Step number */}
                <div className="text-[80px] font-heading font-bold text-white/5 absolute top-2 right-4 leading-none select-none">
                  {step.number}
                </div>

                {/* Icon */}
                <div
                  className={`relative z-10 w-14 h-14 rounded-2xl ${step.bgColor} flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon size={24} className={step.color} />
                </div>

                <h3 className={`font-heading font-bold text-xl mb-3 ${step.color}`}>
                  {step.title}
                </h3>
                <p className="text-white/55 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
