import { Link } from 'react-router-dom';

export default function CTA() {
  return (
    <section className="relative py-36 overflow-hidden bg-dark">

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

      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-orange/40 to-transparent" />

      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-orange/40 to-transparent" />

      {/* ── Corner brackets ── */}
      <div className="absolute top-8 left-8 w-8 h-8 border-t border-l border-orange/30" />
      <div className="absolute top-8 right-8 w-8 h-8 border-t border-r border-orange/30" />
      <div className="absolute bottom-8 left-8 w-8 h-8 border-b border-l border-orange/30" />
      <div className="absolute bottom-8 right-8 w-8 h-8 border-b border-r border-orange/30" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 flex flex-col items-center text-center gap-8">

        <span className="section-label reveal">
          The Best Chapter Starts Now
        </span>

        <div className="reveal">
          <h2
            className="font-display uppercase leading-none"
            style={{ fontSize: 'clamp(64px, 11vw, 100px)' }}
          >
            <span className="block text-white">Your</span>
            <span
              className="block text-orange text-glow"
              style={{ WebkitTextStroke: '1px #FF5C00' }}
            >
              Consistency
            </span>
            <span className="block text-white">Era Starts Now</span>
          </h2>
        </div>

        <p
          className="font-body text-white/40 text-[15px] leading-relaxed max-w-md reveal"
        >
          Join a community that holds you to your highest standard.
          Show up every single week. No more starting over.
        </p>

        {/* CTA */}
        <div className="flex flex-wrap items-center justify-center gap-4 reveal">
          <Link
            to="/"
            className="btn-orange"
            style={{ padding: '14px 36px', fontSize: '13px' }}
          >
            Join GTC Now
          </Link>
         
        </div>

        {/* Social proof strip */}
        <div
          className="reveal flex items-center gap-3 mt-2"
        >
          <div className="flex items-center">
            {['A', 'J', 'K', 'R', 'F'].map((letter, i) => (
              <div
                key={i}
                className="w-7 h-7 rounded-full border-2 border-dark flex items-center
                           justify-center bg-orange -ml-2 first:ml-0"
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