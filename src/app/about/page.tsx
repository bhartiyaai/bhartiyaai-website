import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us — Bhartiya AI",
  description:
    "Bhartiya AI was built on a simple belief — every Indian deserves access to expert knowledge in their own language, every single day, without friction.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-cream via-white to-light-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-navy mb-6">
              About <span className="text-saffron">Bhartiya AI</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Built on a simple belief — every Indian deserves access to expert knowledge in their own language, every single day, without friction.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-navy mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                We use Claude AI to generate hyper-relevant, personalised daily content and deliver it directly on WhatsApp — the app every Indian already uses.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                From the farmer in Himachal Pradesh checking apple prices, to the CA in Mumbai tracking GST deadlines, to the devotee in Varanasi receiving their morning shlok — Bhartiya AI serves every Indian with intelligence that matters to them personally.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                No app to download. No login to remember. No friction at all. Just save a number, send HI, and start receiving intelligence every morning.
              </p>
            </div>
            <div className="bg-gradient-to-br from-saffron/5 to-green/5 rounded-3xl p-10">
              <div className="space-y-8">
                {[
                  { number: "250M+", label: "Indians on WhatsApp daily" },
                  { number: "10+", label: "Languages supported" },
                  { number: "5:30 AM", label: "Daily delivery time" },
                  { number: "3", label: "AI-powered products" },
                ].map((stat, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="text-3xl font-bold text-saffron w-24">{stat.number}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-navy mb-6">Our Vision</h2>
            <p className="text-2xl text-gray-600 leading-relaxed font-medium">
              &ldquo;AI for every Indian, in their language, on their phone, every morning.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy text-center mb-14">What We Stand For</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🇮🇳",
                title: "India First",
                desc: "Every product is designed for Indian users — in Indian languages, using Indian data sources, solving Indian problems.",
              },
              {
                icon: "🤝",
                title: "Zero Friction",
                desc: "No app downloads, no signups, no passwords. If you have WhatsApp, you have Bhartiya AI. That simple.",
              },
              {
                icon: "🧠",
                title: "AI That Cares",
                desc: "We use AI not to replace experts but to make expert knowledge accessible to every Indian, regardless of their education or location.",
              },
            ].map((v, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-8 text-center">
                <div className="text-5xl mb-4">{v.icon}</div>
                <h3 className="text-xl font-bold text-navy mb-3">{v.title}</h3>
                <p className="text-gray-600 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-20 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Founded By</h2>
            <div className="w-24 h-24 bg-saffron rounded-full flex items-center justify-center text-4xl mx-auto mb-6">
              A
            </div>
            <h3 className="text-2xl font-bold mb-2">Akhil Malhotra</h3>
            <p className="text-saffron font-medium mb-4">Founder & CEO, Bhartiya AI</p>
            <p className="text-gray-300 leading-relaxed">
              Based in Mohali, Punjab. On a mission to bring the power of AI to every Indian through the simplest possible interface — WhatsApp.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-saffron to-saffron-dark text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Join the Bhartiya AI family</h2>
          <p className="text-xl mb-8 text-white/90">Start receiving AI-powered intelligence every morning.</p>
          <Link
            href="/#products"
            className="bg-white text-saffron px-8 py-3.5 rounded-full text-lg font-bold hover:bg-gray-100 transition inline-block"
          >
            Explore Our Products
          </Link>
        </div>
      </section>
    </>
  );
}
