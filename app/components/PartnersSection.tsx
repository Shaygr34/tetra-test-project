import PartnerCard, { type Partner } from "./PartnerCard";

const PARTNERS: Partner[] = [
  {
    name: "Vercel",
    imageUrl: "/vercel.svg",
    description:
      "Vercel is the platform for frontend developers, providing the speed and reliability innovators need to create at the moment of inspiration. Deploy and scale Next.js applications with zero configuration.",
  },
  {
    name: "Next.js",
    imageUrl: "/next.svg",
    description:
      "Next.js is the React framework for the web. It enables you to create high-quality web applications with the power of React, with additional features for performance, SEO, and developer experience.",
  },
];

export default function PartnersSection() {
  return (
    <section className="w-full max-w-3xl px-16 py-16">
      <h2 className="mb-8 text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
        Partners
      </h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {PARTNERS.map((partner) => (
          <PartnerCard key={partner.name} partner={partner} />
        ))}
      </div>
    </section>
  );
}
