'use client'

import { motion } from 'framer-motion'
import { Paintbrush, ArrowRight, Camera } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { DropZone } from "@puckeditor/core";

export interface StudioHeroProps {
  badge?: string;
  headingLine1?: string;
  headingLine2?: string;
  headingHighlight?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
}

export function StudioHero({
  badge = "Fully Equipped Creative Space",
  headingLine1 = "Where Ideas",
  headingLine2 = "Become",
  headingHighlight = "Art",
  description = "Step into our crafting studio and bring your creative vision to life. Professional equipment, cozy workspace, and expert guidance -- all under one roof.",
  primaryButtonText = "Book Your Session",
  primaryButtonLink = "/crafting-studio-rentals",
  secondaryButtonText = "Rent Event Space",
  secondaryButtonLink = "/events-space-rentals",
}: StudioHeroProps) {
  return (
    <section className="relative min-h-[95vh] flex items-center overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sassy-periwinkle/15 border border-sassy-periwinkle/20 mb-6">
              <Paintbrush className="h-4 w-4 text-sassy-periwinkle" />
              <span className="text-sm font-medium text-sassy-periwinkle">{badge}</span>
            </div>

            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-[0.95] text-[#2d2418]">
              <span className="block">{headingLine1}</span>
              <span className="block">{headingLine2}{' '}
                <span className="relative inline-block">
                  <span className="relative z-10 bg-gradient-to-r from-sassy-periwinkle via-sassy-rose to-sassy-sage bg-clip-text text-transparent">
                    {headingHighlight}
                  </span>
                  <motion.span
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    className="absolute bottom-2 left-0 right-0 h-3 bg-sassy-periwinkle/20 -z-0 origin-left"
                  />
                </span>
              </span>
            </h1>

            <p className="text-lg text-[#6b5c4d] max-w-lg mb-8 leading-relaxed">
              {description}
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="text-lg px-8 py-6 bg-sassy-periwinkle hover:bg-sassy-periwinkle/90 text-white rounded-full" onClick={() => window.location.href = primaryButtonLink}>
                {primaryButtonText}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-[#c8b8a6] text-[#5a4d3e] hover:bg-[#efe5d8] rounded-full" onClick={() => window.location.href = secondaryButtonLink}>
                {secondaryButtonText}
              </Button>
            </div>
          </motion.div>

          {/* Right: Stacked image cards */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="hidden lg:block relative h-[500px]"
          >
            {[
              { rotate: -6, top: '0%', left: '10%', label: 'Heat Press Station', gradient: 'from-sassy-periwinkle/30 to-sassy-sage/20' },
              { rotate: 3, top: '15%', left: '30%', label: 'Cutting Machines', gradient: 'from-sassy-rose/30 to-sassy-coral/20' },
              { rotate: -2, top: '30%', left: '5%', label: 'Crafting Tables', gradient: 'from-sassy-gold/30 to-sassy-lime/20' },
            ].map((card, i) => (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, y: 30, rotate: 0 }}
                animate={{ opacity: 1, y: 0, rotate: card.rotate }}
                transition={{ delay: 0.5 + i * 0.2, type: 'spring', stiffness: 100 }}
                className="absolute w-64 h-72"
                style={{ top: card.top, left: card.left }}
              >
                <div className={cn(
                  'w-full h-full rounded-2xl border-4 border-white shadow-xl bg-gradient-to-br flex flex-col items-center justify-center gap-4',
                  card.gradient
                )}>
                  <Camera className="h-10 w-10 text-foreground/40" />
                  <span className="text-sm font-medium text-foreground/60">{card.label}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Puck: Editable content slot */}
      <DropZone zone="content" />
    </section>
  )
}
