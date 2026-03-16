"use client";

import { motion } from "framer-motion";
import {
  Users,
  Clock,
  Star,
  CheckCircle,
  Calendar,
  Building2,
  Utensils,
  Car,
  Monitor,
  PartyPopper,
  Briefcase,
  Heart,
  Snowflake,
  Church,
  Cake,
  ArrowRight,
} from "lucide-react";
import { DropZone } from "@puckeditor/core";

const eventTypes = [
  {
    icon: Cake,
    title: "Birthday Parties",
    description: "Celebrate big with space for all your friends and family",
    color: "text-sassy-coral",
    bg: "bg-sassy-coral/10",
  },
  {
    icon: Briefcase,
    title: "Corporate Events",
    description: "Professional setting for meetings, trainings, and team celebrations",
    color: "text-sassy-gold",
    bg: "bg-sassy-gold/10",
  },
  {
    icon: Users,
    title: "Community Gatherings",
    description: "Bring your community together in a welcoming, spacious venue",
    color: "text-sassy-coral",
    bg: "bg-sassy-coral/10",
  },
  {
    icon: Heart,
    title: "Wedding Receptions",
    description: "An elegant yet vibrant space for your special day celebration",
    color: "text-sassy-gold",
    bg: "bg-sassy-gold/10",
  },
  {
    icon: Snowflake,
    title: "Holiday Parties",
    description: "Host memorable seasonal celebrations with all the room you need",
    color: "text-sassy-coral",
    bg: "bg-sassy-coral/10",
  },
  {
    icon: Church,
    title: "Church & Org Events",
    description: "Perfect for church socials, fundraisers, and organizational gatherings",
    color: "text-sassy-gold",
    bg: "bg-sassy-gold/10",
  },
];

const amenities = [
  { icon: Users, label: "Tables & Chairs", description: "Seating for up to 100 guests with flexible layouts" },
  { icon: Monitor, label: "AV Equipment", description: "Projector, screen, speakers, and microphone included" },
  { icon: Utensils, label: "Kitchen Access", description: "Full commercial kitchen for catering prep and service" },
  { icon: Car, label: "Free Parking", description: "Spacious on-site parking lot for all your guests" },
  { icon: Building2, label: "Flexible Floor Plan", description: "Open layout that adapts to your event needs" },
  { icon: PartyPopper, label: "Decor Friendly", description: "Bring your own decorations and set up your vision" },
];

const pricingTiers = [
  {
    name: "Half Day",
    duration: "Up to 5 hours",
    price: 450,
    includes: [
      "Up to 100 guests",
      "Tables & chairs setup",
      "AV equipment access",
      "Kitchen access",
      "Free parking",
      "Setup & breakdown time included",
    ],
    popular: false,
  },
  {
    name: "Full Day",
    duration: "Up to 10 hours",
    price: 750,
    includes: [
      "Up to 100 guests",
      "Tables & chairs setup",
      "AV equipment access",
      "Full kitchen access",
      "Free parking",
      "Flexible setup schedule",
      "Dedicated event coordinator",
    ],
    popular: true,
  },
  {
    name: "Weekend Package",
    duration: "Friday evening \u2013 Sunday",
    price: 1200,
    includes: [
      "Up to 100 guests",
      "Full venue access all weekend",
      "All AV equipment",
      "Complete kitchen access",
      "Free parking",
      "Early setup on Friday",
      "Dedicated event coordinator",
      "Cleanup crew included",
    ],
    popular: false,
  },
];

export interface HallRentalsPageProps {
  badgeText?: string;
  heading?: string;
  headingHighlight?: string;
  description?: string;
  capacity?: string;
  sqft?: string;
  eventTypesHeading?: string;
  eventTypesDescription?: string;
  amenitiesHeading?: string;
  amenitiesDescription?: string;
  pricingHeading?: string;
  ctaHeading?: string;
  ctaDescription?: string;
}

