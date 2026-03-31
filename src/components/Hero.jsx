import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  const itemsRef = useRef([]);

  useEffect(() => {
    itemsRef.current.forEach((el, i) => {
      if (!el) return;
      el.style.opacity = '0';
      el.style.transform = 'translateY(32px)';
      setTimeout(() => {
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, 150 + i * 160);
    });
  }, []);

  const ref = (i) => (el) => (itemsRef.current[i] = el);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-dark">

      {/* ── Background radial glow ── */}
      <div
        className="absolute top-1/2 -right-25 -translate-y-1/2 w-175 h-175 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(255,92,0,0.10) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      {/* ── Subtle grid ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,92,0,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,92,0,1) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-6 items-center">

        {/* ════ LEFT — Text ════ */}
        <div className="space-y-6 z-10">

          {/* Badge */}
          <div ref={ref(0)} className="inline-flex items-center gap-2 border border-orange/30 px-3 py-1.5 bg-orange/5">
            <span className="w-1.5 h-1.5 rounded-full bg-orange animate-pulse" />
            <span className="font-heading font-semibold text-[11px] tracking-[0.2em] uppercase text-orange">
              Now Accepting Members
            </span>
          </div>

          {/* Headline */}
          <div ref={ref(1)}>
            <h1 className="font-display leading-none tracking-wide uppercase">
              <span className="block text-white"
                style={{ fontSize: 'clamp(64px, 9vw, 110px)' }}>
                Grow
              </span>
              <span
                className="block text-orange text-glow"
                style={{ fontSize: 'clamp(64px, 9vw, 110px)' }}>
                Through
              </span>
              <span className="block text-white"
                style={{ fontSize: 'clamp(64px, 9vw, 110px)' }}>
                Consistency
              </span>
            </h1>
          </div>

          {/* Body */}
          <p
            ref={ref(2)}
            className="font-body text-white/45 text-[15px] leading-relaxed max-w-md"
          >
            GTC is a structured accountability community for hustling professionals,
            students, and driven individuals serious about showing up — and growing —
            every single week.
          </p>

          {/* CTAs */}
          <div ref={ref(3)} className="flex flex-wrap gap-4 pt-1">
            <Link to="/join" className="btn-orange">
              Join the Community
            </Link>
            <Link to="/programs" className="btn-ghost">
              View Programs
              <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5"
                  strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>

        {/* ════ RIGHT — Orbit graphic ════ */}
        <div
          ref={ref(4)}
          className="relative flex items-center justify-center h-90 lg:h-120"
        >
          {/* Outer dashed ring */}
          <div
            className="absolute w-75 h-75 lg:w-90 lg:h-90 rounded-full border border-white/10"
            style={{ borderStyle: 'dashed' }}
          />

          {/* Middle ring */}
          <div className="absolute w-50 h-50 lg:w-60 lg:h-60 rounded-full border border-white/8" />

          {/* Inner ring */}
          <div className="absolute w-30 h-30 rounded-full border border-orange/15" />

          {/* Center GTC circle */}
          <div
            className="float-anim relative z-10 w-28 h-28 lg:w-32 lg:h-32 rounded-full bg-orange flex items-center justify-center"
            style={{ boxShadow: '0 0 70px rgba(255,92,0,0.55)' }}
          >
            <span className="font-display text-white tracking-widest"
              style={{ fontSize: '28px' }}>
              GTC
            </span>
            <div className="pulse-ring" />
            <div className="pulse-ring pulse-ring-2" />
          </div>

          {/* Orbit dots */}
          <div className="orbit-dot" />
          <div className="orbit-dot orbit-dot-2" />

          {/* ── Floating stat — top right ── */}
          <div
            className="absolute top-6 right-0 lg:right-4 bg-[#111]/90 border border-white/8
                        backdrop-blur-sm px-4 py-3 text-right"
            style={{
              animation: 'floatAnim 6s ease-in-out infinite',
              animationDelay: '0.5s',
            }}
          >
            <div
              className="font-display text-orange leading-none"
              style={{ fontSize: '32px' }}
            >
              503+
            </div>
            <div className="font-body text-white/40 text-[11px] tracking-widest uppercase mt-0.5">
              Total Members
            </div>
          </div>

          {/* ── Floating stat — bottom left ── */}
          <div
            className="absolute bottom-10 left-0 lg:left-4 bg-[#111]/90 border border-white/8
                        backdrop-blur-sm px-4 py-3"
            style={{
              animation: 'floatAnim 5s ease-in-out infinite',
              animationDelay: '1.2s',
            }}
          >
            <div
              className="font-display text-orange leading-none"
              style={{ fontSize: '32px' }}
            >
              98%
            </div>
            <div className="font-body text-white/40 text-[11px] tracking-widest uppercase mt-0.5">
              Consistency Rate
            </div>
          </div>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="font-body text-[10px] tracking-[0.25em] uppercase text-white/30">
          Scroll
        </span>
        <div className="w-px h-10 bg-linear-to-b from-orange/60 to-transparent" />
      </div>

    </section>
  );
}