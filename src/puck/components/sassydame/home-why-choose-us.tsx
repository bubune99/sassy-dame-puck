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

const trustPoints = [
  {
    icon: Clock,
    title: '24-Hour Turnaround',
    description: 'Lightning-fast production on most orders — get your transfers in just 24 hours',
    color: 'text-sassy-coral',
  },
  {
    icon: Truck,
    title: 'Free Shipping $75+',
    description: 'Free standard shipping on all orders over $75 across the US',
    color: 'text-sassy-teal',
  },
  {
    icon: Star,
    title: '4.9 Star Rating',
    description: 'Thousands of 5-star reviews from crafters, businesses & creators',
    color: 'text-sassy-gold',
  },
  {
    icon: Heart,
    title: 'Made with Love',
    description: 'Every order crafted with care and attention to detail',
    color: 'text-sassy-rose',
  },
]

export function HomeWhyChooseUs() {
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
            Why Crafters{' '}
            <span className="bg-gradient-to-r from-sassy-fuchsia via-sassy-coral to-sassy-gold bg-clip-text text-transparent">
              Love Us
            </span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            custom={1}
            className="text-muted-foreground text-lg max-w-xl mx-auto"
          >
            5,000+ happy customers and counting. Here is why they keep coming back.
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
          {[
            { value: '5,000+', label: 'Happy Customers', color: 'text-sassy-lime', spotlight: 'rgba(163,210,51,0.15)' },
            { value: '50+', label: 'Workshops Hosted', color: 'text-sassy-teal', spotlight: 'rgba(56,163,165,0.15)' },
            { value: '1,000+', label: 'Custom Orders', color: 'text-sassy-periwinkle', spotlight: 'rgba(131,121,199,0.15)' },
            { value: '4.9', label: 'Google Rating', color: 'text-sassy-coral', spotlight: 'rgba(232,93,81,0.15)' },
          ].map((stat, i) => (
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
