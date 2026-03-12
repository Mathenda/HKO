"use client";

import Layout from "@/components/Layout";
import { Card, Section, Badge } from "@/components/ui";
import { motion } from "framer-motion";
import {
  PenTool,
  Ruler,
  Layers,
  FileText,
  CheckCircle2,
  ArrowRight,
  ClipboardList,
  Lightbulb,
  Hammer,
} from "lucide-react";
import Link from "next/link";

const processSteps = [
  {
    number: "01",
    title: "Site Analysis & Brief",
    description: "We begin with thorough site measurements, photography, and detailed client brief documentation. Understanding constraints and opportunities is fundamental.",
    details: [
      "Site measurements and verification",
      "Photographic documentation",
      "Client requirements analysis",
      "Budget and timeline assessment",
    ],
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80",
    icon: ClipboardList,
  },
  {
    number: "02",
    title: "Concept Development",
    description: "Initial design concepts are developed through sketches, mood boards, and spatial studies. Multiple options are explored before refinement.",
    details: [
      "Conceptual sketches and diagrams",
      "Mood boards and material palettes",
      "3D visualization studies",
      "Design direction presentations",
    ],
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80",
    icon: Lightbulb,
  },
  {
    number: "03",
    title: "Design Development",
    description: "Selected concepts are developed with detailed floor plans, elevations, and material specifications. Client feedback is incorporated iteratively.",
    details: [
      "Detailed floor plans and layouts",
      "Elevation drawings",
      "Material and finish schedules",
      "Furniture and fixture selection",
    ],
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&q=80",
    icon: Ruler,
  },
  {
    number: "04",
    title: "Technical Documentation",
    description: "Comprehensive construction drawings and specifications are produced. This phase ensures buildability and coordinates with all consultants.",
    details: [
      "Construction drawings and details",
      "Joinery and custom element drawings",
      "Technical specifications",
      "Consultant coordination",
    ],
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80",
    icon: PenTool,
  },
  {
    number: "05",
    title: "Procurement & Tendering",
    description: "Contractor quotations are obtained and evaluated. Materials and fixtures are sourced and procured according to specifications.",
    details: [
      "Contractor tender documentation",
      "Quote evaluation and comparison",
      "Material procurement",
      "Sample approvals",
    ],
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80",
    icon: FileText,
  },
  {
    number: "06",
    title: "Construction & Installation",
    description: "On-site supervision ensures design intent is maintained. Quality control checks are conducted throughout the construction phase.",
    details: [
      "Site supervision and inspections",
      "Quality control checks",
      "Progress meetings",
      "Snagging and defect resolution",
    ],
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80",
    icon: Hammer,
  },
  {
    number: "07",
    title: "Styling & Handover",
    description: "Final styling, furniture installation, and decorative elements complete the project. Comprehensive handover documentation is provided.",
    details: [
      "Furniture and accessory installation",
      "Styling and finishing touches",
      "Final inspections",
      "Project handover documentation",
    ],
    image: "https://images.unsplash.com/photo-1616137466211-f939a420be84?w=800&q=80",
    icon: Layers,
  },
];

const technicalFocus = [
  {
    icon: PenTool,
    title: "Technical Detailing",
    description: "Every joint, connection, and transition is carefully detailed to ensure constructability and longevity.",
  },
  {
    icon: Ruler,
    title: "Precision Planning",
    description: "Accurate measurements and spatial coordination prevent costly errors during construction.",
  },
  {
    icon: Layers,
    title: "Multi-layer Coordination",
    description: "Structural, MEP, and architectural elements are coordinated to avoid conflicts.",
  },
  {
    icon: FileText,
    title: "Comprehensive Documentation",
    description: "Detailed drawings and specifications provide clear instructions for contractors.",
  },
];

export default function ProcessPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden -mx-6 lg:-mx-12 px-6 lg:px-12 mb-16">
        <div
          className="hero-bg-image"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920&q=80)`,
          }}
        />
        <div className="relative z-10 text-center max-w-4xl mx-auto pt-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="primary" className="mb-6">How We Work</Badge>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl lg:text-5xl font-semibold text-text tracking-tight mb-6"
          >
            Design Process
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-text-muted max-w-2xl mx-auto leading-relaxed"
          >
            Our structured approach ensures every project progresses smoothly from
            initial brief to final installation.
          </motion.p>
        </div>
      </section>

      {/* Technical Focus */}
      <Section className="pt-0">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {technicalFocus.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <Card className="h-full text-center p-6">
                <div className="inline-flex p-3 bg-primary/10 rounded-md mb-4">
                  <item.icon size={24} className="text-primary" />
                </div>
                <h3 className="text-base font-semibold text-text mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-text-muted">{item.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Process Timeline with Images */}
      {processSteps.map((step, index) => (
        <Section key={step.number}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <Card className="overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto overflow-hidden">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="p-3 bg-primary/90 backdrop-blur-sm rounded-md">
                      <step.icon size={24} className="text-primary" />
                    </div>
                  </div>
                </div>
                <div className="p-8 lg:p-10">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-4xl font-bold text-primary/20">
                      {step.number}
                    </span>
                    <h3 className="text-xl font-semibold text-text">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-text-muted leading-relaxed mb-6">
                    {step.description}
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {step.details.map((detail) => (
                      <div
                        key={detail}
                        className="flex items-start gap-2"
                      >
                        <CheckCircle2
                          size={16}
                          className="text-primary mt-0.5 flex-shrink-0"
                        />
                        <span className="text-sm text-text-dim">
                          {detail}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </Section>
      ))}

      {/* Process Visualization */}
      <Section>
        <Card>
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-text mb-3">Process Flow</h2>
            <p className="text-text-muted">Visual representation of our workflow</p>
          </div>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-border hidden lg:block" />

            {/* Process nodes */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 relative">
              {processSteps.slice(0, 4).map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="bg-surface border border-border rounded-md p-4 text-center">
                    <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-3">
                      <span className="text-sm font-bold text-primary">
                        {index + 1}
                      </span>
                    </div>
                    <h4 className="text-sm font-semibold text-text">
                      {step.title.split(" & ")[0]}
                    </h4>
                  </div>
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                      <ArrowRight size={20} className="text-text-dim" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </Card>
      </Section>

      {/* CTA */}
      <Section className="pb-8">
        <Card>
          <div className="text-center py-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-full mb-6">
              <CheckCircle2 size={32} className="text-primary" />
            </div>
            <h3 className="text-2xl font-semibold text-text mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-text-muted mb-8 max-w-xl mx-auto">
              Contact us to discuss how our process can work for your next interior design project.
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center px-8 py-4 bg-primary text-background font-medium rounded-md hover:bg-primary-muted transition-colors"
              >
                Get in Touch
                <ArrowRight size={18} className="ml-2" />
              </motion.button>
            </Link>
          </div>
        </Card>
      </Section>
    </Layout>
  );
}
