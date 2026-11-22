import React from 'react';

export const arcInfo = {
  number: 1,
  name: 'Gravity Arc',
  storyTitle: 'The Legend of Seven Colours',
  subtitle: 'Blood calls the darkness. The darkness answers.',
  seriesLabel: 'A Web Novel of the World of Zephyr',
  worldTag: 'Arc I — The Halwen Spiral',
};

export const TitleEmblem = () => (
  <svg className="title-emblem" fill="none" viewbox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
    <circle cx="40" cy="40" opacity="0.4" r="38" stroke="#c8a84b" strokeWidth="0.75"></circle>
    <circle cx="40" cy="40" opacity="0.25" r="30" stroke="#c8a84b" strokeWidth="0.5"></circle>
    <path d="M40 10 L40 70 M10 40 L70 40" opacity="0.2" stroke="#c8a84b" strokeWidth="0.5"></path>
    <path d="M40 15 L55 30 L55 50 L40 65 L25 50 L25 30 Z" fill="none" opacity="0.5" stroke="#c8a84b" strokeWidth="0.75"></path>
    <path d="M40 22 C45 30 50 32 50 40 C50 48 45 50 40 58 C35 50 30 48 30 40 C30 32 35 30 40 22Z" fill="#8b2020" opacity="0.6"></path>
    <circle cx="40" cy="40" fill="#c8a84b" opacity="0.8" r="3"></circle>
    <path d="M40 25 L42 35 L40 37 L38 35Z M40 55 L42 45 L40 43 L38 45Z" fill="#c8a84b" opacity="0.4"></path>
  </svg>
);

export const worldIntro = () => (
  <div className="world-intro">
    <span className="world-intro-label">Before the story begins</span>
    <blockquote>
      <p>“Somewhere beyond the edge of every map, the sky meets the earth in seven colours—and the world has never agreed on what waits there.”</p>
      <p>“If you heard that as a child, would you have believed it?”</p>
    </blockquote>
    <p>One evening, beneath a fading sky, a woman asks two children that very question. Then she places a shard of glass in a boy’s hand and begins to tell him a story.</p>
    <p>Listen closely. This is where it starts.</p>
  </div>
);

