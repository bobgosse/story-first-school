import { ScrollReveal } from '../components/ScrollReveal';

export default function HowItWorks() {
  return (
    <>
      {/* HERO */}
      <section className="section section--navy" style={{ paddingTop: 'calc(64px + var(--space-3xl))' }}>
        <div className="container--narrow" style={{ textAlign: 'center' }}>
          <ScrollReveal>
            <p className="eyebrow eyebrow--light">Pedagogy &amp; Pipeline</p>
            <h1>How It Works</h1>
            <p style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.25rem',
              fontStyle: 'italic',
              opacity: 0.85,
              marginTop: 'var(--space-md)',
            }}>
              The pedagogical logic behind the Story-First model — and the production pipeline that makes it real.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION 1: THE PEDAGOGICAL FOUNDATION */}
      <section className="section section--cream">
        <div className="container--narrow">
          <ScrollReveal>
            <p className="eyebrow">The Argument</p>
            <h2>The Pedagogical Foundation</h2>
          </ScrollReveal>

          <ScrollReveal delay={0.05}>
            <p>At its core, filmmaking is the practice of encoding meaning into moving images and sound.</p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p>Every decision a filmmaker makes — performance, camera movement, editing rhythm, sound design, lighting, production design, the timing and movement of an animated character — is an attempt to shape how an audience interprets what they are seeing and hearing. The purpose of the medium is not simply to produce images, but to communicate experience, emotion, and ideas through time-based audiovisual storytelling.</p>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <p>Because cinema is inherently collaborative, this encoding of meaning does not occur through the work of a single artist. It emerges through the coordinated efforts of many disciplines, each contributing their expertise toward the realization of a shared narrative intention.</p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p>Directors, producers, cinematographers, editors, animators, designers, and sound artists are not merely completing technical tasks; they are interpreting and translating story into the language of their craft.</p>
          </ScrollReveal>

          <ScrollReveal delay={0.25}>
            <p>The result is a complex creative system in which meaning is constructed collectively through hundreds — in the case of animation, thousands — of decisions made under real-world constraints.</p>
          </ScrollReveal>
        </div>
      </section>

      {/* PULL QUOTE */}
      <section className="section section--off-white" style={{ padding: 'var(--space-2xl) 0' }}>
        <div className="container--narrow">
          <ScrollReveal>
            <blockquote style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.5rem, 3vw, 2rem)',
              fontStyle: 'italic',
              fontWeight: 500,
              color: 'var(--navy)',
              borderLeft: '4px solid var(--gold)',
              paddingLeft: 'var(--space-xl)',
              margin: '0',
              lineHeight: 1.4,
            }}>
              We are not a trade school. We are an arts conservatory — whose purpose is to cultivate artists capable of using the medium of film to tell meaningful stories.
            </blockquote>
          </ScrollReveal>
        </div>
      </section>

      {/* CREATIVE PROBLEM-SOLVING */}
      <section className="section section--cream">
        <div className="container--narrow">
          <ScrollReveal>
            <h3 style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.5rem',
              color: 'var(--navy)',
              marginBottom: 'var(--space-lg)',
            }}>
              Filmmaking as Creative Problem-Solving
            </h3>
          </ScrollReveal>

          <ScrollReveal delay={0.05}>
            <p>All filmmaking occurs within constraints: time, labor, available talent, budget, equipment, locations, weather, and institutional resources. Professional filmmakers learn to transform these constraints into creative decisions. The craft of filmmaking is therefore not simply technical proficiency, but the ability to navigate limitations while preserving narrative intention.</p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p>Rather than treating these limitations as obstacles, the Story-First model recognizes them as essential learning conditions that prepare students for the realities of professional filmmaking — whether they are composing a live-action scene or constructing an animated world frame by frame.</p>
          </ScrollReveal>

          <ScrollReveal>
            <h3 style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.5rem',
              color: 'var(--navy)',
              marginTop: 'var(--space-2xl)',
              marginBottom: 'var(--space-lg)',
            }}>
              What the Curriculum Must Teach
            </h3>
          </ScrollReveal>

          <ScrollReveal delay={0.05}>
            <p>Technical instruction alone cannot prepare students to work as filmmakers in the contemporary media environment. What students must develop is the ability to interpret narrative intention, collaborate across disciplines, make creative decisions under constraint, and translate story into audiovisual form. These are the skills that define professional filmmakers — in every discipline, including Animation.</p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p>Traditional production curricula often divide filmmaking into discrete stages — development, production, post-production — occurring in separate semesters or disconnected courses. While administratively convenient, this structure fragments the learning process. In animation, this problem is especially acute: the relationship between story intent and visual execution is total. Every frame that exists was chosen. There is no separation between the creative decision and its execution.</p>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <p>In professional filmmaking, these phases are inseparable. Teaching filmmaking effectively therefore requires a structure that allows students to experience the full lifecycle of a project as an integrated process.</p>
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION 2: BRIDGE — FROM PEDAGOGY TO PRACTICE */}
      <section className="section section--off-white" style={{ padding: 'var(--space-2xl) 0' }}>
        <div className="container--narrow">
          <ScrollReveal>
            <div style={{
              borderLeft: '4px solid var(--gold)',
              background: 'rgba(28, 43, 74, 0.03)',
              padding: 'var(--space-xl) var(--space-xl)',
              borderRadius: '0 8px 8px 0',
            }}>
              <p className="eyebrow" style={{ marginBottom: 'var(--space-md)' }}>From Pedagogy to Practice</p>

              {/* Opening pull quote */}
              <blockquote style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.15rem, 2.5vw, 1.4rem)',
                fontStyle: 'italic',
                fontWeight: 500,
                color: 'var(--navy)',
                margin: '0 0 var(--space-lg) 0',
                lineHeight: 1.5,
              }}>
                The diagrams that follow are not simply schedules. They represent a pedagogical framework in which story, collaboration, and creative problem-solving remain at the center of the filmmaking experience.
              </blockquote>

              <p style={{ marginBottom: 'var(--space-md)' }}>
                Rather than separating development, production, and post-production into isolated academic exercises, the Story-First Production Pipeline allows projects to move through the full lifecycle of filmmaking in a continuous and coherent sequence. Students encounter storytelling, collaboration, and constraint not as abstract concepts, but as lived experiences that unfold across the duration of a project.
              </p>

              <p style={{ marginBottom: 'var(--space-md)' }}>
                Within this system, story functions as the organizing principle for all disciplines. Every department — including Animation — participates in the same fundamental question: How do we translate narrative intention into a meaningful audiovisual experience for the audience?
              </p>

              <p style={{ marginBottom: 'var(--space-md)' }}>
                Each discipline answers that question in the language of its craft. Directors explore performance and visual language. Cinematographers translate emotional tone into lighting and camera movement. Editors shape rhythm and narrative clarity. Production designers create environments that support the story world. Sound artists build emotional atmosphere through auditory storytelling. <strong>Animators author every element of the image deliberately — movement, timing, expression, light. Nothing in an animated film exists by accident. This makes animation the purest expression of the story-first principle: every frame is a story decision.</strong> Producers coordinate the practical conditions for all of these creative decisions to occur.
              </p>

              <p style={{ marginBottom: 'var(--space-lg)' }}>
                Year 3 and Year 4 projects move through development, preparation, production, and post-production in a staggered pipeline that mirrors the rhythms of professional filmmaking while remaining aligned with the educational priorities of the conservatory.
              </p>

              {/* Closing pull quote */}
              <blockquote style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.15rem, 2.5vw, 1.4rem)',
                fontStyle: 'italic',
                fontWeight: 500,
                color: 'var(--navy)',
                margin: 0,
                lineHeight: 1.5,
              }}>
                Animation is not a special case within this framework. It is the case that makes the argument clearest. When every frame is a choice, story must come first. Always.
              </blockquote>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION 3: PIPELINE DIAGRAMS */}
      <section className="section section--cream">
        <div className="container--narrow">
          <ScrollReveal>
            <p className="eyebrow">The Evidence</p>
            <h2>The Story-First Production Pipeline</h2>
          </ScrollReveal>

          {/* Year 3 */}
          <ScrollReveal delay={0.1}>
            <div style={{
              background: 'var(--white)',
              border: '1px solid var(--gray-lt)',
              borderRadius: 8,
              overflow: 'hidden',
              marginBottom: 'var(--space-2xl)',
              boxShadow: '0 2px 8px rgba(28, 43, 74, 0.06)',
            }}>
              <img
                src="/YEAR_3_Story_First_Proposal_v1.png"
                alt="Year 3 Story-First Production Pipeline diagram showing the fall production timeline from ideation through post-production"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                }}
              />
              <div style={{
                padding: 'var(--space-lg) var(--space-xl)',
                borderTop: '1px solid var(--gray-lt)',
              }}>
                <p style={{
                  fontSize: '0.9rem',
                  color: 'var(--gray)',
                  margin: 0,
                  lineHeight: 1.6,
                }}>
                  <strong style={{ color: 'var(--navy)' }}>Year 3 Pipeline — Fall Production.</strong>{' '}
                  Year 3 students move from ideation and script development through preproduction and principal photography in Fall semester. Post-production (editorial, sound, color, and delivery) continues into Spring. Films are location-based; crew size ranges from 22–28.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Year 4 */}
          <ScrollReveal delay={0.15}>
            <div style={{
              background: 'var(--white)',
              border: '1px solid var(--gray-lt)',
              borderRadius: 8,
              overflow: 'hidden',
              boxShadow: '0 2px 8px rgba(28, 43, 74, 0.06)',
            }}>
              <img
                src="/YEAR_4_Story_First_Proposalv1.png"
                alt="Year 4 Story-First Production Pipeline diagram showing the spring production timeline with extended development"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                }}
              />
              <div style={{
                padding: 'var(--space-lg) var(--space-xl)',
                borderTop: '1px solid var(--gray-lt)',
              }}>
                <p style={{
                  fontSize: '0.9rem',
                  color: 'var(--gray)',
                  margin: 0,
                  lineHeight: 1.6,
                }}>
                  <strong style={{ color: 'var(--navy)' }}>Year 4 Pipeline — Spring Production.</strong>{' '}
                  Year 4 students develop projects in Fall semester and move into principal photography in Spring. The longer development arc allows for more ambitious projects, including some stage builds. Crew size ranges from 28–40.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
