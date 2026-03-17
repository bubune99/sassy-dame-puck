'use client'

import React from 'react';

import { motion } from 'framer-motion'
import {
  Clock,
  ArrowRight,
  Sparkles,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
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

export function HomeFinalCta({
  content,
  badgeText = "24-Hour Turnaround Available",
  heading = "Ready to Create",
  headingHighlight = "Something Amazing?",
  description = "Join thousands of crafters, businesses & creators who trust SassyDame Designs for premium quality, lightning-fast turnaround & unbeatable service.",
  primaryButtonText = "Shop All Products",
  primaryButtonLink = "/products",
  secondaryButtonText = "Get a Custom Quote",
  secondaryButtonLink = "/custom-order",
}: {
  content?: React.FC;
  badgeText?: string;
  heading?: string;
  headingHighlight?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
}) {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-br from-sassy-coral/15 via-sassy-fuchsia/10 to-sassy-lime/15">
      <motion.div
        className="absolute top-[-30%] left-[20%] w-[500px] h-[500px] rounded-full bg-sassy-coral/25 blur-[120px]"
        animate={{ x: [0, 50, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-[-20%] right-[10%] w-[400px] h-[400px] rounded-full bg-sassy-lime/25 blur-[100px]"
        animate={{ x: [0, -40, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-[20%] right-[30%] w-[300px] h-[300px] rounded-full bg-sassy-fuchsia/20 blur-[100px]"
        animate={{ x: [0, 30, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative container mx-auto px-4 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeUp} custom={0}>
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-sassy-teal/15 border border-sassy-teal/30 backdrop-blur-sm mb-8">
              <Clock className="h-5 w-5 text-sassy-teal" />
              <span className="font-bold text-sassy-teal uppercase tracking-wide text-sm">
                {badgeText}
              </span>
            </div>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            custom={1}
            className="font-serif text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight text-foreground"
          >
            {heading}{' '}
            <span className="bg-gradient-to-r from-sassy-fuchsia via-sassy-coral to-sassy-gold bg-clip-text text-transparent">
              {headingHighlight}
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            custom={2}
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
          >
            {description}
          </motion.p>

          <motion.div
            variants={fadeUp}
            custom={3}
            className="flex flex-col sm:flex-row items-center justify-center gap-5"
          >
            <Button
              className="h-18 px-16 text-xl font-black rounded-2xl bg-sassy-coral hover:bg-sassy-coral/90 text-white shadow-lg shadow-sassy-coral/30 hover:shadow-xl transition-all duration-300 hover:scale-105 py-5"
              onClick={() => window.location.href = primaryButtonLink}
            >
              {primaryButtonText}
              <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
            <Button
              className="h-18 px-16 text-xl font-black rounded-2xl bg-sassy-lime hover:bg-sassy-lime/90 text-gray-900 shadow-lg shadow-sassy-lime/30 hover:shadow-xl transition-all duration-300 hover:scale-105 py-5"
              onClick={() => window.location.href = secondaryButtonLink}
            >
              {secondaryButtonText}
              <Sparkles className="ml-2 h-6 w-6" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
      {content && typeof content === "function" && content({})}
</section>
  )
}
