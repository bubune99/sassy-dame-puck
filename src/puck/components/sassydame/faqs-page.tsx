"use client";

import React from "react";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
const faqSections = [
  {
    title: "General",
    questions: [
      {
        q: "Do You Offer Wholesale Prices?",
        a: "Sure, we do offer wholesale prices for most of our products. Contact us for more information by clicking on the Chat With Us tab. We typically respond within an hour.",
      },
      {
        q: "Can I get my product personalized?",
        a: "It depends on the product. All options are outlined on the product page, so look out for customization options there.",
      },
      {
        q: "Can I request a refund?",
        a: "All sales are final. However, if you are unsatisfied with your purchase reach out to us at sassydame23@yahoo.com.",
      },
      {
        q: "Do I get a refund for a lost package?",
        a: "We have no control over lost packages after we provide proof of shipment. You will be responsible to contact UPS to file a claim. However, we will be happy to help with following up with the investigation.",
      },
    ],
  },
  {
    title: "Shipping",
    questions: [
      {
        q: "How Long Is Shipping?",
        a: "We ship out Monday through Friday, except on holidays. Orders are processed within 24-48 hours after being placed.",
      },
      {
        q: "Do you ship overseas?",
        a: "Yes, we ship all over the world. Shipping costs will apply, and will be added at checkout. We run discounts and promotions all year, so stay tuned for exclusive deals.",
      },
      {
        q: "How long will it take to get my order?",
        a: "It depends on where you are. Orders processed here will take 5-7 business days to arrive. Overseas deliveries can take anywhere from 7-16 days. Delivery details will be provided in your confirmation email.",
      },
      {
        q: "What shipping carriers do you use?",
        a: "We use all major carriers and local courier partners. You'll be asked to select a delivery method during checkout.",
      },
    ],
  },
  {
    title: "Products",
    questions: [
      {
        q: "Can I return my product?",
        a: "We always aim to make sure our customers love our products, but if you do need to return an order, we're happy to help. Just email us directly and we'll take you through the process.",
      },
      {
        q: "What is the same-day DTF cutoff?",
        a: "Same-day DTF and UV orders have a cutoff of 12pm Eastern Time, Tuesday through Saturday.",
      },
    ],
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left font-semibold hover:bg-muted/50 transition-colors"
      >
        {q}
        <ChevronDown
          className={`h-5 w-5 text-muted-foreground transition-transform shrink-0 ml-4 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      {open && <div className="px-5 pb-5 text-muted-foreground">{a}</div>}
    </div>
  );
}

export interface FAQsPageProps {
  content?: React.FC;
  heading?: string;
  description?: string;
  generalQ1?: string;
  generalA1?: string;
  generalQ2?: string;
  generalA2?: string;
  shippingQ1?: string;
  shippingA1?: string;
  shippingQ2?: string;
  shippingA2?: string;
  stillHaveQuestionText?: string;
  contactEmail?: string;
}

export function FAQsPage({
  content,
  heading = "Frequently Asked Questions",
  description = "Find answers to common questions about our products, shipping, and services.",
  generalQ1 = "Do You Offer Wholesale Prices?",
  generalA1 = "Sure, we do offer wholesale prices for most of our products. Contact us for more information by clicking on the Chat With Us tab. We typically respond within an hour.",
  generalQ2 = "Can I get my product personalized?",
  generalA2 = "It depends on the product. All options are outlined on the product page, so look out for customization options there.",
  shippingQ1 = "How Long Is Shipping?",
  shippingA1 = "We ship out Monday through Friday, except on holidays. Orders are processed within 24-48 hours after being placed.",
  shippingQ2 = "Do you ship overseas?",
  shippingA2 = "Yes, we ship all over the world. Shipping costs will apply, and will be added at checkout. We run discounts and promotions all year, so stay tuned for exclusive deals.",
  stillHaveQuestionText = "If we haven't answered your question, contact us and we'll get back to you as soon as possible.",
  contactEmail = "sassydame23@yahoo.com",
}: FAQsPageProps) {
  return (
    <main className="flex-1 py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
          {heading}
        </h1>
        <p className="text-muted-foreground text-lg mb-12">
          {description}
        </p>

        {(() => {
          const editableSections = [
            {
              title: "General",
              questions: [
                { q: generalQ1, a: generalA1 },
                { q: generalQ2, a: generalA2 },
                ...faqSections[0].questions.slice(2),
              ],
            },
            {
              title: "Shipping",
              questions: [
                { q: shippingQ1, a: shippingA1 },
                { q: shippingQ2, a: shippingA2 },
                ...faqSections[1].questions.slice(2),
              ],
            },
            ...faqSections.slice(2),
          ];
          return editableSections.map((section) => (
            <div key={section.title} className="mb-12">
              <h2 className="font-serif text-2xl font-bold mb-4">{section.title}</h2>
              <div className="space-y-3">
                {section.questions.map((faq) => (
                  <FAQItem key={faq.q} q={faq.q} a={faq.a} />
                ))}
              </div>
            </div>
          ));
        })()}

        <div className="mt-12 p-8 rounded-2xl bg-muted/50 border text-center">
          <h3 className="font-serif text-xl font-bold mb-2">Still have a question?</h3>
          <p className="text-muted-foreground mb-4">
            {stillHaveQuestionText}
          </p>
          <a
            href={`mailto:${contactEmail}`}
            className="inline-flex items-center text-primary font-semibold hover:underline"
          >
            {contactEmail}
          </a>
        </div>
      {content && typeof content === "function" && content({})}
</div>
    </main>
  );
}