export function HallRentalsPage({
  badgeText = "Large Event Venue",
  heading = "Your Event,",
  headingHighlight = "Our Hall",
  description = "A spacious, versatile venue for up to 100 guests. From birthday bashes to wedding receptions, our hall is ready for your next big event.",
  capacity = "100",
  sqft = "3,000",
  eventTypesHeading = "Perfect For Any Occasion",
  eventTypesDescription = "Our hall adapts to whatever you have in mind",
  amenitiesHeading = "Everything Included",
  amenitiesDescription = "Our venue comes fully equipped so you can focus on enjoying your event",
  pricingHeading = "Simple, Transparent Pricing",
  ctaHeading = "Ready to Book the Hall?",
  ctaDescription = "Reserve your date today. We will handle the setup so you can focus on making memories.",
}: HallRentalsPageProps) {
  return (
    <main className="flex-1">
      {/* Animated background */}
      <div className="relative">
        <div className="absolute inset-0 pointer-events-none" style={{ height: "120vh" }}>
          <div className="absolute inset-0 bg-gradient-to-br from-sassy-coral/5 via-background to-sassy-gold/5" />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
            className="absolute -top-20 -right-32 w-[600px] h-[600px] rounded-full border-2 border-dashed border-sassy-coral/12"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
            className="absolute top-[40%] -left-40 w-[500px] h-[500px] rounded-full border-2 border-dashed border-sassy-gold/10"
          />
          <div className="absolute top-[15%] right-[20%] w-72 h-72 bg-sassy-coral/8 rounded-full blur-3xl" />
          <div className="absolute top-[45%] left-[10%] w-64 h-64 bg-sassy-gold/8 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-full h-[30vh] bg-gradient-to-b from-transparent to-background" />
        </div>

        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex items-center overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <div className="inline-flex items-center gap-2 bg-sassy-coral/10 text-sassy-coral px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Building2 className="h-4 w-4" />
                  <span>{badgeText}</span>
                </div>

                <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-[0.95]">
                  <span className="block">{heading}</span>
                  <span className="block bg-gradient-to-r from-sassy-coral via-sassy-gold to-sassy-orange bg-clip-text text-transparent">
                    {headingHighlight}
                  </span>
                </h1>

                <p className="text-lg text-muted-foreground max-w-lg mb-8 leading-relaxed">
                  {description}
                </p>

                <div className="flex flex-wrap gap-4 mb-10">
                  <a
                    href="#pricing"
                    className="inline-flex items-center justify-center rounded-md text-lg px-8 py-6 bg-sassy-coral hover:bg-sassy-coral/90 text-white font-medium"
                  >
                    View Pricing
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-md text-lg px-8 py-6 border border-sassy-gold text-sassy-gold hover:bg-sassy-gold hover:text-foreground font-medium"
                  >
                    Request a Tour
                  </a>
                </div>

                <div className="flex gap-8">
                  {[
                    { icon: Users, value: capacity, label: "Max guests" },
                    { icon: Building2, value: sqft, label: "Sq ft space" },
                    { icon: Star, value: "4.9", label: "Avg rating" },
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

              {/* Right: Visual placeholder grid */}
              <div className="hidden lg:block">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="grid grid-cols-2 gap-4"
                >
                  {[
                    { label: "Main Hall", color: "from-sassy-coral/30 to-sassy-gold/20" },
                    { label: "Kitchen Area", color: "from-sassy-gold/30 to-sassy-coral/20" },
                    { label: "Dance Floor", color: "from-sassy-coral/25 to-sassy-orange/20" },
                    { label: "Lobby", color: "from-sassy-gold/25 to-sassy-coral/15" },
                  ].map((area, i) => (
                    <motion.div
                      key={area.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + i * 0.15 }}
                      className={`aspect-square bg-gradient-to-br flex items-center justify-center shadow-lg rounded-2xl ${area.color}`}
                    >
                      <span className="text-sm font-medium text-foreground/70">{area.label}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Event Types */}
      <section className="py-24 bg-gradient-to-b from-sassy-coral/3 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
                {eventTypesHeading}
              </h2>
              <p className="text-muted-foreground text-lg">{eventTypesDescription}</p>
            </motion.div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {eventTypes.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`text-center p-8 hover:shadow-lg transition-all rounded-2xl ${event.bg}`}
              >
                <event.icon className={`h-10 w-10 mx-auto mb-4 ${event.color}`} />
                <h3 className="font-semibold text-lg mb-2">{event.title}</h3>
                <p className="text-sm text-muted-foreground">{event.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capacity & Amenities */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              {amenitiesHeading}
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {amenitiesDescription}
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {amenities.map((amenity, index) => (
              <motion.div
                key={amenity.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="flex items-start gap-4 p-6 hover:shadow-md transition-all rounded-xl border"
              >
                <div className="w-12 h-12 rounded-xl bg-sassy-gold/10 flex items-center justify-center shrink-0">
                  <amenity.icon className="h-6 w-6 text-sassy-gold" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{amenity.label}</h3>
                  <p className="text-sm text-muted-foreground">{amenity.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section id="pricing" className="py-24 bg-gradient-to-b from-sassy-gold/3 to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              {pricingHeading}
            </h2>
            <p className="text-muted-foreground text-lg">Choose the package that fits your event</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative rounded-2xl p-8 border-2 ${
                  tier.popular ? "border-sassy-coral shadow-xl shadow-sassy-coral/10" : "border-border"
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-sassy-coral text-white px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1 z-10">
                    <Star className="h-3 w-3" />
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="font-serif text-2xl font-bold mb-2">{tier.name}</h3>
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    {tier.duration}
                  </div>
                  <div className="mt-4">
                    <span className="font-serif text-5xl font-bold text-sassy-coral">${tier.price}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {tier.includes.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-sassy-gold shrink-0 mt-0.5" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full inline-flex items-center justify-center rounded-md text-lg py-6 font-medium ${
                    tier.popular
                      ? "bg-sassy-coral hover:bg-sassy-coral/90 text-white"
                      : "bg-sassy-gold/10 text-sassy-gold hover:bg-sassy-gold hover:text-foreground border border-sassy-gold"
                  }`}
                >
                  Book Now
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
            Need a custom arrangement?{" "}
            <a href="/contact" className="text-sassy-coral hover:underline font-medium">
              Contact us
            </a>{" "}
            for a tailored quote.
          </motion.p>
        </div>
      </section>

      {/* Gallery Placeholder */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              See the <span className="text-sassy-gold">Space</span>
            </h2>
            <p className="text-muted-foreground text-lg">A versatile venue ready for your vision</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {["Main Hall", "Stage Area", "Kitchen", "Parking"].map((label, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="aspect-square bg-gradient-to-br from-sassy-coral/20 to-sassy-gold/20 flex items-center justify-center rounded-xl"
              >
                <span className="text-muted-foreground text-sm font-medium">{label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-24 bg-gradient-to-br from-sassy-coral/5 via-sassy-gold/5 to-sassy-orange/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <Calendar className="h-14 w-14 text-sassy-coral mx-auto mb-6" />
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">{ctaHeading}</h2>
            <p className="text-muted-foreground text-lg mb-8">
              {ctaDescription}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-md text-lg px-10 py-6 bg-sassy-coral hover:bg-sassy-coral/90 text-white font-medium"
              >
                Request Booking
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-md text-lg px-10 py-6 border border-sassy-gold text-sassy-gold hover:bg-sassy-gold hover:text-foreground font-medium"
              >
                Schedule a Tour
              </a>
            </div>
            <p className="text-sm text-muted-foreground mt-6">
              Also looking for a smaller crafting space? Check out our{" "}
              <a href="/events-space-rentals" className="text-sassy-coral hover:underline font-medium">
                studio event rentals
              </a>
              .
            </p>
          </motion.div>
        </div>
      </section>

      {/* Puck: Editable content slot */}
      <DropZone zone="content" />
    </main>
  );
}
