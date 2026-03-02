import { Link } from 'react-router-dom';
import { ScrollReveal } from '../components/ScrollReveal';
import { STORY_FUNCTIONS } from '../data/disciplines';

const YEAR_STEPS = [
  { year: 1, label: 'Year 1', text: 'Individual films. iPhone/DSLR. Pure ideation. Find your story.' },
  { year: 2, label: 'Year 2', text: 'First collaborations. Small teams. Story under the pressure of other people.' },
  { year: 3, label: 'Year 3', text: 'Professional scale. Story surviving contact with real production.' },
  { year: 4, label: 'Year 4', text: 'Full scale. Something worth saying, delivered with professional judgment.' },
];

const CRITIQUE_CARDS = [
  { fnId: 'ideation', critique: 'Story diagnosis — why this structure isn\u2019t working and what it needs' },
  { fnId: 'performance', critique: 'Scene analysis — what the performance is and isn\u2019t doing for the audience' },
  { fnId: 'managing', critique: 'Production post-mortem — where did the story get lost in the logistics' },
  { fnId: 'vision', critique: 'Image reading — what this frame communicates vs. what it was intended to communicate' },
  { fnId: 'sound', critique: 'Sonic analysis — how the sound design is shaping or undermining the audience\u2019s experience' },
  { fnId: 'history', critique: 'Contextual critique — how this work positions itself in relation to the tradition it inherits' },
];

