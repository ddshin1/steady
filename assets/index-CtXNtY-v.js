(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(e=new Date){let t=String(e.getMonth()+1).padStart(2,`0`),n=String(e.getDate()).padStart(2,`0`);return`${e.getFullYear()}-${t}-${n}`}function t(e=new Date){let t=new Date(e);return t.setDate(e.getDate()-(e.getDay()+6)%7),Array.from({length:7},(e,n)=>{let r=new Date(t);return r.setDate(t.getDate()+n),r})}var n={good:{label:`Good`,mix:[`easy`,`easy`,`medium`,`hard`],plan:`2 easy, 1 medium, 1 hard`},okay:{label:`Okay`,mix:[`easy`,`easy`,`medium`],plan:`2 easy, 1 medium`},low:{label:`Low`,mix:[`easy`,`easy`],plan:`2 easy`},struggling:{label:`Really struggling`,mix:[`easy`],plan:`1 easy`}},r=[`good`,`okay`,`low`,`struggling`],i=[`easy`,`medium`,`hard`],a=[`low`,`struggling`],o={checkin:{good:[`Good days are worth using, and worth enjoying. Don't spend all your energy at once.`,`Nice. Today has room for one harder thing, if you want it.`],okay:[`A normal day. A few small steps is plenty.`,`Okay is a fine place to start from.`],low:[`Low days happen. Two small things is a real win today.`,`Go gently. Today's plan is only easy things.`],struggling:[`Just one thing today. Being here counts.`,`Today is about getting through, not getting ahead. One small thing is enough.`]},firstTask:[`That's one. Starting is often the hardest part.`,`One done. Notice that you did that.`,`First step taken. Nice.`],goal:{good:[`Goal reached, hard task included. That took real effort.`,`You did everything you planned today.`],okay:[`Goal reached. That's a solid day.`,`You did what you set out to do today.`],low:[`You did it on a low day. That counts double.`,`Goal reached. Be proud of that, even if it doesn't feel big.`],struggling:[`You did your one thing. On a day like this, that matters.`,`Done. Rest is allowed now.`]}},s={any:[`What's one small thing that felt okay today?`,`What's on your mind right now?`,`What would you like to be gentler with yourself about?`],good:[`What made today feel good?`],okay:[`What's one thing you'd like tomorrow to have?`],low:[`What's weighing on you today?`,`What's one thing that helped, even a little?`],struggling:[`What do you need most right now?`,`Who could you reach out to today?`]},c={good:{sparks:8,reach:36,goalSparks:18,goalReach:75,buzz:15,volume:.06,pitch:1},okay:{sparks:6,reach:30,goalSparks:14,goalReach:65,buzz:12,volume:.05,pitch:1},low:{sparks:4,reach:24,goalSparks:10,goalReach:55,buzz:10,volume:.04,pitch:.9},struggling:{sparks:0,reach:0,goalSparks:8,goalReach:45,buzz:0,volume:.03,pitch:.8}},l={good:`You had energy today and you used it well. Rest is part of the plan too.`,okay:`An ordinary day, handled. That's what steady looks like.`,low:`It was a low day, and you still showed up. That's not small.`,struggling:`Today was hard. You did something anyway. Be gentle with yourself tonight.`},u=[`linear-gradient(160deg, #2C4A3A, #3F6350)`,`linear-gradient(160deg, #3F6350, #5E5291)`,`linear-gradient(160deg, #5E5291, #8A5A9C)`,`linear-gradient(160deg, #9C4A2E, #8A6A12)`,`linear-gradient(160deg, #2E5E6E, #3F6350)`,`linear-gradient(160deg, #3F4A63, #2C4A3A)`],d={general:{label:`Everyday basics`,desc:`Small things that help almost everyone. Always included.`,tasks:[[`Drink a glass of water`,`easy`,1],[`Step outside for fresh air`,`easy`,2],[`Make your bed`,`easy`,2],[`Open the curtains and let the light in`,`easy`,1],[`Notice three things around you that you like`,`easy`,2],[`Tidy one small area`,`medium`,10],[`Take a shower and put on fresh clothes`,`medium`,15],[`Do a load of laundry`,`medium`,15],[`Eat a proper meal, sitting down`,`medium`,20],[`Do one chore you've been putting off`,`hard`,20],[`Cook a simple meal from scratch`,`hard`,40],[`Spend an hour with your phone in another room`,`hard`,60],[`Write about a hard moment this week and what got you through it`,`hard`,10,`In a short paragraph at most: what was a hard moment this week, and what helped you get through it?`]],guides:[`morning`]},anxiety:{label:`Anxiety & worry`,desc:`For racing thoughts, constant worry, or feeling on edge.`,tasks:[[`5-minute grounding breath`,`easy`,5],[`Name 5 things you can see right now`,`easy`,2],[`Notice one thing that's going okay right now`,`easy`,1],[`Put a hand on your chest and breathe slowly for a minute`,`easy`,1],[`Write down a worry and one fact against it`,`medium`,5,`In a sentence or two: what's the worry, and what's one fact that doesn't fit it?`],[`Give yourself 10 minutes of "worry time," then move on`,`medium`,10],[`Sit with a worry for 5 minutes without fixing it`,`medium`,5],[`Do one small thing you've been avoiding`,`hard`,15],[`Make one decision today without asking anyone for reassurance`,`hard`,null]],guides:[`grounding`,`triggers`]},lowmood:{label:`Low mood`,desc:`For days that feel heavy, flat, or hard to start.`,tasks:[[`Think of one thing that felt okay today`,`easy`,1],[`Get 5 minutes of daylight`,`easy`,5],[`Listen to one song you love`,`easy`,4],[`Send someone a photo of something nice`,`easy`,2],[`15-minute walk outside`,`medium`,15],[`Do something you used to enjoy, for 10 minutes`,`medium`,10],[`Write three things you're looking forward to`,`medium`,5,`Name three things you're looking forward to, even tiny ones. A few words each is plenty.`],[`Make a plan with someone for this week`,`hard`,10],[`Go somewhere new nearby, like a park or café`,`hard`,45]],guides:[`reframe`,`morning`]},stress:{label:`Stress & overwhelm`,desc:`For when there's too much and it all feels urgent.`,tasks:[[`Drop your shoulders and take 3 slow breaths`,`easy`,1],[`Drink something warm, slowly`,`easy`,5],[`Close every app and tab you don't need`,`easy`,2],[`Step away from what you're doing for 2 minutes`,`easy`,2],[`10-minute stretch`,`medium`,10],[`Pick the 3 things that matter most tomorrow`,`medium`,5],[`Take a real break: 20 minutes with no screens`,`medium`,20],[`Say no to, or postpone, one thing`,`hard`,10],[`Ask someone for help with something on your plate`,`hard`,10]],guides:[`grounding`]},sleep:{label:`Sleep`,desc:`For trouble falling asleep, staying asleep, or getting up.`,tasks:[[`Dim the lights an hour before bed`,`easy`,1],[`Put your phone across the room at bedtime`,`easy`,1],[`5-minute body scan in bed`,`easy`,5],[`Keep your bedroom cool and dark tonight`,`easy`,2],[`Jot down what's on your mind before bed`,`medium`,3,`In a sentence or two: what's on your mind tonight? Leave it here so it doesn't have to stay in your head.`],[`Get 10 minutes of morning daylight`,`medium`,10],[`No caffeine after 2 PM`,`medium`,null],[`Wind down with 10 minutes of reading or calm music`,`medium`,10],[`No screens for the last 30 minutes before bed`,`hard`,30],[`Keep the same bedtime and wake-up time as yesterday`,`hard`,null],[`Get up at your planned time, even after a bad night`,`hard`,null]],guides:[`winddown`]},social:{label:`Social anxiety`,desc:`For when people, groups, or attention feel scary.`,tasks:[[`Reply to one message you've been leaving`,`easy`,3],[`React to a friend's post or message`,`easy`,1],[`Make eye contact and nod at someone`,`easy`,1],[`Wave or smile at someone you know`,`easy`,1],[`Say hello to someone new`,`medium`,2],[`Ask someone one question about their day`,`medium`,3],[`Order or ask for something in person instead of online`,`medium`,10],[`Make a phone call you've been avoiding`,`hard`,10],[`Go to a club meeting or group event`,`hard`,60]],guides:[`ladder`,`talking`]},motivation:{label:`Motivation & getting started`,desc:`For when everything feels hard to begin.`,tasks:[[`Clear one surface in your room`,`easy`,5],[`Pick one small thing to do today`,`easy`,2],[`Put on your shoes and step outside, that's it`,`easy`,2],[`Set a 5-minute timer and start anything`,`easy`,5],[`Finish one thing you already started`,`medium`,15],[`Make a short list for today, then do the first item`,`medium`,10],[`Get dressed and leave the house for 20 minutes`,`medium`,20],[`Spend 30 minutes on a hobby you care about`,`hard`,30],[`Do the thing you've been dreading, first thing`,`hard`,30]],guides:[`starttiny`]},lonely:{label:`Loneliness`,desc:`For feeling disconnected or on your own.`,tasks:[[`Text a friend just to say hi`,`easy`,3],[`Send a voice message instead of a text`,`easy`,2],[`Look up one club or group that meets near you`,`easy`,5],[`Say hi to someone you pass today`,`easy`,1],[`Write about someone you'd like to reconnect with`,`medium`,5,`In a sentence or two: who would you like to reconnect with, and what would you say to them?`],[`Spend 20 minutes somewhere with other people around`,`medium`,20],[`Call someone instead of texting`,`medium`,10],[`Help someone with something small`,`medium`,10],[`Invite someone to do something together`,`hard`,10],[`Share a meal with someone`,`hard`,30]],guides:[`talking`]},selfesteem:{label:`Self-esteem`,desc:`For a harsh inner critic or feeling not good enough.`,tasks:[[`Name one thing you did well today`,`easy`,1],[`Say "thank you" to a compliment without brushing it off`,`easy`,1],[`Wear something that makes you feel good`,`easy`,5],[`Unfollow one account that makes you feel worse`,`easy`,2],[`Reframe one harsh thought about yourself`,`medium`,5,`Write the harsh thought in one sentence, then a fairer version in one more.`],[`Spend 15 minutes on something you're good at`,`medium`,15],[`Accept help or a favor without apologizing`,`medium`,5],[`Share something you made or think with someone`,`hard`,10],[`Share your opinion once in a conversation`,`hard`,5],[`Write yourself the note a good friend would`,`hard`,10,`In a short paragraph at most: what would a good friend say about how you're doing lately?`]],guides:[`reframe`]},overthinking:{label:`Overthinking`,desc:`For thoughts that loop, replay, or won't switch off.`,tasks:[[`Say "I'm overthinking" out loud to name the loop`,`easy`,1],[`Do 2 minutes of something with your hands`,`easy`,2],[`Get up and go to a different room`,`easy`,1],[`Give yourself 5 minutes to think it over, then stop`,`easy`,5],[`Write the thought, then one other way to see it`,`medium`,5,`In a sentence or two: what's the thought on repeat, and what's one other way to see it?`],[`Go for a 15-minute walk without your phone`,`medium`,15],[`Make one small decision in under a minute`,`medium`,1],[`Write the worst, best, and most likely outcome`,`hard`,10,`In a short paragraph at most: what's the worst that could happen, the best, and what's most likely?`],[`Decide not to revisit one decision today`,`hard`,null]],guides:[`loops`,`reframe`]},panic:{label:`Panic attacks`,desc:`For sudden waves of fear, a racing heart, or feeling out of control.`,tasks:[[`Practice slow breathing for 3 minutes while calm`,`easy`,3],[`Save 988 and one trusted person as phone favorites`,`easy`,2],[`Put a grounding reminder on your lock screen`,`easy`,3],[`Notice your body for 2 minutes without reacting`,`medium`,2],[`Learn the grounding steps by heart`,`medium`,10],[`Write a note to read during your next panic`,`medium`,5,`In a sentence or two: what do you want to remember the next time panic hits?`],[`Spend 5 minutes somewhere you've been avoiding`,`hard`,5],[`Go somewhere you've avoided, with someone you trust`,`hard`,30]],guides:[`grounding`]},grief:{label:`Grief & loss`,desc:`For missing someone or something you've lost.`,tasks:[[`Look at one photo or memory, gently`,`easy`,5],[`Play a song that reminds you of them`,`easy`,4],[`Eat something, even something small`,`easy`,5],[`Rest for 10 minutes without needing to do anything`,`easy`,10],[`Write a few words to who or what you've lost`,`medium`,5,`In a sentence or two, say something to the person or thing you've lost.`],[`Tell someone a memory you treasure`,`medium`,10],[`Ask someone who shares the loss how they're doing`,`medium`,10],[`Do something that honors their memory`,`hard`,30],[`Visit a place that reminds you of them`,`hard`,30],[`Reach out to a counselor or grief support group`,`hard`,15]],guides:[`talking`]},anger:{label:`Anger & irritability`,desc:`For a short fuse, or anger that feels bigger than the moment.`,tasks:[[`Take 10 slow breaths before replying when annoyed`,`easy`,2],[`Splash cold water on your face`,`easy`,1],[`Step away for 5 minutes when you feel heated`,`easy`,5],[`Name the feeling under your anger: hurt, tired, or scared?`,`easy`,1],[`Go for a brisk 15-minute walk`,`medium`,15],[`Write the angry message, then don't send it`,`medium`,5,`In two or three sentences, write what you'd want to say. Keep it here instead of sending it.`],[`Do 20 minutes of hard exercise`,`medium`,20],[`Calmly tell someone how something affected you`,`hard`,10],[`Apologize for something you said in anger`,`hard`,10]],guides:[`cooldown`]},perfectionism:{label:`Perfectionism`,desc:`For when nothing feels good enough to finish or share.`,tasks:[[`Send a message after reading it over only once`,`easy`,1],[`Notice one thing today that was good enough`,`easy`,1],[`Take a break before you feel "done"`,`easy`,5],[`Leave one small thing imperfect on purpose`,`medium`,5],[`Write what "good enough" looks like for one thing`,`medium`,5,`In a sentence or two: pick one thing you're working on. What would "good enough" look like?`],[`Set a time limit on something and stop when it ends`,`medium`,30],[`Share something unfinished with someone`,`hard`,10],[`Try something new you'll probably be bad at`,`hard`,30]],guides:[`reframe`]},burnout:{label:`Burnout & exhaustion`,desc:`For running on empty for too long.`,tasks:[[`Take a 10-minute break with no screen`,`easy`,10],[`Lie down for 10 minutes with your eyes closed`,`easy`,10],[`Drink water and eat a real snack`,`easy`,5],[`Change into comfortable clothes and get cozy`,`easy`,5],[`Go to bed 30 minutes earlier tonight`,`medium`,30],[`Spend 20 minutes outside doing nothing productive`,`medium`,20],[`Pick one thing you can drop, delay, or hand off`,`medium`,5],[`Cancel or hand off one commitment this week`,`hard`,10],[`Take a full evening off: no work, no chores`,`hard`,null]],guides:[`winddown`]},homesick:{label:`Homesickness`,desc:`For missing home, especially after a big move.`,tasks:[[`Call or video chat someone from home`,`easy`,15],[`Look at photos from home for a few minutes`,`easy`,5],[`Put up one thing that reminds you of home`,`easy`,5],[`Listen to music that reminds you of home`,`easy`,5],[`Write about what you miss most`,`medium`,5,`In a sentence or two: what do you miss most, and is there a small piece of it you could bring here?`],[`Say hi to a neighbor or roommate`,`medium`,2],[`Make a food or drink that tastes like home`,`medium`,30],[`Find one spot nearby that you like`,`medium`,30],[`Go to one event where you might meet people`,`hard`,60],[`Invite someone new to explore somewhere with you`,`hard`,10]],guides:[`talking`]},bodyimage:{label:`Body image`,desc:`For being hard on how you look.`,tasks:[[`Mute or unfollow one account that makes you compare your body`,`easy`,2],[`Wear clothes that feel comfortable`,`easy`,5],[`Thank your body for one thing it did today`,`easy`,1],[`Look in the mirror and notice one neutral thing`,`easy`,1],[`Write about something your body helped you do`,`medium`,5,`In a sentence or two: what's something your body helped you do recently? Leave looks out of it.`],[`Do something your body enjoys: a stretch, a dance, or a walk`,`medium`,10],[`Go two hours without checking your reflection`,`medium`,null],[`Wear something you like that you've been avoiding`,`hard`,null],[`Go a day without commenting on anyone's looks, including yours`,`hard`,null]],guides:[`reframe`]},screens:{label:`Screen time & doomscrolling`,desc:`For scrolling longer than you meant to.`,tasks:[[`Turn off notifications for one app`,`easy`,2],[`Move your most-scrolled app off your home screen`,`easy`,2],[`Put your phone face down for 10 minutes`,`easy`,10],[`Check the time before you open a social app`,`easy`,1],[`Eat one meal with no phone`,`medium`,20],[`Stick to a 30-minute limit on one app today`,`medium`,null],[`Leave your phone behind on a short walk`,`medium`,15],[`No phone for the first hour after you wake up`,`hard`,60],[`Delete one app you keep regretting`,`hard`,2]],guides:[`scrollbreak`]},relationships:{label:`Relationships & family`,desc:`For tension, conflict, or distance with people close to you.`,tasks:[[`Send a kind message to someone you care about`,`easy`,2],[`Take a breath before responding in a tense moment`,`easy`,1],[`Notice one thing someone did for you today`,`easy`,1],[`Take 10 minutes alone to reset`,`easy`,10],[`Write what you need from someone`,`medium`,5,`In a sentence or two: what do you need from them right now?`],[`Ask someone how they're really doing, and just listen`,`medium`,10],[`Spend 20 minutes together with phones away`,`medium`,20],[`Have the conversation you've been putting off`,`hard`,20],[`Set one boundary, kindly and clearly`,`hard`,10]],guides:[`talking`,`cooldown`]},focus:{label:`Focus & attention`,desc:`For a busy mind that jumps from thing to thing.`,tasks:[[`Do one thing at a time for 5 minutes`,`easy`,5],[`Put your phone out of sight`,`easy`,1],[`Clear distractions from your space`,`easy`,3],[`Take 3 slow breaths before starting something`,`easy`,1],[`Do one chore start to finish without switching`,`medium`,15],[`Take a 10-minute movement break`,`medium`,10],[`Listen to a podcast episode or album without multitasking`,`medium`,30],[`Spend 45 minutes on one hobby or project, no switching`,`hard`,45],[`Read for 30 minutes without checking your phone`,`hard`,30]],guides:[`starttiny`]}},f=[`anxiety`,`lowmood`,`stress`,`sleep`,`social`,`motivation`,`lonely`,`selfesteem`,`overthinking`],p=[`panic`,`grief`,`anger`,`perfectionism`,`burnout`,`homesick`,`bodyimage`,`screens`,`relationships`,`focus`],ee={anxiety:`anxious nervous worry worried on edge`,lowmood:`sad down depressed depression empty unmotivated hopeless`,stress:`overwhelmed pressure busy too much`,sleep:`insomnia tired can't sleep nightmares bedtime`,social:`shy people awkward talking groups`,motivation:`stuck procrastination lazy adhd focus starting`,lonely:`isolated alone friends disconnected`,selfesteem:`confidence worthless inner critic not good enough`,panic:`panic attack heart fear scared`,grief:`loss death bereavement breakup missing someone`,anger:`mad angry irritable rage temper`,perfectionism:`perfect failure standards`,burnout:`tired exhausted drained worn out`,homesick:`home homesick college moving family`,overthinking:`rumination ruminating looping replaying spiraling can't stop thinking`,bodyimage:`body looks appearance mirror comparing ugly`,screens:`phone scrolling doomscrolling social media tiktok instagram addicted`,relationships:`family parents partner roommate conflict fighting breakup`,focus:`distracted adhd attention concentrate scattered`},m={};for(let[e,t]of Object.entries(d))t.tasks.forEach(([t,n,r,i],a)=>{let o=`${e}-${a}`;m[o]={id:o,title:t,difficulty:n,minutes:r,area:e,prompt:i??null}});function h(e,t){return e[Math.floor(t()*e.length)]}function g(e,t){return m[t]??e.customTasks.find(e=>e.id===t)??null}function _(e){return e.frequency===`daily`}function te(e,t){return e.difficulty===`hard`&&a.includes(t)}function ne(e){let t=[`general`,...e.focusAreas];return[...Object.values(m).filter(e=>t.includes(e.area)),...e.customTasks]}function v(e,t,n,r){let i=ne(e).filter(e=>e.difficulty===t&&!_(e)&&!n.includes(e.id));return i.length>0?h(i,r):null}function y(e){return e.plan.map(e=>e.taskId)}function b(e){return e.plan.filter(e=>e.done).length}function re(e,t,r){let i=e.plan.filter(t=>t.done&&g(e,t.taskId)!==null);for(let n of e.customTasks){let e=i.some(e=>e.taskId===n.id);_(n)&&!e&&!te(n,t)&&i.push({taskId:n.id,done:!1})}let a=[...n[t].mix];for(let t of i){let n=g(e,t.taskId)?.difficulty,r=n?a.indexOf(n):-1;r!==-1&&a.splice(r,1)}for(let t of a){let n=i.map(e=>e.taskId),a=v(e,t,n,r)??(t===`easy`?null:v(e,`easy`,n,r));a&&i.push({taskId:a.id,done:!1})}e.plan=i,e.goal=n[t].mix.length}function x(e,t,n,r){let i=b(e);t.done=n,n&&e.mood&&(b(e)===e.goal?e.message=h(o.goal[e.mood],r):i===0&&(e.message=h(o.firstTask,r)))}function ie(e,t){return _(t)&&e.mood!==null&&!te(t,e.mood)&&!y(e).includes(t.id)}function ae(e){e.history[e.day]={done:b(e),goal:e.goal,mood:e.mood}}function S(e=new Date,t=Math.random){return e.getTime().toString(36)+Math.floor(t()*1296).toString(36).padStart(2,`0`)}function oe(e,t){return e.journal.find(e=>e.id===t)??null}function C(e,t){return t.mode===`edit`?`edit-${t.entryId}`:e.plan[t.index].taskId}function se(e,t,n,r,i){let a=n.trim();if(t.mode===`edit`&&a===``)return{ok:!1,error:`This would erase your answer. To remove it, use “Delete this answer” instead.`};let o=e.plan[t.index],s=g(e,o.taskId);if(delete e.drafts[C(e,t)],t.mode===`edit`){let n=oe(e,t.entryId);return n&&(n.text=a,n.edited=r.toISOString()),{ok:!0,toast:`Answer updated.`,completedTask:!1}}if(a!==``){let t={id:S(r,i),date:r.toISOString(),prompt:s?.prompt??null,text:a,mood:e.mood,fromTask:s?.title};e.journal.push(t),o.entryId=t.id}let c=!o.done;return c&&x(e,o,!0,i),{ok:!0,toast:a===``?`Done. Nothing was added to your journal.`:`Saved to your journal.`,completedTask:c}}function ce(e,t,n,r,i){let a=t.trim();return a===``?{ok:!1,error:`Write something first, even one sentence.`}:(e.journal.push({id:S(r,i),date:r.toISOString(),prompt:n,text:a,mood:e.mood}),{ok:!0,toast:`Entry saved.`,completedTask:!1})}function le(e,t){e.journal=e.journal.filter(e=>e.id!==t);for(let n of e.plan)n.entryId===t&&(n.entryId=null);delete e.drafts[`edit-${t}`]}function ue(e){return e.trim().split(/\s+/).filter(Boolean).length}function de(e,t){let r=[`Steady journal`,`Exported ${t.toLocaleString()}`,``];for(let t of e){let e=t.mood?` · feeling ${n[t.mood].label.toLowerCase()}`:``;r.push(`=== ${new Date(t.date).toLocaleString()}${e} ===`),t.fromTask&&r.push(`Task: ${t.fromTask}`),t.prompt&&t.prompt!==t.fromTask&&r.push(`Prompt: ${t.prompt}`),r.push(``,t.text,``)}return r.join(`
`)}var fe=`steady-state-v1`;function pe(e){return{onboarded:!1,focusAreas:[],customTasks:[],drafts:{},day:e,mood:null,goal:0,plan:[],message:null,history:{},journal:[],tab:`today`,focusTab:null,sound:!1,effects:!0,theme:`system`,look:`sage`,profileName:``,agreedAt:null,termsVersion:null}}function me(e,t){return e.day!==t&&(e.day=t,e.mood=null,e.goal=0,e.plan=[],e.message=null,!0)}function he(e,t){let n=pe(t);try{let t=JSON.parse(e?.getItem(`steady-state-v1`)??`null`);typeof t==`object`&&t&&Array.isArray(t.plan)&&Object.assign(n,t)}catch{}return me(n,t),n}function ge(e,t){try{e?.setItem(fe,JSON.stringify(t))}catch{}}function _e(e){try{e?.removeItem(fe)}catch{}}var ve=`0.6 (web)`,ye=`October 23, 2026`;function w(e,t){return`<button type="button" class="link-btn" data-action="open-page" data-page="${e}">${t}</button>`}function be(){return`Contact details will be added before public release. For now, Steady is a student project for CS 124 at the University of Illinois.`}function xe(){return`<p><strong>Steady doesn't need an account.</strong> There's no sign-up, no password, and no log-in. Everything you do in Steady is saved on this device only.</p><h3>What that means</h3><ul><li>Your journal is private by design: nobody else, including the developer, can see it.</li><li>If you clear your browser data, uninstall the app, or switch devices, your data doesn't come with you.</li></ul><h3>Keeping a copy</h3><p>Export your journal to save your entries as a text file on your device.</p><button class="btn secondary" data-action="export-journal">Export my journal</button><h3>Optional backup</h3><p>Signing in to back up and sync across devices may come in a future version. If it does, it will be optional, and Steady will ask you before anything leaves your device.</p>`}function Se(){return`<p><strong>Steady</strong> helps you take small, steady steps on any kind of day: check in with how you feel, get a plan sized to your energy, and see your progress without streaks or guilt.</p><h3>Important</h3><p>Steady is a self-help tool. It is not medical care, therapy, diagnosis, or treatment, and it is not a crisis service. Focus areas describe what you'd like to work on; they aren't diagnoses.</p><h3>If you need help now</h3><ul><li><a href="tel:988">Call 988</a> or <a href="sms:988">text 988</a>: Suicide &amp; Crisis Lifeline, 24/7</li><li>Call 911 if you or someone else is in immediate danger</li><li><a href="https://counselingcenter.illinois.edu/" target="_blank" rel="noopener">UIUC Counseling Center</a>: free counseling for Illinois students</li></ul><h3>Where the tasks and guides come from</h3><p>They're general self-help practices, like grounding, slow breathing, and reframing harsh thoughts, written in plain language and informed by public resources such as <a href="https://www.nimh.nih.gov/health/topics" target="_blank" rel="noopener">NIMH</a> and <a href="https://www.nhs.uk/every-mind-matters/" target="_blank" rel="noopener">NHS Every Mind Matters</a>. Steady isn't affiliated with or endorsed by these organizations.</p><h3>Version</h3><p>Steady ${ve} · Made for CS 124 at the University of Illinois</p><p>${w(`privacy`,`Privacy policy`)} · ${w(`terms`,`Terms of use`)}</p>`}function Ce(){return`<p class="effective">Effective ${ye}</p><p><strong>The short version:</strong> Steady keeps everything on your device. There's no account, nothing you enter is uploaded, and there are no ads or trackers.</p><h3>What Steady stores</h3><ul><li>Your name, if you add one in Profile</li><li>Your focus areas, daily check-ins (how you felt), tasks, and progress</li><li>Your journal entries and unsaved drafts</li><li>Your settings, like sound, theme, and light or dark mode</li></ul><h3>Where it's stored</h3><p>Only on this device, in your browser's local storage. Steady has no database or account server, so the developer can't see, read, or recover your data.</p><h3>The website itself</h3><p>When Steady is opened from a web address, a hosting service delivers the app's files to your browser. Like any website, that service may keep standard technical logs, such as your IP address and the time of the visit. Nothing you type or choose in Steady is ever sent to it.</p><h3>What Steady never does</h3><ul><li>Upload or sync your data</li><li>Sell or share your data with anyone</li><li>Show ads or use analytics or tracking tools</li><li>Diagnose you, or share how you feel with anyone</li></ul><h3>Links that leave Steady</h3><p>Some buttons open other services. Calling or texting 988 uses your phone's dialer or messages app, and links to the UIUC Counseling Center, NIMH, and NHS open their websites. Those services have their own privacy policies.</p><h3>Your choices</h3><ul><li><strong>Export:</strong> Menu → Export my journal saves a copy as a text file on your device.</li><li><strong>Delete:</strong> Menu → Delete all my data removes everything from this device right away.</li><li>Clearing your browser data also deletes it.</li></ul><h3>Children</h3><p>Steady is for people 13 and older. It isn't designed for children under 13 and doesn't knowingly collect information from them. Because everything stays on the device, a parent or guardian can remove it at any time with Delete all my data.</p><h3>Security</h3><p>Anyone who can unlock this device and open Steady can read your journal. Use your device's screen lock to protect it.</p><h3>Changes to this policy</h3><p>If this policy changes, for example if optional backup is added, Steady will show you the new version and ask you to agree before anything leaves your device.</p><h3>Contact</h3><p>${be()}</p><p class="draft-note">Plain-language version written for the CS 124 student version of Steady. It hasn't been reviewed by a lawyer, which would be needed before a public release.</p>`}function we(){return`<p class="effective">Effective ${ye}</p><p>By using Steady, you agree to these terms. They're short, so please read them.</p><h3>1. What Steady is</h3><p>Steady is a self-help companion for building small daily habits around how you feel. It offers general wellbeing tasks, writing prompts, and guides based on publicly available self-help information.</p><h3>2. What Steady is not</h3><p><strong>Steady is not medical care, therapy, diagnosis, or treatment, and it is not a crisis service.</strong> It doesn't replace a doctor, therapist, or counselor. Focus areas describe what you'd like to work on; they aren't diagnoses. If you're in crisis or thinking about harming yourself, call or text <a href="tel:988">988</a>, or call 911 in an emergency.</p><h3>3. Who can use Steady</h3><p>You must be 13 or older. If you're under 18, we encourage you to talk with a parent, guardian, or school counselor about using it.</p><h3>4. Your content</h3><p>Everything you write in Steady belongs to you and stays on your device. Because there's no backup, you're responsible for keeping a copy (Menu → Export my journal) if you want one. Deleted data can't be recovered.</p><h3>5. Using Steady</h3><p>Steady is for your personal, non-commercial use. Please don't misuse it, for example by trying to break it or by copying its content to sell.</p><h3>6. Tasks and guides</h3><p>Tasks are suggestions. Only do what feels safe and right for you, and skip anything that doesn't; you can swap or remove any task. Talk to a health professional before making changes related to a medical or mental health condition.</p><h3>7. No guarantees</h3><p>Steady is provided “as is.” It's built to be helpful and reliable, but there's no promise that it will always work without errors or that it will improve how you feel. To the extent the law allows, the developer isn't liable for losses that come from using Steady, including lost data.</p><h3>8. Changes</h3><p>These terms may be updated. If anything important changes, Steady will show you the new terms and ask you to agree again.</p><h3>9. Contact</h3><p>${be()}</p><p class="draft-note">Plain-language version written for the CS 124 student version of Steady. It hasn't been reviewed by a lawyer, which would be needed before a public release.</p>`}function Te(n,r){let i=t(r).map(t=>({key:e(t),date:t,record:n.history[e(t)]})),a=i.map(e=>e.record).filter(e=>e!==void 0);return{days:i,max:Math.max(4,...a.map(e=>Math.max(e.done,e.goal))),checkedIn:a.filter(e=>e.mood).length,tasksDone:a.reduce((e,t)=>e+t.done,0),goalsMet:a.filter(e=>e.goal>0&&e.done>=e.goal).length}}var Ee=[[3,3,`okay`],[1,2,`low`],[4,4,`good`],[1,1,`struggling`],[2,3,`okay`],[2,2,`low`]];function De(n,r){let i=e(r);t(r).forEach((t,r)=>{let a=e(t);if(a>=i||n.history[a])return;let[o,s,c]=Ee[r%Ee.length];n.history[a]={done:o,goal:s,mood:c,sample:!0}})}function Oe(e){return Object.values(e.history).some(e=>e.sample)}function ke(e){for(let[t,n]of Object.entries(e.history))n.sample&&delete e.history[t]}function Ae(e,t){let n=e.title.trim();if(n===``)return{ok:!1,error:`Give the task a name first.`};let r=e.minutesText.trim()===``?null:Number(e.minutesText);return r!==null&&(!Number.isInteger(r)||r<1||r>240)?{ok:!1,error:`Minutes should be a whole number from 1 to 240, or left blank.`}:{ok:!0,task:{id:`mine-${t}`,title:n,difficulty:e.difficulty,minutes:r,area:`mine`,prompt:e.writing?n:null,frequency:e.frequency}}}var T={state:pe(e()),guideOpen:{},onboardingAreas:[],pickerQuery:``,focusPickerOpen:!1,justOnboarded:!1,writing:null,undoIndex:null,pendingEffect:null,ringShownFraction:0,wrapSlides:[],wrapIndex:0},E=Math.random;function D(){try{return window.localStorage}catch{return null}}function O(){ge(D(),T.state)}function k(e){let t=document.getElementById(e);if(!t)throw Error(`Steady: missing #${e} in index.html`);return t}var je={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`};function A(e){return e.replace(/[&<>"']/g,e=>je[e])}function Me(e){return e.charAt(0).toUpperCase()+e.slice(1)}var Ne;function j(e){let t=k(`toast`);t.textContent=e,t.classList.add(`show`),clearTimeout(Ne),Ne=setTimeout(()=>t.classList.remove(`show`),3e3)}function Pe(){window.scrollTo({top:0})}var Fe={today:`
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
`};function Ie(e,t,n,r){return`<svg class="${r}" width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${n}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${e}</svg>`}var Le=new Map;function Re(e){let t=Le.get(e);if(t===void 0){let n=Fe[e];t=n.slice(n.indexOf(`>`)+1,n.lastIndexOf(`</svg>`)).replace(/\s+/g,` `).trim(),Le.set(e,t)}return t}function M(e,t=20){return Ie(Re(e),t,1.8,`icon`)}var N=`<circle cx="9" cy="10" r="1.1" fill="currentColor" stroke="none"/><circle cx="15" cy="10" r="1.1" fill="currentColor" stroke="none"/>`,ze={good:`<path d="M7.6 10.3q1.4-1.6 2.8 0"/><path d="M13.6 10.3q1.4-1.6 2.8 0"/><path d="M7.8 13.6q4.2 4.8 8.4 0"/>`,okay:`${N}<path d="M8.8 14.4q3.2 2.4 6.4 0"/>`,low:`${N}<path d="M9 15.6q3-1.4 6 0"/>`,struggling:`<path d="M7.7 8.2l2.6 1"/><path d="M16.3 8.2l-2.6 1"/>${N.replace(/cy="10"/g,`cy="11"`)}<path d="M8.6 16.6q3.4-2.8 6.8 0"/>`};function P(e,t=24){return Ie(`<circle cx="12" cy="12" r="9.3"/>${ze[e]}`,t,1.7,`mood-face mood-${e}`)}function Be(e=28){return`<svg class="logo" width="${e}" height="${e}" viewBox="0 0 32 32" aria-hidden="true" focusable="false"><rect width="32" height="32" rx="9" fill="var(--sage)"/><path d="M9.5 17.2c1.6-3.6 3.3-3.6 4.4 0s2.8 3.6 4.4 0 2.6-3.4 4.2-1.2" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>`}function Ve(e=document){e.querySelectorAll(`[data-icon]`).forEach(e=>{let t=e.dataset.icon??``,n=Number(e.dataset.size??20);e.innerHTML=t===`logo`?Be(n):t in Fe?M(t,n):``})}function He(e,t){let n=`${d[e].label} ${d[e].desc} ${ee[e]??``}`.toLowerCase();return t.toLowerCase().split(/\s+/).filter(Boolean).every(e=>n.includes(e))}function Ue(e){return[...f,...p].filter(t=>He(t,e))}function F(e){return e===`onboard`?T.onboardingAreas:T.state.focusAreas}function I(e,t){let n=t.includes(e);return`<button class="picker-row${n?` on`:``}" data-action="pick-area" data-area="${e}" aria-pressed="${n}"><span class="picker-box">${n?M(`check`,14):``}</span><span><strong>${d[e].label}</strong><span class="picker-desc">${d[e].desc}</span></span></button>`}function L(e){let t=F(e),n=T.pickerQuery.trim();if(n===``)return`<div class="picker-group">Common areas</div>`+f.map(e=>I(e,t)).join(``)+`<div class="picker-group">More areas</div>`+p.map(e=>I(e,t)).join(``);let r=Ue(n);return r.length===0?`<div class="empty">Nothing matches "${A(n)}". Try another word, or make your own tasks in Focus → My tasks.</div>`:r.map(e=>I(e,t)).join(``)}function We(e){let t=F(e);return`<div class="chips picker-selected">${t.length?t.map(e=>`<button class="chip on" data-action="pick-area" data-area="${e}" aria-label="Remove ${d[e].label}">${d[e].label}${M(`close`,14)}</button>`).join(``):`<span class="muted">None chosen yet.</span>`}</div>`}function Ge(e){return`<div class="picker" data-scope="${e}">`+We(e)+`<input class="picker-search" type="search" placeholder="Search, e.g. sleep, sad, homesick" aria-label="Search focus areas" value="${A(T.pickerQuery)}"><div class="picker-list" role="group" aria-label="Focus areas">${L(e)}</div></div>`}function Ke(e){let t=e.dataset.scope,n=e.querySelector(`.picker-selected`);n?.insertAdjacentHTML(`afterend`,We(t)),n?.remove();let r=e.querySelector(`.picker-list`);r&&(r.innerHTML=L(t))}function qe(){return`<p class="muted" style="margin-top:16px;text-align:center">Need support right now? <button class="link-btn" data-action="open-help">Get help now</button></p>`}function Je(){return`<div class="welcome-mark">${Be(52)}</div><div class="step">Step 1 of 2</div><h2>Welcome to Steady</h2><p>Small daily steps, planned around how you feel. Each day you'll check in, get a few tasks sized to your energy, and see your progress.</p><div class="disclaimer">Steady is a self-help companion, not treatment, and it doesn't diagnose anything.</div><p style="margin-bottom:10px"><strong>What would you like to work on?</strong> Choose any, or skip. You can change these later in the Focus tab.</p>`+Ge(`onboard`)+`<label class="agree-row"><input type="checkbox" id="agree-terms"><span>I'm 13 or older, and I understand Steady is a self-help tool, not medical care or a crisis service. I agree to the ${w(`terms`,`Terms of use`)} and ${w(`privacy`,`Privacy policy`)}.</span></label><div class="error" id="agree-error"></div><button class="btn" style="margin-top:8px" data-action="finish-onboarding">Continue</button><p class="muted" style="margin-top:10px">Under 13? Steady isn't made for you yet. A parent, guardian, or school counselor can help you find support.</p>`+qe()}function Ye(){let e=new Date().getHours(),t=e<12?`Good morning`:e<18?`Good afternoon`:`Good evening`;return T.state.profileName?`${t}, ${A(T.state.profileName)}`:t}function Xe(){let e=T.state,t=e.mood?``:`<div class="step">${T.justOnboarded?`Step 2 of 2`:Ye()}</div>`,i=r.map(e=>{let t=n[e],r=`${t.mix.length} ${t.mix.length===1?`task`:`tasks`}`;return`<button class="mood-btn" data-action="pick-mood" data-mood="${e}"><span class="mood-badge mood-${e}">${P(e,30)}</span><span class="mood-text"><strong>${t.label}</strong><span class="sub">${r}: ${t.plan}</span></span>${M(`chevron`,18)}</button>`}).join(``);return t+`<h2>How are you feeling today?</h2><p>This sets how many tasks you get and how hard they are. There's no wrong answer.</p>`+i+(e.mood?`<button class="btn secondary" data-action="close-checkin">Keep today's plan</button>`:``)+qe()}function Ze(){k(`checkin-sheet`).innerHTML=T.state.onboarded?Xe():Je()}function R(){T.onboardingAreas=[...T.state.focusAreas],T.pickerQuery=``,Ze(),k(`checkin-overlay`).classList.add(`open`)}function z(){k(`checkin-overlay`).classList.remove(`open`)}function Qe(){let e=T.state,t=e.agreedAt?`You confirmed you're 13 or older and agreed to the Terms of use and Privacy policy on `+new Date(e.agreedAt).toLocaleDateString(void 0,{month:`long`,day:`numeric`,year:`numeric`})+`.`:`You haven't agreed to the current Terms of use and Privacy policy yet. You'll be asked the next time you start fresh.`;return`<form class="form" data-form="profile" novalidate><label for="profile-name">Your name (optional)</label><input id="profile-name" type="text" maxlength="40" autocomplete="given-name" placeholder="What should Steady call you?" value="${A(e.profileName)}"><div class="error" id="profile-error"></div><button class="btn" type="submit">Save</button></form><p class="muted" style="margin-top:10px">Your name stays on this device and is only used to greet you.</p><h3>Agreement</h3><p>${t}</p><p>${w(`terms`,`Terms of use`)} · ${w(`privacy`,`Privacy policy`)}</p>`}var $e={profile:{title:`Profile`,html:Qe},account:{title:`Account & backup`,html:xe},about:{title:`About Steady`,html:Se},privacy:{title:`Privacy policy`,html:Ce},terms:{title:`Terms of use`,html:we}};function et(e){let t=$e[e];if(!t)return;k(`page-title`).textContent=t.title,k(`page-body`).innerHTML=t.html();let n=k(`page`);n.classList.add(`open`),n.scrollTop=0,n.querySelector(`.page-head button`)?.focus()}function B(){k(`page`).classList.remove(`open`)}function tt(){let e=k(`profile-name`).value.trim().replace(/\s+/g,` `);e.length>40?k(`profile-error`).textContent=`Please keep your name under 40 characters.`:(T.state.profileName=e,O(),j(e?`Saved. Hi, ${e}!`:`Name removed.`))}var nt=[`var(--sage)`,`var(--medium)`,`var(--lavender)`,`var(--hard)`];function V(e,t){T.pendingEffect={index:e,kind:t,goal:t===`done`&&b(T.state)===T.state.goal}}function rt(e){let t=!navigator.userActivation||navigator.userActivation.hasBeenActive;typeof navigator.vibrate==`function`&&t&&navigator.vibrate(e)}function it(e,t,n){let r=e.getBoundingClientRect();for(let e=0;e<t;e++){let i=2*Math.PI*e/t+Math.random()*.5,a=n*(.6+Math.random()*.4),o=document.createElement(`span`);o.className=`spark`,o.style.left=`${r.left+r.width/2}px`,o.style.top=`${r.top+r.height/2}px`,o.style.background=nt[e%nt.length],o.style.setProperty(`--dx`,`${Math.cos(i)*a}px`),o.style.setProperty(`--dy`,`${Math.sin(i)*a}px`),document.body.appendChild(o),setTimeout(()=>o.remove(),800)}}var at=null;function ot(e,t){if(T.state.sound)try{at??=new AudioContext;let n=at;e.forEach((e,r)=>{let i=n.currentTime+r*.14,a=n.createOscillator(),o=n.createGain();a.type=`sine`,a.frequency.value=e,o.gain.setValueAtTime(0,i),o.gain.linearRampToValueAtTime(t,i+.02),o.gain.exponentialRampToValueAtTime(1e-4,i+1.1),a.connect(o).connect(n.destination),a.start(i),a.stop(i+1.2)})}catch{}}function st(e){let t=document.querySelector(`[data-action="toggle"][data-index="${e.index}"]`),n=t?.closest(`.task`);if(!t||!n)return;if(e.kind===`undone`){n.classList.add(`just-undone`);return}let r=c[T.state.mood??`okay`];if(T.state.effects&&(t.classList.add(`just-checked`),n.classList.add(`just-done`),r.sparks&&it(t,r.sparks,r.reach),r.buzz&&rt(r.buzz)),e.goal){let e=document.querySelector(`.ring`);T.state.effects&&e&&(e.classList.add(`goal-pulse`),it(e,r.goalSparks,r.goalReach),rt([12,60,12])),ot([523,659,784].map(e=>e*r.pitch),r.volume)}else ot([784*r.pitch],r.volume)}function ct(){let e=document.querySelector(`.ring .fill`);if(!e)return;let t=Number(e.dataset.fraction),n=Number(e.dataset.circumference)*(1-t);requestAnimationFrame(()=>requestAnimationFrame(()=>e.style.strokeDashoffset=String(n))),T.ringShownFraction=t}var lt={grounding:{title:`Grounding when anxiety spikes`,time:`4 min`,steps:[`Name 5 things you can see, slowly.`,`Notice 4 things you can touch: clothes, chair, floor.`,`Listen for 3 sounds, near or far.`,`Breathe in for 4 counts and out for 6. The long exhale helps your body settle.`]},triggers:{title:`Spotting your anxiety triggers`,time:`6 min`,steps:[`When anxiety rises, note what happened just before: a thought, a place, a message.`,`After a few days, look for the 2 or 3 situations that keep coming up.`,`Ask: is this actually dangerous right now, or does it just feel familiar?`,`Pick one trigger and plan one small response for next time.`]},morning:{title:`A morning that's easier to start`,time:`5 min`,steps:[`Choose one tiny anchor: water, opening a window, one stretch.`,`Keep it under 2 minutes, so skipping feels harder than doing.`,`Attach it to something you already do, like brushing your teeth.`,`Let the rest of the morning stay flexible.`]},reframe:{title:`Reframing a harsh thought`,time:`6 min`,steps:[`Write the thought down, word for word.`,`Name the pattern: all-or-nothing, mind-reading, catastrophizing?`,`List one or two facts that don't fit the thought.`,`Rewrite it so it's fair, not falsely positive.`]},winddown:{title:`Winding down for sleep`,time:`5 min`,steps:[`Pick a regular wake-up time and keep it, even after a bad night.`,`Start dimming lights and screens an hour before bed.`,`If you can't sleep after about 20 minutes, get up and do something calm until you're sleepy.`,`Keep the bed for sleep, not scrolling.`]},ladder:{title:`Small steps out of your comfort zone`,time:`7 min`,steps:[`Name the situation you're avoiding in one sentence.`,`List 5 versions of it, from easiest to hardest.`,`Do only the easiest version today. It should feel almost too easy.`,`Repeat a step until it feels routine before climbing to the next.`]},talking:{title:`Opening up to someone`,time:`5 min`,steps:[`Pick one person who has listened well before.`,`Try a low-pressure opener: "Something's been on my mind, can I tell you about it?"`,`Start with one honest sentence. You don't need the whole story.`,`Let them respond before adding more.`]},cooldown:{title:`Cooling down before you react`,time:`4 min`,steps:[`Learn your early signs: a tight jaw, heat in your face, a fast heartbeat.`,`When you notice them, pause. Step away for 10 minutes if you can.`,`Breathe slowly or move your body until the wave passes.`,`Come back and say what you need: "I feel ___ when ___."`]},loops:{title:`Getting out of a thought loop`,time:`4 min`,steps:[`Notice the loop and name it: "I'm replaying this again."`,`Ask: am I solving something, or just going over it?`,`If you're solving, write down one next step and stop there.`,`If you're replaying, move your attention: use your hands, change rooms, or step outside.`]},scrollbreak:{title:`Taking a break from scrolling`,time:`3 min`,steps:[`Notice the urge to pick up your phone before you act on it.`,`Take three slow breaths first.`,`Ask: what do I actually need right now? Rest, company, or a distraction?`,`Do that instead, or set a timer so scrolling has an end.`]},starttiny:{title:`Starting when you can't start`,time:`4 min`,steps:[`Shrink the first step until it's silly: put your shoes on, get out one thing.`,`Set a timer for 5 minutes and promise yourself you can stop after.`,`Remove one distraction: phone in another room, one tab only.`,`When the timer ends, decide again. Stopping is allowed.`]}},H=96,ut=42;function dt(e,t){let n=H/2,r=2*Math.PI*ut;return`<svg width="${H}" height="${H}" viewBox="0 0 ${H} ${H}"><circle class="track" cx="${n}" cy="${n}" r="${ut}"/><circle class="fill" cx="${n}" cy="${n}" r="${ut}" data-fraction="${t?Math.min(1,e/t):0}" data-circumference="${r}" style="stroke-dasharray:${r};stroke-dashoffset:${r*(1-T.ringShownFraction)}"/></svg>`}function ft(e){return`<span class="tag ${e}">${Me(e)}</span>`}function pt(e){return`~${e} min`}function mt(e){return e===`mine`?`My task`:d[e].label}function ht(e,t){let n=[];return e.prompt&&n.push(`<span class="meta-item writing">${M(`writing`,13)}Writing</span>`),e.area===`mine`?n.push(_(e)?`<span class="meta-item">${M(`repeat`,13)}Every day</span>`:`<span class="meta-item">${M(`random`,13)}Sometimes</span>`):t.showArea&&n.push(`<span class="meta-item">${A(mt(e.area))}</span>`),e.minutes&&n.push(`<span class="meta-item">${pt(e.minutes)}</span>`),`<div class="task-meta">${ft(e.difficulty)}${n.join(`<span class="dot" aria-hidden="true">·</span>`)}</div>`}function gt(e,t){return`<form class="form" data-form="${e}" novalidate><label for="${e}-title">Task name</label><input id="${e}-title" type="text" maxlength="80" placeholder="e.g. Call my grandma" autocomplete="off"><div class="row"><div><label for="${e}-difficulty">Difficulty</label><select id="${e}-difficulty"><option value="easy">Easy</option><option value="medium">Medium</option><option value="hard">Hard</option></select></div><div><label for="${e}-minutes">Minutes (optional)</label><input id="${e}-minutes" type="number" min="1" max="240" inputmode="numeric"></div></div><label for="${e}-frequency">How often should it show up?</label><select id="${e}-frequency"><option value="sometimes">Sometimes (picked at random)</option><option value="daily">Every day</option></select><label class="checkbox-row"><input id="${e}-writing" type="checkbox"> Writing task (a short answer, saved to your journal)</label><div class="error" id="${e}-error"></div><button class="btn" type="submit">${t}</button></form>`}function _t(e,t){let n=T.state,r=n.mood?y(n).includes(e.id)?`<button class="small-btn added" disabled>${M(`check`,14)}Added</button>`:`<button class="small-btn" data-action="add-to-today" data-id="${e.id}" aria-label="Add ${A(e.title)} to today">${M(`plus`,14)}Add</button>`:`<button class="small-btn" disabled title="Check in first">Add</button>`,i=e.area===`mine`?`<button class="link-btn" data-action="toggle-frequency" data-id="${e.id}">${_(e)?`Make it sometimes`:`Make it every day`}</button>`:``,a=t?`<button class="icon-btn" data-action="delete-custom" data-id="${e.id}" aria-label="Delete ${A(e.title)}">${M(`trash`,18)}</button>`:``;return`<li class="task"><div class="task-body"><div class="task-title">${A(e.title)}</div>`+ht(e,{showArea:!1})+`${i}</div>${r}${a}</li>`}function vt(e){return e.map(e=>{let t=lt[e];return`<details class="guide" data-guide="${e}"${T.guideOpen[e]?` open`:``}><summary><span>${t.title}</span><span class="muted">~${t.time}</span></summary><ol>${t.steps.map(e=>`<li>${A(e)}</li>`).join(``)}</ol><div class="video-slot">${M(`play`,18)}<span>A short video from a trusted source (for example NHS or a university health center) will go here.</span></div></details>`}).join(``)}function yt(){let e=T.state.customTasks;return`<div class="card"><p class="muted">Tasks you write yourself. They can show up in your daily plan at their difficulty.</p>`+(e.length===0?`<div class="empty">No tasks of your own yet.</div>`:`<ul class="task-list" style="margin-top:12px">${e.map(e=>_t(e,!0)).join(``)}</ul>`)+`<details class="add"><summary>${M(`plus`,16)}Create a task</summary>${gt(`mine`,`Create task`)}</details></div>`}function bt(e){let t=d[e],n=Object.values(m).filter(t=>t.area===e).sort((e,t)=>i.indexOf(e.difficulty)-i.indexOf(t.difficulty));return`<div class="card"><p class="muted">${t.desc}</p></div><div class="section-head"><h2>Guides</h2><span>Tap to open</span></div>`+vt(t.guides)+`<div class="section-head"><h2>Extra tasks</h2><span>${n.length} for ${t.label.toLowerCase()}</span></div><p class="muted" style="margin-bottom:10px">Your daily plan already picks from these. Finished it and want more? Add one to today.</p><ul class="task-list">${n.map(e=>_t(e,!1)).join(``)}</ul><p class="muted" style="margin-top:16px">Learn more from trusted sources: <a href="https://www.nimh.nih.gov/health/topics" target="_blank" rel="noopener">NIMH health topics</a> · <a href="https://www.nhs.uk/every-mind-matters/" target="_blank" rel="noopener">NHS Every Mind Matters</a></p>`}function xt(){let e=T.state,t=`<div class="section-head" style="margin-top:0"><h2>Your focus areas</h2><span>${e.focusAreas.length} chosen</span></div><details class="card picker-card"${T.focusPickerOpen?` open`:``} id="focus-picker-details"><summary>Change focus areas</summary><p class="muted" style="margin:8px 0 12px">These decide which tasks and guides you get. This isn't a diagnosis.</p>`+Ge(`focus`)+`</details>`,n=[...e.focusAreas,`general`,`mine`];return e.focusTab&&n.includes(e.focusTab)||(e.focusTab=n[0]),t+=`<div class="tabs-row" role="tablist">`+n.map(t=>`<button class="chip${e.focusTab===t?` on`:``}" role="tab" data-action="focus-tab" data-area="${t}">${t===`mine`?`My tasks`:d[t].label}</button>`).join(``)+`</div>`,t+(e.focusTab===`mine`?yt():bt(e.focusTab))}function St(e){let t=new Date(e.date).toLocaleDateString(void 0,{weekday:`short`,month:`short`,day:`numeric`});return`<div class="entry"><div class="entry-top"><span class="entry-date">${e.mood?P(e.mood,16):``}`+t+(e.mood?` · ${n[e.mood].label}`:``)+(e.edited?` · edited`:``)+`</span><button class="icon-btn" data-action="delete-entry" data-id="${e.id}" aria-label="Delete entry">${M(`trash`,17)}</button></div>`+(e.fromTask?`<div class="entry-source">${M(`writing`,13)}From task: ${A(e.fromTask)}</div>`:``)+(e.prompt&&e.prompt!==e.fromTask?`<div class="entry-prompt">${A(e.prompt)}</div>`:``)+`<div class="entry-text">${A(e.text)}</div></div>`}function Ct(){let e=T.state,t=`<div class="section-head" style="margin-top:0"><h2>Journal</h2><span>Private, stays on this device</span></div><div class="card form"><label>Start with a prompt, or just write</label><div class="chips" id="prompt-chips">`+[...s.any,...e.mood?s[e.mood]:[]].map(e=>`<button class="chip prompt" data-action="prompt" data-prompt="${A(e)}">${A(e)}</button>`).join(``)+`</div><label for="journal-text">Your entry</label><textarea id="journal-text" placeholder="Write whatever comes to mind…"></textarea><div class="error" id="journal-error"></div><button class="btn" data-action="save-entry">Save entry</button></div>`;return t+=`<div class="section-head"><h2>Past entries</h2><span>${e.journal.length}</span></div>`,t+=e.journal.length===0?`<div class="card empty">No entries yet. Your first one can be a single sentence.</div>`:`<div class="card">${[...e.journal].reverse().map(St).join(``)}</div>`,t}function wt(){let t=new Date,n=e(t),r=Te(T.state,t),i=r.days.map(({key:e,date:t,record:i})=>{let a=i?.done??0,o=i?.goal??0,s=o>0&&a>=o,c=t.toLocaleDateString(void 0,{weekday:`short`});return`<div class="bar-col${e===n?` today`:``}"><div class="bar-area">`+(o?`<div class="goal-tick" style="bottom:${o/r.max*100}%"></div>`:``)+`<div class="bar${s?` met`:``}" style="height:${a/r.max*100}%" title="${a} of ${o}"></div></div><div class="bar-mood">${i?.mood?P(i.mood,18):``}</div><div class="bar-day">${c}</div></div>`}).join(``),a=`<div class="section-head" style="margin-top:0"><h2>This week</h2><span>Showing up counts, not streaks</span></div><div class="stats"><div class="stat"><div class="val">${r.checkedIn}</div><div class="lbl">Days checked in</div></div><div class="stat"><div class="val">${r.tasksDone}</div><div class="lbl">Tasks done</div></div><div class="stat"><div class="val">${r.goalsMet}</div><div class="lbl">Goals reached</div></div></div><div class="card" style="margin-top:16px"><div class="bars">${i}</div><div class="legend">Bars are tasks done. Dashed lines are each day's goal. Dark bars mean the goal was reached.</div></div>`;return r.checkedIn===0&&(a+=`<p class="muted">Your week fills in as you check in each day.</p>`),a+=Oe(T.state)?`<button class="btn secondary" data-action="clear-sample">Remove sample data</button>`:`<button class="btn secondary" data-action="add-sample">Preview with sample data</button>`,a}function Tt(e,t){return e>t?`Goal reached, plus ${e-t} bonus`:e===t?`Goal reached`:e===0?`One step at a time`:`${t-e} to go`}function Et(){let e=T.state;return`<ul class="task-list">${e.plan.map((t,n)=>{let r=g(e,t.taskId);if(!r)return``;let i=t.done||_(r)?``:`<button class="icon-btn" data-action="swap" data-index="${n}" title="Swap for another task" aria-label="Swap for another task">${M(`swap`,18)}</button>`;return`<li class="task${t.done?` done`:``}"><button class="check" data-action="toggle" data-index="${n}" aria-label="${t.done?`Mark not done: `:`Mark done: `}${A(r.title)}">${t.done?M(`check`,16):``}</button><div class="task-body"><div class="task-title">${A(r.title)}</div>${ht(r,{showArea:!0})}</div>`+i+`<button class="icon-btn" data-action="remove" data-index="${n}" title="Remove from today" aria-label="Remove from today">${M(`close`,18)}</button></li>`}).join(``)}</ul>`}function Dt(){return`<section class="card checkin-card"><div class="face-row" aria-hidden="true">${r.map(e=>P(e,30)).join(``)}</div><h2>How are you feeling today?</h2><p class="muted">Check in to get a plan sized to your energy.</p><button class="btn" data-action="open-checkin">Check in</button></section>`}function Ot(){let e=T.state;if(!e.mood)return Dt();let t=n[e.mood],r=b(e),i=`<section class="card progress-card" aria-live="polite"><div class="ring">${dt(r,e.goal)}<div class="ring-label"><div class="num">${r}<span>/${e.goal}</span></div><div class="cap">today</div></div></div><div class="progress-text"><h1>${Tt(r,e.goal)}</h1><div class="mood-line">${P(e.mood,18)}<span>Feeling ${t.label.toLowerCase()} · ${t.plan}</span></div><button class="link-btn" data-action="open-checkin">Check in again</button></div></section>`;if(e.message&&(i+=`<div class="message" role="status"><p>${A(e.message)}</p><button class="icon-btn" data-action="dismiss-message" aria-label="Dismiss message">${M(`close`,16)}</button></div>`),r>0){let t=r>=e.goal;i+=`<button class="wrap-btn${t?` ready`:``}" data-action="open-wrap">${M(`play`,18)}<span>${t?`Your day, wrapped`:`Wrap up your day so far`}</span>${M(`chevron`,18)}</button>`}return i+=`<div class="section-head"><h2>Today's plan</h2><span>${r} of ${e.plan.length} done</span></div>`,i+=e.plan.length===0?`<div class="card empty">No tasks fit today's plan yet. Add your own below, or choose focus areas in the Focus tab.</div>`:Et(),i+=`<details class="add"><summary>${M(`plus`,16)}Add your own task</summary>${gt(`today`,`Add to today`)}</details>`,i}var kt={today:Ot,journal:Ct,progress:wt,focus:xt};function U(){k(`screen`).innerHTML=kt[T.state.tab](),ct(),T.pendingEffect&&T.state.tab===`today`&&st(T.pendingEffect),T.pendingEffect=null,document.querySelectorAll(`.nav button`).forEach(e=>{let t=e.dataset.tab===T.state.tab;e.classList.toggle(`on`,t),t?e.setAttribute(`aria-current`,`page`):e.removeAttribute(`aria-current`)})}function W(){ae(T.state),O(),U()}function At(e){k(`sheet-content`).innerHTML=e,k(`sheet-overlay`).classList.add(`open`)}function G(){k(`sheet-overlay`).classList.remove(`open`)}var jt=[[`system`,`Phone setting`],[`light`,`Light`],[`dark`,`Dark`]],Mt=[[`sage`,`Sage`,`#3F6350`,`#DEEAE1`],[`sunrise`,`Sunrise`,`#C2502B`,`#FFD9C2`],[`midnight`,`Midnight`,`#8B7CFF`,`#0E1022`],[`paper`,`Paper`,`#1A1A1A`,`#FBFAF6`]];function Nt(e){return Mt.some(([t])=>t===e)}var Pt=typeof window.matchMedia==`function`?window.matchMedia(`(prefers-color-scheme: dark)`):null;function K(){let{look:e,theme:t}=T.state,n=document.documentElement;e===`midnight`||t===`dark`||t===`system`&&Pt?.matches===!0?n.dataset.dark=``:delete n.dataset.dark,e===`sage`?delete n.dataset.look:n.dataset.look=e}function Ft(){Pt?.addEventListener(`change`,K)}function It(){if(T.state.journal.length===0){j(`Your journal is empty, so there's nothing to export yet.`);return}let t=new Blob([de(T.state.journal,new Date)],{type:`text/plain`}),n=document.createElement(`a`);n.href=URL.createObjectURL(t),n.download=`steady-journal-${e()}.txt`,document.body.appendChild(n),n.click(),n.remove(),setTimeout(()=>URL.revokeObjectURL(n.href),1e3),j(`Journal exported. Check your downloads.`)}function Lt(){At(`<h2 id="sheet-title">Delete all your data?</h2><p>This permanently removes your tasks, journal entries, drafts, progress, and settings from this device. It can't be undone.</p>`+(T.state.journal.length?`<button class="btn secondary" data-action="export-journal">Export my journal first</button>`:``)+`<button class="btn danger" data-action="delete-all">Delete everything</button><button class="btn secondary" data-action="close-sheet">Cancel</button>`)}function Rt(){_e(D()),T.state=pe(e()),T.justOnboarded=!1,T.pickerQuery=``,T.focusPickerOpen=!1,T.ringShownFraction=0,G(),B(),K(),U(),R(),j(`All your data was deleted. Steady is starting fresh.`)}function q(e){return`<div class="drawer-group">${e}</div>`}function J(e,t,n,r={}){return`<button class="drawer-item${r.danger?` danger`:``}" ${n}><span class="ico">${M(e)}</span><span class="label">${t}</span>${r.opensPage?`<span class="chev">${M(`chevron`,18)}</span>`:``}</button>`}function zt(e,t,n,r){return`<button class="drawer-item" data-action="${n}" role="switch" aria-checked="${r}"><span class="ico">${M(e)}</span><span class="label">${t}</span><span class="switch${r?` on`:``}"></span></button>`}function Bt(e,t,n){return`<div class="drawer-item static"><span class="ico">${M(e)}</span><span class="label" id="${n}">${t}</span></div>`}function Vt(){let e=Mt.map(([e,t,n,r])=>{let i=T.state.look===e;return`<button role="radio" aria-checked="${i}" class="look-swatch${i?` on`:``}" data-action="set-look" data-look-choice="${e}"><span class="swatch" style="background:linear-gradient(135deg,${n} 50%,${r} 50%)"></span>${t}</button>`}).join(``);return Bt(`palette`,`Theme`,`look-label`)+`<div class="look-grid" role="radiogroup" aria-labelledby="look-label">${e}</div>`}function Ht(){let e=jt.map(([e,t])=>{let n=T.state.theme===e;return`<button role="radio" aria-checked="${n}" class="${n?`on`:``}" data-action="set-theme" data-theme-choice="${e}">${t}</button>`}).join(``);return Bt(`contrast`,`Light or dark`,`appearance-label`)+`<div class="segmented" role="radiogroup" aria-labelledby="appearance-label">${e}</div>`+(T.state.look===`midnight`?`<div class="drawer-note">The Midnight theme is always dark.</div>`:``)}function Ut(){let e=T.state,t=e.profileName;k(`drawer-panel`).innerHTML=`<button class="drawer-profile" data-action="open-page" data-page="profile"><span class="avatar">${t?A(t.charAt(0).toUpperCase()):M(`user`,22)}</span><span class="who"><strong>${t?A(t):`Add your name`}</strong><span>Profile · stored on this device</span></span>${M(`chevron`,18)}</button>`+q(`Account`)+J(`cloud`,`Account &amp; backup`,`data-action="open-page" data-page="account"`,{opensPage:!0})+q(`Personalization`)+Vt()+Ht()+zt(`bell`,`Sound`,`toggle-sound`,e.sound)+zt(`effects`,`Celebration effects`,`toggle-effects`,e.effects)+q(`Your plan`)+J(`focus`,`Focus areas`,`data-action="drawer-focus"`,{opensPage:!0})+q(`Your data`)+J(`download`,`Export my journal`,`data-action="export-journal"`)+J(`trash`,`Delete all my data`,`data-action="confirm-delete-all"`,{danger:!0})+q(`Help &amp; legal`)+J(`help`,`Get help now`,`data-action="open-help"`)+J(`info`,`About Steady`,`data-action="open-page" data-page="about"`,{opensPage:!0})+J(`lock`,`Privacy policy`,`data-action="open-page" data-page="privacy"`,{opensPage:!0})+J(`document`,`Terms of use`,`data-action="open-page" data-page="terms"`,{opensPage:!0})+`<div class="drawer-footer">Steady ${ve}</div>`}function Wt(){Ut(),k(`drawer`).classList.add(`open`),document.querySelector(`.menu-btn`)?.setAttribute(`aria-expanded`,`true`),document.querySelector(`.drawer-profile`)?.focus()}function Y(){k(`drawer`).classList.remove(`open`),document.querySelector(`.menu-btn`)?.setAttribute(`aria-expanded`,`false`)}function X(e){Ut(),document.querySelector(`#drawer-panel [data-action="${e}"]`)?.focus()}function Gt(){let r=T.state;if(!r.mood)return[];let a=n[r.mood],o=r.plan.filter(e=>e.done).map(e=>g(r,e.taskId)).filter(e=>e!==null),s=r.journal.filter(t=>e(new Date(t.date))===r.day),c=[];c.push(`<div class="kicker">${new Date().toLocaleDateString(void 0,{weekday:`long`})}, wrapped</div><div class="big-face">${P(r.mood,76)}</div><h2>You checked in feeling ${a.label.toLowerCase()}.</h2><p>Here's what you did with it.</p>`);let u=o.length>=r.goal?`, and reached your goal.`:`.`;if(c.push(`<div class="kicker">Today you did</div><div class="big">${o.length}</div><h2>${o.length===1?`thing`:`things`}${u}</h2><ul>${o.slice(0,6).map(e=>`<li>${A(e.title)}</li>`).join(``)}</ul>`),s.length>0){let e=s.reduce((e,t)=>e+ue(t.text),0),t=s[s.length-1].text,n=t.length>140?`${t.slice(0,140)}…`:t;c.push(`<div class="kicker">You put it into words</div><div class="big">${e}</div><h2>${e===1?`word`:`words`} written today.</h2><blockquote>“${A(n)}”</blockquote>`)}let d=[...o].sort((e,t)=>i.indexOf(t.difficulty)-i.indexOf(e.difficulty))[0];if(d){let e=r.mood===`struggling`||r.mood===`low`?`On a hard day, you still did this:`:`Your biggest step today:`;c.push(`<div class="kicker">${e}</div><h2>${A(d.title)}</h2><p>${Me(d.difficulty)}${d.minutes?` · ${pt(d.minutes)}`:``}</p>`)}let f=t(),p=f.filter(t=>r.history[e(t)]?.mood).length,ee=f.map(t=>`<span class="${r.history[e(t)]?.mood?`on`:``}">${t.toLocaleDateString(void 0,{weekday:`narrow`})}</span>`).join(``);return c.push(`<div class="kicker">This week</div><div class="big">${p}</div><h2>${p===1?`day`:`days`} you've shown up.</h2><div class="dots">${ee}</div>`),c.push(`<div class="kicker">One more thing</div><h2>${l[r.mood]}</h2><button class="finish" data-action="close-wrap">Done</button>`),c}function Kt(){let e=k(`wrap-slide`),t=T.wrapIndex===T.wrapSlides.length-1;k(`wrap-overlay`).style.background=u[T.wrapIndex%u.length],k(`wrap-bars`).innerHTML=T.wrapSlides.map((e,t)=>`<span class="${t<=T.wrapIndex?`seen`:``}"></span>`).join(``),e.innerHTML=T.wrapSlides[T.wrapIndex]+(t?``:`<div class="hint">Tap to continue</div>`),e.style.animation=`none`,e.offsetWidth,e.style.animation=``}function qt(){T.wrapSlides=Gt(),T.wrapSlides.length!==0&&(T.wrapIndex=0,Kt(),k(`wrap-overlay`).classList.add(`open`))}function Jt(){k(`wrap-overlay`).classList.remove(`open`)}function Yt(){return k(`wrap-overlay`).classList.contains(`open`)}function Z(e){let t=T.wrapIndex+e;t<0||(t>=T.wrapSlides.length?Jt():(T.wrapIndex=t,Kt()))}function Q(e,t,n=null){let r=T.state,i={index:e,mode:t,entryId:n};T.writing=i;let a=r.plan[e],o=g(r,a.taskId);if(!o)return;let s=r.drafts[C(r,i)],c=t===`edit`?oe(r,n)?.text??``:``;k(`write-title`).textContent=o.title,k(`write-prompt`).textContent=o.prompt===o.title?`Write about it below.`:o.prompt??``;let l=k(`write-text`);l.placeholder=o.difficulty===`hard`?`A short paragraph is plenty.`:`A sentence or two is plenty.`,l.value=s??c,k(`write-error`).textContent=``,k(`write-draft`).textContent=s===void 0?``:`Picked up where you left off.`,k(`write-save`).textContent=t===`edit`?`Save changes`:a.done?`Save as a new answer`:`Save and complete`,k(`write-overlay`).classList.add(`open`),l.focus()}function Xt(){T.writing=null,k(`write-overlay`).classList.remove(`open`)}function Zt(e){let t=T.state;T.undoIndex=e;let n=t.plan[e],r=g(t,n.taskId);if(!r)return;let i=oe(t,n.entryId);if(r.prompt&&i){let e=new Date(i.date).toLocaleTimeString(void 0,{hour:`numeric`,minute:`2-digit`});At(`<h2 id="sheet-title">Your answer</h2><p>${A(r.title)} · ${e}${i.edited?` (edited)`:``}</p><div class="answer-box">${A(i.text)}</div><button class="btn" data-action="undo-edit">Edit answer</button><button class="btn secondary" data-action="undo-new">Write a new answer</button><button class="btn secondary" data-action="undo-uncheck">Mark not done (answer stays in your journal)</button><button class="btn secondary" data-action="close-sheet">Keep it done</button><p style="text-align:center;margin:14px 0 0"><button class="link-btn danger-link" data-action="undo-delete">Delete this answer</button></p>`)}else At(`<h2 id="sheet-title">Mark as not done?</h2><p>“${A(r.title)}” will go back on today's list.</p><button class="btn" data-action="close-sheet">Keep it done</button><button class="btn secondary" data-action="undo-uncheck">Mark not done</button>`)}function Qt(e){let t=t=>k(`${e}-${t}`),n=Ae({title:t(`title`).value,minutesText:t(`minutes`).value,difficulty:t(`difficulty`).value,frequency:t(`frequency`).value,writing:t(`writing`).checked},S());if(!n.ok){k(`${e}-error`).textContent=n.error;return}let r=T.state,i=n.task;r.customTasks.push(i),(e===`today`||ie(r,i))&&r.plan.push({taskId:i.id,done:!1}),j(e===`today`?`Added to today's plan.`:_(i)?`Task created. It will be in your plan every day.`:`Task created. It will show up in your plan some days.`),W()}function $t(){let e=T.writing;e&&T.state.drafts[C(T.state,e)]&&j(`Draft kept. It'll be here when you come back.`),Xt()}var $={"open-drawer":Wt,"open-help":()=>{Y(),k(`help-overlay`).classList.add(`open`)},"close-help":()=>k(`help-overlay`).classList.remove(`open`),"open-page":e=>{Y(),et(e.dataset.page??``)},"close-page":B,"toggle-sound":()=>{T.state.sound=!T.state.sound,O(),X(`toggle-sound`),T.state.sound&&ot([784],.05),j(T.state.sound?`Sound on: a soft chime when you finish a task.`:`Sound off.`)},"toggle-effects":()=>{T.state.effects=!T.state.effects,O(),X(`toggle-effects`),j(T.state.effects?`Celebration effects on.`:`Celebration effects off. Tasks still check off, just quietly.`)},"set-look":e=>{T.state.look=e.dataset.lookChoice,K(),O(),X(`set-look`)},"set-theme":e=>{T.state.theme=e.dataset.themeChoice,K(),O(),X(`set-theme`)},"drawer-focus":()=>{Y(),T.state.tab=`focus`,T.focusPickerOpen=!0,O(),U(),Pe()},"export-journal":()=>{Y(),It()},"confirm-delete-all":()=>{Y(),Lt()},"delete-all":Rt,"open-checkin":R,"close-checkin":z,"pick-area":e=>{let t=e.closest(`.picker`);if(!t)return;let n=t.dataset.scope,r=F(n),i=e.dataset.area??``,a=r.indexOf(i);a===-1?r.push(i):r.splice(a,1),n===`focus`?(T.focusPickerOpen=!0,O(),U()):Ke(t)},"finish-onboarding":()=>{if(!k(`agree-terms`).checked){k(`agree-error`).textContent=`Please confirm you're 13 or older and agree to the terms to continue.`;return}let e=T.state;e.agreedAt=new Date().toISOString(),e.termsVersion=1,e.onboarded=!0,e.focusAreas=[...T.onboardingAreas],T.justOnboarded=!0,O(),Ze(),k(`checkin-overlay`).scrollTop=0},"pick-mood":e=>{let t=T.state,n=e.dataset.mood;t.mood=n,re(t,n,E),t.message=h(o.checkin[n],E),t.tab=`today`,z(),W()},"dismiss-message":()=>{T.state.message=null,W()},toggle:e=>{let t=Number(e.dataset.index),n=T.state.plan[t];n.done?Zt(t):g(T.state,n.taskId)?.prompt?Q(t,`new`):(x(T.state,n,!0,E),V(t,`done`),W())},swap:e=>{let t=T.state,n=Number(e.dataset.index),r=g(t,t.plan[n].taskId);if(!r)return;let i=v(t,r.difficulty,y(t),E);i?(t.plan[n]={taskId:i.id,done:!1},W()):j(`No other ${r.difficulty} tasks yet. Add more focus areas, or write your own.`)},remove:e=>{T.state.plan.splice(Number(e.dataset.index),1),j(`Removed from today. It's still in your task list.`),W()},"add-to-today":e=>{T.state.plan.push({taskId:e.dataset.id??``,done:!1}),j(`Added to today's plan.`),W()},"save-writing":()=>{let e=T.writing;if(!e)return;let t=se(T.state,e,k(`write-text`).value,new Date,E);t.ok?(t.completedTask&&V(e.index,`done`),j(t.toast),Xt(),W()):k(`write-error`).textContent=t.error},"close-writing":$t,"close-sheet":G,"undo-edit":()=>{G();let e=T.undoIndex;e!==null&&Q(e,`edit`,T.state.plan[e].entryId??null)},"undo-new":()=>{G(),T.undoIndex!==null&&Q(T.undoIndex,`new`)},"undo-uncheck":()=>{let e=T.undoIndex;e!==null&&(x(T.state,T.state.plan[e],!1,E),V(e,`undone`),G(),W())},"undo-delete":()=>{let e=T.undoIndex;if(e===null||!window.confirm(`Delete this answer from your journal? This can't be undone.`))return;let t=T.state.plan[e];t.entryId&&le(T.state,t.entryId),t.entryId=null,x(T.state,t,!1,E),V(e,`undone`),G(),j(`Answer deleted. The task is back on your list.`),W()},"focus-tab":e=>{T.state.focusTab=e.dataset.area??null,W()},"delete-custom":e=>{if(!window.confirm(`Delete this task?`))return;let t=e.dataset.id;T.state.customTasks=T.state.customTasks.filter(e=>e.id!==t),T.state.plan=T.state.plan.filter(e=>e.taskId!==t),W()},"toggle-frequency":e=>{let t=g(T.state,e.dataset.id??``);t&&(t.frequency=_(t)?`sometimes`:`daily`,ie(T.state,t)&&T.state.plan.push({taskId:t.id,done:!1}),j(_(t)?`This task will be in your plan every day.`:`This task will show up some days, picked at random.`),W())},prompt:e=>{let t=e.classList.contains(`on`);document.querySelectorAll(`#prompt-chips .chip`).forEach(e=>e.classList.remove(`on`)),t||e.classList.add(`on`)},"save-entry":()=>{let e=document.querySelector(`#prompt-chips .chip.on`),t=ce(T.state,k(`journal-text`).value,e?.dataset.prompt??null,new Date,E);t.ok?(j(t.toast),W()):k(`journal-error`).textContent=t.error},"delete-entry":e=>{window.confirm(`Delete this entry? This can't be undone.`)&&(le(T.state,e.dataset.id??``),j(`Entry deleted.`),W())},"add-sample":()=>{De(T.state,new Date),W()},"clear-sample":()=>{ke(T.state),W()},"open-wrap":qt,"close-wrap":Jt,"wrap-next":()=>Z(1),"wrap-back":()=>Z(-1)};function en(e){let t=e.target,n=t.closest(`[data-tab]`);if(n){T.state.tab=n.dataset.tab,O(),U(),Pe();return}let r=t.closest(`[data-action]`),i=r?$[r.dataset.action??``]:void 0;r&&i?i(r):(t.id===`help-overlay`&&$[`close-help`](t),t.id===`drawer`&&Y(),t.id===`write-overlay`&&$[`close-writing`](t),t.id===`sheet-overlay`&&G(),t.id===`checkin-overlay`&&T.state.mood&&z())}function tn(e){e.preventDefault();let t=e.target.dataset.form??``;t===`profile`?tt():Qt(t)}function nn(e){let t=e.target;t instanceof HTMLDetailsElement&&(t.dataset.guide&&(T.guideOpen[t.dataset.guide]=t.open),t.id===`focus-picker-details`&&(T.focusPickerOpen=t.open))}function rn(e){if(e.key===`Escape`&&k(`drawer`).classList.contains(`open`))return Y();if(e.key===`Escape`&&k(`page`).classList.contains(`open`))return B();Yt()&&(e.key===`ArrowRight`||e.key===` `?Z(1):e.key===`ArrowLeft`?Z(-1):e.key===`Escape`&&Jt())}function an(e){let t=T.writing;if(!t)return;let n=e.target.value,r=C(T.state,t);n.trim()===``?delete T.state.drafts[r]:T.state.drafts[r]=n,O(),k(`write-draft`).textContent=`Draft saved`}function on(e){let t=e.target;if(!t.classList.contains(`picker-search`))return;T.pickerQuery=t.value;let n=t.closest(`.picker`),r=n?.querySelector(`.picker-list`);n&&r&&(r.innerHTML=L(n.dataset.scope))}function sn(){T.state=he(D(),e());let t=new URLSearchParams(window.location.search).get(`look`);Nt(t)&&(T.state.look=t,O()),document.addEventListener(`click`,en),document.addEventListener(`submit`,tn),document.addEventListener(`toggle`,nn,!0),document.addEventListener(`keydown`,rn),document.addEventListener(`input`,on),k(`write-text`).addEventListener(`input`,an),Ft(),Ve(),k(`today-date`).textContent=new Date().toLocaleDateString(void 0,{weekday:`long`,month:`short`,day:`numeric`}),K(),U(),T.state.mood||R()}sn(),`serviceWorker`in navigator&&navigator.serviceWorker.register(`./sw.js`).catch(()=>{});