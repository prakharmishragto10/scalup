"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
const services = [
  {
    price: "₹8,000",
    duration: "/per month",
    title: "Local Domination",
    subtitle: "Own Your Neighborhood. Be the First Choice.",
    description:
      "For local businesses, visibility is currency. Our Local Domination package ensures your Google Business Profile isn't just existing — it's thriving.",
    features: [
      "NAP Consistency",
      "Local Citations",
      "Review Monitoring",
      "Map Pack Optimization",
    ],
    popular: false,
  },
  {
    price: "₹25,000",
    duration: "/per month",
    title: "Complete SEO Suite",
    subtitle: "Rank Higher. Grow Faster.",
    description:
      "Sustainable growth requires a solid foundation. Our Complete SEO Suite goes beyond keywords with comprehensive audits and high-quality backlinks.",
    features: [
      "Technical Audits",
      "Mobile-First Adjustments",
      "High-Quality Backlinks",
      "2 Optimized Blogs / Month",
    ],
    popular: true,
  },
  {
    price: "₹15,000",
    duration: "/per month",
    title: "Meta Ads Accelerator",
    subtitle: "Stop Scrolling. Start Selling.",
    description:
      "Your customers are on social media right now. We make sure they see you with a full-funnel solution including audience research and A/B testing.",
    features: [
      "Audience Research",
      "Pixel Setup",
      "A/B Testing",
      "Retargeting Campaigns",
    ],
    popular: false,
  },
  {
    price: "₹18,000",
    duration: "/per month",
    title: "Google Ads Performance",
    subtitle: "Be the Answer When They Search.",
    description:
      "SEO takes time. Google Ads is instant. We focus on high-intent keywords and precise conversion tracking.",
    features: [
      "Keyword Strategy",
      "Negative Keyword Filtering",
      "Landing Page Suggestions",
      "GA4 Conversion Tracking",
    ],
    popular: false,
  },
  {
    price: "₹12,000",
    duration: "/one-time",
    title: "Premium Studio Shoot",
    subtitle: "Cinema-Quality Content for Your Brand.",
    description:
      "Elevate your brand perception with fully edited, high-quality studio videos. Perfect for launches and founder stories.",
    features: [
      "2 Studio Videos",
      "Professional Editing",
      "High-Quality Output",
      "Brand Storytelling",
    ],
    popular: false,
  },
  {
    price: "₹15,000",
    duration: "/one-time",
    title: "Branding & Lead Gen",
    subtitle: "The Strategy Behind the Sale.",
    description:
      "A focused strategic overhaul for brands that need clarity, identity, and a scalable lead generation roadmap.",
    features: [
      "Brand Identity",
      "Lead Gen Strategy",
      "Sales Pipeline Fix",
      "Strategic Roadmap",
    ],
    popular: false,
  },
];

export default function ServicesPage() {
  return (
    <div>
      <Navbar />
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <p className="text-orange-500 text-sm font-semibold tracking-widest uppercase mb-3">
              Comprehensive Solutions
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
              Services Designed to{" "}
              <span className="text-orange-500">Accelerate Growth</span>
            </h1>
            <p className="text-gray-500 text-lg">
              Choose from our comprehensive suite of digital marketing services,
              each crafted to deliver measurable results for your business.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className={`relative bg-white rounded-2xl border p-8 shadow-sm transition-all ${
                  service.popular ? "border-orange-500" : "border-gray-200"
                }`}
              >
                {/* Most Popular */}
                {service.popular && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-xs font-semibold px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                )}

                {/* Price */}
                <div className="mb-4">
                  <span className="text-3xl font-extrabold">
                    {service.price}
                  </span>
                  <span className="text-gray-500 ml-1">{service.duration}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-1">{service.title}</h3>
                <p className="text-orange-500 font-medium text-sm mb-4">
                  {service.subtitle}
                </p>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm">
                      <Check className="w-4 h-4 text-orange-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button className="w-full flex items-center justify-center gap-2 bg-orange-500 text-white font-medium py-3 rounded-xl hover:bg-orange-600 transition">
                  Get Started <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
