import ProductCard from "@/components/ProductCard";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-cream via-white to-light-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block bg-saffron/10 text-saffron px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              Powered by Claude AI
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-navy leading-tight mb-6">
              Intelligence for{" "}
              <span className="text-saffron">Bharat</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-4 leading-relaxed">
              AI-powered daily services delivered on WhatsApp every morning at 5:30 AM.
            </p>
            <p className="text-lg text-gray-500 mb-10">
              No app. No login. Just send <span className="font-bold text-green">HI</span>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#products"
                className="bg-saffron text-white px-8 py-3.5 rounded-full text-lg font-medium hover:bg-saffron-dark transition shadow-lg shadow-saffron/25"
              >
                Explore Our Products
              </a>
              <a
                href="#how-it-works"
                className="bg-white text-navy px-8 py-3.5 rounded-full text-lg font-medium hover:bg-gray-50 transition border border-gray-200"
              >
                How It Works
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {[
              { number: "3", label: "AI Products" },
              { number: "250M+", label: "Indians on WhatsApp" },
              { number: "5:30 AM", label: "Daily Delivery" },
              { number: "10+", label: "Languages" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl font-bold text-saffron">{stat.number}</div>
                <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-6">
              Why <span className="text-saffron">Bhartiya AI</span>?
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              We believe every Indian deserves access to expert knowledge in their own language, every single day, without friction.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              From the farmer in Himachal checking apple prices, to the CA in Mumbai tracking GST deadlines, to the devotee in Varanasi receiving their morning shlok — Bhartiya AI serves every Indian with intelligence that matters to them personally.
            </p>
          </div>
        </div>
      </section>

      {/* Why WhatsApp */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy text-center mb-12">
            Why <span className="text-green">WhatsApp</span>?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { icon: "📱", text: "250M+ Indians use it daily" },
              { icon: "📥", text: "No new app to download" },
              { icon: "🔑", text: "No login or password needed" },
              { icon: "🤝", text: "Trusted by every Indian family" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition"
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <p className="text-gray-700 font-medium">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
              Our <span className="text-saffron">Products</span>
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Choose the AI service that fits your life. Mix and match — subscribe to one or all.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ProductCard
              title="Guru AI"
              emoji="🙏"
              description="Your daily spiritual companion. Morning shlok, festival alerts, Ekadashi reminders, and Ask Your Guru AI chat."
              features={[
                "Bhagavad Gita, Ramayan, Upanishads, Guru Granth Sahib",
                "Beautiful devotional cards every morning",
                "Panchang, Kundli readings for paid users",
                "Free / Bhakt ₹99 / Sadhak ₹299 / Guru ₹799",
              ]}
              href="/guru-ai"
              bgColor="bg-light-purple"
              accentColor="text-purple-700"
            />
            <ProductCard
              title="Kisan AI"
              emoji="🌾"
              description="Your daily farm advisor. Mandi prices, weather, crop disease alerts, and sell-or-hold advice for your specific crop."
              features={[
                "Variety-specific mandi prices from nearest mandi",
                "3-day hyperlocal weather forecast",
                "Govt scheme updates & disease alerts",
                "Free / Basic ₹49 / Pro ₹99 / Orchard ₹199",
              ]}
              href="/kisan-ai"
              bgColor="bg-light-green"
              accentColor="text-green"
            />
            <ProductCard
              title="CA AI"
              emoji="📊"
              description="Your daily compliance briefing. GST changes, filing deadlines, SEBI/RBI circulars — ready to forward to clients."
              features={[
                "GST rate changes & ITR deadlines",
                "MCA filings & SEBI/RBI summaries",
                "Budget updates & tax planning tips",
                "Solo ₹299 / Firm ₹799 per month",
              ]}
              href="/ca-ai"
              bgColor="bg-light-blue"
              accentColor="text-navy"
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              How It <span className="text-saffron">Works</span>
            </h2>
            <p className="text-lg text-gray-300">Start receiving in under 2 minutes</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: "1",
                title: "Save Our Number",
                desc: "Save the Bhartiya AI WhatsApp number to your phone contacts",
              },
              {
                step: "2",
                title: "Send HI",
                desc: "Open WhatsApp and send HI to start the conversation",
              },
              {
                step: "3",
                title: "Choose Your Channel",
                desc: "Pick Guru AI, Kisan AI, CA AI — or subscribe to all",
              },
              {
                step: "4",
                title: "Receive Daily",
                desc: "Get your personalised AI bundle every morning automatically",
              },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-14 h-14 bg-saffron rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://wa.me/919868228172?text=HI"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green text-white px-8 py-3.5 rounded-full text-lg font-medium hover:bg-green-dark transition shadow-lg"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Send HI to Get Started
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-saffron to-saffron-dark text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to start your AI-powered mornings?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Join thousands of Indians who wake up smarter every day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/919868228172?text=HI"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-saffron px-8 py-3.5 rounded-full text-lg font-bold hover:bg-gray-100 transition"
            >
              Start Free on WhatsApp
            </a>
            <Link
              href="/about"
              className="border-2 border-white text-white px-8 py-3.5 rounded-full text-lg font-medium hover:bg-white/10 transition"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
