"use client";

import { Heart, Users, Sparkles, Award, ArrowRight } from "lucide-react";
import { DropZone } from "@puckeditor/core";

const values = [
  {
    icon: Heart,
    title: "Passion for Craft",
    description:
      "We believe in the power of creativity and the joy of making something with your own hands.",
  },
  {
    icon: Users,
    title: "Community First",
    description:
      "Building connections through craft. Our store is more than a shop - it is a gathering place for creators.",
  },
  {
    icon: Sparkles,
    title: "Quality Products",
    description:
      "We carefully select every product we carry, ensuring you get the best materials for your projects.",
  },
  {
    icon: Award,
    title: "Expert Support",
    description:
      "Our team is here to help you succeed, whether you are a beginner or a seasoned pro.",
  },
];

const milestones = [
  {
    year: "2018",
    title: "The Beginning",
    description: "Started as a small home-based business selling craft supplies",
  },
  {
    year: "2020",
    title: "Going Digital",
    description: "Launched our online store and DTF printing services",
  },
  {
    year: "2022",
    title: "Community Space",
    description: "Opened our physical studio for workshops and events",
  },
  {
    year: "2024",
    title: "Growing Together",
    description: "Expanded our team and services to serve more crafters",
  },
];

export interface AboutPageProps {
  heading?: string;
  headingHighlight?: string;
  heroParagraph?: string;
  missionHeading?: string;
  missionParagraph1?: string;
  missionParagraph2?: string;
  valuesHeading?: string;
  valuesDescription?: string;
  ctaHeading?: string;
  ctaDescription?: string;
}

export function AboutPage({
  heading = "Crafting Dreams,",
  headingHighlight = "Building Community",
  heroParagraph = "SassyDame Designs started with a simple dream: to create a space where crafters of all skill levels could find quality supplies, learn new techniques, and connect with fellow creators. What began in a small spare room has grown into a beloved community hub.",
  missionHeading = "Our Mission",
  missionParagraph1 = "We are dedicated to making crafting accessible, enjoyable, and rewarding for everyone. Whether you are looking to start a small business, create personalized gifts, or simply explore a new hobby, we are here to support your creative journey.",
  missionParagraph2 = "Our focus on DTF printing technology allows us to offer cutting-edge solutions for custom apparel and merchandise, while our workshops and events bring the community together to learn and grow.",
  valuesHeading = "What We Stand For",
  valuesDescription = "Our values guide everything we do, from the products we select to the events we host.",
  ctaHeading = "Ready to Start Creating?",
  ctaDescription = "Visit our store, join a workshop, or start shopping online. We cannot wait to be part of your creative journey!",
}: AboutPageProps) {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Our Story
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {heading}
              <span className="block text-primary">{headingHighlight}</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {heroParagraph}
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
                {missionHeading}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {missionParagraph1}
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                {missionParagraph2}
              </p>
              <a
                href="/events"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
              >
                Join Our Community
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-muted">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 flex items-center justify-center">
                <div className="text-center">
                  <span className="font-serif text-6xl font-bold text-primary/30">SD</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
              {valuesHeading}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {valuesDescription}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-card border rounded-xl p-6 text-center">
                <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
              Our Journey
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From humble beginnings to a thriving community hub
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                    {milestone.year.slice(2)}
                  </div>
                  {index < milestones.length - 1 && (
                    <div className="w-0.5 h-full bg-border mt-2" />
                  )}
                </div>
                <div className="pb-8">
                  <span className="text-sm text-muted-foreground">{milestone.year}</span>
                  <h3 className="font-semibold text-lg">{milestone.title}</h3>
                  <p className="text-muted-foreground">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            {ctaHeading}
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            {ctaDescription}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/products"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-11 px-8"
            >
              Shop Now
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 border border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary h-11 px-8"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* Puck: Editable content slot */}
      <DropZone zone="content" />
    </main>
  );
}
