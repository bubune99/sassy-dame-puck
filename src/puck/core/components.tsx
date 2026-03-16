'use client';

import React from 'react';
import { cn } from '../../lib/utils';

/**
 * Core Puck Components
 *
 * Generalized, themeable components for building landing pages.
 * All components accept color/font props for brand customization.
 */

// ============ FULL HERO ============
export interface FullHeroProps {
  title: string;
  subtitle?: string;
  tagline?: string;
  backgroundImage: string;
  ctaText?: string;
  ctaUrl?: string;
  alignment?: 'left' | 'center' | 'right';
  overlayColor?: string;
  overlayOpacity?: number;
  ctaColor?: string;
  headingFont?: string;
  accentFont?: string;
  height?: 'medium' | 'large' | 'full';
}

export function FullHero({
  title,
  subtitle,
  tagline,
  backgroundImage,
  ctaText,
  ctaUrl = '#',
  alignment = 'left',
  overlayColor = '#022b39',
  overlayOpacity = 60,
  ctaColor = '#d88535',
  headingFont = "'Poppins', sans-serif",
  accentFont = "'Fredoka One', cursive",
  height = 'large',
}: FullHeroProps) {
  const heights = {
    medium: 'py-24',
    large: 'py-40',
    full: 'min-h-screen py-20',
  };

  const alignmentClasses = {
    left: 'ml-[5%] text-left',
    center: 'mx-auto text-center',
    right: 'mr-[5%] ml-auto text-right',
  };

  return (
    <section
      data-puck-component="FullHero"
      className={cn('relative text-white', heights[height])}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(to right, ${overlayColor}cc 0%, ${overlayColor}88 50%, ${overlayColor}44 100%)`,
          opacity: overlayOpacity / 100,
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className={cn('max-w-3xl', alignmentClasses[alignment])}>
          <h1
            className="text-5xl md:text-6xl font-extrabold mb-4"
            style={{
              fontFamily: headingFont,
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
            }}
          >
            {title}
          </h1>
          {subtitle && (
            <h2
              className="text-2xl md:text-3xl mb-4"
              style={{
                fontFamily: accentFont,
                textShadow: '1px 1px 3px rgba(0, 0, 0, 0.5)',
              }}
            >
              {subtitle}
            </h2>
          )}
          {tagline && (
            <p
              className="text-xl mb-8"
              style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }}
            >
              {tagline}
            </p>
          )}
          {ctaText && (
            <a
              href={ctaUrl}
              className="inline-block px-8 py-3 rounded font-semibold uppercase tracking-wider transition-all hover:-translate-y-0.5 hover:shadow-lg"
              style={{
                backgroundColor: ctaColor,
                fontFamily: accentFont,
              }}
            >
              {ctaText}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}

// ============ PAGE BANNER ============
export interface PageBannerProps {
  title: string;
  backgroundImage: string;
  overlayColor?: string;
  overlayOpacity?: number;
  titlePosition?: 'top-left' | 'center' | 'bottom-left';
  headingFont?: string;
  height?: 'medium' | 'large';
}

export function PageBanner({
  title,
  backgroundImage,
  overlayColor = '#022b39',
  overlayOpacity = 40,
  titlePosition = 'top-left',
  headingFont = "'Poppins', sans-serif",
  height = 'large',
}: PageBannerProps) {
  const heights = {
    medium: 'py-40',
    large: 'py-80',
  };

  const positions = {
    'top-left': 'top-8 left-[5%]',
    center: 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center',
    'bottom-left': 'bottom-8 left-[5%]',
  };

  return (
    <section
      data-puck-component="PageBanner"
      className={cn('relative text-white mb-12', heights[height])}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'right center',
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(to right, ${overlayColor}88 0%, ${overlayColor}44 50%, ${overlayColor}22 100%)`,
          opacity: overlayOpacity / 100,
        }}
      />
      <div className="container mx-auto px-4 relative z-10 h-full">
        <h1
          className={cn('text-4xl md:text-5xl font-extrabold absolute', positions[titlePosition])}
          style={{
            fontFamily: headingFont,
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
          }}
        >
          {title}
        </h1>
      </div>
    </section>
  );
}

