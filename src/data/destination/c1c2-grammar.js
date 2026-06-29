// Destination C1 & C2 - Grammar Units
// Units 1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25
// HTML rendering contract:
//   grammar-point         → <table> with 2 <td> columns (usage / example) per row
//   grammar-point-3col    → <table> with 3 <td> columns (form / verbs / example) per row; headers[] optional
//   grammar-point-grouped → <table> with grouped rows; groups[].group = rowspan header, rows[].sub / .modals / .example
//   words-box             → <div class="words-box"> title + content
//   watch-out             → <div class="watch-out"> bullet list
//   grammar-note          → <div class="grammar-note"> items list
//   intro field on grammar-point → <p> rendered above the table

const _g1 = {
  unit: 1,
  topic: "Present time",
  sections: [
    {
      type: "grammar-point",
      title: "Present simple",
      rows: [
        { usage: "General truths", example: "The left-hand side of the brain <b>controls</b> the right-hand side of the body." },
        { usage: "Current habits", example: "I <b>don't</b> always <b>go</b> to lectures that are early in the morning!" },
        { usage: "Permanent situations and states", example: "Angie <b>teaches</b> French at a local adult education centre." },
        { usage: "Telling jokes and other informal stories", example: "So, a man <b>goes</b> to see his psychiatrist ..." },
        { usage: "Live sports commentary", example: "Adams <b>passes</b> to Kareshi. It'<b>s</b> a goal!" },
        { usage: "Newspaper headlines", example: "HAWKING <b>WINS</b> NOBEL PRIZE" },
        { usage: "Reviews and summaries", example: "The film <b>ends</b> with us not knowing whether they have been successful or not." },
        { usage: "Instructions and directions", example: "You <b>turn</b> left at the end of the road and the school is up ahead." },
        { usage: "Proverbs and sayings", example: "Too many cooks <b>spoil</b> the broth." },
        { usage: "The future (for fixed events) (see Unit 5 for more information)", example: "Term <b>ends</b> on 21st December." },
        { usage: "The future (in time clauses) (see Unit 5 for more information)", example: "I'll be so relieved when I <b>finish</b> this crossword." },
      ]
    },
    {
      type: "grammar-point",
      title: "Emphatic present simple",
      rows: [
        { usage: "To emphasise contrast", example: "Adam doesn't know much about psychiatry but he <b>does know</b> quite a lot about psychology." },
        { usage: "To emphasise strong feeling", example: "I <b>do like</b> playing word games!" },
      ]
    },
    {
      type: "words-box",
      title: "Words and phrases often used with the present simple",
      content: "always / usually / generally / often / sometimes / rarely / seldom / never / whenever / nowadays / these days / from time to time / every now and then / most/much of the time / It's/That's the last time"
    },
    {
      type: "grammar-point",
      title: "Present continuous",
      rows: [
        { usage: "Actions happening now", example: "The boys <b>are doing</b> their homework right now." },
        { usage: "Actions happening around now", example: "What book <b>are</b> you <b>doing</b> in English at the moment?" },
        { usage: "Temporary situations and series of actions", example: "We <b>aren't having</b> any exams while the lecturers are still on strike." },
        { usage: "Changing and developing situations", example: "More and more people <b>are recognising</b> the advantages of being able to speak a foreign language." },
        { usage: "Annoying or amusing habits (usually with always)", example: "Dan's always <b>coming up with</b> the craziest ideas!" },
        { usage: "Background information in jokes and other informal stories", example: "A man goes to see his psychiatrist. He's <b>carrying</b> a bag full of honey ..." },
        { usage: "The future (for arrangements) (see Unit 5 for more information)", example: "When <b>are</b> you <b>taking</b> your driving test?" },
        { usage: "The future (in time clauses) (see Unit 5 for more information)", example: "I'll probably be a bit scared when I'<b>m waiting</b> outside for the exam to start." },
      ]
    },
    {
      type: "words-box",
      title: "Words and phrases often used with the present continuous",
      content: "now / right now / for now / currently / at the moment / for the time being / at present / today / this week/etc"
    },
    {
      type: "grammar-point",
      title: "Present perfect simple",
      rows: [
        { usage: "Situations and states that started in the past and are still true", example: "I'<b>ve been</b> a member of MENSA for over five years." },
        { usage: "A series of actions continuing up to now", example: "She'<b>s done</b> a BA, an MA and a PhD so far." },
        { usage: "Completed actions at a time in the past which is not important or relevant", example: "<b>Have</b> you ever <b>read</b> any books by Edward De Bono?" },
        { usage: "Completed actions where the important thing is the present result", example: "She'<b>s been awarded</b> a scholarship to study at Harvard." },
        { usage: "Actions completed recently", example: "I've just received my exam results." },
        { usage: "The future (in time clauses) (see Unit 5 for more information)", example: "Tell me when you'<b>ve finished</b> the report." },
      ]
    },
    {
      type: "words-box",
      title: "Words and phrases often used with the present perfect simple",
      content: "since / for / It's the first/second/etc time / before / already / yet / ever / just / still / recently / up to now / (up) until now / so far"
    },
    {
      type: "grammar-note",
      title: "US vs UK Grammar",
      items: [
        "In American English, the past simple is often used instead of the present perfect simple. US: <b>Did</b> you <b>find</b> the answer yet? / UK: <b>Have</b> you <b>found</b> the answer yet? US: I already <b>found</b> the answer. / UK: I've already <b>found</b> the answer.",
        "In informal American English, <i>gotten</i> is sometimes used as a past participle instead of <i>got</i> when it means 'obtain', 'become' or 'move'. US: I <b>haven't gotten</b> the books yet. ( = I haven't bought the books yet.) / UK: I <b>haven't got</b> the books yet.",
      ]
    },
    {
      type: "grammar-point",
      title: "Present perfect continuous",
      rows: [
        { usage: "Actions and situations continuing up to the present (or just before the present)", example: "We'<b>ve</b> all <b>been wondering</b> what to get Tony for his birthday and we just can't decide." },
        { usage: "The future (in time clauses) (see Unit 5 for more information)", example: "I won't take my driving test until I'<b>ve been having</b> lessons for at least two months." },
      ]
    },
    {
      type: "watch-out",
      items: [
        "We usually use the present perfect simple to specify a particular number of times/things. ✓ I'<b>ve written</b> two essays this week.",
        "We usually use the present perfect continuous to emphasise the duration of an action/situation. ✓ I'<b>ve worked</b> here for five years. (no emphasis) ✓ I'<b>ve been working</b> here for five years. (emphasises the duration)",
      ]
    },
    {
      type: "words-box",
      title: "Words and phrases often used with the present perfect continuous",
      content: "since / for / just / all day/week/etc"
    },
    {
      type: "grammar-point",
      title: "Stative and non-stative uses of verbs",
      rows: [
        { usage: "Communication", example: "agree, deny, disagree" },
        { usage: "Thinking", example: "believe, consider, doubt, expect, imagine, know, mean, realise, suppose, suspect, think, understand" },
        { usage: "Existence", example: "be, exist" },
        { usage: "Emotions", example: "adore, appeal, appreciate, desire, despise, detest, dislike, envy, fear, feel, forgive, hate, like, love, mind, need, pity, prefer, satisfy, trust, want, wish" },
        { usage: "Perception", example: "appear, hear, look, notice, recognise, resemble, see, seem, smell, sound, taste" },
        { usage: "Possession and relationships between things", example: "belong, concern, consist, contain, cost, depend, equal, fit, have, include, involve, lack, measure, owe, own, possess, suit, weigh" },
        { usage: "Other", example: "deserve, matter" },
      ]
    },
    {
      type: "watch-out",
      items: [
        "Many of the verbs above can also be used in continuous tenses when they describe actions rather than states. These verbs include: appeal, be, consider, depend, feel, have, include, look, mean, mind, see, smell, taste, think, weigh. ✓ I <b>think</b> it's important to know how to use a computer. (state: think = believe) ✓ I'<b>m thinking</b> about going on a computer course. (action: think = consider)",
      ]
    },
  ]
};

const _g3 = {
  unit: 3,
  topic: "Past time",
  sections: [
    {
      type: "grammar-point",
      title: "Past simple",
      rows: [
        { usage: "Single completed actions", example: "Sony and Philips <b>invented</b> the CD in the early 1980s." },
        { usage: "Repeated or habitual actions in the past", example: "We <b>moved</b> house a lot when I was a kid." },
        { usage: "General truths about the past", example: "Early clocks <b>were</b> usually very unreliable." },
        { usage: "Permanent situations and states in the past", example: "<b>Did</b> the ancient Egyptians <b>have</b> more advanced technology than other civilisations?" },
        { usage: "The main events in a story", example: "Frank <b>turned on</b> the TV and <b>sat</b> on the sofa." },
        { usage: "The present (in conditional sentences) (see Unit 11 for more information)", example: "If we <b>didn't have</b> computers, what would the world be like?" },
        { usage: "The present (after wish, it's time, would rather, etc) (see Unit 13 for more information)", example: "I'd rather Michael <b>didn't waste</b> so much time playing video games." },
      ]
    },
    {
      type: "grammar-point",
      title: "Emphatic past simple",
      rows: [
        { usage: "To emphasise contrast in the past", example: "Perhaps our grandparents didn't have e-mail, but they <b>did have</b> the telephone and telegrams." },
        { usage: "To emphasise strong feeling in the past", example: "I <b>did enjoy</b> our visit to the Science Museum last summer." },
      ]
    },
    {
      type: "grammar-note",
      title: "Past simple vs present perfect simple",
      items: [
        "The past simple is used to refer to periods of time or moments which are finished. The present perfect is used to refer to periods of time which continue up to the present. ✓ The nineteenth century <b>saw</b> many technological advances. ✓ There <b>have been</b> many technological advances in recent years.",
        "The past simple is used to refer to events at a specific time in the past. The present perfect is used when the specific time isn't important, or when the present result of a past event is important. ✓ I <b>sent</b> my first e-mail six months ago. ✓ <b>Have</b> you ever <b>sent</b> an e-mail before?",
      ]
    },
    {
      type: "grammar-point",
      title: "Past continuous",
      rows: [
        { usage: "Actions in progress at a particular moment in the past", example: "<b>Were</b> you <b>chatting</b> to Matt online at midnight last night?" },
        { usage: "Actions in progress around a particular moment in the past", example: "At the turn of the twentieth century, many discoveries <b>were being made</b> in physics and other sciences." },
        { usage: "Temporary situations and series of actions in the past", example: "At the time, I <b>was working</b> for a large software company in California." },
        { usage: "Changing and developing situations in the past", example: "I <b>was getting</b> frustrated with my internet provider so I decided to change." },
        { usage: "Annoying or amusing past habits (usually with always)", example: "When she was young, Tina <b>was</b> always <b>taking</b> things <b>apart</b> to see how they worked." },
        { usage: "Background information in a story", example: "It <b>was raining</b> outside and people <b>were making</b> their way home after work." },
        { usage: "Two actions in progress at the same time", example: "While I <b>was playing</b> a computer game, my brother <b>was doing</b> his homework." },
        { usage: "The present and future (in conditional sentences) (see Unit 11 for more information)", example: "Would you be happier if you <b>were studying</b> computer science?" },
        { usage: "The present and future (after wish, it's time, would rather, etc) (see Unit 13 for more information)", example: "I wish we <b>were going</b> to the computer fair next weekend." },
      ]
    },
    {
      type: "grammar-note",
      title: "Past continuous vs past simple",
      items: [
        "We often use the past continuous to describe background events in progress and the past simple for the main events. ✓ We <b>were talking</b> about MP3s when Andrea <b>mentioned</b> her new music website.",
        "We normally use the past simple to describe regular or repeated actions in the past, not the past continuous. ✓ When I was a child, I <b>visited</b> my grandmother every week.",
      ]
    },
    {
      type: "grammar-point",
      title: "Past perfect simple",
      rows: [
        { usage: "Situations and states before the past", example: "<b>Had</b> you <b>had</b> your computer long before it broke down?" },
        { usage: "Completed actions before a moment in the past", example: "When talking films appeared, the cinema <b>had</b> already <b>become</b> a popular form of entertainment." },
        { usage: "A series of actions continuing up to a moment in the past", example: "By the time of his death, Thomas Edison <b>had invented</b> a number of things that changed everyday life." },
        { usage: "Completed actions where the important thing is the result at a moment in the past", example: "I beat Jason at the game because I'<b>d played</b> it a lot with my brother." },
      ]
    },
    {
      type: "grammar-point",
      title: "Past perfect continuous",
      rows: [
        { usage: "Actions and situations continuing up to a moment in the past (or just before a moment in the past)", example: "She'<b>d been writing</b> computer games for over ten years before she finally had a hit." },
      ]
    },
    {
      type: "grammar-point",
      title: "would",
      rows: [
        { usage: "Past habits, particularly for the distant past", example: "The ancient Greeks <b>would</b> rely on the power of slaves, rather than machines." },
      ]
    },
    {
      type: "watch-out",
      items: [
        "Would can also be used with a continuous infinitive when we are referring to a habit involving actions in progress. ✓ Whenever I went to James's house, he would usually <b>be playing</b> on his computer.",
        "Would is not usually used to refer to past states.",
      ]
    },
    {
      type: "grammar-point",
      title: "used to",
      rows: [
        { usage: "Past habits and states, particularly for the distant past", example: "It <b>used to</b> seem strange to be able to communicate over long distances." },
      ]
    },
    {
      type: "watch-out",
      items: [
        "Remember that <b>used to</b> is not the same as <b>be used to</b>. Be used to refers to a situation that is now familiar or no longer strange. ✓ At first, people found it strange sending messages by mobile, but now everyone'<b>s used to</b> it.",
        "We use <b>get used to</b> to refer to the process of becoming familiar with a situation. ✓ It's surprising how quickly people in the nineteenth century <b>got used to</b> travelling by train.",
      ]
    },
  ]
};

