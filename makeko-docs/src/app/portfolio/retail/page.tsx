"use client";

import Layout from "@/components/Layout";
import { Card, Section, Badge } from "@/components/ui";
import { motion } from "framer-motion";
import { Store, ArrowLeft, MapPin, Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import ImageLightbox from "@/components/ImageLightbox";
import { blobUrl } from "@/config/site";

const projects = [
  {
    name: "Luxury Boutique",
    description: "A high-end boutique with custom fixtures and curated display areas.",
    images: [
      "/Retail/Retail1/Picture23.png",
      "/Retail/Retail1/Picture24.png",
      "/Retail/Retail1/Picture25.png",
    ],
    location: "Rosebank, Johannesburg",
    year: "2024",
    size: "450 sqm",
  },
  {
    name: "Concept Store",
    description: "A modular retail environment designed for flexible merchandising.",
    images: [
      "/Retail/Retail2/Picture26.png",
      "/Retail/Retail2/Picture27.png",
      "/Retail/Retail2/Picture28.png",
    ],
    location: "Cape Town",
    year: "2023",
    size: "680 sqm",
  },
  {
    name: "Flagship Showroom",
    description: "Brand-defining retail showroom with immersive customer zones.",
    images: [
      "/Retail/Retail3/Picture30.png",
      "/Retail/Retail3/Picture29.png",
      "/Retail/Retail3/Picture31.png",
      "/Retail/Retail3/Picture32.png",
    ],
    location: "Sandton, Johannesburg",
    year: "2024",
    size: "920 sqm",
  },
  {
    name: "Pop-up Experience",
    description: "Temporary activation space designed for quick assembly and high impact.",
    images: [
      "/Retail/Retail4/Picture35.jpg",
      "/Retail/Retail4/Picture36.jpg",
      "/Retail/Retail4/Picture33.png",
      "/Retail/Retail4/Picture34.png",
    ],
    location: "Maboneng, Johannesburg",
    year: "2023",
    size: "280 sqm",
  },
];

export default function RetailPortfolioPage() {
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
            backgroundImage: `url(${blobUrl("/Retail/Retail1/Picture23.png")})`,  
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
            <Badge variant="primary" className="mb-6">Retail Spaces</Badge>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl lg:text-5xl font-semibold text-text tracking-tight mb-6"
          >
            Retail Projects
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-xl text-text-muted max-w-2xl mx-auto leading-relaxed"
          >
            Retail environments that enhance brand identity and customer experience.
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
              <Card className="h-full p-0 overflow-hidden">
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
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-text mb-2">
                    {project.name}
                  </h3>
                  <p className="text-sm text-text-muted mb-4">{project.description}</p>
                  <div className="flex items-center justify-between text-xs text-text-dim mt-4">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />
                      {project.year}
                    </span>
                    <span className="flex items-center gap-1">
                      <Store size={12} />
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
        images={lightbox?.images ?? []}
        index={lightbox?.index ?? null}
        alt={lightbox?.alt ?? "Retail portfolio image"}
        onClose={() => setLightbox(null)}
        onNext={() => setLightbox(prev => prev ? { ...prev, index: (prev.index + 1) % prev.images.length } : null)}
        onPrev={() => setLightbox(prev => prev ? { ...prev, index: (prev.index - 1 + prev.images.length) % prev.images.length } : null)}
      />
    </Layout>
  );
}
