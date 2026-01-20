"use client";

import { motion } from "framer-motion";

const companies = [
  "Google",
  "Meta",
  "Amazon",
  "Microsoft",
  "Flipkart",
  "Zomato",
  "Swiggy",
  "Paytm",
  "Razorpay",
  "Freshworks",
];

// duplicate for seamless loop
const marqueeCompanies = [...companies, ...companies];

export default function CompaniesSection() {
  return (
    <section className="py-16 bg-gray-900 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <h3 className="text-xl md:text-2xl font-bold text-white text-center mb-10">
          SCAL UP Graduates Have Been Hired By
        </h3>

        {/* Marquee */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-12 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
              duration: 25,
            }}
          >
            {marqueeCompanies.map((company, index) => (
              <span
                key={index}
                className="text-gray-400 font-medium text-lg whitespace-nowrap hover:text-orange-500 transition-colors"
              >
                {company}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
