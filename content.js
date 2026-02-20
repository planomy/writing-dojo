/**
 * THE WRITING DOJO - MASTER CONTENT DATABASE
 * Save this file as: content.js
 */

const DOJO_DATA = {
  unit1: {
    id: 1,
    title: "The Rooftop Ninja",
    yearLevel: "Year 4-6",
    themeColor: "indigo",
    wordBank: ["obsidian", "shingle", "ridge", "silhouette", "steel", "stealth", "vigilant"],
    
    // 1. VERB SHURIKEN
    shuriken: {
      targets: [
        { prefix: "The spy ", weak: "went", suffix: " across the clay tiles.", hints: ["sprinted", "crept", "leapt"] },
        { prefix: "He ", weak: "looked", suffix: " at the guards below.", hints: ["observed", "scanned", "spied"] },
        { prefix: "A warning bell ", weak: "rang", suffix: " in the distance.", hints: ["clanged", "echoed", "reverberated"] },
        { prefix: "She ", weak: "held", suffix: " her breath.", hints: ["stifled", "suppressed"] },
        { prefix: "The blade ", weak: "cut", suffix: " through the silk screen.", hints: ["sliced", "sheared"] }
      ],
      paragraph: "Hidden by the dark, the ninja {went} over the wall. He {looked} at the emperor's bedroom. Below, a guard {said} a joke to his partner. If he failed now, the mission {ended}."
    },

    // 2. DESCRIPTOR DAGGERS
    daggers: {
      targets: [
        { prefix: "The moon hung in the ", weak: "dark", suffix: " sky.", hints: ["ink-stained", "obsidian"] },
        { prefix: "He gripped the ", weak: "cold", suffix: " steel of his blade.", hints: ["ice-slicked", "numbing"] },
        { prefix: "The guards looked ", weak: "scary", suffix: " in their black armor.", hints: ["menacing", "imposing"] },
        { prefix: "A ", weak: "small", suffix: " sound came from the garden.", hints: ["faint", "barely-audible"] },
        { prefix: "The shadows were ", weak: "long", suffix: " against the walls.", hints: ["elongated", "stretching"] }
      ],
      paragraph: "A {big} shadow moved across the {red} rooftop. The air felt {cold} as the ninja prepared his {sharp} weapon. One mistake would lead to a {bad} fate."
    },

    // 3. FILTER ASSASSIN
    assassin: {
      targets: [
        { prefix: "He ", weak: "saw", suffix: " the stars reflecting on his sword.", target: "He saw" },
        { prefix: "I ", weak: "heard", suffix: " the breathing of the guard.", target: "I heard" },
        { prefix: "She ", weak: "felt", suffix: " the rough shingles.", target: "She felt" },
        { prefix: "The spy ", weak: "noticed", suffix: " a gap in security.", target: "noticed" },
        { prefix: "They ", weak: "watched", suffix: " the cloud cover the moon.", target: "watched" }
      ],
      paragraph: "{I saw} the castle gates open. {I heard} the thunder roar. {I felt} the rain hit my armor. {I realized} the battle was starting."
    },

    // 4. STEALTH STARTERS
    starters: [
      { type: "Adverb (-ly)", weak: "He moved silently across the roof." },
      { type: "Preposition (Location)", weak: "The sword was hidden beneath his cloak." },
      { type: "Participle (-ing)", weak: "He balanced on the ridge and waited." },
      { type: "Subordinate (Condition)", weak: "The tiles were slippery because it was raining." },
      { type: "Momentum (Instant)", weak: "The roof tiles gave way suddenly." }
    ],

    // 5. DOJO OF SENSES
    senses: [
      { type: "Sight", weak: "The sword looked bright." },
      { type: "Sound", weak: "It was very quiet." },
      { type: "Smell", weak: "The garden smelled nice." },
      { type: "Touch", weak: "The wood was rough." },
      { type: "Internal/Taste", weak: "He felt very scared." }
    ],

    // 6. LITERARY LOTUS
    lotus: [
      { title: "Comparisons", formula: "Simile/Metaphor.", description: "Direct imagery.", drills: ["The moon was a ball.", "He moved like a ghost."], paragraph: "The night was deep. <span id='p-target' class='bg-rose-100 px-2'>The moon was a glowing eye in the sky.</span>" },
      { title: "Asyndeton", formula: "No 'and'.", description: "Frantic speed.", drills: ["He ran and jumped and fell."], paragraph: "Panic erupted. <span id='p-target' class='bg-rose-100 px-2'>He sprinted, leapt, vanished into the dark.</span>" },
      { title: "Polysyndeton", formula: "Extra 'and'.", description: "Heavy details.", drills: ["Gold and silver and gems."], paragraph: "The weight hit him. <span id='p-target' class='bg-rose-100 px-2'>There was the gate and the guard and the climb.</span>" },
      { title: "Synecdoche", formula: "Part for Whole.", description: "Focal detail.", drills: ["He drew his steel."], paragraph: "War was coming. <span id='p-target' class='bg-rose-100 px-2'>Cold steel met cold steel in the moonlight.</span>" },
      { title: "Repetition", formula: "Focus theme.", description: "Dramatic impact.", drills: ["He ran and ran."], paragraph: "He was trapped. <span id='p-target' class='bg-rose-100 px-2'>Shadows in the hall, shadows in his mind.</span>" },
      { title: "Juxtaposition", formula: "Opposites.", description: "Highlight contrast.", drills: ["Hot and cold."], paragraph: "Jarring contrast. <span id='p-target' class='bg-rose-100 px-2'>Absolute silence broken by the thunder of his heart.</span>" },
      { title: "Personification", formula: "Human Action.", description: "Inanimate life.", drills: ["The wind blew."], paragraph: "Hostile night. <span id='p-target' class='bg-rose-100 px-2'>The wind screamed through the valley.</span>" },
      { title: "Alliteration", formula: "Sonic repetition.", description: "Rhythmic branding.", drills: ["Soft stones."], paragraph: "Atmospheric. <span id='p-target' class='bg-rose-100 px-2'>Soft shadows stretched across the stone.</span>" },
      { title: "Rule of 3", formula: "Pattern of 3.", description: "Completion.", drills: ["Fast, quiet, deadly."], paragraph: "The intruder. <span id='p-target' class='bg-rose-100 px-2'>Shadow. Steel. Silence.</span>" }
    ],

    // 7. SYNTAX KATANA
    katana: [
      { title: "Triple Punchers", formula: "Action x3.", description: "Rhythmic speed.", drills: ["He climbed and looked and jumped."], paragraph: "Quiet castle. <span id='p-target' class='bg-rose-100 px-2'>The shadow moved, stopped, and vanished.</span>" },
      { title: "Quadruple Verb", formula: "-ing + 3 verbs.", description: "Cinematic cut.", drills: ["Running, he jumped and fell."], paragraph: "Momentum. <span id='p-target' class='bg-rose-100 px-2'>Leaping, the ninja scanned the roof, breathed, and struck.</span>" },
      { title: "The Nested Who", formula: "Character detail.", description: "Nuance without drag.", drills: ["The ninja was fast."], paragraph: "The gate. <span id='p-target' class='bg-rose-100 px-2'>The samurai, who stood like stone, refused to move.</span>" },
      { title: "Em-Dash Reveal", formula: "Shock reveal.", description: "Narrative twist.", drills: ["He saw the box."], paragraph: "Silence. <span id='p-target' class='bg-rose-100 px-2'>The ninja looked in the mirror — he saw a monster.</span>" },
      { title: "The Colon Sniper", formula: "Focus noun.", description: "Target vision.", drills: ["He saw gold."], paragraph: "Cold room. <span id='p-target' class='bg-rose-100 px-2'>He only cared about one thing: the scroll.</span>" },
      { title: "Participle Sprints", formula: "-ing layers.", description: "Frantic energy.", drills: ["Running, jumping."], paragraph: "Safe now. <span id='p-target' class='bg-rose-100 px-2'>Running, sliding, the hero reached the door.</span>" }
    ],

    // 8. 7-FOLD PATH
    path7: [
      { title: "Action Path", formula: "Subject + Verb.", drills: ["He went."], paragraph: "Began. <span id='p-target' class='bg-rose-100 px-2'>The ninja sprinted across the clay.</span>" },
      { title: "Description Path", formula: "Sensory Fact.", drills: ["Big castle."], paragraph: "Looked. <span id='p-target' class='bg-rose-100 px-2'>The rooftops were a jagged mountain range.</span>" },
      { title: "Thinking Path", formula: "Internal Logic.", drills: ["He thought."], paragraph: "Froze. <span id='p-target' class='bg-rose-100 px-2'>He wondered if the Master would forgive him.</span>" },
      { title: "Feeling Path", formula: "Visceral reaction.", drills: ["He felt scared."], paragraph: "Moved. <span id='p-target' class='bg-rose-100 px-2'>A cold prickle of fear ran down his spine.</span>" },
      { title: "Atmosphere Path", formula: "Environment.", drills: ["Cold air."], paragraph: "Tension. <span id='p-target' class='bg-rose-100 px-2'>The air grew thick with jasmine.</span>" },
      { title: "Dialogue Path", formula: "Spoken Word.", drills: ["'Stop'."], paragraph: "Voice. <span id='p-target' class='bg-rose-100 px-2'>'Who goes there?' the sentry bellowed.</span>" },
      { title: "Story Path", formula: "Zingy Detail.", drills: ["A shingle."], paragraph: "Empty. <span id='p-target' class='bg-rose-100 px-2'>A single loose shingle was the only evidence.</span>" }
    ],

    // 9. THE MASTER SCROLL (THE FINAL BOSS)
    masterScroll: {
      // 58 Word Boring Passage
      passage: "The ninja was very quiet as he moved across the roof. He saw the big castle in front of him. He felt scared of the guards. He went down the long rope slowly. He heard a loud noise behind him. He realized he was caught by the enemy. He ran away fast to the trees to hide from them.",
      checkpoints: [
        { title: "Verb Shuriken", hint: "Replace 'moved', 'went', and 'ran' with high-octane verbs like 'sprinted' or 'slithered'." },
        { title: "Descriptor Daggers", hint: "Kill 'quiet' and 'big'. Use obsidian, formidable, or immense." },
        { title: "Filter Assassin", hint: "Kill 'He saw' and 'He felt'. Put the reader directly into the action." },
        { title: "Stealth Starters", hint: "Break the 'He/The' pattern with Adverb or Participle openings." },
        { title: "Dojo of Senses", hint: "Show us the fear through physical facts—sweaty palms or a thumping heart." },
        { title: "Syntax Katana", hint: "Use a Triple Puncher (Action. Action. Impact.) for the escape." },
        { title: "7-Fold Path", hint: "Ensure you have a balance of Action, Thinking, and Atmosphere beats." },
        { title: "Literary Lotus", hint: "Add a powerful Metaphor or some Alliteration to build the mood." }
      ]
    }
  }
};