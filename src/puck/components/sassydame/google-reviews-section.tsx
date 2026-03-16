'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, Quote, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { DropZone } from "@puckeditor/core";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < rating ? 'fill-sassy-gold text-sassy-gold' : 'fill-muted text-muted'
          }`}
        />
      ))}
    </div>
  )
}

export function GoogleReviewsSection({
  ratingValue = "4.9",
  reviewCountText = "(127 reviews)",
  headingPrefix = "What Our",
  headingHighlight = "Customers Say",
  subheading = "Real reviews from real crafters in our community",
  review1Text = "Absolutely love this shop! The DTF transfers are top quality and the staff is incredibly helpful. They helped me design my first gang sheet and it came out perfect!",
  review1Author = "Sarah M.",
  review1Date = "2 weeks ago",
  review2Text = "Best craft store in the area! Took a sublimation class here and learned so much. The instructors are patient and knowledgeable. Will definitely be back for more workshops.",
  review2Author = "Marcus J.",
  review2Date = "1 month ago",
  review3Text = "The UV stickers I ordered exceeded my expectations! Great color vibrancy and they shipped super fast. Customer service was excellent when I had questions.",
  review3Author = "Jennifer L.",
  review3Date = "3 weeks ago",
  review4Text = "Rented their studio space for a craft party and it was amazing! Everything was set up and ready to go. The kids had a blast and the staff was so accommodating.",
  review4Author = "David R.",
  review4Date = "1 month ago",
  review5Text = "My go-to for all crafting supplies! The blanks are high quality and prices are fair. Love supporting this local business - they truly care about their customers.",
  review5Author = "Ashley K.",
  review5Date = "2 months ago",
  review6Text = "Started my small t-shirt business thanks to SassyDame! They taught me everything about DTF printing and always have the supplies I need in stock.",
  review6Author = "Michael T.",
  review6Date = "1 month ago",
  reviewButtonText = "Leave Us a Review",
  reviewButtonLink = "https://g.page/r/YOUR_GOOGLE_PLACE_ID/review",
}: {
  ratingValue?: string;
  reviewCountText?: string;
  headingPrefix?: string;
  headingHighlight?: string;
  subheading?: string;
  review1Text?: string;
  review1Author?: string;
  review1Date?: string;
  review2Text?: string;
  review2Author?: string;
  review2Date?: string;
  review3Text?: string;
  review3Author?: string;
  review3Date?: string;
  review4Text?: string;
  review4Author?: string;
  review4Date?: string;
  review5Text?: string;
  review5Author?: string;
  review5Date?: string;
  review6Text?: string;
  review6Author?: string;
  review6Date?: string;
  reviewButtonText?: string;
  reviewButtonLink?: string;
}) {
  const demoReviews = [
    { id: '1', author: review1Author, rating: 5, text: review1Text, date: review1Date, avatar: review1Author.charAt(0) },
    { id: '2', author: review2Author, rating: 5, text: review2Text, date: review2Date, avatar: review2Author.charAt(0) },
    { id: '3', author: review3Author, rating: 5, text: review3Text, date: review3Date, avatar: review3Author.charAt(0) },
    { id: '4', author: review4Author, rating: 5, text: review4Text, date: review4Date, avatar: review4Author.charAt(0) },
    { id: '5', author: review5Author, rating: 5, text: review5Text, date: review5Date, avatar: review5Author.charAt(0) },
    { id: '6', author: review6Author, rating: 5, text: review6Text, date: review6Date, avatar: review6Author.charAt(0) },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const reviewsPerPage = 3

  // Auto-advance carousel
  useEffect(() => {
    if (!isAutoPlaying) return
    const timer = setInterval(() => {
      setCurrentIndex((prev) =>
        (prev + 1) % Math.ceil(demoReviews.length / reviewsPerPage)
      )
    }, 5000)
    return () => clearInterval(timer)
  }, [isAutoPlaying])

  const maxIndex = Math.ceil(demoReviews.length / reviewsPerPage) - 1
  const visibleReviews = demoReviews.slice(
    currentIndex * reviewsPerPage,
    (currentIndex + 1) * reviewsPerPage
  )

  return (
    <section className="py-20 bg-gradient-to-b from-sassy-periwinkle/10 via-background to-sassy-teal/10">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          {/* Google Rating Badge */}
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-card border mb-6">
            <svg viewBox="0 0 24 24" className="h-6 w-6" aria-label="Google">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            <div className="flex items-center gap-2">
              <span className="font-bold text-lg">{ratingValue}</span>
              <StarRating rating={5} />
              <span className="text-muted-foreground text-sm">{reviewCountText}</span>
            </div>
          </div>

          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {headingPrefix}{' '}
            <span className="bg-gradient-to-r from-sassy-gold via-sassy-orange to-sassy-coral bg-clip-text text-transparent">
              {headingHighlight}
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {subheading}
          </p>
        </motion.div>

        {/* Reviews Carousel */}
        <div
          className="relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
            >
              {visibleReviews.map((review, index) => (
                <motion.div
                  key={review.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-card rounded-2xl p-6 border border-border shadow-sm hover:shadow-lg transition-shadow"
                >
                  {/* Quote Icon */}
                  <Quote className="h-8 w-8 text-sassy-lime/30 mb-4" />

                  {/* Review Text */}
                  <p className="text-foreground mb-6 line-clamp-4">
                    {review.text}
                  </p>

                  {/* Rating */}
                  <StarRating rating={review.rating} />

                  {/* Author Info */}
                  <div className="flex items-center gap-3 mt-4 pt-4 border-t">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-sassy-teal to-sassy-periwinkle flex items-center justify-center text-white font-semibold">
                      {review.avatar}
                    </div>
                    <div>
                      <div className="font-medium">{review.author}</div>
                      <div className="text-sm text-muted-foreground">{review.date}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
              disabled={currentIndex === 0}
              className="rounded-full border-sassy-teal text-sassy-teal hover:bg-sassy-teal hover:text-white disabled:opacity-50"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {[...Array(maxIndex + 1)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === currentIndex
                      ? 'w-8 bg-sassy-teal'
                      : 'w-2 bg-muted hover:bg-muted-foreground'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={() => setCurrentIndex(prev => Math.min(maxIndex, prev + 1))}
              disabled={currentIndex === maxIndex}
              className="rounded-full border-sassy-teal text-sassy-teal hover:bg-sassy-teal hover:text-white disabled:opacity-50"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* CTA to leave review */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Button
            variant="outline"
            className="border-sassy-gold text-sassy-gold hover:bg-sassy-gold hover:text-foreground"
          >
            <a
              href={reviewButtonLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              {reviewButtonText}
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </motion.div>

        {/* Puck: Editable content slot */}
        <DropZone zone="content" />
      </div>
    </section>
  )
}
