import Link from "next/link";

interface PricingTier {
  name: string;
  price: string;
  features: string[];
  highlighted?: boolean;
}

interface VerticalPageProps {
  title: string;
  emoji: string;
  tagline: string;
  description: string;
  heroGradient: string;
  accentColor: string;
  accentBg: string;
  features: { icon: string; title: string; desc: string }[];
  pricing: PricingTier[];
  audience: string[];
  whatsappText: string;
}

export default function VerticalPage({
  title,
  emoji,
  tagline,
  description,
  heroGradient,
  accentColor,
  accentBg,
  features,
  pricing,
  audience,
  whatsappText,
}: VerticalPageProps) {
  return (
    <>
      {/* Hero */}
      <section className={`pt-24 pb-16 ${heroGradient}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
          <div className="text-center max-w-4xl mx-auto">
            <div className="text-6xl mb-4">{emoji}</div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy leading-tight mb-4">
              {title}
            </h1>
            <p className={`text-xl sm:text-2xl ${accentColor} font-medium mb-4`}>
              {tagline}
            </p>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
              {description}
            </p>
            <a
              href={`https://wa.me/919868228172?text=${whatsappText}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 bg-green text-white px-8 py-3.5 rounded-full text-lg font-medium hover:bg-green-dark transition shadow-lg`}
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Subscribe Free on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy text-center mb-14">
            What You Get <span className={accentColor}>Every Morning</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <div key={i} className={`${accentBg} rounded-2xl p-8 hover:shadow-lg transition`}>
                <div className="text-4xl mb-4">{f.icon}</div>
                <h3 className="text-xl font-bold text-navy mb-2">{f.title}</h3>
                <p className="text-gray-600 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Audience */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-navy mb-8">
            Built For
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {audience.map((a, i) => (
              <span
                key={i}
                className={`${accentBg} ${accentColor} px-5 py-2.5 rounded-full text-sm font-medium`}
              >
                {a}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy text-center mb-4">
            Simple <span className={accentColor}>Pricing</span>
          </h2>
          <p className="text-center text-gray-500 mb-14 text-lg">Start free. Upgrade anytime.</p>
          <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-${pricing.length} gap-6 max-w-5xl mx-auto`}>
            {pricing.map((tier, i) => (
              <div
                key={i}
                className={`rounded-2xl p-8 border-2 ${
                  tier.highlighted
                    ? "border-saffron shadow-xl scale-105"
                    : "border-gray-200"
                } bg-white relative`}
              >
                {tier.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-saffron text-white text-xs font-bold px-4 py-1 rounded-full">
                    POPULAR
                  </div>
                )}
                <h3 className="text-xl font-bold text-navy mb-2">{tier.name}</h3>
                <div className="text-3xl font-bold text-navy mb-6">
                  {tier.price}
                  {tier.price !== "Free" && (
                    <span className="text-base font-normal text-gray-400">/month</span>
                  )}
                </div>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="text-green mt-0.5">&#10003;</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={`https://wa.me/919868228172?text=${whatsappText}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block text-center py-3 rounded-full font-medium transition ${
                    tier.highlighted
                      ? "bg-saffron text-white hover:bg-saffron-dark"
                      : "bg-gray-100 text-navy hover:bg-gray-200"
                  }`}
                >
                  {tier.price === "Free" ? "Start Free" : "Subscribe"}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="text-5xl mb-4">{emoji}</div>
          <h2 className="text-3xl font-bold mb-4">
            Start your {title} journey today
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            Just send HI on WhatsApp. It takes 2 minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`https://wa.me/919868228172?text=${whatsappText}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green text-white px-8 py-3.5 rounded-full text-lg font-medium hover:bg-green-dark transition"
            >
              Subscribe on WhatsApp
            </a>
            <Link
              href="/"
              className="border-2 border-white text-white px-8 py-3.5 rounded-full text-lg font-medium hover:bg-white/10 transition"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
