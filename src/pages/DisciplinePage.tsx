import { useParams, Link } from 'react-router-dom';
import { ScrollReveal } from '../components/ScrollReveal';
import { DISCIPLINES } from '../data/disciplines';

export default function DisciplinePage() {
  const { slug } = useParams<{ slug: string }>();
  const discipline = DISCIPLINES.find(d => d.slug === slug);

  if (!discipline) {
    return (
      <section className="section section--navy" style={{ paddingTop: 'calc(64px + var(--space-3xl))', minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
        <div className="container--narrow">
          <h1>Discipline Not Found</h1>
          <p style={{ marginTop: 'var(--space-md)' }}>
            The discipline you're looking for doesn't exist in the framework.
          </p>
          <Link to="/disciplines" className="btn btn--ghost" style={{ marginTop: 'var(--space-lg)' }}>
            &larr; Back to Disciplines
          </Link>
        </div>
      </section>
    );
  }

  const d = discipline;

  return (
    <>
      {/* HERO */}
      <section className="section section--navy" style={{ paddingTop: 'calc(64px + var(--space-3xl))' }}>
        <div className="container--narrow">
          <ScrollReveal>
            <Link to="/disciplines" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.875rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: 'var(--space-lg)' }}>
              &larr; All Disciplines
            </Link>
            <span className="fn-badge" style={{ background: d.functionColor, display: 'inline-block', marginBottom: 'var(--space-md)' }}>
              {d.primaryFunction}
            </span>
            <h1 style={{ marginBottom: 'var(--space-lg)' }}>{d.name}</h1>
            <p style={{ fontSize: '1.125rem', lineHeight: 1.7, maxWidth: '38em' }}>
              {d.mission}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* WHAT THIS DISCIPLINE DOES */}
      <section className="section section--cream">
        <div className="container--narrow">
          <ScrollReveal>
            <p className="eyebrow">WHAT THIS DISCIPLINE DOES FOR STORY</p>
            <h2>The Work</h2>
            <p style={{ fontSize: '1.0625rem', lineHeight: 1.8 }}>{d.whatItDoes}</p>
          </ScrollReveal>
        </div>
      </section>

      {/* INTERSECTIONS */}
      <section className="section">
        <div className="container--narrow">
          <ScrollReveal>
            <p className="eyebrow">WHERE YOU LIVE IN THE FRAMEWORK</p>
            <h2>Intersections</h2>
            <p style={{ fontSize: '1.0625rem', lineHeight: 1.8 }}>{d.intersections}</p>
          </ScrollReveal>
        </div>
      </section>

      {/* REBUILD ASKS */}
      <section className="section section--off-white">
        <div className="container--narrow">
          <ScrollReveal>
            <p className="eyebrow">WHAT THE REBUILD ASKS OF YOU</p>
            <h2>The Commitment</h2>
            <p style={{ fontSize: '1.0625rem', lineHeight: 1.8 }}>{d.rebuildAsks}</p>
          </ScrollReveal>
        </div>
      </section>

      {/* CENTRAL QUESTION */}
      <section className="section section--navy" style={{ textAlign: 'center', paddingTop: 'var(--space-4xl)', paddingBottom: 'var(--space-4xl)' }}>
        <div className="container--narrow">
          <ScrollReveal>
            <p className="eyebrow eyebrow--light">THE QUESTION AT THE CENTER</p>
            <blockquote style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.375rem, 3vw, 1.75rem)',
              lineHeight: 1.5,
              fontStyle: 'italic',
              maxWidth: '36rem',
              margin: '0 auto 2rem',
              border: 'none',
              padding: 0,
            }}>
              {d.centralQuestion}
            </blockquote>
          </ScrollReveal>
        </div>
      </section>

      {/* BACK LINK */}
      <section className="section section--cream" style={{ padding: 'var(--space-xl) 0' }}>
        <div className="container--narrow">
          <Link to="/disciplines" style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--navy)', textDecoration: 'none' }}>
            &larr; Back to All Disciplines
          </Link>
        </div>
      </section>
    </>
  );
}
