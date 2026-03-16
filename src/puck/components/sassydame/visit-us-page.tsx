"use client";

import { MapPin, Phone, Mail, Clock, Car, ShoppingBag, Scissors, Package, AlertCircle } from "lucide-react";
import { DropZone } from "@puckeditor/core";

const hours = [
  { day: "Monday", time: "Closed" },
  { day: "Tuesday", time: "11:00 AM - 6:00 PM" },
  { day: "Wednesday", time: "11:00 AM - 6:00 PM" },
  { day: "Thursday", time: "11:00 AM - 6:00 PM" },
  { day: "Friday", time: "11:00 AM - 6:00 PM" },
  { day: "Saturday", time: "11:00 AM - 6:00 PM" },
  { day: "Sunday", time: "Closed" },
];

const expectations = [
  {
    icon: ShoppingBag,
    title: "Browse Our Products",
    description:
      "Explore our full range of DTF transfers, vinyl, blank apparel, craft supplies, and more in person. See the quality up close before you buy.",
  },
  {
    icon: Scissors,
    title: "Use Studio Equipment",
    description:
      "Take advantage of our heat presses, cutting machines, and other studio equipment. Perfect for crafters who need professional tools for their projects.",
  },
  {
    icon: Package,
    title: "Pick Up Orders",
    description:
      "Skip the shipping wait and pick up your online orders directly from our studio. Just select local pickup at checkout.",
  },
];

export interface VisitUsPageProps {
  heading?: string;
  headingHighlight?: string;
  description?: string;
  address?: string;
  addressLine2?: string;
  mainPhone?: string;
  storePhone?: string;
  email?: string;
  hoursHeading?: string;
  ctaHeading?: string;
  ctaDescription?: string;
}

export function VisitUsPage({
  heading = "Visit Our",
  headingHighlight = "Studio",
  description = "Stop by our Raleigh studio to browse products, pick up orders, or use our professional crafting equipment. We would love to meet you!",
  address = "1230 Green Street",
  addressLine2 = "Raleigh, NC 27603",
  mainPhone = "(919) 628-6531",
  storePhone = "(919) 533-7944",
  email = "sassydame23@yahoo.com",
  hoursHeading = "Store Hours",
  ctaHeading = "Have Questions Before Your Visit?",
  ctaDescription = "Feel free to reach out to us before stopping by. We are always happy to help with questions about products, services, or studio availability.",
}: VisitUsPageProps) {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-secondary/5 via-background to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <span className="inline-block px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
              Come See Us
            </span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              {heading}
              <span className="block text-secondary">{headingHighlight}</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              {description}
            </p>
          </div>
        </div>
      </section>

      {/* Announcement Banner */}
      <section className="bg-primary/10 border-y border-primary/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-center gap-3 text-center">
            <AlertCircle className="h-5 w-5 text-primary flex-shrink-0" />
            <p className="text-sm font-medium">
              Same Day DTF &amp; UV cutoff is <strong>12:00 PM (Eastern)</strong>, Tuesday - Saturday
            </p>
          </div>
        </div>
      </section>

      {/* Map & Location Details */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Google Maps Embed */}
            <div className="order-2 lg:order-1">
              <div className="aspect-video lg:aspect-square rounded-xl overflow-hidden border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3237.0!2d-78.65!3d35.78!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s1230+Green+Street+Raleigh+NC+27603!5e0!3m2!1sen!2sus!4v1700000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="SassyDame Designs Studio Location - 1230 Green Street, Raleigh, NC 27603"
                />
              </div>
            </div>

            {/* Location Info */}
            <div className="order-1 lg:order-2">
              <h2 className="font-serif text-2xl font-bold mb-6">Our Location</h2>

              {/* Address Card */}
              <a
                href="https://maps.google.com/?q=1230+Green+Street+Raleigh+NC+27603"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-4 rounded-xl bg-card border hover:border-primary/50 transition-colors group mb-4"
              >
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Studio Address</h3>
                  <p className="text-foreground">{address}</p>
                  <p className="text-sm text-muted-foreground">{addressLine2}</p>
                </div>
              </a>

              {/* Phone Cards */}
              <a
                href="tel:+19196286531"
                className="flex items-start gap-4 p-4 rounded-xl bg-card border hover:border-primary/50 transition-colors group mb-4"
              >
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Main Phone</h3>
                  <p className="text-foreground">{mainPhone}</p>
                  <p className="text-sm text-muted-foreground">General inquiries</p>
                </div>
              </a>

              <a
                href="tel:+19195337944"
                className="flex items-start gap-4 p-4 rounded-xl bg-card border hover:border-primary/50 transition-colors group mb-4"
              >
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Store Phone</h3>
                  <p className="text-foreground">{storePhone}</p>
                  <p className="text-sm text-muted-foreground">Store-specific questions</p>
                </div>
              </a>

              {/* Email Card */}
              <a
                href="mailto:sassydame23@yahoo.com"
                className="flex items-start gap-4 p-4 rounded-xl bg-card border hover:border-primary/50 transition-colors group mb-4"
              >
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Email Us</h3>
                  <p className="text-foreground">{email}</p>
                  <p className="text-sm text-muted-foreground">We reply within 24 hours</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Store Hours */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="font-serif text-2xl md:text-3xl font-bold mb-2">{hoursHeading}</h2>
              <p className="text-muted-foreground">Plan your visit around our weekly schedule</p>
            </div>

            <div className="p-6 rounded-xl bg-card border">
              <div className="flex items-center gap-2 mb-6">
                <Clock className="h-5 w-5 text-secondary" />
                <h3 className="font-semibold">Weekly Schedule</h3>
              </div>
              <div className="space-y-3">
                {hours.map((item, index) => (
                  <div
                    key={index}
                    className={`flex justify-between items-center py-2 px-3 rounded-lg text-sm ${
                      item.time !== "Closed" ? "bg-primary/5" : "bg-muted/50"
                    }`}
                  >
                    <span className={item.time === "Closed" ? "text-muted-foreground" : "font-medium"}>
                      {item.day}
                    </span>
                    <span
                      className={
                        item.time === "Closed" ? "text-muted-foreground" : "font-semibold text-primary"
                      }
                    >
                      {item.time}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-3 rounded-lg bg-secondary/10 border border-secondary/20">
                <p className="text-sm text-center font-medium">
                  Closed the first Saturday of every month
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Directions & Parking */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="font-serif text-2xl md:text-3xl font-bold mb-2">Getting Here</h2>
              <p className="text-muted-foreground">Directions and parking information</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl bg-card border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Car className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold">By Car</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We are located on Green Street in Raleigh, just minutes from downtown.
                  Head south on S. Saunders Street and turn onto Green Street.
                  Our studio is easy to spot on the block.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-card border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-full bg-secondary/10 flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-secondary" />
                  </div>
                  <h3 className="font-semibold">Parking</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Free street parking is available directly in front of and around our studio.
                  There is plenty of space for our visitors, so finding a spot is usually easy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-2xl md:text-3xl font-bold mb-2">
              What to Expect When You Visit
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Whether you are a first-time visitor or a regular, here is what you can look forward to at our
              studio.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {expectations.map((item, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-card border hover:shadow-lg transition-shadow"
              >
                <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-serif text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4">
            {ctaHeading}
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            {ctaDescription}
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-md text-sm font-semibold bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8"
          >
            Contact Us
          </a>
        </div>
      </section>

      {/* Puck: Editable content slot */}
      <DropZone zone="content" />
    </main>
  );
}
