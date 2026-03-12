"use client";

import Layout from "@/components/Layout";
import { Card, Section, Badge } from "@/components/ui";
import { motion } from "framer-motion";
import {
  Palette,
  Ruler,
  PenTool,
  Hammer,
  Building2,
  Package,
  CheckCircle2,
  ArrowRight,
  Layers,
  Lightbulb,
  Users,
  Clock,
} from "lucide-react";
import Link from "next/link";

const services = {
  concept: {
    name: "Interior Design Concept Development",
    icon: Palette,
    description:
      "We transform ideas into compelling visual narratives through comprehensive concept development.",
    longDescription:
      "Our concept development process begins with understanding your vision, brand identity, and functional requirements. We create mood boards, material palettes, and 3D visualizations that bring your space to life before construction begins.",
    features: [
      "Client consultation and briefing analysis",
      "Concept development and design direction",
      "Mood boards and visual storytelling",
      "Material and finishes concepts",
      "3D design visualization",
    ],
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&q=80",
    deliverables: ["Mood boards", "Concept presentations", "3D renderings", "Material samples"],
  },
  planning: {
    name: "Space Planning & Layout",
    icon: Ruler,
    description:
      "Strategic spatial solutions that optimize functionality and workflow efficiency.",
    longDescription:
      "Effective space planning is the foundation of great interior design. We analyze traffic flow, functional zones, and spatial relationships to create layouts that work seamlessly for your specific needs.",
    features: [
      "Layout strategies and spatial analysis",
      "Functional planning and zoning",
      "Workflow optimization",
      "Circulation and accessibility planning",
      "Furniture and equipment layouts",
    ],
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80",
    deliverables: ["Floor plans", "Furniture layouts", "Circulation diagrams", "Zoning studies"],
  },
  technical: {
    name: "Technical Interior Design",
    icon: PenTool,
    description:
      "Precise technical documentation that bridges design intent and construction reality.",
    longDescription:
      "Our technical documentation ensures that every design detail is clearly communicated to contractors and builders. We provide comprehensive drawings and specifications that leave no room for ambiguity.",
    features: [
      "Comprehensive design documentation",
      "Construction drawings and details",
      "Technical specifications",
      "Joinery and custom element detailing",
      "Coordination with consultants and contractors",
    ],
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=80",
    deliverables: ["Construction drawings", "Technical specifications", "Joinery details", "Coordination drawings"],
  },
  fitout: {
    name: "Interior Fit-Out",
    icon: Hammer,
    description:
      "Complete fit-out services that bring designs to life with quality craftsmanship.",
    longDescription:
      "From demolition to final installation, our fit-out team manages every aspect of the construction process. We work with trusted contractors to ensure quality workmanship and timely completion.",
    features: [
      "Flooring finishes installation",
      "Ceiling design and bulkheads",
      "Wall finishes and cladding",
      "Lighting installation",
      "Quality control and supervision",
    ],
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200&q=80",
    deliverables: ["Project management", "Quality inspections", "Progress reports", "Handover documentation"],
  },
  custom: {
    name: "Custom Design",
    icon: Building2,
    description:
      "Bespoke furniture and joinery designed and manufactured to your specifications.",
    longDescription:
      "Custom furniture and joinery can transform a space from ordinary to extraordinary. We design and manufacture bespoke pieces that perfectly fit your space and reflect your style.",
    features: [
      "Kitchen design and manufacturing",
      "TV units and wall units",
      "Built-in wardrobes",
      "Custom furniture design",
      "Prototyping and sampling",
    ],
    image: "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=1200&q=80",
    deliverables: ["Custom drawings", "Material samples", "Prototypes", "Installation"],
  },
  styling: {
    name: "Styling & Installation",
    icon: Package,
    description:
      "Final touches and professional installation that complete the design vision.",
    longDescription:
      "The final layer of any interior design project is the styling and finishing touches. We source and install curtains, blinds, artwork, and accessories that bring your space to life.",
    features: [
      "Curtains and blinds selection",
      "Decorative pieces and accessories",
      "Procurement and sourcing",
      "Project costing and budgeting",
      "Project management and installation",
    ],
    image: "https://images.unsplash.com/photo-1616137466211-f939a420be84?w=1200&q=80",
    deliverables: ["Styling concepts", "Procurement schedules", "Installation management", "Final walkthrough"],
  },
};

