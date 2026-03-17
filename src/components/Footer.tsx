import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-saffron rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">B</span>
              </div>
              <span className="text-xl font-bold">
                Bhartiya <span className="text-saffron">AI</span>
              </span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Intelligence for Bharat. AI-powered daily services delivered on WhatsApp every morning.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-saffron">Products</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><Link href="/kisan-ai" className="hover:text-white transition">Kisan AI</Link></li>
              <li><Link href="/guru-ai" className="hover:text-white transition">Guru AI</Link></li>
              <li><Link href="/ca-ai" className="hover:text-white transition">CA AI</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-saffron">Company</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
              <li><Link href="/#how-it-works" className="hover:text-white transition">How It Works</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-saffron">Contact</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>admin@bhartiyaai.in</li>
              <li>Mohali, Punjab, India</li>
              <li>bhartiyaai.in</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-12 pt-8 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Bhartiya AI. All rights reserved. Made with pride in India.
        </div>
      </div>
    </footer>
  );
}
