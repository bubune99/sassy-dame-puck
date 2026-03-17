'use client'

import React from 'react';

import { motion } from 'framer-motion'
import { Calendar, Users, ArrowRight, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
export interface EventsHeroProps {
  content?: React.FC;
  puck?: { isEditing?: boolean };
  communityText: string;
  headingLine1: string;
  headingLine2: string;
  description: string;
  primaryButtonText: string;
  secondaryButtonText: string;
  stat1Value: string;
  stat1Label: string;
  stat2Value: string;
  stat2Label: string;
  stat3Value: string;
  stat3Label: string;
  event1Title: string;
  event1Date: string;
  event1Time: string;
  event1Category: string;
  event1IsFree: boolean;
  event2Title: string;
  event2Date: string;
  event2Time: string;
  event2Category: string;
  event2IsFree: boolean;
  event3Title: string;
  event3Date: string;
  event3Time: string;
  event3Category: string;
  event3IsFree: boolean;
}

export function EventsHero({
  content,
  puck,
  communityText = 'Join 500+ community members',
  headingLine1 = 'Learn, Create,',
  headingLine2 = 'Connect',
  description = 'Workshops, craft nights, space rentals, and custom event shirts. Discover your next creative adventure with us.',
  primaryButtonText = 'View Upcoming Events',
  secondaryButtonText = 'Rent a Space',
  stat1Value = '50+',
  stat1Label = 'Events hosted',
  stat2Value = '500+',
  stat2Label = 'Attendees',
  stat3Value = '4.9',
  stat3Label = 'Avg rating',
  event1Title = 'DTF Printing Workshop for Beginners',
  event1Date = '2026-03-15',
  event1Time = '10:00 AM - 2:00 PM',
  event1Category = 'Workshop',
  event1IsFree = false,
  event2Title = 'Craft Night: Spring Designs',
  event2Date = '2026-03-22',
  event2Time = '6:00 PM - 9:00 PM',
  event2Category = 'Craft Night',
  event2IsFree = true,
  event3Title = 'Advanced Gang Sheet Techniques',
  event3Date = '2026-04-05',
  event3Time = '1:00 PM - 4:00 PM',
  event3Category = 'Online Class',
  event3IsFree = false,
}: EventsHeroProps) {
  const stats = [
    { icon: Calendar, value: stat1Value, label: stat1Label },
    { icon: Users, value: stat2Value, label: stat2Label },
    { icon: Star, value: stat3Value, label: stat3Label },
  ]

  const demoEvents = [
    { id: '1', title: event1Title, date: event1Date, time: event1Time, category: event1Category, isFree: event1IsFree, color: 'bg-sassy-teal' },
    { id: '2', title: event2Title, date: event2Date, time: event2Time, category: event2Category, isFree: event2IsFree, color: 'bg-sassy-coral' },
    { id: '3', title: event3Title, date: event3Date, time: event3Time, category: event3Category, isFree: event3IsFree, color: 'bg-sassy-periwinkle' },
  ]

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
              <span className="text-sm font-medium text-muted-foreground">{communityText}</span>
            </div>

            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-[0.95]">
              <span className="block">{headingLine1}</span>
              <span className="block bg-gradient-to-r from-sassy-coral via-sassy-gold to-sassy-orange bg-clip-text text-transparent">
                {headingLine2}
              </span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg mb-8 leading-relaxed">
              {description}
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <Button size="lg" className="text-xl px-10 py-7 bg-gradient-to-r from-sassy-coral to-sassy-orange hover:from-sassy-coral/90 hover:to-sassy-orange/90 text-white shadow-lg shadow-sassy-coral/25 rounded-2xl font-bold" onClick={() => { const el = document.getElementById('upcoming'); el?.scrollIntoView({ behavior: 'smooth' }); }}>
                {primaryButtonText}
                <ArrowRight className="ml-2 h-6 w-6" />
              </Button>
              <Button size="lg" className="text-xl px-10 py-7 bg-gradient-to-r from-sassy-gold to-sassy-lime text-foreground hover:from-sassy-gold/90 hover:to-sassy-lime/90 shadow-lg shadow-sassy-gold/25 rounded-2xl font-bold" onClick={() => { const el = document.getElementById('rentals'); el?.scrollIntoView({ behavior: 'smooth' }); }}>
                {secondaryButtonText}
              </Button>
            </div>

            {/* Quick stats */}
            <div className="flex gap-8">
              {stats.map((stat) => (
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
      {content && typeof content === "function" && content({})}
</section>
  )
}
