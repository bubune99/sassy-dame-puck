"use client";

import React from "react";

import { motion } from "framer-motion";
import {
  PartyPopper,
  Users,
  Clock,
  Star,
  CheckCircle,
  Calendar,
  Gift,
  Cake,
} from "lucide-react";
const eventTypes = [
  {
    icon: Cake,
    title: "Birthday Parties",
    description: "Make their birthday unforgettable with a hands-on crafting celebration",
    ageRange: "All ages welcome",
  },
  {
    icon: Users,
    title: "Team Building",
    description: "Bond with your team through creative collaborative projects",
    ageRange: "Corporate groups",
  },
  {
    icon: Gift,
    title: "Bridal Showers",
    description: "Craft custom gifts and memories for the bride-to-be",
    ageRange: "Adults",
  },
  {
    icon: PartyPopper,
    title: "Private Events",
    description: "Book the entire space for your special occasion",
    ageRange: "Customizable",
  },
];

const packages = [
  {
    name: "Party Package",
    capacity: "Up to 10 guests",
    duration: "2 Hours",
    price: 200,
    includes: [
      "Private event space",
      "Guided craft activity",
      "All materials included",
      "Setup & cleanup",
      "Basic party supplies",
    ],
    popular: false,
  },
  {
    name: "Deluxe Celebration",
    capacity: "Up to 15 guests",
    duration: "3 Hours",
    price: 350,
    includes: [
      "Private event space",
      "2 craft activities",
      "All premium materials",
      "Setup & cleanup",
      "Party supplies & decorations",
      "Refreshments included",
    ],
    popular: true,
  },
  {
    name: "Full Venue Rental",
    capacity: "Up to 30 guests",
    duration: "4 Hours",
    price: 500,
    includes: [
      "Entire studio space",
      "Multiple craft stations",
      "All materials & equipment",
      "Full setup & cleanup",
      "Catering coordination",
      "Custom activity planning",
    ],
    popular: false,
  },
];

export interface EventsSpacePageProps {
  content?: React.FC;
  puck?: { isEditing?: boolean };
  badgeText?: string;
  heading?: string;
  headingHighlight?: string;
  description?: string;
  eventTypesHeading?: string;
  eventTypesDescription?: string;
  packagesHeading?: string;
  packagesDescription?: string;
  ctaHeading?: string;
  ctaDescription?: string;
}

export function EventsSpacePage({
  content,
  puck,
  badgeText = "Host Your Event With Us",
  heading = "Events & Space",
  headingHighlight = "Rentals",
  description = "Looking for a unique venue for your next celebration? Host your party, team event, or private gathering in our creative crafting space!",
  eventTypesHeading = "Perfect For Every Occasion",
  eventTypesDescription = "Create lasting memories with hands-on crafting fun",
  packagesHeading = "Event Packages",
  packagesDescription = "All-inclusive packages to make planning easy",
  ctaHeading = "Ready to Book Your Event?",
  ctaDescription = "Contact us to check availability and start planning your perfect crafting celebration!",
}: EventsSpacePageProps) {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-accent/10 to-secondary/15" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <PartyPopper className="h-4 w-4" />
              <span>{badgeText}</span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              {heading} <span className="text-primary">{headingHighlight}</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-3xl font-bold mb-4">{eventTypesHeading}</h2>
            <p className="text-muted-foreground">{eventTypesDescription}</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {eventTypes.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-xl p-6 border border-border hover:border-primary/50 hover:shadow-lg transition-all text-center group"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <event.icon className="h-7 w-7" />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-2">{event.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{event.description}</p>
                <span className="inline-block text-xs bg-muted px-3 py-1 rounded-full">
                  {event.ageRange}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-3xl font-bold mb-4">{packagesHeading}</h2>
            <p className="text-muted-foreground">{packagesDescription}</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative bg-card rounded-2xl p-8 border-2 ${
                  pkg.popular ? "border-primary shadow-lg" : "border-border"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                    <Star className="h-3 w-3" />
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="font-serif text-2xl font-bold mb-2">{pkg.name}</h3>
                  <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      {pkg.capacity}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {pkg.duration}
                    </span>
                  </div>
                  <div className="mt-4">
                    <span className="font-serif text-4xl font-bold text-primary">${pkg.price}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.includes.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full inline-flex items-center justify-center rounded-md text-sm font-medium h-10 px-4 py-2 ${
                    pkg.popular
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "border border-input bg-background hover:bg-accent hover:text-accent-foreground"
                  }`}
                >
                  Inquire Now
                </button>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-muted-foreground mt-8"
          >
            Custom packages available for larger groups or special requirements.{" "}
            <a href="/contact" className="text-primary hover:underline">
              Contact us
            </a>{" "}
            to discuss!
          </motion.p>
        </div>
      </section>

      {/* Gallery Placeholder */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-3xl font-bold mb-4">Our Space</h2>
            <p className="text-muted-foreground">A creative haven for your special events</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {[1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="aspect-square rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center"
              >
                <span className="text-muted-foreground text-sm">Photo {i}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="font-serif text-3xl font-bold mb-4">{ctaHeading}</h2>
            <p className="text-muted-foreground mb-6">
              {ctaDescription}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center justify-center rounded-md text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8">
                Request Booking
              </button>
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 px-8"
              >
                Ask Questions
              </a>
            </div>
          </motion.div>
        </div>
      </section>
      {content && typeof content === "function" && content({})}
</main>
  );
}
