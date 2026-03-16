'use client'

import { motion } from 'framer-motion'
import {
  ArrowRight,
  Shield,
  Zap,
  Clock,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SpotlightCard } from './effects/spotlight-card'
import { cn } from '@/lib/utils'
import { DropZone } from "@puckeditor/core";

export function DtfPricing() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Transparent <span className="text-sassy-teal">Pricing</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-12">No surprises, no hidden fees</p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Shield, value: 'No Minimums', desc: 'Order 1 or 1,000 -- same quality', color: 'text-sassy-teal', bg: 'bg-sassy-teal/10' },
              { icon: Zap, value: 'No Setup Fees', desc: 'Just upload and we print', color: 'text-sassy-periwinkle', bg: 'bg-sassy-periwinkle/10' },
              { icon: Clock, value: 'Same-Day Ship', desc: 'Order by 12pm Eastern', color: 'text-sassy-lime', bg: 'bg-sassy-lime/10' },
            ].map((item) => (
              <motion.div
                key={item.value}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <SpotlightCard className={cn('rounded-2xl', item.bg)}>
                  <div className="p-8">
                    <item.icon className={cn('h-8 w-8 mb-4 mx-auto', item.color)} />
                    <div className={cn('text-2xl font-bold mb-2', item.color)}>{item.value}</div>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <Button size="lg" className="bg-gradient-to-r from-sassy-teal to-sassy-periwinkle hover:from-sassy-teal/90 hover:to-sassy-periwinkle/90 text-white text-xl px-14 py-8 font-bold rounded-2xl shadow-xl shadow-sassy-teal/25" onClick={() => window.location.href = '/dtf-builder'}>
              Start Your Order <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Puck: Editable content slot */}
      <DropZone zone="content" />
    </section>
  )
}
