import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle, Target, Eye, Lightbulb } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | PeoHR Solutions",
  description:
    "Learn about PeoHR Solutions — your strategic HR partner for growing businesses in Sri Lanka.",
};

const differentiators = [
  "Practical HR solutions, not just theory",
  "Support tailored for small and medium businesses",
  "Focus on systems, structure, and people development",
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-primary-dark text-white">
      {/* Page Hero */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-60" />
        <div className="absolute right-0 top-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent/10 border border-accent/20 rounded-full mb-4">
              <span className="text-accent text-sm font-medium">Our Story</span>
            </div>
            <h1 className="font-heading font-bold text-5xl lg:text-6xl text-white leading-tight mb-4">
              Your Strategic{" "}
              <span className="gradient-text">HR Partner</span>
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Empowering businesses with practical HR systems that drive real results.
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            {/* Text */}
            <div className="space-y-6">
              <h2 className="font-heading font-bold text-3xl lg:text-4xl text-white">
                Who We{" "}
                <span className="gradient-text">Are</span>
              </h2>
              <p className="text-white/65 text-base leading-relaxed">
                PeoHR Solutions (Pvt) Ltd is here to support businesses that need professional
                HR systems but may not have a full internal HR department.
              </p>
              <p className="text-white/65 text-base leading-relaxed">
                We provide practical HR outsourcing, advisory, and operational support designed
                to improve efficiency, compliance, and employee experience across growing 
                organizations in Sri Lanka.
              </p>

              <div className="space-y-3 pt-2">
                {differentiators.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-accent shrink-0 mt-0.5" />
                    <span className="text-white/70 text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <Link href="/contact" className="btn-primary inline-flex mt-4">
                Work With Us
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden">
                <Image
                  src="/images/about-team.png"
                  alt="PeoHR Solutions Team"
                  width={600}
                  height={450}
                  className="object-cover w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
              </div>
              {/* Badge overlay */}
              <div className="absolute -bottom-6 -left-6 glass-card p-4 border border-accent/20">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                    <span className="text-accent font-bold text-lg">10+</span>
                  </div>
                  <div>
                    <div className="text-white text-sm font-semibold">Years of</div>
                    <div className="text-accent text-sm">HR Excellence</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mission & Values */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Target,
                title: "Our Mission",
                content:
                  "To help growing organizations build structured, compliant, well-engaged and high-performing people systems by delivering operational excellence and strategic workforce solutions that drive sustainable growth.",
                color: "text-primary",
                bg: "bg-primary/10",
              },
              {
                icon: Eye,
                title: "Our Vision",
                content:
                  "To be the most trusted HR partner for SMEs in Sri Lanka — enabling businesses to build strong, productive workplaces through expert HR systems and people-first strategies.",
                color: "text-secondary-light",
                bg: "bg-secondary/10",
              },
              {
                icon: Lightbulb,
                title: "Our Approach",
                content:
                  "Practical, tailored HR solutions built for real business challenges. We combine deep expertise with a hands-on approach to deliver results that matter — not just advice.",
                color: "text-primary-light",
                bg: "bg-primary/10",
              },
            ].map(({ icon: Icon, title, content, color, bg }) => (
              <div key={title} className="glass-card p-7 hover:border-white/15 border border-white/5 transition-all duration-300">
                <div className={`w-12 h-12 rounded-2xl ${bg} flex items-center justify-center mb-5`}>
                  <Icon size={22} className={color} />
                </div>
                <h3 className="font-heading font-bold text-xl text-white mb-3">{title}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative">
        <div className="absolute inset-x-0 top-0 divider-gradient" />
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-heading font-bold text-3xl text-white mb-4">
            Ready to build a stronger HR foundation?
          </h2>
          <p className="text-white/60 mb-8">
            Schedule a free consultation and let&apos;s discuss your HR challenges.
          </p>
          <Link href="/contact" className="btn-primary">
            Book a Consultation
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
