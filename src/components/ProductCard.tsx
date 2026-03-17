import Link from "next/link";

interface ProductCardProps {
  title: string;
  emoji: string;
  description: string;
  features: string[];
  href: string;
  bgColor: string;
  accentColor: string;
}

export default function ProductCard({
  title,
  emoji,
  description,
  features,
  href,
  bgColor,
  accentColor,
}: ProductCardProps) {
  return (
    <Link href={href} className="block group">
      <div
        className={`${bgColor} rounded-2xl p-8 h-full transition-all group-hover:shadow-xl group-hover:-translate-y-1`}
      >
        <div className="text-5xl mb-4">{emoji}</div>
        <h3 className={`text-2xl font-bold mb-3 ${accentColor}`}>{title}</h3>
        <p className="text-gray-600 mb-5 leading-relaxed">{description}</p>
        <ul className="space-y-2">
          {features.map((f, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
              <span className="text-green mt-0.5">&#10003;</span>
              <span>{f}</span>
            </li>
          ))}
        </ul>
        <div className={`mt-6 inline-flex items-center gap-1 font-medium ${accentColor} group-hover:gap-2 transition-all`}>
          Learn More
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  );
}
