import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const links = [
    { to: '/', label: 'The Argument' },
    { to: '/framework', label: 'Framework' },
    { to: '/voice', label: 'Voice & Critique' },
    { to: '/disciplines', label: 'Disciplines' },
    { to: '/what-changes', label: 'What Changes' },
    { to: '/reading', label: 'Reading Spine' },
    { to: '/practicums', label: 'Practicums' },
    { to: '/faq', label: 'FAQ' },
  ];

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      padding: '0 var(--space-lg)',
      height: 64,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      transition: 'all 0.3s ease',
      background: scrolled ? 'rgba(28, 43, 74, 0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
    }}>
      <Link to="/" style={{
        fontFamily: 'var(--font-display)',
        fontSize: '1.0625rem',
        fontWeight: 500,
        color: 'var(--white)',
        textDecoration: 'none',
        letterSpacing: '0.02em',
        whiteSpace: 'nowrap',
      }}>
        A Story-First School <span style={{ opacity: 0.5, fontWeight: 400, fontSize: '0.875rem' }}>· UNCSA</span>
      </Link>

      {/* Desktop links */}
      <div style={{
        display: 'flex',
        gap: 'var(--space-lg)',
        alignItems: 'center',
      }} className="nav-links-desktop">
        {links.map(link => (
          <Link
            key={link.to}
            to={link.to}
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.875rem',
              fontWeight: 600,
              color: location.pathname === link.to ? 'var(--gold)' : 'rgba(255,255,255,0.75)',
              textDecoration: 'none',
              letterSpacing: '0.03em',
              textTransform: 'uppercase',
              transition: 'color 0.2s ease',
            }}
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Mobile hamburger */}
      <button
        className="nav-hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Menu"
        style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: 8,
          display: 'none',
        }}
      >
        <div style={{ width: 24, height: 2, background: 'var(--white)', marginBottom: 6, transition: 'all 0.2s', transform: menuOpen ? 'rotate(45deg) translateY(8px)' : 'none' }} />
        <div style={{ width: 24, height: 2, background: 'var(--white)', marginBottom: 6, transition: 'all 0.2s', opacity: menuOpen ? 0 : 1 }} />
        <div style={{ width: 24, height: 2, background: 'var(--white)', transition: 'all 0.2s', transform: menuOpen ? 'rotate(-45deg) translateY(-8px)' : 'none' }} />
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          position: 'fixed',
          top: 64,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(28, 43, 74, 0.98)',
          backdropFilter: 'blur(12px)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 'var(--space-xl)',
          zIndex: 99,
        }}>
          {links.map(link => (
            <Link
              key={link.to}
              to={link.to}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.75rem',
                fontWeight: 500,
                color: location.pathname === link.to ? 'var(--gold)' : 'var(--white)',
                textDecoration: 'none',
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-links-desktop { display: none !important; }
          .nav-hamburger { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
