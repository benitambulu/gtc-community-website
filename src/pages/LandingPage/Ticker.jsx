const items = [
  'Structured Accountability',
  'Weekly Check-Ins',
  'Result Driven',
  'Peer Support System',
  'Your Consistency Era Starts Now',
  'Grow Through Consistency',
  'Structured Accountability',
  'Weekly Check-Ins',
  'Result Driven',
  'Peer Support System',
  'Your Consistency Era Starts Now',
  'Grow Through Consistency',
];

export default function Ticker() {
  return (
    <div className="relative mt-5 py-3.5 overflow-hidden bg-orange ">

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
            {/* Label */}
            <span
              className="font-heading font-semibold uppercase tracking-[0.18em] text-black text-xs"
            >
              {item}
            </span>
            {/* Diamond separator */}
            <span
              className="text-black/50 text-[6px]"
            >
              ◆
            </span>

          </span>
        ))}
      </div>

    </div>
  );
}