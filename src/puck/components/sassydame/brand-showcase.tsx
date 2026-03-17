'use client'

import React from 'react';

import { motion } from 'framer-motion'
import { ArrowRight, Printer, Sparkles, Shirt, Calendar, Users } from 'lucide-react'
import { cn } from '@/lib/utils'
const categoryIcons = [Printer, Sparkles, Shirt, Calendar, Users]
const categoryStyles = [
  { color: 'text-sassy-teal', bgColor: 'bg-sassy-teal' },
  { color: 'text-sassy-periwinkle', bgColor: 'bg-sassy-periwinkle' },
  { color: 'text-sassy-coral', bgColor: 'bg-sassy-coral' },
  { color: 'text-sassy-gold', bgColor: 'bg-sassy-gold' },
  { color: 'text-sassy-rose', bgColor: 'bg-sassy-rose' },
]

export function BrandShowcase({
  content,
  puck,
  badgeText = "Everything Under One Roof",
  headingPrefix = "One Brand,",
  headingHighlight = "Five Experiences",
  subheading = "From custom printing to community events, we have everything crafters need",
  cat1Label = "DTF Printing",
  cat1Description = "Custom direct-to-film transfers for vibrant designs",
  cat2Label = "UV Stickers",
  cat2Description = "Premium UV-printed stickers and decals",
  cat3Label = "Custom Apparel",
  cat3Description = "Personalized shirts, hoodies, and more",
  cat4Label = "Classes & Events",
  cat4Description = "Hands-on crafting workshops and classes",
  cat5Label = "Heat Press Rentals",
  cat5Description = "Professional equipment for your projects",
}: {
  content?: React.FC;
  puck?: { isEditing?: boolean };
  badgeText?: string;
  headingPrefix?: string;
  headingHighlight?: string;
  subheading?: string;
  cat1Label?: string;
  cat1Description?: string;
  cat2Label?: string;
  cat2Description?: string;
  cat3Label?: string;
  cat3Description?: string;
  cat4Label?: string;
  cat4Description?: string;
  cat5Label?: string;
  cat5Description?: string;
}) {
  const categories = [
    { shortLabel: cat1Label, description: cat1Description },
    { shortLabel: cat2Label, description: cat2Description },
    { shortLabel: cat3Label, description: cat3Description },
    { shortLabel: cat4Label, description: cat4Description },
    { shortLabel: cat5Label, description: cat5Description },
  ]

  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-sassy-lime/15 text-sassy-teal text-sm font-medium mb-4">
            {badgeText}
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {headingPrefix}{' '}
            <span className="bg-gradient-to-r from-sassy-teal via-sassy-sky to-sassy-fuchsia bg-clip-text text-transparent">
              {headingHighlight}
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {subheading}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {categories.map((category, index) => {
            const Icon = categoryIcons[index]
            const style = categoryStyles[index]
            return (
              <motion.div
                key={category.shortLabel}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div
                  className={cn(
                    'group relative flex flex-col items-center text-center p-6 rounded-2xl border border-border',
                    'hover:shadow-xl transition-all duration-300 bg-card overflow-hidden cursor-pointer',
                    'hover:border-transparent'
                  )}
                >
                  {/* Hover gradient overlay */}
                  <div className={cn(
                    'absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity',
                    style.bgColor
                  )} />

                  <div className={cn(
                    'w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-all duration-300',
                    `${style.bgColor}/15 ${style.color}`,
                  )}>
                    <Icon className="h-7 w-7" />
                  </div>

                  <h3 className="font-semibold text-base mb-1 group-hover:text-foreground transition-colors">
                    {category.shortLabel}
                  </h3>
                  <p className="text-xs text-muted-foreground mb-4 line-clamp-2">
                    {category.description}
                  </p>

                  <span className={cn(
                    'flex items-center text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity',
                    style.color
                  )}>
                    Explore
                    <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
      {content && typeof content === "function" && content({})}
</section>
  )
}
