"use client";

import Layout from "@/components/Layout";
import { Card, Section, Badge } from "@/components/ui";
import { motion } from "framer-motion";
import { Building2, ArrowLeft, MapPin, Calendar, Maximize2 } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    name: "Tech Hub Office",
    description: "Modern reception area with integrated branding and visitor management",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    location: "Sandton, Johannesburg",
    year: "2024",
    size: "2,500 sqm",
  },
  {
    name: "Creative Studio",
    description: "Flexible workspace design with collaborative zones and privacy pods",
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&q=80",
    location: "Maboneng, Johannesburg",
    year: "2023",
    size: "1,800 sqm",
  },
  {
    name: "Corporate Headquarters",
    description: "High-end meeting space with integrated AV systems and custom joinery",
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&q=80",
    location: "Rosebank, Johannesburg",
    year: "2024",
    size: "3,200 sqm",
  },
  {
    name: "Innovation Hub",
    description: "Informal collaboration space with comfortable seating and natural lighting",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80",
    location: "Sandton, Johannesburg",
    year: "2023",
    size: "1,500 sqm",
  },
  {
    name: "Executive Floor",
    description: "Staff dining area with modern finishes and efficient circulation",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80",
    location: "Sandton, Johannesburg",
    year: "2024",
    size: "1,200 sqm",
  },
  {
    name: "Business Lounge",
    description: "Executive offices with custom millwork and premium material palette",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80",
    location: "Fourways, Johannesburg",
    year: "2023",
    size: "900 sqm",
  },
  {
    name: "Conference Center",
    description: "Large-scale conference facility with flexible partitioning",
    image: "https://images.unsplash.com/photo-1517502884422-41e157d4430c?w=800&q=80",
    location: "Sandton, Johannesburg",
    year: "2024",
    size: "2,000 sqm",
  },
  {
    name: "Office Lobby",
    description: "Impressive entrance lobby with feature wall and reception desk",
    image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?w=800&q=80",
    location: "Pretoria",
    year: "2023",
    size: "800 sqm",
  },
  {
    name: "Co-working Space",
    description: "Flexible co-working environment with hot desks and meeting rooms",
    image: "https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?w=800&q=80",
    location: "Cape Town",
    year: "2024",
    size: "1,600 sqm",
  },
];

export default function OfficePortfolioPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden -mx-6 lg:-mx-12 px-6 lg:px-12 mb-16">
        <div
          className="hero-bg-image"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80)`,
          }}
        />
        <div className="relative z-10 text-center max-w-4xl mx-auto pt-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/portfolio"
              className="inline-flex items-center text-text-muted hover:text-text mb-6 transition-colors"
            >
              <ArrowLeft size={16} className="mr-2" />
              Back to Portfolio
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Badge variant="primary" className="mb-6">Office Environments</Badge>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl lg:text-5xl font-semibold text-text tracking-tight mb-6"
          >
            Office Projects
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-xl text-text-muted max-w-2xl mx-auto leading-relaxed"
          >
            Corporate office environments designed for productivity, collaboration,
            and employee wellbeing.
          </motion.p>
        </div>
      </section>

      {/* Projects Grid */}
      <Section>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <Card className="h-full p-0 overflow-hidden group">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center gap-3 text-sm text-text">
                      <span className="flex items-center gap-1">
                        <MapPin size={14} />
                        {project.location}
                      </span>
                    </div>
                    <Maximize2 size={18} className="text-text cursor-pointer" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-text mb-2">
                    {project.name}
                  </h3>
                  <p className="text-sm text-text-muted mb-4">{project.description}</p>
                  <div className="flex items-center justify-between text-xs text-text-dim">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />
                      {project.year}
                    </span>
                    <span className="flex items-center gap-1">
                      <Building2 size={12} />
                      {project.size}
                    </span>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>
    </Layout>
  );
}
