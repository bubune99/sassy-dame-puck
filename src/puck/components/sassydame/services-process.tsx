'use client'

import { motion } from 'framer-motion'
import { Phone, Shield, Zap, Truck } from 'lucide-react'
import { SpotlightCard } from './effects/spotlight-card'
import { cn } from '@/lib/utils'
import { DropZone } from "@puckeditor/core";

export interface ServicesProcessProps {
  heading?: string;
  headingHighlight?: string;
  subheading?: string;
  step1Title?: string;
  step1Description?: string;
  step2Title?: string;
  step2Description?: string;
  step3Title?: string;
  step3Description?: string;
  step4Title?: string;
  step4Description?: string;
}

export function ServicesProcess({
  heading = "How It",
  headingHighlight = "Works",
  subheading = "Simple, transparent, professional",
  step1Title = "Get a Quote",
  step1Description = "Tell us your needs -- we respond with a custom quote within 24 hours.",
  step2Title = "Approve Proof",
  step2Description = "We send a digital proof for your review and approval before production.",
  step3Title = "We Produce",
  step3Description = "Expert printing, quality control, and careful packaging for every order.",
  step4Title = "You Receive",
  step4Description = "Fast shipping, local pickup, or blind drop-ship directly to your customer.",
}: ServicesProcessProps) {
  const steps = [
    { num: '01', title: step1Title, desc: step1Description, icon: Phone },
    { num: '02', title: step2Title, desc: step2Description, icon: Shield },
    { num: '03', title: step3Title, desc: step3Description, icon: Zap },
    { num: '04', title: step4Title, desc: step4Description, icon: Truck },
  ]

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            {heading} <span className="text-sassy-gold">{headingHighlight}</span>
          </h2>
          <p className="text-muted-foreground text-lg">{subheading}</p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-sassy-gold via-sassy-orange to-sassy-coral" />

          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={cn(
                'relative flex items-center gap-8 mb-12 md:mb-16',
                i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              )}
            >
              {/* Content */}
              <div className={cn('flex-1', i % 2 === 0 ? 'md:text-right' : 'md:text-left')}>
                <SpotlightCard spotlightColor="rgba(234, 179, 8, 0.1)" className="rounded-2xl inline-block max-w-sm">
                  <div className="p-6">
                    <div className="text-xs font-bold text-sassy-gold/50 mb-2">STEP {step.num}</div>
                    <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.desc}</p>
                  </div>
                </SpotlightCard>
              </div>

              {/* Center dot */}
              <div className="hidden md:flex w-12 h-12 rounded-full bg-background border-2 border-sassy-gold items-center justify-center z-10 shrink-0">
                <step.icon className="h-5 w-5 text-sassy-gold" />
              </div>

              {/* Spacer */}
              <div className="hidden md:block flex-1" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Puck: Editable content slot */}
      <DropZone zone="content" />
    </section>
  )
}
