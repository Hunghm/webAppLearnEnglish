/**
 * apply-b2-answers.mjs
 * Applies the B2 answer key to public/b2-exercises-structured.json
 * Usage: node scripts/apply-b2-answers.mjs
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.join(__dirname, '..')

// ─── Complete Answer Key ──────────────────────────────────────────────────────
// Format: { "Unit X" / "Review X": { "ExLabel": { qId: "answer" } } }
// For Reviews, question IDs are continuous across exercises (16, 17... for B, etc.)
const ANSWERS = {
  "Unit 1": {
    "A": {1:"usually goes",2:"is talking",3:"aren't eating",4:"Is air travel getting",5:"calls",6:"do babysitters generally earn",7:"You're always coming",8:"I don't go",9:"does stop",10:"takes"},
    "B": {1:"often gets up",2:"Do you speak",3:"I've already bought",4:"I've ever had",5:"works",6:"has never eaten",7:"Sean has already booked",8:"Does Melanie need"},
    "C": {1:"I've ever eaten",2:"hasn't seen",3:"have gone",4:"has been writing",5:"Have you ever met",6:"I've been trying",7:"I haven't finished",8:"Have you already decided",9:"We've lived",10:"I've never heard"},
    "D": {1:"ever",2:"yet",3:"since",4:"for",5:"so",6:"rarely",7:"just",8:"still",9:"before",10:"already"},
    "E": {1:"B",2:"C",3:"C",4:"D",5:"A",6:"C",7:"A",8:"B",9:"A",10:"A"},
    "F": {1:"knows",2:"is",3:"look",4:"see",5:"understand",6:"include",7:"disagree",8:"seems",9:"do"},
    "G": {1:"B",2:"F",3:"D",4:"H",5:"A",6:"C",7:"E",8:"G"},
    "H": {1:"to",2:"going",3:"to",4:"been",5:"making",6:"are",7:"have",8:"am",9:"had",10:"is"},
    "I": {1:"been",2:"do",3:"got",4:"being",5:"There",6:"are",7:"am",8:"looks",9:"have",10:"think",11:"not",12:"ever"},
    "J": {1:"much do the tickets cost",2:"these trainers belong to",3:"does not like",4:"has only been",5:"have been here",6:"have been writing this for",7:"time I have flown",8:"is having a bath",9:"does enjoy"},
  },
  "Unit 2": {
    "A": {1:"C",2:"D",3:"C",4:"A",5:"B",6:"C",7:"B",8:"D",9:"C",10:"D",11:"A",12:"B"},
    "B": {1:"world",2:"area",3:"guide",4:"fare",5:"voyage",6:"fee",7:"sight"},
    "C": {1:"see",2:"make",3:"check",4:"pull",5:"picks",6:"gone",7:"catch",8:"get"},
    "D": {1:"set out",2:"checked in",3:"drop me off",4:"turn round",5:"takes off",6:"run over",7:"keep up with"},
    "E": {1:"limit",2:"take",3:"in",4:"top",5:"lost",6:"trip",7:"straight",8:"side",9:"go",10:"had",11:"seeing",12:"on",13:"round"},
    "F": {1:"B",2:"C",3:"B",4:"D",5:"A",6:"D",7:"D",8:"B"},
    "G": {1:"be",2:"it",3:"in",4:"being",5:"to",6:"so",7:"it",8:"been",9:"of",10:"to"},
    "H": {1:"tourist",2:"arrangements",3:"timetable",4:"cultural",5:"photographer",6:"inhabitants"},
    "I": {1:"unrecognisable",2:"worldwide",3:"different",4:"broaden",5:"direct",6:"arrival",7:"distance",8:"entrance"},
  },
  "Review 1": {
    "A": {1:"does",2:"off",3:"going",4:"see",5:"are",6:"have",7:"change",8:"do",9:"from",10:"up",11:"is",12:"has",13:"means",14:"to",15:"for"},
    "B": {16:"photographer",17:"direction",18:"unrecognisable",19:"timetable",20:"tourism",21:"inhabitants",22:"arrival"},
    "C": {23:"had just got on",24:"have been in Budapest for",25:"second time I've visited",26:"keep up with",27:"keen on travelling",28:"at full speed",29:"in the direction of",30:"regret not looking at"},
    "D": {31:"B",32:"A",33:"B",34:"D",35:"D",36:"C"},
    "E": {37:"C",38:"A",39:"C",40:"D",41:"B",42:"C"},
  },
  "Unit 3": {
    "A": {1:"saw",2:"was watching",3:"went",4:"practised",5:"were you talking",6:"owned",7:"did",8:"jumped",9:"was working",10:"got",11:"were playing",12:"did pass"},
    "B": {1:"were you going",2:"Did you enjoy",3:"was always taking",4:"did not have",5:"went",6:"became",7:"was working",8:"heard",9:"appeared",10:"threw"},
    "C": {1:"had just left",2:"gave",3:"read",4:"made",5:"got",6:"had",7:"was",8:"got",9:"had left",10:"went",11:"got",12:"had already begun",13:"learned",14:"spoke",15:"talked",16:"did you decide"},
    "D": {1:"had written",2:"had stayed",3:"had been waiting",4:"had been running",5:"had seen",6:"had known",7:"had been getting",8:"hadn't been having",9:"hadn't eaten",10:"had been listening"},
    "E": {1:"A",2:"C",3:"B",4:"D",5:"D",6:"A",7:"D",8:"B"},
    "F": {1:"I'd painted",2:"I buy",3:"has worked",4:"was needing",5:"was arriving",6:"was eating",7:"was learning",8:"was owning"},
    "G": {1:"used to",2:"get",3:"would",4:"used to",5:"playing",6:"use to",7:"getting",8:"used to"},
    "H": {1:"people would walk more",2:"never used to",3:"used to play",4:"have got used to sending",5:"would often get home",6:"get used to living",7:"did not use to go",8:"never used to have"},
    "I": {1:"would",2:"not",3:"to",4:"been",5:"were",6:"have",7:"themselves",8:"would",9:"got",10:"were"},
    "J": {1:"been",2:"for",3:"was",4:"was",5:"had",6:"would",7:"used",8:"got",9:"been",10:"being",11:"never",12:"use"},
  },
  "Unit 4": {
    "A": {1:"rink",2:"course",3:"court",4:"ring",5:"track",6:"pitch",7:"was winning",8:"rod",9:"racket",10:"sticks",11:"bat"},
    "B": {1:"referee",2:"athletics",3:"game",4:"professional",5:"the interval",6:"drew",7:"Viewers",8:"final",9:"ending",10:"competitors"},
    "C": {1:"put up with getting",2:"got round to",3:"get up to",4:"gone off skiing",5:"carry on having",6:"put off the match"},
    "D": {1:"in",2:"out",3:"taken",4:"up",5:"out",6:"forward",7:"out",8:"go"},
    "E": {1:"B",2:"C",3:"B",4:"D",5:"A",6:"C",7:"D",8:"D",9:"B",10:"C",11:"D",12:"A",13:"B",14:"D"},
    "F": {1:"D",2:"A",3:"G",4:"B",5:"F",6:"C",7:"E"},
    "G": {1:"found",2:"in",3:"against",4:"involved",5:"that",6:"to",7:"made",8:"was",9:"do",10:"rather"},
    "H": {1:"trainers",2:"practise",3:"interesting",4:"competitive",5:"fortune",6:"Association",7:"medallists",8:"allowance",9:"maintenance"},
    "I": {1:"knowledge",2:"enjoyable",3:"equipment",4:"practically",5:"competition",6:"opponent",7:"lost",8:"fortunately"},
  },
  "Review 2": {
    "A": {1:"interesting",2:"association",3:"unfortunately",4:"knowledge",5:"equipment",6:"enjoyable",7:"competition",8:"trainer",9:"opponents",10:"medallist"},
    "B": {11:"H",12:"C",13:"F",14:"E",15:"G",16:"A",17:"B",18:"D"},
    "C": {19:"had been playing tennis for",20:"did not use to",21:"make certain that",22:"get used to",23:"had already run",24:"never used to spend",25:"take up",26:"would prefer to play",27:"little chance of your winning"},
    "D": {28:"C",29:"C",30:"A",31:"C",32:"A",33:"C",34:"B"},
    "E": {35:"C",36:"D",37:"C",38:"A",39:"D",40:"B",41:"A"},
  },
  "Unit 5": {
    "A": {1:"√",2:"You're going to",3:"I'll",4:"√",5:"Shall",6:"√",7:"Will you",8:"√",9:"√",10:"√",11:"√",12:"Are you going to"},
    "B": {1:"We aren't",2:"I'm going to do",3:"is going to sing",4:"going to buy",5:"going to be",6:"Does",7:"Are they going to broadcast",8:"Are they broadcasting",9:"leaves",10:"Does the restaurant open"},
    "C": {1:"have been",2:"be",3:"will not be",4:"be",5:"studying"},
    "D": {1:"I will have cooked",2:"I will have been waiting",3:"I will have been swimming",4:"won't have finished",5:"Jan will have been talking",6:"won't have been climbing",7:"will probably have passed",8:"Will you have done",9:"Elaine will have been working",10:"probably won't have left"},
    "E": {1:"when we've got home",2:"as soon as I finish",3:"while you travel",4:"before they show Titan",5:"I will be taking",6:"after we have watched",7:"I will have sent out",8:"until you do",9:"by the time",10:"once we've"},
    "G": {1:"in",2:"on",3:"in",4:"on",5:"at",6:"in",7:"in",8:"at",9:"at",10:"in",11:"on",12:"on"},
    "H": {1:"to",2:"at",3:"on",4:"in",5:"on",6:"in",7:"of",8:"towards",9:"at",10:"at",11:"at",12:"to"},
    "I": {1:"after",2:"have",3:"In",4:"to",5:"will",6:"By",7:"have",8:"be",9:"been",10:"at",11:"in",12:"will",13:"at"},
  },
  "Unit 6": {
    "A": {1:"B",2:"D",3:"C",4:"C",5:"D",6:"A",7:"C",8:"A",9:"D",10:"A"},
    "B": {1:"false",2:"electric",3:"motor",4:"industry",5:"taking place",6:"modern",7:"engine"},
    "C": {1:"broken",2:"narrowed",3:"turn",4:"work",5:"carrying",6:"came",7:"put",8:"plugged"},
    "D": {1:"A",2:"E",3:"C",4:"F",5:"B",6:"D"},
    "E": {1:"C",2:"B",3:"B",4:"B",5:"C",6:"D",7:"A",8:"D",9:"C",10:"B",11:"A",12:"D"},
    "F": {1:"about",2:"it",3:"them",4:"are",5:"being",6:"am"},
    "G": {1:"resulted in",2:"managed to discover",3:"is also known as",4:"plan to protest",5:"considering Dr Knight for",6:"It is impossible for us"},
    "H": {1:"revolutionary",2:"impossible",3:"appearance",4:"introduction",5:"explanation",6:"scientifically",7:"invention",8:"discovery"},
    "I": {1:"wooden",2:"observations",3:"Researchers",4:"psychologist",5:"building",6:"importance",7:"introductory",8:"technologically"},
  },
  "Review 3": {
    "A": {1:"explanation",2:"introduction",3:"scientists",4:"possibility",5:"building",6:"revolutionary",7:"discovery",8:"appearance",9:"researcher",10:"importance"},
    "B": {11:"D",12:"A",13:"F",14:"C",15:"H",16:"E",17:"B",18:"G"},
    "C": {19:"looking forward to doing",20:"with the introduction of",21:"finally managed to bring",22:"I find it impossible to understand",23:"resulted in Fleming's discovery",24:"are sometimes known as",25:"came to the conclusion",26:"made an attempt to",27:"as soon as we have"},
    "D": {28:"C",29:"B",30:"B",31:"A",32:"D",33:"C",34:"A"},
    "E": {35:"C",36:"A",37:"C",38:"D",39:"D",40:"B",41:"D"},
  },
  "Unit 7": {
    "A": {1:"the evening",2:"cricket",3:"the bus",4:"a headache",5:"prison",6:"a waiter",7:"a taxi",8:"music",9:"chemistry",10:"in the 1920s"},
    "B": {1:"A",2:"C",3:"D",4:"A",5:"C",6:"B",7:"A",8:"C",9:"D",10:"D"},
    "C": {1:"The",2:"a",3:"an",4:"the",5:"a",6:"the",7:"a",8:"the",9:"an",10:"the"},
    "D": {1:"are",2:"was",3:"are",4:"takes",5:"looks",6:"was not",7:"is"},
    "E": {1:"an",2:"information",3:"glass",4:"was",5:"hair",6:"jeans",7:"Many",8:"knowledge",9:"is",10:"another"},
    "F": {1:"were only a few",2:"gave the police a description",3:"is only a little",4:"joining the fire brigade",5:"was shocking",6:"are only a few",7:"only ate",8:"a lot of hats"},
    "G": {1:"H",2:"F",3:"G",4:"B",5:"D",6:"A",7:"E",8:"C"},
    "H": {1:"D",2:"B",3:"D",4:"D",5:"A",6:"D",7:"C",8:"B",9:"D",10:"A",11:"B",12:"C"},
    "I": {1:"–",2:"the",3:"a",4:"the",5:"the",6:"the",7:"–",8:"–",9:"–",10:"the",11:"the",12:"–",13:"an",14:"–",15:"a",16:"the",17:"the",18:"the",19:"an",20:"the",21:"the",22:"–"},
  },
  "Review 4": {
    "A": {1:"few",2:"the",3:"to",4:"an",5:"√",6:"a",7:"√",8:"√",9:"into",10:"much"},
    "B": {11:"politicians",12:"informative",13:"journal",14:"announcement",15:"unwritten",16:"disbelief",17:"communication",18:"humorous"},
    "C": {19:"is little difference between",20:"had a great influence on",21:"gave a description of",22:"under the control of",23:"is no point in trying",24:"is my view",25:"is likely to make",26:"in place of",27:"to comment on"},
    "D": {28:"much",29:"few",30:"lots",31:"some",32:"little",33:"most",34:"many"},
    "E": {35:"D",36:"B",37:"A",38:"D",39:"C",40:"A",41:"B"},
  },
  "Unit 8": {
    "A": {1:"denied",2:"refused",3:"accepts",4:"agreed",5:"headline",6:"heading",7:"feature",8:"article",9:"press",10:"media",11:"newsflash",12:"bulletin"},
    "B": {1:"program",2:"tabloid",3:"columnist",4:"game",5:"an announcer",6:"broadcast"},
    "C": {1:"turn",2:"fill",3:"put",4:"handing",5:"made",6:"look",7:"stands"},
    "D": {1:"came out",2:"made that story up",3:"comes on",4:"go into",5:"flicked through the magazine",6:"bring that up",7:"see through"},
    "E": {1:"D",2:"C",3:"B",4:"D",5:"D",6:"A",7:"A",8:"C",9:"B",10:"D"},
    "F": {1:"as",2:"with",3:"in",4:"in",5:"to",6:"with"},
    "G": {1:"to",2:"that",3:"about",4:"from",5:"to",6:"not",7:"of",8:"by",9:"to",10:"to"},
    "H": {1:"unannounced",2:"communication",3:"editorial",4:"humour",5:"unwritten",6:"secondary",7:"journalism",8:"information"},
    "I": {1:"discussion",2:"politicians",3:"journalists",4:"ridiculous",5:"disbelief",6:"powerful",7:"unconvincing",8:"believable",9:"communicators",10:"uninformed",11:"humorous"},
  },
  "Unit 9": {
    "A": {1:"Yes",2:"No",3:"Yes",4:"No",5:"Yes",6:"No",7:"Yes"},
    "C": {1:"leaves",2:"will call",3:"are taking",4:"have been",5:"find",6:"have seen",7:"has been working",8:"get",9:"don't forget",10:"don't want"},
    "D": {1:"unless",2:"in case",3:"as long as",4:"if",5:"So long as",6:"in case",7:"provided",8:"unless"},
    "G": {1:"B",2:"D",3:"C",4:"A",5:"D",6:"A",7:"C",8:"C",9:"A",10:"D"},
    "J": {1:"√",2:"have",3:"had",4:"√",5:"for",6:"would",7:"except",8:"it",9:"√",10:"will"},
  },
  "Unit 10": {
    "A": {1:"A",2:"A",3:"B",4:"D",5:"D",6:"B",7:"C",8:"B",9:"A",10:"A"},
    "B": {1:"support",2:"typical",3:"close",4:"ancient",5:"blame",6:"polite",7:"pleased",8:"relationship"},
    "C": {1:"look",2:"make",3:"grow",4:"get",5:"bring",6:"look",7:"put",8:"fall"},
    "D": {1:"passed away",2:"stand up for",3:"fallen for",4:"picks on",5:"taken aback",6:"settled down",7:"asked after"},
    "E": {1:"do",2:"have",3:"took",4:"have",5:"losing",6:"meet",7:"take",8:"fall",9:"make",10:"in",11:"mood",12:"breaking",13:"had"},
    "F": {1:"B",2:"B",3:"D",4:"A",5:"C",6:"C",7:"C",8:"A"},
    "G": {1:"with",2:"are",3:"that",4:"in",5:"from",6:"to",7:"off",8:"for",9:"it",10:"to"},
    "H": {1:"argument",2:"marriage",3:"politeness",4:"kindness",5:"unable",6:"friendship"},
    "I": {1:"personality",2:"relationship",3:"correspondence",4:"unwilling",5:"nervously",6:"jealousy",7:"obedient",8:"unhappiness",9:"achievement",10:"careful"},
  },
  "Review 5": {
    "A": {1:"of",2:"have",3:"down",4:"grew",5:"taken",6:"get",7:"make",8:"of",9:"to",10:"from",11:"If",12:"to",13:"fall",14:"take",15:"that"},
    "B": {16:"friendship",17:"disobedience",18:"jealous",19:"nervously",20:"disabled",21:"argumentative",22:"impolite"},
    "C": {23:"made my mum a promise",24:"let me go out",25:"have fallen out",26:"meet with anyone's approval",27:"in the mood for",28:"of her inability to make",29:"asked me to open",30:"take care of"},
    "D": {31:"D",32:"B",33:"D",34:"A",35:"A",36:"B"},
    "E": {37:"D",38:"B",39:"C",40:"B",41:"D",42:"D"},
  },
  "Unit 11": {
    "A": {1:"taller",2:"greener",3:"fitter",4:"happier",5:"trendier",6:"more nervous",7:"wiser",8:"cheaper",9:"lazier",10:"more serious",11:"more quickly",12:"better",13:"less",14:"worse",15:"farther"},
    "B": {1:"greatest",2:"most boring",3:"highest",4:"luckiest",5:"most often",6:"deepest",7:"ugliest",8:"worst",9:"farthest",10:"loveliest",11:"craziest",12:"most modern",13:"worst",14:"least",15:"best"},
    "C": {1:"latest",2:"least",3:"worse",4:"more",5:"most",6:"less",7:"younger",8:"better",9:"higher",10:"best"},
    "F": {1:"D",2:"A",3:"C",4:"E",5:"F",6:"B"},
    "G": {1:"enough pizza",2:"old enough",3:"early enough",4:"sensible enough",5:"hard enough",6:"enough credits",7:"warm enough",8:"to get",9:"us all to sit down",10:"to pull"},
    "I": {1:"A",2:"B",3:"B",4:"C",5:"D",6:"A",7:"B",8:"A",9:"D",10:"B"},
    "J": {1:"such",2:"too",3:"such",4:"so",5:"too",6:"too",7:"so",8:"so",9:"too"},
  },
  "Unit 12": {
    "A": {1:"jury",2:"commit",3:"rules",4:"witness",5:"corporal",6:"right",7:"break",8:"laws",9:"imprisoned",10:"justice",11:"capital",12:"sentenced",13:"bystanders",14:"judge"},
    "C": {1:"come forward",2:"made off",3:"looking into",4:"bringing in",5:"held up",6:"broke out",7:"chased after",8:"went off"},
    "D": {1:"hand",2:"back",3:"away",4:"down",5:"let",6:"taken"},
    "E": {1:"putting",2:"intention",3:"isn't",4:"gave",5:"fault",6:"for",7:"account",8:"went",9:"order",10:"taking"},
    "F": {1:"I",2:"A",3:"H",4:"E",5:"B",6:"D",7:"G",8:"F",9:"C"},
    "G": {1:"for",2:"that",3:"of",4:"to",5:"to",6:"for"},
    "H": {1:"offenders",2:"proof",3:"lawyer",4:"accusations",5:"investigator",6:"imprisonment",7:"security",8:"dishonesty",9:"evidence",10:"forgery",11:"addiction",12:"robbery",13:"thief",14:"conviction",15:"criminals",16:"murderer"},
  },
  "Review 6": {
    "A": {1:"accused",2:"investigation",3:"evidence",4:"lawyers",5:"proof",6:"thief",7:"robberies",8:"conviction",9:"forgery",10:"imprisonment"},
    "B": {11:"G",12:"D",13:"A",14:"H",15:"C",16:"E",17:"B",18:"F"},
    "C": {19:"as the worst crime in",20:"have no respect for",21:"have such strict laws",22:"was not old enough",23:"took me for the thief",24:"better than anyone else",25:"such a lot of",26:"were too young",27:"take into account"},
    "D": {28:"C",29:"C",30:"D",31:"A",32:"B",33:"C",34:"C"},
    "E": {35:"D",36:"B",37:"B",38:"D",39:"A",40:"C",41:"C"},
  },
  "Unit 13": {
    "A": {1:"speak",2:"√",3:"be able to",4:"could",5:"could",6:"could",7:"have got",8:"√",9:"able",10:"play"},
    "B": {1:"Could",2:"were allowed to",3:"could",4:"should",5:"ought to",6:"shouldn't",7:"have written",8:"may",9:"waited",10:"been doing",11:"can"},
    "C": {1:"must have",2:"has to",3:"had to",4:"have to",5:"mustn't",6:"don't have to",7:"have to",8:"didn't have to",9:"have to",10:"needn't"},
    "D": {1:"must be at home",2:"must be taking",3:"boy can't be",4:"can't be expecting us",5:"must have been",6:"must have been talking",7:"can't have won",8:"can't have been trying"},
    "E": {1:"must",2:"able",3:"could",4:"cannot",5:"should",6:"mustn't",7:"had",8:"have",9:"will",10:"ought",11:"might",12:"needn't"},
    "F": {1:"D",2:"B",3:"D",4:"A",5:"D",6:"C",7:"B",8:"C",9:"D",10:"A"},
    "G": {1:"can",2:"couldn't",3:"could have gone",4:"ought not to have told",5:"don't have to",6:"had to",7:"can't have been",8:"Did you have to",9:"mustn't",10:"ought to"},
    "H": {1:"C",2:"A",3:"D",4:"A",5:"B",6:"B",7:"A",8:"D",9:"A",10:"C",11:"D",12:"B"},
    "I": {1:"ought",2:"had",3:"can't",4:"must",5:"can",6:"can't",7:"may",8:"should",9:"could",10:"not",11:"could"},
  },
  "Unit 14": {
    "A": {1:"prescription",2:"recipe",3:"therapy",4:"cure",5:"remedy",6:"examine",7:"investigate",8:"operation",9:"surgery",10:"sore",11:"hurt",12:"pain"},
    "B": {1:"thin",2:"healthy",3:"rash",4:"bandage",5:"infection",6:"effects",7:"ward",8:"injured",9:"illnesses",10:"dose"},
    "C": {1:"came down with the flu",2:"give up smoking",3:"to put the dog down",4:"feel up to playing",5:"bring on",6:"broke out"},
    "D": {1:"came round",2:"cut down",3:"wear off",4:"putting on",5:"passed out",6:"got over",7:"pull through",8:"look after"},
    "E": {1:"B",2:"D",3:"A",4:"D",5:"D",6:"A",7:"C",8:"D",9:"A",10:"B",11:"C",12:"D"},
    "F": {1:"E",2:"A",3:"D",4:"B",5:"C"},
    "G": {1:"about",2:"to",3:"to",4:"into",5:"with",6:"about",7:"to",8:"from",9:"from",10:"to"},
    "H": {1:"unaware",2:"allergic",3:"illness",4:"poisonous",5:"uncomfortable",6:"fitness",7:"injuries",8:"strengthen"},
    "I": {1:"operation",2:"emphasise",3:"surgeons",4:"discomfort",5:"beneficial",6:"surgical",7:"recovery",8:"injections",9:"operators"},
  },
  "Review 7": {
    "A": {1:"unaware",2:"emphasise",3:"injection",4:"poisonous",5:"uncomfortable",6:"surgeon",7:"treatment",8:"prescription",9:"allergic",10:"recovery"},
    "B": {11:"is no need for Adrian",12:"led to the minister's",13:"is not worth seeing",14:"made an appointment with",15:"am tired of being",16:"is unlikely to",17:"to be able to do",18:"cut down on"},
    "C": {19:"come down with",20:"get over",21:"come round",22:"passed out",23:"put on",24:"break out",25:"bringing on",26:"give up"},
    "D": {27:"B",28:"A",29:"C",30:"B",31:"A",32:"D",33:"B",34:"C"},
    "E": {35:"C",36:"A",37:"D",38:"A",39:"B",40:"D",41:"A",42:"C"},
  },
  "Unit 15": {
    "A": {1:"was",2:"was",3:"has",4:"has",5:"was",6:"is being painted",7:"was",8:"be",9:"has",10:"being",11:"was",12:"was",13:"was",14:"had",15:"Was"},
    "B": {1:"is held",2:"was created",3:"is going to be presented",4:"will have been arrested",5:"have been marked",6:"were discovered",7:"was bullied",8:"is being considered",9:"be lowered",10:"was blown",11:"has been played",12:"are being questioned"},
    "F": {1:"B",2:"A",3:"D",4:"C",5:"B",6:"C",7:"D",8:"B",9:"D",10:"B"},
    "G": {1:"has been scratched",2:"is being operated on",3:"you been invited to Fiona's",4:"was probably written by",5:"is being considered",6:"was sent to Megagrocer's by",7:"got my teacher to explain"},
    "H": {1:"being",2:"to",3:"have",4:"us",5:"been",6:"told",7:"got",8:"being",9:"to",10:"had"},
    "J": {1:"was",2:"was",3:"by",4:"are",5:"were",6:"were",7:"been",8:"had",9:"was",10:"was",11:"had",12:"got",13:"were"},
  },
  "Unit 16": {
    "A": {1:"fry",2:"chop",3:"bake",4:"grate",5:"whisk",6:"slice",7:"mix",8:"roast",9:"grill",10:"stir",11:"boil"},
    "B": {1:"cuisine",2:"Frozen",3:"cook",4:"kettle",5:"menu",6:"hob",7:"freezer",8:"cooker",9:"dishes",10:"dinner",11:"vegan",12:"takeaway",13:"Fizzy"},
    "C": {1:"to",2:"round",3:"in",4:"turn",5:"on",6:"into",7:"out",8:"gone",9:"run",10:"on",11:"out",12:"on",13:"out",14:"put"},
    "D": {1:"C",2:"F",3:"D",4:"G",5:"A",6:"I",7:"J",8:"B",9:"H",10:"E"},
    "E": {1:"on",2:"of",3:"between",4:"and",5:"as",6:"with",7:"about",8:"of",9:"in"},
    "F": {1:"to cook",2:"going",3:"to buy",4:"to help",5:"getting",6:"to lend"},
    "G": {1:"mixture",2:"creative",3:"preparation",4:"original",5:"surprised",6:"disgusting",7:"thoroughly",8:"sweetly",9:"anxiously",10:"appreciation",11:"grown",12:"mixer",13:"containers",14:"safety"},
  },
  "Review 8": {
    "A": {1:"have",2:"on",3:"for",4:"to",5:"of",6:"as",7:"with",8:"see",9:"about",10:"that"},
    "B": {11:"sweetener",12:"disgusting",13:"anxiously",14:"originate",15:"creative",16:"container",17:"safety",18:"thoroughly"},
    "C": {19:"has to be stirred",20:"had the cake delivered by",21:"got Elaine to taste",22:"is said to be",23:"has been said",24:"has been under construction",25:"were grown in",26:"get your cooker fitted by",27:"the sauce is lacking in"},
    "D": {28:"D",29:"F",30:"B",31:"A",32:"C",33:"G",34:"E"},
    "E": {35:"B",36:"D",37:"C",38:"A",39:"C",40:"D",41:"B"},
  },
  "Unit 17": {
    "A": {1:"going",2:"to fail",3:"to do",4:"turning",5:"to speak",6:"moving",7:"making",8:"to get",9:"of getting",10:"to tell",11:"to put",12:"to going"},
    "B": {1:"lying",2:"making",3:"buying",4:"to study",5:"to persuade",6:"walking",7:"stealing",8:"to be",9:"to accept",10:"to go",11:"being sent",12:"to be given"},
    "D": {1:"working",2:"trying",3:"doing",4:"using",5:"taking",6:"achieving",7:"making",8:"to play",9:"telling",10:"to be",11:"learning",12:"to improve",13:"behaving",14:"to sit down",15:"come",16:"listening",17:"hoping"},
    "F": {1:"forgot to take",2:"never forget going up",3:"must remember to hang",4:"likes to wear",5:"regrets saying",6:"regret to tell you",7:"didn't mean to crash",8:"will mean having",9:"was made to tidy",10:"didn't happen to watch",11:"is often considered to be"},
    "G": {1:"to",2:"going",3:"would",4:"rather",5:"wrote",6:"than",7:"had",8:"would",9:"to have",10:"better",11:"not to"},
    "H": {1:"to",2:"rather",3:"prefer",4:"go",5:"rather",6:"better",7:"order",8:"as",9:"to",10:"not",11:"had"},
    "I": {1:"B",2:"B",3:"A",4:"B",5:"D",6:"A",7:"A",8:"C",9:"D",10:"C",11:"B",12:"D",13:"A",14:"C",15:"B"},
  },
  "Unit 18": {
    "A": {1:"pupils",2:"prefects",3:"students",4:"achieved",5:"reach",6:"taught",7:"learn",8:"primary",9:"secondary",10:"high",11:"results",12:"certificate",13:"degree"},
    "B": {1:"passed",2:"measure",3:"speak",4:"qualifications",5:"recognise",6:"task",7:"subject",8:"study",9:"test",10:"classmates"},
    "C": {1:"on",2:"through",3:"at",4:"round",5:"out",6:"up",7:"on"},
    "D": {1:"set out the ideas",2:"think the college's offer over",3:"give in",4:"deal with all the work",5:"suddenly dawned on me",6:"dropped out of university"},
    "E": {1:"B",2:"D",3:"D",4:"B",5:"A",6:"C",7:"A",8:"B",9:"D",10:"C",11:"B",12:"B",13:"A",14:"B"},
    "F": {1:"for",2:"to",3:"on",4:"for",5:"of",6:"for",7:"for",8:"in"},
    "G": {1:"to",2:"that",3:"about",4:"in",5:"about",6:"to",7:"of",8:"for"},
    "H": {1:"scholarship",2:"attention",3:"solution",4:"studies",6:"teachers",7:"revision",8:"certificates"},
    "I": {1:"unthinkable",2:"education",3:"academic",4:"illiteracy",5:"intensely",6:"failure",7:"understandably",8:"unsolvable",9:"reasonable",10:"improved"},
  },
  "Review 9": {
    "A": {1:"on",2:"up",3:"for",4:"through",5:"crossed",6:"of",7:"over"},
    "B": {16:"certificate",17:"revision",18:"attention",19:"solution",20:"behaviour",21:"improvement",22:"literature"},
    "C": {23:"was made to wait",24:"would rather you didn't",25:"was getting at",26:"is no point in counting",27:"in two minds about",28:"to drop out of",29:"is capable of doing",30:"succeeded in passing"},
    "D": {31:"C",32:"D",33:"B",34:"B",35:"D",36:"A"},
    "E": {37:"C",38:"C",39:"A",40:"B",41:"C",42:"C"},
  },
  "Unit 19": {
    "A": {1:"D",2:"B",3:"A",4:"D",5:"C",6:"C",7:"A",8:"D",9:"D",10:"C",11:"A",12:"B"},
    "C": {1:"Whose",2:"when",3:"who",4:"Why",5:"how",6:"What",7:"Which",8:"Where"},
    "D": {1:"did you ask",2:"did you see",3:"gave you",4:"thought you",5:"taught you",6:"did you borrow",7:"brought you",8:"did George accuse",9:"do you admire",10:"told Dave"},
    "E": {1:"Do",2:"Why",3:"does",4:"does",5:"Can",6:"where",7:"how",8:"What"},
    "F": {1:"D",2:"A",3:"C",4:"H",5:"G",6:"E",7:"F",8:"B"},
    "G": {1:"will",2:"shall",3:"is",4:"won't",5:"do",6:"am",7:"isn't",8:"will",9:"shouldn't",10:"aren't",11:"didn't",12:"do"},
    "I": {1:"you know when Tina gets",2:"what time the film starts",3:"know if service is included",4:"let me know what",5:"wonder if you have been",6:"if Gail passed",7:"did Mary go",8:"are we given"},
    "J": {1:"be",2:"it",3:"whether",4:"it",5:"did",6:"him",7:"not",8:"it"},
  },
  "Unit 20": {
    "A": {1:"reservoir",2:"flooding",3:"rural",4:"lightning",5:"fields",6:"drizzling",7:"forecast",8:"waste",9:"surrounding",10:"reuse",11:"global",12:"environment",13:"climate",14:"extinct",15:"smoke",16:"air",17:"cleaner"},
    "B": {1:"cleared up",2:"died down",3:"calling for",4:"face up to",5:"put out",6:"call off",7:"cut off",8:"do up"},
    "C": {1:"away",2:"get",3:"for",4:"down",5:"in",6:"to"},
    "D": {1:"under the weather",2:"had a bad effect on",3:"taking a quick look at",4:"took a long time to",5:"has the responsibility for reading",6:"is a waste of time",7:"in sight of",8:"lost control of"},
    "E": {1:"come",2:"on",3:"made",4:"have",5:"making",6:"whole",7:"like",8:"at"},
    "F": {1:"with",2:"for",3:"to",4:"with",5:"of",6:"from",7:"at",8:"with",9:"about",10:"to",11:"of",12:"for"},
    "G": {1:"global",2:"freezing",3:"endangered",4:"accuracy",5:"Developers",6:"environmentally",7:"extremely",8:"residential",9:"likelihood",10:"harmless",11:"sunshine",12:"neighbourhood",13:"lower",14:"greatness",15:"pollutants",16:"unnaturally"},
  },
  "Review 10": {
    "A": {1:"to",2:"out",3:"from",4:"√",5:"of",6:"√",7:"that",8:"√",9:"taken",10:"up"},
    "B": {11:"likelihood",12:"pollution",13:"accurately",14:"residential",15:"environmentalists",16:"sunny",17:"endangered",18:"freezing"},
    "C": {19:"if you saw",20:"caught sight of",21:"the weather clears up",22:"had torn down",23:"has an effect on",24:"am not really familiar with",25:"made a mess of",26:"put the problems down to",27:"are aware of"},
    "D": {28:"D",29:"C",30:"B",31:"A",32:"D",33:"C",34:"D"},
    "E": {35:"A",36:"C",37:"B",38:"C",39:"A",40:"D",41:"C"},
  },
  "Unit 21": {
    "A": {1:"didn't want",2:"had seen",3:"was giving",4:"had been trying",5:"has decided",6:"is",7:"were going to",8:"loves",9:"had asked",10:"had been brought up"},
    "B": {1:"could",2:"would",3:"√",4:"√",5:"will",6:"√",7:"might",8:"√",9:"√",10:"had to"},
    "C": {1:"her",2:"the",3:"them",4:"they",5:"it",6:"them",7:"their",8:"the"},
    "D": {1:"the following month they would",2:"he night before she had",3:"gone there two days before",4:"they were starting their",5:"that he could pick them",6:"was going to buy them",7:"told him he had to",8:"he thought I might",9:"she hadn't been contacted",10:"had been different the day"},
    "E": {1:"said",2:"stood",3:"would",4:"was",5:"did",6:"had",7:"that",8:"was",9:"that",10:"could",11:"got",12:"told",13:"was",14:"would",15:"them"},
    "H": {1:"to ask",2:"have stated",3:"ordered",4:"tell",5:"hasn't apologised",6:"had refused",7:"to suggest",8:"denied",9:"agreed",10:"claim"},
    "I": {1:"to",2:"if",3:"that",4:"have"},
  },
  "Unit 22": {
    "A": {1:"fortune",2:"economical",3:"receipt",4:"checkout",5:"exchange",6:"fake",7:"offer",8:"change",9:"price"},
    "C": {1:"bank on",2:"make out",3:"put by",4:"get through",5:"look round",6:"came by",7:"gave away"},
    "D": {1:"without",2:"on",3:"by",4:"save",5:"across",6:"into",7:"make"},
    "E": {1:"saving some money for",2:"make a profit",3:"little demand for",4:"to be in debt to",5:"have cost you a fortune",6:"increase in inflation of",7:"spending it on",8:"to the expense of",9:"charged me",10:"a large amount of money",11:"enough money to go",12:"last but not least",13:"notice the shoplifter taking",14:"do the shopping"},
    "F": {1:"E",2:"G",3:"C",4:"A",5:"B",6:"F",7:"D"},
    "G": {1:"on",2:"from",3:"to",4:"from",5:"to",6:"for"},
    "H": {1:"economics",2:"reality",3:"poverty",4:"expensively",5:"endless",6:"payment",7:"assistance",8:"daily",9:"financially",10:"wealthy",11:"unacceptable",12:"valueless",13:"luxuries"},
  },
  "Review 11": {
    "A": {1:"poverty",2:"wealthy",3:"daily",4:"luxuries",5:"acceptable",6:"assistance",7:"economists",8:"investment",9:"invaluable",10:"reality"},
    "B": {11:"D",12:"A",13:"H",14:"F",15:"B",16:"E",17:"C",18:"G"},
    "C": {19:"was charged for",20:"this credit card belong",21:"a small amount of",22:"cost me a fortune",23:"an apology from",24:"saves me from having",25:"no notice of",26:"am a bit short of",27:"I borrow some money from"},
    "D": {28:"B",29:"A",30:"D",31:"C",32:"D",33:"C",34:"C"},
    "E": {35:"B",36:"A",37:"C",38:"A",39:"D",40:"B",41:"C"},
  },
  "Unit 23": {
    "A": {1:"who",2:"where",3:"which",4:"why",5:"where",6:"whose",7:"which",8:"whom",9:"when",10:"whose",11:"which",12:"which"},
    "B": {1:"when",2:"which",3:"√",4:"whose",5:"why",6:"which",7:"who",8:"√",9:"whom",10:"when",11:"who",12:"which"},
    "D": {1:"why",2:"which",3:"who",4:"which",5:"which",6:"whose",7:"whom",8:"who",9:"when",10:"who",11:"who",12:"which"},
    "E": {1:"√",2:"√",3:"√",4:"√",5:"√",6:"x",7:"x",8:"√",9:"√",10:"√",11:"x",12:"√"},
    "F": {1:"D",2:"D",3:"C",4:"A",5:"B",6:"A",7:"B",8:"D"},
    "H": {1:"meeting",2:"passing",3:"finished",4:"Looking",5:"having done",6:"Hearing",7:"Having lost",8:"Being",9:"Having missed",10:"making"},
    "K": {1:"who",2:"√",3:"been",4:"it",5:"her",6:"√",7:"not",8:"which",9:"√",10:"he"},
  },
  "Unit 24": {
    "A": {1:"C",2:"A",3:"B",4:"C",5:"D",6:"B",7:"C",8:"B",9:"A",10:"D",11:"C",12:"D"},
    "B": {1:"after",2:"off",3:"with",4:"off",5:"on",6:"out",7:"for"},
    "C": {1:"go down",2:"put on",3:"grow on",4:"named after",5:"taken off",6:"coming around",7:"let down"},
    "D": {1:"about",2:"Make",3:"in",4:"fun",5:"with",6:"showed",7:"giving",8:"Voicing"},
    "E": {1:"to",2:"the",3:"the",4:"out",5:"up",6:"the",7:"out",8:"be",9:"of"},
    "F": {1:"you enjoy yourself at",2:"is bound to do",3:"instead of worrying",4:"avoid queuing by getting",5:"apologised for not inviting",6:"am happy for you to",7:"isn't like Doug to",8:"is very talented at playing",9:"are not supposed to go",10:"promised to meet Kyle",11:"he deserved to win",12:"proved to be",13:"did you say was"},
    "G": {1:"suggestion",2:"popularity",3:"currently",4:"entertainment",5:"famous",6:"involvement",7:"actors",8:"excitement",9:"conversations",10:"bored",11:"various",12:"amusement",13:"performance",14:"saying"},
  },
  "Review 12": {
    "A": {1:"entertainer",2:"conversation",3:"boredom",4:"performances",5:"currently",6:"excitement",7:"variety",8:"amusing",9:"famous",10:"actively"},
    "B": {11:"instead of having",12:"just like Sandra to",13:"is bound to go",14:"are not supposed to take",15:"apologised for ruining",16:"are happy for you to",17:"make fun of",18:"made an impression on"},
    "C": {19:"dropped off",20:"let down",21:"get along",22:"put on",23:"takes after",24:"fell for",25:"go down",26:"count on"},
    "D": {27:"D",28:"B",29:"A",30:"A",31:"C",32:"C",33:"B",34:"D"},
    "E": {35:"C",36:"A",37:"B",38:"A",39:"D",40:"B",41:"A",42:"A"},
  },
  "Unit 25": {
    "A": {1:"told",2:"rent",3:"sent",4:"were going to",5:"go",6:"had",7:"didn't have to",8:"didn't lend",9:"left",10:"got"},
    "B": {1:"knew",2:"had listened",3:"would",4:"could",5:"were going",6:"to speak",7:"had driven",8:"felt",9:"hope",10:"listened"},
    "C": {1:"C",2:"D",3:"A",4:"B",5:"D",6:"A",7:"C",8:"B",9:"C",10:"D"},
    "F": {1:"despite",2:"Although",3:"however",4:"Despite",5:"However",6:"despite",7:"Although",8:"however",9:"despite"},
    "G": {1:"spite of the fact that",2:"having been sure that she",3:"in spite of his having",4:"whereas planes are still",5:"even though she had got",6:"despite having been robbed",7:"even though the plot is",8:"although they had looked",9:"spite of being beaten",10:"having investigated the case thoroughly"},
    "H": {1:"√",2:"that",3:"being",4:"√",5:"of",6:"have",7:"though",8:"if",9:"√",10:"was"},
    "I": {1:"Despite",2:"could",3:"However",4:"although",5:"spite",6:"high",7:"made",8:"had",9:"will",10:"even"},
  },
  "Unit 26": {
    "A": {1:"appearance",2:"matches",3:"modern",4:"clothing",5:"glimpse",6:"current",7:"new",8:"fit",9:"cloth",10:"suits",11:"glanced",12:"look"},
    "B": {1:"average",2:"suit",3:"wear",4:"top",5:"supplies",6:"painted",7:"manufacture",8:"costume"},
    "C": {1:"did",2:"into",3:"off",4:"down",5:"up",6:"out",7:"up",8:"up",9:"on",10:"out",11:"over",12:"up",13:"show",14:"on"},
    "D": {1:"B",2:"C",3:"A",4:"B",5:"D",6:"B",7:"A",8:"D",9:"D",10:"C",11:"A",12:"C",13:"A"},
    "E": {1:"about",2:"to",3:"at",4:"to",5:"of",6:"on",7:"for",8:"on",9:"to",10:"for"},
    "F": {1:"to see",2:"to study",3:"to work",4:"to do",5:"becoming",6:"to be",7:"to please",8:"to forget"},
    "G": {1:"enthusiastic",2:"advertisements",3:"fashionable",4:"stylish",5:"successful",6:"attractive",7:"beautiful",8:"unexpectedly",9:"similarity",10:"stylist"},
    "H": {1:"unlike",2:"desirable",3:"indecisive",4:"production",5:"useless",6:"dislike",7:"beautifully",8:"undecided"},
  },
  "Review 13": {
    "A": {1:"being",2:"seems",3:"of",4:"on",5:"for",6:"at",7:"for",8:"on",9:"example",10:"to"},
    "B": {11:"stylist",12:"similarity",13:"expectations",14:"decision",15:"enthusiasm",16:"production",17:"beautiful",18:"alike"},
    "C": {19:"is about time you got",20:"wish you wouldn't",21:"wishes she had not worn",22:"despite it being",23:"only I could",24:"even though I begged her",25:"would rather you didn't",26:"if I had something",27:"of the fact that she"},
    "D": {28:"C",29:"F",30:"A",31:"G",32:"D",33:"B",34:"E"},
    "E": {35:"C",36:"A",37:"B",38:"D",39:"C",40:"D",41:"A"},
  },
  "Unit 27": {
    "A": {1:"when",2:"than",3:"than",4:"when",5:"than",6:"when"},
    "B": {1:"C",2:"B",3:"D",4:"A",5:"A",6:"D",7:"A",8:"B",9:"A",10:"D"},
    "C": {1:"had Tom opened",2:"√",3:"did you pass",4:"I see",5:"√",6:"are members of the public allowed",7:"is the equipment to be used",8:"did I think",9:"was I",10:"had I put"},
    "D": {1:"had I started",2:"have I",3:"do I like",4:"it helps",5:"do they see",6:"did I realise",7:"had everyone else left",8:"is this",9:"did I get",10:"had I had",11:"they showed",12:"did I realise",13:"was I fired",14:"they kept"},
    "F": {1:"do I.",2:"do we.",3:"am I.",4:"did I.",5:"will I.",6:"had I.",7:"should I."},
    "G": {1:"was",2:"do",3:"are",4:"was",5:"are",6:"was",7:"are",8:"has"},
    "H": {2:"my mum's",3:"our next door neighbours'",4:"George the Fifth's",5:"people's",6:"the Greenes'",7:"women's",8:"the boss's",9:"Jack and Jill's",10:"students'",11:"children's",12:"politicians'"},
    "I": {1:"hers",2:"mine",3:"my",4:"theirs",5:"her",6:"it's",7:"their",8:"its"},
    "J": {1:"own",2:"√",3:"boss",4:"did",5:"√",6:"its",7:"desk",8:"not",9:"√",10:"have"},
  },
  "Unit 28": {
    "A": {1:"union",2:"company",3:"rise",4:"retire",5:"pension",6:"overtime",7:"job",8:"salary",9:"wage",10:"staff"},
    "B": {1:"won",2:"commute",3:"earn",4:"made",5:"sacked",6:"deliver",7:"gained"},
    "C": {1:"in",2:"over",3:"through",4:"out",5:"down",6:"turned",7:"up",8:"see",9:"to",10:"on",11:"out",12:"out",13:"up",14:"down"},
    "D": {1:"D",2:"B",3:"H",4:"A",5:"G",6:"J",7:"C",8:"E",9:"F",10:"I"},
    "E": {1:"of",2:"day",3:"on",4:"at",5:"attend",6:"doing",7:"does",8:"with",9:"of"},
    "F": {1:"B",2:"C",3:"A",4:"D",5:"B",6:"D"},
    "G": {1:"in",2:"at",3:"in",4:"that",5:"from",6:"for",7:"as",8:"as",9:"for"},
    "H": {1:"machinery",2:"works",3:"industrial",4:"supervision",5:"workers",6:"additional",7:"commercial",8:"dedication",9:"unworkable"},
    "I": {1:"unemployed",2:"employment",3:"management",4:"effective",5:"professionally",6:"irresponsible",7:"meeting",8:"employer",9:"application",10:"helpful",11:"qualifications"},
  },
  "Review 14": {
    "A": {1:"make",2:"out",3:"for",4:"done",5:"made",6:"by",7:"for",8:"put",9:"on",10:"slowed"},
    "B": {11:"irresponsible",12:"helpfully",13:"applicants",14:"supervise",15:"dedication",16:"employees",17:"workable",18:"qualifications"},
    "C": {19:"sooner had Yuri qualified than",20:"do women get promoted",21:"did I realise",22:"Tracy rang did I know",23:"good for you to get",24:"reached an agreement on",25:"no circumstances are",26:"later did I think of",27:"a boring job was it"},
    "D": {28:"D",29:"A",30:"F",31:"C",32:"G",33:"B",34:"E"},
    "E": {35:"C",36:"B",37:"B",38:"C",39:"D",40:"D",41:"A"},
  },
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function normalizeSectionKey(section) {
  const m = (section || '').match(/^(Unit\s+\d+|Review\s+\d+)/i)
  if (!m) return null
  return m[1].replace(/\s+/g, ' ').trim()
}

// For circle_correct: verify answer appears in sentence (one of the two options)
function answerMatchesCircle(sentence, answer) {
  const norm = s => s.toLowerCase().replace(/[.,!?;:]/g, '').trim()
  const a = norm(answer)
  const idx = sentence.indexOf(' / ')
  if (idx === -1) return true // not circle, skip check
  const left = sentence.slice(0, idx).trim()
  const right = sentence.slice(idx + 3).trim()
  // Check if answer appears in left or right side
  return norm(left).includes(a) || norm(right).includes(a) ||
         norm(left).endsWith(a) || norm(right).startsWith(a)
}

// ─── Main ─────────────────────────────────────────────────────────────────────

function applyAnswers() {
  const inputPath = path.join(ROOT, 'public', 'b2-exercises-structured.json')
  const data = JSON.parse(fs.readFileSync(inputPath, 'utf8'))

  let updated = 0
  let skipped = 0
  let notFound = 0

  // Group pages by normalized section key
  const bySection = {}
  for (const page of data) {
    const key = normalizeSectionKey(page.section || '')
    if (!key) continue
    if (!bySection[key]) bySection[key] = []
    bySection[key].push(page)
  }

  // Track which (section, exLabel) combos we've already fully matched
  // to avoid applying same answers to a second exercise with same label
  const matched = new Set()

  for (const page of data) {
    const sectionKey = normalizeSectionKey(page.section || '')
    if (!sectionKey) continue

    const unitAnswers = ANSWERS[sectionKey]
    if (!unitAnswers) continue

    for (const exercise of (page.exercises || [])) {
      const exLabel = exercise.exercise
      const exAnswers = unitAnswers[exLabel]
      if (!exAnswers) continue

      // Check if we already fully applied this (sectionKey, exLabel) pair
      const comboKey = `${sectionKey}::${exLabel}::${page.page}`

      for (const q of (exercise.questions || [])) {
        const ans = exAnswers[q.id]
        if (ans === undefined || ans === null) {
          notFound++
          continue
        }

        // For circle_correct: verify answer is in the sentence
        if (exercise.type === 'circle_correct' && q.sentence) {
          if (!answerMatchesCircle(q.sentence, String(ans))) {
            skipped++
            continue
          }
        }

        if (q.answer !== String(ans)) {
          q.answer = String(ans)
          updated++
        }
      }
    }
  }

  fs.writeFileSync(inputPath, JSON.stringify(data, null, 2), 'utf8')
  console.log(`✓ Updated ${updated} answers`)
  console.log(`  Skipped ${skipped} (circle_correct mismatch)`)
  console.log(`  Not found in key: ${notFound}`)
  console.log(`→ public/b2-exercises-structured.json`)
}

applyAnswers()
