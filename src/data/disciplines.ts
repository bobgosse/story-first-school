export interface Discipline {
  slug: string;
  name: string;
  primaryFunction: string;
  functionColor: string;
  mission: string;
  whatItDoes: string;
  intersections: string;
  rebuildAsks: string;
  centralQuestion: string;
}

export const STORY_FUNCTIONS = [
  { id: 'ideation', name: 'Ideation & Composition', color: '#1C4E80', description: 'Generating, shaping, and structuring meaning. Story design, theme, character, structure, rhythm, audience contract.' },
  { id: 'performance', name: 'Performance & Realization', color: '#2E5496', description: 'Embodiment of story through staging, directing, acting performance, blocking, and on-set realization of intention.' },
  { id: 'managing', name: 'Managing Element Complexity', color: '#0D6B52', description: 'Leadership, logistics, constraints, coordination, budgets/schedules, risk management, workflow — protecting story under pressure.' },
  { id: 'vision', name: 'Vision', color: '#6B3FA0', description: 'Visual language: cinematography, production design, animation, editorial time-shaping, composition in image and motion.' },
  { id: 'sound', name: 'Sound', color: '#A04A1C', description: 'Sonic storytelling: dialogue capture, sound design, music, mix — guiding attention, emotion, meaning.' },
  { id: 'history', name: 'History', color: '#7A1C3C', description: 'Cinema literacy and context: aesthetic lineages, cultural meaning, technological shifts, industry evolution, ethics, canon and critique.' },
];

