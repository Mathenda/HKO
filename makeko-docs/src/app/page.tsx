"use client";

import Layout from "@/components/Layout";
import { Card, Section, Badge } from "@/components/ui";
import { motion } from "framer-motion";
import {
  Building2,
  Ruler,
  PenTool,
  Hammer,
  Palette,
  Package,
  ArrowRight,
  CheckCircle2,
  Quote,
  Star,
} from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

const services = [
  {
    name: "Concept Development",
    description: "Client consultation, mood boards, material concepts, and 3D visualization",
    icon: Palette,
    href: "/services#concept",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80",
  },
  {
    name: "Space Planning",
    description: "Functional layouts, workflow optimization, and spatial strategies",
    icon: Ruler,
    href: "/services#planning",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
  },
  {
    name: "Technical Design",
    description: "Design documentation, construction drawings, and technical detailing",
    icon: PenTool,
    href: "/services#technical",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80",
  },
  {
    name: "Interior Fit-Out",
    description: "Flooring, ceilings, wall finishes, cladding, and lighting installation",
    icon: Hammer,
    href: "/services#fitout",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80",
  },
  {
    name: "Custom Design",
    description: "Kitchens, TV units, wardrobes, and custom furniture manufacturing",
    icon: Building2,
    href: "/services#custom",
    image: "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=800&q=80",
  },
  {
    name: "Styling & Installation",
    description: "Curtains, blinds, decorative pieces, procurement, and project management",
    icon: Package,
    href: "/services#styling",
    image: "https://images.unsplash.com/photo-1616137466211-f939a420be84?w=800&q=80",
  },
];

