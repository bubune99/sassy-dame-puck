'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { Scissors, Palette, Sparkles, Heart, Star, Paintbrush, Gem, Sun } from 'lucide-react'

const craftIcons = [
  { Icon: Scissors, color: 'text-sassy-coral' },
  { Icon: Palette, color: 'text-sassy-teal' },
  { Icon: Sparkles, color: 'text-sassy-gold' },
  { Icon: Heart, color: 'text-sassy-fuchsia' },
  { Icon: Star, color: 'text-sassy-orange' },
  { Icon: Paintbrush, color: 'text-sassy-periwinkle' },
  { Icon: Gem, color: 'text-sassy-sky' },
  { Icon: Sun, color: 'text-sassy-rose' },
]

interface FloatingElementsProps {
  className?: string
  count?: number
}

// Predetermined positions to avoid hydration mismatch
const floatingPositions = [
  { x: 10, y: 15, delay: 0, duration: 3.5, rotation: 45 },
  { x: 85, y: 20, delay: 0.5, duration: 4, rotation: 120 },
  { x: 15, y: 70, delay: 1, duration: 3.8, rotation: 200 },
  { x: 75, y: 80, delay: 0.3, duration: 4.2, rotation: 280 },
  { x: 50, y: 10, delay: 1.5, duration: 3.2, rotation: 60 },
  { x: 90, y: 50, delay: 0.8, duration: 4.5, rotation: 340 },
  { x: 5, y: 40, delay: 1.2, duration: 3.6, rotation: 90 },
  { x: 60, y: 90, delay: 0.2, duration: 4.1, rotation: 180 },
]

export function FloatingElements({ className, count = 6 }: FloatingElementsProps) {
  return (
    <div className={cn('absolute inset-0 overflow-hidden pointer-events-none', className)}>
      {Array.from({ length: Math.min(count, floatingPositions.length) }).map((_, i) => {
        const { Icon, color } = craftIcons[i % craftIcons.length]
        const pos = floatingPositions[i]

        return (
          <motion.div
            key={i}
            className={cn('absolute', color)}
            style={{
              left: `${pos.x}%`,
              top: `${pos.y}%`,
            }}
            initial={{
              opacity: 0,
              rotate: pos.rotation,
            }}
            animate={{
              opacity: [0.2, 0.5, 0.2],
              y: [-10, 10, -10],
              rotate: [pos.rotation, pos.rotation + 15, pos.rotation],
            }}
            transition={{
              duration: pos.duration,
              delay: pos.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <Icon className="w-6 h-6 md:w-8 md:h-8" />
          </motion.div>
        )
      })}
    </div>
  )
}

interface FloatingShapeProps {
  className?: string
}

export function FloatingShapes({ className }: FloatingShapeProps) {
  return (
    <div className={cn('absolute inset-0 overflow-hidden pointer-events-none', className)}>
      {/* Coral gradient circle - like peacock feather */}
      <motion.div
        className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-gradient-to-br from-sassy-coral/25 to-transparent blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.35, 0.6, 0.35],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Teal gradient blob - peacock body */}
      <motion.div
        className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-gradient-to-tr from-sassy-teal/25 to-transparent blur-3xl"
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.45, 0.35, 0.45],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Lime gradient blob - background accent */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-gradient-to-r from-sassy-lime/15 to-transparent blur-2xl"
        animate={{
          scale: [1, 1.2, 1],
          x: ['-50%', '-40%', '-50%'],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Periwinkle accent */}
      <motion.div
        className="absolute top-1/4 right-1/3 w-48 h-48 rounded-full bg-gradient-to-bl from-sassy-periwinkle/20 to-transparent blur-2xl"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.3, 0.55, 0.3],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Fuchsia glow */}
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-40 h-40 rounded-full bg-gradient-to-tl from-sassy-fuchsia/15 to-transparent blur-2xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Sky blue shimmer */}
      <motion.div
        className="absolute top-1/3 left-1/4 w-36 h-36 rounded-full bg-gradient-to-br from-sassy-sky/15 to-transparent blur-2xl"
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  )
}
