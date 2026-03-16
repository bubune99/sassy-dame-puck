'use client'

import { motion } from 'framer-motion'
import { Ticket, Building2, Shirt } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { DropZone } from "@puckeditor/core";

export function EventsCta() {
  return (
    <section className="py-28 bg-gradient-to-br from-sassy-coral/10 via-sassy-gold/10 to-sassy-orange/10 relative overflow-hidden">
      {/* Background pop */}
      <div className="absolute top-0 left-[20%] w-96 h-96 bg-sassy-coral/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-[15%] w-72 h-72 bg-sassy-gold/15 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Ticket className="h-16 w-16 text-sassy-coral mx-auto mb-6" />
            <h2 className="font-serif text-4xl md:text-6xl font-bold mb-5">
              Ready to <span className="bg-gradient-to-r from-sassy-coral to-sassy-orange bg-clip-text text-transparent">Get Started?</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
              Rent our space, book a class, or order custom event shirts. We handle the details so you can focus on the fun.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-xl px-12 py-8 bg-gradient-to-r from-sassy-coral to-sassy-orange hover:from-sassy-coral/90 hover:to-sassy-orange/90 text-white font-bold rounded-2xl shadow-xl shadow-sassy-coral/25" onClick={() => window.location.href = '/events-space-rentals'}>
                <Building2 className="mr-2 h-6 w-6" />
                Rent Event Space
              </Button>
              <Button size="lg" className="text-xl px-12 py-8 bg-gradient-to-r from-sassy-gold to-sassy-lime text-foreground font-bold rounded-2xl shadow-xl shadow-sassy-gold/25" onClick={() => window.location.href = '/custom-transfers'}>
                <Shirt className="mr-2 h-6 w-6" />
                Order Event Shirts
              </Button>
              <Button size="lg" variant="outline" className="text-xl px-12 py-8 border-2 border-sassy-periwinkle text-sassy-periwinkle hover:bg-sassy-periwinkle hover:text-white font-bold rounded-2xl" onClick={() => window.location.href = '/contact'}>
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Puck: Editable content slot */}
      <DropZone zone="content" />
    </section>
  )
}
