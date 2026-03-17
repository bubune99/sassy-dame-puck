'use client'

import React from 'react';

import { motion } from 'framer-motion'
import {
  Zap,
  Clock,
  ArrowRight,
  CheckCircle,
  Heart,
  MapPin,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
export function HomeHero({
  content,
  puck,
  badgeText = "1230 Green Street, Raleigh NC",
  heading = "Where Creativity",
  headingHighlight = "Meets Community.",
  subheading = "SassyDame Designs is your local craft and print studio in Raleigh, NC. From custom DTF printing and crafting workshops to heat press rentals and community events — we are the home for makers, creators, and small businesses.",
  primaryButtonText = "Our Story",
  primaryButtonLink = "/about",
  secondaryButtonText = "Shop Products",
  secondaryButtonLink = "/products",
  tertiaryButtonText = "Visit Our Studio",
  tertiaryButtonLink = "/pages/visit-us",
  trustItem1 = "Local Raleigh Studio",
  trustItem2 = "Workshops & Events",
  trustItem3 = "4.9 Google Rating",
}: {
  content?: React.FC;
  puck?: { isEditing?: boolean };
  badgeText?: string;
  heading?: string;
  headingHighlight?: string;
  subheading?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  tertiaryButtonText?: string;
  tertiaryButtonLink?: string;
  trustItem1?: string;
  trustItem2?: string;
  trustItem3?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-sassy-teal/20 via-sassy-sky/10 to-sassy-fuchsia/15">
      {/* Animated background blobs */}
      <motion.div
        className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-sassy-coral/30 blur-[120px]"
        animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-sassy-periwinkle/30 blur-[120px]"
        animate={{ x: [0, -40, 0], y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-[30%] right-[20%] w-[400px] h-[400px] rounded-full bg-sassy-teal/25 blur-[100px]"
        animate={{ x: [0, 30, 0], y: [0, 40, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-[60%] left-[30%] w-[300px] h-[300px] rounded-full bg-sassy-fuchsia/20 blur-[100px]"
        animate={{ x: [0, -20, 0], y: [0, 20, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-[10%] left-[50%] w-[350px] h-[350px] rounded-full bg-sassy-lime/20 blur-[100px]"
        animate={{ x: [0, -30, 0], y: [0, 25, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative container mx-auto px-4 py-24 md:py-36 lg:py-44">
        <div className="max-w-5xl mx-auto text-center">
          {/* Location badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-8 px-6 py-3 rounded-full bg-sassy-teal/15 border border-sassy-teal/40 backdrop-blur-sm"
          >
            <MapPin className="h-5 w-5 text-sassy-teal" />
            <span className="text-sm md:text-base font-bold tracking-wide text-sassy-teal uppercase">
              {badgeText}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-[0.95] tracking-tight text-foreground"
          >
            <span className="block">{heading}</span>
            <span className="block bg-gradient-to-r from-sassy-fuchsia via-sassy-coral to-sassy-gold bg-clip-text text-transparent">
              {headingHighlight}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            {subheading}
          </motion.p>

          {/* Big CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
          >
            <Button
              className="h-16 px-12 text-lg font-bold rounded-xl bg-sassy-coral hover:bg-sassy-coral/90 text-white shadow-lg shadow-sassy-coral/30 hover:shadow-xl hover:shadow-sassy-coral/40 transition-all duration-300 hover:scale-105"
              onClick={() => window.location.href = primaryButtonLink}
            >
              {primaryButtonText}
              <Heart className="ml-2 h-5 w-5" />
            </Button>
            <Button
              className="h-16 px-12 text-lg font-bold rounded-xl bg-sassy-lime hover:bg-sassy-lime/90 text-gray-900 shadow-lg shadow-sassy-lime/30 hover:shadow-xl hover:shadow-sassy-lime/40 transition-all duration-300 hover:scale-105"
              onClick={() => window.location.href = secondaryButtonLink}
            >
              {secondaryButtonText}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              className="h-16 px-12 text-lg font-bold rounded-xl border-2 border-sassy-teal text-sassy-teal hover:bg-sassy-teal hover:text-white transition-all duration-300 hover:scale-105"
              onClick={() => window.location.href = tertiaryButtonLink}
            >
              {tertiaryButtonText}
              <MapPin className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>

          {/* Trust strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="mt-14 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground"
          >
            <span className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-sassy-teal" />
              {trustItem1}
            </span>
            <span className="hidden sm:inline text-border">|</span>
            <span className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-sassy-coral" />
              {trustItem2}
            </span>
            <span className="hidden sm:inline text-border">|</span>
            <span className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-sassy-gold" />
              {trustItem3}
            </span>
          </motion.div>
        </div>
      </div>

      {/* Diagonal divider */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-background" style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0)' }} />
      {content && typeof content === "function" && content({})}
</section>
  )
}
