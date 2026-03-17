"use client";

import React from "react";
export interface TermsOfServicePageProps {
  content?: React.FC;
  title?: string;
  bodyContent?: string;
}

const defaultContent = `Overview

This website is operated by SassyDame Designs, LLC. Throughout the site, the terms "we", "us" and "our" refer to SassyDame Designs, LLC. SassyDame Designs, LLC offers this website, including all information, tools and services available from this site to you, the user, conditioned upon your acceptance of all terms, conditions, policies and notices stated here.

By visiting our site and/or purchasing something from us, you engage in our "Service" and agree to be bound by the following terms and conditions ("Terms of Service", "Terms"), including those additional terms and conditions and policies referenced herein and/or available by hyperlink. These Terms of Service apply to all users of the site, including without limitation users who are browsers, vendors, customers, merchants, and/or contributors of content.

Section 1 -- Online Store Terms

By agreeing to these Terms of Service, you represent that you are at least the age of majority in your state or province of residence. You may not use our products for any illegal or unauthorized purpose nor may you, in the use of the Service, violate any laws in your jurisdiction (including but not limited to copyright laws). A breach or violation of any of the Terms will result in an immediate termination of your Services.

Section 2 -- General Conditions

We reserve the right to refuse service to anyone for any reason at any time. You understand that your content (not including credit card information), may be transferred unencrypted and involve transmissions over various networks and changes to conform and adapt to technical requirements of connecting networks or devices. Credit card information is always encrypted during transfer over networks.

Section 3 -- Accuracy of Information

We are not responsible if information made available on this site is not accurate, complete or current. The material on this site is provided for general information only and should not be relied upon or used as the sole basis for making decisions without consulting primary, more accurate, more complete or more timely sources of information.

Section 4 -- Modifications to Service and Prices

Prices for our products are subject to change without notice. We reserve the right at any time to modify or discontinue the Service (or any part or content thereof) without notice at any time. We shall not be liable to you or to any third-party for any modification, price change, suspension or discontinuance of the Service.

Section 5 -- Products or Services

Certain products or services may be available exclusively online through the website. These products or services may have limited quantities and are subject to return or exchange only according to our Refund Policy. We have made every effort to display as accurately as possible the colors and images of our products that appear at the store. We cannot guarantee that your computer monitor's display of any color will be accurate.

Section 6 -- Billing and Account Information

We reserve the right to refuse any order you place with us. We may, in our sole discretion, limit or cancel quantities purchased per person, per household or per order. You agree to provide current, complete and accurate purchase and account information for all purchases made at our store.

Section 7 -- Third-Party Tools

We may provide you with access to third-party tools over which we neither monitor nor have any control nor input. You acknowledge and agree that we provide access to such tools "as is" and "as available" without any warranties, representations or conditions of any kind and without any endorsement.

Contact Information

Questions about the Terms of Service should be sent to us at sassydame23@yahoo.com.

SassyDame Designs, LLC
1230 Green Street
Raleigh, NC 27603`;

export function TermsOfServicePage({
  content,
  title = "Terms of Service",
  bodyContent = defaultContent,
}: TermsOfServicePageProps) {
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