// grammar-point-3col → <table> with 3 <td> columns (form / verbs / example) per row

const _g5 = {
  unit: 5,
  topic: "Future time",
  sections: [
    {
      type: "grammar-note",
      title: "Introduction to Future Forms",
      items: [
        "Often the same future event can be described in different ways. Which way you choose depends on: function (e.g. request, promise or offer), how you see the future event (e.g. fixed or uncertain), and level of formality (will is usually more formal than be going to).",
      ]
    },
    {
      type: "grammar-point",
      title: "will",
      rows: [
        { usage: "Predictions", example: "It looks as if Jake <b>will lose</b> his job." },
        { usage: "Future facts", example: "The factory <b>will open</b> in July." },
        { usage: "Decisions made at the moment of speaking", example: "I know! I'<b>ll ask</b> for a pay rise tomorrow." },
        { usage: "Offers", example: "I'<b>ll help</b> you with the advertising campaign." },
        { usage: "Promises", example: "I promise you you <b>won't lose</b> your job." },
        { usage: "Requests", example: "<b>Will</b> you <b>give</b> a presentation on the sales figures?" },
        { usage: "Refusals (won't)", example: "No, I <b>won't give</b> a presentation on the sales figures." },
      ]
    },
    {
      type: "watch-out",
      items: [
        "For offers and suggestions in the question form with I and we, we use <b>shall</b> not <b>will</b>. ✓ <b>Shall I help</b> you with the advertising campaign? (offer) ✓ <b>Shall we discuss</b> this in the morning? (suggestion)",
        "For requests, we can also use <b>would</b>, <b>could</b> or <b>can</b>. Would and could are more polite than will and can.",
        "For refusals, we can also use <b>couldn't</b> or <b>can't</b>. Couldn't is more polite than won't and can't.",
      ]
    },
    {
      type: "grammar-note",
      title: "US vs UK Grammar",
      items: [
        "In British English, <b>shall</b> is sometimes used with I and we in place of <b>will</b>. ✓ I <b>shall</b> be in touch again soon. ✓ I <b>will</b> be in touch again soon.",
      ]
    },
    {
      type: "grammar-point",
      title: "be going to",
      rows: [
        { usage: "Predictions based on present evidence", example: "Look at that wall. It looks as if it'<b>s going to</b> fall down." },
        { usage: "Intentions", example: "I'<b>m going to get</b> my degree, then <b>get</b> a well-paid job." },
      ]
    },
    {
      type: "grammar-point",
      title: "Present continuous",
      rows: [
        { usage: "Arrangements", example: "I'<b>m meeting</b> Fiona on Friday to discuss the advertising campaign." },
        { usage: "Intentions", example: "I'<b>m asking</b> for a pay rise tomorrow." },
      ]
    },
    {
      type: "watch-out",
      items: [
        "Both <b>be going to</b> and <b>present continuous</b> can be used for intentions. However, present continuous is not usually used for intentions in the distant future. ✓ I'<b>m going to work</b> for a really successful company one day. ✗ I'<b>m working</b> for a huge multinational one day.",
      ]
    },
    {
      type: "grammar-point",
      title: "Present simple",
      rows: [
        { usage: "Fixed future events (eg timetables and schedules)", example: "The shop <b>closes</b> at 3 pm next Saturday." },
      ]
    },
    {
      type: "grammar-point",
      title: "Future perfect simple",
      rows: [
        { usage: "Completed situations before a certain time", example: "It looks as if Jake <b>will have lost</b> his job by the end of the week." },
        { usage: "Continuing situations up to a certain time", example: "This time next month, I'<b>ll have worked</b> at the company for exactly 25 years." },
      ]
    },
    {
      type: "grammar-point",
      title: "Future perfect continuous",
      rows: [
        { usage: "Continuing situations up to a certain time (emphasises duration)", example: "This time next month, I'<b>ll have been working</b> at the company for exactly 25 years." },
      ]
    },
    {
      type: "grammar-point",
      title: "Future continuous",
      rows: [
        { usage: "Situations in progress at a certain time in the future", example: "This time next week I'<b>ll be travelling</b> round Russia on business." },
        { usage: "Situations which will happen in the future in the normal course of events", example: "The company Chairperson <b>will be arriving</b> on Thursday." },
        { usage: "Habits or repeated actions at a point in the future", example: "I think that, in the future, more and more people <b>will be commuting</b> to work by plane." },
      ]
    },
    {
      type: "grammar-note",
      title: "Time clauses",
      items: [
        "After many time words and phrases (when, while, once, as soon as, etc), we do not use will or be going to. We use:",
        "present simple: ✓ I'll give you a pay rise when you <b>start</b> working harder!",
        "present continuous: ✓ I'll give you a pay rise once you'<b>re bringing in</b> three new customers a week.",
        "present perfect simple: ✓ I'll give you a pay rise as soon as you'<b>ve proved</b> you're a hard worker.",
        "present perfect continuous: ✓ I won't give you a pay rise until you'<b>ve been working</b> here for three years.",
      ]
    },
    {
      type: "grammar-point",
      title: "Other ways to express the future",
      rows: [
        { usage: "be (just) about to — for the (very) near future", example: "I'<b>m just about to ask</b> for my pay rise." },
        { usage: "be (just) on the point/verge of — for the (very) near future", example: "I'<b>m just on the point/verge of asking</b> for my pay rise." },
        { usage: "be due to — for formal arrangements", example: "I'<b>m due to meet</b> my boss at eleven o'clock." },
        { usage: "be to do — for obligations / for formal announcements", example: "You'<b>re to get</b> those reports written before Friday! / The factory <b>is to open</b> in July." },
        { usage: "other modals (see Unit 9 for more information) — to express certainty, possibility, etc", example: "I <b>might</b> ask for a pay rise tomorrow." },
      ]
    },
    {
      type: "grammar-note",
      title: "Future in the past",
      items: [
        "When we look back at what was the future once, we usually make the future verb forms past. Will becomes would, is going to becomes was going to, etc.",
        "will → would: Then: I think the factory <b>will open</b> in September. / Now: I thought the factory <b>would open</b> in September.",
        "present simple → past simple: Then: I'm in a rush because the train <b>leaves</b> at 4. / Now: I was in a rush because the train <b>left</b> at 4.",
      ]
    },
  ]
};

const _g7 = {
  unit: 7,
  topic: "Passives and causatives",
  sections: [
    {
      type: "grammar-point",
      title: "The passive",
      rows: [
        { usage: "When we don't know who does/did something", example: "The car <b>was stolen</b> at approximately 1.30 am." },
        { usage: "When it's obvious who does/did something", example: "<b>Having been introduced</b> in 1988, the Road Traffic Act regulates all vehicle use on UK roads." },
        { usage: "When it's not important who does/did something", example: "The XL500 <b>was designed</b> with young families in mind, so there's plenty of room in the boot." },
        { usage: "To emphasise new information (which appears at the end of the sentence)", example: "This type of submarine <b>was developed</b> during the Second World War by the Americans." },
        { usage: "To avoid starting clauses with long expressions", example: "We <b>were surprised</b> by the number of people trying to leave the city for the long weekend. (More natural than <i>The number of people trying to leave the city for the long weekend surprised us.</i>)" },
        { usage: "To produce a formal style", example: "All passengers <b>are required</b> to present their ticket to the inspector." },
      ]
    },
    {
      type: "grammar-point-3col",
      title: "Impersonal passive",
      headers: ["Form", "Common verbs", "Example"],
      rows: [
        {
          form: "noun + verb in passive form + infinitive / perfect infinitive",
          verbs: "agree, assume, believe, claim, consider, estimate, expect, feel, find, guarantee, know, mean, presume, regard, report, say, suppose, think, understand",
          example: "Tourism <b>is expected to become</b> a major part of the country's economy."
        },
        {
          form: "There + verb in passive form + infinitive / perfect infinitive",
          verbs: "agree, assume, believe, claim, consider, estimate, expect, feel, find, guarantee, know, mean, presume, regard, report, say, suppose, think, understand",
          example: "There <b>are reported to have been</b> a record number of accidents on the roads this year."
        },
        {
          form: "It + verb in passive form + that clause",
          verbs: "accept, agree, argue, assume, believe, calculate, claim, consider, estimate, expect, feel, know, presume, report, say, suggest, suppose, think, understand",
          example: "<b>It is thought that</b> the new railway will provide employment opportunities for local people."
        },
      ]
    },
    {
      type: "grammar-point",
      title: "Direct and indirect object",
      intro: "Some verbs in active sentences can be followed by both a direct and an indirect object (usually a person). Common verbs include: bring, buy, get, give, leave, lend, make, offer, owe, pass, pay, promise, refuse, send, show, take, teach, tell, write, etc. There are two possible passive forms. Active sentence: <i>Michael gave the plane tickets to Jill.</i>",
      rows: [
        { usage: "With indirect object as subject of passive verb", example: "<b>Jill</b> was given the plane tickets (by Michael)." },
        { usage: "With direct object as subject of passive verb", example: "<b>The plane tickets</b> were given to Jill (by Michael)." },
      ]
    },
    {
      type: "watch-out",
      items: [
        "In the second structure in the table above, we sometimes omit the preposition before indirect object pronouns. ✓ Sharon's Rolls-Royce was left <b>(to)</b> her by her grandfather.",
        "With the verbs <i>explain</i> and <i>suggest</i>, the preposition before indirect object pronouns cannot be omitted. They cannot be used with the first structure in the table above. ✗ <s>I was explained how to drive the train.</s> ✗ <s>How to drive the train was explained me.</s> ✓ How to drive the train <b>was explained to</b> me.",
      ]
    },
    {
      type: "grammar-point",
      title: "Avoiding the passive",
      intro: "The passive is not normally used with verbs in the present perfect continuous, past perfect continuous, future continuous or future perfect continuous tenses. Various prepositional phrases are used to avoid the passive in these tenses, including the following.",
      rows: [
        { usage: "in progress", example: "✓ Preparations for the flight <b>will be in progress</b> as the President arrives at the airport." },
        { usage: "in training", example: "✓ At the end of this year, I <b>will have been in training</b> as a pilot for four years." },
        { usage: "on display", example: "✓ Vintage cars <b>have been on display</b> in the town centre all this week." },
        { usage: "under consideration", example: "✓ By the time they came to a decision, the problem <b>had been under consideration</b> for some time." },
        { usage: "under construction", example: "✓ The new railway station <b>has been under construction</b> for two years now." },
      ]
    },
    {
      type: "watch-out",
      items: [
        "Some verbs are not usually used in the passive. They include intransitive verbs such as <i>appear</i>, <i>arrive</i>, <i>die</i>, etc.",
        "Many verbs used statively are also not usually used in the passive. They include <i>consist</i>, <i>deserve</i>, <i>fit</i>, <i>have</i>, <i>lack</i>, <i>look</i>, <i>mind</i>, <i>realise</i>, <i>resemble</i>, <i>seem</i>, <i>suit</i>, etc.",
        "The verb <i>let</i> is not used in the passive when it means 'allow', although phrasal verbs with <i>let</i> can be used in the passive. ✓ Alice was clearly guilty, but she <b>was let off</b> with a warning.",
        "Some verbs can be followed by the bare infinitive (without to) in active sentences. They are followed by the full infinitive in passive sentences. These verbs include <i>hear</i>, <i>help</i>, <i>make</i> and <i>see</i>. ✓ We <b>heard</b> Jim <b>say</b> he was going to Albania. (active) ✓ Jim <b>was heard to say</b> he was going to Albania. (passive)",
      ]
    },
    {
      type: "grammar-point",
      title: "Causative: get/have sth done",
      rows: [
        { usage: "Actions we arrange for other people to do for us", example: "Did you finally <b>get your bike fixed</b>?" },
        { usage: "Things we experience (usually negative and not intended)", example: "I heard that Susie <b>had her motorbike stolen</b>." },
      ]
    },
    {
      type: "watch-out",
      items: [
        "In general, <i>get</i> is more informal than <i>have</i> in causative structures.",
        "We can use other verbs instead of <i>get</i> and <i>have</i> with a causative meaning. They include <i>need</i>, <i>want</i> and <i>would like</i>. ✓ <b>I'd like those cars washed</b> by this evening, please.",
        "The structure <i>get sth done</i> can also mean 'finish doing something'. ✓ We'll set off as soon as I've <b>got the car fixed</b>.",
      ]
    },
    {
      type: "grammar-point",
      title: "Causative: get sb to do / have sb do",
      rows: [
        { usage: "Actions we make somebody/something do for us", example: "Did you <b>get Alex to drive you</b> all the way to London?" },
      ]
    },
    {
      type: "grammar-point",
      title: "Causative: get/have sb doing",
      rows: [
        { usage: "Actions we make somebody/something start doing", example: "Don't worry. We'll soon <b>have your car running</b> like new." },
      ]
    },
    {
      type: "watch-out",
      items: [
        "Most of the time, we do not show who does/did an action (the 'agent') in a passive or causative sentence. When we do want to refer to the agent, we use <i>by</i>. ✓ We should get the car looked at <b>by</b> a professional.",
        "When we want to refer to materials or instruments used in a passive or causative sentence, we use <i>with</i>. ✓ The engine is started <b>with</b> a special electronic card instead of a key.",
        "We use other prepositions after some past participles that are used like adjectives. ✓ I am frightened <b>of</b> driving on motorways. ✓ My car is covered <b>in</b> dirt.",
      ]
    },
  ]
};