export const chapters = [
  {
    id: 'ch1',
    number: 1,
    numberText: "Chapter One",
    title: "The Rainbow at the End of the World",
    epigraph: "",
    sideImages: [],
    content: () => (
      <>

        <div className="prose">
          <p>The wheat went on forever.</p>
          <p>It rolled gold under the evening wind, bending all one way and then all the other, like something breathing. A single tree stood in the middle of it, old enough that its roots had cracked the soil into little dry rivers, and in its shade sat a woman with her knees tucked beneath her, and a boy, and a girl small enough that she still needed both hands to hold her cup.</p>
          <p>The woman was not looking at either of them. She was looking west, where the sun had gone soft and orange and the first colour-bleed of dusk was starting to climb the sky.</p>
          <p>“Do you know,” she said, “that there is a place where the sky touches the ground and doesn’t let go?”</p>
          <p>The girl looked up first. The boy pretended he hadn't been listening, and then listened anyway.</p>
          <p>“Beyond every sea anyone has bothered to name,” she began, “beyond kingdoms that don't even know each other exist, lies a land where seven colours meet the land and never fade. They do not appear only after the rain, nor vanish with the sun. They remain forever, painting every hill, every river, every flower, and every sky in seven eternal colours.” </p>
          <p>“That’s not real,” the boy said, in the specific tone of someone who wanted to be told he was wrong.</p>
          <p>“Maybe not,” she agreed, far too easily. “But they say if you reach it — truly reach it, with nothing left of the person who started the journey — it grants you everything you want in the world. Not what you ask for. What you want.”</p>
          <p>She reached into the fold of her sleeve and pressed something small and cool into his palm before he even saw her hand move. A shard of glass no bigger than a fingernail, cut so badly it should have been thrown away — except that when he tilted it, it broke the dying sunlight into a thin, stubborn rainbow across his own skin.</p>
          <p>“Keep that,” she said, “and let me tell you about a man who went looking for it.”</p>
          <p>The girl shuffled closer. The boy closed his fingers around the glass, and didn't argue.</p>
          <p>“There once was a man,” she began, “who decided that of all the things a person could chase — gold, or crowns, or someone else’s approval — the only one worth an entire life was freedom. So he left everything he had. And he walked.”</p>
          <p>The wind kept moving through the field. The light kept dying at the edge of it. And somewhere in the space between one of her sentences and the next —</p>
          <p>— the color went out of the world.</p>
          <div className="scene-break">✦ ✦ ✦</div>
          <p>Not all at once. First the orange left the sky, the way it does at the end of any ordinary evening. Then the gold left the wheat. Then the wheat left.</p>
          <p>He was running through something that had been a field a moment ago and was a treeline now, black trunks whipping past on either side, his breath tearing out of him in a rhythm too fast to be his own. Behind him, low to the ground, four shapes kept pace — wrong-jointed, grinning with too many teeth, close enough that he could hear the wet click of their tongues between breaths.</p>
          <p>There was a weight against his side. A satchel, strap crossed over his chest, and inside it something small enough to fit in one hand — he didn't look, didn't need to, his arm was already locked around it like it was the only true thing left standing.</p>
          <p>A smaller shape stumbled two steps behind him, gasping, and he slowed — just slightly, just enough — to close the gap, to put himself between the shape and the sound of teeth. He didn't think about it. There wasn't room to think. There was only the small, absolute fact that whoever this was would not be the one who got caught.</p>
          <p>A goblin lunged from the left. He turned into it instead of away — wrong instinct, right instinct, he'd never know which — and drove his shoulder into its chest hard enough to spill them both into the underbrush, buying two seconds, maybe three, and he used every one of them shoving the smaller shape forward, toward a gap in the trees, toward anywhere that wasn't here.</p>
          <p>“Go,” he said, or tried to, and it came out as barely more than air.</p>
          <p>Something raked across his back. He didn't scream — there wasn't time for that either — he just kept moving, dragging his own body forward on legs that had stopped answering properly, one hand still locked over the strap of the satchel because whatever else the forest took from him tonight, it was not getting that.</p>
          <p>The ground disappeared.</p>
          <p>There was a half-second of pure falling, root and stone and black air, and then impact, and then something worse than impact — a soft give, earth crumbling around him into a space that hadn't existed until his weight found it, and he rolled through darkness that smelled of wet stone and old roots until he finally, mercifully, stopped.</p>
          <p>Silence. Ringing, complete silence, the kind that comes after too much noise rather than before it.</p>
          <p>Then, from somewhere very far above, or very far inside his own skull — a sound. Small. Patient.</p>
          <p>Knock.</p>
          <p>Knock.</p>
          <p>Knock.</p>
          <div className="scene-break">✦ ✦ ✦</div>
          <p>His eyes opened onto a low wooden ceiling, warped grain running across it in long brown lines, and the knocking resolved itself into something else entirely — a bell, deep and unhurried, ringing out somewhere above deck.</p>
          <p>He was lying in a narrow berth wedged into the corner of a cabin that smelled like salt and tar and other people's boots. Sunlight came in slats through a shuttered porthole and lay across the floor in stripes. His shirt was damp with sweat, not blood, and when he reached back to touch his shoulder — out of habit, out of a dream already dissolving faster than he could hold onto it — there was nothing there. No claw marks. No forest.</p>
          <p>Just a satchel, still slung across his chest even in sleep, one hand resting on top of it like it had never let go.</p>
          <p>“Port ahead!” someone bellowed from above, followed by the thunder of feet crossing planks. “Aurelios in sight! All hands topside, you lazy barnacles!”</p>
          <p>He sat up slowly, working a knot out of his neck, and became aware that the small table bolted beside his berth had two faint, glowing eyes etched into its wood grain, and that those eyes were currently open and pointed at him.</p>
          <p>“Rough night?” the table asked, in the dry, unbothered voice of something that had asked the same question of several hundred other passengers. “You were mumbling. Also drooling. I’d apologize for listening, but I don’t have ears, so really that one’s on you.”</p>
          <p>Across the cabin, a folded deck chair leaning in the corner gave a long, creaking sigh, the wood equivalent of a groan.</p>
          <p>“Oh, don’t start,” it said. “Three hundred years bolted to this route and not once has anything interesting happened. Same port. Same bell. Same seventeen idiots who fall asleep in their boots.”</p>
          <p>“Sixteen,” the table corrected. “He kept his off.”</p>
          <p>He looked down. He had, in fact, kept his boots off. He laughed — short, rough, more surprised out of him than chosen — and swung his legs over the edge of the berth.</p>
          <p>“Glad my footwear could bring some excitement to your day,” he said, pulling them on.</p>
          <p>“Don’t encourage it,” the table said. “It’ll start writing poetry about the sea again. Last time it took four days and none of it rhymed.”</p>
          <p>The chair made a wooden noise that was probably offended. He was still smiling when he pushed the cabin door open and climbed up into the light.</p>
          <div className="scene-break">✦ ✦ ✦</div>
          <p>The deck was chaos in the good way — sailors hauling rope, gulls wheeling and screaming overhead, and beyond the rail, rising out of morning haze, a city that did not look like it should be able to stand the way it was standing.</p>
          <p>Towers leaned at angles no ordinary stone should hold, propped up by nothing he could see, and here and there between them small clusters of light drifted at the height of the rooftops — not lanterns, nothing burning — just light, pale and slow, bobbing like lazy fish through the air. Along the docks, crates the size of wagons rose off the ground in ones and twos, cradled in nothing, drifting toward warehouses at the unhurried pace of men who trusted the crates to arrive on their own. A merchant near the gangplank had a table of crystals laid out on dark cloth, each one holding a faint, trapped color like a held breath, and a line of buyers waited with the patience of people who did this every week.</p>
          <p>Someone walked past in a robe stitched with lines of silver thread that moved — actually moved, crawling slowly around the fabric like water finding the shape of a bowl. A hulking, scaled creature the size of a plow-horse padded along at its owner's heel, docile as a dog, snorting steam through both nostrils. Runes were carved into the very stone of the harbor wall, glowing faint blue where the morning damp touched them.</p>
          <p>He came down the gangplank with the rest of the passengers, a small, unremarkable weight of coins in one pocket and the satchel still crossed over his chest, and he did not try very hard to hide that he was staring.</p>
          <p>“First time in Arcaelis?”</p>
          <p>The voice came from a woman leaning against a post near the harbor gate, arms crossed, a badge shaped like an open book pinned to her coat. She wasn't looking at him unkindly — more like someone who'd clocked the particular way new arrivals stood, feet planted, neck craned back too far, and had decided to save him the trouble of looking lost for the next hour.</p>
          <p>“That obvious?” he said.</p>
          <p>“You’re looking at the floating crates like they owe you money,” she said. “Come on. Guild pays me to walk newcomers through the square once a day so they don’t wander into the wrong district and get charmed out of their coin purse. You look like you could use it.”</p>
          <p>He fell into step beside her, mostly because he had nowhere better to be and she seemed to know where she was going, which put her one full step ahead of him on every measure that mattered.</p>
          <p>“Arcaelis runs on mana,” she said, waving a hand at the harbor like it was self-evident. “Not the way a river runs through a valley — more like blood runs through a body. It’s in the stone under your boots right now. It’s in half the goods on this dock. People here have been building on top of it for so many generations they stopped noticing it was strange.”</p>
          <p>“And the towers that shouldn’t be standing?” he asked.</p>
          <p>“Aren’t,” she said cheerfully. “They’re held up by people who are very confident and very good at their jobs. If you’re after that kind of work, the Academy takes talented mages, though they’re particular about talented. If you’d rather hit things, the Mercenary Guild has a hall two streets past the square — can’t miss it, it’s the one that occasionally catches fire. And if you’re thinking of heading out past the walls at all, register with the Adventurer’s Bureau first. Dying anonymously is bad for the city’s numbers.”</p>
          <p>He huffed something close to a laugh. She glanced sideways at him, not unfriendly, sizing him up the way people here apparently did as a reflex — quick, assessing, already moving on.</p>
          <p>“You don’t have to pick anything today,” she added, softer, like she'd noticed something in his silence that wasn’t just travel-tiredness. “Most people wash up on this dock chasing something. Doesn’t hurt to look around first.”</p>
          <p>“I’ll keep that in mind,” he said, and meant it more than she could have known.</p>
          <div className="scene-break">✦ ✦ ✦</div>
          <p>The square opened up ahead of them all at once — fountains that ran upward instead of down, a crowd thick enough to get lost in, and past all of it, so tall it seemed to be holding up the sky rather than reaching for it, a single spire wrapped in slow-turning rings of light that vanished into the clouds and did not come back down. Somewhere above the rooftops, a long, dark shape banked once against the morning sun and was gone before he could be sure he'd seen it at all. A knot of people near a notice board were arguing over something pinned there — a face sketched in charcoal, a number beneath it too large to be anything but a bounty. And at the very edge of the square, still as a post, a figure in a deep hood stood facing the crowd instead of the fountains, which was the wrong direction for someone just admiring the view.</p>
          <p>He didn't approach any of it. That wasn't him. If it wanted his attention, it would have to come find him — he had no plans to go looking for trouble on his first morning in a new world.</p>
          <p>His hand drifted, unbidden, into the fold of his shirt, and found the small shard of glass still there, warm from his own skin, and for just a moment he turned it toward the sun and watched it throw a thin, stubborn rainbow across his palm.</p>
          <p>Arcaelis, he thought. So this is where my journey truly begins.</p>
        </div>

      </>
    )
  }
];
