'use client'

import { motion } from 'framer-motion'
import { SpotlightCard } from './effects/spotlight-card'
import { GlowingBorder } from './effects/glowing-border'
import { DropZone } from "@puckeditor/core";

export function ServicesBulkPricing() {
  const tiers = [
    { range: '12-24', discount: '10%', popular: false },
    { range: '25-49', discount: '15%', popular: false },
    { range: '50-99', discount: '20%', popular: true },
    { range: '100+', discount: '25%+', popular: false },
  ]

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Volume <span className="text-sassy-gold">Discounts</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-12">The more you order, the more you save</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {tiers.map((tier) => (
              <motion.div
                key={tier.range}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                {tier.popular ? (
                  <GlowingBorder animate className="rounded-2xl">
                    <div className="p-6 rounded-2xl text-center bg-sassy-gold/10">
                      <div className="text-[10px] font-bold text-sassy-gold uppercase tracking-wider mb-1">Popular</div>
                      <div className="text-3xl font-bold mb-1 text-sassy-gold">{tier.discount}</div>
                      <div className="text-xs text-muted-foreground">{tier.range} pieces</div>
                    </div>
                  </GlowingBorder>
                ) : (
                  <SpotlightCard spotlightColor="rgba(234, 179, 8, 0.1)" className="rounded-2xl">
                    <div className="p-6 text-center">
                      <div className="text-3xl font-bold mb-1">{tier.discount}</div>
                      <div className="text-xs text-muted-foreground">{tier.range} pieces</div>
                    </div>
                  </SpotlightCard>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Puck: Editable content slot */}
      <DropZone zone="content" />
    </section>
  )
}
