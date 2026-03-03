import { Link } from 'react-router-dom';
import { ScrollReveal } from '../components/ScrollReveal';

const ORIGINAL_DISCIPLINES = [
  'Directors',
  'Producers',
  'Screenwriters',
  'Cinematographers',
  'Editors',
  'Production Designers',
];

const ORIGINAL_ENSEMBLE = [
  { label: 'Directors', count: 8 },
  { label: 'Producers', count: 8 },
  { label: 'Cinematographers', count: 8 },
  { label: 'Production Designers', count: 8 },
  { label: 'Editors', count: 8 },
  { label: 'Screenwriters', count: 8 },
];

const STRETCHED_ENSEMBLE = [
  { label: 'Cinematographers', count: '16\u201317' },
  { label: 'Directors', count: '16' },
  { label: 'Producers', count: '5\u20136' },
  { label: 'Production Designers', count: '5\u20136' },
  { label: 'Editors', count: '6' },
];

const INDIVIDUAL_SOLUTIONS = [
  {
    label: 'Reducing production scale',
    works: 'addresses immediate workload.',
    limit: 'Does not fix ensemble imbalance.',
  },
  {
    label: 'Adding small-format options',
    works: 'creates flexibility.',
    limit: 'Does not build shared story intention.',
  },
  {
    label: 'Capping discipline numbers',
    works: 'restores balance.',
    limit: 'Requires a principled framework to justify it.',
  },
];

