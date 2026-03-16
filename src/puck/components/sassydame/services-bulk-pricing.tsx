'use client'

import { motion } from 'framer-motion'
import { SpotlightCard } from './effects/spotlight-card'
import { GlowingBorder } from './effects/glowing-border'
import { DropZone } from "@puckeditor/core";

export interface ServicesBulkPricingProps {
  heading?: string;
  headingHighlight?: string;
  subheading?: string;
  tier1Range?: string;
  tier1Discount?: string;
  tier2Range?: string;
  tier2Discount?: string;
  tier3Range?: string;
  tier3Discount?: string;
  tier4Range?: string;
  tier4Discount?: string;
}

export function ServicesBulkPricing({
  heading = "Volume",
  headingHighlight = "Discounts",
  subheading = "The more you order, the more you save",
  tier1Range = "12-24",
  tier1Discount = "10%",
  tier2Range = "25-49",
  tier2Discount = "15%",
  tier3Range = "50-99",
  tier3Discount = "20%",
  tier4Range = "100+",
  tier4Discount = "25%+",
}: ServicesBulkPricingProps) {
  const tiers = [
    { range: tier1Range, discount: tier1Discount, popular: false },
    { range: tier2Range, discount: tier2Discount, popular: false },
    { range: tier3Range, discount: tier3Discount, popular: true },
    { range: tier4Range, discount: tier4Discount, popular: false },
  ]

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            {heading} <span className="text-sassy-gold">{headingHighlight}</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-12">{subheading}</p>

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
