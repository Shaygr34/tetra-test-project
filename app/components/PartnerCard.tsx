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
    <div className="rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 overflow-hidden shadow-sm">
      <div className="flex flex-col items-center p-6 gap-3">
        <div className="relative w-20 h-20 rounded-full overflow-hidden bg-zinc-100 dark:bg-zinc-800">
          <Image
            src={partner.imageUrl}
            alt={partner.name}
            fill
            className="object-cover"
          />
        </div>
        <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
          {partner.name}
        </h3>
        <button
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          className="flex items-center gap-1 text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-100 transition-colors"
        >
          {open ? "Hide details" : "Read more"}
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
      </div>

      <div
        className={`grid transition-all duration-300 ease-in-out ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-6 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
            {partner.description}
          </p>
        </div>
      </div>
    </div>
  );
}
