'use client'

import { motion } from 'framer-motion'
import { Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { DropZone } from "@puckeditor/core";

export interface ServicesCtaProps {
  heading?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  phoneNumber?: string;
}

export function ServicesCta({
  heading = "Ready to Get Started?",
  description = "Tell us about your project and receive a custom quote within 24 hours. No obligation, no pressure.",
  primaryButtonText = "Request a Quote",
  primaryButtonLink = "/contact",
  secondaryButtonText = "Bulk Order Form",
  secondaryButtonLink = "/bulk-order",
  phoneNumber = "(919) 628-6531",
}: ServicesCtaProps) {
  return (
    <section className="py-24 bg-gradient-to-br from-sassy-gold/15 via-sassy-orange/10 to-sassy-coral/10">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-foreground">{heading}</h2>
            <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-10 py-6 bg-sassy-gold hover:bg-sassy-gold/90 text-foreground" onClick={() => window.location.href = primaryButtonLink}>
                {primaryButtonText}
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-10 py-6 border-sassy-gold text-sassy-gold hover:bg-sassy-gold hover:text-foreground" onClick={() => window.location.href = secondaryButtonLink}>
                {secondaryButtonText}
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-8 flex items-center justify-center gap-2">
              <Phone className="h-4 w-4" /> Or call us at <strong className="text-foreground">{phoneNumber}</strong>
            </p>
          </motion.div>
        </div>
      </div>

      {/* Puck: Editable content slot */}
      <DropZone zone="content" />
    </section>
  )
}
