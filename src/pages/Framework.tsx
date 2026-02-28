import { useState } from 'react';
import { ScrollReveal } from '../components/ScrollReveal';
import { STORY_FUNCTIONS, DISCIPLINES } from '../data/disciplines';

export default function Framework() {
  const [expandedFn, setExpandedFn] = useState<string | null>(null);

  return (
    <>
      {/* HERO */}
      <section className="section section--navy" style={{ paddingTop: 'calc(64px + var(--space-3xl))' }}>
        <div className="container--narrow" style={{ textAlign: 'center' }}>
          <ScrollReveal>
            <p className="eyebrow eyebrow--light">THE FRAMEWORK</p>
            <h1 style={{ marginBottom: '1.25rem' }}>Six Story Functions</h1>
            <p style={{
              fontFamily: 'var(--font-display)',
              fontStyle: 'italic',
              fontSize: '1.25rem',
              lineHeight: 1.6,
              maxWidth: '36em',
              margin: '0 auto',
              opacity: 0.9,
            }}>
              Every discipline in the school serves story through one or more of these six functions. No function belongs to a single department. All are shared.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* SIX FUNCTIONS GRID */}
      <section className="section section--cream">
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: 'var(--space-lg)',
          }}>
            {STORY_FUNCTIONS.map((fn, i) => {
              const isExpanded = expandedFn === fn.id;
              const disciplines = DISCIPLINES.filter(d =>
                d.primaryFunction === fn.name || d.primaryFunction.includes(fn.name)
              );
              return (
                <ScrollReveal key={fn.id} delay={i * 0.08}>
                  <div
                    onClick={() => setExpandedFn(isExpanded ? null : fn.id)}
                    style={{
                      background: 'var(--white)',
                      border: '1px solid var(--gray-lt)',
                      borderLeft: `4px solid ${fn.color}`,
                      padding: 'var(--space-lg)',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      ...(isExpanded ? { boxShadow: '0 4px 20px rgba(0,0,0,0.08)' } : {}),
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 'var(--space-md)' }}>
                      <div>
                        <span className="fn-badge" style={{ background: fn.color, marginBottom: 'var(--space-sm)' }}>
                          {fn.id}
                        </span>
                        <h3 style={{ marginTop: 'var(--space-sm)', marginBottom: 'var(--space-sm)', fontSize: '1.375rem' }}>
                          {fn.name}
                        </h3>
                      </div>
                      <span style={{
                        fontSize: '1.5rem',
                        color: fn.color,
                        transition: 'transform 0.2s',
                        transform: isExpanded ? 'rotate(45deg)' : 'rotate(0)',
                        lineHeight: 1,
                        flexShrink: 0,
                        marginTop: '0.25rem',
                      }}>+</span>
                    </div>
                    <p style={{ marginBottom: isExpanded ? '1rem' : 0, fontSize: '0.95rem' }}>
                      {fn.description}
                    </p>
                    {isExpanded && disciplines.length > 0 && (
                      <div style={{ borderTop: '1px solid var(--gray-lt)', paddingTop: 'var(--space-md)', marginTop: 'var(--space-sm)' }}>
                        <p style={{ fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--gray)', marginBottom: '0.5rem' }}>
                          Primary disciplines
                        </p>
                        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                          {disciplines.map(d => (
                            <span key={d.slug} style={{
                              fontSize: '0.85rem',
                              padding: '0.2rem 0.6rem',
                              background: `${fn.color}15`,
                              color: fn.color,
                              borderRadius: '2px',
                              fontWeight: 500,
                            }}>
                              {d.name}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* THE LOGIC */}
      <section className="section section--off-white">
        <div className="container--narrow">
          <ScrollReveal>
            <p className="eyebrow">THE LOGIC</p>
            <h2>Why Functions, Not Departments?</h2>
            <p>
              Traditional film schools organize around departments: Directing, Cinematography, Editing, Sound, Producing, Screenwriting. Each department teaches its craft in relative isolation, and collaboration happens on set &mdash; often too late to influence the story.
            </p>
            <p>
              The story-function framework reorganizes around what the work actually does for the audience. This means a cinematographer and a screenwriter can discover that they share the same function &mdash; Ideation &amp; Composition &mdash; and work on story design together, rather than meeting for the first time during pre-production.
            </p>
            <p>
              Functions don't replace departments. They give departments a shared language and a shared obligation: every course, assignment, and critique can be evaluated against the question "what does this do for story?"
            </p>
            <p>
              The framework also extends beyond traditional narrative film. Documentary, animation, podcasts, interactive media &mdash; every narrative form the school cultivates is governed by the same six functions. A podcast is an act of sonic storytelling with a structure, an audience contract, and an ethical obligation. It belongs in this framework as naturally as a feature film does.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* DISCIPLINE MAPPING TABLE */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <p className="eyebrow" style={{ textAlign: 'center' }}>DISCIPLINE MAPPING</p>
            <h2 style={{ textAlign: 'center', marginBottom: 'var(--space-xl)' }}>Where Each Discipline Lives</h2>
            <div style={{ overflowX: 'auto' }}>
              <table style={{
                width: '100%',
                borderCollapse: 'collapse',
                fontSize: '0.9rem',
              }}>
                <thead>
                  <tr>
                    <th style={{ textAlign: 'left', padding: '0.75rem 1rem', borderBottom: '2px solid var(--navy)', fontFamily: 'var(--font-body)', fontWeight: 600, color: 'var(--navy)' }}>
                      Discipline
                    </th>
                    {STORY_FUNCTIONS.map(fn => (
                      <th key={fn.id} style={{
                        textAlign: 'center',
                        padding: '0.75rem 0.5rem',
                        borderBottom: '2px solid var(--navy)',
                        fontFamily: 'var(--font-body)',
                        fontWeight: 600,
                        color: fn.color,
                        fontSize: '0.8rem',
                      }}>
                        {fn.id.charAt(0).toUpperCase() + fn.id.slice(1)}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {DISCIPLINES.map((d, i) => (
                    <tr key={d.slug} style={{ background: i % 2 === 0 ? 'var(--off-white)' : 'var(--white)' }}>
                      <td style={{ padding: '0.6rem 1rem', fontWeight: 500, color: 'var(--navy)', borderBottom: '1px solid var(--gray-lt)' }}>
                        {d.name}
                      </td>
                      {STORY_FUNCTIONS.map(fn => {
                        const isPrimary = d.primaryFunction === fn.name ||
                          d.primaryFunction.includes(fn.name);
                        const isSecondary = !isPrimary && (
                          d.intersections.toLowerCase().includes(fn.id) ||
                          d.intersections.toLowerCase().includes(fn.name.toLowerCase())
                        );
                        return (
                          <td key={fn.id} style={{
                            textAlign: 'center',
                            padding: '0.6rem 0.5rem',
                            borderBottom: '1px solid var(--gray-lt)',
                          }}>
                            {isPrimary && (
                              <span style={{
                                display: 'inline-block',
                                width: 20,
                                height: 20,
                                borderRadius: '50%',
                                background: fn.color,
                              }} />
                            )}
                            {!isPrimary && isSecondary && (
                              <span style={{
                                display: 'inline-block',
                                width: 12,
                                height: 12,
                                borderRadius: '50%',
                                background: `${fn.color}40`,
                                border: `2px solid ${fn.color}`,
                              }} />
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div style={{ display: 'flex', gap: 'var(--space-lg)', justifyContent: 'center', marginTop: 'var(--space-lg)', fontSize: '0.85rem', color: 'var(--gray)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ display: 'inline-block', width: 14, height: 14, borderRadius: '50%', background: 'var(--navy)' }} />
                Primary function
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ display: 'inline-block', width: 10, height: 10, borderRadius: '50%', background: 'transparent', border: '2px solid var(--navy)' }} />
                Secondary function
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SHARED OBLIGATION */}
      <section className="section section--navy" style={{ textAlign: 'center' }}>
        <div className="container--narrow">
          <ScrollReveal>
            <blockquote style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
              lineHeight: 1.5,
              fontStyle: 'italic',
              maxWidth: '38rem',
              margin: '0 auto 2rem',
              border: 'none',
              padding: 0,
            }}>
              The framework doesn't tell anyone how to teach. It asks everyone to say what their teaching does for story &mdash; and to mean it.
            </blockquote>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
