"use client";

import Layout from "@/components/Layout";
import { Card, Section, Badge } from "@/components/ui";
import { motion, AnimatePresence } from "framer-motion";
import { Building2, ArrowLeft, MapPin, Calendar, Maximize2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const projects = [
  {
    name: "Executive Hub",
    description: "A premium office project featuring a welcoming reception and collaborative work zones.",
    images: [
      "/Office/Office1/Picture9.png",
      "/Office/Office1/Picture10.png",
      "/Office/Office1/Picture11.png",
    ],
    location: "Sandton, Johannesburg",
    year: "2024",
    size: "2,500 sqm",
  },
  {
    name: "Creative Studio",
    description: "A flexible workspace designed for team collaboration and focused work.",
    images: [
      "/Office/Office2/Picture13.png",
      "/Office/Office2/Picture14.png",
      "/Office/Office2/Picture15.png",
    ],
    location: "Maboneng, Johannesburg",
    year: "2023",
    size: "1,800 sqm",
  },
  {
    name: "Corporate Headquarters",
    description: "A high-end headquarters with meeting suites and executive areas.",
    images: [
      "/Office/Office3/Picture17.png",
      "/Office/Office3/Picture18.png",
      "/Office/Office3/Picture21.jpg",
    ],
    location: "Rosebank, Johannesburg",
    year: "2024",
    size: "3,200 sqm",
  },
];

export default function OfficePortfolioPage() {
  const [openProject, setOpenProject] = useState<string | null>(null);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden -mx-6 lg:-mx-12 px-6 lg:px-12 mb-16">
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
              <Card className="overflow-hidden group h-full">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.images[0]}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-text mb-2">
                    {project.name}
                  </h3>
                  <p className="text-sm text-text-muted mb-4 leading-relaxed">
                    {project.description}
                  </p>

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

                  <button
                    type="button"
                    onClick={() =>
                      setOpenProject(openProject === project.name ? null : project.name)
                    }
                    className="mt-4 w-full text-left text-xs font-medium text-primary hover:text-primary-muted transition-colors"
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
                        <div className="grid grid-cols-2 gap-2 mt-4">
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
    </Layout>
  );
}
