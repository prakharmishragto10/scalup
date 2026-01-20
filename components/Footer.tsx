"use client";

import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-gray-400">
      <div className="mx-auto max-w-7xl px-6 py-20">
        {/* TOP GRID */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* BRAND */}
          <div>
            {/* Logo */}
            <div className="relative mb-6">
              <div className="border-t-2 border-white w-14" />
              <span className="absolute left-0 top-3 text-xl font-bold text-white">
                SCAL<span className="text-orange-500">UP</span>
              </span>
            </div>

            <p className="text-sm leading-relaxed mb-6 max-w-sm">
              Empowering students and professionals with practical digital
              marketing skills for real-world success.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4">
              <a className="hover:text-orange-500 transition" href="#">
                <Facebook size={18} />
              </a>
              <a className="hover:text-orange-500 transition" href="#">
                <Instagram size={18} />
              </a>
              <a className="hover:text-orange-500 transition" href="#">
                <Linkedin size={18} />
              </a>
              <a className="hover:text-orange-500 transition" href="#">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              {["Home", "Services", "About Us", "Blog", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-orange-500 transition">
                      {item}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="text-white font-semibold mb-4">Our Services</h4>
            <ul className="space-y-3 text-sm">
              {[
                "SEO Services",
                "Meta Ads",
                "Google Ads",
                "Content Creation",
                "Branding",
              ].map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-orange-500" />
                info@scalup.com
              </li>

              <li className="flex items-center gap-3">
                <Phone size={16} className="text-orange-500" />
                +91 98765 43210
              </li>

              <li className="flex items-center gap-3">
                <MapPin size={16} className="text-orange-500" />
                Srinagar, Kashmir, India
              </li>
            </ul>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="mt-16 border-t border-gray-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <p>© 2026 SCAL UP. All rights reserved.</p>

          <div className="flex gap-6">
            <a href="#" className="hover:text-orange-500 transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-orange-500 transition">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
