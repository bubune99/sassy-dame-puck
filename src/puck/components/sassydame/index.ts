"use client";

import React from "react";

// Import all SassyDame section components (existing)
import { HeroSection } from "./hero-section";
import { ServicesCTASection } from "./services-cta-section";
import { BentoFeatures } from "./bento-features";
import { DTFPromoSection } from "./dtf-promo-section";
import { ProductsCTASection } from "./products-cta-section";
import { BrandShowcase } from "./brand-showcase";
import { GoogleReviewsSection } from "./google-reviews-section";
import { PhotoGallerySection } from "./photo-gallery-section";

// Home page sections
import { HomeHero } from "./home-hero";
import { HomeExplore } from "./home-explore";
import { HomeProductGrid } from "./home-product-grid";
import { HomeStickerMall } from "./home-sticker-mall";
import { HomeSignsBanners } from "./home-signs-banners";
import { HomeStorefront } from "./home-storefront";
import { HomeWhyChooseUs } from "./home-why-choose-us";
import { HomeFinalCta } from "./home-final-cta";

// DTF page sections
import { DtfHero } from "./dtf-hero";
import { DtfHowItWorks } from "./dtf-how-it-works";
import { DtfCategories } from "./dtf-categories";
import { DtfStickerComparison } from "./dtf-sticker-comparison";
import { DtfPricing } from "./dtf-pricing";

// Events page sections
import { EventsHero } from "./events-hero";
import { EventsListings } from "./events-listings";
import { EventsTypes } from "./events-types";
import { EventsRentals } from "./events-rentals";
import { EventsCustomShirts } from "./events-custom-shirts";
import { EventsCta } from "./events-cta";

// Services page sections
import { ServicesHero } from "./services-hero";
import { ServicesCards } from "./services-cards";
import { ServicesProcess } from "./services-process";
import { ServicesBulkPricing } from "./services-bulk-pricing";
import { ServicesCta } from "./services-cta";

// Studio page sections
import { StudioHero } from "./studio-hero";
import { StudioSpaces } from "./studio-spaces";
import { StudioPricing } from "./studio-pricing";
import { StudioEquipment } from "./studio-equipment";
import { StudioCta } from "./studio-cta";

// Secondary page components
import { AboutPage } from "./about-page";
import { ContactPage } from "./contact-page";
import { HeatPressRentalsPage } from "./heat-press-rentals-page";
import { EventsSpacePage } from "./events-space-page";
import { HallRentalsPage } from "./hall-rentals-page";
import { BulkOrderPage } from "./bulk-order-page";
import { GiftCardPage } from "./gift-card-page";
import { BlogPage } from "./blog-page";
import { DTFBuilderPage } from "./dtf-builder-page";
import { CustomShirtsPage } from "./custom-shirts-page";
import { StorefrontPage } from "./storefront-page";
import { FAQsPage } from "./faqs-page";
import { VisitUsPage } from "./visit-us-page";
import { PrivacyPolicyPage } from "./privacy-policy-page";
import { RefundPolicyPage } from "./refund-policy-page";
import { ShippingPolicyPage } from "./shipping-policy-page";
import { TermsOfServicePage } from "./terms-of-service-page";
import { TermsAndConditionPage } from "./terms-and-condition-page";

// Component names list for category registration
export const sassydameComponentNames = [
  // Existing
  "SassyDameHero",
  "SassyDameServicesCTA",
  "SassyDameBentoFeatures",
  "SassyDameDTFPromo",
  "SassyDameProductsCTA",
  "SassyDameBrandShowcase",
  "SassyDameGoogleReviews",
  "SassyDamePhotoGallery",
  // Home page
  "SassyDameHomeHero",
  "SassyDameHomeExplore",
  "SassyDameHomeProductGrid",
  "SassyDameHomeStickerMall",
  "SassyDameHomeSignsBanners",
  "SassyDameHomeStorefront",
  "SassyDameHomeWhyChooseUs",
  "SassyDameHomeFinalCta",
  // DTF page
  "SassyDameDtfHero",
  "SassyDameDtfHowItWorks",
  "SassyDameDtfCategories",
  "SassyDameDtfStickerComparison",
  "SassyDameDtfPricing",
  // Events page
  "SassyDameEventsHero",
  "SassyDameEventsListings",
  "SassyDameEventsTypes",
  "SassyDameEventsRentals",
  "SassyDameEventsCustomShirts",
  "SassyDameEventsCta",
  // Services page
  "SassyDameServicesHero",
  "SassyDameServicesCards",
  "SassyDameServicesProcess",
  "SassyDameServicesBulkPricing",
  "SassyDameServicesCta",
  // Studio page
  "SassyDameStudioHero",
  "SassyDameStudioSpaces",
  "SassyDameStudioPricing",
  "SassyDameStudioEquipment",
  "SassyDameStudioCta",
  // Secondary pages
  "SassyDameAbout",
  "SassyDameContact",
  "SassyDameHeatPressRentals",
  "SassyDameEventsSpace",
  "SassyDameHallRentals",
  "SassyDameBulkOrder",
  "SassyDameGiftCard",
  "SassyDameBlog",
  "SassyDameDTFBuilder",
  "SassyDameCustomShirts",
  "SassyDameStorefront",
  "SassyDameFAQs",
  "SassyDameVisitUs",
  "SassyDamePrivacyPolicy",
  "SassyDameRefundPolicy",
  "SassyDameShippingPolicy",
  "SassyDameTermsOfService",
  "SassyDameTermsAndCondition",
] as const;

