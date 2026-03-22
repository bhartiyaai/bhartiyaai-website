import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — KisanDost | Bhartiya AI",
  description: "KisanDost Privacy Policy — Farmers Data Protection & Privacy by Bhartiya AI Pvt. Ltd.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-500">
            Farmers Data Protection & Privacy
          </p>
          <p className="text-sm text-gray-400 mt-2">
            Effective Date: March 22, 2026 | Last Updated: March 22, 2026
          </p>
        </div>

        <div className="prose prose-lg max-w-none text-gray-700">
          {/* Section 1 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. About Us</h2>
            <p>
              KisanDost is an agricultural advisory service operated by{" "}
              <strong>Bhartiya AI Pvt. Ltd.</strong> (&apos;we&apos;, &apos;us&apos;, &apos;our&apos;). We provide
              WhatsApp-based farming advisory services to Indian farmers. Our
              registered office is in India.
            </p>
            <p className="mt-2 text-sm text-gray-500">
              Contact: privacy@bhartiyaai.in | Phone: +91 89682 28172 | Website:
              bhartiyaai.in
            </p>
          </section>

          {/* Section 2 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              2. Data We Collect
            </h2>
            <p className="mb-4">
              When you use KisanDost via WhatsApp, we collect the following
              information:
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              2.1 Information You Provide Directly
            </h3>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>Name and WhatsApp phone number</li>
              <li>State, district, city/village of residence</li>
              <li>Crops you grow (e.g., wheat, apple, tomato)</li>
              <li>Farm diary entries (activities, weather observations)</li>
              <li>Expense and income records you share with us</li>
              <li>Spray and chemical usage logs</li>
              <li>Photos of crops/plants you send for diagnosis</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              2.2 Information Generated Automatically
            </h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Message timestamps and frequency</li>
              <li>Questions asked and answers provided</li>
              <li>Feedback ratings (thumbs up / thumbs down)</li>
              <li>Subscription and payment status</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              3. How We Use Your Data
            </h2>
            <p className="mb-2">
              We use your data <strong>ONLY</strong> for the following purposes:
            </p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>Providing personalized farming advisory in your language</li>
              <li>
                Sending daily mandi prices, weather alerts, and crop advisories
              </li>
              <li>Diagnosing crop diseases from photos you share</li>
              <li>Reminding you about spray schedules</li>
              <li>Notifying you about relevant government schemes</li>
              <li>Processing subscription payments via Razorpay</li>
              <li>Improving our AI advisory accuracy over time</li>
            </ul>

            <p className="mb-2 font-semibold">We DO NOT use your data for:</p>
            <ul className="list-disc pl-6 space-y-1 text-red-700">
              <li>Selling to third-party advertisers</li>
              <li>Political targeting or profiling</li>
              <li>Sharing with input dealers without your consent</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              4. Data Storage & Security
            </h2>
            <p className="mb-4">
              Your data is stored securely on Supabase cloud infrastructure with
              the following protections:
            </p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>All data encrypted at rest using AES-256 encryption</li>
              <li>Secure HTTPS connections for all data transfers</li>
              <li>
                Phone numbers partially masked in our admin dashboard (only last 4
                digits visible)
              </li>
              <li>Access restricted to authorized Bhartiya AI team members only</li>
              <li>Regular security audits conducted</li>
            </ul>
            <p className="text-sm text-gray-500">
              Your data is stored on servers located in Singapore/USA (Supabase
              infrastructure). By using KisanDost, you consent to this cross-border
              data transfer.
            </p>
          </section>

          {/* Section 5 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              5. Data Sharing
            </h2>
            <p className="mb-2">
              We share your data <strong>ONLY</strong> in these limited
              circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                With <strong>Razorpay</strong> for payment processing (payment data
                only)
              </li>
              <li>
                With <strong>Interakt/Meta</strong> for WhatsApp message delivery
              </li>
              <li>
                With <strong>government authorities</strong> if legally required by
                court order
              </li>
              <li>
                With our AI provider (<strong>Anthropic</strong>) for generating
                advisory responses — data is not stored by Anthropic
              </li>
            </ul>
          </section>

          {/* Section 6 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              6. Your Rights — Digital Personal Data Protection Act 2023
            </h2>
            <p className="mb-4">
              Under India&apos;s Digital Personal Data Protection Act 2023, you have the
              following rights:
            </p>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-3">
              <h3 className="font-bold text-green-800">Right to Access</h3>
              <p className="text-green-700">
                Send &apos;MERA DATA DEKHO&apos; to KisanDost to receive a copy of all data
                we hold about you.
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-3">
              <h3 className="font-bold text-blue-800">Right to Correction</h3>
              <p className="text-blue-700">
                Send &apos;MERA DATA THEEK KARO&apos; followed by what needs to be corrected.
              </p>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-3">
              <h3 className="font-bold text-red-800">Right to Deletion</h3>
              <p className="text-red-700">
                Send &apos;MERA DATA DELETE KARO&apos; to permanently delete all your data.
                We will confirm within 7 days.
              </p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <h3 className="font-bold text-yellow-800">Right to Grievance</h3>
              <p className="text-yellow-700">
                Contact our Grievance Officer at privacy@bhartiyaai.in within 30
                days of any complaint.
              </p>
            </div>
          </section>

          {/* Section 7 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              7. Data Retention
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300 text-sm">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 p-3 text-left">Data Type</th>
                    <th className="border border-gray-300 p-3 text-left">Retention Period</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-3">Active account data</td>
                    <td className="border border-gray-300 p-3">As long as you use KisanDost</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-3">Inactive account data</td>
                    <td className="border border-gray-300 p-3">Deleted after 24 months of inactivity</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3">Payment records</td>
                    <td className="border border-gray-300 p-3">7 years (as required by Indian tax law)</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-3">Deleted account data</td>
                    <td className="border border-gray-300 p-3">Permanently erased within 30 days</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 8 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              8. Children&apos;s Privacy
            </h2>
            <p>
              KisanDost is intended for adult farmers (18 years and above). We do
              not knowingly collect data from minors. If you believe a minor has
              shared data with us, contact privacy@bhartiyaai.in immediately.
            </p>
          </section>

          {/* Section 9 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              9. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify
              you via WhatsApp message at least 7 days before any significant
              changes take effect. Continued use of KisanDost after the effective
              date constitutes acceptance of the updated policy.
            </p>
          </section>

          {/* Section 10 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              10. Contact Us
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="font-bold">Email</p>
                <p>privacy@bhartiyaai.in</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="font-bold">WhatsApp</p>
                <p>+91 89682 28172 — Send &apos;PRIVACY HELP&apos;</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="font-bold">Grievance Officer</p>
                <p>Akhil Malhotra, Bhartiya AI Pvt. Ltd.</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="font-bold">Response Time</p>
                <p>We respond to all privacy requests within 30 days</p>
              </div>
            </div>
          </section>

          <p className="text-sm text-gray-400 text-center mt-8 border-t pt-6">
            This Privacy Policy is governed by the laws of India. Any disputes
            shall be subject to the exclusive jurisdiction of courts in India.
          </p>
        </div>
      </div>
    </main>
  );
}
