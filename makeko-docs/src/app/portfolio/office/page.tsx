"use client";

import Layout from "@/components/Layout";
import { Card, Section, Badge } from "@/components/ui";
import { motion } from "framer-motion";
import { Building2, ArrowLeft, MapPin, Calendar, Maximize2, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import ImageLightbox from "@/components/ImageLightbox";
import { blobUrl } from "@/config/site";

const projects = [
  {
    name: "Executive Hub",
    description: "A premium office project featuring a welcoming reception and collaborative work zones.",
    images: [
      "/Office/Office1/Office Mgibba 1.png",
      "/Office/Office1/Picture9.png",
      "/Office/Office1/Picture10.png",
      "/Office/Office1/Picture11.png",
      "/Office/Office1/Picture12.png",
    ],
    location: "Sandton, Johannesburg",
    year: "2024",
    size: "2,500 sqm",
  },
  {
    name: "Creative Studio",
    description: "A flexible workspace designed for team collaboration and focused work.",
    images: [
      "/Office/Office2/PT 1.png",
      "/Office/Office2/Picture13.png",
      "/Office/Office2/Picture14.png",
      "/Office/Office2/Picture15.png",
      "/Office/Office2/Picture16.png",
    ],
    location: "Maboneng, Johannesburg",
    year: "2023",
    size: "1,800 sqm",
  },
  {
    name: "Corporate Headquarters",
    description: "A high-end headquarters with meeting suites and executive areas.",
    images: [
      "/Office/Office3/Vuna 2.png",
      "/Office/Office3/Picture17.png",
      "/Office/Office3/Picture18.png",
      "/Office/Office3/Picture19.png",
      "/Office/Office3/Picture20.png",
      "/Office/Office3/Picture21.jpg",
      "/Office/Office3/Picture22.jpg",
    ],
    location: "Rosebank, Johannesburg",
    year: "2024",
    size: "3,200 sqm",
  },
  {
    name: "Consultation Suite",
    description: "A consultation-driven office interior focused on privacy and client comfort.",
    images: [
      "/Office/Office4/Consultation 1.png",
      "/Office/Office4/Consultation 2.png",
    ],
    location: "Johannesburg",
    year: "2025",
    size: "740 sqm",
  },
  {
    name: "Client Consult Hub",
    description: "A modern consultation hub balancing professional functionality with warmth.",
    images: [
      "/Office/Office5/Consult 2.png",
      "/Office/Office5/Consult 1 .png",
    ],
    location: "Pretoria",
    year: "2025",
    size: "680 sqm",
  },
];

export default function OfficePortfolioPage() {
  const [lightbox, setLightbox] = useState<{ images: string[]; index: number; alt: string } | null>(null);
  const [carouselIndex, setCarouselIndex] = useState<Record<string, number>>({});
  const getIdx = (name: string) => carouselIndex[name] ?? 0;
  const setIdx = (name: string, i: number) => setCarouselIndex(prev => ({ ...prev, [name]: i }));

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden -mx-6 lg:-mx-12 px-6 lg:px-12 mb-16">
        <div
          className="hero-bg-image"
          style={{
            backgroundImage: `url(${blobUrl("/Office/Office1/Office Mgibba 1.png")})`,  
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
            <Badge variant="primary" className="mb-6">Corporate Office Environments</Badge>
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
            Corporate office environments designed for productivity, collaboration, and employee wellbeing.
          </motion.p>
        </div>
      </section>

      {/* Projects Grid */}
      <Section className="pt-0">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <Card className="overflow-hidden h-full p-0">
                <div className="relative h-56 overflow-hidden">
                  <motion.img
                    key={getIdx(project.name)}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                    src={project.images[getIdx(project.name)]}
                    alt={project.name}
                    className="w-full h-full object-cover cursor-zoom-in"
                    onClick={() => setLightbox({ images: project.images, index: getIdx(project.name), alt: project.name })}
                  />
                  {project.images.length > 1 && (
                    <>
                      <button
                        type="button"
                        onClick={() => setIdx(project.name, (getIdx(project.name) - 1 + project.images.length) % project.images.length)}
                        className="absolute left-2 top-1/2 -translate-y-1/2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors"
                        aria-label="Previous image"
                      >
                        <ChevronLeft size={16} />
                      </button>
                      <button
                        type="button"
                        onClick={() => setIdx(project.name, (getIdx(project.name) + 1) % project.images.length)}
                        className="absolute right-2 top-1/2 -translate-y-1/2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors"
                        aria-label="Next image"
                      >
                        <ChevronRight size={16} />
                      </button>
                      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                        {project.images.map((_, i) => (
                          <button
                            key={i}
                            type="button"
                            onClick={() => setIdx(project.name, i)}
                            className={`h-1.5 rounded-full transition-all duration-200 ${i === getIdx(project.name) ? "w-4 bg-white" : "w-1.5 bg-white/50"}`}
                            aria-label={`Go to image ${i + 1}`}
                          />
                        ))}
                      </div>
                      <div className="absolute top-2 right-2 bg-black/40 text-white text-xs px-2 py-0.5 rounded-full pointer-events-none">
                        {getIdx(project.name) + 1}/{project.images.length}
                      </div>
                    </>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-text mb-2">
                    {project.name}
                  </h3>
                  <p className="text-sm text-text-muted mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-3 text-xs text-text-dim">
                    <div className="flex items-center gap-1.5">
                      <MapPin size={14} className="text-primary" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Calendar size={14} className="text-primary" />
                      <span>{project.year}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Maximize2 size={14} className="text-primary" />
                      <span>{project.size}</span>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section className="pb-8">
        <Card>
          <div className="text-center py-10">
            <div className="inline-flex p-3 bg-primary/10 rounded-md mb-4">
              <Building2 size={28} className="text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-text mb-3">
              Looking for Office Design Services?
            </h3>
            <p className="text-text-muted mb-6 max-w-md mx-auto">
              We specialize in creating productive and inspiring office environments.
            </p>
            <Link href="/services">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center px-6 py-3 bg-primary text-background font-medium rounded-md hover:bg-primary-muted transition-colors"
              >
                Explore Our Services
              </motion.button>
            </Link>
          </div>
        </Card>
      </Section>

      <ImageLightbox
        images={lightbox?.images ?? []}
        index={lightbox?.index ?? null}
        alt={lightbox?.alt ?? "Office portfolio image"}
        onClose={() => setLightbox(null)}
        onNext={() => setLightbox(prev => prev ? { ...prev, index: (prev.index + 1) % prev.images.length } : null)}
        onPrev={() => setLightbox(prev => prev ? { ...prev, index: (prev.index - 1 + prev.images.length) % prev.images.length } : null)}
      />
    </Layout>
  );
}
