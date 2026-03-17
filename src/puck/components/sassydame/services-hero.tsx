'use client'

import React from 'react';

import { motion } from 'framer-motion'
import { Package, Clock, Star, Truck, ArrowRight, Award } from 'lucide-react'
import { Button } from '@/components/ui/button'
export interface ServicesHeroProps {
  content?: React.FC;
  badge?: string;
  headingLine1?: string;
  headingLine2?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  stat1Value?: string;
  stat1Label?: string;
  stat2Value?: string;
  stat2Label?: string;
  stat3Value?: string;
  stat3Label?: string;
  stat4Value?: string;
  stat4Label?: string;
}

export function ServicesHero({
  content,
  badge = "Trusted by 1000+ Businesses",
  headingLine1 = "Your Brand,",
  headingLine2 = "Our Expertise",
  description = "From bulk orders to custom apparel, signs, and banners -- we deliver professional quality with the personal touch of a local craft shop.",
  primaryButtonText = "Request a Quote",
  primaryButtonLink = "/contact",
  secondaryButtonText = "Bulk Order Form",
  secondaryButtonLink = "/bulk-order",
  stat1Value = "1,000+",
  stat1Label = "Orders Completed",
  stat2Value = "24hr",
  stat2Label = "Quote Turnaround",
  stat3Value = "4.9/5",
  stat3Label = "Customer Rating",
  stat4Value = "2-Day",
  stat4Label = "Rush Available",
}: ServicesHeroProps) {
  const stats = [
    { icon: Package, value: stat1Value, label: stat1Label },
    { icon: Clock, value: stat2Value, label: stat2Label },
    { icon: Star, value: stat3Value, label: stat3Label },
    { icon: Truck, value: stat4Value, label: stat4Label },
  ];

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
              <span className="text-sm font-medium text-sassy-gold">{badge}</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-[0.95]">
              <span className="block">{headingLine1}</span>
              <span className="block bg-gradient-to-r from-sassy-gold via-sassy-orange to-sassy-coral bg-clip-text text-transparent">
                {headingLine2}
              </span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
              {description}
            </p>

            <div className="flex flex-wrap gap-4 justify-center mb-16">
              <Button size="lg" className="text-lg px-10 py-6 bg-sassy-gold hover:bg-sassy-gold/90 text-foreground" onClick={() => window.location.href = primaryButtonLink}>
                {primaryButtonText}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-10 py-6 border-sassy-gold text-sassy-gold hover:bg-sassy-gold hover:text-foreground" onClick={() => window.location.href = secondaryButtonLink}>
                {secondaryButtonText}
              </Button>
            </div>

            {/* Trust metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, i) => (
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
      {content && typeof content === "function" && content({})}
</section>
  )
}
