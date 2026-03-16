"use client";

import { motion } from "framer-motion";
import {
  Shirt,
  Palette,
  Truck,
  Users,
  ArrowRight,
  CheckCircle,
  Star,
  Percent,
  MessageSquare,
  Sparkles,
  PartyPopper,
  Building2,
  Heart,
  Package,
} from "lucide-react";
import { DropZone } from "@puckeditor/core";

const steps = [
  {
    step: "01",
    icon: Palette,
    title: "Submit Your Design",
    description:
      "Send us your artwork, logo, or idea. Our team can also help you create a design from scratch.",
    color: "text-sassy-teal",
    bg: "bg-sassy-teal/10",
  },
  {
    step: "02",
    icon: Sparkles,
    title: "We Print",
    description:
      "Using premium DTF and screen printing techniques, we produce vibrant, long-lasting prints on quality shirts.",
    color: "text-sassy-lime",
    bg: "bg-sassy-lime/10",
  },
  {
    step: "03",
    icon: Truck,
    title: "Deliver to Your Event",
    description:
      "We deliver your custom shirts on time, packaged and ready to hand out at your event.",
    color: "text-sassy-teal",
    bg: "bg-sassy-teal/10",
  },
];

const useCases = [
  {
    icon: Users,
    title: "Team Shirts",
    description: "Unite your sports team, work crew, or volunteer group with matching custom shirts.",
    color: "text-sassy-teal",
    bg: "bg-sassy-teal/10",
  },
  {
    icon: PartyPopper,
    title: "Party Shirts",
    description: "Birthday bashes, bachelor/bachelorette parties, and celebrations deserve custom tees.",
    color: "text-sassy-lime",
    bg: "bg-sassy-lime/10",
  },
  {
    icon: Heart,
    title: "Reunion Shirts",
    description: "Family reunions, class reunions, and group gatherings made memorable with matching shirts.",
    color: "text-sassy-teal",
    bg: "bg-sassy-teal/10",
  },
  {
    icon: Building2,
    title: "Corporate Merch",
    description: "Branded apparel for conferences, trade shows, company events, and employee appreciation.",
    color: "text-sassy-lime",
    bg: "bg-sassy-lime/10",
  },
];

const discountTiers = [
  { quantity: "1 \u2013 11 shirts", discount: "Standard pricing", price: "$18/shirt", highlight: false },
  { quantity: "12 \u2013 24 shirts", discount: "10% off", price: "$16.20/shirt", highlight: false },
  { quantity: "25 \u2013 49 shirts", discount: "15% off", price: "$15.30/shirt", highlight: true },
  { quantity: "50+ shirts", discount: "20% off", price: "$14.40/shirt", highlight: false },
];

const includes = [
  "High-quality cotton blend shirts",
  "Full-color DTF printing",
  "Front and/or back printing",
  "Individual sizing (S \u2013 5XL)",
  "Free design consultation",
  "Rush orders available",
];

export interface CustomShirtsPageProps {
  badgeText?: string;
  heading?: string;
  headingHighlight?: string;
  description?: string;
  howItWorksHeading?: string;
  howItWorksDescription?: string;
  useCasesHeading?: string;
  useCasesDescription?: string;
  pricingHeading?: string;
  pricingDescription?: string;
  ctaHeading?: string;
  ctaDescription?: string;
}

