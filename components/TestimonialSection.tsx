"use client";

import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    text: "I joined Scalup with no background in digital marketing, but the way concepts were explained made everything easy to understand. The practical sessions and real examples helped me gain confidence. Highly recommended for beginners.",
    name: "Imran Shabaan",
    initials: "IS",
    role: "",
  },
  {
    text: "The SEO course at Scalup is very practical and up to date. We worked on real projects and learned tools that are actually used in the industry. This training helped me start freelancing with confidence.",
    name: "Uzma Hassan",
    initials: "UH",
    role: "SEO Specialist",
  },
  {
    text: "What I liked most about Scalup is their career-focused approach. The mentors guide you properly and clear your doubts patiently. The certification and project work added real value to my resume.",
    name: "Shahid Sultan",
    initials: "SS",
    role: "Performance Marketer",
  },
  {
    text: "Scalup doesn't just teach theory. Every topic is supported with hands-on practice, which really helps in understanding how things work in the real world. It's a great institute for skill-based learning.",
    name: "Mink Arora",
    initials: "MA",
    role: "Content Strategist",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    filter: "blur(6px)",
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
    },
  },
};

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Trusted by <span className="text-orange-500">Hundreds</span> of
            Students
          </h2>

          <div className="flex items-center justify-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-5 h-5 fill-orange-500 text-orange-500"
              />
            ))}
          </div>

          <p className="text-gray-600">Rated 5 out of 5 on Google Reviews</p>
        </div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-white border border-gray-200 rounded-2xl p-6 transition hover:-translate-y-1"
            >
              {/* Top Row */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-orange-500 text-orange-500"
                    />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-orange-500/30" />
              </div>

              {/* Testimonial Text */}
              <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                “{testimonial.text}”
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-500 font-semibold text-sm">
                  {testimonial.initials}
                </div>
                <div>
                  <p className="font-semibold text-sm text-gray-900">
                    {testimonial.name}
                  </p>
                  {testimonial.role && (
                    <p className="text-xs text-gray-500">{testimonial.role}</p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
