"use client";

import React from "react";
import { ComponentConfig } from "@puckeditor/core";

// Type for slot content
interface SlotComponentData {
  type: string;
  props: Record<string, unknown>;
}
type SlotContent = React.FC | SlotComponentData[];

// Shared section props
interface PresetSectionProps {
  backgroundColor: string;
  paddingTop: string;
  paddingBottom: string;
  content?: SlotContent;
  puck?: { isEditing?: boolean };
  editMode?: boolean;
  id?: string;
}

// Named render components for each variant
function renderWide({ backgroundColor, paddingTop, paddingBottom, content: Content }: PresetSectionProps) {
  return (
    <section style={{ backgroundColor, paddingTop, paddingBottom, paddingLeft: "24px", paddingRight: "24px", width: "100%" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {typeof Content === "function" && <Content />}
      </div>
    </section>
  );
}

function renderCentered({ backgroundColor, paddingTop, paddingBottom, content: Content }: PresetSectionProps) {
  return (
    <section style={{ backgroundColor, paddingTop, paddingBottom, paddingLeft: "24px", paddingRight: "24px", width: "100%", textAlign: "center" as const }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        {typeof Content === "function" && <Content />}
      </div>
    </section>
  );
}

// Shared fields
const presetFields = {
  content: { type: "slot" as const },
  backgroundColor: { type: "text" as const, label: "Background Color" },
  paddingTop: {
    type: "select" as const,
    label: "Padding Top",
    options: [
      { label: "Small (40px)", value: "40px" },
      { label: "Medium (60px)", value: "60px" },
      { label: "Large (80px)", value: "80px" },
      { label: "XL (100px)", value: "100px" },
    ],
  },
  paddingBottom: {
    type: "select" as const,
    label: "Padding Bottom",
    options: [
      { label: "Small (40px)", value: "40px" },
      { label: "Medium (60px)", value: "60px" },
      { label: "Large (80px)", value: "80px" },
      { label: "XL (100px)", value: "100px" },
    ],
  },
};

// ============================================
// PRESET: HERO CENTERED
// Dark bg, centered H1 + subtext + 2 buttons
// ============================================
export const PresetHeroCenteredConfig: ComponentConfig<PresetSectionProps> = {
  label: "Preset: Hero Centered",
  defaultProps: {
    backgroundColor: "var(--ds-primary, #0066cc)",
    paddingTop: "100px",
    paddingBottom: "100px",
    content: [
      {
        type: "Heading",
        props: {
          text: "Build Something Amazing",
          level: "h1",
          fontSize: "48px",
          fontWeight: "800",
          color: "#ffffff",
          textAlign: "center",
          marginBottom: "16px",
        },
      },
      {
        type: "Text",
        props: {
          text: "Create beautiful, responsive websites with our intuitive platform. No coding required.",
          fontSize: "18px",
          color: "rgba(255,255,255,0.85)",
          textAlign: "center",
          lineHeight: "1.6",
          marginBottom: "32px",
          maxWidth: "600px",
        },
      },
      {
        type: "Flex",
        props: {
          direction: "row",
          gap: "16px",
          justifyContent: "center",
          content: [
            {
              type: "Button",
              props: {
                text: "Get Started",
                href: "#",
                variant: "primary",
                size: "lg",
                backgroundColor: "#ffffff",
                textColor: "var(--ds-primary, #0066cc)",
                borderRadius: "8px",
              },
            },
            {
              type: "Button",
              props: {
                text: "Learn More",
                href: "#",
                variant: "outline",
                size: "lg",
                backgroundColor: "transparent",
                textColor: "#ffffff",
                borderRadius: "8px",
              },
            },
          ],
        },
      },
    ],
  },
  fields: presetFields,
  render: renderCentered,
};

// ============================================
// PRESET: HERO SPLIT
// White bg, text left + image right
// ============================================
export const PresetHeroSplitConfig: ComponentConfig<PresetSectionProps> = {
  label: "Preset: Hero Split",
  defaultProps: {
    backgroundColor: "var(--ds-background, #ffffff)",
    paddingTop: "80px",
    paddingBottom: "80px",
    content: [
      {
        type: "Columns",
        props: {
          layout: "1-1",
          gap: "48px",
          verticalAlign: "center",
          column0: [
            {
              type: "Heading",
              props: {
                text: "Grow Your Business Online",
                level: "h1",
                fontSize: "40px",
                fontWeight: "800",
                color: "var(--ds-text, #0f172a)",
                textAlign: "left",
                marginBottom: "16px",
              },
            },
            {
              type: "Text",
              props: {
                text: "Everything you need to launch, manage, and scale your online presence. Built for modern businesses.",
                fontSize: "18px",
                color: "var(--ds-text-muted, #64748b)",
                textAlign: "left",
                lineHeight: "1.6",
                marginBottom: "24px",
              },
            },
            {
              type: "Button",
              props: {
                text: "Start Free Trial",
                href: "#",
                variant: "primary",
                size: "lg",
                borderRadius: "8px",
              },
            },
          ],
          column1: [
            {
              type: "Image",
              props: {
                src: "https://placehold.co/600x400/e2e8f0/64748b?text=Hero+Image",
                alt: "Hero image",
                aspectRatio: "4:3",
                borderRadius: "12px",
              },
            },
          ],
        },
      },
    ],
  },
  fields: presetFields,
  render: renderWide,
};

// ============================================
// PRESET: SIMPLE CTA
// Accent bg, centered H2 + text + single button
// ============================================
export const PresetSimpleCTAConfig: ComponentConfig<PresetSectionProps> = {
  label: "Preset: Simple CTA",
  defaultProps: {
    backgroundColor: "var(--ds-accent, #6366f1)",
    paddingTop: "80px",
    paddingBottom: "80px",
    content: [
      {
        type: "Heading",
        props: {
          text: "Ready to Get Started?",
          level: "h2",
          fontSize: "36px",
          fontWeight: "700",
          color: "#ffffff",
          textAlign: "center",
          marginBottom: "16px",
        },
      },
      {
        type: "Text",
        props: {
          text: "Join thousands of satisfied customers and start building your dream website today.",
          fontSize: "18px",
          color: "rgba(255,255,255,0.85)",
          textAlign: "center",
          lineHeight: "1.6",
          marginBottom: "32px",
          maxWidth: "560px",
        },
      },
      {
        type: "Flex",
        props: {
          direction: "row",
          justifyContent: "center",
          content: [
            {
              type: "Button",
              props: {
                text: "Start Free Trial",
                href: "#",
                variant: "primary",
                size: "lg",
                backgroundColor: "#ffffff",
                textColor: "var(--ds-accent, #6366f1)",
                borderRadius: "8px",
              },
            },
          ],
        },
      },
    ],
  },
  fields: presetFields,
  render: renderCentered,
};

// ============================================
// PRESET: FEATURES GRID
// White bg, heading + 3-column grid of feature cards
// ============================================
export const PresetFeaturesGridConfig: ComponentConfig<PresetSectionProps> = {
  label: "Preset: Features Grid",
  defaultProps: {
    backgroundColor: "var(--ds-background, #ffffff)",
    paddingTop: "80px",
    paddingBottom: "80px",
    content: [
      {
        type: "Heading",
        props: {
          text: "Everything You Need",
          level: "h2",
          fontSize: "36px",
          fontWeight: "700",
          color: "var(--ds-text, #0f172a)",
          textAlign: "center",
          marginBottom: "8px",
        },
      },
      {
        type: "Text",
        props: {
          text: "Powerful features to help you build better websites faster.",
          fontSize: "18px",
          color: "var(--ds-text-muted, #64748b)",
          textAlign: "center",
          lineHeight: "1.6",
          marginBottom: "0px",
        },
      },
      {
        type: "Spacer",
        props: { height: "48px" },
      },
      {
        type: "Grid",
        props: {
          columns: 3,
          gap: "32px",
          column0: [
            {
              type: "Box",
              props: {
                padding: "24px",
                backgroundColor: "var(--ds-neutral, #f1f5f9)",
                borderRadius: "12px",
                content: [
                  {
                    type: "Heading",
                    props: {
                      text: "Drag & Drop",
                      level: "h3",
                      fontSize: "20px",
                      fontWeight: "600",
                      color: "var(--ds-text, #0f172a)",
                      marginBottom: "8px",
                    },
                  },
                  {
                    type: "Text",
                    props: {
                      text: "Build pages visually with our intuitive editor. No coding required.",
                      fontSize: "16px",
                      color: "var(--ds-text-muted, #64748b)",
                      lineHeight: "1.6",
                    },
                  },
                ],
              },
            },
          ],
          column1: [
            {
              type: "Box",
              props: {
                padding: "24px",
                backgroundColor: "var(--ds-neutral, #f1f5f9)",
                borderRadius: "12px",
                content: [
                  {
                    type: "Heading",
                    props: {
                      text: "Responsive Design",
                      level: "h3",
                      fontSize: "20px",
                      fontWeight: "600",
                      color: "var(--ds-text, #0f172a)",
                      marginBottom: "8px",
                    },
                  },
                  {
                    type: "Text",
                    props: {
                      text: "Your sites look great on any device, from desktop to mobile.",
                      fontSize: "16px",
                      color: "var(--ds-text-muted, #64748b)",
                      lineHeight: "1.6",
                    },
                  },
                ],
              },
            },
          ],
          column2: [
            {
              type: "Box",
              props: {
                padding: "24px",
                backgroundColor: "var(--ds-neutral, #f1f5f9)",
                borderRadius: "12px",
                content: [
                  {
                    type: "Heading",
                    props: {
                      text: "Fast Performance",
                      level: "h3",
                      fontSize: "20px",
                      fontWeight: "600",
                      color: "var(--ds-text, #0f172a)",
                      marginBottom: "8px",
                    },
                  },
                  {
                    type: "Text",
                    props: {
                      text: "Optimized for speed and SEO from the ground up.",
                      fontSize: "16px",
                      color: "var(--ds-text-muted, #64748b)",
                      lineHeight: "1.6",
                    },
                  },
                ],
              },
            },
          ],
        },
      },
    ],
  },
  fields: presetFields,
  render: renderWide,
};

// ============================================
// PRESET: TESTIMONIALS
// Neutral bg, heading + 3-column grid of quote cards
// ============================================
export const PresetTestimonialsConfig: ComponentConfig<PresetSectionProps> = {
  label: "Preset: Testimonials",
  defaultProps: {
    backgroundColor: "var(--ds-neutral, #f1f5f9)",
    paddingTop: "80px",
    paddingBottom: "80px",
    content: [
      {
        type: "Heading",
        props: {
          text: "What Our Customers Say",
          level: "h2",
          fontSize: "36px",
          fontWeight: "700",
          color: "var(--ds-text, #0f172a)",
          textAlign: "center",
          marginBottom: "8px",
        },
      },
      {
        type: "Text",
        props: {
          text: "Trusted by thousands of businesses worldwide.",
          fontSize: "18px",
          color: "var(--ds-text-muted, #64748b)",
          textAlign: "center",
          lineHeight: "1.6",
          marginBottom: "0px",
        },
      },
      {
        type: "Spacer",
        props: { height: "48px" },
      },
      {
        type: "Grid",
        props: {
          columns: 3,
          gap: "24px",
          column0: [
            {
              type: "Box",
              props: {
                padding: "24px",
                backgroundColor: "var(--ds-background, #ffffff)",
                borderRadius: "12px",
                content: [
                  {
                    type: "Text",
                    props: {
                      text: '"This tool has completely transformed how we build websites. Highly recommended!"',
                      fontSize: "16px",
                      color: "var(--ds-text, #0f172a)",
                      lineHeight: "1.6",
                      marginBottom: "16px",
                    },
                  },
                  {
                    type: "Text",
                    props: {
                      text: "Sarah Johnson, CEO at TechCorp",
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "var(--ds-text-muted, #64748b)",
                    },
                  },
                ],
              },
            },
          ],
          column1: [
            {
              type: "Box",
              props: {
                padding: "24px",
                backgroundColor: "var(--ds-background, #ffffff)",
                borderRadius: "12px",
                content: [
                  {
                    type: "Text",
                    props: {
                      text: '"The best page builder I\'ve ever used. Simple, powerful, and beautiful results."',
                      fontSize: "16px",
                      color: "var(--ds-text, #0f172a)",
                      lineHeight: "1.6",
                      marginBottom: "16px",
                    },
                  },
                  {
                    type: "Text",
                    props: {
                      text: "Mike Chen, Designer at CreativeStudio",
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "var(--ds-text-muted, #64748b)",
                    },
                  },
                ],
              },
            },
          ],
          column2: [
            {
              type: "Box",
              props: {
                padding: "24px",
                backgroundColor: "var(--ds-background, #ffffff)",
                borderRadius: "12px",
                content: [
                  {
                    type: "Text",
                    props: {
                      text: '"We shipped our marketing site in half the time. Amazing product!"',
                      fontSize: "16px",
                      color: "var(--ds-text, #0f172a)",
                      lineHeight: "1.6",
                      marginBottom: "16px",
                    },
                  },
                  {
                    type: "Text",
                    props: {
                      text: "Emily Davis, Marketing at StartupXYZ",
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "var(--ds-text-muted, #64748b)",
                    },
                  },
                ],
              },
            },
          ],
        },
      },
    ],
  },
  fields: presetFields,
  render: renderWide,
};

// ============================================
// PRESET: CONTACT CTA
// White bg, Columns 1-1, text left + contact info right
// ============================================
export const PresetContactCTAConfig: ComponentConfig<PresetSectionProps> = {
  label: "Preset: Contact CTA",
  defaultProps: {
    backgroundColor: "var(--ds-background, #ffffff)",
    paddingTop: "80px",
    paddingBottom: "80px",
    content: [
      {
        type: "Columns",
        props: {
          layout: "1-1",
          gap: "48px",
          verticalAlign: "center",
          column0: [
            {
              type: "Heading",
              props: {
                text: "Let's Work Together",
                level: "h2",
                fontSize: "36px",
                fontWeight: "700",
                color: "var(--ds-text, #0f172a)",
                textAlign: "left",
                marginBottom: "16px",
              },
            },
            {
              type: "Text",
              props: {
                text: "Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible.",
                fontSize: "18px",
                color: "var(--ds-text-muted, #64748b)",
                textAlign: "left",
                lineHeight: "1.6",
                marginBottom: "24px",
              },
            },
            {
              type: "Button",
              props: {
                text: "Contact Us",
                href: "#contact",
                variant: "primary",
                size: "lg",
                borderRadius: "8px",
              },
            },
          ],
          column1: [
            {
              type: "Box",
              props: {
                padding: "32px",
                backgroundColor: "var(--ds-neutral, #f1f5f9)",
                borderRadius: "12px",
                content: [
                  {
                    type: "Heading",
                    props: {
                      text: "Contact Info",
                      level: "h3",
                      fontSize: "20px",
                      fontWeight: "600",
                      color: "var(--ds-text, #0f172a)",
                      marginBottom: "16px",
                    },
                  },
                  {
                    type: "Text",
                    props: {
                      text: "Email: hello@example.com",
                      fontSize: "16px",
                      color: "var(--ds-text-muted, #64748b)",
                      marginBottom: "8px",
                    },
                  },
                  {
                    type: "Text",
                    props: {
                      text: "Phone: (555) 123-4567",
                      fontSize: "16px",
                      color: "var(--ds-text-muted, #64748b)",
                      marginBottom: "8px",
                    },
                  },
                  {
                    type: "Text",
                    props: {
                      text: "Address: 123 Main St, Suite 100",
                      fontSize: "16px",
                      color: "var(--ds-text-muted, #64748b)",
                    },
                  },
                ],
              },
            },
          ],
        },
      },
    ],
  },
  fields: presetFields,
  render: renderWide,
};

// Export preset component names for the config
export const presetComponents = [
  "PresetHeroCentered",
  "PresetHeroSplit",
  "PresetSimpleCTA",
  "PresetFeaturesGrid",
  "PresetTestimonials",
  "PresetContactCTA",
];
