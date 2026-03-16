"use client";

import Layout from "@/components/Layout";
import { Card, Section, Badge } from "@/components/ui";
import { motion } from "framer-motion";
import { Building2, Store, Heart, Home, ArrowRight, Grid3X3, MapPin, Calendar } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import ImageLightbox from "@/components/ImageLightbox";

const sectors = [
  {
    name: "Office",
    description: "Corporate office environments, reception areas, and meeting rooms",
    icon: Building2,
    count: 9,
    href: "/portfolio/office",
    image: "/Office/Office1/Picture9.png",
    color: "primary",
    featured: [
      { name: "Tech Hub Office", location: "Sandton, Johannesburg", year: "2024" },
      { name: "Creative Studio", location: "Maboneng, Johannesburg", year: "2023" },
    ],
  },
  {
    name: "Retail",
    description: "Stores, display areas, and commercial interiors",
    icon: Store,
    count: 5,
    href: "/portfolio/retail",
    image: "/Retail/Retail1/Picture23.png",
    color: "secondary",
    featured: [
      { name: "Luxury Boutique", location: "Rosebank, Johannesburg", year: "2024" },
      { name: "Concept Store", location: "Cape Town", year: "2023" },
    ],
  },
  {
    name: "Healthcare",
    description: "Hospital duty stations, waiting areas, and medical interiors",
    icon: Heart,
    count: 9,
    href: "/portfolio/healthcare",
    image: "/Health/Health1/Picture38.png",
    color: "accent",
    featured: [
      { name: "Medical Center", location: "Sandton, Johannesburg", year: "2024" },
      { name: "Dental Clinic", location: "Pretoria", year: "2023" },
    ],
  },
  {
    name: "Residential",
    description: "Living rooms, kitchens, bedrooms, and custom furniture",
    icon: Home,
    count: 5,
    href: "/portfolio/residential",
    image: "/Residential/Residential1/Picture54.jpg",
    color: "primary",
    featured: [
      { name: "Modern Apartment", location: "Sandton, Johannesburg", year: "2024" },
      { name: "Family Home", location: "Fourways, Johannesburg", year: "2023" },
    ],
  },
];

export default function PortfolioPage() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden -mx-6 lg:-mx-12 px-6 lg:px-12 mb-16">
        <div
          className="hero-bg-image"
          style={{
            backgroundImage: `url(/Office/Office1/Picture9.png)`,
          }}
        />
        <div className="relative z-10 text-center max-w-4xl mx-auto pt-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="primary" className="mb-6">Our Work</Badge>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl lg:text-5xl font-semibold text-text tracking-tight mb-6"
          >
            Portfolio
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-text-muted max-w-2xl mx-auto leading-relaxed"
          >
            Explore our diverse portfolio spanning office, retail, healthcare, and
            residential sectors. Each project demonstrates our commitment to technical
            precision and creative spatial solutions.
          </motion.p>
        </div>
      </section>

      {/* Stats Bar */}
      <Section className="pt-0">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {sectors.map((sector) => (
            <Link key={sector.name} href={sector.href}>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.2 }}
                className="group"
              >
                <Card className="h-full hover:border-primary/50 transition-colors">
                  <div className="flex items-center justify-between mb-3">
                    <sector.icon size={24} className="text-primary" />
                    <ArrowRight size={18} className="text-text-dim group-hover:text-primary transition-colors" />
                  </div>
                  <div className="text-2xl font-semibold text-text mb-1">{sector.count}</div>
                  <div className="text-sm text-text-muted">{sector.name} Projects</div>
                </Card>
              </motion.div>
            </Link>
          ))}
        </div>
      </Section>

      {/* Sector Cards with Featured Projects */}
      {sectors.map((sector, index) => (
        <Section key={sector.name}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <Card className="overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                <button
                  type="button"
                  onClick={() => setSelectedImage({ src: sector.image, alt: `${sector.name} featured image` })}
                  className="relative h-64 lg:h-80 overflow-hidden group text-left w-full cursor-zoom-in"
                  aria-label={`Open ${sector.name} image fullscreen`}
                >
                  <img
                    src={sector.image}
                    alt={sector.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/45" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-black/50 border border-white/20 backdrop-blur-sm rounded-md">
                        <sector.icon size={24} className="text-white" />
                      </div>
                      <Badge variant="default" className="border-white/40 text-white bg-black/35">
                        {sector.count} Projects
                      </Badge>
                    </div>
                    <h2 className="text-2xl font-semibold text-white mb-2">{sector.name}</h2>
                    <p className="text-white/80">{sector.description}</p>
                  </div>
                </button>
                <div className="p-8 lg:p-10 flex flex-col justify-center">
                  <h3 className="text-sm font-semibold text-text mb-4 flex items-center gap-2">
                    <Grid3X3 size={18} className="text-primary" />
                    Featured Projects
                  </h3>
                  <div className="space-y-4 mb-8">
                    {sector.featured.map((project) => (
                      <div
                        key={project.name}
                        className="flex items-start justify-between p-4 bg-surface border border-border rounded-md hover:border-primary/50 transition-colors"
                      >
                        <div>
                          <h4 className="font-semibold text-text mb-1">{project.name}</h4>
                          <div className="flex items-center gap-4 text-sm text-text-muted">
                            <span className="flex items-center gap-1">
                              <MapPin size={14} />
                              {project.location}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-text-dim">
                          <Calendar size={14} />
                          {project.year}
                        </div>
                      </div>
                    ))}
                  </div>
                  <Link href={sector.href}>
                    <button className="inline-flex items-center text-primary font-medium hover:text-primary-muted transition-colors group">
                      View all {sector.name.toLowerCase()} projects
                      <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </Link>
                </div>
              </div>
            </Card>
          </motion.div>
        </Section>
      ))}

      {/* Full Gallery CTA */}
      <Section className="pb-8">
        <Card className="bg-surface">
          <div className="text-center py-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-full mb-6">
              <Building2 size={32} className="text-primary" />
            </div>
            <h3 className="text-2xl font-semibold text-text mb-4">
              Want to See More?
            </h3>
            <p className="text-text-muted mb-8 max-w-xl mx-auto">
              Browse our complete project gallery to see the full range of our work
              across all sectors and specialties.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/portfolio/office">
                <button className="inline-flex items-center px-6 py-3 bg-primary text-background font-medium rounded-md hover:bg-primary-muted transition-colors">
                  Office Projects
                </button>
              </Link>
              <Link href="/portfolio/residential">
                <button className="inline-flex items-center px-6 py-3 border border-border text-text font-medium rounded-md hover:bg-surface-hover transition-colors">
                  Residential Projects
                </button>
              </Link>
            </div>
          </div>
        </Card>
      </Section>

      <ImageLightbox
        src={selectedImage?.src ?? null}
        alt={selectedImage?.alt ?? "Portfolio image"}
        onClose={() => setSelectedImage(null)}
      />
    </Layout>
  );
}
