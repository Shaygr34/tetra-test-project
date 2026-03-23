"use client";

import { useState } from "react";
import Image from "next/image";

export interface Partner {
  name: string;
  imageUrl: string;
  description: string;
}

export default function PartnerCard({ partner }: { partner: Partner }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col items-center rounded-2xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 p-6 shadow-sm transition-shadow hover:shadow-md">
      <Image
        src={partner.imageUrl}
        alt={partner.name}
        width={80}
        height={80}
        className="rounded-full object-cover"
      />
      <h3 className="mt-4 text-base font-semibold text-zinc-900 dark:text-zinc-100">
        {partner.name}
      </h3>
      <button
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        className="mt-3 flex items-center gap-1 text-sm font-medium text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200 transition-colors"
      >
        {open ? "Show less" : "Read more"}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`transition-transform duration-300 ${open ? "rotate-180" : "rotate-0"}`}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-96 opacity-100 mt-3" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400 text-center">
          {partner.description}
        </p>
      </div>
    </div>
  );
}
