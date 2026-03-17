'use client'

import React from 'react';

import { motion } from 'framer-motion'
import {
  Printer,
  Package,
  Layers,
  Zap,
} from 'lucide-react'
import { cn } from '@/lib/utils'
export interface DtfHowItWorksProps {
  content?: React.FC;
  puck?: { isEditing?: boolean };
  sectionHeading: string;
  sectionHeadingHighlight: string;
  sectionSubheading: string;
  step1Title: string;
  step1Desc: string;
  step2Title: string;
  step2Desc: string;
  step3Title: string;
  step3Desc: string;
  step4Title: string;
  step4Desc: string;
}

export function DtfHowItWorks({
  content,
  puck,
  sectionHeading = 'How It',
  sectionHeadingHighlight = 'Works',
  sectionSubheading = 'From design to finished product in four simple steps',
  step1Title = 'Upload Your Design',
  step1Desc = 'PNG, SVG, PDF -- we handle any format. Just drag and drop.',
  step2Title = 'Build Your Gang Sheet',
  step2Desc = 'Arrange multiple designs on one sheet. Maximize space, minimize cost.',
  step3Title = 'We Print Same-Day',
  step3Desc = 'Orders before 12pm Eastern are printed and shipped the same day.',
  step4Title = 'Heat Press & Done',
  step4Desc = 'Apply your transfers at home or in our studio. Vibrant, lasting results.',
}: DtfHowItWorksProps) {
  const steps = [
    { num: '01', title: step1Title, desc: step1Desc, icon: Layers, color: 'text-sassy-teal' },
    { num: '02', title: step2Title, desc: step2Desc, icon: Package, color: 'text-sassy-periwinkle' },
    { num: '03', title: step3Title, desc: step3Desc, icon: Printer, color: 'text-sassy-lime' },
    { num: '04', title: step4Title, desc: step4Desc, icon: Zap, color: 'text-sassy-coral' },
  ]

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.06]" style={{
        backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)',
        backgroundSize: '24px 24px',
      }} />

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-foreground">
            {sectionHeading} <span className="text-sassy-teal">{sectionHeadingHighlight}</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            {sectionSubheading}
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-4 gap-0 relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-[2px] bg-gradient-to-r from-sassy-teal via-sassy-sky to-sassy-fuchsia opacity-60" />

            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative text-center px-4"
              >
                {/* Step circle */}
                <div className="relative z-10 mx-auto mb-6">
                  <div className={cn(
                    'w-24 h-24 rounded-full border-2 border-dashed flex items-center justify-center mx-auto bg-card backdrop-blur-sm',
                    step.color.replace('text-', 'border-')
                  )}>
                    <step.icon className={cn('h-10 w-10', step.color)} />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white text-[#0a1628] flex items-center justify-center text-xs font-bold">
                    {step.num}
                  </div>
                </div>

                <h3 className="font-semibold text-lg mb-2 text-white">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      {content && typeof content === "function" && content({})}
</section>
  )
}
