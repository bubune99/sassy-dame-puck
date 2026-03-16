'use client'

import { motion } from 'framer-motion'
import {
  Printer,
  Package,
  Layers,
  Zap,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { DropZone } from "@puckeditor/core";

export function DtfHowItWorks() {
  const steps = [
    { num: '01', title: 'Upload Your Design', desc: 'PNG, SVG, PDF -- we handle any format. Just drag and drop.', icon: Layers, color: 'text-sassy-teal' },
    { num: '02', title: 'Build Your Gang Sheet', desc: 'Arrange multiple designs on one sheet. Maximize space, minimize cost.', icon: Package, color: 'text-sassy-periwinkle' },
    { num: '03', title: 'We Print Same-Day', desc: 'Orders before 12pm Eastern are printed and shipped the same day.', icon: Printer, color: 'text-sassy-lime' },
    { num: '04', title: 'Heat Press & Done', desc: 'Apply your transfers at home or in our studio. Vibrant, lasting results.', icon: Zap, color: 'text-sassy-coral' },
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
            How It <span className="text-sassy-teal">Works</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            From design to finished product in four simple steps
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

      {/* Puck: Editable content slot */}
      <DropZone zone="content" />
    </section>
  )
}
