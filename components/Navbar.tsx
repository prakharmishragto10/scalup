"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        {/* LEFT: Logo */}
        <div className="flex items-center gap-3">
          <div className="w-12 border-t-2 border-black" />
          <span className="text-xl font-semibold tracking-wide">
            SCAL<span className="text-orange-500">UP</span>
          </span>
        </div>

        {/* CENTER: Nav Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  isActive
                    ? "text-orange-500"
                    : "text-gray-800 hover:text-orange-500"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* RIGHT: Actions */}
        <div className="flex items-center gap-4">
          <button className="px-5 py-2 text-sm font-medium border border-gray-300 rounded-full text-gray-800 hover:bg-gray-100 transition">
            Login
          </button>

          <button className="px-6 py-2 text-sm font-medium rounded-full bg-orange-500 text-white hover:bg-orange-600 transition">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}
