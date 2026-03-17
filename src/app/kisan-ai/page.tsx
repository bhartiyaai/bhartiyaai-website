import { Metadata } from "next";
import VerticalPage from "@/components/VerticalPage";

export const metadata: Metadata = {
  title: "Kisan AI — Daily Farm Advisor on WhatsApp | Bhartiya AI",
  description:
    "Get daily mandi prices, weather forecasts, crop disease alerts & sell-or-hold advice on WhatsApp. Built for Indian farmers — wheat, apple, soybean & more.",
};

export default function KisanAIPage() {
  return (
    <VerticalPage
      title="Kisan AI"
      emoji="🌾"
      tagline="Your daily farm advisor on WhatsApp"
      description="Every morning at 6 AM receive variety-specific mandi prices from your nearest mandi, 3-day hyperlocal weather forecast, crop disease alerts, actionable sell-or-hold advice, and government scheme updates — all specific to your crop and your location."
      heroGradient="bg-gradient-to-br from-green-50 via-white to-yellow-50"
      accentColor="text-green"
      accentBg="bg-green-50"
      whatsappText="KISANAI"
      features={[
        {
          icon: "💰",
          title: "Mandi Prices",
          desc: "Variety-specific prices from your nearest mandi updated daily. Know exactly what your crop is selling for before you go.",
        },
        {
          icon: "🌤️",
          title: "Weather Forecast",
          desc: "3-day hyperlocal weather forecast for your exact village/block. Rain alerts, frost warnings, and heat advisories.",
        },
        {
          icon: "🐛",
          title: "Crop Disease Alerts",
          desc: "AI-powered disease detection alerts based on weather patterns and regional reports. Catch problems early.",
        },
        {
          icon: "📈",
          title: "Sell or Hold Advice",
          desc: "Data-driven recommendations on whether to sell today or wait for better prices based on market trends.",
        },
        {
          icon: "🏛️",
          title: "Govt Scheme Updates",
          desc: "Never miss a subsidy or scheme. Get alerts for PM-KISAN, crop insurance, MSP announcements, and more.",
        },
        {
          icon: "🗣️",
          title: "Ask Kisan AI",
          desc: "Ask any farming question in Hindi or your regional language. Get expert advice powered by agricultural AI.",
        },
      ]}
      audience={[
        "Wheat farmers — Punjab, Haryana, UP",
        "Apple orchard owners — Himachal Pradesh",
        "Soybean farmers — Madhya Pradesh",
        "Vegetable growers — across India",
        "Rice farmers — Bihar, West Bengal",
        "Cotton farmers — Gujarat, Maharashtra",
        "Agriculture students",
        "FPO leaders & agri advisors",
      ]}
      pricing={[
        {
          name: "Free",
          price: "Free",
          features: [
            "One crop, one mandi",
            "Basic weather updates",
            "Weekly government schemes",
            "Text-only format",
          ],
        },
        {
          name: "Basic",
          price: "₹49",
          features: [
            "Up to 3 crops, 2 mandis",
            "Daily weather forecast",
            "Disease alerts",
            "Sell-or-hold advice",
          ],
        },
        {
          name: "Pro",
          price: "₹99",
          highlighted: true,
          features: [
            "Unlimited crops & mandis",
            "Hourly price alerts",
            "Ask Kisan AI — unlimited",
            "Priority govt scheme alerts",
          ],
        },
        {
          name: "Orchard",
          price: "₹199",
          features: [
            "Everything in Pro",
            "HPMC cold store rates",
            "Export market prices",
            "Seasonal planning calendar",
            "Family sharing (up to 3)",
          ],
        },
      ]}
    />
  );
}
