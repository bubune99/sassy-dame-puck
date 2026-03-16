"use client";

import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { DropZone } from "@puckeditor/core";

function getContactInfo(address: string, addressLine2: string, phone: string, email: string) {
  return [
    {
      icon: MapPin,
      title: "Visit Us",
      content: address,
      subcontent: addressLine2,
      href: `https://maps.google.com/?q=${encodeURIComponent(address + " " + addressLine2)}`,
    },
    {
      icon: Phone,
      title: "Call Us",
      content: phone,
      subcontent: "Tue-Sat 11am-6pm",
      href: `tel:${phone.replace(/[^+\d]/g, "")}`,
    },
    {
      icon: Mail,
      title: "Email Us",
      content: email,
      subcontent: "We reply within 24 hours",
      href: `mailto:${email}`,
    },
  ];
}

const hours = [
  { day: "Monday", time: "Closed" },
  { day: "Tuesday - Saturday", time: "11:00 AM - 6:00 PM" },
  { day: "Sunday", time: "Closed" },
];

function ContactForm() {
  return (
    <form className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">Name</label>
          <input
            type="text"
            className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Email</label>
          <input
            type="email"
            className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
            placeholder="your@email.com"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Subject</label>
        <input
          type="text"
          className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
          placeholder="How can we help?"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Message</label>
        <textarea
          rows={5}
          className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
          placeholder="Tell us more..."
        />
      </div>
      <button
        type="submit"
        className="w-full inline-flex items-center justify-center rounded-md text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8"
      >
        Send Message
      </button>
    </form>
  );
}

export interface ContactPageProps {
  heading?: string;
  headingHighlight?: string;
  description?: string;
  address?: string;
  addressLine2?: string;
  phone?: string;
  email?: string;
  faqHeading?: string;
  faqDescription?: string;
}

export function ContactPage({
  heading = "We Would Love to",
  headingHighlight = "Hear From You",
  description = "Have a question about our products, services, or upcoming events? Drop us a line and we will get back to you as soon as possible.",
  address = "1230 Green Street",
  addressLine2 = "Raleigh, NC 27603",
  phone = "(919) 628-6531",
  email = "sassydame23@yahoo.com",
  faqHeading = "Common Questions",
  faqDescription = "Check out our FAQ page for answers to commonly asked questions about shipping, returns, DTF printing, and more.",
}: ContactPageProps) {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-secondary/5 via-background to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <span className="inline-block px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
              Get in Touch
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

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="font-serif text-2xl font-bold mb-6">Send Us a Message</h2>
              <div className="p-6 bg-card rounded-xl border">
                <ContactForm />
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="font-serif text-2xl font-bold mb-6">Contact Information</h2>

              {/* Contact Cards */}
              <div className="space-y-4 mb-8">
                {getContactInfo(address, addressLine2, phone, email).map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-start gap-4 p-4 rounded-xl bg-card border hover:border-primary/50 transition-colors group"
                  >
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="text-foreground">{item.content}</p>
                      <p className="text-sm text-muted-foreground">{item.subcontent}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Business Hours */}
              <div className="p-6 rounded-xl bg-muted/50 border">
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="h-5 w-5 text-secondary" />
                  <h3 className="font-semibold">Business Hours</h3>
                </div>
                <div className="space-y-2">
                  {hours.map((item, index) => (
                    <div key={index} className="flex justify-between text-sm">
                      <span className="text-muted-foreground">{item.day}</span>
                      <span className="font-medium">{item.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-8 aspect-video rounded-xl bg-muted overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-primary/30 mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">Map would be embedded here</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4">
            {faqHeading}
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            {faqDescription}
          </p>
          <a
            href="/pages/faqs"
            className="inline-flex items-center text-primary font-medium hover:underline"
          >
            View All FAQs
            <span className="ml-1">&rarr;</span>
          </a>
        </div>
      </section>

      {/* Puck: Editable content slot */}
      <DropZone zone="content" />
    </main>
  );
}
