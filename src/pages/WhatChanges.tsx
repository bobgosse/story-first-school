import { Link } from 'react-router-dom';
import { ScrollReveal } from '../components/ScrollReveal';

const REQUIREMENTS = [
  'Every required course must declare its story function',
  'Every required course must rewrite its learning outcomes as story outcomes',
  'Every required course must demonstrate in its assessments that it teaches students to serve the story rather than the discipline',
  'Every program must produce a Stop / Start / Continue list: what is retired, what is introduced, what is preserved and why',
];

const DELIVERABLES = [
  { label: '1-page discipline mission statement', description: 'how your program\u2019s craft serves the audience\u2019s experience of story' },
  { label: 'Revised curriculum map', description: 'each required course tagged to its primary story function' },
  { label: 'Updated master syllabi', description: 'outcomes rewritten as story outcomes, using the School template' },
  { label: 'Stop / Start / Continue list', description: 'what\u2019s retired, introduced, and preserved, and why' },
  { label: 'Named voice obligation', description: 'how each required course builds authentic story-making, not just craft proficiency' },
  { label: 'Named critique practice', description: 'how students learn to diagnose and articulate what a work is doing' },
];

export default function WhatChanges() {
  return (
    <>
      {/* HERO */}
      <section className="section section--navy" style={{ paddingTop: 'calc(64px + var(--space-3xl))', textAlign: 'center' }}>
        <div className="container--narrow">
          <ScrollReveal>
            <p className="eyebrow eyebrow--light">THE HONEST ANSWER</p>
            <h1 style={{ marginBottom: '1.25rem' }}>What Actually Changes</h1>
            <p style={{
              fontFamily: 'var(--font-display)',
              fontStyle: 'italic',
              fontSize: '1.25rem',
              lineHeight: 1.6,
              maxWidth: '36em',
              margin: '0 auto',
              opacity: 0.9,
            }}>
              The risk this proposal must answer directly: does it produce new language on the same silos, or does it change what students know how to do when they graduate?
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION 1 — THE ROOT CAUSE */}
      <section className="section section--cream">
        <div className="container--narrow">
          <ScrollReveal>
            <p className="eyebrow">THE ROOT CAUSE</p>
            <h2>A Curriculum Problem, Not a Personality Problem</h2>
            <p>
              The school has lost the thread of its storytelling purpose. What has filled that vacuum is disciplinary pride &mdash; each program valuing its own craft above the shared work. That is not a criticism of individuals. It is what happens when there is no common language for what the collaboration is for.
            </p>
            <p>
              Students feel it most acutely on practicum films. They arrive having been trained rigorously within their disciplines &mdash; cinematography students who can light a set, directing students who can run a shot list, producing students who can build a budget. But they have never been asked to agree on what a story is, what it is supposed to do to an audience, or what they are all there to protect.
            </p>
            <p>
              The dysfunction and frustration on those sets is not a personality problem. It is a curriculum problem. There is no shared story intention because the curriculum never built one.
            </p>
            <div className="pull-quote">
              There is no shared story intention because the curriculum never built one.
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION 2 — THE MECHANISM */}
      <section className="section section--off-white">
        <div className="container--narrow">
          <ScrollReveal>
            <p className="eyebrow">THE MECHANISM</p>
            <h2>What Prevents Relabeling</h2>
            <p>
              Story-first changes the practicum problem &mdash; but only if the implementation is serious. The mechanism that prevents new labels on the same silos is the syllabus rebuild.
            </p>
          </ScrollReveal>

          {/* Four requirements */}
          <div style={{ marginTop: 'var(--space-xl)' }}>
            {REQUIREMENTS.map((req, i) => (
              <ScrollReveal key={i} delay={i * 0.06}>
                <div style={{
                  display: 'flex',
                  gap: 'var(--space-md)',
                  alignItems: 'flex-start',
                  marginBottom: 'var(--space-md)',
                  background: 'var(--white)',
                  border: '1px solid var(--gray-lt)',
                  borderLeft: '4px solid var(--gold)',
                  padding: 'var(--space-md) var(--space-lg)',
                }}>
                  <span style={{
                    flexShrink: 0,
                    width: 28,
                    height: 28,
                    borderRadius: '50%',
                    background: 'var(--gold)',
                    color: 'var(--dark)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 700,
                    fontSize: '0.8rem',
                    fontFamily: 'var(--font-body)',
                  }}>
                    {i + 1}
                  </span>
                  <p style={{
                    fontSize: '1.0625rem',
                    lineHeight: 1.6,
                    color: 'var(--navy)',
                    marginBottom: 0,
                    fontWeight: 500,
                  }}>
                    {req}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.25}>
            <p style={{ marginTop: 'var(--space-xl)' }}>
              The standard is not: does this course have a new label? The standard is: do students who complete this course understand how their craft serves the audience&rsquo;s experience of the story &mdash; and can they prove it in their work?
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION 3 — WHAT STOPS / STARTS / STAYS (navy, three columns) */}
      <section className="section section--navy">
        <div className="container">
          <ScrollReveal>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 'var(--space-lg)',
            }} className="three-col-grid">
              {/* What Stops */}
              <div style={{
                background: 'rgba(255,255,255,0.06)',
                padding: 'var(--space-xl)',
                borderTop: '3px solid #C45A3B',
              }}>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.5rem',
                  fontWeight: 500,
                  color: '#C45A3B',
                  marginBottom: 'var(--space-md)',
                }}>
                  What Stops
                </h3>
                <p style={{ color: 'rgba(255,255,255,0.75)', marginBottom: 0 }}>
                  Courses that teach craft as an end in itself &mdash; divorced from story function and audience effect &mdash; must be revised or retired. This includes technically rigorous courses that produce students who are highly proficient within their discipline but cannot collaborate across it. Proficiency without story accountability is not the goal of this school.
                </p>
              </div>

              {/* What Starts */}
              <div style={{
                background: 'rgba(255,255,255,0.06)',
                padding: 'var(--space-xl)',
                borderTop: '3px solid var(--gold)',
              }}>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.5rem',
                  fontWeight: 500,
                  color: 'var(--gold)',
                  marginBottom: 'var(--space-md)',
                }}>
                  What Starts
                </h3>
                <p style={{ color: 'rgba(255,255,255,0.75)', marginBottom: 0 }}>
                  Cross-discipline story work begins in Year 1 and escalates through the practicum sequence. Students from different programs are introduced to the shared story framework before they work together on set. Critique is named and practiced in every required course. Voice is honored as the animating principle beneath every story function.
                </p>
              </div>

              {/* What Stays */}
              <div style={{
                background: 'rgba(255,255,255,0.06)',
                padding: 'var(--space-xl)',
                borderTop: '3px solid var(--gold-lt)',
              }}>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.5rem',
                  fontWeight: 500,
                  color: 'var(--gold-lt)',
                  marginBottom: 'var(--space-md)',
                }}>
                  What Stays
                </h3>
                <p style={{ color: 'rgba(255,255,255,0.75)', marginBottom: 0 }}>
                  The depth of craft training within each discipline stays. Cinematography students still learn to light. Directors still learn to work with actors. Editors still learn to cut. The framework does not flatten craft &mdash; it gives craft a shared purpose. That is a clarification, not a reduction.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <style>{`
          @media (max-width: 768px) {
            .three-col-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* SECTION 4 — THE ASK */}
      <section className="section section--cream">
        <div className="container--narrow">
          <ScrollReveal>
            <p className="eyebrow">THE ASK</p>
            <h2>What Each Program Director Leads</h2>
          </ScrollReveal>

          <div style={{ marginTop: 'var(--space-lg)' }}>
            {DELIVERABLES.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.06}>
                <div style={{
                  display: 'flex',
                  gap: 'var(--space-md)',
                  alignItems: 'baseline',
                  marginBottom: 'var(--space-md)',
                  paddingBottom: 'var(--space-md)',
                  borderBottom: i < DELIVERABLES.length - 1 ? '1px solid var(--gray-lt)' : 'none',
                }}>
                  <span style={{
                    flexShrink: 0,
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.5rem',
                    fontWeight: 600,
                    color: 'var(--gold)',
                    lineHeight: 1,
                    width: '2rem',
                  }}>
                    {i + 1}
                  </span>
                  <div>
                    <p style={{
                      fontSize: '1.0625rem',
                      fontWeight: 600,
                      color: 'var(--navy)',
                      marginBottom: '0.25rem',
                    }}>
                      {item.label}
                    </p>
                    <p style={{
                      fontSize: '0.95rem',
                      color: 'var(--gray)',
                      marginBottom: 0,
                    }}>
                      {item.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.35}>
            <hr className="gold-rule" />
            <p style={{ fontWeight: 500, color: 'var(--navy)' }}>
              The standard is not compliance. It is change that shows up in the work.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: 'var(--space-xl)' }}>
              <Link to="/faq" className="btn btn--primary">
                Read the FAQ &rarr;
              </Link>
              <Link to="/framework" className="btn btn--secondary" style={{ color: 'var(--navy)' }}>
                Explore the Framework &rarr;
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
