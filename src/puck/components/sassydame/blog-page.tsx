"use client";

import { BookOpen, Sparkles, Calendar, Megaphone, Mail } from "lucide-react";
import { DropZone } from "@puckeditor/core";

const placeholderPosts = [
  {
    icon: Sparkles,
    title: "DTF Printing Tips: Getting the Perfect Transfer Every Time",
    category: "Tutorial",
    description:
      "Learn the best practices for DTF printing, from choosing the right film to pressing at the perfect temperature for vibrant, long-lasting results.",
    date: "Coming Soon",
  },
  {
    icon: Calendar,
    title: "Craft Night Recap: February Edition",
    category: "Community",
    description:
      "A look back at our latest craft night event! See what our crafting community created and find out when the next one is happening.",
    date: "Coming Soon",
  },
  {
    icon: Megaphone,
    title: "New Product Drop: Spring Collection Blanks & Transfers",
    category: "Announcements",
    description:
      "Fresh designs and new blank apparel just landed in our studio. Check out what is new for the spring season and get inspired for your next project.",
    date: "Coming Soon",
  },
  {
    icon: BookOpen,
    title: "Beginner Guide: How to Start Your Custom Apparel Business",
    category: "Guide",
    description:
      "Thinking about turning your crafting hobby into a business? Here is everything you need to know to get started with custom apparel and DTF transfers.",
    date: "Coming Soon",
  },
];

const categoryColors: Record<string, string> = {
  Tutorial: "bg-blue-100 text-blue-700",
  Community: "bg-green-100 text-green-700",
  Announcements: "bg-amber-100 text-amber-700",
  Guide: "bg-purple-100 text-purple-700",
};

export function BlogPage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-secondary/5 via-background to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <span className="inline-block px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
              Our Blog
            </span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              SassyDame
              <span className="block text-secondary">Blog</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Crafting tips, tutorials, and news from our studio. Stay inspired
              and keep up with everything happening at SassyDame Designs.
            </p>
          </div>
        </div>
      </section>

      {/* Coming Soon Banner */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center p-8 rounded-2xl bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 border border-primary/20">
            <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <BookOpen className="h-8 w-8 text-primary" />
            </div>
            <h2 className="font-serif text-2xl md:text-3xl font-bold mb-3">Coming Soon</h2>
            <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
              We are working on bringing you crafting tips, step-by-step tutorials,
              community highlights, and the latest news from SassyDame Designs.
              Sign up below to be the first to know when we launch!
            </p>
          </div>
        </div>
      </section>

      {/* Placeholder Blog Posts */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="font-serif text-2xl md:text-3xl font-bold mb-2">
              What We Have Planned
            </h2>
            <p className="text-muted-foreground">
              Here is a sneak peek at the kind of content you can expect
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {placeholderPosts.map((post, index) => (
              <div
                key={index}
                className="group p-6 rounded-xl bg-card border hover:shadow-lg transition-shadow relative overflow-hidden"
              >
                {/* Coming Soon Overlay */}
                <div className="absolute top-4 right-4">
                  <span className="inline-block px-2 py-1 rounded-full bg-muted text-muted-foreground text-xs font-medium">
                    {post.date}
                  </span>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <post.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span
                      className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium mb-2 ${
                        categoryColors[post.category] || "bg-muted text-muted-foreground"
                      }`}
                    >
                      {post.category}
                    </span>
                    <h3 className="font-serif text-lg font-semibold mb-2 leading-tight">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {post.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup CTA */}
      <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="h-14 w-14 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
              <Mail className="h-7 w-7 text-secondary" />
            </div>
            <h2 className="font-serif text-2xl md:text-3xl font-bold mb-3">Stay in the Loop</h2>
            <p className="text-muted-foreground mb-8">
              Be the first to know when our blog launches. Get crafting tips, exclusive deals,
              and event updates delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border bg-card text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                disabled
              />
              <button
                className="inline-flex items-center justify-center rounded-md text-sm font-semibold bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8 disabled:opacity-50"
                disabled
              >
                Subscribe
              </button>
            </div>
            <p className="text-xs text-muted-foreground mt-3">
              Newsletter signup coming soon. No spam, ever.
            </p>
          </div>
        </div>
      </section>

      {/* CTA to Contact */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4">
            Want to Share a Story or Idea?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Have a crafting project you are proud of? A topic you would like us to cover?
            We would love to hear from you!
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-md text-sm font-semibold bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8"
          >
            Get in Touch
          </a>
        </div>
      </section>

      {/* Puck: Editable content slot */}
      <DropZone zone="content" />
    </main>
  );
}
