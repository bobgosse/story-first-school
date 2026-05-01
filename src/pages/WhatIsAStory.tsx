import { ScrollReveal } from '../components/ScrollReveal';

const ELEMENTS = [
  {
    n: 1,
    title: 'A Problem',
    body: 'Something is wrong, missing, threatened, or desired. Without a problem there is no story — only description. The problem does not need to be dramatic. It needs to be real to the person who has it.',
  },
  {
    n: 2,
    title: 'Agency',
    body: 'Someone is trying to do something about the problem. Passive characters in passive situations produce anecdote, not story. Agency is what transforms observation into narrative.',
  },
  {
    n: 3,
    title: 'Change',
    body: 'Something is genuinely different by the end. Not resolved, necessarily — but transformed. A story that ends exactly where it began has failed at the most fundamental level.',
  },
];

const NOT_A_STORY = [
  ['A vibe or an atmosphere', 'Tone'],
  ['A theme or a subject', 'Topic'],
  ['A beautiful sequence of images', 'Poetry'],
  ['A collection of interesting characters', 'A cast'],
  ['A series of events in chronological order', 'A timeline'],
  ['An argument or a position', 'Rhetoric'],
];

const FORMS = [
  {
    label: 'Novel',
    body: 'Sustains multiple problems, multiple agents, sprawling time. The shape is expansive — a landscape the reader inhabits over days or weeks. Change accumulates slowly and arrives with weight.',
  },
  {
    label: 'Short Story',
    body: 'Typically isolates a single moment of change. The shape is compressed — a lens rather than a landscape. Everything outside the frame is implied. What is left out is as intentional as what remains.',
  },
  {
    label: 'Feature Film',
    body: 'Lives between novel and short story — 90 to 120 minutes to make one thing matter completely. The shape is architectural: problem established, pressure applied, transformation earned.',
  },
  {
    label: 'Episodic Series',
    body: 'Introduces a new formal challenge: the story must be self-contained per episode and accumulative across episodes. Two stories running simultaneously at different scales. The audience must be satisfied and hungry at the same time.',
  },
  {
    label: 'Myth',
    body: 'Encodes cultural meaning across generations. The individual story is almost secondary to what it explains or preserves about how a community understands itself. Myth is story functioning as shared memory.',
  },
  {
    label: 'History',
    body: 'Selects and sequences events to produce meaning — which is why historiography is contested. Every historical narrative is an argument about causality. History is not what happened. It is the story we tell about what happened.',
  },
  {
    label: 'Animation',
    body: 'Every element of the image is authored deliberately — movement, timing, light, expression. Nothing exists by accident. Animation makes the story-first argument visible in its most complete form: when every frame is a choice, story must come first. Always.',
  },
];

const DISCIPLINE_APPLICATIONS = [
  { label: 'Directors', body: 'Does this blocking choice make the character’s agency visible? Does this performance reveal what they want and what stands in their way?' },
  { label: 'Cinematographers', body: 'Does this lighting decision make the problem feel real? Does this camera movement track the change as it happens?' },
  { label: 'Editors', body: 'Does this cut serve the causality? Does the rhythm of this sequence put the audience in the right emotional position for what comes next?' },
  { label: 'Production Designers', body: 'Does this environment make the problem tangible? Does this space tell the audience something about what the character wants or fears before anyone speaks?' },
  { label: 'Sound Designers', body: 'Does this sonic atmosphere make the obstacle feel present? Does the sound design shift when the change arrives?' },
  { label: 'Animators', body: 'Does every frame choice — timing, movement, expression — serve the moment in the story? Is the character’s agency visible in how they move?' },
  { label: 'Producers', body: 'Which of these creative decisions are at risk? What do we need to protect to ensure the problem, the agency, and the change all reach the audience intact?' },
];

