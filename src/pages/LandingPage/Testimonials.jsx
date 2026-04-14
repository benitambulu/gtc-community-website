const testimonials = [
  {
    stars: 5,
    quote:
      'When I finally found GTC I realized the only thing that was the difference between me and the results I wanted was a community that held me accountable.',
    name: 'Adaeze Okafor',
    role: 'Student',
    initial: 'A',
  },
  {
    stars: 5,
    quote:
      'GTC changed the game for me. I quickly start doing what I do. Now I have a system, a squad, and the structure to stay consistent every single week.',
    name: 'Desmond Jones',
    role: 'Entrepreneur',
    initial: 'D',
  },
  {
    stars: 5,
    quote:
      'Three months in GTC and I accomplished more than I did the entire previous year. The check-ins are real, the people are serious, and growth actually happens here.',
    name: 'Fatima Kabir',
    role: 'Working Professional',
    initial: 'F',
  },
];

function Stars({ count }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="13" height="13" viewBox="0 0 14 14" fill="#FF5C00">
          <path d="M7 1l1.5 4h4l-3.3 2.4 1.3 4L7 9 3.5 11.4l1.3-4L1.5 5h4z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-28 border-b border-white/5 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6">

        {/* ── Header ── */}
        <div className="mb-16">
          <span className="section-label reveal">Member Stories</span>

          <h2
            className="font-display uppercase leading-none mt-4 reveal"
            style={{ fontSize: 'clamp(52px, 7vw, 80px)' }}
          >
            Real{' '}
            <span className="text-[#FF5C00] text-glow">People,</span>
            <br />
            Real Results
          </h2>
        </div>

        {/* ── Cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="reveal group relative flex flex-col gap-6 p-8 bg-[#0F0F0F]
                         border border-white/5 hover:border-[#FF5C00]/30
                         transition-all duration-300 hover:-translate-y-1.5"
              style={{ transitionDelay: `${i * 0.12}s` }}
            >

              {/* Top row — stars + quote mark */}
              <div className="flex items-center justify-between">
                <Stars count={t.stars} />
                <span
                  className="font-display text-[#FF5C00]/15 group-hover:text-[#FF5C00]/30
                             transition-colors duration-300 select-none"
                  style={{ fontSize: '56px', lineHeight: 1 }}
                >
                  "
                </span>
              </div>

              {/* Quote */}
              <p className="font-body text-white/55 text-[14px] leading-relaxed flex-1">
                "{t.quote}"
              </p>

              {/* Divider */}
              <div className="h-px bg-white/5 group-hover:bg-[#FF5C00]/20 transition-colors duration-500" />

              {/* Author */}
              <div className="flex items-center gap-3">

                {/* Avatar */}
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0
                             transition-all duration-300 group-hover:shadow-lg"
                  style={{
                    background: '#FF5C00',
                    boxShadow: '0 0 0 0 rgba(255,92,0,0.4)',
                  }}
                  ref={(el) => {
                    if (!el) return;
                    const card = el.closest('.group');
                    if (!card) return;
                    card.addEventListener('mouseenter', () => {
                      el.style.boxShadow = '0 0 16px rgba(255,92,0,0.5)';
                    });
                    card.addEventListener('mouseleave', () => {
                      el.style.boxShadow = '0 0 0px rgba(255,92,0,0)';
                    });
                  }}
                >
                  <span className="font-display text-white text-[14px]">
                    {t.initial}
                  </span>
                </div>

                {/* Name + role */}
                <div>
                  <div className="font-heading font-bold text-white uppercase tracking-wide text-[13px]">
                    {t.name}
                  </div>
                  <div className="font-body text-white/35 text-[11px] tracking-wide mt-0.5">
                    {t.role}
                  </div>
                </div>
              </div>

              {/* Bottom orange reveal line */}
              <div
                className="absolute bottom-0 left-0 h-[2px] bg-[#FF5C00]
                           transition-all duration-700 ease-out"
                style={{ width: '0%' }}
                ref={(el) => {
                  if (!el) return;
                  const card = el.closest('.group');
                  if (!card) return;
                  card.addEventListener('mouseenter', () => {
                    el.style.width = '100%';
                  });
                  card.addEventListener('mouseleave', () => {
                    el.style.width = '0%';
                  });
                }}
              />

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}