'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Package, Truck, BadgeCheck, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { DropZone } from "@puckeditor/core";

const benefitIcons = [Truck, Package, BadgeCheck, Clock]

export function ProductsCTASection({
  product1Title = "DTF + UV Bundle Packs",
  product1Description = "Save big with our curated bundles perfect for beginners and pros alike",
  product1Tag = "Best Value",
  product2Title = "Seasonal Collection",
  product2Description = "Trending designs for holidays, sports seasons, and special occasions",
  product2Tag = "New Arrivals",
  benefit1Title = "Same Day Processing",
  benefit1Description = "Orders before 12pm EST ship same day",
  benefit2Title = "Free Local Pickup",
  benefit2Description = "Save on shipping - pick up in store",
  benefit3Title = "Quality Guaranteed",
  benefit3Description = "100% satisfaction on all products",
  benefit4Title = "Fast Turnaround",
  benefit4Description = "Quick production on custom orders",
  bottomButtonText = "View All Products",
  bottomButtonLink = "/products",
}: {
  product1Title?: string;
  product1Description?: string;
  product1Tag?: string;
  product2Title?: string;
  product2Description?: string;
  product2Tag?: string;
  benefit1Title?: string;
  benefit1Description?: string;
  benefit2Title?: string;
  benefit2Description?: string;
  benefit3Title?: string;
  benefit3Description?: string;
  benefit4Title?: string;
  benefit4Description?: string;
  bottomButtonText?: string;
  bottomButtonLink?: string;
}) {
  const productHighlights = [
    {
      title: product1Title,
      description: product1Description,
      gradient: 'from-sassy-teal to-sassy-periwinkle',
      tag: product1Tag,
    },
    {
      title: product2Title,
      description: product2Description,
      gradient: 'from-sassy-coral to-sassy-orange',
      tag: product2Tag,
    },
  ]

  const benefits = [
    { title: benefit1Title, description: benefit1Description },
    { title: benefit2Title, description: benefit2Description },
    { title: benefit3Title, description: benefit3Description },
    { title: benefit4Title, description: benefit4Description },
  ]

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-sassy-lime/15 via-transparent to-sassy-teal/15" />
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-sassy-coral/15 to-transparent" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-sassy-fuchsia/10 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Product Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {productHighlights.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div
                className="group block relative overflow-hidden rounded-3xl p-8 md:p-12 min-h-[280px] flex flex-col justify-end cursor-pointer"
              >
                {/* Gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-90 group-hover:opacity-100 transition-opacity`} />

                {/* Content */}
                <div className="relative z-10 text-white">
                  <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-sm font-medium mb-4">
                    {product.tag}
                  </span>
                  <h3 className="font-serif text-2xl md:text-3xl font-bold mb-3">
                    {product.title}
                  </h3>
                  <p className="text-white/90 mb-6 max-w-md">
                    {product.description}
                  </p>
                  <div className="flex items-center font-medium">
                    Shop Now
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-32 h-32 rounded-full bg-white/10 blur-2xl" />
                <div className="absolute bottom-4 left-4 w-24 h-24 rounded-full bg-white/10 blur-xl" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Benefits Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-card rounded-2xl border shadow-lg p-6 md:p-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefitIcons[index]
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-sassy-lime/15 text-sassy-lime mb-3">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h4 className="font-semibold text-sm md:text-base mb-1">{benefit.title}</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">{benefit.description}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Button size="lg" className="bg-sassy-lime hover:bg-sassy-lime/90 text-foreground">
            {bottomButtonText}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>

      {/* Puck: Editable content slot */}
      <DropZone zone="content" />
    </section>
  )
}
