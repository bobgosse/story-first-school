import { Link } from 'react-router-dom';
import { ScrollReveal } from '../components/ScrollReveal';
import { STORY_FUNCTIONS } from '../data/disciplines';

interface YearCard {
  year: number;
  label: string;
  heading: string;
  subhead: string;
  format: string[];
  description: string[];
  functions: string[];
}

const YEAR_CARDS: YearCard[] = [
  {
    year: 1,
    label: 'YEAR ONE',
    heading: 'The Individual Film',
    subhead: 'Foundation \u2014 Story from first principles',
    format: [
      'Individual projects \u2014 each student makes their own film',
      'Cameras: iPhone / DSLR',
      'Equipment: Available light, minimal gear',
    ],
    description: [
      'Year 1 is about learning to see. Working alone and with minimal equipment, students discover what a story requires before they have the resources to paper over its weaknesses. The iPhone doesn\u2019t forgive a weak idea. There is nowhere to hide \u2014 which is exactly the point.',
      'The constraint is the curriculum. Every limitation of a phone camera or a DSLR forces a story decision: what matters enough to frame? What do you cut? What do you ask the audience to imagine? Year 1 students leave with their first understanding of what it means to make a story choice under pressure.',
    ],
    functions: ['ideation', 'performance'],
  },
  {
    year: 2,
    label: 'YEAR TWO',
    heading: 'The Collaborative Film',
    subhead: 'Teams \u2014 Story under collaboration',
    format: [
      'Team projects \u2014 students form crews and work across disciplines',
      'Development: Fall term (story development, pre-production)',
      'Production: Spring term',
      'Cameras: iPhone / DSLR',
      'Equipment: Small lighting package',
    ],
    description: [
      'Year 2 introduces the fundamental tension of filmmaking: other people. Students form cross-discipline teams in the fall, developing their projects through the story-first framework \u2014 defining the story\u2019s function, its audience effect, its obligations. In the spring, they make it.',
      'The cameras are still small. The lighting package is modest. The new variable is collaboration \u2014 learning to protect a story\u2019s intention while incorporating the contributions of a cinematographer, a sound recordist, an editor. Year 2 students leave with their first understanding of what it means to lead and follow in service of a shared story.',
    ],
    functions: ['performance', 'managing', 'ideation'],
  },
  {
    year: 3,
    label: 'YEAR THREE',
    heading: 'The Professional Film',
    subhead: 'Scale \u2014 Story under real production pressure',
    format: [
      'Team projects with expanded crew and equipment',
      'Development: Fall term',
      'Production: Late fall / early spring',
      'Cameras: Sony FX6 with professional lens packages',
      'Equipment: Grip truck, support vehicles, larger lighting and grip package',
    ],
    description: [
      'Year 3 is where the story meets professional production reality. The Sony FX6 is a serious camera. The grip truck and support vehicles introduce genuine logistical complexity. The crew is larger, the schedule is tighter, and the gap between what was planned and what is possible becomes a creative problem to solve in real time.',
      'This is the year students discover whether their story survives contact with a real production. The development process in the fall is rigorous precisely because the spring shoot will test every assumption. Managing Element Complexity is no longer an abstract story function \u2014 it is a daily practice of protecting what matters when everything is in motion.',
    ],
    functions: ['managing', 'vision', 'performance', 'sound'],
  },
  {
    year: 4,
    label: 'YEAR FOUR',
    heading: 'The Capstone Film',
    subhead: 'Full scale \u2014 Story at full accountability',
    format: [
      'Team projects at full professional scale',
      'Development: Fall term',
      'Production: Late fall / early spring',
      'Cameras: Large-format camera packages (cinema-grade)',
      'Equipment: Generator, soundstages, full grip/electric packages, grip truck, support vehicles',
    ],
    description: [
      'Year 4 is the full test. Large-format cameras. Soundstages. Generators. A grip and electric package that requires genuine expertise to deploy. The scale of the production is now indistinguishable from a professional independent film.',
      'But the standard has not changed. The question is still: does this serve the story? Does it do something to the audience? The capstone film is not a demonstration of technical proficiency \u2014 it is the proof that four years of story-first training produces filmmakers who can operate at scale without losing the thing that made them worth watching in Year 1.',
      'Year 4 also requires a full delivery package: a distribution pathway document, festival strategy, audience positioning, and deliverables list. The story is not finished until it reaches the people it was made for.',
    ],
    functions: ['ideation', 'performance', 'managing', 'vision', 'sound', 'history'],
  },
];

