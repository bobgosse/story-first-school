import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer style={{
      background: 'var(--dark)',
      color: 'rgba(255,255,255,0.5)',
      padding: 'var(--space-2xl) 0',
      fontSize: '0.875rem',
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        gap: 'var(--space-xl)',
      }}>
        <div>
          <div style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.125rem',
            fontWeight: 500,
            color: 'var(--white)',
            marginBottom: 'var(--space-sm)',
          }}>
            A Story-First School
          </div>
          <div style={{ opacity: 0.6 }}>
            UNCSA School of Filmmaking · Curriculum Reimagining Proposal
          </div>
        </div>
        <div style={{ display: 'flex', gap: 'var(--space-xl)', flexWrap: 'wrap' }}>
          <Link to="/" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }}>The Argument</Link>
          <Link to="/framework" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }}>Framework</Link>
          <Link to="/disciplines" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }}>Disciplines</Link>
          <Link to="/reading" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }}>Reading Spine</Link>
          <Link to="/practicums" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }}>Practicums</Link>
          <Link to="/faq" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }}>FAQ</Link>
        </div>
      </div>
    </footer>
  );
}
