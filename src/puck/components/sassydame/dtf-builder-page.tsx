"use client";

import React from "react";
export interface DTFBuilderPageProps {
  content?: React.FC;
  badgeText?: string;
  heading?: string;
  description?: string;
  howItWorksHeading?: string;
  step1Title?: string;
  step1Description?: string;
  step2Title?: string;
  step2Description?: string;
  step3Title?: string;
  step3Description?: string;
}

export function DTFBuilderPage({
  content,
  badgeText = "Powered by Drip Apps",
  heading = "DTF Gang Sheet Builder",
  description = "Create custom gang sheets by uploading your designs and arranging them on a single transfer sheet. Maximize your space, minimize your costs.",
  howItWorksHeading = "How It Works",
  step1Title = "Upload Designs",
  step1Description = "Upload your PNG, SVG, or PDF files directly into the builder.",
  step2Title = "Arrange & Size",
  step2Description = "Drag, resize, and arrange your designs to maximize sheet space.",
  step3Title = "Add to Cart",
  step3Description = "Choose your sheet size, review pricing, and checkout instantly.",
}: DTFBuilderPageProps) {
  return (
    <main className="flex-1">
      {/* Page Header */}
      <section className="bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
              {badgeText}
            </span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              {heading}
            </h1>
            <p className="text-muted-foreground text-lg">
              {description}
            </p>
          </div>
        </div>
      </section>

      {/* DTF Builder Embed Placeholder */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="w-full min-h-[600px] rounded-2xl border-2 border-dashed border-border bg-muted/20 flex items-center justify-center">
            <div className="text-center">
              <p className="text-lg font-medium text-muted-foreground mb-2">DTF Builder Embed</p>
              <p className="text-sm text-muted-foreground">
                The Drip Apps DTF Builder widget will be embedded here
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl font-bold mb-6 text-center">{howItWorksHeading}</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="font-bold text-primary">1</span>
                </div>
                <h3 className="font-semibold mb-2">{step1Title}</h3>
                <p className="text-sm text-muted-foreground">
                  {step1Description}
                </p>
              </div>
              <div className="text-center">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="font-bold text-primary">2</span>
                </div>
                <h3 className="font-semibold mb-2">{step2Title}</h3>
                <p className="text-sm text-muted-foreground">
                  {step2Description}
                </p>
              </div>
              <div className="text-center">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="font-bold text-primary">3</span>
                </div>
                <h3 className="font-semibold mb-2">{step3Title}</h3>
                <p className="text-sm text-muted-foreground">
                  {step3Description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {content && typeof content === "function" && content({})}
</main>
  );
}