const _g9 = {
  unit: 9,
  topic: "Modals and semi-modals",
  sections: [
    {
      type: "grammar-note",
      title: "Introduction to Modals and Semi-modals",
      items: [
        "The nine main modals (<i>will, would, can, could, may, might, shall, should, must</i>) have only one form (ie they do not change tense or person) and are followed by a simple or continuous bare infinitive (eg <i>could</i> + <i>do</i>, <i>be doing</i>, <i>have done</i>, <i>have been doing</i>). They can also be followed by a bare infinitive in the passive (eg <i>could</i> + <i>be done</i>, <i>have been done</i>).",
        "Semi-modals have similar meanings to modals. They include: <i>need (to)</i>, <i>ought to</i>, <i>had better</i> and <i>have (got) to</i>.",
        "Some semi-modals, such as <i>had better</i>, do not change tense or person. Others, such as <i>have (got) to</i>, do.",
        "Some semi-modals can be used in combination with modals, producing phrases such as <i>might have to</i>.",
      ]
    },
    {
      type: "grammar-point-grouped",
      title: "Ability",
      groups: [
        {
          group: "Real ability",
          rows: [
            { sub: "Current or general ability", modals: "can, can't", example: "You <b>can't really speak</b> seven languages fluently, <b>can you</b>?" },
            { sub: "Past ability", modals: "could, couldn't", example: "There's no way you <b>could read</b> when you were two!" },
            { sub: "Decisions made now about future ability", modals: "can, can't, could, couldn't", example: "I <b>can get</b> you a paper when I go to the shop, if you like." },
            { sub: "Future ability", modals: "will/won't be able to", example: "One day, maybe, all adults <b>will be able to read</b> and write." },
          ]
        },
        {
          group: "Hypothetical ability",
          rows: [
            { sub: "Current or general hypothetical ability", modals: "could, couldn't", example: "I <b>couldn't go</b> on a quiz show. I'd be too scared!" },
            { sub: "Future hypothetical ability", modals: "could, couldn't", example: "I <b>could go</b> with them to the cinema tomorrow but I won't because I've already seen the film." },
            { sub: "Past hypothetical ability", modals: "could have, couldn't have", example: "They <b>could have asked</b> the Prime Minister much more searching questions. I wonder why they didn't." },
          ]
        },
      ]
    },
    {
      type: "watch-out",
      items: [
        "The full negative form of modals is written as two words, eg <i>could not</i>. The exception is <i>cannot</i>, which is one word.",
        "<i>Can</i> and <i>could</i> cannot be used as infinitives. We can use <i>to be able to</i> instead. ✓ I'd love <b>to be able to</b> come with you to the cinema tomorrow but I just can't.",
        "We don't usually use <i>could</i> for past ability on one occasion. We use <i>was/were able to</i>, <i>managed</i> or <i>succeeded</i>, etc. ✓ Luckily, she <b>was able to</b> finish the article in time. However, with verbs such as <i>see</i>, <i>hear</i>, <i>feel</i> etc we can use <i>could</i> for past ability on one occasion. ✓ I <b>could see</b> that she was tired.",
      ]
    },
    {
      type: "grammar-point-3col",
      title: "Permission",
      headers: ["Usage", "Modals", "Example"],
      rows: [
        { form: "Asking for permission", verbs: "may, could, couldn't, can, can't", example: "<b>Can</b> I <b>finish</b> watching this before I go to bed?" },
        { form: "Giving/refusing permission", verbs: "may, may not, could, couldn't, can, can't", example: "No, you <b>can't</b>." },
      ]
    },
    {
      type: "watch-out",
      items: [
        "<i>May</i> is more polite and formal than <i>could</i>, and <i>could</i> is more polite and formal than <i>can</i>.",
        "We don't usually use modals to talk about past permission. We can use <i>was/were allowed to</i>. ✓ We <b>were allowed to</b> buy one comic each.",
        "However, we do use <i>could</i> to talk about past permission in reported speech. (see Unit 25 for more information) ✓ Mum said we <b>could</b> buy one comic each.",
      ]
    },
    {
      type: "grammar-point-3col",
      title: "Advice",
      headers: ["Usage", "Modals", "Example"],
      rows: [
        { form: "Asking for and giving advice", verbs: "should, shouldn't, ought to, oughtn't to, had better", example: "You <b>should try</b> to get that poem published." },
      ]
    },
    {
      type: "watch-out",
      items: [
        "We can only use <i>hadn't better</i> in questions. ✓ <b>Hadn't</b> you <b>better</b> check that these facts are actually true?",
        "We can also use <i>might/may as well</i> to give advice and make suggestions. This suggests that, although the suggestion is not perfect, there is no better option. ✓ We <b>may as well</b> watch this as there's nothing else on.",
      ]
    },
    {
      type: "grammar-point-3col",
      title: "Criticism",
      headers: ["Usage", "Modals", "Example"],
      rows: [
        { form: "Criticising past behaviour", verbs: "should have, shouldn't have, ought to have, oughtn't to have", example: "You <b>shouldn't have spoken</b> to Mrs Todd like that." },
        { form: "Expressing annoyance at past behaviour", verbs: "could have, might have", example: "You <b>could/might have told</b> me you were going to be late!" },
        { form: "Criticising general behaviour", verbs: "will", example: "He <b>will</b> slam the door every time he goes out." },
        { form: "Criticising a specific example of someone's general behaviour", verbs: "would", example: "You <b>would</b> take the car just when I wanted to go out." },
      ]
    },
    {
      type: "watch-out",
      items: [
        "We can also use <i>might as well</i> to suggest criticism. ✓ I <b>might as well</b> be dead for all you care.",
      ]
    },
    {
      type: "grammar-point-3col",
      title: "Obligation",
      headers: ["Usage", "Modals", "Example"],
      rows: [
        { form: "Current or general obligation", verbs: "must, mustn't, have (got) to, need (to)", example: "You <b>have to be</b> a good communicator to be a press spokesperson." },
        { form: "A lack of current or general obligation", verbs: "don't have to, haven't got to, needn't, don't need (to)", example: "You <b>don't</b> always <b>need to have</b> a degree to become a journalist." },
        { form: "Future obligation", verbs: "will have to, must, mustn't, have (got) to, (will) need (to)", example: "You'<b>ll have to do</b> quite a lot of research before you write this report." },
        { form: "A lack of future obligation", verbs: "don't/won't have to, haven't got to, needn't, don't/won't need (to)", example: "I'm glad we <b>won't have to write</b> any more essays on this course." },
        { form: "Past obligation", verbs: "had to, needed (to)", example: "We <b>had to come up with</b> three questions each." },
        { form: "A lack of past obligation", verbs: "didn't have to, didn't need (to), needn't have", example: "In the past, politicians <b>didn't have to deal with</b> being in a 24-hour media spotlight." },
      ]
    },
    {
      type: "watch-out",
      items: [
        "We are more likely to use <i>must</i> for personal obligation (making our own decision about what we must do) and <i>have to</i> for external obligation (someone else making a decision about what we must do).",
        "Using <i>must</i> for questions is extremely formal. We usually use <i>have to</i>. ✓ <b>Do</b> you <b>have to</b> have a degree to be a journalist?",
        "<i>Mustn't</i> is used for prohibition. <i>Don't have to</i> is used for a lack of obligation.",
        "We can use <i>didn't have to</i> and <i>didn't need to</i> for things that we did or didn't actually do. However, we only use <i>needn't have done</i> for things that we actually did but weren't obliged to do.",
      ]
    },
    {
      type: "grammar-point-3col",
      title: "Degrees of certainty",
      headers: ["Usage", "Modals", "Example"],
      rows: [
        { form: "Certainty (or near certainty) about now, the future or generally", verbs: "will, would, must, can, can't, could, couldn't", example: "'There's someone at the door.' 'That'<b>ll</b> be the postman.' 'It <b>can't be</b>. He's already been.'" },
        { form: "Certainty (or near certainty) about the past", verbs: "will have, won't have, would have, wouldn't have, must have, can't have, couldn't have", example: "'They <b>won't have heard</b> the news, will they?' 'They <b>must have heard</b> by now, surely.'" },
        { form: "Probability about now, the future or generally", verbs: "should, shouldn't, ought to, oughtn't to, may/might well (not), could well, might easily", example: "'The weather <b>should be</b> good tomorrow, shouldn't it?' 'Actually, the forecast said it <b>may well rain</b>.'" },
        { form: "Probability about the past", verbs: "should have, shouldn't have, ought to have, oughtn't to have, may/might well (not) have, might easily (not) have", example: "'Jan <b>should have finished</b> writing her article by now, shouldn't she?' 'She <b>may well have done</b>, but I haven't seen it yet.'" },
        { form: "Possibility about now, the future or generally", verbs: "could, may (not), might, mightn't, may/might/could just", example: "I <b>might (just) have</b> time to get to the library before it closes." },
        { form: "Possibility about the real past", verbs: "could have, may (not) have, might have, mightn't have", example: "Jim <b>might not have checked</b> his e-mail yet." },
      ]
    },
    {
      type: "watch-out",
      items: [
        "<i>should</i> and <i>should have</i> can be used in <i>that</i> clauses after words expressing importance and reactions. ✓ It's strange that you <b>should</b> say that. ✓ Was it necessary that Alan <b>should have been invited</b> to the meeting?",
      ]
    },
  ]
};

