import { Metadata } from "next";
import VerticalPage from "@/components/VerticalPage";

export const metadata: Metadata = {
  title: "CA AI — Daily Compliance Briefing on WhatsApp | Bhartiya AI",
  description:
    "Get daily GST updates, ITR deadlines, MCA filings, SEBI/RBI circulars & tax planning tips on WhatsApp. Built for Chartered Accountants & tax professionals.",
};

export default function CAAIPage() {
  return (
    <VerticalPage
      title="CA AI"
      emoji="📊"
      tagline="Your daily compliance briefing on WhatsApp"
      description="Every morning at 8 AM receive a curated intelligence briefing — GST rate changes, ITR and MCA filing deadlines, SEBI and RBI circular summaries, budget updates, and tax planning tips — written in plain language that you can forward directly to clients."
      heroGradient="bg-gradient-to-br from-blue-50 via-white to-indigo-50"
      accentColor="text-navy"
      accentBg="bg-blue-50"
      whatsappText="CAAI"
      features={[
        {
          icon: "📋",
          title: "GST Updates",
          desc: "Rate changes, new notifications, GSTR filing reminders, and ITC rule changes — summarised in plain language.",
        },
        {
          icon: "📅",
          title: "Filing Deadlines",
          desc: "Never miss an ITR, GSTR, MCA, or TDS deadline again. Get reminders 7 days, 3 days, and 1 day before.",
        },
        {
          icon: "🏦",
          title: "SEBI & RBI Circulars",
          desc: "Key regulatory updates from SEBI, RBI, IRDAI summarised in 3-4 lines you can actually understand.",
        },
        {
          icon: "💡",
          title: "Tax Planning Tips",
          desc: "Weekly actionable tax saving strategies for individuals and businesses. Ready to share with clients.",
        },
        {
          icon: "📊",
          title: "Budget Updates",
          desc: "Real-time analysis during budget season. What changed, who benefits, what to advise clients.",
        },
        {
          icon: "📤",
          title: "Client-Ready Format",
          desc: "Every update is written so you can forward it directly to clients. Professional, clear, and accurate.",
        },
      ]}
      audience={[
        "Chartered Accountants",
        "Tax consultants",
        "CS professionals",
        "CA firms & partners",
        "Finance teams",
        "CFOs & controllers",
        "CA students",
        "Tax advocates",
      ]}
      pricing={[
        {
          name: "Solo",
          price: "₹299",
          highlighted: true,
          features: [
            "Daily compliance briefing",
            "All GST, ITR, MCA updates",
            "SEBI/RBI circular summaries",
            "Filing deadline reminders",
            "Tax planning tips",
            "Client-forward ready format",
          ],
        },
        {
          name: "Firm",
          price: "₹799",
          features: [
            "Everything in Solo",
            "Up to 5 team members",
            "Sector-specific alerts",
            "Quarterly compliance calendar",
            "Ask CA AI — unlimited queries",
            "Priority support",
          ],
        },
      ]}
    />
  );
}
