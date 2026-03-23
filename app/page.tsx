export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-teal-600 to-teal-800 text-white">
        <div className="max-w-5xl mx-auto px-6 py-24 md:py-32">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
            Build faster.<br />Ship smarter.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-teal-100 max-w-2xl">
            Apex is the all-in-one platform for modern development teams.
            From idea to production in minutes, not months.
          </p>
          <div className="mt-10 flex gap-4">
            <a href="#" className="bg-white text-teal-700 font-semibold px-6 py-3 rounded-lg hover:bg-teal-50 transition">
              Get Started Free
            </a>
            <a href="#" className="border border-white/30 text-white font-medium px-6 py-3 rounded-lg hover:bg-white/10 transition">
              Watch Demo
            </a>
          </div>
        </div>
        <div className="absolute -bottom-1 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" />
          </svg>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center text-gray-900">Why teams choose Apex</h2>
        <p className="text-center text-gray-500 mt-3 max-w-xl mx-auto">
          Everything you need to go from zero to production, all in one place.
        </p>
        <div className="grid md:grid-cols-3 gap-8 mt-14">
          {[
            { icon: "⚡", title: "Lightning Fast", desc: "Deploy in seconds with our edge-first infrastructure. Zero cold starts, global by default." },
            { icon: "🔒", title: "Secure by Default", desc: "Enterprise-grade security built in. SOC2 compliant, end-to-end encrypted, zero-trust architecture." },
            { icon: "🤝", title: "Team Collaboration", desc: "Real-time collaboration tools. Share, review, and ship together with built-in workflows." },
          ].map((f) => (
            <div key={f.title} className="bg-gray-50 rounded-2xl p-6 hover:shadow-md transition">
              <div className="text-3xl mb-4">{f.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900">{f.title}</h3>
              <p className="text-gray-500 mt-2 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { num: "10K+", label: "Active Users" },
              { num: "99.9%", label: "Uptime" },
              { num: "150+", label: "Countries" },
              { num: "5.0★", label: "Rating" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-3xl font-bold text-teal-700">{s.num}</div>
                <div className="text-gray-500 text-sm mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center text-gray-900">Meet the Team</h2>
        <p className="text-center text-gray-500 mt-3">The people behind the platform.</p>
        <div className="grid md:grid-cols-3 gap-8 mt-14">
          {[
            { name: "Sarah Chen", role: "CEO & Co-founder", bio: "Previously led engineering at Stripe. Stanford CS." },
            { name: "Marcus Rodriguez", role: "CTO", bio: "Ex-Google, built infrastructure serving 1B+ requests/day." },
            { name: "Aisha Patel", role: "Head of Design", bio: "Former design lead at Figma. Passionate about developer tools." },
          ].map((m) => (
            <div key={m.name} className="text-center">
              <div className="w-24 h-24 bg-teal-100 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-teal-700">
                {m.name.split(' ').map(n => n[0]).join('')}
              </div>
              <h3 className="font-semibold text-gray-900">{m.name}</h3>
              <p className="text-teal-600 text-sm">{m.role}</p>
              <p className="text-gray-500 text-sm mt-2">{m.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-teal-700 text-white py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold">Ready to get started?</h2>
          <p className="mt-4 text-teal-100">Join 10,000+ teams already building with Apex.</p>
          <a href="#" className="inline-block mt-8 bg-white text-teal-700 font-semibold px-8 py-3 rounded-lg hover:bg-teal-50 transition">
            Start Building — It&apos;s Free
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-bold text-white text-xl">Apex</div>
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-white transition">About</a>
            <a href="#" className="hover:text-white transition">Blog</a>
            <a href="#" className="hover:text-white transition">Careers</a>
            <a href="#" className="hover:text-white transition">Contact</a>
          </div>
          <p className="text-sm">© 2026 Apex. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
