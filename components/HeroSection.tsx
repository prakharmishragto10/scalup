"use client";

export default function HeroSection() {
  const stats = [
    { value: "500+", label: "Students Trained" },
    { value: "95%", label: "Placement Rate" },
    { value: "4.9", label: "Google Rating ★" },
  ];

  const courseTags = ["SEO", "Meta Ads", "Google Ads", "+5 more"];

  return (
    <section className="py-16 md:py-24 overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium">
                Now Enrolling for 2026 Batch
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Master <span className="text-orange-500">Digital Marketing</span>{" "}
              & Build Your Career
            </h1>

            {/* Description */}
            <p className="text-gray-600 text-lg mb-8 max-w-xl">
              Learn SEO, Meta Ads, Google Ads, Content Strategy & more with
              hands-on training from industry experts. Get certified and land
              your dream job.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-12">
              <button className="px-6 py-3 rounded-full bg-orange-500 text-white font-medium hover:bg-orange-600 transition flex items-center gap-2">
                Enroll Now →
              </button>

              <button className="px-6 py-3 rounded-full border border-gray-300 font-medium hover:bg-gray-100 transition flex items-center gap-2">
                ▶ Book a free Demo
              </button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center gap-6">
                  <div>
                    <div className="text-3xl font-bold">{stat.value}</div>
                    <div className="text-sm text-gray-500">{stat.label}</div>
                  </div>

                  {index < stats.length - 1 && (
                    <div className="hidden sm:block w-px h-12 bg-gray-200" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative">
            {/* Glow */}
            <div className="absolute -top-10 -right-10 w-80 h-80 bg-orange-100 rounded-full blur-3xl opacity-60" />

            {/* Discount badge */}
            <div className="absolute -top-3 right-6 z-10">
              <span className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                50% OFF
              </span>
            </div>

            {/* Card */}
            <div className="relative bg-white rounded-3xl shadow-xl p-6 border border-gray-200">
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-1">
                  Digital Marketing Course
                </h3>
                <p className="text-gray-500 text-sm">Complete Certification</p>

                <div className="flex items-center gap-3 mt-3">
                  <span className="text-gray-400 line-through">₹30,000</span>
                  <span className="text-3xl font-bold text-orange-500">
                    ₹15,000
                  </span>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {courseTags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 bg-gray-100 rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Info boxes */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-orange-100 rounded-2xl p-4 text-center">
                  <div className="text-2xl font-bold">3</div>
                  <div className="text-sm text-gray-600">Months Duration</div>
                </div>

                <div className="bg-orange-100 rounded-2xl p-4 text-center">
                  <div className="text-2xl font-bold">8+</div>
                  <div className="text-sm text-gray-600">Live Projects</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
