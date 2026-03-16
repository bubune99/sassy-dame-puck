'use client'

import { motion } from 'framer-motion'
import {
  Printer,
  Shirt,
  Calendar,
  Users,
  Paintbrush,
  ArrowRight,
  Sparkles,
} from 'lucide-react'
import { Button } from '@/components/ui/button'

const services = [
  {
    icon: Printer,
    title: 'DTF Printing',
    description: 'Custom direct-to-film transfers for vibrant, long-lasting designs on any fabric',
    color: 'bg-sassy-teal/15 text-sassy-teal',
    hoverColor: 'group-hover:bg-sassy-teal group-hover:text-white',
  },
  {
    icon: Sparkles,
    title: 'UV Stickers',
    description: 'Premium UV-printed stickers and decals for any surface with stunning detail',
    color: 'bg-sassy-periwinkle/15 text-sassy-periwinkle',
    hoverColor: 'group-hover:bg-sassy-periwinkle group-hover:text-white',
  },
  {
    icon: Shirt,
    title: 'Custom Apparel',
    description: 'Personalized shirts, hoodies, and more with your unique designs',
    color: 'bg-sassy-coral/15 text-sassy-coral',
    hoverColor: 'group-hover:bg-sassy-coral group-hover:text-white',
  },
  {
    icon: Paintbrush,
    title: 'Craft Blanks',
    description: 'High-quality blanks ready for sublimation, HTV, and other crafting methods',
    color: 'bg-sassy-lime/15 text-sassy-lime',
    hoverColor: 'group-hover:bg-sassy-lime group-hover:text-foreground',
  },
  {
    icon: Calendar,
    title: 'Classes & Workshops',
    description: 'Learn new skills with hands-on crafting classes for all experience levels',
    color: 'bg-sassy-gold/15 text-sassy-gold',
    hoverColor: 'group-hover:bg-sassy-gold group-hover:text-foreground',
  },
  {
    icon: Users,
    title: 'Heat Press Rentals',
    description: 'Rent professional heat presses and equipment for your projects or events',
    color: 'bg-sassy-rose/15 text-sassy-rose',
    hoverColor: 'group-hover:bg-sassy-rose group-hover:text-white',
  },
]

export function ServicesCTASection() {
  return (
    <section className="py-20 bg-gradient-to-b from-background via-sassy-lime/10 to-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-sassy-teal/15 text-sassy-teal text-sm font-medium mb-4">
            What We Offer
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">
            Your One-Stop{' '}
            <span className="bg-gradient-to-r from-sassy-teal via-sassy-sky to-sassy-fuchsia bg-clip-text text-transparent">
              Craft Shop
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From professional printing services to hands-on workshops, we have everything you need to unleash your creativity
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div
                className="group block p-6 rounded-2xl bg-card border border-border hover:border-transparent hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <div className={`w-14 h-14 rounded-xl ${service.color} ${service.hoverColor} flex items-center justify-center mb-4 transition-all duration-300`}>
                  <service.icon className="h-7 w-7" />
                </div>
                <h3 className="font-semibold text-xl mb-2 group-hover:text-sassy-teal transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {service.description}
                </p>
                <div className="flex items-center text-sm font-medium text-sassy-teal opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center"
        >
          <p className="text-muted-foreground mb-4">
            Not sure where to start? We are here to help!
          </p>
          <Button size="lg" variant="outline" className="border-2 border-sassy-teal text-sassy-teal hover:bg-sassy-teal hover:text-white">
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
