"use client";

import Layout from "@/components/Layout";
import { Card, Section, Badge } from "@/components/ui";
import { motion } from "framer-motion";
import {
  User,
  GraduationCap,
  Award,
  Building2,
  Heart,
  CheckCircle2,
  Quote,
} from "lucide-react";

const experience = [
  { sector: "Healthcare Facilities", icon: Heart, count: "9+ projects" },
  { sector: "Corporate Office", icon: Building2, count: "9+ projects" },
  { sector: "Retail Spaces", icon: Building2, count: "5+ projects" },
  { sector: "Residential", icon: Building2, count: "5+ projects" },
];

const qualifications = [
  {
    year: "2014",
    qualification: "Interior Design Qualification",
    institution: "Inscape Education Group",
  },
  {
    year: "Current",
    qualification: "Postgraduate in Art, Design, and Architecture",
    institution: "University of Johannesburg",
  },
  {
    year: "2018",
    qualification: "Founded Makeko Interiors",
    institution: "Johannesburg, South Africa",
  },
];

export default function FounderPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden -mx-6 lg:-mx-12 px-6 lg:px-12 mb-16">
        <div
          className="hero-bg-image"
          style={{
            backgroundImage: `url(/Makeko-founder.png)`,
          }}
        />
        <div className="relative z-10 text-center max-w-4xl mx-auto pt-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="primary" className="mb-6">Leadership</Badge>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl lg:text-5xl font-semibold text-text tracking-tight mb-6"
          >
            Mosa Dineo Makgoka
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-text-muted max-w-2xl mx-auto leading-relaxed"
          >
            Founder & Principal Designer
          </motion.p>
        </div>
      </section>

      {/* Founder Section */}
      <Section className="pt-0">
        <Card className="overflow-hidden">
          <div className="grid lg:grid-cols-3 gap-0">
            <div className="relative h-64 lg:h-auto overflow-hidden">
              <img
                src="/Makeko-founder.png"
                alt="Mosa Dineo Makgoka"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="lg:col-span-2 p-8 lg:p-10">
              <h2 className="text-2xl font-semibold text-text mb-6">Founder</h2>
              <h3 className="text-xl font-semibold text-text mb-4">Mosa Dineo Makgoka</h3>
              <p className="text-text-muted leading-relaxed mb-6">
                Makeko Interiors was founded by Mosa Dineo Makgoka, a qualified interior designer with more than 10 years 
                of experience in the design industry.
              </p>
              <p className="text-text-muted leading-relaxed mb-6">
                She obtained her Interior Design qualification from Inscape Education Group in 2014 and is currently 
                pursuing a Postgraduate qualification in  Art, Design, and Architecture at the University of Johannesburg.
              </p>
              
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-text mb-3">Her professional experience includes projects in several sectors:</h4>
                <ul className="grid sm:grid-cols-2 gap-2">
                  {["Healthcare Facilities", "Corporate Office Environments", "Retail Spaces", "Residential Interiors"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-text-muted">
                      <span className="w-1.5 h-1.5 bg-primary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              <p className="text-text-muted leading-relaxed mb-6">
                With strong expertise in technical interior design documentation and detailing, Mosa brings a structured and 
                disciplined approach to design development while maintaining a passion for creativity and innovation.
              </p>
              
              <div className="p-5 bg-surface border border-border rounded-md">
                <h4 className="text-sm font-semibold text-text mb-3">Her design philosophy focuses on creating spaces that are:</h4>
                <ul className="space-y-2 mb-3">
                  {["Functional", "Efficient", "Emotionally engaging"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-text-muted">
                      <CheckCircle2 size={16} className="text-primary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-text-muted leading-relaxed">
                  while ensuring that every design solution is supported by strong technical documentation and industry 
                  standards.
                </p>
              </div>
            </div>
          </div>
        </Card>
      </Section>

      {/* Qualifications */}
      <Section>
        <Card>
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-text mb-2">
              Qualifications & Milestones
            </h2>
            <p className="text-text-muted">Educational background and milestones</p>
          </div>
          <div className="space-y-4">
            {qualifications.map((item, index) => (
              <motion.div
                key={item.qualification}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.2, delay: index * 0.05 }}
                className="flex items-start gap-4 p-4 bg-surface rounded-md border border-border"
              >
                <div className="flex-shrink-0">
                  <div className="p-2 bg-primary/10 rounded-md">
                    <GraduationCap size={24} className="text-primary" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <Badge variant="default">{item.year}</Badge>
                    <h4 className="text-base font-semibold text-text">
                      {item.qualification}
                    </h4>
                  </div>
                  <p className="text-sm text-text-muted">
                    {item.institution}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </Card>
      </Section>

      {/* Design Philosophy */}
      <Section>
        <Card className="overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="p-8 lg:p-10">
              <h2 className="text-2xl font-semibold text-text mb-6">
                Design Philosophy
              </h2>
              <p className="text-text-muted leading-relaxed mb-6">
                Design at Makeko Interiors is approached as a balance between creativity and technical precision.
              </p>
              <p className="text-text-muted leading-relaxed mb-6">
                The studio believes that successful interior environments must:
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "Respond to human experience and functionality",
                  "Be supported by strong technical detailing",
                  "Align with architectural and construction requirements",
                  "Deliver creative spatial solutions",
                  "Adapt to project constraints and opportunities",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-text-muted">
                    <CheckCircle2 size={16} className="text-primary mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-text-muted leading-relaxed mb-4">
                Every project is approached with careful attention to:
              </p>
              <div className="grid sm:grid-cols-2 gap-2 mb-6">
                {["Space planning", "Materiality", "Lighting", "Ergonomics", "Buildability"].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-text-muted">
                    <span className="w-1.5 h-1.5 bg-primary shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
              <p className="text-text-muted leading-relaxed">
                ensuring that the design concept translates effectively into the built environment.
              </p>

              <div className="relative p-6 bg-surface border border-border rounded-md mt-8">
                <Quote size={32} className="text-primary/30 mb-4" />
                <blockquote className="text-lg text-text italic mb-4">
                  &ldquo;Great design is not just about how things look, but how they work
                  and how they make people feel.&rdquo;
                </blockquote>
                <cite className="text-sm text-text-dim not-italic">
                  — Mosa Dineo Makgoka
                </cite>
              </div>
            </div>
          </div>
        </Card>
      </Section>

      {/* Experience Sectors */}
      <Section>
        <Card>
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-text mb-3">Sector Expertise</h2>
            <p className="text-text-muted">Diverse project experience</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
            {experience.map((item, index) => (
              <motion.div
                key={item.sector}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Card className="text-center p-6 h-full">
                  <div className="inline-flex p-3 bg-primary/10 rounded-md mb-4">
                    <item.icon size={24} className="text-primary" />
                  </div>
                  <h4 className="text-sm font-semibold text-text mb-2">
                    {item.sector}
                  </h4>
                  <p className="text-xs text-text-dim">{item.count}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </Card>
      </Section>
    </Layout>
  );
}
