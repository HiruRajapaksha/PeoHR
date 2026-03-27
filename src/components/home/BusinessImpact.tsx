"use client";

import { useEffect, useRef, useState } from "react";
import { TrendingUp, UserCheck, Shield, Layers, Heart, ArrowRight } from "lucide-react";
import Link from "next/link";

const outcomes = [
  { icon: TrendingUp, text: "Improved employee productivity", color: "text-primary" },
  { icon: UserCheck, text: "Better employee engagement", color: "text-secondary-light" },
  { icon: Shield, text: "Reduced HR-related operational risks", color: "text-primary-light" },
  { icon: Layers, text: "Structured HR processes", color: "text-secondary" },
  { icon: Heart, text: "Stronger organizational culture", color: "text-primary" },
];

const stats = [
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 500, suffix: "+", label: "Businesses Supported" },
  { value: 10, suffix: "+", label: "Years of Expertise" },
  { value: 100, suffix: "%", label: "Compliance Assured" },
];

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let start = 0;
          const duration = 2000;
          const step = target / (duration / 16);
          const timer = setInterval(() => {
            start += step;
            if (start >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="text-4xl lg:text-5xl font-heading font-bold gradient-text">
      {count}{suffix}
    </div>
  );
}

export default function BusinessImpact() {
  const outcomesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".outcome-item").forEach((el, i) => {
              setTimeout(() => {
                el.classList.add("opacity-100", "translate-x-0");
                el.classList.remove("opacity-0", "-translate-x-8");
              }, i * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (outcomesRef.current) observer.observe(outcomesRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 relative overflow-hidden bg-primary-dark">
      <div className="absolute inset-0 mesh-gradient opacity-40" />
      <div className="absolute top-0 inset-x-0 divider-gradient" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat) => (
            <div key={stat.label} className="glass-card p-6 text-center">
              <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              <div className="text-white/50 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Main content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent/10 border border-accent/20 rounded-full mb-6">
              <span className="text-accent text-sm font-medium">Business Impact</span>
            </div>
            <h2 className="font-heading font-bold text-4xl lg:text-5xl text-white mb-6 leading-tight">
              What Better HR Systems{" "}
              <span className="gradient-text">Deliver</span>
            </h2>
            <p className="text-white/60 leading-relaxed mb-8">
              When HR is done right, the entire organization benefits. Our structured
              approach delivers measurable improvements across your business.
            </p>
            <Link href="/contact" className="btn-primary">
              Start Your Transformation
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* Right — Outcomes */}
          <div ref={outcomesRef} className="space-y-4">
            {outcomes.map(({ icon: Icon, text, color }) => (
              <div
                key={text}
                className="outcome-item opacity-0 -translate-x-8 transition-all duration-500 flex items-center gap-4 glass-card px-5 py-4"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                  <Icon size={18} className={color} />
                </div>
                <span className="text-white/80 font-medium">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
