'use client';

/**
 * Website Pages Puck Configuration
 *
 * Enhanced Puck configuration for building website pages with:
 * - Animation support
 * - Lock/Group/Visibility features
 * - Background with gradients/images/overlays
 * - Responsive visibility controls
 * - Platform integration embeds
 * - Core themeable components (recommended for new pages)
 * - Dzidzor-branded components (legacy, for existing pages)
 */

import type { Config } from '@puckeditor/core';

// Platform integration fields
import { mediaPickerFieldConfig } from '../fields/MediaPickerField';
import { formPickerFieldConfig } from '../fields/FormPickerField';
import { productPickerFieldConfig } from '../fields/ProductPickerField';
import { blogPostPickerFieldConfig } from '../fields/BlogPostPickerField';

// Enhanced content components
import {
  HeadingConfig,
  TextConfig,
  ButtonConfig,
  ImageConfig,
  SpacerConfig,
  type HeadingProps,
  type TextProps,
  type ButtonProps,
  type ImageProps,
  type SpacerProps,
} from '../components/content';

// Enhanced layout components
import {
  SectionConfig,
  ContainerConfig,
  ColumnsConfig,
  FlexConfig,
  GridConfig,
  type SectionProps,
  type ContainerProps,
  type ColumnsProps,
  type FlexProps,
  type GridProps,
} from '../components/layout';

// Legacy component types (for backwards compatibility)
export interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  backgroundImage?: string;
  backgroundColor?: string;
  textColor?: string;
  height?: 'small' | 'medium' | 'large';
  alignment?: 'left' | 'center' | 'right';
  overlay?: boolean;
  overlayOpacity?: number;
}

export interface TextBlockProps {
  content?: string;
  size?: 'small' | 'medium' | 'large';
  alignment?: 'left' | 'center' | 'right' | 'justify';
  maxWidth?: string;
  padding?: 'none' | 'small' | 'medium' | 'large';
}

export interface ImageBlockProps {
  src?: string;
  alt?: string;
  caption?: string;
  width?: 'full' | 'wide' | 'medium' | 'small';
  rounded?: boolean;
  shadow?: boolean;
}

export interface ImageGalleryProps {
  images?: string;
  columns?: 2 | 3 | 4;
  gap?: 'small' | 'medium' | 'large';
  rounded?: boolean;
}

export interface QuoteBlockProps {
  quote?: string;
  author?: string;
  authorTitle?: string;
  style?: 'simple' | 'bordered' | 'highlighted';
}

export interface CTASectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonUrl?: string;
  backgroundColor?: string;
  textColor?: string;
  alignment?: 'left' | 'center' | 'right';
}

export interface DividerProps {
  style?: 'line' | 'dots' | 'gradient';
  spacing?: 'small' | 'medium' | 'large';
  color?: string;
}

export interface TwoColumnLayoutProps {
  leftContent?: string;
  rightContent?: string;
  leftWidth?: number;
  gap?: 'small' | 'medium' | 'large';
  verticalAlign?: 'top' | 'center' | 'bottom';
}

export interface EmbedBlockProps {
  url?: string;
  type?: 'youtube' | 'vimeo' | 'twitter' | 'custom';
  aspectRatio?: '16:9' | '4:3' | '1:1';
}