export default function Voice() {
  return (
    <>
      {/* HERO */}
      <section className="section section--navy" style={{ paddingTop: 'calc(64px + var(--space-3xl))', textAlign: 'center' }}>
        <div className="container--narrow">
          <ScrollReveal>
            <p className="eyebrow eyebrow--light">FOUNDATIONAL CAPACITIES</p>
            <h1 style={{ marginBottom: '1.25rem' }}>Voice &amp; Critique</h1>
            <p style={{
              fontFamily: 'var(--font-display)',
              fontStyle: 'italic',
              fontSize: '1.25rem',
              lineHeight: 1.6,
              maxWidth: '36em',
              margin: '0 auto',
              opacity: 0.9,
            }}>
              Story-first is not a framework for packaging student work. It is a framework for finding what is worth making in the first place.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION 1 — ON VOICE */}
      <section className="section section--cream">
        <div className="container--narrow">
          <ScrollReveal>
            <p className="eyebrow">ON VOICE</p>
            <h2>Whose Story Is This?</h2>
            <p>
              The risk in any audience-centered curriculum is the student who becomes clenched around reception before they have found anything worth saying. That paralysis &mdash; the filmmaker who edits by imagining disapproval rather than chasing truth &mdash; is one of the most common and damaging things a film school produces.
            </p>
            <p>
              The answer is not less audience awareness. It is the right sequence.
            </p>
            <p>
              The foundational question of the story-first framework is: whose story is this? That is a voice question. It is <em>the</em> voice question. A filmmaker who cannot answer it has nothing to offer an audience. But a filmmaker who can answer it clearly is already doing the most sophisticated audience work there is &mdash; because authentic human truth is the only thing that earns sustained attention at scale.
            </p>
            <p>
              Voice and audience are not opposites. Voice is the precondition for audience. Story-first honors both by putting them in the right order.
            </p>
            <div className="pull-quote">
              Authentic human truth is the only thing that earns sustained attention at scale.
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION 2 — THE SEQUENCE */}
      <section className="section section--off-white">
        <div className="container--narrow">
          <ScrollReveal>
            <p className="eyebrow">THE SEQUENCE</p>
            <h2>Finding Your Story Before You Scale It</h2>
            <p>
              The practicum arc is designed to build this sequence deliberately. Year 1 is individual, personal, and minimally equipped &mdash; as close to pure ideation and audacity as a structured curriculum can get. Students work alone, with available light and a phone or DSLR, making films from their own experience and imagination before they have the resources to paper over a weak idea. There is nowhere to hide. That is the point.
            </p>
            <p>
              The audience machinery &mdash; distribution, positioning, delivery &mdash; builds as the production scale builds. By Year 4, students need both: something worth saying and the professional judgment to deliver it.
            </p>
          </ScrollReveal>

          {/* Four-step progression */}
          <div style={{ marginTop: 'var(--space-xl)' }}>
            {YEAR_STEPS.map((step, i) => (
              <ScrollReveal key={step.year} delay={i * 0.08}>
                <div style={{
                  display: 'flex',
                  gap: 'var(--space-lg)',
                  alignItems: 'flex-start',
                  marginBottom: i < 3 ? 'var(--space-lg)' : 0,
                  position: 'relative',
                }}>
                  {/* Year indicator */}
                  <div style={{
                    flexShrink: 0,
                    width: 56,
                    height: 56,
                    borderRadius: '50%',
                    background: `rgba(28, 43, 74, ${0.08 + i * 0.08})`,
                    border: '2px solid var(--gold)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'var(--font-display)',
                    fontWeight: 600,
                    fontSize: '1.125rem',
                    color: 'var(--navy)',
                  }}>
                    {step.year}
                  </div>
                  {/* Connector line */}
                  {i < 3 && (
                    <div style={{
                      position: 'absolute',
                      left: 27,
                      top: 58,
                      width: 2,
                      height: 'calc(var(--space-lg))',
                      background: 'var(--gold)',
                      opacity: 0.3,
                    }} />
                  )}
                  {/* Text */}
                  <div style={{ paddingTop: '0.5rem' }}>
                    <p style={{
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '0.15em',
                      color: 'var(--gold)',
                      marginBottom: 'var(--space-xs)',
                    }}>
                      {step.label}
                    </p>
                    <p style={{
                      fontSize: '1.0625rem',
                      lineHeight: 1.6,
                      color: 'var(--gray)',
                      marginBottom: 0,
                    }}>
                      {step.text}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.3}>
            <div style={{ marginTop: 'var(--space-xl)' }}>
              <Link to="/practicums" className="btn btn--secondary" style={{ color: 'var(--navy)' }}>
                See the full practicum sequence &rarr;
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION 3 — THE STANDARD (navy) */}
      <section className="section section--navy">
        <div className="container--narrow">
          <ScrollReveal>
            <p className="eyebrow eyebrow--light">THE STANDARD</p>
            <h2>What Every Course Must Answer</h2>
            <p>
              Every syllabus rebuild must name voice explicitly &mdash; not as a mystical quality that cannot be taught, but as the disciplined practice of pursuing human truth in a story over the easier pursuit of audience approval.
            </p>
            <p>
              Assessment criteria should reward risk and specificity. The signature assignment in every required course should ask: what is this student&rsquo;s specific story, and did the work pursue it honestly?
            </p>
            <p>
              Voice is the animating principle beneath all six story functions. It is not a seventh function. It is the reason the other six exist.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION 4 — ON CRITIQUE */}
      <section className="section section--cream">
        <div className="container--narrow">
          <ScrollReveal>
            <p className="eyebrow">ON CRITIQUE</p>
            <h2>The Connective Tissue Between Intention and Revision</h2>
            <p>
              Critique is not a story function. It is the school-wide practice that makes all six story functions teachable and improvable.
            </p>
            <p>
              The school currently has a deficit of skilled critical response &mdash; the ability to diagnose precisely why something isn&rsquo;t working and articulate it clearly enough to fix it. This is not a Cinema Studies problem. It is a school-wide problem. A directing student who cannot say specifically what a scene fails to do cannot revise it. A cinematography student who cannot articulate the story function of a visual choice cannot improve it.
            </p>
            <p>
              Critique is the connective tissue between what a student intended and what the work needs to become.
            </p>
          </ScrollReveal>
        </div>

        {/* Critique across six functions — card grid */}
        <div className="container" style={{ marginTop: 'var(--space-xl)' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: 'var(--space-lg)',
          }}>
            {CRITIQUE_CARDS.map((card, i) => {
              const fn = STORY_FUNCTIONS.find(f => f.id === card.fnId);
              if (!fn) return null;
              return (
                <ScrollReveal key={card.fnId} delay={i * 0.06}>
                  <div
                    style={{
                      background: 'var(--white)',
                      border: '1px solid var(--gray-lt)',
                      borderLeft: `4px solid ${fn.color}`,
                      padding: 'var(--space-lg)',
                      transition: 'all 0.2s ease',
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
                    <span className="fn-badge" style={{ background: fn.color, marginBottom: 'var(--space-sm)', display: 'inline-block' }}>
                      {fn.name}
                    </span>
                    <p style={{
                      fontSize: '1.0625rem',
                      lineHeight: 1.6,
                      color: 'var(--gray)',
                      marginBottom: 0,
                      marginTop: 'var(--space-sm)',
                    }}>
                      {card.critique}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>

        <div className="container--narrow" style={{ marginTop: 'var(--space-xl)' }}>
          <ScrollReveal>
            <p>
              Critique should be named and practiced in every required course &mdash; not as a separate assignment but as a method: the practice of saying clearly what a work is doing, what it isn&rsquo;t doing, and what it needs. This is one of the most transferable professional skills a film school can build.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
