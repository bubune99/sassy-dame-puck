"use client";
import { DropZone } from "@puckeditor/core";

export interface ShippingPolicyPageProps {
  title?: string;
  content?: string;
}

const defaultContent = `All orders are processed Monday through Friday (excluding weekends and holidays) after receiving your order confirmation email. You will receive another notification when your order has shipped.

Same-Day DTF & UV

Same-day DTF and UV orders have a cutoff of 12pm Eastern Time, Tuesday through Saturday.

Calculated Shipping Rates

Shipping charges for your order will be calculated and displayed at checkout.

Lost Packages

If during shipping, your package is delayed, lost, or damaged because of bad weather or unexpected circumstances, we are not responsible for it and we will not issue a replacement. You will have to contact the shipping company and file a claim. Please understand that we try to make sure that packages go out in a timely manner; as soon as your packages leave our facilities we have no control over it.

Wrong Address

If you mistakenly put in the wrong address after placing your order, please contact us immediately. If we ship out the package to the address provided, you will be responsible for contacting the shipping carriers and paying any fees requested to change to the right address.

Shipping Insurance

While we strive to ensure the safe delivery of your package, we strongly recommend adding shipping insurance during checkout. By opting for shipping insurance, you can protect your purchase against any loss or damage that may occur during transit. If you choose not to add shipping insurance, we cannot be held responsible for any loss or damage once the item leaves our store for shipping.

If you have any further questions, please do not hesitate to contact us at sassydame23@yahoo.com`;

export function ShippingPolicyPage({
  title = "Shipping Policy",
  content = defaultContent,
}: ShippingPolicyPageProps) {
  const paragraphs = content.split('\n\n');

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

      {/* Puck: Editable content slot */}
      <DropZone zone="content" />
    </main>
  );
}
