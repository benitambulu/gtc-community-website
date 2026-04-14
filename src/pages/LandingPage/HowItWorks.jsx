import { Link } from 'react-router-dom';

const steps = [
  {
    num: '01',
    title: 'Join a Growth Track',
    desc: 'Growth Tracks build monthly milestones your community, college-based goals, and tools — tailored to keep you focused and moving forward.',
  },
  {
    num: '02',
    title: 'Weekly Accountability Check-Ins',
    desc: "Every week you're called together to record progress, share wins, and push through challenges — Transparent. Supportive. Real. Serious.",
  },
  {
    num: '03',
    title: 'Track Your Progress',
    desc: 'Gain access to tools that help you understand exactly where you stand across your goals and what next means for you.',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-28 border-b border-white/5 bg-dark">
      <div className="max-w-7xl mx-auto px-6">

        {/* ── Header ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div>
            <span className="section-label reveal">How It Works</span>

            <h2
              className="font-display uppercase leading-none mt-4 reveal"
              style={{ fontSize: 'clamp(52px, 7vw, 80px)' }}
            >
              Three{' '}
              <span className="text-orange text-glow">Steps,</span>
              <br />
              One Direction
            </h2>
          </div>

          <Link to="/" className="btn-ghost reveal self-start md:self-end">
            Get Started
            <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
              <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor"
                strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

        {/* ── Steps ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:divide-x md:divide-white/5">
          {steps.map((step, i) => (
            <div
              key={i}
              className="reveal group relative flex flex-col gap-5 px-0 md:px-10 py-10
                         first:pl-0 last:pr-0 border-b md:border-b-0 border-white/5 last:border-b-0"
              style={{ transitionDelay: `${i * 0.15}s` }}
            >

              {/* Large background number */}
              <div
                className="font-display leading-none select-none pointer-events-none
                           transition-colors duration-500 group-hover:text-orange/15"
                style={{
                  fontSize: '96px',
                  color: 'rgba(255,255,255,0.04)',
                  lineHeight: 1,
                }}
              >
                {step.num}
              </div>

              {/* Step number badge */}
              <div className="flex items-center gap-3 -mt-4">
                <div
                  className="w-6 h-6 flex items-center justify-center border border-orange/40
                             group-hover:border-orange group-hover:bg-orange/10
                             transition-all duration-300"
                >
                  <span className="font-heading font-bold text-orange text-[10px]">
                    {i + 1}
                  </span>
                </div>
                <div className="h-px flex-1 bg-white/5 group-hover:bg-orange/20 transition-colors duration-500" />
              </div>

              {/* Title */}
              <h3 className="font-heading font-bold text-white uppercase tracking-wide
                             group-hover:text-orange transition-colors duration-300"
                style={{ fontSize: '20px' }}
              >
                {step.title}
              </h3>

              {/* Desc */}
              <p className="font-body text-white/40 text-[13px] leading-relaxed">
                {step.desc}
              </p>

              {/* Bottom reveal line */}
              <div className="mt-auto pt-6">
                <div
                  className="h-px bg-orange transition-all duration-700 ease-out"
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

            </div>
          ))}
        </div>

        {/* ── Connector line (desktop only) ── */}
        <div className="hidden md:flex items-center justify-between mt-10 px-10 reveal">
          {steps.map((_, i) => (
            <div key={i} className="flex items-center flex-1 last:flex-none">
              {/* Dot */}
              <div
                className="w-2 h-2 rounded-full bg-orange shrink-0"
                style={{ boxShadow: '0 0 8px rgba(255,92,0,0.6)' }}
              />
              {/* Line between dots */}
              {i < steps.length - 1 && (
                <div className="flex-1 h-px bg-linear-to-r from-orange/40 to-orange/10 mx-1" />
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}