import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ScrollReveal } from '../components/ScrollReveal';

interface FAQItem {
  question: string;
  answer: string[];
}

const FAQ_DATA: FAQItem[] = [
  {
    question: 'Is this just relabeling? Are we actually changing anything?',
    answer: [
      'This is not a rebrand. The proposal asks every discipline to rebuild its syllabus around a single, explicit obligation: what does this course do for story? That is not a tagline. It is a structural requirement.',
      'Every course in the school would be required to produce a story-function map \u2014 a clear statement of which of the six story functions it builds, how it builds them, and how students demonstrate that capacity. Courses that cannot articulate their story obligation will be redesigned or retired.',
      'This affects assignment design, critique language, assessment rubrics, and cross-disciplinary collaboration. It is not cosmetic.',
    ],
  },
  {
    question: "Does 'story-first' mean my discipline gets flattened into a service role?",
    answer: [
      'No. The opposite. "Story-first" means every discipline gains a clearer, more defensible account of its own value. When a cinematography course can articulate exactly what its visual training does for story \u2014 not just "makes pretty images" but "builds the visual judgment to guide audience attention and create emotional states" \u2014 that discipline becomes harder to cut, harder to outsource, and harder to replace with a tool.',
      'The framework does not flatten disciplines into a generic "storytelling" mush. It asks each discipline to make its specific contribution to story visible and accountable. That\u2019s an elevation, not a reduction.',
    ],
  },
  {
    question: 'Is this a response to AI? Is the school panicking?',
    answer: [
      'The proposal is not a panic response to AI. It is an argument grounded in two economic principles \u2014 the Jevons Paradox and Baumol\u2019s Cost Disease \u2014 that have predicted the behavior of technology-disrupted industries for over 150 years.',
      'When tools reduce the cost of producing content, total content production explodes (Jevons). The things that cannot be automated \u2014 the human judgment calls at the center of storytelling \u2014 become relatively more valuable, not less (Baumol). A school organized around those irreducible human capacities is the most strategically sound thing we could build.',
      'AI is not the cause of this proposal. It is the most recent confirmation that it\u2019s necessary.',
    ],
  },
  {
    question: 'What is the actual workload ask?',
    answer: [
      'The rebuild asks four things of each faculty member:',
      '1. Story-function map: A one-page document identifying which of the six story functions your course builds and how.',
      '2. Assessment alignment: Revise at least one major assignment so that its rubric explicitly evaluates story contribution, not just technical execution.',
      '3. Cross-functional collaboration: Identify one point in your course where students work with a student or faculty member from a different discipline on a shared story problem.',
      '4. Shared-language adoption: Use the six story functions as a common vocabulary in critiques, reviews, and advising.',
      'This is not a wholesale course redesign. It is a focused, structured revision that makes explicit what many faculty are already doing implicitly.',
    ],
  },
  {
    question: "What happens to courses that don't fit neatly into a story function?",
    answer: [
      'Every course fits. The six functions \u2014 Ideation & Composition, Performance & Realization, Managing Element Complexity, Vision, Sound, and History \u2014 are comprehensive enough to cover every aspect of filmmaking practice. A course in color theory lives in Vision. A course in entertainment law lives in Managing Element Complexity. A course in documentary ethics lives in History.',
      'The story-function framework is not a filter that excludes courses. It is a diagnostic tool that helps courses articulate their purpose. If a course genuinely cannot identify which story function it serves, that\u2019s important information \u2014 it means the course may need to be redesigned to have a clearer purpose, or it may reveal a gap in the framework that needs to be addressed.',
    ],
  },
  {
    question: 'Will this affect hiring and tenure criteria?',
    answer: [
      'That is a separate conversation, and one that should be had with faculty governance, not imposed by a curriculum proposal. The framework does not prescribe personnel decisions.',
      'What it does provide is a language for evaluating teaching effectiveness that goes beyond student satisfaction surveys: Is this course building the story capacity it claims to build? Are students demonstrating that capacity? That language could inform hiring and review conversations, but only if the faculty decide it should.',
    ],
  },
  {
    question: "I've seen initiatives like this before. They produce documents and nothing changes. Why is this different?",
    answer: [
      'Fair question. Most curriculum reform initiatives fail because they are aspirational rather than structural. They produce mission statements and working groups but don\u2019t change what actually happens in a classroom.',
      'This proposal is different because it has a concrete, verifiable deliverable: the story-function map. Every course either has one or it doesn\u2019t. Every assignment either evaluates story contribution or it doesn\u2019t. Every discipline either participates in cross-functional collaboration or it doesn\u2019t. These are binary, auditable outcomes.',
      'The framework also has a built-in accountability mechanism: if the school adopts it, every course review and program assessment will use the six story functions as its evaluative vocabulary. That means the framework doesn\u2019t live in a binder. It lives in the actual assessment infrastructure of the school.',
    ],
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      {/* HERO */}
      <section className="section section--navy" style={{ paddingTop: 'calc(64px + var(--space-3xl))', textAlign: 'center' }}>
        <div className="container--narrow">
          <ScrollReveal>
            <p className="eyebrow eyebrow--light">FACULTY FAQ</p>
            <h1 style={{ marginBottom: '1.25rem' }}>Real Questions, Direct Answers</h1>
            <p style={{
              fontFamily: 'var(--font-display)',
              fontStyle: 'italic',
              fontSize: '1.25rem',
              lineHeight: 1.6,
              maxWidth: '36em',
              margin: '0 auto',
              opacity: 0.9,
            }}>
              The questions faculty are likely to ask &mdash; answered without hedging.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ ITEMS */}
      <section className="section section--cream">
        <div className="container--narrow">
          {FAQ_DATA.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <ScrollReveal key={i} delay={i * 0.05}>
                <div style={{
                  marginBottom: 'var(--space-md)',
                  background: 'var(--white)',
                  border: '1px solid var(--gray-lt)',
                  borderLeft: isOpen ? '4px solid var(--gold)' : '4px solid transparent',
                  transition: 'border-color 0.2s ease',
                }}>
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    style={{
                      width: '100%',
                      textAlign: 'left',
                      padding: 'var(--space-lg)',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      gap: 'var(--space-md)',
                    }}
                  >
                    <h3 style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.25rem',
                      fontWeight: 500,
                      color: 'var(--navy)',
                      lineHeight: 1.4,
                      margin: 0,
                    }}>
                      {item.question}
                    </h3>
                    <span style={{
                      fontSize: '1.5rem',
                      color: isOpen ? 'var(--gold)' : 'var(--gray)',
                      transition: 'all 0.2s',
                      transform: isOpen ? 'rotate(45deg)' : 'rotate(0)',
                      flexShrink: 0,
                      lineHeight: 1,
                    }}>
                      +
                    </span>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        style={{ overflow: 'hidden' }}
                      >
                        <div style={{
                          padding: '0 var(--space-lg) var(--space-lg)',
                        }}>
                          {item.answer.map((paragraph, j) => (
                            <p key={j} style={{
                              fontSize: '1rem',
                              lineHeight: 1.75,
                              marginBottom: j < item.answer.length - 1 ? '1rem' : 0,
                            }}>
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </section>
    </>
  );
}
