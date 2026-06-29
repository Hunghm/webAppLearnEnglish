import { readFileSync, writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = resolve(__dirname, '..');

// ---------------------------------------------------------------------------
// Complete answer key extracted from the PDF answer pages (pp. 281-312).
// Structure: answerKey[unitName][exerciseLetter] = array of answer strings.
// Index 0 corresponds to question id 1, index 1 to id 2, etc.
// ---------------------------------------------------------------------------
const answerKey = {
  "Unit 1": {
    "A": [
      "is doing / don't see",
      "doesn't get",
      "are getting",
      "go / turn",
      "does float",
      "are getting",
      "doesn't eat",
      "aren't listening",
      "walks",
      "are / phoning",
      "Do / order",
      "are walking / spots",
      "has",
      "GIVES",
      "is always telling",
      "doesn't wear / does wear/wears"
    ],
    "B": [
      "always",
      "present",
      "moment",
      "being",
      "rarely",
      "every",
      "most/much/some",
      "never",
      "time",
      "right",
      "time",
      "days",
      "whenever/when/if",
      "for",
      "It/That"
    ],
    "C": [
      "are you doing",
      "I'm just doing",
      "How's it going",
      "it's going well",
      "I'm looking",
      "I'm contacting",
      "mum drives",
      "she says",
      "it doesn't",
      "she doesn't need",
      "What's happening",
      "Do you have",
      "I don't even have",
      "I'm not really working",
      "I'm trying",
      "don't you do",
      "I don't like",
      "that focuses",
      "That sounds",
      "Do you think"
    ],
    "D": [
      "means",
      "only costs",
      "doesn't matter",
      "I'm ringing",
      "I recognise",
      "does the nut cake contain",
      "I really don't agree",
      "aren't you playing",
      "doesn't concern",
      "resemble",
      "you're not watching",
      "does not exist",
      "includes",
      "We're having",
      "involves"
    ],
    "E": [
      "am looking / looks",
      "do / feel / doesn't feel/isn't feeling",
      "are considering / do consider",
      "are having / Do have",
      "appeals / are appealing",
      "doesn't smell / are smelling",
      "am depending / depends",
      "is / are being/are",
      "do / think / is thinking",
      "is seeing / see"
    ],
    "F": [
      "has been",
      "written",
      "haven't",
      "I've",
      "broken",
      "come",
      "haven't you told",
      "has lived/has been living"
    ],
    "G": [
      "filled",
      "been following / caught",
      "seen",
      "heard",
      "been thinking",
      "been driving",
      "been standing",
      "worked/been working"
    ],
    "H": [
      "I've sent off",
      "you've ever eaten",
      "We've been waiting / have you been",
      "Have you just received",
      "we haven't got / We've been expecting / they haven't shown up",
      "I've been drawing up / I haven't got / Have you had",
      "mum's been meaning"
    ],
    "I": [
      "just",
      "recently",
      "since",
      "already",
      "so",
      "until",
      "already/just",
      "for",
      "already",
      "ever",
      "yet",
      "before",
      "since",
      "still",
      "for",
      "just",
      "yet"
    ],
    "J": [
      "have",
      "Since",
      "been",
      "meant/involved",
      "led",
      "not",
      "do",
      "is",
      "appears/seems",
      "are",
      "There",
      "does",
      "becoming",
      "are",
      "has"
    ]
  },

  "Unit 2": {
    "A": [
      "pessimistic",
      "biased",
      "dubious",
      "naive",
      "plausible",
      "baffle",
      "assess",
      "justify",
      "estimate",
      "presume"
    ],
    "B": [
      "grasp",
      "deliberating",
      "gather",
      "concentrate",
      "considering/contemplating",
      "reckon/suppose",
      "suppose",
      "pondered/considered/contemplated",
      "contemplate/consider"
    ],
    "C": [
      "dilemma",
      "faith",
      "genius",
      "guesswork",
      "hunch/intuition",
      "ideology",
      "inspiration",
      "intuition",
      "query",
      "notion",
      "paradox"
    ],
    "D": ["C", "D", "A", "B", "A", "D", "C", "C", "D", "B"],
    "E": ["D", "A", "B", "G", "F", "C", "E"],
    "F": [
      "think",
      "up / with",
      "up / to",
      "up / on",
      "come / to",
      "up / on",
      "make",
      "out",
      "reading"
    ],
    "H": [
      "under",
      "on",
      "out",
      "on",
      "in",
      "with",
      "in",
      "in",
      "out",
      "into",
      "of",
      "on",
      "On",
      "into",
      "In"
    ],
    "I": [
      "straight",
      "mental",
      "impression",
      "brains",
      "sense",
      "dream",
      "consideration"
    ],
    "J": ["against", "in", "have", "of", "view", "mind"],
    "K": [
      "never crossed my mind",
      "come to/arrived at/reached the conclusion",
      "give an account of",
      "gave the false impression",
      "strike a balance between",
      "out of consideration for"
    ],
    "L": [
      "bell",
      "hairs",
      "what",
      "wits",
      "head",
      "two",
      "bend",
      "stock",
      "dark",
      "wood",
      "uptake",
      "leg"
    ],
    "M": [
      "confusion",
      "irrationally",
      "brilliance",
      "definitive",
      "inexplicable",
      "disbelief",
      "indecisive",
      "imaginary",
      "insanity",
      "illogical"
    ],
    "O": ["1", "3", "5", "6", "7"]
  },

  "Unit 3": {
    "A": [
      "told",
      "Did you meet",
      "had become",
      "got",
      "has been",
      "had",
      "have finished",
      "were",
      "gave",
      "haven't worked",
      "were never allowed",
      "sent"
    ],
    "B": [
      "were passing",
      "stopped",
      "was reading",
      "had",
      "was getting",
      "Was / thinking",
      "did / swim",
      "attracted",
      "was put",
      "was working",
      "arrived",
      "was created"
    ],
    "C": [
      "started",
      "were/had been working",
      "was getting",
      "was raining",
      "was travelling",
      "went",
      "was waiting",
      "saw",
      "was wearing",
      "reminded",
      "opened",
      "took",
      "checked",
      "looked",
      "made",
      "meant",
      "pressed",
      "appeared",
      "have kidnapped",
      "have completed",
      "disappeared/was disappearing",
      "raced"
    ],
    "D": [
      "told",
      "is/has been",
      "knew",
      "had never visited",
      "put",
      "rang",
      "saw",
      "passed"
    ],
    "E": [
      "have been exercising",
      "was chatting",
      "have been practising",
      "have been seeing",
      "wasn't sleeping",
      "was thinking",
      "have been digging"
    ],
    "F": [
      "had left / got",
      "met / had seen",
      "was / had ever been",
      "said / had had",
      "had finished / asked",
      "had just reached / told",
      "had done / decided",
      "didn't want / had just cleaned",
      "was / had forgotten",
      "got / had read"
    ],
    "G": [
      "√",
      "seemed",
      "√",
      "have become",
      "√",
      "has spread",
      "has been",
      "√",
      "missed",
      "have become",
      "√",
      "√"
    ],
    "H": [
      "I had been working for",
      "would often take us",
      "has been learning Russian for about",
      "soon got used to being",
      "have been having the same dream",
      "never used to enjoy"
    ],
    "I": [
      "has",
      "have",
      "used",
      "was",
      "had",
      "was",
      "would",
      "had",
      "used",
      "been"
    ],
    "J": ["D", "A", "C", "C", "B", "A", "D", "B", "C", "B", "A", "A"]
  },

  "Unit 4": {
    "A": [
      "endure",
      "shift",
      "innovation",
      "potential",
      "mature",
      "switched",
      "progress",
      "substitute",
      "decay",
      "modified"
    ],
    "B": ["C", "A", "B", "A", "D", "B", "C", "D", "A", "D", "C", "A"],
    "C": [
      "reformed",
      "revise",
      "distorted",
      "amended",
      "maintain",
      "remain",
      "adjust",
      "adapt",
      "alternate",
      "alternative",
      "persist",
      "sustain",
      "converted",
      "transformed",
      "spoil",
      "deteriorate"
    ],
    "D": [
      "network",
      "broadband",
      "primitive",
      "nuclear",
      "√",
      "console",
      "technique",
      "√",
      "data",
      "resource"
    ],
    "E": [
      "programmer",
      "manual",
      "electronics",
      "downloading",
      "files",
      "upload",
      "complex",
      "online",
      "Click",
      "offline"
    ],
    "F": [
      "change out of",
      "faded away",
      "test out",
      "back up",
      "used up",
      "doing away with",
      "key",
      "do up"
    ],
    "G": [
      "switch / on",
      "took / apart",
      "changed / around",
      "turns into/changes into",
      "wore out",
      "turns into/changes into/turned into/changed into"
    ],
    "H": [
      "take up",
      "cheer up / √",
      "brush up / √",
      "make up",
      "tidy up / √",
      "bring up",
      "dress up / √",
      "turn up"
    ],
    "I": [
      "break",
      "demand/need",
      "know",
      "surfing/on",
      "link",
      "changed",
      "at/behind",
      "access",
      "good",
      "energy",
      "date",
      "tool"
    ],
    "J": [
      "to",
      "from",
      "good",
      "tool",
      "in",
      "make",
      "deal",
      "know",
      "from",
      "place",
      "make",
      "at"
    ],
    "K": [
      "use",
      "reality",
      "place",
      "purpose",
      "clock",
      "form",
      "process",
      "led"
    ],
    "L": [
      "break the mould",
      "had a change of heart",
      "turned over a new leaf",
      "reinventing the wheel",
      "stick to your guns",
      "a leopard can't change its spots"
    ]
  },

  "Unit 5": {
    "A": [
      "going to fall",
      "going to be",
      "going/going to go",
      "going to get",
      "going to realise",
      "opening/going to open",
      "having/going to have",
      "going to fall",
      "applying/going to apply",
      "discussing/going to discuss",
      "being/going to be",
      "going to be",
      "handing/going to hand",
      "going to become",
      "going to have"
    ],
    "B": [
      "we're visiting",
      "will answer",
      "does your plane arrive/is your plane arriving",
      "I'm looking",
      "Shall",
      "Are you going to",
      "leaves/is leaving",
      "shall",
      "I won't have",
      "is she going to"
    ],
    "C": [
      "I'll come",
      "will you show",
      "it's going to snow/it'll snow",
      "We're going to/We'll miss",
      "The winner will be/is going to be/is being announced",
      "I'm going (to go)",
      "They won't sack/They're not going to sack/They aren't sacking/won't be sacking",
      "Is Jenny going to find/Isn't Jenny going to find/Will Jenny find/Won't Jenny find",
      "I won't be/I'm not going to be",
      "The new version will be/is going to be/is (being) launched",
      "I'll order",
      "some people will be made/some people are going to be made/some people are being made",
      "does the train leave/will the train leave/is the train leaving/is the train going to leave"
    ],
    "D": [
      "√",
      "will have been",
      "We'll have become",
      "I'll have been taking/I'll have been taken",
      "will you already have had",
      "You'll have been driving",
      "will have been appointed",
      "won't have finished",
      "won't have been expecting/won't have been expected",
      "√",
      "√",
      "won't all have been delivered"
    ],
    "E": [
      "Ed will have applied",
      "I'll hopefully be running",
      "we'll have lived/we'll have been living",
      "Will Gemma already have arrived",
      "you won't have been travelling/be travelling / you'll have had/be having",
      "We'll be waiting",
      "1,000 people will have been jumping/1,000 people will have jumped"
    ]
  },

  "Unit 6": {
    "A": [
      "temporary",
      "timely",
      "seasonal",
      "punctual",
      "simultaneous",
      "obsolete",
      "provisional",
      "overdue"
    ],
    "B": [
      "era",
      "spell",
      "century",
      "millennium",
      "frequency",
      "stint/spell",
      "span",
      "phase"
    ],
    "C": ["B", "B", "A", "A", "B", "B", "B", "A", "B", "B", "A", "A", "B", "B"],
    "D": [
      "multinational",
      "marketing",
      "consultant",
      "executive",
      "effective",
      "efficient",
      "redundant",
      "leave",
      "strike",
      "fire",
      "headhunted",
      "sacked"
    ],
    "E": [
      "civil",
      "sector",
      "prospects",
      "promotion",
      "colleagues",
      "union",
      "recruit"
    ],
    "F": ["C", "B", "A", "D", "C", "B", "A", "B"],
    "G": [
      "take on",
      "ended up",
      "kick off",
      "while away",
      "lies ahead",
      "knuckle down"
    ]
  },

  "Unit 7": {
    "A": ["was issued", "√", "Has ... been confirmed", "had been invited", "was invented", "was discussed", "√", "was invaded", "√", "being treated", "were shown", "√"],
    "B": ["were found", "to be shown", "were asked", "being given", "were written", "is lit/has been lit", "being allowed", "to be met", "was made", "to be known"],
    "C": ["to be caused", "are estimated", "has been reported", "to have used", "is calculated", "are understood", "to eat", "were meant", "It", "to be delivered"],
    "D": ["has been called", "was sold", "being named/having been named", "was", "transported", "was granted", "(should/could/ought to) be built"],
    "E": ["I will have been in training as/to be an accountant for a/one year", "has been under consideration (by the council) for some time", "have been in progress for over two weeks", "will be on display at the library this weekend", "seems to have been under construction for a long time"],
    "F": ["√", "it delivered", "checked", "√", "got", "come", "work", "it running", "to come out", "√"],
    "G": ["get your teacher to explain/have your teacher explain", "got me feeling/had me feeling", "get a professional to do/have a professional do", "Having our car stolen/Getting our car stolen", "get your parents to help/have your parents help", "got us all dancing/had us all dancing", "to get me to do/to have me do", "having your hair cut", "got Karen to show/had Karen show", "getting their essays written/having their essays written"],
    "H": ["was kept waiting", "being considered a star", "is reported to be making/is said to be making/has been reported to be making", "staff were/was provided with extra training by", "this computer program explaining to", "has been under construction", "Craig was made to stay/they got Craig to stay", "have him send"],
    "I": ["C", "D", "A", "C", "C", "D", "A", "D", "C", "B"],
    "J": ["being", "are", "in/under", "is", "with", "be", "been", "has", "have", "be"]
  },

  "Unit 8": {
    "A": ["grabbed", "fumbled", "clutching", "pointed", "waved", "punched", "gestured/pointed", "clenched", "grasped", "crept", "hop", "jog", "step", "dashed", "crawl", "marched", "strode/stepped", "leapt", "skipped", "drifting", "roam", "wandered", "slipped", "slide", "tripped", "skidded"],
    "B": ["clambered ascended descend", "gliding velocity accelerate flow sinking approached", "migrates float route", "bounce roll rotates", "emigrated immigrants refugees"],
    "C": ["commute", "carriage", "airline", "charter", "destinations", "legroom", "stewards", "jet lag"],
    "D": ["quay", "piers", "pedestrians", "passersby", "steer", "pilot", "hitchhiker", "hikers", "round trip", "return fare", "load", "cargo"],
    "E": ["on", "off", "over", "aside", "off", "up", "out", "behind"],
    "F": ["pulled over", "held back", "walked out", "stop off", "creep up", "slipped away", "moving in", "went astray"],
    "H": ["get a move on", "fell in love", "did it in a rush/wrote it in a rush", "jump at the chance", "backs onto", "raise your hopes", "went and told", "fly at", "get it out of the way/get that out of the way", "keep track of", "drop me at", "get them wet"],
    "I": ["came", "raise", "at", "open", "rush", "go", "raise", "way", "on", "jump"],
    "J": ["drove", "head", "come", "steady", "point", "turned", "followed", "running"],
    "K": ["crow", "middle", "beeline", "tracks", "track", "nose", "bearings", "stone's", "route", "take"],
    "L": ["upper", "inaccessible", "mobility", "overcome", "undergone", "progressively", "rapidly", "landing", "movement", "withstand"],
    "M": ["steadily", "impassable", "ongoing", "speedy", "outstanding", "stability", "transition", "motionless"],
    "N": ["1", "3", "4", "5", "6", "8", "10"],
    "O": ["dehydrate", "deregulate", "decaffeinated", "demotivate", "desensitise", "deform", "devalue"]
  },

  "Unit 9": {
    "A": ["couldn't could", "can/could", "could I'd be able to/I could", "could", "can't/won't be able to", "managed to", "go/have gone", "be able to", "will humans be able to", "may", "have caught", "Can't", "could/was able to", "May/Can", "were allowed to"],
    "B": ["do", "feel", "to recover", "invite", "have", "to sit/to eat", "eat/have", "speak", "to work", "have stood", "be provided", "have gone"],
    "C": ["get", "have", "given", "had", "should", "√", "might/may", "√", "better", "will", "would", "might/could/should"],
    "D": ["better see", "would forget wouldn't", "might have invited/could have invited/ought to have invited/should have invited", "oughtn't to have bought/shouldn't have bought", "will/do won't/don't", "might as well see/may as well see", "Hadn't you", "probably ought have asked"],
    "E": ["needn't", "have", "needn't", "had", "doesn't", "Will", "have", "has", "must", "got"],
    "F": ["don't have to pay/don't need to pay/needn't pay", "have to be kept/need to be kept/must be kept", "doesn't need to be picked up/doesn't have to be picked up/needn't be picked up/doesn't need picking up", "won't have to rely/won't need to rely", "must be sent off/will have to be sent off/need to be sent off/need sending off", "had to get/needed to get", "Did you have to make/Did you need to make", "mustn't believe", "didn't have to put/didn't need to put", "do farmers have to get up/do farmers need to get up/must farmers get up", "to have to commute", "needn't have done"],
    "G": ["to", "done", "ought/claims", "do", "to", "got", "must/should/dare", "need/might", "had/needed/wanted", "well", "will", "be", "should", "should/need", "had"],
    "H": ["That'll", "be", "can't", "must", "can't/couldn't", "wouldn't", "may/might", "might", "have landed", "might"],
    "I": ["may not have been/gone/might not have been/gone", "may well have been lying/might well have been lying", "must have been awarded the medal", "ought not to have arrived", "will the winner definitely not have been", "may well have been", "couldn't be/can't be"],
    "J": ["C", "D", "D", "B", "D", "C", "D", "A", "B", "A"]
  },

  "Unit 10": {
    "A": ["exaggerating", "contradicted", "boast", "flattering", "asserted", "insist", "alleged", "utter", "confide", "confirm", "disclosed", "convey", "murmuring", "stumbles", "stuttering", "mumble", "raving", "scribbling", "quibbling", "rants", "tip", "clarification", "gist", "context"],
    "B": ["jargon", "comprehend", "vague", "ambiguous", "inkling", "illegible", "denounce", "blunt", "petition"],
    "C": ["prerecorded", "correspondent", "spine", "anchor", "coverage", "trailer", "caption", "footnote", "broadcast", "pamphlet"],
    "D": ["novelist", "supplements", "subtitles", "manifesto", "handbook", "columnist", "critic", "reviewer", "tabloid", "ghostwriters"],
    "E": ["pass on", "blurted out", "talk round", "get across", "talked over", "speak out", "shouted down", "dry up"],
    "F": ["let", "comes", "gets", "came", "put", "set", "caught", "get"],
    "H": ["without", "between", "out", "to", "for", "In", "to", "on", "over"],
    "I": ["to tell the difference between the articles and", "take it as read (that)", "talk the editor out of publishing", "got into an argument with Terry", "come to an understanding/reach an understanding", "have a discussion with Phil about this"],
    "J": ["speak", "word", "speaking", "record", "notice", "book", "answer"],
    "K": ["mouth", "posted", "tales", "volumes", "grapevine", "chest", "cards", "hat", "clean", "word", "drift", "stick"],
    "L": ["expressionless", "publicity", "unspeakably", "wording", "talkative", "exclamation", "typecast", "suggestible", "unprintable", "insistent"],
    "N": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "15", "16", "17", "20"],
    "O": ["saying", "outspoken", "declaration", "meaningless", "writings", "editor", "rephrase", "statement", "implication", "hearsay"]
  },

  "Unit 11": {
    "A": ["I", "J", "D", "A", "G", "B", "H", "C", "F", "E"],
    "B": ["had got me a birthday present, I would have got her one", "hadn't made a mistake with our order, we would have paid them on time", "the climate wasn't/weren't undergoing such radical changes, scientists wouldn't be so worried", "California have become an important area if they hadn't found gold there", "wasn't/weren't for the sunset, tourists wouldn't be attracted/go to that place", "hadn't been a traffic jam on the motorway, I wouldn't have been late for my interview", "you, I would use a sunblock and then you wouldn't go red", "had been paying attention to the road, the accident wouldn't have happened"],
    "C": ["hadn't done", "would have had", "asked", "are booked/have been booked", "have/will have", "get/have got", "have happened", "had been", "wander", "not have been", "hadn't started", "have happened"],
    "D": ["be", "Should", "Had they not", "had worked", "have", "be worrying", "had he not", "Were we not", "had gone", "should", "Should you not", "were"],
    "E": ["so", "long", "provided", "unless", "case", "suppose", "otherwise", "condition"],
    "F": ["it", "been", "to", "But", "if", "should", "were", "for", "had", "should/do"],
    "G": ["won the contract if it hadn't been for Debbie's fantastic presentation/won the contract had it not been for Debbie's fantastic presentation", "the eventual arrival of the ferry, a fight would have broken out amongst the passengers", "for the driver's quick reaction, (some of) the passengers would have been injured", "Wendy turns up soon, we'll have to cancel the meeting", "not for his daughter's visits, Mr Jones would be quite lonely", "you need it, here's my phone number", "you are back by midnight, you can go/you agree to be back by midnight, you can go", "not been for Officer Hughes, the robbers would have escaped"],
    "H": ["C", "B", "D", "B", "A", "D", "C", "B", "A", "D"],
    "I": ["it", "were", "would", "was", "were", "would/could", "if", "are/get", "not/never", "had", "had", "for"],
    "J": ["it not been for", "(that) there are no changes to", "you to apply now", "I would have offered", "in case it gets", "if not for having/I not having", "people seen this film ten years ago", "on condition that"]
  },

  "Unit 12": {
    "A": ["foresee", "gamble", "mutated", "attributed", "started", "fluctuate", "determine", "wobble", "pick", "meander"],
    "B": ["A", "C", "C", "D", "B", "D", "A", "D"],
    "C": ["spontaneous", "haphazard", "blow", "mishaps", "freak", "inadvertent", "statistics", "odds", "jinxed", "superstitious", "assigned", "ascribed", "stray", "random", "caused", "transpired"],
    "D": ["catastrophe", "evacuate", "fossil fuels", "greenery", "habitat", "harvest", "instinct", "resource", "[tick]", "species"],
    "E": ["agriculture", "crop", "famine", "drought", "appreciate", "exploit", "global warming", "natural disaster", "floods", "hurricanes"],
    "F": ["down", "on", "up", "down", "through", "out", "up", "off"],
    "G": ["chanced upon/came across", "slip up", "throw out", "store up", "thrown up", "chanced upon/came across", "dug up", "sprung up"],
    "H": ["cross off √", "wiped off √", "shave off √", "gone off", "chop off √", "drop off", "set off", "peel off √"],
    "I": ["by", "in", "by", "of", "on", "in", "in", "by"],
    "J": ["guess", "every/a", "to", "their", "the", "of", "of", "risk", "of", "against"],
    "K": ["say", "natural", "make", "green", "second", "pushing", "pose/present", "pour"],
    "L": ["found", "nature", "chance", "weather", "luck", "happens", "certain", "guess"],
    "M": ["down on her luck", "let nature take its course", "out of the blue", "come rain or shine", "the luck of the draw", "act of God", "no rhyme or reason", "drew the short straw", "touch wood", "had green fingers"],
    "N": ["conservation", "intention", "wildlife", "ecologists", "threatened", "extinction", "Fortunately", "probably", "insurmountable", "seemingly"],
    "O": ["occurrence", "causal", "erosion", "instinctive", "mysterious", "risky", "assessment", "favourable", "elusive", "eruption"],
    "P": ["brainy bumpy curly guilty hairy hasty juicy lucky lumpy meaty milky scary shiny sporty spotty tasty watery wealthy"]
  },

  "Unit 13": {
    "A": ["had had", "Were we", "Had the Romans been", "had employed", "did not have", "hadn't (been) developed", "were/was", "did", "hadn't been/wasn't/weren't", "hadn't done"],
    "B": ["had", "decided", "were/had been saying/said", "didn't have", "hadn't been invented", "stopped", "had just been told", "could", "spoke", "was proved/were proved/had been proved", "became", "were given/had been given", "woke", "were", "couldn't"],
    "C": ["A", "A", "B", "B", "A", "B"],
    "D": ["had grown up", "had been dragged", "was going/were going", "had been doing", "had had", "wishes", "was rolling/were rolling", "wasn't/weren't", "had happened"],
    "E": ["did you want", "was looking", "were wondering/wondered wanted", "Were you planning/Did you plan", "Did you wish/Were you wishing", "Were you looking", "Did you want", "was hoping/hoped/'d give", "did you intend/were you intending", "was wondering/wondered would be paying/would pay"],
    "F": ["stopped", "looked/were looking", "bought", "to do", "started", "to get up", "were given", "to be made", "was allowed", "to go", "learnt/were learning to", "to call"],
    "G": ["had", "I came back", "you didn't tell", "we got went", "was living/lived", "she was sent/were sent", "we didn't talk/not talk", "you'd told", "have", "they hadn't stayed"],
    "H": ["had", "ran/were running", "hadn't left", "didn't", "would come", "sang/could sing", "have gone", "to speak", "hope", "they would give him", "luck", "was/had been", "you'd been", "wasn't going", "hadn't been"],
    "I": ["A", "D", "A", "A", "B", "C", "C", "B"],
    "J": ["would rather not be given", "only we had got/we had only got", "wish they'd stop", "I could have seen", "about time they brought", "if Cynthia hadn't rung"]
  },

  "Unit 14": {
    "A": ["A", "A", "A", "C", "B", "C", "C", "D"],
    "B": ["average", "quantity", "ration", "expand", "finite", "vast", "equidistant", "imbalance", "force", "uneven", "mass", "intensity/force"],
    "C": ["damages", "compensation", "deduct", "withdraw", "down payment", "lump sum", "deposit", "speculating", "debit", "finance"],
    "D": ["interest", "overdraft", "mortgage", "insurance", "benefits", "pension", "debt", "shares", "investment", "dividend"],
    "E": ["up", "down", "up", "down", "away", "back", "up", "to", "out"],
    "F": ["D", "G", "A", "B", "E", "C", "F"],
    "H": ["long", "share", "of", "thin", "at", "in", "in", "at", "poor", "fat", "rich", "for", "load"],
    "I": ["fat", "high", "breadth", "see", "Bang", "worth", "display", "alike", "thin", "ground"],
    "J": ["short", "pays", "lot", "high", "big", "small"],
    "K": ["go to any lengths", "making (such) a big deal (out) of", "was (completely/totally) out of his depth", "in no small way", "high and low", "at (great) length"],
    "L": ["short", "fifty-fifty", "broad", "grasshopper", "pockets", "ocean", "barrel", "halves/fifty-fifty", "dozen", "tidy", "even", "keep"]
  },

  "Unit 15": {
    "A": ["unhappy", "√", "calm", "dreadful", "√", "√", "restless", "√", "spicy", "angry", "√", "tired"],
    "B": ["hard a day", "frightening an experience", "difficult a task", "moving a performance", "good a memory", "tempting an offer", "successful a career", "good a pianist"],
    "C": ["a gorgeous little African", "black leather climbing", "fantastic pink Russian silk ballet", "beautiful cream cotton wedding", "ugly blue foreign", "tiny green Amazonian", "lovely long white sheepskin", "funny red plastic", "horrible wide yellow", "dreadful short French nylon"],
    "D": ["C", "B", "B C", "B C", "B", "C", "C D"],
    "E": ["funnier than", "less reliable than", "a more demanding", "the hardest", "the ugliest", "longer", "Less valuable than", "the least observant", "the slightest", "the fewer"],
    "F": ["deal", "far", "little more", "by", "considerably", "a little", "quite", "any", "no", "good"],
    "G": ["are not quite as expensive as", "nothing like as committed as Richard (is)", "more you argue about it, the later", "half as expensive as", "is nowhere near as big as", "isn't nearly as adventurous as/isn't nearly so adventurous as", "bigger the city, the higher", "was nowhere near as successful as"],
    "H": ["very", "fairly", "absolutely", "very", "utterly", "too", "a bit", "very"],
    "I": ["hard", "hardly", "hard", "fair", "fairly", "fairly", "free", "freely", "free", "high", "highly", "high"],
    "J": ["much", "no", "deal", "than", "the", "more", "far", "most", "less", "nothing", "as", "than"],
    "K": ["C", "A", "B", "D", "C", "C", "B", "D"]
  },

  "Unit 16": {
    "A": ["pile", "lumps", "flakes", "blocks", "speck", "grains", "crumbs", "chips", "scratch", "patted", "polished", "stroke", "scrub", "squeeze", "crush", "grind", "squash", "Tear", "cracked", "smashed", "fragile", "transparent", "stiff", "opaque", "brittle", "dense", "hollow", "stuffed", "stacking", "mould"],
    "B": ["friction solids liquid gravity", "synthetic fabric texture", "compacts substance mineral", "dissolve dilute concentrate"],
    "C": ["bypass", "construct", "inner city", "populated", "suburban", "district", "surroundings", "occupies", "urban", "dwell"],
    "D": ["built-up", "high-rise", "skyscraper", "skyline", "housing", "estate", "demolish", "evict", "structure", "infrastructure"],
    "E": ["up", "up", "up", "up", "down", "up", "down", "in"],
    "F": ["set up/put up", "Cut out", "water down", "propped up", "come out", "spread out", "put together", "worn down"],
    "H": ["smooth sailing", "on the house", "raw materials", "the town of", "on the table", "bricks and mortar", "out of shape", "precious metal"],
    "I": ["on", "your/the", "make", "on/into/onto", "matter", "under(neath)/beneath", "way", "into", "to", "had"],
    "J": ["foundation", "tough", "matter", "floor", "mark", "fold"],
    "K": ["landscape", "jungle", "home", "town", "belt", "sticks", "town", "home", "street", "home"],
    "N": ["blacken", "brighten", "broaden", "dampen", "deepen", "frighten", "harden", "lengthen", "loosen", "redden", "shorten", "strengthen", "tighten", "weaken", "widen"],
    "O": ["widen", "strengthens/strengthened", "reddened", "shorten", "tighten", "brighten", "harden", "weaken"]
  },

  "Unit 17": {
    "A": ["whose", "why", "which", "whose", "when who", "where", "which", "when", "which", "who", "which", "whom", "What which", "Who"],
    "D": ["(which/that) we'd found", "whose", "when/that/on which", "√", "√", "(which) I really want to see", "you were born", "√", "which", "What", "Whose car you just hit"],
    "E": ["The film, which was directed by Mel Gibson, is actually in Hebrew.", "I bumped into Katherine the other day, which was a strange coincidence.", "The best man at my wedding, who used to live in Germany, has just moved to China.", "Warwick University, where I spent three wonderful years, is one of the top ten universities in the country."],
    "F": ["in", "for", "of", "on", "for", "of", "by", "To/With", "of", "at", "in", "of"],
    "G": ["That tree, which my grandfather planted 60 years ago, is an oak.", "Tina and Charlie, who are identical twins, are having a party this Saturday.", "On the Friday, when the ferry was delayed, we spent most of the day sitting in the port.", "Barbara, who you met at Libby's last Thursday, used to work in the Personnel Department.", "Let's go to da Vinci's, where they do a great pepper steak.", "This book, which was given to me by my great aunt, was once owned by Sir Francis Drake.", "Why did Danny, who's totally unfit, decide to enter the marathon?", "Guy, whose sister is married to my brother, is now engaged to my sister."],
    "H": ["eating/having eaten", "having been told", "Given", "keeping/who was keeping", "Having seen", "injured", "Not being", "having made", "Shown/Having been shown", "Listening", "To get/Getting", "to make"],
    "I": ["given", "getting/having got", "arrested", "complainingly/having complained", "Having seen", "Swimming", "Having applied", "starting", "Not wanting", "to wait", "Shot", "To make/Making"],
    "J": ["B", "C", "A", "D", "D", "A", "B", "C", "C", "B"],
    "K": ["though he (had) looked", "even if they start", "in spite of the fact (that)", "spite of (our) not having been given", "as he might", "loudly she might have shouted", "as I begged (him to)", "though we were"],
    "L": ["C", "C", "A", "D", "B", "D"],
    "M": ["which", "whose", "Having", "where", "this", "who/that", "in", "However", "made", "Although/Though/Whereas", "taken", "which/that", "Despite", "to", "if/when"]
  },

  "Unit 18": {
    "A": ["manners", "behaviour", "prevent", "avoid", "giggling", "chuckled", "grinning", "smirking", "glimpsed", "glanced", "peer", "peep", "fed up", "cross", "manoeuvre", "tactics"],
    "B": ["mock", "gloat", "grimace", "√", "terror", "snap", "contentment", "neglect", "handle", "conduct"],
    "C": ["agonising", "rejoicing", "acknowledge", "moaning", "disgusted", "resent", "comfort", "resolute", "glum", "disillusioned", "consequences", "dignity", "inertia", "apathy"],
    "D": ["antidote", "vaccines", "inoculated", "irritation", "a plaster", "plaster", "diagnosis", "prognosis", "Preventive", "home"],
    "E": ["agony", "leave", "prescribed", "admitted", "ward", "consultant", "diagnosis", "administer", "syringe", "side", "numb", "paralysis"],
    "F": ["up", "down", "up", "over", "up", "round", "up", "out"],
    "G": ["pulled through", "go down", "cotton on", "lashing out", "blacked out", "ward off", "followed up", "passed away"],
    "H": ["1√ 3√ 4√ 5√ 6√"],
    "I": ["on", "in", "by", "to", "in", "of", "in", "in", "as", "in"],
    "J": ["health", "quality", "aggressive", "adverse", "polite", "dire", "alternative"],
    "K": ["dead", "kind", "life", "sick", "laugh", "effect"],
    "L": ["a far cry from", "feel the benefits of the medicine/see the benefits of the medicine", "was just acting on the sergeant's orders", "would cause such a violent reaction", "treat them with a bit more respect", "has been take ill with"],
    "M": ["miss", "kicked", "grin", "Keep", "handle", "steam", "medicine", "arms", "horse", "dogs", "milk", "straight"],
    "N": ["activist", "derivation", "overreact", "sensation", "unfolding", "prevention", "negligently", "fruitless", "impatiently", "fruition", "disapproval", "disillusionment", "neglectful", "regretful", "regrettable", "discontent(ment)", "unresponsive"],
    "O": ["unresolved", "ineffective", "unavoidable", "independently", "resolutely", "acknowledge", "insensitive", "knowledge", "resulting/resultant", "handle"]
  },

  "Unit 19": {
    "A": ["had I sat down", "√", "√", "does the government change", "had they finished", "had the new computer system been installed", "had we started", "the crowd began", "was the new park finished/had the new park been finished", "had Keith arrived"],
    "B": ["In no way", "Not", "Only after", "On no account/Under no circumstances", "Not only", "At no point", "Little", "Rarely", "Under no circumstances/On no account", "Never"],
    "C": ["can construction continue", "did the announcement affect", "do you see", "did Jerry forget/has Jerry forgotten", "was I asked/had I been asked", "I checked/had checked", "did Caroline realise", "should you sign", "did it appear", "will the space shuttle be allowed"],
    "D": ["is/goes", "was", "was/sat", "came", "was", "stood", "lay/was/sat", "appeared/was/stood"],
    "E": ["do I", "is it", "we could", "has my mum", "was the media interest", "last season was/was last season", "is China", "the French do/do the French", "was the pressure", "was he"],
    "F": ["was a cricket ball which/that broke the window", "which I heard I'd got into my chosen university is one I will never forget", "Glynn became a social worker was to help people less fortunate than himself", "the athlete wanted was to get through the summer without getting injured", "was (that) the driver didn't see the motorcyclist", "who discovered America was Christopher Columbus", "made me feel guilty was seeing Patricia cry like that", "we had to do was (to) decide where to meet", "where we go camping has lots of facilities", "Einstein proved is/was that energy and mass are basically the same thing"],
    "G": ["so", "enough", "so", "such", "so", "such", "too", "enough", "so", "such", "so", "too"],
    "H": ["I had cleared the spare room could I", "had I put the phone down when", "had the Watsons moved to London than", "did I realise (that)", "was Charlie who told", "is it possible to buy", "one (single) question did they ask me/a (single) question did they ask me", "no circumstances will we allow"],
    "I": ["C", "B", "A", "D", "D", "C", "D", "A", "B", "D"],
    "J": ["do", "is", "So", "too", "to", "such", "only", "also", "no", "Not"]
  },

  "Unit 20": {
    "A": ["consent", "entitled", "commands", "eliminate", "monarch", "enforce", "master", "bully", "authority", "controversy"],
    "B": ["former", "mainstream", "superior", "reluctant", "subjective", "benign", "vulnerable", "minister", "inferior", "society"],
    "C": ["subject/subjected", "impose", "restrict", "summon", "dominate", "resist", "liberate", "labelled", "victimise", "undermine"],
    "D": ["reform", "institutions", "deterrent", "convicts", "community", "corruption", "prejudice", "state", "legislation", "bureaucracy"],
    "E": ["abolish", "charity", "heritage", "action", "advocate", "class", "prosecute", "√", "alleviate", "immigration"],
    "F": ["D", "F", "G", "B", "H", "E", "A", "C"],
    "G": ["phasing", "opt", "cracking", "blend", "stand", "singled", "talk", "pushing"],
    "H": ["2√ 3√ 5√ 6√ 7√ 8√"],
    "I": ["onto", "as", "against", "in", "gives", "into", "in", "having", "of", "group"],
    "J": ["rule", "charged", "authority", "example", "denied", "law"],
    "K": ["C", "C", "D", "A", "B", "C", "A", "B", "B", "D"],
    "L": ["head", "strings", "law", "thumb", "hand", "live", "powers", "tape", "way", "book"],
    "M": ["powerless", "institutionalised", "dutifully", "officious", "permissible", "significantly", "indicator/indication", "criminal", "persuasive", "arguably"],
    "N": ["predominant", "hardship", "immoral", "charitable", "mighty", "prejudiced", "aggressive", "exemplary", "governing", "provocation", "argumentative", "hard", "unofficially", "insignificant", "ungovernable", "dissuade"],
    "O": ["√", "√", "√", "√", "√", "√", "√", "√", "√", "√", "√", "√", "√", "√", "√", "√", "√", "√", "√", "√", "√", "√"],
    "P": ["misheard/misunderstood", "misfortune", "misusing/mismanaging", "miscalculated", "misbehave", "misspell", "misjudged", "misfired"]
  },

  "Unit 21": {
    "A": ["sheep", "sisters-in-law", "fish/fishes", "news", "hair/hairs", "information", "furniture", "permission", "Physics", "money", "advice", "jewellery", "chocolate/chocolates", "knowledge", "politics"],
    "B": ["Was", "have increased", "Is/Was", "are/were", "is/was", "Is/Are", "need", "Is/Was", "is/was", "are eating", "is", "are/were", "is/was", "has gone off/is going off", "were"],
    "C": ["bar", "pack", "piece/slice/bit", "drop/bit", "breath/bit", "herd", "pair", "loaf", "bunch", "gust", "speck/bit", "√", "flock", "blade/bit", "√", "block/lump/bit/piece", "√", "√", "lump", "sheet/bit/piece"],
    "D": ["work works", "damage damages", "cakes cake", "help help", "hairs hair", "glass glasses", "arm arms", "wood(s) wood", "knowledge knowledge", "space spaces", "paper papers", "chickens chicken", "times time", "chocolate chocolates"],
    "E": ["a couple of", "a number of", "a little", "a little", "A few", "a small amount of", "much of", "Very few/Too few"],
    "F": ["any/some", "any", "Only a few/Few/A few", "a little/a small amount of", "Neither of the", "All/Most/Many", "None/Half/Each", "Each/Every", "little/not much", "plenty/a lot/lots"],
    "G": ["a the", "the the an a", "A an", "the the", "The the (or no article) no article", "no article no article no article a", "the no article the a no article", "the the the the", "a an", "the a a a"],
    "H": ["C", "A", "B", "D", "D", "B", "D", "A"],
    "I": ["an/the", "every/each", "the", "great", "the", "a", "Each/Every", "any", "few", "number", "the", "the", "many/some/several", "entire/whole", "amount"]
  },

  "Unit 22": {
    "A": ["streamline", "renovated", "exacerbating/aggravating", "evaluating", "contaminated", "bettered", "enhance", "declined", "surpass", "wrecked/worsened", "cheapened", "shambles", "blemish"],
    "B": ["exquisite", "redeeming", "rusty", "inadequate", "shoddy", "defective", "rotten", "prime", "invaluable", "satisfactory", "stale", "detrimental", "ultimate", "sound", "ideal", "first-rate", "optimum"],
    "C": ["bestseller", "paperback", "lines", "lyrics", "recital", "score", "retrospective", "curator", "worthless", "priceless", "jobs", "works"],
    "D": ["masterpieces", "installations", "auction", "sketches", "fine", "items", "abstract", "period"],
    "E": ["brush", "written", "stands", "pick", "check", "scraped", "touch", "make"],
    "F": ["√", "messed", "patched", "papered", "run", "√", "smartened", "wasted"],
    "G": ["make", "nice", "head", "fine", "best", "brand", "enemy", "blood", "work", "down"],
    "H": ["best", "fresh", "clean", "style", "old", "better"],
    "I": ["worse", "in", "bottom/heart", "to", "made", "worst", "quality", "form", "at", "its", "fine"],
    "J": ["word", "pride", "sight", "heel", "world", "par", "show", "line", "top", "fuel", "whistle", "edge"],
    "K": ["classics", "inimitable", "destruction", "admiration", "impressionable", "perfectionist", "idealist", "inadequacy", "worthwhile", "valuation", "declassified", "awesome", "worthy", "artefacts/artifacts/artworks", "terrifying", "reusable", "qualitative"],
    "L": ["classified", "impressive", "improvement", "terrific", "collector's/collectable", "artificial", "Collectors", "unused", "imperfections", "strengths", "valuable", "worthless", "matching", "imitation(s)", "indestructible", "goods"],
    "M": ["x", "√", "x", "x", "x", "x", "x", "√", "√", "x"]
  },

  "Unit 23": {
    "A": ["allowing", "to get", "having", "sleeping", "to know", "feeling", "to apply", "to join", "needing", "to bump", "to help", "to contact"],
    "B": ["to being", "to see", "meeting", "sitting", "meeting", "to tell", "to say", "to meeting", "ordering", "having"],
    "C": ["putting", "to allow", "to buy", "of committing", "to have been robbed", "to wait", "to recycle", "(on) asking", "to prove", "to be promoted"],
    "D": ["clearing", "to resist", "making", "being", "exercising", "to happen", "to apply", "working", "to get", "to know"],
    "E": ["glimpsed walking", "hear say/saying", "observed interacting", "smell burning", "found hiding", "watched climb", "noticing trying", "felt following", "caught wishing", "saw/glimpsed coming/walking"],
    "F": ["to get", "get", "to stay", "getting", "to fall", "to get", "feeling", "feel", "to separate", "to live", "having", "to resolve"],
    "G": ["telling", "to tell", "to get", "getting", "to announce", "announcing", "talking", "to talk", "to go", "going", "changing", "to change", "to have", "having"],
    "H": ["succeeded in finishing", "qualifies him to teach", "nominated me to speak", "to quite like sharing", "not to get into/never to get into", "you regret inviting", "have arranged for you to stay/have made arrangements for you to stay", "inspired you to create"],
    "I": ["D", "B", "A", "D", "C", "C", "D", "A", "B", "C"],
    "J": ["to", "yourself", "find/think/consider", "me", "myself", "on", "dare", "it", "started/began", "stand/bear"]
  },

  "Unit 24": {
    "A": ["distinguish", "contradict", "liken", "identify", "attach", "exclude", "correspond", "confront", "integrate", "comprise", "negotiate", "disputing", "merge", "involves"],
    "B": ["C", "A", "D", "D", "B", "A", "C", "D", "B", "D", "A", "D"],
    "C": ["conflict", "bond", "relative", "divorce", "diverse", "compatible", "intimate", "cooperate", "mutual", "compromise"],
    "D": ["acquaintance", "stepmother", "guardian", "introvert", "spouse", "companion", "extrovert", "citizen"],
    "E": ["sympathise", "empathise", "fostered", "adopted", "peers", "partners", "dependants", "siblings", "predecessor", "an ancestor", "successor", "descendant"],
    "F": ["up", "between", "up", "to", "together", "out", "out", "out"],
    "G": ["bumped into", "open up", "go together", "pick on", "answer back", "sound out", "crowded around", "takes after"],
    "H": ["fight/hit", "hit/fought", "talking", "fired/fought", "call", "write/get", "pay", "get"],
    "I": ["mother", "of", "native", "wedding", "national", "distant", "child's", "by", "loved", "abuse", "make", "human"],
    "J": ["fall", "into", "for", "in", "as", "gap", "with", "of"],
    "K": ["love", "common", "near", "respect", "features", "supported"],
    "L": ["same", "terms", "human", "house", "flesh", "silver", "peas", "see", "puts", "books"],
    "M": ["inseparable", "perceptive", "inheritance", "racist", "apparent", "disloyal", "impersonating", "association", "relatively", "unconnected", "attachment", "individuality"],
    "N": ["parenthood/parenting", "unfamiliar", "youth", "appreciable", "observation(s)", "intimately", "characteristics", "unsympathetic", "selfless", "humanly"],
    "O": ["√", "√", "√", "√", "√", "√", "√", "√", "√", "√", "√", "√", "√", "√", "√", "√", "√", "√", "√", "√", "√", "√", "√", "√"],
    "P": ["reconsider/rethink", "reheat", "renew", "redo/rewrite", "retrain", "refill", "recount", "rejoined", "recreate", "reproduce"]
  },

  "Unit 25": {
    "A": ["I'm definitely not going to the match on Saturday", "You've forgotten to do the washing-up", "was lying when I said I had (had) nothing to do with the breakages", "Dawn wasn't particularly hard-working when she was at university", "I haven't finished yet", "I'll meet you all at the café in half an hour", "You don't have to eat your sprouts if you don't want to/You haven't got to eat your sprouts if you don't want to", "and I are going to set up a website", "When did you get married", "can I borrow your bike for a couple of hours/could I borrow your bike for a couple of hours"],
    "B": ["had", "doesn't/didn't", "was", "were/had been all went/had all gone", "had", "goes/went", "had", "is/was", "do/did", "wasn't"],
    "C": ["√", "didn't have to √", "√", "√", "she'd better", "had to/was to/should", "must", "I wasn't to/mustn't/shouldn't could", "didn't have to did have to", "would/should", "would"],
    "D": ["they", "the/that", "his", "it/that", "the/those", "her", "them", "their"],
    "E": ["that", "then", "previous", "before/previously/earlier", "the following/next", "before", "there"],
    "F": ["she and Carol had been to a great museum when they were/had been in Italy the previous month/the month before/she and Carol had gone to a great museum when they had been/were in Italy the previous month/the month before/", "him that she had only washed the trousers the day before/the previous day/him that she had only washed those trousers the day before/the previous day", "his secretary that he/she had to/was to/should get all the letters sent off by the next/following day/the day after.", "they would meet us all back there in exactly half an hour from then/that time/moment", "she didn't have to go into the office that/on (the) Saturday", "it couldn't be very nice having all the/those cars going by all the time", "she would put them in water right then/right away/immediately", "he had told Dan two days previously/before that the/report would have to be rewritten"],
    "G": ["he would go with her", "whether the train got in", "(him) if he'd been talking", "us whether we were all coming the following (/next)/us whether we were all going the following (/next)", "Jerry lived near me/Jerry lives near me", "Trevor if (/whether) he should send him", "offered to (help Carlo) do", "if (/whether) they really did have to"],
    "H": ["she had", "Ranji wanted", "she had", "to", "I didn't", "they thought", "to", "the website was"],
    "I": ["to get", "wanted/would like", "not to do", "to attack", "not to pass", "had taken", "to work", "to use", "to turn", "liked/wanted/didn't like/didn't want", "to make/get", "not to talk"],
    "J": ["B", "A", "D", "C", "C", "A", "C", "A"],
    "K": ["what", "if/whether", "to", "tell", "be", "it", "that", "of", "spend/fill", "with"]
  },

  "Unit 26": {
    "A": ["C", "A", "D", "C", "A", "D", "B", "A", "C", "B", "D", "B"],
    "B": ["appeal", "delight", "adores", "fancy", "praised", "urge", "welcomed", "bear", "strive", "favour", "differentiate", "resolved"],
    "C": ["greedy", "obsessed", "anticipation", "aspiration", "optional", "arbitrary", "taste", "liking", "mundane", "mediocre", "desired", "envy"],
    "D": ["casual", "fatigue", "leave", "venue", "outing", "lifestyle", "sedentary", "absorbing", "√", "solitude"],
    "E": ["recreation", "socialise", "respite", "unwind", "indulge", "idle", "trivial", "pursuing", "exhilarating", "pastimes"],
    "F": ["E", "C", "D", "F", "G", "A", "B", "H"],
    "G": ["keep up", "taking out", "getting into", "lazing around", "grow on", "warming up", "gone off", "put in"],
    "H": ["2√ 4√ 6√ 7√ 8√"],
    "I": ["given", "make", "choose", "consider", "but/except", "too", "like", "go", "of", "on"],
    "J": ["set", "have", "prefer", "opt", "choice", "pursuits", "option", "leisure", "play", "want"],
    "K": ["delight", "choice", "need", "taste", "keen", "playing", "praise", "rest"],
    "L": ["feet", "hair", "party", "spice", "heart", "end", "whim", "time", "potato", "batteries"],
    "M": ["desirable", "pursuits", "rhythmic(al)", "unenviable", "choosy", "zealous", "selective", "leisurely", "restless/restive", "obsession"],
    "N": ["overplay", "tendency", "motivation", "dissatisfied", "overdo", "preferred", "relaxing", "stimulation", "availability", "sportsmanship"]
  }
};

