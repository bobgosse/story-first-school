import { Link } from 'react-router-dom';
import { ScrollReveal } from '../components/ScrollReveal';

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section
        className="section section--navy"
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          paddingTop: 64,
        }}
      >
        <div className="container--narrow">
          <ScrollReveal>
            <p className="eyebrow eyebrow--light" style={{ letterSpacing: '0.15em', marginBottom: '1.5rem' }}>
              A PROPOSAL FOR THE UNCSA SCHOOL OF FILMMAKING
            </p>
            <h1 style={{ marginBottom: '1.25rem' }}>
              The World Changed. Story Didn't.
            </h1>
            <p style={{
              fontFamily: 'var(--font-display)',
              fontStyle: 'italic',
              fontSize: '1.65rem',
              lineHeight: 1.6,
              maxWidth: '38em',
              margin: '0 auto 3rem',
              opacity: 0.9,
            }}>
              A case for reimagining our UNCSA School of Filmmaking education around what has always mattered most.
            </p>
            <div style={{ marginTop: '2rem', animation: 'bounce 2s infinite' }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.6 }}>
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* WHAT'S ACTUALLY HAPPENING */}
      <section className="section section--cream">
        <div className="container--narrow">
          <ScrollReveal>
            <p className="eyebrow">THE LANDSCAPE</p>
            <h2>What's Actually Happening</h2>
            <p>
              The industry these students are entering is structurally different from the one we trained for.
            </p>
            <p>
              In 2023, the WGA and SAG-AFTRA strikes brought Hollywood to a halt &mdash; and the central issue wasn't pay. It was AI. Studios were negotiating the right to scan an actor's likeness for a single day's pay and use it forever. Writers were being asked to "clean up" AI-generated scripts for minimum wage. These weren't hypotheticals. They were contract proposals.
            </p>
            <p>
              Streaming platforms now release more original content in a single year than the entire Hollywood studio system released in the 1980s. Netflix alone has released over 1,500 original titles since 2013. The volume of moving-image content produced globally has increased by orders of magnitude in the last decade &mdash; and is accelerating. Generative AI tools can now produce rough cuts, temp scores, sound design beds, and photorealistic visual effects at a fraction of their previous cost.
            </p>
            <p>
              The midbudget film &mdash; the $15&ndash;40M drama, the character study, the mid-tier genre film &mdash; has nearly disappeared from studio slates. Streaming economics pushed production toward massive tentpoles at one end and cheap content at scale at the other. Below-the-line employment has declined. Writers' rooms have shrunk to minimum staffing. Entry-level positions that once served as the industry's training pipeline have contracted.
            </p>
            <p>This is the world our graduates are entering.</p>
          </ScrollReveal>
        </div>
      </section>

      {/* JEVONS PARADOX */}
      <section className="section section--off-white">
        <div className="container--narrow">
          <ScrollReveal>
            <p className="eyebrow">THE FIRST FORCE</p>
            <h2>When Something Gets Cheaper, There's More of It &mdash; Not Less.</h2>
            <p>
              In 1865, the economist William Stanley Jevons observed something counterintuitive: when James Watt's steam engine made coal more efficient, coal consumption didn't decrease. It increased &mdash; dramatically. Efficiency didn't reduce demand. It unlocked it.
            </p>
            <p>
              This pattern &mdash; now called the Jevons Paradox &mdash; has repeated across every major technology shift. When the cost of producing something drops, total production explodes. The thing that was once scarce becomes abundant. And the things that were once bundled with it &mdash; taste, judgment, meaning &mdash; become the new scarcity.
            </p>
            <p>
              Generative AI is doing this to content production right now. The cost of producing passable images, dialogue, music, and even rough video is collapsing. What doesn't collapse is the ability to know what's worth making &mdash; and why.
            </p>
          </ScrollReveal>
        </div>
        <div className="container" style={{ marginTop: '3rem' }}>
          <ScrollReveal>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', maxWidth: '48rem', margin: '0 auto' }}>
              <div>
                <h4 style={{ color: '#999', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.85rem', marginBottom: '1.25rem', borderBottom: '1px solid #ddd', paddingBottom: '0.75rem' }}>
                  What Gets Cheaper
                </h4>
                {['Generating images', 'Rough cuts & assembly', 'Temp music & sound beds', 'Previz & storyboards', 'Delivery & formatting'].map(item => (
                  <p key={item} style={{ color: '#999', marginBottom: '0.75rem', fontSize: '1.05rem' }}>{item}</p>
                ))}
              </div>
              <div>
                <h4 style={{ color: 'var(--gold)', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.85rem', marginBottom: '1.25rem', borderBottom: '1px solid var(--gold)', paddingBottom: '0.75rem' }}>
                  What Becomes Scarce
                </h4>
                {['Choosing a story worth telling', 'Making it emotionally true', 'Earning audience trust', 'Sustaining coherence & meaning', 'Ethical judgment in release'].map(item => (
                  <p key={item} style={{ color: 'var(--gold)', marginBottom: '0.75rem', fontSize: '1.05rem', fontWeight: 500 }}>{item}</p>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* BAUMOL'S COST DISEASE */}
      <section className="section section--navy">
        <div className="container--narrow">
          <ScrollReveal>
            <p className="eyebrow eyebrow--light">THE SECOND FORCE</p>
            <h2>Some Work Cannot Be Made More Efficient Without Ceasing to Be What It Is.</h2>
            <p>
              In 1966, economists William Baumol and William Bowen identified a structural feature of the performing arts: a string quartet requires four musicians and twenty-eight minutes to perform a piece written in 1825. No amount of technological progress changes this. You cannot optimize a Beethoven quartet by removing the cellist.
            </p>
            <p>
              They called this "cost disease" &mdash; but it's really a description of irreducibility. Some work cannot be automated, sped up, or disaggregated without losing the thing that makes it valuable. The labor is the product.
            </p>
            <p>
              Filmmaking is full of this kind of work. A director sitting with an actor through a difficult scene. A cinematographer waiting for the right quality of light. A writer rewriting the third act for the eleventh time because the ending hasn't been earned yet. These are not inefficiencies. They are the discipline.
            </p>
            <p>
              The question for education is: which parts of filmmaking live in Baumol territory &mdash; and are we organized to teach them?
            </p>
          </ScrollReveal>
        </div>
        <div className="container" style={{ marginTop: '3rem' }}>
          <ScrollReveal>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0', maxWidth: '48rem', margin: '0 auto' }}>
              <div style={{ padding: '1rem 1.25rem', borderBottom: '1px solid rgba(255,255,255,0.15)' }}>
                <h4 style={{ color: 'rgba(255,255,255,0.45)', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.85rem', margin: 0 }}>Automatable</h4>
              </div>
              <div style={{ padding: '1rem 1.25rem', borderBottom: '1px solid rgba(255,255,255,0.15)' }}>
                <h4 style={{ color: 'var(--gold)', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.85rem', margin: 0 }}>Baumol Territory</h4>
              </div>
              {[
                ['Rough cut assembly', 'Emotional rhythm of a scene'],
                ['AI-generated coverage', 'A director pulling truth from an actor'],
                ['Prompt-based visual effects', "A cinematographer's visual judgment"],
                ['Algorithmic temp score', "A composer's emotional intelligence"],
                ['Format-compliant script', 'A screenplay that earns its ending'],
              ].map(([left, right], i) => (
                <div key={i} style={{ display: 'contents' }}>
                  <div style={{ padding: '0.85rem 1.25rem', color: 'rgba(255,255,255,0.4)', borderBottom: i < 4 ? '1px solid rgba(255,255,255,0.07)' : 'none', fontSize: '1.05rem' }}>{left}</div>
                  <div style={{ padding: '0.85rem 1.25rem', color: 'var(--gold)', fontWeight: 500, borderBottom: i < 4 ? '1px solid rgba(255,255,255,0.07)' : 'none', fontSize: '1.05rem' }}>{right}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* COMBINED THESIS */}
      <section className="section section--dark" style={{ paddingTop: 'var(--space-4xl)', paddingBottom: 'var(--space-4xl)', textAlign: 'center' }}>
        <div className="container--narrow">
          <ScrollReveal>
            <blockquote style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.5rem, 3vw, 2rem)',
              lineHeight: 1.45,
              fontStyle: 'italic',
              maxWidth: '42rem',
              margin: '0 auto 2.5rem',
              border: 'none',
              padding: 0,
            }}>
              As tools reduce the cost of producing content, the relative value of human storytelling judgment increases.
            </blockquote>
            <p style={{ maxWidth: '38em', margin: '0 auto 1.5rem' }}>
              This is not a philosophical hope. It is a strategic claim &mdash; one supported by economic theory, labor-market data, and the lived experience of working artists. If it is true, then a school organized around storytelling judgment is not romantic or nostalgic. It is the most practical thing we could build.
            </p>
            <p style={{ maxWidth: '38em', margin: '0 auto' }}>
              The pages that follow lay out a framework for doing exactly that &mdash; reorganizing the School of Filmmaking around a shared commitment to story, built on the disciplines that cannot be automated, and designed to produce graduates who can lead in the world as it actually is.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* THE PROPOSAL */}
      <section className="section section--cream">
        <div className="container--narrow">
          <ScrollReveal>
            <p className="eyebrow">THE PROPOSAL</p>
            <h2>A Curriculum Built Around What Can't Be Automated</h2>
            <p>
              We propose reorganizing the School of Filmmaking's curriculum around a single, unifying principle: story comes first. Every discipline &mdash; directing, cinematography, editing, sound design, producing, production design, screenwriting &mdash; is understood as a way of serving the story. Technical training remains rigorous, but it is embedded within a framework that foregrounds creative judgment, ethical reasoning, and collaborative storytelling.
            </p>
            <p>
              This is not a reduction of craft. It is an elevation of purpose. Students learn their tools more deeply because they understand what those tools are for. They graduate not as technicians waiting for instructions, but as artists capable of authorship &mdash; the one capacity that no algorithm can replicate.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '2.5rem' }}>
              <Link to="/framework" className="btn btn--primary">
                Explore the Framework &rarr;
              </Link>
              <Link to="/disciplines" className="btn btn--secondary" style={{ color: 'var(--navy)' }}>
                Find Your Discipline &rarr;
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
