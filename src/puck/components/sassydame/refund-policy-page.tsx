"use client";
import { DropZone } from "@puckeditor/core";

export function RefundPolicyPage() {
  return (
    <main className="flex-1 py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="font-serif text-4xl md:text-5xl font-bold mb-8">Refund Policy</h1>

        <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
          <p className="text-xl font-semibold text-foreground">All sales are final.</p>

          <p>
            You can always contact us for any return question at{" "}
            <a href="mailto:sassydame23@yahoo.com" className="text-primary hover:underline">
              sassydame23@yahoo.com
            </a>
            .
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-10">Damages and Issues</h2>
          <p>
            Please inspect your order upon reception and contact us immediately if the item is defective,
            damaged or if you receive the wrong item so that we can evaluate the issue and make it right.
            All sales are final EXCEPT if our company sent out a damaged/wrong package, in this case,
            we will check our camera and other information to make sure before any refund/exchange is processed.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-10">Refunds</h2>
          <p>
            We will notify you once we have received and inspected your return, and let you know if the
            refund was approved or not. If approved, you will be automatically refunded on your original
            payment method. Please remember it can take some time (5-7 Business Days) for your bank or
            credit card company to process and post the refunds.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-10">Additional Terms</h2>
          <ol className="list-decimal pl-6 space-y-4">
            <li>
              <strong>Sale Finality and No Refund Policy:</strong> All sales conducted are final.
              The purchaser acknowledges that no refunds shall be issued under any circumstances once
              a sale is completed.
            </li>
            <li>
              <strong>Image Reproduction Accuracy:</strong> The customer acknowledges that we will
              reproduce images for Direct to Film (DTF) printing exactly as provided. We shall bear
              no responsibility for any discrepancies in image sizing or quality. It is the sole
              responsibility of the customer to ensure that the images submitted for printing are
              correctly sized and meet their requirements.
            </li>
            <li>
              <strong>Customer Responsibility for Image Provision:</strong> The customer is solely
              responsible for providing the correct and intended image for reproduction. We shall not
              be liable for any errors, omissions, or inaccuracies in the images provided by the customer.
            </li>
            <li>
              <strong>Post-Delivery Liability:</strong> Once an order is completed and the product is
              delivered to the customer, or picked up by any agreed-upon method, we hold no responsibility
              for the storage, usage, or handling of the printed image. The customer assumes all risks and
              liabilities associated with the use and storage of the printed image post-delivery.
            </li>
          </ol>
        </div>
      </div>

      {/* Puck: Editable content slot */}
      <DropZone zone="content" />
    </main>
  );
}
