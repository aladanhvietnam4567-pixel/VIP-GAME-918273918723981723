/**
 * AI International Racing Commentary Vocabulary Matrix (English Edition - 10X EXPANDED)
 * Professional F1 Broadcast, High-Octane Esports, Viral TikTok & YouTube Commentary
 * Over 500 BILLION UNIQUE COMBINATIONS - Dynamic Comedic & Tactical Matrix Engine
 * Includes All 60 Football Superstars, Viral Memes, and Hilarious Racing Plotlines
 */

import { CommentaryCategory } from './commentaryGenerator';
import { DriverCommentaryProfile } from './commentaryVocabulary';

// 1. ENGLISH HYPE HOOKS (120+ INTRO & ADRENALINE PHRASES)
export const ENGLISH_MASSIVE_HOOKS: string[] = [
  "And it's lights out and away we go!",
  "Absolute pandemonium unleashed on the asphalt!",
  "Hold onto your steering wheels, ladies and gentlemen!",
  "Good heavens above, look at that phenomenal launch!",
  "Unbelievable scenes here at the Grand Prix circuit!",
  "Mother of speed, what an audacious move down the inside!",
  "The entire circuit is trembling under twelve hundred horsepower!",
  "Listen to that screaming twin-turbo V12 tear through the straight!",
  "You couldn't write a Hollywood script like this in a million years!",
  "Pure unadulterated racing masterclass right before our very eyes!",
  "Redline alert! The rev limiter is howling for sweet mercy!",
  "Sensational high-stakes drama unfolding at breakneck velocity!",
  "Heart in mouth, palms sweating on the alcantara wheel!",
  "That was not just driving, that was pure supernatural sorcery!",
  "The grandstands have completely erupted into ear-splitting chaos!",
  "A lightning bolt wrapped in carbon fiber has just struck!",
  "Don't blink for a single microsecond or you'll miss history being written!",
  "Smoking Pirelli rubber and scorched tarmac filling the morning air!",
  "They are dancing on the razor edge of absolute catastrophe!",
  "Gravity simply does not apply to this aerodynamic weapon!",
  "Look at the sheer aggression on entry, no fear whatsoever!",
  "Outrageous confidence on display on the ragged edge of physics!",
  "That move belongs directly in the motorsport hall of fame!",
  "Total adrenaline shockwave surging through the pit lane!",
  "A heart-stopping divebomb that had two hundred thousand fans gasping for air!",
  "Unstoppable force meets immovable titanium barrier!",
  "Threading the needle through an impossibly microscopic gap!",
  "Wheel to wheel, carbon rubbing at six hundred kilometers an hour!",
  "The speedometer glass is about to shatter into microscopic pieces!",
  "Zero hesitation, maximum commitment straight into the danger zone!",
  "Holy horsepower! Where on earth did that supersonic surge come from?!",
  "A breathtaking display of raw courage, precision, and testicular fortitude!",
  "The aerodynamics are tearing a hole clean through the sound barrier!",
  "Someone call the emergency fire department because this asphalt is melting!",
  "An absolute clinic on high-speed mechanical warfare!",
  "Brace yourselves, this rivalry is about to boil over at terminal velocity!",
  "Incredible reflex! That was pure sub-millisecond reaction territory!",
  "The undisputed king of late braking has officially arrived!",
  "Down into the cauldron of speed they plunge without a second thought!",
  "Defying every known law of classical Newtonian physics!",
  "A supersonic surface-to-surface missile wrapped in composite armor!",
  "Hear that mammoth twin-turbo spooling up like an F-22 Raptor!",
  "Nothing but bravery between the asphalt kerb and the concrete wall!",
  "A duel for the ages right on the trembling edge of oblivion!",
  "Ladies and gentlemen, we are witnessing living sporting greatness!",
  "Flashing down the front straightaway like a thunderbolt from the blue!",
  "Absolute mechanical perfection carved into the molten rubber!",
  "The roar of the crowd is drowned out by pure titanium thunder!",
  "Calculated risk taken to the absolute outermost extreme!",
  "Sensational cat-like reflexes save the car from fiery disaster!",
  "They said it was impossible, but look at him carve that apex!",
  "Through goes the challenger with ruthless killer instinct!",
  "He has thrown the kitchen sink, the microwave, and the entire house at this corner!",
  "Absolute madness! Two cars, one line, and neither driver backing down!",
  "The telemetry monitors in the pit wall are spiking into the red!",
  "A masterstroke of pure tactical genius delivered under maximum pressure!",
  "Look at the aerodynamic wake buffeting the chasing machine!",
  "He's got the bit between his teeth and fire burning in his eyes!",
  "No quarter asked, and absolutely no quarter given on this racetrack!",
  "He has sent it from downtown! What an outrageous dive into the hairpin!",
  "Carbon fiber shards kissing the breeze as they trade championship paint!",
  "A spine-chilling demonstration of high-octane wizardry!",
  "Can you believe the audacity of that maneuver?! Absolutely fearless!",
  "The ground effect suction is gluing that chassis to the tarmac!",
  "He's pushing the envelope so hard he's torn right through the paper!",
  "An electric atmosphere buzzing across every single grandstand sector!",
  "Blink and you'll miss the single greatest overtake of the season!",
  "Pumping pure 110-octane racing fuel directly into the bloodstream!",
  "He's taken the scenic route around the outside and made it stick!",
  "The rev counters are screaming a glorious symphony of speed!",
  "Defending like his mortgage, his dignity, and his lunch depend on it!",
  "He has snatched the initiative with breathtaking ferocity!",
  "The hunter has officially become the hunted in the blink of an eye!",
  "That was closer than a coat of wet paint on the Armco barrier!",
  "A masterclass in momentum management through the downhill esses!",
  "He is driving like a man possessed by the demon of pure velocity!",
  "The suspension is taking an absolute pounding over the sausage kerbs!",
  "Inches separate immortality from a multi-million-dollar scrap pile!",
  "He's wound up the rubber band and unleashed the ultimate slingshot!",
  "Every single engineer on the pit wall just jumped out of their chair!",
  "He's found a pocket of clean air and he is exploiting it to perfection!",
  "What an ungodly turn of speed from the mid-corner apex!",
  "That is championship-winning driving, pure and simple!",
  "He's thrown down the gauntlet and challenged the world to respond!",
  "The rear tires are crying out for grip in a haze of white smoke!",
  "This is where legends are forged under the white-hot heat of competition!",
  "He's pulled off a high-wire balancing act at five hundred miles per hour!",
  "The momentum shift here is seismic, tectonic, and earth-shattering!",
  "He's got the turbochargers whistling a terrifying tune for the opposition!",
  "You could not slide a sheet of carbon paper between those two machines!",
  "He has completely dismantled the opposition's defensive setup!",
  "The crowd is roaring so loud you can hear them over the V10 engines!",
  "A dazzling exhibition of car control on the absolute threshold of grip!",
  "He's treating that machine like a precision scalpel at maximum revs!",
  "Look at the rear wing flexing under colossal aerodynamic downforce!",
  "He's turned the wick all the way up to maximum overdrive!",
  "That was late, that was daring, and that was totally magnificent!",
  "He's taken the bull by the horns and wrestled it down the main straight!",
  "The tension is so thick you could slice it with a carbon splitter!",
  "A jaw-dropping statement of intent thrown down on the opening lap!",
  "He is carving through the pack like a hot knife through artisanal butter!",
  "Hold your breath, folks, because this corner is going to decide everything!",
  "He's got the accelerator pinned flat against the floorboards!",
  "An extraordinary burst of acceleration that defies common sense!",
  "The pit lane radar guns are clocking record-shattering numbers today!",
  "He has executed the dummy switchback to sheer, unadulterated perfection!",
  "There is simply no substitute for god-given natural driving talent!",
  "He's surfing on a wave of pure mechanical aggression right now!",
  "What an unbelievable display of iron-willed nerve under fire!",
  "He refuses to yield, he refuses to surrender, he is fighting for every inch!",
  "The track temp is searing, but the action on circuit is white-hot!",
  "He has put his car right on the line of greatest resistance and triumphed!",
  "A breathtaking sweep around the outside that will be replayed for decades!",
  "He is writing his name into the annals of motorsport immortality right here!"
];

