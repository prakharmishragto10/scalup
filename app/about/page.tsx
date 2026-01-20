"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Users, Target, Briefcase, Star } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="bg-white">
      <Navbar />
      {/* HERO */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="text-sm font-semibold text-orange-500 mb-3">ABOUT US</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Empowering Digital <span className="text-orange-500">Futures</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            SCAL UP is dedicated to transforming students and professionals into
            skilled digital marketers ready for the industry.
          </p>
        </div>
      </section>

      {/* MISSION + STATS */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-14 items-center">
          {/* Mission */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              At SCAL UP, we believe that quality education should be accessible
              to everyone. Our mission is to bridge the gap between theoretical
              knowledge and practical skills in digital marketing.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We focus on hands-on training, real-world projects, and
              industry-relevant curriculum to ensure our students are job-ready
              from day one. Our experienced mentors bring years of industry
              experience to every session.
            </p>
          </div>

          {/* Stats */}
          <div className="grid sm:grid-cols-2 gap-6">
            <StatCard
              icon={<Users className="w-6 h-6 text-orange-500" />}
              value="500+"
              label="Students Trained"
            />
            <StatCard
              icon={<Target className="w-6 h-6 text-orange-500" />}
              value="95%"
              label="Placement Rate"
            />
            <StatCard
              icon={<Briefcase className="w-6 h-6 text-orange-500" />}
              value="50+"
              label="Hiring Partners"
            />
            <StatCard
              icon={<Star className="w-6 h-6 text-orange-500" />}
              value="4.9★"
              label="Student Rating"
            />
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="pb-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl px-8 py-14">
            <h3 className="text-center text-2xl font-bold text-white mb-12">
              Our Values
            </h3>

            <div className="grid md:grid-cols-3 gap-8 text-center">
              <ValueCard
                title="Excellence"
                description="We strive for excellence in everything we do, from curriculum design to student support."
              />
              <ValueCard
                title="Integrity"
                description="We believe in honest, transparent education that delivers real value to our students."
              />
              <ValueCard
                title="Innovation"
                description="We constantly update our courses to keep pace with the ever-evolving digital landscape."
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

/* ---------- Small Components ---------- */

function StatCard({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 text-center shadow-sm">
      <div className="flex justify-center mb-3">{icon}</div>
      <div className="text-2xl font-bold text-gray-900">{value}</div>
      <div className="text-sm text-gray-600">{label}</div>
    </div>
  );
}

function ValueCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div>
      <h4 className="text-lg font-semibold text-orange-500 mb-2">{title}</h4>
      <p className="text-sm text-gray-400 leading-relaxed">{description}</p>
    </div>
  );
}
