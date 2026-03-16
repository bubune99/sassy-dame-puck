import { PrismaClient } from "@prisma/client";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("Seeding SassyDame pages...\n");

  const now = new Date();

  // ─── 1. Home Page ──────────────────────────────────────────────
  await prisma.page.upsert({
    where: { slug: "home" },
    update: {
      title: "Home",
      status: "PUBLISHED",
      publishedAt: now,
      content: {
        root: { props: {} },
        content: [
          { type: "SassyDameHomeHero", props: { id: "home-hero" } },
          { type: "SassyDameHomeExplore", props: { id: "home-explore" } },
          { type: "SassyDameHomeProductGrid", props: { id: "home-product-grid" } },
          { type: "SassyDameHomeStickerMall", props: { id: "home-sticker-mall" } },
          { type: "SassyDameHomeSignsBanners", props: { id: "home-signs-banners" } },
          { type: "SassyDameHomeStorefront", props: { id: "home-storefront" } },
          { type: "SassyDameHomeWhyChooseUs", props: { id: "home-why-choose-us" } },
          { type: "SassyDameHomeFinalCta", props: { id: "home-final-cta" } },
        ],
        zones: {},
      },
    },
    create: {
      title: "Home",
      slug: "home",
      status: "PUBLISHED",
      publishedAt: now,
      metaTitle: "SassyDame Designs | Your Local Craft Destination",
      metaDescription:
        "Premium DTF printing supplies, craft blanks, and everything you need to bring your creative vision to life.",
      content: {
        root: { props: {} },
        content: [
          { type: "SassyDameHomeHero", props: { id: "home-hero" } },
          { type: "SassyDameHomeExplore", props: { id: "home-explore" } },
          { type: "SassyDameHomeProductGrid", props: { id: "home-product-grid" } },
          { type: "SassyDameHomeStickerMall", props: { id: "home-sticker-mall" } },
          { type: "SassyDameHomeSignsBanners", props: { id: "home-signs-banners" } },
          { type: "SassyDameHomeStorefront", props: { id: "home-storefront" } },
          { type: "SassyDameHomeWhyChooseUs", props: { id: "home-why-choose-us" } },
          { type: "SassyDameHomeFinalCta", props: { id: "home-final-cta" } },
        ],
        zones: {},
      },
    },
  });
  console.log("  ✓ Home");

  // ─── 2. DTF Page ───────────────────────────────────────────────
  await prisma.page.upsert({
    where: { slug: "dtf" },
    update: {
      title: "DTF Printing",
      status: "PUBLISHED",
      publishedAt: now,
      content: {
        root: { props: {} },
        content: [
          { type: "SassyDameDtfHero", props: { id: "dtf-hero" } },
          { type: "SassyDameDtfHowItWorks", props: { id: "dtf-how-it-works" } },
          { type: "SassyDameDtfCategories", props: { id: "dtf-categories" } },
          { type: "SassyDameDtfStickerComparison", props: { id: "dtf-sticker-comparison" } },
          { type: "SassyDameDtfPricing", props: { id: "dtf-pricing" } },
        ],
        zones: {},
      },
    },
    create: {
      title: "DTF Printing",
      slug: "dtf",
      status: "PUBLISHED",
      publishedAt: now,
      metaTitle: "DTF Printing Services | SassyDame Designs",
      metaDescription:
        "Custom direct-to-film transfers with vibrant colors and lasting quality. No minimums, fast turnaround.",
      content: {
        root: { props: {} },
        content: [
          { type: "SassyDameDtfHero", props: { id: "dtf-hero" } },
          { type: "SassyDameDtfHowItWorks", props: { id: "dtf-how-it-works" } },
          { type: "SassyDameDtfCategories", props: { id: "dtf-categories" } },
          { type: "SassyDameDtfStickerComparison", props: { id: "dtf-sticker-comparison" } },
          { type: "SassyDameDtfPricing", props: { id: "dtf-pricing" } },
        ],
        zones: {},
      },
    },
  });
  console.log("  ✓ DTF");

  // ─── 3. Events Page ────────────────────────────────────────────
  await prisma.page.upsert({
    where: { slug: "events" },
    update: {
      title: "Events & Workshops",
      status: "PUBLISHED",
      publishedAt: now,
      content: {
        root: { props: {} },
        content: [
          { type: "SassyDameEventsHero", props: { id: "events-hero" } },
          { type: "SassyDameEventsListings", props: { id: "events-listings" } },
          { type: "SassyDameEventsTypes", props: { id: "events-types" } },
          { type: "SassyDameEventsRentals", props: { id: "events-rentals" } },
          { type: "SassyDameEventsCustomShirts", props: { id: "events-custom-shirts" } },
          { type: "SassyDameEventsCta", props: { id: "events-cta" } },
        ],
        zones: {},
      },
    },
    create: {
      title: "Events & Workshops",
      slug: "events",
      status: "PUBLISHED",
      publishedAt: now,
      metaTitle: "Events & Workshops | SassyDame Designs",
      metaDescription:
        "Workshops, craft nights, and community events for all skill levels. Learn new techniques and meet fellow crafters.",
      content: {
        root: { props: {} },
        content: [
          { type: "SassyDameEventsHero", props: { id: "events-hero" } },
          { type: "SassyDameEventsListings", props: { id: "events-listings" } },
          { type: "SassyDameEventsTypes", props: { id: "events-types" } },
          { type: "SassyDameEventsRentals", props: { id: "events-rentals" } },
          { type: "SassyDameEventsCustomShirts", props: { id: "events-custom-shirts" } },
          { type: "SassyDameEventsCta", props: { id: "events-cta" } },
        ],
        zones: {},
      },
    },
  });
  console.log("  ✓ Events");

  // ─── 4. Services Page ──────────────────────────────────────────
  await prisma.page.upsert({
    where: { slug: "services" },
    update: {
      title: "Services",
      status: "PUBLISHED",
      publishedAt: now,
      content: {
        root: { props: {} },
        content: [
          { type: "SassyDameServicesHero", props: { id: "services-hero" } },
          { type: "SassyDameServicesCards", props: { id: "services-cards" } },
          { type: "SassyDameServicesProcess", props: { id: "services-process" } },
          { type: "SassyDameServicesBulkPricing", props: { id: "services-bulk-pricing" } },
          { type: "SassyDameServicesCta", props: { id: "services-cta" } },
        ],
        zones: {},
      },
    },
    create: {
      title: "Services",
      slug: "services",
      status: "PUBLISHED",
      publishedAt: now,
      metaTitle: "Services | SassyDame Designs",
      metaDescription:
        "Custom apparel, bulk orders, storefronts for teams & schools, signs, banners & more.",
      content: {
        root: { props: {} },
        content: [
          { type: "SassyDameServicesHero", props: { id: "services-hero" } },
          { type: "SassyDameServicesCards", props: { id: "services-cards" } },
          { type: "SassyDameServicesProcess", props: { id: "services-process" } },
          { type: "SassyDameServicesBulkPricing", props: { id: "services-bulk-pricing" } },
          { type: "SassyDameServicesCta", props: { id: "services-cta" } },
        ],
        zones: {},
      },
    },
  });
  console.log("  ✓ Services");

  // ─── 5. Studio Page ────────────────────────────────────────────
  await prisma.page.upsert({
    where: { slug: "studio" },
    update: {
      title: "Studio",
      status: "PUBLISHED",
      publishedAt: now,
      content: {
        root: { props: {} },
        content: [
          { type: "SassyDameStudioHero", props: { id: "studio-hero" } },
          { type: "SassyDameStudioSpaces", props: { id: "studio-spaces" } },
          { type: "SassyDameStudioPricing", props: { id: "studio-pricing" } },
          { type: "SassyDameStudioEquipment", props: { id: "studio-equipment" } },
          { type: "SassyDameStudioCta", props: { id: "studio-cta" } },
        ],
        zones: {},
      },
    },
    create: {
      title: "Studio",
      slug: "studio",
      status: "PUBLISHED",
      publishedAt: now,
      metaTitle: "Crafting Studio | SassyDame Designs",
      metaDescription:
        "Rent professional heat presses, cutting machines, and expert guidance for your projects.",
      content: {
        root: { props: {} },
        content: [
          { type: "SassyDameStudioHero", props: { id: "studio-hero" } },
          { type: "SassyDameStudioSpaces", props: { id: "studio-spaces" } },
          { type: "SassyDameStudioPricing", props: { id: "studio-pricing" } },
          { type: "SassyDameStudioEquipment", props: { id: "studio-equipment" } },
          { type: "SassyDameStudioCta", props: { id: "studio-cta" } },
        ],
        zones: {},
      },
    },
  });
  console.log("  ✓ Studio");

  // ─── 6. About Page ─────────────────────────────────────────────
  await prisma.page.upsert({
    where: { slug: "about" },
    update: {
      title: "About Us",
      status: "PUBLISHED",
      publishedAt: now,
      content: {
        root: { props: {} },
        content: [
          { type: "SassyDameAbout", props: { id: "about-page" } },
        ],
        zones: {},
      },
    },
    create: {
      title: "About Us",
      slug: "about",
      status: "PUBLISHED",
      publishedAt: now,
      metaTitle: "About SassyDame Designs | Our Story",
      metaDescription:
        "Learn about SassyDame Designs — your local Raleigh craft and print studio.",
      content: {
        root: { props: {} },
        content: [
          { type: "SassyDameAbout", props: { id: "about-page" } },
        ],
        zones: {},
      },
    },
  });
  console.log("  ✓ About");

  // ─── 7. Contact Page ───────────────────────────────────────────
  await prisma.page.upsert({
    where: { slug: "contact" },
    update: {
      title: "Contact Us",
      status: "PUBLISHED",
      publishedAt: now,
      content: {
        root: { props: {} },
        content: [
          { type: "SassyDameContact", props: { id: "contact-page" } },
        ],
        zones: {},
      },
    },
    create: {
      title: "Contact Us",
      slug: "contact",
      status: "PUBLISHED",
      publishedAt: now,
      metaTitle: "Contact SassyDame Designs | Get in Touch",
      metaDescription:
        "Reach out to SassyDame Designs for custom orders, studio rentals, event bookings, and more.",
      content: {
        root: { props: {} },
        content: [
          { type: "SassyDameContact", props: { id: "contact-page" } },
        ],
        zones: {},
      },
    },
  });
  console.log("  ✓ Contact");

  // ─── 8. Heat Press Rentals (Crafting Studio Rentals) ───────────
  await prisma.page.upsert({
    where: { slug: "crafting-studio-rentals" },
    update: {
      title: "Heat Press Rentals",
      status: "PUBLISHED",
      publishedAt: now,
      content: {
        root: { props: {} },
        content: [
          { type: "SassyDameHeatPressRentals", props: { id: "heat-press-rentals-page" } },
        ],
        zones: {},
      },
    },
    create: {
      title: "Heat Press Rentals",
      slug: "crafting-studio-rentals",
      status: "PUBLISHED",
      publishedAt: now,
      metaTitle: "Heat Press Rentals | SassyDame Designs",
      metaDescription:
        "Rent professional heat presses, cutting machines, and expert guidance for your projects.",
      content: {
        root: { props: {} },
        content: [
          { type: "SassyDameHeatPressRentals", props: { id: "heat-press-rentals-page" } },
        ],
        zones: {},
      },
    },
  });
  console.log("  ✓ Heat Press Rentals");

  // ─── 9. Events Space Rentals ───────────────────────────────────
  await prisma.page.upsert({
    where: { slug: "events-space-rentals" },
    update: {
      title: "Events Space Rentals",
      status: "PUBLISHED",
      publishedAt: now,
      content: {
        root: { props: {} },
        content: [
          { type: "SassyDameEventsSpace", props: { id: "events-space-page" } },
        ],
        zones: {},
      },
    },
    create: {
      title: "Events Space Rentals",
      slug: "events-space-rentals",
      status: "PUBLISHED",
      publishedAt: now,
      metaTitle: "Events Space Rentals | SassyDame Designs",
      metaDescription:
        "Book our versatile event space for parties, team-building workshops, and community gatherings.",
      content: {
        root: { props: {} },
        content: [
          { type: "SassyDameEventsSpace", props: { id: "events-space-page" } },
        ],
        zones: {},
      },
    },
  });
  console.log("  ✓ Events Space Rentals");

  // ─── 10. Hall Rentals ──────────────────────────────────────────
  await prisma.page.upsert({
    where: { slug: "hall-rentals" },
    update: {
      title: "Hall Rentals",
      status: "PUBLISHED",
      publishedAt: now,
      content: {
        root: { props: {} },
        content: [
          { type: "SassyDameHallRentals", props: { id: "hall-rentals-page" } },
        ],
        zones: {},
      },
    },
    create: {
      title: "Hall Rentals",
      slug: "hall-rentals",
      status: "PUBLISHED",
      publishedAt: now,
      metaTitle: "Hall Rentals | SassyDame Designs",
      metaDescription:
        "Rent our hall for birthday parties, baby showers, meetings, and special occasions in Raleigh, NC.",
      content: {
        root: { props: {} },
        content: [
          { type: "SassyDameHallRentals", props: { id: "hall-rentals-page" } },
        ],
        zones: {},
      },
    },
  });
  console.log("  ✓ Hall Rentals");

  // ─── 11. Bulk Order ────────────────────────────────────────────
  await prisma.page.upsert({
    where: { slug: "bulk-order" },
    update: {
      title: "Bulk Order",
      status: "PUBLISHED",
      publishedAt: now,
      content: {
        root: { props: {} },
        content: [
          { type: "SassyDameBulkOrder", props: { id: "bulk-order-page" } },
        ],
        zones: {},
      },
    },
    create: {
      title: "Bulk Order",
      slug: "bulk-order",
      status: "PUBLISHED",
      publishedAt: now,
      metaTitle: "Bulk Orders | SassyDame Designs",
      metaDescription:
        "Volume pricing on DTF transfers, custom apparel, and stickers. Perfect for businesses, teams, and events.",
      content: {
        root: { props: {} },
        content: [
          { type: "SassyDameBulkOrder", props: { id: "bulk-order-page" } },
        ],
        zones: {},
      },
    },
  });
  console.log("  ✓ Bulk Order");

  // ─── 12. Gift Card ─────────────────────────────────────────────
  await prisma.page.upsert({
    where: { slug: "gift-card" },
    update: {
      title: "Gift Card",
      status: "PUBLISHED",
      publishedAt: now,
      content: {
        root: { props: {} },
        content: [
          { type: "SassyDameGiftCard", props: { id: "gift-card-page" } },
        ],
        zones: {},
      },
    },
    create: {
      title: "Gift Card",
      slug: "gift-card",
      status: "PUBLISHED",
      publishedAt: now,
      metaTitle: "Gift Cards | SassyDame Designs",
      metaDescription:
        "Give the gift of creativity with a SassyDame Designs gift card.",
      content: {
        root: { props: {} },
        content: [
          { type: "SassyDameGiftCard", props: { id: "gift-card-page" } },
        ],
        zones: {},
      },
    },
  });
  console.log("  ✓ Gift Card");

  // ─── 13. Blog ──────────────────────────────────────────────────
  await prisma.page.upsert({
    where: { slug: "blog" },
    update: {
      title: "Blog",
      status: "PUBLISHED",
      publishedAt: now,
      content: {
        root: { props: {} },
        content: [
          { type: "SassyDameBlog", props: { id: "blog-page" } },
        ],
        zones: {},
      },
    },
    create: {
      title: "Blog",
      slug: "blog",
      status: "PUBLISHED",
      publishedAt: now,
      metaTitle: "Blog | SassyDame Designs",
      metaDescription:
        "Tips, tutorials, and updates from the SassyDame Designs team.",
      content: {
        root: { props: {} },
        content: [
          { type: "SassyDameBlog", props: { id: "blog-page" } },
        ],
        zones: {},
      },
    },
  });
  console.log("  ✓ Blog");

  // ─── 14. DTF Builder ───────────────────────────────────────────
  await prisma.page.upsert({
    where: { slug: "dtf-builder" },
    update: {
      title: "DTF Builder",
      status: "PUBLISHED",
      publishedAt: now,
      content: {
        root: { props: {} },
        content: [
          { type: "SassyDameDTFBuilder", props: { id: "dtf-builder-page" } },
        ],
        zones: {},
      },
    },
    create: {
      title: "DTF Builder",
      slug: "dtf-builder",
      status: "PUBLISHED",
      publishedAt: now,
      metaTitle: "DTF Transfer Builder | SassyDame Designs",
      metaDescription:
        "Build your custom DTF transfer — upload your design, pick your size, and order in minutes.",
      content: {
        root: { props: {} },
        content: [
          { type: "SassyDameDTFBuilder", props: { id: "dtf-builder-page" } },
        ],
        zones: {},
      },
    },
  });
  console.log("  ✓ DTF Builder");

  // ─── 15. Custom Event Shirts ───────────────────────────────────
  await prisma.page.upsert({
    where: { slug: "events/custom-shirts" },
    update: {
      title: "Custom Event Shirts",
      status: "PUBLISHED",
      publishedAt: now,
      content: {
        root: { props: {} },
        content: [
          { type: "SassyDameCustomShirts", props: { id: "custom-shirts-page" } },
        ],
        zones: {},
      },
    },
    create: {
      title: "Custom Event Shirts",
      slug: "events/custom-shirts",
      status: "PUBLISHED",
      publishedAt: now,
      metaTitle: "Custom Event Shirts | SassyDame Designs",
      metaDescription:
        "Custom shirts for your event — reunions, birthdays, corporate outings, and more.",
      content: {
        root: { props: {} },
        content: [
          { type: "SassyDameCustomShirts", props: { id: "custom-shirts-page" } },
        ],
        zones: {},
      },
    },
  });
  console.log("  ✓ Custom Event Shirts");

  // ─── 16. Custom Storefront ─────────────────────────────────────
  await prisma.page.upsert({
    where: { slug: "services/storefront" },
    update: {
      title: "Custom Storefront",
      status: "PUBLISHED",
      publishedAt: now,
      content: {
        root: { props: {} },
        content: [
          { type: "SassyDameStorefront", props: { id: "storefront-page" } },
        ],
        zones: {},
      },
    },
    create: {
      title: "Custom Storefront",
      slug: "services/storefront",
      status: "PUBLISHED",
      publishedAt: now,
      metaTitle: "Custom Storefront | SassyDame Designs",
      metaDescription:
        "We build custom online storefronts for teams, schools, and organizations with no upfront cost.",
      content: {
        root: { props: {} },
        content: [
          { type: "SassyDameStorefront", props: { id: "storefront-page" } },
        ],
        zones: {},
      },
    },
  });
  console.log("  ✓ Custom Storefront");

  // ─── 17. FAQs ──────────────────────────────────────────────────
  await prisma.page.upsert({
    where: { slug: "pages/faqs" },
    update: {
      title: "FAQs",
      status: "PUBLISHED",
      publishedAt: now,
      content: {
        root: { props: {} },
        content: [
          { type: "SassyDameFAQs", props: { id: "faqs-page" } },
        ],
        zones: {},
      },
    },
    create: {
      title: "FAQs",
      slug: "pages/faqs",
      status: "PUBLISHED",
      publishedAt: now,
      metaTitle: "Frequently Asked Questions | SassyDame Designs",
      metaDescription:
        "Answers to common questions about DTF printing, studio rentals, custom orders, and more.",
      content: {
        root: { props: {} },
        content: [
          { type: "SassyDameFAQs", props: { id: "faqs-page" } },
        ],
        zones: {},
      },
    },
  });
  console.log("  ✓ FAQs");

  // ─── 18. Visit Us ──────────────────────────────────────────────
  await prisma.page.upsert({
    where: { slug: "pages/visit-us" },
    update: {
      title: "Visit Us",
      status: "PUBLISHED",
      publishedAt: now,
      content: {
        root: { props: {} },
        content: [
          { type: "SassyDameVisitUs", props: { id: "visit-us-page" } },
        ],
        zones: {},
      },
    },
    create: {
      title: "Visit Us",
      slug: "pages/visit-us",
      status: "PUBLISHED",
      publishedAt: now,
      metaTitle: "Visit Us | SassyDame Designs",
      metaDescription:
        "Find us in Raleigh, NC — store hours, directions, and what to expect when you visit.",
      content: {
        root: { props: {} },
        content: [
          { type: "SassyDameVisitUs", props: { id: "visit-us-page" } },
        ],
        zones: {},
      },
    },
  });
  console.log("  ✓ Visit Us");

  // ─── 19. Privacy Policy ────────────────────────────────────────
  await prisma.page.upsert({
    where: { slug: "policies/privacy-policy" },
    update: {
      title: "Privacy Policy",
      status: "PUBLISHED",
      publishedAt: now,
      content: {
        root: { props: {} },
        content: [
          { type: "SassyDamePrivacyPolicy", props: { id: "privacy-policy-page" } },
        ],
        zones: {},
      },
    },
    create: {
      title: "Privacy Policy",
      slug: "policies/privacy-policy",
      status: "PUBLISHED",
      publishedAt: now,
      metaTitle: "Privacy Policy | SassyDame Designs",
      metaDescription:
        "How SassyDame Designs collects, uses, and protects your personal information.",
      content: {
        root: { props: {} },
        content: [
          { type: "SassyDamePrivacyPolicy", props: { id: "privacy-policy-page" } },
        ],
        zones: {},
      },
    },
  });
  console.log("  ✓ Privacy Policy");

  // ─── 20. Refund Policy ─────────────────────────────────────────
  await prisma.page.upsert({
    where: { slug: "policies/refund-policy" },
    update: {
      title: "Refund Policy",
      status: "PUBLISHED",
      publishedAt: now,
      content: {
        root: { props: {} },
        content: [
          { type: "SassyDameRefundPolicy", props: { id: "refund-policy-page" } },
        ],
        zones: {},
      },
    },
    create: {
      title: "Refund Policy",
      slug: "policies/refund-policy",
      status: "PUBLISHED",
      publishedAt: now,
      metaTitle: "Refund Policy | SassyDame Designs",
      metaDescription:
        "Our refund and return policy for products and services.",
      content: {
        root: { props: {} },
        content: [
          { type: "SassyDameRefundPolicy", props: { id: "refund-policy-page" } },
        ],
        zones: {},
      },
    },
  });
  console.log("  ✓ Refund Policy");

  // ─── 21. Shipping Policy ───────────────────────────────────────
  await prisma.page.upsert({
    where: { slug: "policies/shipping-policy" },
    update: {
      title: "Shipping Policy",
      status: "PUBLISHED",
      publishedAt: now,
      content: {
        root: { props: {} },
        content: [
          { type: "SassyDameShippingPolicy", props: { id: "shipping-policy-page" } },
        ],
        zones: {},
      },
    },
    create: {
      title: "Shipping Policy",
      slug: "policies/shipping-policy",
      status: "PUBLISHED",
      publishedAt: now,
      metaTitle: "Shipping Policy | SassyDame Designs",
      metaDescription:
        "Shipping rates, delivery times, and order tracking information.",
      content: {
        root: { props: {} },
        content: [
          { type: "SassyDameShippingPolicy", props: { id: "shipping-policy-page" } },
        ],
        zones: {},
      },
    },
  });
  console.log("  ✓ Shipping Policy");

  // ─── 22. Terms of Service ──────────────────────────────────────
  await prisma.page.upsert({
    where: { slug: "policies/terms-of-service" },
    update: {
      title: "Terms of Service",
      status: "PUBLISHED",
      publishedAt: now,
      content: {
        root: { props: {} },
        content: [
          { type: "SassyDameTermsOfService", props: { id: "terms-of-service-page" } },
        ],
        zones: {},
      },
    },
    create: {
      title: "Terms of Service",
      slug: "policies/terms-of-service",
      status: "PUBLISHED",
      publishedAt: now,
      metaTitle: "Terms of Service | SassyDame Designs",
      metaDescription:
        "Terms and conditions governing the use of SassyDame Designs services.",
      content: {
        root: { props: {} },
        content: [
          { type: "SassyDameTermsOfService", props: { id: "terms-of-service-page" } },
        ],
        zones: {},
      },
    },
  });
  console.log("  ✓ Terms of Service");

  // ─── 23. Terms and Condition ───────────────────────────────────
  await prisma.page.upsert({
    where: { slug: "pages/terms-and-condition" },
    update: {
      title: "Terms and Condition",
      status: "PUBLISHED",
      publishedAt: now,
      content: {
        root: { props: {} },
        content: [
          { type: "SassyDameTermsAndCondition", props: { id: "terms-and-condition-page" } },
        ],
        zones: {},
      },
    },
    create: {
      title: "Terms and Condition",
      slug: "pages/terms-and-condition",
      status: "PUBLISHED",
      publishedAt: now,
      metaTitle: "Terms and Condition | SassyDame Designs",
      metaDescription:
        "General terms and conditions for SassyDame Designs products and services.",
      content: {
        root: { props: {} },
        content: [
          { type: "SassyDameTermsAndCondition", props: { id: "terms-and-condition-page" } },
        ],
        zones: {},
      },
    },
  });
  console.log("  ✓ Terms and Condition");

  console.log("\n✅ Seeded 23 SassyDame pages successfully!");
}

main()
  .catch((e) => {
    console.error("Seed error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    await pool.end();
  });
