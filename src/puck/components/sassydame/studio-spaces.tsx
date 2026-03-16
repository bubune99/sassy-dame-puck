'use client'

import { motion } from 'framer-motion'
import { Scissors, Heart, CheckCircle, ArrowRight } from 'lucide-react'
import { SpotlightCard } from './effects/spotlight-card'
import { cn } from '@/lib/utils'
import { DropZone } from "@puckeditor/core";

export function StudioSpaces() {
  const spaces = [
    {
      title: 'Heat Press Rentals',
      desc: 'Our fully-equipped workspace with professional heat presses, cutting machines, sublimation printers, and every tool a crafter could dream of.',
      href: '/crafting-studio-rentals',
      features: ['10 workstations', 'All equipment included', 'Expert staff on-site', 'Complimentary supplies'],
      color: 'text-sassy-periwinkle',
      spotlight: 'rgba(168, 148, 255, 0.15)',
      icon: Scissors,
    },
    {
      title: 'Event Space',
      desc: 'Host birthday parties, team-building events, bridal showers, or craft nights in our vibrant, Instagram-worthy event area.',
      href: '/events-space-rentals',
      features: ['Seats up to 30', 'Catering available', 'Custom setups', 'Photo-worthy decor'],
      color: 'text-sassy-coral',
      spotlight: 'rgba(255, 148, 128, 0.15)',
      icon: Heart,
    },
  ]

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-sassy-periwinkle/10 text-sassy-periwinkle text-sm font-medium mb-4">
            Two Unique Spaces
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Choose Your{' '}
            <span className="bg-gradient-to-r from-sassy-periwinkle to-sassy-rose bg-clip-text text-transparent">
              Creative Setting
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {spaces.map((space, i) => (
            <motion.div
              key={space.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <SpotlightCard spotlightColor={space.spotlight} className="h-full">
                <div
                  className="block p-8 h-full cursor-pointer"
                  onClick={() => window.location.href = space.href}
                >
                  <space.icon className={cn('h-10 w-10 mb-5', space.color)} />
                  <h3 className="font-serif text-2xl font-bold mb-3">{space.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{space.desc}</p>
                  <ul className="space-y-3 mb-6">
                    {space.features.map((f) => (
                      <li key={f} className="flex items-center gap-3 text-sm">
                        <CheckCircle className={cn('h-4 w-4 flex-shrink-0', space.color)} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <span className={cn('flex items-center text-sm font-semibold', space.color)}>
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </span>
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
