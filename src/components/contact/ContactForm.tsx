"use client";

import { useState } from "react";
import { Mail, Phone, Send, CheckCircle } from "lucide-react";

const employeeOptions = [
  "1-10 employees",
  "11-50 employees",
  "51-200 employees",
  "200+ employees",
];

const challengeOptions = [
  "HR Compliance Issues",
  "Payroll Management",
  "Employee Relations",
  "HR Policy Development",
  "Training & Development",
  "General HR Outsourcing",
  "Other",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="glass-card p-12 text-center border border-accent/20">
        <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
          <CheckCircle size={32} className="text-accent" />
        </div>
        <h3 className="font-heading font-bold text-2xl text-white mb-2">
          Thank You!
        </h3>
        <p className="text-white/60">
          We&apos;ll get back to you within 24 hours with a personalized response.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="glass-card p-8 border border-white/5 space-y-5">
      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label className="block text-white/70 text-sm font-medium mb-2">
            Full Name *
          </label>
          <input
            required
            type="text"
            placeholder="John Silva"
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-accent/50 focus:bg-white/8 transition-all duration-200"
          />
        </div>
        <div>
          <label className="block text-white/70 text-sm font-medium mb-2">
            Company Name *
          </label>
          <input
            required
            type="text"
            placeholder="Your Company Pvt Ltd"
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-accent/50 transition-all duration-200"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label className="block text-white/70 text-sm font-medium mb-2">
            Email Address *
          </label>
          <input
            required
            type="email"
            placeholder="hello@company.com"
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-accent/50 transition-all duration-200"
          />
        </div>
        <div>
          <label className="block text-white/70 text-sm font-medium mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            placeholder="+94 77 XXX XXXX"
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-accent/50 transition-all duration-200"
          />
        </div>
      </div>

      <div>
        <label className="block text-white/70 text-sm font-medium mb-2">
          Number of Employees *
        </label>
        <select
          required
          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-accent/50 transition-all duration-200 appearance-none"
        >
          <option value="" className="bg-primary">Select company size</option>
          {employeeOptions.map((opt) => (
            <option key={opt} value={opt} className="bg-primary">
              {opt}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-white/70 text-sm font-medium mb-2">
          Main HR Challenge *
        </label>
        <select
          required
          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-accent/50 transition-all duration-200 appearance-none"
        >
          <option value="" className="bg-primary">Select your main challenge</option>
          {challengeOptions.map((opt) => (
            <option key={opt} value={opt} className="bg-primary">
              {opt}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-white/70 text-sm font-medium mb-2">
          Tell us more (optional)
        </label>
        <textarea
          rows={4}
          placeholder="Describe your HR challenges or any specific requirements..."
          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-accent/50 transition-all duration-200 resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full btn-primary justify-center text-base py-4 disabled:opacity-60"
      >
        {loading ? (
          <>
            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send size={16} />
            Request HR Consultation
          </>
        )}
      </button>

      <p className="text-center text-white/30 text-xs">
        Confidential · No spam · Response within 24 hours
      </p>
    </form>
  );
}
