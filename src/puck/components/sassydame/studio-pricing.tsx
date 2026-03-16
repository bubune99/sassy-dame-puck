'use client'

import { motion } from 'framer-motion'
import { Clock, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { GlowingBorder } from './effects/glowing-border'
import { DropZone } from "@puckeditor/core";

export function StudioPricing() {
  const packages = [
    { name: 'Craft Hour', duration: '1 Hour', price: 25, features: ['Crafting workspace access', 'Basic tools & supplies', 'Cutting machines', 'Quick projects'], popular: false },
    { name: 'Half Day Studio', duration: '4 Hours', price: 80, features: ['Full studio access', 'All tools & equipment', 'Heat press usage', 'Cutting machines', 'Coffee/tea included', 'Project storage'], popular: true },
    { name: 'Full Day Creative', duration: '8 Hours', price: 140, features: ['Complete studio access', 'All equipment & tools', 'Priority booking', 'Lunch included', 'Project storage', 'Expert assistance'], popular: false },
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-[#faf5f0] to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-[#2d2418]">
            Simple <span className="text-sassy-periwinkle">Pricing</span>
          </h2>
          <p className="text-[#6b5c4d]">Pay for the time you need -- no memberships, no commitments</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              {pkg.popular ? (
                <GlowingBorder animate className="rounded-3xl">
                  <div className="relative rounded-3xl p-8 bg-white">
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-sassy-periwinkle text-white px-5 py-1.5 rounded-full text-sm font-semibold z-10">
                      Most Popular
                    </div>
                    <div className="text-center mb-8">
                      <h3 className="font-serif text-xl font-bold mb-1">{pkg.name}</h3>
                      <p className="text-sm text-muted-foreground flex items-center justify-center gap-1.5">
                        <Clock className="h-3.5 w-3.5" /> {pkg.duration}
                      </p>
                      <div className="mt-4">
                        <span className="font-serif text-5xl font-bold text-sassy-periwinkle">${pkg.price}</span>
                      </div>
                    </div>
                    <ul className="space-y-3 mb-8">
                      {pkg.features.map((f) => (
                        <li key={f} className="flex items-start gap-3 text-sm">
                          <CheckCircle className="h-4 w-4 text-sassy-periwinkle shrink-0 mt-0.5" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full rounded-full bg-sassy-periwinkle hover:bg-sassy-periwinkle/90 text-white" onClick={() => window.location.href = '/contact'}>
                      Book Now
                    </Button>
                  </div>
                </GlowingBorder>
              ) : (
                <div className="relative rounded-3xl p-8 border-2 bg-white border-[#e8ddd0]">
                  <div className="text-center mb-8">
                    <h3 className="font-serif text-xl font-bold mb-1">{pkg.name}</h3>
                    <p className="text-sm text-muted-foreground flex items-center justify-center gap-1.5">
                      <Clock className="h-3.5 w-3.5" /> {pkg.duration}
                    </p>
                    <div className="mt-4">
                      <span className="font-serif text-5xl font-bold text-sassy-periwinkle">${pkg.price}</span>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm">
                        <CheckCircle className="h-4 w-4 text-sassy-periwinkle shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full rounded-full" variant="outline" onClick={() => window.location.href = '/contact'}>
                    Book Now
                  </Button>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Puck: Editable content slot */}
      <DropZone zone="content" />
    </section>
  )
}
