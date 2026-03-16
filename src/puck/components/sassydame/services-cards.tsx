'use client'

import { motion } from 'framer-motion'
import { Package, Printer, MapPin, Shirt, CheckCircle } from 'lucide-react'
import { GlowingBorder } from './effects/glowing-border'
import { DropZone } from "@puckeditor/core";

export function ServicesCards() {
  const services = [
    {
      icon: Package,
      title: 'Bulk Orders',
      description: 'Volume discounts on DTF transfers, apparel, and more. Dedicated account manager for large orders.',
      href: '/bulk-order',
      features: ['Up to 25% volume discount', 'Dedicated account manager', 'Priority production queue'],
    },
    {
      icon: Printer,
      title: 'Custom Printing',
      description: 'Full-service printing from design to delivery. DTF, screen printing, sublimation, and embroidery.',
      href: '/dtf-builder',
      features: ['No art or setup fees', 'Multiple print methods', 'Rush production available'],
    },
    {
      icon: MapPin,
      title: 'Signs & Banners',
      description: 'Professional signage for storefronts, events, trade shows, and organizations.',
      href: '/collections/signs-banner',
      features: ['Indoor & outdoor options', 'Any custom size', '3-day standard turnaround'],
    },
    {
      icon: Shirt,
      title: 'Custom Apparel',
      description: 'Branded clothing for teams, companies, and events. From t-shirts to embroidered polos.',
      href: '/collections/custom-shirts-hoodies',
      features: ['White-label & blind shipping', 'Full brand customization', 'No minimums on DTF'],
    },
  ]

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-sassy-gold/15 border border-sassy-gold/25 text-sassy-gold text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-foreground">
            What We <span className="text-sassy-gold">Deliver</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <GlowingBorder animate>
                <div
                  className="block p-8 h-full cursor-pointer"
                  onClick={() => window.location.href = service.href}
                >
                  <service.icon className="h-10 w-10 text-sassy-gold mb-5" />
                  <h3 className="font-semibold text-xl mb-3">{service.title}</h3>
                  <p className="text-muted-foreground text-sm mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-sassy-gold flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </GlowingBorder>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Puck: Editable content slot */}
      <DropZone zone="content" />
    </section>
  )
}
