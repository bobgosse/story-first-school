import { Link } from 'react-router-dom';
import { ScrollReveal } from '../components/ScrollReveal';

const REQUIREMENTS = [
  'Every required course declares its story function',
  'Every required course rewrites its learning outcomes as story outcomes',
  'Every required course demonstrates in its assessments that it teaches students to serve the story rather than the discipline',
  'Every program produces a Stop / Start / Continue list: what is retired, what is introduced, what is preserved and why',
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

      {/* WHERE WE ARE NOW */}
      <section className="section section--off-white">
        <div className="container--narrow">
          <ScrollReveal>
            <p className="eyebrow">WHERE WE ARE NOW</p>
            <h2>This Work Is Already Beginning.</h2>
            <p>
              Story-First is not arriving to fix a school that has lost its way. It is arriving to formalize and scale what the faculty's instincts are already producing.
            </p>
            <p>
              Cross-discipline collaboration is emerging organically among students and faculty &mdash; in capstone projects, in shared production work, in courses that have quietly begun asking story questions across disciplinary lines. These efforts exist because the people in this school know what good work requires, even before the curriculum names it.
            </p>
            <p>
              Story-First gives those efforts a shared framework, a common language, and a structure that makes them permanent rather than occasional.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION 1 — THE ROOT CAUSE */}
      <section className="section section--cream">
        <div className="container--narrow">
          <ScrollReveal>
            <p className="eyebrow">THE CONTEXT</p>
            <h2>A Design Problem, Not a Blame Problem</h2>
            <p>
              The drift happened because real pressures met an unchanged structure &mdash; and no one designed it that way. The conditions have changed: scale is different, technology is different, the industry is different. We now need a more explicit shared framework. That is a design upgrade, not a diagnosis of blame.
            </p>
            <p>
              Students feel the gap most acutely on practicum films. They arrive having been trained rigorously within their disciplines &mdash; cinematography students who can light a set, directing students who can run a shot list, producing students who can build a budget. But they have never been asked to agree on what a story is, what it is supposed to do to an audience, or what they are all there to protect.
            </p>
            <p>
              The friction on those sets is not a personality problem. It is a structural one. The shared story intention was never explicitly built into the curriculum &mdash; and now it needs to be.
            </p>
            <div className="pull-quote">
              The shared story intention was never explicitly built into the curriculum &mdash; and now it needs to be.
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
                  Courses that teach craft as an end in itself &mdash; divorced from story function and audience effect &mdash; are revised or reconsidered. This includes technically rigorous courses that produce students who are highly proficient within their discipline but cannot collaborate across it. Proficiency without story accountability is not what we are here to build.
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
            <p style={{
              fontFamily: 'var(--font-display)',
              fontStyle: 'italic',
              fontSize: '1.15rem',
              color: 'var(--navy)',
              marginTop: 'var(--space-lg)',
            }}>
              This is an invitation to claim the work we've always been doing &mdash; and do it on purpose.
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

      {/* HOW WE'LL KNOW IT WORKED */}
      <section className="section section--off-white">
        <div className="container--narrow">
          <ScrollReveal>
            <p className="eyebrow">ACCOUNTABILITY</p>
            <h2>How We'll Know It Worked</h2>
            <p>
              Story-first is only as good as what it produces. These are the indicators we will track, organized by timeframe so that progress is visible at each stage.
            </p>
          </ScrollReveal>
        </div>
        <div className="container">
          <ScrollReveal delay={0.1}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 'var(--space-lg)',
              marginTop: 'var(--space-xl)',
            }} className="metrics-grid">
              {/* Year 1 */}
              <div style={{
                background: 'var(--white)',
                border: '1px solid var(--gray-lt)',
                borderTop: '3px solid var(--gold)',
                padding: 'var(--space-xl)',
              }}>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.25rem',
                  fontWeight: 500,
                  color: 'var(--navy)',
                  marginBottom: 'var(--space-md)',
                }}>
                  Year 1 &mdash; Leading Indicators
                </h3>
                <ul style={{ paddingLeft: '1.25rem', margin: 0 }}>
                  <li style={{ marginBottom: 'var(--space-sm)', fontSize: '0.95rem', lineHeight: 1.6 }}>All required courses mapped to their story function</li>
                  <li style={{ marginBottom: 'var(--space-sm)', fontSize: '0.95rem', lineHeight: 1.6 }}>Master syllabi standardized with voice and critique obligations named</li>
                  <li style={{ marginBottom: 0, fontSize: '0.95rem', lineHeight: 1.6 }}>Students can articulate how their discipline serves story</li>
                </ul>
              </div>

              {/* Years 1–2 */}
              <div style={{
                background: 'var(--white)',
                border: '1px solid var(--gray-lt)',
                borderTop: '3px solid var(--gold)',
                padding: 'var(--space-xl)',
              }}>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.25rem',
                  fontWeight: 500,
                  color: 'var(--navy)',
                  marginBottom: 'var(--space-md)',
                }}>
                  Years 1&ndash;2 &mdash; Student Outcomes
                </h3>
                <ul style={{ paddingLeft: '1.25rem', margin: 0 }}>
                  <li style={{ marginBottom: 'var(--space-sm)', fontSize: '0.95rem', lineHeight: 1.6 }}>More balanced discipline selection at the end of Year 2</li>
                  <li style={{ marginBottom: 'var(--space-sm)', fontSize: '0.95rem', lineHeight: 1.6 }}>Reduced burnout as ensemble balance improves</li>
                  <li style={{ marginBottom: 0, fontSize: '0.95rem', lineHeight: 1.6 }}>Stronger critique and revision skills visible in practicum work</li>
                </ul>
              </div>

              {/* Years 3–4 */}
              <div style={{
                background: 'var(--white)',
                border: '1px solid var(--gray-lt)',
                borderTop: '3px solid var(--gold)',
                padding: 'var(--space-xl)',
              }}>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.25rem',
                  fontWeight: 500,
                  color: 'var(--navy)',
                  marginBottom: 'var(--space-md)',
                }}>
                  Years 3&ndash;4 &mdash; Production Quality
                </h3>
                <ul style={{ paddingLeft: '1.25rem', margin: 0 }}>
                  <li style={{ marginBottom: 'var(--space-sm)', fontSize: '0.95rem', lineHeight: 1.6 }}>Better collaboration and story coherence in practicum films (rubric-based review)</li>
                  <li style={{ marginBottom: 'var(--space-sm)', fontSize: '0.95rem', lineHeight: 1.6 }}>Clearer festival and delivery readiness at graduation</li>
                  <li style={{ marginBottom: 0, fontSize: '0.95rem', lineHeight: 1.6 }}>Stronger employer and alumni feedback on graduates' adaptability and judgment</li>
                </ul>
              </div>
            </div>
          </ScrollReveal>

          <style>{`
            @media (max-width: 768px) {
              .metrics-grid { grid-template-columns: 1fr !important; }
            }
          `}</style>
        </div>
        <div className="container--narrow" style={{ marginTop: 'var(--space-xl)' }}>
          <ScrollReveal delay={0.15}>
            <p style={{ fontStyle: 'italic', color: 'var(--gray)' }}>
              Without these benchmarks, the proposal is elegant but untestable. These metrics make it possible to report progress honestly &mdash; and to adjust where the evidence points.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
