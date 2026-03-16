'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Layers, Palette, Zap, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { GlowingBorder } from './effects/glowing-border'
import { DropZone } from "@puckeditor/core";

const featureIcons = [Layers, Palette, Zap]
const featureColors = [
  'text-sassy-teal bg-sassy-teal/15',
  'text-sassy-periwinkle bg-sassy-periwinkle/15',
  'text-sassy-gold bg-sassy-gold/15',
]

export function DTFPromoSection({
  badgeText = "DTF Builder",
  headingLine1 = "Design Your Own",
  headingLine2 = "Gang Sheets",
  description = "Our easy-to-use DTF Builder lets you create custom gang sheets with your designs. Perfect for small businesses, crafters, and anyone who wants professional DTF transfers.",
  benefit1 = "No minimum order quantity",
  benefit2 = "Premium DTF transfer quality",
  benefit3 = "Fast turnaround times",
  benefit4 = "Satisfaction guaranteed",
  buttonText = "Try DTF Builder",
  buttonLink = "/dtf-builder",
  feature1Title = "Build Custom Gang Sheets",
  feature1Description = "Maximize your transfer material by arranging multiple designs on a single sheet",
  feature2Title = "Upload Your Designs",
  feature2Description = "Support for PNG, SVG, and other popular formats with transparent backgrounds",
  feature3Title = "Instant Pricing",
  feature3Description = "See your costs in real-time as you build your perfect gang sheet",
}: {
  badgeText?: string;
  headingLine1?: string;
  headingLine2?: string;
  description?: string;
  benefit1?: string;
  benefit2?: string;
  benefit3?: string;
  benefit4?: string;
  buttonText?: string;
  buttonLink?: string;
  feature1Title?: string;
  feature1Description?: string;
  feature2Title?: string;
  feature2Description?: string;
  feature3Title?: string;
  feature3Description?: string;
}) {
  const benefits = [benefit1, benefit2, benefit3, benefit4]
  const features = [
    { title: feature1Title, description: feature1Description },
    { title: feature2Title, description: feature2Description },
    { title: feature3Title, description: feature3Description },
  ]

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-3 py-1 rounded-full bg-sassy-teal/15 text-sassy-teal text-sm font-medium mb-4">
                {badgeText}
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                {headingLine1}
                <span className="block bg-gradient-to-r from-sassy-lime via-sassy-sky to-sassy-periwinkle bg-clip-text text-transparent">{headingLine2}</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-lg">
                {description}
              </p>

              {/* Benefits List */}
              <ul className="space-y-3 mb-8">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="h-5 w-5 text-sassy-lime flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </motion.li>
                ))}
              </ul>

              <Button size="lg" className="group bg-sassy-lime hover:bg-sassy-lime/90 text-foreground">
                {buttonText}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>

          {/* Right Content - Feature Cards */}
          <div className="space-y-4">
            {features.map((feature, index) => {
              const Icon = featureIcons[index]
              const color = featureColors[index]
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                >
                  <GlowingBorder animate={false} containerClassName="hover:shadow-lg transition-shadow">
                    <div className="p-6 flex items-start gap-4">
                      <div className={`h-12 w-12 rounded-lg ${color} flex items-center justify-center flex-shrink-0`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">{feature.title}</h3>
                        <p className="text-muted-foreground text-sm">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </GlowingBorder>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Puck: Editable content slot */}
      <DropZone zone="content" />
    </section>
  )
}
