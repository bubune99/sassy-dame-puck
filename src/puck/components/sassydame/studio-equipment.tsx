'use client'

import { motion } from 'framer-motion'
import { Scissors, Sparkles, Palette, Paintbrush, Star } from 'lucide-react'
import { SpotlightCard } from './effects/spotlight-card'
import { cn } from '@/lib/utils'
import { DropZone } from "@puckeditor/core";

export function StudioEquipment() {
  const equipment = [
    { name: 'Cricut Maker 3', icon: Scissors, color: 'text-sassy-periwinkle' },
    { name: 'Silhouette Cameo', icon: Scissors, color: 'text-sassy-rose' },
    { name: 'Heat Press', icon: Sparkles, color: 'text-sassy-coral' },
    { name: 'Tumbler Press', icon: Sparkles, color: 'text-sassy-gold' },
    { name: 'Sublimation Printer', icon: Palette, color: 'text-sassy-teal' },
    { name: 'Vinyl Cutter', icon: Scissors, color: 'text-sassy-lime' },
    { name: 'Sewing Machine', icon: Paintbrush, color: 'text-sassy-sage' },
    { name: 'Embroidery Machine', icon: Star, color: 'text-sassy-periwinkle' },
  ]

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Professional <span className="text-sassy-periwinkle">Equipment</span>
          </h2>
          <p className="text-muted-foreground text-lg">Everything you need, ready to use</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {equipment.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -4 }}
            >
              <SpotlightCard className="rounded-2xl h-full">
                <div className="flex flex-col items-center gap-3 p-6 text-center">
                  <item.icon className={cn('h-7 w-7', item.color)} />
                  <span className="text-sm font-medium">{item.name}</span>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Puck: Editable content slot */}
      <DropZone zone="content" />
    </section>
  )
}
