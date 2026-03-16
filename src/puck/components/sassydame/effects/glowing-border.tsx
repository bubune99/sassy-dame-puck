'use client'

import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

interface GlowingBorderProps {
  children: React.ReactNode
  className?: string
  containerClassName?: string
  animate?: boolean
}

export function GlowingBorder({
  children,
  className,
  containerClassName,
  animate = true,
}: GlowingBorderProps) {
  return (
    <div className={cn('relative p-[2px] group', containerClassName)}>
      <motion.div
        className={cn(
          'absolute inset-0 rounded-xl bg-gradient-to-r from-primary via-secondary to-accent',
          animate && 'animate-gradient'
        )}
        initial={{ opacity: 0.5 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
      <div
        className={cn(
          'relative rounded-[10px] bg-card',
          className
        )}
      >
        {children}
      </div>
    </div>
  )
}
