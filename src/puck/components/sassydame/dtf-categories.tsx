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

export interface DtfCategoriesProps {
  badgeText: string;
  sectionHeading: string;
  sectionHeadingHighlight: string;
  sectionDescription: string;
  cat1Title: string;
  cat1Desc: string;
  cat1Href: string;
  cat1Tag: string;
  cat2Title: string;
  cat2Desc: string;
  cat2Href: string;
  cat2Tag: string;
  cat3Title: string;
  cat3Desc: string;
  cat3Href: string;
  cat4Title: string;
  cat4Desc: string;
  cat4Href: string;
  cat5Title: string;
  cat5Desc: string;
  cat5Href: string;
  cat5Tag: string;
  cat6Title: string;
  cat6Desc: string;
  cat6Href: string;
  cat6Tag: string;
  cat7Title: string;
  cat7Desc: string;
  cat7Href: string;
  ctaButtonText: string;
  ctaButtonLink: string;
}

export function DtfCategories({
  badgeText = 'Full Product Line',
  sectionHeading = 'Browse Our',
  sectionHeadingHighlight = 'Transfers',
  sectionDescription = 'From custom DTF prints to rhinestones, patches, and digital downloads -- everything you need to create standout products.',
  cat1Title = 'DTF Transfers',
  cat1Desc = 'Custom full-color transfers for any fabric. Vibrant, wash-resistant, no minimums.',
  cat1Href = '/collections/dtf-prints',
  cat1Tag = 'Most Popular',
  cat2Title = 'UV DTF Stickers',
  cat2Desc = 'Waterproof, scratch-resistant UV-cured stickers for hard surfaces, tumblers, and more.',
  cat2Href = '/collections/uv-dtf-stickers',
  cat2Tag = 'UV Cured',
  cat3Title = 'Patches',
  cat3Desc = 'Custom iron-on patches with premium embroidered look. Perfect for hats, jackets, and bags.',
  cat3Href = '/collections/patches',
  cat4Title = 'Rhinestones',
  cat4Desc = 'Sparkling rhinestone transfers that add bling to any garment. Heat-press ready.',
  cat4Href = '/collections/rhinestone-transfers',
  cat5Title = 'Ready-Made DTF',
  cat5Desc = 'Pre-designed transfers ready to ship. Browse trending designs and add to cart instantly.',
  cat5Href = '/collections/ready-to-press-dtf-designs',
  cat5Tag = 'Quick Ship',
  cat6Title = 'Digital Downloads',
  cat6Desc = 'Instant-download design files ready for your own printer. High-res PNG and SVG formats.',
  cat6Href = '/collections/digital-downloads',
  cat6Tag = 'Instant',
  cat7Title = 'Custom Vinyl Lettering',
  cat7Desc = 'Precision-cut vinyl letters and numbers for jerseys, vehicles, signage, and more.',
  cat7Href = '/collections/custom-vinyl-lettering',
  ctaButtonText = 'Start Custom Order',
  ctaButtonLink = '/dtf-builder',
}: DtfCategoriesProps) {
  const categories = [
    {
      icon: Printer, title: cat1Title, desc: cat1Desc, href: cat1Href,
      gradient: 'from-[#00d4ff] to-[#0099cc]', bgGlow: 'bg-[#00d4ff]/10',
      borderColor: 'border-[#00d4ff]/40', shadowColor: 'shadow-[#00d4ff]/20',
      tag: cat1Tag || null,
    },
    {
      icon: Sun, title: cat2Title, desc: cat2Desc, href: cat2Href,
      gradient: 'from-[#a855f7] to-[#7c3aed]', bgGlow: 'bg-[#a855f7]/10',
      borderColor: 'border-[#a855f7]/40', shadowColor: 'shadow-[#a855f7]/20',
      tag: cat2Tag || null,
    },
    {
      icon: Shirt, title: cat3Title, desc: cat3Desc, href: cat3Href,
      gradient: 'from-[#f97316] to-[#ea580c]', bgGlow: 'bg-[#f97316]/10',
      borderColor: 'border-[#f97316]/40', shadowColor: 'shadow-[#f97316]/20',
      tag: null,
    },
    {
      icon: Diamond, title: cat4Title, desc: cat4Desc, href: cat4Href,
      gradient: 'from-[#ec4899] to-[#db2777]', bgGlow: 'bg-[#ec4899]/10',
      borderColor: 'border-[#ec4899]/40', shadowColor: 'shadow-[#ec4899]/20',
      tag: null,
    },
    {
      icon: ShoppingBag, title: cat5Title, desc: cat5Desc, href: cat5Href,
      gradient: 'from-[#22c55e] to-[#16a34a]', bgGlow: 'bg-[#22c55e]/10',
      borderColor: 'border-[#22c55e]/40', shadowColor: 'shadow-[#22c55e]/20',
      tag: cat5Tag || null,
    },
    {
      icon: Download, title: cat6Title, desc: cat6Desc, href: cat6Href,
      gradient: 'from-[#eab308] to-[#ca8a04]', bgGlow: 'bg-[#eab308]/10',
      borderColor: 'border-[#eab308]/40', shadowColor: 'shadow-[#eab308]/20',
      tag: cat6Tag || null,
    },
    {
      icon: Type, title: cat7Title, desc: cat7Desc, href: cat7Href,
      gradient: 'from-[#06b6d4] to-[#0891b2]', bgGlow: 'bg-[#06b6d4]/10',
      borderColor: 'border-[#06b6d4]/40', shadowColor: 'shadow-[#06b6d4]/20',
      tag: null,
    },
  ]

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
            <span className="text-sm font-semibold text-sassy-periwinkle uppercase tracking-wider">{badgeText}</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-foreground">
            {sectionHeading}{' '}
            <span className="bg-gradient-to-r from-sassy-teal via-sassy-periwinkle to-sassy-lime bg-clip-text text-transparent">
              {sectionHeadingHighlight}
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {sectionDescription}
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
          <Button size="lg" className="text-xl px-14 py-8 bg-gradient-to-r from-sassy-teal via-sassy-periwinkle to-sassy-lime text-white font-bold rounded-2xl shadow-2xl shadow-sassy-teal/25 hover:shadow-sassy-teal/40 transition-shadow" onClick={() => window.location.href = ctaButtonLink}>
            {ctaButtonText}
            <ArrowRight className="ml-3 h-6 w-6" />
          </Button>
        </motion.div>
      </div>

      {/* Puck: Editable content slot */}
      <DropZone zone="content" />
    </section>
  )
}
