(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(e=new Date){let t=String(e.getMonth()+1).padStart(2,`0`),n=String(e.getDate()).padStart(2,`0`);return`${e.getFullYear()}-${t}-${n}`}function t(e=new Date){let t=new Date(e);return t.setDate(e.getDate()-(e.getDay()+6)%7),Array.from({length:7},(e,n)=>{let r=new Date(t);return r.setDate(t.getDate()+n),r})}var n={good:{label:`Good`,mix:[`easy`,`easy`,`medium`,`hard`],plan:`2 easy, 1 medium, 1 hard`},okay:{label:`Okay`,mix:[`easy`,`easy`,`medium`],plan:`2 easy, 1 medium`},low:{label:`Low`,mix:[`easy`,`easy`],plan:`2 easy`},struggling:{label:`Really struggling`,mix:[`easy`],plan:`1 easy`}},r=[`good`,`okay`,`low`,`struggling`],i=[`easy`,`medium`,`hard`],a=[`low`,`struggling`],o={checkin:{good:[`Good days are worth using, and worth enjoying. Don't spend all your energy at once.`,`Nice. Today has room for one harder thing, if you want it.`],okay:[`A normal day. A few small steps is plenty.`,`Okay is a fine place to start from.`],low:[`Low days happen. Two small things is a real win today.`,`Go gently. Today's plan is only easy things.`],struggling:[`Just one thing today. Being here counts.`,`Today is about getting through, not getting ahead. One small thing is enough.`]},firstTask:[`That's one. Starting is often the hardest part.`,`One done. Notice that you did that.`,`First step taken. Nice.`],goal:{good:[`Goal reached, hard task included. That took real effort.`,`You did everything you planned today.`],okay:[`Goal reached. That's a solid day.`,`You did what you set out to do today.`],low:[`You did it on a low day. That counts double.`,`Goal reached. Be proud of that, even if it doesn't feel big.`],struggling:[`You did your one thing. On a day like this, that matters.`,`Done. Rest is allowed now.`]}},s={any:[`What's one small thing that felt okay today?`,`What's on your mind right now?`,`What would you like to be gentler with yourself about?`],good:[`What made today feel good?`],okay:[`What's one thing you'd like tomorrow to have?`],low:[`What's weighing on you today?`,`What's one thing that helped, even a little?`],struggling:[`What do you need most right now?`,`Who could you reach out to today?`]},c={good:{sparks:8,reach:36,goalSparks:18,goalReach:75,buzz:15,volume:.06,pitch:1},okay:{sparks:6,reach:30,goalSparks:14,goalReach:65,buzz:12,volume:.05,pitch:1},low:{sparks:4,reach:24,goalSparks:10,goalReach:55,buzz:10,volume:.04,pitch:.9},struggling:{sparks:0,reach:0,goalSparks:8,goalReach:45,buzz:0,volume:.03,pitch:.8}},l={good:`You had energy today and you used it well. Rest is part of the plan too.`,okay:`An ordinary day, handled. That's what steady looks like.`,low:`It was a low day, and you still showed up. That's not small.`,struggling:`Today was hard. You did something anyway. Be gentle with yourself tonight.`},u=[`linear-gradient(160deg, #2C4A3A, #3F6350)`,`linear-gradient(160deg, #3F6350, #5E5291)`,`linear-gradient(160deg, #5E5291, #8A5A9C)`,`linear-gradient(160deg, #9C4A2E, #8A6A12)`,`linear-gradient(160deg, #2E5E6E, #3F6350)`,`linear-gradient(160deg, #3F4A63, #2C4A3A)`];function d(e,t,n,r,i={}){return{title:e,difficulty:t,minutes:n,category:r,...i}}var f={general:{label:`Everyday basics`,desc:`Small things that help almost everyone. Always included.`,tasks:[d(`Drink a glass of water`,`easy`,1,`rest`),d(`Step outside for a minute of fresh air`,`easy`,2,`outside`),d(`Make your bed`,`easy`,2,`home`),d(`Open the curtains and let the light in`,`easy`,1,`home`),d(`Notice three things around you that you like`,`easy`,2,`calm`),d(`Listen to one song you like, all the way through`,`easy`,4,`fun`),d(`Tidy one small area`,`medium`,10,`home`),d(`Take a shower and put on fresh clothes`,`medium`,15,`rest`),d(`Do a load of laundry`,`medium`,15,`home`),d(`Eat a proper meal, sitting down`,`medium`,20,`rest`),d(`Take a 10-minute walk at any pace`,`medium`,10,`movement`),d(`Do one chore you've been putting off`,`hard`,20,`home`),d(`Cook a simple meal from scratch`,`hard`,40,`home`),d(`Spend an hour with your phone in another room`,`hard`,60,`rest`),d(`Write about a hard moment this week and what got you through it`,`hard`,10,`reflection`,{prompt:`In a short paragraph at most: what was a hard moment this week, and what helped you get through it?`})],guides:[`morning`]},anxiety:{label:`Anxiety & worry`,desc:`For racing thoughts, constant worry, or feeling on edge.`,tasks:[d(`5-minute grounding breath: in for 4, out for 6`,`easy`,5,`calm`),d(`Name 5 things you can see right now`,`easy`,2,`calm`),d(`Notice one thing that's going okay right now`,`easy`,1,`calm`),d(`Put a hand on your chest and breathe slowly for a minute`,`easy`,1,`calm`,{alsoFor:[`panic`]}),d(`Hold something cold for a minute and notice how it feels`,`easy`,2,`calm`),d(`Write down a worry and one fact against it`,`medium`,5,`reflection`,{prompt:`In a sentence or two: what's the worry, and what's one fact that doesn't fit it?`}),d(`Give yourself 10 minutes of "worry time," then move on`,`medium`,10,`reflection`),d(`Sit with a worry for 5 minutes without trying to fix it`,`medium`,5,`calm`),d(`Take a 15-minute walk, noticing what you see, hear, and smell`,`medium`,15,`outside`),d(`Do one small thing you've been putting off because it makes you anxious`,`hard`,15,`comfort`),d(`Make one decision today without asking anyone for reassurance`,`hard`,null,`comfort`)],guides:[`grounding`,`triggers`]},lowmood:{label:`Low mood`,desc:`For days that feel heavy, flat, or hard to start.`,tasks:[d(`Think of one thing that felt okay today`,`easy`,1,`reflection`),d(`Sit by a window or step outside for 5 minutes of daylight`,`easy`,5,`outside`),d(`Listen to one song you love`,`easy`,4,`fun`),d(`Send someone a photo of something nice`,`easy`,2,`connection`),d(`Take a 15-minute walk in daylight, even a slow one`,`medium`,15,`movement`),d(`Do something you used to enjoy, for 10 minutes`,`medium`,10,`fun`),d(`Write three things you're looking forward to`,`medium`,5,`reflection`,{prompt:`Name three things you're looking forward to, even tiny ones. A few words each is plenty.`}),d(`Make a plan with someone for this week`,`hard`,10,`connection`),d(`Go somewhere new nearby, like a park or café`,`hard`,45,`outside`)],guides:[`reframe`,`morning`]},stress:{label:`Stress & overwhelm`,desc:`For when there's too much and it all feels urgent.`,tasks:[d(`Drop your shoulders and take 3 slow breaths`,`easy`,1,`calm`),d(`Drink something warm, slowly`,`easy`,5,`rest`),d(`Close every app and tab you don't need`,`easy`,2,`home`),d(`Step away from what you're doing for 2 minutes`,`easy`,2,`rest`),d(`Stretch for 10 minutes to loosen the tension you're holding`,`medium`,10,`movement`),d(`Pick the 3 things that matter most tomorrow`,`medium`,5,`home`),d(`Take a real break: 20 minutes with no screens`,`medium`,20,`rest`),d(`Say no to, or postpone, one thing`,`hard`,10,`comfort`),d(`Ask someone for help with something on your plate`,`hard`,10,`connection`)],guides:[`grounding`]},sleep:{label:`Sleep`,desc:`For trouble falling asleep, staying asleep, or getting up.`,tasks:[d(`Dim the lights an hour before bed`,`easy`,1,`rest`),d(`Put your phone across the room at bedtime`,`easy`,1,`rest`,{alsoFor:[`screens`]}),d(`5-minute body scan in bed`,`easy`,5,`calm`),d(`Keep your bedroom cool and dark tonight`,`easy`,2,`home`),d(`Jot down what's on your mind before bed`,`medium`,3,`reflection`,{prompt:`In a sentence or two: what's on your mind tonight? Leave it here so it doesn't have to stay in your head.`}),d(`Get 10 minutes of morning daylight to help set your body clock`,`medium`,10,`outside`),d(`No caffeine after 2 PM`,`medium`,null,`rest`),d(`Wind down with 10 minutes of reading or calm music`,`medium`,10,`rest`),d(`No screens for the last 30 minutes before bed`,`hard`,30,`rest`),d(`Keep the same bedtime and wake-up time as yesterday`,`hard`,null,`home`),d(`Get up at your planned time, even after a bad night`,`hard`,null,`home`)],guides:[`winddown`]},social:{label:`Social anxiety`,desc:`For when people, groups, or attention feel scary.`,tasks:[d(`Reply to one message you've been leaving`,`easy`,3,`connection`),d(`React to a friend's post or message`,`easy`,1,`connection`),d(`Make brief eye contact and nod at someone`,`easy`,1,`comfort`),d(`Wave or smile at someone you know`,`easy`,1,`connection`),d(`Say a quick hello to someone new`,`medium`,2,`comfort`),d(`Ask someone one question about their day`,`medium`,3,`connection`),d(`Order or ask for something in person instead of online`,`medium`,10,`comfort`),d(`Write about a conversation that went okay`,`medium`,5,`reflection`,{prompt:`In a sentence or two: think of a recent conversation that went okay. What happened?`}),d(`Make a phone call you've been avoiding`,`hard`,10,`comfort`),d(`Go to part of a club meeting or group event. Leaving early is fine`,`hard`,30,`comfort`)],guides:[`ladder`,`talking`]},motivation:{label:`Motivation & getting started`,desc:`For when everything feels hard to begin.`,tasks:[d(`Clear one surface in your room`,`easy`,5,`home`),d(`Pick one small thing to do today`,`easy`,2,`home`),d(`Put on your shoes and step outside, that's it`,`easy`,2,`outside`),d(`Set a 5-minute timer and start anything`,`easy`,5,`home`),d(`Finish one thing you already started`,`medium`,15,`home`),d(`Make a short list for today, then do the first item`,`medium`,10,`home`),d(`Get dressed and leave the house for 20 minutes`,`medium`,20,`outside`),d(`Spend 30 minutes on a hobby you care about`,`hard`,30,`fun`),d(`Do the thing you've been dreading, first thing`,`hard`,30,`comfort`)],guides:[`starttiny`]},lonely:{label:`Loneliness`,desc:`For feeling disconnected or on your own.`,tasks:[d(`Text a friend just to say hi`,`easy`,3,`connection`),d(`Send a voice message instead of a text`,`easy`,2,`connection`),d(`Look up one club or group that meets near you`,`easy`,5,`connection`,{alsoFor:[`homesick`]}),d(`Say hi to someone you pass today`,`easy`,1,`connection`),d(`Write about someone you'd like to reconnect with`,`medium`,5,`reflection`,{prompt:`In a sentence or two: who would you like to reconnect with, and what would you say to them?`}),d(`Spend 20 minutes somewhere with people around, like a café or library`,`medium`,20,`outside`),d(`Call someone instead of texting`,`medium`,10,`connection`),d(`Help someone with something small`,`medium`,10,`connection`),d(`Invite someone to do something together`,`hard`,10,`connection`),d(`Share a meal with someone`,`hard`,30,`connection`)],guides:[`talking`]},selfesteem:{label:`Self-esteem`,desc:`For a harsh inner critic or feeling not good enough.`,tasks:[d(`Name one thing you did well today`,`easy`,1,`reflection`),d(`Say "thank you" to a compliment without brushing it off`,`easy`,1,`reflection`),d(`Wear something that makes you feel good`,`easy`,5,`rest`),d(`Unfollow one account that makes you feel worse about yourself`,`easy`,2,`rest`,{alsoFor:[`screens`]}),d(`Reframe one harsh thought about yourself`,`medium`,5,`reflection`,{prompt:`Write the harsh thought in one sentence, then a fairer version in one more.`}),d(`Spend 15 minutes on something you're good at`,`medium`,15,`fun`),d(`Accept help or a favor without apologizing`,`medium`,5,`connection`),d(`Share something you made or think with someone you trust`,`hard`,10,`connection`),d(`Share your opinion once in a conversation`,`hard`,5,`comfort`),d(`Write yourself the note a good friend would`,`hard`,10,`reflection`,{prompt:`In a short paragraph at most: what would a good friend say about how you're doing lately?`})],guides:[`reframe`]},overthinking:{label:`Overthinking`,desc:`For thoughts that loop, replay, or won't switch off.`,tasks:[d(`Say "I'm overthinking" out loud to name the loop`,`easy`,1,`calm`),d(`Do 2 minutes of something with your hands`,`easy`,2,`calm`),d(`Get up and go to a different room`,`easy`,1,`movement`),d(`Give yourself 5 minutes to think it over, then stop`,`easy`,5,`reflection`),d(`Write the thought, then one other way to see it`,`medium`,5,`reflection`,{prompt:`In a sentence or two: what's the thought on repeat, and what's one other way to see it?`}),d(`Take a 15-minute walk without your phone to step out of the loop`,`medium`,15,`movement`),d(`Make one small decision in under a minute`,`medium`,1,`comfort`),d(`Write the worst, best, and most likely outcome`,`hard`,10,`reflection`,{prompt:`In a short paragraph at most: what's the worst that could happen, the best, and what's most likely?`}),d(`Decide not to revisit one decision today`,`hard`,null,`comfort`)],guides:[`loops`,`reframe`]},panic:{label:`Panic attacks`,desc:`For sudden waves of fear, a racing heart, or feeling out of control.`,tasks:[d(`Practice slow breathing for 3 minutes while you're calm`,`easy`,3,`calm`),d(`Save 988 and one trusted person as phone favorites`,`easy`,2,`connection`),d(`Put a grounding reminder on your lock screen`,`easy`,3,`calm`),d(`Notice your body for 2 minutes without reacting`,`medium`,2,`calm`),d(`Learn the grounding steps by heart (Focus tab, Guides)`,`medium`,10,`calm`),d(`Write a note to read during your next panic`,`medium`,5,`reflection`,{prompt:`In a sentence or two: what do you want to remember the next time panic hits?`}),d(`Walk slowly for 10 minutes, breathing out longer than you breathe in`,`medium`,10,`movement`),d(`If it feels okay, spend 5 minutes near a place you've been avoiding, with your grounding steps ready`,`hard`,5,`comfort`),d(`Visit a place you've been avoiding together with someone you trust`,`hard`,30,`comfort`)],guides:[`grounding`]},grief:{label:`Grief & loss`,desc:`For missing someone or something you've lost.`,tasks:[d(`Look at one photo or memory, gently`,`easy`,5,`reflection`),d(`Play a song that reminds you of them`,`easy`,4,`reflection`),d(`Eat something, even something small`,`easy`,5,`rest`),d(`Rest for 10 minutes without needing to do anything`,`easy`,10,`rest`),d(`Write a few words to who or what you've lost`,`medium`,5,`reflection`,{prompt:`In a sentence or two, say something to the person or thing you've lost.`}),d(`Tell someone a memory you treasure`,`medium`,10,`connection`),d(`Ask someone who shares the loss how they're doing`,`medium`,10,`connection`),d(`Take a quiet 15-minute walk somewhere peaceful`,`medium`,15,`outside`),d(`Do something that honors their memory`,`hard`,30,`reflection`),d(`Visit a place that reminds you of them, when you feel ready`,`hard`,30,`outside`),d(`Reach out to a counselor or grief support group`,`hard`,15,`connection`)],guides:[`talking`]},anger:{label:`Anger & irritability`,desc:`For a short fuse, or anger that feels bigger than the moment.`,tasks:[d(`Take 10 slow breaths before replying when you're annoyed`,`easy`,2,`calm`),d(`Splash cold water on your face`,`easy`,1,`calm`),d(`Step away for 5 minutes when you feel heated`,`easy`,5,`calm`),d(`Name the feeling under your anger: hurt, tired, or scared?`,`easy`,1,`reflection`),d(`Go for a brisk 15-minute walk to burn off the tension`,`medium`,15,`movement`),d(`Write the angry message, then don't send it`,`medium`,5,`reflection`,{prompt:`In two or three sentences, write what you'd want to say. Keep it here instead of sending it.`}),d(`Play music that matches your mood, then something calmer`,`medium`,10,`fun`),d(`Do 20 minutes of hard exercise`,`hard`,20,`movement`),d(`Calmly tell someone how something affected you`,`hard`,10,`connection`),d(`Apologize for something you said in anger`,`hard`,10,`connection`)],guides:[`cooldown`]},perfectionism:{label:`Perfectionism`,desc:`For when nothing feels good enough to finish or share.`,tasks:[d(`Send a message after reading it over only once`,`easy`,1,`comfort`),d(`Notice one thing today that was good enough`,`easy`,1,`reflection`),d(`Take a break before you feel "done"`,`easy`,5,`rest`),d(`Doodle or make something for 5 minutes, just for fun`,`easy`,5,`fun`),d(`Leave one small thing imperfect on purpose`,`medium`,5,`comfort`),d(`Write what "good enough" looks like for one thing`,`medium`,5,`reflection`,{prompt:`In a sentence or two: pick one thing you're working on. What would "good enough" look like?`}),d(`Set a time limit on a task and stop when it ends`,`medium`,30,`home`),d(`Share something unfinished with someone you trust`,`hard`,10,`connection`),d(`Try something new you'll probably be bad at`,`hard`,30,`fun`)],guides:[`reframe`]},burnout:{label:`Burnout & exhaustion`,desc:`For running on empty for too long.`,tasks:[d(`Take a 10-minute break with no screen`,`easy`,10,`rest`),d(`Lie down for 10 minutes with your eyes closed`,`easy`,10,`rest`,{alsoFor:[`stress`]}),d(`Drink water and eat a real snack`,`easy`,5,`rest`),d(`Change into comfortable clothes and get cozy`,`easy`,5,`rest`),d(`Go to bed 30 minutes earlier tonight`,`medium`,30,`rest`),d(`Spend 20 minutes outside doing nothing productive`,`medium`,20,`outside`),d(`Pick one thing you can drop, delay, or hand off`,`medium`,5,`home`),d(`Cancel or hand off one commitment this week`,`hard`,10,`comfort`),d(`Take a full evening off: no work, no chores`,`hard`,null,`rest`)],guides:[`winddown`]},homesick:{label:`Homesickness`,desc:`For missing home, especially after a big move.`,tasks:[d(`Call or video chat someone from home`,`easy`,15,`connection`),d(`Look at photos from home for a few minutes`,`easy`,5,`reflection`),d(`Put up one thing that reminds you of home`,`easy`,5,`home`),d(`Listen to music that reminds you of home`,`easy`,5,`fun`),d(`Write about what you miss most`,`medium`,5,`reflection`,{prompt:`In a sentence or two: what do you miss most, and is there a small piece of it you could bring here?`}),d(`Say hi to a neighbor or roommate`,`medium`,2,`connection`),d(`Make a food or drink that tastes like home`,`medium`,30,`home`),d(`Explore your neighborhood for 20 minutes and find one spot you like`,`medium`,20,`outside`),d(`Go to one event where you might meet people`,`hard`,60,`connection`),d(`Invite someone new to explore somewhere with you`,`hard`,10,`connection`)],guides:[`talking`]},bodyimage:{label:`Body image`,desc:`For being hard on how you look.`,tasks:[d(`Mute or unfollow one account that makes you compare your body`,`easy`,2,`rest`),d(`Wear clothes that feel comfortable`,`easy`,5,`rest`),d(`Thank your body for one thing it did today`,`easy`,1,`reflection`),d(`Look in the mirror and notice one neutral thing`,`easy`,1,`reflection`),d(`Write about something your body helped you do`,`medium`,5,`reflection`,{prompt:`In a sentence or two: what's something your body helped you do recently? Leave looks out of it.`}),d(`Move in a way that feels good, like a stretch, a dance, or a walk`,`medium`,10,`movement`),d(`Go two hours without checking your reflection`,`medium`,null,`comfort`),d(`Wear something you like that you've been avoiding`,`hard`,null,`comfort`),d(`Go a day without commenting on anyone's looks, including yours`,`hard`,null,`comfort`)],guides:[`reframe`]},screens:{label:`Screen time & doomscrolling`,desc:`For scrolling longer than you meant to.`,tasks:[d(`Turn off notifications for one app`,`easy`,2,`home`,{alsoFor:[`focus`,`stress`]}),d(`Move your most-scrolled app off your home screen`,`easy`,2,`home`),d(`Put your phone face down for 10 minutes`,`easy`,10,`rest`),d(`Check the time before you open a social app`,`easy`,1,`calm`),d(`Eat one meal with no phone`,`medium`,20,`rest`),d(`Stick to a 30-minute limit on one app today`,`medium`,null,`home`),d(`Leave your phone behind on a short walk`,`medium`,15,`outside`),d(`No phone for the first hour after you wake up`,`hard`,60,`rest`),d(`Delete one app you keep regretting`,`hard`,2,`comfort`)],guides:[`scrollbreak`]},relationships:{label:`Relationships & family`,desc:`For tension, conflict, or distance with people close to you.`,tasks:[d(`Send a kind message to someone you care about`,`easy`,2,`connection`),d(`Take a breath before responding in a tense moment`,`easy`,1,`calm`,{alsoFor:[`anger`]}),d(`Notice one thing someone did for you today`,`easy`,1,`reflection`),d(`Take 10 minutes alone to reset`,`easy`,10,`rest`),d(`Write what you need from someone`,`medium`,5,`reflection`,{prompt:`In a sentence or two: what do you need from them right now?`}),d(`Ask someone how they're really doing, and just listen`,`medium`,10,`connection`),d(`Spend 20 minutes together with phones away`,`medium`,20,`connection`),d(`Have the conversation you've been putting off`,`hard`,20,`connection`),d(`Set one boundary, kindly and clearly`,`hard`,10,`comfort`)],guides:[`talking`,`cooldown`]},focus:{label:`Focus & attention`,desc:`For a busy mind that jumps from thing to thing.`,tasks:[d(`Do one thing at a time for 5 minutes`,`easy`,5,`calm`),d(`Put your phone out of sight`,`easy`,1,`home`),d(`Clear distractions from your space`,`easy`,3,`home`),d(`Take 3 slow breaths before starting something`,`easy`,1,`calm`),d(`Do one chore start to finish without switching`,`medium`,15,`home`),d(`Take a 10-minute movement break to reset your attention`,`medium`,10,`movement`),d(`Listen to a podcast episode or album without multitasking`,`medium`,30,`fun`),d(`Spend 45 minutes on one hobby or project, no switching`,`hard`,45,`fun`),d(`Read for 30 minutes without checking your phone`,`hard`,30,`fun`)],guides:[`starttiny`]}},p=[`anxiety`,`lowmood`,`stress`,`sleep`,`social`,`motivation`,`lonely`,`selfesteem`,`overthinking`],ee=[`panic`,`grief`,`anger`,`perfectionism`,`burnout`,`homesick`,`bodyimage`,`screens`,`relationships`,`focus`],te={anxiety:`anxious nervous worry worried on edge`,lowmood:`sad down depressed depression empty unmotivated hopeless`,stress:`overwhelmed pressure busy too much`,sleep:`insomnia tired can't sleep nightmares bedtime`,social:`shy people awkward talking groups`,motivation:`stuck procrastination lazy adhd focus starting`,lonely:`isolated alone friends disconnected`,selfesteem:`confidence worthless inner critic not good enough`,panic:`panic attack heart fear scared`,grief:`loss death bereavement breakup missing someone`,anger:`mad angry irritable rage temper`,perfectionism:`perfect failure standards`,burnout:`tired exhausted drained worn out`,homesick:`home homesick college moving family`,overthinking:`rumination ruminating looping replaying spiraling can't stop thinking`,bodyimage:`body looks appearance mirror comparing ugly`,screens:`phone scrolling doomscrolling social media tiktok instagram addicted`,relationships:`family parents partner roommate conflict fighting breakup`,focus:`distracted adhd attention concentrate scattered`};function ne(e,t){return`${e}-${t.toLowerCase().replace(/[^a-z0-9]+/g,`-`).replace(/^-|-$/g,``)}`}var m={};for(let[e,t]of Object.entries(f))for(let n of t.tasks){let t=ne(e,n.title);m[t]={id:t,title:n.title,difficulty:n.difficulty,minutes:n.minutes,area:e,areas:[e,...n.alsoFor??[]],category:n.category,prompt:n.prompt??null}}function re(e){return Object.values(m).filter(t=>t.areas?.includes(e))}function h(e,t){return e[Math.floor(t()*e.length)]}function g(e,t){return m[t]??e.customTasks.find(e=>e.id===t)??null}function _(e){return e.frequency===`daily`}function ie(e,t){return e.difficulty===`hard`&&a.includes(t)}function ae(e){let t=[`general`,...e.focusAreas];return[...Object.values(m).filter(e=>e.areas?.some(e=>t.includes(e))),...e.customTasks]}var oe={more:3,normal:1,skip:0};function se(e,t){return t.category?oe[e.categoryPrefs[t.category]??`normal`]:1}function ce(e,t,n){let r=e.reduce((e,n)=>e+t(n),0);if(r<=0)return null;let i=n()*r;for(let n of e)if(i-=t(n),i<0)return n;return[...e].reverse().find(e=>t(e)>0)??null}function le(e,t,n,r){return ce(ae(e).filter(e=>e.difficulty===t&&!_(e)&&!n.includes(e.id)),t=>se(e,t),r)}function ue(e,t,n){let r=Object.values(m).filter(n=>n.area===`general`&&n.difficulty===e&&!t.includes(n.id));return r.length>0?h(r,n):null}function de(e){return e.plan.map(e=>e.taskId)}function v(e){return e.plan.filter(e=>e.done).length}function fe(e,t,r){let i=e.plan.filter(t=>t.done&&g(e,t.taskId)!==null);for(let n of e.customTasks){let e=i.some(e=>e.taskId===n.id);_(n)&&!e&&!ie(n,t)&&i.push({taskId:n.id,done:!1})}let a=[...n[t].mix];for(let t of i){let n=g(e,t.taskId)?.difficulty,r=n?a.indexOf(n):-1;r!==-1&&a.splice(r,1)}for(let t of a){let n=i.map(e=>e.taskId),a=le(e,t,n,r)??(t===`easy`?null:le(e,`easy`,n,r))??ue(t,n,r)??ue(`easy`,n,r);a&&i.push({taskId:a.id,done:!1})}e.plan=i,e.goal=n[t].mix.length}function y(e,t,n,r){let i=v(e);t.done=n,n&&e.mood&&(v(e)===e.goal?e.message=h(o.goal[e.mood],r):i===0&&(e.message=h(o.firstTask,r)))}function pe(e,t){return _(t)&&e.mood!==null&&!ie(t,e.mood)&&!de(e).includes(t.id)}function me(e){e.history[e.day]={done:v(e),goal:e.goal,mood:e.mood}}function b(e=new Date,t=Math.random){return e.getTime().toString(36)+Math.floor(t()*1296).toString(36).padStart(2,`0`)}function x(e,t){return e.journal.find(e=>e.id===t)??null}function S(e,t){return t.mode===`edit`?`edit-${t.entryId}`:e.plan[t.index].taskId}function he(e,t,n,r,i){let a=n.trim();if(t.mode===`edit`&&a===``)return{ok:!1,error:`This would erase your answer. To remove it, use “Delete this answer” instead.`};let o=e.plan[t.index],s=g(e,o.taskId);if(delete e.drafts[S(e,t)],t.mode===`edit`){let n=x(e,t.entryId);return n&&(n.text=a,n.edited=r.toISOString()),{ok:!0,toast:`Answer updated.`,completedTask:!1}}if(a!==``){let t={id:b(r,i),date:r.toISOString(),prompt:s?.prompt??null,text:a,mood:e.mood,fromTask:s?.title};e.journal.push(t),o.entryId=t.id}let c=!o.done;return c&&y(e,o,!0,i),{ok:!0,toast:a===``?`Done. Nothing was added to your journal.`:`Saved to your journal.`,completedTask:c}}function ge(e,t,n,r,i){let a=t.trim();return a===``?{ok:!1,error:`Write something first, even one sentence.`}:(e.journal.push({id:b(r,i),date:r.toISOString(),prompt:n,text:a,mood:e.mood}),{ok:!0,toast:`Entry saved.`,completedTask:!1})}function _e(e,t){e.journal=e.journal.filter(e=>e.id!==t);for(let n of e.plan)n.entryId===t&&(n.entryId=null);delete e.drafts[`edit-${t}`]}function ve(e){return e.trim().split(/\s+/).filter(Boolean).length}function ye(e,t){let r=[`Steady journal`,`Exported ${t.toLocaleString()}`,``];for(let t of e){let e=t.mood?` · feeling ${n[t.mood].label.toLowerCase()}`:``;r.push(`=== ${new Date(t.date).toLocaleString()}${e} ===`),t.fromTask&&r.push(`Task: ${t.fromTask}`),t.prompt&&t.prompt!==t.fromTask&&r.push(`Prompt: ${t.prompt}`),r.push(``,t.text,``)}return r.join(`
`)}var be=`steady-state-v1`;function C(e){return{onboarded:!1,focusAreas:[],customTasks:[],drafts:{},day:e,mood:null,goal:0,plan:[],message:null,history:{},journal:[],tab:`today`,focusTab:null,categoryPrefs:{},sound:!1,effects:!0,theme:`system`,look:`sage`,profileName:``,agreedAt:null,termsVersion:null}}function xe(e,t){return e.day!==t&&(e.day=t,e.mood=null,e.goal=0,e.plan=[],e.message=null,!0)}function Se(e,t){let n=C(t);try{let t=JSON.parse(e?.getItem(`steady-state-v1`)??`null`);typeof t==`object`&&t&&Array.isArray(t.plan)&&Object.assign(n,t)}catch{}return xe(n,t),n}function Ce(e,t){try{e?.setItem(be,JSON.stringify(t))}catch{}}function we(e){try{e?.removeItem(be)}catch{}}var Te=`0.6 (web)`,Ee=`October 23, 2026`;function w(e,t){return`<button type="button" class="link-btn" data-action="open-page" data-page="${e}">${t}</button>`}function De(){return`Contact details will be added before public release. For now, Steady is a student project for CS 124 at the University of Illinois.`}function Oe(){return`<p><strong>Steady doesn't need an account.</strong> There's no sign-up, no password, and no log-in. Everything you do in Steady is saved on this device only.</p><h3>What that means</h3><ul><li>Your journal is private by design: nobody else, including the developer, can see it.</li><li>If you clear your browser data, uninstall the app, or switch devices, your data doesn't come with you.</li></ul><h3>Keeping a copy</h3><p>Export your journal to save your entries as a text file on your device.</p><button class="btn secondary" data-action="export-journal">Export my journal</button><h3>Optional backup</h3><p>Signing in to back up and sync across devices may come in a future version. If it does, it will be optional, and Steady will ask you before anything leaves your device.</p>`}function ke(){return`<p><strong>Steady</strong> helps you take small, steady steps on any kind of day: check in with how you feel, get a plan sized to your energy, and see your progress without streaks or guilt.</p><h3>Important</h3><p>Steady is a self-help tool. It is not medical care, therapy, diagnosis, or treatment, and it is not a crisis service. Focus areas describe what you'd like to work on; they aren't diagnoses.</p><h3>If you need help now</h3><ul><li><a href="tel:988">Call 988</a> or <a href="sms:988">text 988</a>: Suicide &amp; Crisis Lifeline, 24/7</li><li>Call 911 if you or someone else is in immediate danger</li><li><a href="https://counselingcenter.illinois.edu/" target="_blank" rel="noopener">UIUC Counseling Center</a>: free counseling for Illinois students</li></ul><h3>Where the tasks and guides come from</h3><p>They're general self-help practices, like grounding, slow breathing, and reframing harsh thoughts, written in plain language and informed by public resources such as <a href="https://www.nimh.nih.gov/health/topics" target="_blank" rel="noopener">NIMH</a> and <a href="https://www.nhs.uk/every-mind-matters/" target="_blank" rel="noopener">NHS Every Mind Matters</a>. Steady isn't affiliated with or endorsed by these organizations.</p><h3>Version</h3><p>Steady ${Te} · Made for CS 124 at the University of Illinois</p><p>${w(`privacy`,`Privacy policy`)} · ${w(`terms`,`Terms of use`)}</p>`}function Ae(){return`<p class="effective">Effective ${Ee}</p><p><strong>The short version:</strong> Steady keeps everything on your device. There's no account, nothing you enter is uploaded, and there are no ads or trackers.</p><h3>What Steady stores</h3><ul><li>Your name, if you add one in Profile</li><li>Your focus areas, daily check-ins (how you felt), tasks, and progress</li><li>Your journal entries and unsaved drafts</li><li>Your settings, like sound, theme, and light or dark mode</li></ul><h3>Where it's stored</h3><p>Only on this device, in your browser's local storage. Steady has no database or account server, so the developer can't see, read, or recover your data.</p><h3>The website itself</h3><p>When Steady is opened from a web address, a hosting service delivers the app's files to your browser. Like any website, that service may keep standard technical logs, such as your IP address and the time of the visit. Nothing you type or choose in Steady is ever sent to it.</p><h3>What Steady never does</h3><ul><li>Upload or sync your data</li><li>Sell or share your data with anyone</li><li>Show ads or use analytics or tracking tools</li><li>Diagnose you, or share how you feel with anyone</li></ul><h3>Links that leave Steady</h3><p>Some buttons open other services. Calling or texting 988 uses your phone's dialer or messages app, and links to the UIUC Counseling Center, NIMH, and NHS open their websites. Those services have their own privacy policies.</p><h3>Your choices</h3><ul><li><strong>Export:</strong> Menu → Export my journal saves a copy as a text file on your device.</li><li><strong>Delete:</strong> Menu → Delete all my data removes everything from this device right away.</li><li>Clearing your browser data also deletes it.</li></ul><h3>Children</h3><p>Steady is for people 13 and older. It isn't designed for children under 13 and doesn't knowingly collect information from them. Because everything stays on the device, a parent or guardian can remove it at any time with Delete all my data.</p><h3>Security</h3><p>Anyone who can unlock this device and open Steady can read your journal. Use your device's screen lock to protect it.</p><h3>Changes to this policy</h3><p>If this policy changes, for example if optional backup is added, Steady will show you the new version and ask you to agree before anything leaves your device.</p><h3>Contact</h3><p>${De()}</p><p class="draft-note">Plain-language version written for the CS 124 student version of Steady. It hasn't been reviewed by a lawyer, which would be needed before a public release.</p>`}function je(){return`<p class="effective">Effective ${Ee}</p><p>By using Steady, you agree to these terms. They're short, so please read them.</p><h3>1. What Steady is</h3><p>Steady is a self-help companion for building small daily habits around how you feel. It offers general wellbeing tasks, writing prompts, and guides based on publicly available self-help information.</p><h3>2. What Steady is not</h3><p><strong>Steady is not medical care, therapy, diagnosis, or treatment, and it is not a crisis service.</strong> It doesn't replace a doctor, therapist, or counselor. Focus areas describe what you'd like to work on; they aren't diagnoses. If you're in crisis or thinking about harming yourself, call or text <a href="tel:988">988</a>, or call 911 in an emergency.</p><h3>3. Who can use Steady</h3><p>You must be 13 or older. If you're under 18, we encourage you to talk with a parent, guardian, or school counselor about using it.</p><h3>4. Your content</h3><p>Everything you write in Steady belongs to you and stays on your device. Because there's no backup, you're responsible for keeping a copy (Menu → Export my journal) if you want one. Deleted data can't be recovered.</p><h3>5. Using Steady</h3><p>Steady is for your personal, non-commercial use. Please don't misuse it, for example by trying to break it or by copying its content to sell.</p><h3>6. Tasks and guides</h3><p>Tasks are suggestions. Only do what feels safe and right for you, and skip anything that doesn't; you can swap or remove any task. Talk to a health professional before making changes related to a medical or mental health condition.</p><h3>7. No guarantees</h3><p>Steady is provided “as is.” It's built to be helpful and reliable, but there's no promise that it will always work without errors or that it will improve how you feel. To the extent the law allows, the developer isn't liable for losses that come from using Steady, including lost data.</p><h3>8. Changes</h3><p>These terms may be updated. If anything important changes, Steady will show you the new terms and ask you to agree again.</p><h3>9. Contact</h3><p>${De()}</p><p class="draft-note">Plain-language version written for the CS 124 student version of Steady. It hasn't been reviewed by a lawyer, which would be needed before a public release.</p>`}function Me(n,r){let i=t(r).map(t=>({key:e(t),date:t,record:n.history[e(t)]})),a=i.map(e=>e.record).filter(e=>e!==void 0);return{days:i,max:Math.max(4,...a.map(e=>Math.max(e.done,e.goal))),checkedIn:a.filter(e=>e.mood).length,tasksDone:a.reduce((e,t)=>e+t.done,0),goalsMet:a.filter(e=>e.goal>0&&e.done>=e.goal).length}}var Ne=[[3,3,`okay`],[1,2,`low`],[4,4,`good`],[1,1,`struggling`],[2,3,`okay`],[2,2,`low`]];function Pe(n,r){let i=e(r);t(r).forEach((t,r)=>{let a=e(t);if(a>=i||n.history[a])return;let[o,s,c]=Ne[r%Ne.length];n.history[a]={done:o,goal:s,mood:c,sample:!0}})}function Fe(e){return Object.values(e.history).some(e=>e.sample)}function Ie(e){for(let[t,n]of Object.entries(e.history))n.sample&&delete e.history[t]}function Le(e,t){let n=e.title.trim();if(n===``)return{ok:!1,error:`Give the task a name first.`};let r=e.minutesText.trim()===``?null:Number(e.minutesText);return r!==null&&(!Number.isInteger(r)||r<1||r>240)?{ok:!1,error:`Minutes should be a whole number from 1 to 240, or left blank.`}:{ok:!0,task:{id:`mine-${t}`,title:n,difficulty:e.difficulty,minutes:r,area:`mine`,prompt:e.writing?n:null,frequency:e.frequency}}}var T={state:C(e()),guideOpen:{},onboardingAreas:[],pickerQuery:``,focusPickerOpen:!1,justOnboarded:!1,writing:null,undoIndex:null,pendingEffect:null,ringShownFraction:0,wrapSlides:[],wrapIndex:0},E=Math.random;function D(){try{return window.localStorage}catch{return null}}function O(){Ce(D(),T.state)}function k(e){let t=document.getElementById(e);if(!t)throw Error(`Steady: missing #${e} in index.html`);return t}var Re={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`};function A(e){return e.replace(/[&<>"']/g,e=>Re[e])}function ze(e){return e.charAt(0).toUpperCase()+e.slice(1)}var Be;function j(e){let t=k(`toast`);t.textContent=e,t.classList.add(`show`),clearTimeout(Be),Be=setTimeout(()=>t.classList.remove(`show`),3e3)}function Ve(){window.scrollTo({top:0})}var He={today:`
<svg
  class="lucide lucide-sun"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <circle cx="12" cy="12" r="4" />
  <path d="M12 2v2" />
  <path d="M12 20v2" />
  <path d="m4.93 4.93 1.41 1.41" />
  <path d="m17.66 17.66 1.41 1.41" />
  <path d="M2 12h2" />
  <path d="M20 12h2" />
  <path d="m6.34 17.66-1.41 1.41" />
  <path d="m19.07 4.93-1.41 1.41" />
</svg>
`,journal:`
<svg
  class="lucide lucide-book-open"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M12 5v16" />
  <path d="M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z" />
</svg>
`,progress:`
<svg
  class="lucide lucide-chart-column"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M3 3v16a2 2 0 0 0 2 2h16" />
  <path d="M18 17V9" />
  <path d="M13 17V5" />
  <path d="M8 17v-3" />
</svg>
`,focus:`
<svg
  class="lucide lucide-compass"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <circle cx="12" cy="12" r="10" />
  <path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z" />
</svg>
`,menu:`
<svg
  class="lucide lucide-menu"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M4 5h16" />
  <path d="M4 12h16" />
  <path d="M4 19h16" />
</svg>
`,close:`
<svg
  class="lucide lucide-x"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M18 6 6 18" />
  <path d="m6 6 12 12" />
</svg>
`,back:`
<svg
  class="lucide lucide-arrow-left"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="m12 19-7-7 7-7" />
  <path d="M19 12H5" />
</svg>
`,swap:`
<svg
  class="lucide lucide-shuffle"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="m18 14 4 4-4 4" />
  <path d="m18 2 4 4-4 4" />
  <path d="M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22" />
  <path d="M2 6h1.972a4 4 0 0 1 3.6 2.2" />
  <path d="M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45" />
</svg>
`,trash:`
<svg
  class="lucide lucide-trash"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M10 11v6" />
  <path d="M14 11v6" />
  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
  <path d="M3 6h18" />
  <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
</svg>
`,writing:`
<svg
  class="lucide lucide-pen-line"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M13 21h8" />
  <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
</svg>
`,repeat:`
<svg
  class="lucide lucide-repeat"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="m17 2 4 4-4 4" />
  <path d="M3 11v-1a4 4 0 0 1 4-4h14" />
  <path d="m7 22-4-4 4-4" />
  <path d="M21 13v1a4 4 0 0 1-4 4H3" />
</svg>
`,random:`
<svg
  class="lucide lucide-dices"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <rect width="12" height="12" x="2" y="10" rx="2" ry="2" />
  <path d="m17.92 14 3.5-3.5a2.24 2.24 0 0 0 0-3l-5-4.92a2.24 2.24 0 0 0-3 0L10 6" />
  <path d="M6 18h.01" />
  <path d="M10 14h.01" />
  <path d="M15 6h.01" />
  <path d="M18 9h.01" />
</svg>
`,user:`
<svg
  class="lucide lucide-user-round"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <circle cx="12" cy="8" r="5" />
  <path d="M20 21a8 8 0 0 0-16 0" />
</svg>
`,cloud:`
<svg
  class="lucide lucide-cloud"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
</svg>
`,bell:`
<svg
  class="lucide lucide-bell"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M10.268 21a2 2 0 0 0 3.464 0" />
  <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326" />
</svg>
`,effects:`
<svg
  class="lucide lucide-sparkles"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z" />
  <path d="M20 2v4" />
  <path d="M22 4h-4" />
  <circle cx="4" cy="20" r="2" />
</svg>
`,palette:`
<svg
  class="lucide lucide-palette"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z" />
  <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
  <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
  <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
  <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
</svg>
`,contrast:`
<svg
  class="lucide lucide-sun-moon"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M12 2v2" />
  <path d="M14.837 16.385a6 6 0 1 1-7.223-7.222c.624-.147.97.66.715 1.248a4 4 0 0 0 5.26 5.259c.589-.255 1.396.09 1.248.715" />
  <path d="M16 12a4 4 0 0 0-4-4" />
  <path d="m19 5-1.256 1.256" />
  <path d="M20 12h2" />
</svg>
`,download:`
<svg
  class="lucide lucide-download"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M12 15V3" />
  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
  <path d="m7 10 5 5 5-5" />
</svg>
`,help:`
<svg
  class="lucide lucide-life-buoy"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <circle cx="12" cy="12" r="10" />
  <path d="m4.93 4.93 4.24 4.24" />
  <path d="m14.83 9.17 4.24-4.24" />
  <path d="m14.83 14.83 4.24 4.24" />
  <path d="m9.17 14.83-4.24 4.24" />
  <circle cx="12" cy="12" r="4" />
</svg>
`,info:`
<svg
  class="lucide lucide-info"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <circle cx="12" cy="12" r="10" />
  <path d="M12 16v-4" />
  <path d="M12 8h.01" />
</svg>
`,lock:`
<svg
  class="lucide lucide-lock"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
</svg>
`,document:`
<svg
  class="lucide lucide-file-text"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
  <path d="M14 2v5a1 1 0 0 0 1 1h5" />
  <path d="M10 9H8" />
  <path d="M16 13H8" />
  <path d="M16 17H8" />
</svg>
`,check:`
<svg
  class="lucide lucide-check"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M20 6 9 17l-5-5" />
</svg>
`,play:`
<svg
  class="lucide lucide-circle-play"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z" />
  <circle cx="12" cy="12" r="10" />
</svg>
`,plus:`
<svg
  class="lucide lucide-plus"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M5 12h14" />
  <path d="M12 5v14" />
</svg>
`,chevron:`
<svg
  class="lucide lucide-chevron-right"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="m9 18 6-6-6-6" />
</svg>
`,phone:`
<svg
  class="lucide lucide-phone"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
</svg>
`,message:`
<svg
  class="lucide lucide-message-circle"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" />
</svg>
`,external:`
<svg
  class="lucide lucide-external-link"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M15 3h6v6" />
  <path d="M10 14 21 3" />
  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
</svg>
`,preferences:`
<svg
  class="lucide lucide-sliders-horizontal"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M10 5H3" />
  <path d="M12 19H3" />
  <path d="M14 3v4" />
  <path d="M16 17v4" />
  <path d="M21 12h-9" />
  <path d="M21 19h-5" />
  <path d="M21 5h-7" />
  <path d="M8 10v4" />
  <path d="M8 12H3" />
</svg>
`,"cat-movement":`
<svg
  class="lucide lucide-footprints"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z" />
  <path d="M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z" />
  <path d="M16 17h4" />
  <path d="M4 13h4" />
</svg>
`,"cat-calm":`
<svg
  class="lucide lucide-wind"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M12.8 19.6A2 2 0 1 0 14 16H2" />
  <path d="M17.5 8a2.5 2.5 0 1 1 2 4H2" />
  <path d="M9.8 4.4A2 2 0 1 1 11 8H2" />
</svg>
`,"cat-connection":`
<svg
  class="lucide lucide-users"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
  <path d="M16 3.128a4 4 0 0 1 0 7.744" />
  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
  <circle cx="9" cy="7" r="4" />
</svg>
`,"cat-reflection":`
<svg
  class="lucide lucide-notebook-pen"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4" />
  <path d="M2 6h4" />
  <path d="M2 10h4" />
  <path d="M2 14h4" />
  <path d="M2 18h4" />
  <path d="M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z" />
</svg>
`,"cat-rest":`
<svg
  class="lucide lucide-heart"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" />
</svg>
`,"cat-home":`
<svg
  class="lucide lucide-house"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
  <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
</svg>
`,"cat-outside":`
<svg
  class="lucide lucide-trees"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z" />
  <path d="M7 16v6" />
  <path d="M13 19v3" />
  <path d="M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5" />
</svg>
`,"cat-fun":`
<svg
  class="lucide lucide-paintbrush"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="m14.622 17.897-10.68-2.913" />
  <path d="M18.376 2.622a1 1 0 1 1 3.002 3.002L17.36 9.643a.5.5 0 0 0 0 .707l.944.944a2.41 2.41 0 0 1 0 3.408l-.944.944a.5.5 0 0 1-.707 0L8.354 7.348a.5.5 0 0 1 0-.707l.944-.944a2.41 2.41 0 0 1 3.408 0l.944.944a.5.5 0 0 0 .707 0z" />
  <path d="M9 8c-1.804 2.71-3.97 3.46-6.583 3.948a.507.507 0 0 0-.302.819l7.32 8.883a1 1 0 0 0 1.185.204C12.735 20.405 16 16.792 16 15" />
</svg>
`,"cat-comfort":`
<svg
  class="lucide lucide-mountain"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
</svg>
`};function Ue(e,t,n,r){return`<svg class="${r}" width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${n}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${e}</svg>`}var We=new Map;function Ge(e){let t=We.get(e);if(t===void 0){let n=He[e];t=n.slice(n.indexOf(`>`)+1,n.lastIndexOf(`</svg>`)).replace(/\s+/g,` `).trim(),We.set(e,t)}return t}function M(e,t=20){return Ue(Ge(e),t,1.8,`icon`)}var N=`<circle cx="9" cy="10" r="1.1" fill="currentColor" stroke="none"/><circle cx="15" cy="10" r="1.1" fill="currentColor" stroke="none"/>`,Ke={good:`<path d="M7.6 10.3q1.4-1.6 2.8 0"/><path d="M13.6 10.3q1.4-1.6 2.8 0"/><path d="M7.8 13.6q4.2 4.8 8.4 0"/>`,okay:`${N}<path d="M8.8 14.4q3.2 2.4 6.4 0"/>`,low:`${N}<path d="M9 15.6q3-1.4 6 0"/>`,struggling:`<path d="M7.7 8.2l2.6 1"/><path d="M16.3 8.2l-2.6 1"/>${N.replace(/cy="10"/g,`cy="11"`)}<path d="M8.6 16.6q3.4-2.8 6.8 0"/>`};function P(e,t=24){return Ue(`<circle cx="12" cy="12" r="9.3"/>${Ke[e]}`,t,1.7,`mood-face mood-${e}`)}function F(e,t=20){return M(`cat-${e}`,t)}function qe(e=28){return`<svg class="logo" width="${e}" height="${e}" viewBox="0 0 32 32" aria-hidden="true" focusable="false"><rect width="32" height="32" rx="9" fill="var(--sage)"/><path d="M9.5 17.2c1.6-3.6 3.3-3.6 4.4 0s2.8 3.6 4.4 0 2.6-3.4 4.2-1.2" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>`}function Je(e=document){e.querySelectorAll(`[data-icon]`).forEach(e=>{let t=e.dataset.icon??``,n=Number(e.dataset.size??20);e.innerHTML=t===`logo`?qe(n):t in He?M(t,n):``})}function Ye(e,t){let n=`${f[e].label} ${f[e].desc} ${te[e]??``}`.toLowerCase();return t.toLowerCase().split(/\s+/).filter(Boolean).every(e=>n.includes(e))}function Xe(e){return[...p,...ee].filter(t=>Ye(t,e))}function I(e){return e===`onboard`?T.onboardingAreas:T.state.focusAreas}function L(e,t){let n=t.includes(e);return`<button class="picker-row${n?` on`:``}" data-action="pick-area" data-area="${e}" aria-pressed="${n}"><span class="picker-box">${n?M(`check`,14):``}</span><span><strong>${f[e].label}</strong><span class="picker-desc">${f[e].desc}</span></span></button>`}function R(e){let t=I(e),n=T.pickerQuery.trim();if(n===``)return`<div class="picker-group">Common areas</div>`+p.map(e=>L(e,t)).join(``)+`<div class="picker-group">More areas</div>`+ee.map(e=>L(e,t)).join(``);let r=Xe(n);return r.length===0?`<div class="empty">Nothing matches "${A(n)}". Try another word, or make your own tasks in Focus → My tasks.</div>`:r.map(e=>L(e,t)).join(``)}function Ze(e){let t=I(e);return`<div class="chips picker-selected">${t.length?t.map(e=>`<button class="chip on" data-action="pick-area" data-area="${e}" aria-label="Remove ${f[e].label}">${f[e].label}${M(`close`,14)}</button>`).join(``):`<span class="muted">None chosen yet.</span>`}</div>`}function Qe(e){return`<div class="picker" data-scope="${e}">`+Ze(e)+`<input class="picker-search" type="search" placeholder="Search, e.g. sleep, sad, homesick" aria-label="Search focus areas" value="${A(T.pickerQuery)}"><div class="picker-list" role="group" aria-label="Focus areas">${R(e)}</div></div>`}function $e(e){let t=e.dataset.scope,n=e.querySelector(`.picker-selected`);n?.insertAdjacentHTML(`afterend`,Ze(t)),n?.remove();let r=e.querySelector(`.picker-list`);r&&(r.innerHTML=R(t))}function et(){return`<p class="muted" style="margin-top:16px;text-align:center">Need support right now? <button class="link-btn" data-action="open-help">Get help now</button></p>`}function tt(){return`<div class="welcome-mark">${qe(52)}</div><div class="step">Step 1 of 2</div><h2>Welcome to Steady</h2><p>Small daily steps, planned around how you feel. Each day you'll check in, get a few tasks sized to your energy, and see your progress.</p><div class="disclaimer">Steady is a self-help companion, not treatment, and it doesn't diagnose anything.</div><p style="margin-bottom:10px"><strong>What would you like to work on?</strong> Choose any, or skip. You can change these later in the Focus tab.</p>`+Qe(`onboard`)+`<label class="agree-row"><input type="checkbox" id="agree-terms"><span>I'm 13 or older, and I understand Steady is a self-help tool, not medical care or a crisis service. I agree to the ${w(`terms`,`Terms of use`)} and ${w(`privacy`,`Privacy policy`)}.</span></label><div class="error" id="agree-error"></div><button class="btn" style="margin-top:8px" data-action="finish-onboarding">Continue</button><p class="muted" style="margin-top:10px">Under 13? Steady isn't made for you yet. A parent, guardian, or school counselor can help you find support.</p>`+et()}function nt(){let e=new Date().getHours(),t=e<12?`Good morning`:e<18?`Good afternoon`:`Good evening`;return T.state.profileName?`${t}, ${A(T.state.profileName)}`:t}function rt(){let e=T.state,t=e.mood?``:`<div class="step">${T.justOnboarded?`Step 2 of 2`:nt()}</div>`,i=r.map(e=>{let t=n[e],r=`${t.mix.length} ${t.mix.length===1?`task`:`tasks`}`;return`<button class="mood-btn" data-action="pick-mood" data-mood="${e}"><span class="mood-badge mood-${e}">${P(e,30)}</span><span class="mood-text"><strong>${t.label}</strong><span class="sub">${r}: ${t.plan}</span></span>${M(`chevron`,18)}</button>`}).join(``);return t+`<h2>How are you feeling today?</h2><p>This sets how many tasks you get and how hard they are. There's no wrong answer.</p>`+i+(e.mood?`<button class="btn secondary" data-action="close-checkin">Keep today's plan</button>`:``)+et()}function it(){k(`checkin-sheet`).innerHTML=T.state.onboarded?rt():tt()}function z(){T.onboardingAreas=[...T.state.focusAreas],T.pickerQuery=``,it(),k(`checkin-overlay`).classList.add(`open`)}function B(){k(`checkin-overlay`).classList.remove(`open`)}var at={movement:{label:`Movement`,desc:`Walks, stretches, and exercise`},calm:{label:`Calm & breathing`,desc:`Breathing, grounding, and slowing down`},connection:{label:`Connection`,desc:`Messages, calls, and time with people`},reflection:{label:`Reflection & writing`,desc:`Noticing, journaling, and kinder thoughts`},rest:{label:`Rest & self-care`,desc:`Food, sleep, breaks, and screen time`},home:{label:`Home & routine`,desc:`Tidying, planning, and daily habits`},outside:{label:`Getting outside`,desc:`Daylight, fresh air, and new places`},fun:{label:`Fun & creativity`,desc:`Music, hobbies, and making things`},comfort:{label:`Comfort-zone steps`,desc:`Small, gentle steps toward things that feel hard`}},ot=[`movement`,`calm`,`connection`,`reflection`,`rest`,`home`,`outside`,`fun`,`comfort`],st=[[`more`,`More`],[`normal`,`Normal`],[`skip`,`Skip`]];function ct(){return`<p class="muted">Choose what kinds of tasks show up in your daily plan. <strong>More</strong> makes a kind come up more often. <strong>Skip</strong> keeps it out of your plan, though you can still add those tasks yourself from the Focus tab.</p><div class="pref-list">${ot.map(e=>{let t=at[e],n=T.state.categoryPrefs[e]??`normal`,r=st.map(([t,r])=>{let i=n===t;return`<button role="radio" aria-checked="${i}" class="${i?`on ${t}`:``}" data-action="set-preference" data-category="${e}" data-preference="${t}">${r}</button>`}).join(``);return`<div class="pref-row"><div class="pref-label"><span class="pref-icon">${F(e)}</span><span><strong id="pref-${e}">${t.label}</strong><span>${t.desc}</span></span></div><div class="segmented pref-choices" role="radiogroup" aria-labelledby="pref-${e}">${r}</div></div>`}).join(``)}</div><p class="fine-print">Preferences change your next plan. To use them today, check in again from the Today tab. If you skip a lot, Steady fills in with everyday basics so your plan is never empty.</p>`}function lt(){let e=k(`page`),t=e.scrollTop;k(`page-body`).innerHTML=ct(),e.scrollTop=t}function ut(){let e=T.state,t=e.agreedAt?`You confirmed you're 13 or older and agreed to the Terms of use and Privacy policy on `+new Date(e.agreedAt).toLocaleDateString(void 0,{month:`long`,day:`numeric`,year:`numeric`})+`.`:`You haven't agreed to the current Terms of use and Privacy policy yet. You'll be asked the next time you start fresh.`;return`<form class="form" data-form="profile" novalidate><label for="profile-name">Your name (optional)</label><input id="profile-name" type="text" maxlength="40" autocomplete="given-name" placeholder="What should Steady call you?" value="${A(e.profileName)}"><div class="error" id="profile-error"></div><button class="btn" type="submit">Save</button></form><p class="muted" style="margin-top:10px">Your name stays on this device and is only used to greet you.</p><h3>Agreement</h3><p>${t}</p><p>${w(`terms`,`Terms of use`)} · ${w(`privacy`,`Privacy policy`)}</p>`}var dt={profile:{title:`Profile`,html:ut},preferences:{title:`Task preferences`,html:ct},account:{title:`Account & backup`,html:Oe},about:{title:`About Steady`,html:ke},privacy:{title:`Privacy policy`,html:Ae},terms:{title:`Terms of use`,html:je}};function ft(e){let t=dt[e];if(!t)return;k(`page-title`).textContent=t.title,k(`page-body`).innerHTML=t.html();let n=k(`page`);n.classList.add(`open`),n.scrollTop=0,n.querySelector(`.page-head button`)?.focus()}function V(){k(`page`).classList.remove(`open`)}function pt(){let e=k(`profile-name`).value.trim().replace(/\s+/g,` `);e.length>40?k(`profile-error`).textContent=`Please keep your name under 40 characters.`:(T.state.profileName=e,O(),j(e?`Saved. Hi, ${e}!`:`Name removed.`))}var mt=[`var(--sage)`,`var(--medium)`,`var(--lavender)`,`var(--hard)`];function H(e,t){T.pendingEffect={index:e,kind:t,goal:t===`done`&&v(T.state)===T.state.goal}}function ht(e){let t=!navigator.userActivation||navigator.userActivation.hasBeenActive;typeof navigator.vibrate==`function`&&t&&navigator.vibrate(e)}function gt(e,t,n){let r=e.getBoundingClientRect();for(let e=0;e<t;e++){let i=2*Math.PI*e/t+Math.random()*.5,a=n*(.6+Math.random()*.4),o=document.createElement(`span`);o.className=`spark`,o.style.left=`${r.left+r.width/2}px`,o.style.top=`${r.top+r.height/2}px`,o.style.background=mt[e%mt.length],o.style.setProperty(`--dx`,`${Math.cos(i)*a}px`),o.style.setProperty(`--dy`,`${Math.sin(i)*a}px`),document.body.appendChild(o),setTimeout(()=>o.remove(),800)}}var _t=null;function vt(e,t){if(T.state.sound)try{_t??=new AudioContext;let n=_t;e.forEach((e,r)=>{let i=n.currentTime+r*.14,a=n.createOscillator(),o=n.createGain();a.type=`sine`,a.frequency.value=e,o.gain.setValueAtTime(0,i),o.gain.linearRampToValueAtTime(t,i+.02),o.gain.exponentialRampToValueAtTime(1e-4,i+1.1),a.connect(o).connect(n.destination),a.start(i),a.stop(i+1.2)})}catch{}}function yt(e){let t=document.querySelector(`[data-action="toggle"][data-index="${e.index}"]`),n=t?.closest(`.task`);if(!t||!n)return;if(e.kind===`undone`){n.classList.add(`just-undone`);return}let r=c[T.state.mood??`okay`];if(T.state.effects&&(t.classList.add(`just-checked`),n.classList.add(`just-done`),r.sparks&&gt(t,r.sparks,r.reach),r.buzz&&ht(r.buzz)),e.goal){let e=document.querySelector(`.ring`);T.state.effects&&e&&(e.classList.add(`goal-pulse`),gt(e,r.goalSparks,r.goalReach),ht([12,60,12])),vt([523,659,784].map(e=>e*r.pitch),r.volume)}else vt([784*r.pitch],r.volume)}function bt(){let e=document.querySelector(`.ring .fill`);if(!e)return;let t=Number(e.dataset.fraction),n=Number(e.dataset.circumference)*(1-t);requestAnimationFrame(()=>requestAnimationFrame(()=>e.style.strokeDashoffset=String(n))),T.ringShownFraction=t}var xt={grounding:{title:`Grounding when anxiety spikes`,time:`4 min`,steps:[`Name 5 things you can see, slowly.`,`Notice 4 things you can touch: clothes, chair, floor.`,`Listen for 3 sounds, near or far.`,`Breathe in for 4 counts and out for 6. The long exhale helps your body settle.`]},triggers:{title:`Spotting your anxiety triggers`,time:`6 min`,steps:[`When anxiety rises, note what happened just before: a thought, a place, a message.`,`After a few days, look for the 2 or 3 situations that keep coming up.`,`Ask: is this actually dangerous right now, or does it just feel familiar?`,`Pick one trigger and plan one small response for next time.`]},morning:{title:`A morning that's easier to start`,time:`5 min`,steps:[`Choose one tiny anchor: water, opening a window, one stretch.`,`Keep it under 2 minutes, so skipping feels harder than doing.`,`Attach it to something you already do, like brushing your teeth.`,`Let the rest of the morning stay flexible.`]},reframe:{title:`Reframing a harsh thought`,time:`6 min`,steps:[`Write the thought down, word for word.`,`Name the pattern: all-or-nothing, mind-reading, catastrophizing?`,`List one or two facts that don't fit the thought.`,`Rewrite it so it's fair, not falsely positive.`]},winddown:{title:`Winding down for sleep`,time:`5 min`,steps:[`Pick a regular wake-up time and keep it, even after a bad night.`,`Start dimming lights and screens an hour before bed.`,`If you can't sleep after about 20 minutes, get up and do something calm until you're sleepy.`,`Keep the bed for sleep, not scrolling.`]},ladder:{title:`Small steps out of your comfort zone`,time:`7 min`,steps:[`Name the situation you're avoiding in one sentence.`,`List 5 versions of it, from easiest to hardest.`,`Do only the easiest version today. It should feel almost too easy.`,`Repeat a step until it feels routine before climbing to the next.`]},talking:{title:`Opening up to someone`,time:`5 min`,steps:[`Pick one person who has listened well before.`,`Try a low-pressure opener: "Something's been on my mind, can I tell you about it?"`,`Start with one honest sentence. You don't need the whole story.`,`Let them respond before adding more.`]},cooldown:{title:`Cooling down before you react`,time:`4 min`,steps:[`Learn your early signs: a tight jaw, heat in your face, a fast heartbeat.`,`When you notice them, pause. Step away for 10 minutes if you can.`,`Breathe slowly or move your body until the wave passes.`,`Come back and say what you need: "I feel ___ when ___."`]},loops:{title:`Getting out of a thought loop`,time:`4 min`,steps:[`Notice the loop and name it: "I'm replaying this again."`,`Ask: am I solving something, or just going over it?`,`If you're solving, write down one next step and stop there.`,`If you're replaying, move your attention: use your hands, change rooms, or step outside.`]},scrollbreak:{title:`Taking a break from scrolling`,time:`3 min`,steps:[`Notice the urge to pick up your phone before you act on it.`,`Take three slow breaths first.`,`Ask: what do I actually need right now? Rest, company, or a distraction?`,`Do that instead, or set a timer so scrolling has an end.`]},starttiny:{title:`Starting when you can't start`,time:`4 min`,steps:[`Shrink the first step until it's silly: put your shoes on, get out one thing.`,`Set a timer for 5 minutes and promise yourself you can stop after.`,`Remove one distraction: phone in another room, one tab only.`,`When the timer ends, decide again. Stopping is allowed.`]}},U=96,St=42;function Ct(e,t){let n=U/2,r=2*Math.PI*St;return`<svg width="${U}" height="${U}" viewBox="0 0 ${U} ${U}"><circle class="track" cx="${n}" cy="${n}" r="${St}"/><circle class="fill" cx="${n}" cy="${n}" r="${St}" data-fraction="${t?Math.min(1,e/t):0}" data-circumference="${r}" style="stroke-dasharray:${r};stroke-dashoffset:${r*(1-T.ringShownFraction)}"/></svg>`}function wt(e){return`<span class="tag ${e}">${ze(e)}</span>`}function Tt(e){return`~${e} min`}function Et(e){return e===`mine`?`My task`:f[e].label}function Dt(e,t){let n=[];if(e.prompt&&n.push(`<span class="meta-item writing">${M(`writing`,13)}Writing</span>`),e.area===`mine`)n.push(_(e)?`<span class="meta-item">${M(`repeat`,13)}Every day</span>`:`<span class="meta-item">${M(`random`,13)}Sometimes</span>`);else if(e.category){let r=at[e.category].label;n.push(t.showArea?`<span class="meta-item" title="${r}">${F(e.category,13)}${A(Et(e.area))}</span>`:`<span class="meta-item">${F(e.category,13)}${r}</span>`)}return e.minutes&&n.push(`<span class="meta-item">${Tt(e.minutes)}</span>`),`<div class="task-meta">${wt(e.difficulty)}${n.join(`<span class="dot" aria-hidden="true">·</span>`)}</div>`}function Ot(e,t){return`<form class="form" data-form="${e}" novalidate><label for="${e}-title">Task name</label><input id="${e}-title" type="text" maxlength="80" placeholder="e.g. Call my grandma" autocomplete="off"><div class="row"><div><label for="${e}-difficulty">Difficulty</label><select id="${e}-difficulty"><option value="easy">Easy</option><option value="medium">Medium</option><option value="hard">Hard</option></select></div><div><label for="${e}-minutes">Minutes (optional)</label><input id="${e}-minutes" type="number" min="1" max="240" inputmode="numeric"></div></div><label for="${e}-frequency">How often should it show up?</label><select id="${e}-frequency"><option value="sometimes">Sometimes (picked at random)</option><option value="daily">Every day</option></select><label class="checkbox-row"><input id="${e}-writing" type="checkbox"> Writing task (a short answer, saved to your journal)</label><div class="error" id="${e}-error"></div><button class="btn" type="submit">${t}</button></form>`}function kt(e,t){let n=T.state,r=n.mood?de(n).includes(e.id)?`<button class="small-btn added" disabled>${M(`check`,14)}Added</button>`:`<button class="small-btn" data-action="add-to-today" data-id="${e.id}" aria-label="Add ${A(e.title)} to today">${M(`plus`,14)}Add</button>`:`<button class="small-btn" disabled title="Check in first">Add</button>`,i=e.area===`mine`?`<button class="link-btn" data-action="toggle-frequency" data-id="${e.id}">${_(e)?`Make it sometimes`:`Make it every day`}</button>`:``,a=t?`<button class="icon-btn" data-action="delete-custom" data-id="${e.id}" aria-label="Delete ${A(e.title)}">${M(`trash`,18)}</button>`:``;return`<li class="task"><div class="task-body"><div class="task-title">${A(e.title)}</div>`+Dt(e,{showArea:!1})+`${i}</div>${r}${a}</li>`}function At(e){return e.map(e=>{let t=xt[e];return`<details class="guide" data-guide="${e}"${T.guideOpen[e]?` open`:``}><summary><span>${t.title}</span><span class="muted">~${t.time}</span></summary><ol>${t.steps.map(e=>`<li>${A(e)}</li>`).join(``)}</ol><div class="video-slot">${M(`play`,18)}<span>A short video from a trusted source (for example NHS or a university health center) will go here.</span></div></details>`}).join(``)}function jt(){let e=T.state.customTasks;return`<div class="card"><p class="muted">Tasks you write yourself. They can show up in your daily plan at their difficulty.</p>`+(e.length===0?`<div class="empty">No tasks of your own yet.</div>`:`<ul class="task-list" style="margin-top:12px">${e.map(e=>kt(e,!0)).join(``)}</ul>`)+`<details class="add"><summary>${M(`plus`,16)}Create a task</summary>${Ot(`mine`,`Create task`)}</details></div>`}function Mt(e){let t=f[e],n=re(e).sort((e,t)=>i.indexOf(e.difficulty)-i.indexOf(t.difficulty));return`<div class="card"><p class="muted">${t.desc}</p></div><div class="section-head"><h2>Guides</h2><span>Tap to open</span></div>`+At(t.guides)+`<div class="section-head"><h2>Extra tasks</h2><span>${n.length} for ${t.label.toLowerCase()}</span></div><p class="muted" style="margin-bottom:10px">Your daily plan already picks from these. Finished it and want more? Add one to today. <button class="link-btn" data-action="open-page" data-page="preferences">Task preferences</button></p><ul class="task-list">${n.map(e=>kt(e,!1)).join(``)}</ul><p class="muted" style="margin-top:16px">Learn more from trusted sources: <a href="https://www.nimh.nih.gov/health/topics" target="_blank" rel="noopener">NIMH health topics</a> · <a href="https://www.nhs.uk/every-mind-matters/" target="_blank" rel="noopener">NHS Every Mind Matters</a></p>`}function Nt(){let e=T.state,t=`<div class="section-head" style="margin-top:0"><h2>Your focus areas</h2><span>${e.focusAreas.length} chosen</span></div><details class="card picker-card"${T.focusPickerOpen?` open`:``} id="focus-picker-details"><summary>Change focus areas</summary><p class="muted" style="margin:8px 0 12px">These decide which tasks and guides you get. This isn't a diagnosis.</p>`+Qe(`focus`)+`</details>`,n=[...e.focusAreas,`general`,`mine`];return e.focusTab&&n.includes(e.focusTab)||(e.focusTab=n[0]),t+=`<div class="tabs-row" role="tablist">`+n.map(t=>`<button class="chip${e.focusTab===t?` on`:``}" role="tab" data-action="focus-tab" data-area="${t}">${t===`mine`?`My tasks`:f[t].label}</button>`).join(``)+`</div>`,t+(e.focusTab===`mine`?jt():Mt(e.focusTab))}function Pt(e){let t=new Date(e.date).toLocaleDateString(void 0,{weekday:`short`,month:`short`,day:`numeric`});return`<div class="entry"><div class="entry-top"><span class="entry-date">${e.mood?P(e.mood,16):``}`+t+(e.mood?` · ${n[e.mood].label}`:``)+(e.edited?` · edited`:``)+`</span><button class="icon-btn" data-action="delete-entry" data-id="${e.id}" aria-label="Delete entry">${M(`trash`,17)}</button></div>`+(e.fromTask?`<div class="entry-source">${M(`writing`,13)}From task: ${A(e.fromTask)}</div>`:``)+(e.prompt&&e.prompt!==e.fromTask?`<div class="entry-prompt">${A(e.prompt)}</div>`:``)+`<div class="entry-text">${A(e.text)}</div></div>`}function Ft(){let e=T.state,t=`<div class="section-head" style="margin-top:0"><h2>Journal</h2><span>Private, stays on this device</span></div><div class="card form"><label>Start with a prompt, or just write</label><div class="chips" id="prompt-chips">`+[...s.any,...e.mood?s[e.mood]:[]].map(e=>`<button class="chip prompt" data-action="prompt" data-prompt="${A(e)}">${A(e)}</button>`).join(``)+`</div><label for="journal-text">Your entry</label><textarea id="journal-text" placeholder="Write whatever comes to mind…"></textarea><div class="error" id="journal-error"></div><button class="btn" data-action="save-entry">Save entry</button></div>`;return t+=`<div class="section-head"><h2>Past entries</h2><span>${e.journal.length}</span></div>`,t+=e.journal.length===0?`<div class="card empty">No entries yet. Your first one can be a single sentence.</div>`:`<div class="card">${[...e.journal].reverse().map(Pt).join(``)}</div>`,t}function It(){let t=new Date,n=e(t),r=Me(T.state,t),i=r.days.map(({key:e,date:t,record:i})=>{let a=i?.done??0,o=i?.goal??0,s=o>0&&a>=o,c=t.toLocaleDateString(void 0,{weekday:`short`});return`<div class="bar-col${e===n?` today`:``}"><div class="bar-area">`+(o?`<div class="goal-tick" style="bottom:${o/r.max*100}%"></div>`:``)+`<div class="bar${s?` met`:``}" style="height:${a/r.max*100}%" title="${a} of ${o}"></div></div><div class="bar-mood">${i?.mood?P(i.mood,18):``}</div><div class="bar-day">${c}</div></div>`}).join(``),a=`<div class="section-head" style="margin-top:0"><h2>This week</h2><span>Showing up counts, not streaks</span></div><div class="stats"><div class="stat"><div class="val">${r.checkedIn}</div><div class="lbl">Days checked in</div></div><div class="stat"><div class="val">${r.tasksDone}</div><div class="lbl">Tasks done</div></div><div class="stat"><div class="val">${r.goalsMet}</div><div class="lbl">Goals reached</div></div></div><div class="card" style="margin-top:16px"><div class="bars">${i}</div><div class="legend">Bars are tasks done. Dashed lines are each day's goal. Dark bars mean the goal was reached.</div></div>`;return r.checkedIn===0&&(a+=`<p class="muted">Your week fills in as you check in each day.</p>`),a+=Fe(T.state)?`<button class="btn secondary" data-action="clear-sample">Remove sample data</button>`:`<button class="btn secondary" data-action="add-sample">Preview with sample data</button>`,a}function Lt(e,t){return e>t?`Goal reached, plus ${e-t} bonus`:e===t?`Goal reached`:e===0?`One step at a time`:`${t-e} to go`}function Rt(){let e=T.state;return`<ul class="task-list">${e.plan.map((t,n)=>{let r=g(e,t.taskId);if(!r)return``;let i=t.done||_(r)?``:`<button class="icon-btn" data-action="swap" data-index="${n}" title="Swap for another task" aria-label="Swap for another task">${M(`swap`,18)}</button>`;return`<li class="task${t.done?` done`:``}"><button class="check" data-action="toggle" data-index="${n}" aria-label="${t.done?`Mark not done: `:`Mark done: `}${A(r.title)}">${t.done?M(`check`,16):``}</button><div class="task-body"><div class="task-title">${A(r.title)}</div>${Dt(r,{showArea:!0})}</div>`+i+`<button class="icon-btn" data-action="remove" data-index="${n}" title="Remove from today" aria-label="Remove from today">${M(`close`,18)}</button></li>`}).join(``)}</ul>`}function zt(){return`<section class="card checkin-card"><div class="face-row" aria-hidden="true">${r.map(e=>P(e,30)).join(``)}</div><h2>How are you feeling today?</h2><p class="muted">Check in to get a plan sized to your energy.</p><button class="btn" data-action="open-checkin">Check in</button></section>`}function Bt(){let e=T.state;if(!e.mood)return zt();let t=n[e.mood],r=v(e),i=`<section class="card progress-card" aria-live="polite"><div class="ring">${Ct(r,e.goal)}<div class="ring-label"><div class="num">${r}<span>/${e.goal}</span></div><div class="cap">today</div></div></div><div class="progress-text"><h1>${Lt(r,e.goal)}</h1><div class="mood-line">${P(e.mood,18)}<span>Feeling ${t.label.toLowerCase()} · ${t.plan}</span></div><button class="link-btn" data-action="open-checkin">Check in again</button></div></section>`;if(e.message&&(i+=`<div class="message" role="status"><p>${A(e.message)}</p><button class="icon-btn" data-action="dismiss-message" aria-label="Dismiss message">${M(`close`,16)}</button></div>`),r>0){let t=r>=e.goal;i+=`<button class="wrap-btn${t?` ready`:``}" data-action="open-wrap">${M(`play`,18)}<span>${t?`Your day, wrapped`:`Wrap up your day so far`}</span>${M(`chevron`,18)}</button>`}return i+=`<div class="section-head"><h2>Today's plan</h2><span>${r} of ${e.plan.length} done</span></div>`,i+=e.plan.length===0?`<div class="card empty">No tasks fit today's plan yet. Add your own below, or choose focus areas in the Focus tab.</div>`:Rt(),i+=`<details class="add"><summary>${M(`plus`,16)}Add your own task</summary>${Ot(`today`,`Add to today`)}</details>`,i}var Vt={today:Bt,journal:Ft,progress:It,focus:Nt};function W(){k(`screen`).innerHTML=Vt[T.state.tab](),bt(),T.pendingEffect&&T.state.tab===`today`&&yt(T.pendingEffect),T.pendingEffect=null,document.querySelectorAll(`.nav button`).forEach(e=>{let t=e.dataset.tab===T.state.tab;e.classList.toggle(`on`,t),t?e.setAttribute(`aria-current`,`page`):e.removeAttribute(`aria-current`)})}function G(){me(T.state),O(),W()}function Ht(e){k(`sheet-content`).innerHTML=e,k(`sheet-overlay`).classList.add(`open`)}function K(){k(`sheet-overlay`).classList.remove(`open`)}var Ut=[[`system`,`Phone setting`],[`light`,`Light`],[`dark`,`Dark`]],Wt=[[`sage`,`Sage`,`#3F6350`,`#DEEAE1`],[`sunrise`,`Sunrise`,`#C2502B`,`#FFD9C2`],[`midnight`,`Midnight`,`#8B7CFF`,`#0E1022`],[`paper`,`Paper`,`#1A1A1A`,`#FBFAF6`]];function Gt(e){return Wt.some(([t])=>t===e)}var Kt=typeof window.matchMedia==`function`?window.matchMedia(`(prefers-color-scheme: dark)`):null;function q(){let{look:e,theme:t}=T.state,n=document.documentElement;e===`midnight`||t===`dark`||t===`system`&&Kt?.matches===!0?n.dataset.dark=``:delete n.dataset.dark,e===`sage`?delete n.dataset.look:n.dataset.look=e}function qt(){Kt?.addEventListener(`change`,q)}function Jt(){if(T.state.journal.length===0){j(`Your journal is empty, so there's nothing to export yet.`);return}let t=new Blob([ye(T.state.journal,new Date)],{type:`text/plain`}),n=document.createElement(`a`);n.href=URL.createObjectURL(t),n.download=`steady-journal-${e()}.txt`,document.body.appendChild(n),n.click(),n.remove(),setTimeout(()=>URL.revokeObjectURL(n.href),1e3),j(`Journal exported. Check your downloads.`)}function Yt(){Ht(`<h2 id="sheet-title">Delete all your data?</h2><p>This permanently removes your tasks, journal entries, drafts, progress, and settings from this device. It can't be undone.</p>`+(T.state.journal.length?`<button class="btn secondary" data-action="export-journal">Export my journal first</button>`:``)+`<button class="btn danger" data-action="delete-all">Delete everything</button><button class="btn secondary" data-action="close-sheet">Cancel</button>`)}function Xt(){we(D()),T.state=C(e()),T.justOnboarded=!1,T.pickerQuery=``,T.focusPickerOpen=!1,T.ringShownFraction=0,K(),V(),q(),W(),z(),j(`All your data was deleted. Steady is starting fresh.`)}function J(e){return`<div class="drawer-group">${e}</div>`}function Y(e,t,n,r={}){return`<button class="drawer-item${r.danger?` danger`:``}" ${n}><span class="ico">${M(e)}</span><span class="label">${t}</span>${r.opensPage?`<span class="chev">${M(`chevron`,18)}</span>`:``}</button>`}function Zt(e,t,n,r){return`<button class="drawer-item" data-action="${n}" role="switch" aria-checked="${r}"><span class="ico">${M(e)}</span><span class="label">${t}</span><span class="switch${r?` on`:``}"></span></button>`}function Qt(e,t,n){return`<div class="drawer-item static"><span class="ico">${M(e)}</span><span class="label" id="${n}">${t}</span></div>`}function $t(){let e=Wt.map(([e,t,n,r])=>{let i=T.state.look===e;return`<button role="radio" aria-checked="${i}" class="look-swatch${i?` on`:``}" data-action="set-look" data-look-choice="${e}"><span class="swatch" style="background:linear-gradient(135deg,${n} 50%,${r} 50%)"></span>${t}</button>`}).join(``);return Qt(`palette`,`Theme`,`look-label`)+`<div class="look-grid" role="radiogroup" aria-labelledby="look-label">${e}</div>`}function en(){let e=Ut.map(([e,t])=>{let n=T.state.theme===e;return`<button role="radio" aria-checked="${n}" class="${n?`on`:``}" data-action="set-theme" data-theme-choice="${e}">${t}</button>`}).join(``);return Qt(`contrast`,`Light or dark`,`appearance-label`)+`<div class="segmented" role="radiogroup" aria-labelledby="appearance-label">${e}</div>`+(T.state.look===`midnight`?`<div class="drawer-note">The Midnight theme is always dark.</div>`:``)}function tn(){let e=T.state,t=e.profileName;k(`drawer-panel`).innerHTML=`<button class="drawer-profile" data-action="open-page" data-page="profile"><span class="avatar">${t?A(t.charAt(0).toUpperCase()):M(`user`,22)}</span><span class="who"><strong>${t?A(t):`Add your name`}</strong><span>Profile · stored on this device</span></span>${M(`chevron`,18)}</button>`+J(`Account`)+Y(`cloud`,`Account &amp; backup`,`data-action="open-page" data-page="account"`,{opensPage:!0})+J(`Personalization`)+$t()+en()+Zt(`bell`,`Sound`,`toggle-sound`,e.sound)+Zt(`effects`,`Celebration effects`,`toggle-effects`,e.effects)+J(`Your plan`)+Y(`focus`,`Focus areas`,`data-action="drawer-focus"`,{opensPage:!0})+Y(`preferences`,`Task preferences`,`data-action="open-page" data-page="preferences"`,{opensPage:!0})+J(`Your data`)+Y(`download`,`Export my journal`,`data-action="export-journal"`)+Y(`trash`,`Delete all my data`,`data-action="confirm-delete-all"`,{danger:!0})+J(`Help &amp; legal`)+Y(`help`,`Get help now`,`data-action="open-help"`)+Y(`info`,`About Steady`,`data-action="open-page" data-page="about"`,{opensPage:!0})+Y(`lock`,`Privacy policy`,`data-action="open-page" data-page="privacy"`,{opensPage:!0})+Y(`document`,`Terms of use`,`data-action="open-page" data-page="terms"`,{opensPage:!0})+`<div class="drawer-footer">Steady ${Te}</div>`}function nn(){tn(),k(`drawer`).classList.add(`open`),document.querySelector(`.menu-btn`)?.setAttribute(`aria-expanded`,`true`),document.querySelector(`.drawer-profile`)?.focus()}function X(){k(`drawer`).classList.remove(`open`),document.querySelector(`.menu-btn`)?.setAttribute(`aria-expanded`,`false`)}function Z(e){tn(),document.querySelector(`#drawer-panel [data-action="${e}"]`)?.focus()}function rn(){let r=T.state;if(!r.mood)return[];let a=n[r.mood],o=r.plan.filter(e=>e.done).map(e=>g(r,e.taskId)).filter(e=>e!==null),s=r.journal.filter(t=>e(new Date(t.date))===r.day),c=[];c.push(`<div class="kicker">${new Date().toLocaleDateString(void 0,{weekday:`long`})}, wrapped</div><div class="big-face">${P(r.mood,76)}</div><h2>You checked in feeling ${a.label.toLowerCase()}.</h2><p>Here's what you did with it.</p>`);let u=o.length>=r.goal?`, and reached your goal.`:`.`;if(c.push(`<div class="kicker">Today you did</div><div class="big">${o.length}</div><h2>${o.length===1?`thing`:`things`}${u}</h2><ul>${o.slice(0,6).map(e=>`<li>${A(e.title)}</li>`).join(``)}</ul>`),s.length>0){let e=s.reduce((e,t)=>e+ve(t.text),0),t=s[s.length-1].text,n=t.length>140?`${t.slice(0,140)}…`:t;c.push(`<div class="kicker">You put it into words</div><div class="big">${e}</div><h2>${e===1?`word`:`words`} written today.</h2><blockquote>“${A(n)}”</blockquote>`)}let d=[...o].sort((e,t)=>i.indexOf(t.difficulty)-i.indexOf(e.difficulty))[0];if(d){let e=r.mood===`struggling`||r.mood===`low`?`On a hard day, you still did this:`:`Your biggest step today:`;c.push(`<div class="kicker">${e}</div><h2>${A(d.title)}</h2><p>${ze(d.difficulty)}${d.minutes?` · ${Tt(d.minutes)}`:``}</p>`)}let f=t(),p=f.filter(t=>r.history[e(t)]?.mood).length,ee=f.map(t=>`<span class="${r.history[e(t)]?.mood?`on`:``}">${t.toLocaleDateString(void 0,{weekday:`narrow`})}</span>`).join(``);return c.push(`<div class="kicker">This week</div><div class="big">${p}</div><h2>${p===1?`day`:`days`} you've shown up.</h2><div class="dots">${ee}</div>`),c.push(`<div class="kicker">One more thing</div><h2>${l[r.mood]}</h2><button class="finish" data-action="close-wrap">Done</button>`),c}function an(){let e=k(`wrap-slide`),t=T.wrapIndex===T.wrapSlides.length-1;k(`wrap-overlay`).style.background=u[T.wrapIndex%u.length],k(`wrap-bars`).innerHTML=T.wrapSlides.map((e,t)=>`<span class="${t<=T.wrapIndex?`seen`:``}"></span>`).join(``),e.innerHTML=T.wrapSlides[T.wrapIndex]+(t?``:`<div class="hint">Tap to continue</div>`),e.style.animation=`none`,e.offsetWidth,e.style.animation=``}function on(){T.wrapSlides=rn(),T.wrapSlides.length!==0&&(T.wrapIndex=0,an(),k(`wrap-overlay`).classList.add(`open`))}function sn(){k(`wrap-overlay`).classList.remove(`open`)}function cn(){return k(`wrap-overlay`).classList.contains(`open`)}function Q(e){let t=T.wrapIndex+e;t<0||(t>=T.wrapSlides.length?sn():(T.wrapIndex=t,an()))}function ln(e,t,n=null){let r=T.state,i={index:e,mode:t,entryId:n};T.writing=i;let a=r.plan[e],o=g(r,a.taskId);if(!o)return;let s=r.drafts[S(r,i)],c=t===`edit`?x(r,n)?.text??``:``;k(`write-title`).textContent=o.title,k(`write-prompt`).textContent=o.prompt===o.title?`Write about it below.`:o.prompt??``;let l=k(`write-text`);l.placeholder=o.difficulty===`hard`?`A short paragraph is plenty.`:`A sentence or two is plenty.`,l.value=s??c,k(`write-error`).textContent=``,k(`write-draft`).textContent=s===void 0?``:`Picked up where you left off.`,k(`write-save`).textContent=t===`edit`?`Save changes`:a.done?`Save as a new answer`:`Save and complete`,k(`write-overlay`).classList.add(`open`),l.focus()}function un(){T.writing=null,k(`write-overlay`).classList.remove(`open`)}function dn(e){let t=T.state;T.undoIndex=e;let n=t.plan[e],r=g(t,n.taskId);if(!r)return;let i=x(t,n.entryId);if(r.prompt&&i){let e=new Date(i.date).toLocaleTimeString(void 0,{hour:`numeric`,minute:`2-digit`});Ht(`<h2 id="sheet-title">Your answer</h2><p>${A(r.title)} · ${e}${i.edited?` (edited)`:``}</p><div class="answer-box">${A(i.text)}</div><button class="btn" data-action="undo-edit">Edit answer</button><button class="btn secondary" data-action="undo-new">Write a new answer</button><button class="btn secondary" data-action="undo-uncheck">Mark not done (answer stays in your journal)</button><button class="btn secondary" data-action="close-sheet">Keep it done</button><p style="text-align:center;margin:14px 0 0"><button class="link-btn danger-link" data-action="undo-delete">Delete this answer</button></p>`)}else Ht(`<h2 id="sheet-title">Mark as not done?</h2><p>“${A(r.title)}” will go back on today's list.</p><button class="btn" data-action="close-sheet">Keep it done</button><button class="btn secondary" data-action="undo-uncheck">Mark not done</button>`)}function fn(e){let t=t=>k(`${e}-${t}`),n=Le({title:t(`title`).value,minutesText:t(`minutes`).value,difficulty:t(`difficulty`).value,frequency:t(`frequency`).value,writing:t(`writing`).checked},b());if(!n.ok){k(`${e}-error`).textContent=n.error;return}let r=T.state,i=n.task;r.customTasks.push(i),(e===`today`||pe(r,i))&&r.plan.push({taskId:i.id,done:!1}),j(e===`today`?`Added to today's plan.`:_(i)?`Task created. It will be in your plan every day.`:`Task created. It will show up in your plan some days.`),G()}function pn(){let e=T.writing;e&&T.state.drafts[S(T.state,e)]&&j(`Draft kept. It'll be here when you come back.`),un()}var $={"open-drawer":nn,"open-help":()=>{X(),k(`help-overlay`).classList.add(`open`)},"close-help":()=>k(`help-overlay`).classList.remove(`open`),"open-page":e=>{X(),ft(e.dataset.page??``)},"close-page":V,"set-preference":e=>{let t=e.dataset.category,n=e.dataset.preference;n===`normal`?delete T.state.categoryPrefs[t]:T.state.categoryPrefs[t]=n,O(),lt()},"toggle-sound":()=>{T.state.sound=!T.state.sound,O(),Z(`toggle-sound`),T.state.sound&&vt([784],.05),j(T.state.sound?`Sound on: a soft chime when you finish a task.`:`Sound off.`)},"toggle-effects":()=>{T.state.effects=!T.state.effects,O(),Z(`toggle-effects`),j(T.state.effects?`Celebration effects on.`:`Celebration effects off. Tasks still check off, just quietly.`)},"set-look":e=>{T.state.look=e.dataset.lookChoice,q(),O(),Z(`set-look`)},"set-theme":e=>{T.state.theme=e.dataset.themeChoice,q(),O(),Z(`set-theme`)},"drawer-focus":()=>{X(),T.state.tab=`focus`,T.focusPickerOpen=!0,O(),W(),Ve()},"export-journal":()=>{X(),Jt()},"confirm-delete-all":()=>{X(),Yt()},"delete-all":Xt,"open-checkin":z,"close-checkin":B,"pick-area":e=>{let t=e.closest(`.picker`);if(!t)return;let n=t.dataset.scope,r=I(n),i=e.dataset.area??``,a=r.indexOf(i);a===-1?r.push(i):r.splice(a,1),n===`focus`?(T.focusPickerOpen=!0,O(),W()):$e(t)},"finish-onboarding":()=>{if(!k(`agree-terms`).checked){k(`agree-error`).textContent=`Please confirm you're 13 or older and agree to the terms to continue.`;return}let e=T.state;e.agreedAt=new Date().toISOString(),e.termsVersion=1,e.onboarded=!0,e.focusAreas=[...T.onboardingAreas],T.justOnboarded=!0,O(),it(),k(`checkin-overlay`).scrollTop=0},"pick-mood":e=>{let t=T.state,n=e.dataset.mood;t.mood=n,fe(t,n,E),t.message=h(o.checkin[n],E),t.tab=`today`,B(),G()},"dismiss-message":()=>{T.state.message=null,G()},toggle:e=>{let t=Number(e.dataset.index),n=T.state.plan[t];n.done?dn(t):g(T.state,n.taskId)?.prompt?ln(t,`new`):(y(T.state,n,!0,E),H(t,`done`),G())},swap:e=>{let t=T.state,n=Number(e.dataset.index),r=g(t,t.plan[n].taskId);if(!r)return;let i=le(t,r.difficulty,de(t),E);i?(t.plan[n]={taskId:i.id,done:!1},G()):j(`No other ${r.difficulty} tasks yet. Add more focus areas, or write your own.`)},remove:e=>{T.state.plan.splice(Number(e.dataset.index),1),j(`Removed from today. It's still in your task list.`),G()},"add-to-today":e=>{T.state.plan.push({taskId:e.dataset.id??``,done:!1}),j(`Added to today's plan.`),G()},"save-writing":()=>{let e=T.writing;if(!e)return;let t=he(T.state,e,k(`write-text`).value,new Date,E);t.ok?(t.completedTask&&H(e.index,`done`),j(t.toast),un(),G()):k(`write-error`).textContent=t.error},"close-writing":pn,"close-sheet":K,"undo-edit":()=>{K();let e=T.undoIndex;e!==null&&ln(e,`edit`,T.state.plan[e].entryId??null)},"undo-new":()=>{K(),T.undoIndex!==null&&ln(T.undoIndex,`new`)},"undo-uncheck":()=>{let e=T.undoIndex;e!==null&&(y(T.state,T.state.plan[e],!1,E),H(e,`undone`),K(),G())},"undo-delete":()=>{let e=T.undoIndex;if(e===null||!window.confirm(`Delete this answer from your journal? This can't be undone.`))return;let t=T.state.plan[e];t.entryId&&_e(T.state,t.entryId),t.entryId=null,y(T.state,t,!1,E),H(e,`undone`),K(),j(`Answer deleted. The task is back on your list.`),G()},"focus-tab":e=>{T.state.focusTab=e.dataset.area??null,G()},"delete-custom":e=>{if(!window.confirm(`Delete this task?`))return;let t=e.dataset.id;T.state.customTasks=T.state.customTasks.filter(e=>e.id!==t),T.state.plan=T.state.plan.filter(e=>e.taskId!==t),G()},"toggle-frequency":e=>{let t=g(T.state,e.dataset.id??``);t&&(t.frequency=_(t)?`sometimes`:`daily`,pe(T.state,t)&&T.state.plan.push({taskId:t.id,done:!1}),j(_(t)?`This task will be in your plan every day.`:`This task will show up some days, picked at random.`),G())},prompt:e=>{let t=e.classList.contains(`on`);document.querySelectorAll(`#prompt-chips .chip`).forEach(e=>e.classList.remove(`on`)),t||e.classList.add(`on`)},"save-entry":()=>{let e=document.querySelector(`#prompt-chips .chip.on`),t=ge(T.state,k(`journal-text`).value,e?.dataset.prompt??null,new Date,E);t.ok?(j(t.toast),G()):k(`journal-error`).textContent=t.error},"delete-entry":e=>{window.confirm(`Delete this entry? This can't be undone.`)&&(_e(T.state,e.dataset.id??``),j(`Entry deleted.`),G())},"add-sample":()=>{Pe(T.state,new Date),G()},"clear-sample":()=>{Ie(T.state),G()},"open-wrap":on,"close-wrap":sn,"wrap-next":()=>Q(1),"wrap-back":()=>Q(-1)};function mn(e){let t=e.target,n=t.closest(`[data-tab]`);if(n){T.state.tab=n.dataset.tab,O(),W(),Ve();return}let r=t.closest(`[data-action]`),i=r?$[r.dataset.action??``]:void 0;r&&i?i(r):(t.id===`help-overlay`&&$[`close-help`](t),t.id===`drawer`&&X(),t.id===`write-overlay`&&$[`close-writing`](t),t.id===`sheet-overlay`&&K(),t.id===`checkin-overlay`&&T.state.mood&&B())}function hn(e){e.preventDefault();let t=e.target.dataset.form??``;t===`profile`?pt():fn(t)}function gn(e){let t=e.target;t instanceof HTMLDetailsElement&&(t.dataset.guide&&(T.guideOpen[t.dataset.guide]=t.open),t.id===`focus-picker-details`&&(T.focusPickerOpen=t.open))}function _n(e){if(e.key===`Escape`&&k(`drawer`).classList.contains(`open`))return X();if(e.key===`Escape`&&k(`page`).classList.contains(`open`))return V();cn()&&(e.key===`ArrowRight`||e.key===` `?Q(1):e.key===`ArrowLeft`?Q(-1):e.key===`Escape`&&sn())}function vn(e){let t=T.writing;if(!t)return;let n=e.target.value,r=S(T.state,t);n.trim()===``?delete T.state.drafts[r]:T.state.drafts[r]=n,O(),k(`write-draft`).textContent=`Draft saved`}function yn(e){let t=e.target;if(!t.classList.contains(`picker-search`))return;T.pickerQuery=t.value;let n=t.closest(`.picker`),r=n?.querySelector(`.picker-list`);n&&r&&(r.innerHTML=R(n.dataset.scope))}function bn(){T.state=Se(D(),e());let t=new URLSearchParams(window.location.search).get(`look`);Gt(t)&&(T.state.look=t,O()),document.addEventListener(`click`,mn),document.addEventListener(`submit`,hn),document.addEventListener(`toggle`,gn,!0),document.addEventListener(`keydown`,_n),document.addEventListener(`input`,yn),k(`write-text`).addEventListener(`input`,vn),qt(),Je(),k(`today-date`).textContent=new Date().toLocaleDateString(void 0,{weekday:`long`,month:`short`,day:`numeric`}),q(),W(),T.state.mood||z()}bn(),`serviceWorker`in navigator&&navigator.serviceWorker.register(`./sw.js`).catch(()=>{});