const _g11 = {
  unit: 11,
  topic: "Conditionals",
  sections: [
    {
      type: "grammar-point",
      title: "Zero conditional (if/when/whenever + present tense, present tense)",
      rows: [
        { usage: "General or scientific facts and definitions", example: "<b>If</b> you <b>burn</b> fossil fuels, carbon dioxide <b>is produced</b>." },
      ]
    },
    {
      type: "grammar-point",
      title: "First conditional (if + present tense, will + bare infinitive / imperative)",
      rows: [
        { usage: "Real conditions in the present or future and their results in the present or future", example: "<b>If</b> we <b>continue</b> to pollute our planet, future generations <b>will suffer</b>." },
        { usage: "To give conditional instructions", example: "<b>If</b> the people from Greenpeace <b>call</b>, <b>tell</b> them I'll call them back later." },
      ]
    },
    {
      type: "watch-out",
      items: [
        "Other modals and semi-modals can be used instead of <i>will</i> in the result clause in first conditionals. These include <i>be going to</i>, <i>can</i>, <i>could</i>, <i>may</i>, <i>might</i>, <i>shall</i>, <i>should</i>, <i>have to</i> and <i>ought to</i>. ✓ We <b>might</b> prevent disaster if we change the way we live now.",
      ]
    },
    {
      type: "grammar-point",
      title: "Second conditional (if + past simple / past continuous, would + bare infinitive)",
      rows: [
        { usage: "Hypothetical conditions in the present or future and their hypothetical results in the present or future", example: "What <b>would</b> the local government <b>do if</b> there <b>was</b> an earthquake in the area?" },
      ]
    },
    {
      type: "watch-out",
      items: [
        "Other modals can be used instead of <i>would</i> in the result clause in second conditionals. These include <i>might</i> and <i>could</i>. ✓ If the weather was better, we <b>could</b> have a picnic.",
      ]
    },
    {
      type: "grammar-note",
      title: "US vs UK Grammar",
      items: [
        "In British English, we can use both <i>was</i> and <i>were</i> after <i>if</i> with first and third person singular. <i>Were</i> is more common in a formal style. In American English, it is usual to use <i>were</i>. UK: If I <b>was/were</b> a gambler, I'd put money on Jim being late. US: If I <b>were</b> a gambler, I'd put money on Jim being late.",
        "In both British and American English, <i>were</i> is usually used in the phrase <i>If I were you</i>, …",
      ]
    },
    {
      type: "grammar-point",
      title: "Third conditional (if + past perfect, would have + past participle)",
      rows: [
        { usage: "Hypothetical conditions in the past and their results in the past", example: "A lot more people <b>would have been trapped</b> by the flood <b>if</b> there <b>hadn't been</b> a warning." },
      ]
    },
    {
      type: "watch-out",
      items: [
        "Other modals can be used instead of <i>would</i> in the result clause in third conditionals. These include <i>might</i>, <i>could</i> and <i>should</i>. ✓ If you hadn't had a lot of luck, you <b>could</b> have lost all your money.",
      ]
    },
    {
      type: "grammar-point",
      title: "Mixed conditionals",
      rows: [
        { usage: "Hypothetical conditions in the past and their results in the present", example: "You <b>might not be</b> in so much trouble <b>if</b> you <b>hadn't started</b> gambling." },
        { usage: "Hypothetical conditions in the present and their results in the past", example: "<b>If I were</b> you, I <b>would have made</b> Paula buy her own lottery ticket." },
      ]
    },
    {
      type: "grammar-point",
      title: "Inverted conditionals",
      rows: [
        { usage: "More formal form of the first conditional (with should)", example: "<b>Should</b> the drought continue, many people will be forced to leave their villages. ( = <i>If the drought should continue … / If the drought continues …</i> )" },
        { usage: "More formal form of the second conditional", example: "<b>Were</b> we to stop using fossil fuels tomorrow, it would still take decades for the planet to recover. ( = <i>If we were to stop … / If we stopped …</i> )" },
        { usage: "More formal form of the third conditional", example: "<b>Had</b> Charles Darwin not visited the Galapagos Islands, he might never have developed his theory of evolution. ( = <i>If Charles Darwin hadn't visited …</i> )" },
      ]
    },
    {
      type: "watch-out",
      items: [
        "When the verb to be inverted is negative, we put <i>not</i> after the subject. ✓ Had we <b>not</b> attended the meeting, we would have had no idea of the council's plans.",
        "When the if clause comes before the result clause, we usually separate the two clauses with a comma. When the result clause comes first, we do not use a comma. ✓ <i>If you share a car to work,</i> you can save on energy. ✓ You can save on energy if you share a car to work.",
      ]
    },
    {
      type: "grammar-point",
      title: "Other conditional structures",
      rows: [
        { usage: "As/so long as", example: "We'll go up to the mountains this weekend <b>as long as</b> the weather's okay." },
        { usage: "Provided/Providing (that)", example: "You can have a pet <b>provided that</b> you promise to look after it properly." },
        { usage: "On condition (that)", example: "Applications for membership are accepted <b>on condition</b> that applicants are over 18." },
        { usage: "Suppose/Supposing", example: "<b>Supposing</b> the price of oil tripled tomorrow. What do you think would happen?" },
        { usage: "If it wasn't/weren't for + noun", example: "I think I'd be quite lonely <b>if it wasn't/weren't for</b> my dog, Buster." },
        { usage: "Were it not for + noun", example: "<b>Were it not for</b> my dog, Buster, I think I'd be quite lonely." },
        { usage: "But for + noun", example: "<b>But for</b> your help, I wouldn't have been able to quit gambling." },
        { usage: "If it hadn't been for + noun", example: "<b>If it hadn't been for</b> your help, I wouldn't have been able to quit gambling." },
        { usage: "Had it not been for + noun", example: "<b>Had it not been for</b> your help, I wouldn't have been able to quit gambling." },
        { usage: "If … (should) happen to", example: "<b>If</b> you <b>(should) happen to</b> see Davina, ask her whether she would look after the cats this weekend." },
        { usage: "If … should", example: "<b>If</b> you <b>should</b> see Davina, ask her whether she would look after the cats this weekend." },
        { usage: "If … happened to", example: "<b>If</b> you <b>happened to</b> see someone drop litter in the street, what would you do?" },
        { usage: "If … were to", example: "Do you think it would reduce pollution <b>if</b> the government <b>were to</b> introduce a new tax on petrol?" },
        { usage: "If so/not", example: "Are you concerned about the environment? <b>If so</b>, you might be interested in joining Greenpeace." },
        { usage: "Otherwise", example: "You should have your air conditioner serviced, <b>otherwise</b> you'll waste a lot of energy." },
        { usage: "Unless", example: "<b>Unless</b> governments act now, the environment is really going to suffer." },
        { usage: "In case of + noun", example: "<b>In case of</b> fire, leave the building by the nearest emergency exit." },
        { usage: "In case", example: "Take a coat with you <b>in case</b> the weather gets worse." },
      ]
    },
    {
      type: "grammar-point",
      title: "Other uses of if",
      rows: [
        { usage: "To mean 'if it is true that'", example: "<b>If</b> you were at the meeting, why didn't you raise the issue of recycling?" },
        { usage: "To mean 'if you are willing to'", example: "<b>If</b> you'll follow me, I'll show you into the park manager's office." },
        { usage: "To mean 'I'm saying this in case'", example: "<b>If</b> you like zoos, the one in Singapore is fantastic." },
      ]
    },
  ]
};

const _g13 = {
  unit: 13,
  topic: "Unreal time",
  sections: [
    {
      type: "grammar-note",
      title: "Introduction to Unreal Time",
      items: [
        "Sometimes we use the past simple and continuous to refer to the present, the future or a general situation.",
        "Sometimes we use the past perfect simple and continuous to refer to a hypothetical past that didn't actually happen.",
      ]
    },
    {
      type: "watch-out",
      items: [
        "For all of the situations below with the past simple and past continuous, with the verb <i>to be</i> after <i>I</i> and <i>he/she/it</i>, there is a choice of <i>was</i> or <i>were</i>. ✓ I wish I <b>was</b> rich. ✓ I wish I <b>were</b> rich.",
        "Both <i>was</i> and <i>were</i> are common in informal English but <i>were</i> is sometimes more appropriate in formal, written English and is always used in the phrase <i>If I were you …</i>",
      ]
    },
    {
      type: "grammar-point",
      title: "Conditionals",
      rows: [
        { usage: "For hypothetical and unlikely current, future or general conditions (see Unit 11 for more information)", example: "I wouldn't accept a job unless I <b>was</b> absolutely sure what the salary was. If you <b>were travelling</b> to Russia, would you get roubles before you left or when you arrived?" },
        { usage: "For hypothetical past conditions (see Unit 11 for more information)", example: "If I <b>had known</b>, I would have taken some dollars with me. If I <b>had been running</b> the bank, I would have given you an overdraft!" },
      ]
    },
    {
      type: "grammar-point",
      title: "imagine / what if / suppose / supposing",
      rows: [
        { usage: "To consider hypothetical or unlikely current, future or general situations", example: "Supposing you <b>were given</b> ten million euros, what would you spend it on? What if you <b>were walking</b> down the street and you suddenly found a wallet? Would you hand it in?" },
        { usage: "To consider hypothetical or unlikely past situations", example: "Suppose you <b>had won</b> the lottery last night. What would you have done? Imagine you'<b>d been working</b> there for 40 years. What kind of pension would you have got?" },
      ]
    },
    {
      type: "watch-out",
      items: [
        "We can also use a present tense instead of past simple or past continuous after these words and phrases. This indicates that the situation is more likely to happen. ✓ Supposing you <b>become</b> a millionaire, how will it change your life? (more likely) ✓ Supposing you <b>became</b> a millionaire, how would it change your life? (less likely)",
      ]
    },
    {
      type: "grammar-point",
      title: "as if / as though",
      rows: [
        { usage: "For current, future or general untrue, hypothetical comparisons", example: "She acts as if/though she <b>was</b> a millionaire. Colin acts as if/though he <b>were making</b> a million pounds a month." },
        { usage: "For past untrue, hypothetical comparisons", example: "Tony looks as if/though someone <b>had</b> just <b>handed</b> him a million euros. It's almost as if/though they'<b>d been working</b> for free." },
      ]
    },
    {
      type: "watch-out",
      items: [
        "When the verb before <i>as if/though</i> is in a present or present perfect tense, we only use a past tense for comparisons that we know aren't true. ✓ She behaves as if she <b>were</b> really wealthy. ( = She's not really wealthy.)",
        "When the verb before <i>as if/though</i> is in a present or present perfect tense, for comparisons that are possible, we use a present or present perfect tense after <i>as if/though</i>. ✓ She looks as if she'<b>s</b> really wealthy. ( = It's very possible that she is wealthy.)",
        "When the verb before <i>as if/though</i> is in a past tense, we use a past tense after <i>as if/though</i> for comparisons that are either true or hypothetical. ✓ She <b>looked</b> as if she <b>was</b> really wealthy but I knew she wasn't / so maybe she was.",
      ]
    },
    {
      type: "grammar-point",
      title: "Questions and requests",
      rows: [
        { usage: "To make questions and requests more polite", example: "How much money <b>did you want</b> to spend, madam? I <b>was wondering</b> whether you might be able to give me some advice." },
      ]
    },
    {
      type: "grammar-point",
      title: "it's (high/about) time",
      rows: [
        { usage: "To suggest that something should be done now or in the immediate future", example: "It's (high/about) time I <b>got</b> a mortgage. It's (high/about) time we <b>were leaving</b>." },
      ]
    },
    {
      type: "watch-out",
      items: [
        "With <i>It's (high/about) time</i>, there is often no real difference in meaning between past simple and past continuous. ✓ It's time I <b>went</b> home. ✓ It's time I <b>was going</b> home.",
        "We can also use a full infinitive after <i>It's time</i>, but not after <i>It's high/about time</i>. ✓ <b>It's time to think</b> about getting a loan.",
      ]
    },
    {
      type: "grammar-point",
      title: "would rather/sooner",
      rows: [
        { usage: "For current, general or future preference", example: "Jan would rather/sooner we <b>bought</b> a house than <b>carried</b> on renting. Would you rather/sooner I <b>was begging</b> in the streets?" },
        { usage: "For past preference", example: "We'd rather/sooner you <b>hadn't lent</b> Kurdip the money." },
      ]
    },
    {
      type: "watch-out",
      items: [
        "<i>Would rather/sooner</i> + past simple/continuous is only used to talk about preference regarding someone else. When there is no change of subject, we use <i>would rather/sooner</i> + bare infinitive, or <i>would prefer</i> + full infinitive. ✓ She'd rather not <b>borrow</b> any money from you. ✓ She'd prefer not <b>to borrow</b> any money from you.",
      ]
    },
    {
      type: "grammar-point",
      title: "wish / if only",
      rows: [
        { usage: "Wishes about now, the future or generally", example: "Do you wish you <b>had</b> a bigger house? If only I <b>was earning</b> a reasonable salary." },
        { usage: "Wishes about the past", example: "If only I'<b>d bought</b> a lottery ticket this morning. Carla wished she'<b>d been keeping</b> a much closer eye on her investments." },
      ]
    },
    {
      type: "watch-out",
      items: [
        "When <i>wish</i> is in the past simple, it is still followed by the past simple or past continuous for current, future or general wishes. ✓ Simon dearly <b>wished</b> that he <b>had</b> a bigger house. ✓ I sat there and <b>wished</b> I <b>was earning</b> a reasonable salary.",
      ]
    },
    {
      type: "grammar-point-3col",
      title: "Other structures with wish / if only",
      headers: ["Usage", "Form", "Example"],
      rows: [
        { form: "To criticise other people or wish for a situation to be different", verbs: "Wish / If only + would", example: "I wish they <b>would</b> offer me a pay rise." },
        { form: "Wishes about ability or permission", verbs: "Wish / If only + could", example: "I wish I <b>could</b> find a job that pays well." },
        { form: "Wishes about past ability or permission", verbs: "Wish / If only + could + perfect infinitive", example: "I wish I <b>could have got</b> a mortgage with a fixed interest rate." },
        { form: "To express desires in a very formal way", verbs: "Wish + full infinitive", example: "I wish <b>to speak</b> to the bank manager." },
        { form: "To wish someone luck/happiness/success/etc", verbs: "Wish + noun", example: "I wish him every <b>success</b>." },
      ]
    },
    {
      type: "watch-out",
      items: [
        "We do not usually use <i>would</i> when the subject of <i>wish</i> is the same as the subject of <i>would</i>. ✗ <s>Pete wishes he would earn more.</s>",
        "We do not use <i>wish</i> to express desires about a real, possible future. ✓ Pete wishes he earnt / could earn more.",
        "We can use <i>hope</i> instead. ✗ <s>I wish the cheque arrives tomorrow.</s> ✓ I <b>hope</b> the cheque arrives tomorrow.",
      ]
    },
  ]
};

