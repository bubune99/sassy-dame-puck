'use client';

/**
 * Core Puck Configuration
 *
 * Generalized, themeable components for building any landing page.
 * Default values use Dzidzor brand but can be customized per-component.
 */

import type { Config } from '@measured/puck';
import {
  FullHero,
  PageBanner,
  ContentBlock,
  StatsGrid,
  MissionBlock,
  VideoEmbed,
  Newsletter,
  BannerSection,
  FeatureGrid,
  Testimonial,
  type FullHeroProps,
  type PageBannerProps,
  type ContentBlockProps,
  type StatsGridProps,
  type MissionBlockProps,
  type VideoEmbedProps,
  type NewsletterProps,
  type BannerSectionProps,
  type FeatureGridProps,
  type TestimonialProps,
} from './components';

export type CoreComponents = {
  FullHero: FullHeroProps;
  PageBanner: PageBannerProps;
  ContentBlock: ContentBlockProps;
  StatsGrid: StatsGridProps;
  MissionBlock: MissionBlockProps;
  VideoEmbed: VideoEmbedProps;
  Newsletter: NewsletterProps;
  BannerSection: BannerSectionProps;
  FeatureGrid: FeatureGridProps;
  Testimonial: TestimonialProps;
};

// Color options for select fields
const colorOptions = [
  { label: 'Navy (Primary)', value: '#022b39' },
  { label: 'Orange (Secondary)', value: '#d88535' },
  { label: 'Blue (Accent)', value: '#088cbc' },
  { label: 'Dark Gray', value: '#1a1a2e' },
  { label: 'White', value: '#ffffff' },
  { label: 'Light Gray', value: '#f5f8ff' },
  { label: 'Black', value: '#010101' },
];

// Font options
const fontOptions = [
  { label: 'Poppins', value: "'Poppins', sans-serif" },
  { label: 'Fredoka One', value: "'Fredoka One', cursive" },
  { label: 'Inter', value: "'Inter', sans-serif" },
  { label: 'System Default', value: 'system-ui, sans-serif' },
];