// Legacy component renderers (inline for backwards compatibility)
function HeroSection({
  title,
  subtitle,
  backgroundImage,
  backgroundColor = '#1a1a2e',
  textColor = '#ffffff',
  height = 'medium',
  alignment = 'center',
  overlay = true,
  overlayOpacity = 50,
}: HeroSectionProps) {
  const heights = { small: '300px', medium: '500px', large: '700px' };
  return (
    <div
      style={{
        position: 'relative',
        minHeight: heights[height],
        backgroundColor,
        color: textColor,
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: alignment === 'center' ? 'center' : alignment === 'right' ? 'flex-end' : 'flex-start',
        textAlign: alignment,
        padding: '2rem',
      }}
    >
      {overlay && backgroundImage && (
        <div style={{ position: 'absolute', inset: 0, backgroundColor: '#000', opacity: overlayOpacity / 100 }} />
      )}
      <div style={{ position: 'relative', zIndex: 1, maxWidth: '800px' }}>
        {title && <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem' }}>{title}</h1>}
        {subtitle && <p style={{ fontSize: '1.25rem', opacity: 0.9 }}>{subtitle}</p>}
      </div>
    </div>
  );
}

function TextBlock({ content = '', size = 'medium', alignment = 'left', maxWidth = '100%', padding = 'medium' }: TextBlockProps) {
  const sizes = { small: '0.875rem', medium: '1rem', large: '1.125rem' };
  const paddings = { none: '0', small: '1rem', medium: '2rem', large: '3rem' };
  return (
    <div style={{ maxWidth, margin: '0 auto', padding: paddings[padding], fontSize: sizes[size], textAlign: alignment }}>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}

function ImageBlock({ src = '', alt = '', caption = '', width = 'full', rounded = true, shadow = true }: ImageBlockProps) {
  const widths = { full: '100%', wide: '90%', medium: '70%', small: '50%' };
  return (
    <figure style={{ maxWidth: widths[width], margin: '2rem auto' }}>
      {src && (
        <img
          src={src}
          alt={alt}
          style={{
            width: '100%',
            borderRadius: rounded ? '0.5rem' : 0,
            boxShadow: shadow ? '0 4px 6px rgba(0,0,0,0.1)' : 'none',
          }}
        />
      )}
      {caption && <figcaption style={{ textAlign: 'center', marginTop: '0.5rem', color: '#666' }}>{caption}</figcaption>}
    </figure>
  );
}

function ImageGallery({ images = '', columns = 3, gap = 'medium', rounded = true }: ImageGalleryProps) {
  const gaps = { small: '0.5rem', medium: '1rem', large: '1.5rem' };
  const imageUrls = images.split(',').map((url) => url.trim()).filter(Boolean);
  return (
    <div style={{ display: 'grid', gridTemplateColumns: `repeat(${columns}, 1fr)`, gap: gaps[gap] }}>
      {imageUrls.map((url, index) => (
        <img key={index} src={url} alt="" style={{ width: '100%', borderRadius: rounded ? '0.5rem' : 0 }} />
      ))}
    </div>
  );
}

function QuoteBlock({ quote = '', author = '', authorTitle = '', style = 'bordered' }: QuoteBlockProps) {
  const styles = {
    simple: { borderLeft: 'none', backgroundColor: 'transparent' },
    bordered: { borderLeft: '4px solid #3b82f6', backgroundColor: 'transparent' },
    highlighted: { borderLeft: 'none', backgroundColor: '#f3f4f6' },
  };
  return (
    <blockquote style={{ padding: '1.5rem', margin: '2rem 0', ...styles[style] }}>
      <p style={{ fontSize: '1.25rem', fontStyle: 'italic', marginBottom: '1rem' }}>{quote}</p>
      {author && (
        <footer style={{ color: '#666' }}>
          <strong>{author}</strong>
          {authorTitle && <span>, {authorTitle}</span>}
        </footer>
      )}
    </blockquote>
  );
}

function CTASection({
  title = '',
  description = '',
  buttonText = '',
  buttonUrl = '#',
  backgroundColor = '#3b82f6',
  textColor = '#ffffff',
  alignment = 'center',
}: CTASectionProps) {
  return (
    <div style={{ backgroundColor, color: textColor, padding: '3rem 2rem', textAlign: alignment }}>
      {title && <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>{title}</h2>}
      {description && <p style={{ fontSize: '1.125rem', marginBottom: '1.5rem', opacity: 0.9 }}>{description}</p>}
      {buttonText && (
        <a
          href={buttonUrl}
          style={{
            display: 'inline-block',
            padding: '0.75rem 1.5rem',
            backgroundColor: textColor,
            color: backgroundColor,
            borderRadius: '0.5rem',
            textDecoration: 'none',
            fontWeight: 500,
          }}
        >
          {buttonText}
        </a>
      )}
    </div>
  );
}

function Divider({ style = 'line', spacing = 'medium', color = '#e5e7eb' }: DividerProps) {
  const spacings = { small: '1rem', medium: '2rem', large: '3rem' };
  return (
    <div style={{ padding: `${spacings[spacing]} 0`, display: 'flex', justifyContent: 'center' }}>
      {style === 'line' && <hr style={{ width: '100%', border: 'none', borderTop: `1px solid ${color}` }} />}
      {style === 'dots' && <span style={{ color, fontSize: '1.5rem' }}>• • •</span>}
      {style === 'gradient' && (
        <div style={{ width: '200px', height: '2px', background: `linear-gradient(90deg, transparent, ${color}, transparent)` }} />
      )}
    </div>
  );
}

function TwoColumnLayout({ leftContent = '', rightContent = '', leftWidth = 50, gap = 'medium', verticalAlign = 'top' }: TwoColumnLayoutProps) {
  const gaps = { small: '1rem', medium: '2rem', large: '3rem' };
  const aligns = { top: 'flex-start', center: 'center', bottom: 'flex-end' };
  return (
    <div style={{ display: 'flex', gap: gaps[gap], alignItems: aligns[verticalAlign] }}>
      <div style={{ flex: `0 0 ${leftWidth}%` }} dangerouslySetInnerHTML={{ __html: leftContent }} />
      <div style={{ flex: 1 }} dangerouslySetInnerHTML={{ __html: rightContent }} />
    </div>
  );
}

function EmbedBlock({ url = '', type = 'youtube', aspectRatio = '16:9' }: EmbedBlockProps) {
  const ratios = { '16:9': '56.25%', '4:3': '75%', '1:1': '100%' };
  const getEmbedUrl = () => {
    if (type === 'youtube') {
      const videoId = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&]+)/)?.[1];
      return videoId ? `https://www.youtube.com/embed/${videoId}` : '';
    }
    if (type === 'vimeo') {
      const videoId = url.match(/vimeo\.com\/(\d+)/)?.[1];
      return videoId ? `https://player.vimeo.com/video/${videoId}` : '';
    }
    return url;
  };
  return (
    <div style={{ position: 'relative', paddingBottom: ratios[aspectRatio], height: 0, overflow: 'hidden' }}>
      <iframe
        src={getEmbedUrl()}
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
        allowFullScreen
      />
    </div>
  );
}

