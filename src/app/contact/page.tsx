import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — Bhartiya AI",
  description: "Get in touch with Bhartiya AI. Email us at admin@bhartiyaai.in or reach us on WhatsApp.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-cream via-white to-light-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-navy mb-6">
              Contact <span className="text-saffron">Us</span>
            </h1>
            <p className="text-xl text-gray-600">
              Have questions? Want to partner? We&apos;d love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Cards */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-navy mb-6">Get In Touch</h2>

              <div className="bg-gray-50 rounded-2xl p-6 flex items-start gap-4">
                <div className="w-12 h-12 bg-saffron/10 rounded-xl flex items-center justify-center text-2xl shrink-0">
                  📧
                </div>
                <div>
                  <h3 className="font-semibold text-navy">Email</h3>
                  <a href="mailto:admin@bhartiyaai.in" className="text-saffron hover:underline">
                    admin@bhartiyaai.in
                  </a>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 flex items-start gap-4">
                <div className="w-12 h-12 bg-green/10 rounded-xl flex items-center justify-center text-2xl shrink-0">
                  💬
                </div>
                <div>
                  <h3 className="font-semibold text-navy">WhatsApp</h3>
                  <a
                    href="https://wa.me/919868228172?text=HI"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green hover:underline"
                  >
                    Send HI to get started
                  </a>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 flex items-start gap-4">
                <div className="w-12 h-12 bg-navy/10 rounded-xl flex items-center justify-center text-2xl shrink-0">
                  📍
                </div>
                <div>
                  <h3 className="font-semibold text-navy">Location</h3>
                  <p className="text-gray-600">Mohali, Punjab, India</p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-2xl shrink-0">
                  🌐
                </div>
                <div>
                  <h3 className="font-semibold text-navy">Website</h3>
                  <p className="text-gray-600">bhartiyaai.in</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-navy mb-6">Send Us a Message</h2>
              <form className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-saffron/50 focus:border-saffron"
                    placeholder="Akhil Malhotra"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-saffron/50 focus:border-saffron"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-saffron/50 focus:border-saffron bg-white"
                  >
                    <option>General Enquiry</option>
                    <option>Kisan AI</option>
                    <option>Guru AI</option>
                    <option>CA AI</option>
                    <option>Partnership</option>
                    <option>Feedback</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-saffron/50 focus:border-saffron resize-none"
                    placeholder="Tell us what you need..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-saffron text-white py-3.5 rounded-full font-medium hover:bg-saffron-dark transition text-lg"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
