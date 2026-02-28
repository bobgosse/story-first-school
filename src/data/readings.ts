export interface Reading {
  title: string;
  author: string;
  functions: string[];
  rationale: string;
}

export interface ReadingYear {
  year: number;
  theme: string;
  readings: Reading[];
}

export const READING_SPINE: ReadingYear[] = [
  {
    year: 1,
    theme: 'Story as the Human Operating System',
    readings: [
      { title: 'The Storytelling Animal', author: 'Jonathan Gottschall', functions: ['ideation', 'history'], rationale: 'Establishes why humans are hardwired for narrative — the evolutionary and neurological foundation of story.' },
      { title: 'Story', author: 'Robert McKee', functions: ['ideation', 'performance'], rationale: 'The canonical text on screen story structure, scene design, and the principles of dramatic writing.' },
      { title: 'In the Blink of an Eye', author: 'Walter Murch', functions: ['vision', 'ideation'], rationale: 'A master editor\'s meditation on why cuts work, how the brain processes cinematic time, and the craft of editorial storytelling.' },
      { title: 'On Directing Film', author: 'David Mamet', functions: ['performance', 'ideation'], rationale: 'A ruthlessly practical argument for visual storytelling through shot selection — story told through images, not dialogue.' },
      { title: 'Ways of Seeing', author: 'John Berger', functions: ['history', 'vision'], rationale: 'How images carry ideology: the foundational text for understanding that visual choices are never neutral.' },
      { title: 'The Hero with a Thousand Faces', author: 'Joseph Campbell', functions: ['ideation', 'history'], rationale: 'The mythological structures that recur across cultures — not as formula, but as evidence that story is a fundamental human technology.' },
      { title: 'Amusing Ourselves to Death: Public Discourse in the Age of Show Business', author: 'Neil Postman', functions: ['history', 'ideation'], rationale: 'Postman\'s argument that the medium shapes the message — that television restructured public thought around entertainment rather than reason — is foundational for filmmakers who need to understand what screen storytelling does to audiences beyond what they intend. Essential media literacy and a direct ancestor of the Jevons argument about content abundance.' },
    ],
  },
  {
    year: 2,
    theme: 'How Story Works on People',
    readings: [
      { title: 'Poetics', author: 'Aristotle (trans. Halliwell)', functions: ['ideation', 'history'], rationale: 'The origin point: catharsis, mimesis, and the first formal argument that dramatic structure is designed to produce specific effects on an audience.' },
      { title: 'Sculpting in Time', author: 'Andrei Tarkovsky', functions: ['vision', 'performance'], rationale: 'A filmmaker\'s philosophy of time as the essential material of cinema — how rhythm and duration create meaning.' },
      { title: 'Notes on the Cinematographer', author: 'Robert Bresson', functions: ['performance', 'vision'], rationale: 'Aphoristic insights on stripping performance to essence — the most rigorous argument for cinematic minimalism ever written.' },
      { title: 'Film Art: An Introduction (selected chapters)', author: 'Bordwell & Thompson', functions: ['vision', 'sound', 'history'], rationale: 'The standard analytical toolkit: how mise-en-scène, cinematography, editing, and sound function as storytelling systems.' },
      { title: 'The Conversations', author: 'Michael Ondaatje (with Walter Murch)', functions: ['vision', 'sound', 'managing'], rationale: 'How a great editor thinks about performance, sound, structure, and the emotional intelligence required to shape a film.' },
      { title: 'Hitchcock/Truffaut', author: 'François Truffaut', functions: ['performance', 'vision', 'ideation'], rationale: 'The master class in suspense, audience manipulation, and the craft of directing — told through direct conversation between two filmmakers.' },
    ],
  },
  {
    year: 3,
    theme: 'Story as a System',
    readings: [
      { title: 'Thinking in Systems', author: 'Donella Meadows', functions: ['managing', 'ideation'], rationale: 'Systems thinking applied to complex creative work — essential for understanding how production, story, and collaboration interact as interconnected systems.' },
      { title: 'The Producer\'s Business Handbook', author: 'Lee & Gillen', functions: ['managing'], rationale: 'The practical economics of independent filmmaking — budgets, financing, distribution, and the business logic that constrains and enables story.' },
      { title: 'Making Movies', author: 'Sidney Lumet', functions: ['performance', 'vision', 'managing'], rationale: 'A working director\'s account of every decision from script to final mix — the most practical book on how films are actually made.' },
      { title: 'Rebel Without a Crew', author: 'Robert Rodriguez', functions: ['managing', 'vision'], rationale: 'The canonical DIY filmmaking text — what happens when a single person takes responsibility for every element of production.' },
      { title: 'The Visual Story', author: 'Bruce Block', functions: ['vision'], rationale: 'How visual components — space, line, shape, color, movement, rhythm — function as storytelling tools with specific audience effects.' },
      { title: 'Sound Design (Film Technique)', author: 'David Sonnenschein', functions: ['sound', 'ideation'], rationale: 'How sound creates emotional and narrative meaning — the psychoacoustic principles behind sonic storytelling.' },
    ],
  },
  {
    year: 4,
    theme: 'Story Completed — Audience, Markets, Distribution',
    readings: [
      { title: 'Creativity, Inc.', author: 'Ed Catmull', functions: ['managing', 'ideation'], rationale: 'How Pixar built a culture of creative excellence — the organizational structures that protect story-making from institutional entropy.' },
      { title: 'The Big Picture', author: 'Ben Fritz', functions: ['history', 'managing'], rationale: 'How the economics of Hollywood shifted from star-driven dramas to franchise IP — the market forces reshaping what gets made and why.' },
      { title: 'Streaming, Sharing, Stealing', author: 'Smith & Telang', functions: ['managing', 'history'], rationale: 'The economics of digital distribution — how technology has restructured the relationship between creators, distributors, and audiences.' },
      { title: 'Weapons of Math Destruction', author: 'Cathy O\'Neil', functions: ['history', 'managing'], rationale: 'How algorithmic systems encode bias and shape outcomes — essential context for understanding AI\'s role in content creation and distribution.' },
      { title: 'The Death and Life of Great American Cities', author: 'Jane Jacobs', functions: ['history', 'ideation'], rationale: 'Not about film, but about how complex systems self-organize — a masterwork in seeing how environments shape human behavior, applicable to both production design and institutional design.' },
      { title: 'Camera Lucida', author: 'Roland Barthes', functions: ['history', 'vision'], rationale: 'The most personal and philosophical text on what images do to us — the punctum, the wound, the irreducible emotional power of the photographic image.' },
      { title: 'Nexus: A Brief History of Information Networks from the Stone Age to AI', author: 'Yuval Noah Harari', functions: ['history', 'managing', 'ideation'], rationale: 'Harari\'s examination of how information networks reshape society — culminating in AI — gives graduating students the broadest possible frame for understanding the world their work enters. Connects directly to the Jevons/Baumol economic argument and the ethical responsibilities of storytellers operating in a networked information environment.' },
    ],
  },
];
