"use client";

import Layout from "@/components/Layout";
import { Card, Section, Badge } from "@/components/ui";
import { motion } from "framer-motion";
import { Heart, ArrowLeft, MapPin, Calendar, Maximize2 } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    name: "Medical Center Reception",
    description: "Welcoming healthcare reception with patient-focused design",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80",
    location: "Sandton, Johannesburg",
    year: "2024",
    size: "320 sqm",
  },
  {
    name: "Hospital Duty Station",
    description: "Efficient nursing station with integrated technology",
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&q=80",
    location: "Johannesburg",
    year: "2023",
    size: "180 sqm",
  },
  {
    name: "Dental Clinic",
    description: "Modern dental practice with calming patient areas",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80",
    location: "Pretoria",
    year: "2024",
    size: "420 sqm",
  },
  {
    name: "Specialist Consulting Rooms",
    description: "Professional medical suites with premium finishes",
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&q=80",
    location: "Rosebank, Johannesburg",
    year: "2023",
    size: "280 sqm",
  },
  {
    name: "Pharmacy Interior",
    description: "Retail pharmacy with optimal customer flow",
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800&q=80",
    location: "Sandton, Johannesburg",
    year: "2024",
    size: "150 sqm",
  },
  {
    name: "Wellness Clinic",
    description: "Holistic health center with serene atmosphere",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80",
    location: "Cape Town",
    year: "2023",
    size: "380 sqm",
  },
  {
    name: "Day Surgery Center",
    description: "Ambulatory surgery facility with patient comfort focus",
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&q=80",
    location: "Johannesburg",
    year: "2024",
    size: "650 sqm",
  },
  {
    name: "Medical Laboratory",
    description: "Clinical laboratory with functional workflow design",
    image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&q=80",
    location: "Sandton, Johannesburg",
    year: "2023",
    size: "420 sqm",
  },
  {
    name: "Pediatric Clinic",
    description: "Child-friendly medical space with playful elements",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80",
    location: "Fourways, Johannesburg",
    year: "2024",
    size: "340 sqm",
  },
];

export default function HealthcarePortfolioPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden -mx-6 lg:-mx-12 px-6 lg:px-12 mb-16">
        <div
          className="hero-bg-image"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1920&q=80)`,
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
            <Badge variant="primary" className="mb-6">Healthcare Facilities</Badge>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl lg:text-5xl font-semibold text-text tracking-tight mb-6"
          >
            Healthcare Projects
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-xl text-text-muted max-w-2xl mx-auto leading-relaxed"
          >
            Healthcare environments that prioritize patient comfort and clinical efficiency.
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
                      <Heart size={12} />
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
