'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { TextReveal, TextFadeIn } from './effects/text-reveal'
import { FloatingElements, FloatingShapes } from './effects/floating-elements'

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-sassy-lime/15 via-background to-sassy-teal/15">
      {/* Bright, Happy Background Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-sassy-coral/25 rounded-full blur-3xl" />
        <div className="absolute top-1/4 left-0 w-80 h-80 bg-sassy-teal/25 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-sassy-periwinkle/25 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-sassy-orange/20 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/3 w-56 h-56 bg-sassy-fuchsia/15 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-0 w-48 h-48 bg-sassy-sky/15 rounded-full blur-3xl" />
      </div>

      {/* Background Effects */}
      <FloatingShapes />
      <FloatingElements count={8} className="opacity-40" />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sassy-lime/20 border border-sassy-lime/40 mb-8"
          >
            <Sparkles className="h-4 w-4 text-sassy-teal" />
            <span className="text-sm font-medium text-foreground">
              Your Local Craft Destination
            </span>
          </motion.div>

          {/* Main Heading */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">
            <TextReveal text="Create Something" className="block" />
            <span className="block mt-2">
              <TextReveal
                text="Beautiful"
                className="bg-gradient-to-r from-sassy-fuchsia via-sassy-coral to-sassy-gold bg-clip-text text-transparent"
                delay={0.8}
              />
            </span>
          </h1>

          {/* Subheading */}
          <TextFadeIn delay={1.2} className="mb-10">
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Premium DTF printing supplies, craft blanks, and everything you need
              to bring your creative vision to life. Plus workshops and community events!
            </p>
          </TextFadeIn>

          {/* CTA Buttons */}
          <TextFadeIn delay={1.5}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                className="text-lg px-8 py-6 group bg-sassy-lime hover:bg-sassy-lime/90 text-foreground"
              >
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 border-2 border-sassy-teal text-sassy-teal hover:bg-sassy-teal hover:text-white"
              >
                Try DTF Builder
              </Button>
            </div>
          </TextFadeIn>

          {/* Trust Indicators */}
          <TextFadeIn delay={1.8}>
            <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-sassy-lime" />
                <span>Free Local Pickup</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-sassy-teal" />
                <span>Expert Support</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-sassy-coral" />
                <span>Quality Guaranteed</span>
              </div>
            </div>
          </TextFadeIn>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
