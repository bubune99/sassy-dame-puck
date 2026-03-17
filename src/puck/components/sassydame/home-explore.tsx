'use client'

import React from 'react';

import { motion } from 'framer-motion'
import {
  ArrowRight,
  Printer,
  Paintbrush,
  Calendar,
  Wrench,
} from 'lucide-react'
import { SpotlightCard } from './effects/spotlight-card'
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: 'easeOut' },
  }),
}

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

export function HomeExplore({
  content,
  puck,
  badgeText = "Explore SassyDame",
  heading = "Everything Under",
  headingHighlight = "One Roof",
  description = "More than a shop — SassyDame is a creative hub. Explore our four pillars and find your next project.",
  card1Title = "DTF Printing",
  card1Description = "Custom DTF transfers, UV DTF decals, rhinestones, patches & more — produced in-house with 24-hour turnaround.",
  card1Link = "/dtf",
  card2Title = "Heat Press Rentals",
  card2Description = "Rent studio time with professional heat presses, vinyl cutters, sublimation printers & more.",
  card2Link = "/studio",
  card3Title = "Events & Classes",
  card3Description = "Hands-on workshops, crafting classes, and community events. Learn new skills and meet fellow makers.",
  card3Link = "/events",
  card4Title = "Custom Apparel",
  card4Description = "Custom apparel, bulk orders, storefronts for teams & schools, signs, banners & more.",
  card4Link = "/services",
  cardCtaText = "Explore",
}: {
  content?: React.FC;
  puck?: { isEditing?: boolean };
  badgeText?: string;
  heading?: string;
  headingHighlight?: string;
  description?: string;
  card1Title?: string;
  card1Description?: string;
  card1Link?: string;
  card2Title?: string;
  card2Description?: string;
  card2Link?: string;
  card3Title?: string;
  card3Description?: string;
  card3Link?: string;
  card4Title?: string;
  card4Description?: string;
  card4Link?: string;
  cardCtaText?: string;
}) {
  const sections = [
    {
      title: card1Title,
      description: card1Description,
      href: card1Link,
      icon: Printer,
      color: 'bg-sassy-teal',
      textColor: 'text-white',
      borderGlow: 'hover:shadow-[0_0_40px_rgba(56,163,165,0.4)]',
      spotlightColor: 'rgba(56,163,165,0.2)',
    },
    {
      title: card2Title,
      description: card2Description,
      href: card2Link,
      icon: Paintbrush,
      color: 'bg-sassy-periwinkle',
      textColor: 'text-white',
      borderGlow: 'hover:shadow-[0_0_40px_rgba(131,121,199,0.4)]',
      spotlightColor: 'rgba(131,121,199,0.2)',
    },
    {
      title: card3Title,
      description: card3Description,
      href: card3Link,
      icon: Calendar,
      color: 'bg-sassy-coral',
      textColor: 'text-white',
      borderGlow: 'hover:shadow-[0_0_40px_rgba(232,93,81,0.4)]',
      spotlightColor: 'rgba(232,93,81,0.2)',
    },
    {
      title: card4Title,
      description: card4Description,
      href: card4Link,
      icon: Wrench,
      color: 'bg-sassy-gold',
      textColor: 'text-gray-900',
      borderGlow: 'hover:shadow-[0_0_40px_rgba(215,183,60,0.4)]',
      spotlightColor: 'rgba(215,183,60,0.2)',
    },
  ]

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.div variants={fadeUp} custom={0}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-sassy-teal/10 text-sassy-teal text-sm font-semibold uppercase tracking-wider mb-4">
              {badgeText}
            </span>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            custom={1}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-black mb-4"
          >
            {heading}{' '}
            <span className="bg-gradient-to-r from-sassy-teal via-sassy-sky to-sassy-fuchsia bg-clip-text text-transparent">
              {headingHighlight}
            </span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            custom={2}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            {description}
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
        >
          {sections.map((section, i) => (
            <motion.div key={section.title} variants={fadeUp} custom={i}>
              <div
                className="group block cursor-pointer"
                onClick={() => window.location.href = section.href}
              >
                <SpotlightCard
                  spotlightColor={section.spotlightColor}
                  className="rounded-2xl border-0 bg-transparent"
                >
                  <div
                    className={`relative overflow-hidden rounded-2xl ${section.color} ${section.textColor} p-8 min-h-[280px] flex flex-col justify-between transition-all duration-300 hover:scale-[1.03] ${section.borderGlow}`}
                  >
                    {/* Background pattern */}
                    <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-white/10 -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500" />
                    <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full bg-black/10 translate-y-1/2 -translate-x-1/2" />

                    <div className="relative z-10">
                      <section.icon className="h-10 w-10 mb-4 opacity-90" />
                      <h3 className="text-2xl font-bold mb-2">{section.title}</h3>
                      <p className="text-sm opacity-80 leading-relaxed">{section.description}</p>
                    </div>

                    <div className="relative z-10 mt-6 flex items-center gap-2 font-semibold text-sm group-hover:gap-4 transition-all">
                      {cardCtaText} <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </SpotlightCard>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      {content && typeof content === "function" && content({})}
</section>
  )
}
