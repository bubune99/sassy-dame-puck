'use client'

import { motion } from 'framer-motion'
import { Building2, Warehouse, ArrowRight, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { GlowingBorder } from './effects/glowing-border'
import { cn } from '@/lib/utils'
import { DropZone } from "@puckeditor/core";

export interface EventsRentalsProps {
  badgeText: string;
  sectionHeading: string;
  sectionHeadingHighlight: string;
  sectionDescription: string;
  rental1Title: string;
  rental1Subtitle: string;
  rental1Description: string;
  rental1Feature1: string;
  rental1Feature2: string;
  rental1Feature3: string;
  rental1Feature4: string;
  rental1Feature5: string;
  rental1Feature6: string;
  rental1Price: string;
  rental2Title: string;
  rental2Subtitle: string;
  rental2Description: string;
  rental2Feature1: string;
  rental2Feature2: string;
  rental2Feature3: string;
  rental2Feature4: string;
  rental2Feature5: string;
  rental2Feature6: string;
  rental2Price: string;
  bookButtonText: string;
  bookButtonLink: string;
}

export function EventsRentals({
  badgeText = 'Space & Hall Rentals',
  sectionHeading = 'Your Event,',
  sectionHeadingHighlight = 'Our Space',
  sectionDescription = 'Whether you need a cozy studio for a craft night or a full hall for a celebration, we have the perfect venue for you.',
  rental1Title = 'Studio Space Rental',
  rental1Subtitle = 'Perfect for intimate gatherings',
  rental1Description = 'Our creative studio seats up to 20 guests with full access to crafting equipment, tables, and a cozy atmosphere. Ideal for workshops, small parties, team building sessions, and craft nights.',
  rental1Feature1 = 'Up to 20 guests',
  rental1Feature2 = 'Crafting equipment included',
  rental1Feature3 = 'Tables & chairs provided',
  rental1Feature4 = 'Kitchenette access',
  rental1Feature5 = 'Wi-Fi & sound system',
  rental1Feature6 = 'Flexible hours',
  rental1Price = 'Starting at $75/hr',
  rental2Title = 'Hall Rental',
  rental2Subtitle = 'For larger celebrations & events',
  rental2Description = 'Our spacious event hall accommodates up to 100 guests with a stage area, dance floor, and full catering prep space. Perfect for receptions, reunions, community events, and large parties.',
  rental2Feature1 = 'Up to 100 guests',
  rental2Feature2 = 'Stage & dance floor',
  rental2Feature3 = 'Catering prep kitchen',
  rental2Feature4 = 'AV equipment & projector',
  rental2Feature5 = 'Customizable layout',
  rental2Feature6 = 'On-site event support',
  rental2Price = 'Starting at $200/hr',
  bookButtonText = 'Book Now',
  bookButtonLink = '/events-space-rentals',
}: EventsRentalsProps) {
  const rentals = [
    {
      icon: Building2,
      title: rental1Title,
      subtitle: rental1Subtitle,
      desc: rental1Description,
      features: [rental1Feature1, rental1Feature2, rental1Feature3, rental1Feature4, rental1Feature5, rental1Feature6],
      price: rental1Price,
      gradient: 'from-sassy-teal to-sassy-periwinkle',
      shadowColor: 'shadow-sassy-teal/20',
      btnColor: 'from-sassy-teal to-sassy-periwinkle',
    },
    {
      icon: Warehouse,
      title: rental2Title,
      subtitle: rental2Subtitle,
      desc: rental2Description,
      features: [rental2Feature1, rental2Feature2, rental2Feature3, rental2Feature4, rental2Feature5, rental2Feature6],
      price: rental2Price,
      gradient: 'from-sassy-orange to-sassy-coral',
      shadowColor: 'shadow-sassy-orange/20',
      btnColor: 'from-sassy-orange to-sassy-coral',
    },
  ]

  return (
    <section id="rentals" className="py-28 bg-gradient-to-b from-background via-sassy-periwinkle/5 to-background relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-10 left-[5%] w-72 h-72 bg-sassy-teal/8 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-[5%] w-96 h-96 bg-sassy-orange/8 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-gradient-to-r from-sassy-teal to-sassy-periwinkle text-white text-sm px-5 py-2 rounded-full mb-6 font-bold">
            {badgeText}
          </span>
          <h2 className="font-serif text-4xl md:text-6xl font-bold mb-5">
            {sectionHeading} <span className="bg-gradient-to-r from-sassy-teal via-sassy-periwinkle to-sassy-orange bg-clip-text text-transparent">{sectionHeadingHighlight}</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {sectionDescription}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {rentals.map((rental, i) => (
            <motion.div
              key={rental.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
            >
              <GlowingBorder animate className="rounded-3xl">
                <div className={cn('rounded-3xl bg-card overflow-hidden hover:shadow-2xl transition-all', rental.shadowColor)}>
                  {/* Gradient header */}
                  <div className={cn('bg-gradient-to-r p-8 text-white', rental.gradient)}>
                    <rental.icon className="h-12 w-12 mb-4" />
                    <h3 className="font-serif text-3xl font-bold mb-1">{rental.title}</h3>
                    <p className="text-white/80 text-lg">{rental.subtitle}</p>
                  </div>

                  <div className="p-8">
                    <p className="text-muted-foreground mb-6 leading-relaxed">{rental.desc}</p>

                    {/* Features grid */}
                    <div className="grid grid-cols-2 gap-3 mb-8">
                      {rental.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className="h-4 w-4 text-sassy-lime shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Price + CTA */}
                    <div className="flex items-center justify-between pt-6 border-t">
                      <div>
                        <span className="text-2xl font-bold bg-gradient-to-r from-sassy-coral to-sassy-orange bg-clip-text text-transparent">{rental.price}</span>
                      </div>
                      <Button size="lg" className={cn('text-lg px-8 py-6 bg-gradient-to-r text-white font-bold rounded-2xl shadow-lg', `${rental.btnColor}`)} onClick={() => window.location.href = bookButtonLink}>
                        {bookButtonText} <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </div>
                  </div>
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
