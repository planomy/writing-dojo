/**
 * THE WRITING DOJO - MASTER CONTENT DATABASE
 * Restoration: Katana (6), Lotus (6), and 7-Fold Path (7).
 * Terminology Fix: 7th Path is now "Story".
 */

const DOJO_DATA = {
  unit1: {
    id: 1,
    title: "The Rooftop Ninja",
    themeColor: "indigo",
    wordBank: ["obsidian", "shingle", "ridge", "silhouette", "steel", "stealth", "vigilant"],
    
    // 1. SYNTAX KATANA (6 Blueprints)
    katana: [
      { 
        title: "Quadruple Verb", 
        formula: "Verb, verb, verb, and verb.", 
        drills: [
          "Standing by the colourful circus tent, Cameron checked the time, studied the thickening crowd, and raised her hand.",
          "He climbed, slipped, caught the ridge, and pulled himself up.",
          "The ninja sprinted, leapt, rolled, and vanished.",
          "She looked, saw the guard, aimed her blowpipe, and fired.",
          "They crept, hid, waited, and listened."
        ],
        paragraph: "Silence reigned. <span id='p-target' class='bg-rose-100 px-2 text-slate-900 font-bold italic'>He scaled, balanced, paused, and dropped behind the guard.</span>"
      },
      { 
        title: "Triple Descriptor", 
        formula: "Desc, desc, and desc, [Action].", 
        drills: [
          "With her uniform stained, pride shattered, and fists clenched, Cassidy stormed off the field.",
          "With his breath shallow, heart racing, and eyes wide, the spy turned.",
          "Uniform heavy, muscles aching, and spirit broken, the guard collapsed."
        ],
        paragraph: "Tension high. <span id='p-target' class='bg-rose-100 px-2 text-slate-900 font-bold italic'>With his grip slipping, lungs burning, and hope fading, he reached for the ledge.</span>"
      },
      { 
        title: "Em-Dash Descriptor", 
        formula: "Sentence — description — action.", 
        drills: [
          "As she gazed at the painting, all colours—the soft hues of the sky, the vivid tones of the flowers—seemed to blend together.",
          "The blade—the family's greatest treasure—shone in the cold moonlight."
        ],
        paragraph: "He reached the sanctum. <span id='p-target' class='bg-rose-100 px-2 text-slate-900 font-bold italic'>The treasure—a gold-encrusted box—sat alone on the pedestal.</span>"
      },
      { 
        title: "With Double Hand", 
        formula: "With [A] and [B], [Action].", 
        drills: [
          "With the basket of fresh fruits in one hand, and his bicycle helmet in the other, Thomas rode back home.",
          "With a shuriken in his left hand and a smoke bomb in his right, the ninja waited."
        ],
        paragraph: "Dizzying height. <span id='p-target' class='bg-rose-100 px-2 text-slate-900 font-bold italic'>With one hand on the ridge and the other on the rope, he swung across the gap.</span>"
      },
      { 
        title: "The Nested Who", 
        formula: "Noun, who [detail], [action].", 
        drills: [
          "The old man, who spent his days by the river where he had once found a rare gem, smiled.",
          "The ninja, who was faster than a strike of lightning, moved across the roof."
        ],
        paragraph: "Panic erupted. <span id='p-target' class='bg-rose-100 px-2 text-slate-900 font-bold italic'>The general, who was clutching his gold, fled into the night.</span>"
      },
      { 
        title: "Dual Perspective", 
        formula: "[Perspective A]...; [Perspective B]...", 
        drills: [
          "From above, the city sparkled like a jewel; from below, it throbbed with survival.",
          "On the roof, silence reigned; in the courtyard, the party roared."
        ],
        paragraph: "Balance shifted. <span id='p-target' class='bg-rose-100 px-2 text-slate-900 font-bold italic'>Below, the guards toasted their health; above, death waited on the tiles.</span>"
      }
    ],

    // 2. LITERARY LOTUS (6 Items - Fully Restored)
    lotus: [
      { title: "Simile", formula: "Like or As", drills: ["He was like a ghost.", "She moved as fast as light."], paragraph: "He disappeared. <span id='p-target' class='bg-fuchsia-100 px-2 text-slate-900 font-bold'>He vanished like smoke in a gale.</span>" },
      { title: "Metaphor", formula: "Direct Comparison", drills: ["The moon was a ball.", "His heart was stone."], paragraph: "Night fell. <span id='p-target' class='bg-fuchsia-100 px-2 text-slate-900 font-bold'>The moon was a glowing eye.</span>" },
      { title: "Personification", formula: "Human Traits", drills: ["The wind sang.", "The sword hungered."], paragraph: "Storm! <span id='p-target' class='bg-fuchsia-100 px-2 text-slate-900 font-bold'>Lightning danced across the peaks.</span>" },
      { title: "Asyndeton", formula: "No Conjunctions", drills: ["He ran, jumped, fell.", "She saw, came, won."], paragraph: "Speed! <span id='p-target' class='bg-fuchsia-100 px-2 text-slate-900 font-bold'>He sprinted, leapt, vanished.</span>" },
      { title: "Onomatopoeia", formula: "Sound Words", drills: ["The bell clanged.", "The blade hissed."], paragraph: "Silence broke. <span id='p-target' class='bg-fuchsia-100 px-2 text-slate-900 font-bold'>The steel clicked against stone.</span>" },
      { title: "Alliteration", formula: "Repeated Sounds", drills: ["Silent shadows.", "Cold steel."], paragraph: "Movement. <span id='p-target' class='bg-fuchsia-100 px-2 text-slate-900 font-bold'>Seven shadows slid across shingles.</span>" }
    ],

    // 3. 7-FOLD PATH (7 Items - Terminology Adjusted)
    path7: [
      { title: "Action", formula: "Subject + Verb", drills: ["The ninja moved.", "The guard turned."], paragraph: "Action! <span id='p-target' class='bg-purple-100 px-2 text-slate-900'>The ninja sprinted.</span>" },
      { title: "Atmosphere", formula: "Environment", drills: ["It was cold.", "Snow fell."], paragraph: "Mood. <span id='p-target' class='bg-purple-100 px-2 text-slate-900'>A bitter wind howled.</span>" },
      { title: "Thinking", formula: "Internal Monologue", drills: ["He realized it.", "She thought."], paragraph: "Doubt. <span id='p-target' class='bg-purple-100 px-2 text-slate-900'>He knew it was a trap.</span>" },
      { title: "Feeling", formula: "Visceral reaction", drills: ["Hearts beat fast.", "Lungs burned."], paragraph: "Fear. <span id='p-target' class='bg-purple-100 px-2 text-slate-900'>A cold sweat broke.</span>" },
      { title: "Dialogue", formula: "Spoken Word", drills: ["'Stop!' he said.", "'Go!' she cried."], paragraph: "Voice. <span id='p-target' class='bg-purple-100 px-2 text-slate-900'>'Who goes there?' the man barked.</span>" },
      { title: "Description", formula: "Static Details", drills: ["The sword was sharp.", "The wall was high."], paragraph: "Sight. <span id='p-target' class='bg-purple-100 px-2 text-slate-900'>The wall was obsidian stone.</span>" },
      { title: "Story", formula: "Narrative Progress", drills: ["He remembered home.", "Training returned.", "The mission changed."], paragraph: "Path. <span id='p-target' class='bg-purple-100 px-2 text-slate-900'>He remembered the master's final words.</span>" }
    ],

    // OTHER TOOL PLACEHOLDERS
    shuriken: { targets: [{ prefix: "He ", weak: "went", suffix: " over." }], paragraph: "He {went} over." },
    daggers: { targets: [{ prefix: "The ", weak: "dark", suffix: " sky." }], paragraph: "The {big} moon." },
    assassin: { targets: [{ prefix: "He ", weak: "saw", suffix: " it." }], paragraph: "{He saw} the gate." },
    starters: [{ type: "Adverb", weak: "He ran." }, { type: "Pre", weak: "In the room." }, { type: "Part", weak: "Running." }, { type: "Sub", weak: "As he ran." }, { type: "Mom", weak: "Suddenly." }],
    senses: [{ type: "Sight", weak: "It looked big." }, { type: "Sound", weak: "It was loud." }, { type: "Smell", weak: "It smelled." }, { type: "Touch", weak: "It was cold." }, { type: "Internal", weak: "He felt sad." }],
    masterScroll: { passage: "The ninja was quiet.", checkpoints: [{ title: "Verbs", hint: "Kill 'was'." }] }
  },
  unit2: { id: 2, title: "The Dragon's Lair", themeColor: "orange", katana: [], lotus: [], path7: [] }
};