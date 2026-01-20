"use client";

const features = [
  {
    icon: "💼",
    title: "Experience",
    description:
      "Gain real, hands-on experience through live projects and practical assignments. Every module is designed to prepare you for real-world digital marketing challenges.",
  },
  {
    icon: "📘",
    title: "Education",
    description:
      "Learn through clear, structured lessons designed for beginners and professionals alike. Each topic is explained step by step, making complex concepts easy to understand.",
  },
  {
    icon: "🏆",
    title: "Certificate",
    description:
      "Earn a course completion certificate from SCAL UP that validates your skills. Use it to strengthen your resume, portfolio, and LinkedIn profile.",
  },
  {
    icon: "⏰",
    title: "Flexible Learning",
    description:
      "Study anytime, anywhere with flexible learning designed around your schedule. Progress through lessons comfortably and learn without pressure.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Features of Our <span className="text-orange-500">Courses</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Why choose SCAL UP? We focus on building real, practical skills
            through clear and beginner-friendly learning.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-800 border border-gray-700 rounded-2xl p-6 transition hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center text-orange-500 text-xl mb-5">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
