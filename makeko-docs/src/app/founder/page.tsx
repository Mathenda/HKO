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
    qualification: "Postgraduate in Interior Design",
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
            backgroundImage: `url(https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=1920&q=80)`,
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

      {/* Profile Section */}
      <Section className="pt-0">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-1"
          >
            <Card className="h-full p-0 overflow-hidden">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80"
                  alt="Mosa Dineo Makgoka"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
              </div>
              <div className="p-6">
                <div className="text-center mb-6">
                  <h2 className="text-xl font-semibold text-text mb-1">
                    Mosa Dineo Makgoka
                  </h2>
                  <p className="text-text-muted text-sm">Founder & Principal Designer</p>
                </div>

                <div className="space-y-4">
                  <div className="p-4 bg-surface rounded-md border border-border">
                    <h3 className="text-sm font-semibold text-text mb-2">
                      Experience
                    </h3>
                    <p className="text-text-muted text-sm leading-relaxed">
                      Qualified interior designer with more than 10 years of
                      experience in the design industry.
                    </p>
                  </div>

                  <div className="p-4 bg-surface rounded-md border border-border">
                    <h3 className="text-sm font-semibold text-text mb-2">
                      Location
                    </h3>
                    <p className="text-text-muted text-sm">
                      Johannesburg, South Africa
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Qualifications */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <Card className="h-full">
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
          </motion.div>
        </div>
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
                My design philosophy focuses on creating spaces that are functional,
                efficient, and emotionally engaging. I believe that successful interior
                environments must respond to human experience while being supported by
                strong technical documentation and industry standards.
              </p>
              <p className="text-text-muted leading-relaxed mb-8">
                Every project is an opportunity to balance creativity with precision,
                ensuring that design intent translates seamlessly into built reality.
              </p>
              
              <div className="relative p-6 bg-surface border border-border rounded-md">
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
            <div className="relative h-96 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&q=80"
                alt="Design philosophy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
            </div>
          </div>
        </Card>
      </Section>

      {/* Core Principles */}
      <Section>
        <Card>
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-text mb-3">Core Principles</h2>
            <p className="text-text-muted">What guides my work</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              "Functionality without compromising aesthetics",
              "Technical excellence in documentation",
              "Client-centered design approach",
              "Sustainable and responsible design",
              "Attention to detail in every element",
            ].map((principle, index) => (
              <motion.div
                key={principle}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.2, delay: index * 0.05 }}
              >
                <div className="p-4 bg-surface rounded-md border border-border h-full">
                  <CheckCircle2 size={20} className="text-primary mb-3" />
                  <p className="text-sm text-text-muted">{principle}</p>
                </div>
              </motion.div>
            ))}
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
