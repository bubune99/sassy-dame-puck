'use client'

import React from 'react'
import { Printer, Sparkles, Shirt, Calendar, Paintbrush } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
// Animation variants for the container to stagger children
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

// Animation variants for each grid item
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 10,
    },
  },
}

function BentoCard({
  icon: Icon,
  title,
  description,
  color,
  bgColor,
  className,
}: {
  content?: React.FC;
  puck?: { isEditing?: boolean };
  icon: React.ElementType
  title: string
  description: string
  color: string
  bgColor: string
  className?: string
}) {
  return (
    <div
      className={cn(
        'group flex flex-col justify-between h-full rounded-2xl border border-border p-6 bg-card hover:shadow-lg transition-all cursor-pointer',
        className
      )}
    >
      <div>
        <div className={cn('w-12 h-12 rounded-xl flex items-center justify-center mb-4', bgColor, color)}>
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      <span className={cn('mt-4 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity', color)}>
        Learn more &rarr;
      </span>
    </div>
  )
}

function StatCard({
  value,
  label,
  color,
}: {
  content?: React.FC;
  value: string
  label: string
  color: string
}) {
  return (
    <div className="flex flex-col items-center justify-center h-full rounded-2xl border border-border p-6 bg-card text-center">
      <div className={cn('text-5xl font-bold mb-2', color)}>{value}</div>
      <div className="text-muted-foreground">{label}</div>
    </div>
  )
}

export function BentoFeatures({
  content,
  puck,
  badgeText = "What We Offer",
  headingPrefix = "Your One-Stop",
  headingHighlight = "Craft Shop",
  card1Title = "UV Stickers",
  card1Description = "Premium UV-printed stickers and decals with stunning detail",
  mainFeatureTitle = "DTF Builder Tool",
  mainFeatureDescription = "Design custom gang sheets with our intuitive builder. Upload your artwork, arrange transfers, and order in minutes.",
  mainFeatureButtonText = "Start Building",
  card2Title = "Custom Apparel",
  card2Description = "Personalized shirts, hoodies, and more with your designs",
  card3Title = "Craft Blanks",
  card3Description = "High-quality blanks for sublimation, HTV, and more",
  statValue = "4.9",
  statLabel = "Google Rating from 500+ Reviews",
  card4Title = "Classes & Events",
  card4Description = "Learn new skills with hands-on workshops",
}: {
  content?: React.FC;
  badgeText?: string;
  headingPrefix?: string;
  headingHighlight?: string;
  card1Title?: string;
  card1Description?: string;
  mainFeatureTitle?: string;
  mainFeatureDescription?: string;
  mainFeatureButtonText?: string;
  card2Title?: string;
  card2Description?: string;
  card3Title?: string;
  card3Description?: string;
  statValue?: string;
  statLabel?: string;
  card4Title?: string;
  card4Description?: string;
}) {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-sassy-teal/15 text-sassy-teal text-sm font-medium mb-4">
            {badgeText}
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {headingPrefix}{' '}
            <span className="bg-gradient-to-r from-sassy-teal via-sassy-sky to-sassy-fuchsia bg-clip-text text-transparent">
              {headingHighlight}
            </span>
          </h2>
        </div>

        <div className="max-w-6xl mx-auto">
          <motion.section
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid w-full grid-cols-1 gap-6 md:grid-cols-3 md:grid-rows-3 auto-rows-[minmax(200px,auto)]"
          >
            {/* Slot 1: UV Stickers */}
            <motion.div variants={itemVariants} className="md:col-span-1 md:row-span-1">
              <BentoCard
                icon={Sparkles}
                title={card1Title}
                description={card1Description}
                color="text-sassy-periwinkle"
                bgColor="bg-sassy-periwinkle/15"
              />
            </motion.div>

            {/* Slot 2: Main Feature - Spans 3 rows */}
            <motion.div variants={itemVariants} className="md:col-span-1 md:row-span-3">
              <div className="flex flex-col items-center justify-center h-full rounded-2xl border border-border p-8 bg-gradient-to-b from-sassy-teal/10 to-sassy-lime/10 text-center">
                <Printer className="h-16 w-16 text-sassy-teal mb-6" />
                <h3 className="font-serif text-2xl font-bold mb-3">{mainFeatureTitle}</h3>
                <p className="text-muted-foreground mb-6 max-w-xs">
                  {mainFeatureDescription}
                </p>
                <Button className="bg-sassy-teal hover:bg-sassy-teal/90 text-white">
                  {mainFeatureButtonText}
                </Button>
              </div>
            </motion.div>

            {/* Slot 3: Custom Apparel */}
            <motion.div variants={itemVariants} className="md:col-span-1 md:row-span-1">
              <BentoCard
                icon={Shirt}
                title={card2Title}
                description={card2Description}
                color="text-sassy-coral"
                bgColor="bg-sassy-coral/15"
              />
            </motion.div>

            {/* Slot 4: Craft Blanks */}
            <motion.div variants={itemVariants} className="md:col-span-1 md:row-span-1">
              <BentoCard
                icon={Paintbrush}
                title={card3Title}
                description={card3Description}
                color="text-sassy-lime"
                bgColor="bg-sassy-lime/15"
              />
            </motion.div>

            {/* Slot 5: Statistic - Spans 2 rows */}
            <motion.div variants={itemVariants} className="md:col-span-1 md:row-span-2">
              <StatCard value={statValue} label={statLabel} color="text-sassy-gold" />
            </motion.div>

            {/* Slot 6: Classes & Events */}
            <motion.div variants={itemVariants} className="md:col-span-1 md:row-span-1">
              <BentoCard
                icon={Calendar}
                title={card4Title}
                description={card4Description}
                color="text-sassy-gold"
                bgColor="bg-sassy-gold/15"
              />
            </motion.div>
          </motion.section>
        </div>

      </div>
      {content && typeof content === "function" && content({})}
</section>
  )
}
