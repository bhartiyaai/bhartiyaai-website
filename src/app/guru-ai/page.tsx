import { Metadata } from "next";
import VerticalPage from "@/components/VerticalPage";

export const metadata: Metadata = {
  title: "Guru AI — Daily Spiritual Wisdom on WhatsApp | Bhartiya AI",
  description:
    "Receive daily shlok from Bhagavad Gita, Ramayan, Upanishads & Guru Granth Sahib on WhatsApp. Festival alerts, Panchang, Kundli readings & Ask Your Guru AI chat.",
};

export default function GuruAIPage() {
  return (
    <VerticalPage
      title="Guru AI"
      emoji="🙏"
      tagline="Your daily spiritual companion on WhatsApp"
      description="Every morning receive a beautifully designed devotional card with shlok from Bhagavad Gita, Ramayan, Upanishads or Guru Granth Sahib — with meaning in simple Hindi, aaj ka mantra, festival alerts, and Ekadashi reminders."
      heroGradient="bg-gradient-to-br from-purple-50 via-white to-orange-50"
      accentColor="text-purple-700"
      accentBg="bg-purple-50"
      whatsappText="GURUAI"
      features={[
        {
          icon: "📿",
          title: "Daily Shlok & Meaning",
          desc: "A carefully chosen verse from sacred texts with meaning explained in simple Hindi that anyone can understand.",
        },
        {
          icon: "🎨",
          title: "Beautiful Devotional Cards",
          desc: "Professionally designed image cards you can share with family and on WhatsApp status. New design every day.",
        },
        {
          icon: "🗓️",
          title: "Festival & Ekadashi Alerts",
          desc: "Never miss an important date. Get reminders for all Hindu festivals, Ekadashi, Purnima, and Amavasya.",
        },
        {
          icon: "🕉️",
          title: "Aaj Ka Mantra",
          desc: "Start your day with a powerful mantra tailored to the day's significance in the Hindu calendar.",
        },
        {
          icon: "🤖",
          title: "Ask Your Guru AI",
          desc: "Ask any spiritual question and get thoughtful, respectful answers powered by AI trained on sacred texts.",
        },
        {
          icon: "📜",
          title: "Panchang & Kundli",
          desc: "Premium users get daily Panchang details and personalized Kundli readings based on their birth chart.",
        },
      ]}
      audience={[
        "Spiritual seekers",
        "Hindu devotees",
        "Sikh devotees",
        "Family WhatsApp groups",
        "NRIs missing daily prayers",
        "Yoga practitioners",
        "Temple communities",
        "Senior citizens",
      ]}
      pricing={[
        {
          name: "Free",
          price: "Free",
          features: [
            "Daily shlok in text format",
            "Festival reminders",
            "Ekadashi alerts",
            "Basic mantra of the day",
          ],
        },
        {
          name: "Bhakt",
          price: "₹99",
          features: [
            "Everything in Free",
            "Beautiful image cards daily",
            "Multiple scripture sources",
            "Share-ready WhatsApp status",
          ],
        },
        {
          name: "Sadhak",
          price: "₹299",
          highlighted: true,
          features: [
            "Everything in Bhakt",
            "Ask Your Guru AI — unlimited",
            "Daily Panchang details",
            "Personalised festival guidance",
          ],
        },
        {
          name: "Guru",
          price: "₹799",
          features: [
            "Everything in Sadhak",
            "Kundli readings",
            "Muhurat alerts",
            "Priority support",
            "Family sharing (up to 5)",
          ],
        },
      ]}
    />
  );
}