const _g15 = {
  unit: 15,
  topic: "Adjectives and adverbs",
  sections: [
    {
      type: "grammar-point",
      title: "Position of adjectives",
      rows: [
        { usage: "Before a noun", example: "I love your <b>new house</b>." },
        { usage: "After verbs such as <i>appear</i>, <i>be</i>, <i>become</i>, <i>feel</i>, <i>get</i>, <i>grow</i>, <i>look</i>, <i>seem</i>, <i>smell</i>, <i>sound</i>, <i>taste</i> and <i>turn</i>", example: "The material this dress is made out of <b>feels rough</b>." },
      ]
    },
    {
      type: "watch-out",
      items: [
        "The verbs in the table above are not normally followed by adverbs. However, some of them can be followed by adverbs when the verb refers to an action. ✓ She <b>looked angrily</b> at the man behind the counter.",
        "After <i>as</i>, <i>how</i>, <i>so</i>, <i>this</i> ( = so), <i>that</i> ( = so) and <i>too</i>, adjectives come before the article. ✓ I could never live in <b>as crowded a city</b> as Tokyo. ✓ Tokyo's <b>so/that crowded a city</b> that I'd hate to live there. ✓ <b>How crowded a city</b> is Tokyo? ✓ I could never live in Tokyo – it's <b>too crowded a city</b>.",
        "Some adjectives only appear after a verb and not before a noun. These include adjectives beginning with <i>a-</i>, such as <i>afraid</i>, <i>aghast</i>, <i>alike</i>, <i>alive</i>, <i>alone</i>, <i>asleep</i>, <i>awake</i>, etc. ✓ A boy was <b>asleep</b> in the street. ✗ <s>There was an asleep boy in the street.</s>",
      ]
    },
    {
      type: "grammar-point",
      title: "Position of multiple adjectives",
      rows: [
        { usage: "When more than one adjective is used before a noun, they usually appear in the following order, sometimes separated by commas: judgement, size, shape, colour, origin, material, purpose", example: "We've got a <b>lovely little wooden</b> cabin in the mountains. I love your <b>long, red, Chinese, silk</b> curtains. What you need for your living room is a <b>large oak dining</b> table." },
      ]
    },
    {
      type: "grammar-point",
      title: "Adjectives used as nouns",
      rows: [
        { usage: "To refer to members of a general social group", example: "We need to provide better housing for <b>the poor</b>." },
        { usage: "To refer to members of a specific group", example: "When the building collapsed, <b>the injured</b> were rushed to hospital." },
        { usage: "To refer to some nationalities", example: "<b>The French</b> have introduced new housing regulations in Paris." },
      ]
    },
    {
      type: "grammar-point",
      title: "Position of adverbs",
      intro: "There are three places in a clause where an adverb (or adverbial phrase) might appear: at the beginning, at the end and with the verb. Different kinds of adverb go in different positions, and some may go in more than one position.",
      rows: [
        { usage: "Adverbs do not normally appear between a verb and its direct object", example: "✗ <s>They built <b>very quickly</b> the house.</s> ✓ They built the house <b>very quickly</b>." },
        { usage: "With verbs formed using auxiliary verbs, the adverb normally follows the (first) auxiliary", example: "✓ The town <b>has always been</b> popular with tourists. ✓ Our house <b>will probably have been decorated</b> by the time you get there." },
        { usage: "Adverbs of frequency (<i>always</i>, <i>often</i>, etc) follow auxiliary verbs and <i>be</i> and come before other verbs", example: "✓ I'<b>m rarely</b> in the city centre. ✓ I <b>rarely go</b> to the city centre." },
        { usage: "Connecting adverbs usually go at the beginning of a clause", example: "✓ We bought it as an investment; <b>then</b>, all the property prices in the area fell." },
      ]
    },
    {
      type: "grammar-point",
      title: "Comparisons",
      rows: [
        { usage: "Comparative: to compare things or people that are different", example: "Your flat is much <b>bigger</b> and <b>more comfortable</b> than ours." },
        { usage: "Superlative: to compare one member of a group of people or things with the whole group", example: "Mexico City is probably my <b>least favourite</b> city. I think my home town is the <b>best</b> place in the world." },
      ]
    },
    {
      type: "grammar-point",
      title: "Comparative and superlative modifiers",
      rows: [
        { usage: "Modifiers with comparatives: (quite) a bit, a great deal, a good deal, a little, (quite) a lot, any, considerably, even, far, just, little, much, no, slightly, somewhat", example: "This area has become <b>considerably</b> more crowded and <b>far</b> noisier in the last ten years." },
        { usage: "Modifiers with superlatives: by far, far and away, easily, far from, much, quite", example: "If you ask me, Ladybridge is <b>easily</b> the nicest area of town to live in." },
      ]
    },
    {
      type: "grammar-point",
      title: "Structures used to make comparisons",
      rows: [
        { usage: "(nearly/almost/just/half/twice/easily/etc) as … as", example: "Platinum is about <b>twice</b> as expensive <b>as</b> gold." },
        { usage: "not (nearly/quite) as/so … as", example: "Iron is<b>n't nearly as</b> hard <b>as</b> diamond." },
        { usage: "nothing like as … as / nowhere near as … as", example: "Iron is <b>nothing like as / nowhere near as</b> hard <b>as</b> diamond." },
        { usage: "the … , the …", example: "<b>The taller</b> the building, <b>the greater</b> the fire risk." },
      ]
    },
    {
      type: "watch-out",
      items: [
        "✓ Paper <b>is not nearly as</b> strong <b>as</b> plastic. (large difference between the things being referred to)",
        "✓ Gold <b>is not quite as</b> valuable <b>as</b> it was last month. (small difference between the things being referred to)",
      ]
    },
    {
      type: "grammar-point",
      title: "Gradable and ungradable adjectives",
      intro: "<b>Ungradable</b> adjectives describe qualities which are extreme and which cannot be 'more' or 'less', eg <i>amazing, dead, exhausted, fantastic, helpless, impossible, incredible, necessary, perfect, pointless, right, splendid, unacceptable, wonderful, wrong</i>, etc. Other adjectives are <b>gradable</b>.",
      rows: [
        { usage: "Modifiers with ungradable adjectives: <i>absolutely, completely, quite, totally, utterly</i>, etc", example: "After working on the building site all day, Tim was <b>absolutely exhausted</b>." },
        { usage: "Modifiers with gradable adjectives: <i>a bit, a little, fairly, quite, really, too, very</i>, etc", example: "Pete was <b>a bit tired</b> after working on the building site all day, but it wasn't too bad." },
      ]
    },
    {
      type: "watch-out",
      items: [
        "When <i>quite</i> is used with gradable adjectives, it means 'rather, fairly'. When <i>quite</i> is used with ungradable adjectives, it means 'absolutely, completely'. ✓ Our flat's <b>quite</b> nice, but not perfect. ✓ I love your flat! The balconies are <b>quite</b> splendid!",
      ]
    },
    {
      type: "grammar-note",
      title: "Confusing cases",
      items: [
        "Some words have the same form as an adjective and as an adverb and some also form adjectives with <i>-ly</i>. The different forms can have different meanings. These include: fair / fairly, free / freely, late / lately, short / shortly, fast, hard / hardly, near / nearly, straight, fine / finely, high / highly, right / rightly, well, wide / widely",
        "✓ Sandstone is not a very <b>hard</b> material. ✓ I could <b>hardly</b> hear the music. ✓ Hit it too <b>hard</b> and you'll break it. ✗ <s>Hit it too <b>hardly</b> and you'll break it.</s>",
      ]
    },
    {
      type: "watch-out",
      items: [
        "Some adjectives end in <i>–ly</i>, eg <i>costly, deadly, friendly, likely, lively, lonely, lovely</i>. They do not form adverbs, but we often use a phrase such as <i>in a … way</i> to describe how something is done. ✓ She looked at me <b>in a very friendly way</b>.",
      ]
    },
  ]
};

