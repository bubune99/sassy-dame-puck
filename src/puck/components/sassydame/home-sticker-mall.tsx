'use client'

import { motion } from 'framer-motion'
import {
  Sparkles,
  ArrowRight,
  Palette,
  Layers,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
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

export function HomeStickerMall({
  badgeText = "Sticker Mall",
  heading = "Stickers That",
  headingHighlight = "Pop",
  description = "Premium UV DTF stickers with stunning color and durability. Perfect for tumblers, laptops, phones, and any hard surface.",
  card1Title = "UV DTF Stickers",
  card1Description = "Waterproof, scratch-resistant stickers that stick to virtually any hard surface with vivid color",
  card1Link = "/collections/uv-dtf-stickers",
  card2Title = "Custom Sticker Orders",
  card2Description = "Upload your own design or work with us to create the perfect custom sticker for your brand",
  card2Link = "/custom-order?type=stickers",
  card3Title = "Sticker Bundles",
  card3Description = "Save big with curated sticker packs — perfect for gifts, resale, or decorating everything in sight",
  card3Link = "/collections/uv-dtf-stickers",
  cardCtaText = "Shop Stickers",
  ctaButtonText = "Browse All Stickers",
  ctaButtonLink = "/collections/uv-dtf-stickers",
}: {
  badgeText?: string;
  heading?: string;
  headingHighlight?: string;
  description?: string;
  card1Title?: string;
  card1Description?: string;
  card1Link?: string;
  card2Title?: string;
  card2Description?: string;
  card2Link?: string;
  card3Title?: string;
  card3Description?: string;
  card3Link?: string;
  cardCtaText?: string;
  ctaButtonText?: string;
  ctaButtonLink?: string;
}) {
  const cards = [
    {
      title: card1Title,
      description: card1Description,
      href: card1Link,
      color: 'bg-sassy-fuchsia',
      textColor: 'text-white',
      icon: Sparkles,
      spotlight: 'rgba(200,80,180,0.2)',
    },
    {
      title: card2Title,
      description: card2Description,
      href: card2Link,
      color: 'bg-sassy-sky',
      textColor: 'text-white',
      icon: Palette,
      spotlight: 'rgba(100,170,230,0.2)',
    },
    {
      title: card3Title,
      description: card3Description,
      href: card3Link,
      color: 'bg-sassy-coral',
      textColor: 'text-white',
      icon: Layers,
      spotlight: 'rgba(232,93,81,0.2)',
    },
  ]

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-br from-sassy-fuchsia/10 via-background to-sassy-sky/10">
      {/* Decorative blobs */}
      <div className="absolute top-[10%] left-[5%] w-72 h-72 bg-sassy-fuchsia/15 rounded-full blur-3xl" />
      <div className="absolute bottom-[10%] right-[10%] w-64 h-64 bg-sassy-sky/15 rounded-full blur-3xl" />
      <div className="absolute top-[40%] right-[30%] w-48 h-48 bg-sassy-gold/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.div variants={fadeUp} custom={0}>
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-sassy-fuchsia/15 text-sassy-fuchsia text-sm font-bold uppercase tracking-wider mb-4">
              <Sparkles className="h-4 w-4" />
              {badgeText}
            </span>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            custom={1}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-black mb-4"
          >
            {heading}{' '}
            <span className="bg-gradient-to-r from-sassy-fuchsia via-sassy-coral to-sassy-gold bg-clip-text text-transparent">
              {headingHighlight}
            </span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            custom={2}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            {description}
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12"
        >
          {cards.map((item, i) => (
            <motion.div key={item.title} variants={fadeUp} custom={i}>
              <div
                className="group block cursor-pointer"
                onClick={() => window.location.href = item.href}
              >
                <SpotlightCard
                  spotlightColor={item.spotlight}
                  className="rounded-2xl border-0 bg-transparent"
                >
                  <div
                    className={`relative overflow-hidden rounded-2xl ${item.color} ${item.textColor} p-8 min-h-[260px] flex flex-col justify-between transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_40px_rgba(200,80,180,0.3)]`}
                  >
                    <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-white/10 -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500" />
                    <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full bg-black/10 translate-y-1/2 -translate-x-1/2" />

                    <div className="relative z-10">
                      <item.icon className="h-10 w-10 mb-4 opacity-90" />
                      <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                      <p className="text-sm opacity-80 leading-relaxed">{item.description}</p>
                    </div>

                    <div className="relative z-10 mt-6 flex items-center gap-2 font-semibold text-sm group-hover:gap-4 transition-all">
                      {cardCtaText} <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </SpotlightCard>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button
            className="h-16 px-14 text-lg font-bold rounded-xl bg-sassy-fuchsia hover:bg-sassy-fuchsia/90 text-white shadow-[0_0_30px_rgba(200,80,180,0.4)] hover:shadow-[0_0_50px_rgba(200,80,180,0.6)] transition-all duration-300 hover:scale-105"
            onClick={() => window.location.href = ctaButtonLink}
          >
            {ctaButtonText}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>

      {/* Puck: Editable content slot */}
      <DropZone zone="content" />
    </section>
  )
}
