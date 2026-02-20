<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta http-equiv="Content-Style-Type" content="text/css">
  <title></title>
  <meta name="Generator" content="Cocoa HTML Writer">
  <meta name="CocoaVersion" content="2299.77">
  <style type="text/css">
    p.p1 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Helvetica}
    p.p2 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Helvetica; min-height: 14.0px}
  </style>
</head>
<body>
<p class="p1">/**</p>
<p class="p1"><span class="Apple-converted-space"> </span>* THE WRITING DOJO - MASTER CONTENT DATABASE</p>
<p class="p1"><span class="Apple-converted-space"> </span>* Save this file as: content.js</p>
<p class="p1"><span class="Apple-converted-space"> </span>*/</p>
<p class="p2"><br></p>
<p class="p1">const DOJO_DATA = {</p>
<p class="p1"><span class="Apple-converted-space">  </span>unit1: {</p>
<p class="p1"><span class="Apple-converted-space">    </span>id: 1,</p>
<p class="p1"><span class="Apple-converted-space">    </span>title: "The Rooftop Ninja",</p>
<p class="p1"><span class="Apple-converted-space">    </span>yearLevel: "Year 4-6",</p>
<p class="p1"><span class="Apple-converted-space">    </span>themeColor: "indigo",</p>
<p class="p1"><span class="Apple-converted-space">    </span>wordBank: ["obsidian", "shingle", "ridge", "silhouette", "steel", "stealth", "vigilant"],</p>
<p class="p2"><span class="Apple-converted-space">    </span></p>
<p class="p1"><span class="Apple-converted-space">    </span>// 1. VERB SHURIKEN</p>
<p class="p1"><span class="Apple-converted-space">    </span>shuriken: {</p>
<p class="p1"><span class="Apple-converted-space">      </span>targets: [</p>
<p class="p1"><span class="Apple-converted-space">        </span>{ prefix: "The spy ", weak: "went", suffix: " across the clay tiles.", hints: ["sprinted", "crept", "leapt"] },</p>
<p class="p1"><span class="Apple-converted-space">        </span>{ prefix: "He ", weak: "looked", suffix: " at the guards below.", hints: ["observed", "scanned", "spied"] },</p>
<p class="p1"><span class="Apple-converted-space">        </span>{ prefix: "A warning bell ", weak: "rang", suffix: " in the distance.", hints: ["clanged", "echoed", "reverberated"] },</p>
<p class="p1"><span class="Apple-converted-space">        </span>{ prefix: "She ", weak: "held", suffix: " her breath.", hints: ["stifled", "suppressed"] },</p>
<p class="p1"><span class="Apple-converted-space">        </span>{ prefix: "The blade ", weak: "cut", suffix: " through the silk screen.", hints: ["sliced", "sheared"] }</p>
<p class="p1"><span class="Apple-converted-space">      </span>],</p>
<p class="p1"><span class="Apple-converted-space">      </span>paragraph: "Hidden by the dark, the ninja {went} over the wall. He {looked} at the emperor's bedroom. Below, a guard {said} a joke to his partner. If he failed now, the mission {ended}."</p>
<p class="p1"><span class="Apple-converted-space">    </span>},</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-converted-space">    </span>// 2. DESCRIPTOR DAGGERS</p>
<p class="p1"><span class="Apple-converted-space">    </span>daggers: {</p>
<p class="p1"><span class="Apple-converted-space">      </span>targets: [</p>
<p class="p1"><span class="Apple-converted-space">        </span>{ prefix: "The moon hung in the ", weak: "dark", suffix: " sky.", hints: ["ink-stained", "obsidian"] },</p>
<p class="p1"><span class="Apple-converted-space">        </span>{ prefix: "He gripped the ", weak: "cold", suffix: " steel of his blade.", hints: ["ice-slicked", "numbing"] },</p>
<p class="p1"><span class="Apple-converted-space">        </span>{ prefix: "The guards looked ", weak: "scary", suffix: " in their black armor.", hints: ["menacing", "imposing"] },</p>
<p class="p1"><span class="Apple-converted-space">        </span>{ prefix: "A ", weak: "small", suffix: " sound came from the garden.", hints: ["faint", "barely-audible"] },</p>
<p class="p1"><span class="Apple-converted-space">        </span>{ prefix: "The shadows were ", weak: "long", suffix: " against the walls.", hints: ["elongated", "stretching"] }</p>
<p class="p1"><span class="Apple-converted-space">      </span>],</p>
<p class="p1"><span class="Apple-converted-space">      </span>paragraph: "A {big} shadow moved across the {red} rooftop. The air felt {cold} as the ninja prepared his {sharp} weapon. One mistake would lead to a {bad} fate."</p>
<p class="p1"><span class="Apple-converted-space">    </span>},</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-converted-space">    </span>// 3. FILTER ASSASSIN</p>
<p class="p1"><span class="Apple-converted-space">    </span>assassin: {</p>
<p class="p1"><span class="Apple-converted-space">      </span>targets: [</p>
<p class="p1"><span class="Apple-converted-space">        </span>{ prefix: "He ", weak: "saw", suffix: " the stars reflecting on his sword.", target: "He saw" },</p>
<p class="p1"><span class="Apple-converted-space">        </span>{ prefix: "I ", weak: "heard", suffix: " the breathing of the guard.", target: "I heard" },</p>
<p class="p1"><span class="Apple-converted-space">        </span>{ prefix: "She ", weak: "felt", suffix: " the rough shingles.", target: "She felt" },</p>
<p class="p1"><span class="Apple-converted-space">        </span>{ prefix: "The spy ", weak: "noticed", suffix: " a gap in security.", target: "noticed" },</p>
<p class="p1"><span class="Apple-converted-space">        </span>{ prefix: "They ", weak: "watched", suffix: " the cloud cover the moon.", target: "watched" }</p>
<p class="p1"><span class="Apple-converted-space">      </span>],</p>
<p class="p1"><span class="Apple-converted-space">      </span>paragraph: "{I saw} the castle gates open. {I heard} the thunder roar. {I felt} the rain hit my armor. {I realized} the battle was starting."</p>
<p class="p1"><span class="Apple-converted-space">    </span>},</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-converted-space">    </span>// 4. STEALTH STARTERS</p>
<p class="p1"><span class="Apple-converted-space">    </span>starters: [</p>
<p class="p1"><span class="Apple-converted-space">      </span>{ type: "Adverb (-ly)", weak: "He moved silently across the roof." },</p>
<p class="p1"><span class="Apple-converted-space">      </span>{ type: "Preposition (Location)", weak: "The sword was hidden beneath his cloak." },</p>
<p class="p1"><span class="Apple-converted-space">      </span>{ type: "Participle (-ing)", weak: "He balanced on the ridge and waited." },</p>
<p class="p1"><span class="Apple-converted-space">      </span>{ type: "Subordinate (Condition)", weak: "The tiles were slippery because it was raining." },</p>
<p class="p1"><span class="Apple-converted-space">      </span>{ type: "Momentum (Instant)", weak: "The roof tiles gave way suddenly." }</p>
<p class="p1"><span class="Apple-converted-space">    </span>],</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-converted-space">    </span>// 5. DOJO OF SENSES</p>
<p class="p1"><span class="Apple-converted-space">    </span>senses: [</p>
<p class="p1"><span class="Apple-converted-space">      </span>{ type: "Sight", weak: "The sword looked bright." },</p>
<p class="p1"><span class="Apple-converted-space">      </span>{ type: "Sound", weak: "It was very quiet." },</p>
<p class="p1"><span class="Apple-converted-space">      </span>{ type: "Smell", weak: "The garden smelled nice." },</p>
<p class="p1"><span class="Apple-converted-space">      </span>{ type: "Touch", weak: "The wood was rough." },</p>
<p class="p1"><span class="Apple-converted-space">      </span>{ type: "Internal/Taste", weak: "He felt very scared." }</p>
<p class="p1"><span class="Apple-converted-space">    </span>],</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-converted-space">    </span>// 6. LITERARY LOTUS</p>
<p class="p1"><span class="Apple-converted-space">    </span>lotus: [</p>
<p class="p1"><span class="Apple-converted-space">      </span>{ title: "Comparisons", formula: "Simile/Metaphor.", description: "Direct imagery.", drills: ["The moon was a ball.", "He moved like a ghost."], paragraph: "The night was deep. &lt;span id='p-target' class='bg-rose-100 px-2'&gt;The moon was a glowing eye in the sky.&lt;/span&gt;" },</p>
<p class="p1"><span class="Apple-converted-space">      </span>{ title: "Asyndeton", formula: "No 'and'.", description: "Frantic speed.", drills: ["He ran and jumped and fell."], paragraph: "Panic erupted. &lt;span id='p-target' class='bg-rose-100 px-2'&gt;He sprinted, leapt, vanished into the dark.&lt;/span&gt;" },</p>
<p class="p1"><span class="Apple-converted-space">      </span>{ title: "Polysyndeton", formula: "Extra 'and'.", description: "Heavy details.", drills: ["Gold and silver and gems."], paragraph: "The weight hit him. &lt;span id='p-target' class='bg-rose-100 px-2'&gt;There was the gate and the guard and the climb.&lt;/span&gt;" },</p>
<p class="p1"><span class="Apple-converted-space">      </span>{ title: "Synecdoche", formula: "Part for Whole.", description: "Focal detail.", drills: ["He drew his steel."], paragraph: "War was coming. &lt;span id='p-target' class='bg-rose-100 px-2'&gt;Cold steel met cold steel in the moonlight.&lt;/span&gt;" },</p>
<p class="p1"><span class="Apple-converted-space">      </span>{ title: "Repetition", formula: "Focus theme.", description: "Dramatic impact.", drills: ["He ran and ran."], paragraph: "He was trapped. &lt;span id='p-target' class='bg-rose-100 px-2'&gt;Shadows in the hall, shadows in his mind.&lt;/span&gt;" },</p>
<p class="p1"><span class="Apple-converted-space">      </span>{ title: "Juxtaposition", formula: "Opposites.", description: "Highlight contrast.", drills: ["Hot and cold."], paragraph: "Jarring contrast. &lt;span id='p-target' class='bg-rose-100 px-2'&gt;Absolute silence broken by the thunder of his heart.&lt;/span&gt;" },</p>
<p class="p1"><span class="Apple-converted-space">      </span>{ title: "Personification", formula: "Human Action.", description: "Inanimate life.", drills: ["The wind blew."], paragraph: "Hostile night. &lt;span id='p-target' class='bg-rose-100 px-2'&gt;The wind screamed through the valley.&lt;/span&gt;" },</p>
<p class="p1"><span class="Apple-converted-space">      </span>{ title: "Alliteration", formula: "Sonic repetition.", description: "Rhythmic branding.", drills: ["Soft stones."], paragraph: "Atmospheric. &lt;span id='p-target' class='bg-rose-100 px-2'&gt;Soft shadows stretched across the stone.&lt;/span&gt;" },</p>
<p class="p1"><span class="Apple-converted-space">      </span>{ title: "Rule of 3", formula: "Pattern of 3.", description: "Completion.", drills: ["Fast, quiet, deadly."], paragraph: "The intruder. &lt;span id='p-target' class='bg-rose-100 px-2'&gt;Shadow. Steel. Silence.&lt;/span&gt;" }</p>
<p class="p1"><span class="Apple-converted-space">    </span>],</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-converted-space">    </span>// 7. SYNTAX KATANA</p>
<p class="p1"><span class="Apple-converted-space">    </span>katana: [</p>
<p class="p1"><span class="Apple-converted-space">      </span>{ title: "Triple Punchers", formula: "Action x3.", description: "Rhythmic speed.", drills: ["He climbed and looked and jumped."], paragraph: "Quiet castle. &lt;span id='p-target' class='bg-rose-100 px-2'&gt;The shadow moved, stopped, and vanished.&lt;/span&gt;" },</p>
<p class="p1"><span class="Apple-converted-space">      </span>{ title: "Quadruple Verb", formula: "-ing + 3 verbs.", description: "Cinematic cut.", drills: ["Running, he jumped and fell."], paragraph: "Momentum. &lt;span id='p-target' class='bg-rose-100 px-2'&gt;Leaping, the ninja scanned the roof, breathed, and struck.&lt;/span&gt;" },</p>
<p class="p1"><span class="Apple-converted-space">      </span>{ title: "The Nested Who", formula: "Character detail.", description: "Nuance without drag.", drills: ["The ninja was fast."], paragraph: "The gate. &lt;span id='p-target' class='bg-rose-100 px-2'&gt;The samurai, who stood like stone, refused to move.&lt;/span&gt;" },</p>
<p class="p1"><span class="Apple-converted-space">      </span>{ title: "Em-Dash Reveal", formula: "Shock reveal.", description: "Narrative twist.", drills: ["He saw the box."], paragraph: "Silence. &lt;span id='p-target' class='bg-rose-100 px-2'&gt;The ninja looked in the mirror — he saw a monster.&lt;/span&gt;" },</p>
<p class="p1"><span class="Apple-converted-space">      </span>{ title: "The Colon Sniper", formula: "Focus noun.", description: "Target vision.", drills: ["He saw gold."], paragraph: "Cold room. &lt;span id='p-target' class='bg-rose-100 px-2'&gt;He only cared about one thing: the scroll.&lt;/span&gt;" },</p>
<p class="p1"><span class="Apple-converted-space">      </span>{ title: "Participle Sprints", formula: "-ing layers.", description: "Frantic energy.", drills: ["Running, jumping."], paragraph: "Safe now. &lt;span id='p-target' class='bg-rose-100 px-2'&gt;Running, sliding, the hero reached the door.&lt;/span&gt;" }</p>
<p class="p1"><span class="Apple-converted-space">    </span>],</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-converted-space">    </span>// 8. 7-FOLD PATH</p>
<p class="p1"><span class="Apple-converted-space">    </span>path7: [</p>
<p class="p1"><span class="Apple-converted-space">      </span>{ title: "Action Path", formula: "Subject + Verb.", drills: ["He went."], paragraph: "Began. &lt;span id='p-target' class='bg-rose-100 px-2'&gt;The ninja sprinted across the clay.&lt;/span&gt;" },</p>
<p class="p1"><span class="Apple-converted-space">      </span>{ title: "Description Path", formula: "Sensory Fact.", drills: ["Big castle."], paragraph: "Looked. &lt;span id='p-target' class='bg-rose-100 px-2'&gt;The rooftops were a jagged mountain range.&lt;/span&gt;" },</p>
<p class="p1"><span class="Apple-converted-space">      </span>{ title: "Thinking Path", formula: "Internal Logic.", drills: ["He thought."], paragraph: "Froze. &lt;span id='p-target' class='bg-rose-100 px-2'&gt;He wondered if the Master would forgive him.&lt;/span&gt;" },</p>
<p class="p1"><span class="Apple-converted-space">      </span>{ title: "Feeling Path", formula: "Visceral reaction.", drills: ["He felt scared."], paragraph: "Moved. &lt;span id='p-target' class='bg-rose-100 px-2'&gt;A cold prickle of fear ran down his spine.&lt;/span&gt;" },</p>
<p class="p1"><span class="Apple-converted-space">      </span>{ title: "Atmosphere Path", formula: "Environment.", drills: ["Cold air."], paragraph: "Tension. &lt;span id='p-target' class='bg-rose-100 px-2'&gt;The air grew thick with jasmine.&lt;/span&gt;" },</p>
<p class="p1"><span class="Apple-converted-space">      </span>{ title: "Dialogue Path", formula: "Spoken Word.", drills: ["'Stop'."], paragraph: "Voice. &lt;span id='p-target' class='bg-rose-100 px-2'&gt;'Who goes there?' the sentry bellowed.&lt;/span&gt;" },</p>
<p class="p1"><span class="Apple-converted-space">      </span>{ title: "Story Path", formula: "Zingy Detail.", drills: ["A shingle."], paragraph: "Empty. &lt;span id='p-target' class='bg-rose-100 px-2'&gt;A single loose shingle was the only evidence.&lt;/span&gt;" }</p>
<p class="p1"><span class="Apple-converted-space">    </span>],</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-converted-space">    </span>// 9. THE MASTER SCROLL (THE FINAL BOSS)</p>
<p class="p1"><span class="Apple-converted-space">    </span>masterScroll: {</p>
<p class="p1"><span class="Apple-converted-space">      </span>// 58 Word Boring Passage</p>
<p class="p1"><span class="Apple-converted-space">      </span>passage: "The ninja was very quiet as he moved across the roof. He saw the big castle in front of him. He felt scared of the guards. He went down the long rope slowly. He heard a loud noise behind him. He realized he was caught by the enemy. He ran away fast to the trees to hide from them.",</p>
<p class="p1"><span class="Apple-converted-space">      </span>checkpoints: [</p>
<p class="p1"><span class="Apple-converted-space">        </span>{ title: "Verb Shuriken", hint: "Replace 'moved', 'went', and 'ran' with high-octane verbs like 'sprinted' or 'slithered'." },</p>
<p class="p1"><span class="Apple-converted-space">        </span>{ title: "Descriptor Daggers", hint: "Kill 'quiet' and 'big'. Use obsidian, formidable, or immense." },</p>
<p class="p1"><span class="Apple-converted-space">        </span>{ title: "Filter Assassin", hint: "Kill 'He saw' and 'He felt'. Put the reader directly into the action." },</p>
<p class="p1"><span class="Apple-converted-space">        </span>{ title: "Stealth Starters", hint: "Break the 'He/The' pattern with Adverb or Participle openings." },</p>
<p class="p1"><span class="Apple-converted-space">        </span>{ title: "Dojo of Senses", hint: "Show us the fear through physical facts—sweaty palms or a thumping heart." },</p>
<p class="p1"><span class="Apple-converted-space">        </span>{ title: "Syntax Katana", hint: "Use a Triple Puncher (Action. Action. Impact.) for the escape." },</p>
<p class="p1"><span class="Apple-converted-space">        </span>{ title: "7-Fold Path", hint: "Ensure you have a balance of Action, Thinking, and Atmosphere beats." },</p>
<p class="p1"><span class="Apple-converted-space">        </span>{ title: "Literary Lotus", hint: "Add a powerful Metaphor or some Alliteration to build the mood." }</p>
<p class="p1"><span class="Apple-converted-space">      </span>]</p>
<p class="p1"><span class="Apple-converted-space">    </span>}</p>
<p class="p1"><span class="Apple-converted-space">  </span>}</p>
<p class="p1">};</p>
</body>
</html>
