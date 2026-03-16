'use client'

import { motion } from 'framer-motion'
import { Scissors, Heart, CheckCircle, ArrowRight } from 'lucide-react'
import { SpotlightCard } from './effects/spotlight-card'
import { cn } from '@/lib/utils'
import { DropZone } from "@puckeditor/core";

export interface StudioSpacesProps {
  sectionBadge?: string;
  sectionHeading?: string;
  sectionHeadingHighlight?: string;
  space1Title?: string;
  space1Description?: string;
  space1Link?: string;
  space1Feature1?: string;
  space1Feature2?: string;
  space1Feature3?: string;
  space1Feature4?: string;
  space2Title?: string;
  space2Description?: string;
  space2Link?: string;
  space2Feature1?: string;
  space2Feature2?: string;
  space2Feature3?: string;
  space2Feature4?: string;
}

export function StudioSpaces({
  sectionBadge = "Two Unique Spaces",
  sectionHeading = "Choose Your",
  sectionHeadingHighlight = "Creative Setting",
  space1Title = "Heat Press Rentals",
  space1Description = "Our fully-equipped workspace with professional heat presses, cutting machines, sublimation printers, and every tool a crafter could dream of.",
  space1Link = "/crafting-studio-rentals",
  space1Feature1 = "10 workstations",
  space1Feature2 = "All equipment included",
  space1Feature3 = "Expert staff on-site",
  space1Feature4 = "Complimentary supplies",
  space2Title = "Event Space",
  space2Description = "Host birthday parties, team-building events, bridal showers, or craft nights in our vibrant, Instagram-worthy event area.",
  space2Link = "/events-space-rentals",
  space2Feature1 = "Seats up to 30",
  space2Feature2 = "Catering available",
  space2Feature3 = "Custom setups",
  space2Feature4 = "Photo-worthy decor",
}: StudioSpacesProps) {
  const spaces = [
    {
      title: space1Title,
      desc: space1Description,
      href: space1Link,
      features: [space1Feature1, space1Feature2, space1Feature3, space1Feature4],
      color: 'text-sassy-periwinkle',
      spotlight: 'rgba(168, 148, 255, 0.15)',
      icon: Scissors,
    },
    {
      title: space2Title,
      desc: space2Description,
      href: space2Link,
      features: [space2Feature1, space2Feature2, space2Feature3, space2Feature4],
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
            {sectionBadge}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            {sectionHeading}{' '}
            <span className="bg-gradient-to-r from-sassy-periwinkle to-sassy-rose bg-clip-text text-transparent">
              {sectionHeadingHighlight}
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
