'use client'

import React from 'react';

import { motion } from 'framer-motion'
import {
  ArrowRight,
  Shield,
  Zap,
  Clock,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SpotlightCard } from './effects/spotlight-card'
import { cn } from '@/lib/utils'
export interface DtfPricingProps {
  content?: React.FC;
  sectionHeading: string;
  sectionHeadingHighlight: string;
  sectionDescription: string;
  card1Value: string;
  card1Desc: string;
  card2Value: string;
  card2Desc: string;
  card3Value: string;
  card3Desc: string;
  ctaButtonText: string;
  ctaButtonLink: string;
}

export function DtfPricing({
  content,
  sectionHeading = 'Transparent',
  sectionHeadingHighlight = 'Pricing',
  sectionDescription = 'No surprises, no hidden fees',
  card1Value = 'No Minimums',
  card1Desc = 'Order 1 or 1,000 -- same quality',
  card2Value = 'No Setup Fees',
  card2Desc = 'Just upload and we print',
  card3Value = 'Same-Day Ship',
  card3Desc = 'Order by 12pm Eastern',
  ctaButtonText = 'Start Your Order',
  ctaButtonLink = '/dtf-builder',
}: DtfPricingProps) {
  const cards = [
    { icon: Shield, value: card1Value, desc: card1Desc, color: 'text-sassy-teal', bg: 'bg-sassy-teal/10' },
    { icon: Zap, value: card2Value, desc: card2Desc, color: 'text-sassy-periwinkle', bg: 'bg-sassy-periwinkle/10' },
    { icon: Clock, value: card3Value, desc: card3Desc, color: 'text-sassy-lime', bg: 'bg-sassy-lime/10' },
  ]

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            {sectionHeading} <span className="text-sassy-teal">{sectionHeadingHighlight}</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-12">{sectionDescription}</p>

          <div className="grid md:grid-cols-3 gap-6">
            {cards.map((item) => (
              <motion.div
                key={item.value}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <SpotlightCard className={cn('rounded-2xl', item.bg)}>
                  <div className="p-8">
                    <item.icon className={cn('h-8 w-8 mb-4 mx-auto', item.color)} />
                    <div className={cn('text-2xl font-bold mb-2', item.color)}>{item.value}</div>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <Button size="lg" className="bg-gradient-to-r from-sassy-teal to-sassy-periwinkle hover:from-sassy-teal/90 hover:to-sassy-periwinkle/90 text-white text-xl px-14 py-8 font-bold rounded-2xl shadow-xl shadow-sassy-teal/25" onClick={() => window.location.href = ctaButtonLink}>
              {ctaButtonText} <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
          </motion.div>
        </div>
      </div>
      {content && typeof content === "function" && content({})}
</section>
  )
}
