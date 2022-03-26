---
title: "Help"
date: 2017-07-27T12:19:02-07:00
draft: false
tags : ["logs"]
---


*Bounce hour*

Every week at my work there's an hour where you can share your projects / ideas over free coffee and snacks. I go for the free coffee and snacks.

I don't have any new ideas but listening to all my unfinished [beats](https://soundcloud.com/github).

// need to make more music

<iframe width="100%" height="20" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/335856091%3Fsecret_token%3Ds-9TWJf&amp;color=ff5500&amp;inverse=false&amp;auto_play=false&amp;show_user=true"></iframe>

Yesterday I failed at making [live loops](https://youtu.be/0gKWfvd-chA) because I didn't have good old [DJ Chad Mike](https://chadlamon.com) hitting record for me. The more I program, write, solder, the worse I get at being a musician.
Yesterday I was dead sober and couldn't even properly loop a 2 chord progression. BUT the settings on the looper were fucked up it was on quantize while recording so playback was *nothing* like what it should've sounded like. Today after work [stefan](https://soundcloud.com/kyotokidforever) and I are going to play together practicing live looping. But I also need to start wiring this bad boy up:

<img src="/images/poliwat1.jpg"  />


Umm I have goals now


<iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/335856105%3Fsecret_token%3Ds-W7qTe&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>


I'm going to drop an album in the next week? Depending on if I can get my laptop fixed in time. Need to mix and master a few of the tracks.



sitting is the new smoking


standing desk


eaach track for the github album will be titled a git command, and it will link to the documentation
That's kind of hilarious, then you can play the track when you successfully run some of these commands
it's a fun idea to make an instrumental for each of these tracks as Well



*239 pm thursday*
Just got back from lunch with boss.
Currently shitting in a bathroom, going to brush my teeth after.

I can feel myself getting a little more courage blogging. Journalling is more like it. Blogs are fucking retarded.
Online journalling scares me. No one has read a single sentence thus far.

Current Accountabilibuddies:

1. [Chad](https://chadlamon.com/) mike have a pact to do 100 pushups a day.
2. [stefan](https://soundcloud.com/kyotokidforever) mike have a pact to remain sober (he can do as he pleases, he makes sure I don't consume alcohol / nicotine / marijuana ).
3. [tyler](https://github.com/prudentbot) mike have a pact to do something that scares you each day.


Today I brought a little stretch band to work and I'm going to book a meeting room so I can workout while looking over these jira tickets. There are too many tickets, I'm overwhelmed, I'm a terrible programmer, and I need to get better at just about everything. I need to focus.

*sober for 8 days*

```
I feel like a total junkie
my junkiness is complex
I'm a junkie connoisseur
```
There are events and choices that have happened today and in the past few days that I won't mention because this is an online journal. What scares me is sharing. But with being vulnerable comes great power. So for the sake of [tyler](https://www.studiosunfish.com/) mike I will share one of those things.



*Thursday 437 pm*

about to do a work meeting and have to respond to 3 jira tickets before the day's out but just wanted to say...

going to set my first deadline here.
it is to release this electronic album that's just about finished, each track just needs to be scrutinized, mixed, and mastered.
My buddy [Ian Crispi](https://soundcloud.com/crypticflow/shapecolor-ft-max-the-taxman-crisman-evan-obrien), the most enlightened audio guy I know said he would master one of my tracks per month for 33 bucks.

Also I just recieved the largest paycheck of my life, $2,427.

Sadly it's gone before I even put it in the bank, I'm paying 1,500 for the airfaire for both my dad and I to visit his hometown and birthplace in Marquette, Michigan for a family reunion vacation type deal. Then Rent is $500.
Oh the rental car is $400. So all that money's gone. Plus I'll owe in taxes so I'm fucked.

```
Fiscally I'm fucked. Physically I'm in pretty good shape.
```

I love [this fool's website](https://ander.live/). I smell flexbox!


620 pm
biked home from work cause I couldn't think straight.

I'm getting a little too much resistance from friends and family.
To borrow from the Beatles, I'm going to be successful with poliwat in only with a little help from my friends.

It's going to take a lot of convinving to get Paul to record Bonnie's birth of her first child, and chad to film me with his drone all the way in Oregon for the [eclipse](https://oregoneclipse2017.com/).  


I setup two meetings:
one with Tyler so he can help me with possible deployment issues, saturday at noon.
Chad where I show him my whole poliwat plans Sunday from 2-4pm.  

From now on Katie and I talk using [police codes](https://copradar.com/tencodes/).

[Peter](https://pndpo.com/) has not called back in 5 calls, I'm worried about him. He barely answered one call after his grandma died and I asked for help on poliwat like a big twat and he hasnt wanted to speak to me since. I'll keep calling.

So my todos for the night:

1.  - respond to ticket 207 DONE
2.  - Do ticket 467 long urls DONE
3.  - log work hours DONE
4.  - go far enough in poliwat wiring that I can email the og maker with some questions


10 things I hate about buzzfeed

gen Why

gen y


Okay

comport object in PD to talk to the teensy.﻿

The teensy uses serial communication to talk to the pi and send messages back and forth. I did not have to write any drivers. The serial communication works straight away.﻿

It's a strip of neopixels. They are programmed to respond to the amplitude.﻿

Well its specific to this project. The PD patch sends amplitude data out of the pi into the teensy board. The Teensy then sends that data to the neopixels out the 1/8 jack. There are some projects out there for doing this sort of thing with just a microprocessor and some neo pixels. Here is a project like that:
https://learn.adafruit.com/sound-reactive-neopixel-peace-pendant/overview?embeds=allow﻿

open up pilooper.pd, then click though pd audio-IO, then pd post-loop-fx. The beat repeat is called pd tableGlitch. You can disconnect it from the inlet and replace it with anything you'd like.
https://puu.sh/w67bf/02f5a72c71.png﻿
