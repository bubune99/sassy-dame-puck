'use client'

import { motion } from 'framer-motion'
import {
  ArrowRight,
  Store,
  CheckCircle,
  Heart,
  Users,
  Award,
  Sparkles,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { GlowingBorder } from './effects/glowing-border'
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

export function HomeStorefront() {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-background via-sassy-periwinkle/10 to-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto"
        >
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left content */}
            <div>
              <motion.div variants={fadeUp} custom={0}>
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sassy-periwinkle/10 text-sassy-periwinkle text-sm font-semibold uppercase tracking-wider mb-6">
                  <Store className="h-4 w-4" />
                  Custom Storefronts
                </span>
              </motion.div>
              <motion.h2
                variants={fadeUp}
                custom={1}
                className="font-serif text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight"
              >
                Your Brand.{' '}
                <span className="bg-gradient-to-r from-sassy-periwinkle via-sassy-sky to-sassy-fuchsia bg-clip-text text-transparent">
                  Your Store.
                </span>
              </motion.h2>
              <motion.p
                variants={fadeUp}
                custom={2}
                className="text-muted-foreground text-lg mb-8 leading-relaxed"
              >
                We build custom online storefronts for teams, organizations, schools & businesses.
                Your members order directly, we produce and ship — you sit back and earn.
                No inventory. No hassle. Full customization.
              </motion.p>

              <motion.ul variants={fadeUp} custom={3} className="space-y-4 mb-10">
                {[
                  'Fully branded storefront with your logo & colors',
                  'No minimum orders — perfect for fundraisers',
                  'We handle production, packing & shipping',
                  'Real-time order tracking & analytics dashboard',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-sassy-lime mt-0.5 flex-shrink-0" />
                    <span className="text-foreground/80">{item}</span>
                  </li>
                ))}
              </motion.ul>

              <motion.div variants={fadeUp} custom={4}>
                <Button
                  className="h-16 px-14 text-lg font-bold rounded-xl bg-sassy-periwinkle hover:bg-sassy-periwinkle/90 text-white shadow-[0_0_30px_rgba(131,121,199,0.4)] hover:shadow-[0_0_50px_rgba(131,121,199,0.6)] transition-all duration-300 hover:scale-105"
                  onClick={() => window.location.href = '/custom-storefront'}
                >
                  Start Your Storefront
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
            </div>

            {/* Right visual */}
            <motion.div variants={fadeUp} custom={2}>
              <div className="relative">
                {/* Mock storefront cards */}
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: 'Team Store', color: 'bg-sassy-coral', icon: Users },
                    { label: 'School Spirit', color: 'bg-sassy-periwinkle', icon: Award },
                    { label: 'Fundraiser', color: 'bg-sassy-lime', icon: Heart },
                    { label: 'Business Merch', color: 'bg-sassy-teal', icon: Store },
                  ].map((card, i) => (
                    <GlowingBorder key={card.label} containerClassName="rounded-2xl">
                      <motion.div
                        whileHover={{ scale: 1.05, rotate: i % 2 === 0 ? 2 : -2 }}
                        className={`${card.color} rounded-[10px] p-6 text-center ${
                          card.color === 'bg-sassy-lime' ? 'text-gray-900' : 'text-white'
                        }`}
                      >
                        <card.icon className="h-10 w-10 mx-auto mb-3 opacity-90" />
                        <p className="font-bold text-sm">{card.label}</p>
                      </motion.div>
                    </GlowingBorder>
                  ))}
                </div>
                {/* Floating decoration */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -top-6 -right-6 w-20 h-20 rounded-2xl bg-sassy-gold/20 border border-sassy-gold/30 backdrop-blur-sm flex items-center justify-center"
                >
                  <Sparkles className="h-8 w-8 text-sassy-gold" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Puck: Editable content slot */}
      <DropZone zone="content" />
    </section>
  )
}
