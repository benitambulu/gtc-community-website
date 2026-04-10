import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

const navLinks = [
  { to: '/about',    label: 'About Us'  },
  { to: '/programs', label: 'Programs'  },
  { to: '/impact',   label: 'Impact'    },
  { to: '/media',    label: 'Media'     },
];

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const [visible,   setVisible]   = useState(false);

  useEffect(() => {
    // Slide navbar in on mount
    setTimeout(() => setVisible(true), 100);

    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        opacity:    visible ? 1 : 0,
        transform:  visible ? 'translateY(0)' : 'translateY(-20px)',
        transition: 'opacity 0.6s ease, transform 0.6s ease, background 0.4s ease, border-color 0.4s ease',
        background: scrolled ? 'rgba(10,10,10,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : '1px solid transparent',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">

        {/* ── Logo ── */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <div
            className="w-8 h-8 bg-orange flex items-center justify-center"
            style={{ boxShadow: '0 0 16px rgba(255,92,0,0.4)' }}
          >
            <span className="font-display text-white text-[13px] tracking-widest">
              GTC
            </span>
          </div>
          <span className="font-heading font-semibold text-[13px] tracking-[0.15em] uppercase text-white/60 group-hover:text-white transition-colors duration-200">
            Community
          </span>
        </Link>

        {/* ── Desktop links ── */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `font-body text-[13px] tracking-wide transition-colors duration-200 relative group ${
                  isActive ? 'text-orange' : 'text-white/55 hover:text-white'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {/* {link.label} */}
                  {/* underline accent */}
                  {/* <span
                    className="absolute -bottom-1 left-0 h-px bg-orange transition-all duration-300"
                    style={{ width: isActive ? '100%' : '0%' }}
                  /> */}
                  {!isActive && (
                    <span className="absolute -bottom-1 left-0 h-px bg-orange/50 w-0 group-hover:w-full transition-all duration-300" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* ── Desktop CTA ── */}
        <div className="hidden md:block">
          <Link to="/join" className="btn-orange text-[12px] py-2.5 px-5">
            Join Us
          </Link>
        </div>

        {/* ── Mobile hamburger ── */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col justify-center gap-1.25 w-8 h-8 p-1"
          aria-label="Toggle menu"
        >
          <span
            className="block h-px bg-white transition-all duration-300 origin-center"
            style={{
              width: '22px',
              transform: menuOpen ? 'rotate(45deg) translate(4px, 4px)' : 'none',
            }}
          />
          <span
            className="block h-px bg-white transition-all duration-300"
            style={{
              width: '22px',
              opacity:   menuOpen ? 0 : 1,
              transform: menuOpen ? 'scaleX(0)' : 'scaleX(1)',
            }}
          />
          <span
            className="block h-px bg-white transition-all duration-300 origin-center"
            style={{
              width: '22px',
              transform: menuOpen ? 'rotate(-45deg) translate(4px, -4px)' : 'none',
            }}
          />
        </button>
      </div>

      {/* ── Mobile menu ── */}
      <div
        className="md:hidden overflow-hidden transition-all duration-400"
        style={{
          maxHeight:  menuOpen ? '320px' : '0px',
          opacity:    menuOpen ? 1 : 0,
          transition: 'max-height 0.4s ease, opacity 0.3s ease',
          background: 'rgba(10,10,10,0.97)',
          borderTop:  menuOpen ? '1px solid rgba(255,255,255,0.05)' : 'none',
        }}
      >
        <div className="px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link, i) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `font-body text-[14px] tracking-wide transition-colors duration-200 ${
                  isActive ? 'text-orange' : 'text-white/60 hover:text-white'
                }`
              }
              style={{
                transitionDelay: menuOpen ? `${i * 0.06}s` : '0s',
              }}
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/join"
            onClick={() => setMenuOpen(false)}
            className="btn-orange text-center mt-2"
          >
            Join Us
          </Link>
        </div>
      </div>
    </nav>
  );
}