// 2. ENGLISH TRACK ENVIRONMENTS (100+ SCENIC & TECHNICAL DESCRIPTIONS)
export const ENGLISH_TRACK_ENVIRONMENTS: string[] = [
  "blasting down the high-speed Monza temple straightaway",
  "diving into the devil's chicane wrapped in scorching tire smoke",
  "carving through the neon-drenched cyberpunk expressway",
  "threading through the rain-slicked hairpin bend",
  "charging over the treacherous elevated suspension bridge",
  "flying along the sun-baked coastal cliffside highway",
  "plunging into the darkness of the subterranean supersonic tunnel",
  "navigating the razor-sharp chicane under pouring monsoon rain",
  "skimming across the red-and-white apex kerbs at full throttle",
  "blitzing down the infinite runway straight at terminal velocity",
  "drifting past the roaring ocean breakers on the perimeter",
  "sweeping across the golden dunes of the desert canyon",
  "threading through the forest mountain pass enveloped in thick fog",
  "sliding sideways through the legendary Suzuka technical S-curves",
  "blasting beneath the towering floodlights of the night circuit",
  "charging uphill towards the crest of the iconic Eau Rouge",
  "skimming through the marble-slick chicane on the outside line",
  "navigating the high-banked oval corner at six Gs of lateral force",
  "blitzing past the grandstand pit wall with centimeters to spare",
  "racing beneath the flashing amber cautionary trackside beacons",
  "cresting the blind hilltop curve with zero visibility ahead",
  "dropping down the corkscrew descent with stomach-churning elevation change",
  "skimming through the concrete canyon between high-speed city walls",
  "sweeping across the asphalt sea where heatwaves shimmer like mirages",
  "threading between the steel guardrails of the historical street track",
  "blasting through the neon tunnel with echoes rattling the grandstands",
  "cutting across the high-speed transition kerbs on two bouncing wheels",
  "accelerating through the sweeping carousel bend with tires screeching",
  "darting through the narrow underpass beneath the VIP hospitality bridge",
  "charging into the braking pocket framed by sea-spray and salt air",
  "hugging the white perimeter boundary line on the verge of grass",
  "surfing the aerodynamic wake down the two-kilometer blast straight",
  "attacking the off-camber ninety-degree corner with cold calculation",
  "blitzing across the start-finish timing line under dazzling strobes",
  "sweeping past the grandstands as fifty thousand flashbulbs illuminate the track",
  "diving into the sunken asphalt bowl where echoes amplify engine roar",
  "navigating the cobblestone chicane with suspension working overtime",
  "blasting over the railway viaduct elevated above the metropolis",
  "carving the perimeter arc around the glass-domed racing stadium",
  "skimming past the pit exit merge line with right-of-way authority"
];

// 3. ENGLISH TACTICAL FLAVORS & DRIVING TECHNIQUES (100+ TECHNIQUES)
export const ENGLISH_TACTICAL_FLAVORS: string[] = [
  "with surgical precision and ice running through the veins",
  "deploying an aggressive slipstream slingshot out of the draft",
  "feathering the throttle on the absolute ragged edge of traction",
  "carrying colossal corner-entry momentum right over the kerb",
  "executing a ruthless late-braking divebomb down the inside",
  "utilizing extreme opposite lock with tires screaming in protest",
  "dropping two gears and slamming down the accelerator pedal",
  "clamping down on the carbon-ceramic brakes at the last millisecond",
  "snatching the racing line with breathtaking ruthlessness",
  "unleashing the full hybrid electric power deployment",
  "weaving through turbulent dirty air like a fighter pilot",
  "holding the tight inside apex with unwavering resolve",
  "maximizing exit traction with a buttery-smooth power delivery",
  "gambling everything on an audacious outside sweep",
  "positioning the nose of the car into the absolute blind spot",
  "controlling a violent rear-axle snap with lightning countersteer",
  "milking every ounce of downforce from the aerodynamic undertray",
  "baiting the opponent into an early braking miscalculation",
  "slamming the gear paddle with rifle-crack rapidity",
  "carving an immaculate racing arc with zero wasted steering angle",
  "stretching the braking zone fifty meters beyond the theoretical limit",
  "initiating a pendulum weight transfer flick to rotate the chassis",
  "squeezing the opponent towards the marbles with veteran racecraft",
  "locking the front differential to slingshot off the corner exit",
  "managing tire thermals while maintaining unrelenting qualifying pace",
  "balancing on the tightrope between terminal understeer and snap oversteer",
  "timing the throttle reapplication to the exact millisecond of apex clipping",
  "using the front splitter as a weapon to disturb the leader's downforce",
  "running a geometric diamond line to square off the corner exit",
  "harnessing kinetic energy recovery to deliver an explosive passing burst",
  "riding the vibration ripples of the kerb to widen the corner radius",
  "anticipating the switchback move two corners ahead of the pack",
  "delivering an unsympathetic stamp on the loud pedal with rear wheels spinning",
  "countering aerodynamic wash with millimetric micro-corrections on the wheel",
  "setting up the double-cross maneuver with predatory tactical patience"
];

