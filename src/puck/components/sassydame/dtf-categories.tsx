'use client'

import { motion } from 'framer-motion'
import {
  ArrowRight,
  Printer,
  Sparkles,
  Shirt,
  Diamond,
  Download,
  Type,
  ShoppingBag,
  Sun,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SpotlightCard } from './effects/spotlight-card'
import { cn } from '@/lib/utils'
import { DropZone } from "@puckeditor/core";

const categories = [
  {
    icon: Printer,
    title: 'DTF Transfers',
    desc: 'Custom full-color transfers for any fabric. Vibrant, wash-resistant, no minimums.',
    href: '/collections/dtf-prints',
    gradient: 'from-[#00d4ff] to-[#0099cc]',
    bgGlow: 'bg-[#00d4ff]/10',
    borderColor: 'border-[#00d4ff]/40',
    shadowColor: 'shadow-[#00d4ff]/20',
    tag: 'Most Popular',
  },
  {
    icon: Sun,
    title: 'UV DTF Stickers',
    desc: 'Waterproof, scratch-resistant UV-cured stickers for hard surfaces, tumblers, and more.',
    href: '/collections/uv-dtf-stickers',
    gradient: 'from-[#a855f7] to-[#7c3aed]',
    bgGlow: 'bg-[#a855f7]/10',
    borderColor: 'border-[#a855f7]/40',
    shadowColor: 'shadow-[#a855f7]/20',
    tag: 'UV Cured',
  },
  {
    icon: Shirt,
    title: 'Patches',
    desc: 'Custom iron-on patches with premium embroidered look. Perfect for hats, jackets, and bags.',
    href: '/collections/patches',
    gradient: 'from-[#f97316] to-[#ea580c]',
    bgGlow: 'bg-[#f97316]/10',
    borderColor: 'border-[#f97316]/40',
    shadowColor: 'shadow-[#f97316]/20',
    tag: null,
  },
  {
    icon: Diamond,
    title: 'Rhinestones',
    desc: 'Sparkling rhinestone transfers that add bling to any garment. Heat-press ready.',
    href: '/collections/rhinestone-transfers',
    gradient: 'from-[#ec4899] to-[#db2777]',
    bgGlow: 'bg-[#ec4899]/10',
    borderColor: 'border-[#ec4899]/40',
    shadowColor: 'shadow-[#ec4899]/20',
    tag: null,
  },
  {
    icon: ShoppingBag,
    title: 'Ready-Made DTF',
    desc: 'Pre-designed transfers ready to ship. Browse trending designs and add to cart instantly.',
    href: '/collections/ready-to-press-dtf-designs',
    gradient: 'from-[#22c55e] to-[#16a34a]',
    bgGlow: 'bg-[#22c55e]/10',
    borderColor: 'border-[#22c55e]/40',
    shadowColor: 'shadow-[#22c55e]/20',
    tag: 'Quick Ship',
  },
  {
    icon: Download,
    title: 'Digital Downloads',
    desc: 'Instant-download design files ready for your own printer. High-res PNG and SVG formats.',
    href: '/collections/digital-downloads',
    gradient: 'from-[#eab308] to-[#ca8a04]',
    bgGlow: 'bg-[#eab308]/10',
    borderColor: 'border-[#eab308]/40',
    shadowColor: 'shadow-[#eab308]/20',
    tag: 'Instant',
  },
  {
    icon: Type,
    title: 'Custom Vinyl Lettering',
    desc: 'Precision-cut vinyl letters and numbers for jerseys, vehicles, signage, and more.',
    href: '/collections/custom-vinyl-lettering',
    gradient: 'from-[#06b6d4] to-[#0891b2]',
    bgGlow: 'bg-[#06b6d4]/10',
    borderColor: 'border-[#06b6d4]/40',
    shadowColor: 'shadow-[#06b6d4]/20',
    tag: null,
  },
]

export function DtfCategories() {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-background via-sassy-periwinkle/10 to-background">
      {/* Vibrant background accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-sassy-teal/15 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-sassy-periwinkle/15 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sassy-periwinkle/15 border border-sassy-periwinkle/30 mb-6">
            <Sparkles className="h-4 w-4 text-sassy-periwinkle" />
            <span className="text-sm font-semibold text-sassy-periwinkle uppercase tracking-wider">Full Product Line</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-foreground">
            Browse Our{' '}
            <span className="bg-gradient-to-r from-sassy-teal via-sassy-periwinkle to-sassy-lime bg-clip-text text-transparent">
              Transfers
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From custom DTF prints to rhinestones, patches, and digital downloads -- everything you need to create standout products.
          </p>
        </motion.div>

        {/* Category Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 max-w-7xl mx-auto">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <SpotlightCard spotlightColor={`${cat.borderColor.replace('border-', '').replace('/40', '')}`} className="h-full rounded-3xl">
                <div
                  onClick={() => window.location.href = cat.href}
                  className={cn(
                    'group relative block p-6 rounded-3xl backdrop-blur-sm transition-all duration-300 cursor-pointer',
                    'hover:scale-[1.04] hover:-translate-y-1',
                    cat.bgGlow,
                    `hover:shadow-2xl ${cat.shadowColor}`,
                  )}
                >
                  {/* Tag */}
                  {cat.tag && (
                    <div className={cn(
                      'absolute -top-3 right-4 px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r',
                      cat.gradient,
                    )}>
                      {cat.tag}
                    </div>
                  )}

                  {/* Icon with gradient circle */}
                  <div className={cn(
                    'w-16 h-16 rounded-2xl flex items-center justify-center mb-4 bg-gradient-to-br',
                    cat.gradient,
                    'shadow-lg',
                    cat.shadowColor,
                  )}>
                    <cat.icon className="h-8 w-8 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-white/90 transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {cat.desc}
                  </p>

                  <div className="flex items-center gap-1 text-sm font-semibold text-muted-foreground group-hover:text-foreground/80 transition-colors">
                    <span>Shop Now</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1.5 transition-transform" />
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

        {/* Big CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-14"
        >
          <Button size="lg" className="text-xl px-14 py-8 bg-gradient-to-r from-sassy-teal via-sassy-periwinkle to-sassy-lime text-white font-bold rounded-2xl shadow-2xl shadow-sassy-teal/25 hover:shadow-sassy-teal/40 transition-shadow" onClick={() => window.location.href = '/dtf-builder'}>
            Start Custom Order
            <ArrowRight className="ml-3 h-6 w-6" />
          </Button>
        </motion.div>
      </div>

      {/* Puck: Editable content slot */}
      <DropZone zone="content" />
    </section>
  )
}