// Platform embeds
import {
  FormEmbed,
  ProductEmbed,
  ProductGrid,
  BlogPostEmbed,
  BlogGrid,
  type FormEmbedProps,
  type ProductEmbedProps,
  type ProductGridProps,
  type BlogPostEmbedProps,
  type BlogGridProps,
} from '../embeds';
// Import Core themeable components
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
} from '../core';
// Import Dzidzor branded components (legacy)
import {
  type DzidzorComponents,
  DzidzorHero,
  PageHero,
  ContentSection,
  MissionSection,
  EmbassySection,
  ImpactStats,
  VideoSection,
  NewsletterSection,
} from '../dzidzor';

// Core themeable components
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

export type PageComponents = {
  // Enhanced Content Components
  Heading: HeadingProps;
  Text: TextProps;
  Button: ButtonProps;
  Image: ImageProps;
  Spacer: SpacerProps;
  // Enhanced Layout Components
  Section: SectionProps;
  Container: ContainerProps;
  Columns: ColumnsProps;
  Flex: FlexProps;
  Grid: GridProps;
  // Legacy Components (for backwards compatibility)
  HeroSection: HeroSectionProps;
  TextBlock: TextBlockProps;
  ImageBlock: ImageBlockProps;
  ImageGallery: ImageGalleryProps;
  QuoteBlock: QuoteBlockProps;
  CTASection: CTASectionProps;
  Divider: DividerProps;
  TwoColumnLayout: TwoColumnLayoutProps;
  EmbedBlock: EmbedBlockProps;
  // Platform Embeds
  FormEmbed: FormEmbedProps;
  ProductEmbed: ProductEmbedProps;
  ProductGrid: ProductGridProps;
  BlogPostEmbed: BlogPostEmbedProps;
  BlogGrid: BlogGridProps;
} & CoreComponents & DzidzorComponents;

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

