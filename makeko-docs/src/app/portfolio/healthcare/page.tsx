"use client";

import Layout from "@/components/Layout";
import { Card, Section, Badge } from "@/components/ui";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, ArrowLeft, MapPin, Calendar, Maximize2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import ImageLightbox from "@/components/ImageLightbox";

const projects = [
  {
    name: "Medical Campus Reception",
    description: "A calm, welcoming reception and waiting space with thoughtful wayfinding.",
    images: [
      "/Health/Health1/Picture38.png",
      "/Health/Health1/Picture39.png",
      "/Health/Health1/Picture40.png",
    ],
    location: "Sandton, Johannesburg",
    year: "2024",
    size: "320 sqm",
  },
  {
    name: "Clinical Suite",
    description: "A functional clinical suite with integrated technology and efficient circulation.",
    images: [
      "/Health/Health2/Picture43.png",
      "/Health/Health2/Picture44.jpg",
      "/Health/Health2/Picture45.jpg",
      "/Health/Health2/Picture46.jpg",
    ],
    location: "Johannesburg",
    year: "2023",
    size: "620 sqm",
  },
  {
    name: "Wellness Hub",
    description: "A calming wellness interior focused on comfort and patient well-being.",
    images: [
      "/Health/Health3/Picture49.png",
      "/Health/Health3/Picture50.jpg",
      "/Health/Health3/Picture51.jpg",
      "/Health/Health3/Picture52.jpg",
      "/Health/Health3/Picture53.png",
    ],
    location: "Cape Town",
    year: "2024",
    size: "480 sqm",
  },
];

export default function HealthcarePortfolioPage() {
  const [openProject, setOpenProject] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden -mx-6 lg:-mx-12 px-6 lg:px-12 mb-16">
        <div
          className="hero-bg-image"
          style={{
            backgroundImage: `url(/Health/Health1/Picture38.png)`,
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
                <button
                  type="button"
                  onClick={() => setSelectedImage({ src: project.images[0], alt: project.name })}
                  className="relative h-56 overflow-hidden w-full text-left cursor-zoom-in"
                  aria-label={`Open ${project.name} image fullscreen`}
                >
                  <img
                    src={project.images[0]}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/45 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center gap-3 text-sm text-white">
                      <span className="flex items-center gap-1">
                        <MapPin size={14} />
                        {project.location}
                      </span>
                    </div>
                    <Maximize2 size={18} className="text-white cursor-pointer" />
                  </div>
                </button>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-text mb-2">
                    {project.name}
                  </h3>
                  <p className="text-sm text-text-muted mb-4">{project.description}</p>

                  <div className="grid grid-cols-3 gap-2 mb-4">
                    {project.images.slice(0, 3).map((src) => (
                      <button
                        type="button"
                        key={src}
                        onClick={() => setSelectedImage({ src, alt: `${project.name} thumbnail` })}
                        className="cursor-zoom-in"
                        aria-label={`Open ${project.name} thumbnail fullscreen`}
                      >
                        <img
                          src={src}
                          alt={project.name}
                          className="h-16 w-full object-cover rounded"
                        />
                      </button>
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
                            <button
                              type="button"
                              key={src}
                              onClick={() => setSelectedImage({ src, alt: `${project.name} gallery` })}
                              className="cursor-zoom-in"
                              aria-label={`Open ${project.name} gallery image fullscreen`}
                            >
                              <img
                                src={src}
                                alt={`${project.name} gallery`}
                                className="h-20 w-full object-cover rounded"
                              />
                            </button>
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

      <ImageLightbox
        src={selectedImage?.src ?? null}
        alt={selectedImage?.alt ?? "Healthcare portfolio image"}
        onClose={() => setSelectedImage(null)}
      />
    </Layout>
  );
}
