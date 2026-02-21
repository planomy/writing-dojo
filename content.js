/**
 * THE WRITING DOJO - MASTER CONTENT DATABASE
 * Restoration: Katana (6 Blueprints), Lotus (Selection Grid), and 7-Fold Path (7 Paths).
 * Includes specific legacy examples: Cassidy, Thomas, Cameron, and the Old Man.
 */

const DOJO_DATA = {
  unit1: {
    id: 1,
    title: "The Rooftop Ninja",
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
        { prefix: "He gripped the ", weak: "cold", suffix: " steel of his blade.", hints: ["ice-slicked", "numbing"] }
      ],
      paragraph: "A {big} shadow moved across the {red} rooftop."
    },

    // 3. FILTER ASSASSIN
    assassin: {
      targets: [
        { prefix: "He ", weak: "saw", suffix: " the stars reflecting on his sword.", target: "He saw" }
      ],
      paragraph: "{I saw} the castle gates open."
    },

    // 4. SYNTAX KATANA (Selection Grid Data - 6 Blueprints)
    katana: [
      { 
        title: "Quadruple Verb", 
        formula: "Verb, verb, verb, and verb.", 
        drills: [
          "Standing by the colourful circus tent, Cameron checked the time, studied the thickening crowd, and raised her hand.",
          "He climbed, slipped, caught the ridge, and pulled himself up.",
          "The ninja sprinted, leapt, rolled, and vanished into the shadows.",
          "She looked, saw the guard, aimed her blowpipe, and fired.",
          "They crept, hid, waited, and listened for the signal."
        ],
        paragraph: "Silence reigned. <span id='p-target' class='bg-rose-100 px-2 text-slate-900 font-bold font-italic'>He scaled, balanced, paused, and dropped behind the guard.</span>"
      },
      { 
        title: "Triple Descriptor", 
        formula: "Desc, desc, and desc, [Action].", 
        drills: [
          "With her uniform stained, pride shattered, and fists clenched, Cassidy stormed off the field.",
          "With his breath shallow, heart racing, and eyes wide, the spy turned the corner.",
          "Uniform heavy, muscles aching, and spirit broken, the guard collapsed.",
          "Shadows long, wind cold, and moon hidden, the night felt dangerous.",
          "Sword sharp, focus clear, and mask tight, he prepared to strike."
        ],
        paragraph: "The tension was high. <span id='p-target' class='bg-rose-100 px-2 text-slate-900 font-bold font-italic'>With his grip slipping, lungs burning, and hope fading, he reached for the ledge.</span>"
      },
      { 
        title: "Em-Dash Descriptor", 
        formula: "Sentence — description — action.", 
        drills: [
          "As she gazed at the painting, all colours—the soft hues of the sky, the vivid tones of the flowers—seemed to blend together.",
          "The blade—the family's greatest treasure—shone in the cold moonlight.",
          "The fortress—a monolithic block of black stone—towered over the valley.",
          "His mission—to recover the scroll at any cost—pushed him forward.",
          "The guards—lazy men with heavy eyes—did not notice the shadow."
        ],
        paragraph: "He reached the inner sanctum. <span id='p-target' class='bg-rose-100 px-2 text-slate-900 font-bold font-italic'>The treasure—a gold-encrusted box—sat alone on the pedestal.</span>"
      },
      { 
        title: "With Double Hand", 
        formula: "With [A] and [B], [Action].", 
        drills: [
          "With the basket of fresh fruits in one hand, and his bicycle helmet in the other, Thomas rode back home.",
          "With a shuriken in his left hand and a smoke bomb in his right, the ninja waited.",
          "With the scroll in his teeth and his sword in his hand, he leapt.",
          "With the map in one hand and a torch in the other, he entered the vault.",
          "With the rope in one hand and his life in the other, he swung."
        ],
        paragraph: "The height was dizzying. <span id='p-target' class='bg-rose-100 px-2 text-slate-900 font-bold font-italic'>With one hand on the ridge and the other on the rope, he swung across the gap.</span>"
      },
      { 
        title: "The Nested Who", 
        formula: "Noun, who [detail], [action].", 
        drills: [
          "The old man, who spent his days by the river where he had once found a rare gem, smiled.",
          "The ninja, who was faster than a strike of lightning, moved across the roof.",
          "The guard, who was patrolling the east wall, yawned loudly.",
          "The emperor, who sat on a throne of solid gold, looked bored.",
          "The scroll, which contained the secrets of the clan, remained hidden."
        ],
        paragraph: "Panic erupted. <span id='p-target' class='bg-rose-100 px-2 text-slate-900 font-bold font-italic'>The general, who was clutching his gold, fled into the night.</span>"
      },
      { 
        title: "Dual Perspective", 
        formula: "[A]...; [B]...", 
        drills: [
          "From above, the city sparkled like a jewel; from below, it throbbed with survival.",
          "On the roof, silence reigned; in the courtyard, the party roared.",
          "The spy moved like smoke; the guards stood like stone.",
          "Inside, the master meditated; outside, the battle began.",
          "He looked up at the stars; they looked down at the fire."
        ],
        paragraph: "The balance shifted. <span id='p-target' class='bg-rose-100 px-2 text-slate-900 font-bold font-italic'>Below, the guards toasted their health; above, death waited on the tiles.</span>"
      }
    ],

    // 5. THE 7-FOLD PATH (Selection Grid - 7 Items)
    path7: [
      { title: "Action", formula: "Subject + Action Verb", drills: ["The ninja moved.", "He jumped.", "She ran.", "They hid.", "The blade struck."], paragraph: "The target appeared. <span id='p-target' class='bg-rose-100 px-2 text-slate-900 font-bold'>The ninja sprinted.</span>" },
      { title: "Thinking", formula: "Internal Monologue", drills: ["He wondered if he was seen.", "She realized it was a trap.", "He thought of home."], paragraph: "He paused. <span id='p-target' class='bg-rose-100 px-2 text-slate-900 font-bold'>He realized he was not alone.</span>" },
      { title: "Feeling", formula: "Visceral Reactions", drills: ["His heart raced.", "Lungs burned.", "Sweat dripped."], paragraph: "Silence broke. <span id='p-target' class='bg-rose-100 px-2 text-slate-900 font-bold'>A cold sweat broke across his brow.</span>" },
      { title: "Atmosphere", formula: "Environmental Facts", drills: ["It was cold.", "The sky was dark.", "Snow fell."], paragraph: "The moon faded. <span id='p-target' class='bg-rose-100 px-2 text-slate-900 font-bold'>A bitter wind howled through the trees.</span>" },
      { title: "Dialogue", formula: "Spoken Word", drills: ["'Stop,' he said.", "'Go,' she whispered.", "'Help,' they cried."], paragraph: "The guard turned. <span id='p-target' class='bg-rose-100 px-2 text-slate-900 font-bold'>'Who goes there?' the man barked.</span>" },
      { title: "Description", formula: "Static Details", drills: ["The sword was long.", "The wall was high.", "The mask was black."], paragraph: "He looked up. <span id='p-target' class='bg-rose-100 px-2 text-slate-900 font-bold'>The wall was a monolithic block of stone.</span>" },
      { title: "Flashback", formula: "Memory Shifts", drills: ["He remembered the training.", "She saw her father.", "The past returned."], paragraph: "In the dark. <span id='p-target' class='bg-rose-100 px-2 text-slate-900 font-bold'>He remembered the master's final words.</span>" }
    ],

    // 6. LITERARY LOTUS (Selection Grid Data)
    lotus: [
      { title: "Simile", formula: "Like or As", drills: ["He moved like smoke.", "She was as fast as light."], paragraph: "The end. <span id='p-target' class='bg-rose-100 px-2 text-slate-900 font-bold'>He vanished like a ghost in the fog.</span>" },
      { title: "Metaphor", formula: "Direct Comparison", drills: ["The moon was a ball.", "His heart was stone."], paragraph: "Night fell. <span id='p-target' class='bg-rose-100 px-2 text-slate-900 font-bold'>The moon was a glowing eye in the sky.</span>" },
      { title: "Asyndeton", formula: "No Conjunctions", drills: ["He ran, jumped, fell.", "I saw, I came, I won."], paragraph: "Action! <span id='p-target' class='bg-rose-100 px-2 text-slate-900 font-bold'>He sprinted, leapt, vanished.</span>" }
    ],

    masterScroll: {
      passage: "The ninja was quiet. He saw the castle. He felt scared.",
      checkpoints: [{ title: "Verb Shuriken", hint: "Replace 'quiet'." }]
    }
  },
  unit2: { id: 2, title: "The Dragon's Lair", themeColor: "orange", katana: [], lotus: [], path7: [] }
};