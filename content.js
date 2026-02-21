/**
 * THE WRITING DOJO - MASTER CONTENT DATABASE
 * Full Restoration: 100% Volume for all 9 Ninja Tools.
 * Logic: All Drills are now "Plain Statements" for the class to fix.
 * Terminology: 7th Path is officially "Story".
 */

const DOJO_DATA = {
  unit1: {
    id: 1,
    title: "The Rooftop Ninja",
    themeColor: "indigo",
    wordBank: ["obsidian", "shingle", "ridge", "silhouette", "steel", "stealth", "vigilant"],
    
    // 1. VERB SHURIKEN (5 Drills + Paragraph)
    shuriken: {
      targets: [
        { prefix: "The spy ", weak: "went", suffix: " across the clay tiles.", hints: ["sprinted", "crept", "leapt"] },
        { prefix: "He ", weak: "looked", suffix: " at the guards below.", hints: ["observed", "scanned", "spied"] },
        { prefix: "A warning bell ", weak: "rang", suffix: " in the distance.", hints: ["clanged", "echoed", "reverberated"] },
        { prefix: "She ", weak: "held", suffix: " her breath.", hints: ["stifled", "suppressed"] },
        { prefix: "The blade ", weak: "cut", suffix: " through the silk screen.", hints: ["sliced", "sheared"] }
      ],
      paragraph: "Hidden by the dark, the ninja {went} over the wall. He {looked} at the emperor's bedroom window, hoping the shadows were thick enough. Below, a guard {said} a joke to his partner, unaware of the threat above. If the ninja failed now, the mission {ended} for good. He {ran} toward the ledge."
    },

    // 2. DESCRIPTOR DAGGERS (5 Drills + Paragraph)
    daggers: {
      targets: [
        { prefix: "The moon hung in the ", weak: "dark", suffix: " sky.", hints: ["ink-stained", "obsidian", "void-like"] },
        { prefix: "He gripped the ", weak: "cold", suffix: " steel of his blade.", hints: ["ice-slicked", "numbing", "arctic"] },
        { prefix: "The castle walls were ", weak: "big", suffix: " and intimidating.", hints: ["monolithic", "towering", "immense"] },
        { prefix: "A ", weak: "small", suffix: " sound came from the garden.", hints: ["faint", "barely-audible", "whisper-thin"] },
        { prefix: "The ninja wore ", weak: "black", suffix: " clothes for stealth.", hints: ["midnight-hued", "charcoal", "shadow-stitched"] }
      ],
      paragraph: "A {big} shadow moved across the {red} rooftop. The air felt {cold} as the ninja prepared his {sharp} weapon for the strike. One mistake would lead to a {bad} fate in the {dark} garden below."
    },

    // 3. FILTER ASSASSIN (5 Drills + Paragraph)
    assassin: {
      targets: [
        { prefix: "He ", weak: "saw", suffix: " the stars reflecting on his sword.", target: "He saw" },
        { prefix: "I ", weak: "heard", suffix: " the heavy breathing of the guard.", target: "I heard" },
        { prefix: "She ", weak: "felt", suffix: " the rough shingles beneath her boots.", target: "She felt" },
        { prefix: "The spy ", weak: "noticed", suffix: " a gap in the perimeter security.", target: "noticed" },
        { prefix: "They ", weak: "watched", suffix: " the cloud cover the moon.", target: "watched" }
      ],
      paragraph: "{I saw} the castle gates open slowly. {I heard} the thunder roar in the distance. {I felt} the rain hit my armor like cold needles. {I realized} the battle was starting, and {I wondered} if I would survive the night."
    },

    // 4. SYNTAX KATANA (6 Blueprints - Drills converted to Plain Statements)
    katana: [
      { 
        title: "Quadruple Verb", 
        formula: "Verb, verb, verb, and verb.", 
        example: "Plain: 'He moved fast.' -> Katana: 'He sprinted, vaulted, landed, and vanished.'",
        drills: [
          "He climbed up the wall.",
          "She looked around the room.",
          "The guard walked to the gate.",
          "The cat jumped over the fence.",
          "They waited for the signal."
        ],
        paragraph: "Silence reigned. <span id='p-target' class='bg-rose-100 px-2 text-slate-900 font-bold italic'>He scaled, balanced, paused, and dropped behind the guard.</span>"
      },
      { 
        title: "Triple Descriptor", 
        formula: "Desc, desc, and desc, [Action].", 
        example: "Plain: 'He was tired.' -> Katana: 'With muscles aching, spirit broken, and breath shallow, he collapsed.'",
        drills: [
          "The spy turned the corner.",
          "The warrior stood his ground.",
          "The sky was very dark.",
          "His hand shook with fear.",
          "The door opened slowly."
        ],
        paragraph: "The tension was high. <span id='p-target' class='bg-rose-100 px-2 text-slate-900 font-bold italic'>With his grip slipping, lungs burning, and hope fading, he reached for the ledge.</span>"
      },
      { 
        title: "Em-Dash Descriptor", 
        formula: "Sentence — description — action.", 
        example: "Plain: 'The sword was old.' -> Katana: 'The sword—a rusted relic of a forgotten war—lay in the dust.'",
        drills: [
          "The colours blended together.",
          "The blade shone in the moonlight.",
          "The fortress towered over the valley.",
          "His mission pushed him forward.",
          "The guards did not notice the shadow."
        ],
        paragraph: "He reached the inner sanctum. <span id='p-target' class='bg-rose-100 px-2 text-slate-900 font-bold italic'>The treasure—a gold-encrusted box—sat alone on the pedestal.</span>"
      },
      { 
        title: "With Double Hand", 
        formula: "With [A] in one hand and [B] in the other, [Action].", 
        example: "Plain: 'He had tools.' -> Katana: 'With a torch in one hand and a map in the other, he entered.'",
        drills: [
          "Thomas rode back home.",
          "The ninja waited for the guard.",
          "He leapt across the gap.",
          "He entered the vault.",
          "He swung across the ledge."
        ],
        paragraph: "The height was dizzying. <span id='p-target' class='bg-rose-100 px-2 text-slate-900 font-bold italic'>With one hand on the ridge and the other on the rope, he swung across the gap.</span>"
      },
      { 
        title: "The Nested Who", 
        formula: "Noun, who [detail], [action].", 
        example: "Plain: 'The man smiled.' -> Katana: 'The man, who had not spoken for years, finally smiled.'",
        drills: [
          "The old man smiled.",
          "The ninja moved across the roof.",
          "The guard yawned loudly.",
          "The emperor looked bored.",
          "The scroll remained hidden."
        ],
        paragraph: "Panic erupted. <span id='p-target' class='bg-rose-100 px-2 text-slate-900 font-bold italic'>The general, who was clutching his gold, fled into the night.</span>"
      },
      { 
        title: "Dual Perspective", 
        formula: "[Perspective A]...; [Perspective B]...", 
        example: "Plain: 'It was different inside.' -> Katana: 'Outside, the storm raged; inside, the fire flickered peacefully.'",
        drills: [
          "The city sparkled.",
          "The party roared.",
          "The guards stood like stone.",
          "The battle began.",
          "They looked down at the fire."
        ],
        paragraph: "The balance shifted. <span id='p-target' class='bg-rose-100 px-2 text-slate-900 font-bold italic'>Below, the guards toasted; above, death waited on the tiles.</span>"
      }
    ],

    // 5. LITERARY LOTUS (6 Devices - Drills converted to Plain Statements)
    lotus: [
      { 
        title: "Simile", 
        formula: "Using like or as.", 
        example: "Plain: 'He was fast.' -> Bloomed: 'He moved like a shadow slipping through a keyhole.'",
        drills: ["The moon was bright.", "His sword was cold.", "Shadows were dark.", "The roof was slippery.", "He was quiet."], 
        paragraph: "He disappeared. <span id='p-target' class='bg-fuchsia-100 px-2 text-slate-900 font-bold'>He vanished like smoke in a gale.</span>" 
      },
      { 
        title: "Metaphor", 
        formula: "Direct comparison.", 
        example: "Plain: 'The sun was hot.' -> Bloomed: 'The sun was a golden furnace, melting the horizon.'",
        drills: ["The moon was a ball.", "His heart was stone.", "The sword was ice.", "The forest was a cage.", "Night was a cloak."], 
        paragraph: "Night fell. <span id='p-target' class='bg-fuchsia-100 px-2 text-slate-900 font-bold'>The moon was a glowing eye in the sky.</span>" 
      },
      { 
        title: "Personification", 
        formula: "Human Traits.", 
        example: "Plain: 'The wind blew.' -> Bloomed: 'The wind howled its ancient secrets through the trees.'",
        drills: ["The wind sang.", "The sword hungered.", "Shadows reached.", "The ground groaned.", "The trees whispered."], 
        paragraph: "The storm arrived. <span id='p-target' class='bg-fuchsia-100 px-2 text-slate-900 font-bold'>The lightning danced across the peaks.</span>" 
      },
      { 
        title: "Asyndeton", 
        formula: "No conjunctions (and).", 
        example: "Plain: 'He ran and jumped.' -> Bloomed: 'He sprinted, vaulted, landed, vanished.'",
        drills: ["He ran and jumped and fell.", "She saw and came and won.", "I worked and I strove and I won.", "Strike and kill and leave.", "Wait and watch and listen."], 
        paragraph: "Speed mattered. <span id='p-target' class='bg-fuchsia-100 px-2 text-slate-900 font-bold'>He sprinted, leapt, vanished into the fog.</span>" 
      },
      { 
        title: "Onomatopoeia", 
        formula: "Sound words.", 
        example: "Plain: 'The bell rang.' -> Bloomed: 'The iron bell clanged, sending birds scattering.'",
        drills: ["The bell clanged.", "The blade hissed.", "The roof cracked.", "The fire roared.", "The water splashed."], 
        paragraph: "Silence broke. <span id='p-target' class='bg-fuchsia-100 px-2 text-slate-900 font-bold'>The steel clicked against the stone floor.</span>" 
      },
      { 
        title: "Alliteration", 
        formula: "Repeated sounds.", 
        example: "Plain: 'Shadows move.' -> Bloomed: 'Seven silent shadows slid across the shingles.'",
        drills: ["Silent shadows.", "Cold steel.", "Bitter blades.", "Fierce fires.", "Dark dreams."], 
        paragraph: "He moved. <span id='p-target' class='bg-fuchsia-100 px-2 text-slate-900 font-bold'>Seven silent shadows slid across the shingles.</span>" 
      }
    ],

    // 6. 7-FOLD PATH (7 Archetypes - 7th is Story)
    path7: [
      { 
        title: "Action", 
        formula: "Subject + Verb.", 
        example: "Plain: 'He moved.' -> Path: 'He sprinted across the clay tiles and vaulted the wall.'",
        drills: ["The ninja moved.", "He went over the wall.", "The guard turned around.", "She jumped down.", "They ran away."], 
        paragraph: "Chaos erupted. <span id='p-target' class='bg-purple-100 px-2 text-slate-900 font-bold'>The ninja sprinted across the tiles.</span>" 
      },
      { 
        title: "Atmosphere", 
        formula: "Environment.", 
        example: "Plain: 'It was cold.' -> Path: 'A bitter, freezing wind howled through the empty pagoda.'",
        drills: ["It was cold.", "The sky was dark.", "Snow fell.", "The air was thick.", "Mist rose."], 
        paragraph: "The night changed. <span id='p-target' class='bg-purple-100 px-2 text-slate-900 font-bold'>A bitter wind howled.</span>" 
      },
      { 
        title: "Thinking", 
        formula: "Internal monologue.", 
        example: "Plain: 'He knew it.' -> Path: 'He realized the trap was set the moment the door clicked shut.'",
        drills: ["He wondered if he was seen.", "She realized it was a trap.", "The guard thought he heard a noise.", "He knew he was late.", "She doubted her strength."], 
        paragraph: "Doubt crept in. <span id='p-target' class='bg-purple-100 px-2 text-slate-900 font-bold'>He realized the mission was a set-up.</span>" 
      },
      { 
        title: "Feeling", 
        formula: "Visceral reaction.", 
        example: "Plain: 'He was scared.' -> Path: 'A cold sweat broke across his brow as his lungs began to burn.'",
        drills: ["His heart beat fast.", "She felt scared.", "Lungs burned.", "Sweat dripped.", "Eyes stung."], 
        paragraph: "Pressure mounted. <span id='p-target' class='bg-purple-100 px-2 text-slate-900 font-bold'>A cold sweat broke across his brow.</span>" 
      },
      { 
        title: "Dialogue", 
        formula: "Spoken Word.", 
        example: "Plain: 'He said stop.' -> Path: ''Freeze!' the master barked, his hand hovering over the hilt.'",
        drills: ["'Stop!' he said.", "'Go!' she cried.", "'Who's there?' he barked.", "'Help,' she whispered.", "'No,' they said."], 
        paragraph: "Voice. <span id='p-target' class='bg-purple-100 px-2 text-slate-900 font-bold'>'Who goes there?' the man barked.</span>" 
      },
      { 
        title: "Description", 
        formula: "Static Details.", 
        example: "Plain: 'The wall was black.' -> Path: 'The wall was a monolithic block of obsidian stone, cold to the touch.'",
        drills: ["The sword was sharp.", "The wall was high.", "The mask was black.", "The gold was heavy.", "The rope was thin."], 
        paragraph: "Sight. <span id='p-target' class='bg-purple-100 px-2 text-slate-900 font-bold'>The wall was obsidian stone.</span>" 
      },
      { 
        title: "Story", 
        formula: "Narrative Progress.", 
        example: "Plain: 'He remembered things.' -> Path: 'He remembered the master's final words before the betrayal flared in his mind.'",
        drills: ["He remembered home.", "The past hit him.", "He saw the master.", "The memory flared.", "Training returned."], 
        paragraph: "Recall. <span id='p-target' class='bg-purple-100 px-2 text-slate-900 font-bold'>He remembered the master's final words.</span>" 
      }
    ],

    // LINEAR TOOLS
    starters: [
      { type: "Adverb (-ly)", weak: "He moved silently across the roof." },
      { type: "Preposition (Location)", weak: "The sword was hidden beneath his cloak." },
      { type: "Participle (-ing)", weak: "He balanced on the ridge and waited." },
      { type: "Subordinate (Condition)", weak: "The tiles were slippery because it was raining." },
      { type: "Momentum (Instant)", weak: "The roof tiles gave way suddenly." }
    ],

    senses: [
      { type: "Sight", weak: "The sword looked bright." },
      { type: "Sound", weak: "It was very quiet." },
      { type: "Smell", weak: "The garden smelled nice." },
      { type: "Touch", weak: "The wood was rough." },
      { type: "Internal/Taste", weak: "He felt very scared." }
    ],

    // FINAL BOSS
    masterScroll: {
      passage: "The ninja was very quiet as he moved across the roof. He saw the big castle in front of him. He felt scared of the guards. He went down the long rope slowly.",
      checkpoints: [
        { title: "Verb Shuriken", hint: "Replace 'went'." },
        { title: "Descriptor Daggers", hint: "Kill 'quiet' and 'big'." },
        { title: "Filter Assassin", hint: "Kill 'He saw'." }
      ]
    }
  },
  
  unit2: { id: 2, title: "The Dragon's Lair", themeColor: "orange", katana: [], lotus: [], path7: [] }
};