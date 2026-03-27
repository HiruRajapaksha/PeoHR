"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, Phone, Calendar } from "lucide-react";

const services = [
  { name: "HR Outsourcing", href: "/services/hr-outsourcing" },
  { name: "Payroll Management", href: "/services/payroll" },
  { name: "Virtual HR Assistant", href: "/services/virtual-hr" },
  { name: "HR Compliance & Labour Law", href: "/services/compliance" },
  { name: "HR Policy Development", href: "/services/policy" },
  { name: "Training & Development", href: "/services/training" },
];

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services", hasDropdown: true, children: services },
  { name: "Resources", href: "/resources" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-primary-dark/95 backdrop-blur-xl shadow-2xl shadow-black/40"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <Image
              src="/images/Group 76.svg"
              alt="PeoHR Logo"
              width={160}
              height={35}
              className="h-9 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <button className="flex items-center gap-1 px-4 py-2 text-white/80 hover:text-white text-sm font-medium rounded-lg hover:bg-white/5 transition-all duration-200">
                    {link.name}
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {/* Mega Dropdown */}
                  <div
                    className={`absolute top-full left-1/2 -translate-x-1/2 pt-2 transition-all duration-300 ${
                      servicesOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
                    }`}
                  >
                    <div className="bg-primary-dark/95 backdrop-blur-xl border border-white/10 rounded-2xl p-3 w-72 shadow-2xl shadow-black/50">
                      {services.map((service) => (
                        <Link
                          key={service.name}
                          href={service.href}
                          className="flex items-center gap-3 px-4 py-3 text-white/70 hover:text-white hover:bg-accent/10 rounded-xl text-sm font-medium transition-all duration-200 group"
                        >
                          <span className="w-1.5 h-1.5 bg-accent rounded-full group-hover:scale-150 transition-transform" />
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className="px-4 py-2 text-white/80 hover:text-white text-sm font-medium rounded-lg hover:bg-white/5 transition-all duration-200"
                >
                  {link.name}
                </Link>
              )
            )}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+94XXXXXXXXX"
              className="flex items-center gap-2 text-white/60 hover:text-accent text-sm transition-colors duration-200"
            >
              <Phone size={14} />
              <span className="hidden xl:block">Get HR Support</span>
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm px-5 py-2.5 bg-primary hover:bg-primary/90 text-white font-semibold rounded-full border border-white/10 hover:border-white/20 transition-all duration-300 shadow-lg hover:shadow-primary/10 hover:scale-105 active:scale-95"
            >
              <Calendar size={14} />
              Book a Consultation
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-white/80 hover:text-white rounded-lg hover:bg-white/5 transition-all"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-500 overflow-hidden ${
          mobileOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-primary-dark/98 backdrop-blur-xl border-t border-white/5 px-4 py-6 space-y-1">
          {navLinks.map((link) => (
            <div key={link.name}>
              <Link
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 text-white/80 hover:text-white hover:bg-white/5 rounded-xl text-base font-medium transition-all"
              >
                {link.name}
              </Link>
              {link.hasDropdown && (
                <div className="ml-4 mt-1 space-y-1">
                  {services.map((s) => (
                    <Link
                      key={s.name}
                      href={s.href}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-2 px-4 py-2 text-white/50 hover:text-accent text-sm transition-colors"
                    >
                      <span className="w-1 h-1 bg-accent rounded-full" />
                      {s.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="pt-4 space-y-3">
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded-full border border-white/10 transition-all duration-300 shadow-lg hover:shadow-primary/10"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