export default function HowWeGotHere() {
  return (
    <>
      {/* HERO */}
      <section
        className="section section--navy"
        style={{
          paddingTop: 'calc(64px + var(--space-3xl))',
          textAlign: 'center',
        }}
      >
        <div className="container--narrow">
          <ScrollReveal>
            <p className="eyebrow eyebrow--light">THE INSTITUTIONAL CONTEXT</p>
            <h1 style={{ marginBottom: '1.25rem' }}>How We Got Here</h1>
            <p
              style={{
                fontFamily: 'var(--font-display)',
                fontStyle: 'italic',
                fontSize: '1.25rem',
                lineHeight: 1.6,
                maxWidth: '36em',
                margin: '0 auto',
                opacity: 0.9,
              }}
            >
              This is not a history of failure. It is the specific institutional
              context that makes the story-first reimagining necessary &mdash;
              and inevitable.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION 1 — THE MODEL THAT WORKED */}
      <section className="section section--cream">
        <div className="container--narrow">
          <ScrollReveal>
            <p className="eyebrow">THE ORIGINAL DESIGN</p>
            <h2>A School Built for Eight</h2>
            <p>
              The UNCSA School of Filmmaking was founded on a model that worked.
              In its early years, each discipline admitted roughly eight students
              per cohort. Eight directors, eight producers, eight screenwriters,
              eight cinematographers, eight editors, eight production designers.
              The math was clean and intentional: it mirrored the collaborative
              structure of a real film production. Every student had a meaningful
              role. Every production had the crew it needed.
            </p>
            <p>
              The conservatory model &mdash; project-led, collaborative,
              professionally simulated &mdash; functioned because the numbers
              supported it. That model held for nearly three decades.
            </p>
          </ScrollReveal>

          {/* Original ensemble grid */}
          <ScrollReveal delay={0.1}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: 'var(--space-md)',
                marginTop: 'var(--space-xl)',
              }}
              className="ensemble-grid"
            >
              {ORIGINAL_DISCIPLINES.map((discipline, i) => (
                <div
                  key={i}
                  style={{
                    background: 'var(--white)',
                    border: '1px solid var(--gray-lt)',
                    padding: 'var(--space-md) var(--space-lg)',
                    textAlign: 'center',
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '2rem',
                      fontWeight: 600,
                      color: 'var(--navy)',
                      lineHeight: 1,
                      marginBottom: 'var(--space-xs)',
                    }}
                  >
                    8
                  </div>
                  <div
                    style={{
                      fontSize: '0.8125rem',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      color: 'var(--gray)',
                    }}
                  >
                    {discipline}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <p
              style={{
                marginTop: 'var(--space-lg)',
                fontSize: '0.9375rem',
                color: 'var(--gray)',
                textAlign: 'center',
                fontStyle: 'italic',
              }}
            >
              48 students per cohort. Balanced. Intentional. Functional.
            </p>
          </ScrollReveal>
        </div>

        <style>{`
          @media (max-width: 768px) {
            .ensemble-grid { grid-template-columns: repeat(2, 1fr) !important; }
          }
        `}</style>
      </section>

      {/* SECTION 2 — THE PRESSURE THAT CHANGED IT */}
      <section className="section section--off-white">
        <div className="container--narrow">
          <ScrollReveal>
            <p className="eyebrow">WHAT HAPPENED</p>
            <h2>The Production Model Was Not Redesigned. It Was Stretched.</h2>
          </ScrollReveal>

          <ScrollReveal delay={0.05}>
            <div className="pull-quote">
              It Was Stretched.
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p>
              Over time, the school faced increasing pressure from the state to
              generate more tuition revenue. More students meant more tuition
              dollars, and more tuition dollars justified the state's continued
              investment in the school. Annual first-year intake expanded from
              roughly 48 students to between 85 and 95.
            </p>
            <p>
              The expansion was a financial necessity. It was not accompanied by
              a proportional expansion of production infrastructure, faculty
              resources, or the equipment and crew capacity required to support
              the collaborative model the school was built around.
            </p>
            <p>
              The COVID-19 pandemic introduced a further layer of economic
              pressure. Inflationary costs that rose sharply during the pandemic
              were never fully addressed as conditions normalized. Equipment,
              crew support, and production logistics became more expensive. The
              budget available per production did not keep pace. The gap between
              what a production needed and what it could be resourced to have
              grew wider.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION 3 — WHAT THE STRETCH PRODUCED */}
      <section className="section section--navy">
        <div className="container--narrow">
          <ScrollReveal>
            <p className="eyebrow eyebrow--light">THE EFFECTS</p>
            <h2>A Self-Reinforcing Cycle</h2>
            <p>
              Students self-select their disciplines at the end of Year 2, after
              spending two years observing and crewing on third and fourth year
              productions. What they observed, increasingly, was chaos:
              understaffed producing departments, production designers stretched
              across multiple simultaneous shoots, cinematography students
              crewing eight or more weekends out of a fifteen-week semester
              &mdash; partly as a graded obligation, partly as an expectation
              that had calcified into culture.
            </p>
            <p>
              The rational student response was to gravitate toward the
              disciplines that felt most manageable. Cinematography became
              oversubscribed. Directing became oversubscribed. Producing,
              production design, and editing became chronically
              underrepresented.
            </p>
          </ScrollReveal>
        </div>

        {/* Two-panel comparison */}
        <div className="container" style={{ marginTop: 'var(--space-xl)' }}>
          <ScrollReveal delay={0.1}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 'var(--space-lg)',
                maxWidth: '52rem',
                margin: '0 auto',
              }}
              className="comparison-grid"
            >
              {/* Left panel — Original */}
              <div
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  padding: 'var(--space-xl)',
                  borderTop: '2px solid rgba(255,255,255,0.2)',
                }}
              >
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.25rem',
                    fontWeight: 500,
                    color: 'rgba(255,255,255,0.8)',
                    marginBottom: 'var(--space-lg)',
                  }}
                >
                  The Original Ensemble
                </h3>
                {ORIGINAL_ENSEMBLE.map((item, i) => (
                  <div
                    key={i}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      padding: 'var(--space-xs) 0',
                      borderBottom:
                        i < ORIGINAL_ENSEMBLE.length - 1
                          ? '1px solid rgba(255,255,255,0.07)'
                          : 'none',
                      color: 'rgba(255,255,255,0.55)',
                      fontSize: '0.95rem',
                    }}
                  >
                    <span>{item.label}</span>
                    <span style={{ fontWeight: 600 }}>{item.count}</span>
                  </div>
                ))}
              </div>

              {/* Right panel — Stretched */}
              <div
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  padding: 'var(--space-xl)',
                  borderTop: '2px solid var(--gold)',
                }}
              >
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.25rem',
                    fontWeight: 500,
                    color: 'var(--gold)',
                    marginBottom: 'var(--space-lg)',
                  }}
                >
                  The Stretched Ensemble
                </h3>
                {STRETCHED_ENSEMBLE.map((item, i) => (
                  <div
                    key={i}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      padding: 'var(--space-xs) 0',
                      borderBottom:
                        i < STRETCHED_ENSEMBLE.length - 1
                          ? '1px solid rgba(255,255,255,0.07)'
                          : 'none',
                      color: 'var(--gold)',
                      fontSize: '0.95rem',
                    }}
                  >
                    <span>{item.label}</span>
                    <span style={{ fontWeight: 600 }}>{item.count}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p
              style={{
                maxWidth: '52rem',
                margin: 'var(--space-xl) auto 0',
                textAlign: 'center',
                color: 'rgba(255,255,255,0.65)',
                fontStyle: 'italic',
                fontSize: '1.0625rem',
                lineHeight: 1.6,
              }}
            >
              The imbalance was not random. It was the school's own production
              culture, reproduced in miniature by students making rational
              choices about where to put their energy.
            </p>
          </ScrollReveal>
        </div>

        <style>{`
          @media (max-width: 768px) {
            .comparison-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* SECTION 4 — THE ENSEMBLE PROBLEM */}
      <section className="section section--cream">
        <div className="container--narrow">
          <ScrollReveal>
            <p className="eyebrow">WHY THIS MATTERS</p>
            <h2>
              A Conservatory Is an Ensemble, Not a Collection of Specializations
            </h2>
            <p>
              When the ensemble is out of balance &mdash; when there are three
              times as many directors as producers, twice as many
              cinematographers as production designers &mdash; the productions
              that result are not simply less efficient. They are educationally
              compromised.
            </p>
            <p>
              Students in underrepresented disciplines are overworked. Students
              in overrepresented disciplines are underserved. And the
              collaborative story intention that is the whole point of the
              practicum experience is replaced by the management of competing
              anxieties.
            </p>
            <p>
              The dysfunction and frustration on those sets is not a personality
              problem. It is a curriculum problem. There is no shared story
              intention because the curriculum never built one.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="pull-quote">
              There is no shared story intention because the curriculum never
              built one.
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION 5 — WHERE THIS LEAVES US */}
      <section className="section section--navy">
        <div className="container--narrow">
          <ScrollReveal>
            <p className="eyebrow eyebrow--light">THE DIAGNOSIS</p>
            <h2>A Structural Problem Requires a Structural Response</h2>
            <p>
              The school is currently running a collaborative production model
              designed for cohorts of 48 at a scale of 85 to 95 students
              &mdash; with a discipline distribution that no longer supports the
              ensemble the model requires, in an industry and economic
              environment that has changed fundamentally since the model was
              designed.
            </p>
            <p>
              Individual solutions address symptoms without changing the
              underlying structure. They are the right instincts applied to the
              wrong level of the problem.
            </p>
            <p>
              This is not a resource problem that more money would solve. It is
              a structural problem that requires a structural response.
            </p>
          </ScrollReveal>

          {/* Three individual solutions */}
          <div style={{ marginTop: 'var(--space-xl)' }}>
            {INDIVIDUAL_SOLUTIONS.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.06}>
                <div
                  style={{
                    display: 'flex',
                    gap: 'var(--space-md)',
                    alignItems: 'flex-start',
                    marginBottom: 'var(--space-md)',
                    background: 'rgba(255,255,255,0.06)',
                    borderLeft: '4px solid var(--gold)',
                    padding: 'var(--space-md) var(--space-lg)',
                  }}
                >
                  <span
                    style={{
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
                    }}
                  >
                    {i + 1}
                  </span>
                  <div>
                    <p
                      style={{
                        fontSize: '1.0625rem',
                        fontWeight: 600,
                        color: 'var(--white)',
                        marginBottom: '0.25rem',
                      }}
                    >
                      {item.label}
                    </p>
                    <p
                      style={{
                        fontSize: '0.95rem',
                        color: 'rgba(255,255,255,0.6)',
                        marginBottom: 0,
                      }}
                    >
                      {item.works} {item.limit}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Closing statement */}
          <ScrollReveal delay={0.25}>
            <p
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                fontStyle: 'italic',
                lineHeight: 1.45,
                textAlign: 'center',
                color: 'var(--gold)',
                marginTop: 'var(--space-2xl)',
                marginBottom: 'var(--space-xl)',
                maxWidth: '32em',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            >
              The story-first proposal is that framework.
            </p>
          </ScrollReveal>

          {/* CTA buttons */}
          <ScrollReveal delay={0.3}>
            <div
              style={{
                display: 'flex',
                gap: '1rem',
                flexWrap: 'wrap',
                justifyContent: 'center',
              }}
            >
              <Link to="/" className="btn btn--primary">
                Read the Economic Case &rarr;
              </Link>
              <Link to="/framework" className="btn btn--ghost">
                Explore the Framework &rarr;
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