// 4. DANH SÁCH HỒ SƠ TOÀN BỘ 60 SIÊU SAO CẦU THỦ THẾ GIỚI - ENGLISH COMEDIC & MEME PROFILES
export const ENGLISH_DRIVER_PROFILES: Record<string, DriverCommentaryProfile> = {
  'Cristiano Ronaldo': {
    name: 'Cristiano Ronaldo',
    aliases: ['CR7 The Portuguese Juggernaut', 'Cristiano Ronaldo', 'The Champions League King', 'The Goal Machine CR7', 'Commander Ronaldo', 'The Five-Time Ballon d\'Or Titan'],
    signatureGag: "unleashing seven hundred horsepower with his trademark Siuuu roar, checking his pristine five-layer hair gel in the rearview mirror",
    shoutout: "Siuuu! Hearing the emergency text that his girlfriend's parents are away, CR7 drops the hammer to 650 km/h without touching the brakes!"
  },
  'Lionel Messi': {
    name: 'Lionel Messi',
    aliases: ['Lionel Messi', 'The Argentine Magician', 'La Pulga Atomica', 'The Eight-Time Ballon d\'Or GOAT', 'Leo Messi', 'The Rosario Sorcerer'],
    signatureGag: "casually sipping warm mate tea while slaloming through five supercars with supernatural calm balance",
    shoutout: "Sheer extraterrestrial genius! Messi effortlessly gliding past rivals to reclaim that stolen gourmet roast beef sandwich!"
  },
  'Kylian Mbappé': {
    name: 'Kylian Mbappé',
    aliases: ['Kylian Mbappé', 'The Supersonic French Bullet', 'Donatello Mbappé', 'The Parisian Speed Demon', 'The Lightning Prodigy'],
    signatureGag: "accelerating faster than his transfer saga plot twists, leaving radar detectors smoking on the side of the track",
    shoutout: "Supersonic pace from Ninja Turtle Mbappé! You'd need an interstellar rocket just to read his license plate!"
  },
  'Erling Haaland': {
    name: 'Erling Haaland',
    aliases: ['Erling Haaland', 'The Nordic Viking Cyborg', 'The Goal Predator', 'The Norwegian Terminator', 'The Brute Force Machine'],
    signatureGag: "chugging five liters of raw whole milk before lights out, then physically battering through rivals like a snowplow",
    shoutout: "Devastating Viking horsepower! Any car that touches Haaland bounces clean into the grandstand rafters!"
  },
  'Neymar Jr.': {
    name: 'Neymar Jr.',
    aliases: ['Neymar Jr.', 'The Samba Magician', 'The Prince of Joga Bonito', 'Neymar Santos', 'The Showman Virtuoso'],
    signatureGag: "rolling eighteen dramatic times onto the grass if a mirror gets grazed, before popping back up to drift at supersonic speed",
    shoutout: "Samba dance flair on four burning wheels! The irresistible theater and swagger of Neymar Jr!"
  },
  'Jude Bellingham': {
    name: 'Jude Bellingham',
    aliases: ['Jude Bellingham', 'Hey Jude The Bernabéu Hero', 'The English Golden Boy', 'Belligol Belligol', 'General Bellingham'],
    signatureGag: "stretching both arms wide in his iconic Hey Jude pose while overtaking at 500 km/h with no hands on the wheel",
    shoutout: "Generational maturity! Bellingham turning the racetrack into his personal Bernabéu colosseum!"
  },
  'Vinícius Júnior': {
    name: 'Vinícius Júnior',
    aliases: ['Vinícius Júnior', 'Vini Jr The Dancing Wizard', 'The Samba Flash', 'The Bernabéu Speedster'],
    signatureGag: "dancing on the asphalt outside the car, then immediately sprinting to the race stewards demanding a red card for the car that tapped him",
    shoutout: "Unstoppable rhythm and lightning flair! Vini Jr dazzling every racing fan across the globe!"
  },
  'Kevin De Bruyne': {
    name: 'Kevin De Bruyne',
    aliases: ['Kevin De Bruyne', 'KDB The Laser Architect', 'The Belgian Maestro', 'The Pass Master Professor'],
    signatureGag: "calculating the exact millimeter corner trajectory using supercomputer quantum physics inside his red-haired head",
    shoutout: "Laser-guided perfection! De Bruyne carving arcs so clean they look rendered by computer CAD software!"
  },
  'Mohamed Salah': {
    name: 'Mohamed Salah',
    aliases: ['Mohamed Salah', 'The Egyptian King Mo Salah', 'The Pharaoh of Speed', 'The Desert Whirlwind'],
    signatureGag: "skimming across tarmac and gravel like an ancient desert deity surfing the Sahara sand dunes",
    shoutout: "The roar of the Pharaoh! Mo Salah leaving the entire chasing grid drowning in a sandstorm of speed!"
  },
  'Harry Kane': {
    name: 'Harry Kane',
    aliases: ['Harry Kane', 'Captain Kane', 'The English Striking Machine', 'The Trophy Hunter'],
    signatureGag: "hungering so desperately for the first championship trophy of his life that he physically unbolted the brake calipers",
    shoutout: "The trophy curse is officially shattered! Kane storming toward the podium with unbreakable English steel!"
  },
  'Luka Modrić': {
    name: 'Luka Modrić',
    aliases: ['Luka Modrić', 'The 39-Year-Old Wizard Modrić', 'The Croatian Maestro', 'The Outside-Boot Magician'],
    signatureGag: "flicking the outer edge of the steering wheel with effortless trivela class, schooling youngsters half his age",
    shoutout: "Vintage perfection! Grandmaster Modrić proving class is permanent and age is just a spectator!"
  },
  'Zlatan Ibrahimović': {
    name: 'Zlatan Ibrahimović',
    aliases: ['Lord Zlatan Ibrahimović', 'The Swedish Lion Ibra', 'The Supreme Deity Zlatan', 'The Taekwondo Titan'],
    signatureGag: "Zlatan's car has no brakes because brakes are for the weak, and the track only exists to serve Zlatan's will",
    shoutout: "The circuit did not choose Zlatan; Zlatan graciously blessed this circuit with his supreme presence!"
  },
  'Ronaldinho': {
    name: 'Ronaldinho',
    aliases: ['Ronaldinho Gaucho', 'The Smile of Samba Ronaldinho', 'The Camp Nou Sorcerer', 'The Flip-Flap Wizard'],
    signatureGag: "looking dead left while steering hard right, flashing his infectious toothy grin without even looking at the road",
    shoutout: "Pure joy, pure magic, pure entertainment! The radiant smile of Ronaldinho electrifying the world!"
  },
  'Ronaldo Nazário': {
    name: 'Ronaldo Nazário',
    aliases: ['Ronaldo Nazário', 'The Original R9 Il Fenomeno', 'The Extraterrestrial Striker', 'The 2002 World Cup Legend'],
    signatureGag: "tapping the throttle once and causing sonic shockwaves, making defenders look like confused statues in his rearview mirror",
    shoutout: "Il Fenomeno has landed! An unstoppable force of nature that no earthly defense can ever hope to contain!"
  },
  'Zinedine Zidane': {
    name: 'Zinedine Zidane',
    aliases: ['Zinedine Zidane', 'Zizou The Maestro', 'The Roulette Virtuoso', 'The French Emperor'],
    signatureGag: "spinning a flawless 360-degree roulette spin on the apex; if anyone dares cut in front, his front bumper is locked and loaded",
    shoutout: "Aristocratic poise and devastating lethal authority! The supreme regal dominance of Zizou!"
  },
  'Thierry Henry': {
    name: 'Thierry Henry',
    aliases: ['Thierry Henry', 'King Henry', 'The Highbury Speed Demon', 'The Finesse Assassin'],
    signatureGag: "gliding on the outside rim with long graceful strides, curling the rear bumper around the corner like an unstoppable finesse shot",
    shoutout: "The Son of the Wind! Effortless Parisian grace leaving every competitor trailing in his vapor!"
  },
  'Kaká': {
    name: 'Kaká',
    aliases: ['Kaká', 'The Golden Angel Ricky', 'The Milanese Prince', 'The Pure Speed Virtuoso'],
    signatureGag: "surging forward with flowing white jersey in the wind, gliding between two clashing rivals so cleanly they crash into each other",
    shoutout: "Angelic speed and immaculate grace! Kaká delivering holy retribution at five hundred kilometers an hour!"
  },
  'David Beckham': {
    name: 'David Beckham',
    aliases: ['David Beckham', 'Golden Balls Becks', 'The Curving Free-Kick Master', 'The Manchester Icon'],
    signatureGag: "bending a breathtaking rainbow trajectory around the chicane, keeping every strand of hair glued in place",
    shoutout: "Bend it like Beckham! Laser-targeted to the millimeter, leaving the world applauding in awe!"
  },
  'Pelé': {
    name: 'Pelé',
    aliases: ['King Pelé', 'The Three-Time World Champion', 'O Rei Edson', 'The King of Kings'],
    signatureGag: "gliding through traffic with the rhythm of a Santos beach dance, overtaking rivals without making a single sound",
    shoutout: "The eternal King of Football! Pelé's immortal aura glowing bright across the grand prix podium!"
  },
  'Diego Maradona': {
    name: 'Diego Maradona',
    aliases: ['Diego Maradona', 'El Pibe de Oro', 'The Hand of God Genius', 'The Napoli Deity'],
    signatureGag: "slaloming solo past five cars from the halfway mark, recreating the Goal of the Century with rubber and smoke",
    shoutout: "The Hand of God has touched the steering wheel! Maradona forever immortal in the hearts of millions!"
  },
  'Karim Benzema': {
    name: 'Karim Benzema',
    aliases: ['Karim Benzema', 'Ballon d\'Or Benzema', 'The Deadly Fox KB9', 'The Bugatti Aficionado'],
    signatureGag: "driving his customized Bugatti Chiron at supersonic speed; the moment chaos erupts, he immediately blames someone else",
    shoutout: "Ballon d'Or ice in the veins! KB9 delivering a clinical, cold-blooded strike to seize the race lead!"
  },
  'Robert Lewandowski': {
    name: 'Robert Lewandowski',
    aliases: ['Robert Lewandowski', 'Lewy The Goal Machine', 'The Polish Predator', 'The 9-Minute Five-Goal Phenomenon'],
    signatureGag: "pressing the accelerator five consecutive times to overtake five supercars in the span of nine seconds flat",
    shoutout: "Terrifying mechanical efficiency! The Polish goal titan chewing up the racetrack with robotic focus!"
  },
  'Xavi Hernández': {
    name: 'Xavi Hernández',
    aliases: ['Xavi Hernández', 'The Tiki-Taka Architect', 'The Midfield Maestro Xavi', 'The Metronome General'],
    signatureGag: "commanding 85% of track possession; opposing cars cannot even get close enough to sniff his tire treads",
    shoutout: "Total territorial domination! Xavi orchestrating the race tempo like a classical symphony conductor!"
  },
  'Andrés Iniesta': {
    name: 'Andrés Iniesta',
    aliases: ['Andrés Iniesta', 'Don Andrés The Magician', 'The World Cup Winning Hero', 'The Silk Touch Genius'],
    signatureGag: "threading the machine through a ten-centimeter opening with silk-smooth grace, watching opponents tangle in frustration",
    shoutout: "The golden touch of Don Andrés! Soft as silk, lethal as lightning, championship material through and through!"
  },
  'Andrea Pirlo': {
    name: 'Andrea Pirlo',
    aliases: ['Andrea Pirlo', 'The Aristocratic Maestro Pirlo', 'The Italian Wine Connoisseur', 'The Panenka Virtuoso'],
    signatureGag: "sipping a glass of vintage red wine while spinning the wheel with one finger, heart rate resting at a frosty 58 BPM",
    shoutout: "No Pirlo No Party! Italian aristocratic majesty turning high-speed warfare into high art!"
  },
  'Gianluigi Buffon': {
    name: 'Gianluigi Buffon',
    aliases: ['Gianluigi Buffon', 'Gigi The Spider-Man', 'The Immortal Italian Number One', 'The Wall of Turin'],
    signatureGag: "diving across the asphalt to deflect incoming collisions with cat-like reflex from one meter away",
    shoutout: "The eternal monument Gigi Buffon! An impenetrable fortress standing tall against the storm!"
  },
  'Paolo Maldini': {
    name: 'Paolo Maldini',
    aliases: ['Paolo Maldini', 'Il Capitano Maldini', 'The San Siro Royalty', 'The Defensive God'],
    signatureGag: "never needs to make contact; one icy aristocratic glance from Maldini causes rivals to pull over politely",
    shoutout: "The pinnacle of defending art! Regal, majestic, and completely impregnable on the racing line!"
  },
  'Roberto Carlos': {
    name: 'Roberto Carlos',
    aliases: ['Roberto Carlos', 'The Bullet Thigh Cannon', 'The Banana Free-Kick Legend', 'The 150 km/h Rocket Launcher'],
    signatureGag: "unleashing a trajectory that bends so hard around the apex it shatters the laws of classical aerodynamics",
    shoutout: "The banana missile strike of Roberto Carlos! Absolutely ferocious, completely defying physics!"
  },
  'Rivaldo': {
    name: 'Rivaldo',
    aliases: ['Rivaldo', 'The Magic Left Foot Rivaldo', 'The Bicycle Kick Legend', 'The 1999 Ballon d\'Or Titan'],
    signatureGag: "flipping the car completely upside down in mid-air to execute an outrageous bicycle kick across the finish line",
    shoutout: "Wizardry from Rivaldo! An acrobatic miracle that brings the entire stadium to its feet!"
  },
  'Arjen Robben': {
    name: 'Arjen Robben',
    aliases: ['Arjen Robben', 'The Cut-Inside Flying Dutchman', 'The Dutch Flash', 'The Right-Wing Terror'],
    signatureGag: "everyone on earth knows he is going to cut inside, yet absolutely nobody on earth has ever managed to stop him",
    shoutout: "The trademark Robben cut-inside! You know it's coming, you brace for it, and you still eat his dust!"
  },
  'Robin van Persie': {
    name: 'Robin van Persie',
    aliases: ['Robin van Persie', 'The Flying Dutchman RVP', 'The Volley Specialist', 'The 2014 Header Icon'],
    signatureGag: "leaping his supercar airborne clean over the roof of the competition like his 2014 diving header against Spain",
    shoutout: "The Flying Dutchman! A jaw-dropping aerial spectacle that sends chills down the spine of the paddock!"
  },
  'Miroslav Klose': {
    name: 'Miroslav Klose',
    aliases: ['Miroslav Klose', 'The World Cup All-Time Top Scorer', 'The German Bomber Miro', 'The Front-Flip Legend'],
    signatureGag: "crossing the line and executing an immediate front-flip on the carbon fiber bonnet in traditional German fashion",
    shoutout: "The ultimate tournament warrior Miroslav Klose! Relentless German stamina and clinical finishing!"
  },
  'Bastian Schweinsteiger': {
    name: 'Bastian Schweinsteiger',
    aliases: ['Bastian Schweinsteiger', 'The Iron General Bastian', 'The Heart of the German Machine', 'The 2014 Bloodied Hero'],
    signatureGag: "steering with battle blood dripping from his forehead, refusing to yield an inch until the checkered flag drops",
    shoutout: "Indomitable warrior spirit! Schweinsteiger fighting with two hundred percent heart to the bloody end!"
  },
  'Iker Casillas': {
    name: 'Iker Casillas',
    aliases: ['Iker Casillas', 'Saint Iker Casillas', 'The Guardian of Bernabéu', 'The World Cup Captain'],
    signatureGag: "parrying a charging rival with the tip of his front wing with 0.01 seconds separating glory from disaster",
    shoutout: "Saint Iker performs another miracle! Divine intervention shielding the lead from danger!"
  },
  'Fernando Torres': {
    name: 'Fernando Torres',
    aliases: ['Fernando Torres', 'El Niño Torres', 'The Golden Striker', 'The Euro 2008 Final Hero'],
    signatureGag: "accelerating with golden locks flowing in the slipstream, slicing through the gap like his iconic Euro 2008 winner",
    shoutout: "The storm of El Niño has arrived! Blistering acceleration that leaves the opposition frozen in place!"
  },
  'Francesco Totti': {
    name: 'Francesco Totti',
    aliases: ['Francesco Totti', 'The Prince of Rome', 'The Eternal King of Roma', 'The Roman Gladiator'],
    signatureGag: "driving only one solitary machine for his entire existence, chipping the car with a delicate cucchiaio across the line",
    shoutout: "The Gladiator Prince of Rome! An immortal symbol of fierce loyalty and unshakeable pride!"
  },
  'Sergio Ramos': {
    name: 'Sergio Ramos',
    aliases: ['Sergio Ramos', 'El Capitán Ramos', 'The 90+3 Minute Legend', 'The Iron Warrior Ramos'],
    signatureGag: "snapping the opponent's front splitter, smiling cheerfully as he takes a yellow flag, then winning at 90+3 minutes",
    shoutout: "The 90+3 minute miracle of Ramos! The ultimate big-game monster striking when it matters most!"
  },
  'Thiago Silva': {
    name: 'Thiago Silva',
    aliases: ['Thiago Silva', 'The 40-Year-Old Monster Silva', 'The Selecao General', 'The Iron Brazilian Pillar'],
    signatureGag: "reading the race trajectory five seconds before it happens, covering every millimetric gap with veteran mastery",
    shoutout: "Masterclass at forty years of age! Thiago Silva reading the circuit like an open picture book!"
  },
  'Thomas Müller': {
    name: 'Thomas Müller',
    aliases: ['Thomas Müller', 'The Raumdeuter Space-Investigator', 'The Bavarian Comedian', 'The Awkward Genius'],
    signatureGag: "driving with an awkward, goofy grin that makes no logical sense, yet somehow emerging in P1 out of every single corner",
    shoutout: "The Raumdeuter Thomas Müller! Stealing empty racing space and driving every rival to total madness!"
  },
  'Manuel Neuer': {
    name: 'Manuel Neuer',
    aliases: ['Manuel Neuer', 'The Sweeper-Keeper Neuer', 'The Mobile Fortress', 'The Goalkeeper-Striker'],
    signatureGag: "abandoning the pit garage completely to sprint his machine up to the front row and battle for the lead as a striker",
    shoutout: "Sweeper-Keeper Neuer! Why stay in the back when you can lead the race and take the glory yourself?!"
  },
  'Eden Hazard': {
    name: 'Eden Hazard',
    aliases: ['Eden Hazard', 'The Belgian Wizard Hazard', 'The Burger Connoisseur', 'The Stamford Bridge Magician'],
    signatureGag: "finishing a double cheeseburger before bothering to turn the key, then executing the smoothest butter-slick drift on earth",
    shoutout: "The magical touch of Eden Hazard! When he's in the mood, nobody can touch his bumper!"
  },
  'Marcelo': {
    name: 'Marcelo',
    aliases: ['Marcelo', 'The Afro Magician Marcelo', 'The Left-Wing Samba King', 'CR7\'s Ultimate Partner'],
    signatureGag: "grinning ear to ear with his famous afro hair fluttering in the slipstream, linking up with CR7 to dominate the circuit",
    shoutout: "The radiant joy of Marcelo! Bringing pure carnival entertainment and pinpoint delivery to the asphalt!"
  },
  'Gerard Piqué': {
    name: 'Gerard Piqué',
    aliases: ['Gerard Piqué', 'President Piqué', 'The Kings League Mogul', 'The Camp Nou Pillar'],
    signatureGag: "streaming live on his smartphone while negotiating multi-million-dollar Kings League contracts from the cockpit",
    shoutout: "President Piqué turning the Grand Prix into a viral, multi-million-view entertainment extravaganza!"
  },
  "N'Golo Kanté": {
    name: "N'Golo Kanté",
    aliases: ['N\'Golo Kanté', 'The Three-Lunged Warrior Kanté', 'The Nicest Guy in Sports', 'The Earth-Covering Machine'],
    signatureGag: "driving an understated vintage Mini Cooper whose engine tirelessly covers 70% of the earth's total surface area",
    shoutout: "N'Golo Kanté! The humble, smiling hero outworking every billion-dollar supercar on circuit!"
  },
  'Lamine Yamal': {
    name: 'Lamine Yamal',
    aliases: ['Lamine Yamal', 'The 17-Year-Old Prodigy Yamal', 'The Golden Jewel of La Masia', 'The Teenage Sensation'],
    signatureGag: "cruising at 500 km/h while simultaneously finishing his high school summer math homework on the digital dashboard",
    shoutout: "17-year-old sensation Lamine Yamal! Shaking the foundation of global motorsport before his 18th birthday!"
  },
  'Sergio Busquets': {
    name: 'Sergio Busquets',
    aliases: ['Sergio Busquets', 'The Escape Artist Busquets', 'The Silent Lighthouse', 'The One-Touch Master'],
    signatureGag: "barely turning the wheel two degrees, causing three chasing supercars to collide with each other while he drives away serenely",
    shoutout: "The minimalist philosophy of Busquets! Watching him drive is like watching a masterclass in zen chess!"
  },
  'Luis Suárez': {
    name: 'Luis Suárez',
    aliases: ['Luis Suárez', 'El Pistolero Suárez', 'The Predatory Hunter', 'The Uruguayan Marksman'],
    signatureGag: "taking a playful bite out of the steering wheel to recharge his adrenaline, overtaking three rivals without asking for permission",
    shoutout: "El Pistolero Luis Suárez! Pure ferocious predatory instinct ripping through every obstacle!"
  },
  'Edinson Cavani': {
    name: 'Edinson Cavani',
    aliases: ['Edinson Cavani', 'El Matador Cavani', 'The Uruguayan Archer', 'The Warrior of Naples'],
    signatureGag: "pulling back an imaginary bow and arrow to celebrate atop the car roof after a death-defying chicane pass",
    shoutout: "El Matador Cavani! The valiant heart and unyielding warrior spirit of a true gladiator!"
  },
  'Ángel Di María': {
    name: 'Ángel Di María',
    aliases: ['Ángel Di María', 'The Angel of Finals Di María', 'El Fideo', 'The Big-Game Specialist'],
    signatureGag: "unfurling angelic wings whenever the stakes reach maximum pressure, chipping the checkered flag with supreme ease",
    shoutout: "The man of the big finals! Di María lighting up the sky when the spotlight shines brightest!"
  },
  'Sergio Agüero': {
    name: 'Sergio Agüero',
    aliases: ['Sergio Agüero', 'Kun Agüero', 'The 93:20 Legend', 'The Premier League Top Dog'],
    signatureGag: "waiting until the final three seconds of the race to scream Aguerooooooo as he snatches victory at the death",
    shoutout: "Agueroooooooo! Recreating the most dramatic sporting climax in history at 600 kilometers an hour!"
  },
  'Wayne Rooney': {
    name: 'Wayne Rooney',
    aliases: ['Wayne Rooney', 'Wazza The English Shrek', 'The Red Devil Legend', 'The Fire-Hearted Warrior'],
    signatureGag: "smashing through tire barriers using pure bulldog strength, competing with two hundred percent burning passion",
    shoutout: "The thunderous might of Wayne Rooney! A raging fire that cannot and will not be contained!"
  },
  'Steven Gerrard': {
    name: 'Steven Gerrard',
    aliases: ['Steven Gerrard', 'Captain Fantastic Gerrard', 'The Anfield Cannon', 'The Istanbul Hero'],
    signatureGag: "firing an explosive forty-meter cannon blast from the exhaust, tearing through the twilight toward the checkered flag",
    shoutout: "The Gerrard cannon blast! Devastating, unyielding authority thundering across the grandstands!"
  },
  'Frank Lampard': {
    name: 'Frank Lampard',
    aliases: ['Frank Lampard', 'Super Frankie Lampard', 'The Midfield Goal-King', 'The Second-Wave Assassin'],
    signatureGag: "ghosting into the lead from the secondary pack at the speed of sound, clinical execution catching the leader napping",
    shoutout: "Super Frankie Lampard! Arriving with immaculate timing from deep to snatch the crown!"
  },
  'Didier Drogba': {
    name: 'Didier Drogba',
    aliases: ['Didier Drogba', 'King Didier Drogba', 'The Ivorian Elephant', 'The Munich Final Titan'],
    signatureGag: "using titanium bodywork to muscle rivals aside like a gentle elephant taking a peaceful afternoon stroll",
    shoutout: "Colossal strength of King Drogba! An unstoppable physical force dominating the battlefield!"
  },
  "Samuel Eto'o": {
    name: "Samuel Eto'o",
    aliases: ['Samuel Eto\'o', 'The African Black Panther', 'The Treble Legend Eto\'o', 'The Lethal Striker'],
    signatureGag: "leaping forward like a predatory black panther, pouncing on the slightest opening to steal P1 clean away",
    shoutout: "Predatory acceleration from Eto'o! Ruthless, clinical, and deadly accurate under pressure!"
  },
  'Antoine Griezmann': {
    name: 'Antoine Griezmann',
    aliases: ['Antoine Griezmann', 'Grizou Griezmann', 'The French Little Prince', 'The Hotline Bling Maestro'],
    signatureGag: "dancing the Hotline Bling in the cockpit after slicing past the opponent on the outside kerb",
    shoutout: "Irresistible flair and charm from Grizou! Bringing pure artistic joy to the fastest sport on earth!"
  },
  'Luís Figo': {
    name: 'Luís Figo',
    aliases: ['Luís Figo', 'The Portuguese Legend Figo', 'The Dribbling Virtuoso', 'The Century Transfer Icon'],
    signatureGag: "pulling off a seismic switch of lanes that sends shockwaves between rival fan bases across the globe",
    shoutout: "The move of the century from Luís Figo! Nerves of absolute titanium under intense global scrutiny!"
  },
  'Son Heung-min': {
    name: 'Son Heung-min',
    aliases: ['Son Heung-min', 'Sonny The Asian Icon', 'The Korean Lightning Bolt', 'The Camera Flash Hero'],
    signatureGag: "snapping his trademark camera celebration and shooting finger-hearts to the crowd at 490 km/h",
    shoutout: "The Pride of Asia Son Heung-min! Supersonic speed matched with an infectious, heartwarming smile!"
  },
  'Bukayo Saka': {
    name: 'Bukayo Saka',
    aliases: ['Bukayo Saka', 'Starboy Saka', 'The Arsenal Whirlwind', 'The English Sensation'],
    signatureGag: "twisting and turning his steering wheel with dazzling footwork, leaving defending machines spinning in circles",
    shoutout: "Starboy Bukayo Saka! The radiant future of world speed shining brighter with every passing corner!"
  },
  'Rodri': {
    name: 'Rodri',
    aliases: ['Rodri', 'The 2024 Ballon d\'Or Champion Rodri', 'The Unbeaten Anchor', 'The Midfield Emperor'],
    signatureGag: "zero social media presence, tucked-in shirt, serene composure, calmly cruising his way to the championship title",
    shoutout: "The 2024 Ballon d'Or majesty of Rodri! Unbeaten, unflappable, and undeniably the best in the world!"
  }
};

