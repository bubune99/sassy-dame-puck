'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Clock, MapPin, Users, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SpotlightCard } from './effects/spotlight-card'
import { cn } from '@/lib/utils'
import { DropZone } from "@puckeditor/core";

const demoEvents = [
  {
    id: '1',
    title: 'DTF Printing Workshop for Beginners',
    date: '2026-03-15',
    time: '10:00 AM - 2:00 PM',
    location: 'SassyDame Studio',
    description: 'Learn the basics of DTF printing in this hands-on workshop. Perfect for beginners who want to start their crafting journey!',
    capacity: 12,
    spotsLeft: 4,
    price: 49,
    isFree: false,
    category: 'Workshop',
    featured: true,
    color: 'bg-sassy-teal',
  },
  {
    id: '2',
    title: 'Craft Night: Spring Designs',
    date: '2026-03-22',
    time: '6:00 PM - 9:00 PM',
    location: 'SassyDame Studio',
    description: 'Join us for a fun evening creating spring-themed crafts. All supplies included! Bring your friends.',
    capacity: 20,
    spotsLeft: 8,
    price: 0,
    isFree: true,
    category: 'Craft Night',
    featured: true,
    color: 'bg-sassy-coral',
  },
  {
    id: '3',
    title: 'Advanced Gang Sheet Techniques',
    date: '2026-04-05',
    time: '1:00 PM - 4:00 PM',
    location: 'Online via Zoom',
    description: 'Take your DTF business to the next level with advanced gang sheet optimization techniques.',
    capacity: 50,
    spotsLeft: 32,
    price: 29,
    isFree: false,
    category: 'Online Class',
    featured: true,
    color: 'bg-sassy-periwinkle',
  },
  {
    id: '4',
    title: 'Kids Craft Saturday',
    date: '2026-04-12',
    time: '10:00 AM - 12:00 PM',
    location: 'SassyDame Studio',
    description: 'A fun crafting session for kids ages 6-12. They\'ll create their own custom t-shirt design!',
    capacity: 15,
    spotsLeft: 10,
    price: 25,
    isFree: false,
    category: 'Kids',
    featured: false,
    color: 'bg-sassy-gold',
  },
  {
    id: '5',
    title: 'Small Business Meetup',
    date: '2026-04-19',
    time: '5:00 PM - 7:00 PM',
    location: 'SassyDame Studio',
    description: 'Connect with other local crafters and small business owners. Share tips, network, and build community!',
    capacity: 30,
    spotsLeft: 12,
    price: 0,
    isFree: true,
    category: 'Networking',
    featured: false,
    color: 'bg-sassy-lime',
  },
  {
    id: '6',
    title: 'Sublimation 101: Tumblers & Mugs',
    date: '2026-04-26',
    time: '11:00 AM - 3:00 PM',
    location: 'SassyDame Studio',
    description: 'Master sublimation printing on tumblers, mugs, and drinkware. Take home your creations!',
    capacity: 10,
    spotsLeft: 3,
    price: 59,
    isFree: false,
    category: 'Workshop',
    featured: false,
    color: 'bg-sassy-rose',
  },
]

const categories = ['All', 'Workshop', 'Craft Night', 'Online Class', 'Kids', 'Networking']

export function EventsListings() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered = activeFilter === 'All'
    ? demoEvents
    : demoEvents.filter((e) => e.category === activeFilter)

  return (
    <section id="upcoming" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Upcoming <span className="bg-gradient-to-r from-sassy-coral to-sassy-orange bg-clip-text text-transparent">Events</span>
          </h2>
          <p className="text-muted-foreground text-lg">Find your next creative adventure</p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={cn(
                'px-6 py-3 rounded-full text-sm font-bold transition-all',
                activeFilter === cat
                  ? 'bg-gradient-to-r from-sassy-coral to-sassy-orange text-white shadow-lg shadow-sassy-coral/25'
                  : 'bg-muted text-muted-foreground hover:bg-sassy-coral/10 hover:text-sassy-coral'
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Event grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <AnimatePresence mode="popLayout">
            {filtered.map((event) => (
              <motion.div
                key={event.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <SpotlightCard spotlightColor="rgba(255, 148, 128, 0.12)" className="rounded-2xl overflow-hidden">
                  <div className="group">
                    {/* Color bar top */}
                    <div className={cn('h-2', event.color)} />

                    <div className="p-6">
                      {/* Date and category */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className={cn('w-12 h-12 rounded-xl flex flex-col items-center justify-center text-white', event.color)}>
                            <span className="text-[10px] font-medium leading-none">{new Date(event.date).toLocaleDateString('en', { month: 'short' })}</span>
                            <span className="text-lg font-bold leading-none">{new Date(event.date).getDate()}</span>
                          </div>
                          <div>
                            <span className="text-xs px-2 py-0.5 rounded border bg-transparent">{event.category}</span>
                          </div>
                        </div>
                        {event.isFree ? (
                          <span className="bg-sassy-lime text-foreground font-bold text-sm px-3 py-1 rounded-full">Free</span>
                        ) : (
                          <span className="font-bold text-xl text-sassy-coral">${event.price}</span>
                        )}
                      </div>

                      <h3 className="font-semibold text-lg mb-2 group-hover:text-sassy-coral transition-colors">
                        {event.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{event.description}</p>

                      {/* Meta */}
                      <div className="space-y-2 text-xs text-muted-foreground mb-4">
                        <div className="flex items-center gap-2">
                          <Clock className="h-3.5 w-3.5" /> {event.time}
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-3.5 w-3.5" /> {event.location}
                        </div>
                      </div>

                      {/* Spots + CTA */}
                      <div className="flex items-center justify-between pt-4 border-t">
                        <div className="flex items-center gap-1.5 text-xs">
                          <Users className="h-3.5 w-3.5 text-muted-foreground" />
                          <span className={cn(event.spotsLeft <= 5 ? 'text-sassy-coral font-semibold' : 'text-muted-foreground')}>
                            {event.spotsLeft} spots left
                          </span>
                        </div>
                        <Button size="lg" className="bg-gradient-to-r from-sassy-coral to-sassy-orange text-white font-bold rounded-xl px-6 py-3 shadow-md shadow-sassy-coral/20 hover:shadow-lg">
                          Register <ChevronRight className="ml-1 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Puck: Editable content slot */}
      <DropZone zone="content" />
    </section>
  )
}
