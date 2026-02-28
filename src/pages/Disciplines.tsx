import { Link } from 'react-router-dom';
import { ScrollReveal } from '../components/ScrollReveal';
import { DISCIPLINES } from '../data/disciplines';

export default function Disciplines() {
  return (
    <>
      {/* HERO */}
      <section className="section section--navy" style={{ paddingTop: 'calc(64px + var(--space-3xl))', textAlign: 'center' }}>
        <div className="container--narrow">
          <ScrollReveal>
            <p className="eyebrow eyebrow--light">THE DISCIPLINES</p>
            <h1 style={{ marginBottom: '1.25rem' }}>Eight Disciplines, One Mission</h1>
            <p style={{
              fontFamily: 'var(--font-display)',
              fontStyle: 'italic',
              fontSize: '1.25rem',
              lineHeight: 1.6,
              maxWidth: '36em',
              margin: '0 auto',
              opacity: 0.9,
            }}>
              Each discipline is a different way of serving story. Every one of them asks the same question: what does this do for the audience?
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* DISCIPLINE CARDS */}
      <section className="section">
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: 'var(--space-lg)',
          }}>
            {DISCIPLINES.map((d, i) => (
              <ScrollReveal key={d.slug} delay={i * 0.06}>
                <Link to={`/disciplines/${d.slug}`} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
                  <div style={{
                    background: 'var(--white)',
                    border: '1px solid var(--gray-lt)',
                    borderLeft: `4px solid ${d.functionColor}`,
                    padding: 'var(--space-lg)',
                    transition: 'all 0.2s ease',
                    height: '100%',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-2px)';
                    (e.currentTarget as HTMLDivElement).style.boxShadow = '0 4px 16px rgba(0,0,0,0.08)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                    (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
                  }}
                  >
                    <span className="fn-badge" style={{ background: d.functionColor, marginBottom: 'var(--space-sm)' }}>
                      {d.primaryFunction}
                    </span>
                    <h3 style={{ marginTop: 'var(--space-sm)', marginBottom: 'var(--space-sm)', color: 'var(--navy)' }}>
                      {d.name}
                    </h3>
                    <p style={{ fontSize: '0.95rem', marginBottom: 0 }}>
                      {d.mission.length > 140 ? d.mission.slice(0, 140) + '...' : d.mission}
                    </p>
                    <span style={{
                      display: 'inline-block',
                      marginTop: 'var(--space-md)',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      color: d.functionColor,
                    }}>
                      Explore &rarr;
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
