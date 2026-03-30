"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle, Users, Shield, Star, Zap, Calendar } from "lucide-react";

const trustSignals = [
  { icon: Star, text: "HR Professionals with Industry Experience" },
  { icon: Shield, text: "Compliance with Sri Lankan Labour Laws" },
  { icon: Zap, text: "Practical Solutions for SMEs" },
  { icon: Users, text: "Confidential HR Support" },
];

const floatingStats = [
  { value: "500+", label: "Businesses Supported" },
  { value: "98%", label: "Client Satisfaction" },
];

export default function HeroSection() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePos({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden animated-gradient-bg"
    >
      {/* Dynamic cursor gradient */}
      <div
        className="absolute inset-0 pointer-events-none transition-all duration-1000"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}% ${mousePos.y}%, rgba(136, 166, 70, 0.05), transparent 50%)`,
        }}
      />

      {/* Hero Image with overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.png"
          alt="HR Professionals at Work"
          fill
          className="object-cover opacity-40 mix-blend-luminosity"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/40 via-primary-dark/70 to-primary-dark" />
      </div>

      {/* Animated orbs */}
      <div className="absolute top-20 right-10 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-20 left-10 w-60 h-60 bg-secondary/8 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }} />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — Text */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/30 rounded-full neon-badge-green transition-all duration-500">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse neon-green-dot" />
              <span className="text-accent text-sm font-medium tracking-wide">
                Sri Lanka&apos;s Leading HR Partner
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="font-heading font-bold text-5xl lg:text-6xl xl:text-7xl text-white leading-[1.1] tracking-tight">
                Smart HR{" "}
                <span className="relative">
                  <span className="gradient-text">Solutions</span>
                </span>{" "}
                <br />
                for Growing{" "}
                <span className="gold-text">Businesses</span>
              </h1>
              <p className="text-white/60 text-lg lg:text-xl leading-relaxed max-w-lg">
                We help businesses streamline HR operations, stay compliant with labour laws,
                and build productive workplaces through modern HR systems and expert support.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-glass inline-flex items-center gap-2 text-base px-7 py-3.5 text-white font-semibold rounded-full hover:neon-badge-green transition-all duration-300 shadow-xl hover:scale-105 active:scale-95">
                <Calendar size={18} />
                Schedule a Consultation
              </Link>
              <Link href="/services" className="btn-glass inline-flex items-center gap-2 text-base px-7 py-3.5 text-white/90 font-semibold rounded-full border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105 active:scale-95 group">
                Explore Our Services
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Trust Signals */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {trustSignals.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-accent shrink-0" />
                  <span className="text-white/65 text-sm">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Floating Stats Cards */}
          <div className="hidden lg:flex flex-col gap-4 items-end">
            {floatingStats.map((stat, i) => (
              <div
                key={stat.label}
                className="glass-card p-6 w-64 glass-card-hover animate-float"
                style={{ animationDelay: `${i * 1.5}s` }}
              >
                <div className="text-4xl font-heading font-bold gradient-text mb-1">
                  {stat.value}
                </div>
                <div className="text-white/50 text-sm">{stat.label}</div>
                <div className="mt-3 h-0.5 bg-gradient-to-r from-accent/50 to-transparent" />
              </div>
            ))}

            {/* Badge card */}
            <div className="glass-card p-4 w-64 flex items-center gap-3 card-hover animate-float" style={{ animationDelay: "3s" }}>
              <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center shrink-0">
                <Shield size={18} className="text-secondary-light" />
              </div>
              <div>
                <div className="text-white text-sm font-semibold">Labour Law Compliant</div>
                <div className="text-white/40 text-xs">Sri Lanka Standards</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-white/30 text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent" />
      </div>
    </section>
  );
}
