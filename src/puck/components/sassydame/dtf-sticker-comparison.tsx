'use client'

import { motion } from 'framer-motion'
import {
  ArrowRight,
  Layers,
  Sun,
  Droplets,
  Check,
  X,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { GlowingBorder } from './effects/glowing-border'
import { cn } from '@/lib/utils'
import { DropZone } from "@puckeditor/core";

export function DtfStickerComparison() {
  const uvFeatures = [
    'UV-cured ink technology',
    'Waterproof & scratch-resistant',
    'Applies to hard surfaces (tumblers, laptops, glass)',
    'No lamination needed -- built-in protective layer',
    'Vibrant colors that resist fading',
    'Peel-and-stick application',
    'Dishwasher safe on tumblers',
  ]

  const regularFeatures = [
    { text: 'Standard inkjet/laser printing', has: true },
    { text: 'Waterproof & scratch-resistant', has: false },
    { text: 'Hard surface application', has: true },
    { text: 'Requires separate lamination', has: true },
    { text: 'Colors may fade over time', has: true },
    { text: 'Peel-and-stick application', has: true },
    { text: 'Dishwasher safe', has: false },
  ]

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-sassy-teal/10 via-sassy-periwinkle/10 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sassy-periwinkle/15 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sassy-coral/15 border border-sassy-coral/30 mb-6">
            <Droplets className="h-4 w-4 text-sassy-coral" />
            <span className="text-sm font-semibold text-sassy-coral uppercase tracking-wider">Know the Difference</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-foreground">
            UV DTF{' '}
            <span className="text-sassy-periwinkle">vs</span>{' '}
            Regular Stickers
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Not all stickers are created equal. See why UV DTF is the premium choice for durability and vibrancy.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* UV DTF Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
          <GlowingBorder animate className="rounded-3xl">
          <div className="relative rounded-3xl bg-gradient-to-b from-sassy-teal/10 to-transparent p-8 overflow-hidden">
            {/* Recommended badge */}
            <div className="absolute top-0 right-0 px-5 py-2 bg-gradient-to-r from-sassy-teal to-sassy-periwinkle text-white text-xs font-bold uppercase tracking-wider rounded-bl-2xl">
              Recommended
            </div>

            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-sassy-teal to-sassy-periwinkle flex items-center justify-center shadow-lg shadow-sassy-teal/30">
                <Sun className="h-7 w-7 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">UV DTF Stickers</h3>
                <p className="text-sm text-sassy-teal">Premium UV-Cured Technology</p>
              </div>
            </div>

            <p className="text-muted-foreground mb-6 leading-relaxed">
              UV DTF uses ultraviolet light to cure special inks directly onto a transfer film with a built-in adhesive and protective laminate layer. The result is a sticker that is <strong className="text-foreground">waterproof, scratch-resistant, and fade-proof</strong> -- ideal for tumblers, hard hats, laptops, and any hard surface.
            </p>

            <ul className="space-y-3">
              {uvFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <div className="mt-0.5 w-5 h-5 rounded-full bg-sassy-teal/20 flex items-center justify-center flex-shrink-0">
                    <Check className="h-3 w-3 text-sassy-teal" />
                  </div>
                  <span className="text-foreground/80 text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            <Button size="lg" className="w-full mt-8 text-lg py-7 bg-gradient-to-r from-sassy-teal to-sassy-periwinkle text-white font-bold rounded-2xl shadow-xl shadow-sassy-teal/25" onClick={() => window.location.href = '/collections/uv-dtf-stickers'}>
              Shop UV DTF Stickers
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          </GlowingBorder>
          </motion.div>

          {/* Regular Stickers Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl border border-border bg-card p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-muted flex items-center justify-center">
                <Layers className="h-7 w-7 text-muted-foreground" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground/80">Regular Stickers</h3>
                <p className="text-sm text-muted-foreground">Standard Vinyl / Paper</p>
              </div>
            </div>

            <p className="text-muted-foreground mb-6 leading-relaxed">
              Traditional stickers use standard inkjet or laser printing on vinyl or paper stock. They require a separate lamination step for any water resistance and are more prone to fading, peeling, and scratching over time.
            </p>

            <ul className="space-y-3">
              {regularFeatures.map((feature) => (
                <li key={feature.text} className="flex items-start gap-3">
                  <div className={cn(
                    'mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0',
                    feature.has ? 'bg-muted' : 'bg-sassy-coral/15'
                  )}>
                    {feature.has ? (
                      <Check className="h-3 w-3 text-muted-foreground" />
                    ) : (
                      <X className="h-3 w-3 text-sassy-coral" />
                    )}
                  </div>
                  <span className={cn(
                    'text-sm',
                    feature.has ? 'text-muted-foreground' : 'text-muted-foreground/50 line-through'
                  )}>
                    {feature.text}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8 p-4 rounded-2xl bg-sassy-coral/10 border border-sassy-coral/20">
              <p className="text-sm text-sassy-coral/80 text-center">
                <strong className="text-sassy-coral">Upgrade to UV DTF</strong> for professional-grade durability and vibrant colors that last.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Key differentiator callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mt-12 p-6 rounded-3xl border border-sassy-lime/20 bg-sassy-lime/5 text-center"
        >
          <h4 className="text-lg font-bold text-sassy-lime mb-2">The Bottom Line</h4>
          <p className="text-muted-foreground">
            UV DTF stickers use <strong className="text-foreground">UV-cured ink on a special transfer film</strong> with a built-in adhesive and laminate -- making them waterproof, dishwasher-safe, and scratch-proof right out of the box. Regular stickers need additional lamination and still cannot match the durability of UV DTF.
          </p>
        </motion.div>
      </div>

      {/* Puck: Editable content slot */}
      <DropZone zone="content" />
    </section>
  )
}