export default function WhatIsAStory() {
  return (
    <>
      {/* HERO */}
      <section className="section section--navy" style={{ paddingTop: 'calc(64px + var(--space-3xl))', textAlign: 'center' }}>
        <div className="container--narrow">
          <ScrollReveal>
            <p className="eyebrow eyebrow--light">DEFINITIONAL FOUNDATION</p>
            <h1 style={{ marginBottom: '1.25rem' }}>What Is a Story?</h1>
            <p style={{
              fontFamily: 'var(--font-display)',
              fontStyle: 'italic',
              fontSize: '1.25rem',
              lineHeight: 1.6,
              maxWidth: '36em',
              margin: '0 auto',
              opacity: 0.9,
            }}>
              Before we can teach filmmaking as a story-first practice, we need to agree on what we mean by story. Not everyone does.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION 1 — THE SIMPLEST TEST */}
      <section className="section section--cream">
        <div className="container--narrow">
          <ScrollReveal>
            <p className="eyebrow">THE TEST</p>
            <h2>The Simplest Test</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.05}>
            <p>
              A story is not a sequence of events. It is a sequence of events that means something.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p>
              The test is simple. &ldquo;And then, and then, and then&rdquo; is not a story. It is a chronicle. A story requires causality, consequence, and change. Something happens <em>because</em> of something else. Someone is different at the end than they were at the beginning &mdash; or the world is, or the audience is.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <div className="pull-quote">
              A story is not a sequence of events. It is a sequence of events that means something.
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION 2 — THREE NON-NEGOTIABLE ELEMENTS */}
      <section className="section section--off-white">
        <div className="container--narrow">
          <ScrollReveal>
            <p className="eyebrow">THE REQUIREMENTS</p>
            <h2>Three Non-Negotiable Elements</h2>
            <p>
              Every story &mdash; regardless of form, medium, or length &mdash; requires all three of the following. Remove any one of them and what remains is something other than a story.
            </p>
          </ScrollReveal>
        </div>
        <div className="container" style={{ marginTop: 'var(--space-xl)' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 'var(--space-lg)',
          }} className="elements-grid">
            {ELEMENTS.map((el, i) => (
              <ScrollReveal key={el.n} delay={i * 0.08}>
                <div style={{
                  background: 'var(--navy)',
                  color: 'var(--white)',
                  padding: 'var(--space-xl)',
                  height: '100%',
                  borderTop: '4px solid var(--gold)',
                }}>
                  <div style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '3rem',
                    fontWeight: 600,
                    color: 'var(--gold)',
                    lineHeight: 1,
                    marginBottom: 'var(--space-md)',
                  }}>
                    {el.n}
                  </div>
                  <h3 style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.5rem',
                    fontWeight: 500,
                    color: 'var(--white)',
                    marginBottom: 'var(--space-md)',
                  }}>
                    {el.title}
                  </h3>
                  <p style={{
                    color: 'rgba(255,255,255,0.85)',
                    marginBottom: 0,
                    lineHeight: 1.6,
                  }}>
                    {el.body}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <style>{`
            @media (max-width: 768px) {
              .elements-grid { grid-template-columns: 1fr !important; }
            }
          `}</style>
        </div>
      </section>

      {/* SECTION 3 — WHAT A STORY IS NOT */}
      <section className="section section--cream">
        <div className="container--narrow">
          <ScrollReveal>
            <p className="eyebrow">THE BOUNDARIES</p>
            <h2>What a Story Is Not</h2>
            <p>
              Each of the following can serve a story. None of them is a story on its own.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div style={{ marginTop: 'var(--space-xl)', overflowX: 'auto' }}>
              <table style={{
                width: '100%',
                borderCollapse: 'collapse',
                fontSize: '1.0625rem',
              }}>
                <thead>
                  <tr style={{ background: 'var(--navy)', color: 'var(--white)' }}>
                    <th style={{
                      textAlign: 'left',
                      padding: 'var(--space-md) var(--space-lg)',
                      fontFamily: 'var(--font-display)',
                      fontWeight: 500,
                      fontSize: '0.95rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                    }}>
                      This is not a story
                    </th>
                    <th style={{
                      textAlign: 'left',
                      padding: 'var(--space-md) var(--space-lg)',
                      fontFamily: 'var(--font-display)',
                      fontWeight: 500,
                      fontSize: '0.95rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      color: 'var(--gold)',
                    }}>
                      It is
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {NOT_A_STORY.map(([left, right], i) => (
                    <tr key={i} style={{ background: i % 2 === 0 ? 'var(--white)' : 'var(--off-white)' }}>
                      <td style={{
                        padding: 'var(--space-md) var(--space-lg)',
                        borderBottom: '1px solid var(--gray-lt)',
                        color: 'var(--navy)',
                      }}>
                        {left}
                      </td>
                      <td style={{
                        padding: 'var(--space-md) var(--space-lg)',
                        borderBottom: '1px solid var(--gray-lt)',
                        color: 'var(--gold)',
                        fontWeight: 600,
                      }}>
                        {right}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p style={{ marginTop: 'var(--space-xl)' }}>
              Any of these can become the raw material of a story. The moment a problem, an agent, and the possibility of change enter the room &mdash; story begins.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION 4 — SHAPE ACROSS FORMS */}
      <section className="section section--off-white">
        <div className="container--narrow">
          <ScrollReveal>
            <p className="eyebrow">ACROSS FORMS</p>
            <h2>The Shape of Story Across Forms</h2>
            <p>
              The shape of story changes across forms and media. The underlying requirements do not. Understanding how the same essential structure takes different forms is one of the core capacities a Story-First education develops.
            </p>
          </ScrollReveal>

          <div style={{ marginTop: 'var(--space-xl)' }}>
            {FORMS.map((form, i) => (
              <ScrollReveal key={form.label} delay={i * 0.05}>
                <div style={{
                  background: 'var(--white)',
                  borderLeft: '4px solid var(--gold)',
                  padding: 'var(--space-lg) var(--space-xl)',
                  marginBottom: 'var(--space-md)',
                }}>
                  <h3 style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.25rem',
                    fontWeight: 500,
                    color: 'var(--navy)',
                    marginBottom: 'var(--space-sm)',
                  }}>
                    {form.label}
                  </h3>
                  <p style={{ marginBottom: 0, lineHeight: 1.65 }}>
                    {form.body}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — WHY THIS MATTERS FOR EVERY DISCIPLINE */}
      <section className="section section--cream">
        <div className="container--narrow">
          <ScrollReveal>
            <p className="eyebrow">THE APPLICATION</p>
            <h2>Why This Matters for Every Discipline</h2>
            <p>
              Once story is defined precisely &mdash; as causality, agency, and change &mdash; it becomes a diagnostic tool, not just an aspiration. Every discipline in the School of Filmmaking can ask the same question of their own work:
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="pull-quote">
              Is this decision serving the causality, the agency, or the change?
            </div>
          </ScrollReveal>

          <div style={{ marginTop: 'var(--space-xl)' }}>
            {DISCIPLINE_APPLICATIONS.map((d, i) => (
              <ScrollReveal key={d.label} delay={i * 0.05}>
                <div style={{
                  display: 'flex',
                  gap: 'var(--space-md)',
                  alignItems: 'baseline',
                  marginBottom: 'var(--space-md)',
                  paddingBottom: 'var(--space-md)',
                  borderBottom: i < DISCIPLINE_APPLICATIONS.length - 1 ? '1px solid var(--gray-lt)' : 'none',
                }}>
                  <p style={{
                    flexShrink: 0,
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.0625rem',
                    fontWeight: 600,
                    color: 'var(--navy)',
                    minWidth: '11rem',
                    marginBottom: 0,
                  }}>
                    {d.label}:
                  </p>
                  <p style={{
                    fontSize: '1rem',
                    lineHeight: 1.65,
                    marginBottom: 0,
                  }}>
                    {d.body}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.4}>
            <p style={{ marginTop: 'var(--space-xl)' }}>
              Without a shared definition of story, &ldquo;story-first&rdquo; is an aspiration. With it, it becomes a standard &mdash; something every discipline can apply, defend, and teach.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION 6 — CLOSING STATEMENT */}
      <section className="section section--navy" style={{
        paddingTop: 'var(--space-4xl)',
        paddingBottom: 'var(--space-4xl)',
        textAlign: 'center',
      }}>
        <div className="container--narrow">
          <ScrollReveal>
            <p style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.35rem, 2.5vw, 1.75rem)',
              lineHeight: 1.55,
              maxWidth: '38em',
              margin: '0 auto var(--space-xl)',
              color: 'var(--white)',
            }}>
              A film school that cannot define what a story is cannot claim to teach filmmaking. The Story-First model begins here &mdash; with a definition precise enough to be useful, and broad enough to hold every form the medium takes.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <blockquote style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.5rem, 3vw, 2rem)',
              fontStyle: 'italic',
              lineHeight: 1.45,
              maxWidth: '40em',
              margin: '0 auto',
              padding: 'var(--space-lg) var(--space-xl)',
              borderLeft: '4px solid var(--gold)',
              color: 'var(--gold)',
              textAlign: 'left',
            }}>
              Someone wants something. Something stands in the way. The wanting and the obstacle produce change. That is a story. Everything else is in service of that &mdash; or it isn&rsquo;t.
            </blockquote>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
