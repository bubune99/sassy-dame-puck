'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Layers, Palette, Zap, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { GlowingBorder } from './effects/glowing-border'

const features = [
  {
    icon: Layers,
    title: 'Build Custom Gang Sheets',
    description: 'Maximize your transfer material by arranging multiple designs on a single sheet',
    color: 'text-sassy-teal bg-sassy-teal/15',
  },
  {
    icon: Palette,
    title: 'Upload Your Designs',
    description: 'Support for PNG, SVG, and other popular formats with transparent backgrounds',
    color: 'text-sassy-periwinkle bg-sassy-periwinkle/15',
  },
  {
    icon: Zap,
    title: 'Instant Pricing',
    description: 'See your costs in real-time as you build your perfect gang sheet',
    color: 'text-sassy-gold bg-sassy-gold/15',
  },
]

const benefits = [
  'No minimum order quantity',
  'Premium DTF transfer quality',
  'Fast turnaround times',
  'Satisfaction guaranteed',
]

export function DTFPromoSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-3 py-1 rounded-full bg-sassy-teal/15 text-sassy-teal text-sm font-medium mb-4">
                DTF Builder
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Design Your Own
                <span className="block bg-gradient-to-r from-sassy-lime via-sassy-sky to-sassy-periwinkle bg-clip-text text-transparent">Gang Sheets</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-lg">
                Our easy-to-use DTF Builder lets you create custom gang sheets
                with your designs. Perfect for small businesses, crafters, and
                anyone who wants professional DTF transfers.
              </p>

              {/* Benefits List */}
              <ul className="space-y-3 mb-8">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="h-5 w-5 text-sassy-lime flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </motion.li>
                ))}
              </ul>

              <Button size="lg" className="group bg-sassy-lime hover:bg-sassy-lime/90 text-foreground">
                Try DTF Builder
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>

          {/* Right Content - Feature Cards */}
          <div className="space-y-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                <GlowingBorder animate={false} containerClassName="hover:shadow-lg transition-shadow">
                  <div className="p-6 flex items-start gap-4">
                    <div className={`h-12 w-12 rounded-lg ${feature.color} flex items-center justify-center flex-shrink-0`}>
                      <feature.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{feature.title}</h3>
                      <p className="text-muted-foreground text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </GlowingBorder>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
