'use client'

import { motion } from 'framer-motion'
import {
  Clock,
  Truck,
  Star,
  Heart,
} from 'lucide-react'
import { SpotlightCard } from './effects/spotlight-card'
import { DropZone } from "@puckeditor/core";

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

export function HomeWhyChooseUs({
  heading = "Why Crafters",
  headingHighlight = "Love Us",
  description = "5,000+ happy customers and counting. Here is why they keep coming back.",
  trust1Title = "24-Hour Turnaround",
  trust1Description = "Lightning-fast production on most orders — get your transfers in just 24 hours",
  trust2Title = "Free Shipping $75+",
  trust2Description = "Free standard shipping on all orders over $75 across the US",
  trust3Title = "4.9 Star Rating",
  trust3Description = "Thousands of 5-star reviews from crafters, businesses & creators",
  trust4Title = "Made with Love",
  trust4Description = "Every order crafted with care and attention to detail",
  stat1Value = "5,000+",
  stat1Label = "Happy Customers",
  stat2Value = "50+",
  stat2Label = "Workshops Hosted",
  stat3Value = "1,000+",
  stat3Label = "Custom Orders",
  stat4Value = "4.9",
  stat4Label = "Google Rating",
}: {
  heading?: string;
  headingHighlight?: string;
  description?: string;
  trust1Title?: string;
  trust1Description?: string;
  trust2Title?: string;
  trust2Description?: string;
  trust3Title?: string;
  trust3Description?: string;
  trust4Title?: string;
  trust4Description?: string;
  stat1Value?: string;
  stat1Label?: string;
  stat2Value?: string;
  stat2Label?: string;
  stat3Value?: string;
  stat3Label?: string;
  stat4Value?: string;
  stat4Label?: string;
}) {
  const trustPoints = [
    {
      icon: Clock,
      title: trust1Title,
      description: trust1Description,
      color: 'text-sassy-coral',
    },
    {
      icon: Truck,
      title: trust2Title,
      description: trust2Description,
      color: 'text-sassy-teal',
    },
    {
      icon: Star,
      title: trust3Title,
      description: trust3Description,
      color: 'text-sassy-gold',
    },
    {
      icon: Heart,
      title: trust4Title,
      description: trust4Description,
      color: 'text-sassy-rose',
    },
  ]

  const stats = [
    { value: stat1Value, label: stat1Label, color: 'text-sassy-lime', spotlight: 'rgba(163,210,51,0.15)' },
    { value: stat2Value, label: stat2Label, color: 'text-sassy-teal', spotlight: 'rgba(56,163,165,0.15)' },
    { value: stat3Value, label: stat3Label, color: 'text-sassy-periwinkle', spotlight: 'rgba(131,121,199,0.15)' },
    { value: stat4Value, label: stat4Label, color: 'text-sassy-coral', spotlight: 'rgba(232,93,81,0.15)' },
  ]

  const trustSpotlightColors: Record<string, string> = {
    'text-sassy-coral': 'rgba(232,93,81,0.15)',
    'text-sassy-teal': 'rgba(56,163,165,0.15)',
    'text-sassy-gold': 'rgba(215,183,60,0.15)',
    'text-sassy-rose': 'rgba(199,101,130,0.15)',
  }

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-background to-sassy-lime/10">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeUp}
            custom={0}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-black mb-4"
          >
            {heading}{' '}
            <span className="bg-gradient-to-r from-sassy-fuchsia via-sassy-coral to-sassy-gold bg-clip-text text-transparent">
              {headingHighlight}
            </span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            custom={1}
            className="text-muted-foreground text-lg max-w-xl mx-auto"
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
          {trustPoints.map((point, i) => (
            <motion.div
              key={point.title}
              variants={fadeUp}
              custom={i}
              whileHover={{ y: -8 }}
            >
              <SpotlightCard
                spotlightColor={trustSpotlightColors[point.color] ?? 'rgba(232,115,107,0.15)'}
                className="text-center p-8 rounded-2xl hover:shadow-xl transition-shadow duration-300 h-full"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-muted mb-5`}>
                  <point.icon className={`h-8 w-8 ${point.color}`} />
                </div>
                <h3 className="text-xl font-bold mb-2">{point.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{point.description}</p>
              </SpotlightCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              custom={i}
            >
              <SpotlightCard
                spotlightColor={stat.spotlight}
                className="text-center p-6 rounded-xl"
              >
                <div className={`text-4xl md:text-5xl font-black mb-1 ${stat.color}`}>{stat.value}</div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </SpotlightCard>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Puck: Editable content slot */}
      <DropZone zone="content" />
    </section>
  )
}
