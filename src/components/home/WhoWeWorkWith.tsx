"use client";

import { useEffect, useRef } from "react";
import { Building2, Sprout, UserX, Settings, ArrowRight } from "lucide-react";
import Link from "next/link";

const targets = [
  {
    icon: Building2,
    title: "Small & Medium Enterprises",
    description: "Structured HR support tailored to SME scale and budget.",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: Sprout,
    title: "Startups & Growing Companies",
    description: "Build your HR foundation right from the beginning.",
    color: "text-secondary-light",
    bg: "bg-secondary/10",
  },
  {
    icon: UserX,
    title: "Companies Without HR Teams",
    description: "Get professional HR management without hiring a full team.",
    color: "text-primary-light",
    bg: "bg-primary/10",
  },
  {
    icon: Settings,
    title: "Businesses Needing HR Systems",
    description: "Transform ad-hoc HR practices into structured, compliant systems.",
    color: "text-secondary",
    bg: "bg-secondary/10",
  },
];

export default function WhoWeWorkWith() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".target-card").forEach((el, i) => {
              setTimeout(() => {
                el.classList.add("opacity-100", "scale-100");
                el.classList.remove("opacity-0", "scale-95");
              }, i * 120);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (gridRef.current) observer.observe(gridRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 relative overflow-hidden bg-primary-dark">
      <div className="absolute top-0 inset-x-0 divider-gradient" />
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left text */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full mb-6">
              <span className="text-primary text-sm font-medium">Who We Serve</span>
            </div>
            <h2 className="font-heading font-bold text-4xl lg:text-5xl text-white mb-6 leading-tight">
              Built for{" "}
              <span className="gradient-text">Growing Businesses</span>
            </h2>
            <p className="text-white/60 leading-relaxed mb-8">
              PeoHR Solutions is purpose-built to support organizations that need professional
              HR management without the overhead of a full internal HR department.
            </p>
            <Link href="/contact" className="btn-glass inline-flex items-center gap-2 text-base px-8 py-3.5 text-white font-semibold rounded-full hover:border-accent/40 shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 group">
              Start Your Transformation
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Right grid */}
          <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {targets.map(({ icon: Icon, title, description, color, bg }) => (
              <div
                key={title}
                className="target-card opacity-0 scale-95 transition-all duration-500 glass-card p-6 hover:border-white/20 border border-white/5"
              >
                <div className={`w-10 h-10 rounded-xl ${bg} flex items-center justify-center mb-4`}>
                  <Icon size={18} className={color} />
                </div>
                <h3 className="font-heading font-bold text-white text-sm mb-2">{title}</h3>
                <p className="text-white/50 text-xs leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
