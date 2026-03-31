const items = [
  'Structured Accountability',
  '#1 Growth Tools',
  'Result Driven',
  'Peer Support System',
  'Your Consistency Era Starts Now',
  'Grow Through Consistency',
  'Structured Accountability',
  '#1 Growth Tools',
  'Result Driven',
  'Peer Support System',
  'Your Consistency Era Starts Now',
  'Grow Through Consistency',
];

export default function Ticker() {
  return (
    <div className="relative py-3.5 overflow-hidden bg-[#0D0D0D] border-y border-white/5">

      {/* ── Left fade ── */}
      <div
        className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to right, #0D0D0D, transparent)' }}
      />

      {/* ── Right fade ── */}
      <div
        className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to left, #0D0D0D, transparent)' }}
      />

      {/* ── Scrolling strip ── */}
      <div className="ticker-inner">
        {items.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-3 mx-8"
          >
            {/* Diamond separator */}
            <span
              className="text-orange"
              style={{ fontSize: '8px' }}
            >
              ◆
            </span>

            {/* Label */}
            <span
              className="font-heading font-semibold uppercase tracking-[0.18em] text-white/45"
              style={{ fontSize: '11px' }}
            >
              {item}
            </span>
          </span>
        ))}
      </div>

    </div>
  );
}