// Visual escalation: progressively deeper backgrounds and bolder borders
const YEAR_STYLES: { bg: string; borderWidth: number; borderColor: string; textColor: string; pColor: string; labelColor: string }[] = [
  { bg: 'var(--off-white)', borderWidth: 3, borderColor: 'var(--gold)', textColor: 'var(--navy)', pColor: 'var(--gray)', labelColor: 'var(--gold)' },
  { bg: 'var(--cream)', borderWidth: 4, borderColor: 'var(--gold)', textColor: 'var(--navy)', pColor: 'var(--gray)', labelColor: 'var(--gold)' },
  { bg: 'var(--navy-mid)', borderWidth: 5, borderColor: 'var(--gold-lt)', textColor: 'var(--white)', pColor: 'rgba(255,255,255,0.75)', labelColor: 'var(--gold-lt)' },
  { bg: 'var(--navy)', borderWidth: 6, borderColor: 'var(--gold)', textColor: 'var(--white)', pColor: 'rgba(255,255,255,0.75)', labelColor: 'var(--gold)' },
];

export default function Practicums() {
  return (
    <>
      {/* HERO */}
      <section className="section section--navy" style={{ paddingTop: 'calc(64px + var(--space-3xl))', textAlign: 'center' }}>
        <div className="container--narrow">
          <ScrollReveal>
            <p className="eyebrow eyebrow--light">STUDENT PRODUCTION</p>
            <h1 style={{ marginBottom: '1.25rem' }}>Making Films: The Four-Year Arc</h1>
            <p style={{
              fontFamily: 'var(--font-display)',
              fontStyle: 'italic',
              fontSize: '1.25rem',
              lineHeight: 1.6,
              maxWidth: '36em',
              margin: '0 auto',
              opacity: 0.9,
            }}>
              The story-first framework is built in the classroom. It's tested on set. Each year, the scale of the work grows &mdash; and so does the responsibility to make it matter.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* INTRO */}
      <section className="section section--cream">
        <div className="container--narrow">
          <ScrollReveal>
            <p>
              The practicum sequence is where the story-first framework becomes real. As students move from Year 1 to Year 4, the equipment gets larger, the teams get more complex, and the stakes get higher. But the standard remains constant: does the work serve the story? Does it do something to the audience?
            </p>
            <p>
              The escalation in production scale is not about access to better tools. It is about building the judgment, collaboration, and craft to use those tools in service of something that matters. A Year 4 film shot on a large-format camera package with a generator and soundstage is not better than a Year 1 iPhone film because of its equipment. It is better &mdash; or it should be &mdash; because the people making it have spent three years learning how to make every choice count.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* FOUR-YEAR TIMELINE */}
      <section className="section" style={{ paddingTop: 'var(--space-xl)' }}>
        <div className="container" style={{ maxWidth: 'var(--max-width-narrow)', margin: '0 auto' }}>
          {YEAR_CARDS.map((card, i) => {
            const style = YEAR_STYLES[i];
            return (
              <ScrollReveal key={card.year} delay={i * 0.1}>
                <div style={{
                  background: style.bg,
                  borderLeft: `${style.borderWidth}px solid ${style.borderColor}`,
                  padding: 'var(--space-xl) var(--space-xl)',
                  marginBottom: i < 3 ? 'var(--space-lg)' : 0,
                  position: 'relative',
                }}>
                  {/* Year label */}
                  <p style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.15em',
                    color: style.labelColor,
                    marginBottom: 'var(--space-sm)',
                  }}>
                    {card.label}
                  </p>

                  {/* Heading */}
                  <h2 style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                    fontWeight: 600,
                    color: style.textColor,
                    marginBottom: '0.25rem',
                  }}>
                    {card.heading}
                  </h2>

                  {/* Subhead */}
                  <p style={{
                    fontFamily: 'var(--font-display)',
                    fontStyle: 'italic',
                    fontSize: '1.125rem',
                    color: style.pColor,
                    marginBottom: 'var(--space-lg)',
                  }}>
                    {card.subhead}
                  </p>

                  {/* Production format */}
                  <div style={{
                    background: i >= 2 ? 'rgba(255,255,255,0.08)' : 'rgba(28,43,74,0.04)',
                    padding: 'var(--space-md) var(--space-lg)',
                    marginBottom: 'var(--space-lg)',
                    borderRadius: '2px',
                  }}>
                    <p style={{
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      color: style.labelColor,
                      marginBottom: 'var(--space-sm)',
                    }}>
                      Production Format
                    </p>
                    {card.format.map((line, j) => (
                      <p key={j} style={{
                        fontSize: '0.9rem',
                        color: style.pColor,
                        marginBottom: j < card.format.length - 1 ? '0.35rem' : 0,
                        lineHeight: 1.5,
                      }}>
                        {line}
                      </p>
                    ))}
                  </div>

                  {/* Description */}
                  {card.description.map((para, j) => (
                    <p key={j} style={{
                      fontSize: '1.0625rem',
                      lineHeight: 1.75,
                      color: style.pColor,
                      marginBottom: j < card.description.length - 1 ? '1.25rem' : 'var(--space-md)',
                    }}>
                      {para}
                    </p>
                  ))}

                  {/* Function badges */}
                  <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginTop: 'var(--space-sm)' }}>
                    {card.functions.map(fnId => {
                      const fn = STORY_FUNCTIONS.find(f => f.id === fnId);
                      return fn ? (
                        <span
                          key={fnId}
                          className="fn-badge"
                          style={{
                            background: fn.color,
                            fontSize: '0.7rem',
                            padding: '0.2rem 0.6rem',
                          }}
                        >
                          {fn.name}
                        </span>
                      ) : null;
                    })}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      {/* CLOSING */}
      <section className="section section--navy" style={{ textAlign: 'center', paddingTop: 'var(--space-4xl)', paddingBottom: 'var(--space-4xl)' }}>
        <div className="container--narrow">
          <ScrollReveal>
            <p className="eyebrow eyebrow--light">THE CONSTANT ACROSS ALL FOUR YEARS</p>
            <h2 style={{ marginBottom: 'var(--space-lg)' }}>The Standard That Doesn't Change</h2>
            <p style={{ maxWidth: '38em', margin: '0 auto 1.25rem' }}>
              The equipment changes. The teams grow. The stakes increase. But the standard that runs through every year of the practicum sequence is the same one that runs through every course in the story-first curriculum:
            </p>
            <blockquote style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.25rem, 2.5vw, 1.625rem)',
              lineHeight: 1.5,
              fontStyle: 'italic',
              maxWidth: '36rem',
              margin: '0 auto var(--space-xl)',
              border: 'none',
              padding: 0,
            }}>
              Does this work strengthen the audience's experience of the story?
            </blockquote>
            <p style={{ maxWidth: '38em', margin: '0 auto var(--space-xl)' }}>
              That question doesn't get easier with a bigger camera. If anything, it gets harder &mdash; because the larger the production, the more ways there are to lose the story in the logistics. The practicum sequence is designed to build the judgment to find it again.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Link to="/framework" className="btn btn--primary">
                Explore the Framework &rarr;
              </Link>
              <Link to="/disciplines" className="btn btn--ghost">
                Find Your Discipline &rarr;
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
