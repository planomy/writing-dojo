/**
 * THE WRITING DOJO - MASTER CONTENT DATABASE
 * Full Restoration: Katana (6), Lotus (6), and 7-Fold Path (7).
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
          "The ninja sprinted, leapt, rolled, and vanished into the shadows.",
          "She looked, saw the guard, aimed her blowpipe, and fired.",
          "They crept, hid, waited, and listened for the signal."
        ],
        paragraph: "Silence reigned. <span id='p-target' class='bg-rose-100 px-2 text-slate-900 font-bold italic'>He scaled, balanced, paused, and dropped behind the guard.</span>"
      },
      { 
        title: "Triple Descriptor", 
        formula: "Desc, desc, and desc, [Action].", 
        drills: [
          "With her uniform stained, pride shattered, and fists clenched, Cassidy stormed off the field.",
          "With his breath shallow, heart racing, and eyes wide, the spy turned.",
          "Uniform heavy, muscles aching, and spirit broken, the guard collapsed.",
          "Shadows long, wind cold, and moon hidden, the night felt dangerous.",
          "Sword sharp, focus clear, and mask tight, he prepared to strike."
        ],
        paragraph: "Tension high. <span id='p-target' class='bg-rose-100 px-2 text-slate-900 font-bold italic'>With his grip slipping, lungs burning, and hope fading, he reached for the ledge.</span>"
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
        paragraph: "He reached the sanctum. <span id='p-target' class='bg-rose-100 px-2 text-slate-900 font-bold italic'>The treasure—a gold-encrusted box—sat alone on the pedestal.</span>"
      },
      { 
        title: "With Double Hand", 
        formula: "With [A] in one hand and [B] in the other, [Action].", 
        drills: [
          "With the basket of fresh fruits in one hand, and his bicycle helmet in the other, Thomas rode back home.",
          "With a shuriken in his left hand and a smoke bomb in his right, the ninja waited.",
          "With the scroll in his teeth and his sword in his hand, he leapt.",
          "With the map in one hand and a torch in the other, he entered.",
          "With the rope in one hand and his life in the other, he swung."
        ],
        paragraph: "Dizzying height. <span id='p-target' class='bg-rose-100 px-2 text-slate-900 font-bold italic'>With one hand on the ridge and the other on the rope, he swung across the gap.</span>"
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
        paragraph: "Panic erupted. <span id='p-target' class='bg-rose-100 px-2 text-slate-900 font-bold italic'>The general, who was clutching his gold, fled into the night.</span>"
      },
      { 
        title: "Dual Perspective", 
        formula: "[Perspective A]...; [Perspective B]...", 
        drills: [
          "From above, the city sparkled like a jewel; from below, it throbbed with survival.",
          "On the roof, silence reigned; in the courtyard, the party roared.",
          "The spy moved like smoke; the guards stood like stone.",
          "Inside, the master meditated; outside, the battle began.",
          "He looked up at the stars; they looked down at the fire."
        ],
        paragraph: "Balance shifted. <span id='p-target' class='bg-rose-100 px-2 text-slate-900 font-bold italic'>Below, the guards toasted their health; above, death waited on the tiles.</span>"
      }
    ],

    // 2. LITERARY LOTUS (6 Items)
    lotus: [
      { title: "Simile", formula: "Like or As", drills: ["He was like a ghost.", "She moved as fast as light.", "Cold like the grave.", "Quiet as a mouse.", "The moon was like a coin."], paragraph: "He disappeared. <span id='p-target' class='bg-fuchsia-100 px-2 text-slate-900 font-bold italic'>He vanished like smoke in a gale.</span>" },
      { title: "Metaphor", formula: "Direct Comparison", drills: ["The moon was a ball.", "His heart was stone.", "The sword was a sliver of ice.", "The forest was a cage.", "Night was a cloak."], paragraph: "Night fell. <span id='p-target' class='bg-fuchsia-100 px-2 text-slate-900 font-bold italic'>The moon was a glowing eye in the sky.</span>" },
      { title: "Personification", formula: "Human Traits", drills: ["The wind sang.", "The sword hungered.", "Shadows reached.", "The ground groaned.", "The trees whispered."], paragraph: "The storm arrived. <span id='p-target' class='bg-fuchsia-100 px-2 text-slate-900 font-bold italic'>The lightning danced across the jagged peaks.</span>" },
      { title: "Asyndeton", formula: "No Conjunctions", drills: ["He ran, jumped, fell.", "She saw, came, won.", "I worked, I strove, I won.", "Strike, kill, leave.", "Wait, watch, listen."], paragraph: "Speed mattered. <span id='p-target' class='bg-fuchsia-100 px-2 text-slate-900 font-bold italic'>He sprinted, leapt, vanished into the fog.</span>" },
      { title: "Onomatopoeia", formula: "Sound Words", drills: ["The bell clanged.", "The blade hissed.", "The roof cracked.", "The fire roared.", "The water splashed."], paragraph: "Silence broke. <span id='p-target' class='bg-fuchsia-100 px-2 text-slate-900 font-bold italic'>The steel clicked against the stone floor.</span>" },
      { title: "Alliteration", formula: "Repeated Sounds", drills: ["Silent shadows.", "Cold steel.", "Bitter blades.", "Fierce fires.", "Dark dreams."], paragraph: "He moved. <span id='p-target' class='bg-fuchsia-100 px-2 text-slate-900 font-bold italic'>Seven silent shadows slid across the shingles.</span>" }
    ],

    // 3. 7-FOLD PATH (7 Items)
    path7: [
      { title: "Action", formula: "Subject + Verb", drills: ["The ninja moved.", "He went over the wall.", "The guard turned around.", "She jumped down.", "They ran away."], paragraph: "Action! <span id='p-target' class='bg-purple-100 px-2 text-slate-900'>The ninja sprinted across the clay tiles.</span>" },
      { title: "Atmosphere", formula: "Environment", drills: ["It was cold.", "The sky was dark.", "Snow fell.", "The air was thick.", "Mist rose."], paragraph: "Mood. <span id='p-target' class='bg-purple-100 px-2 text-slate-900'>A bitter wind howled through the pagoda.</span>" },
      { title: "Thinking", formula: "Internal Monologue", drills: ["He wondered if he was seen.", "She realized it was a trap.", "The guard thought he heard a noise.", "He knew he was late."], paragraph: "Doubt. <span id='p-target' class='bg-purple-100 px-2 text-slate-900'>He realized the mission was a set-up.</span>" },
      { title: "Feeling", formula: "Visceral reaction", drills: ["His heart beat fast.", "She felt scared.", "Lungs burned.", "Sweat dripped.", "Eyes stung."], paragraph: "Fear. <span id='p-target' class='bg-purple-100 px-2 text-slate-900'>A cold sweat broke across his brow.</span>" },
      { title: "Dialogue", formula: "Spoken Word", drills: ["'Stop!' he said.", "'Go!' she cried.", "'Who's there?' he barked.", "'Help,' she whispered.", "'No,' they said."], paragraph: "Voice. <span id='p-target' class='bg-purple-100 px-2 text-slate-900'>'Who goes there?' the man barked.</span>" },
      { title: "Description", formula: "Static Details", drills: ["The sword was sharp.", "The wall was high.", "The mask was black.", "The gold was heavy.", "The rope was thin."], paragraph: "Sight. <span id='p-target' class='bg-purple-100 px-2 text-slate-900'>The wall was obsidian stone.</span>" },
      { title: "Flashback", formula: "Memory Shift", drills: ["He remembered home.", "The past hit him.", "He saw the master.", "The memory flared.", "Training returned."], paragraph: "Recall. <span id='p-target' class='bg-purple-100 px-2 text-slate-900'>He remembered the master's final words.</span>" }
    ],

    // OTHER TOOL PLACEHOLDERS
    shuriken: { targets: [{ prefix: "The spy ", weak: "went", suffix: " over." }], paragraph: "He {went} over." },
    daggers: { targets: [{ prefix: "The ", weak: "dark", suffix: " sky." }], paragraph: "The {big} moon." },
    assassin: { targets: [{ prefix: "He ", weak: "saw", suffix: " it." }], paragraph: "{He saw} the gate." },
    starters: [{ type: "Adverb", weak: "He ran." }, { type: "Pre", weak: "In the room." }, { type: "Part", weak: "Running." }, { type: "Sub", weak: "As he ran." }, { type: "Mom", weak: "Suddenly." }],
    senses: [{ type: "Sight", weak: "It looked big." }, { type: "Sound", weak: "It was loud." }, { type: "Smell", weak: "It smelled." }, { type: "Touch", weak: "It was cold." }, { type: "Internal", weak: "He felt sad." }],
    masterScroll: { passage: "The ninja was quiet.", checkpoints: [{ title: "Verbs", hint: "Kill 'was'." }] }
  },
  unit2: { id: 2, title: "The Dragon's Lair", themeColor: "orange", katana: [], lotus: [], path7: [] }
};