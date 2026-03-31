import { Link } from 'react-router-dom';

const features = [
  {
    number: '01',
    title: 'Structured Accountability',
    desc: 'Systems that keep you on-track, focused, and moving — even when motivation is at its lowest. Real accountability, not just vibes.',
  },
  {
    number: '02',
    title: 'Skill-Building Programs',
    desc: 'Targeted tracks across business, finance, fitness, and mental health. Choose your lane and go deep.',
  },
  {
    number: '03',
    title: 'Peer-Support System',
    desc: "Surround yourself with people who take growth seriously. In GTC, your peers lift you — they don't pull you down.",
  },
  {
    number: '04',
    title: 'Weekly Check-Ins That Deliver',
    desc: "The only growth that counts is the growth that doesn't quit when you think you can. Show up every week.",
  },
];

export default function WhatWeDo() {
  return (
    <section className="py-28 border-b border-white/5 bg-dark">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

        {/* ════ LEFT ════ */}
        <div className="lg:sticky lg:top-28">

          <span className="section-label reveal">What We Do</span>

          <h2
            className="font-display uppercase leading-none mt-4 mb-6 reveal"
            style={{ fontSize: 'clamp(52px, 7vw, 80px)' }}
          >
            The Structure<br />
            Your Goals<br />
            <span className="text-orange">Need</span>
          </h2>

          <p className="font-body text-white/40 text-[14px] leading-relaxed max-w-sm mb-10 reveal">
            Most people have goals but lack the environment to execute them.
            GTC gives you the accountability structure, tools, and support
            to actually follow through.
          </p>

          <Link to="/join" className="btn-orange reveal">
            Join Our Team
          </Link>

          {/* Decorative corner bracket */}
          <div className="mt-16 hidden lg:block reveal">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
              <path d="M0 48 L0 0 L48 0" stroke="#FF5C00" strokeWidth="1.5" strokeOpacity="0.3" fill="none"/>
            </svg>
          </div>
        </div>

        {/* ════ RIGHT — feature list ════ */}
        <div className="flex flex-col divide-y divide-white/5">
          {features.map((f, i) => (
            <div
              key={i}
              className="reveal group flex gap-6 py-8 transition-colors duration-300 hover:bg-orange/3 px-2 -mx-2"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              {/* Number */}
              <div className="shrink-0 pt-1">
                <span
                  className="font-display leading-none transition-colors duration-300 group-hover:text-orange"
                  style={{
                    fontSize: '40px',
                    color: 'rgba(255,92,0,0.2)',
                  }}
                >
                  {f.number}
                </span>
              </div>

              {/* Text */}
              <div className="flex-1">
                <h3 className="font-heading font-bold text-white text-[18px] uppercase tracking-wide mb-2">
                  {f.title}
                </h3>
                <p className="font-body text-white/40 text-[13px] leading-relaxed">
                  {f.desc}
                </p>

                {/* Animated underline on hover */}
                <div
                  className="mt-4 h-px bg-orange transition-all duration-500"
                  style={{ width: '0%' }}
                  onMouseEnter={(e) => (e.currentTarget.style.width = '100%')}
                  onMouseLeave={(e) => (e.currentTarget.style.width = '0%')}
                />
              </div>

              {/* Arrow icon */}
              <div className="shrink-0 self-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                style={{ transform: 'translateX(-8px)' }}
                ref={(el) => {
                  if (!el) return;
                  el.closest('.group')?.addEventListener('mouseenter', () => {
                    el.style.transform = 'translateX(0px)';
                  });
                  el.closest('.group')?.addEventListener('mouseleave', () => {
                    el.style.transform = 'translateX(-8px)';
                  });
                }}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M1 8h14M9 2l6 6-6 6"
                    stroke="#FF5C00" strokeWidth="1.5"
                    strokeLinecap="round" strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}