const _g17 = {
  unit: 17,
  topic: "Clauses",
  sections: [
    {
      type: "grammar-point-3col",
      title: "Relative pronouns in relative clauses",
      headers: ["Pronoun", "Use", "Example"],
      rows: [
        { form: "who", verbs: "to refer to people (and animals when we want to give them a personality)", example: "There are a lot of people <b>who</b> hate having injections." },
        { form: "which", verbs: "to refer to things and concepts (and animals when we don't want to give them a personality)", example: "This is the prescription <b>which</b> the doctor gave me." },
        { form: "whom", verbs: "a formal word for <i>who</i>; as an object; must be used directly after a preposition", example: "That's the consultant with <b>whom</b> I spoke." },
        { form: "that", verbs: "a more informal word for <i>who, which, when, where, why</i>; only used in defining relative clauses", example: "This is the prescription <b>that</b> the doctor gave me." },
        { form: "when", verbs: "to refer to time; = <i>in/on/etc which</i>", example: "I'll never forget the day <b>when</b> I broke my finger." },
        { form: "where", verbs: "to refer to place or situation; = <i>in/at/etc which</i>", example: "Harley Street, <b>where</b> she was born, is famous for its clinics." },
        { form: "why", verbs: "often after the word <i>reason</i>; = <i>the reason for which</i>; only used in defining relative clauses", example: "And that's (the reason) <b>why</b> I wanted to become a vet." },
        { form: "whose", verbs: "the possessive of <i>who</i> and <i>which</i>; can also come after a preposition", example: "There are several kids in my class <b>whose</b> parents are doctors." },
        { form: "what", verbs: "= <i>the thing(s) which</i>; only used in defining relative clauses", example: "<b>What</b> I don't understand is why she didn't take her pills." },
      ]
    },
    {
      type: "watch-out",
      items: [
        "When we use a preposition with a relative pronoun, it is more formal to put the preposition before the pronoun. ✓ This is the medical encyclopaedia <b>to which</b> I referred. (very formal) ✓ This is the medical encyclopaedia <b>which</b> I referred <b>to</b>. (less formal)",
        "<i>Which</i> can refer to the whole preceding clause, rather than just the preceding noun. ✓ She announced that she wanted to be a pathologist, <b>which</b> really shocked us. ( = the announcement shocked us)",
      ]
    },
    {
      type: "grammar-note",
      title: "Defining and non-defining relative clauses",
      items: [
        "<b>Defining relative clauses</b> tell us which one of a group of things/people we are talking about. The sentence doesn't usually make complete sense if we remove the relative clause. ✓ That's the doctor <b>who did Karen's operation</b>.",
        "<b>Non-defining relative clauses</b> simply give us more information about someone/something. The sentence makes complete sense if we remove the relative clause. ✓ Dr Lake, <b>who has been working here for over ten years</b>, is a very experienced surgeon.",
        "Defining: We can use <i>that</i> instead of <i>who/which/etc</i>. This is more informal. ✓ That's the doctor <b>that</b> did Karen's operation. | Non-defining: We cannot use <i>that</i> instead of <i>who/which/etc</i>.",
        "Defining: We don't use a comma or commas. ✓ That's the doctor who did Karen's operation. | Non-defining: We must use a comma or commas. ✓ Dr Lake, who is an experienced surgeon, is my uncle.",
        "Defining: We can omit the relative pronoun if it is the object. ✓ That's the doctor <b>who</b> she saw. (more formal) ✓ That's the doctor she saw. (less formal) | Non-defining: We cannot omit the relative pronoun. ✓ Dr Lake, <b>who</b> is my uncle, is 50 years old.",
        "Defining: <i>When</i>, <i>where</i> and <i>why</i> can be omitted. ✓ I'll never forget <b>the day when I broke</b> my arm. ✓ I'll never forget <b>the day I broke</b> my arm. | Non-defining: We do not use <i>why</i>. We cannot omit <i>where</i> and <i>when</i>. ✓ Harley Street, <b>where</b> she was born, is famous for its clinics.",
        "Defining: We cannot put a number or a determiner such as <i>some</i>, <i>none</i>, <i>much</i> and <i>many</i> before <i>of which</i> or <i>of whom</i>. | Non-defining: We can put a number or a determiner such as <i>some</i>, <i>none</i>, <i>much</i> and <i>many</i> before <i>of which</i> or <i>of whom</i>. ✓ I bought some drugs, <b>some of which</b> were expensive.",
      ]
    },
    {
      type: "grammar-point",
      title: "Participle clauses",
      rows: [
        { usage: "To replace a relative clause", example: "She was the nurse <b>looking</b> after the patients at the time. (<b>who was looking</b>) / The boy <b>taken</b> to hospital was 13 years old. (<b>who was taken</b>)" },
        { usage: "With prepositions and conjunctions", example: "After <b>giving</b> blood, I went home. / After <b>having given</b> blood, I went home." },
        { usage: "To explain the reason for something", example: "<b>Being</b> frightened of needles, Tony was not looking forward to the injection. / <b>Having had</b> several operations before, Ali wasn't particularly nervous this time." },
        { usage: "To talk about actions happening at the same time", example: "<b>Sitting</b> in the waiting room, I could hear the sound of the dentist drilling." },
        { usage: "To talk about actions happening in sequence", example: "<b>Having found</b> an optician close to the office, I made an appointment for that evening." },
        { usage: "As an alternative passive form", example: "<b>Given</b> an aspirin, I began to feel better. (<b>when/because I was given</b> an aspirin)" },
        { usage: "As an alternative conditional form", example: "<b>Given</b> the chance, I'd definitely study pharmacology. (<b>if I were given</b> the chance)" },
      ]
    },
    {
      type: "watch-out",
      items: [
        "When the participle clause doesn't have its own subject, the clause and the rest of the sentence must both refer to the same subject. ✓ <b>Standing</b> in the hot, crowded room, <b>I</b> began to feel dizzy. ( = I was standing) ✗ <s><b>Standing</b> in the hot, crowded room, <b>my head</b> began to feel heavy.</s> ( = my head wasn't standing)",
      ]
    },
    {
      type: "grammar-point",
      title: "Infinitive clauses",
      rows: [
        { usage: "To start a sentence", example: "<b>To be</b> a successful surgeon <b>is</b> the dream of many young children. ( = <b>It is</b> the dream of many young children <b>to be</b> a successful surgeon.)" },
        { usage: "After the verb <i>to be</i>", example: "My job was <b>to give</b> the patients their lunch." },
      ]
    },
    {
      type: "grammar-point",
      title: "Concession clauses",
      rows: [
        { usage: "although / though / even though", example: "<b>Even though</b> she'd put on sun cream, Tamsin got burnt. / Tamsin got burnt, <b>though</b> she had put on sun cream. / Tamsin put on sun cream. She still got burnt, <b>though</b>." },
        { usage: "in spite of / despite ( + noun or -ing)", example: "<b>Despite</b> putting on sun cream, Tamsin got burnt. / <b>In spite of</b> the fact that she put on sun cream, Tamsin got burnt. / <b>Despite</b> the sun cream, Tamsin still got burnt." },
        { usage: "while/whereas", example: "<b>While</b> antibiotics are effective against bacteria, they do not work against viruses. Bacterial infections can be cured with antibiotics, <b>whereas</b> viruses cannot." },
        { usage: "however", example: "Penicillin is a powerful antibiotic. <b>However</b>, some people are allergic to it. / Penicillin is a powerful antibiotic. Some people are allergic to it, <b>however</b>. / Penicillin is a powerful antibiotic. Some people, <b>however</b>, are allergic to it." },
        { usage: "other phrases and structures", example: "<b>Try as he might</b>, he couldn't put up with the pain. / <b>However hard he (might have) tried</b>, he couldn't put up with the pain. / <b>Hard though/as he tried</b>, he couldn't put up with the pain. / <b>Much as he tried</b>, he couldn't put up with the pain." },
      ]
    },
    {
      type: "watch-out",
      items: [
        "With <i>in spite of / despite</i> + -ing, both parts of the sentence must refer to the same subject.",
        "<i>Even if</i> is used to emphasise that it doesn't matter if something happens or is true, another situation remains the same. ✓ <b>Even if</b> they found a cure for cancer tomorrow, it would take several years before it was available.",
        "<i>Even if</i> is used to suggest that something may or may not happen, whereas <i>even though</i> suggests that the action actually takes place. ✓ <b>Even if</b> she tried to give her an injection, she couldn't. ( = She probably hasn't tried yet.) ✓ <b>Even though</b> she tried to give her an injection, she couldn't. ( = She tried and was unsuccessful.)",
      ]
    },
  ]
};

const _g19 = {
  unit: 19,
  topic: "Complex Sentences",
  sections: [
    {
      type: "grammar-point",
      title: "Inversions with negative adverbial words and phrases",
      intro: "With negative adverbial words and phrases at the start of a clause, we use inversion (auxiliary verb + subject).",
      rows: [
        { usage: "hardly (... when)", example: "Hardly had the new law been introduced when the mistake was realised." },
        { usage: "scarcely (... when)", example: "Scarcely had I opened the front door when I heard a noise from the kitchen." },
        { usage: "barely (... when)", example: "Barely had we solved one problem when another one arose." },
        { usage: "no sooner (... than)", example: "No sooner had the alarm gone off than the police arrived." },
        { usage: "only", example: "Only in an emergency should you dial 999." },
        { usage: "only after", example: "Only after I had checked that the burglars had left did I call the police." },
        { usage: "only when", example: "Only when we agree what measures are needed will we be able to solve the problem." },
        { usage: "not until", example: "Not until the next election will we know how the public feel about this news." },
        { usage: "at no time/point/stage", example: "At no point did I realise that he was the Prime Minister." },
        { usage: "in no way", example: "In no way does this decision represent a change in government policy." },
        { usage: "little", example: "Little did Ralph know that the burglar was still inside his house." },
        { usage: "never", example: "Never have I heard such a ridiculous suggestion!" },
        { usage: "not", example: "Not one vote did the proposal receive." },
        { usage: "not only (... but also/too)", example: "Not only has this government failed but it has also stolen ideas from other parties." },
        { usage: "on no account", example: "On no account should you try to tackle a burglar yourself." },
        { usage: "rarely", example: "Rarely do the newspapers present a balanced view of current events." },
        { usage: "seldom", example: "Seldom do people leaving prison stay out of trouble." },
        { usage: "under no circumstances", example: "Under no circumstances will we accept an increase in working hours." },
      ]
    },
    {
      type: "watch-out",
      items: [
        "With 'not until' and 'only' (when/after), you have to be careful to invert the verb and subject in the main clause. Example: Not until / Only when this government realises what a mistake it is making will things change.",
      ]
    },
    {
      type: "grammar-point",
      title: "Inversions with adverbial expressions of place (+ verb of movement/position)",
      rows: [
        { usage: "here", example: "Here comes the Minister now." },
        { usage: "there", example: "There stood the next king of England." },
        { usage: "adverbial phrases", example: "At the top of society are the aristocracy. / Beside the Town Hall stood the public library. / In this prison are housed some of the most dangerous criminals. / On the corner of the street sat a homeless man." },
        { usage: "participle phrases", example: "Running down the road was a young man with a woman's handbag under his arm." },
      ]
    },
    {
      type: "grammar-note",
      title: "Other inversions",
      items: [
        "<b>In short answers using so, neither and nor:</b> 'I voted for Smith.' 'Did you? So did I.' / 'I don't believe a word this government says.' 'No, neither do I.'",
        "<b>After as, than, so and such:</b> I am very worried about bullying in the school, as are a lot of the parents. / The police in this area make more arrests than do officers in other parts of the country. / So rare is burglary here that many people don't bother to lock their doors. / Such public interest was there in the story that it was on the front pages of the newspapers.",
        "<b>In conditional sentences (see Unit 11):</b> Were the Foreign Secretary to resign, it would cause serious problems for the Prime Minister. / Should the Foreign Secretary resign, it would cause serious problems for the Prime Minister. / Had I known about the crime problem, I would never have moved here.",
      ]
    },
    {
      type: "grammar-point",
      title: "Cleft sentences",
      rows: [
        { usage: "all (that)", example: "All that Keith wanted was to get his money back. / To get his money back was all that Keith wanted." },
        { usage: "It is/was ... who/which/that", example: "It was Carol who/that called the police." },
        { usage: "the ... thing", example: "The first thing is to check to see what's missing. / To check to see what's missing is the first thing." },
        { usage: "the day/etc when/that & the day/etc on/in/at which", example: "The year when this government came to power was 2006. / 2006 was the year when this government came to power. / 2006 was the year in which this government came to power." },
        { usage: "the person who/that", example: "The person who stole the money was Thomas. / Thomas was the person who stole the money." },
        { usage: "the place where", example: "The place where the Queen stays in Scotland is Balmoral Castle. / Balmoral Castle is the place where the Queen stays in Scotland." },
        { usage: "the reason (why)", example: "The reason (why) I joined this political party was to make a difference. / To make a difference was the reason (why) I joined this political party." },
        { usage: "the thing that", example: "The thing that annoys me is the boss's attitude. / The boss's attitude is the thing that annoys me." },
        { usage: "what", example: "What annoys me is the boss's attitude. / The boss's attitude is what annoys me." },
        { usage: "what ... do/did", example: "What Churchill did was bring people together." },
        { usage: "what happens/happened is/was ...", example: "What happened was that a witness saw the man leave the house." },
      ]
    },
    {
      type: "watch-out",
      items: [
        "With 'it is/was ...' in cleft sentences, there are two possibilities when the subject is a pronoun. They differ in formality. Formal: 'It was I who stole the money.' Informal: 'It was me that stole the money.'",
      ]
    },
    {
      type: "grammar-point",
      title: "so / such / too / enough",
      rows: [
        { usage: "so", example: "It all happened so quickly that I didn't have time to see the man's face. / This problem has gone on for so long that I don't think they'll ever find a solution. / It was so terrible a crime that the judge sentenced him to life in prison. / There is so much crime around here that I'm thinking of moving." },
        { usage: "such", example: "This problem has gone on for such a long time that I don't think they'll ever find a solution. / It was such a terrible crime that the judge sentenced him to life in prison. / There is such a lot of crime around here that I'm thinking of moving." },
        { usage: "too", example: "I had too little time to get a good look at his face. / This problem seems to be too difficult for them to solve. / The police responded too slowly to have any chance of catching the burglar." },
        { usage: "enough", example: "There just aren't enough police officers on the streets. / The police weren't quick enough to catch the burglar. / The police didn't respond quickly enough to catch the burglar." },
      ]
    },
    {
      type: "watch-out",
      items: [
        "So and such can also be used in various ways without a 'that' clause. E.g. There's so much crime around here these days. / Politics is so boring! / You're such a bully!",
        "We only use 'too' to describe something that is more than necessary and which has a negative effect. It is not the same as very, really, extremely, etc.",
        "It is not necessary to add an extra object in sentences such as: This problem seems to be too difficult for them to solve. (NOT: '...to solve it')",
        "Enough usually comes before nouns and after adjectives and adverbs.",
      ]
    },
  ]
};