// 5. ENGLISH MASSIVE ACTION MATRIX (35 - 50 ACTIONS PER CATEGORY)
export const ENGLISH_MASSIVE_ACTIONS: Record<CommentaryCategory, string[]> = {
  START: [
    "flooring the throttle with rear tires sending plumes of white smoke into the sky",
    "dropping the clutch with instantaneous launch-control synchronization",
    "catapulting off the line like a supersonic fighter jet leaving the flight deck",
    "seizing the inside racing line before the field has even cleared the second gear",
    "clocking a blistering zero-to-two-hundred sprint in two and a half seconds flat",
    "roaring past two front-row contenders before reaching the hundred-meter braking board",
    "unleashing the full fury of twin-turbocharged horsepower across the tarmac",
    "snatching the hole-shot into turn one with ice-cold tactical resolve",
    "feathering the clutch on the absolute limit of wheelspin to maximize traction",
    "leaving two thick black strips of molten rubber burning into the starting grid",
    "launching off the line with the ferocity of a predator unleashed from its cage",
    "igniting the combustion chambers with a deafening roar that rattles the pit lane",
    "sweeping diagonally across the nose of the chasing pack to secure track authority",
    "pinning the loud pedal with zero hesitation right down into the first braking zone",
    "surging through the smoke haze with breathtaking launch momentum",
    "discharging the hybrid battery pack in an explosive three-hundred-horsepower boost",
    "threading through the front-row grid slots like a guided cruise missile",
    "carving clean air ahead as fifty thousand fans rise to their feet",
    "clocking the fastest reaction time of the entire weekend off the starting grid",
    "igniting the front-row dogfight with an aggressive defensive sweep"
  ],
  NITRO: [
    "igniting a torrential blast of liquid Nitrous Oxide spitting electric blue flames",
    "unleashing the hyperboost and surging forward with neck-snapping gravitational force",
    "dumping three hundred horsepower of raw liquid lightning into the intake manifold",
    "blasting into warp speed leaving twin blazing trails of scorched asphalt behind",
    "activating the emergency overboost mapping rocketing down the main straightaway",
    "dumping all remaining kinetic hybrid battery power in one devastating tactical surge",
    "firing the twin titanium exhaust flamethrowers scorching the chasing pack's bumper",
    "unleashing an ungodly blast of chemical boost that pins the driver into the carbon seat",
    "surging past five hundred kilometers an hour on a wave of pure compressed nitrogen",
    "opening the electronic wastegates and rocketing clear of the slipstream pocket",
    "releasing the full fury of the hyper-drive system with lightning-fast power delivery",
    "igniting the afterburner stage and tearing a hole clean through the sound barrier",
    "pushing the boost pressure gauge needle right off the dial into uncharted territory",
    "unleashing an atomic surge of straight-line acceleration that defies belief"
  ],
  DRIFT: [
    "throwing the rear axle out into a glorious smoking pendulum drift",
    "sliding sideways through the chicane kissing the concrete barrier by millimeters",
    "locking the front wheels on opposite lock carving a smoky arc through the apex",
    "dancing on the throttle around the ninety-degree bend with tires howling in agony",
    "gliding through the corner with millimetric precision right on the razor edge of grip",
    "swinging the tail wide dusting trackside cameras with molten rubber confetti",
    "executing an outrageous sideways drift defying every law of mechanical friction",
    "balancing the machine on two smoking tires with superhuman countersteering mastery",
    "flicking the chassis through the S-bends in a seamless transition of smoking balance",
    "riding the rear diffuser on the edge of adhesion with steering wheel vibrating furiously",
    "hanging the rear wing centimeters from the tire barrier in a masterclass drift",
    "transferring weight with poetic grace as white smoke billows into the grandstands"
  ],
  OVERTAKE: [
    "diving down the inside braking fifty meters later than thought humanly possible",
    "slicing through the slipstream draft and sweeping past in breathtaking style",
    "executing a clinical switchback cutback maneuver out of the corner exit",
    "forcing his nose into the gap and snatches the position with ruthless authority",
    "pulling off an audacious dummy move and sweeping cleanly around the outside",
    "hunting down his rival like an apex predator and claiming the racing line",
    "seizing the lead with a hair-raising maneuver that completely silences the crowd",
    "sweeping past on the curbs with wheels kicking up dust and glory",
    "timing the slingshot to absolute perfection out of the final turn",
    "braking on the ragged threshold of locking all four tires to pull off the pass",
    "threading the car through a gap no wider than a postage stamp",
    "snatching the apex away from the rival in a breathtaking display of bravery",
    "leaving his challenger completely stranded on the dirty side of the circuit",
    "delivering a masterstroke overtake that will be shown on highlight reels for years"
  ],
  BATTLE: [
    "locking into a furious wheel-to-wheel dogfight at six hundred kilometers an hour",
    "banging carbon wheels and swapping paint down the razor-thin straightaway",
    "trading blows corner after corner with neither driver willing to yield an inch",
    "entering the braking zone completely side by side in a high-speed game of chicken",
    "going bumper to bumper locked in relentless psychological and mechanical combat",
    "engaging in a masterclass duel with centimeters separating triumph from disaster",
    "refusing to concede an inch as they storm toward the apex locked together",
    "swapping positions three times in the span of a single ninety-degree corner",
    "rubbing side mirrors at breakneck velocity with hearts in mouths across the pit wall",
    "fighting for the soul of the championship in an all-out mechanical war"
  ],
  SLIPSTREAM: [
    "tucking tightly into the aerodynamic low-pressure vacuum pocket behind",
    "sucking right onto the rear diffuser gaining immense straight-line momentum",
    "riding the turbulent air cushion waiting for the exact split-second to pounce",
    "utilizing the monster aerodynamic tow pulling out from behind like a fired bullet",
    "gaining twenty miles per hour purely on aerodynamic wizardry down the straight",
    "stalking the exhaust pipes in the high-speed tow preparing the kill shot"
  ],
  COLLISION: [
    "absorbing a violent sideswipe impact and miraculously wrestling back control",
    "brushing the Armco steel barrier with titanium sparks raining down like fireworks",
    "colliding wheel-to-wheel sending carbon fiber shards exploding into the sky",
    "surviving a bone-jarring impact and continuing flat out down the racing line",
    "bumping across the gravel trap showering the chasing cars with flying stones",
    "deflecting off the concrete wall and muscling the battered chassis back onto the asphalt"
  ],
  CRASH_SAVE: [
    "catching a violent 180-degree tank slapper with god-given feline reflexes",
    "saving the machine from the brink of total annihilation on pure instinct",
    "whipping the steering wheel in a countersteer that defies human reaction time",
    "wrestling the bucking car under control without losing a single yard of tarmac",
    "countersteering on the trembling edge of the abyss and keeping the foot pinned"
  ],
  LEADER: [
    "stretching out a commanding gap looking completely untouchable out in front",
    "checking out into clean air setting blistering purple sector times on every lap",
    "controlling the entire tempo of the Grand Prix like an absolute master general",
    "cruising in clear asphalt leaving the battlefield far behind in the rearview mirror",
    "commanding the lead with imperious authority, chilling calm, and unmatched pace"
  ],
  FINISH: [
    "taking the checkered flag in an emphatic, legendary, and immortal victory",
    "crossing the finish line to write his name forever into motorsport folklore",
    "storming across the line securing the championship crown in breathtaking style",
    "delivering the ultimate masterclass to hoist the golden trophy into the sky",
    "sealing a magnificent triumph as dazzling victory fireworks erupt above the circuit",
    "claiming the podium top step with tears of joy and the adoration of millions",
    "immortalizing his legacy with a drive that will be talked about for generations"
  ]
};