export const corePuckConfig: Config<CoreComponents> = {
  categories: {
    heroes: {
      title: 'Heroes',
      components: ['FullHero', 'PageBanner'],
    },
    content: {
      title: 'Content',
      components: ['ContentBlock', 'MissionBlock', 'FeatureGrid'],
    },
    engagement: {
      title: 'Engagement',
      components: ['StatsGrid', 'Testimonial', 'Newsletter'],
    },
    media: {
      title: 'Media',
      components: ['VideoEmbed', 'BannerSection'],
    },
  },
  components: {
    // ========== HEROES ==========
    FullHero: {
      label: 'Full Hero',
      fields: {
        title: { type: 'text', label: 'Title' },
        subtitle: { type: 'text', label: 'Subtitle' },
        tagline: { type: 'textarea', label: 'Tagline' },
        backgroundImage: { type: 'text', label: 'Background Image URL' },
        ctaText: { type: 'text', label: 'CTA Button Text' },
        ctaUrl: { type: 'text', label: 'CTA Button URL' },
        alignment: {
          type: 'select',
          label: 'Alignment',
          options: [
            { label: 'Left', value: 'left' },
            { label: 'Center', value: 'center' },
            { label: 'Right', value: 'right' },
          ],
        },
        height: {
          type: 'select',
          label: 'Height',
          options: [
            { label: 'Medium', value: 'medium' },
            { label: 'Large', value: 'large' },
            { label: 'Full Screen', value: 'full' },
          ],
        },
        overlayColor: {
          type: 'select',
          label: 'Overlay Color',
          options: colorOptions,
        },
        overlayOpacity: {
          type: 'number',
          label: 'Overlay Opacity (%)',
          min: 0,
          max: 100,
        },
        ctaColor: {
          type: 'select',
          label: 'CTA Button Color',
          options: colorOptions,
        },
        headingFont: {
          type: 'select',
          label: 'Heading Font',
          options: fontOptions,
        },
        accentFont: {
          type: 'select',
          label: 'Accent Font',
          options: fontOptions,
        },
      },
      defaultProps: {
        title: 'Welcome to Our Site',
        subtitle: 'Your subtitle here',
        tagline: 'A compelling tagline that explains your mission.',
        backgroundImage: 'https://pub-0379a71c01d9421e92a819c5266408d4.r2.dev/About-Image.jpeg',
        ctaText: 'Get Started',
        ctaUrl: '#',
        alignment: 'left',
        height: 'large',
        overlayColor: '#022b39',
        overlayOpacity: 60,
        ctaColor: '#d88535',
        headingFont: "'Poppins', sans-serif",
        accentFont: "'Fredoka One', cursive",
      },
      render: FullHero,
    },

    PageBanner: {
      label: 'Page Banner',
      fields: {
        title: { type: 'text', label: 'Page Title' },
        backgroundImage: { type: 'text', label: 'Background Image URL' },
        titlePosition: {
          type: 'select',
          label: 'Title Position',
          options: [
            { label: 'Top Left', value: 'top-left' },
            { label: 'Center', value: 'center' },
            { label: 'Bottom Left', value: 'bottom-left' },
          ],
        },
        height: {
          type: 'select',
          label: 'Height',
          options: [
            { label: 'Medium', value: 'medium' },
            { label: 'Large', value: 'large' },
          ],
        },
        overlayColor: {
          type: 'select',
          label: 'Overlay Color',
          options: colorOptions,
        },
        overlayOpacity: {
          type: 'number',
          label: 'Overlay Opacity (%)',
          min: 0,
          max: 100,
        },
        headingFont: {
          type: 'select',
          label: 'Heading Font',
          options: fontOptions,
        },
      },
      defaultProps: {
        title: 'Page Title',
        backgroundImage: 'https://pub-0379a71c01d9421e92a819c5266408d4.r2.dev/About-Image.jpeg',
        titlePosition: 'top-left',
        height: 'large',
        overlayColor: '#022b39',
        overlayOpacity: 40,
        headingFont: "'Poppins', sans-serif",
      },
      render: PageBanner,
    },

    // ========== CONTENT ==========
    ContentBlock: {
      label: 'Content Block',
      fields: {
        title: { type: 'text', label: 'Title' },
        content: { type: 'textarea', label: 'Content (HTML)' },
        imageUrl: { type: 'text', label: 'Image URL' },
        imageAlt: { type: 'text', label: 'Image Alt Text' },
        imagePosition: {
          type: 'select',
          label: 'Image Position',
          options: [
            { label: 'Left', value: 'left' },
            { label: 'Right', value: 'right' },
          ],
        },
        ctaText: { type: 'text', label: 'CTA Button Text' },
        ctaUrl: { type: 'text', label: 'CTA Button URL' },
        backgroundColor: {
          type: 'select',
          label: 'Background Color',
          options: colorOptions,
        },
        titleColor: {
          type: 'select',
          label: 'Title Color',
          options: colorOptions,
        },
        ctaColor: {
          type: 'select',
          label: 'CTA Button Color',
          options: colorOptions,
        },
        accentColor: {
          type: 'select',
          label: 'Accent Color',
          options: colorOptions,
        },
      },
      defaultProps: {
        title: 'Section Title',
        content: '<p>Add your content here. You can use HTML for formatting.</p>',
        imageUrl: 'https://placehold.co/600x400',
        imageAlt: '',
        imagePosition: 'right',
        backgroundColor: '#ffffff',
        titleColor: '#022b39',
        ctaColor: '#022b39',
        accentColor: '#d88535',
      },
      render: ContentBlock,
    },

    MissionBlock: {
      label: 'Mission Block',
      fields: {
        title: { type: 'text', label: 'Title' },
        content: { type: 'textarea', label: 'Content (HTML)' },
        primaryCtaText: { type: 'text', label: 'Primary CTA Text' },
        primaryCtaUrl: { type: 'text', label: 'Primary CTA URL' },
        secondaryCtaText: { type: 'text', label: 'Secondary CTA Text' },
        secondaryCtaUrl: { type: 'text', label: 'Secondary CTA URL' },
        titleColor: {
          type: 'select',
          label: 'Title Color',
          options: colorOptions,
        },
        primaryCtaColor: {
          type: 'select',
          label: 'Primary CTA Color',
          options: colorOptions,
        },
        secondaryCtaColor: {
          type: 'select',
          label: 'Secondary CTA Color',
          options: colorOptions,
        },
        accentFont: {
          type: 'select',
          label: 'Title Font',
          options: fontOptions,
        },
      },
      defaultProps: {
        title: 'Our Mission',
        content: '<p>Describe your mission, vision, or purpose here.</p>',
        primaryCtaText: 'Learn More',
        primaryCtaUrl: '#',
        secondaryCtaText: 'Get Involved',
        secondaryCtaUrl: '#',
        titleColor: '#022b39',
        primaryCtaColor: '#022b39',
        secondaryCtaColor: '#d88535',
        accentFont: "'Fredoka One', cursive",
      },
      render: MissionBlock,
    },

    FeatureGrid: {
      label: 'Feature Grid',
      fields: {
        sectionTitle: { type: 'text', label: 'Section Title' },
        sectionSubtitle: { type: 'textarea', label: 'Section Subtitle' },
        features: {
          type: 'array',
          label: 'Features',
          arrayFields: {
            icon: { type: 'text', label: 'Icon (emoji or text)' },
            title: { type: 'text', label: 'Title' },
            description: { type: 'textarea', label: 'Description' },
          },
          defaultItemProps: {
            icon: '✨',
            title: 'Feature Title',
            description: 'Feature description goes here.',
          },
        },
        columns: {
          type: 'select',
          label: 'Columns',
          options: [
            { label: '2 Columns', value: 2 },
            { label: '3 Columns', value: 3 },
            { label: '4 Columns', value: 4 },
          ],
        },
        backgroundColor: {
          type: 'select',
          label: 'Background Color',
          options: colorOptions,
        },
        primaryColor: {
          type: 'select',
          label: 'Primary Color',
          options: colorOptions,
        },
        accentColor: {
          type: 'select',
          label: 'Accent Color',
          options: colorOptions,
        },
      },
      defaultProps: {
        sectionTitle: 'Our Features',
        sectionSubtitle: 'Discover what makes us unique',
        features: [
          { icon: '🚀', title: 'Fast', description: 'Lightning-fast performance' },
          { icon: '🔒', title: 'Secure', description: 'Enterprise-grade security' },
          { icon: '💡', title: 'Innovative', description: 'Cutting-edge technology' },
        ],
        columns: 3,
        backgroundColor: '#ffffff',
        primaryColor: '#022b39',
        accentColor: '#088cbc',
      },
      render: FeatureGrid,
    },

    // ========== ENGAGEMENT ==========
    StatsGrid: {
      label: 'Stats Grid',
      fields: {
        sectionTitle: { type: 'text', label: 'Section Title' },
        sectionSubtitle: { type: 'textarea', label: 'Section Subtitle' },
        featuredStat: {
          type: 'object',
          label: 'Featured Stat (Center)',
          objectFields: {
            number: { type: 'text', label: 'Number' },
            title: { type: 'text', label: 'Title' },
            description: { type: 'textarea', label: 'Description' },
          },
        },
        leftStats: {
          type: 'array',
          label: 'Left Column Stats',
          arrayFields: {
            number: { type: 'text', label: 'Number' },
            title: { type: 'text', label: 'Title' },
            description: { type: 'textarea', label: 'Description' },
          },
          defaultItemProps: {
            number: '100+',
            title: 'Stat Title',
            description: 'Stat description',
          },
        },
        rightStats: {
          type: 'array',
          label: 'Right Column Stats',
          arrayFields: {
            number: { type: 'text', label: 'Number' },
            title: { type: 'text', label: 'Title' },
            description: { type: 'textarea', label: 'Description' },
          },
          defaultItemProps: {
            number: '100+',
            title: 'Stat Title',
            description: 'Stat description',
          },
        },
        backgroundColor: {
          type: 'select',
          label: 'Background Color',
          options: colorOptions,
        },
        primaryColor: {
          type: 'select',
          label: 'Primary Color',
          options: colorOptions,
        },
        accentColor: {
          type: 'select',
          label: 'Accent Color',
          options: colorOptions,
        },
        accentFont: {
          type: 'select',
          label: 'Title Font',
          options: fontOptions,
        },
      },
      defaultProps: {
        sectionTitle: 'Our Impact',
        sectionSubtitle: 'Making a difference through numbers',
        featuredStat: {
          number: '1000+',
          title: 'Main Metric',
          description: 'Description of your primary impact metric',
        },
        leftStats: [
          { number: '50+', title: 'Metric 1', description: 'Description' },
          { number: '200+', title: 'Metric 2', description: 'Description' },
        ],
        rightStats: [
          { number: '99%', title: 'Metric 3', description: 'Description' },
          { number: '24/7', title: 'Metric 4', description: 'Description' },
        ],
        backgroundColor: '#f5f8ff',
        primaryColor: '#022b39',
        accentColor: '#088cbc',
        accentFont: "'Fredoka One', cursive",
      },
      render: StatsGrid,
    },

    Testimonial: {
      label: 'Testimonial',
      fields: {
        quote: { type: 'textarea', label: 'Quote' },
        author: { type: 'text', label: 'Author Name' },
        role: { type: 'text', label: 'Author Role/Title' },
        avatarUrl: { type: 'text', label: 'Avatar Image URL' },
        backgroundColor: {
          type: 'select',
          label: 'Background Color',
          options: colorOptions,
        },
        primaryColor: {
          type: 'select',
          label: 'Text Color',
          options: colorOptions,
        },
      },
      defaultProps: {
        quote: 'This is an amazing product that has transformed how we work.',
        author: 'Jane Doe',
        role: 'CEO, Company Inc.',
        backgroundColor: '#f5f8ff',
        primaryColor: '#022b39',
      },
      render: Testimonial,
    },

    Newsletter: {
      label: 'Newsletter',
      fields: {
        title: { type: 'text', label: 'Title' },
        placeholder: { type: 'text', label: 'Email Placeholder' },
        buttonText: { type: 'text', label: 'Button Text' },
        titleColor: {
          type: 'select',
          label: 'Title Color',
          options: colorOptions,
        },
        buttonColor: {
          type: 'select',
          label: 'Button Color',
          options: colorOptions,
        },
        accentFont: {
          type: 'select',
          label: 'Title Font',
          options: fontOptions,
        },
      },
      defaultProps: {
        title: 'Subscribe to Our Newsletter',
        placeholder: 'Enter your email',
        buttonText: 'Subscribe',
        titleColor: '#022b39',
        buttonColor: '#088cbc',
        accentFont: "'Fredoka One', cursive",
      },
      render: Newsletter,
    },

    // ========== MEDIA ==========
    VideoEmbed: {
      label: 'Video Embed',
      fields: {
        videoUrl: { type: 'text', label: 'Video URL (YouTube)' },
        maxWidth: {
          type: 'select',
          label: 'Max Width',
          options: [
            { label: 'Medium', value: 'medium' },
            { label: 'Large', value: 'large' },
            { label: 'Full Width', value: 'full' },
          ],
        },
      },
      defaultProps: {
        videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        maxWidth: 'medium',
      },
      render: VideoEmbed,
    },

    BannerSection: {
      label: 'Banner Section',
      fields: {
        title: { type: 'text', label: 'Title' },
        content: { type: 'textarea', label: 'Content (HTML)' },
        details: { type: 'textarea', label: 'Details Box (HTML)' },
        backgroundImage: { type: 'text', label: 'Background Image URL' },
        overlayColor: {
          type: 'select',
          label: 'Overlay Color',
          options: colorOptions,
        },
        accentFont: {
          type: 'select',
          label: 'Title Font',
          options: fontOptions,
        },
      },
      defaultProps: {
        title: 'Important Information',
        content: '<p>Add important details here.</p>',
        details: '<p><strong>Contact:</strong> info@example.com</p>',
        backgroundImage: 'https://placehold.co/1200x600',
        overlayColor: '#022b39',
        accentFont: "'Fredoka One', cursive",
      },
      render: BannerSection,
    },
  },
};

export default corePuckConfig;
