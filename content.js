/**
 * THE WRITING DOJO - MASTER CONTENT DATABASE
 * This is the central "Brain" that feeds data to all 9 tools.
 * Save this file exactly as: content.js
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
      { title: "Asyndeton", formula: "No 'and'.", description: "Frantic speed.", drills: ["He ran and jumped and fell."], paragraph: "Panic erupted. <span id='p-target' class='bg-rose-100 px-2 text-slate-950 bg-emerald-500 rounded'>He sprinted, leapt, vanished into the dark.</span>" },
      { title: "Polysyndeton", formula: "Extra 'and'.", description: "Heavy details.", drills: ["Gold and silver and gems."], paragraph: "The weight hit him. <span id='p-target' class='bg-rose-100 px-2 text-slate-950 bg-emerald-500 rounded'>There was the gate and the guard and the climb.</span>" }
    ],

    // 7. SYNTAX KATANA
    katana: [
      { title: "Triple Punchers", formula: "Action x3.", drills: ["He climbed and looked and jumped."], paragraph: "The shadow moved, stopped, and vanished." },
      { title: "The Colon Sniper", formula: "Focus noun.", drills: ["He saw gold."], paragraph: "He only cared about one thing: the scroll." }
    ],

    // 8. 7-FOLD PATH
    path7: [
      { title: "Action Path", formula: "Subject + Verb.", drills: ["He went."], paragraph: "The ninja sprinted across the clay." },
      { title: "Atmosphere Path", formula: "Environment.", drills: ["Cold air."], paragraph: "The air grew thick with jasmine." }
    ],

    // 9. THE MASTER SCROLL
    masterScroll: {
      passage: "The ninja was very quiet as he moved across the roof. He saw the big castle in front of him. He felt scared of the guards. He went down the long rope slowly. He heard a loud noise behind him. He realized he was caught by the enemy. He ran away fast to the trees to hide from them.",
      checkpoints: [
        { title: "Verb Shuriken", hint: "Replace 'moved', 'went', and 'ran' with action verbs like 'sprinted'." },
        { title: "Descriptor Daggers", hint: "Kill 'quiet' and 'big'. Use obsidian or immense." },
        { title: "Filter Assassin", hint: "Kill 'He saw' and 'He felt'. Put the reader in the action." },
        { title: "Stealth Starters", hint: "Break the 'He/The' pattern with varied openings." },
        { title: "Dojo of Senses", hint: "Show fear through physical facts like sweaty palms." },
        { title: "Syntax Katana", hint: "Use a Triple Puncher for the escape sequence." },
        { title: "7-Fold Path", hint: "Balance Action, Thinking, and Atmosphere beats." },
        { title: "Literary Lotus", hint: "Add a powerful Metaphor to build the mood." }
      ]
    }
  },

  unit2: {
    id: 2,
    title: "The Dragon's Lair",
    themeColor: "orange",
    wordBank: ["cavern", "sulfur", "blistering", "scales", "ancient", "embers", "hoard", "talon"],
    
    shuriken: {
      targets: [
        { prefix: "The knight ", weak: "walked", suffix: " into the cave.", hints: ["ventured", "crept", "prowled"] },
        { prefix: "The dragon ", weak: "sat", suffix: " on its gold.", hints: ["coiled", "loomed", "slumbered"] },
        { prefix: "Fire ", weak: "came", suffix: " from its nostrils.", hints: ["billowed", "erupted", "hissed"] },
        { prefix: "He ", weak: "held", suffix: " his heavy shield.", hints: ["braced", "clutched"] },
        { prefix: "The beast ", weak: "made", suffix: " a loud noise.", hints: ["roared", "bellowed", "thundered"] }
      ],
      paragraph: "Sweat dripping, the knight {walked} inside. The dragon {sat} in the center. Its tail {moved} slowly. He knew if it woke, he {died}."
    },

    daggers: {
      targets: [
        { prefix: "The cave was very ", weak: "big", suffix: ".", hints: ["monolithic", "cavernous", "infinite"] },
        { prefix: "The gold was ", weak: "shiny", suffix: ".", hints: ["glinting", "shimmering", "blinding"] },
        { prefix: "The heat felt ", weak: "hot", suffix: " on his face.", hints: ["blistering", "searing", "suffocating"] },
        { prefix: "The dragon's scales were ", weak: "hard", suffix: ".", hints: ["impenetrable", "iron-clad"] },
        { prefix: "A ", weak: "bad", suffix: " smell filled the air.", hints: ["sulfurous", "acrid", "choking"] }
      ],
      paragraph: "It was a {big} cavern filled with {shiny} gold. The {hot} air made it hard to breathe. He looked at the dragon's {long} claws and felt a {bad} fear."
    },

    assassin: {
      targets: [
        { prefix: "He ", weak: "saw", suffix: " the smoke rising.", target: "He saw" },
        { prefix: "I ", weak: "heard", suffix: " the sound of scales scraping stone.", target: "I heard" },
        { prefix: "She ", weak: "felt", suffix: " the ground shake.", target: "She felt" },
        { prefix: "The knight ", weak: "noticed", suffix: " a missing scale.", target: "noticed" },
        { prefix: "They ", weak: "watched", suffix: " the dragon's eye open.", target: "watched" }
      ],
      paragraph: "{I saw} the dragon wake up. {I heard} its wings unfold. {I felt} the blistering wind. {I realized} there was no escape."
    },

    starters: [
      { type: "Adverb (-ly)", weak: "He walked cautiously through the cave." },
      { type: "Preposition (Location)", weak: "The gold was piled high against the wall." },
      { type: "Participle (-ing)", weak: "Gripping his sword, he moved forward." },
      { type: "Subordinate (Condition)", weak: "He hid behind a pillar because the fire was coming." },
      { type: "Momentum (Instant)", weak: "The dragon attacked suddenly." }
    ],

    senses: [
      { type: "Sight", weak: "The fire was red." },
      { type: "Sound", weak: "It made a loud roar." },
      { type: "Smell", weak: "The air smelled of eggs." },
      { type: "Touch", weak: "The floor was hot." },
      { type: "Internal/Taste", weak: "He was very thirsty." }
    ],

    lotus: [
      { title: "Comparisons", formula: "Simile/Metaphor.", drills: ["The fire was like a sun.", "The dragon was a mountain."], paragraph: "The cave was a furnace. <span id='p-target' class='bg-orange-100 px-2 text-slate-950'>The dragon's wings were great leather sails.</span>" }
    ],

    katana: [
      { title: "Triple Punchers", formula: "Action x3.", drills: ["He ran and hid and prayed."], paragraph: "The attack began. <span id='p-target' class='bg-orange-100 px-2 text-slate-950'>The knight lunged, struck, and retreated.</span>" }
    ],

    path7: [
      { title: "Action Path", formula: "Subject + Verb.", drills: ["The beast roared."], paragraph: "Chaos erupted. <span id='p-target' class='bg-orange-100 px-2 text-slate-950'>White fire consumed the stone pillars.</span>" }
    ],

    masterScroll: {
      passage: "The dragon was very big and scary. It sat on the pile of gold in the dark cave. The knight came inside and saw the fire. He felt very hot and afraid. He drew his sword slowly. The dragon woke up and made a loud roar that shook the walls. He ran away to find a place to hide.",
      checkpoints: [
        { title: "Verb Shuriken", hint: "Replace 'came', 'made', and 'ran' with verbs like 'ventured' or 'thundered'." },
        { title: "Descriptor Daggers", hint: "Kill 'big' and 'scary'. Use blistering, ancient, or monolithic." },
        { title: "Filter Assassin", hint: "Kill 'He saw' and 'He felt'. Show the blistering heat directly." },
        { title: "Stealth Starters", hint: "Start with an Adverb like 'Cautiously' or a Participle like 'Clutching'." },
        { title: "Dojo of Senses", hint: "Show fear through physical facts—the smell of sulfur or parched throat." },
        { title: "Syntax Katana", hint: "Use a Triple Puncher for the dragon's awakening." },
        { title: "7-Fold Path", hint: "Ensure you include an Atmosphere beat describing the sulfur and smoke." },
        { title: "Literary Lotus", hint: "Compare the dragon's breath to a furnace or its scales to iron plates." }
      ]
    }
  }
};