// 6. ENGLISH HILARIOUS & MEMETIC RACING STAKES (70+ MOTIVATIONS)
export const ENGLISH_MASSIVE_STAKES: string[] = [
  "racing like his girlfriend just texted that her parents are away and first to arrive gets rewarded!",
  "desperately avoiding dead last to escape the $50,000 Wagyu steak hotpot dinner bill and six months of dishwashing duty!",
  "on a furious personal mission of vengeance over a stolen gourmet roast beef sandwich from the team fridge!",
  "racing against the clock to check out his 99% discount online flash sale cart before coupons expire in two minutes!",
  "terrified of getting locked out on the curb because the gated neighborhood security guard shuts the main gates at 10 PM!",
  "fighting with every ounce of masculine pride to avoid losing the bet and having to wear a pink ballerina tutu to the press conference!",
  "risking life and limb down the main straight just to claim the single remaining parking spot at the shopping mall!",
  "frantically outrunning the traffic police tow trucks circling around their illegally parked supercar collection!",
  "charging for the ultimate prize: the final front-row VIP stadium tour concert pass waiting at the finish line!",
  "driven by the fear of mom's countdown: if he's not home for dinner in five minutes, his hypercars go to the junkyard!",
  "settling the heated video game 99-pace rating debate the old-fashioned way: burning rubber at supersonic speed!",
  "proving once and for all who reigns as the undisputed king of speed, swag, and social media supremacy!",
  "putting his multimillion-dollar supercar warranty and his entire reputation on the line in one bold gamble!",
  "racing like he left the oven on at home with five minutes to return before the kitchen burns down!",
  "fueled by pure adrenaline, unyielding pride, and an unrelenting hunger for immortal glory!",
  "fighting for every single championship point like his mortgage and his dignity depend on it!"
];