const processSteps = [
  { icon: Users, title: "Consultation", description: "Understanding your needs and vision" },
  { icon: Palette, title: "Concept", description: "Developing creative design directions" },
  { icon: PenTool, title: "Design", description: "Refining details and technical specifications" },
  { icon: Hammer, title: "Implementation", description: "Bringing the design to life" },
];

export default function ServicesPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden -mx-6 lg:-mx-12 px-6 lg:px-12 mb-16">
        <div
          className="hero-bg-image"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=1920&q=80)`,
          }}
        />
        <div className="relative z-10 text-center max-w-4xl mx-auto pt-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="primary" className="mb-6">What We Do</Badge>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl lg:text-5xl font-semibold text-text tracking-tight mb-6"
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-text-muted max-w-2xl mx-auto leading-relaxed"
          >
            Comprehensive interior design services covering every aspect from initial
            concept through to final installation.
          </motion.p>
        </div>
      </section>

      {/* Process Steps */}
      <Section className="pt-0">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="text-center p-6 bg-surface border border-border rounded-md"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-md mb-4">
                <step.icon size={24} className="text-primary" />
              </div>
              <h3 className="text-base font-semibold text-text mb-2">{step.title}</h3>
              <p className="text-sm text-text-muted">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Services Detail Sections */}
      {Object.entries(services).map(([key, service], index) => (
        <Section key={key}>
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
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 lg:p-10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-primary/10 rounded-md">
                      <service.icon size={28} className="text-primary" />
                    </div>
                    <Badge variant="primary">Service {index + 1}</Badge>
                  </div>
                  <h2 className="text-2xl font-semibold text-text mb-4">
                    {service.name}
                  </h2>
                  <p className="text-text-muted leading-relaxed mb-6">
                    {service.longDescription}
                  </p>
                  <h3 className="text-sm font-semibold text-text mb-4">
                    Key Deliverables
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-3 mb-6">
                    {service.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-start gap-2"
                      >
                        <CheckCircle2
                          size={18}
                          className="text-primary mt-0.5 flex-shrink-0"
                        />
                        <span className="text-sm text-text-muted">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {service.deliverables.map((deliverable) => (
                      <span
                        key={deliverable}
                        className="inline-flex items-center px-3 py-1 bg-surface border border-border rounded-sm text-xs text-text-muted"
                      >
                        {deliverable}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </Section>
      ))}

      {/* Additional Services Banner */}
      <Section>
        <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-border">
          <div className="text-center py-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-full mb-6">
              <Lightbulb size={32} className="text-primary" />
            </div>
            <h3 className="text-2xl font-semibold text-text mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-text-muted mb-8 max-w-xl mx-auto">
              Every project is unique. If you don&apos;t see exactly what you&apos;re looking for,
              get in touch to discuss your specific requirements.
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center px-6 py-3 bg-primary text-background font-medium rounded-md hover:bg-primary-muted transition-colors"
              >
                Discuss Your Project
                <ArrowRight size={18} className="ml-2" />
              </motion.button>
            </Link>
          </div>
        </Card>
      </Section>

      {/* CTA */}
      <Section className="pb-8">
        <Card>
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-semibold text-text mb-3">
                Ready to Start Your Project?
              </h3>
              <p className="text-text-muted mb-6">
                Contact us to discuss how our services can meet your specific needs.
                We offer free initial consultations to understand your requirements.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-text-muted">
                  <Clock size={18} className="text-primary" />
                  <span className="text-sm">Quick Response</span>
                </div>
                <div className="flex items-center gap-2 text-text-muted">
                  <CheckCircle2 size={18} className="text-primary" />
                  <span className="text-sm">Free Consultation</span>
                </div>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
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
          </div>
        </Card>
      </Section>
    </Layout>
  );
}
