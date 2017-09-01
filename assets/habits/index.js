module.exports = [
  {
    id: 'walking',
    title: 'Walking',
    why: `
- It boosts creativity ([Stanford study finds walking improves creativity](http://news.stanford.edu/2014/04/24/walking-vs-sitting-042414/))
- It improves mood
- Movement is a cornerstone of a healthy life ("Walking is a man's best medicine" - Hippocrates)
- You see more of your surroundings and thus the world
- It is super easy to do and free
- It is freedom
- It is relaxing and calms the mind
- Time to fully listen to music, podcasts or audiobooks
    `,
    how: `
- Have an impulse when to go out, like: finished work, are stuck with a
  problem, are in a bad mood, on a specific time
- Put on your shoes
- Put a pedometer ([Omron Walking Style IV](https://www.amazon.com/Omron-Schrittz%C3%A4hler-Walking-style-IV/dp/B00KQCQ7F4/ref=sr_1_8?s=sports&ie=UTF8&qid=1501585693&sr=1-8&keywords=pedometer))
  in your pocket to measure your steps
- Just start walking, either freestyle or on a path you know is nice
- If you are in a loud city have something to listen to, like music, a podcast
  or an audiobook
- If you are in nature, you don't necessarily need something digital to listen
  to, just listen to the birds, the rivers, etc., or your thoughts
- Train your attention by focusing on your walking
    `,
    unit: 'steps',
    min: 4000,
    bonus: 10000
  },
  {
    id: 'meditation',
    title: 'Meditation',
    why: `
- It helps with depression
- It helps with stress
- You train your willpower and awareness
- You feel more focused after meditating
- More control over your thinking patterns
- [...and many many more good things](http://liveanddare.com/benefits-of-meditation/)
    `,
    how: `
- Meditate first thing in the morning and last thing before bed
- Make sure there are no distractions and it is quiet
- Set a timer for how many minutes you want to meditate
- Close your eyes
- Sit on a chair or on a pillow
- Focus on your breath, if your mind wanders, recognize it and turn your focus
  back to your breath
- It helps to support your focus on your breath by counting, a mantra or
  simply thinking "in...out"
- It is okay if your mind wanders heavily, just come back to your anchor (which
  is your breath) again and again
`,
    unit: 'minutes',
    min: 5,
    bonus: 20
  },
  {
    id: 'wooping',
    title: 'WOOPing',
    inactive: true,
    why: `
- Increase the chance working toward and completing a goal ([How to Commit to a Goal](http://www.spring.org.uk/2011/01/how-to-commit-to-a-goal.php))
- Identifying the obstacles that might occur
- Pre-commitment: Making a plan on how to tackle obstacles
- Can help with day-to-day goals or big life-goals
    `,
    how: `
- The “W” stands for a wish or concern. Step back and think about one wish in
  your life that you would like to accomplish.
- “O” is the outcome. Identify the best thing that can be associated with
  fulfilling your wish and imagine the relevant events and experience as vividly
  as possible.
- The second “O” is the obstacle. Find the most critical, internal obstacle that
  prevents you from fulfilling the wish and identify what thoughts or behaviors
  might play a role.
- The “P” stands for the plan. Name one thought or action that can be taken to
  overcome your obstacle and think about when and where the obstacle will next
  occur. ([source](https://www.psychologytoday.com/blog/new-take/201512/the-simple-technique-achieving-your-goals))
- Do these steps at the beginning of a day on a sheet of paper, identifying the
  most important thing to do
- Do additional WOOP's after a goal is reached
- WOOP bigger wishes on a weekly and monthly basis
    `,
    unit: 'wishes',
    min: 1,
    bonus: 3
  },
  {
    id: 'reading',
    title: 'Reading',
    why: `
- Stress reduction
- Learn new things, have more options to choose from
- Train your focus and memory
    `,
    how: `
- Have an impulse when to start reading: If you are outside, for a little break
  from work or before bed
- If your mind wanders while reading, recognize it and go back to the voice that
  is reading the book, again and again
- Make notes for information to stick better
- Read a book multiple times to really grasp its content
    `,
    unit: 'pages',
    min: 3,
    bonus: 20
  },
  {
    id: 'no-weed',
    title: 'No Weed',
    why: `
- Increases productivity
- No stepping stone to other bad habits like binge eating or procrastination
- No smoking, thus better health
- Clear mind
- No paranoia
    `,
    how: `
- Don't buy weed, don't buy tabacco or papers either
- If people in your surrounding area smoke, go somewhere else
- If you are asked to smoke, say no
- Recognize if you are trying to fabricate an excuse, and ask yourself if you
  really want to do it, or if it's just the habit
- Internalize the bad things about smoking weed and say "I don't want that
  anymore"
- Bonus point for not taking drugs (including alcohol) at all
    `,
    unit: '1 = done, 2 = bonus',
    min: 1,
    bonus: 2
  },
  {
    id: 'no-porn',
    title: 'No Pr0n',
    why: `
- You have a greater sense of reality, Porn is fantasy
- Makes you less depressed
- Increases your productivity, you have more time after all
- Leads to more and satisfying sex and relationships
- You appreciate women more
- Better senses, increased confidence when combined with no masturbation
    `,
    how: `
- Block Porn-sites at a deep level ([hosts file](https://github.com/StevenBlack/hosts)),
  so it is hard(er) to reverse it
- If you circumvent the blockage, block each specific site you find yourself on
- If you feel the urge or are bored, do another habit instead
- Ask yourself if you want to feel better overall, or for a couple of seconds
- Bonus point for not masturbating
    `,
    unit: '1 = done, 2 = bonus',
    min: 1,
    bonus: 2
  },
  {
    id: 'fasting',
    title: '8h Eating Window / Intermittent Fasting',
    why: `
- It helps with calorie restriction and therefor loosing weight and body fat
- It helps cleaning and repairing damaged cells, which slows down the aging
  process
- The brain creates new neurons and protects against brain damage
- "I fast for greater physical and mental efficiency" - Plato
- [A Guide To Intermittent Fasting](https://www.stedavies.com/intermittent-fasting/)
    `,
    how: `
- Fasting for at least 16 hours a day, resulting in a 8 hours eating window
- At least three times a week, try at least 18 hours of fasting
- Play around with the fasting times, setting a new record (currently it's 21h)
- It is okay to fail, simply try the next day
    `,
    unit: 'hours',
    min: 16,
    bonus: 18
  },
  {
    id: 'goals',
    title: 'Daily Goals',
    why: `
- To avoid procrastination - be aware what you want to do and when you want to
  do it
- To achieve your weekly/monthly/yearly goals, the best way is to break it down
  in actionable chunks that are easily done and not overwhelming
- You will have a log and can see your progress - get better, get motivated
- Write down your notes/thoughts/to-do's to get them out of your head, having
  the most mental energy you need to tackle the goals right in front of you
    `,
    how: `
- In the evening, the day before, loosly write down where you left off and what
  you would like to achieve the next day
- Have a box for each big goal you want to tackle
- Have a checkbox right next to the title, if you hit the goal, tick it off
- Break down each big goal in an actionable to-do list with a checkbox next to
  each step
- Plan when you will start a big goal, and how long you think it will take you
- Refine the times as you go with your day
- In another area of the page, write down thoughts/notes/to-do's as they come to
  mind - don't act on them if you are still working on a big goal
- Use the Pomodoro technique (25 minutes work / 5 minutes break) to break down
  your big goals and to plan the times
- Bonus point for achieving the daily goals
    `,
    unit: '1 = done, 2 = bonus',
    min: 1,
    bonus: 2
  }
]
