"use client";
import { DropZone } from "@puckeditor/core";

export function ShippingPolicyPage() {
  return (
    <main className="flex-1 py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="font-serif text-4xl md:text-5xl font-bold mb-8">Shipping Policy</h1>

        <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
          <p>
            All orders are processed Monday through Friday (excluding weekends and holidays) after
            receiving your order confirmation email. You will receive another notification when your
            order has shipped.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-10">Same-Day DTF & UV</h2>
          <p>
            Same-day DTF and UV orders have a cutoff of{" "}
            <strong className="text-foreground">12pm Eastern Time</strong>, Tuesday through Saturday.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-10">Calculated Shipping Rates</h2>
          <p>Shipping charges for your order will be calculated and displayed at checkout.</p>

          <h2 className="text-2xl font-bold text-foreground mt-10">Lost Packages</h2>
          <p>
            If during shipping, your package is delayed, lost, or damaged because of bad weather or
            unexpected circumstances, we are not responsible for it and we will not issue a replacement.
            You will have to contact the shipping company and file a claim. Please understand that we
            try to make sure that packages go out in a timely manner; as soon as your packages leave
            our facilities we have no control over it.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-10">Wrong Address</h2>
          <p>
            If you mistakenly put in the wrong address after placing your order, please contact us
            immediately. If we ship out the package to the address provided, you will be responsible
            for contacting the shipping carriers and paying any fees requested to change to the right
            address.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-10">Shipping Insurance</h2>
          <p>
            While we strive to ensure the safe delivery of your package, we strongly recommend adding
            shipping insurance during checkout. By opting for shipping insurance, you can protect your
            purchase against any loss or damage that may occur during transit. If you choose not to add
            shipping insurance, we cannot be held responsible for any loss or damage once the item leaves
            our store for shipping.
          </p>

          <p className="mt-10">
            If you have any further questions, please do not hesitate to contact us at{" "}
            <a href="mailto:sassydame23@yahoo.com" className="text-primary hover:underline">
              sassydame23@yahoo.com
            </a>
          </p>
        </div>
      </div>

      {/* Puck: Editable content slot */}
      <DropZone zone="content" />
    </main>
  );
}
