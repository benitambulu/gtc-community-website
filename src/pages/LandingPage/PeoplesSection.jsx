const members = [
  {
    name: 'Benita Joseph',
    role: 'Founder',
    initial: 'B',
    bg: 'linear-gradient(135deg, #1a0800 0%, #0f0500 100%)',
  },
  {
    name: 'Jonathan Chosen',
    role: 'Community Lead',
    initial: 'J',
    bg: 'linear-gradient(135deg, #1a1000 0%, #0f0800 100%)',
  },
  {
    name: 'Kolawole Ibrahim',
    role: 'Programs Director',
    initial: 'K',
    bg: 'linear-gradient(135deg, #001a0e 0%, #000f08 100%)',
  },
  {
    name: 'Banke Salaudeen',
    role: 'Growth Strategist',
    initial: 'R',
    bg: 'linear-gradient(135deg, #08001a 0%, #04000f 100%)',
  },
];

export default function PeopleSection() {
  return (
    <section className="py-28 border-b border-white/5 bg-dark">
      <div className="max-w-7xl mx-auto px-6">

        {/* ── Header ── */}
        <div className="mb-16">
          <span className="section-label reveal">Our Team</span>

          <h2
            className="font-display uppercase leading-none mt-4 reveal"
            style={{ fontSize: 'clamp(52px, 7vw, 80px)' }}
          >
            People who{' '}
            <span className="text-orange text-glow">live</span>
            <br />
            the mission
          </h2>
        </div>

        {/* ── Cards grid ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {members.map((m, i) => (
            <div
              key={i}
              className="reveal group relative overflow-hidden cursor-default"
              style={{
                background: m.bg,
                border: '1px solid rgba(255,255,255,0.05)',
                transitionDelay: `${i * 0.12}s`,
                transition: 'transform 0.3s ease, border-color 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.borderColor = 'rgba(255,92,0,0.35)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0px)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
              }}
            >

              {/* ── Avatar area ── */}
              <div className="relative h-44 flex items-center justify-center overflow-hidden">

                {/* Radial glow bg */}
                <div
                  className="absolute inset-0 opacity-20 transition-opacity duration-300 group-hover:opacity-40"
                  style={{
                    background: 'radial-gradient(circle at center, #FF5C00, transparent 65%)',
                  }}
                />

                {/* Subtle grid pattern */}
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage:
                      'linear-gradient(rgba(255,92,0,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,92,0,0.4) 1px, transparent 1px)',
                    backgroundSize: '24px 24px',
                  }}
                />

                {/* Avatar circle */}
                <div
                  className="relative z-10 w-16 h-16 rounded-full flex items-center justify-center
                             transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background: '#FF5C00',
                    boxShadow: '0 0 30px rgba(255,92,0,0.5)',
                  }}
                >
                  <span className="font-display text-white text-2xl tracking-widest">
                    {m.initial}
                  </span>
                </div>

                {/* Decorative ring around avatar */}
                <div
                  className="absolute z-10 w-24 h-24 rounded-full border border-orange/20
                             transition-all duration-500 group-hover:border-orange/50
                             group-hover:scale-110"
                  style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
                />
              </div>

              {/* ── Info ── */}
              <div className="px-5 py-4 border-t border-white/5">
                <div className="font-heading font-bold text-white uppercase tracking-wide text-[14px]">
                  {m.name}
                </div>
                <div
                  className="font-body text-[12px] tracking-wide mt-0.5 transition-colors duration-300 group-hover:text-orange"
                  style={{ color: 'rgba(255,92,0,0.6)' }}
                >
                  {m.role}
                </div>
              </div>

              {/* ── Bottom orange line reveal ── */}
              <div
                className="h-0.5 bg-orange transition-all duration-500"
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