"use client";

import React from "react";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  Globe,
  Layers,
  BarChart3,
  Package,
  Palette,
  Rocket,
  MessageSquare,
  ShoppingCart,
  Users,
  GraduationCap,
  Church,
  Briefcase,
  Heart,
  Trophy,
  Phone,
  Mail,
} from "lucide-react";
// ---- HERO ----
function StorefrontHero({ heroHeading, heroHeadingHighlight, heroDescription }: { heroHeading: string; heroHeadingHighlight: string; heroDescription: string }) {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1520] via-[#15121d] to-[#0d0b14]" />
      <div className="absolute inset-0 opacity-[0.04]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" className="text-sassy-gold" />
        </svg>
      </div>
      <div className="absolute top-[10%] right-[10%] w-[500px] h-[500px] bg-sassy-gold/8 rounded-full blur-3xl" />
      <div className="absolute bottom-[20%] left-[5%] w-96 h-96 bg-sassy-orange/6 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-sassy-gold via-sassy-orange to-sassy-coral z-10" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sassy-gold/15 border border-sassy-gold/25 mb-8">
              <Globe className="h-4 w-4 text-sassy-gold" />
              <span className="text-sm font-medium text-sassy-gold">Custom Storefront Service</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[0.95]">
              <span className="block">{heroHeading}</span>
              <span className="block bg-gradient-to-r from-sassy-gold via-sassy-orange to-sassy-coral bg-clip-text text-transparent">
                {heroHeadingHighlight}
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-white/50 max-w-2xl mx-auto mb-10">
              {heroDescription}
            </p>

            <div className="flex flex-wrap gap-4 justify-center mb-16">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-md text-lg px-10 py-6 bg-sassy-gold hover:bg-sassy-gold/90 text-foreground font-medium"
              >
                Get Your Storefront
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="tel:9196286531"
                className="inline-flex items-center justify-center rounded-md text-lg px-10 py-6 border border-white/20 text-white hover:bg-white/10 font-medium"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Us Today
              </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: ShoppingCart, value: "100%", label: "White-Label" },
                { icon: Package, value: "$0", label: "Inventory Cost" },
                { icon: Rocket, value: "7 Days", label: "Launch Time" },
                { icon: BarChart3, value: "24/7", label: "Online Sales" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="text-center p-4 rounded-xl border border-white/10"
                >
                  <stat.icon className="h-6 w-6 text-sassy-gold/60 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-white/40 uppercase tracking-wide">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ---- HOW IT WORKS ----
function HowItWorks({ sectionHeading, sectionDescription }: { sectionHeading: string; sectionDescription: string }) {
  const stepsData = [
    { num: "01", title: "Consultation", desc: "Tell us about your organization, branding, and goals. We figure out what products and designs fit you best.", icon: MessageSquare },
    { num: "02", title: "Design", desc: "We build your custom storefront with your logo, colors, and curated product catalog -- you approve every detail.", icon: Palette },
    { num: "03", title: "Launch", desc: "Your store goes live with a custom URL. Share it with your team, members, or customers and start taking orders.", icon: Rocket },
    { num: "04", title: "Manage", desc: "We handle production and fulfillment. You track sales, manage products, and watch your revenue grow.", icon: BarChart3 },
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-sassy-gold/15 border border-sassy-gold/25 text-sassy-gold text-sm font-medium mb-4">
            Simple Process
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            {sectionHeading}
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">{sectionDescription}</p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-sassy-gold via-sassy-orange to-sassy-coral" />
          {stepsData.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`relative flex items-center gap-8 mb-12 md:mb-16 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
            >
              <div className={`flex-1 ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                <div className="bg-card rounded-2xl border p-6 shadow-sm hover:shadow-md transition-shadow inline-block max-w-sm">
                  <div className="text-xs font-bold text-sassy-gold/50 mb-2">STEP {step.num}</div>
                  <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.desc}</p>
                </div>
              </div>
              <div className="hidden md:flex w-12 h-12 rounded-full bg-background border-2 border-sassy-gold items-center justify-center z-10 shrink-0">
                <step.icon className="h-5 w-5 text-sassy-gold" />
              </div>
              <div className="hidden md:block flex-1" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---- FEATURES ----
function Features({ sectionHeading, sectionDescription }: { sectionHeading: string; sectionDescription: string }) {
  const features = [
    { icon: Palette, title: "Custom Branding", desc: "Your logo, your colors, your identity. Every storefront is fully branded to match your organization." },
    { icon: Layers, title: "Curated Product Catalog", desc: "Choose from tees, hoodies, hats, bags, and more. We help you pick what sells best for your audience." },
    { icon: ShoppingCart, title: "Order Management", desc: "A clean dashboard to view orders, track status, and manage your store without any hassle." },
    { icon: Package, title: "Fulfillment by SassyDame", desc: "We print, pack, and ship every order. No inventory to hold, no warehouse needed. Zero risk for you." },
    { icon: BarChart3, title: "Analytics Dashboard", desc: "Real-time sales reports, top-selling products, and revenue tracking so you always know how your store performs." },
    { icon: Globe, title: "Custom URL & Domain", desc: "Get a branded storefront link or connect your own domain. Look professional from day one." },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-sassy-gold/15 border border-sassy-gold/25 text-sassy-gold text-sm font-medium mb-4">
            Everything Included
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            {sectionHeading}
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">{sectionDescription}</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((feature, i) => (
            <motion.div key={feature.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="group">
              <div className="relative p-6 rounded-2xl border bg-card hover:border-sassy-gold/30 transition-all hover:shadow-lg hover:shadow-sassy-gold/5 h-full">
                <div className="w-12 h-12 rounded-xl bg-sassy-gold/10 flex items-center justify-center mb-4 group-hover:bg-sassy-gold/20 transition-colors">
                  <feature.icon className="h-6 w-6 text-sassy-gold" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---- USE CASES ----
function UseCases({ sectionHeading, sectionDescription }: { sectionHeading: string; sectionDescription: string }) {
  const cases = [
    { icon: Trophy, title: "Team Stores", desc: "Sports teams, leagues, and athletic organizations. Sell branded jerseys, warm-ups, and fan gear year-round.", color: "from-sassy-gold to-sassy-orange" },
    { icon: GraduationCap, title: "School Spirit Shops", desc: "Schools and PTAs can offer branded apparel, accessories, and spirit wear without handling any inventory.", color: "from-sassy-orange to-sassy-coral" },
    { icon: Church, title: "Church & Org Merch", desc: "Churches, nonprofits, and community groups get a professional storefront for branded merchandise and fundraising.", color: "from-sassy-coral to-sassy-gold" },
    { icon: Briefcase, title: "Business Branded Stores", desc: "Companies can offer branded swag for employees, clients, and events -- all managed from one storefront.", color: "from-sassy-gold to-sassy-coral" },
    { icon: Heart, title: "Fundraiser Shops", desc: "Raise money for any cause. We build your store, you share the link, and profits go directly to your fundraiser.", color: "from-sassy-orange to-sassy-gold" },
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-sassy-gold/15 border border-sassy-gold/25 text-sassy-gold text-sm font-medium mb-4">
            Who It&apos;s For
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            {sectionHeading}
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">{sectionDescription}</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {cases.map((useCase, i) => (
            <motion.div key={useCase.title} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} whileHover={{ y: -4 }}>
              <div className="relative overflow-hidden rounded-2xl border bg-card p-8 hover:border-sassy-gold/30 transition-all hover:shadow-lg hover:shadow-sassy-gold/5 h-full">
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${useCase.color}`} />
                <div className="w-14 h-14 rounded-2xl bg-sassy-gold/10 flex items-center justify-center mb-5">
                  <useCase.icon className="h-7 w-7 text-sassy-gold" />
                </div>
                <h3 className="font-semibold text-xl mb-3">{useCase.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{useCase.desc}</p>
                <div className="mt-5 flex items-center gap-2 text-sm text-sassy-gold font-medium">
                  <CheckCircle className="h-4 w-4" />
                  Zero upfront cost
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---- CTA ----
function StorefrontCTA({ ctaHeading, ctaDescription }: { ctaHeading: string; ctaDescription: string }) {
  return (
    <section className="py-24 bg-gradient-to-br from-[#1a1520] to-[#12101a] text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              {ctaHeading}
            </h2>
            <p className="text-white/50 text-lg mb-10 max-w-xl mx-auto">
              {ctaDescription}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <a href="/contact" className="inline-flex items-center justify-center rounded-md text-lg px-10 py-6 bg-sassy-gold hover:bg-sassy-gold/90 text-foreground font-medium">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a href="mailto:sassydame23@yahoo.com" className="inline-flex items-center justify-center rounded-md text-lg px-10 py-6 border border-white/20 text-white hover:bg-white/10 font-medium">
                <Mail className="mr-2 h-5 w-5" />
                Email Us
              </a>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-white/40">
              <a href="mailto:sassydame23@yahoo.com" className="flex items-center gap-2 hover:text-sassy-gold transition-colors">
                <Mail className="h-4 w-4" />
                sassydame23@yahoo.com
              </a>
              <a href="tel:9196286531" className="flex items-center gap-2 hover:text-sassy-gold transition-colors">
                <Phone className="h-4 w-4" />
                (919) 628-6531
              </a>
            </div>
          </motion.div>
        </div>
      </div>

    </section>
  );
}

// ---- PAGE ----
export interface StorefrontPageProps {
  content?: React.FC;
  puck?: { isEditing?: boolean };
  heading?: string;
  headingHighlight?: string;
  description?: string;
  howItWorksHeading?: string;
  howItWorksDescription?: string;
  featuresHeading?: string;
  featuresDescription?: string;
  useCasesHeading?: string;
  useCasesDescription?: string;
  ctaHeading?: string;
  ctaDescription?: string;
}

export function StorefrontPage({
  content,
  puck,
  heading = "Your Brand,",
  headingHighlight = "Your Store",
  description = "We build custom-branded online storefronts for teams, schools, churches, businesses, and organizations -- powered by SassyDame. You sell, we print and ship.",
  howItWorksHeading = "How It Works",
  howItWorksDescription = "From idea to live storefront in as little as one week",
  featuresHeading = "What You Get",
  featuresDescription = "A fully managed storefront -- we handle the hard parts so you can focus on your brand",
  useCasesHeading = "Built For Everyone",
  useCasesDescription = "Whether you run a team, a school, a church, or a business -- we have you covered",
  ctaHeading = "Ready to Launch Your Store?",
  ctaDescription = "Let us build a custom-branded storefront for your organization. No inventory, no risk, no hassle -- just sales.",
}: StorefrontPageProps) {
  return (
    <main className="flex-1">
      <StorefrontHero heroHeading={heading} heroHeadingHighlight={headingHighlight} heroDescription={description} />
      <HowItWorks sectionHeading={howItWorksHeading} sectionDescription={howItWorksDescription} />
      <Features sectionHeading={featuresHeading} sectionDescription={featuresDescription} />
      <UseCases sectionHeading={useCasesHeading} sectionDescription={useCasesDescription} />
      <StorefrontCTA ctaHeading={ctaHeading} ctaDescription={ctaDescription} />
      {content && typeof content === "function" && content({})}
</main>
  );
}
