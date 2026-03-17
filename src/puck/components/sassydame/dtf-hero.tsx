'use client'

import React from 'react';

import { motion } from 'framer-motion'
import {
  ArrowRight,
  Printer,
  Sparkles,
  Package,
  Layers,
  Zap,
  Clock,
  ChevronRight,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
export interface DtfHeroProps {
  content?: React.FC;
  badgeText: string;
  headingLine1: string;
  headingLine2: string;
  subheading: string;
  turnaroundCallout: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText: string;
  secondaryButtonLink: string;
  stat1Value: string;
  stat1Label: string;
  stat2Value: string;
  stat2Label: string;
  stat3Value: string;
  stat3Label: string;
  card1Title: string;
  card1Desc: string;
  card1Href: string;
  card2Title: string;
  card2Desc: string;
  card2Href: string;
  card3Title: string;
  card3Desc: string;
  card3Href: string;
  card4Title: string;
  card4Desc: string;
  card4Href: string;
}

export function DtfHero({
  content,
  badgeText = '24-Hour Turnaround',
  headingLine1 = 'Print',
  headingLine2 = 'Without Limits',
  subheading = 'Professional DTF transfers, UV stickers, patches, rhinestones and more -- vibrant, wash-resistant colors on any surface.',
  turnaroundCallout = 'Orders before 12pm ship same day. No minimums. No setup fees.',
  primaryButtonText = 'Open DTF Builder',
  primaryButtonLink = '/dtf-builder',
  secondaryButtonText = 'Browse Transfers',
  secondaryButtonLink = '/collections/dtf-prints',
  stat1Value = '24hr',
  stat1Label = 'Turnaround time',
  stat2Value = '$0',
  stat2Label = 'Setup fees',
  stat3Value = '1+',
  stat3Label = 'Minimum order',
  card1Title = 'DTF Transfers',
  card1Desc = 'Full-color on any fabric',
  card1Href = '/collections/dtf-prints',
  card2Title = 'UV Stickers',
  card2Desc = 'Waterproof & durable',
  card2Href = '/collections/uv-dtf-stickers',
  card3Title = 'Bundle Packs',
  card3Desc = 'DTF + UV combos',
  card3Href = '/collections/dtf-uv-bundle-pack',
  card4Title = 'Gang Sheets',
  card4Desc = 'Build your own layout',
  card4Href = '/dtf-builder',
}: DtfHeroProps) {
  const stats = [
    { value: stat1Value, label: stat1Label },
    { value: stat2Value, label: stat2Label },
    { value: stat3Value, label: stat3Label },
  ]

  const cards = [
    { icon: Printer, title: card1Title, desc: card1Desc, color: 'from-sassy-teal/20 to-sassy-teal/5', border: 'border-sassy-teal/30', href: card1Href },
    { icon: Sparkles, title: card2Title, desc: card2Desc, color: 'from-sassy-periwinkle/20 to-sassy-periwinkle/5', border: 'border-sassy-periwinkle/30', href: card2Href },
    { icon: Package, title: card3Title, desc: card3Desc, color: 'from-sassy-lime/20 to-sassy-lime/5', border: 'border-sassy-lime/30', href: card3Href },
    { icon: Layers, title: card4Title, desc: card4Desc, color: 'from-sassy-coral/20 to-sassy-coral/5', border: 'border-sassy-coral/30', href: card4Href },
  ]

  return (
    <section className="relative min-h-[95vh] flex items-center overflow-hidden">
      {/* Gradient accent line at hero bottom */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-sassy-teal via-sassy-periwinkle to-sassy-lime z-10" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* 24-hour turnaround badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-sassy-lime/25 to-sassy-teal/25 border-2 border-sassy-lime/50 mb-6 shadow-lg shadow-sassy-lime/10"
            >
              <Clock className="h-5 w-5 text-sassy-lime animate-pulse" />
              <span className="text-sm font-bold text-sassy-lime tracking-wide uppercase">{badgeText}</span>
              <Zap className="h-4 w-4 text-sassy-lime" />
            </motion.div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[0.95]">
              <span className="block">{headingLine1}</span>
              <span className="block bg-gradient-to-r from-sassy-teal via-sassy-periwinkle to-sassy-lime bg-clip-text text-transparent">
                {headingLine2}
              </span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg mb-4">
              {subheading}
            </p>

            {/* Turnaround callout */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-sassy-coral/15 border border-sassy-coral/30 mb-8">
              <Zap className="h-5 w-5 text-sassy-coral" />
              <span className="text-sm text-sassy-coral font-semibold">{turnaroundCallout}</span>
            </div>

            <div className="flex flex-wrap gap-4 mb-10">
              <Button size="lg" className="text-lg px-10 py-7 bg-gradient-to-r from-sassy-teal to-sassy-periwinkle hover:from-sassy-teal/90 hover:to-sassy-periwinkle/90 text-white font-bold shadow-xl shadow-sassy-teal/25 rounded-2xl" onClick={() => window.location.href = primaryButtonLink}>
                {primaryButtonText}
                <ArrowRight className="ml-2 h-6 w-6" />
              </Button>
              <Button size="lg" className="text-lg px-10 py-7 bg-gradient-to-r from-sassy-lime/20 to-sassy-lime/10 border-2 border-sassy-lime/40 text-sassy-lime hover:bg-sassy-lime/20 font-bold rounded-2xl" onClick={() => window.location.href = secondaryButtonLink}>
                {secondaryButtonText}
                <ChevronRight className="ml-1 h-5 w-5" />
              </Button>
            </div>

            {/* Stats row */}
            <div className="flex gap-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold text-sassy-teal">{stat.value}</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wide">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Product showcase cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:grid grid-cols-2 gap-4"
          >
            {cards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.15 }}
              >
                <div
                  onClick={() => window.location.href = card.href}
                  className={cn(
                    'group block p-6 rounded-2xl bg-gradient-to-br border backdrop-blur-sm cursor-pointer',
                    card.color, card.border,
                    'hover:scale-[1.03] transition-transform'
                  )}
                >
                  <card.icon className="h-8 w-8 text-foreground/80 mb-3" />
                  <h3 className="font-semibold text-white mb-1">{card.title}</h3>
                  <p className="text-sm text-muted-foreground">{card.desc}</p>
                  <ChevronRight className="h-4 w-4 text-muted-foreground/50 mt-3 group-hover:text-muted-foreground group-hover:translate-x-1 transition-all" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      {content && typeof content === "function" && content({})}
</section>
  )
}
