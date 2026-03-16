'use client'

import { motion } from 'framer-motion'
import { Sparkles, Music, GraduationCap, Camera, Heart, Warehouse } from 'lucide-react'
import { SpotlightCard } from './effects/spotlight-card'
import { cn } from '@/lib/utils'
import { DropZone } from "@puckeditor/core";

export interface EventsTypesProps {
  sectionHeading: string;
  sectionHeadingHighlight: string;
  sectionDescription: string;
  type1Title: string;
  type1Desc: string;
  type2Title: string;
  type2Desc: string;
  type3Title: string;
  type3Desc: string;
  type4Title: string;
  type4Desc: string;
  type5Title: string;
  type5Desc: string;
  type6Title: string;
  type6Desc: string;
}

export function EventsTypes({
  sectionHeading = 'Something for',
  sectionHeadingHighlight = 'Everyone',
  sectionDescription = 'From intimate workshops to large hall rentals, we have the perfect setting for your next event.',
  type1Title = 'Hands-On Workshops',
  type1Desc = 'Learn DTF, sublimation, vinyl cutting, and more with expert guidance.',
  type2Title = 'Craft Nights',
  type2Desc = 'Bring friends, enjoy snacks, and create together in a relaxed setting.',
  type3Title = 'Classes',
  type3Desc = 'Structured multi-session courses for deep skill building and certification.',
  type4Title = 'Online Classes',
  type4Desc = 'Learn from anywhere with our live virtual workshops and tutorials.',
  type5Title = 'Hall Rentals',
  type5Desc = 'Rent our spacious hall for large gatherings, receptions, and celebrations.',
  type6Title = 'Private Events',
  type6Desc = 'Birthday parties, team building, bridal showers -- we set it all up.',
}: EventsTypesProps) {
  const types = [
    { icon: Sparkles, title: type1Title, desc: type1Desc, color: 'text-sassy-teal', bg: 'bg-sassy-teal/10', border: 'border-sassy-teal/30' },
    { icon: Music, title: type2Title, desc: type2Desc, color: 'text-sassy-coral', bg: 'bg-sassy-coral/10', border: 'border-sassy-coral/30' },
    { icon: GraduationCap, title: type3Title, desc: type3Desc, color: 'text-sassy-periwinkle', bg: 'bg-sassy-periwinkle/10', border: 'border-sassy-periwinkle/30' },
    { icon: Camera, title: type4Title, desc: type4Desc, color: 'text-sassy-gold', bg: 'bg-sassy-gold/10', border: 'border-sassy-gold/30' },
    { icon: Warehouse, title: type5Title, desc: type5Desc, color: 'text-sassy-orange', bg: 'bg-sassy-orange/10', border: 'border-sassy-orange/30' },
    { icon: Heart, title: type6Title, desc: type6Desc, color: 'text-sassy-rose', bg: 'bg-sassy-rose/10', border: 'border-sassy-rose/30' },
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-sassy-coral/5 via-sassy-gold/5 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            {sectionHeading} <span className="bg-gradient-to-r from-sassy-coral via-sassy-gold to-sassy-orange bg-clip-text text-transparent">{sectionHeadingHighlight}</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">{sectionDescription}</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {types.map((type, i) => (
            <motion.div
              key={type.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <SpotlightCard className={cn('rounded-2xl h-full', type.bg)}>
                <div className="text-center p-8 hover:scale-105 transition-transform">
                  <div className={cn('w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4', type.bg)}>
                    <type.icon className={cn('h-8 w-8', type.color)} />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{type.title}</h3>
                  <p className="text-sm text-muted-foreground">{type.desc}</p>
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
