"use client";

import React from "react";
export interface RefundPolicyPageProps {
  content?: React.FC;
  title?: string;
  bodyContent?: string;
}

const defaultContent = `All sales are final.

You can always contact us for any return question at sassydame23@yahoo.com.

Damages and Issues

Please inspect your order upon reception and contact us immediately if the item is defective, damaged or if you receive the wrong item so that we can evaluate the issue and make it right. All sales are final EXCEPT if our company sent out a damaged/wrong package, in this case, we will check our camera and other information to make sure before any refund/exchange is processed.

Refunds

We will notify you once we have received and inspected your return, and let you know if the refund was approved or not. If approved, you will be automatically refunded on your original payment method. Please remember it can take some time (5-7 Business Days) for your bank or credit card company to process and post the refunds.

Additional Terms

1. Sale Finality and No Refund Policy: All sales conducted are final. The purchaser acknowledges that no refunds shall be issued under any circumstances once a sale is completed.

2. Image Reproduction Accuracy: The customer acknowledges that we will reproduce images for Direct to Film (DTF) printing exactly as provided. We shall bear no responsibility for any discrepancies in image sizing or quality. It is the sole responsibility of the customer to ensure that the images submitted for printing are correctly sized and meet their requirements.

3. Customer Responsibility for Image Provision: The customer is solely responsible for providing the correct and intended image for reproduction. We shall not be liable for any errors, omissions, or inaccuracies in the images provided by the customer.

4. Post-Delivery Liability: Once an order is completed and the product is delivered to the customer, or picked up by any agreed-upon method, we hold no responsibility for the storage, usage, or handling of the printed image. The customer assumes all risks and liabilities associated with the use and storage of the printed image post-delivery.`;

export function RefundPolicyPage({
  content,
  title = "Refund Policy",
  bodyContent = defaultContent,
}: RefundPolicyPageProps) {
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
