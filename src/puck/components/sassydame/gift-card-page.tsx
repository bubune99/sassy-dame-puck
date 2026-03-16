"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Gift, Mail, Sparkles, Heart } from "lucide-react";
import { DropZone } from "@puckeditor/core";

const giftCardAmounts = [25, 50, 75, 100, 150, 200];

export interface GiftCardPageProps {
  badgeText?: string;
  heading?: string;
  headingHighlight?: string;
  description?: string;
  cardBrandName?: string;
  footerNote?: string;
}

export function GiftCardPage({
  badgeText = "The Perfect Gift for Crafters",
  heading = "SassyDame Designs",
  headingHighlight = "Gift Card",
  description = "Give the gift of creativity! Our gift cards can be used for anything in-store or online, including DTF prints, crafting supplies, classes, and studio rentals.",
  cardBrandName = "SassyDame Designs",
  footerNote = "Gift cards never expire and can be used for any purchase at SassyDame Designs",
}: GiftCardPageProps) {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(50);
  const [customAmount, setCustomAmount] = useState("");
  const [deliveryMethod, setDeliveryMethod] = useState<"email" | "print">("email");

  const finalAmount = selectedAmount || (customAmount ? parseFloat(customAmount) : 0);

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Gift className="h-4 w-4" />
              <span>{badgeText}</span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              {heading} <span className="text-primary">{headingHighlight}</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gift Card Builder */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Card Preview */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="sticky top-32">
                  <div className="relative aspect-[1.6/1] rounded-2xl overflow-hidden bg-gradient-to-br from-primary via-primary/80 to-secondary shadow-2xl">
                    <div className="absolute inset-0 bg-[url('/gift-pattern.svg')] opacity-10" />
                    <div className="absolute inset-0 p-8 flex flex-col justify-between text-primary-foreground">
                      <div>
                        <Sparkles className="h-8 w-8 mb-2" />
                        <p className="font-serif text-2xl font-bold">{cardBrandName}</p>
                      </div>
                      <div>
                        <p className="text-sm opacity-80 mb-1">Gift Card Value</p>
                        <p className="font-serif text-4xl font-bold">
                          ${finalAmount > 0 ? finalAmount.toFixed(2) : "0.00"}
                        </p>
                      </div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Heart className="h-6 w-6 text-primary-foreground/60" />
                    </div>
                  </div>
                  <p className="text-center text-sm text-muted-foreground mt-4">
                    Preview of your gift card
                  </p>
                </div>
              </motion.div>

              {/* Configuration */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="space-y-8"
              >
                {/* Amount Selection */}
                <div>
                  <h3 className="font-serif text-xl font-semibold mb-4">Select Amount</h3>
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    {giftCardAmounts.map((amount) => (
                      <button
                        key={amount}
                        onClick={() => {
                          setSelectedAmount(amount);
                          setCustomAmount("");
                        }}
                        className={`py-3 px-4 rounded-lg border-2 font-medium transition-all ${
                          selectedAmount === amount
                            ? "border-primary bg-primary/10 text-primary"
                            : "border-border hover:border-primary/50"
                        }`}
                      >
                        ${amount}
                      </button>
                    ))}
                  </div>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                    <input
                      type="number"
                      placeholder="Custom amount"
                      value={customAmount}
                      onChange={(e) => {
                        setCustomAmount(e.target.value);
                        setSelectedAmount(null);
                      }}
                      className="w-full pl-8 pr-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Delivery Method */}
                <div>
                  <h3 className="font-serif text-xl font-semibold mb-4">Delivery Method</h3>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => setDeliveryMethod("email")}
                      className={`p-4 rounded-lg border-2 text-left transition-all ${
                        deliveryMethod === "email"
                          ? "border-primary bg-primary/10"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <Mail
                        className={`h-6 w-6 mb-2 ${
                          deliveryMethod === "email" ? "text-primary" : "text-muted-foreground"
                        }`}
                      />
                      <p className="font-medium">Email Delivery</p>
                      <p className="text-sm text-muted-foreground">Send instantly via email</p>
                    </button>
                    <button
                      onClick={() => setDeliveryMethod("print")}
                      className={`p-4 rounded-lg border-2 text-left transition-all ${
                        deliveryMethod === "print"
                          ? "border-primary bg-primary/10"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <Gift
                        className={`h-6 w-6 mb-2 ${
                          deliveryMethod === "print" ? "text-primary" : "text-muted-foreground"
                        }`}
                      />
                      <p className="font-medium">Print at Home</p>
                      <p className="text-sm text-muted-foreground">Download a printable PDF</p>
                    </button>
                  </div>
                </div>

                {/* Recipient Info */}
                {deliveryMethod === "email" && (
                  <div className="space-y-4">
                    <h3 className="font-serif text-xl font-semibold">Recipient Details</h3>
                    <input
                      type="text"
                      placeholder="Recipient's Name"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                    />
                    <input
                      type="email"
                      placeholder="Recipient's Email"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                    />
                    <textarea
                      placeholder="Add a personal message (optional)"
                      rows={3}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                    />
                  </div>
                )}

                {/* Add to Cart */}
                <button
                  className="w-full inline-flex items-center justify-center rounded-md text-lg font-medium bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-8 disabled:opacity-50"
                  disabled={finalAmount <= 0}
                >
                  <Gift className="mr-2 h-5 w-5" />
                  Add to Cart - ${finalAmount > 0 ? finalAmount.toFixed(2) : "0.00"}
                </button>

                <p className="text-sm text-muted-foreground text-center">
                  {footerNote}
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Puck: Editable content slot */}
      <DropZone zone="content" />
    </main>
  );
}
