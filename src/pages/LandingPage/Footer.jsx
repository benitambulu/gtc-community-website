import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-dark border-t border-white/5">

      {/* ── Main grid ── */}
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-12 grid grid-cols-1 md:grid-cols-2 lg:flex lg:justify-between gap-30">

        {/* ── Col 1: Brand ── */}
        <div className="flex flex-col gap-5">

          <Link to="/" className="flex items-center gap-2.5 group w-fit">
            <div
              className="w-9 h-9 bg-orange flex items-center justify-center"
              style={{ boxShadow: '0 0 16px rgba(255,92,0,0.35)' }}
            >
              <span className="font-display text-white text-[13px] tracking-widest">GTC</span>
            </div>
            <span className="font-heading font-semibold text-[13px] tracking-[0.15em] uppercase text-white/55 group-hover:text-white transition-colors">
              Community
            </span>
          </Link>

          <p className="font-body text-white/35 text-[13px] leading-relaxed max-w-55">
            A structured accountability community for people serious about growing.
          </p>

          {/* ── Social row ── */}
          <div className="flex items-center gap-3">

            <a href="https://www.linkedin.com/company/gtc-community/" target="_blank" rel="noreferrer"
              className="w-8 h-8 border border-white/10 flex items-center justify-center text-white/40 hover:border-orange/50 hover:text-orange transition-all duration-200">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="2" y="2" width="20" height="20" rx="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none"/>
              </svg>
            </a>

            <a href="https://x.com/gtccommunity_?s=20" target="_blank" rel="noreferrer"
              className="w-8 h-8 border border-white/10 flex items-center justify-center text-white/40 hover:border-orange/50 hover:text-orange transition-all duration-200">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>

            

          </div>
        </div>

        {/* ── Col 2: Navigate ── */}
        {/* <div className="flex flex-col gap-4">
          <h4 className="font-heading font-bold text-white uppercase tracking-[0.15em] text-[12px]">
            Navigate
          </h4>
          <div className="flex flex-col gap-3">
            <Link to="/" className="font-body text-white/40 text-[13px] hover:text-orange transition-colors duration-200">Home</Link>
            <Link to="/about" className="font-body text-white/40 text-[13px] hover:text-orange transition-colors duration-200">About Us</Link>
            <Link to="/programs" className="font-body text-white/40 text-[13px] hover:text-orange transition-colors duration-200">Programs</Link>
            <Link to="/impact" className="font-body text-white/40 text-[13px] hover:text-orange transition-colors duration-200">Impact</Link>
            <Link to="/media" className="font-body text-white/40 text-[13px] hover:text-orange transition-colors duration-200">Media</Link>
          </div>
        </div> */}

        {/* ── Col 3: Community ── */}
        {/* <div className="flex flex-col gap-4">
          <h4 className="font-heading font-bold text-white uppercase tracking-[0.15em] text-[12px]">
            Community
          </h4>
          <div className="flex flex-col gap-3">
            <Link to="/join" className="font-body text-white/40 text-[13px] hover:text-orange transition-colors duration-200">Join Us</Link>
            <Link to="/growth-tracks" className="font-body text-white/40 text-[13px] hover:text-orange transition-colors duration-200">Growth Tracks</Link>
            <Link to="/check-ins" className="font-body text-white/40 text-[13px] hover:text-orange transition-colors duration-200">Weekly Check-ins</Link>
            <Link to="/stories" className="font-body text-white/40 text-[13px] hover:text-orange transition-colors duration-200">Member Stories</Link>
          </div>
        </div> */}

        {/* ── Col 4: Connect ── */}
        <div className="flex flex-col gap-4">
          <h4 className="font-heading font-bold text-white uppercase tracking-[0.15em] text-[12px]">
            Connect
          </h4>
          <div className="flex flex-col gap-3">
            <a href="https://www.linkedin.com/company/gtc-community/" target="_blank"  rel="noreferrer"
              className="font-body text-white/40 text-[13px] hover:text-orange transition-colors duration-200">
              LinkedIn
            </a>
            <a href="https://x.com/gtccommunity_?s=20" target="_blank" rel="noreferrer"
              className="font-body text-white/40 text-[13px] hover:text-orange transition-colors duration-200">
              Twitter / X
            </a>
          </div>

          <div className="mt-2 flex flex-col gap-1">
            <p className="font-body text-white/20 text-[11px] tracking-widest uppercase">
              Email
            </p>
            <a href="mailto:hello@gtccommunity.com"
              className="font-body text-white/40 text-[13px] hover:text-orange transition-colors duration-200">
              gtccommunity@gmail.com
            </a>
          </div>
        </div>

      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">

          <p className="font-body text-white/20 text-[12px] tracking-wide">
            © {new Date().getFullYear()} GTC Community. All rights reserved.
          </p>

          

        </div>
      </div>

    </footer>
  );
}