export const DISCIPLINES: Discipline[] = [
  {
    slug: 'screenwriting',
    name: 'Screenwriting',
    primaryFunction: 'Ideation & Composition',
    functionColor: '#1C4E80',
    mission: 'The screenwriter is the first architect of the audience\'s experience — designing the story\'s structure, characters, theme, and emotional promise before a single frame is shot.',
    whatItDoes: 'Screenwriting trains the fundamental act of story selection and design: choosing which story is worth telling, for whom, to what effect. In a world of content abundance, this is not a technical skill. It is a form of judgment. The screenplay establishes the audience contract — what we are promising the viewer, and what must be delivered.',
    intersections: 'Strong secondary in Performance & Realization (how dialogue lives in the body), History (genre literacy, cultural context), and Ideation shared with every upstream collaborator.',
    rebuildAsks: 'Every screenwriting course must articulate its story obligation — what specific capacity for story design, diagnosis, or audience effect it builds. Assignments must be assessed not on format compliance but on whether the story works: does it have a thesis? Does it earn its ending? Does it fulfill its audience contract?',
    centralQuestion: 'What story is worth telling, and what must it do to the person watching it?',
  },
  {
    slug: 'directing',
    name: 'Directing',
    primaryFunction: 'Performance & Realization',
    functionColor: '#2E5496',
    mission: 'The director is the story\'s advocate on set — the person responsible for ensuring that every human and material element serves the audience\'s experience.',
    whatItDoes: 'Directing trains the capacity to hold the story\'s intention while managing the chaos of production. It is the discipline most responsible for what happens in the gap between the page and the screen — how a scene actually lives, breathes, and lands. The director is the story\'s last line of defense.',
    intersections: 'All six: Ideation & Composition (the director must understand story design), Managing Element Complexity (leading a production under constraint), Vision (visual storytelling and editorial choices), Sound (sonic choices shape how scenes land), and History (understanding the traditions and cultural weight of directorial choices). Directing is the most cross-functional discipline in the school.',
    rebuildAsks: 'Directing courses must make story function explicit in every exercise. Scene work is not just blocking and performance — it is the practice of realizing a specific audience effect. Students must be able to articulate what a scene needs to do before they direct it.',
    centralQuestion: 'What needs to happen in the audience during this scene, and what will make that happen?',
  },
  {
    slug: 'producing',
    name: 'Producing',
    primaryFunction: 'Managing Element Complexity',
    functionColor: '#0D6B52',
    mission: 'The producer is the person who makes it possible for the story to exist — protecting the creative work through the pressure of logistics, money, time, and collaboration.',
    whatItDoes: 'Producing trains the discipline of protecting story under constraint. Every budget decision, schedule choice, and crew negotiation is a story decision in disguise. The producer who doesn\'t understand story cannot make good production decisions — they can only make cheap ones.',
    intersections: 'All six: Ideation & Composition (the producer must understand story design to protect it), Performance & Realization (managing the conditions under which performance happens), Vision (visual and editorial decisions are budget decisions), Sound (sonic storytelling requires logistical protection), and History (understanding the industry and cultural context the work enters). Producing is the most institutionally cross-functional discipline because it must communicate fluently with every other craft.',
    rebuildAsks: 'Producing courses must reframe every logistical skill as a story skill. A budget is not a spreadsheet — it is a set of choices about what the story gets. A schedule is not a calendar — it is a theory about what the work needs. The rebuild asks producing students to articulate the story logic behind every production decision.',
    centralQuestion: 'What does this story need to exist, and how do we protect it?',
  },
  {
    slug: 'cinematography',
    name: 'Cinematography',
    primaryFunction: 'Vision',
    functionColor: '#6B3FA0',
    mission: 'The cinematographer translates story into light, frame, and movement — making visual choices that carry meaning, not just beauty.',
    whatItDoes: 'Cinematography trains the capacity to make images that do something to the viewer — that guide attention, create emotional states, reveal character, and carry theme. In an era when AI can generate photorealistic images on demand, the cinematographer\'s value is not technical. It is the judgment to make visual choices that serve the story\'s specific human truth.',
    intersections: 'Vision (primary), Performance & Realization (the relationship between camera and performance), Ideation & Composition (visual storytelling is a form of composition), Sound (image and sound create meaning together), History (understanding visual traditions and their cultural weight).',
    rebuildAsks: 'Cinematography courses must make the story function of every visual choice explicit. Students must be able to articulate not just what a shot looks like but what it does — what it asks the viewer to feel, believe, or understand.',
    centralQuestion: 'What does this image need to do to the person watching it?',
  },
  {
    slug: 'editing',
    name: 'Editing',
    primaryFunction: 'Vision & Sound',
    functionColor: '#6B3FA0',
    mission: 'The editor is the final author of the story\'s rhythm, structure, and emotional arc — the person who shapes the viewer\'s experience of time through the inseparable partnership of image and sound.',
    whatItDoes: 'Editing trains the understanding that story happens in time, and that the manipulation of time is the manipulation of meaning. Every cut is a choice about what the audience feels, what they know, and when they know it — and that choice is always made in concert with sound. Picture and sound edit are not separate disciplines; they are one act of storytelling. Editing is not assembly — it is the final act of story construction.',
    intersections: 'Vision & Sound (co-primary — picture and sound edit are inseparable), Ideation & Composition (structure and rhythm), Performance & Realization (the editor shapes how performances land), History (understanding editorial traditions and evolving audience expectations).',
    rebuildAsks: 'Editing courses must make the story function of every cut explicit. Students must move beyond technical proficiency to story diagnosis — the ability to identify why a sequence isn\'t working and revise it based on what the audience needs to experience.',
    centralQuestion: 'What does the audience need to feel right now, and what edit choice produces that?',
  },
  {
    slug: 'production-design',
    name: 'Production Design',
    primaryFunction: 'Vision',
    functionColor: '#6B3FA0',
    mission: 'The production designer builds the world the story inhabits — making every spatial and material choice in service of the story\'s emotional and thematic truth.',
    whatItDoes: 'Production design trains the capacity to make physical space carry meaning. The world a character lives in tells us who they are before they speak. Color, texture, scale, and visual motif are not decoration — they are story. In an era of digital environments, the production designer\'s value is the judgment to make physical and spatial choices that a prompt cannot supply: the specific human truth of a place.',
    intersections: 'Vision (primary), Ideation & Composition (world-building is a form of story design), Performance & Realization (the set is the actor\'s instrument), History (architectural and design traditions that carry cultural meaning).',
    rebuildAsks: 'Production design courses must make the story function of every design decision explicit. A set is not a backdrop — it is an argument about who lives there and why it matters. Students must be able to articulate the story logic behind every material choice.',
    centralQuestion: 'What does this space say about the people in it and the story they\'re living?',
  },
  {
    slug: 'animation',
    name: 'Animation',
    primaryFunction: 'Vision',
    functionColor: '#6B3FA0',
    mission: 'The animator controls every element of the visual world — and therefore carries total responsibility for how the story is seen and felt.',
    whatItDoes: 'Animation trains the capacity to make meaning through movement, form, and visual design with complete intentionality — nothing in a frame is accidental. This makes animation both the purest expression of visual storytelling and the most demanding: every choice is a story choice, always.',
    intersections: 'Vision (primary), Ideation & Composition (animation is often the writer and director as well as the image-maker), Performance & Realization (animated performance is crafted, not captured), Managing Element Complexity (animated production has its own complex pipeline), History (the lineage of animated storytelling from Méliès to Miyazaki).',
    rebuildAsks: 'Animation courses must make explicit that every visual decision — character design, movement, color, timing — is a story decision. The rebuild asks animation students to articulate the story function of their visual choices, not just their technical execution.',
    centralQuestion: 'What does the way this moves, looks, and exists tell the audience about the world they\'re in and the story they\'re watching?',
  },
  {
    slug: 'cinema-studies',
    name: 'Cinema Studies',
    primaryFunction: 'History',
    functionColor: '#7A1C3C',
    mission: 'Cinema Studies trains the literacy to understand where films come from, what they mean, and what they do — the critical and historical foundation that makes all other story-making more conscious and accountable.',
    whatItDoes: 'History trains the capacity to see a film as a cultural act — to understand its aesthetic lineage, its ideological implications, its relationship to the tradition it inherits and the world it enters. This is not a passive skill. It is the foundation of ethical story-making and the antidote to narrative naivety.',
    intersections: 'History (primary), but genuinely foundational to all six — every other discipline requires historical and critical literacy to practice responsibly.',
    rebuildAsks: 'Cinema Studies courses must make explicit their story function: what specific capacity for critical literacy, historical understanding, or ethical analysis they build, and how that capacity serves a filmmaker\'s story judgment. The rebuild asks Cinema Studies to articulate its role not as an academic appendage but as the intellectual spine of the curriculum.',
    centralQuestion: 'What is this film doing in the world, where did it come from, and what are we accountable for when we make work like it?',
  },
];
