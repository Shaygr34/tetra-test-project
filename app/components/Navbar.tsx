"use client";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between h-14">
        <span className="font-bold text-xl text-teal-700">Apex</span>
        <div className="hidden md:flex items-center gap-6 text-sm text-gray-600">
          <a href="#" className="hover:text-teal-700 transition">Features</a>
          <a href="#" className="hover:text-teal-700 transition">Pricing</a>
          <a href="#" className="hover:text-teal-700 transition">Blog</a>
          <a href="#" className="bg-teal-700 text-white px-4 py-2 rounded-lg font-medium hover:bg-teal-800 transition">
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
}
