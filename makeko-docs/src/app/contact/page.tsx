"use client";

import Layout from "@/components/Layout";
import { Card, Section, Badge } from "@/components/ui";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  Send,
  CheckCircle2,
  Clock,
  Globe,
} from "lucide-react";
import { useState } from "react";

const contactMethods = [
  {
    icon: MapPin,
    title: "Location",
    value: "Johannesburg, South Africa",
    description: "Available for projects nationwide",
    color: "primary",
  },
  {
    icon: Mail,
    title: "Email",
    value: "info@makekointeriors.co.za",
    description: "General inquiries",
    color: "secondary",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+27 12 345 6789",
    description: "Mon-Fri, 8am-5pm SAST",
    color: "accent",
  },
  {
    icon: Instagram,
    title: "Instagram",
    value: "@makekointeriors",
    description: "Follow our latest projects",
    color: "primary",
  },
];

export default function ContactPage() {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success">(
    "idle"
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setFormState("success");
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden -mx-6 lg:-mx-12 px-6 lg:px-12 mb-16">
        <div
          className="hero-bg-image"
          style={{
            backgroundImage: `url(/Office/Office4/Consultation 2.png)`,
          }}
        />
        <div className="relative z-10 text-center max-w-4xl mx-auto pt-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="primary" className="mb-6">Get in Touch</Badge>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl lg:text-5xl font-semibold text-text tracking-tight mb-6"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-text-muted max-w-2xl mx-auto leading-relaxed"
          >
            Ready to start your project? Let&apos;s create beautiful spaces together.
          </motion.p>
        </div>
      </section>

      <Section className="pt-0">
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Card className="h-full">
              <div className="mb-6">
                <h2 className="text-2xl font-semibold text-text mb-2">
                  Send us a message
                </h2>
                <p className="text-text-muted">
                  Fill out the form below and we&apos;ll get back to you within 24 hours.
                </p>
              </div>

              {formState === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2 }}
                  className="text-center py-12"
                >
                  <div className="inline-flex p-4 bg-primary/10 rounded-full mb-4">
                    <CheckCircle2 size={48} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-text mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-text-muted">
                    We&apos;ll get back to you as soon as possible.
                  </p>
                  <button
                    onClick={() => setFormState("idle")}
                    className="mt-6 text-primary hover:text-primary-muted text-sm font-medium"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-text mb-2"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        className="w-full px-4 py-3 bg-surface border border-border rounded-md text-text placeholder-text-dim focus:outline-none focus:border-primary transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-text mb-2"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        className="w-full px-4 py-3 bg-surface border border-border rounded-md text-text placeholder-text-dim focus:outline-none focus:border-primary transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-text mb-2"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      required
                      className="w-full px-4 py-3 bg-surface border border-border rounded-md text-text placeholder-text-dim focus:outline-none focus:border-primary transition-colors"
                      placeholder="Project inquiry"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-text mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-surface border border-border rounded-md text-text placeholder-text-dim focus:outline-none focus:border-primary transition-colors resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={formState === "submitting"}
                    className="w-full inline-flex items-center justify-center px-6 py-3 bg-primary text-background font-medium rounded-md hover:bg-primary-muted transition-colors disabled:opacity-50"
                  >
                    {formState === "submitting" ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send size={18} className="ml-2" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="space-y-6"
          >
            <Card>
              <div className="mb-6">
                <h2 className="text-2xl font-semibold text-text mb-2">
                  Contact Information
                </h2>
                <p className="text-text-muted">
                  Reach out to us through any of these channels.
                </p>
              </div>

              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <motion.div
                    key={method.title}
                    initial={{ opacity: 0, x: 8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.2, delay: index * 0.05 }}
                    className="flex items-start gap-4 p-4 bg-surface rounded-md border border-border hover:border-primary/50 transition-colors"
                  >
                    <div className="shrink-0">
                      <div className="p-3 bg-primary/10 rounded-md">
                        <method.icon size={24} className="text-primary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm font-semibold text-text mb-1">
                        {method.title}
                      </h3>
                      <p className="text-text">{method.value}</p>
                      <p className="text-xs text-text-dim mt-1">
                        {method.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>

            {/* Business Hours */}
            <Card>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-md">
                  <Clock size={20} className="text-primary" />
                </div>
                <h3 className="text-base font-semibold text-text">
                  Business Hours
                </h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span className="text-text-muted">Monday - Friday</span>
                  <span className="text-text font-medium">8:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span className="text-text-muted">Saturday</span>
                  <span className="text-text-dim">By appointment</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-text-muted">Sunday</span>
                  <span className="text-text-dim">Closed</span>
                </div>
              </div>
            </Card>

            {/* Service Areas */}
            <Card>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-md">
                  <Globe size={20} className="text-primary" />
                </div>
                <h3 className="text-base font-semibold text-text">
                  Service Areas
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  "Johannesburg",
                  "Pretoria",
                  "Gauteng",
                  "Cape Town",
                  "Durban",
                  "South Africa",
                ].map((area) => (
                  <span
                    key={area}
                    className="inline-flex items-center px-3 py-1.5 bg-surface border border-border rounded-sm text-sm text-text-muted"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </Section>

      {/* Map Placeholder */}
      <Section>
        <Card className="overflow-hidden p-0">
          <div className="relative h-80 bg-surface">
            <img
              src="/Community/Picture8.jpg"
              alt="Map location"
              className="w-full h-full object-cover opacity-50"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <MapPin size={48} className="text-primary mx-auto mb-3" />
                <p className="text-text font-medium">Johannesburg, South Africa</p>
                <p className="text-text-dim text-sm">Available for projects nationwide</p>
              </div>
            </div>
          </div>
        </Card>
      </Section>

      {/* CTA */}
      <Section className="pb-8">
        <Card>
          <div className="text-center py-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-full mb-6">
              <Phone size={32} className="text-primary" />
            </div>
            <h3 className="text-2xl font-semibold text-text mb-4">
              Let&apos;s Create Beautiful Spaces
            </h3>
            <p className="text-text-muted mb-8 max-w-xl mx-auto">
              Whether you have a specific project in mind or just want to explore
              possibilities, we&apos;re here to help bring your vision to life.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:+27123456789"
                className="inline-flex items-center px-6 py-3 bg-primary text-background font-medium rounded-md hover:bg-primary-muted transition-colors"
              >
                <Phone size={18} className="mr-2" />
                Call Us
              </a>
              <a
                href="mailto:info@makekointeriors.co.za"
                className="inline-flex items-center px-6 py-3 border border-border text-text font-medium rounded-md hover:bg-surface-hover transition-colors"
              >
                <Mail size={18} className="mr-2" />
                Email Us
              </a>
            </div>
          </div>
        </Card>
      </Section>
    </Layout>
  );
}
