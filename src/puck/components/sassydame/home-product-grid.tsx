'use client'

import { motion } from 'framer-motion'
import {
  Sparkles,
  ArrowRight,
  Layers,
  Gem,
  Download,
  Type,
  Shield,
  Zap,
} from 'lucide-react'
import { SpotlightCard } from './effects/spotlight-card'
import { DropZone } from "@puckeditor/core";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: 'easeOut' },
  }),
}

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const productCategories = [
  {
    title: 'DTF Transfers',
    description: 'Premium direct-to-film transfers with vibrant colors and sharp detail',
    href: '/collections/dtf-transfers',
    icon: Layers,
    color: 'bg-sassy-coral',
    hoverColor: 'hover:bg-sassy-coral/90',
    textColor: 'text-white',
    borderGlow: 'hover:shadow-[0_0_40px_rgba(232,93,81,0.4)]',
  },
  {
    title: 'UV DTF',
    description: 'Ultra-durable UV DTF decals for hard surfaces, tumblers & more',
    href: '/collections/uv-dtf-stickers',
    icon: Sparkles,
    color: 'bg-sassy-periwinkle',
    hoverColor: 'hover:bg-sassy-periwinkle/90',
    textColor: 'text-white',
    borderGlow: 'hover:shadow-[0_0_40px_rgba(131,121,199,0.4)]',
  },
  {
    title: 'Patches',
    description: 'Custom embroidered & printed patches for hats, jackets & bags',
    href: '/collections/patches',
    icon: Shield,
    color: 'bg-sassy-teal',
    hoverColor: 'hover:bg-sassy-teal/90',
    textColor: 'text-white',
    borderGlow: 'hover:shadow-[0_0_40px_rgba(56,163,165,0.4)]',
  },
  {
    title: 'Rhinestones',
    description: 'Sparkling rhinestone transfers that add glamour to any project',
    href: '/collections/rhinestones',
    icon: Gem,
    color: 'bg-sassy-rose',
    hoverColor: 'hover:bg-sassy-rose/90',
    textColor: 'text-white',
    borderGlow: 'hover:shadow-[0_0_40px_rgba(199,101,130,0.4)]',
  },
  {
    title: 'Ready-Made DTF',
    description: 'Ready to press designs — just pick, order & apply. It\'s that easy!',
    href: '/collections/ready-to-press-dtf-designs',
    icon: Zap,
    color: 'bg-sassy-lime',
    hoverColor: 'hover:bg-sassy-lime/90',
    textColor: 'text-gray-900',
    borderGlow: 'hover:shadow-[0_0_40px_rgba(163,210,51,0.4)]',
  },
  {
    title: 'Digital Downloads',
    description: 'Instant download designs, templates & artwork files',
    href: '/collections/digital-downloads',
    icon: Download,
    color: 'bg-sassy-gold',
    hoverColor: 'hover:bg-sassy-gold/90',
    textColor: 'text-gray-900',
    borderGlow: 'hover:shadow-[0_0_40px_rgba(215,183,60,0.4)]',
  },
  {
    title: 'Custom Vinyl Lettering',
    description: 'Precision-cut vinyl letters & graphics for any surface',
    href: '/collections/custom-vinyl-lettering',
    icon: Type,
    color: 'bg-sassy-orange',
    hoverColor: 'hover:bg-sassy-orange/90',
    textColor: 'text-white',
    borderGlow: 'hover:shadow-[0_0_40px_rgba(225,150,60,0.4)]',
  },
]

export function HomeProductGrid() {
  const spotlightColors: Record<string, string> = {
    'bg-sassy-coral': 'rgba(232,93,81,0.2)',
    'bg-sassy-periwinkle': 'rgba(131,121,199,0.2)',
    'bg-sassy-teal': 'rgba(56,163,165,0.2)',
    'bg-sassy-rose': 'rgba(199,101,130,0.2)',
    'bg-sassy-lime': 'rgba(163,210,51,0.2)',
    'bg-sassy-gold': 'rgba(215,183,60,0.2)',
    'bg-sassy-orange': 'rgba(225,150,60,0.2)',
  }

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-background to-sassy-teal/10">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.div variants={fadeUp} custom={0}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-sassy-coral/10 text-sassy-coral text-sm font-semibold uppercase tracking-wider mb-4">
              Shop by Category
            </span>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            custom={1}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-black mb-4"
          >
            What Are You{' '}
            <span className="bg-gradient-to-r from-sassy-teal via-sassy-sky to-sassy-fuchsia bg-clip-text text-transparent">
              Creating Today?
            </span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            custom={2}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            From custom DTF transfers to rhinestone bling — we have everything to bring your ideas to life.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {productCategories.map((cat, i) => (
            <motion.div key={cat.title} variants={fadeUp} custom={i}>
              <div
                className="group block cursor-pointer"
                onClick={() => window.location.href = cat.href}
              >
                <SpotlightCard
                  spotlightColor={spotlightColors[cat.color] ?? 'rgba(232,115,107,0.15)'}
                  className="rounded-2xl border-0 bg-transparent"
                >
                  <div
                    className={`relative overflow-hidden rounded-2xl ${cat.color} ${cat.textColor} p-8 min-h-[240px] flex flex-col justify-between transition-all duration-300 hover:scale-[1.03] ${cat.borderGlow}`}
                  >
                    {/* Background pattern */}
                    <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-white/10 -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500" />
                    <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full bg-black/10 translate-y-1/2 -translate-x-1/2" />

                    <div className="relative z-10">
                      <cat.icon className="h-10 w-10 mb-4 opacity-90" />
                      <h3 className="text-2xl font-bold mb-2">{cat.title}</h3>
                      <p className="text-sm opacity-80 leading-relaxed">{cat.description}</p>
                    </div>

                    <div className="relative z-10 mt-6 flex items-center gap-2 font-semibold text-sm group-hover:gap-4 transition-all">
                      Shop Now <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </SpotlightCard>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Puck: Editable content slot */}
      <DropZone zone="content" />
    </section>
  )
}
