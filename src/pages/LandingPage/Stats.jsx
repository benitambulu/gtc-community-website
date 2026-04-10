import { useEffect, useRef, useState } from 'react';

const stats = [
  { value: 500,  suffix: '+', label: 'Active Members'    },
  { value: 98,   suffix: '%', label: 'Consistency Rate', accent: true },
  { value: 5,    suffix: '+', label: 'Growth Tracks'     },
  { value: 1,    suffix: '+', label: 'Year in Impact'    },
];

function useCountUp(target, duration = 1800, start = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime = null;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [start, target, duration]);

  return count;
}

function StatItem({ value, suffix, label, accent, delay }) {
  const ref = useRef(null);
  const [go, setGo] = useState(false);
  const count = useCountUp(value, 1800, go);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setGo(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
   <div
  ref={ref}
  className="reveal group relative text-center px-6 py-10 border-r border-white/5 last:border-r-0 overflow-hidden "
      style={{ transitionDelay: `${delay}s` }}
    >
      {/* ✅ Individual bottom bar */}
      <div
  className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px]
    bg-orange w-0
    transition-all duration-500
    group-hover:w-full`}
/>

      {/* Number */}
      <div
        className="font-display leading-none mb-2"
        style={{
          fontSize: 'clamp(48px, 6vw, 72px)',
        }}
      >
        {count}
        <span className='text-orange'>{suffix}</span>
      </div>

      {/* Label */}
      <div className="font-body text-white/35 text-[11px] tracking-[0.2em] uppercase">
        {label}
      </div>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="border-b border-white/5 bg-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid relative grid-cols-2 md:grid-cols-4 ">
  
  {/* Bottom border animated bar */}

  {stats.map((s, i) => (
    <StatItem
      key={i}
      {...s}
      delay={i * 0.1}
    />
  ))}

</div>
      </div>
    </section>
  );
}