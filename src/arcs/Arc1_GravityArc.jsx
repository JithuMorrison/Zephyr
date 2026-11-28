import React from 'react';

export const arcInfo = {
  number: 1,
  name: 'Gravity Arc',
  storyTitle: 'The Legend of Seven Colours',
  subtitle: 'Beyond the edge of every map, seven colours wait.',
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
  },
  {
    id: 'ch2',
    number: 2,
    numberText: "Chapter Two",
    title: "Where Journeys Begin",
    epigraph: "",
    sideImages: [],
    content: () => (
      <div className="prose">
          <p>Finding the Adventurer’s Guild was simple enough that Zillian almost didn't need directions. He only had to follow the current — the flow of carts, porters, and gray-cloaked figures with iron badges pinned to their collars, all moving toward the same wide street.</p>
          <p>He let himself be carried by it for a while.</p>
          <p>The tower found him again before the guild did. It rose somewhere past the rooftops to the north, rings turning slow around its upper half like the shadow of some far larger, invisible machine. He'd seen it this morning from the harbour and thought his eyes were playing tricks, the distance bending it into something impossible. It hadn't looked any smaller up close. If anything, the rings moved faster than he remembered, and there was no sound to them at all — no grinding, no hum, just silence wrapped around something that should not have been quiet.</p>
          <p>He stopped walking. A porter clipped his shoulder with a crate and didn't apologize.</p>
          <p>"First time seeing the Gravity Spire?"</p>
          <p>Zillian didn't know the man who'd said it. He was already past him, already gone, and Zillian was left standing there with his neck craned, feeling foolish and unable to stop.</p>
          <p>He made himself walk again.</p>
          <p>The guild announced itself before he saw the sign. Noise first — the particular noise of too many people arguing about money in too small a space. Then the building itself, squat and wide where everything else in Eleris seemed to reach upward, its stone worn pale at the corners from decades of shoulders and crates dragged through the doorway.</p>
          <p>Inside, it was worse and better than he expected.</p>
          <p>A man was asleep in a chair near the window, mouth open, one boot off, a half-empty mug still balanced in the crook of his arm like his hand had known to hold on even after the rest of him gave out. Two adventurers were locked in an argument at the request board, close enough to spit, one of them holding a torn flyer like it was evidence in a trial.</p>
          <p>"—said report the crate's condition, not bring back what's left of it—"</p>
          <p>"It was already broken when I got there!"</p>
          <p>"That's not what the flyer—"</p>
          <p>Someone walked past Zillian's shoulder carrying what he was fairly sure had been a boar an hour ago, most of it still recognizably a boar, blood dried dark down the carrier's forearm like it was nothing at all, a Tuesday. Near the counter a woman in a dented breastplate was complaining loudly to no one in particular about payment that should have cleared two days ago, and being ignored with the specific patience of people who had heard this complaint before and knew it would resolve itself eventually. Somewhere near the back, a small cluster of people were laughing too loud at something, mugs raised in what looked like a toast to somebody's successful return, and one of them caught Zillian's eye and raised a mug at him too, for no reason at all, just because he was standing in the doorway looking lost.</p>
          <p>It didn't feel like a guild hall so much as a room that had simply given up trying to be one thing. Half tavern, half battlefield report, half something Zillian didn't have a word for yet — the smell of ale and blood and old paper all sitting on top of each other without apology.</p>
          <p>He was still looking lost when he heard his name.</p>
          <p>"You made it."</p>
          <p>She was behind the long counter that ran the width of the far wall, sleeves pushed up, hair pulled back in a way it hadn't been before. It took him a second to place her without the road dust on her coat.</p>
          <p>"You work here too?"</p>
          <p>"Told you I worked for the guild." She said it like he should have connected that himself, not unkindly, just efficient. Then her eyes moved — down to the way he was standing, the stiffness in it, the obvious I am here to do the thing you told me to do — and something in her expression settled into recognition. "You're here to register."</p>
          <p>"If that's — yes."</p>
          <p>"Come on, then."</p>
          <p>She reached under the counter and came up with a short stack of paper, already reaching for a pen before he'd finished walking over.</p>
          <p>"Name."</p>
          <p>"Zillian."</p>
          <p>"Age."</p>
          <p>"Seventeen."</p>
          <p>"Place of origin."</p>
          <p>He hesitated, just slightly, in a way he hoped didn't show. "Zaria, Valkryn."</p>
          <p>"Valkryn, yeah?" Melena glanced up at that, something almost approving crossing her face before she looked back down at the paper. "That's a good place. Plenty of good weapon users come out of Valkryn. You should be one, with roots like that."</p>
          <p>He didn't correct her. He wasn't entirely sure yet what there was to correct.</p>
          <p>"So," she said, pen already moving again, "what's your Class?"</p>
          <p>"I don't — I'm not sure what you mean."</p>
          <p>"Combat class. What you fight as, mostly. Warrior, mage, archer, that sort of thing." She glanced at him properly for the first time since he'd sat down. "Ever used a sword?"</p>
          <p>"A little. Not — not really trained. Just enough to know which end is which."</p>
          <p>"Warrior, then. We'll sort the specifics out later, once you've actually swung one for us to watch." She wrote it down before he could argue, which was fine, because he had nothing to argue with.</p>
          <p>"Weapon?"</p>
          <p>"None."</p>
          <p>"Previous experience?"</p>
          <p>"None."</p>
          <p>She set the pen down and looked at the sheet for a moment, not with judgment, just the particular patience of someone who filled out a lot of these and had learned not to read too much into what wasn't there.</p>
          <p>Then she reached below the counter again and slid a card across to him. Plain, gray-edged, his name already worked into it in a hand neater than the one she'd used on the paperwork — some seal or stamp, he guessed, already prepared.</p>
          <p>"You've been registered as an F-rank adventurer."</p>
          <p>He turned it over. Just the letter, stamped small in the corner. "F-rank?"</p>
          <p>"Everyone starts there. Ranks go F to E, D, C, B, A, S." She counted them off without needing to think about it, the way anyone recites something they stopped finding remarkable years ago. "And past S, if anyone ever actually gets there — we don't rank those the same way anymore. We just call them Transcendents. There's no letter left that means anything once you're past S."</p>
          <p>"Transcendents."</p>
          <p>"Don't get ahead of yourself." Not unkind, just amused. "Higher letter, more trust." She said trust like she meant it precisely, not carelessly. "It isn't a measure of how strong you are. Plenty of F-ranks could take an E-rank apart in a fair fight. It's how much the guild is willing to risk on you — civilians, money, other adventurers. The higher the rank, the more of that gets put in your hands."</p>
          <p>"So, it's not — I'm not being told I'm weak."</p>
          <p>"No." She said it flatly, like the question was reasonable and she'd answered it before. "You're being told nobody's seen you do anything yet."</p>
          <p>That, at least, he could argue with. It was fair.</p>
          <p>"Welcome to the Eleris Adventurers' Guild," she said, and there was something almost formal in the way she said it, a line she'd clearly said before and meant every time regardless. Then, lighter: "I'm Melena, by the way. In case you were going to keep calling me 'the woman from the docks' in your head."</p>
          <p>"I wasn't."</p>
          <p>"You were."</p>
          <p>He didn't argue that either.</p>
          <p>"For what it's worth," she added, sliding the paperwork into a drawer beneath the counter, "Eleris isn't a bad place to start. Biggest port in Solvara, or near enough that people stopped arguing about it years ago. Half the kingdom's trade comes through this harbour one way or another. Means there's always work, if you're willing to look for it — and the guild here's bigger than most, so you won't run out of the small stuff before you're ready for the rest."</p>
          <p>"Is that why there's so many of you? Adventurers, I mean."</p>
          <p>"That, and the gravity work. City draws people who want to study it, and people who want to profit off the ones studying it, and people like you who just needed somewhere to land." She said it lightly, without asking what had brought him, and he was grateful for that more than he let on.</p>
          <p>"So," he said, once the card was in his pocket and it was starting to feel like the conversation should move somewhere, "what can an F-rank actually do?"</p>
          <p>"Come on."</p>
          <p>She came around the counter and led him toward the far wall, where a wide board held more paper than wall. Flyers in every colour, layered three and four deep in places, some curling at the corners from age.</p>
          <p>"Purple ones are F-rank," she said, tapping a cluster near eye level. "Rest are ranked up from there — green, then blue, then it starts getting complicated. You'll learn the colours eventually, everyone does whether they mean to or not." She pulled five from the board without much hesitation, like she already knew which ones she wanted him to see, and laid them out on a nearby table, brushing dust off one of them with the side of her hand before setting it down.</p>
          <p>"These'd suit a beginner."</p>
          <p>The first was barely a page. Dockside Delivery — a sealed package, guild to warehouse, harbour-side. "Low pay," she said, "but nothing's going to happen to you carrying it."</p>
          <p>The second: Lost Pet: Kitte. A merchant's pet, escaped somewhere into the lower market. "Exactly what it sounds like."</p>
          <p>“You ever seen a Kitte?”</p>
          <p>He shook his head.</p>
          <p>“Small bird,” she explained. “Lightning affinity. Stores lightning in its feathers when it gets frightened. Cute little things, right up until they panic.”</p>
          <p>She tapped the notice.</p>
          <p>“Exactly what it sounds like. Find the bird, bring it back, collect the pay.”</p>
          <p>Third, Herb Gathering — a list of plants, an area past the city wall, a quota. "Simple. Boring. Some people prefer boring."</p>
          <p>Fourth made him pause. Fallen Cargo. A crate had slipped from a gravity-platform in transit; find it, report its condition. "That one's more Eleris-specific," Melena said, watching him read it twice. "Things fall out of the sky here more than you'd think."</p>
          <p>The fifth she held onto a moment longer before setting it down.</p>
          <p>Old Mansion — Garden Maintenance.</p>
          <p>"This one's probably the easiest of the five."</p>
          <p>"Garden maintenance?"</p>
          <p>"Trim the hedges. Clear weeds. Look after a few plants. That's about the whole of it."</p>
          <p>"Who owns the mansion?"</p>
          <p>She paused — not long, barely a breath, but he noticed it. "Someone wealthy."</p>
          <p>He looked down at the flyer again. It gave no name. No location beyond outside the city, west road. "That's vague."</p>
          <p>Melena's fingers rested on the edge of the flyer. “There are rumours about the place.”</p>
          <p>“What kind of rumours?”</p>
          <p>She hesitated. “That it's haunted.”</p>
          <p>He looked up at her.</p>
          <p>“Rumours,” she repeated, almost defensively. “Probably nothing more than that.”</p>
          <p>"The guild doesn't ask you to investigate the clients," she said plainly, already reaching to gather the other four flyers back into a stack, already moving past it. To her it was clearly the least interesting job on the table, not a mystery, just a chore somebody with more money than patience had decided not to do themselves.</p>
          <p>Zillian didn't take it. He didn't take any of them.</p>
          <p>"I'll decide later."</p>
          <p>"That's fine. They'll still be here — well, four of them will. Dockside delivery gets snapped up fast, everyone likes easy coin." She shrugged, unbothered either way. "Take your time."</p>
          <p>He folded nothing, took nothing, and found himself asking instead, “Is there a good place I can stay?”</p>
          <p>"The Resting Anchor. Two streets down, take the left past the fountain that doesn't work anymore. Tell them the guild sent you, they'll not charge you the tourist rate."</p>
          <p>The inn was exactly what its name promised and nothing more — a squat building that didn't try to be anything other than a place to sleep, its sign faded enough that Resting was easier to read than Anchor. The innkeeper barely looked up from her ledger when he paid, just slid a key across and told him the room number twice in case he hadn't heard the first time.</p>
          <p>The room was small. The window wasn't.</p>
          <p>He hadn't meant to stand at it as long as he did.</p>
          <p>Eleris didn't go dark the way Zaria had. Gravity lanterns hung strung between buildings and along the harbour rails, pale blue-white, drifting very slightly on threads too fine to see, so that the whole lower city seemed to breathe. Cargo floated at anchor above the docks, waiting on whatever schedule moved it, lit from below by the same light. Ships sat dark against it, masts like something drawn in charcoal. And past all of it, unmistakable even at night, the tower — rings still turning, catching light none of the lanterns could explain.</p>
          <p>Downstairs, through the floor, voices carried up in the particular murmur of people who'd had a few drinks and stopped keeping their volume in check. Laughter, somewhere in it, and the scrape of a chair, and beneath all of it the low, steady rhythm of people talking about something they'd clearly talked about before and would talk about again before it actually happened.</p>
          <p>"—day after tomorrow, then. The ceremony."</p>
          <p>"Zan Gravelle. Who else would it be?"</p>
          <p>"Bridge of Falling Stars, that's not nothing. Duke Alaric did two-ninety-nine in his year, you know."</p>
          <p>"Everyone knows that. Question's whether the boy's got his father in him or his mother."</p>
          <p>A round of laughter followed that Zillian didn't understand the shape of, something clearly meant fondly rather than cruelly, the kind of joke a whole city could share about a family it had watched for generations.</p>
          <p>Zillian didn't know the name. He didn't know what a ceremony had to do with a bridge, or falling stars, or why the words seemed to matter enough that the room downstairs went briefly, strangely quiet around them before the conversation picked back up, softer, like something people said only half out loud even among friends.</p>
          <p>He filed it away — one more thing about this city he didn't yet understand, one more thread among the tower and the guild card and the mansion flyer he still hadn't taken — and let the window and the light outside pull his attention back. The gravity lanterns didn't flicker the way flame did. They simply held their light, patient, unbothered, the whole harbour breathing slow beneath them.</p>
          <p>Tomorrow he'd pick a mission. Take his first job, follow wherever it led, and see what kind of adventure waited on the other side of it.</p>
          <p>Tonight, eventually, neither the window nor the light outside could keep him awake either.</p>
      </div>
    )
  },
  {
    id: 'ch3',
    number: 3,
    numberText: "Chapter Three",
    title: "Silver for a Memory",
    epigraph: "",
    sideImages: [],
    content: () => (
      <div className="prose">
          <p>Morning came into the room the way it did in every unfamiliar bed — too bright, too sudden, arriving before he was ready to be a person again. Zillian lay there a moment longer than he needed to, listening to the gulls outside and the low creak of the inn settling around him, before he remembered where he was.</p>
          <p>He dressed, and before anything else, before breakfast, before the guild, he checked the satchel.</p>
          <p>The shard was still there. Wrapped in the same scrap of cloth it had always been wrapped in, small enough to lose in a fold of fabric, cut so poorly it should never have survived long enough to matter to anyone. He didn't unwrap it. He didn't need to. He simply needed to know it hadn't gone anywhere in the night, the way he checked every morning without quite admitting to himself that he did.</p>
          <p>He asked the innkeeper for directions before he left, and she gave them without looking up from her ledger, the same way she'd handed him his key the night before — competent, uninterested, entirely unbothered by one more stranger asking one more question.</p>
          <p>The street outside was already busy in the unhurried way mornings were busy here — bakers setting out trays, a boy dragging a cart twice his size, someone airing bedding out of a second-floor window without much concern for who walked beneath it. Zillian let the noise carry him the way it had the day before, in no particular rush now that the one thing he'd meant to protect was still safely wrapped against his side.</p>
          <p>The shop she'd sent him to sat between a cooper's and a place that smelled powerfully of leather, its window crowded with things half-finished — a bracelet missing its clasp, a hinge waiting on a box that wasn't there yet, a scatter of small gears that might have belonged to a clock or a compass or nothing at all. A bell above the door announced him before he'd fully stepped inside.</p>
          <p>The craftsman behind the counter didn't look up immediately. He was old in the way that suggested his hands had outlasted most of the rest of him — thick-veined, ink-stained at the knuckles, moving with the unhurried certainty of someone who'd repaired ten thousand small broken things and expected the ten-thousand-and-first to be no different.</p>
          <p>"Morning," he said, finally glancing up. "What's broken?"</p>
          <p>"Nothing's broken. I want something made." Zillian reached into the satchel and drew the shard out, unwrapping it with more care than the cloth probably deserved, and set it on the counter between them.</p>
          <p>The craftsman picked it up before he said anything else. Turned it once, then again, angling it toward the window until the poor, uneven cut of it caught the morning light and threw a thin, stubborn rainbow across the counter's wood grain — there and gone, there and gone, as he tilted his wrist.</p>
          <p>"Interesting piece." He said it slowly, the way a man says something he means rather than something he's obligated to say to a customer. "Where'd this come from?"</p>
          <p>"It was my mother's." Zillian didn't elaborate, and something in his tone must have made it clear he wasn't going to.</p>
          <p>The old man didn't push. He set the shard back down, gently, like he understood now that it deserved gentleness. "What do you want done with it?"</p>
          <p>"Can you make it into something I can wear?"</p>
          <p>"A pendant?"</p>
          <p>Zillian thought about that — pictured it hanging loose on a chain, catching on things, swinging where anyone could grab it or see it plainly. It didn't feel right.</p>
          <p>"A locket," he said instead. "Something that closes."</p>
          <p>The craftsman's eyebrows rose, just slightly, an old man's version of curiosity too polite to become a question. "Sentimental?"</p>
          <p>"Something like that."</p>
          <p>That was all he offered, and the craftsman, to his credit, didn't ask for more. He turned the shard over one final time, considering the setting it would need, the metal that would hold a piece that fragile without cracking it further.</p>
          <p>"I can do it," he said. "Silver casing, hinge on the left, something to keep the glass from taking any more damage than it's already got. Two days."</p>
          <p>"Two days," Zillian repeated, and found he didn't mind the wait as much as he thought he might.</p>
          <p>He left the shard where the craftsman had set it, on a square of felt behind the counter, and walked back out into the noise of the street feeling strangely lighter for having let go of something he'd carried without setting down for longer than he could remember.</p>
          <p>The guild hall was already loud by the time he reached it, though not yet at the pitch it would climb to later — a warm-up noise, adventurers trickling in for the day's boards, mugs being poured before anyone had properly earned them. The man who'd been asleep in the chair yesterday was gone, though the chair itself looked like it might still remember the shape of him. Near the back wall, someone had stacked a second crate of returned flyers on top of the old wooden rack that held the guild's overflow notices, and the whole thing leaned a few careless degrees further than it should have — the kind of thing nobody fixes until it falls on somebody. He noticed it the way he noticed most things lately.</p>
          <p>He went straight to the mission table where the five flyers still sat where he and Melena had left them the day before, or copies close enough to them that he didn't examine too closely which. Dockside Delivery was gone, as she'd warned him it would be. The other four remained.</p>
          <p>He didn't hesitate this time. He picked up the fifth.</p>
          <p>Old Mansion — Garden Maintenance.</p>
          <p>He was still holding it, turning toward the registration counter to have it logged, when the noise behind him changed shape.</p>
          <p>It wasn't loud at first. It was the kind of loud that arrives as a held breath in a room before it becomes actual shouting — a scrape of a bench pushed back too hard, a voice pitched low and furious instead of raised.</p>
          <p>"You knew that quest was mine."</p>
          <p>The man saying it was enormous in the specific way that made furniture look temporary around him — shoulders that filled a doorway, forearms like something carved rather than grown, a great curved axe strapped across his back that he clearly considered an extension of his own arm rather than a separate object. He was standing over a much smaller adventurer, a wiry man half his height who'd gone very still in the particular way people go still when they've done the math and don't like the answer.</p>
          <p>"It was still on the board," the smaller man said, careful, hands slightly raised. "I didn't take it off anyone. I just took it."</p>
          <p>“My party called that quest an hour before you walked in. Gravity Veins pays well enough to be worth the trouble, and now it's yours.”</p>
          <p>"Called it where? It wasn't marked. There's no marking system for calling a board quest, there's never been—"</p>
          <p>"Don't tell me the rules." The big man's voice dropped further, which was somehow worse than if he'd shouted. "I told the board attendant this morning. I told half the room. You knew."</p>
          <p>"I didn't hear anything—"</p>
          <p>A hand closed around the smaller man's collar before he finished the sentence.</p>
          <p>The room, which had been pretending not to watch, stopped pretending.</p>
          <p>Zillian, mission flyer still in hand, felt the old and entirely reasonable instinct to become extremely interested in a wall. He had no stake in this. He didn't know either man. He was one day into a new city and had exactly no interest in being remembered as the F-rank who'd inserted himself into a fight between adventurers who could, between them, probably remove a limb without much effort.</p>
          <p>He started to turn away — and then didn't, quite.</p>
          <p>It wasn't nobility. He told himself that clearly, in the half-second he had to tell himself anything. It was the plain, practical math of it: a man that size didn't know how to pull a punch, and the smaller one wasn't going to get back up from a full swing the way he might from a shove. Someone was about to actually get hurt over a delivery job, in a room full of people who'd apparently decided it wasn't their business either. And Zillian, who badly wanted no part of any of this, also badly didn't want to watch it happen and do nothing while he still had the chance not to.</p>
          <p>He was three steps away from the leaning rack. Close enough.</p>
          <p>The big man's arm drew back.</p>
          <p>Zillian didn't shove it. He barely had to. The rack was already top-heavy, already tilted past whatever balance it had been built to hold — it needed one honest push in the direction it already wanted to fall, and his shoulder, moving past it at exactly the wrong angle for anyone watching and exactly the right one for what he needed, gave it that.</p>
          <p>The rack went over all at once, crashing down with a splintering bang that seemed to physically silence the room a half-second before the sound had even finished traveling.</p>
          <p>The smaller adventurer flinched at the sudden noise, stumbling backward out of range on pure reflex.</p>
          <p>The big man's fist stopped halfway through its arc, his head snapping toward the crash, anger overridden for one heartbeat by pure surprise. Then his eyes found the smaller adventurer again — already retreating, already off balance — and whatever had startled him burned off fast, replaced by the same fury as before, aimed exactly where it had been aimed the whole time.</p>
          <p>"You think that changes anything—"</p>
          <p>He was already moving forward, past the wreckage, reaching again.</p>
          <p>"Enough."</p>
          <p>The voice cut through before he'd closed the distance. Its owner shouldered in without particular urgency, a broad greatsword slung across his back and a cloth headband dark with old sweat, moving like a man who had done this exact thing more times than he could count and had stopped finding it interesting several dozen fights ago. He put himself flatly between the two of them, one hand flat against the big man's chest, not shoving, just present.</p>
          <p>“Rack’s on the floor, nobody’s bleeding, and you—” a look at the big man, unimpressed, “—nearly put a fist through a man's skull over a quest worth less than the drinks you'll owe for the trouble you've caused. Sit down.”</p>
          <p>The big man didn't sit down, but he didn't push forward either, which seemed to be the actual bar being cleared. He gathered whatever was left of his dignity, retrieved his axe from where it had shifted against his back, and stalked toward the door without another word, shouldering past two adventurers who wisely made room. He never so much as glanced at Zillian — as far as the big man was concerned, a rack had fallen, that was all, an accident with unfortunate timing and nothing more.</p>
          <p>Somewhere behind Zillian, the fallen rack found its voice, low and creaking and thoroughly aggrieved.</p>
          <p>"Honestly. Years of standing in the same spot, minding my own business, and this is what I get."</p>
          <p>Zillian glanced back at it despite himself.</p>
          <p>The rack creaked again. "Don't look at me. You knocked me over."</p>
          <p>He gave it a small, apologetic wave and turned away before anyone noticed him having what amounted to a conversation with furniture.</p>
          <p>Melena had already crossed half the room, staring at him with an expression working very hard to decide between disbelief and something closer to suspicion.</p>
          <p>"Did you just—"</p>
          <p>"The floor looked uneven," Zillian said.</p>
          <p>"The floor," Melena said, very evenly, "is perfectly flat."</p>
          <p>"Then I suppose the rack was."</p>
          <p>Somewhere near the counter, one of the older guild staff exhaled a long, weary sigh — the sound of a person filing this under Tuesday rather than incident.</p>
          <p>The smaller adventurer straightened his collar, glanced once at the wreckage, and then, briefly, at Zillian — not quite a thank-you, nothing so obvious as that, just a small, private nod, the kind one stranger gives another when they both know something happened that neither of them is going to talk about. Then he was gone, back into the crowd, already trying to look like a man who hadn't nearly lost a fight two minutes ago.</p>
          <p>Zillian, mission flyer still miraculously uncrumpled in his hand, walked to the registration counter and set it down before Melena had finished deciding what to say to him.</p>
          <p>"I'll take this one," he said.</p>
          <p>She looked at him for a long moment, then down at the flyer, then back at him, and something in her face gave up trying to make sense of the last two minutes.</p>
          <p>"Fine," she said, stamping it with more force than strictly necessary. "Try not to knock over a wall on your way out."</p>
          <p>"No promises."</p>
          <p>The square outside had none of the guild's noise in it, only the ordinary business of a city going about its morning — carts, gulls, the distant clang of something being worked at the harbour. Zillian was halfway across it when a small person nearby caught his attention without meaning to.</p>
          <p>A priestess was crossing the square, unhurried, a small shrine pendant resting against her chest catching the light the way holy things always seemed to in this city. An adventurer intercepted her before she'd gone far, falling into step beside her with the eager, slightly clumsy energy of someone who'd been building up the courage to ask something for a while.</p>
          <p>"Excuse me, Priestess. Can I get a power boost from a god?"</p>
          <p>The priestess smiled, unhurried by the question. "Perhaps. What is your class?"</p>
          <p>"Assassin."</p>
          <p>"Then you would want to seek the blessing of a god whose domain complements your path. A god of shadows, perhaps. Or one of stealth and deception."</p>
          <p>“So, the blessing depends on what you can do?”</p>
          <p>“In part. A god's blessing should strengthen the path you've chosen, not pull you away from it. An Arcane God might deepen your mana and sharpen your spells. A god of strength or battle might grant greater physical power. Endurance. Even strength upon the blade.”</p>
          <p>The adventurer nodded slowly, clearly filing each answer away with more seriousness than the question had seemed to warrant a moment ago.</p>
          <p>“And I can just choose any god?”</p>
          <p>“You can choose whom you worship.” A faint, knowing edge came into her voice. “Whether that god chooses to bless you in return is another matter entirely.”</p>
          <p>That seemed to quiet him more than anything else she'd said.</p>
          <p>“If you seek an Arcane God,” she went on, “there is a temple here in Eleris — the Temple of Kaleris, on Starfall Avenue, beside the eastern edge of the Spire.”</p>
          <p>The adventurer nodded. “And the others?”</p>
          <p>“Their temples aren't here. You'll have to find them elsewhere.”</p>
          <p>The young adventurer thanked her and wandered off, visibly turning something over in his mind.</p>
          <p>The priestess gave him a small nod, then continued on toward one of the side streets branching off the square, her shrine pendant catching the morning light as she disappeared around the corner.</p>
          <p>Zillian kept walking. He was warrior on the guild's ledger, and hadn't really chosen that so much as had it be the only word he'd had an answer for. He found himself wondering, briefly and without quite deciding to, what a god would make of an eye that saw colours nobody else seemed to see — whether warrior was even the right thing to bring in front of one. He didn't have coin to spare on the question today, and the mansion wasn't going to wait on it either. He set the thought aside, not gone, just put down for later, the way he'd left the shard on the craftsman's felt.</p>
          <p>Starfall Avenue. The eastern edge of the Spire.</p>
          <p>He turned toward the west road, toward a mansion whose owner nobody in Eleris seemed willing to name.</p>
          <div className="scene-break">✦ ✦ ✦</div>
          <p>Elsewhere in the city, in a quarter where the gravity lanterns burned lower and the streets emptied earlier, a hooded figure walked alone beneath a colonnade of pale stone.</p>
          <p>He stopped where the light fell least, and drew the hood back.</p>
          <p>The hair beneath it was red — deep and unmistakable.</p>
          <p>He reached inside his coat and pulled out a small, weathered picture. held it beneath the faint lantern light.</p>
          <p>The man in the picture looked to be somewhere in his forties, perhaps forty-five. His skin was unnaturally pale, his features sharp and finely cut, with smooth skin that seemed almost untouched by age. His eyes were a deep crimson, and slightly pointed ears showed through his neatly arranged hair.</p>
          <p>He was dressed like a nobleman of an old and wealthy house — a long charcoal and burgundy coat, high-collared and elegant, fastened with a clasp shaped like a closed eye. A plain dark ring rested on one finger, while an intricate insignia adorned his chest.</p>
          <p>There was something unsettling about him. Not because he looked monstrous. Because he didn't.</p>
          <p>He looked refined. Composed. Almost impossibly elegant — the sort of man who could walk into a royal hall and belong there without anyone questioning why.</p>
          <p>The red-haired man stared at the picture for a long moment.</p>
          <p>He folded the picture, slipped it back inside his coat, and drew his hood up again.</p>
          <p>Without another word, he disappeared beneath the pale stone arches.</p>
      </div>
    )
  },
  {
    id: 'ch4',
    number: 4,
    numberText: "Chapter Four",
    title: "The Garden of Silence",
    epigraph: "",
    sideImages: [],
    content: () => (
      <div className="prose">
          <p>The cart let him off where the road stopped pretending to be a road — packed dirt giving way to something narrower, hedged on both sides, the noise of the city already thinned to almost nothing behind him. The driver didn't wait for a tip or a thank-you. He turned the horse around before Zillian had even finished stepping down, like the west road wasn't somewhere he cared to sit idle, and left him standing alone with the dust still settling around his boots.</p>
          <p>Zillian walked the rest of it. The hedges on either side grew taller as the drive wound on, thick and dark green, trimmed with a precision that felt almost mathematical, and somewhere past the second bend the city noise gave out entirely, replaced by nothing at all — no birdsong, no wind through the leaves, just the small, private sound of his own footsteps on packed dirt.</p>
          <p>The mansion stood at the end of a long gravel drive, and it took Zillian a moment to understand what was bothering him about it, because nothing about it was wrong exactly. It was large. Old, in the particular way that suggested money rather than neglect — dark stone softened at the corners by ivy that had clearly been allowed to grow there on purpose, tall windows catching the morning light at precise, even intervals, a roofline that hadn't sagged an inch in however many decades it had been standing. Everything about it was elegant. Everything about it was well kept.</p>
          <p>It was also, he realized, far too quiet.</p>
          <p>No birds. No servants crossing the grounds, no sound of anyone working, no smoke from a kitchen chimney at an hour when there ought to have been. A house this size should have had people spilling out of every door — grooms in the stables, someone airing linens, at minimum the ordinary hum of a place with more rooms than anyone had use for. Instead, the whole estate sat under a stillness so complete it felt less like peace and more like held breath.</p>
          <p>The garden past the gate did nothing to make him feel better.</p>
          <p>It was enormous, sprawling on both sides of the drive, and must have taken a small army to maintain. Hedges were cut into shapes too precise to be accidental, while flowers bloomed in colours that had no business appearing this late in the season. Some of it, if anything, looked healthier than it should have. A climbing vine along the east wall had grown in a slow, deliberate spiral that no ordinary plant chose on its own. A row of tall white blooms near the drive leaned, every one of them, toward the same corner of the garden, away from the sun rather than toward it.</p>
          <p>For a place this large, Zillian thought, standing at the edge of it all, there really aren't many people around.</p>
          <p>"You're the adventurer?"</p>
          <p>He turned.</p>
          <p>A gardener stood a few paces off, having arrived without the crunch of gravel that should have announced him, a pair of shears held loosely in one hand.</p>
          <p>He was tall, gaunt in a way that made his coat hang oddly from his shoulders, his skin a dull ash-gray stretched tight over prominent bones. His eyes sat deep in their sockets, glowing a muted yellow that never seemed to blink. When he turned his head, there was a slight hesitation to the movement, as though the body needed a moment to remember how living creatures bent their necks. His long fingers ended in dark, thickened nails better suited for digging than pruning, though they handled the shears with practiced precision. A faint scent clung to him—not rot, but freshly disturbed earth mixed with damp stone, like the air inside an old crypt.</p>
          <p>He looked the gardener over with more curiosity than caution, deciding that, whatever else he was, he didn't seem dangerous.</p>
          <p>"Who are you?"</p>
          <p>"Marrow." The gardener said it the way one says a fact rather than an introduction, no particular weight attached to it. "I keep the grounds. You were sent about the garden work."</p>
          <p>"That's right." Zillian held up the flyer, mostly out of habit, though Marrow didn't so much as glance at it.</p>
          <p>Up close, the stiffness in the way he held himself was more obvious—shoulders set at an angle that looked almost correct and wasn't quite. There was something subtly wrong with the way he stood, as though he'd learned how a person was supposed to carry himself without ever quite understanding why. Zillian looked at him plainly, the way he'd learned to look at things in Eleris that turned out to be stranger than expected.</p>
          <p>"You don't look like you spend much time in the sun."</p>
          <p>"Gardening does not require sunlight."</p>
          <p>"Fair enough."</p>
          <p>Marrow didn't seem to find the exchange strange, which suggested to Zillian that this wasn't the first time someone had commented on it, or that Marrow simply didn't register the comment as commentary at all. He turned without further preamble and started along the gravel path, and Zillian fell into step behind him, glancing once, briefly, at the mansion's tall dark windows before making himself look away.</p>
          <p>"The eastern hedge needs trimming," Marrow said, walking. "The dead flowers must be removed from the front beds. The western beds need watering — the well is behind the second shed, you'll find buckets there." He stopped at a fork in the path, where one route curved toward a low stone wall thick with dark red blooms, each flower nearly black at its center. "Do not touch the black roses."</p>
          <p>"Why?"</p>
          <p>"Because I said so."</p>
          <p>Zillian waited for more. None came. "Fine. Anything else I should know? Anything that bites, anything that's poisonous to the touch, anything that keeps its own opinions about being watered?"</p>
          <p>"The hedge does not have opinions."</p>
          <p>"That wasn't really what I—" Zillian stopped himself. "Never mind."</p>
          <p>He decided, for now, that this was simply how Marrow spoke — economically, without decoration, the way someone talks when they've stopped expecting to be questioned.</p>
          <p>"And don't enter the mansion," Marrow added, already turning to go.</p>
          <p>"That's part of the property."</p>
          <p>"Yes."</p>
          <p>"So why can't I enter?"</p>
          <p>Marrow looked at him. It wasn't an unkind look, exactly. It was closer to the look of something that had been asked a question it considered already answered.</p>
          <p>"Because you were hired to tend the garden."</p>
          <p>"Right." Zillian turned the shears over once in his hand. "And if something inside needs tending?"</p>
          <p>"Nothing inside needs tending from you."</p>
          <p>He left it there and walked off toward the second shed, leaving Zillian alone at the fork in the path with a pair of shears someone had propped against the wall for him, a bucket, and considerably more curiosity than the job description had accounted for.</p>
          <div className="scene-break">✦ ✦ ✦</div>
          <p>The eastern hedge took longer than it should have, mostly because Zillian kept finding reasons to look up from it.</p>
          <p>The mansion sat at the center of everything, patient and silent, and more than once he caught himself watching one of its windows a beat too long, waiting for a curtain to move or a shape to cross behind the glass. Nothing ever did. Yet there was something about the house that made him uneasy — an oppressive stillness, a quiet that felt heavier than it should have. The garden around it felt warm and ordinary, alive with colour and the soft movement of leaves, but the mansion itself seemed to carry a darker presence, something ominous that lingered around its walls and pooled thickest near the ground-floor windows.</p>
          <p>He didn't stare at it directly. He'd learned, without ever being taught, that some things preferred not to be looked at too hard.</p>
          <p>By the time he'd worked his way around to the western beds, the sun had climbed high enough to make the bucket-hauling genuinely unpleasant, and he'd fallen into the particular rhythm manual work settled a person into — fill, carry, pour, repeat — that left just enough of his mind free to keep circling back to Marrow's flat little refusals. Because I said so. Because you were hired to tend the garden. Answers built to end a conversation rather than satisfy it. He filed the shape of that away too, the way he'd started filing most things about this city, and went back to the front bed to finish clearing the dead blooms.</p>
          <p>He went back to the hedge.</p>
          <p>It was somewhere in the middle of clearing the dead blooms from the front bed — pulling brittle, blackened stems free of otherwise healthy soil, an oddly specific kind of decay that seemed to only touch a plant here and there rather than spreading naturally from one to the next — that he heard the voice.</p>
          <p>"He's new."</p>
          <p>Zillian went still, shears half-closed around a stem.</p>
          <p>"Shh. Don't tell him."</p>
          <p>He looked down. The two flowers nearest his hand — pale, star-shaped things he didn't have a name for — had gone very slightly rigid on their stalks, the way a person goes rigid when they've just realized they've been overheard.</p>
          <p>"You're talking," Zillian said.</p>
          <p>Silence answered him. A long, uncomfortable, plant-shaped silence, the kind that comes from something that had clearly not expected to need to explain itself.</p>
          <p>Then, from somewhere further down the bed, smaller and more strangled: "He can hear us."</p>
          <p>"You could have started with that," Zillian said, and went back to clearing the dead stems, unbothered, as if a flower announcing its own shock at being overheard was simply one more strange fact to file away alongside talking furniture and floating crates.</p>
          <p>The silence that followed had a different texture to it now — considering, rather than frightened. He kept working, kept his hands moving, and didn't press. He'd learned that much too, somewhere between the ship and the guild hall: most things that could talk decided to, eventually, on their own schedule, and pushing only ever slowed that down.</p>
          <p>It was the third flower that finally spoke properly, in a voice thin and papery, like wind through dry stalks.</p>
          <p>"Something is wrong."</p>
          <p>Zillian didn't stop working, but he did slow. "Wrong how?"</p>
          <p>"The master came last night." Another voice picked it up, a different pitch, closer to the ground. "He was angry."</p>
          <p>"There was blood," said a third.</p>
          <p>Zillian set the shears down, carefully, in the grass beside him.</p>
          <p>"Whose?"</p>
          <p>Nothing answered for a long moment. The flowers seemed, in whatever way plants managed such things, to be conferring — a rustle that wasn't wind, a held quality to the air around the bed.</p>
          <p>"His," one finally said. "Probably."</p>
          <p>"Sometimes it is on his face," said another.</p>
          <p>"Sometimes on his hands," said a third, quieter.</p>
          <p>A pause. Then, from the same thin, papery voice that had spoken first:</p>
          <p>"He smiles when he has it."</p>
          <p>Zillian sat back on his heels, the dead stems forgotten in his lap.</p>
          <p>He wasn't frightened. That surprised him a little, distantly, the way it always did when his own reactions didn't match what he thought they were supposed to be. What he felt instead was a kind of narrowing — attention gathering itself the way it had in the guild hall, right before his shoulder had found the rack without asking his permission first.</p>
          <p>"Whose blood," he asked, quiet now, careful, "if not his own?"</p>
          <p>The flowers didn't answer that one. Whatever nerve had let them speak this far seemed to reach its limit all at once, stems going still, the papery voice folding back into silence like a door easing shut rather than slamming.</p>
          <p>Zillian sat with the quiet for a moment, turning it over. A master who came home angry, sometimes marked with blood that wasn't his, smiling when he wore it — and a gardener who wouldn't let anyone near the house, who answered every question with the same flat wall of a sentence. None of it, taken alone, proved anything. People got into fights. Nobles kept secrets for reasons that had nothing to do with anyone's throat. But it stacked oddly, all of it pointing the same uneasy direction, and Zillian had learned enough in the past few days to know that things which stacked this neatly rarely did so by accident.</p>
          <p>He looked, without meaning to, back toward the mansion — toward that same dull, pooled darkness sitting patient behind the ground-floor glass — and found he no longer had to work very hard at all to believe there was something in this garden worth being suspicious of.</p>
          <p>He thought of Marrow's flat, unbothered voice. Because you were hired to tend the garden. Not a threat. Not even really a refusal. Just a fact laid down like a wall, the kind that didn't need to explain itself because it had never once been tested.</p>
          <p>He picked the shears back up and went on trimming the hedge, methodical, unhurried, the picture of a boy doing exactly the job he'd been paid for and nothing more. It was, he thought, probably the safest thing he could look like right now.</p>
          <p>Somewhere behind him, unhurried, he heard the stiff, uneven tread of Marrow's footsteps returning along the gravel path, and he made himself look busy well before the gardener came close enough to notice he'd stopped. The black roses sat untouched at the fork in the path the entire time, dark red going almost to black at their centers, and Zillian found, more than once before the day was through, that his eyes kept drifting back to them anyway — not out of any wish to touch them, only the plain, stubborn curiosity of being told not to.</p>
      </div>
    )
  },
  {
    id: 'ch5',
    number: 5,
    numberText: "Chapter Five",
    title: "Beyond Ordinary Sight",
    epigraph: "",
    sideImages: [],
    content: () => (
      <div className="prose">
          <p>He finished the front bed before he let himself consider it properly.</p>
          <p>The thought had been sitting at the back of his mind since the flowers had gone quiet, patient and unhurried, the way most of his better instincts tended to be. He wanted to know what had made them fall silent in the first place — what was hidden within the mansion, and whether his left eye could reveal what ordinary sight could not.</p>
          <p>There didn't seem to be a better afternoon to find out than this one.</p>
          <p>He set the shears down in the grass, straightened, and let his gaze go soft the way it did on its own sometimes, except this time he reached for it instead of waiting for it to arrive — a small, deliberate unclenching somewhere behind his left eye, like relaxing a muscle he'd never known he had until he needed it.</p>
          <p>The garden changed all at once.</p>
          <p>Threads of pale gold ran through the soil beneath his boots, following the roots of the hedge like something breathing slow beneath the ground. The flowers that had spoken to him carried a faint, warm green about their stems, brightest near the base where the stalk met the earth, dimmer and more silvery further up where the petals opened toward the light. Further off, near the well, a thin blue haze clung to the stonework, old and settled, the kind of residue that came from decades of the same water being drawn the same way by the same patient hands. Even the shears in the grass held the barest trace of something — a dull amber, worn thin, the memory of every hand that had ever gripped them, layered so many times over that no single grip stood out from the rest.</p>
          <p>He turned in a slow circle, taking it in. Mana, he thought — that word fit the gold threading through the soil, something that moved like it wanted to be used. The green in the flowers felt different, quieter, closer to the plain fact of being alive; lifeforce, maybe, though he had no one to check the word against. The blue at the well was mana too, but different from the gold — cooler, calmer, carrying the unmistakable feel of water. Water-Attribute Mana, perhaps. He didn't have a name yet for whatever the amber in the shears was, only that it felt like memory more than magic.</p>
          <p>It was, for a moment, almost beautiful. Gold and green and blue, layered over each other in a way the ordinary world never let him see, all of it moving the way a held breath moves, slow and constant and alive.</p>
          <p>Then he looked up at the mansion, and the beauty of it went out like a snuffed candle.</p>
          <p>There was colour there too, but it was wrong in every way the garden's had been right. A dense, choked black-red pooled thick around the base of the walls, sinking deepest near the ground-floor windows exactly where he'd felt the weight of it before without being able to name what it was. It didn't move the way the garden's threads moved. It sat there, thick and congealed, like blood gone cold. It sat heavy against the stone, and for the first time, he understood what he was looking at.</p>
          <p>Dark magic was being used here.</p>
          <p>Zillian went very still.</p>
          <p>That's not normal, he thought, distant and clear, the way a thought arrives when the rest of you is too busy staring to help form it properly. Whatever he'd half-sensed all morning was worse now that he was actually looking. It sat over the house like something poured rather than grown, deliberate in a way nothing natural ever managed to be.</p>
          <p>He found himself walking before he'd properly decided to.</p>
          <p>Three steps. Four. The gravel shifted underfoot, loud in the stillness, and he was almost to the base of the shallow front steps before anything stopped him.</p>
          <p>"No."</p>
          <p>Marrow had appeared behind him again without the crunch of gravel that should have announced it, close enough now that Zillian stopped mid-stride rather than have the word land at his back.</p>
          <p>He turned. "I haven't done anything."</p>
          <p>"You're about to."</p>
          <p>Zillian looked past him, toward the door. "What's inside?"</p>
          <p>"The master's home."</p>
          <p>"And?"</p>
          <p>"And you were told not to enter."</p>
          <p>"You seem unusually serious about that."</p>
          <p>"Because you seem unusually interested."</p>
          <p>Something in the flatness of it had shifted, Zillian thought — not louder, not more urgent exactly, but with a weight behind it that hadn't been there over the black roses. Marrow's sunken yellow eyes held his without blinking, and when he spoke again it came out slower, each word set down like a stone meant to be the last one in a wall.</p>
          <p>"Never enter that house. For any reason."</p>
          <p>Zillian held the look a moment longer than was comfortable, turning the sentence over. It wasn't a threat. It didn't need to be. There was something almost like a warning underneath it that had nothing to do with rules or property lines — the tone of someone telling a person to step back from a ledge, not because they'd get in trouble for falling, but because they'd fall.</p>
          <p>He thought of the black-red pooled thick around the windows. He thought of blood on a face, blood on hands, a smile that came with it.</p>
          <p>He thought, too, of the card Melena had issued him, the plain gray edge of it, the letter F stamped small in the corner. It isn't a measure of how strong you are. It's how much the guild is willing to risk on you. Whatever was sitting behind that door, an F-rank adventurer barely two days into a new city had no business testing it out of curiosity alone.</p>
          <p>"Fine," he said, and meant it more than the word usually carried. "I'll finish the garden."</p>
          <p>Marrow didn't relax, exactly — nothing about him seemed built for relaxing — but something in his stiff shoulders settled half an inch, the tension easing the way a held door eases once the wind outside dies down.</p>
          <p>Zillian went back to work.</p>
          <div className="scene-break">✦ ✦ ✦</div>
          <p>He finished the western beds as the light started turning gold at the edges, watered what needed watering, trimmed what needed trimming, and gave the black roses a wide, deliberate berth on his way past that he suspected Marrow noticed and appreciated without ever saying so. The flowers stayed quiet the rest of the afternoon, which he chose to take as their own kind of caution rather than anything personal. Once, crossing back past their bed with an empty bucket, he thought he caught the faintest rustle of something considering whether to speak again, and then thinking better of it.</p>
          <p>Marrow met him at the fork in the path once the sun had properly started its descent, a small pouch of coin held out in one gray-green hand.</p>
          <p>"Adequate work," he said, which Zillian was fairly sure counted as high praise in whatever scale Marrow used for such things.</p>
          <p>"Thanks." Zillian took the pouch, weighed it once in his palm, and was tucking it into his satchel alongside the empty space where the shard usually sat when the gravel behind them shifted under a different tread entirely — lighter, unhurried, the sound of someone who had never once needed to hurry anywhere in his life.</p>
          <p>Marrow straightened. It wasn't dramatic. It was the particular stillness of someone snapping to attention without moving a single visible muscle, a stiffening that ran through his stooped shoulders and up into the set of his jaw.</p>
          <p>Zillian turned.</p>
          <p>The man coming up the drive was elegant in the specific way that made the word feel almost insufficient — dressed like old money that had never once needed to prove itself, a long coat in charcoal and burgundy, fastened neatly at the throat. A dark ring sat on one finger, worn the way a habit is worn rather than a decoration. His skin was pale in a way that had nothing to do with a lack of sun and everything to do with something else entirely, smooth and unlined despite the maturity in his features. His hair was neatly arranged, dark, and beneath it, for just a moment as he tilted his head, the faint point of an ear showed through. He moved without a single wasted motion, unhurried in a way that made the gravel itself seem to quiet down for him.</p>
          <p>His eyes were a deep, unhurried crimson, and when they caught the light they held it a half-second longer than they should have.</p>
          <p>He didn't look monstrous. That was, Zillian thought, somehow the worst part of it. He looked refined. Composed. The sort of man who could walk into a royal hall and belong there without a single person questioning why.</p>
          <p>Zillian let his gaze soften, just slightly, out of habit more than intention — and had to work, immediately and deliberately, not to let anything show on his face. The man carried the same dense, congealed colour the mansion did, except here it didn't pool at the base of a wall. It moved with him, close against his skin like a second coat, thick and dark and patient, the way the flowers had described whatever it was that sometimes sat on a face, sometimes on a pair of hands.</p>
          <p>Zillian let the sight go soft again, ordinary, before it could linger long enough to be noticed.</p>
          <p>"Hey, Marrow."</p>
          <p>"Yes, Master." Marrow's voice hadn't changed in tone so much as in posture — same flatness, delivered now with the particular care of someone choosing every word twice before letting it out.</p>
          <p>The man's gaze slid to Zillian and stayed there a moment longer than the introduction strictly required. "Who is he?"</p>
          <p>"An adventurer," Marrow said. "The guild sent him to tend the garden."</p>
          <p>"An adventurer?" Something in the way he said it carried the faintest edge of amusement, the kind reserved for something small and harmless.</p>
          <p>"Yes."</p>
          <p>"F-rank?"</p>
          <p>Marrow nodded once.</p>
          <p>The man's mouth curved, faint and unhurried, an expression that never quite reached the crimson stillness of his eyes.</p>
          <p>"I see."</p>
          <p>He said nothing further to Zillian at all — no greeting, no dismissal, nothing that acknowledged him as anything more than a detail already noted and filed away. He simply turned, climbed the shallow steps to the front door with the same unhurried grace that had carried him up the drive, and let himself inside without so much as a backward glance.</p>
          <p>The door closed behind him without a sound.</p>
          <p>Zillian stood very still for a moment, the coin pouch forgotten in his hand, and found that the garden's warm gold-and-green had gone entirely out of his attention, replaced by the lingering, patient weight of that dense red-black colour settling slowly back into the walls where it had come from.</p>
          <p>"You should go," Marrow said, not unkindly, already turning back toward the shed. "The road takes longer after dark than most people expect."</p>
          <p>Zillian didn't argue.</p>
          <p>He walked back down the long gravel drive with the coin pouch heavy in his satchel and the shard-shaped absence beside it, and he didn't look back at the mansion once — not because he wasn't curious anymore, but because he'd learned, in the space of one afternoon, exactly how much that particular curiosity was worth.</p>
          <p>F-rank, he thought, turning the word over the way the man had said it, faint and amused and utterly unconcerned. He wasn't wrong to smile.</p>
          <p>The thought sat with him the rest of the way down the drive, uncomfortable in a way he didn't try to talk himself out of. Whoever the man was, he hadn't threatened anything. He hadn't needed to. A glance, a question already half-answered before Marrow finished speaking, a smile that never touched his eyes — that had been enough to make an F-rank adventurer feel, for one long moment, like something being weighed and found not worth the trouble of weighing twice.</p>
          <p>Behind him, the mansion sat exactly as still and elegant as it had all day, giving nothing else away.</p>
      </div>
    )
  },
  {
    id: 'ch6',
    number: 6,
    numberText: "Chapter Six",
    title: "Eleris by Firelight",
    epigraph: "",
    sideImages: [],
    content: () => (
      <div className="prose">
          <p>The road back to Eleris felt shorter than the one out had, the way most roads do once you already know where they end. The hedges gave way to open field, then to the first scattered rooftops as Eleris slowly rose ahead of him, the sky behind him turning the deep bruised purple of a day that had decided it was finished being useful.</p>
          <p>He noticed the difference before he understood it.</p>
          <p>Lanterns hung thicker along the streets than they had that morning, strung in long looping lines between buildings that hadn't worn any decoration at all when he'd left. Somewhere ahead, faint but growing, came the sound of a drum finding its rhythm, and under it, threading through, something that might have been a fiddle warming up. The streets were busier now too, people carrying baskets and paper lanterns, children weaving between adults, tables appearing outside shops that had been closed and ordinary only hours ago.</p>
          <p>Zillian slowed as he passed the first decorated square, taking in the sudden change.</p>
          <p>A shop nearby had its doors thrown open, its owner standing just inside while hanging lanterns were being arranged along the entrance.</p>
          <p>“Excuse me,” Zillian called. “What's going on?”</p>
          <p>The man glanced at him. “New to Eleris?”</p>
          <p>“Yeah.”</p>
          <p>“Everfall Festival,” the shopkeeper said. “It happens every year for three days. Celebrating Eleris and its gravity. Music, food, lanterns, the usual.” He gave a small shrug. “You'll see plenty more tomorrow.”</p>
          <p>Zillian continued toward the inn, the distant drums growing louder behind him. Above the rooftops, the city's strange towers caught the lantern light, their great rings turning slowly against the evening sky.</p>
          <p>The square he found himself walking toward — not the same one from his first morning, a smaller one, closer to the harbor — had transformed itself sometime in the hours he'd spent trimming hedges and being quietly warned away from a house full of something he didn't have a name for yet. Long tables sagged under more food than any one street's worth of people could reasonably eat — roasted things still turning on spits, bread stacked in towers that looked structurally unwise, fruit he didn't recognize piled in bowls too bright to be entirely natural. Children chased each other between the legs of adults who didn't seem to mind, shrieking with the specific, unrestrained joy of kids who'd been allowed to stay up past a normal bedtime. Somewhere near the center, a knot of musicians had gathered into something like a proper band, and the drum from earlier had found three or four friends to keep it company. Strings of small gravity-lanterns had been looped between the stalls at odd, playful heights, some of them drifting gently up and down on their tethers in time with nothing in particular, as if the festival itself had decided even light should be allowed to dance tonight. Campfires burned at intervals around the square's edge, throwing orange light up into faces that all looked, for tonight at least, like they'd set down whatever they usually carried.</p>
          <p>It was, Zillian thought, standing at the edge of it with the mansion's cold quiet still sitting somewhere behind his ribs, about as complete a reversal of his afternoon as the world could have offered him on purpose.</p>
          <p>He didn't join anything. He wasn't sure yet how — didn't know the songs, didn't know a single face in the crowd, didn't have whatever unspoken permission let a person walk up to a stranger's table and simply sit. So instead, he drifted to the nearest fire, the smallest one, tucked at a corner where the square gave way to a narrow lane, and lowered himself onto an overturned crate someone had left there like they'd known he'd need it.</p>
          <p>He watched the fire instead of the crowd for a while. It was easier.</p>
          <p>“Quite a festival, isn't it?”</p>
          <p>The voice came from somewhere above and slightly behind him, unhurried, the particular cadence of someone very old who had long since stopped feeling any need to rush a sentence. Zillian looked up. An old man stood there, leaning lightly on a cane he didn't appear to actually need, watching the same fire Zillian had been watching, as if the two of them had simply agreed without speaking to share it.</p>
          <p>“Yeah,” Zillian said. “It is.”</p>
          <p>The old man smiled faintly. “Is this your first day here? You've already looked at the tower three times in the last minute.” He lowered himself onto a second crate with the slow, deliberate care of joints that had opinions about sudden movement. “People who've lived here stop looking. You haven't stopped yet.”</p>
          <p>Zillian huffed something close to a laugh, caught somewhere between embarrassment and the simple relief of being seen without being judged for it. "Guess I haven't."</p>
          <p>"Don't rush it." The old man held his hands out toward the fire, thin fingers spread to catch the warmth. "Took me the better part of a year before I stopped flinching every time one of the towers groaned. Now I'd miss it if they went quiet."</p>
          <p>They sat like that for a while, the fire cracking between them, the festival noise rolling on unbothered a dozen paces away. Zillian found he didn't mind the silence. It was the first one all day that hadn't felt like it was hiding something.</p>
          <p>"You want to know why," the old man said eventually, not quite a question.</p>
          <p>"Why what?"</p>
          <p>"Why all of this." He tipped his chin toward the square, the lanterns, the tower visible past the rooftops with its slow rings still turning even now, catching firelight instead of sun. "Why a city builds itself around something most places spend their whole existence trying to survive."</p>
          <p>"I hadn't gotten that far," Zillian admitted. "I was mostly still stuck on the fountains that run upward."</p>
          <p>The old man's laugh came out dry and short, more breath than sound. "Fair enough. Let me start further back, then."</p>
          <div className="scene-break">✦ ✦ ✦</div>
          <p>"It began with a man named Reon Gravelle," he said. "Eleris calls him its hero. He came from nowhere, by all accounts, and stood between this place and the thing that would have destroyed it. Back then, Eleris wasn't even a proper port — barely worth a name on any map worth trusting. A handful of fishing huts along an ordinary stretch of coast. Ordinary tides. Ordinary gravity, same as anywhere else up and down Solvara's shore. Nobody built towers here, because nobody had reason to. There was nothing strange about this ground at all."</p>
          <p>"What changed? The ground did." The old man let that sit a moment before going on. "Something arrived — I'll tell you what they say about that, if you're patient enough to let me get there properly — and when it was finished arriving, the gravity here had stopped behaving the way gravity is supposed to. Half that little fishing village should have been crushed flat or flung out into the sea. Reon stood in the middle of what was left of it afterward and decided that trying to put things back the way they'd been wasn't worth the effort. Learning what the wound in the world could actually do — that was worth the effort."</p>
          <p>“He actually tried to argue with gravity?”</p>
          <p>"Negotiate, he called it, later. Argue, at first, because that's closer to what it actually was — a man standing in the wreckage of his own village, shouting theorems at a wall until something gave way." The old man's eyes had gone distant, fixed somewhere past the fire. "He was wrong about most of the specifics. But he was right about the shape of it. And the generations after him kept being right about a little more, one Gravelle at a time, until a handful of ruined fishing huts became the reason ships stop here at all."</p>
          <p>"And now?"</p>
          <p>"Now you have Duke Alaric, who's poured half the family's fortune into the Academy, into the architects, into research that most other kingdoms still think is closer to lunacy than to magic. Every strange building you saw today exists because someone here decided gravity wasn't something to obey."</p>
          <p>"Then what is it?"</p>
          <p>The old man smiled, slow, like he'd been waiting for exactly that question and had known it was coming since the moment he sat down.</p>
          <p>"Something to negotiate with."</p>
          <p>Zillian turned the phrase over, watching the fire instead of the man beside him. It sat well, somehow — better than an answer had any right to sit, this late in a day that had already handed him more strangeness than he knew what to do with.</p>
          <p>"So, what was it, then?" he asked. "The thing that arrived. The one that broke the ground here in the first place."</p>
          <p>Something shifted in the old man's face — not alarm exactly, but a kind of settling, the look of someone deciding how much of an answer a stranger by a fire actually deserved.</p>
          <p>"Ah," he said. "You really are new."</p>
          <p>He was quiet for a moment, long enough that Zillian thought he might not continue at all. Then, in a voice pitched lower, the storytelling cadence sliding into something closer to reverence:</p>
          <p>"They say — and I want to be honest with you, boy, this is a Legend, not a thing anyone living has seen — that long before anyone here kept proper records, before this stretch of coast had a name worth remembering, something the old inscriptions call the Weight Beyond Heaven attempted to descend upon Zephyr itself. Nobody agrees on what it was, exactly. Some say it wasn't a thing at all, just a pressure, a will, something too large for the word 'creature' to hold properly. Whatever it was, its arrival is what warped this stretch of land into what you've been staring at all day — the reason the ground here never learned how to lie flat again. And they say Reon Gravelle stood against it, right there in the wreckage it left behind. Turned it back, or sealed it, or simply survived it long enough that it gave up and left. Depends who's telling the story, and how many drinks they've had while telling it."</p>
          <p>"That's what they say," Zillian repeated, quiet.</p>
          <p>"That's what they say." The old man spread his hands, a gesture that took in the fire, the square, the tower beyond it all in one motion. "Whether it happened exactly that way or not, the Gravelles built Eleris around the idea that a wound could be turned into a gift, if you were patient enough to learn its shape. Whatever came before doesn't change what came after."</p>
          <p>He paused, turning one hand toward the fire. "There was another battle, years later. The records say it shook the coast for a night. Reon went out to meet whatever had come, and never returned. His family found a note among his things. It asked them not to send anyone after him. He'd written that there were stronger beings still out there, and that he meant to face them before they could threaten Eleris."</p>
          <p>“And they let him go?” Zillian asked.</p>
          <p>“They honored what he asked. The family kept the note. The rest of the story belongs to them.” The old man looked back toward the fire. “No body was ever found. In Eleris, people say Reon is still out there somewhere.”</p>
          <div className="scene-break">✦ ✦ ✦</div>
          <p>"There's a tradition," the old man went on, before Zillian could ask anything further. "You'll hear it mentioned enough while you're here that I'd rather you hear it properly the first time. The Bridge of Falling Stars."</p>
          <p>"I've heard the name. Not much else."</p>
          <p>“It's called the Bridge — a long stone pathway, mostly steps, built straight across a place where several Gravity Veins cross each other underground. Most of the time, the gravity along it is unpredictable. It changes direction from one step to another, sometimes barely a shift, a lean you correct without thinking. Sometimes it's violent enough to throw a grown man off his feet. But during these three days, something changes. The Veins align. Every few steps, the gravity grows stronger, always acting downward, each increase adding more weight than the last.” He tapped his cane once against the ground for emphasis. “No one knows who built it. Some believe it was Reon himself. Others say it predates him by generations.”</p>
          <p>“If you run, you fail. The weight builds too quickly, and running is exactly the kind of foolishness the Veins punish hardest. If you fight the gravity — brace against it, force yourself forward — you fail worse. Only calm movement gets you across. Patience, mostly. A willingness to let your body grow heavier with every step without fighting every ounce of it.”</p>
          <p>"And people actually do this on purpose?"</p>
          <p>"Every Gravelle does. Once, when they turn sixteen." The old man's gaze drifted toward the harbor, though there was nothing to see there in the dark, just habit carrying his eyes to wherever the bridge happened to sit. "Doesn't matter how many attendants they've had, how much money's been spent on their education, how many tutors have shaped them since birth. The bridge doesn't care whose child you are. It asks the same question of all of them."</p>
          <p>"Why?"</p>
          <p>The old man looked at him properly for the first time since the story had started, something almost fond in it, the look of a man glad to be asked the right question by someone who hadn't known to expect it.</p>
          <p>"Because being born a Gravelle is easy," he said. "You don't choose it. It simply happens to you, the way weather happens to you." He turned his gaze back toward the unseen bridge. "Learning to carry the weight of being one is harder. The bridge doesn't test how strong you are. It tests whether you can hold something enormous without either dropping it or crushing yourself trying to prove you can carry it."</p>
          <p>Zillian sat with that a while, the fire popping softly between them, the festival's noise a warm blur just past the edge of hearing.</p>
          <p>"Tomorrow is Zan Gravelle's ceremony," the old man said, almost offhand, as if it were an afterthought rather than the reason he'd told any of this at all.</p>
          <p>"Zan?"</p>
          <p>"Third child of the Duke." A faint smile. "Youngest of the three. You should watch, if you're still in the city. It isn't the sort of thing this place does quietly."</p>
          <p>He rose then, slow and unhurried, the cane finding its purpose again, and gave Zillian a small nod that felt, somehow, like the closing line of a much longer conversation neither of them had needed to finish out loud.</p>
          <p>"Enjoy the fire," he said. "You've earned an easy night, whatever it was that made you look so tired walking into it."</p>
          <p>He was gone before Zillian could ask how he knew that either.</p>
          <div className="scene-break">✦ ✦ ✦</div>
          <p>Zillian stayed by the small fire a long while after the old man had gone, watching the square's larger celebration ripple on without him — the drum finding its rhythm again, a circle of dancers pulling in one more laughing latecomer, a child asleep against her father's shoulder despite the noise, utterly unbothered by any of it. Someone pressed a skewer of something charred and sweet into his hands without asking whether he wanted it, an older woman who didn't stop moving long enough for him to properly thank her, and he ate it slowly, watching the fire, feeling for the first time since stepping off the ship like something other than a stranger simply passing through.</p>
          <p>The tower stood beyond the rooftops with its rings still slow and silent, catching firelight now instead of sun, and for the first time since the mansion's gate had closed the wrongness out of sight behind him, Zillian let himself simply watch something without turning it over for a hidden meaning underneath.</p>
          <p>Tomorrow, apparently, there would be a bridge, and a boy his own age walking out onto it in front of half the city.</p>
          <p>Tonight, there was only the fire, and the music, and a city that had decided, for one evening at least, that everything it had built out of stubbornness and gravity and old half-believed stories was worth celebrating exactly as it was.</p>
          <p>He let it be that simple for as long as it lasted.</p>
      </div>
    )
  },
  {
    id: 'ch7',
    number: 7,
    numberText: "Chapter Seven",
    title: "The Gravelle Ceremony",
    epigraph: "",
    sideImages: [],
    content: () => (
      <div className="prose">
          <p>By the time Zillian found a place to stand, half the city had already beaten him to it.</p>
          <p>The bridge stood just past the northern edge of the Spire's plaza, its stone entrance rising from the ground before vanishing into the gravity-warped path beyond. The area around it had been decorated for the Everfall Festival, with lanterns strung between poles and colorful banners hanging above the crowd. Stone rails framed the first stretch of the path, worn smooth by generations of hands that had never gone farther, only come to watch someone else try. Crowds packed the area around the entrance, while vendors had set up along the outer edge, selling food nobody seemed to actually want, too nervous with anticipation to eat.</p>
          <p>The pathway itself could not be seen from beyond the entrance. The trees blocked the view of everything beyond the first stretch. To let the crowd watch, a Gravity Spirit Tamer stood near the front with several floating spirits circling him, their tiny bodies carrying enchanted viewing crystals into the path. Above the crowd, a large projection hung in the air, showing the challenger's movements from within — every step, every stumble, every moment the increasing gravity forced him lower.</p>
          <p>Above it all, the Gravity Spire turned its slow rings against a sky gone thin and pale with morning.</p>
          <p>Zillian wedged himself into a gap near the back, tall enough to see over most of the heads in front of him, and let the crowd's noise wash past without trying to follow all of it.</p>
          <p>"—Duke Windmere, see him there, the tall one in green—"</p>
          <p>"—my favorite's always been the third prince, honestly, have you ever seen him up close—"</p>
          <p>"—no, that's the Marquess, Windmere's the one with the beard—"</p>
          <p>He gave up trying to sort the voices from each other and simply listened to the shape of the whole crowd instead, the way a person listens to weather.</p>
          <p>A roped section near the front held what was unmistakably the reason half the noble carriages in Eleris had emptied out that morning. Two dukes stood together in quiet conversation — Duke Thaddeus Windmere, broad and silver-bearded, and Duke Beren Corvain, thinner, sharper, the kind of thin that came from care rather than hardship. A marquess Zillian heard named twice, Marquess Ilyana Rosford, stood a pace back from them in robes the deep violet of pressed grapes, and two viscounts flanked her — Viscount Denby Ashcombe and Viscount Corin Vale, both young enough that they still looked faintly thrilled to be standing where they were standing.</p>
          <p>And past all of them, drawing more whispered attention than the entire roped section combined, stood a young man in finely tailored traveling blues, his clothes elegant enough to mark his station without being ostentatious, flanked by two guards who tried very hard not to look like guards.</p>
          <p>"Prince Kastian," someone nearby breathed, like the name itself was worth something. "Third Prince of Solvara. Didn't think he'd actually come this far south for it."</p>
          <p>"For a Gravelle boy's ceremony?"</p>
          <p>"For Alaric's boy specifically. Word is the King's courting an alliance with the Duchy. Wouldn't send his own son otherwise."</p>
          <p>Zillian filed that away without much interest, the way he'd started filing most gossip he couldn't do anything about, and turned his attention instead to the mages scattered through the crowd's better sections — robes marked with sigils he half-recognized from the Academy's banners, a cluster near the front wearing the deep grey of what he guessed was the Gravity Tower, another cluster in pale silver-blue that had to be the Space Tower's colour. Whoever they all were, they'd come to watch too, which told him more about what was about to happen than any of the noble names had.</p>
          <p>Then the horns sounded, three short notes, and the whole hillside went quiet all at once.</p>
          <div className="scene-break">✦ ✦ ✦</div>
          <p>The Gravelle family came out onto the raised platform at the bridge's near end in a line that made the whole arrangement feel, for a moment, less like a ceremony and more like a portrait come briefly to life.</p>
          <p>Duke Alaric Gravelle led them — tall, grey threading heavily through dark hair, a bearing that didn't need the crown-adjacent authority of his title to read as command. Duchess Serphia walked a half-step behind him, elegant in deep blue, her expression carefully unreadable in the particular way Zillian guessed came from decades of being watched by exactly this many people at once. Behind them came the three children, though only one of the three still deserved the word.</p>
          <p>Lucien Gravelle, tall and composed, the crown prince's posture already fully formed at whatever age he'd actually reached — the crowd murmured his name with a kind of reverence reserved for someone who'd already done what today's ceremony demanded, years ago, and done it well. Elena walked beside him, quieter, watching the crowd instead of letting it watch her. And at the end of the line, visibly trying not to look as nervous as he clearly was, stood Zan.</p>
          <p>Sixteen. Zillian could believe it, looking at him — old enough to stand still under this much attention, young enough that the effort of doing so showed plainly on his face.</p>
          <p>An old man stepped forward to the platform's edge, cane in hand, and Zillian felt something click faintly into place recognizing him — the same unhurried voice from the fire the night before, dressed now in formal deep red rather than festival browns, apparently important enough in Eleris to be the one entrusted with narrating a Gravelle's ceremony to half the nobility of Solvara.</p>
          <p>"Zan Gravelle," the old man said, voice carrying further than his frame suggested it should, "third child of Duke Alaric and Duchess Serphia. Sixteen years old as of this morning. He crosses now, as his siblings crossed before him, as his father crossed before them, as every Gravelle has crossed since the bridge first stood."</p>
          <p>Zan looked back once — a short, searching glance toward his father that lasted no longer than a breath. Alaric didn't smile, didn't nod, didn't offer any of the small mercies a parent might give a child in that position. He only looked back, steady and unreadable, in a way that somehow said more than either of them would have managed with words. Zan turned away first. He crossed the platform alone, and the crowd's noise thinned to almost nothing the moment his hand found the cold stone of the entrance — the whole hillside seeming to hold its breath as he stepped through and began his ascent.</p>
          <div className="scene-break">✦ ✦ ✦</div>
          <p>The first hundred steps went the way Zillian imagined most people's first hundred steps went — careful, deliberate, each one tested before his weight fully committed to it. The gravity along the bridge shifted in small, testing increments, a lean corrected here, a half-stumble caught there, the crowd exhaling small held breaths each time he stayed upright.</p>
          <p>Then, somewhere around the hundredth step exactly, the whole bridge seemed to shudder.</p>
          <p>"There," a woman near Zillian murmured, gripping the arm of the person beside her. "Every hundred, it's worse. Watch."</p>
          <p>Zan staggered, caught himself, planted both feet wide until whatever had shifted settled back into something manageable. The crowd's noise, which had been a steady low hum, dropped to something closer to held breath entirely.</p>
          <p>He kept going.</p>
          <p>Two hundred brought a second shudder, sharper than the first, and this time Zan went down onto one knee before forcing himself back up, breathing visibly hard even from this distance. The crowd didn't cheer. Nobody cheered during a crossing, Zillian realized — cheering was for after, whatever after turned out to mean.</p>
          <p>By two hundred and fifty, his steps had gone slow and deliberate in a different way than the first hundred had been — not careful anymore, but conserving, a boy rationing whatever strength he had left across however many steps remained in him.</p>
          <p>He reached two hundred and sixty-six, planted his feet as the ground beneath him lurched one more time, and did not take a two hundred and sixty-seventh.</p>
          <p>For a long moment he simply stood there, chest heaving, upright by will alone as far as Zillian could tell. Then he raised one hand — not a triumphant gesture, just an honest, exhausted acknowledgment that he was done — and the crowd broke into applause loud enough that Zillian felt it more than heard it.</p>
          <div className="scene-break">✦ ✦ ✦</div>
          <p>The talk started before Zan had even finished being helped off the bridge.</p>
          <p>"Two hundred sixty-six," someone said, delighted, like they were tasting the number. "Lucien did two hundred seventy, didn't he? Only four steps apart."</p>
          <p>"Four steps." Another voice, further back. "That's nothing. That's practically the same crossing."</p>
          <p>"Zan's no failure, whatever anyone says. Four steps off his brother is a better showing than half the Gravelles in the family tree ever managed."</p>
          <p>"Speaking of — anyone remember what Alaric himself did?"</p>
          <p>The old man, still at the platform's edge, answered that one loud enough for the whole hillside to hear, as though he'd been waiting for exactly that question to surface from the crowd on its own.</p>
          <p>“Two hundred ninety-nine,” he said. “The Duke’s own crossing, more years ago than he’d thank me for mentioning. His father’s father managed three hundred and four when he was sixteen—the finest crossing a Gravelle had achieved in three decades. Alaric came closest a generation later, with two hundred ninety-nine. Four sons of four generations, trading four numbers back and forth like a family argument nobody quite wins.”</p>
          <p>"And the real record?" someone called out. "The one nobody's family."</p>
          <p>The old man's expression shifted, something almost reverent creeping into it.</p>
          <p>"Caspian Starseer," he said. "Three hundred ninety-seven steps. Tower Master of the Space Tower, and not a Gravelle at all — simply a man who decided one festival that he wanted to see how far the bridge actually went. No one has reached the end since. No one has reached the end at all. The bridge runs five hundred steps its full length, and in all the years anyone's kept count, three hundred ninety-seven is the closest anyone's come to seeing the far side."</p>
          <p>A ripple of quiet awe went through the crowd at that, the particular kind reserved for numbers large enough to stop being personal and start being legend.</p>
          <div className="scene-break">✦ ✦ ✦</div>
          <p>After the Gravelles withdrew from the platform, the bridge didn't close.</p>
          <p>A line of ordinary hopefuls went first — townsfolk, minor merchants' children, a handful of adventurers Zillian half-recognized from the guild hall trying their luck for the story of it more than any real hope of a record. Most managed forty, fifty, sixty steps before the shifting gravity put them flat on the stone, laughing it off or cursing under their breath depending on temperament, and cleared the bridge for the next.</p>
          <p>Then the horns sounded again, different this time, and the crowd's attention sharpened.</p>
          <p>"The Academy's chosen ten," the old man announced, and the murmur that ran through the hillside had an entirely different texture than it had for the open trials — anticipation with teeth in it.</p>
          <p>They came out in a loose cluster, ten students in the Academy's grey-trimmed robes, each wearing a small emblem denoting their year. Zillian watched them line up and found himself, without quite meaning to, cataloguing them the way he'd catalogued the nobles earlier — not names yet, just shapes, postures, the particular confidence or nervousness each one carried differently.</p>
          <p>"Wren Calder," the old man read from a list, "first year. Mightbane — softens sudden force before it reaches him." A slight, sandy-haired boy who looked barely old enough to be there stepped up first and managed a respectable hundred and forty-two steps before the shift at the hundred-fifty mark put him down gently, cushioned by his own gift on the way.</p>
          <p>The next three went quickly, each earning a fair share of applause without ever quite catching the crowd's full attention the way the first name had — Liora Veyne's bursts of levitation carried her second-year turn to a hundred and fifty-five, Talon Reyes anchored his way through the third-years' opening slot to a hundred and forty-eight, and Sable Kirin's gift for slowing her own falls got her to a hundred and fifty-one. Solid numbers. Forgettable ones, next to what was coming.</p>
          <p>"Mireille Anton. Third year. Gravity Sense — feels a shift half a second before it happens." She moved differently than the others, Zillian thought, anticipating rather than reacting, and the crowd's murmur climbed steadily with every fifty steps she cleared until she finally stopped at a hundred and ninety-three, to a roar that nearly swallowed the announcer's next words entirely.</p>
          <p>Then came the final name in that year, and something in the way the old man paused before saying it told Zillian this was the one the whole crowd had actually been waiting for.</p>
          <p>"Dorian Vask. Third year. Steadfast — spreads incoming force throughout his body, preventing any single point from taking the full impact."</p>
          <p>He was younger-looking than Zillian expected for the reaction his name got, wiry rather than imposing, and he crossed the first hundred steps with an economy of motion that made the gravity shifts look almost gentle by comparison. Two hundred came and went with barely a stagger. By two hundred and fifty the crowd had stopped talking entirely, and by two hundred and eighty, Zillian could feel the tension of the whole hillside pressing forward as one.</p>
          <p>He crossed two hundred and ninety-nine steps, planted himself against a shift that staggered every other student who'd walked before him, and simply stopped there — not falling, not failing, just deciding, the way a person decides when enough is enough.</p>
          <p>The crowd exploded.</p>
          <p>"Two ninety-nine!" someone was shouting, over and over, like the number itself needed repeating to be believed. "That's Alaric's own record! A third-year, matching the Duke's own crossing!"</p>
          <p>By the time the remaining four fourth-years took their turns — Corwin Adale bending gravity briefly around himself for a hundred and ninety-seven, Iona Bellweather, Petrus Aldane, and Yuki Sorensen each managing solid, unspectacular numbers in the low hundred-fifties — nobody in the crowd was talking about anyone but Dorian Vask anymore. Zillian heard his name repeated in a dozen different conversations as he finally drifted away from the bridge, the festival noise swallowing the ceremony's aftermath the way a river swallows a stone dropped into it.</p>
          <div className="scene-break">✦ ✦ ✦</div>
          <p>He wandered without much direction after that, the crowd thinning as it spread back out into the city's ordinary streets, festival stalls giving way gradually to quieter corners that hadn't bothered decorating for the occasion.</p>
          <p>It was in one of those quieter corners that he found the market he wished he hadn't.</p>
          <p>There was no sign for it, nothing announcing what it was, only a loose gathering of people along a narrow side street, and a raised platform where a man stood beside a small, silent line of others while a third called out numbers to the handful watching.</p>
          <p>Zillian's eyes moved over the line. A young woman with cat ears pressed flat against her silver hair stood with her hands bound before her. Beside her was a broad-shouldered man with wolf ears and a short tail, his gaze fixed stubbornly on the ground. A smaller figure farther down the line had long rabbit ears trembling against the back of her head.</p>
          <p>“—forty gold for the elder, sound in body if not in years—”</p>
          <p>Zillian stopped walking.</p>
          <p>He didn't stay long enough to hear more than that. He checked, without quite deciding to, the weight of the coin pouch at his side—Marrow's payment, still mostly untouched—and found it nowhere close to forty gold, not for one person, not for anyone standing on that platform, and something in his chest went tight and useless at the simple, arithmetic uselessness of that fact.</p>
          <p>He turned and walked back the way he'd come, faster than he needed to, and didn't look back at the street again.</p>
          <div className="scene-break">✦ ✦ ✦</div>
          <p>He found Melena by accident, or something close enough to accident that he didn't examine it too hard — she was standing near a stall selling spiced nuts, arguing cheerfully with the vendor over a price that didn't seem to actually matter to either of them.</p>
          <p>"You," she said, spotting him over the vendor's shoulder, delighted in a way that had nothing to do with the negotiation. "Didn't take you for a festival crowd."</p>
          <p>“Didn't take myself for one either.” He fell into step beside her once she'd finished losing the argument on purpose. “You're not working?”</p>
          <p>“Not during Everfall. Took a couple of days off.” She nodded toward the crowd ahead, considering him for a moment. “You look like someone who's had a strange few days.”</p>
          <p>"You have no idea."</p>
          <p>“Try me later.” She grinned, then led him deeper into the festival. They wandered past stalls selling carved charms, sugared fruit, painted masks, and trinkets that hummed faintly with mana. She stopped now and then to point things out, occasionally pulling him toward something she insisted he needed to see, until the noise of the main thoroughfare began to thin behind them.</p>
          <p>Eventually, she slowed beside a tent strung with more lanterns than the ones around it, its canvas dyed a deep violet that caught the light strangely. She glanced at Zillian with a knowing grin.</p>
          <p>“There's someone in here worth ten minutes of your time, if you've got them to spare.”</p>
          <p>The woman inside the tent looked up before either of them had finished stepping through the flap, eyes settling on Zillian with an attention that made the festival noise outside feel suddenly very far away.</p>
          <p>"You," she said, quiet, certain, the way people said things they weren't in the habit of doubting. "You're going to change the world. Not today. Not soon, maybe. But you will."</p>
          <p>Zillian didn't know what to do with that, so he said nothing at all.</p>
          <p>The woman's gaze didn't waver. “There's someone you should find, when you're able. A village not far from here—I’ll draw you the way before you leave. A woman there who knows things no ordinary person should know, and things most would never even think to ask. She'll know more of what's coming than I ever could.” She smiled, faint and unhurried. “Ask for her by the name the village gives her. They'll know.”</p>
          <p>Melena, beside him, had gone quiet in a way that suggested she took this sort of thing more seriously than her earlier teasing had let on.</p>
          <p>Zillian left the tent with a folded scrap of paper he hadn't quite decided what to do with yet, and Melena at his elbow, already pointing him toward the next stall down the row like the entire conversation had been nothing stranger than buying spiced nuts.</p>
          <p>"Come on," she said. "You haven't actually seen the festival yet. Not properly."</p>
          <p>He let her lead him back into the noise and the light, the fortune teller's words settling somewhere he wasn't ready to look at too closely, and for the rest of that evening, at least, let Eleris be exactly as loud and warm and uncomplicated as it wanted to be.</p>
      </div>
    )
  },
  {
    id: 'ch8',
    number: 8,
    numberText: "Chapter Eight",
    title: "What the Crystals Whispered",
    epigraph: "",
    sideImages: [],
    content: () => (
      <div className="prose">
          <p>The guild hall had settled back into its ordinary rhythm by the time Zillian pushed through the door, the festival's last stragglers finally gone home to sleep off however many days of Everfall they'd managed to survive. He went straight for the mission board out of habit more than purpose, not entirely sure yet what he was looking for.</p>
          <p>He found it anyway.</p>
          <p>The flyer sat slightly apart from the others, newer, the paper still crisp at the corners in a way that marked it out from the sun-faded notices around it.</p>
          <p>Gravity Vein Scouting — Documentation Required.</p>
          <p>He read it twice before he understood what it was actually asking. Not a delivery, not a garden, not a lost pet. A vein — one of the strange underground scars Eleris built its whole fortune around — needed someone to go in, look, and come back with an honest account of its condition.</p>
          <p>He took it to the counter.</p>
          <p>The woman behind it wasn't Melena. She was younger, sharper around the edges, the kind of neat that came from someone who took the paperwork seriously enough to have opinions about it.</p>
          <p>"Guild card," she said, before he'd even finished setting the flyer down.</p>
          <p>He handed it over. She turned it once, checked the stamp against something in a ledger he couldn't see, and handed it back with the brisk efficiency of someone who did this a hundred times a day and had stopped finding any of it interesting years ago.</p>
          <p>"Mira," she said, by way of introduction, in the same tone she'd have used to state the weather. "You want the vein job."</p>
          <p>"That's right."</p>
          <p>"You understand it's F-rank because the vein itself is F-rank classified, not because the job is easy." She said it plainly, the way a person recites a warning they've given often enough to have worn all the alarm out of it. "This one came in three days ago. Recent enough that we haven't had proper eyes on it yet, which is exactly why it needs scouting in the first place. There's word of something off with the monsters inside — nothing confirmed, just enough reports that the guild wants a look before it sends anyone in for real work." She glanced up at him. "Pay's low. Lower than it should be for something that might actually be dangerous. I'll say that plainly, since most people who take this one do it for reasons that have nothing to do with the coin."</p>
          <p>"I still want it."</p>
          <p>"Why?"</p>
          <p>He considered lying, briefly, and decided it wasn't worth the effort. "I've never actually seen one. A gravity vein. I want to."</p>
          <p>Something in Mira's expression eased, just slightly — not approval exactly, but the specific relief of someone dealing with an honest answer instead of a performed one. "Fair enough. Most F-ranks who take this job either don't know what they're walking into or think they do and are wrong. At least you're admitting you don't."</p>
          <p>She pulled a second sheet from beneath the counter, a rough map already half-annotated in someone else's handwriting.</p>
          <p>"There are two kinds of vein, broadly," she said, tapping the paper. "Cave-type is the common one — you find the entrance, you walk in. Gravity gets strange the deeper you go, but it stays honest about which direction is down, more or less. That's what most adventurers cut their teeth on, and it's what you're being sent to."</p>
          <p>"And the other kind?"</p>
          <p>"Underground veins." Her mouth pressed into something that wasn't quite a smile. "Those don't have a door you walk through. You find a Gravity Shaft instead — there are a scatter of them across the city, if you know where to look — and you go down through gravity that doesn't agree with itself. Sometimes it pulls you toward a wall instead of the floor. Sometimes it pushes you back out entirely, and you have to force your way against it just to get anywhere. The vein sits underneath all of that, once you're through." She tapped the flyer in his hand. "The one you're going to is a cave-type. If it were an underground vein, we'd never send an F-rank adventurer to scout it. I want that clear before you sign anything."</p>
          <p>"Understood."</p>
          <p>"Ask around for the Skow Vein once you're near the outskirts — locals know it, they'll point you the right way. Plenty of monsters inside, so don't go in expecting an empty walk. Your job is to scout and document, nothing more. You're not being paid to clear it, and nobody expects you to. Team up with other adventurers if you find any there — most people do, for a job like this."</p>
          <p>She stamped the flyer before he could ask anything further, and slid it back across the counter.</p>
          <p>"Come back with something useful," she said, "and try not to become a story I have to explain to your next of kin."</p>
          <p>"I'll do my best."</p>
          <p>"That's what they all say."</p>
          <div className="scene-break">✦ ✦ ✦</div>
          <p>Finding the outskirts took longer than finding the vein itself, once he'd asked the right person twice and been pointed the same direction both times. The Skow Vein announced itself well before he reached it — a low, rough mouth of stone set into a hillside, worn smooth around the entrance by boots that had clearly gone in and out of it far more often than the guild's paperwork suggested.</p>
          <p>A cluster of adventurers stood near the entrance, checking gear, trading the kind of nervous small talk people made right before doing something they weren't entirely sure about. Zillian was still working out whether to approach any of them when one voice, pitched slightly above the others, caught his attention.</p>
          <p>"—need one more, honestly, doesn't matter who—"</p>
          <p>He looked over before he'd decided to, and something in his chest did a small, surprised turn at the face he found.</p>
          <p>The wiry man from the guild hall. The one who'd nearly taken a fist to the skull over a delivery job three days ago.</p>
          <p>Zillian walked over before he could talk himself out of it. "Room for one more?"</p>
          <p>The man looked him over — quick, assessing, no recognition in it at all. "You any good in a vein?"</p>
          <p>"First time."</p>
          <p>"Honest, at least." He waved him in without further ceremony, already turning back to the other two members of his small group. "Kessa, Oskar, we've got a fourth. Congratulations, he's never done this before."</p>
          <p>Kessa, older, weathered in the particular way of someone who'd spent more time underground than above it, gave Zillian a once-over that felt like being measured for a coffin and then, apparently, deciding he'd do. "Stay close, don't wander, and if something looks wrong, say so before you investigate it yourself."</p>
          <p>Zillian didn't say anything about the fact that the man giving him directions was someone he'd once knocked a rack over to protect. There didn't seem to be a version of that sentence that wouldn't sound insane out loud, and the man clearly had no memory of it at all — no flicker of recognition, no second glance, nothing. Whatever debt Zillian had quietly filed away three days ago, it seemed he was the only one still holding it.</p>
          <p>They went in together.</p>
          <div className="scene-break">✦ ✦ ✦</div>
          <p>The gravity inside the Skow Vein didn't announce itself the way Zillian expected. There was no dramatic lurch, no single moment where the ground stopped behaving. It simply, gradually, stopped being entirely honest — a half-step heavier than it should have been on one stride, a half-step lighter on the next, nothing large enough to call an event, everything large enough to throw off every instinct he'd built over seventeen years of ordinary walking.</p>
          <p>He stumbled twice in the first hundred feet. Oskar caught his arm the second time, not unkindly.</p>
          <p>"Everyone does that their first trip," he said. "Give it a while. You'll find the rhythm or you won't, but either way, don't fight it. Fighting it just makes you tired faster."</p>
          <p>Zillian nodded, already turning something over from two nights ago — a fire, an old man's dry voice, a bridge he'd only ever watched from a safe distance.</p>
          <p>Only calm movement succeeds.</p>
          <p>He thought of Zan, chest heaving, planting his feet against a shift that would have thrown a lesser will off entirely. Not fighting the gravity. Reading it.</p>
          <p>He stopped trying to walk through the wrongness and started, instead, to simply watch it.</p>
          <p>Step. Wait for the shift to announce itself, small as it was. Adjust. Move. It wasn't fast, not at first, but it was steady in a way his earlier stumbling hadn't been, and by the time they'd gone another hundred feet he'd stopped needing Oskar's hand entirely.</p>
          <p>"Huh," Kessa said, glancing back at him. "That's fast, for a first trip."</p>
          <p>He didn't have a good answer for that, so he didn't offer one.</p>
          <div className="scene-break">✦ ✦ ✦</div>
          <p>The first monsters came at them somewhere past the second bend — squat, many-legged things with too much armor plating for their size, moving in the low, scuttling bursts of creatures that had learned to use the vein's uneven gravity as a weapon of their own. Kessa and the wiry man handled most of it with the easy competence of people who'd done this exact thing more times than they could count, and Zillian mostly stayed out of the way, watching, learning the shape of the fight rather than throwing himself into the middle of it.</p>
          <p>"These are worse than usual," Oskar said afterward, nudging one of the fallen creatures with his boot, frowning at the way its plating had grown thicker and darker than it should have. "Don't like the look of that. Something's been feeding them, or feeding on them, one or the other."</p>
          <p>Zillian let his gaze go soft for a moment, the way it did now almost without asking. A thin, dark residue clung to the creature's carapace, faint but unmistakable — the same congealed wrongness he'd seen pooling around the mansion's windows, thinner here, more diluted, but recognizably the same family of stain.</p>
          <p>He said nothing about it. Not yet. He filed it away instead, the way he'd learned to file most things worth worrying about later.</p>
          <div className="scene-break">✦ ✦ ✦</div>
          <p>The crystal chamber opened up without warning, the tunnel simply widening until it became a cavern glittering faintly with veins of pale blue crystal running through every surface. Kessa called a rest the moment they reached it, and half the group set to mining what they could reach while the other half simply sat, grateful for a stretch of ground that didn't argue with their footing.</p>
          <p>Zillian sat near a cluster of crystal outcroppings, catching his breath, and it was there that the voices started.</p>
          <p>Faint, at first. Papery, the way the garden's flowers had been, except colder somehow, older.</p>
          <p>They've been moving through here again.</p>
          <p>Growing something. Down deeper than we go.</p>
          <p>We heard it, before. Something like a heartbeat that isn't a heart.</p>
          <p>Will these people be safe?</p>
          <p>A pause, heavy with something that might have been the crystalline equivalent of a shrug.</p>
          <p>Who knows.</p>
          <p>Zillian went very still.</p>
          <p>He waited until Kessa and the others had drifted further into the mining, absorbed enough in the crystal seams that nobody was watching him, before he let his gaze go soft again and looked properly at the chamber's far wall.</p>
          <p>A thread of the same dark residue ran along one crack in the stone, so faint he'd have missed it entirely without the eye's help, tracing a path deeper into the rock rather than back the way they'd come.</p>
          <p>He rose, quiet, and followed it.</p>
          <p>"Where do you go," he murmured, once he was far enough that his voice wouldn't carry, low and half-embarrassed even now at the habit of talking to stone. "What's down there."</p>
          <p>The wall didn't answer in words, not the way the flowers had. But something in the residue's thread pulsed, faint and reluctant, guiding his eye along a seam that shouldn't have been visible at all — a deliberate, hidden pattern worked into the natural crack of the rock, the kind of thing built rather than grown. At its center, an eye had been carved above an inverted triangle, the lines so faint they almost disappeared into the stone. Zillian studied the symbol until he could hold its shape in memory, without knowing what it meant.</p>
          <p>He followed it as far as he dared. The dark mana thickened with every step, dense enough eventually that it sat against his skin like the mansion's had, heavy and patient and entirely uninterested in his presence. He stopped well short of wherever it actually led, some old, unspoken instinct telling him this was exactly the kind of door Marrow would have warned him never to open.</p>
          <p>He didn't try. He simply memorized the shape of the path and the symbol, then turned back the way he'd come.</p>
          <div className="scene-break">✦ ✦ ✦</div>
          <p>"Where'd you wander off to?" the wiry man asked, when Zillian reappeared at the edge of the mining party. "Thought we lost you."</p>
          <p>"Scouting," Zillian said, which was true enough. "Felt like there was something worth looking at, further in."</p>
          <p>"Find anything?"</p>
          <p>"Maybe. I wrote it down."</p>
          <p>Kessa snorted, not unkindly. "That's the most F-rank answer I've ever heard. 'Maybe. I wrote it down.'" A few of the others laughed, and the moment passed easily into the ordinary business of finishing the rest, nobody pressing further than the joke.</p>
          <p>Zillian mined a little crystal of his own before they left — not much, a small vein's worth, the kind of find that wouldn't make anyone rich but would cover an evening's meal twice over. Crystal wasn't common in every vein, Oskar told him on the way back out, and finding any worth taking home counted as a genuine haul more often than not.</p>
          <p>They emerged into daylight together, and the group scattered toward their own errands with the easy, uncomplicated goodbyes of people who'd shared one job and had no particular reason to remember each other beyond it. The wiry man gave Zillian a short nod on his way — friendly, forgettable, the nod of a stranger who'd been decent company for an afternoon and nothing more.</p>
          <p>Zillian watched him go, and didn't say anything about the rack, or the fight, or the three days he'd apparently spent being the only person who remembered any of it.</p>
          <div className="scene-break">✦ ✦ ✦</div>
          <p>He sold the crystal at a small shop near the guild for a handful of gold — modest, but honest — and brought the rest back to Mira, laying out the scouting notes, the rough map, and, at the bottom of the page, a careful account of the thread of dark residue, the hidden pattern in the stone, and the crystals' own uneasy words about something growing in the dark beneath the vein.</p>
          <p>Mira read it twice, her expression settling into something considerably more serious than the brisk efficiency she'd greeted him with that morning.</p>
          <p>"We'll take it from here," she said, and meant it in a way that didn't invite further questions.</p>
          <p>Zillian didn't ask any. He left the flyer, the map, and whatever the guild intended to do about a demonic something growing in the dark on the counter behind him, and walked back out into the ordinary noise of Eleris, carrying nothing heavier now than a little gold and the quiet, familiar weight of one more thing he'd learned to file away for later.</p>
      </div>
    )
  }
];
