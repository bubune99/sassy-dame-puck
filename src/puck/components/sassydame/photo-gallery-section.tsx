'use client'

import React from 'react';

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, Instagram, Camera } from 'lucide-react'
import { Button } from '@/components/ui/button'
// Demo gallery images - these would come from Instagram API or CMS in production
const galleryImages = [
  { id: '1', alt: 'Custom DTF transfer on a t-shirt', category: 'dtf' },
  { id: '2', alt: 'Workshop in progress', category: 'workshop' },
  { id: '3', alt: 'UV sticker collection', category: 'uv' },
  { id: '4', alt: 'Custom tumbler design', category: 'tumbler' },
  { id: '5', alt: 'Heat press in action', category: 'dtf' },
  { id: '6', alt: 'Craft party event', category: 'workshop' },
  { id: '7', alt: 'Custom hoodie design', category: 'dtf' },
  { id: '8', alt: 'Sublimation blanks', category: 'blanks' },
]

// Placeholder colors for demo (when images don't exist)
const placeholderColors = [
  'from-sassy-coral/50 to-sassy-fuchsia/50',
  'from-sassy-teal/50 to-sassy-sky/50',
  'from-sassy-lime/50 to-sassy-gold/50',
  'from-sassy-periwinkle/50 to-sassy-fuchsia/50',
  'from-sassy-gold/50 to-sassy-orange/50',
  'from-sassy-sky/50 to-sassy-teal/50',
  'from-sassy-rose/50 to-sassy-coral/50',
  'from-sassy-orange/50 to-sassy-lime/50',
]

export function PhotoGallerySection({
  content,
  badgeText = "Gallery",
  headingPrefix = "See What We",
  headingHighlight = "Create",
  subheading = "Browse our gallery of custom creations, workshop moments, and happy customers",
  cat1Label = "All",
  cat2Label = "DTF Prints",
  cat3Label = "UV Stickers",
  cat4Label = "Workshops",
  cat5Label = "Tumblers",
  cat6Label = "Blanks",
  instagramText = "Follow us for daily inspiration and behind-the-scenes content",
  instagramHandle = "@SassyDameDesigns",
  instagramLink = "https://www.instagram.com/sassydamedesigns/",
}: {
  content?: React.FC;
  badgeText?: string;
  headingPrefix?: string;
  headingHighlight?: string;
  subheading?: string;
  cat1Label?: string;
  cat2Label?: string;
  cat3Label?: string;
  cat4Label?: string;
  cat5Label?: string;
  cat6Label?: string;
  instagramText?: string;
  instagramHandle?: string;
  instagramLink?: string;
}) {
  const categories = [
    { id: 'all', label: cat1Label },
    { id: 'dtf', label: cat2Label },
    { id: 'uv', label: cat3Label },
    { id: 'workshop', label: cat4Label },
    { id: 'tumbler', label: cat5Label },
    { id: 'blanks', label: cat6Label },
  ]

  const [selectedCategory, setSelectedCategory] = useState('all')
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const filteredImages = selectedCategory === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory)

  const openLightbox = (index: number) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => setLightboxOpen(false)

  const nextImage = () => {
    setLightboxIndex((prev) => (prev + 1) % filteredImages.length)
  }

  const prevImage = () => {
    setLightboxIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length)
  }

  return (
    <section className="py-20 bg-gradient-to-b from-background via-sassy-coral/10 to-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sassy-coral/15 text-sassy-coral text-sm font-medium mb-4">
            <Camera className="h-4 w-4" />
            {badgeText}
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {headingPrefix}{' '}
            <span className="bg-gradient-to-r from-sassy-lime via-sassy-teal to-sassy-periwinkle bg-clip-text text-transparent">
              {headingHighlight}
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {subheading}
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap items-center justify-center gap-2 mb-10"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === category.id
                  ? 'bg-sassy-teal text-white'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid - Masonry-style */}
        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className={`relative cursor-pointer group overflow-hidden rounded-xl ${
                  index % 5 === 0 ? 'md:col-span-2 md:row-span-2' : ''
                }`}
                onClick={() => openLightbox(index)}
              >
                <div className={`aspect-square bg-gradient-to-br ${placeholderColors[index % placeholderColors.length]} relative`}>
                  {/* Placeholder content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white/80">
                    <Camera className="h-8 w-8 mb-2 opacity-50" />
                    <span className="text-xs opacity-50 text-center px-2">{image.alt}</span>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-foreground/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="text-white text-center p-4">
                      <p className="text-sm font-medium">{image.alt}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Instagram CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            {instagramText}
          </p>
          <Button
            className="bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] hover:opacity-90 text-white"
          >
            <a
              href={instagramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <Instagram className="mr-2 h-5 w-5" />
              Follow {instagramHandle}
            </a>
          </Button>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Close button */}
            <button
              className="absolute top-4 right-4 text-white/80 hover:text-white p-2"
              onClick={closeLightbox}
            >
              <X className="h-8 w-8" />
            </button>

            {/* Navigation */}
            <button
              className="absolute left-4 text-white/80 hover:text-white p-2"
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
            >
              <ChevronLeft className="h-10 w-10" />
            </button>
            <button
              className="absolute right-4 text-white/80 hover:text-white p-2"
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
            >
              <ChevronRight className="h-10 w-10" />
            </button>

            {/* Image */}
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="max-w-4xl max-h-[80vh] relative"
              onClick={(e) => e.stopPropagation()}
            >
              <div className={`aspect-square w-96 h-96 bg-gradient-to-br ${placeholderColors[lightboxIndex % placeholderColors.length]} rounded-lg flex items-center justify-center`}>
                <div className="text-white text-center p-8">
                  <Camera className="h-16 w-16 mx-auto mb-4 opacity-50" />
                  <p className="text-lg">{filteredImages[lightboxIndex]?.alt}</p>
                </div>
              </div>
            </motion.div>

            {/* Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/80 text-sm">
              {lightboxIndex + 1} / {filteredImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {content && typeof content === "function" && content({})}
</section>
  )
}
