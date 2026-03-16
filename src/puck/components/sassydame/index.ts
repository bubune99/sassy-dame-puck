"use client";

import React from "react";

// Import all SassyDame section components
import { HeroSection } from "./hero-section";
import { ServicesCTASection } from "./services-cta-section";
import { BentoFeatures } from "./bento-features";
import { DTFPromoSection } from "./dtf-promo-section";
import { ProductsCTASection } from "./products-cta-section";
import { BrandShowcase } from "./brand-showcase";
import { GoogleReviewsSection } from "./google-reviews-section";
import { PhotoGallerySection } from "./photo-gallery-section";

// Component names list for category registration
export const sassydameComponentNames = [
  "SassyDameHero",
  "SassyDameServicesCTA",
  "SassyDameBentoFeatures",
  "SassyDameDTFPromo",
  "SassyDameProductsCTA",
  "SassyDameBrandShowcase",
  "SassyDameGoogleReviews",
  "SassyDamePhotoGallery",
] as const;

// Partial Puck config for SassyDame components
// Merge into the main config: { ...puckConfig.components, ...sassydameComponents }
export const sassydameComponents = {
  SassyDameHero: {
    label: "SassyDame Hero",
    render: () => React.createElement(HeroSection),
    fields: {},
  },
  SassyDameServicesCTA: {
    label: "SassyDame Services CTA",
    render: () => React.createElement(ServicesCTASection),
    fields: {},
  },
  SassyDameBentoFeatures: {
    label: "SassyDame Bento Features",
    render: () => React.createElement(BentoFeatures),
    fields: {},
  },
  SassyDameDTFPromo: {
    label: "SassyDame DTF Promo",
    render: () => React.createElement(DTFPromoSection),
    fields: {},
  },
  SassyDameProductsCTA: {
    label: "SassyDame Products CTA",
    render: () => React.createElement(ProductsCTASection),
    fields: {},
  },
  SassyDameBrandShowcase: {
    label: "SassyDame Brand Showcase",
    render: () => React.createElement(BrandShowcase),
    fields: {},
  },
  SassyDameGoogleReviews: {
    label: "SassyDame Google Reviews",
    render: () => React.createElement(GoogleReviewsSection),
    fields: {},
  },
  SassyDamePhotoGallery: {
    label: "SassyDame Photo Gallery",
    render: () => React.createElement(PhotoGallerySection),
    fields: {},
  },
};

// Category definition for the Puck sidebar
// Merge into the main config: { ...puckConfig.categories, ...sassydameCategory }
export const sassydameCategory = {
  sassydame: {
    title: "SassyDame Sections",
    components: [...sassydameComponentNames],
    defaultExpanded: true,
  },
};