export function CustomShirtsPage({
  badgeText = "Custom Event Shirts",
  heading = "Your Event,",
  headingHighlight = "Your Shirts",
  description = "Custom printed shirts for any event. Submit your design, we print and deliver. Group discounts up to 20% off for larger orders.",
  howItWorksHeading = "How It Works",
  howItWorksDescription = "Three simple steps to custom event shirts",
  useCasesHeading = "Shirts For Every Event",
  useCasesDescription = "Whatever the occasion, we have you covered",
  pricingHeading = "Group Discounts",
  pricingDescription = "The more you order, the more you save",
  ctaHeading = "Ready to Order Custom Shirts?",
  ctaDescription = "Tell us about your event and we will get your custom shirts started. Free design help included!",
}: CustomShirtsPageProps) {
  return (
    <main className="flex-1">
      {/* Animated background */}
      <div className="relative">
        <div className="absolute inset-0 pointer-events-none" style={{ height: "120vh" }}>
          <div className="absolute inset-0 bg-gradient-to-br from-sassy-teal/5 via-background to-sassy-lime/5" />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
            className="absolute -top-20 -left-32 w-[550px] h-[550px] rounded-full border-2 border-dashed border-sassy-teal/12"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
            className="absolute top-[35%] -right-40 w-[500px] h-[500px] rounded-full border-2 border-dashed border-sassy-lime/10"
          />
          <div className="absolute top-[15%] left-[20%] w-72 h-72 bg-sassy-teal/8 rounded-full blur-3xl" />
          <div className="absolute top-[45%] right-[15%] w-64 h-64 bg-sassy-lime/8 rounded-full blur-3xl" />
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
                <div className="inline-flex items-center gap-2 bg-sassy-teal/10 text-sassy-teal px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Shirt className="h-4 w-4" />
                  <span>{badgeText}</span>
                </div>

                <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-[0.95]">
                  <span className="block">{heading}</span>
                  <span className="block bg-gradient-to-r from-sassy-teal via-sassy-lime to-sassy-teal bg-clip-text text-transparent">
                    {headingHighlight}
                  </span>
                </h1>

                <p className="text-lg text-muted-foreground max-w-lg mb-8 leading-relaxed">
                  {description}
                </p>

                <div className="flex flex-wrap gap-4 mb-10">
                  <a
                    href="#pricing"
                    className="inline-flex items-center justify-center rounded-md text-lg px-8 py-6 bg-sassy-teal hover:bg-sassy-teal/90 text-white font-medium"
                  >
                    See Group Pricing
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-md text-lg px-8 py-6 border border-sassy-lime text-sassy-lime hover:bg-sassy-lime hover:text-foreground font-medium"
                  >
                    Start Your Order
                  </a>
                </div>

                <div className="flex gap-8">
                  {[
                    { icon: Shirt, value: "5,000+", label: "Shirts printed" },
                    { icon: Users, value: "200+", label: "Events served" },
                    { icon: Star, value: "4.9", label: "Avg rating" },
                  ].map((stat) => (
                    <div key={stat.label} className="flex items-center gap-2.5">
                      <stat.icon className="h-5 w-5 text-sassy-teal" />
                      <div>
                        <div className="font-bold">{stat.value}</div>
                        <div className="text-xs text-muted-foreground">{stat.label}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Right: Shirt mockup placeholders */}
              <div className="hidden lg:block">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="relative"
                >
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { label: "Team Shirts", color: "from-sassy-teal/30 to-sassy-lime/20" },
                      { label: "Party Tees", color: "from-sassy-lime/30 to-sassy-teal/20" },
                      { label: "Reunion Wear", color: "from-sassy-teal/25 to-sassy-lime/15" },
                      { label: "Corporate", color: "from-sassy-lime/25 to-sassy-teal/15" },
                    ].map((item, i) => (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 + i * 0.15 }}
                        className={`aspect-square rounded-2xl bg-gradient-to-br flex flex-col items-center justify-center gap-3 border border-white/10 shadow-lg ${item.color}`}
                      >
                        <Shirt className="h-10 w-10 text-foreground/40" />
                        <span className="text-sm font-medium text-foreground/70">{item.label}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* How It Works */}
      <section className="py-24 bg-gradient-to-b from-sassy-teal/3 to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              {howItWorksHeading}
            </h2>
            <p className="text-muted-foreground text-lg">{howItWorksDescription}</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative text-center p-6 rounded-2xl border"
              >
                <div className={`w-20 h-20 rounded-2xl mx-auto mb-6 flex items-center justify-center ${step.bg}`}>
                  <step.icon className={`h-10 w-10 ${step.color}`} />
                </div>
                <div className="text-6xl font-bold text-muted/20 absolute top-0 -left-2 select-none">
                  {step.step}
                </div>
                <h3 className="font-serif text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 -right-4 w-8 text-muted-foreground/30 z-10">
                    <ArrowRight className="h-8 w-8" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              {useCasesHeading}
            </h2>
            <p className="text-muted-foreground text-lg">{useCasesDescription}</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`text-center p-8 rounded-2xl hover:shadow-lg transition-all ${useCase.bg}`}
              >
                <useCase.icon className={`h-10 w-10 mx-auto mb-4 ${useCase.color}`} />
                <h3 className="font-semibold text-lg mb-2">{useCase.title}</h3>
                <p className="text-sm text-muted-foreground">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing & Discounts */}
      <section id="pricing" className="py-24 bg-gradient-to-b from-sassy-lime/3 to-background">
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
            <p className="text-muted-foreground text-lg">{pricingDescription}</p>
          </motion.div>

          <div className="max-w-3xl mx-auto mb-16">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {discountTiers.map((tier, index) => (
                <motion.div
                  key={tier.quantity}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative rounded-2xl p-6 text-center transition-all border ${
                    tier.highlight
                      ? "border-sassy-teal shadow-xl shadow-sassy-teal/10"
                      : "border-border"
                  }`}
                >
                  {tier.highlight && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-sassy-teal text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1 z-10">
                      <Star className="h-3 w-3" />
                      Best Value
                    </div>
                  )}
                  <Percent
                    className={`h-8 w-8 mx-auto mb-3 ${
                      tier.highlight ? "text-sassy-teal" : "text-muted-foreground"
                    }`}
                  />
                  <div className="font-semibold text-sm mb-1">{tier.quantity}</div>
                  <div
                    className={`text-2xl font-bold mb-1 ${tier.highlight ? "text-sassy-teal" : ""}`}
                  >
                    {tier.discount}
                  </div>
                  <div className="text-sm text-muted-foreground">{tier.price}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* What's Included */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <div className="bg-card rounded-2xl p-8 border">
              <div className="flex items-center gap-3 mb-6">
                <Package className="h-6 w-6 text-sassy-teal" />
                <h3 className="font-serif text-2xl font-bold">Every Order Includes</h3>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {includes.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-sassy-lime shrink-0 mt-0.5" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Order CTA */}
      <section className="py-24 bg-gradient-to-br from-sassy-teal/5 via-sassy-lime/5 to-sassy-teal/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <MessageSquare className="h-14 w-14 text-sassy-teal mx-auto mb-6" />
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              {ctaHeading}
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              {ctaDescription}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-md text-lg px-10 py-6 bg-sassy-teal hover:bg-sassy-teal/90 text-white font-medium"
              >
                Start Your Order
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-md text-lg px-10 py-6 border border-sassy-lime text-sassy-lime hover:bg-sassy-lime hover:text-foreground font-medium"
              >
                Get a Free Quote
              </a>
            </div>
            <p className="text-sm text-muted-foreground mt-6">
              Planning an event too? Check out our{" "}
              <a href="/hall-rentals" className="text-sassy-teal hover:underline font-medium">
                hall rentals
              </a>{" "}
              and{" "}
              <a href="/events-space-rentals" className="text-sassy-teal hover:underline font-medium">
                studio event space
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
