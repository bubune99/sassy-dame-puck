'use client'

import React from 'react';

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Clock, MapPin, Users, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SpotlightCard } from './effects/spotlight-card'
import { cn } from '@/lib/utils'
export interface EventsListingsProps {
  content?: React.FC;
  sectionHeading: string;
  sectionHeadingHighlight: string;
  sectionDescription: string;
  event1Title: string;
  event1Date: string;
  event1Time: string;
  event1Location: string;
  event1Description: string;
  event1Category: string;
  event1Price: number;
  event1IsFree: boolean;
  event1Capacity: number;
  event1SpotsLeft: number;
  event2Title: string;
  event2Date: string;
  event2Time: string;
  event2Location: string;
  event2Description: string;
  event2Category: string;
  event2Price: number;
  event2IsFree: boolean;
  event2Capacity: number;
  event2SpotsLeft: number;
  event3Title: string;
  event3Date: string;
  event3Time: string;
  event3Location: string;
  event3Description: string;
  event3Category: string;
  event3Price: number;
  event3IsFree: boolean;
  event3Capacity: number;
  event3SpotsLeft: number;
  event4Title: string;
  event4Date: string;
  event4Time: string;
  event4Location: string;
  event4Description: string;
  event4Category: string;
  event4Price: number;
  event4IsFree: boolean;
  event4Capacity: number;
  event4SpotsLeft: number;
  event5Title: string;
  event5Date: string;
  event5Time: string;
  event5Location: string;
  event5Description: string;
  event5Category: string;
  event5Price: number;
  event5IsFree: boolean;
  event5Capacity: number;
  event5SpotsLeft: number;
  event6Title: string;
  event6Date: string;
  event6Time: string;
  event6Location: string;
  event6Description: string;
  event6Category: string;
  event6Price: number;
  event6IsFree: boolean;
  event6Capacity: number;
  event6SpotsLeft: number;
}

export function EventsListings({
  content,
  sectionHeading = 'Upcoming',
  sectionHeadingHighlight = 'Events',
  sectionDescription = 'Find your next creative adventure',
  event1Title = 'DTF Printing Workshop for Beginners',
  event1Date = '2026-03-15',
  event1Time = '10:00 AM - 2:00 PM',
  event1Location = 'SassyDame Studio',
  event1Description = 'Learn the basics of DTF printing in this hands-on workshop. Perfect for beginners who want to start their crafting journey!',
  event1Category = 'Workshop',
  event1Price = 49,
  event1IsFree = false,
  event1Capacity = 12,
  event1SpotsLeft = 4,
  event2Title = 'Craft Night: Spring Designs',
  event2Date = '2026-03-22',
  event2Time = '6:00 PM - 9:00 PM',
  event2Location = 'SassyDame Studio',
  event2Description = 'Join us for a fun evening creating spring-themed crafts. All supplies included! Bring your friends.',
  event2Category = 'Craft Night',
  event2Price = 0,
  event2IsFree = true,
  event2Capacity = 20,
  event2SpotsLeft = 8,
  event3Title = 'Advanced Gang Sheet Techniques',
  event3Date = '2026-04-05',
  event3Time = '1:00 PM - 4:00 PM',
  event3Location = 'Online via Zoom',
  event3Description = 'Take your DTF business to the next level with advanced gang sheet optimization techniques.',
  event3Category = 'Online Class',
  event3Price = 29,
  event3IsFree = false,
  event3Capacity = 50,
  event3SpotsLeft = 32,
  event4Title = 'Kids Craft Saturday',
  event4Date = '2026-04-12',
  event4Time = '10:00 AM - 12:00 PM',
  event4Location = 'SassyDame Studio',
  event4Description = "A fun crafting session for kids ages 6-12. They'll create their own custom t-shirt design!",
  event4Category = 'Kids',
  event4Price = 25,
  event4IsFree = false,
  event4Capacity = 15,
  event4SpotsLeft = 10,
  event5Title = 'Small Business Meetup',
  event5Date = '2026-04-19',
  event5Time = '5:00 PM - 7:00 PM',
  event5Location = 'SassyDame Studio',
  event5Description = 'Connect with other local crafters and small business owners. Share tips, network, and build community!',
  event5Category = 'Networking',
  event5Price = 0,
  event5IsFree = true,
  event5Capacity = 30,
  event5SpotsLeft = 12,
  event6Title = 'Sublimation 101: Tumblers & Mugs',
  event6Date = '2026-04-26',
  event6Time = '11:00 AM - 3:00 PM',
  event6Location = 'SassyDame Studio',
  event6Description = 'Master sublimation printing on tumblers, mugs, and drinkware. Take home your creations!',
  event6Category = 'Workshop',
  event6Price = 59,
  event6IsFree = false,
  event6Capacity = 10,
  event6SpotsLeft = 3,
}: EventsListingsProps) {
  const demoEvents = [
    { id: '1', title: event1Title, date: event1Date, time: event1Time, location: event1Location, description: event1Description, capacity: event1Capacity, spotsLeft: event1SpotsLeft, price: event1Price, isFree: event1IsFree, category: event1Category, featured: true, color: 'bg-sassy-teal' },
    { id: '2', title: event2Title, date: event2Date, time: event2Time, location: event2Location, description: event2Description, capacity: event2Capacity, spotsLeft: event2SpotsLeft, price: event2Price, isFree: event2IsFree, category: event2Category, featured: true, color: 'bg-sassy-coral' },
    { id: '3', title: event3Title, date: event3Date, time: event3Time, location: event3Location, description: event3Description, capacity: event3Capacity, spotsLeft: event3SpotsLeft, price: event3Price, isFree: event3IsFree, category: event3Category, featured: true, color: 'bg-sassy-periwinkle' },
    { id: '4', title: event4Title, date: event4Date, time: event4Time, location: event4Location, description: event4Description, capacity: event4Capacity, spotsLeft: event4SpotsLeft, price: event4Price, isFree: event4IsFree, category: event4Category, featured: false, color: 'bg-sassy-gold' },
    { id: '5', title: event5Title, date: event5Date, time: event5Time, location: event5Location, description: event5Description, capacity: event5Capacity, spotsLeft: event5SpotsLeft, price: event5Price, isFree: event5IsFree, category: event5Category, featured: false, color: 'bg-sassy-lime' },
    { id: '6', title: event6Title, date: event6Date, time: event6Time, location: event6Location, description: event6Description, capacity: event6Capacity, spotsLeft: event6SpotsLeft, price: event6Price, isFree: event6IsFree, category: event6Category, featured: false, color: 'bg-sassy-rose' },
  ]

  const categories = ['All', 'Workshop', 'Craft Night', 'Online Class', 'Kids', 'Networking']

  const [activeFilter, setActiveFilter] = useState('All')

  const filtered = activeFilter === 'All'
    ? demoEvents
    : demoEvents.filter((e) => e.category === activeFilter)

  return (
    <section id="upcoming" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            {sectionHeading} <span className="bg-gradient-to-r from-sassy-coral to-sassy-orange bg-clip-text text-transparent">{sectionHeadingHighlight}</span>
          </h2>
          <p className="text-muted-foreground text-lg">{sectionDescription}</p>
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
      {content && typeof content === "function" && content({})}
</section>
  )
}
