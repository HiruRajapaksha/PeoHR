import type { Metadata } from "next";
import { Mail, Phone, MapPin, Clock, ArrowRight } from "lucide-react";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | PeoHR Solutions",
  description:
    "Get in touch with PeoHR Solutions to discuss your HR challenges and build a stronger HR system for your business.",
};

const contactDetails = [
  {
    icon: Mail,
    label: "Email Us",
    value: "peohrs@gmail.com",
    href: "mailto:peohrs@gmail.com",
  },
  {
    icon: Phone,
    label: "Call Us",
    value: "+94 760 818 007",
    href: "tel:+94760818007",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Sri Lanka",
    href: "#",
  },
  {
    icon: Clock,
    label: "Response Time",
    value: "Within 24 hours",
    href: "#",
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-primary-dark">
      {/* Hero */}
      <section className="relative pt-40 pb-16 overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-60" />
        <div className="absolute right-0 top-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent/10 border border-accent/20 rounded-full mb-4">
            <span className="text-accent text-sm font-medium">Get In Touch</span>
          </div>
          <h1 className="font-heading font-bold text-5xl lg:text-6xl text-white mb-4">
            Let&apos;s Build a{" "}
            <span className="gradient-text">Strong HR System</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Tell us about your HR challenges and we&apos;ll create a tailored solution for
            your business.
          </p>
        </div>
      </section>

      {/* Form + Details */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Form — wider */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>

            {/* Contact details sidebar */}
            <div className="space-y-5">
              <div>
                <h2 className="font-heading font-bold text-2xl text-white mb-2">
                  PeoHR Solutions (Pvt) Ltd
                </h2>
                <p className="text-white/50 text-sm leading-relaxed">
                  Professional HR outsourcing and advisory services for growing businesses in
                  Sri Lanka.
                </p>
              </div>

              <div className="divider-gradient" />

              <div className="space-y-4">
                {contactDetails.map(({ icon: Icon, label, value, href }) => (
                  <a
                    key={label}
                    href={href}
                    className="flex items-center gap-4 glass-card p-4 hover:border-accent/20 border border-white/5 transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                      <Icon size={16} className="text-accent" />
                    </div>
                    <div>
                      <div className="text-white/40 text-xs">{label}</div>
                      <div className="text-white text-sm font-medium">{value}</div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Quick services */}
              <div className="glass-card p-5 border border-primary/15 mt-4">
                <h3 className="font-semibold text-white text-sm mb-3">
                  Services You Might Need
                </h3>
                {[
                  "HR Outsourcing",
                  "Payroll Management",
                  "Virtual HR Assistant",
                  "Compliance Advisory",
                ].map((s) => (
                  <div key={s} className="flex items-center gap-2 py-1.5">
                    <ArrowRight size={12} className="text-secondary-light" />
                    <span className="text-white/60 text-xs">{s}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
