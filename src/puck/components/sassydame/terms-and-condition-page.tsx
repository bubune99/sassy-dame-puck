"use client";
import { DropZone } from "@puckeditor/core";

export function TermsAndConditionPage() {
  return (
    <main className="flex-1 py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="font-serif text-4xl md:text-5xl font-bold mb-8">Terms and Conditions</h1>

        <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
          <p>
            Please read these Terms and Conditions (&ldquo;Agreement&rdquo;) carefully before placing an order
            with our customized store (&ldquo;Store&rdquo;). This Agreement sets forth the legally binding terms
            and conditions for your use of our Store and the purchase of our products. By accessing or
            using our Store, you agree to be bound by this Agreement. If you do not agree to these
            terms and conditions, you may not use or purchase products from our Store.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-10">Sales and Returns</h2>
          <p>
            All sales are considered final, but we do offer store credit, refunds, or replacements in
            the case of a defective item being received. If you receive a defective product, please
            contact our customer support within 7 days of purchase, providing supporting evidence such
            as pictures or videos for assessment.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-10">Product Usage and Liability</h2>
          <p>
            Our products are intended for their designated purposes only. We are not responsible for any
            damage, injury, or misuse of our products by anyone. It is your responsibility to use our
            products in accordance with their intended use and any safety guidelines provided.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-10">Shipping and Delivery</h2>
          <p>
            We strive to process and ship orders promptly. However, please note that shipping times may
            vary depending on factors beyond our control, such as carrier delays and customs procedures.
            We aim to ship out orders from Monday to Friday, excluding weekends and holidays. Once your
            order has been shipped, you will receive a confirmation email with tracking information to
            monitor the progress of your delivery.
          </p>
          <p>
            While we strive to ensure the safe delivery of your package, we strongly recommend adding
            shipping insurance during checkout. By opting for shipping insurance, you can protect your
            purchase against any loss or damage that may occur during transit. If you choose not to add
            shipping insurance, we cannot be held responsible for any loss or damage once the item leaves
            our store for shipping.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-10">Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, we shall not be liable for any indirect, incidental,
            special, consequential, or punitive damages, or any loss of profits or revenues, whether
            incurred directly or indirectly, arising out of your use of our Store or the purchase of
            our products.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-10">Modification and Termination</h2>
          <p>
            We reserve the right to modify or cancel any order that goes against our store policies.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-10">Entire Agreement</h2>
          <p>
            This Agreement constitutes the entire agreement between you and our Store regarding the use
            of our Store and the purchase of our products and supersedes all prior or contemporaneous
            communications, whether electronic, oral, or written, between you and our Store.
          </p>

          <p className="mt-10 text-foreground font-medium">
            By using our Store or placing an order, you acknowledge that you have read, understood, and
            agreed to be bound by these Terms and Conditions. If you have any questions or concerns
            regarding these terms, please contact our customer support before proceeding with your order.
          </p>
        </div>
      </div>

      {/* Puck: Editable content slot */}
      <DropZone zone="content" />
    </main>
  );
}
