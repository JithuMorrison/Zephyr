import React from 'react';

export const arcInfo = {
  number: 1,
  name: 'The Halwen Spiral',
  storyTitle: 'Shadow Covenant',
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
<span className="world-intro-label">Setting</span>
<h3>The World of Zephyr</h3>
<p>
          Three dominions shape the known world. <strong>Arcaelis</strong> —
          where knowledge is currency and power is earned through learning.
          <strong>Valkryn</strong> — where strength writes truth and only the
          victorious are remembered. <strong>Thrynthal</strong> — where nature
          does not protect, but decides.
        </p>
<p>
          Beyond them lies unclaimed land: borderlands administered loosely by
          minor counts, disputed barons, and the silence of forgotten gods. It
          is in one such borderland — a valley too quiet to matter, too old to
          be innocent — that this story begins.
        </p>
<p>
          The protagonist carries no title. He carries something worse: a power
          with a price, a shadow that drinks blood, and a name the world does
          not yet know.
        </p>
<p style={{fontStyle: 'italic', color: 'var(--text3)'}}>
          His name is Zillian.
        </p>
</div>
);

export const chapters = [
  {
    id: 'ch1',
    number: 1,
    numberText: "Chapter One",
    title: "The Valley That Breathes Wrong",
    epigraph: "             \"Every place has a heartbeat. You learn to feel it — the rhythm of             people going about their small, ordinary lives. Halwen had no             heartbeat. It had a held breath.\"           ",
    content: () => (
      <>
        

<div className="prose">
<p>He smelled the village before he saw it.</p>
<p>
            Not the woodsmoke — that was normal. Not the animal dung or the
            wet-hay reek of the valley after last night's rain. What he smelled
            beneath all of that was something else entirely: the particular
            staleness of air that had not been laughed into in a very long time.
            <span className="entity-link" data-entity="char-zillian">Zillian</span> paused at the crest of the hill, pack settled between his
            shoulder blades, and looked down at <span className="entity-link" data-entity="loc-halwen">Halwen</span>.
          </p>
<p>
            The village sat in a bowl of land like something placed there
            carefully by a hand too large to be human. Circular walls of stacked
            stone — practical, not military — enclosed maybe two hundred
            buildings. Smoke rose from chimneys in thin, well-behaved columns.
            The gate stood open. People moved in the streets below. From this
            distance, it looked perfectly ordinary.
          </p>
<p>He had learned not to trust distance.</p>
<p>
            The shadow beneath his feet shifted. Not with the angle of the sun —
            the sun had not moved — but on its own, a slow, liquid slide that
            traced the outline of something heavier than a man. Zillian pressed
            two fingers against the outside of his left forearm, where the
            oldest scar ran, and felt the familiar pulse answering:
            <em>still here, still hungry, still patient.</em>
</p>
<div className="narration">
            There is a category of wrong that the body recognizes before the
            mind does. It lives in the base of the throat — a tightness, a
            reluctance. Instinct older than language. Zillian had learned to
            listen to it the way other travelers listened to weather signs. More
            reliable than weather, he had found. Weather lied sometimes. This
            never did.
          </div>
<p>He descended.</p>
<p>
            The road widened as it neared the gate, wheel-rutted and patched in
            places with newer gravel. Someone maintained this road. Someone
            cared whether it could be traveled. He filed that away — a village
            this maintained in a borderland this neglected was either prosperous
            or had something to protect its prosperity. Neither explained the
            held-breath smell.
          </p>
<p>
            Two men worked beside a broken cart near the gate. The wheel had
            come loose from the axle; one man held it upright while the other
            worked the pin. Normal labor. Zillian watched them as he approached,
            cataloguing small things: the man holding the wheel had his jaw set
            too tight for the task. The man working the pin kept glancing toward
            the road without moving his head, tracking Zillian in peripheral
            vision. A technique you learned when you needed to watch something
            without being seen to watch it.
          </p>
<p>He stopped beside them. Let silence do the asking.</p>
<p>The pin-worker looked up, then immediately back down.</p>
<div className="dialogue">
<span className="speaker">Zillian</span>
            "Road ahead still passable?"
          </div>
<p>
            A pause longer than the question warranted. The cart-holder's
            knuckles whitened around the wheel rim.
          </p>
<div className="dialogue">
<span className="speaker">Pin-Worker</span>
            "Depends on where you're headed."
          </div>
<p>
            Not an answer. An evasion wrapped in the shape of an answer. Zillian
            recognized the difference — he had given enough of them himself.
          </p>
<div className="dialogue">
<span className="speaker">Zillian</span>
            "Through."
          </div>
<div className="dialogue">
<span className="speaker">Pin-Worker</span>
            "Then it's passable."
          </div>
<p>He walked into Halwen.</p>
<p>
            The village saw him. He knew it because of how carefully it didn't
            look. A woman with a basket paused mid-step, then continued walking
            with the deliberate naturalness of someone very consciously
            performing naturalness. A child in a doorway met his eyes for one
            full second — that pure animal curiosity children have before they
            learn to be afraid of being caught looking — and then a hand reached
            out from inside the door and pulled the child back. The door did not
            close. It just became slightly less open.
          </p>
<p>
            He had been in villages where they stared at outsiders with
            hostility. He had been in villages where they stared with hunger,
            hoping for news or trade. He had never been in a village where
            everyone simultaneously decided, on some unspoken signal, that the
            stranger passing through was not worth seeing.
          </p>
<p><em>They saw him, and chose not to see him.</em></p>
<p>
            The sign for <span className="entity-link" data-entity="char-garret">Garret</span>'s Provisions hung above a door of iron-bound
            wood dark with age. He pushed it open.
          </p>
<span className="sfx">CREAK...</span>
</div>


      </>
    )
  },
  {
    id: 'ch2',
    number: 2,
    numberText: "Chapter Two",
    title: "The Shop of Silence",
    epigraph: "             \"A shopkeeper who watches strangers like a man counting what they             might cost — that is a shopkeeper with something to lose.\"           ",
    content: () => (
      <>
        

<div className="prose">
<p>
            The shop smelled of dried herbs and old wood and the specific kind
            of dust that accumulated only in places where people moved
            carefully, never letting themselves be careless. Candlelight made
            warm pools on the counter and left everything else in comfortable
            shadow. The shelves were packed with the organized abundance of a
            man who had spent a lifetime knowing exactly where everything was —
            dried meats in their wrappings, bottles of preserving oil ranked by
            size, tools hanging at precise intervals on hooks along the far
            wall.
          </p>
<p>
            Three other customers were present. <span className="entity-link" data-entity="char-zillian">Zillian</span> noted them the way he
            noted everything: a woman examining a bolt of cloth she had no
            intention of buying. An older man standing very still beside the
            herb jars, not reading the labels. A younger man near the door, who
            had come in before Zillian and had not moved since. None of them
            spoke to each other. None of them spoke at all.
          </p>
<p>The shop was full and it felt emptier than the road.</p>
<p>
            Behind the counter, <span className="entity-link" data-entity="char-garret">Garret</span> organized stock with the methodical
            movements of long habit. He was a large man gone soft in the middle
            but not in the hands — the hands were still a laborer's hands, broad
            and competent, moving with a steadiness that came from somewhere
            deeper than mere practice. He did not look up when Zillian entered.
            He did not look up when Zillian approached the counter. He was
            demonstrating, with great precision, a complete lack of interest.
          </p>
<p>
            Zillian scanned the shelves while he waited. Habit. His eyes moved
            the way his mother had taught him they should move in unfamiliar
            places: not fast, not pointed, but open, catching everything without
            focusing on anything. He noticed the worn book with an eye symbol on
            its spine — placed spine-inward, as though by accident. He noticed
            the partial title visible on a lower shelf:
            <em>Erost's Magic: A Practitioner's—</em> the rest hidden behind a
            jar of dried rosehips. He noticed that the curtain behind the
            counter moved slightly, though there was no draft.
          </p>
<p>
            Someone was in the back room. Someone who had gone quiet when the
            bell rang.
          </p>
<p>He placed his copper coins on the counter.</p>
<div className="dialogue">
<span className="speaker">Zillian</span>
            "Rations. Four days' worth."
          </div>
<p>
            Garret began gathering without comment. His hands moved quickly,
            selecting items with the efficiency of a man who had packed more
            traveling packs than he could count. Dried meat. Hard bread. A small
            sack of salted nuts. A twist of waxy paper holding something that
            smelled like rendered fat and dried fruit. He set each item on the
            counter with quiet precision, and not once did he look directly at
            Zillian's face.
          </p>
<p>
            Professionals, Zillian had learned, had tells. People pretending to
            be professional had different ones. Garret moved like someone who
            had been professional once and had learned since then that
            professionalism attracted attention. He was performing the
            simulacrum of indifference over something that was not indifferent
            at all.
          </p>
<div className="dialogue">
<span className="speaker">Zillian</span>
            "Road ahead. Still usable?"
          </div>
<div className="dialogue">
<span className="speaker">Garret</span>
            "Depends what you expect from a road."
          </div>
<div className="dialogue">
<span className="speaker">Zillian</span>
            "Bandits?"
          </div>
<div className="dialogue">
<span className="speaker">Garret</span>
            "They exist."
          </div>
<p>A pause. Garret continued packing.</p>
<div className="dialogue">
<span className="speaker">Zillian</span>
            "Organized?"
          </div>
<p>The hands paused. A half-second, no more. Then continued.</p>
<div className="dialogue">
<span className="speaker">Garret</span>
            "Organized enough to choose when not to attack."
          </div>
<p>
            That was an interesting sentence. Bandits who chose not to attack
            were not really bandits — they were workers. You chose not to attack
            when you had instructions, when there was a plan, when attacking the
            wrong person at the wrong time would cost you something. Zillian
            filed the information away in the part of his mind where he kept
            things that would matter later.
          </p>
<div className="dialogue">
<span className="speaker">Zillian</span>
            "South road. Longhorn plains — still active?"
          </div>
<p>
            This time the pause was longer. Garret's hands stilled entirely. He
            was looking at the dried meat he'd just set down, but not seeing it.
          </p>
<div className="dialogue">
<span className="speaker">Garret</span>
            "Used to be."
          </div>
<div className="dialogue">
<span className="speaker">Zillian</span>
            "And now?"
          </div>
<div className="dialogue">
<span className="speaker">Garret</span>
            "Fewer caravans."
          </div>
<p>Silence.</p>
<div className="dialogue">
<span className="speaker">Garret</span>
            "Fewer returns."
          </div>
<p>
            More silence. The woman with the cloth had stopped pretending to
            examine it. The old man near the herbs was very carefully not
            breathing too loudly.
          </p>
<div className="dialogue">
<span className="speaker">Garret</span>
            "People don't favor that direction anymore."
          </div>
<div className="dialogue">
<span className="speaker">Zillian</span>
            "Then east. <span className="entity-link" data-entity="loc-solvara">Solvara</span>."
          </div>
<div className="dialogue">
<span className="speaker">Garret</span>
            "You'll find roads there."
          </div>
<p>
            A pause. Garret looked, finally, at the pack he had assembled. Not
            at Zillian.
          </p>
<div className="dialogue">
<span className="speaker">Garret</span>
            "If you leave early enough."
          </div>
<div className="dialogue">
<span className="speaker">Zillian</span>
            "You talk like people get stuck here."
          </div>
<p>
            Garret looked up. It was the first time their eyes met. Something in
            the shopkeeper's gaze was not afraid exactly — it was beyond fear,
            in that quieter territory fear reached when it had been lived with
            long enough to become simply the texture of daily life.
          </p>
<div className="dialogue">
<span className="speaker">Garret</span>
            "People who wander here don't always leave the same."
          </div>
<p>Zillian opened his mouth to ask what that meant.</p>
<p>Then he heard it.</p>
<div className="narration">
            ...thud.<br/>
            ...thud...thud...
          </div>
<p>
            The woman dropped the cloth. The old man went utterly still. The
            young man near the door took one silent step backward, away from it,
            and that single movement — controlled, automatic, well-practiced —
            told Zillian more than anything Garret had said. This was not the
            reaction of people startled by approaching riders. This was the
            reaction of people who had been rehearsing for exactly this moment.
          </p>
<p>Garret's hand closed on Zillian's forearm.</p>
<div className="dialogue">
<span className="speaker">Garret</span>
            "Don't go outside."
          </div>
<p>
            Through the small high window of the shop came the sound of many
            hooves on packed dirt.
          </p>
<span className="sfx">HOOVES — MULTIPLE — HEAVY</span>
</div>


      </>
    )
  },
  {
    id: 'ch3',
    number: 3,
    numberText: "Chapter Three",
    title: "The Announcement",
    epigraph: "             \"Authority that arrives on horseback and never raises its voice is             the most frightening kind. It has already decided you will comply.\"           ",
    content: () => (
      <>
        

<div className="prose">
<p>Six riders entered <span className="entity-link" data-entity="loc-halwen">Halwen</span> at a walk.</p>
<p>
            <span className="entity-link" data-entity="char-zillian">Zillian</span> watched from the narrow gap between the shop's curtain and
            its frame, standing beside <span className="entity-link" data-entity="char-garret">Garret</span> in the dim interior, and he
            counted: six riders, controlled horses, identical bearing. Deep
            burgundy coats with polished brass buttons. Boots that had been
            cleaned that morning — not field-worn, cleaned deliberately, which
            meant this visit was considered formal enough to warrant clean
            boots. On each rider's chest, a seal embossed in silver: a walled
            keep above two crossed keys.
          </p>
<p>He didn't recognize the seal. Filed it away.</p>
<p>
            The leader was the oldest — a man of fifty or so, heavy-jawed, with
            the kind of face that had started off handsome and had been worn by
            years into something harder and more permanent. He rode with one
            hand loose on the reins and one resting on his thigh, entirely at
            ease, watching the village with the mild interest of a man who had
            visited many times and expected nothing to have changed.
          </p>
<p>
            Villagers filled the square. They hadn't needed to be summoned —
            they had come out themselves, moving from doors and alleys in the
            practiced silence of people who knew exactly where they were
            supposed to be when the horses arrived. There was no shuffling. No
            uncertainty. No one had to be told where to stand. They knew.
          </p>
<div className="narration">
            You could always tell, Zillian had found, the difference between a
            crowd that had gathered and a crowd that had been assembled. A
            gathered crowd leaned forward, pressed together, spoke. An assembled
            crowd made space between itself. It kept its hands visible. It
            looked at the ground.
          </div>
<p>This crowd had been assembled many times before.</p>
<p>
            Inside the shop, the other customers hadn't moved. The woman had
            pressed herself against the far wall, as far from the window as the
            room allowed. The old man stood with his eyes closed. The young man
            near the door had sat down on the floor with his back to the wall,
            knees to his chest, in the posture of someone who had decided not to
            be tall.
          </p>
<p>
            Garret's grip was still on Zillian's forearm. Not restraining
            anymore — he'd forgotten he was still holding on.
          </p>
<p>
            In the square, the leader dismounted. One fluid movement, no
            theatrics. He produced a roll of parchment from inside his coat,
            unrolled it without looking at it — he had read it enough times that
            he no longer needed to — and raised his voice to a carrying monotone
            that showed no interest in the words it was producing.
          </p>
<div className="dialogue">
<span className="speaker">Leader</span>
            "Halwen Village will fulfill its obligation."
          </div>
<p>Silence. The kind of silence that had weight.</p>
<div className="dialogue">
<span className="speaker">Leader</span>
            "One child."
          </div>
<p>
            Not a ripple. Not a flinch. The assembled crowd absorbed it the way
            a stone wall absorbed rain — taking it in without visibly changing,
            but changing nonetheless in ways too slow to see in the moment.
          </p>
<div className="dialogue">
<span className="speaker">Leader</span>
            "This month."
          </div>
<p>
            He re-rolled the parchment. Tucked it back into his coat. Looked
            over the crowd with that mild, administrative gaze.
          </p>
<div className="dialogue">
<span className="speaker">Leader</span>
            "You have failed compliance in recent months. Continued failure will
            not be overlooked." A pause. Not dramatic — just measured. "If this
            obligation is ignored again, Baron Doren will withdraw his
            protection."
          </div>
<p>
            He said it the way a man reads a repair invoice. No emphasis. No
            threat in the voice, because the voice didn't need threat — the
            words carried all of it on their own, worn smooth from repetition
            into something more absolute than shouting.
          </p>
<p>Zillian watched the crowd.</p>
<p>
            He had expected fear. He found something more disturbing: the faces
            of people who had already been afraid for so long that they had
            misplaced the original terror and were living now only with its
            residue. A man near the front had balled his fist — he could see the
            tendons in the back of the hand — and then, slowly, deliberately,
            unclenched it. A woman was trembling but not moving, not speaking,
            the tremble contained and methodical like a controlled vibration in
            a machine. A child gripped her mother's skirt and the mother did not
            look down.
          </p>
<p>This wasn't obedience.</p>
<p>This was fear.</p>
<div className="narration">
            But not of them — not of the six men in burgundy coats with their
            clean boots and their administrative monotone. The fear was older
            than these men. Zillian could feel it now, the way you felt a sound
            that was too low to hear but which vibrated in the teeth anyway.
            Something else frightened these people. Something that the men in
            burgundy coats were, at best, a solution to.
          </div>
<p>
            The riders mounted. Turned. Departed at the same controlled walk by
            which they had arrived. Not a single backward glance. They had no
            interest in how Halwen absorbed what had just been delivered to it.
            They were already thinking about the next village.
          </p>
<p>The square emptied in silence.</p>
<p>
            Through the shop window, Zillian watched the last villager disappear
            through a door. The street stood empty. The smoke still rose from
            the chimneys. Everything looked identical to how it had looked
            before the riders arrived.
          </p>
<p>They had come, and nothing had changed.</p>
<p>Nothing visible.</p>
</div>


      </>
    )
  },
  {
    id: 'ch4',
    number: 4,
    numberText: "Chapter Four",
    title: "What They Took",
    epigraph: "             \"There are two kinds of people who willingly explain their suffering             to strangers: those who have given up hope, and those who have just             found a splinter of it and don't know yet whether it will hold.\"           ",
    content: () => (
      <>
        

<div className="prose">
<p>After the riders left, <span className="entity-link" data-entity="char-garret">Garret</span> organized stock.</p>
<p>
            He did it too quickly, with the mechanical efficiency of a man whose
            hands needed occupation to prevent his mind from working on things
            it couldn't afford to work on right now. <span className="entity-link" data-entity="char-zillian">Zillian</span> watched this for a
            moment, then set his pack on the counter and leaned against it with
            the patience of a man who had nowhere particular to be and was not
            going to pretend otherwise.
          </p>
<div className="dialogue">
<span className="speaker">Zillian</span>
            "That wasn't protection."
          </div>
<p>Garret didn't answer. His hands kept moving.</p>
<div className="dialogue">
<span className="speaker">Zillian</span>
            "That was collection."
          </div>
<p>
            A pause. The hands kept moving, but something in the set of Garret's
            shoulders changed — a minute compression, as though the word had
            landed and was being absorbed.
          </p>
<div className="dialogue">
<span className="speaker">Garret</span>
            "You should leave. You don't understand this place."
          </div>
<div className="dialogue">
<span className="speaker">Zillian</span>
            "Answer me."
          </div>
<div className="dialogue">
<span className="speaker">Garret</span>
            "This isn't your concern."
          </div>
<p>
            Zillian didn't move. Didn't speak. This was a different kind of
            patience — not the waiting of someone who expects to be answered
            eventually, but the waiting of someone who has decided that silence
            is a more useful tool than words and is content to use it
            indefinitely.
          </p>
<p>Garret stopped organizing stock.</p>
<p>
            He exhaled — a slow, deflating sound, like air leaving a room that
            had been holding too much of it — and turned to face the window
            rather than Zillian, as though he could speak more easily if he
            wasn't looking directly at the person he was speaking to.
          </p>
<div className="dialogue">
<span className="speaker">Garret</span>
            "It wasn't always like this."
          </div>
<p>He said it quietly. Almost to himself.</p>
<div className="dialogue">
<span className="speaker">Garret</span>
            "The offering. It's recent. A few decades, at most."
          </div>
<p>
            And then, because the story had been waiting inside him, pressing
            against the walls of someone who had kept it too long, it began to
            come out. Not in a rush. In the halting, careful way of a man
            pulling a splinter — slowly, because speed would break it off and
            leave the worst part buried.
          </p>
<p>
            There had been a time, he said, when the forest protected them. Not
            metaphorically — <em>literally</em>. The Longhorn Plains bred
            bandits the way still water bred mosquitoes, and <span className="entity-link" data-entity="loc-halwen">Halwen</span> was
            precisely the kind of isolated, unaffiliated village that should
            have been raided seasonally. But for generations it hadn't been.
            Travelers passed through and remarked on it. There was a story, old
            as the oldest grandmother, about a spirit in the forest — a
            presence, vast and unhurried, that did not bother the village and in
            its unbothering served as a kind of ward. Not through active
            intervention. Through being what it was, large enough that smaller
            things kept their distance.
          </p>
<p>The forest god.</p>
<p>
            No one had seen it. No one claimed to have spoken to it. Its
            existence was less a belief than a geological fact — the kind of
            thing you knew the way you knew the hills were old. You didn't need
            to see a hill form to know it was there.
          </p>
<div className="scene-break">✦</div>
<p>
            Then, perhaps thirty years ago, it had stopped. Not dramatically —
            Garret was careful about this — not with any announcement or visible
            sign. Just a gradual withdrawal, like warmth leaving a room after
            the fire has died. Bandits began appearing. Small groups at first,
            opportunistic. Then organized ones. Then, five years ago, the
            monsters started.
          </p>
<div className="narration">
            Creatures from deeper in the forest — things that didn't have good
            names in the common tongue, things that required three or four
            adjectives to describe and still left you uncertain whether you'd
            communicated the important parts. They had always lived in the old
            growth. They had never come out before. And then they did.
          </div>
<p>And that was when Baron Doren's men came for the first time.</p>
<p>
            They arrived with the explanation already prepared, as though they
            had been waiting for exactly this moment, which Zillian filed
            carefully in the growing ledger he was keeping in the back of his
            mind. They said the forest god was not gone. It was <em>angry</em>.
            It had withdrawn its protection because it had not been properly
            honored. And it needed to be appeased.
          </p>
<div className="dialogue">
<span className="speaker">Garret</span>
            "With a child."
          </div>
<p>
            He said it without expression. The flatness of a man who had been
            outraged by this for so long that the outrage had burned off,
            leaving only the fact.
          </p>
<div className="dialogue">
<span className="speaker">Garret</span>
            "At first once a year. They said it was necessary. And for a while —
            the bandits stayed away. The monsters stayed in the forest. We told
            ourselves it was working." A long pause. "Last year, it became every
            month."
          </div>
<div className="dialogue">
<span className="speaker">Zillian</span>
            "And you believed them."
          </div>
<div className="dialogue">
<span className="speaker">Garret</span>
            "At the beginning. But then—"
          </div>
<p>He stopped. His jaw worked.</p>
<p>
            A flash of something old and unresolved moved across his face, and
            Zillian waited.
          </p>
<div className="dialogue">
<span className="speaker">Garret</span>
            "One man said the same thing you're saying. He stood in this village
            — blue hair, you'd remember him, you couldn't not remember him — and
            he said we didn't need them. He said it could be stopped. He tried
            to make people resist." The silence stretched. "He disappeared."
          </div>
<div className="scene-break">✦</div>
<p>
            The word "disappeared" had different weights depending on how it was
            said. This one was heavy. This one meant something specific about
            the kind of world in which disappearances happened.
          </p>
<div className="dialogue">
<span className="speaker">Garret</span>
            "People stopped hoping as loudly after that. But not completely."
          </div>
<p>
            An older villager who had been pretending to examine a shelf near
            the back of the shop spoke without turning around.
          </p>
<div className="dialogue">
<span className="speaker">Older Villager</span>
            "They once tried to take children by force. Before the system. Three
            families refused and they sent soldiers."
          </div>
<div className="dialogue">
<span className="speaker">Zillian</span>
            "Did they succeed?"
          </div>
<div className="dialogue">
<span className="speaker">Garret</span>
            "This land belongs to Count Virius. Neglected — but not ownerless.
            If Baron Doren acts openly, if he sends soldiers into territory he
            has no claim to, it becomes a problem. A political one." He paused.
            "So they let us choose instead."
          </div>
<div className="narration">
            Choice without choice. That was the cleanest definition Zillian had
            ever heard for a very old system of control — one that preserved the
            illusion of consent while ensuring the outcome was never in doubt.
            You could refuse. You could. And then the protection would end, and
            the monsters would come, and the bandits would come, and eventually
            you would do it anyway, only now you would do it having failed once
            and living with that failure. So you didn't refuse. You
            <em>chose</em>.
          </div>
<p>
            He was still thinking about this — about the architecture of it, the
            elegant, bloodless design of a mechanism that extracted what it
            wanted while maintaining clean hands — when from somewhere outside
            the shop came a sound so small it was almost nothing.
          </p>
<p>A child crying.</p>
<p>
            Not in pain. In the particular register of a child who has been told
            something and does not understand it and knows, in the wordless way
            children knew things, that this was not the kind of thing that could
            be explained into sense.
          </p>
<p>Zillian thought about the blue-haired man who had disappeared.</p>
<p>
            He thought about why Baron Doren's men needed to manufacture the
            fear if the forest god was real and genuinely demanding offerings.
          </p>
<p>
            He thought about why a man offering protection would also
            orchestrate the threat that protection was needed against.
          </p>
<p>
            He thought:
            <em>something doesn't add up, and the thing that doesn't add up is
              the part that matters most.</em>
</p>
</div>


      </>
    )
  },
  {
    id: 'ch5',
    number: 5,
    numberText: "Chapter Five",
    title: "A Village That Waits",
    epigraph: "             \"I have seen grief, and I have seen resignation. They look alike             from the outside. The difference is that grief still believes things             could have been otherwise.\"           ",
    content: () => (
      <>
        

<div className="prose">
<p>He spent the following morning walking the village.</p>
<p>
            Not as a man mapping it — that would have drawn attention — but as a
            man who moved slowly because he had nowhere urgent to be, stopping
            occasionally at the well, watching from the slight elevation of the
            granary steps. Observation was something he had practiced until it
            became structural, part of how he moved through space rather than
            something he had to remember to do.
          </p>
<p>
            The village was alive in the technical sense. People moved. Commerce
            occurred in its minimal forms. Bread was baked and the smell of it
            was almost enough to make the street feel normal. But there was a
            quality to all of it — a thinness — like paint applied too lightly
            over a surface that kept bleeding through.
          </p>
<p>No children played.</p>
<p>
            That was the most wrong thing, when he named it to himself. Not the
            silence exactly, or the downcast eyes, or the way two people who
            must have known each other all their lives could cross paths without
            acknowledgment. Those things could have explanations. But children,
            left to their own devices, played. They played in the ruins of
            things. They played in the middle of disasters. They played because
            play was not a choice they made — it was a pressure they exerted,
            like water finding the lowest available course.
          </p>
<p>
            These children sat. Two of them near the dry fountain in the village
            center, close but not touching, not speaking. Their eyes carried the
            particular quietness of children who had been old for too long.
          </p>
<div className="narration">
            A wooden toy lay in the dirt near the fountain steps. Dust had
            settled in its joints. It had not been played with recently. Perhaps
            not for weeks. A child had set it down and not come back for it, and
            no one had picked it up.
          </div>
<div className="scene-break">✦</div>
<p>
            He found the anomaly at the northeast edge of the village, where the
            houses thinned and the forest wall pressed closer than it did
            anywhere else. The structure — what was left of one — sat apart from
            its neighbors in a space cleared by the fire that had taken it.
            Blackened stone foundations. Timber beams collapsed into a geometry
            of ruin, colonized now by slow green growth that didn't soften the
            destruction so much as make it patient-looking.
          </p>
<p>
            In the ash-stained earth beside the ruins, a stone slab had been set
            into the ground. Old — older than the fire, by the weathering of it.
            Carved with a symbol he didn't recognize: a stylized eye with lines
            radiating from it in patterns that were not decorative but
            structural, the way runes were structural when they had purpose. At
            the center of the stone was a hollow indentation, roughly
            hand-sized, shaped like something had been removed from it. The
            edges of the hollow were worn smooth with handling — not the wear of
            time but the wear of use. Someone had placed something in that
            hollow many times.
          </p>
<p>
            He crouched and examined the rune. The lines were not randomly
            placed. They described something. He wasn't a runic scholar but he
            had spent enough time in Arcaelis to recognize the bones of working
            magic versus the decorative imitation of it, and this was not
            imitation.
          </p>
<p>
            A villager appeared behind him. Not approaching — just present,
            having materialized the way people did when they'd been watching
            someone examine a thing they were ambivalent about being asked
            about.
          </p>
<div className="dialogue">
<span className="speaker">Villager</span>
            "That used to be someone's home."
          </div>
<div className="dialogue">
<span className="speaker"><span className="entity-link" data-entity="char-zillian">Zillian</span></span>
            "When?"
          </div>
<div className="dialogue">
<span className="speaker">Villager</span>
            "Before I was born. They say a mage named Erica lived there."
          </div>
<p>
            Zillian waited. The villager wanted to say more — you could see it
            in the way he stood, leaning very slightly forward, the way you
            leaned when you were about to speak.
          </p>
<div className="dialogue">
<span className="speaker">Villager</span>
            "They said she was a traitor. Kingdom soldiers came and destroyed
            everything." He paused. "Said she was working on something
            underground. Never told us what. Said she'd found something in the
            old forest, before the god withdrew."
          </div>
<p>The hollow in the stone. Something removed. Something taken.</p>
<div className="dialogue">
<span className="speaker">Zillian</span>
            "Did they find it?"
          </div>
<div className="dialogue">
<span className="speaker">Villager</span>
            "They found everything above ground." A pause that carried weight.
            "They never found what was underneath."
          </div>
<div className="scene-break">✦</div>
<p>
            That evening, Zillian sat on the edge of the well in the village
            center and watched the light die over the western hills and thought
            about a mage named Erica and a hollow stone and a forest god that
            had stopped protecting a village at approximately the same time that
            Baron Doren's men had arrived with a very convenient explanation.
          </p>
<p>
            He thought about how a man who manufactured fear would also need to
            control what explained that fear.
          </p>
<p>
            He thought about what might be underground that kingdom soldiers
            hadn't been able to find.
          </p>
<p>
            The shadow beneath him moved. Not on its own this time — he had
            moved it, slightly, unconsciously, the way you moved your hand when
            your mind was working hard. He looked down at it. The shape in the
            shadow was familiar by now: larger than a man, fluid at the edges,
            with the suggestion of weight and patience that he associated with
            the thing that had come to him three years ago and had not left
            since.
          </p>
<p>He pressed his fingers to the scar on his forearm.</p>
<p>
<em>I know you're thinking about staying,</em> he didn't say to it,
            because he didn't speak to his shadow in public.
            <em>Don't make me regret the thought.</em>
</p>
<p>The shadow was still.</p>
<p>
            Then, from somewhere across the village, he heard it — a low,
            resonant sound that traveled through the ground before it traveled
            through air. Not a horn. Not an animal. Something older than either.
          </p>
<p>The forest, settling.</p>
<p>Or the forest, beginning to wake.</p>
</div>


      </>
    )
  },
  {
    id: 'ch6',
    number: 6,
    numberText: "Chapter Six",
    title: "The Night Before",
    epigraph: "             \"The most terrible night is not the night the storm arrives. It is             the one before, when the sky is still clear and the air smells clean             and you know anyway.\"           ",
    content: () => (
      <>
        

<div className="prose">
<p>The chosen house had a visible quality about it.</p>
<p>
            He had noticed it while mapping the village, the way certain
            buildings emit a frequency — the subtle wrongness of a house that
            has been marked. Nothing physical: the door was the same color as
            the others, the garden equally untended. But people walking that
            street bent their paths slightly, adding two or three steps to avoid
            passing too close to it, the way water moves around an obstacle
            without anything in the water deciding to do so.
          </p>
<p>
            When he stood still long enough to watch properly, he saw a villager
            glance at the house and then away with the precise, overcontrolled
            casualness of someone who had decided not to look at a thing many
            times and was still not good at it. Another walked by with his eyes
            straight ahead, the deliberate forward gaze of a man pretending not
            to notice something that was all he could notice.
          </p>
<p>
            A door stood slightly open. From inside came the sound of soft
            crying — not a child's crying this time, but an adult's, which is
            quieter and somehow more absolute.
          </p>
<p>
            <span className="entity-link" data-entity="char-zillian">Zillian</span> stood across the narrow street and felt the weight of the
            ordinary that surrounded the extraordinary grief inside that
            building. Someone's child had been chosen. The machinery of the
            system had selected a number and that number corresponded to a
            family, and the family was in there crying as quietly as they could
            because loud grief would make it real in a way that quiet grief
            could be managed.
          </p>
<p>He was still standing there when <span className="entity-link" data-entity="char-garret">Garret</span> found him.</p>
<div className="dialogue">
<span className="speaker">Garret</span>
            "You shouldn't stand here long."
          </div>
<div className="dialogue">
<span className="speaker">Zillian</span>
            "Why not?"
          </div>
<div className="dialogue">
<span className="speaker">Garret</span>
            "Makes them feel watched. They need to feel invisible right now.
            It's what they have left." He stood beside Zillian. "Besides.
            Standing here doesn't help anything."
          </div>
<div className="dialogue">
<span className="speaker">Zillian</span>
            "What would?"
          </div>
<p>
            Garret didn't answer. Which was, Zillian supposed, its own kind of
            answer.
          </p>
<p>
            They walked back through the village in the falling dark. The
            evening star appeared over the eastern ridge, bright and
            indifferent. Someone had lit a fire at the inn. The smell of cooking
            meat came and went on a slight breeze from the south, and it made
            the village feel, briefly, like a place where people ate dinner and
            talked about ordinary things, and then the breeze stopped and it was
            only a village at night where somewhere a parent was crying too
            quietly for the neighbors to be too uncomfortable.
          </p>
<div className="scene-break">✦</div>
<p>The horn sounded at the edge of dark.</p>
<p>
            Not a signal horn — this was something older, a bull horn or
            something made to sound like one, the deep bellow of it coming from
            the hills northwest of the village and rolling over the walls in a
            single long note that didn't so much end as it did fade, like a
            stone dropped into deep water. Zillian stopped walking. Around him,
            the village froze for three full seconds — that collective held
            breath, that rehearsed stillness — and then exhaled and continued
            moving with slightly more deliberateness, slightly more speed, as
            though everyone had decided simultaneously that being indoors was
            preferable to being out.
          </p>
<p>
            After a long moment in which nothing further happened, the tension
            dispersed by degrees. A dog barked once and fell silent. Light still
            showed under the inn door.
          </p>
<div className="dialogue">
<span className="speaker">Zillian</span>
            "What was that?"
          </div>
<div className="dialogue">
<span className="speaker">Garret</span>
            "Happens sometimes. Usually means nothing." He paused. "Usually."
          </div>
<p>
            Zillian went to the inn and lay down in the room they gave him,
            which was small and clean and smelled of cedar and old stone. He lay
            with his eyes open and watched the ceiling and turned over the same
            facts he had been turning over all day. The system had the shape of
            something designed. The bandit attacks, the monster incursions, the
            convenient arrival of protection, the children as payment — it was
            too coherent to be coincidental, too elegant to be improvised.
            Someone had constructed this. Someone understood the village's
            psychology well enough to know exactly what fear to manufacture and
            what solution to offer it.
          </p>
<p>
            And under it all: a mage's ruins, a missing artifact, and a god that
            hadn't died but had perhaps been <em>taken.</em>
</p>
<p>The shadow beneath his bed moved.</p>
<p>
            Not the shadow itself — shadows moved when light moved and there was
            no light to move. This was the thing inside the shadow, which was
            different. He felt its attention shift, the way you felt a large
            animal shift its weight in the dark, becoming alert to something you
            hadn't sensed yet.
          </p>
<p>He closed his eyes.</p>
<p>The village calmed. Nothing further came in the night.</p>
<p>But nothing had passed. He knew the difference.</p>
</div>


      </>
    )
  },
  {
    id: 'ch7',
    number: 7,
    numberText: "Chapter Seven",
    title: "Protection Withdrawn",
    epigraph: "             \"A man who controls both the disease and the cure has perfect power.             The only mistake he can make is letting the disease get away from             him.\"           ",
    content: () => (
      <>
        

<div className="prose">
<p>They came back the next morning.</p>
<p>
            The same six riders, the same controlled walk, the same formation.
            The leader's boots were clean again. The village assembled in the
            square again with the same practiced efficiency, only this time
            there was something different in the air of it — a fracture line
            running through the collected silence, a barely perceptible
            distinction between the people who had decided and the people who
            had not.
          </p>
<p>
            The parent whose child had been chosen stood at the front of the
            crowd.
          </p>
<p>
            The father: a broad, weathered man who looked like someone who had
            been breaking stone for twenty years and had developed the same
            hardness as what he broke. The mother: smaller, quieter, with the
            specific stillness of a person who has made a decision and is
            managing their terror about it. The child stood between them,
            holding both their hands, not understanding.
          </p>
<p>The leader dismounted. The parchment emerged.</p>
<div className="dialogue">
<span className="speaker">Leader</span>
            "<span className="entity-link" data-entity="loc-halwen">Halwen</span> Village will—"
          </div>
<div className="dialogue">
<span className="speaker">Father</span>
            "No."
          </div>
<p>
            The word fell into the square like a stone dropped into still water.
            Ripples ran through the crowd — whispers, shuffling, the small
            sounds of people recalibrating their assessment of the moment. The
            leader looked at the father with the mild interest of a man
            encountering a process variance. He finished unrolling the
            parchment. He did not look at it.
          </p>
<div className="dialogue">
<span className="speaker">Father</span>
            "No. Not this time. Not ever again."
          </div>
<p>
            His voice was steady. Terrifyingly steady, the steadiness of
            something that had been shaking for a long time and had finally
            stopped because it had decided to be a wall instead of a man. Beside
            him, his wife's hand tightened on the child's hand. She was not
            looking at the riders. She was looking at the other villagers, going
            from face to face, reading something there.
          </p>
<p>Whatever she read made her expression close.</p>
<p>
            The crowd was not with them. Not openly. People were looking at
            their feet. Looking at the buildings. Looking anywhere that wasn't
            the father's face, because looking at his face meant encountering
            either the courage they hadn't summoned or the future they didn't
            want to contemplate.
          </p>
<p>The leader re-rolled the parchment.</p>
<div className="dialogue">
<span className="speaker">Leader</span>
            "Then Halwen stands unprotected."
          </div>
<p>
            He said it without inflection. He gave a slight nod to one of his
            riders, who raised a horn and blew a single long note across the
            valley.
          </p>
<span className="sfx">HOOOOOOORN</span>
<p>
            The sound echoed from the hills and came back changed, flattened,
            and when it had faded the morning felt emptier than it had before
            the sound. The riders turned and rode out of Halwen at the same
            controlled walk with which they had entered it. They did not look
            back. They were already finished with this village.
          </p>
<p>The dust they raised settled slowly.</p>
<p>
            No one spoke. The father stood in the middle of the square with his
            child's hand in both of his and watched the empty gate. His wife
            pressed close to his side. The crowd began to disperse without word
            or signal, filtering back to doors and alleys, and there was in the
            movement of it a quality that <span className="entity-link" data-entity="char-zillian">Zillian</span> recognized as shame.
          </p>
<p>
            Not everyone. Some faces showed something different: a slow, burning
            anger that had been fed, unexpectedly, by the sight of a man who had
            said no.
          </p>
<p>
            But most of them were ashamed. Because the father had done what they
            had never managed, and now the protection was gone, and whatever
            came next they would have to live through knowing which choice they
            had made when the moment arrived.
          </p>
<div className="scene-break">✦</div>
<p>They left too easily, Zillian thought.</p>
<p>
            Six armed riders, sent by a baron who depended on this arrangement
            for income and leverage, and when refused they had simply departed.
            No argument. No attempt at force. No demand for some other form of
            compliance. They had blown the horn and left as though the horn was
            the important part, not the refusal.
          </p>
<p>As though the horn was a <em>signal.</em></p>
<p>
            He was turning this over when movement caught his eye at the village
            entrance — not the direction the riders had gone, but the opposite
            gate, which faced south. A lone figure walking in, unhurried, with
            the particular self-possession of someone who had arrived exactly
            when they intended to.
          </p>
<p>
            A woman. Young — late twenties, perhaps — with the pointed ears and
            faintly luminous quality of deep-forest elven heritage. She wore a
            long green dress half-concealed by a traveling robe, the hood of
            which she had not lowered despite being inside the walls. A mask
            covered the upper half of her face: smooth, pale, carved with a
            single horizontal line across the eye-level that might have been
            decorative or might have been functional in ways he couldn't
            determine from this distance.
          </p>
<p>
            She stopped at the center of the village square, let her gaze move
            slowly around the empty space, and appeared unsurprised by
            everything she saw.
          </p>
<p>
            The wind, he noticed, moved differently around her than it moved
            around everything else. As though it was aware of her and adjusting.
          </p>
<p>
            And then, from the hills to the northwest — the same hills the
            horn's echo had come from — something moved. Something large, moving
            fast, generating the kind of sound that arrived as vibration before
            it arrived as noise.
          </p>
<p>The animals in the village pens went silent simultaneously.</p>
<p>The dog that had barked last night did not bark now.</p>
<p>
            Zillian's shadow spread two inches in every direction without any
            change in the light.
          </p>
</div>


      </>
    )
  },
  {
    id: 'ch8',
    number: 8,
    numberText: "Chapter Eight",
    title: "Raid Begins",
    epigraph: "             \"The interesting question is never who throws the first punch. It is             who decided, days earlier, that there would be a fight.\"           ",
    content: () => (
      <>
        

<div className="prose">
<p>They came over the northwest ridge like a tide.</p>
<p>
            Not running — something between a march and a sprint, disciplined
            even in the act of attack, which told <span className="entity-link" data-entity="char-zillian">Zillian</span> immediately that this
            was not a raiding party driven by desperation or hunger. Hungry men
            didn't move like that. Hired men moved like that. He counted forty
            in the first wave and knew from the spacing that there were more
            beyond the ridgeline.
          </p>
<p>The torches came first.</p>
<span className="sfx">WHOOSH —</span>
<p>
            Thatched roofing caught with the greedy speed of something that had
            been dry for too long. Within thirty seconds, two buildings were
            burning and the smoke was changing the light, making the village
            amber and shadow. Villagers boiled from doors — not panicking,
            exactly, but moving with the fractured urgency of people trying to
            simultaneously run and protect and retrieve — and the bandits were
            already inside the walls, already separating the crowd into smaller,
            more manageable groups.
          </p>
<p>
            They knew the layout. That was the thing Zillian clocked in the
            first ten seconds. They knew where the wells were, knew which
            streets connected to which, knew to drive people away from the
            granary and toward the open ground near the inn. This was not their
            first visit to <span className="entity-link" data-entity="loc-halwen">Halwen</span>, or they had been briefed by someone for whom
            it wasn't.
          </p>
<p>He moved into a doorway alcove and watched.</p>
<p>
            The elf woman — Zillian had mentally tagged her
            <em>Green Mask</em> — had not moved from the center of the square.
            The wave of panic broke around her the way water broke around stone.
            She turned in a slow circle, and whatever her eyes were doing behind
            that mask, the effect on the bandits nearest to her was noticeable:
            they gave her a wide berth without, apparently, deciding to do so.
          </p>
<p>One of them didn't notice, or didn't care, and lunged at her.</p>
<p>She moved. He didn't.</p>
<p>
            Not a dramatic movement — not a leap or a spin or anything with the
            theatrical quality of trained combat performance. She simply
            stepped, and the lunging bandit passed through the space she had
            occupied, and when he had passed she was behind him and her hand had
            touched his collar once and he was on the ground and motionless. The
            whole sequence took less time than it took to describe it. She had
            already returned to her slow-turning assessment of the square by the
            time the bandit hit the dirt.
          </p>
<div className="narration">
            Zillian watched this with the particular attention he reserved for
            things he didn't fully understand. Efficiency at that level didn't
            come from practice alone. It came from practice in service of a
            framework — a way of seeing combat that reduced it to geometry, to
            angles and weights and the physics of falling. She had been studying
            this for a very long time. Not just training. <em>Studying.</em>
</div>
<p>More bandits came. She dealt with them.</p>
<p>
            Not all of them — she wasn't trying to end the raid by herself. She
            was managing a perimeter, keeping the worst of it away from specific
            points in the village, moving with a deliberateness that suggested
            she had a map in her head and was working to it.
          </p>
<p>Protecting specific buildings. The granary. The well. The shop.</p>
<p>She knew Halwen. She had been here before.</p>
<div className="scene-break">✦</div>
<p>Zillian stayed in the alcove.</p>
<p>
            He was being honest with himself, which he tried to be about things
            that mattered: this was not his fight. He was a traveler, passing
            through. He had been here one day. He had packed his rations and
            paid his coins and gotten more than he bargained for in the way of
            local knowledge, but none of that made Halwen his responsibility.
            The shadow under his feet pulsed with something he recognized as
            anticipation, and he told it, silently, <em>not yet.</em>
</p>
<p>
            The bandits were coordinated. The timing — arriving immediately
            after the riders' horn signal — was too clean for coincidence.
            Someone was running both sides of this. The protection and the
            threat. The system was not Baron Doren providing safety from
            external dangers; the system was Baron Doren <em>being</em> both the
            safety and the danger, one machine with two faces.
          </p>
<p>Elegantly constructed. Utterly brutal.</p>
<p>
            He was still cataloguing this when a bandit broke away from the main
            fight.
          </p>
<p>
            Moving quickly, purposefully, toward the narrow alley between two
            buildings where a small shape had pressed itself into the shadows. A
            child. She had been trying to reach a door and hadn't made it — she
            was crouched with her back against the stone wall, knees to chest,
            with the absolute stillness of a prey animal that had decided the
            most important thing was to not be seen.
          </p>
<p>
            The bandit had seen her. He was already moving with the confidence
            of someone who knew the outcome.
          </p>
<p>His knife was unsheathed.</p>
<p>Zillian's shadow spread eight inches in a perfect circle.</p>
<p><em>Not yet,</em> he thought.</p>
<p>The bandit raised the blade.</p>
<p><em>Not yet—</em></p>
<p>The child shut her eyes.</p>
<p>He moved.</p>
</div>


      </>
    )
  },
  {
    id: 'ch9',
    number: 9,
    numberText: "Chapter Nine",
    title: "First Shadow",
    epigraph: "             \"Power is not a gift. It is a debt — to yourself, to the thing that             gave it, to every consequence of its use.\"           ",
    content: () => (
      <>
        

<div className="prose">
<p>He caught the wrist before the knife reached the child.</p>
<p>
            His hand closed around the bandit's wrist and stopped it — not by
            strength alone but by leverage and timing, the knife arrested at the
            apex of its arc by a grip that understood exactly where in the
            motion to intercept. The bandit turned, surprised, and in the
            turning caught <span className="entity-link" data-entity="char-zillian">Zillian</span>'s elbow across the side of the jaw, not hard
            enough to drop him but hard enough to reorient him, to make the
            knife and the child a secondary concern while his brain rebuilt its
            picture of the situation.
          </p>
<p>
            The bandit shoved. Zillian absorbed the shove, stepped with it, let
            the momentum carry him sideways against the alley wall. The wall was
            cold stone against his back. The bandit was between him and the
            child now, which was fine — better, actually. He'd moved the threat.
          </p>
<p>Then the bandit's blade found his forearm.</p>
<p>
            Not deep — a shallow cut, less than an inch, the kind you didn't
            feel in the moment. He felt the pressure of it and the wet warmth
            that followed. He looked down at it with the distant interest of a
            man who has learned to catalogue injuries quickly and assign them
            their appropriate priority level.
          </p>
<p>The cut was not the priority.</p>
<p>The blood dropping from it to the alley ground was.</p>
<div className="narration">
            He had three years of experience with this and it still surprised
            him sometimes — the speed of it. The moment blood touched ground,
            the shadow didn't wait. It had been patient all day. It had been
            patient for months. The patience of a predator that had been asked
            to wait and had waited but was not, fundamentally, a patient thing.
          </div>
<p>The darkness spread.</p>
<p>
            Not the shadow of the building — the shadow beneath him, which was
            its own thing, which obeyed different rules. It flowed outward
            across the alley in a slow tide, devouring the edges of other
            shadows, and where it touched the stone it didn't darken it so much
            as it made the darkness three-dimensional, gave it mass, gave it the
            suggestion of something that had an interior.
          </p>
<p>The bandit noticed. Looked down. Looked up at Zillian.</p>
<p>Backed up one step.</p>
<p>
            From the darkness — from the mass of shadow that now pooled across
            the alley floor and crept up the walls in slow tendrils — something
            emerged. The word "emerged" was not quite right: it was more that
            the darkness found its shape, that the scattered mass of it
            collected and rose and oriented itself, and what oriented itself was
            not a man and not a ghost but a tiger, assembled from the shadow the
            way a storm is assembled from weather: the same elements,
            reconfigured into something with intent.
          </p>
<p>The Shadow Tiger.</p>
<p>
            It stood at the height of Zillian's chest, which made it, at the
            shoulder, taller than a man. Its form was not perfectly solid — at
            the edges it bled back into darkness, and when it moved there was a
            fluidity to it that living animals didn't have, as though the
            boundaries between what it was and what it was made of were
            suggestions rather than facts. But its eyes were distinct: two
            points of dim golden light in the dark, with the specific quality of
            attention that large predators had, the attention that evaluated not
            whether you were interesting but whether you were a threat or a
            meal.
          </p>
<p>It was looking at the bandit the way a meal got looked at.</p>
<p>
            The bandit made a sound and ran. Not out of the alley — there was no
            clear path out of the alley — but away, pressing himself against the
            far wall and trying to become part of it, which was not effective.
            The Tiger took one slow step toward him and the bandit's legs
            stopped working properly. He slid down the wall into a crouch, knife
            still in hand and completely useless, staring at the thing in front
            of him with an expression that had gone so far past fear into
            something below it.
          </p>
<p>Zillian pressed two fingers to the cut on his forearm.</p>
<div className="dialogue">
<span className="speaker">Zillian</span>
            "Leave him."
          </div>
<p>
            The Tiger stopped. Turned its golden eyes toward Zillian. A long
            moment of communication without language — the kind of communication
            you had with a thing that shared your body's darkness but was not
            your body and had its own preferences about outcomes.
          </p>
<p>
            Then it turned from the bandit and flowed out of the alley like
            smoke through a gap under a door, and the fight in the village
            square changed shape.
          </p>
<div className="scene-break">✦</div>
<p>
            What happened next was not a battle. Zillian had seen battles.
            Battles had an evenness to them, two things pushing against each
            other, the outcome uncertain. What happened in the next four minutes
            in <span className="entity-link" data-entity="loc-halwen">Halwen</span> village had no evenness at all.
          </p>
<p>
            The Tiger moved through the raiders the way night moved through a
            room when the candle was extinguished — comprehensively, without
            announcement, changing everything. Bandits who had been managing the
            panic of the village became, instead, the panicking things. The
            noise of the raid shifted register, from the controlled sounds of
            professional violence to the uncontrolled sounds of men encountering
            something they had no framework for and discovering that their
            weapons were not going to be useful against it.
          </p>
<p>
            On the other side of the square, the elf woman had noticed. Her
            posture changed — not tenser but more alert, the way an expert
            noticed someone else demonstrating expertise. She did not stop
            fighting. She integrated the Tiger's presence into her movements
            with a fluency that suggested she had, if not encountered this exact
            thing before, encountered things sufficiently like it that it fell
            into a known category.
          </p>
<p>
            Zillian stood at the edge of the action and watched both of them:
            the Tiger and the woman who moved like wind given instruction. From
            somewhere near the north building, half-concealed in shadow himself,
            a third figure watched too. A man — young, lean, with a sword at his
            hip that he hadn't drawn. His eyes moved between the Tiger and the
            elf woman with an expression that was not fear and not amusement but
            something in between: the expression of someone in the presence of
            data they weren't yet sure how to classify.
          </p>
<p>
            Their eyes met briefly across the chaos. The man's expression didn't
            change.
          </p>
<div className="narration">
            Later, Zillian would think about that moment. The man's face had the
            stillness of someone who was watching very carefully and had been
            watching very carefully for some time. Not a traveler who had
            wandered into something. A watcher who had arrived specifically to
            see.
          </div>
<p>The Tiger roared.</p>
<p>
            The sound of it was not a tiger's roar — it was the sound of a large
            space suddenly collapsing into darkness, an implosion of noise that
            traveled as much through the ground as through the air. Every raider
            still capable of movement chose, simultaneously, to no longer be in
            Halwen.
          </p>
<p>The raid ended.</p>
<p>
            Somewhere in the village, a child was crying. Somewhere else, a
            woman was saying a name over and over, quietly. Smoke was still
            rising from two buildings. The fire was small enough that it could
            be beaten out.
          </p>
<p>
            Zillian looked at the cut on his forearm. The shadow around him was
            receding, slowly, like water running out of a basin. His arm
            trembled.
          </p>
<p>
            He pressed his hand to the wound and waited for the trembling to
            stop.
          </p>
<p>It didn't, for a while.</p>
</div>


      </>
    )
  },
  {
    id: 'ch10',
    number: 10,
    numberText: "Chapter Ten",
    title: "Aftermath",
    epigraph: "             \"Gratitude and fear look identical from the outside. The difference             is only in what the person is thinking about doing next.\"           ",
    content: () => (
      <>
        

<div className="prose">
<p>The rain began twenty minutes after the last bandit fled.</p>
<p>
            It had not been raining before. There had been no clouds. The sky
            had shifted from evening amber to a blue-grey so quickly that it was
            visible in real time, and then the first drops fell and then the
            rest of them, not hesitantly but with the thoroughness of rain that
            had decided. The fires on the two damaged buildings hissed and died.
            The smoke thinned. The smell of ash gave way to the smell of wet
            earth.
          </p>
<p>
            <span className="entity-link" data-entity="char-zillian">Zillian</span> sat on the well's edge with a strip of cloth pressed to his
            forearm and watched the villagers emerge from wherever they had
            been. They came out carefully, the way animals did after storms,
            testing the changed air before committing to it. Some of them looked
            at the extinguished fires with the particular expression of people
            confronting a small miracle: not believing it, but unable to not see
            it.
          </p>
<p>They looked at Zillian with a different expression.</p>
<p>
            He recognized it. He had seen it before in other places, after other
            incidents. It had the shape of gratitude but the content of fear,
            and the combination produced a specific withdrawal — not hostile,
            not aggressive, but decisive. They would give him a wide berth from
            here on. They would not meet his eyes for long. They would be
            polite, and careful, and he would be alone in their presence in the
            specific way you were alone when the people around you had decided
            you were too dangerous to approach.
          </p>
<p>
            He had saved them and frightened them simultaneously, which was not
            new. The world was full of things that were both protective and
            terrifying — fire, floods, gods. He had just added himself to that
            list in <span className="entity-link" data-entity="loc-halwen">Halwen</span>'s taxonomy.
          </p>
<div className="scene-break">✦</div>
<p><span className="entity-link" data-entity="char-garret">Garret</span> came and sat beside him without speaking for a while.</p>
<p>
            The shadow beneath Zillian was still, which helped. When the Tiger
            was fully recalled — fully absorbed back into whatever dimensionless
            space it occupied between uses — the shadow stopped moving on its
            own and the visible wrongness that had emanated from the alley faded
            to nothing. Zillian still felt it, a low-grade presence like the
            awareness of your own heartbeat, but it wasn't visible. He was, from
            the outside, just a man with a bandaged arm sitting on a well.
          </p>
<div className="dialogue">
<span className="speaker">Garret</span>
            "You've changed things."
          </div>
<div className="dialogue">
<span className="speaker">Zillian</span>
            "Things were already changed. I just made it visible."
          </div>
<div className="dialogue">
<span className="speaker">Garret</span>
            "That's the same thing, here." A pause. "They won't ignore this.
            Doren's men saw — or they'll be told. They'll know the raid failed.
            They'll know why. And they will…" He didn't finish the sentence.
          </div>
<div className="dialogue">
<span className="speaker">Zillian</span>
            "Escalate."
          </div>
<div className="dialogue">
<span className="speaker">Garret</span>
            "Yes."
          </div>
<div className="dialogue">
<span className="speaker">Zillian</span>
            "Then we need to understand what we're actually dealing with before
            that happens."
          </div>
<p>Garret looked at him. The use of "we" had not gone unnoticed.</p>
<div className="scene-break">✦</div>
<p>
            The elf woman was sitting alone against a low wall near the east
            gate, her robe pushed back from her shoulders in the way of someone
            who had been moving fast and was cooling off. Her mask was still in
            place. At her feet, the wind was making a small, quiet spiral — a
            private eddy, moving against the general direction of the rain,
            utterly unsystematic unless you knew to look for it.
          </p>
<p>He went to her.</p>
<div className="dialogue">
<span className="speaker">Zillian</span>
            "Who are you?"
          </div>
<p>
            A pause. She looked at him with whatever was behind the mask — he
            had the sense of being examined thoroughly and without warmth.
          </p>
<div className="dialogue">
<span className="speaker">Elf Woman</span>
            "<span className="entity-link" data-entity="char-sera">Sera</span>."
          </div>
<p>
            She said it like it was a number. Sufficient information, no more.
          </p>
<div className="dialogue">
<span className="speaker">Zillian</span>
            "Just passing through?"
          </div>
<div className="dialogue">
<span className="speaker">Sera</span>
            "Aren't you?"
          </div>
<p>
            She rose without any apparent effort — the movement of someone whose
            body was fully subject to her, no wasted motion, no stiffness from
            recent combat — and walked toward the gate. At the edge of his
            vision, the small wind spiral followed her for a few steps and then
            dispersed.
          </p>
<p>
            She didn't leave the village. She simply relocated to somewhere she
            wasn't being asked questions.
          </p>
<p>
            Zillian turned back toward the square. The man with the undrawn
            sword — the watcher from the north wall — was gone. He hadn't seen
            him leave. He hadn't seen him during the raid except in that one
            moment of eye contact. Wherever he had been and wherever he was
            going, he had managed it without being noticed, which was, in
            Zillian's experience, a skill rather than a coincidence.
          </p>
<p>
            He filed all three observations away: Sera, the watcher, and the
            rain that had arrived too conveniently to be weather.
          </p>
<p>
            He went inside and let his arm be bandaged by an old woman who did
            not meet his eyes.
          </p>
<p>This, he thought, was only the beginning.</p>
</div>


      </>
    )
  },
  {
    id: 'ch11',
    number: 11,
    numberText: "Chapter Eleven",
    title: "Days of Unease",
    epigraph: "             \"Truth, when it finally comes, rarely arrives cleanly. It comes in             pieces, from broken mouths, in rooms that smell of blood.\"           ",
    content: () => (
      <>
        

<div className="prose">
<p>
            They found one of the raiders alive in the wreckage of the
            fire-damaged building three days later, half-buried under collapsed
            timber, overlooked in the confusion of the immediate aftermath. He
            was one of one hundred thirty-two who had come over the ridge; the
            rest had fled or were accounted for in the way that men who had
            attacked a village and encountered something with golden eyes in the
            dark were accounted for.
          </p>
<p>
            He was badly injured but conscious and, when the village elders
            gathered around him in the repaired granary with <span className="entity-link" data-entity="char-zillian">Zillian</span>'s shadow
            pooled beneath the grain sacks in the corner where no one had
            thought to look, frightened enough to be honest.
          </p>
<p>
            His name didn't matter. What mattered was what he said, which came
            out in pieces, reluctantly, and which assembled itself, piece by
            piece, into the shape that Zillian had been expecting.
          </p>
<div className="dialogue">
<span className="speaker">First Elder</span>
            "Who sent you?"
          </div>
<div className="dialogue">
<span className="speaker">Bandit</span>
            "We didn't decide anything. We were sent."
          </div>
<div className="dialogue">
<span className="speaker">First Elder</span>
            "By who?"
          </div>
<p>
            The long silence of a man calculating risk on both sides of the
            answer.
          </p>
<div className="dialogue">
<span className="speaker">Bandit</span>
            "Baron Doren."
          </div>
<p>
            The elder went very still. The second elder made a sound like a man
            who has been punched lightly and is trying to determine whether to
            acknowledge it.
          </p>
<p>
            In the shadows, Zillian's expression did not change. He had known.
            But knowing and having it said aloud by a man under compulsion of
            injury were different weights of the same fact.
          </p>
<div className="dialogue">
<span className="speaker">Bandit</span>
            "We were brought here to attack. That was always the arrangement.
            Before the soldiers came with the protection offer — that's how it
            worked. First we attacked. Then they came with the solution. Both
            sides of it."
          </div>
<p>
            He said it with the flat exhaustion of a man who has been part of a
            machine for so long that the machine no longer horrifies him, only
            the being caught.
          </p>
<div className="dialogue">
<span className="speaker">Second Elder</span>
            "The children. The offerings. Why? If it was only about money, there
            were easier ways—"
          </div>
<div className="dialogue">
<span className="speaker">Bandit</span>
            "Not sacrifice." His eyes shifted. Something moved in them that was
            not the exhaustion. "Experiment."
          </div>
<div className="tension">
            The word fell into the granary like a stone into deep water, and the
            ripples of it spread into silence.
          </div>
<div className="dialogue">
<span className="speaker">Bandit</span>
            "They used the blood. The children's blood. To control it."
          </div>
<div className="dialogue">
<span className="speaker">First Elder</span>
            "Control what?"
          </div>
<p>The bandit looked at the floor.</p>
<div className="dialogue">
<span className="speaker">Bandit</span>
            "The forest wolf. The god. <em><span className="entity-link" data-entity="char-voryn">Voryn</span>.</em>"
          </div>
<div className="scene-break">✦</div>
<p>
            The interrogation stretched into hours. What emerged from it was not
            a simple story. Simple stories, Zillian had learned, were almost
            always wrong — the world didn't arrange itself for narrative
            convenience. What emerged was complicated, partial, and worse than a
            simple story because it was plausible.
          </p>
<p>
            The forest god <em>Voryn</em> was real. Not metaphor, not village
            superstition — real, ancient, enormous, and for generations
            passively present in the forest in the way that great mountains were
            present: huge, old, incidentally protective by virtue of their
            scale, not through intention. Smaller things avoided Voryn's
            territory. Bandits avoided Voryn's territory. The village had lived
            under that incidental protection for a very long time without fully
            understanding what provided it.
          </p>
<p>
            Baron Doren's people had discovered something that the village mage
            — Erica — had also apparently discovered: that the god could be
            influenced. Not controlled, not at first. Influenced. Her work,
            buried beneath her home, had been the beginning of a methodology.
            The kingdom soldiers who burned her house had taken her notes. And
            with those notes, someone with fewer ethical constraints and
            considerably more resources had built a system.
          </p>
<p>
            Children's blood, which carried a particular resonance the soldiers'
            mages couldn't fully explain but had empirically verified, allowed a
            weak but functional tether to Voryn's consciousness. It didn't give
            them control of the god. It gave them enough access to its awareness
            to modulate its behavior — to nudge it toward withdrawal, to dull
            its instinctive guardianship, to gradually make the thing that had
            protected <span className="entity-link" data-entity="loc-halwen">Halwen</span> gradually less protective and gradually more
            confused.
          </p>
<p>
            The monster incursions that had started five years ago were not
            accidents of nature. They were the consequence of a god whose sense
            of its own territory had been systematically blurred.
          </p>
<p>
            The villagers had been paying, with their children, to make their
            own protector into their own threat.
          </p>
<div className="narration">
            Zillian sat with this for a long time after the interrogation ended.
            The bandit was taken to be treated and guarded. The elders sat in
            silence. The architecture of what Baron Doren had built was, from a
            certain angle, almost elegant: find an existing protection, corrupt
            it, and then offer yourself as the replacement for what you had
            destroyed. Maintain both the disease and the cure. Remain necessary
            forever.
          </div>
<p>
            The flaw was the same flaw that all controlled systems had: they
            required continuous maintenance. Stop the maintenance and the system
            destabilized.
          </p>
<p>
            The monthly increase — from yearly offerings to monthly — wasn't a
            change in the god's demands. It was the amount of control input
            required to maintain a tether that was, apparently, beginning to
            fail.
          </p>
<p>
            And if the tether failed entirely, if Voryn's consciousness returned
            to itself and found what had been done to it—
          </p>
<p>
            That night, the ground trembled. Barely — a ripple that made glasses
            slide on tables and sent fine cracks up old plaster walls. The
            forest at the edge of the village stood utterly still in the
            moonlight, the kind of still that was not peace but suspension.
          </p>
<p>Something beneath it had begun to move.</p>
</div>


      </>
    )
  },
  {
    id: 'ch12',
    number: 12,
    numberText: "Chapters Twelve through Fifteen",
    title: "The Failed God",
    epigraph: "             \"What happens to a mind that has been controlled for thirty years             and then is suddenly, catastrophically, free? It does not return to             itself. It returns to the wound.\"           ",
    content: () => (
      <>
        

<div className="prose">
<p>The tremors became a pattern over four days.</p>
<p>
            At dawn. At dusk. Each time slightly stronger. Each time slightly
            longer. The elders called it settling. The children called it
            nothing because the children had learned not to name things that
            frightened the adults. <span className="entity-link" data-entity="char-zillian">Zillian</span> called it what he thought it was: the
            sound of something very large waking up wrong.
          </p>
<p><span className="entity-link" data-entity="char-sera">Sera</span> had not left the village.</p>
<p>
            This surprised him. He had expected her to go — she had the
            self-sufficiency of someone for whom staying was always a choice
            rather than a default, and staying usually cost something. But she
            had taken a room at the inn, two doors down from his, and she moved
            through the village with the unhurried purposefulness of someone
            doing something he couldn't determine, which irritated him in the
            way that competent opacity always irritated him.
          </p>
<p>
            He found her on the fourth morning at the ruins of Erica's house,
            crouching beside the rune stone with her mask still on and her
            fingers hovering an inch above the carved surface, not touching it
            but reading it in some way his eyes couldn't follow.
          </p>
<div className="dialogue">
<span className="speaker">Zillian</span>
            "You know what this is."
          </div>
<p>Not a question.</p>
<div className="dialogue">
<span className="speaker">Sera</span>
            "It's a binding anchor." She stood. "Or it was. Whatever it was
            bound to has been gone for decades." She paused. "I'm more
            interested in the hollow."
          </div>
<div className="dialogue">
<span className="speaker">Zillian</span>
            "The soldiers took whatever was in it."
          </div>
<div className="dialogue">
<span className="speaker">Sera</span>
            "They took what was above ground." Her eyes moved to him — he could
            feel them, even behind the mask. "The hollow faces down, not up. It
            wasn't a receptacle. It was a passage."
          </div>
<p>Underground.</p>
<p>
            He looked at the stone differently. The hollow was large enough for
            a hand — or for a focus stone, a catalyst, the kind of thing a mage
            working with divine energies would use to anchor a two-way channel.
            Not to put something in. To put something <em>through.</em>
</p>
<div className="dialogue">
<span className="speaker">Zillian</span>
            "She was communicating with it."
          </div>
<div className="dialogue">
<span className="speaker">Sera</span>
            "She was treating it." The words were careful, chosen. "The god was
            already beginning to suffer — she detected it before it became
            visible. Whatever she built underground was meant to stabilize it."
            She paused. "The soldiers destroyed the wrong things."
          </div>
<div className="scene-break">✦</div>
<p>The forest broke open on the morning of the seventh day.</p>
<p>
            Zillian was at the well. He heard it before he saw it — a sound that
            arrived first as wrongness in the air, a vibration too large and too
            discordant to be any natural thing, and then the northeast tree line
            convulsed and the earth at its base cracked and from the crack came
            not light but the <em>absence</em> of it, a darkness that was not
            shadow but presence, a place where the seen world had thinned enough
            that what was behind it was beginning to push through.
          </p>
<p>And from that place came <em><span className="entity-link" data-entity="char-voryn">Voryn</span>.</em></p>
<div className="narration">
            Once, this thing had been a god. You could see it in the structure —
            the vast wolf-form, the old power in the proportions of it, the way
            the air bent around it the way air bent around mountains and great
            storms. Divinity had a shape even in ruin.
            <br/><br/>
            But the ruin was comprehensive. Thirty years of external
            manipulation had done to Voryn what chains did to any wild thing
            given enough time: not simply restrained it but changed it. Twisted
            the nature of it, slowly and irreversibly, so that what emerged from
            the forest was not the god that had once unknowingly protected
            <span className="entity-link" data-entity="loc-halwen">Halwen</span>. It was the god minus the thirty years it had lost, which was
            to say it was the god and it was also the wound.
          </div>
<p>
            The creature that emerged was vast. Perhaps thirty meters at the
            shoulder, its wolf-form destabilized at the edges where divine
            energy that had been compressed and redirected and bled was now
            leaking back out of it without the channels to hold it. Its fur was
            black where it had color at all, shot through with cracks that
            glowed with an energy that had no color name in any human language.
            Its eyes were open and they were looking at the village with an
            attention that was not hunger and was not rage but was something
            more fundamental and more terrible: recognition of where the wound
            had come from, recognition of who had been there while it happened,
            recognition that could not distinguish between Baron Doren's people
            and the villagers who had, through their compliance, however
            coerced, been part of the machinery.
          </p>
<p>It had no one to be angry at except everything in sight.</p>
<div className="scene-break">✦</div>
<p>
            The fight — if a thing that happened between a mortal man with a
            shadow-bound predator and a corrupted divine entity could be called
            a fight — lasted most of the morning.
          </p>
<p>
            Zillian was very clear about what he was doing and what he was not
            doing. He was not defeating Voryn. He was not overpowering it. He
            was surviving it long enough for something else to happen, which
            required keeping its attention and keeping himself alive
            simultaneously, which were goals that pulled in opposite directions.
          </p>
<p>
            The Tiger was his most useful tool and his most costly one. Each
            time he called it, blood was required. Each time the blood was
            given, the cut — always the same forearm, always the same scar
            deepening — gave back a little less of what it had given. He could
            feel the cost in the way he felt cold: as a progressive subtraction
            from a budget he was not sure he knew the total of.
          </p>
<p>
            He learned things, in the fight, that he wouldn't have learned any
            other way. Voryn's movements had patterns — not the patterns of
            intelligence, exactly, but the patterns of a thing in pain moving
            away from the source of pain and toward anything that felt like
            relief. When the Tiger attacked, Voryn reacted not with focused
            counter-aggression but with the unfocused lashing of something
            trying to stop hurting. It was not trying to kill Zillian
            specifically. It was trying to stop.
          </p>
<div className="tension">
            The god was not attacking Halwen.<br/>
            The god was trying to reach the rune stone.
          </div>
<p>
            He understood this at the moment when Voryn, having thrown the Tiger
            twice and nearly crushed Zillian once against the granary wall,
            turned its massive attention not toward the nearest humans but
            toward the northeast edge of the village and began moving in a slow,
            deliberate line toward Erica's ruins.
          </p>
<p>Toward the anchor. Toward the passage.</p>
<p>
            Toward, perhaps, the thing underground that had been built to help
            it.
          </p>
<div className="scene-break">✦</div>
<p>
            Sera appeared from nowhere in particular, which he was beginning to
            accept as her characteristic mode of arrival.
          </p>
<p>
            She had removed her mask. He saw her face for the first time:
            fine-boned and serious, with the particular quality of elven
            features that made human expressions look imprecise by comparison,
            each emotion more legible and more contained. Her eyes were
            silver-grey, and currently they were the eyes of someone operating
            at the full edge of their capacity and entirely aware of that fact.
          </p>
<p>
            Wind spiraled around her in a column that had become visible, had
            become something structural rather than incidental. She was not
            summoning it — she was releasing it, which was a different
            relationship to power than he was used to seeing. Most mages reached
            for their element. She let hers go.
          </p>
<div className="dialogue">
<span className="speaker">Sera</span>
            "It wants the stone."
          </div>
<div className="dialogue">
<span className="speaker">Zillian</span>
            "I know."
          </div>
<div className="dialogue">
<span className="speaker">Sera</span>
            "Let it have it."
          </div>
<p>He looked at her.</p>
<div className="dialogue">
<span className="speaker">Sera</span>
            "Erica's work is still functional underground. The control mechanism
            was always external — it's why they needed ongoing blood offerings
            to maintain it. If Voryn reaches the anchor stone and the
            underground channel is intact—"
          </div>
<div className="dialogue">
<span className="speaker">Zillian</span>
            "It can reverse what was done to it."
          </div>
<div className="dialogue">
<span className="speaker">Sera</span>
            "Not reverse. <em>Begin</em> to recover." She paused. "It will take
            years. Decades, perhaps. The damage is extensive." Another pause.
            "But a god on the path back to itself is not the same as a god in
            the middle of a breakdown."
          </div>
<p>
            The Tiger stood between Voryn and the ruins. Zillian looked at it.
            Looked at the god, which had stopped moving and was watching him
            with those vast, cracked eyes that couldn't hold still because what
            was inside them wouldn't hold still.
          </p>
<p>He called the Tiger back.</p>
<p>
            Not away. <em>Back</em> — recalled into shadow, into the space it
            occupied when it was not elsewhere, the long swallow of darkness
            returning to the place it came from. The cut on his forearm burned.
            He felt the cost of the morning in every part of his body
            simultaneously, a weight he hadn't noticed accumulating because he'd
            been too occupied to notice it.
          </p>
<p>Voryn moved.</p>
<p>
            Slow, deliberate, each step reshaping the ground beneath it. It
            passed within thirty meters of Zillian and did not look at him. It
            moved like something that had remembered it had somewhere else to
            be, something more important than the small things that had been
            trying to stop it. It moved with the terrible dignity of a wounded
            thing heading toward what might be medicine.
          </p>
<p>
            It reached the ruins. It placed one massive paw on the stone slab,
            and the rune carved there lit with a cold, old light that had
            nothing to do with fire — the light of a mechanism re-engaging, a
            channel reopening, something working again after thirty years of
            enforced silence.
          </p>
<p>The god stopped moving.</p>
<p>
            And then, slowly, it descended. Not physically — it didn't fit
            through the stone, that was not what happened. What happened was
            that Voryn became less <em>present</em>, less immediate, the
            overwhelming aura of it receding by degrees as though it was
            withdrawing its outermost layers into somewhere beneath the world,
            somewhere older and quieter, where perhaps the healing that Erica
            had designed was waiting for it.
          </p>
<p>
            What was left, when it had finished this receding, was a large
            wolf-shaped shadow lying against the ruins. Still. Breathing with a
            slowness that was not sleep exactly but was adjacent to it. Injured,
            enormous, and for the moment — only the moment — not a threat.
          </p>
<p>Zillian sat down in the dirt.</p>
<p>
            His arm was bleeding freely now, the bandage soaked through, and he
            thought with a certain detachment that he should probably do
            something about that.
          </p>
<p>He did not, for a while, do anything at all.</p>
</div>


      </>
    )
  },
  {
    id: 'ch16',
    number: 13,
    numberText: "Arc Conclusion",
    title: "A New Shadow",
    epigraph: "             \"He did not save them. He replaced what had protected them with             something that frightened them more. The difference between a savior             and a monster, some of them were thinking, was mostly a matter of             which direction the fear pointed.\"           ",
    content: () => (
      <>
        

<div className="prose">
<p>Three days later, <span className="entity-link" data-entity="char-zillian">Zillian</span> left <span className="entity-link" data-entity="loc-halwen">Halwen</span>.</p>
<p>
            The village was repairable. He had made sure of this — not by
            rebuilding it himself, which was not his skill, but by doing the
            things that allowed rebuilding to begin: ensuring the surviving
            bandit's information reached the right people via <span className="entity-link" data-entity="char-garret">Garret</span>'s contacts,
            ensuring that Baron Doren's arrangement was now a matter of
            documented record in at least two places that were not under Doren's
            control. The political machinery of Count Virius's neglected
            territory would turn slowly, but it would turn. The baron had
            overextended himself. The exposure of the mechanism, even partial,
            even disputed, was enough to begin the unraveling.
          </p>
<p>
            None of this was the same as having fixed things. He was clear about
            this.
          </p>
<p>
            The village had a wounded god in its northeastern ruin who was not
            going anywhere quickly. It had a system of trauma so deeply embedded
            that the absence of the system would not immediately produce the
            absence of the behavior the system had required. The children who
            had been taken were not coming back. The blue-haired man who had
            tried to resist was not coming back. The families who had handed
            children over, who had chosen compliance, had to live with the
            knowledge of what they had chosen and why.
          </p>
<p>
            Recovery was going to be long. It was going to be ugly in ways he
            wouldn't be there to see.
          </p>
<p>
            He packed his things in the early morning light. His forearm had
            been properly treated and rewrapped by the same old woman who hadn't
            met his eyes — this time she had still not met his eyes, but her
            hands had been gentle. That felt like something. He wasn't sure
            what.
          </p>
<div className="scene-break">✦</div>
<p>Garret was at the gate.</p>
<p>
            Of course he was. Garret had been at the gate the first morning
            Zillian had arrived, in the sense that his gravitational field
            extended to the gate — he was the fixed point around which this
            village organized its commerce and its secrets and its small,
            sustained heartbreaks. He would be at this gate for the rest of his
            life, and people would come through it and he would take measure of
            them and say very little, and occasionally one of them would change
            something.
          </p>
<p>
            They stood for a moment without speaking. The morning was grey and
            cool. A bird was doing something persistent in a tree outside the
            walls.
          </p>
<div className="dialogue">
<span className="speaker">Garret</span>
            "You didn't save us."
          </div>
<p>
            He said it without accusation. Without resentment. As a statement of
            fact that he needed to say aloud for his own reasons.
          </p>
<div className="dialogue">
<span className="speaker">Garret</span>
            "You replaced what protected us. Now we have a hurt god in our
            backyard and the knowledge of what was done to it, and no one is
            coming to finish what you started."
          </div>
<div className="dialogue">
<span className="speaker">Zillian</span>
            "No."
          </div>
<div className="dialogue">
<span className="speaker">Garret</span>
            "And yet." He paused. "And yet." He looked at Zillian for a long
            moment. "The family didn't have to give their child. For the first
            time, they didn't have to. That happened because you were here." A
            pause. "I'm not sure what to do with that."
          </div>
<div className="dialogue">
<span className="speaker">Zillian</span>
            "Neither am I."
          </div>
<p>He walked through the gate.</p>
<p>
            Behind him, he was aware of villagers watching from windows and from
            doorways and from the edges of the square — not following, not
            calling after him, just watching. He had become, in the space of a
            week, the thing that the village would tell stories about, and he
            had learned enough about stories to know that the stories would not
            be comfortable ones. They would be the stories you told to explain
            something you didn't fully understand. The dark traveler who had
            come and gone and left the village changed in ways that were better
            and worse simultaneously, the kind of change that was better in
            fifty years and worse in the immediate years before that.
          </p>
<p>
            He thought about the blue-haired man who had tried to resist and had
            disappeared.
          </p>
<p>
            He thought:
            <em>I am not the first person to walk away from this village. I am
              not the first person who tried to help it and couldn't fully. That
              man came before me and was erased. And yet his attempt made Garret
              say 'people stopped hoping as loudly — but not completely.' Even
              erasure leaves something behind. Even failing loudly echoes.</em>
</p>
<p>
            The shadow under his feet moved with him on the road. Patient.
            Familiar. His.
          </p>
<p>His arm ached. It would, for a while.</p>
<div className="scene-break">✦</div>
<p><span className="entity-link" data-entity="char-sera">Sera</span> was waiting at the first bend of the road.</p>
<p>
            She had her traveling robe on, hood up, mask in place. She was
            examining a map with the focused attention of someone who had
            already decided where they were going and was simply confirming the
            route. She didn't look up as he approached.
          </p>
<div className="dialogue">
<span className="speaker">Zillian</span>
            "You're heading east."
          </div>
<div className="dialogue">
<span className="speaker">Sera</span>
            "<span className="entity-link" data-entity="loc-solvara">Solvara</span>. Yes."
          </div>
<div className="dialogue">
<span className="speaker">Zillian</span>
            "So am I."
          </div>
<p>She folded the map. Looked at him.</p>
<div className="dialogue">
<span className="speaker">Sera</span>
            "You should know — I don't make conversation while I travel."
          </div>
<div className="dialogue">
<span className="speaker">Zillian</span>
            "Neither do I."
          </div>
<p>
            She considered him for a moment with those silver-grey eyes that
            missed nothing and displayed very little.
          </p>
<div className="dialogue">
<span className="speaker">Sera</span>
            "There's something you should also know. About the stone. About
            Erica's work." She paused. "What she was building underground — it
            wasn't only for <span className="entity-link" data-entity="char-voryn">Voryn</span>. She had found others. Other places where the
            old presences were being weakened. She was building a network."
          </div>
<div className="dialogue">
<span className="speaker">Zillian</span>
            "A network that someone destroyed before she could use it."
          </div>
<div className="dialogue">
<span className="speaker">Sera</span>
            "Destroyed above ground. The underground portion survived." She
            turned back toward the road. "Someone should find it."
          </div>
<div className="dialogue">
<span className="speaker">Zillian</span>
            "Someone."
          </div>
<div className="dialogue">
<span className="speaker">Sera</span>
            "Someone with a particular relationship to shadow energies would
            find it easier to navigate than most."
          </div>
<p>She began walking.</p>
<p>
            He followed, not because she had convinced him and not because he
            had decided anything, but because the road went east and she was
            walking on it, and sometimes the most honest reason you walked in a
            direction was that something in front of you was moving the same way
            and you hadn't been given a better reason to stop.
          </p>
<p>
            The morning expanded around them. The hills of the Longhorn Plains
            were amber in the early light, and the forest behind them was quiet
            — not the held-breath quiet of Halwen's fear, but the quiet of
            something sleeping, something beginning, very slowly, in the dark
            beneath old roots, to remember what it had been before it was hurt.
          </p>
<div className="narration">
            Three things followed Zillian out of Halwen: the shadow, which was
            always with him; the scar on his forearm, which was slightly deeper
            than it had been when he'd arrived; and a question that Garret had
            not quite asked and which therefore had no shape yet, only weight.
            <br/><br/>
            What are you becoming?
            <br/><br/>
            He didn't know. He had three years of experience with the shadow and
            he still didn't know. He knew what it cost. He knew what it was
            willing to do for him and what it required in return. He knew that
            it was patient in the way that only things without time were
            patient, and that patience made him nervous in ways he had learned
            not to examine too closely.
            <br/><br/>
            The road to Solvara was three days' walk. The world of Zephyr was
            large and underexplored and full of things that had been weakened
            and things that were weakening them and the gaps between them where
            someone who moved quickly and didn't stay long enough to be claimed
            might find purchase.
            <br/><br/>
            He walked.
          </div>
<div className="tension">
            The shadow walked with him.<br/>
            Patient.<br/>
            Hungry.<br/>
            His.
          </div>
</div>


      </>
    )
  },
];