const sectors = [
  { name: "Office", count: 9, href: "/portfolio/office", image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80" },
  { name: "Retail", count: 5, href: "/portfolio/retail", image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&q=80" },
  { name: "Healthcare", count: 9, href: "/portfolio/healthcare", image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80" },
  { name: "Residential", count: 5, href: "/portfolio/residential", image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80" },
];

const testimonials = [
  {
    quote: "Makeko transformed our office space into something truly exceptional. Their attention to detail and technical expertise exceeded our expectations.",
    author: "Sarah Mitchell",
    role: "CEO, TechVentures",
    rating: 5,
  },
  {
    quote: "The team delivered a stunning retail environment that has significantly improved our customer experience and sales flow.",
    author: "David Chen",
    role: "Store Director, Luxe Retail",
    rating: 5,
  },
  {
    quote: "Professional, creative, and technically sound. They understood our healthcare requirements and delivered perfectly.",
    author: "Dr. Amanda Foster",
    role: "Medical Director, HealthCare Plus",
    rating: 5,
  },
];

const stats = [
  { value: "150+", label: "Projects Completed" },
  { value: "50+", label: "Happy Clients" },
  { value: "8", label: "Years Experience" },
  { value: "12", label: "Design Awards" },
];

export default function HomePage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Layout>
      {/* Hero Section with Background Image */}
      <section className="relative min-h-screen flex items-end overflow-hidden -mx-6 lg:-mx-12 -mt-8 lg:-mt-12 mb-16">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1920&q=80)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.65) saturate(1.1)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(15,23,42,0.96) 0%, rgba(15,23,42,0.5) 40%, rgba(15,23,42,0.1) 100%)",
          }}
        />
        <div className="relative z-10 w-full px-6 lg:px-12 pb-20 pt-48">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="primary" className="mb-5">Established 2018</Badge>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl lg:text-7xl font-semibold text-text tracking-tight mb-5 max-w-3xl"
          >
            Makeko Interiors
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-text-muted max-w-xl leading-relaxed mb-8"
          >
            A forward-thinking interior design studio dedicated to delivering technically sound,
            creative, and functional interior environments.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <Link href="/portfolio">
              <button className="inline-flex items-center px-6 py-3 bg-primary text-background font-medium rounded-md hover:bg-primary-muted transition-colors">
                View Our Work
                <ArrowRight size={18} className="ml-2" />
              </button>
            </Link>
            <Link href="/contact">
              <button className="inline-flex items-center px-6 py-3 border border-border text-text font-medium rounded-md hover:bg-surface-hover transition-colors">
                Get in Touch
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <Section className="pt-0">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="text-center py-8 border-t border-border first:border-t-0"
            >
              <div className="text-4xl lg:text-5xl font-semibold text-text mb-2 tracking-tight">
                {stat.value}
              </div>
              <div className="text-sm text-text-muted">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Core Approach */}
      <Section>
        <Card className="texture-overlay">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-semibold text-text mb-4">
                Our Approach
              </h2>
              <p className="text-text-muted leading-relaxed mb-6">
                We approach every project with a balance of creativity and precision,
                ensuring that every detail — from spatial planning to material specification —
                is carefully considered and expertly executed.
              </p>
              <ul className="space-y-3">
                {[
                  "Creative spatial solutions tailored to your needs",
                  "Technical precision in every detail",
                  "Seamless collaboration from concept to completion",
                  "Buildability and practical implementation focus",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 stagger-item">
                    <CheckCircle2 size={20} className="text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-text-muted">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-80 rounded-md overflow-hidden image-card">
              <img
                src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&q=80"
                alt="Modern office interior"
                className="w-full h-full object-cover"
              />
              <div className="image-overlay" />
            </div>
          </div>
        </Card>
      </Section>

      {/* Services Grid */}
      <Section>
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-text mb-3">Services</h2>
          <p className="text-text-muted">Comprehensive interior design services from concept to installation</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <Link href={service.href}>
                <Card hover className="h-full group p-0 overflow-hidden">
                  <div className="h-64 overflow-hidden relative">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(15,23,42,0.85) 0%, rgba(15,23,42,0.1) 50%, transparent 100%)' }} />
                    <div className="absolute bottom-4 left-4 p-1.5 bg-surface border border-border rounded-md">
                      <service.icon size={18} className="text-primary" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-text mb-2 group-hover:text-primary transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-sm text-text-muted leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <div className="flex items-center text-primary text-sm font-medium">
                      Learn more
                      <ArrowRight size={16} className="ml-2" />
                    </div>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Selected Work — Image Mosaic */}
      <section className="py-12 lg:py-16">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-text mb-2">Selected Work</h2>
            <p className="text-text-muted">A selection from our portfolio</p>
          </div>
          <Link href="/portfolio" className="text-sm text-text-muted hover:text-text transition-colors flex items-center gap-1.5">
            View all <ArrowRight size={14} />
          </Link>
        </div>
        <div className="gallery-mosaic -mx-6 lg:-mx-12">
          <div className="gallery-cell-tall">
            <img
              src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80"
              alt="Interior design project"
            />
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
              alt="Office interior"
            />
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80"
              alt="Interior concept"
            />
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=800&q=80"
              alt="Kitchen design"
            />
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80"
              alt="Healthcare interior"
            />
          </div>
        </div>
      </section>

      {/* Portfolio Sectors */}
      <Section>
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-text mb-3">Portfolio</h2>
          <p className="text-text-muted">Explore our work across different sectors</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sectors.map((sector, index) => (
            <motion.div
              key={sector.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <Link href={sector.href}>
                <Card hover className="h-full group p-0 overflow-hidden">
                  <div className="h-72 overflow-hidden relative">
                    <img
                      src={sector.image}
                      alt={sector.name}
                      className="w-full h-full object-cover"
                    />
                    <div
                      className="absolute inset-0"
                      style={{ background: "linear-gradient(to top, rgba(15,23,42,0.88) 0%, rgba(15,23,42,0.2) 45%, transparent 100%)" }}
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <h3 className="text-xl font-semibold text-text mb-1 group-hover:text-primary transition-colors">
                        {sector.name}
                      </h3>
                      <p className="text-sm text-text-dim">{sector.count} projects</p>
                    </div>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Testimonials Section */}
      <Section>
        <Card className="overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-semibold text-text mb-6">
                What Our Clients Say
              </h2>
              <div className="relative min-h-[200px]">
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={testimonial.author}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{
                      opacity: index === currentTestimonial ? 1 : 0,
                      x: index === currentTestimonial ? 0 : 20,
                    }}
                    transition={{ duration: 0.4 }}
                    className={`absolute inset-0 ${index === currentTestimonial ? 'relative' : 'pointer-events-none'}`}
                  >
                    <Quote size={32} className="text-primary/30 mb-4" />
                    <p className="text-lg text-text-muted leading-relaxed mb-6">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="flex gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} size={16} className="text-primary fill-primary" />
                        ))}
                      </div>
                    </div>
                    <div className="mt-4">
                      <div className="font-semibold text-text">{testimonial.author}</div>
                      <div className="text-sm text-text-dim">{testimonial.role}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="flex gap-2 mt-6">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentTestimonial ? 'bg-primary' : 'bg-border'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
            <div className="relative h-80 rounded-md overflow-hidden image-card">
              <img
                src="https://images.unsplash.com/photo-1600607686527-6fb886090705?w=800&q=80"
                alt="Beautiful interior space"
                className="w-full h-full object-cover"
              />
              <div className="image-overlay" />
            </div>
          </div>
        </Card>
      </Section>

      {/* Design Philosophy */}
      <Section>
        <Card>
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-text mb-3">Design Philosophy</h2>
            <p className="text-text-muted">What guides our work</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <p className="text-text-muted leading-relaxed mb-6">
                Successful interior environments must respond to human experience and
                functionality while being supported by strong technical detailing and
                aligning with architectural and construction requirements.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Creative spatial solutions",
                  "Attention to space planning and materiality",
                  "Lighting and ergonomics expertise",
                  "Buildability and technical precision",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-text-muted">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { label: "Technical Detailing", desc: "Precise construction documentation and specifications for seamless builds" },
                { label: "Design Documentation", desc: "Comprehensive drawings from concept through to completion" },
                { label: "Spatial Planning", desc: "Functional layouts optimized for flow, ergonomics, and efficiency" },
                { label: "Material Specification", desc: "Curated material palettes aligned with brief and budget" },
              ].map((item) => (
                <div key={item.label} className="p-5 bg-background-secondary border border-border rounded-md">
                  <div className="text-sm font-semibold text-text mb-2">{item.label}</div>
                  <p className="text-xs text-text-muted leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </Section>

      {/* CTA */}
      <section className="relative overflow-hidden -mx-6 lg:-mx-12 mt-4">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1920&q=80)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.45) saturate(1.1)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(15,23,42,0.95) 0%, rgba(15,23,42,0.55) 60%, rgba(15,23,42,0.2) 100%)",
          }}
        />
        <div className="relative z-10 px-6 lg:px-12 py-24 max-w-2xl">
          <h3 className="text-3xl font-semibold text-text mb-4">
            Let&apos;s Create Beautiful Spaces
          </h3>
          <p className="text-text-muted mb-8 max-w-lg leading-relaxed">
            Ready to start your project? Get in touch to discuss how we can
            help bring your vision to life with technical precision and creative excellence.
          </p>
          <Link href="/contact">
            <button className="inline-flex items-center px-6 py-3 bg-primary text-background font-medium rounded-md hover:bg-primary-muted transition-colors">
              Contact Us
              <ArrowRight size={18} className="ml-2" />
            </button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
