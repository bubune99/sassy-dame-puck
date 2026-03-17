"use client";

import React from "react";
export interface TermsAndConditionPageProps {
  content?: React.FC;
  title?: string;
  bodyContent?: string;
}

const defaultContent = `Please read these Terms and Conditions ("Agreement") carefully before placing an order with our customized store ("Store"). This Agreement sets forth the legally binding terms and conditions for your use of our Store and the purchase of our products. By accessing or using our Store, you agree to be bound by this Agreement. If you do not agree to these terms and conditions, you may not use or purchase products from our Store.

Sales and Returns

All sales are considered final, but we do offer store credit, refunds, or replacements in the case of a defective item being received. If you receive a defective product, please contact our customer support within 7 days of purchase, providing supporting evidence such as pictures or videos for assessment.

Product Usage and Liability

Our products are intended for their designated purposes only. We are not responsible for any damage, injury, or misuse of our products by anyone. It is your responsibility to use our products in accordance with their intended use and any safety guidelines provided.

Shipping and Delivery

We strive to process and ship orders promptly. However, please note that shipping times may vary depending on factors beyond our control, such as carrier delays and customs procedures. We aim to ship out orders from Monday to Friday, excluding weekends and holidays. Once your order has been shipped, you will receive a confirmation email with tracking information to monitor the progress of your delivery.

While we strive to ensure the safe delivery of your package, we strongly recommend adding shipping insurance during checkout. By opting for shipping insurance, you can protect your purchase against any loss or damage that may occur during transit. If you choose not to add shipping insurance, we cannot be held responsible for any loss or damage once the item leaves our store for shipping.

Limitation of Liability

To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, arising out of your use of our Store or the purchase of our products.

Modification and Termination

We reserve the right to modify or cancel any order that goes against our store policies.

Entire Agreement

This Agreement constitutes the entire agreement between you and our Store regarding the use of our Store and the purchase of our products and supersedes all prior or contemporaneous communications, whether electronic, oral, or written, between you and our Store.

By using our Store or placing an order, you acknowledge that you have read, understood, and agreed to be bound by these Terms and Conditions. If you have any questions or concerns regarding these terms, please contact our customer support before proceeding with your order.`;

export function TermsAndConditionPage({
  content,
  title = "Terms and Conditions",
  bodyContent = defaultContent,
}: TermsAndConditionPageProps) {
  const paragraphs = bodyContent.split('\n\n');

  return (
    <main className="flex-1 py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="font-serif text-4xl md:text-5xl font-bold mb-8">{title}</h1>

        <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
          {paragraphs.map((paragraph, i) => {
            const trimmed = paragraph.trim();
            if (!trimmed) return null;
            if (trimmed.length < 60 && !trimmed.endsWith('.') && !trimmed.endsWith('"') && !trimmed.includes('. ')) {
              return <h2 key={i} className="text-2xl font-bold text-foreground mt-10">{trimmed}</h2>;
            }
            return <p key={i}>{trimmed}</p>;
          })}
        </div>
      </div>
      {content && typeof content === "function" && content({})}
</main>
  );
}