export const pagesPuckConfig: Config<PageComponents> = {
  categories: {
    // Core themeable components (recommended for new pages)
    coreHeroes: {
      title: 'Heroes',
      components: ['FullHero', 'PageBanner'],
    },
    coreContent: {
      title: 'Content',
      components: ['ContentBlock', 'MissionBlock', 'FeatureGrid'],
    },
    coreEngagement: {
      title: 'Engagement',
      components: ['StatsGrid', 'Testimonial', 'Newsletter'],
    },
    coreMedia: {
      title: 'Media',
      components: ['VideoEmbed', 'BannerSection'],
    },
    // Standard components
    layout: {
      title: 'Layout',
      components: ['Section', 'Container', 'Columns', 'Flex', 'Grid'],
    },
    content: {
      title: 'Content',
      components: ['Heading', 'Text', 'Button', 'Spacer'],
    },
    basicContent: {
      title: 'Basic Content',
      components: ['TextBlock', 'QuoteBlock'],
    },
    media: {
      title: 'Media',
      components: ['Image', 'ImageBlock', 'ImageGallery', 'EmbedBlock'],
    },
    actions: {
      title: 'Actions',
      components: ['CTASection', 'FormEmbed'],
    },
    dynamic: {
      title: 'Dynamic Content',
      components: ['ProductEmbed', 'ProductGrid', 'BlogPostEmbed', 'BlogGrid'],
    },
    legacy: {
      title: 'Legacy',
      components: ['HeroSection', 'Divider', 'TwoColumnLayout'],
      defaultExpanded: false,
    },
    // Dzidzor branded components (legacy - kept for backward compatibility)
    dzidzorLegacy: {
      title: 'Dzidzor (Legacy)',
      components: ['DzidzorHero', 'PageHero', 'ContentSection', 'MissionSection', 'EmbassySection', 'ImpactStats', 'VideoSection', 'NewsletterSection'],
    },
  },
  components: {
    // ========== ENHANCED CONTENT ==========
    Heading: HeadingConfig,
    Text: TextConfig,
    Button: ButtonConfig,
    Image: ImageConfig,
    Spacer: SpacerConfig,

    // ========== ENHANCED LAYOUT ==========
    Section: SectionConfig,
    Container: ContainerConfig,
    Columns: ColumnsConfig,
    Flex: FlexConfig,
    Grid: GridConfig,

    // ========== LEGACY LAYOUT (for backwards compatibility) ==========
    HeroSection: {
      label: 'Hero Section (Legacy)',
      fields: {
        title: { type: 'text', label: 'Title' },
        subtitle: { type: 'textarea', label: 'Subtitle' },
        backgroundImage: { ...mediaPickerFieldConfig, label: 'Background Image' },
        backgroundColor: { type: 'text', label: 'Background Color' },
        textColor: { type: 'text', label: 'Text Color' },
        height: {
          type: 'select',
          label: 'Height',
          options: [
            { label: 'Small', value: 'small' },
            { label: 'Medium', value: 'medium' },
            { label: 'Large', value: 'large' },
          ],
        },
        alignment: {
          type: 'select',
          label: 'Alignment',
          options: [
            { label: 'Left', value: 'left' },
            { label: 'Center', value: 'center' },
            { label: 'Right', value: 'right' },
          ],
        },
        overlay: {
          type: 'radio',
          label: 'Show Overlay',
          options: [
            { label: 'Yes', value: true },
            { label: 'No', value: false },
          ],
        },
        overlayOpacity: {
          type: 'number',
          label: 'Overlay Opacity (%)',
          min: 0,
          max: 100,
        },
      },
      defaultProps: {
        title: 'Page Title',
        subtitle: 'Add a subtitle for your page',
        backgroundColor: '#1a1a2e',
        textColor: '#ffffff',
        height: 'medium',
        alignment: 'center',
        overlay: true,
        overlayOpacity: 50,
      },
      render: HeroSection,
    },
    TwoColumnLayout: {
      label: 'Two Columns (Legacy)',
      fields: {
        leftContent: { type: 'textarea', label: 'Left Column HTML' },
        rightContent: { type: 'textarea', label: 'Right Column HTML' },
        leftWidth: {
          type: 'number',
          label: 'Left Column Width (%)',
          min: 20,
          max: 80,
        },
        gap: {
          type: 'select',
          label: 'Gap',
          options: [
            { label: 'Small', value: 'small' },
            { label: 'Medium', value: 'medium' },
            { label: 'Large', value: 'large' },
          ],
        },
        verticalAlign: {
          type: 'select',
          label: 'Vertical Align',
          options: [
            { label: 'Top', value: 'top' },
            { label: 'Center', value: 'center' },
            { label: 'Bottom', value: 'bottom' },
          ],
        },
      },
      defaultProps: {
        leftContent: '<p>Left column content goes here.</p>',
        rightContent: '<p>Right column content goes here.</p>',
        leftWidth: 50,
        gap: 'medium',
        verticalAlign: 'top',
      },
      render: TwoColumnLayout,
    },
    Divider: {
      label: 'Divider (Legacy)',
      fields: {
        style: {
          type: 'select',
          label: 'Style',
          options: [
            { label: 'Line', value: 'line' },
            { label: 'Dots', value: 'dots' },
            { label: 'Gradient', value: 'gradient' },
          ],
        },
        spacing: {
          type: 'select',
          label: 'Spacing',
          options: [
            { label: 'Small', value: 'small' },
            { label: 'Medium', value: 'medium' },
            { label: 'Large', value: 'large' },
          ],
        },
        color: { type: 'text', label: 'Color' },
      },
      defaultProps: {
        style: 'line',
        spacing: 'medium',
        color: '#e5e7eb',
      },
      render: Divider,
    },

    // ========== LEGACY CONTENT ==========
    TextBlock: {
      label: 'Text Block (Legacy)',
      fields: {
        content: { type: 'textarea', label: 'Content (HTML)' },
        size: {
          type: 'select',
          label: 'Text Size',
          options: [
            { label: 'Small', value: 'small' },
            { label: 'Medium', value: 'medium' },
            { label: 'Large', value: 'large' },
          ],
        },
        alignment: {
          type: 'select',
          label: 'Alignment',
          options: [
            { label: 'Left', value: 'left' },
            { label: 'Center', value: 'center' },
            { label: 'Right', value: 'right' },
            { label: 'Justify', value: 'justify' },
          ],
        },
        maxWidth: { type: 'text', label: 'Max Width (e.g., 800px)' },
        padding: {
          type: 'select',
          label: 'Padding',
          options: [
            { label: 'None', value: 'none' },
            { label: 'Small', value: 'small' },
            { label: 'Medium', value: 'medium' },
            { label: 'Large', value: 'large' },
          ],
        },
      },
      defaultProps: {
        content: '<p>Enter your content here...</p>',
        size: 'medium',
        alignment: 'left',
        maxWidth: '100%',
        padding: 'medium',
      },
      render: TextBlock,
    },
    QuoteBlock: {
      label: 'Quote (Legacy)',
      fields: {
        quote: { type: 'textarea', label: 'Quote' },
        author: { type: 'text', label: 'Author Name' },
        authorTitle: { type: 'text', label: 'Author Title' },
        style: {
          type: 'select',
          label: 'Style',
          options: [
            { label: 'Simple', value: 'simple' },
            { label: 'Bordered', value: 'bordered' },
            { label: 'Highlighted', value: 'highlighted' },
          ],
        },
      },
      defaultProps: {
        quote: 'The best way to predict the future is to create it.',
        author: 'Peter Drucker',
        authorTitle: 'Management Consultant',
        style: 'bordered',
      },
      render: QuoteBlock,
    },

    // ========== LEGACY MEDIA ==========
    ImageBlock: {
      label: 'Image Block (Legacy)',
      fields: {
        src: { ...mediaPickerFieldConfig, label: 'Image' },
        alt: { type: 'text', label: 'Alt Text' },
        caption: { type: 'text', label: 'Caption' },
        width: {
          type: 'select',
          label: 'Width',
          options: [
            { label: 'Full Width', value: 'full' },
            { label: 'Wide', value: 'wide' },
            { label: 'Medium', value: 'medium' },
            { label: 'Small', value: 'small' },
          ],
        },
        rounded: {
          type: 'radio',
          label: 'Rounded Corners',
          options: [
            { label: 'Yes', value: true },
            { label: 'No', value: false },
          ],
        },
        shadow: {
          type: 'radio',
          label: 'Shadow',
          options: [
            { label: 'Yes', value: true },
            { label: 'No', value: false },
          ],
        },
      },
      defaultProps: {
        src: 'https://placehold.co/1200x600',
        alt: 'Page image',
        caption: '',
        width: 'full',
        rounded: true,
        shadow: true,
      },
      render: ImageBlock,
    },
    ImageGallery: {
      label: 'Image Gallery',
      fields: {
        images: { type: 'textarea', label: 'Image URLs (comma-separated)' },
        columns: {
          type: 'select',
          label: 'Columns',
          options: [
            { label: '2 Columns', value: 2 },
            { label: '3 Columns', value: 3 },
            { label: '4 Columns', value: 4 },
          ],
        },
        gap: {
          type: 'select',
          label: 'Gap',
          options: [
            { label: 'Small', value: 'small' },
            { label: 'Medium', value: 'medium' },
            { label: 'Large', value: 'large' },
          ],
        },
        rounded: {
          type: 'radio',
          label: 'Rounded Corners',
          options: [
            { label: 'Yes', value: true },
            { label: 'No', value: false },
          ],
        },
      },
      defaultProps: {
        images: 'https://placehold.co/400x300,https://placehold.co/400x300,https://placehold.co/400x300',
        columns: 3,
        gap: 'medium',
        rounded: true,
      },
      render: ImageGallery,
    },
    EmbedBlock: {
      label: 'Video/Embed',
      fields: {
        url: { type: 'text', label: 'URL' },
        type: {
          type: 'select',
          label: 'Type',
          options: [
            { label: 'YouTube', value: 'youtube' },
            { label: 'Vimeo', value: 'vimeo' },
            { label: 'Twitter', value: 'twitter' },
            { label: 'Custom', value: 'custom' },
          ],
        },
        aspectRatio: {
          type: 'select',
          label: 'Aspect Ratio',
          options: [
            { label: '16:9', value: '16:9' },
            { label: '4:3', value: '4:3' },
            { label: '1:1', value: '1:1' },
          ],
        },
      },
      defaultProps: {
        url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        type: 'youtube',
        aspectRatio: '16:9',
      },
      render: EmbedBlock,
    },

    // ========== ACTIONS ==========
    CTASection: {
      label: 'Call to Action',
      fields: {
        title: { type: 'text', label: 'Title' },
        description: { type: 'textarea', label: 'Description' },
        buttonText: { type: 'text', label: 'Button Text' },
        buttonUrl: { type: 'text', label: 'Button URL' },
        backgroundColor: { type: 'text', label: 'Background Color' },
        textColor: { type: 'text', label: 'Text Color' },
        alignment: {
          type: 'select',
          label: 'Alignment',
          options: [
            { label: 'Left', value: 'left' },
            { label: 'Center', value: 'center' },
            { label: 'Right', value: 'right' },
          ],
        },
      },
      defaultProps: {
        title: 'Ready to get started?',
        description: 'Join thousands of users who trust our platform.',
        buttonText: 'Get Started',
        buttonUrl: '#',
        backgroundColor: '#3b82f6',
        textColor: '#ffffff',
        alignment: 'center',
      },
      render: CTASection,
    },
    FormEmbed: {
      label: 'Form',
      fields: {
        formId: { ...formPickerFieldConfig, label: 'Select Form' },
        showTitle: {
          type: 'radio',
          label: 'Show Title',
          options: [
            { label: 'Yes', value: true },
            { label: 'No', value: false },
          ],
        },
        showDescription: {
          type: 'radio',
          label: 'Show Description',
          options: [
            { label: 'Yes', value: true },
            { label: 'No', value: false },
          ],
        },
      },
      defaultProps: {
        formId: '',
        showTitle: true,
        showDescription: true,
      },
      render: FormEmbed,
    },

    // ========== DYNAMIC CONTENT ==========
    ProductEmbed: {
      label: 'Single Product',
      fields: {
        productId: { ...productPickerFieldConfig, label: 'Select Product' },
        showImage: {
          type: 'radio',
          label: 'Show Image',
          options: [
            { label: 'Yes', value: true },
            { label: 'No', value: false },
          ],
        },
        showPrice: {
          type: 'radio',
          label: 'Show Price',
          options: [
            { label: 'Yes', value: true },
            { label: 'No', value: false },
          ],
        },
        showDescription: {
          type: 'radio',
          label: 'Show Description',
          options: [
            { label: 'Yes', value: true },
            { label: 'No', value: false },
          ],
        },
        showButton: {
          type: 'radio',
          label: 'Show Button',
          options: [
            { label: 'Yes', value: true },
            { label: 'No', value: false },
          ],
        },
        buttonText: { type: 'text', label: 'Button Text' },
        imageHeight: {
          type: 'select',
          label: 'Image Height',
          options: [
            { label: 'Small', value: 'small' },
            { label: 'Medium', value: 'medium' },
            { label: 'Large', value: 'large' },
          ],
        },
      },
      defaultProps: {
        productId: '',
        showImage: true,
        showPrice: true,
        showDescription: true,
        showButton: true,
        buttonText: 'View Product',
        imageHeight: 'medium',
      },
      render: ProductEmbed,
    },
    ProductGrid: {
      label: 'Product Grid',
      fields: {
        categoryId: { type: 'text', label: 'Category ID (optional)' },
        limit: {
          type: 'number',
          label: 'Number of Products',
          min: 1,
          max: 24,
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
        showImage: {
          type: 'radio',
          label: 'Show Images',
          options: [
            { label: 'Yes', value: true },
            { label: 'No', value: false },
          ],
        },
        showPrice: {
          type: 'radio',
          label: 'Show Prices',
          options: [
            { label: 'Yes', value: true },
            { label: 'No', value: false },
          ],
        },
        showDescription: {
          type: 'radio',
          label: 'Show Descriptions',
          options: [
            { label: 'Yes', value: true },
            { label: 'No', value: false },
          ],
        },
        gap: {
          type: 'select',
          label: 'Gap',
          options: [
            { label: 'Small', value: 'small' },
            { label: 'Medium', value: 'medium' },
            { label: 'Large', value: 'large' },
          ],
        },
      },
      defaultProps: {
        categoryId: '',
        limit: 8,
        columns: 4,
        showImage: true,
        showPrice: true,
        showDescription: false,
        gap: 'medium',
      },
      render: ProductGrid,
    },
    BlogPostEmbed: {
      label: 'Single Blog Post',
      fields: {
        postId: { ...blogPostPickerFieldConfig, label: 'Select Post' },
        showImage: {
          type: 'radio',
          label: 'Show Image',
          options: [
            { label: 'Yes', value: true },
            { label: 'No', value: false },
          ],
        },
        showExcerpt: {
          type: 'radio',
          label: 'Show Excerpt',
          options: [
            { label: 'Yes', value: true },
            { label: 'No', value: false },
          ],
        },
        showDate: {
          type: 'radio',
          label: 'Show Date',
          options: [
            { label: 'Yes', value: true },
            { label: 'No', value: false },
          ],
        },
        showAuthor: {
          type: 'radio',
          label: 'Show Author',
          options: [
            { label: 'Yes', value: true },
            { label: 'No', value: false },
          ],
        },
        imageHeight: {
          type: 'select',
          label: 'Image Height',
          options: [
            { label: 'Small', value: 'small' },
            { label: 'Medium', value: 'medium' },
            { label: 'Large', value: 'large' },
          ],
        },
      },
      defaultProps: {
        postId: '',
        showImage: true,
        showExcerpt: true,
        showDate: true,
        showAuthor: true,
        imageHeight: 'medium',
      },
      render: BlogPostEmbed,
    },
    BlogGrid: {
      label: 'Blog Post Grid',
      fields: {
        categoryId: { type: 'text', label: 'Category ID (optional)' },
        tagId: { type: 'text', label: 'Tag ID (optional)' },
        limit: {
          type: 'number',
          label: 'Number of Posts',
          min: 1,
          max: 24,
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
        showImage: {
          type: 'radio',
          label: 'Show Images',
          options: [
            { label: 'Yes', value: true },
            { label: 'No', value: false },
          ],
        },
        showExcerpt: {
          type: 'radio',
          label: 'Show Excerpts',
          options: [
            { label: 'Yes', value: true },
            { label: 'No', value: false },
          ],
        },
        showDate: {
          type: 'radio',
          label: 'Show Dates',
          options: [
            { label: 'Yes', value: true },
            { label: 'No', value: false },
          ],
        },
        gap: {
          type: 'select',
          label: 'Gap',
          options: [
            { label: 'Small', value: 'small' },
            { label: 'Medium', value: 'medium' },
            { label: 'Large', value: 'large' },
          ],
        },
      },
      defaultProps: {
        categoryId: '',
        tagId: '',
        limit: 6,
        columns: 3,
        showImage: true,
        showExcerpt: true,
        showDate: true,
        gap: 'medium',
      },
      render: BlogGrid,
    },

    // ========== CORE THEMEABLE COMPONENTS ==========
    FullHero: {
      label: 'Full Hero',
      fields: {
        title: { type: 'text', label: 'Title' },
        subtitle: { type: 'text', label: 'Subtitle' },
        tagline: { type: 'textarea', label: 'Tagline' },
        backgroundImage: { ...mediaPickerFieldConfig, label: 'Background Image' },
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
        backgroundImage: { ...mediaPickerFieldConfig, label: 'Background Image' },
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

    ContentBlock: {
      label: 'Content Block',
      fields: {
        title: { type: 'text', label: 'Title' },
        content: { type: 'textarea', label: 'Content (HTML)' },
        imageUrl: { ...mediaPickerFieldConfig, label: 'Image' },
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
        avatarUrl: { ...mediaPickerFieldConfig, label: 'Avatar Image' },
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
        backgroundImage: { ...mediaPickerFieldConfig, label: 'Background Image' },
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

    // ========== DZIDZOR BRANDED COMPONENTS (LEGACY) ==========
    // Fully inline definitions (no spreading from external config)
    DzidzorHero: {
      label: 'Dzidzor Hero',
      fields: {
        title: { type: 'text', label: 'Title' },
        subtitle: { type: 'text', label: 'Subtitle' },
        tagline: { type: 'text', label: 'Tagline' },
        backgroundImage: { type: 'text', label: 'Background Image URL' },
        ctaText: { type: 'text', label: 'CTA Button Text' },
        ctaUrl: { type: 'text', label: 'CTA Button URL' },
        alignment: {
          type: 'select',
          label: 'Alignment',
          options: [
            { label: 'Left', value: 'left' },
            { label: 'Center', value: 'center' },
          ],
        },
      },
      defaultProps: {
        title: 'Delivering Hope',
        subtitle: 'Healing Lives',
        tagline: 'Bridging the healthcare gap in Ghana',
        backgroundImage: 'https://pub-0379a71c01d9421e92a819c5266408d4.r2.dev/Homepage-Banner.png',
        ctaText: 'Get Involved',
        ctaUrl: '/p/get-involved',
        alignment: 'left',
      },
      render: DzidzorHero,
    },
    PageHero: {
      label: 'Page Hero',
      fields: {
        title: { type: 'text', label: 'Page Title' },
        backgroundImage: { type: 'text', label: 'Background Image URL' },
      },
      defaultProps: {
        title: 'Page Title',
        backgroundImage: 'https://pub-0379a71c01d9421e92a819c5266408d4.r2.dev/About-Image.jpeg',
      },
      render: PageHero,
    },
    ContentSection: {
      label: 'Content Section',
      fields: {
        title: { type: 'text', label: 'Section Title' },
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
        ctaText: { type: 'text', label: 'CTA Text (optional)' },
        ctaUrl: { type: 'text', label: 'CTA URL (optional)' },
        backgroundColor: {
          type: 'select',
          label: 'Background',
          options: [
            { label: 'White', value: 'white' },
            { label: 'Light Blue', value: 'light' },
          ],
        },
      },
      defaultProps: {
        title: 'Section Title',
        content: '<p>Enter your content here. You can use multiple paragraphs.</p>',
        imageUrl: 'https://placehold.co/600x400',
        imageAlt: 'Section image',
        imagePosition: 'left',
        ctaText: 'Learn More',
        ctaUrl: '#',
        backgroundColor: 'white',
      },
      render: ContentSection,
    },
    MissionSection: {
      label: 'Mission Section',
      fields: {
        title: { type: 'text', label: 'Section Title' },
        content: { type: 'textarea', label: 'Content (HTML)' },
        primaryCtaText: { type: 'text', label: 'Primary CTA Text' },
        primaryCtaUrl: { type: 'text', label: 'Primary CTA URL' },
        secondaryCtaText: { type: 'text', label: 'Secondary CTA Text' },
        secondaryCtaUrl: { type: 'text', label: 'Secondary CTA URL' },
      },
      defaultProps: {
        title: 'Join The Mission',
        content: '<p>Your support makes a difference in the lives of those we serve.</p>',
        primaryCtaText: 'Learn More',
        primaryCtaUrl: '/p/about',
        secondaryCtaText: 'Donate Now',
        secondaryCtaUrl: 'https://www.paypal.com/paypalme/ProjectDzidzor',
      },
      render: MissionSection,
    },
    EmbassySection: {
      label: 'Embassy Section',
      fields: {
        title: { type: 'text', label: 'Title' },
        content: { type: 'textarea', label: 'Content (HTML)' },
        details: { type: 'textarea', label: 'Details Box (HTML)' },
        backgroundImage: { type: 'text', label: 'Background Image URL' },
      },
      defaultProps: {
        title: 'Ghana Embassy Information',
        content: '<p>For visa and travel requirements, contact the Embassy of Ghana.</p>',
        details: '<p><strong>Embassy of Ghana</strong><br/>3512 International Drive, NW<br/>Washington, D.C. 20008</p>',
        backgroundImage: 'https://placehold.co/1200x600',
      },
      render: EmbassySection,
    },
    ImpactStats: {
      label: 'Impact Stats',
      fields: {
        sectionTitle: { type: 'text', label: 'Section Title' },
        sectionSubtitle: { type: 'text', label: 'Section Subtitle' },
        featuredStat: {
          type: 'object',
          label: 'Featured Stat (Center)',
          objectFields: {
            number: { type: 'text', label: 'Number' },
            title: { type: 'text', label: 'Title' },
            description: { type: 'text', label: 'Description' },
          },
        },
        leftStats: {
          type: 'array',
          label: 'Left Column Stats',
          arrayFields: {
            number: { type: 'text', label: 'Number' },
            title: { type: 'text', label: 'Title' },
            description: { type: 'text', label: 'Description' },
          },
          getItemSummary: (item: { title?: string; number?: string }, index?: number) =>
            item.title || item.number || `Stat ${(index ?? 0) + 1}`,
        },
        rightStats: {
          type: 'array',
          label: 'Right Column Stats',
          arrayFields: {
            number: { type: 'text', label: 'Number' },
            title: { type: 'text', label: 'Title' },
            description: { type: 'text', label: 'Description' },
          },
          getItemSummary: (item: { title?: string; number?: string }, index?: number) =>
            item.title || item.number || `Stat ${(index ?? 0) + 1}`,
        },
      },
      defaultProps: {
        sectionTitle: 'Our Impact',
        sectionSubtitle: "Making a difference in Ghana's healthcare landscape",
        featuredStat: {
          number: '500+',
          title: 'Medical Supplies',
          description: 'Donated to underserved communities across Ghana',
        },
        leftStats: [
          {
            number: '3',
            title: 'Hospitals Equipped',
            description: 'Akuse Government Hospital, Atua Government Hospital, and Kpong Health Center',
          },
          {
            number: '100+',
            title: 'Clothing & Hygiene Kits',
            description: 'Delivered to families in need across multiple regions',
          },
        ],
        rightStats: [
          {
            number: '7',
            title: 'Women Funded',
            description: 'Small business capital grants awarded to women entrepreneurs',
          },
          {
            number: '1',
            title: 'Clinic in Progress',
            description: 'Seed stage of building a clinic in a local community',
          },
        ],
      },
      render: ImpactStats,
    },
    VideoSection: {
      label: 'Video Section',
      fields: {
        videoUrl: { type: 'text', label: 'YouTube URL' },
        maxWidth: {
          type: 'select',
          label: 'Max Width',
          options: [
            { label: 'Medium (800px)', value: 'medium' },
            { label: 'Large (1024px)', value: 'large' },
            { label: 'Full Width', value: 'full' },
          ],
        },
      },
      defaultProps: {
        videoUrl: 'https://www.youtube.com/watch?v=vOlqSvMxpog',
        maxWidth: 'medium',
      },
      render: VideoSection,
    },
    NewsletterSection: {
      label: 'Newsletter Signup',
      fields: {
        title: { type: 'text', label: 'Title' },
        placeholder: { type: 'text', label: 'Placeholder Text' },
        buttonText: { type: 'text', label: 'Button Text' },
      },
      defaultProps: {
        title: 'Stay Updated',
        placeholder: 'Enter your email',
        buttonText: 'Subscribe',
      },
      render: NewsletterSection,
    },
  },
};

export default pagesPuckConfig;
