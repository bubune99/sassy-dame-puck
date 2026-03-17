'use client'

import React from 'react';

import { motion } from 'framer-motion'
import {
  Printer,
  Shirt,
  Calendar,
  Users,
  Paintbrush,
  ArrowRight,
  Sparkles,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
const serviceIcons = [Printer, Sparkles, Shirt, Paintbrush, Calendar, Users]
const serviceColors = [
  { color: 'bg-sassy-teal/15 text-sassy-teal', hoverColor: 'group-hover:bg-sassy-teal group-hover:text-white' },
  { color: 'bg-sassy-periwinkle/15 text-sassy-periwinkle', hoverColor: 'group-hover:bg-sassy-periwinkle group-hover:text-white' },
  { color: 'bg-sassy-coral/15 text-sassy-coral', hoverColor: 'group-hover:bg-sassy-coral group-hover:text-white' },
  { color: 'bg-sassy-lime/15 text-sassy-lime', hoverColor: 'group-hover:bg-sassy-lime group-hover:text-foreground' },
  { color: 'bg-sassy-gold/15 text-sassy-gold', hoverColor: 'group-hover:bg-sassy-gold group-hover:text-foreground' },
  { color: 'bg-sassy-rose/15 text-sassy-rose', hoverColor: 'group-hover:bg-sassy-rose group-hover:text-white' },
]

export function ServicesCTASection({
  content,
  badgeText = "What We Offer",
  headingPrefix = "Your One-Stop",
  headingHighlight = "Craft Shop",
  description = "From professional printing services to hands-on workshops, we have everything you need to unleash your creativity",
  service1Title = "DTF Printing",
  service1Description = "Custom direct-to-film transfers for vibrant, long-lasting designs on any fabric",
  service2Title = "UV Stickers",
  service2Description = "Premium UV-printed stickers and decals for any surface with stunning detail",
  service3Title = "Custom Apparel",
  service3Description = "Personalized shirts, hoodies, and more with your unique designs",
  service4Title = "Craft Blanks",
  service4Description = "High-quality blanks ready for sublimation, HTV, and other crafting methods",
  service5Title = "Classes & Workshops",
  service5Description = "Learn new skills with hands-on crafting classes for all experience levels",
  service6Title = "Heat Press Rentals",
  service6Description = "Rent professional heat presses and equipment for your projects or events",
  bottomText = "Not sure where to start? We are here to help!",
  bottomButtonText = "Contact Us",
}: {
  content?: React.FC;
  badgeText?: string;
  headingPrefix?: string;
  headingHighlight?: string;
  description?: string;
  service1Title?: string;
  service1Description?: string;
  service2Title?: string;
  service2Description?: string;
  service3Title?: string;
  service3Description?: string;
  service4Title?: string;
  service4Description?: string;
  service5Title?: string;
  service5Description?: string;
  service6Title?: string;
  service6Description?: string;
  bottomText?: string;
  bottomButtonText?: string;
}) {
  const services = [
    { title: service1Title, description: service1Description },
    { title: service2Title, description: service2Description },
    { title: service3Title, description: service3Description },
    { title: service4Title, description: service4Description },
    { title: service5Title, description: service5Description },
    { title: service6Title, description: service6Description },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-background via-sassy-lime/10 to-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-sassy-teal/15 text-sassy-teal text-sm font-medium mb-4">
            {badgeText}
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">
            {headingPrefix}{' '}
            <span className="bg-gradient-to-r from-sassy-teal via-sassy-sky to-sassy-fuchsia bg-clip-text text-transparent">
              {headingHighlight}
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {description}
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => {
            const Icon = serviceIcons[index]
            const colors = serviceColors[index]
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div
                  className="group block p-6 rounded-2xl bg-card border border-border hover:border-transparent hover:shadow-xl transition-all duration-300 cursor-pointer"
                >
                  <div className={`w-14 h-14 rounded-xl ${colors.color} ${colors.hoverColor} flex items-center justify-center mb-4 transition-all duration-300`}>
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="font-semibold text-xl mb-2 group-hover:text-sassy-teal transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {service.description}
                  </p>
                  <div className="flex items-center text-sm font-medium text-sassy-teal opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center"
        >
          <p className="text-muted-foreground mb-4">
            {bottomText}
          </p>
          <Button size="lg" variant="outline" className="border-2 border-sassy-teal text-sassy-teal hover:bg-sassy-teal hover:text-white">
            {bottomButtonText}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
      {content && typeof content === "function" && content({})}
</section>
  )
}
