'use client'

import { motion } from 'framer-motion'
import { Sparkles, Music, GraduationCap, Camera, Heart, Warehouse } from 'lucide-react'
import { SpotlightCard } from './effects/spotlight-card'
import { cn } from '@/lib/utils'
import { DropZone } from "@puckeditor/core";

export function EventsTypes() {
  const types = [
    { icon: Sparkles, title: 'Hands-On Workshops', desc: 'Learn DTF, sublimation, vinyl cutting, and more with expert guidance.', color: 'text-sassy-teal', bg: 'bg-sassy-teal/10', border: 'border-sassy-teal/30' },
    { icon: Music, title: 'Craft Nights', desc: 'Bring friends, enjoy snacks, and create together in a relaxed setting.', color: 'text-sassy-coral', bg: 'bg-sassy-coral/10', border: 'border-sassy-coral/30' },
    { icon: GraduationCap, title: 'Classes', desc: 'Structured multi-session courses for deep skill building and certification.', color: 'text-sassy-periwinkle', bg: 'bg-sassy-periwinkle/10', border: 'border-sassy-periwinkle/30' },
    { icon: Camera, title: 'Online Classes', desc: 'Learn from anywhere with our live virtual workshops and tutorials.', color: 'text-sassy-gold', bg: 'bg-sassy-gold/10', border: 'border-sassy-gold/30' },
    { icon: Warehouse, title: 'Hall Rentals', desc: 'Rent our spacious hall for large gatherings, receptions, and celebrations.', color: 'text-sassy-orange', bg: 'bg-sassy-orange/10', border: 'border-sassy-orange/30' },
    { icon: Heart, title: 'Private Events', desc: 'Birthday parties, team building, bridal showers -- we set it all up.', color: 'text-sassy-rose', bg: 'bg-sassy-rose/10', border: 'border-sassy-rose/30' },
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-sassy-coral/5 via-sassy-gold/5 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Something for <span className="bg-gradient-to-r from-sassy-coral via-sassy-gold to-sassy-orange bg-clip-text text-transparent">Everyone</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">From intimate workshops to large hall rentals, we have the perfect setting for your next event.</p>
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
