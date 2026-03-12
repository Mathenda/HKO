"use client";

import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import {
  Building2,
  Ruler,
  PenTool,
  Hammer,
  Palette,
  Package,
  ArrowRight,
  Quote,
} from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

const services = [
  {
    name: "Concept Development",
    description: "Client consultation, mood boards, material concepts, and 3D visualization",
    icon: Palette,
    href: "/services#concept",
  },
  {
    name: "Space Planning",
    description: "Functional layouts, workflow optimization, and spatial strategies",
    icon: Ruler,
    href: "/services#planning",
  },
  {
    name: "Technical Design",
    description: "Design documentation, construction drawings, and technical detailing",
    icon: PenTool,
    href: "/services#technical",
  },
  {
    name: "Interior Fit-Out",
    description: "Flooring, ceilings, wall finishes, cladding, and lighting installation",
    icon: Hammer,
    href: "/services#fitout",
  },
  {
    name: "Custom Design",
    description: "Kitchens, TV units, wardrobes, and custom furniture manufacturing",
    icon: Building2,
    href: "/services#custom",
  },
  {
    name: "Styling & Installation",
    description: "Curtains, blinds, decorative pieces, procurement, and project management",
    icon: Package,
    href: "/services#styling",
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
  },
  {
    quote: "The team delivered a stunning retail environment that has significantly improved our customer experience and sales flow.",
    author: "David Chen",
    role: "Store Director, Luxe Retail",
  },
  {
    quote: "Professional, creative, and technically sound. They understood our healthcare requirements and delivered perfectly.",
    author: "Dr. Amanda Foster",
    role: "Medical Director, HealthCare Plus",
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

      {/*  Hero  */}
      <section className="-mx-6 lg:-mx-12 -mt-8 lg:-mt-12 mb-24 min-h-screen flex flex-col lg:flex-row">
        {/* Text half */}
        <div className="flex flex-col justify-center px-8 lg:px-16 py-32 pt-32 lg:pt-24 bg-background w-full lg:w-1/2">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="label-caps mb-10"
          >
            Est. 2018 &middot; Johannesburg
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="text-[clamp(3.5rem,6vw,6rem)] font-light text-text leading-[0.94] tracking-tight mb-8"
          >
            Makeko
            <br />
            Interiors
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="w-8 h-px bg-border mb-8"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-text-muted text-sm max-w-xs leading-relaxed mb-12"
          >
            A forward-thinking interior design studio dedicated to delivering
            technically sound, creative, and functional interior environments.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.65 }}
            className="flex flex-wrap gap-2"
          >
            <Link href="/portfolio">
              <button className="inline-flex items-center gap-3 px-7 py-3.5 bg-text text-background text-[11px] tracking-[0.12em] uppercase font-medium hover:bg-text/80 transition-colors duration-200">
                View Portfolio
                <ArrowRight size={13} />
              </button>
            </Link>
            <Link href="/contact">
              <button className="inline-flex items-center px-7 py-3.5 border border-border text-text-muted text-[11px] tracking-[0.12em] uppercase font-light hover:border-text hover:text-text transition-all duration-200">
                Get in Touch
              </button>
            </Link>
          </motion.div>
        </div>

        {/* Image half */}
        <div className="hidden lg:block relative flex-1 overflow-hidden min-h-full">
          <img
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=80"
            alt="Interior space"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </section>

      {/*  Stats  */}
      <section className="border-y border-border mb-24">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className={`text-center py-12 ${index > 0 ? "border-l border-border" : ""}`}
            >
              <div className="text-5xl lg:text-6xl font-light text-text mb-3">
                {stat.value}
              </div>
              <div className="label-caps">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/*  Our Approach  */}
      <section className="mb-24 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="label-caps mb-4">Our Philosophy</p>
          <h2 className="text-4xl lg:text-5xl font-light text-text mb-6 leading-tight tracking-tight">
            Where precision meets<br />creative vision
          </h2>
          <div className="w-8 h-px bg-border mb-8" />
          <p className="text-text-muted leading-relaxed mb-8 font-light text-sm lg:text-base">
            We approach every project with a balance of creativity and precision,
            ensuring that every detail  from spatial planning to material specification 
            is carefully considered and expertly executed.
          </p>
          <ul className="space-y-4">
            {[
              "Creative spatial solutions tailored to your needs",
              "Technical precision in every detail",
              "Seamless collaboration from concept to completion",
              "Buildability and practical implementation focus",
            ].map((item) => (
              <li key={item} className="flex items-center gap-4">
                <span className="w-1.5 h-1.5 bg-text-dim shrink-0" />
                <span className="text-text-muted text-sm font-light leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative h-125 overflow-hidden"
        >
          <img
            src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&q=80"
            alt="Modern interior design"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </section>

      {/*  Services  */}
      <section className="mb-24">
        <div className="mb-14">
          <p className="label-caps mb-4">What We Do</p>
          <h2 className="text-4xl lg:text-5xl font-light text-text tracking-tight">Services</h2>
        </div>

        <div className="border-t border-border">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="service-row group"
            >
              <Link href={service.href}>
                <div className="flex items-center justify-between py-6 lg:py-8">
                  <div className="flex items-center gap-6 lg:gap-14">
                    <span className="text-[11px] text-text-muted font-light w-6 shrink-0 tabular-nums">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-xl lg:text-2xl font-light text-text group-hover:text-text-muted transition-colors duration-200">
                      {service.name}
                    </h3>
                  </div>
                  <div className="flex items-center gap-8">
                    <p className="hidden lg:block text-sm text-text-muted font-light max-w-xs text-right leading-relaxed">
                      {service.description}
                    </p>
                    <ArrowRight
                      size={17}
                      className="text-text-dim group-hover:text-text group-hover:translate-x-1 transition-all duration-200 shrink-0"
                    />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/*  Selected Work  */}
      <section className="mb-24">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <p className="label-caps mb-3">Selected Work</p>
            <h2 className="text-4xl lg:text-5xl font-light text-text tracking-tight">
              Recent Projects
            </h2>
          </div>
          <Link
            href="/portfolio"
            className="hidden lg:flex items-center gap-2 text-[11px] tracking-widest uppercase text-text-muted hover:text-text transition-colors duration-200"
          >
            View All <ArrowRight size={11} />
          </Link>
        </div>
        <div className="gallery-mosaic -mx-6 lg:-mx-12">
          <div className="gallery-cell-tall">
            <img src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80" alt="Interior design project" />
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80" alt="Office interior" />
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80" alt="Interior concept" />
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=800&q=80" alt="Kitchen design" />
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80" alt="Healthcare interior" />
          </div>
        </div>
      </section>

      {/*  Portfolio Sectors  */}
      <section className="mb-24">
        <div className="mb-14">
          <p className="label-caps mb-4">Expertise</p>
          <h2 className="text-4xl lg:text-5xl font-light text-text tracking-tight">Portfolio</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-0.5 text-white">
          {sectors.map((sector, index) => (
            <motion.div
              key={sector.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <Link href={sector.href}>
                <div className="group relative h-96 overflow-hidden cursor-pointer">
                  <img
                    src={sector.image}
                    alt={sector.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0 transition-opacity duration-300"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.2) 55%, transparent 100%)",
                    }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="label-caps text-white mb-1.5">{sector.count} projects</p>
                    <h3 className="text-xl font-light text-white">
                      {sector.name}
                    </h3>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/*  Testimonials  */}
      <section className="mb-0 border-t border-border pt-24">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
<p className="label-caps mb-8">Client Voices</p>
          <Quote size={32} className="text-text-dim mb-6" />

            <div className="relative min-h-55">
              {testimonials.map((t, i) => (
                <motion.div
                  key={t.author}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{
                    opacity: i === currentTestimonial ? 1 : 0,
                    y: i === currentTestimonial ? 0 : 10,
                  }}
                  transition={{ duration: 0.5 }}
                  className={`${
                    i === currentTestimonial
                      ? "relative"
                      : "absolute inset-0 pointer-events-none"
                  }`}
                >
                  <p className="text-2xl lg:text-3xl font-light text-text leading-relaxed mb-8">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-px bg-border" />
                    <div>
                      <div className="text-sm font-medium text-text">{t.author}</div>
                      <div className="label-caps mt-1">{t.role}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex gap-3 mt-8">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentTestimonial(i)}
                  className={`h-px transition-all duration-300 ${
                    i === currentTestimonial
                      ? "w-8 bg-text"
                      : "w-4 bg-border hover:bg-text-dim"
                  }`}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-120 overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1600607686527-6fb886090705?w=800&q=80"
              alt="Beautiful interior space"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/*  Design Philosophy  */}
      <section className="mt-24 mb-0 pt-24 border-t border-border">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <p className="label-caps mb-4">Design Philosophy</p>
            <h2 className="text-4xl lg:text-5xl font-light text-text mb-6 leading-tight tracking-tight">
              What guides our work
            </h2>
            <div className="w-8 h-px bg-border mb-8" />
            <p className="text-text-muted leading-relaxed mb-10 font-light text-sm lg:text-base">
              Successful interior environments must respond to human experience and
              functionality while being supported by strong technical detailing and
              aligning with architectural and construction requirements.
            </p>
            <div className="grid sm:grid-cols-2 gap-0.5">
              {[
                { label: "Technical Detailing", desc: "Precise construction documentation and specifications for seamless builds" },
                { label: "Design Documentation", desc: "Comprehensive drawings from concept through to completion" },
                { label: "Spatial Planning", desc: "Functional layouts optimized for flow, ergonomics, and efficiency" },
                { label: "Material Specification", desc: "Curated material palettes aligned with brief and budget" },
              ].map((item) => (
                <div key={item.label} className="p-5 bg-surface border border-border">
                  <div className="w-4 h-px bg-border mb-4" />
                  <div className="text-sm font-medium text-text mb-2 tracking-wide">{item.label}</div>
                  <p className="text-xs text-text-muted leading-relaxed font-light">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-0.5 self-start">
            {[
              "Creative spatial solutions",
              "Attention to space planning and materiality",
              "Lighting and ergonomics expertise",
              "Buildability and technical precision",
            ].map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="p-6 border border-border bg-surface flex flex-col justify-between min-h-35"
              >
                <span className="text-[11px] text-text-dim font-light tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-sm text-text-muted font-light leading-relaxed mt-auto">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/*  CTA  */}
      <section className="-mx-6 lg:-mx-12 mt-24 bg-text px-8 lg:px-16 py-24">
        <p className="label-caps text-background/40 mb-8">Start A Project</p>
        <h3 className="text-5xl lg:text-6xl font-light text-background mb-6 leading-tight tracking-tight">
          Let&apos;s create<br />beautiful spaces.
        </h3>
        <div className="w-8 h-px bg-background/20 mb-8" />
        <p className="text-background/55 mb-10 max-w-md leading-relaxed font-light text-sm">
          Ready to start your project? Get in touch to discuss how we can
          help bring your vision to life with technical precision and creative excellence.
        </p>
        <Link href="/contact">
          <button className="group inline-flex items-center gap-4 px-7 py-3.5 border border-background/25 text-background text-[11px] tracking-[0.12em] uppercase font-light hover:border-background/60 transition-all duration-300">
            Enquire Now
            <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </Link>
      </section>

    </Layout>
  );
}
