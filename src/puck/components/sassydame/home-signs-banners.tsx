'use client'

import { motion } from 'framer-motion'
import { Flag, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
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

export function HomeSignsBanners() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-br from-sassy-teal/20 via-sassy-sky/15 to-sassy-lime/15">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 border-2 border-sassy-teal rounded-3xl rotate-12" />
        <div className="absolute bottom-10 right-10 w-96 h-56 border-2 border-sassy-lime rounded-3xl -rotate-6" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 border-2 border-sassy-sky rounded-full" />
      </div>

      <div className="relative container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div variants={fadeUp} custom={0}>
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-sassy-teal/15 text-sassy-teal text-sm font-bold uppercase tracking-wider mb-6">
              <Flag className="h-4 w-4" />
              Signs & Banners
            </span>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            custom={1}
            className="font-serif text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight text-foreground"
          >
            Make a <span className="text-sassy-lime">BIG</span> Statement
          </motion.h2>
          <motion.p
            variants={fadeUp}
            custom={2}
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            From yard signs to full-size banners — we print bold, weather-resistant signage
            that gets your message seen. Perfect for events, businesses & celebrations.
          </motion.p>
          <motion.div
            variants={fadeUp}
            custom={3}
            className="flex flex-col sm:flex-row items-center justify-center gap-5"
          >
            <Button
              className="h-16 px-14 text-lg font-bold rounded-xl bg-sassy-teal hover:bg-sassy-teal/90 text-white shadow-lg shadow-sassy-teal/30 hover:shadow-xl transition-all duration-300 hover:scale-105"
              onClick={() => window.location.href = '/collections/signs-banner'}
            >
              Browse Signs & Banners
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              className="h-16 px-14 text-lg font-bold rounded-xl border-2 border-sassy-teal text-sassy-teal hover:bg-sassy-teal hover:text-white transition-all duration-300 hover:scale-105"
              onClick={() => window.location.href = '/custom-order?type=signs'}
            >
              Request Custom Quote
            </Button>
          </motion.div>

          {/* Feature pills */}
          <motion.div
            variants={fadeUp}
            custom={4}
            className="mt-14 flex flex-wrap items-center justify-center gap-4"
          >
            {['Yard Signs', 'Retractable Banners', 'Vinyl Banners', 'A-Frames', 'Car Magnets', 'Window Clings'].map(
              (item) => (
                <span
                  key={item}
                  className="px-5 py-2.5 rounded-full bg-sassy-teal/10 text-foreground text-sm font-medium border border-sassy-teal/25"
                >
                  {item}
                </span>
              )
            )}
          </motion.div>
        </motion.div>
      </div>

      {/* Puck: Editable content slot */}
      <DropZone zone="content" />
    </section>
  )
}