// ---------------------------------------------------------------------------
// Helper: extract the unit name from a section string.
// Examples:
//   "Unit 1 Grammar"    → "Unit 1"
//   "Unit 2 Vocabulary" → "Unit 2"
//   "Unit 3"            → "Unit 3"
// ---------------------------------------------------------------------------
function extractUnit(section) {
  const match = section.match(/^(Unit\s+\d+)/i);
  return match ? match[1] : null;
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------
const publicPath = resolve(rootDir, 'public', 'c1c2-exercises-structured.json');
const distPath   = resolve(rootDir, 'dist',   'c1c2-exercises-structured.json');

console.log(`Reading: ${publicPath}`);
const pages = JSON.parse(readFileSync(publicPath, 'utf8'));

let totalFilled = 0;
let totalMissed = 0;

for (const page of pages) {
  const unit = extractUnit(page.section);

  if (!unit) {
    console.warn(`  [SKIP] Cannot determine unit from section: "${page.section}" (page ${page.page})`);
    continue;
  }

  const unitAnswers = answerKey[unit];
  if (!unitAnswers) {
    console.warn(`  [SKIP] No answer key found for unit: "${unit}" (page ${page.page})`);
    continue;
  }

  for (const exercise of page.exercises) {
    const letter = exercise.exercise;
    const answers = unitAnswers[letter];

    if (!answers) {
      // Not every exercise letter has answers in the key (e.g. reading/listening tasks).
      continue;
    }

    for (const question of exercise.questions) {
      const idx = question.id - 1; // id is 1-based
      if (idx >= 0 && idx < answers.length) {
        question.answer = answers[idx];
        totalFilled++;
      } else {
        console.warn(
          `  [WARN] No answer for page ${page.page} ${unit} Ex ${letter} q${question.id} (index ${idx}, key length ${answers.length})`
        );
        totalMissed++;
      }
    }
  }
}

const json = JSON.stringify(pages, null, 2);

console.log(`\nWriting: ${publicPath}`);
writeFileSync(publicPath, json, 'utf8');

console.log(`Writing: ${distPath}`);
try {
  writeFileSync(distPath, json, 'utf8');
} catch (err) {
  if (err.code === 'ENOENT') {
    console.warn(`  [WARN] dist/ directory does not exist – skipping dist write.`);
  } else {
    throw err;
  }
}

console.log(`\nDone. Answers filled: ${totalFilled}  |  Missed (no key entry): ${totalMissed}`);
