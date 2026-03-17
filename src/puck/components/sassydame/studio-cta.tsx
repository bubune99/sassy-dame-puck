'use client'

import React from 'react';

import { motion } from 'framer-motion'
import { Calendar, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
export interface StudioCtaProps {
  content?: React.FC;
  heading?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  footerNote?: string;
}

export function StudioCta({
  content,
  heading = "Ready to Create?",
  description = "Book your studio session today. Walk-ins welcome based on availability.",
  primaryButtonText = "Book Online",
  primaryButtonLink = "/contact",
  secondaryButtonText = "View Classes",
  secondaryButtonLink = "/events",
  footerNote = "Group rates for parties of 4+",
}: StudioCtaProps) {
  return (
    <section className="py-24 bg-gradient-to-br from-sassy-periwinkle/5 via-sassy-rose/5 to-sassy-sage/5">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Calendar className="h-14 w-14 text-sassy-periwinkle mx-auto mb-6" />
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">{heading}</h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-10 py-6 bg-sassy-periwinkle hover:bg-sassy-periwinkle/90 text-white rounded-full" onClick={() => window.location.href = primaryButtonLink}>
                {primaryButtonText}
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-10 py-6 rounded-full" onClick={() => window.location.href = secondaryButtonLink}>
                {secondaryButtonText}
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-8 flex items-center justify-center gap-2">
              <Users className="h-4 w-4" /> {footerNote}
            </p>
          </motion.div>
        </div>
      </div>
      {content && typeof content === "function" && content({})}
</section>
  )
}
