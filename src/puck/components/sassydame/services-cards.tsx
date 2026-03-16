'use client'

import { motion } from 'framer-motion'
import { Package, Printer, MapPin, Shirt, CheckCircle } from 'lucide-react'
import { GlowingBorder } from './effects/glowing-border'
import { DropZone } from "@puckeditor/core";

export interface ServicesCardsProps {
  sectionBadge?: string;
  sectionHeading?: string;
  sectionHeadingHighlight?: string;
  card1Title?: string;
  card1Description?: string;
  card1Link?: string;
  card1Feature1?: string;
  card1Feature2?: string;
  card1Feature3?: string;
  card2Title?: string;
  card2Description?: string;
  card2Link?: string;
  card2Feature1?: string;
  card2Feature2?: string;
  card2Feature3?: string;
  card3Title?: string;
  card3Description?: string;
  card3Link?: string;
  card3Feature1?: string;
  card3Feature2?: string;
  card3Feature3?: string;
  card4Title?: string;
  card4Description?: string;
  card4Link?: string;
  card4Feature1?: string;
  card4Feature2?: string;
  card4Feature3?: string;
}

export function ServicesCards({
  sectionBadge = "Our Services",
  sectionHeading = "What We",
  sectionHeadingHighlight = "Deliver",
  card1Title = "Bulk Orders",
  card1Description = "Volume discounts on DTF transfers, apparel, and more. Dedicated account manager for large orders.",
  card1Link = "/bulk-order",
  card1Feature1 = "Up to 25% volume discount",
  card1Feature2 = "Dedicated account manager",
  card1Feature3 = "Priority production queue",
  card2Title = "Custom Printing",
  card2Description = "Full-service printing from design to delivery. DTF, screen printing, sublimation, and embroidery.",
  card2Link = "/dtf-builder",
  card2Feature1 = "No art or setup fees",
  card2Feature2 = "Multiple print methods",
  card2Feature3 = "Rush production available",
  card3Title = "Signs & Banners",
  card3Description = "Professional signage for storefronts, events, trade shows, and organizations.",
  card3Link = "/collections/signs-banner",
  card3Feature1 = "Indoor & outdoor options",
  card3Feature2 = "Any custom size",
  card3Feature3 = "3-day standard turnaround",
  card4Title = "Custom Apparel",
  card4Description = "Branded clothing for teams, companies, and events. From t-shirts to embroidered polos.",
  card4Link = "/collections/custom-shirts-hoodies",
  card4Feature1 = "White-label & blind shipping",
  card4Feature2 = "Full brand customization",
  card4Feature3 = "No minimums on DTF",
}: ServicesCardsProps) {
  const services = [
    {
      icon: Package,
      title: card1Title,
      description: card1Description,
      href: card1Link,
      features: [card1Feature1, card1Feature2, card1Feature3],
    },
    {
      icon: Printer,
      title: card2Title,
      description: card2Description,
      href: card2Link,
      features: [card2Feature1, card2Feature2, card2Feature3],
    },
    {
      icon: MapPin,
      title: card3Title,
      description: card3Description,
      href: card3Link,
      features: [card3Feature1, card3Feature2, card3Feature3],
    },
    {
      icon: Shirt,
      title: card4Title,
      description: card4Description,
      href: card4Link,
      features: [card4Feature1, card4Feature2, card4Feature3],
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
            {sectionBadge}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-foreground">
            {sectionHeading} <span className="text-sassy-gold">{sectionHeadingHighlight}</span>
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