const _g21 = {
  unit: 21,
  topic: "Noun Phrases",
  sections: [
    {
      type: "grammar-note",
      title: "Countable nouns",
      items: [
        "Countable nouns have a singular and plural form. E.g. That painting is amazing. / Those paintings are dreadful.",
        "Some countable nouns have irregular plurals, e.g. person/people, mouse/mice.",
        "Some countable nouns do not change in their plural form, e.g. the sheep is ..., the sheep are ...",
        "With hyphenated countable nouns, we usually form the plural by pluralising the key word, e.g. brothers-in-law and over-achievers.",
        "With organisations and groups of people (e.g. group/team/etc), it often makes no difference whether the verb is singular or plural. E.g. The government is/are not doing anything to help the arts.",
      ]
    },
    {
      type: "words-box",
      title: "Group phrases for countable nouns (ending in 'of')",
      content: "a flock of birds/sheep / a herd of cows/elephants / a pack of cards/dogs / a bunch of flowers/grapes/keys / a set of encyclopaedias/keys"
    },
    {
      type: "grammar-note",
      title: "Singular uncountable nouns",
      items: [
        "Singular uncountable nouns only have a singular form. They only take verbs in the singular. E.g. Is the information reliable?",
        "Common examples: advice, blood, bread, furniture, hair, information, jewellery, knowledge, luggage, milk, money, news, permission, respect, water.",
      ]
    },
    {
      type: "words-box",
      title: "Partitive phrases for singular uncountable nouns",
      content: "a bar of chocolate/soap / a bit of help/advice / a blade of grass / a block of concrete / a breath of fresh air / a drop of water / a grain of salt/sand / a gust of wind / a loaf of bread / a lump of sugar / a piece of bread/information / a scrap of paper / a sheet of paper / a slice of bread/cheese / a speck of dust/dirt / a spot of ink"
    },
    {
      type: "grammar-note",
      title: "Plural uncountable nouns",
      items: [
        "Plural uncountable nouns only have a plural form. They only take verbs in the plural. E.g. The scissors aren't on the table.",
        "With plural uncountable nouns, we can sometimes use 'a pair of', usually when we see something as having two parts/legs/etc, e.g. a pair of binoculars/trousers/scissors/etc.",
        "Common examples: arms, binoculars, cattle, clothes, congratulations, earnings, glasses, goods, groceries, jeans, odds, pants, pliers, premises, pyjamas, regards, remains, savings, scales, scissors, shorts, surroundings, thanks, tights, trousers, valuables.",
      ]
    },
    {
      type: "watch-out",
      items: [
        "Some uncountable nouns end in -s but are singular, e.g. diabetes, news, physics, politics.",
        "Many nouns are countable with one meaning and uncountable with another meaning. These include: cake, chicken, chocolate, damage, glass, hair, paper, time, wood, work. E.g. 'The table is made of wood.' (uncountable = the material) vs 'It's a picture of a local wood.' (countable = a small forest)",
        "Some nouns which are usually uncountable are used as countable nouns in certain expressions, e.g. a knowledge of, a great help.",
      ]
    },
    {
      type: "words-box",
      title: "Quantifiers only used with countable nouns",
      content: "a couple of (the) / a number of / another (of the) / both (of) (the) / each (of the) / either (of the) / every / neither (of the) / the entire / the whole (of) (the) / (a) few (of the) / only a few (of the) / half (of) (the) / many (of the) / several (of the)"
    },
    {
      type: "words-box",
      title: "Quantifiers only used with singular uncountable nouns",
      content: "an amount of / a great deal of / a little (of the) / little (of the) / much (of the) / only a little (of the)"
    },
    {
      type: "words-box",
      title: "Quantifiers used with all nouns",
      content: "all (of) (the) / a lot of / lots of (the) / any (of the) / enough (of the) / more (of the) / most (of the) / no / none (of the) / plenty of (the) / some (of the)"
    },
    {
      type: "grammar-note",
      title: "Quantifier notes",
      items: [
        "a few = some; few = not many; only a few = not many",
        "little + countable noun = small; little + uncountable noun = not much; a little + uncountable noun = some",
      ]
    },
    {
      type: "grammar-point",
      title: "Indefinite articles: a/an",
      intro: "Used with singular countable nouns:",
      rows: [
        { usage: "talking about one thing, but not being specific", example: "I'd like to go to a concert tonight but there's nothing good on." },
        { usage: "mentioning something for the first time", example: "I've had a great idea!" },
        { usage: "talking about things generally (formal)", example: "A poet sees the world differently. (= Poets see ...)" },
      ]
    },
    {
      type: "watch-out",
      items: [
        "We use 'a' before a consonant sound, and 'an' before a vowel sound. It is the sound and not the spelling that is important (e.g. a unique experience, an umbrella).",
        "We use a/an to show what group someone or something belongs to, or to classify it/him/her. E.g. Liz is a modernist.",
      ]
    },
    {
      type: "grammar-point",
      title: "Definite article: the",
      rows: [
        { usage: "singular countable nouns – being specific", example: "Is that the band you were talking about?" },
        { usage: "singular countable nouns – talking generally (formal)", example: "The guitar is one of the oldest musical instruments. (= Guitars are ...)" },
        { usage: "plural countable and uncountable nouns – being specific", example: "The scales are balanced to symbolise equality." },
        { usage: "singular uncountable nouns – being specific", example: "Who did the publicity for the show?" },
        { usage: "with some adjectives to mean groups of people – talking generally", example: "Pop music has always appealed more to the young than the old." },
      ]
    },
    {
      type: "watch-out",
      items: [
        "We often use 'the' with physical things that are unique (e.g. the moon, the Queen).",
        "We often use 'the' with superlatives (e.g. the best) and cardinal numbers (e.g. the first).",
        "We can use 'the' to mean the well-known or the famous. E.g. I bumped into Damian Hirst, the artist, in the supermarket. (= the well-known artist)",
      ]
    },
    {
      type: "grammar-point",
      title: "Zero article: no article at all",
      rows: [
        { usage: "plural countable and uncountable nouns – talking generally", example: "Don't let your young child use scissors unsupervised." },
        { usage: "singular uncountable nouns – talking generally", example: "An artist always needs inspiration." },
      ]
    },
    {
      type: "watch-out",
      items: [
        "We often use no article for concepts (i.e. not physical things), e.g. society, space, nature.",
      ]
    },
    {
      type: "grammar-note",
      title: "Articles by category",
      items: [
        "<b>Time</b> — a/an: in an hour, in a second | the: in the 1840s, in the winter, in the afternoon | zero: in 2010, in winter, in December, on Tuesday, at night",
        "<b>People and work</b> — a/an: have a job, work as a teacher, I met a very nice American last night | the: the King, the Principal, the President, the British | zero: Russians, become President, go to work, be at work, have work to do",
        "<b>Places</b> — a/an: Is there a beach near here? | the: the Himalayas, the Pacific Ocean, the Seine, the Earth, the Antarctic, the USA, the UK, the Scilly Isles | zero: Mount Everest, Berlin, America, Antarctica, Jupiter, Fleet Street, Lake Michigan, Mykonos",
        "<b>Public buildings</b> — a/an: Is there a bank near here? | the: the bank, the post office, go to the hospital/prison/school (as a visitor) | zero: go to school/hospital/prison (as a student/patient/prisoner)",
        "<b>Entertainment and sport</b> — a/an: Play us a song!, I've got a tennis ball. | the: play the guitar, the media, on the radio, go to the cinema, watch the TV | zero: play tennis, play guitar, listen to music, on television, watch TV",
        "<b>Organisations</b> — a/an: Does Switzerland have an army? | the: the BBC, the police, the emergency services, the United Nations | zero: NATO",
        "<b>Education</b> — a/an: have a lesson, take an exam | the: be in the first year | zero: geography, be in class/year/form 5",
        "<b>Travel</b> — a/an: take a taxi, catch a bus/train | the: in the car/taxi, on the bus/plane | zero: on foot, go home, go by car/plane",
        "<b>Health</b> — a/an: have a cold/cough/headache/toothache/stomach ache | the: have the flu/measles | zero: have flu/measles/toothache/stomach ache",
      ]
    },
  ]
};

