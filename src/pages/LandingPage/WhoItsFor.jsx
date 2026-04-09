const audiences = [
  {
    icon: "💼",
    title: "Working Professionals",
    desc: "Balance your career ambitions with a community that keeps you sharp, focused, and demanding more of yourself at every level.",
  },
  {
    icon: "🎓",
    title: "Students",
    desc: "Build the disciplines that define your future. Stop procrastinating, stay committed, and secure your future starting today.",
  },
  {
    icon: "🚀",
    title: "Growth Seekers",
    desc: "You want more — more platforms, more results, more impact. GTC gives you the blueprint and the people to make it real.",
  },
];

export default function WhoItsFor() {
  return (
    <section className="py-28 border-b border-white/5 bg-dark">
      <div className="max-w-7xl mx-auto px-6">
        {/* ── Header ── */}
        <div className="mb-16">
          <span className="section-label reveal">Who It's For</span>

          <h2
            className="font-display uppercase leading-none mt-4 reveal"
            style={{ fontSize: "clamp(52px, 7vw, 80px)" }}
          >
            Built for <span className="text-orange text-glow">Doers</span> &amp;{" "}
            <span className="text-orange text-glow">Achievers</span>
            <br />
            at every stage
          </h2>
        </div>

        {/* ── Cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {audiences.map((a, i) => (
            <div
              key={i}
              className="reveal group relative bg-[#0F0F0F] p-8 flex flex-col gap-5 cursor-default overflow-hidden"
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
              {/* Top border animated bar */}
              <div className="absolute top-0 left-0 h-0.5 w-0 bg-orange transition-all duration-700 group-hover:w-full" />

              {/* Icon bubble */}
              <div className="w-12 h-12 flex items-center justify-center bg-orange/10 border border-orange/20 transition-all duration-300 group-hover:bg-orange/20">
                {a.icon}
              </div>

              {/* Title */}
              <h3 className="font-heading font-bold text-white text-[20px] uppercase tracking-wide">
                {a.title}
              </h3>

              {/* Desc */}
              <p className="font-body text-white/40 text-[13px] leading-relaxed flex-1">
                {a.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
