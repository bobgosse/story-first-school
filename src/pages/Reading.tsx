import { useState } from 'react';
import { ScrollReveal } from '../components/ScrollReveal';
import { READING_SPINE } from '../data/readings';
import { STORY_FUNCTIONS } from '../data/disciplines';

export default function Reading() {
  const [activeFilters, setActiveFilters] = useState<Set<string>>(new Set());
  const [collapsedYears, setCollapsedYears] = useState<Set<number>>(new Set());

  const toggleFilter = (id: string) => {
    setActiveFilters(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const toggleYear = (year: number) => {
    setCollapsedYears(prev => {
      const next = new Set(prev);
      if (next.has(year)) next.delete(year);
      else next.add(year);
      return next;
    });
  };

  const matchesFilter = (functions: string[]) => {
    if (activeFilters.size === 0) return true;
    return functions.some(f => activeFilters.has(f));
  };

  return (
    <>
      {/* HERO */}
      <section className="section section--navy" style={{ paddingTop: 'calc(64px + var(--space-3xl))', textAlign: 'center' }}>
        <div className="container--narrow">
          <ScrollReveal>
            <p className="eyebrow eyebrow--light">THE READING SPINE</p>
            <h1 style={{ marginBottom: '1.25rem' }}>Four Years of Story Literacy</h1>
            <p style={{
              fontFamily: 'var(--font-display)',
              fontStyle: 'italic',
              fontSize: '1.25rem',
              lineHeight: 1.6,
              maxWidth: '36em',
              margin: '0 auto',
              opacity: 0.9,
            }}>
              Here are examples of the books, essays, and films that could anchor a story-first curriculum &mdash; a starting point for faculty and students to build from, not a fixed canon.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* FILTER CHIPS */}
      <section className="section section--cream" style={{ padding: 'var(--space-xl) 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--gray)', marginBottom: 'var(--space-md)' }}>
            Filter by Story Function
          </p>
          <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            {STORY_FUNCTIONS.map(fn => {
              const isActive = activeFilters.has(fn.id);
              return (
                <button
                  key={fn.id}
                  onClick={() => toggleFilter(fn.id)}
                  style={{
                    padding: '0.4rem 1rem',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    fontFamily: 'var(--font-body)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    border: `1px solid ${isActive ? fn.color : 'var(--gray-lt)'}`,
                    borderRadius: '2px',
                    background: isActive ? fn.color : 'transparent',
                    color: isActive ? 'var(--white)' : 'var(--gray)',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                >
                  {fn.name}
                </button>
              );
            })}
            {activeFilters.size > 0 && (
              <button
                onClick={() => setActiveFilters(new Set())}
                style={{
                  padding: '0.4rem 1rem',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  fontFamily: 'var(--font-body)',
                  border: 'none',
                  background: 'none',
                  color: 'var(--gray)',
                  cursor: 'pointer',
                  textDecoration: 'underline',
                }}
              >
                Clear
              </button>
            )}
          </div>
        </div>
      </section>

      {/* YEAR SECTIONS */}
      <section className="section">
        <div className="container" style={{ maxWidth: 'var(--max-width-narrow)', margin: '0 auto' }}>
          {READING_SPINE.map(yearData => {
            const isCollapsed = collapsedYears.has(yearData.year);
            return (
              <ScrollReveal key={yearData.year}>
                <div style={{ marginBottom: 'var(--space-2xl)' }}>
                  <div
                    onClick={() => toggleYear(yearData.year)}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'baseline',
                      cursor: 'pointer',
                      borderBottom: '2px solid var(--navy)',
                      paddingBottom: 'var(--space-sm)',
                      marginBottom: 'var(--space-lg)',
                    }}
                  >
                    <div>
                      <span style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '1.75rem',
                        fontWeight: 600,
                        color: 'var(--navy)',
                      }}>
                        Year {yearData.year}
                      </span>
                      <span style={{
                        marginLeft: 'var(--space-md)',
                        fontFamily: 'var(--font-display)',
                        fontStyle: 'italic',
                        fontSize: '1.125rem',
                        color: 'var(--gray)',
                      }}>
                        {yearData.theme}
                      </span>
                    </div>
                    <span style={{
                      fontSize: '1.25rem',
                      color: 'var(--gray)',
                      transition: 'transform 0.2s',
                      transform: isCollapsed ? 'rotate(0)' : 'rotate(180deg)',
                    }}>
                      &#9660;
                    </span>
                  </div>

                  {!isCollapsed && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}>
                      {yearData.readings.map(reading => {
                        const matches = matchesFilter(reading.functions);
                        return (
                          <div
                            key={reading.title}
                            style={{
                              padding: 'var(--space-lg)',
                              background: 'var(--off-white)',
                              border: '1px solid var(--gray-lt)',
                              opacity: matches ? 1 : 0.3,
                              transition: 'opacity 0.3s ease',
                            }}
                          >
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 'var(--space-md)', flexWrap: 'wrap' }}>
                              <div>
                                <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, color: 'var(--navy)', marginBottom: '0.25rem' }}>
                                  {reading.title}
                                </h4>
                                <p style={{ fontSize: '0.9rem', color: 'var(--gray)', marginBottom: 'var(--space-sm)', fontStyle: 'italic' }}>
                                  {reading.author}
                                </p>
                              </div>
                              <div style={{ display: 'flex', gap: '0.35rem', flexWrap: 'wrap', flexShrink: 0 }}>
                                {reading.functions.map(fnId => {
                                  const fn = STORY_FUNCTIONS.find(f => f.id === fnId);
                                  return fn ? (
                                    <span
                                      key={fnId}
                                      className="fn-badge"
                                      style={{
                                        background: fn.color,
                                        fontSize: '0.65rem',
                                        padding: '0.15rem 0.5rem',
                                      }}
                                    >
                                      {fn.id}
                                    </span>
                                  ) : null;
                                })}
                              </div>
                            </div>
                            <p style={{ fontSize: '0.95rem', marginBottom: 0, marginTop: 'var(--space-sm)' }}>
                              {reading.rationale}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </section>
    </>
  );
}
