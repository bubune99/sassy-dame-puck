'use client'

import { motion } from 'framer-motion'
import { Package, Clock, Star, Truck, ArrowRight, Award } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { DropZone } from "@puckeditor/core";

export function ServicesHero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Gold accent line */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-sassy-gold via-sassy-orange to-sassy-coral z-10" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sassy-gold/15 border border-sassy-gold/25 mb-8">
              <Award className="h-4 w-4 text-sassy-gold" />
              <span className="text-sm font-medium text-sassy-gold">Trusted by 1000+ Businesses</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-[0.95]">
              <span className="block">Your Brand,</span>
              <span className="block bg-gradient-to-r from-sassy-gold via-sassy-orange to-sassy-coral bg-clip-text text-transparent">
                Our Expertise
              </span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
              From bulk orders to custom apparel, signs, and banners -- we deliver professional quality with the personal touch of a local craft shop.
            </p>

            <div className="flex flex-wrap gap-4 justify-center mb-16">
              <Button size="lg" className="text-lg px-10 py-6 bg-sassy-gold hover:bg-sassy-gold/90 text-foreground" onClick={() => window.location.href = '/contact'}>
                Request a Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-10 py-6 border-sassy-gold text-sassy-gold hover:bg-sassy-gold hover:text-foreground" onClick={() => window.location.href = '/bulk-order'}>
                Bulk Order Form
              </Button>
            </div>

            {/* Trust metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: Package, value: '1,000+', label: 'Orders Completed' },
                { icon: Clock, value: '24hr', label: 'Quote Turnaround' },
                { icon: Star, value: '4.9/5', label: 'Customer Rating' },
                { icon: Truck, value: '2-Day', label: 'Rush Available' },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="text-center"
                >
                  <stat.icon className="h-6 w-6 text-sassy-gold mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wide">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Puck: Editable content slot */}
      <DropZone zone="content" />
    </section>
  )
}
