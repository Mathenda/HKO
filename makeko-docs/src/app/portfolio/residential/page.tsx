"use client";

import Layout from "@/components/Layout";
import { Card, Section, Badge } from "@/components/ui";
import { motion, AnimatePresence } from "framer-motion";
import { Home, ArrowLeft, MapPin, Calendar, Maximize2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const projects = [
  {
    name: "Modern Apartment",
    description: "A modern apartment layout with seamless flow and refined finishes.",
    images: [
      "/Residential/Residential1/Picture54.jpg",
      "/Residential/Residential1/Picture55.jpg",
      "/Residential/Residential1/Picture56.jpg",
      "/Residential/Residential1/Picture57.jpg",
      "/Residential/Residential1/Picture58.jpg",
    ],
    location: "Sandton, Johannesburg",
    year: "2024",
    size: "180 sqm",
  },
  {
    name: "Family Home",
    description: "A family home interior designed for comfort and everyday living.",
    images: [
      "/Residential/Residential2/Picture59.png",
      "/Residential/Residential2/Picture60.png",
      "/Residential/Residential2/Picture61.png",
      "/Residential/Residential2/Picture62.jpg",
    ],
    location: "Fourways, Johannesburg",
    year: "2023",
    size: "320 sqm",
  },
  {
    name: "Luxury Penthouse",
    description: "A luxurious penthouse with premium materials and skyline views.",
    images: [
      "/Residential/Residential3/Picture63.png",
      "/Residential/Residential3/Picture64.png",
      "/Residential/Residential3/Picture65.png",
      "/Residential/Residential3/Picture66.png",
      "/Residential/Residential3/Picture67.png",
    ],
    location: "Sandton, Johannesburg",
    year: "2024",
    size: "420 sqm",
  },
];

export default function ResidentialPortfolioPage() {
  const [openProject, setOpenProject] = useState<string | null>(null);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden -mx-6 lg:-mx-12 px-6 lg:px-12 mb-16">
        <div
          className="hero-bg-image"
          style={{
            backgroundImage: `url(/Residential/Residential1/Picture54.jpg)`,
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
            <Badge variant="primary" className="mb-6">Residential Interiors</Badge>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl lg:text-5xl font-semibold text-text tracking-tight mb-6"
          >
            Residential Projects
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-xl text-text-muted max-w-2xl mx-auto leading-relaxed"
          >
            Personal living spaces that reflect individual style and enhance daily life.
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
                    src={project.images[0]}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-background to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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

                  <div className="grid grid-cols-3 gap-2 mb-4">
                    {project.images.slice(0, 3).map((src) => (
                      <img
                        key={src}
                        src={src}
                        alt={project.name}
                        className="h-16 w-full object-cover rounded"
                      />
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      setOpenProject(openProject === project.name ? null : project.name)
                    }
                    className="text-xs font-medium text-primary hover:text-primary-muted transition-colors"
                  >
                    {openProject === project.name ? "Hide gallery" : "View gallery"}
                  </button>

                  <AnimatePresence>
                    {openProject === project.name && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <div className="grid grid-cols-3 gap-2 mt-4">
                          {project.images.map((src) => (
                            <img
                              key={src}
                              src={src}
                              alt={`${project.name} gallery`}
                              className="h-20 w-full object-cover rounded"
                            />
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="flex items-center justify-between text-xs text-text-dim mt-4">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />
                      {project.year}
                    </span>
                    <span className="flex items-center gap-1">
                      <Home size={12} />
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
