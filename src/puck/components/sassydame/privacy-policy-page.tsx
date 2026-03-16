"use client";
import { DropZone } from "@puckeditor/core";

export function PrivacyPolicyPage() {
  return (
    <main className="flex-1 py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="font-serif text-4xl md:text-5xl font-bold mb-8">Privacy Policy</h1>

        <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
          <p>
            SassyDame Designs does not share customer information (including email addresses) outside
            the SassyDame family of companies unless it is necessary to provide you with products or
            services available from our store. We may also disclose information when you tell us to do
            so, to identify or contact you, to protect your rights or the rights of SassyDame or as
            required or permitted by law.
          </p>

          <p>
            In this policy, &ldquo;personal information&rdquo; means any information by which you can be identified
            or contacted, such as your name (first and last), address (city, state, zip), email address,
            telephone number, etc.
          </p>

          <p>
            This Privacy Policy governs your experience in our stores and on this website unless
            otherwise indicated.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-10">Information We Collect</h2>
          <p>
            When you make a purchase or attempt to make a purchase through our store, we collect certain
            information from you, including your name, billing address, shipping address, payment
            information, email address, and phone number. This is referred to as &ldquo;Order Information.&rdquo;
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-10">How We Use Your Information</h2>
          <p>
            We use the Order Information that we collect generally to fulfill any orders placed through
            the store (including processing your payment information, arranging for shipping, and providing
            you with invoices and/or order confirmations). Additionally, we use this Order Information to
            communicate with you and screen our orders for potential risk or fraud.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-10">Sharing Your Information</h2>
          <p>
            We do not sell, trade, or otherwise transfer your personal information to outside parties.
            This does not include trusted third parties who assist us in operating our website, conducting
            our business, or servicing you, so long as those parties agree to keep this information confidential.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-10">Contact Us</h2>
          <p>
            For more information about our privacy practices, if you have questions, or if you would
            like to make a complaint, please contact us by email at{" "}
            <a href="mailto:sassydame23@yahoo.com" className="text-primary hover:underline">
              sassydame23@yahoo.com
            </a>{" "}
            or by mail at: 1230 Green Street, Raleigh, NC 27603.
          </p>
        </div>
      </div>

      {/* Puck: Editable content slot */}
      <DropZone zone="content" />
    </main>
  );
}
