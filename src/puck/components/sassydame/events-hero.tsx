'use client'

import { motion } from 'framer-motion'
import { Calendar, Users, ArrowRight, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { DropZone } from "@puckeditor/core";

const demoEvents = [
  {
    id: '1',
    title: 'DTF Printing Workshop for Beginners',
    date: '2026-03-15',
    time: '10:00 AM - 2:00 PM',
    category: 'Workshop',
    isFree: false,
    color: 'bg-sassy-teal',
  },
  {
    id: '2',
    title: 'Craft Night: Spring Designs',
    date: '2026-03-22',
    time: '6:00 PM - 9:00 PM',
    category: 'Craft Night',
    isFree: true,
    color: 'bg-sassy-coral',
  },
  {
    id: '3',
    title: 'Advanced Gang Sheet Techniques',
    date: '2026-04-05',
    time: '1:00 PM - 4:00 PM',
    category: 'Online Class',
    isFree: false,
    color: 'bg-sassy-periwinkle',
  },
]

export function EventsHero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="flex -space-x-2">
                {['bg-sassy-coral', 'bg-sassy-gold', 'bg-sassy-teal', 'bg-sassy-periwinkle'].map((bg, i) => (
                  <div key={i} className={cn('w-8 h-8 rounded-full border-2 border-background flex items-center justify-center', bg)}>
                    <Users className="h-3 w-3 text-white" />
                  </div>
                ))}
              </div>
              <span className="text-sm font-medium text-muted-foreground">Join 500+ community members</span>
            </div>

            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-[0.95]">
              <span className="block">Learn, Create,</span>
              <span className="block bg-gradient-to-r from-sassy-coral via-sassy-gold to-sassy-orange bg-clip-text text-transparent">
                Connect
              </span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg mb-8 leading-relaxed">
              Workshops, craft nights, space rentals, and custom event shirts. Discover your next creative adventure with us.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <Button size="lg" className="text-xl px-10 py-7 bg-gradient-to-r from-sassy-coral to-sassy-orange hover:from-sassy-coral/90 hover:to-sassy-orange/90 text-white shadow-lg shadow-sassy-coral/25 rounded-2xl font-bold" onClick={() => { const el = document.getElementById('upcoming'); el?.scrollIntoView({ behavior: 'smooth' }); }}>
                View Upcoming Events
                <ArrowRight className="ml-2 h-6 w-6" />
              </Button>
              <Button size="lg" className="text-xl px-10 py-7 bg-gradient-to-r from-sassy-gold to-sassy-lime text-foreground hover:from-sassy-gold/90 hover:to-sassy-lime/90 shadow-lg shadow-sassy-gold/25 rounded-2xl font-bold" onClick={() => { const el = document.getElementById('rentals'); el?.scrollIntoView({ behavior: 'smooth' }); }}>
                Rent a Space
              </Button>
            </div>

            {/* Quick stats */}
            <div className="flex gap-8">
              {[
                { icon: Calendar, value: '50+', label: 'Events hosted' },
                { icon: Users, value: '500+', label: 'Attendees' },
                { icon: Star, value: '4.9', label: 'Avg rating' },
              ].map((stat) => (
                <div key={stat.label} className="flex items-center gap-2.5">
                  <stat.icon className="h-5 w-5 text-sassy-coral" />
                  <div>
                    <div className="font-bold">{stat.value}</div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Floating event preview cards */}
          <div className="hidden lg:block relative h-[500px]">
            {demoEvents.map((event, i) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.2, type: 'spring', stiffness: 80 }}
                className="absolute"
                style={{
                  top: `${i * 30}%`,
                  left: i % 2 === 0 ? '5%' : '20%',
                  right: i % 2 === 0 ? '15%' : '0%',
                }}
              >
                <div className="bg-background/90 backdrop-blur-sm rounded-2xl border shadow-lg p-5 hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className={cn('w-14 h-14 rounded-xl flex flex-col items-center justify-center text-white shrink-0', event.color)}>
                      <span className="text-xs font-medium leading-none">{new Date(event.date).toLocaleDateString('en', { month: 'short' })}</span>
                      <span className="text-lg font-bold leading-none">{new Date(event.date).getDate()}</span>
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-semibold text-sm truncate">{event.title}</h3>
                      <p className="text-xs text-muted-foreground mt-1">{event.time}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="text-xs px-2 py-0.5 rounded bg-muted">{event.category}</span>
                        {event.isFree && <span className="text-xs px-2 py-0.5 rounded bg-sassy-lime text-foreground">Free</span>}
                      </div>
                    </div>
                  </div>
                </div>
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
