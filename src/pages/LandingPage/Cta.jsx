import { Link } from 'react-router-dom';

export default function CTA() {
  return (
    <section className="relative py-36 overflow-hidden bg-[#0A0A0A]">

      {/* ── Large radial glow center ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(255,92,0,0.10) 0%, transparent 70%)',
        }}
      />

      {/* ── Grid overlay ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,92,0,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,92,0,1) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      {/* ── Top edge line ── */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FF5C00]/40 to-transparent" />

      {/* ── Bottom edge line ── */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FF5C00]/40 to-transparent" />

      {/* ── Corner brackets ── */}
      {/* Top left */}
      <div className="absolute top-8 left-8 w-8 h-8 border-t border-l border-[#FF5C00]/30" />
      {/* Top right */}
      <div className="absolute top-8 right-8 w-8 h-8 border-t border-r border-[#FF5C00]/30" />
      {/* Bottom left */}
      <div className="absolute bottom-8 left-8 w-8 h-8 border-b border-l border-[#FF5C00]/30" />
      {/* Bottom right */}
      <div className="absolute bottom-8 right-8 w-8 h-8 border-b border-r border-[#FF5C00]/30" />

      {/* ── Content ── */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 flex flex-col items-center text-center gap-8">

        {/* Label */}
        <span className="section-label reveal">
          The Best Chapter Starts Now
        </span>

        {/* Headline */}
        <div className="reveal">
          <h2
            className="font-display uppercase leading-none"
            style={{ fontSize: 'clamp(64px, 11vw, 100px)' }}
          >
            <span className="block text-white">Your</span>
            <span
              className="block text-[#FF5C00] text-glow"
              style={{ WebkitTextStroke: '1px #FF5C00' }}
            >
              Consistency
            </span>
            <span className="block text-white">Era Starts Now</span>
          </h2>
        </div>

        {/* Sub copy */}
        <p
          className="font-body text-white/40 text-[15px] leading-relaxed max-w-md reveal"
        >
          Join a community that holds you to your highest standard.
          Show up every single week. No more starting over.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 reveal">
          <Link
            to="/join"
            className="btn-orange"
            style={{ padding: '14px 36px', fontSize: '13px' }}
          >
            Join GTC Now
          </Link>
          <Link
            to="/programs"
            className="btn-ghost"
            style={{ padding: '14px 36px', fontSize: '13px' }}
          >
            Explore Programs
          </Link>
        </div>

        {/* Social proof strip */}
        <div
          className="reveal flex items-center gap-3 mt-2"
        >
          {/* Avatar stack */}
          <div className="flex items-center">
            {['A', 'J', 'K', 'R', 'F'].map((letter, i) => (
              <div
                key={i}
                className="w-7 h-7 rounded-full border-2 border-[#0A0A0A] flex items-center
                           justify-center bg-[#FF5C00] -ml-2 first:ml-0"
                style={{
                  fontSize: '10px',
                  fontFamily: 'var(--font-display)',
                  zIndex: 5 - i,
                  boxShadow: '0 0 8px rgba(255,92,0,0.3)',
                }}
              >
                <span className="text-white">{letter}</span>
              </div>
            ))}
          </div>

          <div className="w-px h-4 bg-white/10" />

          <p className="font-body text-white/35 text-[12px] tracking-wide">
            <span className="text-white/70 font-medium">500+</span> members already growing
          </p>
        </div>

      </div>

    </section>
  );
}