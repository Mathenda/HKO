"use client";

import Layout from "@/components/Layout";
import { Card, Section, Badge } from "@/components/ui";
import { motion } from "framer-motion";
import {
  Users,
  Tv,
  Heart,
  Award,
  GraduationCap,
  Building2,
  Quote,
} from "lucide-react";

export default function CommunityPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden -mx-6 lg:-mx-12 px-6 lg:px-12 mb-16">
        <div
          className="hero-bg-image"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=1920&q=80)`,
          }}
        />
        <div className="relative z-10 text-center max-w-4xl mx-auto pt-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="primary" className="mb-6">Giving Back</Badge>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl lg:text-5xl font-semibold text-text tracking-tight mb-6"
          >
            Community Engagement
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-text-muted max-w-2xl mx-auto leading-relaxed"
          >
            Inspiring and supporting the next generation of designers and innovators.
          </motion.p>
        </div>
      </section>

      {/* Youth Empowerment */}
      <Section className="pt-0">
        <Card className="overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="relative h-64 lg:h-auto overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80"
                alt="Youth empowerment"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 lg:p-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-primary/10 rounded-md">
                  <Users size={28} className="text-primary" />
                </div>
                <h2 className="text-2xl font-semibold text-text">
                  Youth Empowerment Initiative
                </h2>
              </div>
              <p className="text-text-muted leading-relaxed mb-6">
                Makeko Interiors actively engages with young learners to encourage
                careers in design, architecture, and construction. We believe in
                sharing knowledge and providing guidance to those starting their
                journey in the built environment industry.
              </p>

              <div className="space-y-4">
                <div className="p-4 bg-surface rounded-md border border-border">
                  <div className="flex items-start gap-3">
                    <GraduationCap size={20} className="text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="text-sm font-semibold text-text mb-1">
                        School Outreach
                      </h3>
                      <p className="text-sm text-text-muted">
                        Visited SJ Van Der Merwe Technical High School in Limpopo to
                        engage with technical learners about opportunities in the
                        built environment industry.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-surface rounded-md border border-border">
                  <div className="flex items-start gap-3">
                    <Heart size={20} className="text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="text-sm font-semibold text-text mb-1">
                        Mentorship & Guidance
                      </h3>
                      <p className="text-sm text-text-muted">
                        Providing mentorship and career guidance initiatives to inspire
                        the next generation of designers and innovators.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </Section>

      {/* Media Spotlight */}
      <Section>
        <Card className="overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="p-8 lg:p-10 order-2 lg:order-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-secondary/10 rounded-md">
                  <Tv size={28} className="text-secondary" />
                </div>
                <Badge variant="primary">Media Feature</Badge>
              </div>
              <h2 className="text-2xl font-semibold text-text mb-4">
                SABC 3 Feature – 48 Hours Program
              </h2>
              <p className="text-text-muted leading-relaxed mb-6">
                In 2020, our Founder appeared in Episode 5 of the 48 Hours Program
                on SABC 3, focusing on Furniture Manufacturing and Design. The feature
                highlighted her journey, challenges, and vision for the future of
                interior design in South Africa.
              </p>

              <div className="relative p-6 bg-surface border border-border rounded-md mb-6">
                <Quote size={24} className="text-primary/30 mb-3" />
                <blockquote className="text-text italic mb-3">
                  &ldquo;The feature highlighted opportunities within furniture manufacturing
                  and design for aspiring designers, while discussing the challenges
                  of being a young female entrepreneur in the industry.&rdquo;
                </blockquote>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  {
                    title: "Personal Journey",
                    description: "Inspiration for pursuing interior design",
                  },
                  {
                    title: "Entrepreneurship",
                    description: "Challenges as a young female entrepreneur",
                  },
                  {
                    title: "Industry Opportunities",
                    description: "Opportunities in furniture manufacturing",
                  },
                  {
                    title: "Industry Recognition",
                    description: "Growing recognition within the design industry",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="p-4 bg-surface rounded-md border border-border"
                  >
                    <h4 className="text-sm font-semibold text-text mb-1">
                      {item.title}
                    </h4>
                    <p className="text-xs text-text-muted">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-64 lg:h-auto overflow-hidden order-1 lg:order-2">
              <img
                src="https://images.unsplash.com/photo-1593697821252-0c93697821252-0c9137d9fc45?w=800&q=80"
                alt="SABC 3 Feature"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="p-4 bg-surface/90 backdrop-blur-sm rounded-md border border-border">
                  <div className="flex items-center gap-3">
                    <Tv size={24} className="text-secondary" />
                    <div>
                      <p className="text-sm font-semibold text-text">SABC 3</p>
                      <p className="text-xs text-text-dim">48 Hours Program • Episode 5 • 2020</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </Section>

      {/* Impact Stats */}
      <Section>
        <Card>
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-text mb-3">Community Impact</h2>
            <p className="text-text-muted">Making a difference</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                number: "2018",
                label: "Year Founded",
                description: "Makeko Interiors established",
                icon: Building2,
              },
              {
                number: "10+",
                label: "Years Experience",
                description: "In the design industry",
                icon: Award,
              },
              {
                number: "4",
                label: "Sectors Served",
                description: "Office, Retail, Healthcare, Residential",
                icon: Users,
              },
              {
                number: "1",
                label: "TV Feature",
                description: "SABC 3 Appearance",
                icon: Tv,
              },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="text-center p-6 bg-surface rounded-md border border-border"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-md mb-4">
                  <stat.icon size={24} className="text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <h4 className="text-sm font-semibold text-text mb-1">
                  {stat.label}
                </h4>
                <p className="text-xs text-text-dim">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </Card>
      </Section>

      {/* Testimonial/Quote Section */}
      <Section className="pb-8">
        <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-border">
          <div className="text-center py-12 px-6">
            <Quote size={48} className="text-primary/30 mx-auto mb-6" />
            <blockquote className="text-xl lg:text-2xl text-text max-w-3xl mx-auto mb-6 leading-relaxed">
              &ldquo;We believe in giving back to the community and inspiring young people
              to pursue careers in design and construction. The future of our industry
              depends on nurturing the next generation of talent.&rdquo;
            </blockquote>
            <cite className="text-text-dim not-italic">
              — Mosa Dineo Makgoka, Founder
            </cite>
          </div>
        </Card>
      </Section>
    </Layout>
  );
}
