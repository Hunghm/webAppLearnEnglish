export const GRAMMAR_B1 = [
  {
    unit: 1,
    title: "Present time",
    subtitle: "present simple, present continuous, present perfect simple, present perfect continuous, stative verbs",
    sections: [
      {
        name: "Present simple",
        form: {
          intro: null,
          rows: [
            ["statement", "I/you/we/they <b>travel</b> ...", "He/she/it <b>travels</b> ..."],
            ["negative", "I/you/we/they <b>don't travel</b> ...", "He/she/it <b>doesn't travel</b> ..."],
            ["question", "<b>Do</b> I/you/we/they <b>travel</b> ...?", "<b>Does</b> he/she/it <b>travel</b> ...?"]
          ]
        },
        useTable: {
          headers: ["Use", "Example"],
          rows: [
            ["Current habits", "Toby <b>walks</b> to work."],
            ["To talk about how often things happen", "Angela <b>doesn't visit</b> us very often."],
            ["Permanent situations", "Carlo <b>works</b> in a travel agent's."],
            ["States", "<b>Do</b> you <b>have</b> an up-to-date passport?"],
            ["General truths and facts", "Poland <b>is</b> in the European Union."]
          ]
        },
        notes: [
          {
            type: "watchOut",
            bullets: [
              "We can also use <i>do/does</i> in present simple statements for emphasis.<br>✓ 'You don't like going by bus, do you?' 'Actually, I <b>do like</b> going by bus for short distances.'<br>✓ The bus isn't quicker than the train but it <b>does stop</b> right outside the factory."
            ]
          }
        ]
      },
      {
        name: "Present continuous",
        form: {
          intro: null,
          rows: [
            ["statement", "I <b>am driving</b> ... You/we/they <b>are driving</b> ... He/she/it <b>is driving</b> ..."],
            ["negative", "I'<b>m not driving</b> ... You/we/they <b>aren't driving</b> ... or You'<b>re</b>/we'<b>re</b>/they'<b>re not driving</b> ...<br>He/she/it <b>isn't driving</b> ... or He'<b>s</b>/she'<b>s</b>/it'<b>s not driving</b> ..."],
            ["question", "<b>Am</b> I <b>driving</b> ...? <b>Are</b> you/we/they <b>driving</b> ...? <b>Is</b> he/she/it <b>driving</b> ...?"]
          ]
        },
        useTable: {
          headers: ["Use", "Example"],
          rows: [
            ["Actions happening now", "Mike <b>is driving</b> to work at the moment."],
            ["Temporary series of actions", "Taxi drivers <b>aren't stopping</b> at the train station because of the roadworks."],
            ["Temporary situations", "<b>Are</b> they <b>staying</b> in a hotel near the Olympic stadium?"],
            ["Changing and developing situations", "Holidays abroad <b>are becoming</b> increasingly popular."],
            ["Annoying habits (usually with <i>always</i>)", "Dad <b>is always cleaning</b> the car when I want to use it!"]
          ]
        },
        notes: []
      },
      {
        name: "Present perfect simple",
        form: {
          intro: "<i>have/has</i> + past participle",
          rows: [
            ["statement", "I/you/we/they <b>have flown</b> ...", "He/she/it <b>has flown</b> ..."],
            ["negative", "I/you/we/they <b>haven't flown</b> ...", "He/she/it <b>hasn't flown</b> ..."],
            ["question", "<b>Have</b> I/you/we/they <b>flown</b> ...?", "<b>Has</b> he/she/it <b>flown</b> ...?"]
          ]
        },
        useTable: {
          headers: ["Use", "Example"],
          rows: [
            ["Situations and states that started in the past and are still true", "She'<b>s had</b> her motorbike for over six years."],
            ["A series of actions continuing up to now", "We'<b>ve travelled</b> by taxi, bus, plane and train – all in the last twenty-four hours!"],
            ["Completed actions at a time in the past which is not mentioned", "<b>Have</b> you ever <b>flown</b> in a helicopter?"],
            ["Completed actions where the important thing is the present result", "I'<b>ve booked</b> the coach tickets."]
          ]
        },
        notes: [
          {
            type: "watchOut",
            bullets: [
              "Phrases such as <i>It's the first/second/etc time</i> ... are followed by the present perfect simple.<br>✓ It's the second time I'<b>ve been</b> on a plane."
            ]
          },
          {
            type: "usVsUk",
            bullets: [
              "Speakers of American English often use the past simple in situations where speakers of British English would use the present perfect simple.<br><b>US:</b> We already <b>saw</b> the Sphinx.<br><b>UK:</b> We've already <b>seen</b> the Sphinx.",
              "Speakers of American English use <i>gotten</i> as the past participle of the verb 'get', except when 'get' means 'have' or 'possess'. Speakers of British English only ever use <i>got</i>.<br><b>US:</b> We've already <b>gotten</b> Dan a new backpack for his summer vacation.<br><b>UK:</b> We've already <b>got</b> Dan a new rucksack for his summer holiday."
            ]
          }
        ]
      },
      {
        name: "Present perfect continuous",
        form: {
          intro: null,
          rows: [
            ["statement", "I/you/we/they <b>have been travelling</b> ...", "He/she/it <b>has been travelling</b> ..."],
            ["negative", "I/you/we/they <b>haven't been travelling</b> ...", "He/she/it <b>hasn't been travelling</b> ..."],
            ["question", "<b>Have</b> I/you/we/they <b>been travelling</b> ...?", "<b>Has</b> he/she/it <b>been travelling</b> ...?"]
          ]
        },
        useTable: {
          headers: ["Use", "Example"],
          rows: [
            ["Actions continuing up to the present moment", "We <b>have been driving</b> for hours. Can't we have a break soon?"],
            ["Actions stopping just before the present moment", "I'm out of breath because I'<b>ve been running</b> to get here in time."]
          ]
        },
        notes: [
          {
            type: "watchOut",
            bullets: [
              "The present perfect continuous is often used with words and phrases like <i>all day/week/year</i>/etc, <i>for</i>, <i>since</i>, <i>just</i>, etc.<br>✓ We'<b>ve been walking</b> for hours and I need a rest.",
              "The present perfect continuous is <b>not</b> normally used with the words <i>ever</i> and <i>never</i>.<br>✓ <b>Have</b> you <b>ever flown</b> in a helicopter before?<br>✗ <s><b>Have</b> you ever <b>been flying</b> in a helicopter before?</s>",
              "Sometimes there is very little difference in meaning between the present perfect simple and the present perfect continuous and sometimes there is a difference in meaning.<br>✓ I <b>have worked</b> at the airport for four years. = I <b>have been working</b> at the airport for four years.<br>✓ I <b>have read</b> that book about cruise ships. (I have finished it.) I <b>have been reading</b> that book about cruise ships. (I have not finished it.)"
            ]
          }
        ]
      },
      {
        name: "Stative verbs",
        form: null,
        intro: "Stative verbs are not normally used in continuous tenses because they don't describe actions.<br>✓ I <b>see</b> what you mean.<br>✗ <s>I <b>am seeing</b> what you mean.</s>",
        useTable: {
          headers: ["Use<br>Stative verbs often refer to:", "Example"],
          rows: [
            ["thinking", "<b><i>believe, imagine, know, mean, think, understand</i></b>"],
            ["existence", "<b><i>be, exist</i></b>"],
            ["emotions", "<b><i>hate, like, love, need, prefer, satisfy, want</i></b>"],
            ["the human senses", "<b><i>hear, see, smell, sound, taste</i></b>"],
            ["appearance", "<b><i>appear, look, resemble, seem</i></b>"],
            ["possession and relationships between things", "<b><i>belong to, consist of, have, include, involve, own</i></b>"]
          ]
        },
        notes: [
          {
            type: "watchOut",
            bullets: [
              "Some verbs (such as <i>be, have, imagine, look, see, smell, taste, think</i>) are stative with one meaning and non-stative with another meaning.<br>✓ <b>Do</b> you <b>have</b> your plane ticket with you? (state: possession)<br>✓ <b>Are</b> you <b>having</b> lunch at the moment? (action: eating)"
            ]
          }
        ]
      }
    ]
  },
  {
    unit: 3,
    title: "Past time",
    subtitle: "past simple, past continuous, past perfect simple, past perfect continuous, would, used to / be/get used to",
    sections: [
      {
        name: "Past simple",
        form: {
          intro: null,
          rows: [
            ["statement", "I/you/he/she/it/we/they <b>played</b> ...", "Note: Irregular verbs do not take 'ed' in the past simple."],
            ["negative", "I/you/he/she/it/we/they <b>didn't play</b> ..."],
            ["question", "<b>Did</b> I/you/he/she/it/we/they <b>play</b> ...?"]
          ]
        },
        useTable: {
          headers: ["Use", "Example"],
          rows: [
            ["Single completed actions", "Tom and I <b>played</b> a game of chess and he <b>won</b>."],
            ["Habits in the past", "<b>Did</b> you <b>collect</b> stamps when you were younger?"],
            ["Permanent situations in the past", "A famous footballer <b>lived</b> in our house before we bought it."],
            ["General truths and facts about the past", "Crosswords <b>didn't become</b> popular until the 1930s."],
            ["The main events in a story", "The referee <b>blew</b> the whistle and Simon <b>passed</b> the ball to James, who <b>ran</b> towards the goal."]
          ]
        },
        notes: [
          {
            type: "watchOut",
            bullets: [
              "We can also use <i>did</i> in past simple statements for emphasis.<br>✓ 'Why didn't you win your match yesterday?' 'I <b>did win</b>. Who told you I didn't?'<br>✓ We lost 5-0 but at least we <b>did get</b> into the final."
            ]
          }
        ]
      },
      {
        name: "Past continuous",
        form: {
          intro: null,
          rows: [
            ["statement", "I/he/she/it <b>was playing</b> ...", "You/we/they <b>were playing</b> ..."],
            ["negative", "I/he/she/it <b>wasn't playing</b> ...", "You/we/they <b>weren't playing</b> ..."],
            ["question", "<b>Was</b> I/he/she/it <b>playing</b> ...?", "<b>Were</b> you/we/they <b>playing</b> ...?"]
          ]
        },
        useTable: {
          headers: ["Use", "Example"],
          rows: [
            ["Actions happening at a particular moment in the past", "At five o'clock, I <b>was reading</b> my new book."],
            ["Temporary situations in the past", "Greg <b>was living</b> in London at the time."],
            ["Annoying past habits (usually with <i>always</i>)", "When we were young, my brother <b>was always borrowing</b> my toys."],
            ["Actions in progress over a period of time", "Daniel <b>was playing</b> video games all morning yesterday."],
            ["Two actions in progress at the same time", "<b>Were</b> Ulla and her friends <b>playing</b> Monopoly while we <b>were playing</b> Draughts?"],
            ["Background information in a story", "The sun <b>was shining</b> and the birds <b>were singing</b>. Lisa opened the window and looked out."]
          ]
        },
        notes: [
          {
            type: "watchOut",
            bullets: [
              "When one action in the past interrupts another action in progress, we use the past simple and the past continuous together.<br>✓ I <b>was playing</b> on my computer when it suddenly <b>crashed</b>.",
              "We do <b>not</b> use the past continuous for regular or repeated actions in the past.<br>✓ When we were on holiday, we <b>played</b> volleyball every day.<br>✗ <s>When we were on holiday, we <b>were playing</b> volleyball every day.</s>",
              "We do not usually use stative verbs in continuous tenses."
            ]
          }
        ]
      },
      {
        name: "Past perfect simple",
        form: {
          intro: "<i>had</i> + past participle",
          rows: []
        },
        useTable: {
          headers: ["Use", "Example"],
          rows: [
            ["Situations and states before the past", "We'<b>d lived</b> next to the gym for a couple of months before I decided to join."],
            ["Completed actions before a moment in the past", "I'<b>d already bought</b> the computer game when I saw it was cheaper in another shop."],
            ["Completed actions where the important thing is the result at a moment in the past", "We didn't feel like playing Scrabble because we <b>had</b> just <b>finished</b> a long game of Monopoly."]
          ]
        },
        notes: [
          {
            type: "watchOut",
            bullets: [
              "There is often little or no difference in meaning between the past perfect simple and the past simple.<br>✓ We'<b>d lived</b> next to the gym for a couple of months before I decided to join.<br>✓ We <b>lived</b> next to the gym for a couple of months before I decided to join.",
              "Phrases such as <i>It was the first/second/etc time</i> ... are followed by the past perfect simple.<br>✓ It was the second time I'<b>d been</b> on a plane."
            ]
          }
        ]
      },
      {
        name: "Past perfect continuous",
        form: {
          intro: null,
          rows: [
            ["statement", "I/you/he/she/it/we/they <b>had been playing</b> ..."],
            ["negative", "I/you/he/she/it/we/they <b>hadn't been playing</b> ..."],
            ["question", "<b>Had</b> I/you/he/she/it/we/they <b>been playing</b> ...?"]
          ]
        },
        useTable: {
          headers: ["Use", "Example"],
          rows: [
            ["Actions continuing up to a moment in the past", "When you saw us, we <b>had been running</b> for six miles – and we still had a mile to go!"],
            ["Actions stopping just before a moment in the past", "Sarah looked tired because she <b>had been exercising</b> all morning."]
          ]
        },
        notes: []
      },
      {
        name: "would",
        form: { intro: "<i>would</i> + bare infinitive", rows: [] },
        useTable: {
          headers: ["Use", "Example"],
          rows: [
            ["Past habits, particularly for the distant past", "When I was very young, my grandfather <b>would</b> take me to the park to play."]
          ]
        },
        notes: [
          {
            type: "watchOut",
            bullets: [
              "We don't often use <i>would</i> in questions or negative statements with this meaning. In negative statements, we can use <i>would never</i>.<br>✓ We <b>would never</b> play games together as a family when I was growing up."
            ]
          }
        ]
      },
      {
        name: "used to",
        form: {
          intro: "<i>used to</i> + bare infinitive",
          rows: [
            ["statement", "I/you/he/she/it/we/they <b>used to</b> train three times a week."],
            ["negative", "I/you/he/she/it/we/they <b>didn't use to</b> be good at football.<br>I/you/he/she/it/we/they <b>never used to</b> be so good at football.<br>I/you/he/she/it/we/they <b>used not to</b> be good at football."],
            ["question", "<b>Did</b> I/you/he/she/it/we/they <b>use to</b> play hockey here?"]
          ]
        },
        useTable: {
          headers: ["Use", "Example"],
          rows: [
            ["Past habits and states, particularly for the distant past", "My mother <b>used to</b> play a lot of squash before I was born."]
          ]
        },
        notes: [
          {
            type: "watchOut",
            bullets: [
              "To talk about a past state, we can use <i>used to</i>, but <b>not</b> <i>would</i>.<br>✓ We <b>used to</b> have a house that was right next to the park.<br>✗ <s>We <b>would</b> have a house that was right next to the park.</s>"
            ]
          }
        ]
      },
      {
        name: "be/get used to",
        form: { intro: "<i>be/get used to</i> + <i>-ing</i> form / noun", rows: [] },
        useTable: {
          headers: ["Use", "Example"],
          rows: [
            ["A situation that is familiar or no longer strange", "I didn't like being the goalkeeper at first but now I'<b>m used to</b> it."]
          ]
        },
        notes: [
          {
            type: "watchOut",
            bullets: [
              "When we want to talk about the process of becoming familiar with something, we use <i>get used to</i>.<br>✓ I'm gradually <b>getting used to</b> being in a new team."
            ]
          }
        ]
      }
    ]
  },
  {
    unit: 5,
    title: "Future time / present tenses in time clauses / prepositions of time and place",
    subtitle: "will/won't and be going to, present continuous, present simple, future perfect simple, future continuous, future perfect continuous, present tenses in time clauses, prepositions of time and place",
    sections: [
      {
        name: "Expressing the future: will/won't and be going to",
        form: null,
        intro: "There is sometimes little difference in meaning between <b>will</b> and <b>be going to</b>. <b>Will</b> is generally more formal than <b>be going to</b>.",
        useTable: {
          headers: ["Use", "Example"],
          rows: [
            ["Facts about the future", "The website <b>will</b> come online next week. (more formal)<br>The website's <b>going to</b> come online next week. (more informal)"],
            ["Predictions not based on present evidence", "In the future, everyone <b>will</b> have their own flying car. (more formal)<br>In the future, everyone <b>is going to</b> have their own flying car. (more informal)"],
            ["Decisions made at the moment of speaking", "I've decided! I <b>won't</b> get a new DVD player just yet.<br>I've decided! I'<b>m not going to</b> get a new DVD player just yet."]
          ]
        },
        subTables: [
          {
            intro: "Sometimes it is more appropriate to use <b>will</b> rather than <b>be going to</b>.",
            useTable: {
              headers: ["Use", "Example"],
              rows: [
                ["Offers and suggestions", "I'<b>ll</b> help you with your physics homework, if you like."],
                ["Requests", "<b>Will</b> you help me with my physics homework?"],
                ["Most first conditional sentences", "If we get a computer, we'<b>ll</b> be able to surf the Internet."]
              ]
            }
          },
          {
            intro: "Sometimes it is more appropriate to use <b>be going to</b> rather than <b>will</b>.",
            useTable: {
              headers: ["Use", "Example"],
              rows: [
                ["Plans and intentions (which you already have when you speak)", "I'<b>m going to</b> be a famous doctor one day!"],
                ["Predictions based on present evidence", "It sounds like the plane'<b>s going to</b> take off in a few minutes."]
              ]
            }
          }
        ],
        notes: [
          {
            type: "watchOut",
            bullets: [
              "With offers and suggestions in the question form, we do not use <b>will</b> with <i>I</i> and <i>we</i>. We use <b>shall</b>.<br>✓ <b>Shall</b> I help you with your physics homework?<br>✗ <s><b>Will</b> I help you with your physics homework?</s>"
            ]
          }
        ]
      },
      {
        name: "Expressing the future: present continuous",
        form: null, intro: null,
        useTable: {
          headers: ["Use", "Example"],
          rows: [["Arrangements made before the moment of speaking", "<b>Are</b> they <b>installing</b> the new computers next week?"]]
        },
        notes: []
      },
      {
        name: "Expressing the future: present simple",
        form: null, intro: null,
        useTable: {
          headers: ["Use", "Example"],
          rows: [
            ["Timetables, arrangements and fixed events", "The bus to the science museum <b>leaves</b> at 8 o'clock tomorrow morning."],
            ["After <i>if</i> in first conditional and zero conditional sentences", "If technology <b>continues</b> to advance so quickly, what will life be like in a hundred years?"],
            ["After certain time expressions", "We'll find out as soon as we <b>get</b> to the lab."]
          ]
        },
        notes: []
      },
      {
        name: "Expressing the future: future perfect simple",
        form: { intro: "<i>will/won't</i> + <i>have</i> + past participle", rows: [] },
        useTable: {
          headers: ["Use", "Example"],
          rows: [["Actions which are completed some time between now and a point in the future", "I'<b>ll have finished</b> my chemistry homework by the time you come home."]]
        },
        notes: []
      },
      {
        name: "Expressing the future: future continuous",
        form: { intro: "<i>will/won't</i> + <i>be</i> + <i>-ing</i> form", rows: [] },
        useTable: {
          headers: ["Use", "Example"],
          rows: [
            ["Actions in progress at a point in the future", "This time next week, I'<b>ll be taking</b> my biology exam."],
            ["Habits or repeated actions at a point in the future", "In the future, we'll all <b>be flying</b> around using jet-packs."]
          ]
        },
        notes: []
      },
      {
        name: "Expressing the future: future perfect continuous",
        form: { intro: "<i>will/won't</i> + <i>have</i> + <i>been</i> + <i>-ing</i> form", rows: [] },
        useTable: {
          headers: ["Use", "Example"],
          rows: [["Actions in progress up to a point in the future", "At seven o'clock, I'<b>ll have been doing</b> my chemistry homework for three hours!"]]
        },
        notes: []
      },
      {
        name: "Present tenses in time clauses",
        form: null,
        intro: "In time clauses, we do not use <i>will</i> or <i>be going to</i> immediately after some time words and phrases. We use a present tense to talk about the future.",
        useTable: {
          headers: ["Time words and phrases", "Example"],
          rows: [
            ["<b>when</b>", "It'll be wonderful <b>when</b> scientists <b>find</b> / <b>have found</b> a cure for cancer."],
            ["<b>as soon as</b>", "Let me know <b>as soon as</b> your new computer <b>arrives</b> / <b>has arrived</b>."],
            ["<b>before</b>", "It'll be several years <b>before</b> we <b>send</b> / we'<b>ve sent</b> a manned mission to Mars."],
            ["<b>after</b>", "Let's go for a pizza <b>after</b> we <b>go</b> / <b>have been</b> to the natural history museum."],
            ["<b>until / till</b>", "The rocket won't be launched <b>until</b> they <b>do</b> / <b>have done</b> a final check."],
            ["<b>while</b>", "Think of me <b>while</b> you <b>travel</b> / <b>are travelling</b> to the Moon!"],
            ["<b>once</b>", "We'll stop for petrol <b>once</b> we <b>pass</b> / we'<b>ve passed</b> Cambridge."]
          ]
        },
        notes: []
      },
      {
        name: "Prepositions of time and place",
        form: null, intro: null,
        useTable: {
          headers: ["Category", "Key prepositions"],
          rows: [
            ["Time", "(<i>from</i>) Monday <b>to</b> Friday, <b>on</b> Monday, <b>on</b> my birthday, <b>in</b> July, <b>on</b> September 20th, <b>in</b> 2008, <b>in</b> (the) summer, <b>at</b> three o'clock, <b>in/for</b> an hour, <b>at</b> the moment, <b>in</b> the morning/afternoon/evening, <b>at</b> night, <b>in/on</b> time, just <b>in</b> time for, <b>at</b> the beginning/end of, <b>at</b> the age of, next/last week"],
            ["Place", "turn right <b>at</b> a place, sit <b>on</b> sth, go <b>in(to)</b> a building, wait <b>in(side)</b> a building, arrive <b>in</b> London/Greece, arrive <b>at</b> the stadium, <b>in/on/at</b> the corner (of), come/go/walk/etc <b>to</b> a place, <b>next to/beside/by</b> the building, <b>at/on</b> the front/back of, <b>in front of/behind</b> the station, go <b>out of</b> a building, go <b>towards</b> the station, <b>between</b> the two buildings, <b>opposite</b> the station"]
          ]
        },
        notes: [
          {
            type: "usVsUk",
            bullets: [
              "Speakers of American English do not always use <b>on</b> before days of the week.<br><b>US:</b> We've got a biology test Monday/<b>on</b> Monday.<br><b>UK:</b> We've got a biology test <b>on</b> Monday.",
              "Speakers of American English often say 'Monday through Friday'.<br><b>US:</b> I'm going to be on a field trip Monday <b>through</b> Friday.<br><b>UK:</b> I'm going to be on a field trip <b>from</b> Monday <b>to</b> Friday."
            ]
          }
        ]
      }
    ]
  },
  {
    unit: 7,
    title: "Articles / countable and uncountable nouns / quantifiers",
    subtitle: "",
    sections: [
      {
        name: "Indefinite article",
        form: { intro: "There are two indefinite articles in English: 'a' and 'an'. 'An' is used before vowel sounds.", rows: null },
        useTable: {
          headers: ["Use", "Example"],
          rows: [
            ["Singular countable nouns (when we are not being specific or when we mention something for the first time)", "<i>There's <b>a</b> good film on TV tonight.</i>"]
          ]
        },
        notes: [
          {
            type: "watchOut",
            bullets: [
              "Whether we use 'an' or 'a' depends on the sound, <b>not</b> the spelling.<br>✓ <i>The news is on TV in <b>an</b> hour.</i><br>✗ <s><i>The news is on TV in <b>a</b> hour.</i></s><br>✓ <i>Being in a film was <b>a</b> unique experience for me.</i><br>✗ <s><i>Being in a film was <b>an</b> unique experience for me.</i></s>"
            ]
          }
        ]
      },
      {
        name: "Definite article",
        form: { intro: "There is one definite article in English: 'the'.", rows: null },
        useTable: {
          headers: ["Use", "Example"],
          rows: [
            ["Singular countable nouns (when we are being specific)", "<i>Where's <b>the</b> DVD you were talking about?</i>"],
            ["Singular countable nouns (when we are talking generally)", "<i><b>The</b> radio seemed amazing to people at first.</i>"],
            ["Plural countable nouns (when we are being specific)", "<i>I didn't believe <b>the</b> rumours about the prime minister.</i>"],
            ["Uncountable nouns (when we are being specific)", "<i>I followed <b>the</b> advice my lawyer gave me.</i>"]
          ]
        },
        notes: [
          {
            type: "watchOut",
            bullets: [
              "The way we say 'the' changes depending on the sound at the start of the next word. Before a consonant sound, we pronounce it /ðə/. Before a vowel sound, we pronounce it /ði/.",
              "We often use 'the' when we are talking about something there is only one of.<br>✓ <i><b>the</b> sky, <b>the</b> sun, <b>the</b> moon, <b>the</b> Prince of Wales, <b>the</b> North Pole, <b>the</b> World Cup</i>"
            ]
          }
        ]
      },
      {
        name: "Zero article",
        form: { intro: "We often don't use an article at all. This is sometimes called the zero article.", rows: null },
        useTable: {
          headers: ["Use", "Example"],
          rows: [
            ["Plural countable nouns (when we are talking generally)", "<i>Journalists often face dangerous situations.</i>"],
            ["Uncountable nouns (when we are talking generally)", "<i>News travels fast these days.</i>"]
          ]
        },
        notes: []
      },
      {
        name: "Articles in phrases and expressions",
        form: { intro: "Notice how we use articles in the following phrases and expressions.", rows: null },
        useTable: {
          headers: ["Use", "Example"],
          rows: [
            ["Time", "definite: <i>in <b>the</b> 1990s, in (<b>the</b>) summer, in <b>the</b> morning</i><br>zero: <i>in 2008, in June, on Friday, at night</i>"],
            ["People and work", "indefinite: <i>have <b>a</b> job, work as <b>a</b> ...</i><br>definite: <i><b>the</b> queen, <b>the</b> French</i><br>zero: <i>become president, go to work</i>"],
            ["Places", "definite: <i><b>the</b> Alps, <b>the</b> Atlantic Ocean, <b>the</b> River Thames, <b>the</b> USA, <b>the</b> UK</i><br>zero: <i>Mount Everest, Paris, America, Oxford Street, Lake Superior, Crete</i>"],
            ["Entertainment and sport", "definite: <i><b>the</b> media, on <b>the</b> radio, play <b>the</b> guitar, go to <b>the</b> cinema</i><br>zero: <i>listen to music, on television, play tennis/football</i>"],
            ["Organisations", "definite: <i><b>the</b> army, <b>the</b> police, <b>the</b> fire brigade</i>"],
            ["Education", "definite: <i>go to <b>the</b> school (as a visitor)</i><br>zero: <i>go to school (as a student), maths</i>"],
            ["Travel", "indefinite: <i>take <b>a</b> taxi</i><br>definite: <i>on <b>the</b> bus</i><br>zero: <i>on foot, go home, go by bus</i>"],
            ["Health", "indefinite: <i>have <b>a</b> cold/headache/cough</i><br>definite: <i>have (<b>the</b>) flu/measles</i><br>zero: <i>have toothache</i>"],
            ["Public buildings", "definite: <i><b>the</b> bank, go to <b>the</b> hospital/prison (as a visitor)</i><br>zero: <i>go to hospital/prison/church (as a patient/prisoner/worshipper)</i>"]
          ]
        },
        notes: [
          {
            type: "usVsUk",
            bullets: [
              "Speakers of American English do not usually use <i>hospital</i> without an article.<br><b>US:</b> <i>The ambulance took Simon to <b>the</b> hospital.</i><br><b>UK:</b> <i>The ambulance took Simon to hospital.</i>"
            ]
          }
        ]
      },
      {
        name: "Countable and uncountable nouns",
        form: null,
        useTable: {
          headers: ["Type", "Example"],
          rows: [
            ["Countable nouns<br>• Use <i>a, the, some, many</i><br>• Use a singular or plural verb", "<i>I want to be <b>a journalist</b>.</i><br><i>There are <b>some</b> good <b>articles</b> in the paper.</i><br><i>How <b>many channels</b> do you get?</i>"],
            ["Uncountable nouns<br>• Use <i>the, some, much</i><br>• Use a singular verb", "<i>Did you hear <b>the news</b>?</i><br><i>How <b>much information</b> do we have?</i><br><i>Your <b>advice was</b> very useful.</i>"],
            ["Common uncountable nouns", "<i>advice, coffee, furniture, glass, hair, homework, information, knowledge, luggage, money, news, paper, work</i>"]
          ]
        },
        notes: [
          {
            type: "watchOut",
            bullets: [
              "Most uncountable nouns are singular, but a few are plural: <i>clothes, scissors, jeans, spectacles, trousers, groceries</i>, etc.<br>✓ <i>Oh, no! My new clothes <b>are</b> dirty!</i>",
              "Some nouns are countable with one meaning and uncountable with another.<br>✓ <i>Do you think you could bring me <b>a</b> clean <b>glass</b>?</i> (countable)<br>✓ <i>We should make computer monitors out of recycled <b>glass</b>.</i> (uncountable)"
            ]
          }
        ]
      },
      {
        name: "Quantifiers",
        form: null,
        useTable: {
          headers: ["Quantifier", "Use", "Example"],
          rows: [
            ["<i>many</i>", "countable nouns, usually in negative statements and questions", "<i>There aren't <b>many</b> programmes on TV that I find interesting.</i>"],
            ["<i>much</i>", "uncountable nouns, usually in negative statements and questions", "<i>My dad never shows <b>much</b> interest in the news.</i>"],
            ["<i>a lot of / lots of</i>", "countable and uncountable nouns in positive statements", "<i>That film has won <b>a lot of / lots of</b> awards.</i>"],
            ["<i>a few</i>", "countable nouns, means 'some'", "<i>There have been <b>a few</b> scandals in the papers recently.</i>"],
            ["<i>a little</i>", "uncountable nouns, means 'some'", "<i>They say that <b>a little</b> knowledge is a dangerous thing.</i>"],
            ["<i>few</i>", "countable nouns, means 'not many'", "<i>Richard has <b>few</b> interests outside work.</i>"],
            ["<i>little</i>", "uncountable nouns, means 'not much'", "<i>The police have <b>little</b> information about the robbery.</i>"]
          ]
        },
        notes: [
          {
            type: "watchOut",
            bullets: [
              "The phrase 'only a few' means 'not many'. The phrase 'only a little' means 'not much'.<br>✓ <i>There are <b>only a few</b> programmes on TV that I like watching.</i>"
            ]
          }
        ]
      }
    ]
  },
  {
    unit: 9,
    title: "Conditionals: zero, first, second, third, mixed, inverted / unless, in case, as/so long as, provided (that)",
    subtitle: "",
    sections: [
      {
        name: "Zero conditional",
        form: { intro: null, rows: [["Form", "<i>if</i> + present simple, present simple"]] },
        useTable: {
          headers: ["Use", "Example"],
          rows: [["General or scientific facts and definitions", "<i>If you <b>have</b> faith in something, you <b>believe</b> in something you cannot prove.</i>"]]
        },
        notes: []
      },
      {
        name: "First conditional",
        form: { intro: null, rows: [["Form", "<i>if</i> + a present tense, <i>will</i> + bare infinitive"]] },
        useTable: {
          headers: ["Use", "Example"],
          rows: [["Real or likely conditions in the present or future and their results", "<i>If you <b>have</b> a birthday party, you'<b>ll get</b> loads of cool presents!</i><br><i>If you'<b>re working</b> till half past six, we'<b>ll have</b> dinner at about eight.</i>"]]
        },
        notes: [
          {
            type: "watchOut",
            bullets: [
              "We can also use <i>may, might, can, could, shall, should, ought to, have to</i> instead of <i>will</i>.<br>✓ <i>If you <b>have</b> a birthday party, you <b>might get</b> loads of cool presents!</i>",
              "We can use <i>should</i> + bare infinitive instead of present simple to suggest the situation is possible but unlikely.<br>✓ <i>If you <b>should bump</b> into Alex at the concert, you'll be able to get a lift home.</i>",
              "We can also give instructions: <i>if</i> + a present tense, imperative.<br>✓ <i>If you <b>decide</b> to have a birthday party, <b>tell</b> me!</i>"
            ]
          }
        ]
      },
      {
        name: "unless, in case, as/so long as, provided (that)",
        form: null,
        useTable: {
          headers: ["Word or Phrase", "Meaning", "Example"],
          rows: [
            ["<i>unless</i>", "'except if' or 'if…not'", "<i>I'll be there at six <b>unless</b> I get delayed.</i>"],
            ["<i>in case</i>", "'because he/she/it/etc might'", "<i>Let's take our wellies <b>in case</b> it's muddy.</i>"],
            ["<i>as/so long as</i>", "'if' or 'only if'", "<i><b>As long as</b> I'm happy, my parents don't care what job I do.</i>"],
            ["<i>provided (that)</i>", "'if' or 'only if'", "<i><b>Provided (that)</b> I'm happy, my parents don't care what job I do.</i>"]
          ]
        },
        notes: []
      },
      {
        name: "Second conditional",
        form: { intro: null, rows: [["Form", "<i>if</i> + past simple or past continuous, <i>would</i> + bare infinitive"]] },
        useTable: {
          headers: ["Use", "Example"],
          rows: [
            ["Impossible, unlikely or hypothetical conditions in the present or future", "<i>If you <b>had</b> a beard, you <b>would look</b> just like Charles Dickens!</i>"],
            ["Advice", "<i>If I <b>were</b> you, I would think very carefully about my future.</i> (more formal)<br><i>If I <b>was</b> you, I'd have a party at the weekend!</i> (more informal)"]
          ]
        },
        notes: [
          {
            type: "watchOut",
            bullets: [
              "We can also use <i>might</i> or <i>could</i> instead of <i>would</i>.<br>✓ <i>If we <b>were</b> older, we <b>could go</b> on holiday on our own.</i>",
              "We can use <i>could</i> in the <i>if</i> clause meaning <i>was/were able to</i>.<br>✓ <i>If I <b>could</b> drive, I'd buy a car.</i>"
            ]
          }
        ]
      },
      {
        name: "Third conditional",
        form: { intro: null, rows: [["Form", "<i>if</i> + past perfect (simple or continuous), <i>would</i> + <i>have</i> + past participle"]] },
        useTable: {
          headers: ["Use", "Example"],
          rows: [["Hypothetical conditions in the past and their results in the past", "<i>If you <b>had worn</b> a fake beard, no one <b>would have known</b> who you were!</i>"]]
        },
        notes: [
          {
            type: "watchOut",
            bullets: [
              "We can also use <i>might, could</i> or <i>should</i> instead of <i>would</i>.<br>✓ <i>If I <b>had done</b> some revision, I <b>might / could / should</b> have passed the exam.</i>"
            ]
          }
        ]
      },
      {
        name: "Mixed conditionals",
        form: {
          intro: null,
          rows: [
            ["Form 1", "<i>if</i> + past perfect (simple or continuous), <i>would</i> + bare infinitive"],
            ["Form 2", "<i>if</i> + past simple or past continuous, <i>would</i> + <i>have</i> + past participle"]
          ]
        },
        useTable: {
          headers: ["Use", "Example"],
          rows: [
            ["Hypothetical past condition and a present result", "<i>If I <b>had listened</b> to my parents, I <b>wouldn't be</b> in so much trouble now.</i>"],
            ["Hypothetical present condition and a past result", "<i>If I <b>had</b> a mobile, I <b>would have called</b> you last night.</i>"]
          ]
        },
        notes: []
      },
      {
        name: "Inverted conditionals",
        form: {
          intro: null,
          rows: [["Form", "<i>Should I/you/he/etc</i> … instead of <i>If I/you/he/etc should</i> …<br><i>Were I/you/he/etc</i> … instead of <i>If I/you/he/etc were</i> …<br><i>Had I/you/he/etc</i> … instead of <i>If I/you/he/etc had</i> …"]]
        },
        useTable: {
          headers: ["Use", "Example"],
          rows: [
            ["More formal form of the first conditional", "<i><b>Should</b> the situation worsen, the United Nations is prepared to send in a peacekeeping force.</i>"],
            ["More formal form of the second conditional", "<i><b>Were</b> the situation to worsen, the United Nations would be prepared to send in a peacekeeping force.</i>"],
            ["More formal form of the third conditional", "<i><b>Had</b> the situation worsened, the United Nations would have been prepared to send in a peacekeeping force.</i>"]
          ]
        },
        notes: [
          {
            type: "watchOut",
            bullets: [
              "When the condition comes before the result it is usually followed by a comma. When the result comes first, no comma is necessary.<br>✓ <i>If I had a mobile, I would have called you last night.</i><br>✓ <i>I would have called you last night if I had a mobile.</i>",
              "In conditional sentences, modals are sometimes followed by a continuous infinitive.<br>✓ <i>We'd still <b>be waiting</b> if you hadn't turned up.</i>"
            ]
          },
          {
            type: "usVsUk",
            bullets: [
              "With second and third conditionals in informal conversation, speakers of American English sometimes use <i>would</i> or <i>would have</i> in the <i>if</i> clause. This is very unusual in British English.<br><b>US:</b> <i>How would you feel if this <b>happened / would happen</b> to you?</i><br><b>UK:</b> <i>How would you feel if this <b>happened</b> to you?</i>"
            ]
          }
        ]
      }
    ]
  },
  {
    unit: 11,
    title: "Comparatives and superlatives / so, such, enough, too",
    subtitle: "",
    sections: [
      {
        name: "Comparative and superlative adjectives",
        form: {
          intro: null,
          rows: [
            ["regular adjectives with one syllable", "<i>black</i>", "+ -<i>er</i> → <i>blacker</i>", "+ -<i>est</i> → <i>blackest</i>"],
            ["regular adjectives with one syllable (ending in vowel + consonant)", "<i>thin</i>", "double final letter + -<i>er</i> → <i>thinner</i>", "double final letter + -<i>est</i> → <i>thinnest</i>"],
            ["regular adjectives with two syllables (ending in -y)", "<i>funny</i>", "replace -<i>y</i> with -<i>ier</i> → <i>funnier</i>", "replace -<i>y</i> with -<i>iest</i> → <i>funniest</i>"],
            ["regular adjectives with two or more syllables", "<i>intelligent</i>", "<i>more / less</i> + adj → <i>more intelligent</i>", "<i>most / least</i> + adj → <i>most intelligent</i>"],
            ["irregular adjectives / quantifiers", "<i>good / bad / far / little / much / many</i>", "<i>better / worse / farther/further / less / more / more</i>", "<i>best / worst / farthest/furthest / least / most / most</i>"]
          ]
        },
        useTable: {
          headers: ["Use", "Example"],
          rows: [
            ["Comparative — To compare things or people that are different", "<i>The crime rate in this area is <b>higher</b> than in other parts of the country.</i>"],
            ["Superlative — To compare one member of a group with the whole group", "<i>The robbery was <b>the biggest</b> in the bank's history.</i>"]
          ]
        },
        notes: [
          {
            type: "watchOut",
            bullets: [
              "Regular adjectives with two syllables can often also form the comparative and superlative like adjectives with one syllable.<br>✓ <i><b>clever, cleverer, cleverest</b></i>",
              "Adjectives with one syllable ending in -<i>e</i> add -<i>r</i> and -<i>st</i>.<br>✓ <i><b>white, whiter, whitest</b></i>",
              "Comparative forms are often followed by <i>than</i>; superlative forms are often preceded by <i>the</i>."
            ]
          }
        ]
      },
      {
        name: "Comparative and superlative adverbs",
        form: {
          intro: null,
          rows: [
            ["regular adverbs", "<i>easily</i>", "<i>more / less</i> + adv → <i>more easily</i>", "<i>most / least</i> + adv → <i>most easily</i>"],
            ["irregular adverbs", "<i>badly / early / far / fast / hard / late / often / near / soon / well</i>", "<i>worse / earlier / farther/further / faster / harder / later / more often / nearer / sooner / better</i>", "<i>worst / earliest / farthest/furthest / fastest / hardest / latest / most often / nearest / soonest / best</i>"]
          ]
        },
        useTable: {
          headers: ["Use", "Example"],
          rows: [
            ["Comparative — To compare actions that are different", "<i>Lock your door <b>more carefully</b> next time and maybe you won't get burgled!</i>"],
            ["Superlative — To compare actions of one member with the whole group", "<i>Only the criminal who ran <b>fastest</b> managed to escape from the police.</i>"]
          ]
        },
        notes: []
      },
      {
        name: "So",
        form: { intro: null, rows: [["Form", "<i>so</i> + adjective + <i>that</i> / <i>so</i> + adverb + <i>that</i> / <i>so</i> + <i>many/much</i> + noun + <i>that</i>"]] },
        useTable: {
          headers: ["Use", "Example"],
          rows: [["To show the results of a situation or action", "<i>The burglar was <b>so</b> clever <b>that</b> no one could catch him.</i><br><i>There was <b>so much</b> money <b>that</b> the robber couldn't carry it all.</i>"]]
        },
        notes: [
          {
            type: "watchOut",
            bullets: [
              "The word <i>that</i> is not usually necessary to introduce the second clause.<br>✓ <i>The crime rate is <b>so</b> high people are very frightened.</i>"
            ]
          }
        ]
      },
      {
        name: "Such",
        form: { intro: null, rows: [["Form", "<i>such</i> + <i>a/an</i> + adjective + singular noun + <i>that</i> / <i>such</i> + adjective + plural noun + <i>that</i> / <i>such</i> + <i>a lot of</i> + noun + <i>that</i>"]] },
        useTable: {
          headers: ["Use", "Example"],
          rows: [["To show the results of a situation or action", "<i>It was <b>such</b> a terrible crime <b>that</b> the man was sent to prison for life.</i>"]]
        },
        notes: []
      },
      {
        name: "Enough",
        form: { intro: null, rows: [["Form", "<i>enough</i> + noun / adjective + <i>enough</i> / adverb + <i>enough</i> (+ <i>for</i> and/or + full infinitive)"]] },
        useTable: {
          headers: ["Use", "Example"],
          rows: [["To show there is/isn't the right amount/number of something", "<i>There aren't <b>enough</b> police officers on the streets to keep us safe.</i><br><i>It wasn't dark <b>enough</b> for the burglar to start working.</i>"]]
        },
        notes: [
          {
            type: "watchOut",
            bullets: [
              "A common mistake is to put <i>enough</i> before an adjective. Use <i>quite</i> or <i>fairly</i>.<br>✓ <i>It's <b>quite / fairly</b> dangerous around here so don't go out alone.</i><br>✗ <s><i>It's <b>enough</b> dangerous around here so don't go out alone.</i></s>"
            ]
          }
        ]
      },
      {
        name: "Too",
        form: { intro: null, rows: [["Form", "<i>too</i> + adjective / <i>too</i> + adverb / <i>too</i> + <i>many/much</i> + noun (+ <i>for</i> and/or + full infinitive)"]] },
        useTable: {
          headers: ["Use", "Example"],
          rows: [["To describe something more than necessary with a negative effect", "<i>The young man was <b>too</b> young to go to prison.</i><br><i>We send <b>too many</b> innocent people to prison.</i>"]]
        },
        notes: [
          {
            type: "watchOut",
            bullets: [
              "We do not use <i>too</i> for something positive. Use <i>very, really</i> or <i>extremely</i>.<br>✓ <i>You were <b>very / really / extremely</b> lucky not to get caught.</i><br>✗ <s><i>You were <b>too</b> lucky not to get caught.</i></s>"
            ]
          }
        ]
      }
    ]
  }
  ,
  {
    unit: 13,
    title: "Modals: ability, permission, advice, criticism, obligation and necessity, degrees of certainty",
    subtitle: "",
    sections: [
      {
        name: "Form",
        form: {
          intro: null,
          rows: [
            ["", "All modals (<i>will, would, shall, should, can, could, may, might, must</i>) and the semi-modal <i>ought to</i> have only one form."],
            ["", "Modals are followed by the bare infinitive (simple or continuous) or the bare perfect infinitive. eg <i>Toby <b>should be</b> very fit by now.</i> <i>Toby <b>should have recovered</b> by now.</i>"],
            ["", "The semi-modals <i>have to</i> and <i>need to</i> change their form depending on person and tense. eg <i>The doctor said I <b>had/needed to</b> give up red meat.</i>"]
          ]
        },
        useTable: null,
        notes: []
      },
      {
        name: "Modals: ability",
        form: null,
        useTable: {
          headers: ["Use", "Modal", "Example"],
          rows: [
            ["Expressing ability now or generally", "<i>can</i>", "I <b>can</b> run a kilometre in four minutes."],
            ["Expressing decisions made now about future ability", "<i>can</i>", "We <b>can</b> meet at the gym tomorrow, if you like."],
            ["Expressing ability in the past", "<i>could</i>", "I <b>could</b> do fifty press-ups with one hand when I was younger."],
            ["Expressing ability in present, future or general hypothetical situations", "<i>could</i>", "If only I <b>could</b> quit smoking!"],
            ["Expressing ability in past hypothetical situations", "<i>could</i> + perfect infinitive", "I <b>could have roasted</b> the potatoes, but I decided that boiling them was healthier."]
          ]
        },
        notes: [
          {
            type: "watchOut",
            bullets: [
              "We use <i>be able to</i> for the infinitive and other tenses.<br>✓ <i>I'd love <b>to be able to</b> fit into these jeans again!</i> (infinitive)<br>✓ <i>I'<b>ll be able to</b> leave hospital in a few weeks.</i> (future)<br>✓ <i>I'<b>ve been able to</b> swim since I was five.</i> (present perfect)"
            ]
          }
        ]
      },
      {
        name: "Modals: permission",
        form: null,
        useTable: {
          headers: ["Use", "Modal", "Example"],
          rows: [
            ["Asking for and giving permission now, for the future or generally", "<i>may / could / can</i>", "<b>May / Could / Can</b> I see the doctor, please?"]
          ]
        },
        notes: [
          {
            type: "watchOut",
            bullets: [
              "<i>May</i> is more polite than <i>could</i>, and <i>could</i> is more polite than <i>can</i>.",
              "We don't usually use a modal to talk about past permission.<br>✓ <i>I <b>was allowed to</b> wear a knee support during the match.</i><br>✗ <s>I <b>could</b> wear a knee support during the match.</s>",
              "However, we do use <i>could</i> to talk about past permission in reported speech.<br>✓ <i>The coach said I <b>could</b> wear a knee support during the match.</i>"
            ]
          }
        ]
      },
      {
        name: "Modals: advice",
        form: null,
        useTable: {
          headers: ["Use", "Modal", "Example"],
          rows: [
            ["Asking for and giving advice now, for the future or generally", "<i>should / ought to</i>", "You <b>ought to / should</b> cut down on the amount of red meat you eat."]
          ]
        },
        notes: []
      },
      {
        name: "Modals: criticism",
        form: null,
        useTable: {
          headers: ["Use", "Modal", "Example"],
          rows: [
            ["Criticising past behaviour", "<i>should / ought to</i> + perfect infinitive", "He <b>ought to / should have made</b> more of an effort with his diet."]
          ]
        },
        notes: []
      },
      {
        name: "Modals: obligation and necessity",
        form: null,
        useTable: {
          headers: ["Use", "Modal", "Example"],
          rows: [
            ["Expressing obligation or necessity", "<i>must / have to / need to</i>", "I <b>must / have to / need to</b> pick up that prescription from the chemist on the way home."],
            ["Expressing lack of obligation or necessity", "<i>needn't / don't have to / don't need to</i>", "You <b>needn't / don't have to / don't need to</b> pick up that prescription as I'll get it."],
            ["Expressing past obligation", "<i>had to</i>", "I <b>had to</b> take the pills three times a day for two weeks."],
            ["Expressing lack of past obligation", "<i>needn't</i> + perfect infinitive / <i>didn't have to / didn't need to</i>", "I <b>needn't have gone / didn't have to go / didn't need to go</b> to the doctor."]
          ]
        },
        notes: [
          {
            type: "watchOut",
            bullets: [
              "There is usually no difference in meaning between <i>must</i> and <i>have to</i>. However, <i>must</i> is sometimes used for personal obligation and <i>have to</i> for external obligation.",
              "We can also use <i>will have/need to</i> to express future obligation.<br>✓ <i>You'<b>ll have/need to</b> be more careful about what you eat in future.</i>",
              "It is unusual to use <i>must</i> for questions. Use <i>have/need to</i>.<br>✓ <i><b>Do I have/need to</b> take this medicine before every meal?</i>",
              "<i>Must</i> cannot be used as an infinitive. Use <i>to have to</i>.<br>✓ <i>I'd hate <b>to have to</b> have injections every day.</i><br>✗ <s>I'd hate <b>to must</b> have injections every day.</s>",
              "<i>Mustn't</i> and <i>don't have/need to</i> have different meanings.<br>✓ <i>You <b>mustn't</b> do that!</i> (Don't do that!)<br>✓ <i>You <b>don't have/need to</b> do that.</i> (It's not necessary.)",
              "<i>Needn't</i> + perfect infinitive always refers to an action that happened. <i>Didn't have to / didn't need to</i> can refer to actions that did or didn't happen.<br>✓ <i>I <b>needn't have gone</b> to the doctor.</i> (I went but it wasn't necessary.)<br>✓ <i>I <b>didn't have to go</b> to the doctor because I suddenly felt better.</i> (I didn't go.)"
            ]
          }
        ]
      },
      {
        name: "Modals: degrees of certainty",
        form: null,
        useTable: {
          headers: ["Use", "Modal", "Example"],
          rows: [
            ["Expressing certainty (or near certainty) about now or generally", "<i>must / can't / couldn't</i>", "That <b>must</b> be the district nurse at the door. These <b>can't / couldn't</b> be the pills; they're the wrong colour."],
            ["Expressing certainty (or near certainty) about the past", "<i>must / can't / couldn't</i> + perfect infinitive", "She <b>must have been</b> in a lot of pain. His leg <b>can't / couldn't have been</b> in plaster for two years!"],
            ["Expressing probability about now, the future or generally", "<i>should / ought to</i>", "You <b>ought to / should</b> feel better in a few days, as long as you get lots of rest."],
            ["Expressing probability about the past", "<i>should / ought to</i> + perfect infinitive", "The bruise <b>ought to / should have disappeared</b> days ago. I wonder why it didn't."],
            ["Expressing possibility about now, the future or generally", "<i>could / may / might</i>", "That diet <b>could / may / might</b> be dangerous."],
            ["Expressing possibility about the real past", "<i>could / may / might</i> + perfect infinitive", "That <b>could / may / might have been</b> the doctor who rang earlier."],
            ["Expressing possibility about a hypothetical past", "<i>could / might</i> + perfect infinitive", "You <b>could / might have become</b> quite ill."]
          ]
        },
        notes: []
      }
    ]
  },
  {
    unit: 15,
    title: "The passive / the causative / direct and indirect objects",
    subtitle: "",
    sections: [
      {
        name: "The passive",
        form: {
          intro: "noun + <i>be</i> in the correct form + past participle (+ <i>by/with</i> + noun)",
          rows: [
            ["", "<b>Active</b>", "<b>Passive</b>"],
            ["present simple", "They grow bananas in tropical areas.", "<i>am/is/are</i> + past participle → Bananas <b>are grown</b> in tropical areas."],
            ["present continuous", "They are redecorating the café.", "<i>am/is/are being</i> + past participle → The café <b>is being redecorated</b>."],
            ["present perfect simple", "Has anyone peeled the carrots?", "<i>has/have been</i> + past participle → <b>Have</b> the carrots <b>been peeled</b>?"],
            ["past simple", "They served the meal in an elegant dining room.", "<i>was/were</i> + past participle → The meal <b>was served</b> in an elegant dining room."],
            ["past continuous", "They were preparing the bill.", "<i>was/were being</i> + past participle → The bill <b>was being prepared</b>."],
            ["past perfect simple", "Someone had eaten all the food.", "<i>had been</i> + past participle → All the food <b>had been eaten</b>."],
            ["<i>will</i> future", "We will deliver your pizza in forty minutes.", "<i>will be</i> + past participle → Your pizza <b>will be delivered</b> in forty minutes."],
            ["<i>be going to</i> future", "Overweight customers are going to sue Burgerland.", "<i>is/are going to be</i> + past participle → Burgerland <b>is going to be sued</b>."],
            ["future perfect simple", "They will have harvested all the grapes.", "<i>will have been</i> + past participle → All the grapes <b>will have been harvested</b>."],
            ["modal", "You should brush the chicken with oil.", "modal + <i>be</i> + past participle → The chicken <b>should be brushed</b> with oil."],
            ["modal + perfect infinitive", "They should have delivered the groceries by now.", "modal + <i>have been</i> + past participle → The groceries <b>should have been delivered</b>."],
            ["<i>-ing</i> (gerund)", "I don't like people telling me what to do.", "<i>being</i> + past participle → I don't like <b>being told</b> what to do."]
          ]
        },
        useTable: {
          headers: ["Use", "Example"],
          rows: [
            ["When we don't know who does/did something", "My groceries <b>have been stolen</b>!"],
            ["When it's obvious who does/did something", "A boy <b>was arrested</b> in town yesterday for stealing an apple."],
            ["When it's not important who does/did something", "The French bistro <b>is being knocked down</b>."],
            ["When we want to emphasise new information or use a formal style", "The potato <b>was brought</b> to Europe by Sir Walter Raleigh."]
          ]
        },
        notes: [
          {
            type: "watchOut",
            bullets: [
              "We do not normally use verbs in the passive in the present perfect continuous, past perfect continuous, future continuous or future perfect continuous tenses. Use a different phrase instead.<br>✓ <i>The restaurant has been <b>under construction</b> for four years.</i><br>✗ <s>The restaurant <b>has been being built</b> for four years.</s>",
              "We only normally use '<i>by</i>' to say who did something when it is important information.<br>✓ <i>Margarine was invented <b>by</b> a French chef.</i>",
              "We usually use '<i>with</i>' when we talk about the thing used to do something.<br>✓ <i>The soup should then be stirred <b>with</b> a spoon.</i><br>✗ <s>The soup should then be stirred <b>by</b> a spoon.</s>"
            ]
          }
        ]
      },
      {
        name: "The impersonal passive",
        form: {
          intro: "To express other people's opinions in a formal style, we can use two special forms of the passive with verbs like: <i>say, believe, think, claim, estimate, argue, suggest, calculate</i>, etc.",
          rows: [
            ["Structure 1", "noun + <i>is/are said to</i> + bare infinitive / perfect infinitive"],
            ["Structure 2", "<i>It is said that</i> + clause"],
            ["", "<b>Active</b>", "<b>Passive (Structure 1 / Structure 2)</b>"],
            ["present", "People <b>think</b> he <b>is</b> a great chef.", "He <b>is thought to be</b> a great chef. / <i>It is thought that he is a great chef.</i>"],
            ["past", "People <b>believe</b> he <b>was</b> a great chef.", "He <b>is believed to have been</b> a great chef. / <i>It is believed that he was a great chef.</i>"],
            ["present perfect", "People <b>claim</b> he <b>has had</b> an influence on many other chefs.", "He <b>is claimed to have had</b> an influence. / <i>It is claimed that he has had an influence.</i>"]
          ]
        },
        useTable: null,
        notes: []
      },
      {
        name: "The causative",
        form: { intro: "noun + <i>have/get</i> in the correct form + noun + past participle (+ <i>by/with</i> + noun)", rows: [] },
        useTable: {
          headers: ["Use", "Example"],
          rows: [
            ["To show that someone arranges for someone else to do something for them", "I <b>have</b> my groceries <b>delivered</b> by the supermarket once a week.<br>We <b>had</b> a large wedding cake <b>made</b>."],
            ["To refer to an unpleasant situation which hasn't been arranged", "We <b>had</b> our herb garden <b>vandalised</b> while we were away."]
          ]
        },
        notes: [
          {
            type: "watchOut",
            bullets: [
              "Using the verb <i>get</i> is usually more informal than using <i>have</i>.<br>✓ <i>Can you go and <b>get</b> this recipe <b>photocopied</b> for me?</i>",
              "We can also use <i>get somebody to do</i> and <i>have somebody do</i>.<br>✓ <i>Why don't you <b>get the chef to prepare</b> you a vegetarian meal?</i>"
            ]
          }
        ]
      },
      {
        name: "Direct and indirect objects",
        form: {
          intro: "Some verbs can be followed by both a direct and an indirect object (usually a person): <i>bring, buy, get, give, lend, make, offer, owe, pass, promise, send, show, take, teach, tell, write</i>, etc.",
          rows: [
            ["Active", "We can put the indirect object either immediately after the verb, or at the end of the sentence with a preposition.<br><i>A friend gave <b>my sister</b> this cookery book.</i><br><i>A friend gave this cookery book <b>to my sister</b>.</i>"],
            ["Passive", "The subject can be either the indirect or direct object of the active sentence.<br><i><b>My sister</b> was given this cookery book by a friend.</i><br><i><b>This cookery book</b> was given to my sister by a friend.</i>"]
          ]
        },
        useTable: null,
        notes: []
      }
    ]
  },
  {
    unit: 17,
    title: "-ing form or infinitive / prefer, would rather, had better / infinitives of purpose",
    subtitle: "",
    sections: [
      {
        name: "verb/noun/adjective phrase + -ing form",
        form: {
          intro: "Some verb, noun and adjective phrases are usually followed by the <i>-ing</i> form. These include:",
          rows: [
            ["admit", "delay", "dislike", "fancy", "involve", "miss", "resist"],
            ["appreciate", "deny", "enjoy", "feel like", "keep (on)", "postpone", "risk"],
            ["avoid", "detest", "escape", "finish", "mention", "practise", "suggest"],
            ["can't help", "discuss", "face", "give up", "mind", "put off", "understand"]
          ]
        },
        useTable: null,
        notes: [
          {
            type: "watchOut",
            bullets: [
              "Some of the verbs above can also be followed by an object before the <i>-ing</i> form.<br>✓ <i>I can't stand <b>people</b> cheating in exams.</i>",
              "When we put a verb after a preposition, we almost always use an <i>-ing</i> form.<br>✓ <i>I'm interested <b>in hearing</b> more about that course.</i>"
            ]
          }
        ]
      },
      {
        name: "verb/noun/adjective phrase + full infinitive",
        form: {
          intro: "Some verb, noun and adjective phrases are usually followed by the full infinitive. These include:",
          rows: [
            ["able", "arrange", "choose", "fail", "manage", "prepare", "seem", "would like"],
            ["afford", "ask", "decide", "happen", "offer", "pretend", "tend", ""],
            ["agree", "attempt", "encourage", "help", "plan", "promise", "want", ""],
            ["appear", "beg", "expect", "hope", "pleased", "refuse", "wish", ""]
          ]
        },
        useTable: null,
        notes: [
          {
            type: "watchOut",
            bullets: [
              "Some of the verbs above can also be followed by an object before the full infinitive.<br>✓ <i>I didn't want to take the exam.</i><br>✓ <i>My mum didn't want <b>me</b> to take the exam.</i>"
            ]
          }
        ]
      },
      {
        name: "verb + bare infinitive",
        form: {
          intro: "Some verbs can be followed by an object + the bare infinitive: <i>feel, hear, let, make, notice, see, watch</i>",
          rows: []
        },
        useTable: null,
        notes: [
          {
            type: "watchOut",
            bullets: [
              "The verbs <i>feel, hear, notice, see</i> and <i>watch</i> can also be followed by the <i>-ing</i> form. The bare infinitive is often used for a completed action; the <i>-ing</i> form for an action in progress.<br>✓ <i>I heard Miss Jenkins <b>tell</b> Julie not to do that.</i> (heard all of it)<br>✓ <i>I heard Miss Jenkins <b>telling</b> Julie not to do that.</i> (heard part of it)",
              "In the passive, <i>hear</i>, <i>make</i> and <i>see</i> are followed by the full infinitive.<br>✓ Active: <i>The teacher <b>made</b> me <b>stand</b> in the corner.</i><br>✓ Passive: <i>I <b>was made to stand</b> in the corner.</i>"
            ]
          }
        ]
      },
      {
        name: "verb + full infinitive or -ing form (little or no change in meaning)",
        form: {
          intro: "Some verbs can be followed by the full infinitive or the <i>-ing</i> form with little or no change in meaning: <i>begin, can't bear/stand, continue, hate, intend, love, prefer, start</i>",
          rows: []
        },
        useTable: null,
        notes: []
      },
      {
        name: "verb + full infinitive or -ing form (change in meaning)",
        form: {
          intro: "Some verbs can be followed by both the full infinitive and the <i>-ing</i> form, but the meaning changes: <i>consider, forget, go on, imagine, learn, like, mean, regret, remember, stop, teach, try</i>. See Reference Section for a full list.",
          rows: []
        },
        useTable: null,
        notes: []
      },
      {
        name: "prefer, would rather, had better",
        form: { intro: null, rows: [] },
        useTable: {
          headers: ["Form", "Use", "Example"],
          rows: [
            ["<i>prefer</i> + noun/<i>-ing</i> + <i>to</i> + noun/<i>-ing</i>", "expressing general preference", "I <b>prefer</b> biology <b>to</b> history.<br>I <b>prefer</b> reading English texts <b>to</b> speaking in English."],
            ["<i>would prefer</i> + full infinitive + <i>rather than</i> (+ bare/full infinitive)", "expressing specific preference (on this occasion)", "I'<b>d prefer to have</b> the lesson on Wednesday <b>rather than</b> on Tuesday."],
            ["<i>would rather</i> + bare infinitive + <i>than</i> (+ bare infinitive)", "expressing general or specific preference", "I'<b>d rather have</b> the lesson on Wednesday <b>than</b> on Tuesday."],
            ["<i>would rather</i> + sb + past simple/past continuous", "expressing preference about someone else", "I'<b>d rather you didn't sit</b> next to Brian."],
            ["<i>had better</i> + bare infinitive", "giving advice", "You'<b>d better ask</b> your parents if you can come on the school trip."]
          ]
        },
        notes: [
          {
            type: "watchOut",
            bullets: [
              "We don't usually say <i>I don't prefer…</i>. We use <i>I prefer not to…</i>.<br>✓ <i>I <b>prefer not to</b> have music on when I'm studying.</i>"
            ]
          }
        ]
      },
      {
        name: "infinitives of purpose",
        form: {
          intro: "When we want to talk about someone's purpose (the reason they do something), we can use:",
          rows: [
            ["the full infinitive", "I went to university <b>to avoid</b> getting a job!"],
            ["<i>in order</i> + full infinitive", "I went to university <b>in order to avoid</b> getting a job!"],
            ["<i>so as</i> + full infinitive", "I went to university <b>so as to avoid</b> getting a job!"]
          ]
        },
        useTable: null,
        notes: [
          {
            type: "watchOut",
            bullets: [
              "We can also express the same idea using <i>so (that)</i>.<br>✓ <i>I went to university <b>so (that) I could avoid</b> getting a job!</i>",
              "With a negative purpose we don't normally use the full infinitive on its own.<br>✓ <i>I went to university <b>in order not to get</b> a job!</i><br>✗ <s>I went to university <b>not to get</b> a job!</s>"
            ]
          }
        ]
      }
    ]
  },
  {
    unit: 19,
    title: "Questions / question tags / indirect questions",
    subtitle: "",
    sections: [
      {
        name: "Questions",
        form: {
          intro: null,
          rows: [
            ["With <i>be</i> as a main verb", "<i><b>Am/Was</b> I on time? <b>Are/Were</b> you/we/they tired? <b>Is/Was</b> he/she/it cold?</i>"],
            ["With <i>be</i> as an auxiliary verb", "<i><b>Am/Was</b> I <b>interrupting</b> you? <b>Are/Were</b> you/we/they <b>going</b> on a picnic? <b>Is/Was</b> he/she/it <b>working</b>?</i>"],
            ["With <i>have</i> as an auxiliary verb", "<i><b>Have/Had</b> I/you/we/they got any money? <b>Has/Had</b> he/she/it finished?</i>"],
            ["With <i>have</i> as a main verb and with all other verbs", "<i><b>Do/Did</b> I/you/we/they have enough time? <b>Does/Did</b> he/she/it need anything?</i>"],
            ["With modals", "<i><b>Should</b> I wait? <b>Could</b> you help me? <b>Will</b> she be here soon? <b>Might</b> they be lost?</i>"],
            ["With <i>who, whose, whom, what, which, where, when, why</i> and <i>how</i>", "<i><b>Who</b> is taking the rubbish out? <b>Where</b> did you go on holiday? <b>When</b> is Terry starting work? <b>How</b> do you spell 'environment'?</i>"]
          ]
        },
        useTable: null,
        notes: [
          {
            type: "watchOut",
            bullets: [
              "With <i>who</i> and <i>what</i>, whether we use <i>do</i> or not depends on whether the question word refers to the <b>subject</b> or <b>object</b> of the verb.<br>✓ Subject: <i>Who <b>saw</b> you?</i> (= Someone saw you. Who?)<br>✓ Object: <i>Who <b>did</b> you <b>see</b>?</i> (= You saw someone. Who?)",
              "After <i>do</i> or <i>does</i>, we use the bare infinitive.<br>✓ <i>Did you <b>go</b> to the talk?</i><br>✗ <s><i>Did you <b>went</b> to the talk?</i></s>",
              "Remember that the verb <i>mean</i> forms questions just like other main verbs.<br>✓ <i>What <b>does</b> 'environmental' <b>mean</b>?</i><br>✗ <s><i>What <b>means</b> 'environmental'?</i></s>"
            ]
          }
        ]
      },
      {
        name: "Question tags",
        form: {
          intro: null,
          rows: [
            ["With <i>be</i> as a main verb", "<i>You <b>are</b> Canadian, <b>aren't</b> you? She <b>is</b> beautiful, <b>isn't</b> she?</i>"],
            ["With auxiliary verbs and modals", "<i>You <b>haven't</b> lost my CD, <b>have</b> you? People <b>should</b> recycle things, <b>shouldn't</b> they?</i>"],
            ["With <i>have</i> as a main verb", "<i>Tom <b>has</b> a lovely voice, <b>hasn't/doesn't</b> he?</i>"],
            ["With other verbs", "<i>You play the guitar, <b>don't</b> you? Frank lives in Germany now, <b>doesn't</b> he?</i>"],
            ["With <i>Let's</i>", "<i>Let's get a DVD tonight, <b>shall we</b>?</i>"],
            ["With imperatives", "<i>Pass me that book, <b>will/would/could</b> you? Don't forget tonight, <b>will</b> you?</i>"]
          ]
        },
        useTable: {
          headers: ["Use", "Example"],
          rows: [
            ["To ask someone to agree with us (falling intonation)", "<i>It's really hot, <b>isn't it</b>?</i>"],
            ["To check whether something is true (rising intonation)", "<i>You're Spanish, <b>aren't you</b>?</i>"]
          ]
        },
        notes: [
          {
            type: "watchOut",
            bullets: [
              "In sentences with <i>I am</i>, we use <i>aren't I?</i> as the question tag.<br>✓ <i>I'm the best student in the class, <b>aren't I</b>?</i>",
              "With <i>everyone, no one</i> and <i>someone</i>, we use question tags with a plural verb and <i>they</i>.<br>✓ <i>Everyone's going to be there, <b>aren't they</b>?</i><br>✓ <i>No one wants to come, <b>do they</b>?</i>",
              "With negative words like <i>no, little, never, nobody, no one, hardly</i>, etc, we use a positive question tag.<br>✓ <i>We <b>never</b> enjoy our holiday, <b>do</b> we?</i>",
              "When the subject is <i>there</i>, we repeat <i>there</i> in the question tag.<br>✓ <i>There's no point calling Tim now, <b>is there</b>?</i>"
            ]
          },
          {
            type: "usVsUk",
            bullets: [
              "In American English, a question tag with <i>do</i> can be used after a sentence with <i>have got</i>. This is not usually done in British English.<br><b>US:</b> <i>They've got a lot of money, <b>don't</b> they?</i><br><b>UK:</b> <i>They've got a lot of money, <b>haven't</b> they?</i>"
            ]
          }
        ]
      },
      {
        name: "Indirect questions",
        form: { intro: "introductory phrase or question + clause with normal word order", rows: null },
        useTable: {
          headers: ["Some introductory phrases and questions", "Example"],
          rows: [
            ["<i>Can/Could you tell me ...?</i>", "<i>Could you tell me what time it is?</i>"],
            ["<i>Could you let me know ...?</i>", "<i>Could you let me know when it starts?</i>"],
            ["<i>Do you know ...?</i>", "<i>Do you know who that woman is?</i>"],
            ["<i>I wonder if you could tell me ...</i>", "<i>I wonder if you could tell me how much this costs.</i>"],
            ["<i>I wonder if you know ...</i>", "<i>I wonder if you know what the starting salary is.</i>"],
            ["<i>I would like to know ...</i>", "<i>I would like to know what your company is going to do about it.</i>"]
          ]
        },
        notes: [
          {
            type: "watchOut",
            bullets: [
              "We <b>do not</b> use question word order in the second part of the sentence.<br>✓ <i>I would like to know when <b>the next train to London leaves</b>.</i><br>✗ <s><i>I would like to know when <b>does the next train to London leave</b>.</i></s>",
              "If a direct question is a 'yes/no' question, the equivalent indirect question uses <i>if</i> or <i>whether</i>.<br>✓ <i>I wonder <b>if/whether</b> you have read this book.</i>"
            ]
          }
        ]
      }
    ]
  },
  {
    unit: 21,
    title: "Reported speech / reported questions / reporting verbs",
    subtitle: "",
    sections: [
      {
        name: "Reported speech: tense and modal changes",
        form: {
          intro: "We use reported speech when we want to say what someone else said. If the reporting verb is in the past (eg <i>said</i>), we usually have to change the tense of what the person actually said.",
          rows: null
        },
        useTable: {
          headers: ["Direct speech", "Reported speech", "Example"],
          rows: [
            ["present simple", "past simple", "<i>'I <b>need</b> a credit card,' said Tim.</i> → <i>Tim said he <b>needed</b> a credit card.</i>"],
            ["present continuous", "past continuous", "<i>'I'<b>m taking</b> Lizzie shopping,' said Tim.</i> → <i>Tim said he <b>was taking</b> Lizzie shopping.</i>"],
            ["present perfect simple", "past perfect simple", "<i>'I'<b>ve bought</b> Tom a present,' said Tim.</i> → <i>Tim said he'<b>d bought</b> Tom a present.</i>"],
            ["present perfect continuous", "past perfect continuous", "<i>'I'<b>ve been thinking</b> about buying a car,' said Tim.</i> → <i>Tim said he'<b>d been thinking</b> about buying a car.</i>"],
            ["past simple", "past perfect simple", "<i>'I <b>spent</b> six euros,' said Tim.</i> → <i>Tim said he'<b>d spent</b> six euros.</i>"],
            ["past continuous", "past perfect continuous", "<i>'I <b>was hoping</b> to find a new top,' said Tim.</i> → <i>Tim said he'<b>d been hoping</b> to find a new top.</i>"],
            ["past perfect simple", "past perfect simple (no tense change)", "<i>'I'<b>d looked</b> everywhere for my credit card,' said Tim.</i> → <i>Tim said he'<b>d looked</b> everywhere for his credit card.</i>"],
            ["past perfect continuous", "past perfect continuous (no tense change)", "<i>'I'<b>d been looking</b> for that book for weeks,' said Tim.</i> → <i>Tim said he'<b>d been looking</b> for that book for weeks.</i>"],
            ["<i>am/is/are going to</i>", "<i>was/were going to</i>", "<i>'I'<b>m going to</b> go shopping,' said Tim.</i> → <i>Tim said he <b>was going to</b> go shopping.</i>"],
            ["<i>will</i>", "<i>would</i>", "<i>'I'<b>ll</b> need a credit card,' said Tim.</i> → <i>Tim said he <b>would</b> need a credit card.</i>"],
            ["<i>can</i>", "<i>could</i>", "<i>'I <b>can</b> take Lizzie shopping,' said Tim.</i> → <i>Tim said he <b>could</b> take Lizzie shopping.</i>"],
            ["<i>must / have to</i>", "<i>had to</i>", "<i>'I <b>must</b> go to the supermarket,' said Tim.</i> → <i>Tim said he <b>had to</b> go to the supermarket.</i>"],
            ["<i>may</i>", "<i>might</i>", "<i>'I <b>may</b> go shopping later,' said Tim.</i> → <i>Tim said he <b>might</b> go shopping later.</i>"]
          ]
        },
        notes: [
          {
            type: "watchOut",
            bullets: [
              "We do not need to make any changes to the verb tense or modal when reporting a scientific fact or when something is still true.<br>✓ <i>'Most banks <b>charge</b> interest,' said Tim.</i> → <i>Tim said most banks <b>charge</b> interest.</i>"
            ]
          }
        ]
      },
      {
        name: "Reported speech: pronoun and determiner changes",
        form: {
          intro: "With reported speech, we also usually have to change some pronouns and determiners.",
          rows: null
        },
        useTable: {
          headers: ["Direct speech", "Reported speech", "Example"],
          rows: [
            ["<i>my</i>", "<i>his / her</i>", "<i>'I've lost <b>my</b> credit card,' said Tim.</i> → <i>Tim said he had lost <b>his</b> credit card.</i>"],
            ["<i>this / that</i> + noun", "<i>the / that</i>", "<i>'I love <b>this</b> sweater,' said Tim.</i> → <i>Tim said he loved <b>the / that</b> sweater.</i>"],
            ["<i>this / that</i> + verb", "<i>it</i>", "<i>'<b>This</b> is a lovely sweater,' said Tim.</i> → <i>Tim said <b>it</b> was a lovely sweater.</i>"],
            ["<i>these / those</i> + noun", "<i>the / those</i>", "<i>'I love <b>those</b> sweaters,' said Tim.</i> → <i>Tim said he loved <b>the / those</b> sweaters.</i>"],
            ["<i>these / those</i> + verb", "<i>they</i>", "<i>'<b>These</b> are lovely sweaters,' said Tim.</i> → <i>Tim said <b>they</b> were lovely sweaters.</i>"],
            ["verb + <i>these / those</i>", "<i>them</i>", "<i>'I'm going to buy <b>these</b>,' said Tim.</i> → <i>Tim said he was going to buy <b>them</b>.</i>"]
          ]
        },
        notes: []
      },
      {
        name: "Reported speech: time and place changes",
        form: {
          intro: "With reported speech, we also usually have to change words and phrases connected to time and place.",
          rows: null
        },
        useTable: {
          headers: ["Direct speech", "Reported speech", "Example"],
          rows: [
            ["<i>here</i>", "<i>there</i>", "<i>'I usually shop <b>here</b>,' said Tim.</i> → <i>Tim said he usually shopped <b>there</b>.</i>"],
            ["<i>now / at the moment</i>", "<i>then / at that moment</i>", "<i>'I'm shopping <b>at the moment</b>,' said Tim.</i> → <i>Tim said he was shopping <b>then / at that moment</b>.</i>"],
            ["<i>tomorrow</i>", "<i>the next/following day</i>", "<i>'I'm going shopping <b>tomorrow</b>,' said Tim.</i> → <i>Tim said he was going shopping <b>the next/following day</b>.</i>"],
            ["<i>tonight</i>", "<i>that night</i>", "<i>'I'm going shopping <b>tonight</b>,' said Tim.</i> → <i>Tim said he was going shopping <b>that night</b>.</i>"],
            ["<i>next week/month/year</i>", "<i>the following week/month/year</i>", "<i>'I'm going shopping <b>next week</b>,' said Tim.</i> → <i>Tim said he was going shopping <b>the following week</b>.</i>"],
            ["<i>yesterday</i>", "<i>the day before / the previous day</i>", "<i>'I went shopping <b>yesterday</b>,' said Tim.</i> → <i>Tim said he'd been shopping <b>the day before</b>.</i>"],
            ["<i>last week/month/year</i>", "<i>the week/month/year before / the previous week/month/year</i>", "<i>'I went shopping <b>last week</b>,' said Tim.</i> → <i>Tim said he'd been shopping <b>the week before</b>.</i>"],
            ["<i>ago</i>", "<i>before / previously</i>", "<i>'I went shopping two days <b>ago</b>,' said Tim.</i> → <i>Tim said he'd been shopping two days <b>before</b>.</i>"]
          ]
        },
        notes: [
          {
            type: "watchOut",
            bullets: [
              "We do not need to make any changes to time words/phrases when the information is still true at the moment of speaking/writing."
            ]
          }
        ]
      },
      {
        name: "Reported questions",
        form: {
          intro: "We use reported questions when we want to say what someone else asked. We use the same rules regarding tense, pronoun and time/place changes as we do with reported speech.",
          rows: null
        },
        useTable: {
          headers: ["Direct speech", "Reported speech", "Example"],
          rows: [
            ["<i>have, do, be</i> or modal (yes/no questions)", "use <i>if</i> or <i>whether</i>", "<i>'<b>Can you get me</b> an ice cream, Tom?' asked Tim.</i> → <i>Tim asked Tom <b>if / whether he could get him</b> an ice cream.</i>"],
            ["<i>what, who, which, when, where, why</i> and <i>how</i>", "<i>what, who, which, when, where, why</i> and <i>how</i>", "<i>'<b>Why did you buy these</b> shoes?' asked Tim.</i> → <i>Tim asked me <b>why I had bought those</b> shoes.</i>"]
          ]
        },
        notes: [
          {
            type: "watchOut",
            bullets: [
              "In direct questions we use the question form and question marks.<br>In reported questions we don't use the question form or question marks."
            ]
          }
        ]
      },
      {
        name: "Reporting verbs",
        form: {
          intro: "Different reporting verbs take different grammatical patterns. Some verbs can take more than one pattern.<br>✓ <b>deny</b> + noun / <b>deny</b> + <i>that</i> clause / <b>deny</b> + -<i>ing</i><br>See Reference Section for a full list of verbs and patterns.",
          rows: null
        },
        useTable: null,
        notes: []
      }
    ]
  },
  {
    unit: 23,
    title: "Relative clauses / participles",
    subtitle: "",
    sections: [
      {
        name: "Relative clauses",
        form: {
          intro: "Relative clauses give us extra information about something/someone or identify which particular thing/person we are talking about. They are often introduced by the following words.",
          rows: null
        },
        useTable: {
          headers: ["Use", "Example"],
          rows: [
            ["<i>which</i> (for things and animals)", "<i>Did you see the film <b>which</b> was on TV last night?</i>"],
            ["<i>who</i> (for people, and animals when we give them a personality)", "<i>Tom Davies, <b>who</b> is appearing in concert in Reading this week, is with me in the studio.</i>"],
            ["<i>when</i> (for times)", "<i>Do you remember the day <b>when</b> we met?</i>"],
            ["<i>where</i> (for places)", "<i>This is the place <b>where</b> they filmed Citizen Kane.</i>"],
            ["<i>why</i> (for reasons)", "<i>That's the reason <b>why</b> he's so popular.</i>"],
            ["<i>whom</i> (for people as the object of the relative clause)", "<i>Is that the man <b>whom</b> we saw at the cinema yesterday?</i>"],
            ["<i>whose</i> (for possession)", "<i>My next guest is John Travolta, <b>whose</b> career goes back to the early seventies.</i>"]
          ]
        },
        notes: [
          {
            type: "watchOut",
            bullets: [
              "When the relative pronoun is the subject of the relative clause, you do <b>not</b> need another subject.<br>✓ <i>I admire Jude Law, <b>who</b> always works hard on his films.</i><br>✗ <s><i>I admire Jude Law, <b>who he</b> always works hard on his films.</i></s>",
              "<i>Whom</i> is quite formal. In informal English use <i>who</i> instead. After a preposition, always use <i>whom</i>.<br>✓ <i>Charlie Chaplin was a comic genius <b>to whom</b> all comedians owe a great deal.</i><br>✓ <i>Charlie Chaplin was a comic genius <b>who</b> all comedians owe a great deal <b>to</b>.</i> (informal)",
              "<i>Where</i> can be replaced by a preposition + <i>which</i>.<br>✓ <i>The theatre <b>where / in which</b> I first acted is somewhere around here.</i>"
            ]
          }
        ]
      },
      {
        name: "Non-defining relative clauses",
        form: {
          intro: "Non-defining relative clauses simply give us more information about something/someone. The sentence makes complete sense without the relative clause.",
          rows: null
        },
        useTable: {
          headers: ["Use", "Example"],
          rows: [
            ["To give extra information about something/someone", "<i>Ray Watson, <b>who starred in</b> Bandits, is considering making a film based on the life of Einstein.</i>"]
          ]
        },
        notes: [
          {
            type: "watchOut",
            bullets: [
              "Non-defining relative clauses are separated from the rest of the sentence by commas.<br>✓ <i>Megamonsters, <b>which</b> was filmed in New York, is a very disappointing film.</i>",
              "We cannot leave out the word which introduces the relative clause and we cannot use <i>that</i>.<br>✗ <s><i>Megamonsters, was filmed in New York, is a very disappointing film.</i></s><br>✗ <s><i>Megamonsters, <b>that</b> was filmed in New York, is a very disappointing film.</i></s>",
              "<i>Which</i> can refer back to the whole sentence.<br>✓ <i>We finally got tickets for the concert, <b>which</b> was very lucky.</i>"
            ]
          }
        ]
      },
      {
        name: "Defining relative clauses",
        form: {
          intro: "Defining relative clauses tell us which one of a group of things/people we are talking about.",
          rows: null
        },
        useTable: {
          headers: ["Use", "Example"],
          rows: [
            ["To tell us which one of a group we are talking about", "<i>The book <b>which</b> I've read was the best of all.</i>"]
          ]
        },
        notes: [
          {
            type: "watchOut",
            bullets: [
              "Defining relative clauses are not separated from the rest of the sentence by commas.",
              "We can also use <i>that</i> to introduce the relative clause.<br>✓ <i>This is the DVD <b>that</b> I told you about the other day.</i>",
              "We can often leave out the word which introduces the relative clause when it is the object of the clause.<br>✓ <i>This is the DVD I told you about the other day.</i>"
            ]
          }
        ]
      },
      {
        name: "Participles",
        form: {
          intro: "Present participles end in <i>-ing</i>. Past participles usually end in <i>-ed</i>. Perfect participles are formed using <i>having</i> + past participle.",
          rows: null
        },
        useTable: {
          headers: ["Use", "Example"],
          rows: [
            ["To follow prepositions and conjunctions (present and perfect participles)", "<i>By <b>appearing</b> in that cigarette advert, he damaged his acting career.<br>After <b>playing / having played</b> video games all morning, I was really tired.</i>"],
            ["To explain the reason for something (present and perfect participles)", "<i><b>Being</b> quite good looking, Ralph decided to make a career as a model.<br><b>Having seen</b> the film before, I knew what was going to happen.</i>"],
            ["To talk about actions happening at the same time (present participles)", "<i><b>Waiting</b> for the show to begin, I felt really nervous.</i>"],
            ["To replace some relative clauses (present and past participles)", "<i>Imagine being the person <b>directing</b> a big budget film! (= ...the person <b>who is directing</b>...)<br>The person <b>chosen</b> for the part will be contacted. (= The person <b>who is chosen</b>...)</i>"],
            ["To talk about past actions happening in sequence (perfect participles)", "<i><b>Having finished</b> my homework, I decided to go to the cinema.</i>"],
            ["As an alternative passive form (past participles)", "<i><b>Made</b> to wait, the actor began to get very annoyed.</i>"]
          ]
        },
        notes: [
          {
            type: "watchOut",
            bullets: [
              "You have to be careful that the participle and the rest of the sentence both refer to the same subject.<br>✓ <i>Watching TV, I saw a news report about Hollywood.</i><br>✗ <s><i>Watching TV, a news report came on about Hollywood.</i></s>"
            ]
          }
        ]
      }
    ]
  },
  {
    unit: 25,
    title: "Unreal past, wishes / contrast",
    subtitle: "",
    sections: [
      {
        name: "Unreal past",
        form: {
          intro: "Past tenses do not always refer to past time. In some sentences we use a past tense to refer to the present or the future or to a general situation. These include sentences that contain:",
          rows: [
            ["a second conditional", "<i>I'd buy that top if I <b>had</b> more cash on me.</i>"],
            ["<i>suppose / what if / imagine</i>", "<i>I know it's probably not going to happen but <b>suppose / imagine</b> I <b>became</b> a famous super model!</i>"],
            ["<i>would rather</i> + you/he/she/we/they", "<i>I'd rather <b>you didn't come</b> with me to the fashion show tomorrow.</i>"],
            ["<i>it's (high/about) time</i>", "<i><b>It's (high/about) time</b> that hats <b>came</b> back in fashion.</i>"],
            ["polite questions", "<i><b>Did</b> you <b>want</b> me to send you our new catalogue when it comes out?</i>"],
            ["<i>wish / if only</i>", "<i><b>If only / I wish I had</b> something to wear tonight.</i>"]
          ]
        },
        useTable: null,
        notes: [
          {
            type: "watchOut",
            bullets: [
              "<i>Suppose</i>, <i>what if</i> and <i>imagine</i> can also be followed by a present tense.<br>A present tense indicates the situation is more likely to actually happen.<br>A past tense indicates the situation is less likely to actually happen.<br>✓ <i>What if you <b>are</b> accepted into art college?</i> (more likely)<br>✓ <i>What if you <b>were</b> accepted into art college?</i> (less likely)"
            ]
          }
        ]
      },
      {
        name: "Wishes",
        form: {
          intro: "We use different structures with <i>wish / if only</i>, depending on exactly what we want to express.",
          rows: null
        },
        useTable: {
          headers: ["Use", "Structure", "Example"],
          rows: [
            ["Expressing wishes about the present, future or generally", "<i>wish / if only</i> + past simple/continuous", "<i>I <b>wish I was studying</b> history of fashion instead of biology!</i>"],
            ["Expressing wishes about the past", "<i>wish / if only</i> + past perfect simple/continuous", "<i><b>If only I'd known</b> Burton's was having a sale last week.</i>"],
            ["Criticising other people or complaining about a situation", "<i>wish / if only</i> + <i>would</i>", "<i><b>If only</b> Henry <b>would</b> get a haircut!</i>"],
            ["Expressing hypothetical ability or permission", "<i>wish / if only</i> + <i>could</i>", "<i>I <b>wish I could</b> fit into these jeans.</i>"],
            ["Expressing desires in a formal way", "<i>wish</i> + full infinitive", "<i>I <b>wish to try on</b> this ball gown.</i>"]
          ]
        },
        notes: [
          {
            type: "watchOut",
            bullets: [
              "We do not usually say <i>If only / I wish I would…</i><br>✓ <i><b>If only / I wish I had</b> enough money to buy these shoes.</i><br>✗ <s><i>If only / I wish I would have enough money to buy these shoes.</i></s>",
              "To express desires about the future, we often use <i>hope</i>.<br>✓ <i><b>I hope I will</b> have enough money to buy these shoes next week.</i><br>✗ <s><i>I wish I will have enough money to buy these shoes next week.</i></s>"
            ]
          }
        ]
      },
      {
        name: "although / though / even though",
        form: {
          intro: "<i>Although</i>, <i>though</i> and <i>even though</i> are used to express contrast. <i>Even though</i> is more emphatic. <i>Though</i> is more informal.",
          rows: [
            ["<i>Although / Though / Even though</i> + subject + verb, subject + verb", "<i><b>Although / Though / Even though</b> I wore a hat, I got sunburn.</i>"],
            ["subject + verb, <i>although / though / even though</i> + subject + verb", "<i>I got sunburn, <b>although / though / even though</b> I wore a hat.</i>"]
          ]
        },
        useTable: null,
        notes: [
          {
            type: "watchOut",
            bullets: [
              "<i>Though</i> can also come at the end of a sentence.<br>✓ <i>I wore a hat. I got sunburn, though.</i>"
            ]
          }
        ]
      },
      {
        name: "in spite of / despite",
        form: {
          intro: "<i>In spite of</i> and <i>despite</i> are used to express contrast. They mean exactly the same thing and take the same grammatical structures:",
          rows: [
            ["<i>in spite of / despite</i> + -<i>ing</i> form, subject + verb", "<i><b>In spite of / Despite</b> wearing a hat, I got sunburn.</i>"],
            ["<i>in spite of / despite</i> + <i>the fact (that)</i> + subject + verb, subject + verb", "<i><b>In spite of / Despite</b> the fact (that) I wore a hat, I got sunburn.</i>"],
            ["<i>in spite of / despite</i> + noun, subject + verb", "<i><b>In spite of / Despite</b> my hat, I got sunburn.</i>"]
          ]
        },
        useTable: null,
        notes: [
          {
            type: "watchOut",
            bullets: [
              "We can also put <i>in spite of / despite</i> in the middle of the sentence.<br>✓ <i>I got sunburn <b>in spite of / despite</b> wearing a hat.</i>",
              "We can also use the perfect <i>-ing</i> form to show that the action happened before the result.<br>✓ <i>I got sunburn <b>in spite of / despite having</b> worn a hat.</i>",
              "With <i>in spite of / despite</i> + -<i>ing</i> form, the subject of the main verb must also carry out the action of the -<i>ing</i> verb."
            ]
          }
        ]
      },
      {
        name: "however / nevertheless",
        form: {
          intro: "<i>However</i> and <i>nevertheless</i> are used to express contrast. <i>However</i> is formal. <i>Nevertheless</i> is even more formal. They can appear at the start, end, or in the middle of a sentence.",
          rows: [
            ["", "<i>The fashion show was expensive to put on. <b>However / Nevertheless</b>, it did make a profit.</i>"],
            ["", "<i>The fashion show was expensive to put on. It did make a profit, <b>however / nevertheless</b>.</i>"],
            ["", "<i>The fashion show was expensive to put on. It did, <b>however / nevertheless</b>, make a profit.</i>"]
          ]
        },
        useTable: null,
        notes: []
      },
      {
        name: "while / whereas",
        form: {
          intro: "<i>While</i> and <i>whereas</i> are used to contrast two different facts or ideas.",
          rows: [
            ["<i>while / whereas</i> + subject + verb, subject + verb", "<i><b>While / Whereas</b> jeans are worn by both men and women, blouses are worn only by women.</i>"],
            ["subject + verb, <i>while / whereas</i> + subject + verb", "<i>Blouses are worn only by women, <b>while / whereas</b> jeans are worn by both men and women.</i>"]
          ]
        },
        useTable: null,
        notes: []
      }
    ]
  },
  {
    unit: 27,
    title: "Inversions / possessives",
    subtitle: "",
    sections: [
      {
        name: "Inversions with negative adverbial words and phrases",
        form: {
          intro: "When we put some negative adverbial words and phrases at the beginning of a sentence for emphasis, the subject and the verb 'invert' (we use the question form of the verb). Inversions are quite formal.<br><b>Form:</b> negative adverbial word/phrase + question form",
          rows: [
            ["<i>Never</i>", "<i><b>Never have I worked</b> so hard in all my life.</i>"],
            ["<i>Rarely</i>", "<i><b>Rarely have I worked</b> so hard in all my life.</i>"],
            ["<i>Seldom</i>", "<i><b>Seldom have I worked</b> so hard in all my life.</i>"],
            ["<i>No sooner (… than)</i>", "<i><b>No sooner had Matt started</b> work <b>than</b> he resigned.</i>"],
            ["<i>Hardly (… when)</i>", "<i><b>Hardly had Matt started</b> work <b>when</b> he resigned.</i>"],
            ["<i>Not only (… but also/too)</i>", "<i><b>Not only were you</b> late for work, <b>but</b> you had <b>also</b> forgotten the report.</i>"],
            ["<i>Under no circumstances</i>", "<i><b>Under no circumstances are employees allowed</b> to leave the building without permission.</i>"],
            ["<i>At no time/point</i>", "<i><b>At no time/point was I told</b> what the job involved.</i>"],
            ["<i>Little</i>", "<i><b>Little did I realise</b> that I would become managing director just two years later.</i>"],
            ["<i>Not until</i>", "<i><b>Not until the next day did I hear</b> that I had got the job.</i>"],
            ["<i>Only</i>", "<i><b>Only at the end of the interview did I think</b> I had a chance of getting the job.</i>"]
          ]
        },
        useTable: null,
        notes: [
          {
            type: "watchOut",
            bullets: [
              "<i>Little</i> is used with verbs of thought (<i>realise, know, suspect</i>, etc) and means 'I did not realise/etc at all…'.<br>✓ <i><b>Little did I know</b> how things were going to turn out.</i>",
              "With <i>not until</i> and <i>only</i>, you have to be careful about which verb to invert.<br>✓ <i><b>Not until I had finished</b> my homework <b>was I allowed</b> to go out.</i><br>✗ <s><i>Not until had I finished my homework I was allowed to go out.</i></s>"
            ]
          }
        ]
      },
      {
        name: "Other inversions",
        form: null,
        useTable: {
          headers: ["Use", "Example"],
          rows: [
            ["In short answers and similar structures using <i>so</i>, <i>neither</i> and <i>nor</i>", "<i>'I'm a plumber.' 'Really? <b>So am I!</b>'<br>My sister doesn't like getting ready for work, and <b>neither do I / nor do I</b>.</i>"],
            ["After <i>as</i>, <i>so</i> and <i>such</i>", "<i>The manager was nervous, <b>as were the rest of the staff</b>.<br><b>So late was it</b> that there was no one in the office.</i>"],
            ["In conditional sentences", "<i><b>Were our staff</b> better trained, we might make a larger profit.<br><b>Had I known</b> about the vacancy, I would have applied.</i>"]
          ]
        },
        notes: [
          {
            type: "watchOut",
            bullets: [
              "'<i>So am/do/have I</i>' is used to agree with a positive statement and '<i>Neither/Nor am/do/have I</i>' is used to agree with a negative statement.<br>✓ <i>'I really like my job.' '<b>So do I.</b>'</i><br>✓ <i>'I really don't like my job.' '<b>Neither do I / Nor do I.</b>'</i>"
            ]
          }
        ]
      },
      {
        name: "Possessive 's and s'",
        form: {
          intro: "We can show possession by using <i>'s</i> and <i>s'</i>.",
          rows: null
        },
        useTable: {
          headers: ["Use", "Example"],
          rows: [
            ["We use <i>'s</i> with singular nouns, including names, and with irregular plurals which do not end in -<i>s</i>.", "<i>That's the manager<b>'s</b> car.<br>We are waiting for Sarah<b>'s</b> decision.<br>I think that women<b>'s</b> rights should be protected by law.</i>"],
            ["We just add an apostrophe to regular plural nouns ending in -<i>s</i>.", "<i>The workers<b>'</b> pay was increased by ten percent.</i>"],
            ["We use <i>'s</i> or <i>s'</i> in some time expressions.", "<i>After an hour<b>'s</b> wait, I finally got to see the manager.<br>I'll be at the factory in about ten minutes<b>'</b> time.</i>"],
            ["We usually use <i>'s</i> or <i>s'</i> with people and animals. For other things, we normally use <i>of/my/etc</i>.", "<i>Is this John<b>'s</b> briefcase?<br>The vet had a close look at the cat<b>'s</b> paw.<br>The technician had a close look at the back <b>of my</b> computer. (not …at my computer's back)</i>"]
          ]
        },
        notes: [
          {
            type: "watchOut",
            bullets: [
              "With singular names ending in -<i>s</i>, we can use either <i>'s</i> or just an apostrophe. Both are correct.<br>✓ <i>The report is on Charles<b>'s</b> computer.</i><br>✓ <i>The report is on Charles<b>'</b> computer.</i>",
              "With plural names ending in -<i>s</i>, we just add an apostrophe.<br>✓ <i>The Smiths<b>'</b> business eventually closed down.</i>",
              "With phrases, the possessive <i>'s</i> must go at the end of the whole phrase.<br>✓ <i>Tom, Dick and Harry<b>'s</b> office is around here somewhere.</i><br>✗ <s><i>Tom's, Dick's and Harry's office is around here somewhere.</i></s>"
            ]
          }
        ]
      },
      {
        name: "Possessive determiners and pronouns",
        form: { intro: null, rows: null },
        useTable: {
          headers: ["Structure", "Example"],
          rows: [
            ["Possessive determiners (<i>my, your, his, her, its, our, their</i>) come before a noun and show possession", "<i>I'm really excited about <b>my</b> new job.<br>Are you looking forward to meeting <b>your</b> new boss?</i>"],
            ["Possessive pronouns (<i>mine, yours, his, hers, ours, yours, theirs</i>) are used instead of a noun", "<i>My new job is great. How about <b>yours</b>? (= …your job)</i>"],
            ["Possessive pronouns can also be used after <i>of</i> to show possession", "<i>She's a colleague of <b>mine</b>. (= …one of my colleagues)</i>"]
          ]
        },
        notes: [
          {
            type: "watchOut",
            bullets: [
              "A common mistake is using a possessive pronoun instead of a determiner, or vice versa.<br>✓ <i>I don't really get on so well with <b>my</b> boss.</i><br>✗ <s><i>I don't really get on so well with mine boss.</i></s>",
              "Remember that there are no apostrophes in possessive pronouns.<br>✗ <s><i>their's</i></s>",
              "Don't get confused between <i>its</i> (possessive determiner) and <i>it's</i> (contraction for <i>it is</i> or <i>it has</i>).<br>✓ <i>Our company is hoping to increase <b>its</b> share of the market.</i><br>✗ <s><i>Our company is hoping to increase <b>it's</b> share of the market.</i></s>"
            ]
          }
        ]
      }
    ]
  }
];



