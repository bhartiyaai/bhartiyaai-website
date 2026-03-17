"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-9 h-9 bg-saffron rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">B</span>
            </div>
            <span className="text-xl font-bold text-navy">
              Bhartiya <span className="text-saffron">AI</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="/kisan-ai" className="text-gray-600 hover:text-saffron transition">
              Kisan AI
            </Link>
            <Link href="/guru-ai" className="text-gray-600 hover:text-saffron transition">
              Guru AI
            </Link>
            <Link href="/ca-ai" className="text-gray-600 hover:text-saffron transition">
              CA AI
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-saffron transition">
              About
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-saffron transition">
              Contact
            </Link>
            <Link
              href="#how-it-works"
              className="bg-saffron text-white px-5 py-2 rounded-full hover:bg-saffron-dark transition font-medium"
            >
              Start Free
            </Link>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pb-4">
          <Link href="/kisan-ai" className="block py-3 text-gray-600 hover:text-saffron" onClick={() => setOpen(false)}>
            Kisan AI
          </Link>
          <Link href="/guru-ai" className="block py-3 text-gray-600 hover:text-saffron" onClick={() => setOpen(false)}>
            Guru AI
          </Link>
          <Link href="/ca-ai" className="block py-3 text-gray-600 hover:text-saffron" onClick={() => setOpen(false)}>
            CA AI
          </Link>
          <Link href="/about" className="block py-3 text-gray-600 hover:text-saffron" onClick={() => setOpen(false)}>
            About
          </Link>
          <Link href="/contact" className="block py-3 text-gray-600 hover:text-saffron" onClick={() => setOpen(false)}>
            Contact
          </Link>
          <Link
            href="#how-it-works"
            className="block mt-2 text-center bg-saffron text-white px-5 py-2 rounded-full font-medium"
            onClick={() => setOpen(false)}
          >
            Start Free
          </Link>
        </div>
      )}
    </nav>
  );
}