// ============ CONTENT BLOCK ============
export interface ContentBlockProps {
  title: string;
  content: string;
  imageUrl: string;
  imageAlt?: string;
  imagePosition: 'left' | 'right';
  ctaText?: string;
  ctaUrl?: string;
  backgroundColor?: string;
  titleColor?: string;
  ctaColor?: string;
  accentColor?: string;
}

export function ContentBlock({
  title,
  content,
  imageUrl,
  imageAlt = '',
  imagePosition,
  ctaText,
  ctaUrl,
  backgroundColor = '#ffffff',
  titleColor = '#022b39',
  ctaColor = '#022b39',
  accentColor = '#d88535',
}: ContentBlockProps) {
  return (
    <section
      data-puck-component="ContentBlock"
      className="py-20"
      style={{ backgroundColor }}
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div
            className={cn(
              'overflow-hidden rounded-lg shadow-xl',
              imagePosition === 'right' && 'md:order-2'
            )}
          >
            <img
              src={imageUrl}
              alt={imageAlt || title}
              className="w-full h-auto transition-transform duration-500 hover:scale-105"
            />
          </div>

          <div className={imagePosition === 'right' ? 'md:order-1' : ''}>
            <h2
              className="text-3xl font-bold mb-6 pb-4 relative"
              style={{ color: titleColor }}
            >
              {title}
              <span
                className="absolute bottom-0 left-0 w-20 h-1"
                style={{ backgroundColor: accentColor }}
              />
            </h2>
            <div
              className="text-gray-700 leading-relaxed space-y-4"
              dangerouslySetInnerHTML={{ __html: content }}
            />
            {ctaText && ctaUrl && (
              <a
                href={ctaUrl}
                className="inline-block mt-6 px-6 py-3 rounded font-semibold text-white transition-all hover:-translate-y-1 hover:shadow-lg"
                style={{ backgroundColor: ctaColor }}
              >
                {ctaText}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// ============ STATS GRID ============
export interface StatItem {
  number: string;
  title: string;
  description: string;
}

export interface StatsGridProps {
  sectionTitle: string;
  sectionSubtitle?: string;
  featuredStat: StatItem;
  leftStats: StatItem[];
  rightStats: StatItem[];
  backgroundColor?: string;
  primaryColor?: string;
  accentColor?: string;
  accentFont?: string;
}

export function StatsGrid({
  sectionTitle,
  sectionSubtitle,
  featuredStat,
  leftStats,
  rightStats,
  backgroundColor = '#f5f8ff',
  primaryColor = '#022b39',
  accentColor = '#088cbc',
  accentFont = "'Fredoka One', cursive",
}: StatsGridProps) {
  const StatCard = ({ stat, featured = false }: { stat: StatItem; featured?: boolean }) => (
    <div
      className={cn(
        'rounded-lg p-6 transition-all hover:-translate-y-1 hover:shadow-xl',
        featured
          ? 'h-full flex flex-col justify-center scale-105 shadow-xl'
          : 'bg-white shadow-lg'
      )}
      style={featured ? { backgroundColor: primaryColor } : {}}
    >
      <div
        className={cn('text-4xl md:text-5xl font-bold mb-2', featured && 'text-white')}
        style={{ color: featured ? '#ffffff' : accentColor }}
      >
        {stat.number}
      </div>
      <div
        className={cn('text-lg font-semibold mb-3', featured ? 'text-white/90' : 'text-gray-800')}
      >
        {stat.title}
      </div>
      <p className={cn('text-sm', featured ? 'text-white/80' : 'text-gray-600')}>
        {stat.description}
      </p>
    </div>
  );

  return (
    <section data-puck-component="StatsGrid" className="py-20" style={{ backgroundColor }}>
      <div className="container mx-auto px-4">
        <h2
          className="text-3xl md:text-4xl font-bold text-center mb-4"
          style={{ color: primaryColor, fontFamily: accentFont }}
        >
          {sectionTitle}
        </h2>
        {sectionSubtitle && (
          <p className="text-center text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
            {sectionSubtitle}
          </p>
        )}

        <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
          <div className="flex-1 flex flex-col gap-8">
            {leftStats.map((stat, index) => (
              <StatCard key={`left-${index}`} stat={stat} />
            ))}
          </div>

          <div className="flex-1 lg:flex-[1.2]">
            <StatCard stat={featuredStat} featured />
          </div>

          <div className="flex-1 flex flex-col gap-8">
            {rightStats.map((stat, index) => (
              <StatCard key={`right-${index}`} stat={stat} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ============ MISSION BLOCK ============
export interface MissionBlockProps {
  title: string;
  content: string;
  primaryCtaText?: string;
  primaryCtaUrl?: string;
  secondaryCtaText?: string;
  secondaryCtaUrl?: string;
  titleColor?: string;
  primaryCtaColor?: string;
  secondaryCtaColor?: string;
  accentFont?: string;
}

export function MissionBlock({
  title,
  content,
  primaryCtaText,
  primaryCtaUrl,
  secondaryCtaText,
  secondaryCtaUrl,
  titleColor = '#022b39',
  primaryCtaColor = '#022b39',
  secondaryCtaColor = '#d88535',
  accentFont = "'Fredoka One', cursive",
}: MissionBlockProps) {
  return (
    <section data-puck-component="MissionBlock" className="py-16">
      <div className="container mx-auto px-4">
        <h2
          className="text-3xl md:text-4xl font-bold text-center mb-10"
          style={{ color: titleColor, fontFamily: accentFont }}
        >
          {title}
        </h2>
        <div
          className="max-w-3xl mx-auto text-center text-lg leading-relaxed text-gray-700"
          dangerouslySetInnerHTML={{ __html: content }}
        />
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
          {primaryCtaText && primaryCtaUrl && (
            <a
              href={primaryCtaUrl}
              className="px-8 py-3 rounded font-semibold text-white text-center transition-all hover:-translate-y-1 hover:shadow-lg"
              style={{ backgroundColor: primaryCtaColor }}
            >
              {primaryCtaText}
            </a>
          )}
          {secondaryCtaText && secondaryCtaUrl && (
            <a
              href={secondaryCtaUrl}
              className="px-8 py-3 rounded font-semibold text-white text-center transition-all hover:-translate-y-1 hover:shadow-lg"
              style={{ backgroundColor: secondaryCtaColor }}
            >
              {secondaryCtaText}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}

// ============ VIDEO EMBED ============
export interface VideoEmbedProps {
  videoUrl: string;
  maxWidth?: 'medium' | 'large' | 'full';
}

export function VideoEmbed({
  videoUrl,
  maxWidth = 'medium',
}: VideoEmbedProps) {
  const videoId = videoUrl.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&?]+)/)?.[1];
  const embedUrl = videoId ? `https://www.youtube.com/embed/${videoId}` : videoUrl;

  const maxWidths = {
    medium: 'max-w-3xl',
    large: 'max-w-5xl',
    full: 'max-w-full',
  };

  return (
    <section data-puck-component="VideoEmbed" className="py-8">
      <div className={cn('container mx-auto px-4', maxWidths[maxWidth])}>
        <div className="relative overflow-hidden rounded-lg" style={{ paddingTop: '56.25%' }}>
          <iframe
            src={embedUrl}
            title="Video"
            className="absolute inset-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}

// ============ NEWSLETTER ============
export interface NewsletterProps {
  title: string;
  placeholder?: string;
  buttonText?: string;
  titleColor?: string;
  buttonColor?: string;
  accentFont?: string;
}

export function Newsletter({
  title,
  placeholder = 'Enter your email',
  buttonText = 'Subscribe',
  titleColor = '#022b39',
  buttonColor = '#088cbc',
  accentFont = "'Fredoka One', cursive",
}: NewsletterProps) {
  return (
    <section data-puck-component="Newsletter" className="py-16 text-center">
      <div className="container mx-auto px-4">
        <h2
          className="text-2xl font-bold mb-6"
          style={{ fontFamily: accentFont, color: titleColor }}
        >
          {title}
        </h2>
        <form className="flex flex-col sm:flex-row max-w-lg mx-auto gap-2">
          <input
            type="email"
            placeholder={placeholder}
            className="flex-1 px-4 py-3 border border-gray-300 rounded sm:rounded-r-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="px-6 py-3 font-semibold text-white rounded sm:rounded-l-none transition-colors"
            style={{
              backgroundColor: buttonColor,
              fontFamily: accentFont,
            }}
          >
            {buttonText}
          </button>
        </form>
      </div>
    </section>
  );
}

// ============ BANNER SECTION ============
export interface BannerSectionProps {
  title: string;
  content: string;
  details?: string;
  backgroundImage: string;
  overlayColor?: string;
  accentFont?: string;
}

export function BannerSection({
  title,
  content,
  details,
  backgroundImage,
  overlayColor = '#022b39',
  accentFont = "'Fredoka One', cursive",
}: BannerSectionProps) {
  return (
    <section data-puck-component="BannerSection" className="my-20 w-full">
      <div
        className="relative min-h-[400px] flex justify-end items-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to right, ${overlayColor}ee 0%, ${overlayColor}bb 50%, ${overlayColor}88 100%)`,
          }}
        />
        <div className="relative z-10 max-w-lg p-8 mr-[5%] text-white text-right">
          <h2
            className="text-3xl font-bold mb-6"
            style={{ fontFamily: accentFont }}
          >
            {title}
          </h2>
          <div
            className="mb-6 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: content }}
          />
          {details && (
            <div
              className="p-4 rounded-lg"
              style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}
              dangerouslySetInnerHTML={{ __html: details }}
            />
          )}
        </div>
      </div>
    </section>
  );
}

// ============ FEATURE GRID ============
export interface FeatureItem {
  icon?: string;
  title: string;
  description: string;
}

export interface FeatureGridProps {
  sectionTitle?: string;
  sectionSubtitle?: string;
  features: FeatureItem[];
  columns?: 2 | 3 | 4;
  backgroundColor?: string;
  primaryColor?: string;
  accentColor?: string;
}

export function FeatureGrid({
  sectionTitle,
  sectionSubtitle,
  features,
  columns = 3,
  backgroundColor = '#ffffff',
  primaryColor = '#022b39',
  accentColor = '#088cbc',
}: FeatureGridProps) {
  const columnClasses = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-4',
  };

  return (
    <section data-puck-component="FeatureGrid" className="py-20" style={{ backgroundColor }}>
      <div className="container mx-auto px-4">
        {sectionTitle && (
          <h2
            className="text-3xl md:text-4xl font-bold text-center mb-4"
            style={{ color: primaryColor }}
          >
            {sectionTitle}
          </h2>
        )}
        {sectionSubtitle && (
          <p className="text-center text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
            {sectionSubtitle}
          </p>
        )}

        <div className={cn('grid gap-8', columnClasses[columns])}>
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              {feature.icon && (
                <div
                  className="text-4xl mb-4"
                  style={{ color: accentColor }}
                >
                  {feature.icon}
                </div>
              )}
              <h3
                className="text-xl font-bold mb-3"
                style={{ color: primaryColor }}
              >
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ TESTIMONIAL ============
export interface TestimonialProps {
  quote: string;
  author: string;
  role?: string;
  avatarUrl?: string;
  backgroundColor?: string;
  primaryColor?: string;
}

export function Testimonial({
  quote,
  author,
  role,
  avatarUrl,
  backgroundColor = '#f5f8ff',
  primaryColor = '#022b39',
}: TestimonialProps) {
  return (
    <section data-puck-component="Testimonial" className="py-16" style={{ backgroundColor }}>
      <div className="container mx-auto px-4 max-w-3xl">
        <blockquote className="text-center">
          <p
            className="text-2xl md:text-3xl italic mb-8 leading-relaxed"
            style={{ color: primaryColor }}
          >
            &ldquo;{quote}&rdquo;
          </p>
          <footer className="flex items-center justify-center gap-4">
            {avatarUrl && (
              <img
                src={avatarUrl}
                alt={author}
                className="w-16 h-16 rounded-full object-cover"
              />
            )}
            <div className="text-left">
              <cite className="font-bold not-italic" style={{ color: primaryColor }}>
                {author}
              </cite>
              {role && <p className="text-gray-600 text-sm">{role}</p>}
            </div>
          </footer>
        </blockquote>
      </div>
    </section>
  );
}