const _g23 = {
  unit: 23,
  topic: "Verbal Complements",
  sections: [
    {
      type: "words-box",
      title: "Verb + -ing form",
      content: "admit / adore / advocate / appreciate / avoid / can't help / carry on / compare / consider / contemplate / delay / deny / detest / discuss / dislike / end up / endure / enjoy / escape / face / fancy / feel like / finish / foresee / give up / include / involve / justify / keep (on) / mention / mind / miss / postpone / practise / put off / recommend / resent / resist / risk / suggest / take up"
    },
    {
      type: "grammar-note",
      title: "Verb + -ing form: example",
      items: [
        "Sue admitted feeling rather upset.",
      ]
    },
    {
      type: "watch-out",
      items: [
        "Many verbs are followed by a preposition + -ing form. E.g. Damien insisted on going to the party. / I'm looking forward to meeting your brother.",
        "The verbs feel, hear, see, notice, overhear and watch can also be followed by an object + the bare infinitive (without to). E.g. 'I saw Martha cross the road.' (= I saw all of it.) vs 'I saw Martha crossing the road.' (= I saw part of it.)",
        "When the verb and the gerund refer to different subjects, we can use an object pronoun or a possessive pronoun to make it clear. E.g. Do you mind me/my going out with your sister?",
      ]
    },
    {
      type: "words-box",
      title: "Verb + object + -ing form",
      content: "catch / feel / find / glimpse / hear / notice / observe / overhear / see / smell / watch"
    },
    {
      type: "grammar-note",
      title: "Verb + object + -ing form: example",
      items: [
        "They caught him taking money from the till.",
      ]
    },
    {
      type: "words-box",
      title: "Verb + full infinitive",
      content: "afford / agree / aim / appear / apply / arrange / aspire / attempt / beg / cease / choose / claim / come / dare / decide / demand / deserve / desire / expect / fail / happen / help / hesitate / hope / learn / manage / need / neglect / offer / opt / plan / prepare / pretend / promise / refuse / resolve / rush / seem / strive / tend / undertake / volunteer / vote / wait / want / work / yearn"
    },
    {
      type: "grammar-note",
      title: "Verb + full infinitive: example",
      items: [
        "Can you afford to buy that car?",
      ]
    },
    {
      type: "words-box",
      title: "Verb + object + full infinitive",
      content: "advise / allow / ask / assign / assist / authorise / beg / cause / challenge / choose / command / compel / convince / dare / decide / defy / desire / employ / empower / enable / encourage / expect / force / free / help / hire / inspire / instruct / intend / invite / lead / motivate / move / need / nominate / order / permit / persuade / pick / prepare / prompt / qualify / raise / recommend / recruit / remind / request / select / send / signal / teach / tell / tempt / trust / want / warn"
    },
    {
      type: "grammar-note",
      title: "Verb + object + full infinitive: example",
      items: [
        "My sister advised me to tell Jim the truth.",
      ]
    },
    {
      type: "words-box",
      title: "Verb + object + bare infinitive",
      content: "help / let / make / feel / hear / notice / overhear / see / watch"
    },
    {
      type: "grammar-note",
      title: "Verb + object + bare infinitive: example",
      items: [
        "The teacher let the class leave early.",
      ]
    },
    {
      type: "watch-out",
      items: [
        "In passive forms, 'make' is followed by the full infinitive. E.g. Mum made me apologise to my sister. → I was made to apologise to my sister.",
        "The verbs 'dare' and 'need' can be used as modals, in which case they are followed by the bare infinitive. E.g. I don't dare tell Simone what happened. / You needn't invite Ralph if you'd rather not.",
      ]
    },
    {
      type: "words-box",
      title: "Verb (+ object) + infinitive or -ing form with little or no change in meaning",
      content: "begin / bother / can't bear/stand / continue / hate / intend / love / prefer / start"
    },
    {
      type: "grammar-point-3col",
      title: "Verb (+ object) + infinitive or -ing form with a change in meaning",
      headers: ["Verb", "Infinitive meaning & example", "-ing form meaning & example"],
      rows: [
        { form: "consider / imagine", verbs: "believe; think something is/was — I've always considered him to be a friend.", example: "think about — We're considering getting engaged." },
        { form: "forget", verbs: "not do something you were planning to do — I forgot to ask Brian about the wedding.", example: "not be able to remember a past event — I'll never forget asking Helen to marry me." },
        { form: "go on", verbs: "stop one action or subject of discussion and start another — We chatted about the football and then he went on to tell me about his divorce.", example: "continue — How can you go on living with Michael?" },
        { form: "like", verbs: "be in the habit of doing; think it right to do — I like to eat with my family once a week.", example: "enjoy — I don't like being spoken to in such a rude manner." },
        { form: "mean", verbs: "intend — I'm sure Rania didn't mean to upset you.", example: "involve — Being in love means never having to say you're sorry." },
        { form: "regret", verbs: "be sorry about giving someone bad news — We regret to inform you that the hotel is full.", example: "be sorry about what (has) happened — Do you regret splitting up with Alec?" },
        { form: "remember", verbs: "do something you are/were planning to do — Did you remember to order the flowers?", example: "think of a past event — I don't remember asking for your opinion." },
        { form: "stop", verbs: "interrupt an action to do something else — Why didn't you stop to think before you acted?", example: "stop an action — Will you please just stop telling me what to do?" },
        { form: "try", verbs: "make an effort to achieve something — Try not to forget her birthday.", example: "do something as an experiment to solve a problem — You could try buying her some flowers." },
      ]
    },
    {
      type: "grammar-note",
      title: "Preparatory it",
      items: [
        "With some verbs, such as find, think or consider, it is often possible to use 'it' as a preparatory object. E.g. I consider it incredible that James and Alice are still together.",
      ]
    },
    {
      type: "grammar-note",
      title: "Subjunctive",
      items: [
        "The subjunctive is a verb form which does not take -s in the third person singular.",
        "It is possible to use the subjunctive in 'that' clauses after words suggesting that something is necessary or preferable.",
        "The subjunctive forms for 'be' are: I be, you be, etc.",
        "We can also use 'should' instead of the subjunctive.",
        "Examples: The doctor suggested that Sam take some time off work. / It is very important that Greg not know about this. / It's absolutely essential that I be informed as soon as the President arrives. / The doctor suggested that Sam (should) take some time off work.",
      ]
    },
  ]
};

const _g25 = {
  unit: 25,
  topic: "Reporting",
  sections: [
    {
      type: "grammar-note",
      title: "Reported speech: tense changes",
      items: [
        "If the reporting verb is in the past (e.g. said), we usually have to change the tense of what the person actually said. The general rule is go back one tense but there are some exceptions.",
        "With past perfect simple and continuous, there is no tense change.",
      ]
    },
    {
      type: "grammar-point",
      title: "Reported speech: tense changes table",
      rows: [
        { usage: "present simple → past simple", example: "Sam doesn't play hockey very often. → Fiona said that Sam didn't play hockey very often." },
        { usage: "present continuous → past continuous", example: "I'm winning! → Carol shouted to us that she was winning." },
        { usage: "present perfect simple → past perfect simple", example: "I've never been given a trophy before! → Paul said that he'd never been given a trophy before." },
        { usage: "present perfect continuous → past perfect continuous", example: "They've been playing for four hours. → She told us that they'd been playing for four hours." },
        { usage: "past simple → past perfect simple", example: "We lost the match. → Finally he told us that they had lost the match." },
        { usage: "past continuous → past perfect continuous", example: "We were winning until half-time. → She said they had been winning until half-time." },
      ]
    },
    {
      type: "watch-out",
      items: [
        "When something is still true, we can change tense but we don't have to. E.g. The article said that fishing is/was the most popular sport in Britain.",
        "When we are reporting a scientific or historical fact, we don't usually change tense. E.g. Alan told me that Queen Victoria hated Gladstone, the Prime Minister.",
        "Although we can usually leave out 'that', we cannot leave it out after the verbs 'reply' and 'shout'. E.g. I replied that going swimming in such cold water was a ridiculous idea.",
      ]
    },
    {
      type: "grammar-note",
      title: "Reported speech: modal and semi-modal changes",
      items: [
        "If the reporting verb is in the past (e.g. said), we sometimes have to change modals and semi-modals.",
        "Could, would, should, ought to, had better and need do not change. E.g. 'I could swim when I was three,' said Lizzie. → Lizzie said that she could swim when she was three.",
      ]
    },
    {
      type: "grammar-point",
      title: "Reported speech: modal changes table",
      rows: [
        { usage: "will / shall", example: "→ would" },
        { usage: "can", example: "→ could" },
        { usage: "must", example: "→ must / had to / be to / should" },
        { usage: "have to", example: "→ had to" },
        { usage: "don't/doesn't have to", example: "→ didn't have to" },
        { usage: "mustn't", example: "→ mustn't / be not to / shouldn't" },
        { usage: "may", example: "→ might" },
        { usage: "am/is/are going to", example: "→ was/were going to" },
      ]
    },
    {
      type: "watch-out",
      items: [
        "When expressing obligation, 'must' in direct speech usually changes to 'had to', 'be to' or 'should' in reported speech. E.g. 'You must do what the referee tells you,' said the coach. → The coach said that we had to / were to / should do what the referee told us.",
        "When expressing obligation, 'mustn't' can become 'mustn't', 'be not to' or 'shouldn't'. E.g. 'You mustn't cheat under any circumstances!' → We were told that we mustn't / were not to / shouldn't cheat under any circumstances.",
        "Must doesn't usually change to 'had to' or 'should' when expressing probability. E.g. 'It must have felt wonderful when they won!' said Dave. → Dave said that it must have felt wonderful when they won.",
      ]
    },
    {
      type: "grammar-point",
      title: "Reported speech: pronoun and determiner changes",
      rows: [
        { usage: "my → his/her", example: "It's my turn. → Eddie pointed out that it was his turn." },
        { usage: "this/that + noun → the/that", example: "I bought this fishing rod yesterday. → Linda said she'd bought the fishing rod the day before." },
        { usage: "this/that + verb → it/that", example: "This is a great game! → Tony said it was a great game." },
        { usage: "these/those + noun → the/those", example: "Look at these baseball gloves! → Alison told us to look at the baseball gloves." },
        { usage: "these/those + verb → they", example: "These are the best baseball gloves I've ever seen. → She said they were the best baseball gloves she'd ever seen." },
        { usage: "verb + these/those (no object) → them", example: "I've had these for years. → She said she'd had them for years." },
      ]
    },
    {
      type: "watch-out",
      items: [
        "We do not need to change time words/phrases when the information is still true at the moment of speaking/writing. E.g. 'I'll see you at the match next week,' said Dave. → Dave told us he'd see us at the match next week.",
        "In narratives, writers often use direct speech time words and phrases for dramatic effect. E.g. Carlo turned to Fraser and said that, here, now, they would decide who the champion was once and for all.",
      ]
    },
    {
      type: "grammar-point",
      title: "Reported speech: time and place changes",
      rows: [
        { usage: "here", example: "→ there" },
        { usage: "tomorrow", example: "→ the following/next day, the day after" },
        { usage: "tonight", example: "→ that night" },
        { usage: "yesterday", example: "→ the day before, the previous day" },
        { usage: "now, at the moment", example: "→ then, at that moment" },
        { usage: "next week/year/etc", example: "→ the following/next week, the week after" },
        { usage: "last week/year/etc", example: "→ the week before, the previous week" },
        { usage: "ago", example: "→ before, previously, earlier" },
      ]
    },
    {
      type: "grammar-note",
      title: "Reported questions",
      items: [
        "With reported questions, we make the same changes regarding tense, pronoun and time and place words/phrases as we do with reported speech.",
        "In reported questions we don't use the question form or question marks.",
        "Questions beginning with have, do, be and modals: 'Do you want to play Monopoly?' asked Cheryl. → Cheryl asked if/whether we wanted to play Monopoly.",
        "Questions with what, who, which, when, where, why and how: 'What time did the match start?' asked Jimmy. → Jimmy asked Andrea what time the match had started.",
      ]
    },
    {
      type: "watch-out",
      items: [
        "The structure 'question word + infinitive' is very common with reported questions. E.g. She asked me how to tune a piano. / He asked me what to do.",
      ]
    },
    {
      type: "grammar-point",
      title: "Reported commands and requests",
      rows: [
        { usage: "Commands — tell/command/order/instruct + sb + full infinitive", example: "'Put the cricket bats away!' said Alex. → Alex told me to put the cricket bats away." },
        { usage: "Requests — ask + sb + full infinitive", example: "'Would you put the cricket bats away?' asked Alex. → Alex asked me to put the cricket bats away." },
      ]
    },
    {
      type: "words-box",
      title: "Common reporting verbs",
      content: "accuse / agree / apologise / ask / beg / claim / command / cry / deny / explain / instruct / order / promise / refuse / reply / respond / say / shout / state / suggest / tell / whisper"
    },
    {
      type: "grammar-note",
      title: "Reporting verbs note",
      items: [
        "Different reporting verbs take different grammatical patterns. Some verbs can take more than one pattern, e.g. deny doing, deny sth, deny (that) ...",
      ]
    },
  ]
};

export const ALL_GRAMMAR = [
  _g1, _g3, _g5, _g7, _g9, _g11, _g13, _g15, _g17,
  _g19, _g21, _g23, _g25,
];
