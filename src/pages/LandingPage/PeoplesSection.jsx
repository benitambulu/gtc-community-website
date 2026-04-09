import Founder from "../../assets/images/founder.png"
import CommunityManager from "../../assets/images/cm.png"
import Reviewer from "../../assets/images/reviewer.png"
import Specialist from "../../assets/images/specialist.png"

const members = [
  // {
  //   name: 'Benita Joseph',
  //   role: 'Founder',
  //   desc: '',
  //   img: Founder,
  // },
  {
    name: 'Benita Joseph ',
    role: 'Founder',
    desc: 'Started GTC after realizing that consistency not talent is the real differentiator. Building the community she wished had existed. Now a big community',
    img: Founder,
  },
  {
    name: 'Jonathan Chosen',
    role: 'Community Lead',
    desc: 'Keeps the community culture strong, welcoming, and focused. makes sure every member feels seen and supported from day one.',
    img: CommunityManager,
  },
  {
    name: 'Kolawole Ibrahim',
    role: 'Programs Director',
    desc: 'Reviews member progress, gives structured feedback, and ensures every growth track produces real, measurable outcomes weekly',
    img: Reviewer,
  },
  {
    name: 'Lanre Salaudeen',
    role: 'Growth Strategist',
    desc: "Passionate about helping members break through plateaus and find their consistency rhythm no matter where they're starting from.",
    img: Specialist,
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
  className="reveal group relative overflow-hidden p-6 flex flex-col justify-between cursor-default border border-white/5 rounded-xl transition-all duration-300  hover:border-orange/30"
  style={{ transitionDelay: `${i * 0.12}s` }}
>
  {/* 🔥 Background gradient (like your design) */}
  <div className="absolute inset-0 opacity-30 group-hover:opacity-50 transition duration-500 bg-gradient-to-br from-orange/20 via-transparent to-transparent" />

  {/* ── Top (Avatar) ── */}
  <div className="flex items-center justify-center h-40 relative z-10">
    <img
      src={m.img}
      alt={m.name}
      className="w-30 h-30 object-contain transition-transform duration-300 group-hover:scale-110"
    />
  </div>

  {/* ── Bottom Content ── */}
  <div className="relative z-10">
    {/* Name */}
    <div className="font-heading font-bold text-white text-[14px] uppercase tracking-wide">
      {m.name}
    </div>

    {/* Role */}
    <div className="text-orange text-[12px] mt-1 uppercase tracking-wide">
      {m.role}
    </div>

    {/* 🔥 Hidden Description */}
    <p className="text-white/40 text-[12px] mt-3 leading-relaxed opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
      {m.desc}
    </p>
  </div>

  {/* 🔥 Bottom hover bar */}
  {/* <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-orange transition-all duration-500 group-hover:w-full" /> */}
</div>
          ))}
        </div>

      </div>
    </section>
  );
}