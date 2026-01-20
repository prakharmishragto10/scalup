"use client";

import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    format: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" className="py-24 bg-orange-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Start Your Career{" "}
              <span className="text-orange-500">Journey Today</span>
            </h2>

            <p className="text-gray-600 mb-4 leading-relaxed max-w-xl">
              Not sure which course is right for you? Fill out the form and our
              career advisors at SCAL UP will help you choose the best learning
              path based on your goals, background, and career plans.
            </p>

            <p className="text-gray-500 italic">
              No pressure. No spam. Just honest guidance.
            </p>
          </div>

          {/* RIGHT FORM */}
          <div className="bg-white border border-orange-200 rounded-3xl p-8 shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 text-center mb-8">
              Get Expert Guidance Before You Enroll
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name <span className="text-orange-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={(e) =>
                    setFormData({ ...formData, fullName: e.target.value })
                  }
                  required
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address <span className="text-orange-500">*</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number <span className="text-orange-500">*</span>
                </label>
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  required
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
              </div>

              {/* Select */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Preferred Learning Format{" "}
                  <span className="text-orange-500">*</span>
                </label>
                <select
                  value={formData.format}
                  onChange={(e) =>
                    setFormData({ ...formData, format: e.target.value })
                  }
                  required
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-orange-400"
                >
                  <option value="">Select an option</option>
                  <option value="online">Online Classes</option>
                  <option value="offline">Offline Classes</option>
                  <option value="hybrid">Hybrid Mode</option>
                  <option value="self-paced">Self-Paced Learning</option>
                </select>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full mt-4 rounded-full bg-orange-500 text-white py-3 font-medium hover:bg-orange-600 transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
