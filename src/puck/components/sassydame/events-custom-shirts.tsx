'use client'

import React from 'react';

import { motion } from 'framer-motion'
import { Shirt, Palette, PartyPopper } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
export interface EventsCustomShirtsProps {
  content?: React.FC;
  puck?: { isEditing?: boolean };
  badgeText: string;
  sectionHeading: string;
  sectionHeadingHighlight: string;
  sectionDescription: string;
  step1Title: string;
  step1Desc: string;
  step2Title: string;
  step2Desc: string;
  step3Title: string;
  step3Desc: string;
  step4Title: string;
  step4Desc: string;
  eventTypesHeading: string;
  eventTypes: string;
  orderInfo: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText: string;
  secondaryButtonLink: string;
}

export function EventsCustomShirts({
  content,
  puck,
  badgeText = 'Custom Event Shirts',
  sectionHeading = 'Custom Shirts for',
  sectionHeadingHighlight = 'Your Event',
  sectionDescription = 'Match your crew with custom-printed event shirts. From team jerseys to party tees, we handle the design, printing, and delivery so you can focus on having fun.',
  step1Title = 'Tell Us Your Event',
  step1Desc = 'Share your event details, theme, colors, and how many shirts you need.',
  step2Title = 'We Design It',
  step2Desc = 'Our team creates custom artwork for your group -- or bring your own design.',
  step3Title = 'Pick Your Style',
  step3Desc = 'Choose from tees, tanks, hoodies, and more in a range of vibrant colors.',
  step4Title = 'We Print & Deliver',
  step4Desc = 'Premium DTF prints, pressed and ready for your event. Bulk pricing available.',
  eventTypesHeading = 'Perfect For Any Event',
  eventTypes = 'Team Sports, Family Reunions, Birthday Parties, Bachelorette Weekends, Corporate Events, School Groups, Church Groups, Fundraisers, Festivals, Wedding Parties, Club Events, Community Runs',
  orderInfo = 'Minimum order: <span class="font-bold text-foreground">12 shirts</span> | Bulk discounts for 50+ | Design help included',
  primaryButtonText = 'Start Your Order',
  primaryButtonLink = '/custom-transfers',
  secondaryButtonText = 'Get a Quote',
  secondaryButtonLink = '/contact',
}: EventsCustomShirtsProps) {
  const steps = [
    { step: '1', title: step1Title, desc: step1Desc, color: 'bg-sassy-coral' },
    { step: '2', title: step2Title, desc: step2Desc, color: 'bg-sassy-gold' },
    { step: '3', title: step3Title, desc: step3Desc, color: 'bg-sassy-teal' },
    { step: '4', title: step4Title, desc: step4Desc, color: 'bg-sassy-periwinkle' },
  ]

  const eventTypesList = eventTypes.split(',').map((t) => t.trim()).filter(Boolean)

  return (
    <section className="py-28 relative overflow-hidden">
      {/* Vibrant background */}
      <div className="absolute inset-0 bg-gradient-to-br from-sassy-coral/8 via-sassy-gold/5 to-sassy-periwinkle/8" />
      <div className="absolute top-[20%] right-[10%] w-64 h-64 bg-sassy-gold/15 rounded-full blur-3xl" />
      <div className="absolute bottom-[10%] left-[5%] w-80 h-80 bg-sassy-coral/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center bg-gradient-to-r from-sassy-coral to-sassy-gold text-white text-sm px-5 py-2 rounded-full mb-6 font-bold">
            <Shirt className="h-4 w-4 mr-2" /> {badgeText}
          </span>
          <h2 className="font-serif text-4xl md:text-6xl font-bold mb-5">
            {sectionHeading} <span className="bg-gradient-to-r from-sassy-fuchsia via-sassy-coral to-sassy-gold bg-clip-text text-transparent">{sectionHeadingHighlight}</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {sectionDescription}
          </p>
        </motion.div>

        {/* How It Works - Steps */}
        <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-16">
          {steps.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="text-center"
            >
              <div className={cn('w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 shadow-lg', item.color)}>
                {item.step}
              </div>
              <h3 className="font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Event types tags */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-card/80 backdrop-blur-sm rounded-3xl border-2 border-sassy-gold/20 p-10">
            <div className="flex items-center justify-center gap-3 mb-6">
              <PartyPopper className="h-7 w-7 text-sassy-coral" />
              <h3 className="font-serif text-2xl font-bold">{eventTypesHeading}</h3>
            </div>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {eventTypesList.map((type, i) => {
                const colors = ['bg-sassy-coral/10 text-sassy-coral border-sassy-coral/30', 'bg-sassy-gold/10 text-sassy-gold border-sassy-gold/30', 'bg-sassy-teal/10 text-sassy-teal border-sassy-teal/30', 'bg-sassy-periwinkle/10 text-sassy-periwinkle border-sassy-periwinkle/30', 'bg-sassy-orange/10 text-sassy-orange border-sassy-orange/30', 'bg-sassy-lime/10 text-sassy-lime border-sassy-lime/30']
                return (
                  <span key={type} className={cn('px-4 py-2 rounded-full text-sm font-semibold border', colors[i % colors.length])}>
                    {type}
                  </span>
                )
              })}
            </div>

            <div className="text-center">
              <p className="text-muted-foreground mb-6" dangerouslySetInnerHTML={{ __html: orderInfo }} />
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-xl px-12 py-7 bg-gradient-to-r from-sassy-fuchsia via-sassy-coral to-sassy-gold text-white font-bold rounded-2xl shadow-lg shadow-sassy-coral/25 hover:shadow-xl" onClick={() => window.location.href = primaryButtonLink}>
                  <Shirt className="mr-2 h-6 w-6" />
                  {primaryButtonText}
                </Button>
                <Button size="lg" variant="outline" className="text-xl px-12 py-7 border-2 border-sassy-coral text-sassy-coral hover:bg-sassy-coral hover:text-white font-bold rounded-2xl" onClick={() => window.location.href = secondaryButtonLink}>
                  <Palette className="mr-2 h-5 w-5" />
                  {secondaryButtonText}
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      {content && typeof content === "function" && content({})}
</section>
  )
}