// Partial Puck config for SassyDame components
// Merge into the main config: { ...puckConfig.components, ...sassydameComponents }
export const sassydameComponents = {
  // ── Existing ──
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

  // ── Home Page ──
  SassyDameHomeHero: {
    label: "Home: Hero (Location + CTAs + Trust Strip)",
    render: () => React.createElement(HomeHero),
    fields: {},
  },
  SassyDameHomeExplore: {
    label: "Home: Explore SassyDame (4 Pillars)",
    render: () => React.createElement(HomeExplore),
    fields: {},
  },
  SassyDameHomeProductGrid: {
    label: "Home: Product Categories Grid (7 Cards)",
    render: () => React.createElement(HomeProductGrid),
    fields: {},
  },
  SassyDameHomeStickerMall: {
    label: "Home: Sticker Mall (3 Cards + CTA)",
    render: () => React.createElement(HomeStickerMall),
    fields: {},
  },
  SassyDameHomeSignsBanners: {
    label: "Home: Signs & Banners",
    render: () => React.createElement(HomeSignsBanners),
    fields: {},
  },
  SassyDameHomeStorefront: {
    label: "Home: Custom Storefront (Split Layout)",
    render: () => React.createElement(HomeStorefront),
    fields: {},
  },
  SassyDameHomeWhyChooseUs: {
    label: "Home: Why Choose Us (Trust + Stats)",
    render: () => React.createElement(HomeWhyChooseUs),
    fields: {},
  },
  SassyDameHomeFinalCta: {
    label: "Home: Final CTA",
    render: () => React.createElement(HomeFinalCta),
    fields: {},
  },

  // ── DTF Page ──
  SassyDameDtfHero: {
    label: "DTF: Hero (24hr Badge + Product Cards)",
    render: () => React.createElement(DtfHero),
    fields: {},
  },
  SassyDameDtfHowItWorks: {
    label: "DTF: How It Works (4 Steps)",
    render: () => React.createElement(DtfHowItWorks),
    fields: {},
  },
  SassyDameDtfCategories: {
    label: "DTF: Product Categories (7 Cards)",
    render: () => React.createElement(DtfCategories),
    fields: {},
  },
  SassyDameDtfStickerComparison: {
    label: "DTF: UV DTF vs Regular Stickers",
    render: () => React.createElement(DtfStickerComparison),
    fields: {},
  },
  SassyDameDtfPricing: {
    label: "DTF: Transparent Pricing",
    render: () => React.createElement(DtfPricing),
    fields: {},
  },

  // ── Events Page ──
  SassyDameEventsHero: {
    label: "Events: Hero (Community + Stats)",
    render: () => React.createElement(EventsHero),
    fields: {},
  },
  SassyDameEventsListings: {
    label: "Events: Upcoming Listings (Filterable Grid)",
    render: () => React.createElement(EventsListings),
    fields: {},
  },
  SassyDameEventsTypes: {
    label: "Events: Event Types (6 Cards)",
    render: () => React.createElement(EventsTypes),
    fields: {},
  },
  SassyDameEventsRentals: {
    label: "Events: Space & Hall Rentals",
    render: () => React.createElement(EventsRentals),
    fields: {},
  },
  SassyDameEventsCustomShirts: {
    label: "Events: Custom Event Shirts",
    render: () => React.createElement(EventsCustomShirts),
    fields: {},
  },
  SassyDameEventsCta: {
    label: "Events: Final CTA",
    render: () => React.createElement(EventsCta),
    fields: {},
  },

  // ── Services Page ──
  SassyDameServicesHero: {
    label: "Services: Hero (Trust Metrics)",
    render: () => React.createElement(ServicesHero),
    fields: {},
  },
  SassyDameServicesCards: {
    label: "Services: Offerings (4 Glowing Cards)",
    render: () => React.createElement(ServicesCards),
    fields: {},
  },
  SassyDameServicesProcess: {
    label: "Services: How It Works (Timeline)",
    render: () => React.createElement(ServicesProcess),
    fields: {},
  },
  SassyDameServicesBulkPricing: {
    label: "Services: Volume Discounts",
    render: () => React.createElement(ServicesBulkPricing),
    fields: {},
  },
  SassyDameServicesCta: {
    label: "Services: Final CTA",
    render: () => React.createElement(ServicesCta),
    fields: {},
  },

  // ── Studio Page ──
  SassyDameStudioHero: {
    label: "Studio: Hero (Artistic + Image Cards)",
    render: () => React.createElement(StudioHero),
    fields: {},
  },
  SassyDameStudioSpaces: {
    label: "Studio: Two Spaces (Rentals + Events)",
    render: () => React.createElement(StudioSpaces),
    fields: {},
  },
  SassyDameStudioPricing: {
    label: "Studio: Pricing (3 Packages)",
    render: () => React.createElement(StudioPricing),
    fields: {},
  },
  SassyDameStudioEquipment: {
    label: "Studio: Equipment Grid (8 Items)",
    render: () => React.createElement(StudioEquipment),
    fields: {},
  },
  SassyDameStudioCta: {
    label: "Studio: Final CTA",
    render: () => React.createElement(StudioCta),
    fields: {},
  },

  // ── Secondary Pages ──
  SassyDameAbout: {
    label: "Page: About Us",
    render: () => React.createElement(AboutPage),
    fields: {},
  },
  SassyDameContact: {
    label: "Page: Contact",
    render: () => React.createElement(ContactPage),
    fields: {},
  },
  SassyDameHeatPressRentals: {
    label: "Page: Heat Press Rentals",
    render: () => React.createElement(HeatPressRentalsPage),
    fields: {},
  },
  SassyDameEventsSpace: {
    label: "Page: Events Space",
    render: () => React.createElement(EventsSpacePage),
    fields: {},
  },
  SassyDameHallRentals: {
    label: "Page: Hall Rentals",
    render: () => React.createElement(HallRentalsPage),
    fields: {},
  },
  SassyDameBulkOrder: {
    label: "Page: Bulk Order",
    render: () => React.createElement(BulkOrderPage),
    fields: {},
  },
  SassyDameGiftCard: {
    label: "Page: Gift Card",
    render: () => React.createElement(GiftCardPage),
    fields: {},
  },
  SassyDameBlog: {
    label: "Page: Blog",
    render: () => React.createElement(BlogPage),
    fields: {},
  },
  SassyDameDTFBuilder: {
    label: "Page: DTF Builder",
    render: () => React.createElement(DTFBuilderPage),
    fields: {},
  },
  SassyDameCustomShirts: {
    label: "Page: Custom Shirts",
    render: () => React.createElement(CustomShirtsPage),
    fields: {},
  },
  SassyDameStorefront: {
    label: "Page: Storefront",
    render: () => React.createElement(StorefrontPage),
    fields: {},
  },
  SassyDameFAQs: {
    label: "Page: FAQs",
    render: () => React.createElement(FAQsPage),
    fields: {},
  },
  SassyDameVisitUs: {
    label: "Page: Visit Us",
    render: () => React.createElement(VisitUsPage),
    fields: {},
  },
  SassyDamePrivacyPolicy: {
    label: "Page: Privacy Policy",
    render: () => React.createElement(PrivacyPolicyPage),
    fields: {},
  },
  SassyDameRefundPolicy: {
    label: "Page: Refund Policy",
    render: () => React.createElement(RefundPolicyPage),
    fields: {},
  },
  SassyDameShippingPolicy: {
    label: "Page: Shipping Policy",
    render: () => React.createElement(ShippingPolicyPage),
    fields: {},
  },
  SassyDameTermsOfService: {
    label: "Page: Terms of Service",
    render: () => React.createElement(TermsOfServicePage),
    fields: {},
  },
  SassyDameTermsAndCondition: {
    label: "Page: Terms and Condition",
    render: () => React.createElement(TermsAndConditionPage),
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
