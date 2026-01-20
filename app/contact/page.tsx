"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  return (
    <main className="bg-white">
      {/* HEADER */}
      <Navbar />
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="text-sm font-semibold text-orange-500 mb_toggle mb-3">
            CONTACT US
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Get in <span className="text-orange-500">Touch</span>
          </h1>
          <p className="text-gray-600 max-w-xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and
            we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="pb-28">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-14 items-start">
          {/* CONTACT INFO – FLOATING */}
          <motion.div
            animate={{ y: [-6, 6, -6] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: [0.4, 0, 0.6, 1], // ✅ TS-safe easing
            }}
            className="space-y-6"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Contact Information
            </h3>

            <InfoCard
              icon={<Mail className="w-5 h-5 text-orange-500" />}
              title="Email"
              value="info@scalup.com"
            />
            <InfoCard
              icon={<Phone className="w-5 h-5 text-orange-500" />}
              title="Phone"
              value="+91 98765 43210"
            />
            <InfoCard
              icon={<MapPin className="w-5 h-5 text-orange-500" />}
              title="Address"
              value="Srinagar, Kashmir, India"
            />
            <InfoCard
              icon={<Clock className="w-5 h-5 text-orange-500" />}
              title="Hours"
              value="Mon - Sat: 9:00 AM - 7:00 PM"
            />
          </motion.div>

          {/* FORM – FLOATING (DELAYED) */}
          <motion.div
            animate={{ y: [-8, 8, -8] }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: [0.4, 0, 0.6, 1],
            }}
            className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg"
          >
            <h3 className="text-lg font-bold text-gray-900 mb-6">
              Send us a Message
            </h3>

            <form className="space-y-4">
              <Input
                label="Full Name"
                placeholder="Your name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
              <Input
                label="Email Address"
                placeholder="Your email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
              <Input
                label="Phone Number"
                placeholder="Your phone"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
              />

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="How can we help you?"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
              </div>

              <button
                type="submit"
                className="w-full mt-2 rounded-full bg-orange-500 text-white py-3 font-medium hover:bg-orange-600 transition"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

/* ---------------- Components ---------------- */

function InfoCard({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 flex gap-4 items-center shadow-sm">
      <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
        {icon}
      </div>
      <div>
        <p className="text-sm font-semibold text-gray-900">{title}</p>
        <p className="text-sm text-gray-600">{value}</p>
      </div>
    </div>
  );
}

function Input({
  label,
  placeholder,
  value,
  onChange,
}: {
  label: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
      />
    </div>
  );
}
