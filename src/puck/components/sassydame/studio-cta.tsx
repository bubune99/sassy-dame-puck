'use client'

import { motion } from 'framer-motion'
import { Calendar, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { DropZone } from "@puckeditor/core";

export function StudioCta() {
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
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">Ready to Create?</h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
              Book your studio session today. Walk-ins welcome based on availability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-10 py-6 bg-sassy-periwinkle hover:bg-sassy-periwinkle/90 text-white rounded-full" onClick={() => window.location.href = '/contact'}>
                Book Online
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-10 py-6 rounded-full" onClick={() => window.location.href = '/events'}>
                View Classes
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-8 flex items-center justify-center gap-2">
              <Users className="h-4 w-4" /> Group rates for parties of 4+
            </p>
          </motion.div>
        </div>
      </div>

      {/* Puck: Editable content slot */}
      <DropZone zone="content" />
    </section>
  )
}
