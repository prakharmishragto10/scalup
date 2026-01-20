"use client";

import { motion } from "framer-motion";

const tools = [
  { name: "Google Ads", color: "text-red-500", icon: "🎯" },
  { name: "Meta Ads", color: "text-blue-600", icon: "📘" },
  { name: "Google Analytics", color: "text-amber-500", icon: "📊" },
  { name: "Canva", color: "text-cyan-500", icon: "🎨" },
  { name: "WordPress", color: "text-blue-500", icon: "🌐" },
  { name: "SEMrush", color: "text-orange-500", icon: "🔍" },
  { name: "Ahrefs", color: "text-blue-400", icon: "📈" },
  { name: "Mailchimp", color: "text-yellow-500", icon: "✉️" },
  { name: "HubSpot", color: "text-orange-600", icon: "📉" },
  { name: "Hootsuite", color: "text-gray-700", icon: "📣" },
];

// duplicate list for seamless loop
const marqueeItems = [...tools, ...tools];

export default function ToolsSection() {
  return (
    <section className="py-20 bg-orange-50 overflow-hidden">
      <div className="mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Tools You Will <span className="text-orange-500">Master</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Get hands-on experience with industry-standard tools used by top
          digital marketers
        </p>
      </div>

      {/* Marquee */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-6 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            duration: 30,
          }}
          whileHover={{ animationPlayState: "paused" }}
        >
          {marqueeItems.map((tool, index) => (
            <div
              key={index}
              className="flex-shrink-0 bg-white border border-gray-200 rounded-xl p-6 min-w-[160px] text-center shadow-sm hover:shadow-md transition"
            >
              <div className={`text-3xl mb-3 ${tool.color}`}>{tool.icon}</div>
              <p className="text-sm font-medium text-gray-800">{tool.name}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
