import Link from "next/link";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, ArrowRight } from "lucide-react";

const footerLinks = {
  Services: [
    { name: "HR Outsourcing", href: "/services/hr-outsourcing" },
    { name: "Payroll Management", href: "/services/payroll" },
    { name: "Company Policy Framework", href: "/services/policy" },
    { name: "Virtual HR Assistant", href: "/services/virtual-hr" },
    { name: "HR Compliance", href: "/services/compliance" },
  ],
  Company: [
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ],
  Resources: [
    { name: "Blog", href: "/resources" },
    { name: "HR Guides", href: "/resources" },
  ],
  Legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative bg-primary-dark border-t border-white/5 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-96 h-48 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-48 bg-gold/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Top CTA Bar */}
        <div className="glass-card p-8 mb-16 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-heading text-2xl font-bold text-white mb-1">
              Ready to transform your HR?
            </h3>
            <p className="text-white/60 text-sm">
              Let&apos;s build a strong HR system for your business today.
            </p>
          </div>
          <Link href="/contact" className="btn-gold shrink-0">
            Request a Proposal
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex flex-col mb-4">
              <span className="font-heading font-bold text-2xl text-white tracking-tight">
                Peo<span className="text-accent">HR</span>
              </span>
              <span className="text-[10px] text-white/40 tracking-widest uppercase font-medium">
                Architecting HR for Growth
              </span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Practical HR Solutions for Growing Businesses.
            </p>
            <div className="space-y-2">
              <a
                href="mailto:info@peohrsolutions.com"
                className="flex items-center gap-2 text-white/50 hover:text-accent text-sm transition-colors"
              >
                <Mail size={14} />
                info@peohrsolutions.com
              </a>
              <a
                href="tel:+94XXXXXXXXX"
                className="flex items-center gap-2 text-white/50 hover:text-accent text-sm transition-colors"
              >
                <Phone size={14} />
                +94 XXX XXX XXX
              </a>
            </div>
            {/* Social Links */}
            <div className="flex items-center gap-3 mt-6">
              {[
                { icon: Linkedin, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Facebook, href: "#" },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-8 h-8 rounded-full bg-white/5 hover:bg-accent/20 hover:text-accent text-white/50 flex items-center justify-center transition-all duration-300"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([col, links]) => (
            <div key={col}>
              <h4 className="font-heading font-semibold text-white text-sm mb-4 tracking-wide">
                {col}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-white/50 hover:text-accent text-sm transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="divider-gradient mb-6" />

        {/* Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-white/30 text-sm">
          <span>
            © {new Date().getFullYear()} PeoHR Solutions (Pvt) Ltd. All Rights Reserved.
          </span>
          <div className="flex items-center gap-1 text-xs">
            <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
            Sri Lanka
          </div>
        </div>
      </div>
    </footer>
  );
}
