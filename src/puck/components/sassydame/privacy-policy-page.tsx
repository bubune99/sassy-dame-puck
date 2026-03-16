"use client";
import { DropZone } from "@puckeditor/core";

export interface PrivacyPolicyPageProps {
  title?: string;
  content?: string;
}

const defaultContent = `SassyDame Designs does not share customer information (including email addresses) outside the SassyDame family of companies unless it is necessary to provide you with products or services available from our store. We may also disclose information when you tell us to do so, to identify or contact you, to protect your rights or the rights of SassyDame or as required or permitted by law.

In this policy, "personal information" means any information by which you can be identified or contacted, such as your name (first and last), address (city, state, zip), email address, telephone number, etc.

This Privacy Policy governs your experience in our stores and on this website unless otherwise indicated.

Information We Collect

When you make a purchase or attempt to make a purchase through our store, we collect certain information from you, including your name, billing address, shipping address, payment information, email address, and phone number. This is referred to as "Order Information."

How We Use Your Information

We use the Order Information that we collect generally to fulfill any orders placed through the store (including processing your payment information, arranging for shipping, and providing you with invoices and/or order confirmations). Additionally, we use this Order Information to communicate with you and screen our orders for potential risk or fraud.

Sharing Your Information

We do not sell, trade, or otherwise transfer your personal information to outside parties. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential.

Contact Us

For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by email at sassydame23@yahoo.com or by mail at: 1230 Green Street, Raleigh, NC 27603.`;

export function PrivacyPolicyPage({
  title = "Privacy Policy",
  content = defaultContent,
}: PrivacyPolicyPageProps) {
  const paragraphs = content.split('\n\n');

  return (
    <main className="flex-1 py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="font-serif text-4xl md:text-5xl font-bold mb-8">{title}</h1>

        <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
          {paragraphs.map((paragraph, i) => {
            const trimmed = paragraph.trim();
            if (!trimmed) return null;
            // If it looks like a heading (short, no period at end)
            if (trimmed.length < 60 && !trimmed.endsWith('.') && !trimmed.endsWith('"') && !trimmed.includes('. ')) {
              return <h2 key={i} className="text-2xl font-bold text-foreground mt-10">{trimmed}</h2>;
            }
            return <p key={i}>{trimmed}</p>;
          })}
        </div>
      </div>

      {/* Puck: Editable content slot */}
      <DropZone zone="content" />
    </main>
  );
}
