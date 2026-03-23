import PartnerCard, { Partner } from "./PartnerCard";

const PARTNERS: Partner[] = [
  {
    name: "Acme Corp",
    imageUrl: "/next.svg",
    description:
      "Acme Corp is a leading provider of enterprise software solutions, specializing in scalable infrastructure and cloud-native architecture. They bring deep expertise in distributed systems and have partnered with us to accelerate deployment pipelines.",
  },
  {
    name: "Globex",
    imageUrl: "/vercel.svg",
    description:
      "Globex focuses on data analytics and AI-driven insights for Fortune 500 companies. Their research division collaborates closely with our team to integrate cutting-edge machine learning capabilities into the platform.",
  },
  {
    name: "Initech",
    imageUrl: "/next.svg",
    description:
      "Initech is a full-service digital agency with expertise in UX design, brand strategy, and front-end engineering. Their design system has been foundational to the visual identity of this project.",
  },
];

export default function PartnersSection() {
  return (
    <section className="w-full max-w-3xl mx-auto py-16 px-6">
      <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
        Our Partners
      </h2>
      <p className="text-zinc-500 dark:text-zinc-400 mb-8 text-sm">
        Click &ldquo;Read more&rdquo; on any card to learn about each partner.
      </p>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {PARTNERS.map((partner) => (
          <PartnerCard key={partner.name} partner={partner} />
        ))}
      </div>
    </section>
  );
}
