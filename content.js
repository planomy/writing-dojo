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
        { prefix: "He ", weak: "looked at", suffix: " the guards below.", hints: ["monitored", "scanned", "spied"] },
        { prefix: "A warning bell ", weak: "rang", suffix: " in the distance.", hints: ["clanged", "echoed", "reverberated"] },
        { prefix: "She ", weak: "held", suffix: " her breath.", hints: ["stifled", "suppressed"] },
        { prefix: "The blade ", weak: "cut", suffix: " through the silk screen.", hints: ["sliced", "sheared"] }
      ],
      paragraph: "Hidden by the dark, the ninja {went} over the wall. He {looked at} the emperor's bedroom window, hoping the shadows were thick enough. Below, a guard {said} a joke to his partner, unaware of the threat above. If the ninja failed now, the mission was {over}. He {ran} toward the ledge."
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
        { prefix: "She ", weak: "heard", suffix: " the heavy breathing of the guard.", target: "She heard" },
        { prefix: "She ", weak: "felt", suffix: " the rough shingles beneath her boots.", target: "She felt" },
        { prefix: "The spy ", weak: "noticed", suffix: " a gap in the perimeter's security.", target: "The spy noticed" },
        { prefix: "They ", weak: "watched", suffix: " the cloud cover the moon.", target: "They watched" }
      ],
      paragraph: "{He saw} the castle gates open slowly. {He heard} the thunder roar in the distance. {He felt} the rain hit his armor like cold needles. {He realized} the battle was starting, and {he wondered} if he would survive the night."
    },

    // 4. SYNTAX KATANA (6 Blueprints - Drills converted to Plain Statements)
    katana: [
      { 
        title: "Quadruple Verb", 
        formula: "Verb + ing, verb (ed), verb (ed), and verb(ed).", 
        example: "Plain: 'He moved fast.' -> Katana: <u>Sprinting</u> along the narrow cobbled path, the spy <u>vaulted</u> the bordering hedge, <u>landed</u> nimbly with a crouch, and <u>vanished</u> into the depths of the night.",
        drills: [
          "He climbed up the wall.",
          "She looked around the room.",
          "The guard walked to the gate.",
          "He jumped over the fence.",
          "They waited for the signal."
        ],
        paragraph: "Silence reigned. He scaled, balanced, paused, and dropped behind the guard."
      },
      { 
        title: "Triple Descriptor", 
        formula: "Desc, desc, and desc, [Action].", 
        example: "Plain: 'He was tired.' -> Katana: <u>With his</u> <u>aching</u> muscles, <u>broken</u> spirit, and <u>shallow</u> breath, he collapsed to the ground.",
        drills: [
          "The spy turned the corner.",
          "The warrior stood his ground.",
          "The sky was very dark.",
          "His hand shook with fear.",
          "The door opened slowly."
        ],
        paragraph: "The tension was high. He reached for the ledge as his grip was slipping, and his lungs were burning, and his hope was fading."
      },
      { 
        title: "Em-Dash Descriptor", 
        formula: "When start, all sounds/sights/memories — the noun of noun, the noun of noun — ceased/stopped/faded as/and action.", 
        example: "Plain: When he reached the gates, he prepared for the final obstacle. -> Katana: <u>When</u> the nimble spy reached the outer gates, <u>all sounds</u> - <u>the</u> chatter <u>of</u> ignorant guards, <u>the</u> wails <u>of</u> the ancient wind - <u>ceased</u>, <u>and</u> he prepared himself for the final obstacle.",
        drills: [
          "When the smoke drifted across the courtyard, all sounds - the _______ of the ______,the ______ of the ______, ceased as he slipped past the silent guards.",
"As the moon climbed higher, all sights - the _______ of the ______,the ______ of the ______, disappeared and she tightened her grip on the rope.",
"While the torches flickered along the wall, all memories - the _______ of the ______,the ______ of the ______,faded as he scaled the fortress unnoticed.",
"When the wind rustled the bamboo leaves, all sights - the _______ of the ______,the ______ of the ______,vanished and she drew her blade without a sound.",
"As the alarm bells echoed in the distance, all sounds - the _______ of the ______,the ______ of the ______,faded and he ____________."
        ],
        paragraph: "The sturdy oak door swung open. As she entered the inner sanctum. all sounds/sights/memories, the _______ of the ______,the ______ of the ______, faded as she ____________."
      },
      { 
        title: "With Double Hand", 
        formula: "With [A] in one hand and [B] in the other, [Action].", 
        example: "Plain: 'He had tools.' -> Katana: <u>With a</u> blazing torch <u>in one hand</u> <u>and</u> a faded linen map <u>she bought/grabbed/stole/acquired from</u> a suspicious local, market vendor <u>in the other,</u> <u>she</u> entered the cursed tomb.",
        drills: [
          "With a ______ in one hand, and a ______ he grabbed from ______ in the other, the ninja rode back home.",
          "With a ______ in one hand, and a ______ she found in ______ in the other, the ninja waited for the guard.",
          "With a ______ in one hand, and a ______ he bought from ______ in the other, he leapt across the gap.",
          "With a ______ in one hand, and a ______ he obtained from ______ in the other, he entered the vault.",
          "With a ______ in one hand, and a ______ she wrestled from ______ in the other, she swung across the ledge."
        ],
        paragraph: "The height was dizzying. She steeled herself. With a ______ in one hand, and a ______ she bought from ______ in the other, she continued to climb."
      },
      { 
        title: "The Nested Who", 
        formula: "Noun, who [detail], [action].", 
        example: "Plain: 'The man smiled.' -> Katana: 'The man, <u>who</u> had not spoken for years, finally smiled.'",
        drills: [
          "The old man [add WHO statement here] smiled.",
          "The ninja [add WHO statement here] moved across the roof.",
          "The guard [add WHO statement here] yawned loudly.",
          "The emperor [add WHO statement here] looked bored.",
          "The scroll [add WHICH statement here] remained hidden."
        ],
        paragraph: "Panic erupted. Soldiers scrambled. The exhausted general, [add who statement here] fled into the night."
      },
      { 
        title: "Dual Perspective", 
        formula: "[Perspective A]...; [Perspective B]...", 
        example: "Plain: Inside was warm.' -> Katana: '<u>Outside</u>, the storm raged; ,<u>inside</u>, the fire flickered peacefully.",
        drills: [
          "Before the battle, his hands trembled; after ______.",
          "Ahead the path led into the dark bamboo forest; behind ______.",
          "Outside the dojo, the roaring storm raged; inside ______.",
"High in the tall pine trees, the scout watched closely; low in the bushes ______.",
"Near the heavy wooden gates, the warriors stood ready; far away ______."
        ],
        paragraph: "Dark clouds drifted. The night waited. Above the sleeping guards, the ninja crept across the roof; below ______."
      }
    ],

    // 5. LITERARY LOTUS (6 Devices - Drills converted to Plain Statements)
    lotus: [
      { 
        title: "Simile", 
        formula: "Using like or as.", 
        example: "Plain: He was stealthy. -> Bloomed: He moved like a shadow slipping through a keyhole.",
        drills: ["The moon was bright.", "His sword was cold.", "Shadows were dark.", "The roof was slippery.", "He was quiet."], 
        paragraph: "With the mission completed, he vanished like a [think of a clever comparison]." 
      },
      { 
        title: "Metaphor", 
        formula: "Direct comparison.", 
        example: "Plain: The sun was hot. -> Bloomed: The sun was a golden furnace, melting the horizon.",
        drills: ["The moon was round.", "His heart felt no emotion.", "The sword was cold.", "The forest had nowhere to run.", "The night hid everything."], 
        paragraph: "Night fell. The moon was a [think of a great way to describe the moon]." 
      },
      { 
        title: "Personification", 
        formula: "Human Traits.", 
        example: "Plain: The wind blew. -> Bloomed: The wind howled its ancient secrets through the trees.",
        drills: ["The wind sang.", "The sword hungered.", "Shadows reached.", "The ground groaned.", "The trees whispered."], 
        paragraph: "The storm arrived. Its fury spreading. The lightning [choose an action humans perform] across the peaks." 
      },
      { 
        title: "Asyndeton", 
        formula: "No conjunctions (and).", 
        example: "Plain: He ran and jumped and then he disappeared. -> Bloomed: He sprinted, vaulted, vanished.",
        drills: ["He ran and jumped and fell.", "She saw and came and won.", "I worked and I strove and I won.", "They struck and fought and left.", "She waited and watched and then listened."], 
        paragraph: "With the guards hot on his heels, speed mattered. He sprinted before he leapt and then he vanished into the fog." 
      },
      { 
        title: "Onomatopoeia", 
        formula: "Sound words.", 
        example: "Plain: The bell rang. -> Bloomed: The iron bell clanged, sending birds scattering. More great examples: the blade hissed, the fire roared, the shuriken whirred, the steel clanged, the arrow whistled, the bamboo cracked, the smoke bomb popped, the fuse sizzled, the gravel crunched, the armor clattered, the floorboards creaked, the rope snapped, the gong crashed, the silk robes swooshed, the dagger thudded.",
        drills: ["As they warriors entered, the bell ______.", "As she leapt into the foray, her blade ______.", "As they stepped silently across, the roof ______.", "Consuming the building, the fire ______.", "Diving into the lake, the water ______."], 
        paragraph: "Silence broke. The steel ______ against the stone floor." 
      },
      { 
        title: "Alliteration", 
        formula: "Repeated sounds.", 
        example: "Plain: Shadows moved. -> Bloomed: Seven silent shadows slid across the shingles.",
        drills: ["Write a sentence including warrior shadows.", "Write a sentence including shining steel.", "Write a sentence including bitter blades.", "Write a sentence including fierce fires.", "Write a sentence including dark dreams."], 
        paragraph: "He waited. Finish the sentence about silent shadows." 
      }
    ],

    // 6. 7-FOLD PATH (7 Archetypes - 7th is Story)
    path7: [
      { 
        title: "Action", 
        formula: "Subject + Verb.", 
        example: "Plain: He ran. -> Path: Sprinting across the clay tiles, the warrior vaulted the wall.",
        drills: ["The ninja moved.", "The warrior went over the wall.", "The guard turned around.", "She jumped down.", "They ran away."], 
        paragraph: "Chaos erupted. Scrambling across the loose shingles, the ninja ______." 
      },
      { 
        title: "Atmosphere", 
        formula: "Environment.", 
        example: "Plain: It was cold. -> Path: A bitter, freezing wind howled through the empty pagoda.",
        drills: ["It was cold.", "The sky was dark.", "Snow fell.", "The air was thick.", "Mist rose."], 
        paragraph: "The night changed. A bitter wind howled." 
      },
      { 
        title: "Thinking", 
        formula: "Internal monologue.", 
        example: "Plain: He knew it. -> Path: He realized the trap was set the moment the door clicked shut.",
        drills: ["He wondered if he was seen.", "She realized it was a trap.", "The guard thought he heard a noise.", "He knew he was late.", "She doubted her strength."], 
        paragraph: "Doubt crept in. He realized the mission was a set-up." 
      },
      { 
        title: "Feeling", 
        formula: "Visceral reaction.", 
        example: "Plain: He was scared. -> Path: A cold sweat broke across his brow as his lungs began to burn.",
        drills: ["His heart beat fast.", "She felt scared.", "Lungs burned.", "Sweat dripped.", "Eyes stung."], 
        paragraph: "Pressure mounted. A cold sweat broke across his brow." 
      },
      { 
        title: "Dialogue", 
        formula: "Spoken Word.", 
        example: "Plain: He said stop. -> Path: 'Freeze!' the master barked, his hand hovering over the hilt.",
        drills: ["'Stop!' he said.", "'Go!' she cried.", "'Who's there?' he barked.", "'Help,' she whispered.", "'No,' they said."], 
        paragraph: "Voice. 'Who goes there?' the man barked." 
      },
      { 
        title: "Description", 
        formula: "Static Details.", 
        example: "Plain: The wall was black. -> Path: The wall was a monolithic block of obsidian stone, cold to the touch.",
        drills: ["The sword was sharp.", "The wall was high.", "The mask was black.", "The gold was heavy.", "The rope was thin."], 
        paragraph: "Sight. The wall was obsidian stone." 
      },
      { 
        title: "Story", 
        formula: "Narrative Progress.", 
        example: "Plain: He remembered things. -> Path: He remembered the master's final words before the betrayal flared in his mind.",
        drills: ["He remembered home.", "The past hit him.", "He saw the master.", "The memory flared.", "Training returned."], 
        paragraph: "Recall. He remembered the master's final words." 
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