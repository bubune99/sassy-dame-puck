'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Printer, Sparkles, Shirt, Calendar, Users } from 'lucide-react'
import { cn } from '@/lib/utils'
import { DropZone } from "@puckeditor/core";

// Self-contained category data (removed dependency on navigation config)
const showcaseCategories = [
  {
    key: 'dtf',
    shortLabel: 'DTF Printing',
    description: 'Custom direct-to-film transfers for vibrant designs',
    icon: Printer,
    color: 'text-sassy-teal',
    bgColor: 'bg-sassy-teal',
  },
  {
    key: 'uv',
    shortLabel: 'UV Stickers',
    description: 'Premium UV-printed stickers and decals',
    icon: Sparkles,
    color: 'text-sassy-periwinkle',
    bgColor: 'bg-sassy-periwinkle',
  },
  {
    key: 'apparel',
    shortLabel: 'Custom Apparel',
    description: 'Personalized shirts, hoodies, and more',
    icon: Shirt,
    color: 'text-sassy-coral',
    bgColor: 'bg-sassy-coral',
  },
  {
    key: 'events',
    shortLabel: 'Classes & Events',
    description: 'Hands-on crafting workshops and classes',
    icon: Calendar,
    color: 'text-sassy-gold',
    bgColor: 'bg-sassy-gold',
  },
  {
    key: 'rentals',
    shortLabel: 'Heat Press Rentals',
    description: 'Professional equipment for your projects',
    icon: Users,
    color: 'text-sassy-rose',
    bgColor: 'bg-sassy-rose',
  },
]

export function BrandShowcase() {
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
            Everything Under One Roof
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            One Brand,{' '}
            <span className="bg-gradient-to-r from-sassy-teal via-sassy-sky to-sassy-fuchsia bg-clip-text text-transparent">
              Five Experiences
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From custom printing to community events, we have everything crafters need
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {showcaseCategories.map((category, index) => (
            <motion.div
              key={category.key}
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
                  category.bgColor
                )} />

                <div className={cn(
                  'w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-all duration-300',
                  `${category.bgColor}/15 ${category.color}`,
                )}>
                  <category.icon className="h-7 w-7" />
                </div>

                <h3 className="font-semibold text-base mb-1 group-hover:text-foreground transition-colors">
                  {category.shortLabel}
                </h3>
                <p className="text-xs text-muted-foreground mb-4 line-clamp-2">
                  {category.description}
                </p>

                <span className={cn(
                  'flex items-center text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity',
                  category.color
                )}>
                  Explore
                  <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Puck: Editable content slot */}
      <DropZone zone="content" />
    </section>
  )
}
