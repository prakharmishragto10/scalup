"use client";

import { Users, Target, Award, TrendingUp } from "lucide-react";

export default function WhyChooseSection() {
  const benefits = [
    {
      icon: Users,
      title: "Best Industry Mentors",
      description:
        "Learn from experienced instructors who bring real-world industry knowledge into every session.",
    },
    {
      icon: Target,
      title: "Learn at Your Own Pace",
      description:
        "Study anytime, anywhere with flexible learning designed around your schedule.",
    },
    {
      icon: Award,
      title: "Professional Certification",
      description:
        "Earn a recognized course completion certificate that validates your skills.",
    },
    {
      icon: TrendingUp,
      title: "Career Support",
      description:
        "From building job-ready skills to interview preparation and career guidance.",
    },
  ];

  const stats = [
    { value: "500+", label: "Students Placed" },
    { value: "50+", label: "Hiring Partners" },
    { value: "₹5L+", label: "Avg. Salary" },
    { value: "100%", label: "Job Assistance" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* LEFT */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Why Choose <span className="text-orange-500">SCAL UP</span>?
            </h2>

            <p className="text-gray-600 mb-10 leading-relaxed max-w-xl">
              At SCAL UP, we focus on building real, practical skills through
              clear and beginner-friendly learning. Our courses are thoughtfully
              structured and designed to help you grow with confidence.
            </p>

            <div className="space-y-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="flex gap-4">
                    {/* Icon */}
                    <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-500 flex-shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>

                    {/* Text */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        {benefit.title}
                      </h4>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT */}
          <div className="bg-orange-50 rounded-3xl p-8">
            <h3 className="text-xl font-bold text-center text-gray-900 mb-2">
              Career Support That Goes Beyond the Classroom
            </h3>

            <p className="text-center text-sm text-gray-600 mb-8 max-w-md mx-auto">
              Learning skills is just the beginning. We support you at every
              stage of your career journey.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 text-center border border-orange-200"
                >
                  <div className="text-3xl font-bold text-orange-500 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
