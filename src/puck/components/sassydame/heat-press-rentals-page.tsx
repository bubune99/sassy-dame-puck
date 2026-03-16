"use client";

import { motion } from "framer-motion";
import { Scissors, Clock, Users, Sparkles, CheckCircle, Calendar } from "lucide-react";
import { DropZone } from "@puckeditor/core";

const rentalPackages = [
  {
    name: "Craft Hour",
    duration: "1 Hour",
    price: 25,
    features: [
      "Access to crafting workspace",
      "Basic tools & supplies included",
      "Use of cutting machines",
      "Great for quick projects",
    ],
    popular: false,
  },
  {
    name: "Half Day Studio",
    duration: "4 Hours",
    price: 80,
    features: [
      "Full studio access",
      "All tools & equipment",
      "Heat press usage",
      "Cutting machine access",
      "Complimentary coffee/tea",
      "Storage for ongoing projects",
    ],
    popular: true,
  },
  {
    name: "Full Day Creative",
    duration: "8 Hours",
    price: 140,
    features: [
      "Complete studio access",
      "All equipment & tools",
      "Priority equipment booking",
      "Lunch break included",
      "Project storage",
      "Expert assistance available",
    ],
    popular: false,
  },
];

const equipmentList = [
  "Cricut Maker 3",
  "Silhouette Cameo 4",
  "Heat Press Machines",
  "Tumbler Press",
  "Sublimation Printer",
  "Vinyl Cutter",
  "Sewing Machines",
  "Embroidery Machine",
];

export interface HeatPressRentalsPageProps {
  badgeText?: string;
  heading?: string;
  headingHighlight?: string;
  description?: string;
  packagesHeading?: string;
  packagesDescription?: string;
  equipmentHeading?: string;
  equipmentDescription?: string;
  ctaHeading?: string;
  ctaDescription?: string;
}

export function HeatPressRentalsPage({
  badgeText = "Create Without the Investment",
  heading = "Heat Press",
  headingHighlight = "Rentals",
  description = "Access professional crafting equipment without the hefty price tag. Our fully-equipped studio is perfect for personal projects, small businesses, or trying out new crafts.",
  packagesHeading = "Rental Packages",
  packagesDescription = "Choose the package that fits your crafting needs",
  equipmentHeading = "Professional Equipment",
  equipmentDescription = "Our studio is stocked with top-of-the-line crafting equipment. No need to buy expensive machines for one-time projects!",
  ctaHeading = "Ready to Create?",
  ctaDescription = "Book your studio time today and bring your creative vision to life. Walk-ins welcome based on availability!",
}: HeatPressRentalsPageProps) {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-primary/10 to-secondary/10" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-accent/20 text-accent-foreground px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Scissors className="h-4 w-4" />
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

      {/* Rental Packages */}
      <section className="py-16">
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
            {rentalPackages.map((pkg, index) => (
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
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="font-serif text-2xl font-bold mb-2">{pkg.name}</h3>
                  <p className="text-muted-foreground flex items-center justify-center gap-2">
                    <Clock className="h-4 w-4" />
                    {pkg.duration}
                  </p>
                  <div className="mt-4">
                    <span className="font-serif text-4xl font-bold text-primary">${pkg.price}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
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
                  Book Now
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment List */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-serif text-3xl font-bold mb-4">{equipmentHeading}</h2>
                <p className="text-muted-foreground mb-6">
                  {equipmentDescription}
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {equipmentList.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 bg-background rounded-lg px-4 py-3 border border-border"
                    >
                      <Sparkles className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl p-8"
              >
                <h3 className="font-serif text-2xl font-bold mb-4">New to Crafting?</h3>
                <p className="text-muted-foreground mb-6">
                  Our staff is always available to help you get started with any equipment.
                  We also offer beginner classes to help you learn the basics!
                </p>
                <div className="space-y-3">
                  <a
                    href="/events"
                    className="w-full inline-flex items-center justify-center rounded-md text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                  >
                    View Our Classes
                  </a>
                  <a
                    href="/contact"
                    className="w-full inline-flex items-center justify-center rounded-md text-sm font-medium border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
                  >
                    Ask a Question
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center bg-card rounded-2xl p-10 border border-border"
          >
            <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="font-serif text-3xl font-bold mb-4">{ctaHeading}</h2>
            <p className="text-muted-foreground mb-6">
              {ctaDescription}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center justify-center rounded-md text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8">
                Book Online
              </button>
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 px-8"
              >
                Contact Us
              </a>
            </div>
            <p className="text-sm text-muted-foreground mt-6">
              <Users className="h-4 w-4 inline mr-1" />
              Group rates available for parties of 4+
            </p>
          </motion.div>
        </div>
      </section>

      {/* Puck: Editable content slot */}
      <DropZone zone="content" />
    </main>
  );
}
