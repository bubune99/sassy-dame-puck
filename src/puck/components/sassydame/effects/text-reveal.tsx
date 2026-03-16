'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface TextRevealProps {
  text: string
  className?: string
  delay?: number
  staggerDelay?: number
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span'
}

export function TextReveal({
  text,
  className,
  delay = 0,
  staggerDelay = 0.03,
  as: Component = 'span',
}: TextRevealProps) {
  const words = text.split(' ')

  return (
    <Component className={cn('inline-block', className)}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block whitespace-nowrap">
          {word.split('').map((char, charIndex) => (
            <motion.span
              key={charIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: delay + (wordIndex * word.length + charIndex) * staggerDelay,
                ease: [0.25, 0.4, 0.25, 1],
              }}
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
          {wordIndex < words.length - 1 && (
            <span className="inline-block">&nbsp;</span>
          )}
        </span>
      ))}
    </Component>
  )
}

interface TextFadeInProps {
  children: React.ReactNode
  className?: string
  delay?: number
  duration?: number
}

export function TextFadeIn({
  children,
  className,
  delay = 0,
  duration = 0.6,
}: TextFadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.4, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
