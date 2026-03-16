'use client'

import { motion } from 'framer-motion'
import { Scissors, Sparkles, Palette, Paintbrush, Star } from 'lucide-react'
import { SpotlightCard } from './effects/spotlight-card'
import { cn } from '@/lib/utils'
import { DropZone } from "@puckeditor/core";

export interface StudioEquipmentProps {
  heading?: string;
  headingHighlight?: string;
  subheading?: string;
  item1?: string;
  item2?: string;
  item3?: string;
  item4?: string;
  item5?: string;
  item6?: string;
  item7?: string;
  item8?: string;
}

export function StudioEquipment({
  heading = "Professional",
  headingHighlight = "Equipment",
  subheading = "Everything you need, ready to use",
  item1 = "Cricut Maker 3",
  item2 = "Silhouette Cameo",
  item3 = "Heat Press",
  item4 = "Tumbler Press",
  item5 = "Sublimation Printer",
  item6 = "Vinyl Cutter",
  item7 = "Sewing Machine",
  item8 = "Embroidery Machine",
}: StudioEquipmentProps) {
  const icons = [Scissors, Scissors, Sparkles, Sparkles, Palette, Scissors, Paintbrush, Star];
  const colors = ['text-sassy-periwinkle', 'text-sassy-rose', 'text-sassy-coral', 'text-sassy-gold', 'text-sassy-teal', 'text-sassy-lime', 'text-sassy-sage', 'text-sassy-periwinkle'];
  const items = [item1, item2, item3, item4, item5, item6, item7, item8];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            {heading} <span className="text-sassy-periwinkle">{headingHighlight}</span>
          </h2>
          <p className="text-muted-foreground text-lg">{subheading}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {items.map((name, i) => {
            const Icon = icons[i];
            const color = colors[i];
            return (
              <motion.div
                key={name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -4 }}
              >
                <SpotlightCard className="rounded-2xl h-full">
                  <div className="flex flex-col items-center gap-3 p-6 text-center">
                    <Icon className={cn('h-7 w-7', color)} />
                    <span className="text-sm font-medium">{name}</span>
                  </div>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Puck: Editable content slot */}
      <DropZone zone="content" />
    </section>
  )
}