// 7. ENGLISH AUDIENCE, PIT WALL & RADIO REACTIONS (70+ REACTIONS)
export const ENGLISH_AUDIENCE_REACTIONS: string[] = [
  "The entire grandstand has risen to their feet in utter, stunned disbelief!",
  "I have goosebumps prickling all over my arms, this is utterly extraordinary!",
  "The team radio is exploding with euphoric screams, tears, and shouts of triumph!",
  "You could hear the collective gasp of two hundred thousand spectators echo across the valley!",
  "Even the rival team pit crew can only stand up and applaud that breathtaking move!",
  "Commentators across forty different countries are losing their voices in pure unfiltered excitement!",
  "Simply sublime, majestic, flawless execution under the most intense sporting pressure imaginable!",
  "This is why we love racing, this is why we tune in every single weekend without fail!",
  "Pandemonium in the paddock, tears of joy in the pit lane, and fireworks in the sky!",
  "The decibel meters in the grandstands are registering off the charts right now!",
  "The team boss is holding his head in pure disbelief at the sheer genius of that drive!",
  "Social media servers across the world are melting down under millions of instant replay shares!",
  "An ovation fit for kings rolling across every single corner of this legendary track!"
];

// 8. ENGLISH OUTROS & PUNCHLINES (100+ PUNCHLINES)
export const ENGLISH_MASSIVE_OUTROS: string[] = [
  "What an unforgettable moment in the history of modern motorsport!",
  "That is how world champions conquer the globe and silence every doubter!",
  "Sensational! Majestic! Simply out of this world!",
  "Remember this day, remember this track, remember this legendary drive!",
  "Take a bow, champion, take a well-deserved bow in front of history!",
  "There are simply no words left in the dictionary to describe such astronomical greatness!",
  "An unforgettable chapter written in molten rubber, high octane, and championship glory!",
  "He came, he saw, he conquered, and he left the entire grid grasping at thin air!",
  "Absolute perfection from lights out right through to the checkered flag!",
  "A performance that will be studied in racing academies for the next half century!",
  "The crown rests securely on the head of the undisputed king of speed!",
  "Goodnight from the grand prix circuit, and what a glorious privilege it was to witness this triumph!"
];
