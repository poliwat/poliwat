---
title: "Poliwat Master Doc"
date: 2017-08-02T11:49:28-07:00
draft: false
tags : ["logs"]
---


##### main doc for all things related to the poliwat project. If you can't tell it's the favorite of my projects.


The basis of this doc is for my own sanity check. This isn't a tutorial geared for others on the basis of learning, it is geared towards my own private understanding of the status of poliwat.

Wed 101 pm Sept 20th, 2017

A master doc for poliwat has had a long time coming. I need to take a breath and do inventory on what's going down. I have too many moving parts shifting in my head, it's time to connect that pencil to the temple and connect it to my brain...

## FAQ
#### (^ misnomer, no one asks me anything about this, I shove it down their throats though)
## What is Poliwat?

<img src="/images/poliwat1.jpg"/>

🔥👮🏽‍♀️🔥🎶 a music composition vest, based on this open source, project: https://github.com/otem/Raspberry-Pi-Looper-synth-drum-thing . I'm reverse engineering and modifying this to work on a converted police SWAT vest.

The name is from the vest. the Velcro path used to say _POLICE SWAT_. POLIWAT is an anagram minus some letters.


# Background and History

### David Dunn
##### this is hard to explain.

### The high priest

<img src="/images/highpriest.png" style="height:90%; width:90%;"/>

asdasdsadsad blahlah this fool would do patterns on his breatplate in order to trigger thunder or other epic changes. Some priests would use it for moving mountains during rituals. That's music to my ears.

<img src="/images/stones.jpg"/ style="height:50%; width:50%;">

^ When I have the resources I want to create a music rig with the actual stones that high priests wore.

### But for now we got

<img src="/images/BL.JPG"/>

### ^^ This is ^^

the main instrument of the suit. It has my own special samples loaded into 16-button patches. There are drum kits and also FM Synthesis for an array of synth pads, leads, bass, and chimes.

My only religion is the cultivating the relationship between myself, nature, and the cosmos. Everything else is noise. But it would be awesome to see some real life priests use my rig for their rituals, and I'd be open to working with them in order to develop something useful for their practices.

<img src="/images/poliwat.jpg"/>
##### very early ableton iteration of poliwat

So what's all this music composition vest talk? Well it's an 8 track looper that has 2 microphone inputs, as well as a 16-button instrument that can cycle between samples or FM synthesis.

The first microphone is a 3D Binarual microphone:

<img src="/images/3d-audio.jpg"/>

With this I am able to hear natural high fidelity 3D audio of any bioacoustic space. I will carry this rig with a dressed up [Mannequin](http://www.allendisplay.com/10-1-2-Tall-Foam-Head-Form?gclid=CjwKCAjwo4jOBRBmEiwABWNaMWNTXt9skYY00i-yBu2yJ-UaTfxu19UZsnc_fy8-WnG3v1UW3J4y1hoCgEcQAvD_BwE) head using the ears as microphones. The Mannequin head can be redesigned based on the composition. If for example I am creating a composition on the John Muir trail, then naturally the head will be a replica of John Muir himself.    


I will create and sell sample packs I create and use with the vest.
Audio collection in the context of poliwat happens in two ways:
First, by grabbing samples (then splicing and bouncing samples by the banks ) Second, these compositions that happen out in the field with the rig. The field is defined as anywhere on Earth (so far). My focus is to chase after natural occuring phenomenon, and this includes activities in dense urban environments.

However this perfectly leads to this other concept of poliwat, the environmental aspect. The point of poliwat is to exploit the beauty of nature without disturbing it. It's about synthesizing the infinite beauty around you and playing with it in real time. Nature is the best playground we have as humans, but we need to remember the Principles of 'Leave No Trace'. [Leave No Trail](https://lnt.org/blog/history-leave-no-trace) is a nonprofit that started in Boulder Colorado in 1994. The message is simple. Pick up your trash! My friend [Tyler](http://tylerleesmith.herokuapp.com/) named a spot for forest bonfires at UCSC _Pick up your trash_ and the name stuck.

I like the idea of bringing my whole studio out into natural soundscapes, and jamming with nature without them ever knowing. My audio BUMPS YOUR SOCKS OFF but it's through headphones. My friend [Cameron](http://mehrabian.ca/meron/) is making progress on a silent disco type app, where people can listen with their headphones what I'm composing in real time.   

So let's talk about the audio rig. There are two microphone inputs that go into the looper instrument. That has master audio output that goes into my h5 recorder. The h5 has an extra XLR||1/4 input, and that will be recording the bioacoustics space unaltered, the 3D Binaural Mannequin head. The h5 is attached to the vest, with the onboard LR stock microphone to be aimed at my voice (or reserved for the vocalist I'm working with).

So in total here's the bigger picture

1. tripod 3D mic
2. 2 variable mics into looper (for looping anything from cave droppings to crowded subways)
3. 8-track looper powered by Raspberry Pi with sample bank
4. h5 recorder to record 4 track sessions

2 - 4 are located on the vest.

The following will be the hardware, then software sides of things.



# hardware - itemized list
#### the following is a list of all parts that go into poliwat, their function and relation to the whole.

1- 4, Panels
<h2> 0. Panels All</h2>
<img src="/images/poliwat4-mods.JPG"/>

<h2> 1. Panel - Bottom Left</h2>
<img src="/images/BL.JPG"/>

<h2> 2. Panel - Bottom Right</h2>
<img src="/images/BR.JPG"/>

<h2> 3. Panel - Top Left</h2>
<img src="/images/TL.JPG"/>

<h2> 4. Panel - Top Right</h2>
<img src="/images/TR.JPG"/>

<h2> 5. LCD - Top Right</h2>
<img src="/images/lcd.JPG"/>
<img src="/images/lcd-back.JPG"/>



# software - contextualizing the code
#### the following is a analysis of Otem's code

```
#include <Bounce.h>
#include <font_Arial.h>
#include "SPI.h"
#include "ILI9341_t3.h"
#include <Adafruit_NeoPixel.h>

```
`<Bounce.h>`
Is a library used for easily dealing with push buttons. Adding it gives us access to the [following methods](https://github.com/thomasfredericks/Bounce2/wiki).

For example we declare a Bounce object on line 20.

```
//Encoder
Bounce encBtn = Bounce(0,5);
```


```
#include "SPI.h"
```

Serial Peripheral Interface (SPI) is a synchronous data protocol used by microcontrollers for communicating with one or more peripheral devices quickly over short distances. [More Info on SPI](https://www.arduino.cc/en/Reference/SPI)

I need to know all about this in order to hook up the first LCD screen, because it says MISO / MOSI / etc.

In summary all SPI has this:

MISO (Master In Slave Out) - The Slave line for sending data to the master,

MOSI (Master Out Slave In) - The Master line for sending data to the peripherals,

SCK (Serial Clock) - The clock pulses which synchronize data transmission generated by the master

and one line specific for every device:

SS (Slave Select) - the pin on each device that the master can use to enable and disable specific devices.


```
#include "ILI9341_t3.h"
#include <Adafruit_NeoPixel.h>
```
_ILI9341_t3.h_ is the teensy library

###### _Aha! Which also used SPI...._

[More info here](https://github.com/PaulStoffregen/ILI9341_t3/blob/master/ILI9341_t3.h).
https://github.com/PaulStoffregen/SPI

Now _Adafruit_Neopixel.h_ is your little LED library.


```

#define PIN 6

// Parameter 1 = number of pixels in strip
// Parameter 2 = pin number (most are valid)
// Parameter 3 = pixel type flags, add together as needed:
//   NEO_KHZ800  800 KHz bitstream
//    (most NeoPixel products w/WS2812 LEDs)
//   NEO_KHZ400  400 KHz(classic 'v1'
//    (not v2) FLORA pixels, WS2811 drivers)
//   NEO_GRB     Pixels are wired for GRB
//      bitstream (most NeoPixel products)
//   NEO_RGB     Pixels are wired for RGB
//      bitstream (v1 FLORA pixels, not v2)
Adafruit_NeoPixel strip = Adafruit_NeoPixel(60, PIN, NEO_GRB + NEO_KHZ800);

```


```

#define PIN            23
#define NUMPIXELS      86
Adafruit_NeoPixel pixels = Adafruit_NeoPixel(NUMPIXELS, PIN, NEO_GRB + NEO_KHZ800);

```
We see NEOPIXELS in use here by creating pixels
```
#define PIN            23
```
_OKAY BUT WHATS NEOPIXELS_ is an

"Arduino library for controlling single-wire-based LED pixels and strip such as the Adafruit 60 LED/meter Digital LED strip, the Adafruit FLORA RGB Smart Pixel, the Adafruit Breadboard-friendly RGB Smart Pixel, the Adafruit NeoPixel Stick, and the Adafruit NeoPixel Shield."

[More info here](https://learn.adafruit.com/adafruit-neopixel-uberguide/arduino-library)


```
//drumPads
// instrument has 4 columns
#define NUM_BTN_COLUMNS (4)
// instrument has 4 rows
#define NUM_BTN_ROWS (4)
#define MAX_DEBOUNCE (1)
static const uint8_t btncolumnpins[NUM_BTN_COLUMNS] = {38, 39, 40, 41};
static const uint8_t btnrowpins[NUM_BTN_ROWS]       = {42, 43, 44, 45};
static int8_t debounce_count[NUM_BTN_COLUMNS][NUM_BTN_ROWS];

```
--=-==--=--=-==--=--=-==--=--=-==--=--=-==--=
```
#define MAX_DEBOUNCE (1)
```
Is used here:
```
// Read the button inputs
  for ( j = 0; j < NUM_BTN_ROWS; j++)
  {
    val = digitalRead(btnrowpins[j]);

    if (val == LOW)
    {
      // active low: val is low when btn is pressed
      if ( debounce_count[current][j] < MAX_DEBOUNCE)
      {
        debounce_count[current][j]++;
        if ( debounce_count[current][j] == MAX_DEBOUNCE )
        {
          if(instSelectMode){
            Serial.print("Inst: ");
            Serial.print((current * NUM_BTN_ROWS) + j);
            Serial.print(" ");
            Serial.println(0);
            instNumber = (current * NUM_BTN_ROWS) + j;
            drawInstrument(instNumber);
          }else{
            Serial.print(drumStrings[(current * NUM_BTN_ROWS) + j]);
            Serial.print(1);
            Serial.print(" ");
            Serial.println("");
          }
          // int btnNum = (13 - (current * NUM_BTN_ROWS) + j);
          // pixels.setPixelColor(btnNum+9,pixels.Color(255,0,50));
        }
      }
    }
```



-=--==-=--==--=
```
uint8_t
```

Is basically just a byte https://oscarliang.com/arduino-difference-byte-uint8-t-unsigned-cha/

```
// lines 380-385
// active low: val is low when btn is pressed
     if ( debounce_count[current][j] < MAX_DEBOUNCE)
     {
       debounce_count[current][j]++;
       if ( debounce_count[current][j] == MAX_DEBOUNCE )
       {
```

-=-=-==-=-=-=-=-=--=-=-=

_NOW LETS LOOK AT_
```
static const uint8_t btncolumnpins[NUM_BTN_COLUMNS] = {38, 39, 40, 41};
static const uint8_t btnrowpins[NUM_BTN_ROWS]       = {42, 43, 44, 45};
static int8_t debounce_count[NUM_BTN_COLUMNS][NUM_BTN_ROWS];
```

### static
The static keyword is used to create variables that are visible to only one function. However unlike local variables that get created and destroyed every time a function is called, static variables persist beyond the function call, preserving their data between function calls.

Variables declared as static will only be created and initialized the first time a function is called.

### const
The const keyword stands for constant. It is a variable qualifier that modifies the behavior of the variable, making a variable "read-only". This means that the variable can be used just as any other variable of its type, but its value cannot be changed. You will get a compiler error if you try to assign a value to a const variable.

Constants defined with the const keyword obey the rules of variable scoping that govern other variables. This, and the pitfalls of using #define, makes the const keyword a superior method for defining constants and is preferred over using #define.

So static int8_t debounce_count is an array with the columns and the rows of the drum pad. I wonder how the numbers {38, 39, 40, 41} relate. You'd think they were data pins on the teensy, but that only goes up to 39 based on this:

<img src="/images/teensy-main.png"/>

This is my first question for Otem.

-=-=--=-=-=-=-=-=-==-=-=---==--=-==-=-=-==-=-=-=-=--==-

````
//Encoder
Bounce encBtn = Bounce(0,5);
int encBtnStatus;
int encPrevBtnStatus;
unsigned long encHold;
int encoderPin1 = 1;
int encoderPin2 = 2;
volatile int lastEncoded = 0;
volatile long encoderValue = 0;
long lastencoderValue = 0;
int scaledEncVal;
int prevScaledEncVal;
````

//Encoder: An encoder is a device, circuit, transducer, software program, algorithm or person that converts information from one format or code to another, for the purposes of standardization, speed or compression.

Bounce encBtn = Bounce(0,5); is a Bounce object declaration with the pin of 0, at 5 miliseconds

aka  [_using "pin" and waiting for bouncing to end within "milliseconds" time_](https://www.pjrc.com/teensy/td_libs_Bounce.html)

The rest are variable declarations and pretty self explanatory.

-=-=-==-==-=-=-==--==--=-=-=-==-=-=-=-=-=-=-=-==-=-==--=-=-=

```

//InputTog
Bounce inputOneBtn = Bounce(7,5);
Bounce inputTwoBtn = Bounce(8,5);
bool inputOneTog = false;
bool inputTwoTog = false;
//transport
Bounce clearBtn = Bounce(24,5);
Bounce playStopBtn = Bounce(25,5);
//bool playStop = false;
//Inst Select
Bounce instSelBtn = Bounce(26,5);
int instNumber;
bool instSelectMode = false;
String instName[16] = {
  "Kit 1", "Kit 2","Kit 3","Kit 4",
  "Lead 1", "Pad 1", "Bass 1", "Keys 1",
  "Lead 2", "Pad 2", "Bass 2", "Keys 2",
  "Lead 3", "Pad 3", "Bass 3", "Keys 3",
};
//roboDrums
Bounce roboDrumBtn = Bounce(27,5);

//LP Buttons
int lpBtnPins[8] = {28,29,30,33,34,35,36,37};
int lpBtnState[8];
int lpPrevBtnState[8] = {HIGH};
Bounce lpBounce[] = {
  Bounce(28,10),
  Bounce(29,10),
  Bounce(30,10),
  Bounce(33,10),
  Bounce(34,10),
  Bounce(35,10),
  Bounce(36,10),
  Bounce(37,10),
};
unsigned long clearTimstamp;

```

🔥👮🏽‍♀️🔥🎶🎛🎚⏳🛶🎶🔥👮🏽‍♀️🔥🎶🎛🎚⏳🛶🎶🔥👮🏽‍♀️🔥🎶🎛🎚⏳🛶🎶🌲⤘❥◎◉⦿⁍⁌⇶↬⟿⤻

```
//InputTog

// Bounce obj declaration called inputOneBtn at PIN 7, 5 milliseconds.
Bounce inputOneBtn = Bounce(7,5);

// Bounce obj declaration called inputToBtn at PIN 8, 5 milliseconds.
Bounce inputTwoBtn = Bounce(8,5);

```

🔥👮🏽‍♀️🔥🎶🎛🎚⏳🛶🎶🔥👮🏽‍♀️🔥🎶🎛🎚⏳🛶🎶🔥👮🏽‍♀️🔥🎶🎛🎚⏳🛶🎶🌲⤘❥◎◉⦿⁍⁌⇶↬⟿⤻

```

bool inputOneTog = false;

bool inputTwoTog = false;

```

// inputOneTog to false,

This is used here in order to toggle the microphone input channel on the looper, there's two of them because there's
 two microphone inputs.  

```
//Btns
  if(inputOneBtn.update()){
    if(inputOneBtn.fallingEdge()){
      inputOneTog = !inputOneTog;
      Serial.print("InputOne: ");
      Serial.print(inputOneTog);
      Serial.print(" ");
      Serial.println("");
    }
  }

```
🔥👮🏽‍♀️🔥🎶🎛🎚⏳🛶🎶🔥👮🏽‍♀️🔥🎶🎛🎚⏳🛶🎶🔥👮🏽‍♀️🔥🎶🎛🎚⏳🛶🎶🌲⤘❥◎◉⦿⁍⁌⇶↬⟿⤻  

```
//transport
// Bounce obj declaration named clearBtn at PIN 24,
// 5 milliseconds.
Bounce clearBtn = Bounce(24,5);
// Bounce obj declaration name playStopBtn at PIN 25,
// 5 milliseconds.
Bounce playStopBtn = Bounce(25,5);
```

```

// this will toggle play stop
//bool playStop = false;

```
🔥👮🏽‍♀️🔥🎶🎛🎚⏳🛶🎶🔥👮🏽‍♀️🔥🎶🎛🎚⏳🛶🎶🔥👮🏽‍♀️🔥🎶🎛🎚⏳🛶🎶🌲⤘❥◎◉⦿⁍⁌⇶↬⟿⤻

```

// line 513 - 525
if(playStopBtn.update()){
    if(playStopBtn.fallingEdge()){
      //playStop = !playStop;
      Serial.print("PlayStop: ");
      if(playStatus == 1){
        Serial.print(0);
      }else{
        Serial.print(1);
      }
      Serial.print(" ");
      Serial.println("");
    }
  }

```

🔥👮🏽‍♀️🔥🎶🎛🎚⏳🛶🎶🔥👮🏽‍♀️🔥🎶🎛🎚⏳🛶🎶🔥👮🏽‍♀️🔥🎶🎛🎚⏳🛶🎶🌲⤘❥◎◉⦿⁍⁌⇶↬⟿⤻

```

//Inst Select
// Bounce object declaration called instSelBtn at
// PIN 26 and 5 milliseconds.
Bounce instSelBtn = Bounce(26,5);

// keep track of instrument number
int instNumber;

// toggle whether or not you're switching modes
bool instSelectMode = false;

// Names of the instruments. This is a place
// I'm definitely editing as I load my own
// kits into the suit. For now I'll
// construct instruments something similar
// to what's here unless it works because
// these look like the Pure Data patches.
// That means they are already found, and
// it's only a matter of adding a new .pd
// file in the same way... can you say
// vocoder, _David Kant?_

String instName[16] = {
  "Kit 1", "Kit 2","Kit 3","Kit 4",
  "Lead 1", "Pad 1", "Bass 1", "Keys 1",
  "Lead 2", "Pad 2", "Bass 2", "Keys 2",
  "Lead 3", "Pad 3", "Bass 3", "Keys 3",
};

```

```
//roboDrums
// Bounce object declaration at PIN 27, with 5 milliseconds.
Bounce roboDrumBtn = Bounce(27,5);

```
This is used here, in order to

```

if(roboDrumBtn.update()){
  // .fallingEdge looks for a low position,
  // meaning Check for a high to low transition.
  // For a pushbutton connected between the pin
  // and ground,
  // this corresponds to the button being pressed.

    if(roboDrumBtn.fallingEdge()){
      Serial.print("RoboDrums: ");
      Serial.print(1);
      Serial.print(" ");
      Serial.println("");
    }else{
      Serial.print("RoboDrums: ");
      Serial.print(0);
      Serial.print(" ");
      Serial.println("");
    }
  }

```
🔥👮🏽‍♀️🔥🎶🎛🎚⏳🛶🎶🔥👮🏽‍♀️🔥🎶🎛🎚⏳🛶🎶🔥👮🏽‍♀️🔥🎶🎛🎚⏳🛶🎶🌲⤘❥◎◉⦿⁍⁌⇶↬⟿⤻

```

//LP Buttons
// I'm not sure what LP stands for
// but let's look at where it's used to give us a clue
// looks like 8 looper btns
int lpBtnPins[8] = {28,29,30,33,34,35,36,37};
int lpBtnState[8];
int lpPrevBtnState[8] = {HIGH};
Bounce lpBounce[] = {
  Bounce(28,10),
  Bounce(29,10),
  Bounce(30,10),
  Bounce(33,10),
  Bounce(34,10),
  Bounce(35,10),
  Bounce(36,10),
  Bounce(37,10),
};

```

🔥👮🏽‍♀️🔥🎶🎛🎚⏳🛶🎶🔥👮🏽‍♀️🔥🎶🎛🎚⏳🛶🎶🔥👮🏽‍♀️🔥🎶🎛🎚⏳🛶🎶🌲⤘❥◎◉⦿⁍⁌⇶↬⟿⤻
Used here:
```
// line 443
for(int i=0; i<8; i++){
    lpBtnState[i] = digitalRead(lpBtnPins[i]);
    if(lpBounce[i].update()){
      if (lpBtnState[i] == LOW && lpPrevBtnState[i] == HIGH){
        clearTimstamp = millis();
        Serial.print(digitalStrings[i]);
        Serial.print(1);
        Serial.print(" ");
        Serial.println(0);
      }
    }
```

Because there are 8 pins { 28, 29, 30, 33, 34, 35, 36, 37 }
This looks like it controls the looper buttons on panel TR.
_digital read_ reads a specific PIN, checking if it's HIGH or LOW.
Just discovered that Analog input pins are the A0, A1, etc... while the digital pins
are the numbers. With that in mind we can know that the light of the 8 looper toggles will
be set to HIGH when turned on and LOW when turned off.

[More useful info here](https://www.arduino.cc/en/Reference/DigitalRead)

🔥👮🏽‍♀️🔥🎶🎛🎚⏳🛶🎶🔥👮🏽‍♀️🔥🎶🎛🎚⏳🛶🎶🔥👮🏽‍♀️🔥🎶🎛🎚⏳🛶🎶🌲⤘❥◎◉⦿⁍⁌⇶↬⟿⤻

```
String digitalStrings[8] = {
  "D1: ","D2: ","D3: ", "D4: ","D5: ","D6: ","D7: ","D8: "
};
```

digitalStrings is used only on line 449 to print to the user, lets look closer:

```
//Loop Btns
  for(int i=0; i<8; i++){
    lpBtnState[i] = digitalRead(lpBtnPins[i]);
    if(lpBounce[i].update()){
      if (lpBtnState[i] == LOW && lpPrevBtnState[i] == HIGH){
        clearTimstamp = millis();
        Serial.print(digitalStrings[i]);
        Serial.print(1);
        Serial.print(" ");
        Serial.println(0);
      }

```
So it iterates through each of the 8 loop buttons, does a digitalRead based on their PINS, and updates the array lpBounce if these conditions are met: lpBtnState[i] is LOW and the previous state is HIGH. It will clear the miliseconds and print a couple things to the user. I need to see this in action to fully understand every part of this.

Looks like the same school of thought if we look further down at the 16 drumpad buttons

```

String drumStrings[16] = {
  "Dr1: ","Dr2: ","Dr3: ", "Dr4: ","Dr5: ","Dr6: ","Dr7: ","Dr8: ",
  "Dr9: ","Dr10: ","Dr11: ", "Dr12: ","Dr13: ","Dr14: ","Dr15: ","Dr16: "
};

```

Yeah on line 394 it gets printed in a similar way. Good pattern to know!

```
Serial.print(drumStrings[(current * NUM_BTN_ROWS) + j]);

```

🔥👮🏽‍♀️🔥🎶🎛🎚⏳🛶🎶🔥👮🏽‍♀️🔥🎶🎛🎚⏳🛶🎶🔥👮🏽‍♀️🔥🎶🎛🎚⏳🛶🎶🌲⤘❥◎◉⦿⁍⁌⇶↬⟿⤻
```

uint32_t neoColorArray[24] = {
  pixels.Color(0, 255, 255),
  pixels.Color(0, 255, 0),
  pixels.Color(255, 255, 0),
  pixels.Color(255,0,50),
  pixels.Color(0, 255, 255),
  pixels.Color(0, 255, 0),
  pixels.Color(255, 255, 0),
  pixels.Color(255,0,50),

  pixels.Color(0, 255, 255),
  pixels.Color(0, 255, 0),
  pixels.Color(255, 255, 0),
  pixels.Color(255,0,50),
  pixels.Color(0, 255, 255),
  pixels.Color(0, 255, 0),
  pixels.Color(255, 255, 0),
  pixels.Color(255,0,50),

  pixels.Color(0, 255, 255),
  pixels.Color(0, 255, 0),
  pixels.Color(255, 255, 0),
  pixels.Color(255,0,50),
  pixels.Color(0, 255, 255),
  pixels.Color(0, 255, 0),
  pixels.Color(255, 255, 0),
  pixels.Color(255,0,50),
};
uint32_t neoColorArrayDim[8] = {
  pixels.Color(0, 15.9375, 15.9375),
  pixels.Color(0, 15.9375, 0),
  pixels.Color(15.9375, 15.9375, 0),
  pixels.Color(15.9375,0,50),
  pixels.Color(0, 15.9375, 15.9375),
  pixels.Color(0, 15.9375, 0),
  pixels.Color(15.9375, 15.9375, 0),
  pixels.Color(15.9375,0,3.125),
};
uint32_t neoColorOff = pixels.Color(0,0,0);


```
🔥👮🏽‍♀️🔥🎶🎛🎚⏳🛶🎶🔥👮🏽‍♀️🔥🎶🎛🎚⏳🛶🎶🔥👮🏽‍♀️🔥🎶🎛🎚⏳🛶🎶🌲⤘❥◎◉⦿⁍⁌⇶↬⟿⤻

Is a little long, but this is simple. _uint32_t_ was found before, and it's just a variable declaration that is specifically 1 byte. So this is setting the colors of the entire two main pads (the 8 button looper pad and the 16 button drum pad). It colors the whole grid. After that, there's a smaller array that has the dimmed lights going. Looks like it may be for the looper buttons. Yes, it is. It's used for blinking the buttons to indicate when recording is occurring. The last line neoColorOff turns off all colors.

🔥👮🏽‍♀️🔥🎶🎛🎚⏳🛶🎶🔥👮🏽‍♀️🔥🎶🎛🎚⏳🛶🎶🔥👮🏽‍♀️🔥🎶🎛🎚⏳🛶🎶🌲⤘❥◎◉⦿⁍⁌⇶↬⟿⤻

```

// LCD STUFF

// constant value of 9 and 10 we have access to before our code is run
#define TFT_DC  9
#define TFT_CS 10

// Use hardware SPI (on Uno, #13, #12, #11) and the above for CS/DC
// this is paul stoffregen's library/
ILI9341_t3 tft = ILI9341_t3(TFT_CS, TFT_DC);

```

Now remember we're still in the setup() of the code, so this is obviously defining the LCD stuff. But I'm confused about, _ILI9341_t3(TFT_CS, TFT_DC);_, what's the significance of those parameters?

Looking in Paul's library, it looks like we're on to something! These are all the parameters needed for dealing with SPI protocol. I was wondering what Serial communication was, and it looks like this is 1 of many implementations. Cool stuff! You can see your good old MOSI here... but in the declaration in Otem's code he's only using CS and DC.

```
ILI9341_t3(uint8_t _CS, uint8_t _DC, uint8_t _RST = 255, uint8_t _MOSI=11, uint8_t _SCLK=13, uint8_t _MISO=12);

```
 I wonder, they may be found at PIN 9 and 10, but that needs to be checked... let's briefly look. and NO I thought I would see a digitalRead involving this but I was wrong.

 🔥👮🏽‍♀️🔥🎶🎛🎚⏳🛶🎶🔥👮🏽‍♀️🔥🎶🎛🎚⏳🛶🎶🔥👮🏽‍♀️🔥🎶🎛🎚⏳🛶🎶🌲⤘❥◎◉⦿⁍⁌⇶↬⟿⤻

```

 //Mux control pins
 int s0 = 3;
 int s1 = 4;
 int s2 = 5;
 int s3 = 6;
 //Mux in "SIG" pin
 int SIG_pin = A0;

 int analogValues[22];
 int analogValuesLag[22];
 String analogStrings[22] = {
   "A1: ","A2: ","A3: ", "A4: ","A5: ","A6: ","A7: ","A8: ","A9: ","A10: ","A11: ",
   "A12: ","A13: ","A14: ","A15: ","A16: ","A17: ","A18: ","A19: ","A20: ","A21: ","A22: "
 };

```

// Mux is short for multiplexer, that's this chip
<img src="/images/mux.JPG"/>

A multiplexer can also be called a data selector
takes a single input sig and then forwards to multiple lines

let's look closely at each pin on the chip:

##### RIGHT SIDE

GND: Ground

VCC: voltage supply line

EN:

S0:

S1:

S2:

S3:

SIG: short for signal pin

#### LEFT SIDE

C0 - C15

So we can see that the function readMux writes to these control pins.

```
// lines 182 - 214
int readMux(int channel){
  int controlPin[] = {s0, s1, s2, s3};

  int muxChannel[16][4]={
    {0,0,0,0}, //channel 0
    {1,0,0,0}, //channel 1
    {0,1,0,0}, //channel 2
    {1,1,0,0}, //channel 3
    {0,0,1,0}, //channel 4
    {1,0,1,0}, //channel 5
    {0,1,1,0}, //channel 6
    {1,1,1,0}, //channel 7
    {0,0,0,1}, //channel 8
    {1,0,0,1}, //channel 9
    {0,1,0,1}, //channel 10
    {1,1,0,1}, //channel 11
    {0,0,1,1}, //channel 12
    {1,0,1,1}, //channel 13
    {0,1,1,1}, //channel 14
    {1,1,1,1}  //channel 15
  };

  //loop through the 4 sig
  for(int i = 0; i < 4; i ++){
    digitalWrite(controlPin[i], muxChannel[channel][i]);
  }

  int val;
  val = analogRead(SIG_pin);

  return val;
}

```

Okay cool. So it looks like we now know how the mux is declared. Notice with only an array of 4, we can get 16 unique channels. This is why we need to use the multiplexer. Now it's just a matter of seeing what's connected to c0-15 and the others.

By now we know that a digitalWrite takes these params
digitalWrite(pin, value)

The pin number, and the value is either HIGH or LOW

-=-=-- -=-=-- -=-=-- -=-=-- -=-=-- -=-=-- -=-=-- -=-=-- -=-=-- -=-=-- -=-=-- -=-=-- -=-=--

That concludes the first part of the code before the setup() function is even called.

Now we will investigate the setup() function (most if not all connections should be tracked down between this function, and the previous declarations. )


-==--=-=-=
```
void setup() {

  //Btns
  pinMode(0, INPUT_PULLUP);
  //LPBTNS
  pinMode(28,INPUT_PULLUP);
  pinMode(29,INPUT_PULLUP);
  pinMode(30,INPUT_PULLUP);
  pinMode(33,INPUT_PULLUP);
  pinMode(34,INPUT_PULLUP);
  pinMode(35,INPUT_PULLUP);
  pinMode(36,INPUT_PULLUP);
  pinMode(37,INPUT_PULLUP);

  //LCD Stuff
  tft.begin();
  tft.setRotation(3);
  Serial.begin(9600);
  tft.fillScreen(ILI9341_BLACK);
  tft.setFont(Arial_14);
  //Pixels
  pixels.begin();
  //Waiting for Serial Animation
  while (!Serial){
    rainbowCycle(2);
  }
  //Initialize stuff
  tft.fillScreen(ILI9341_BLACK);
  drawLoopBtns();
  drawInputToggle("left","0");
  drawInputToggle("right","0");
  drawPosition(0);
  drawBpm(00.00);

  //ENCODER STUFF
  pinMode(encoderPin1, INPUT);
  pinMode(encoderPin2, INPUT);
  digitalWrite(encoderPin1, HIGH); //turn pullup resistor on
  digitalWrite(encoderPin2, HIGH); //turn pullup resistor on
  //call updateEncoder() when any high/low changed seen
  //on interrupt 5 (pin 5), or interrupt 6 (pin 6)
  attachInterrupt(1, updateEncoder, CHANGE);
  attachInterrupt(2, updateEncoder, CHANGE);

  //MUX
  pinMode(s0, OUTPUT);
  pinMode(s1, OUTPUT);
  pinMode(s2, OUTPUT);
  pinMode(s3, OUTPUT);
  pinMode(SIG_pin, INPUT);

  digitalWrite(s0, LOW);
  digitalWrite(s1, LOW);
  digitalWrite(s2, LOW);
  digitalWrite(s3, LOW);

  //digitalBtns
  pinMode(7, INPUT_PULLUP);
  pinMode(8, INPUT_PULLUP);
  pinMode(24, INPUT_PULLUP);
  pinMode(25, INPUT_PULLUP);
  pinMode(26, INPUT_PULLUP);
  pinMode(27, INPUT_PULLUP);

  //drumPads
  setuppins();
}

//Serial Read Vars
bool serialStarted = false;
bool serialEnded = false;
char inData[80];
int serIndex;


//Serial Write Vars
const int num_of_digital_pins = 1;
int digital_values[num_of_digital_pins];


///SCREEN VARS for recall
int playStatus;
float bpmVal;
int loopPosVal;
int inputLeftActive;
int inputRightActive;
String Recstatus;
int leftInputAmp;
int rightInputAmp;
int lpNumber;
int lpStatus;
int loopRec[8];
int loopMute[8];
bool ledBlinking[8] = {false};
int blinkBrightness;
bool lpCurrentlyRec[8] = {false};



String songNames[52];
String songName;
int lpOffset;
int songIttr;
int songSelIndex;;
bool selectEvent = false;
bool menu = false;
int menuIndex;
int menuSelPos[4] = {118,148,178,208};
bool songMode = false;
bool newSongNameFlag = false;
int charPosition;
int charIndex;
char charArray[52] = {
  'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
  'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'
};
char newSongCharArray[18];
int lpOffsetArray[8] = {20,80,140,200,20,80,140,200};
int lpOffsetVertArray[8] = {120,120,120,120,180,180,180,180};
uint32_t lcdColorArray[16] = {
  0x033f,0x07f0,0xffa4,0xf8ea,0x033f,0x07f0,0xffa4,0xf8ea,
  0x033f,0x07f0,0xffa4,0xf8ea,0x033f,0x07f0,0xffa4,0xf8ea
};
//InstPads
static void setuppins()
{
  uint8_t i;
  // button columns
  for (i = 0; i < NUM_BTN_COLUMNS; i++)
  {
    pinMode(btncolumnpins[i], OUTPUT);
    // with nothing selected by default
    digitalWrite(btncolumnpins[i], HIGH);
  }
  // button row input lines
  for (i = 0; i < NUM_BTN_ROWS; i++)
  {
    pinMode(btnrowpins[i], INPUT_PULLUP);
  }
  // Initialize the debounce counter array
  for (uint8_t i = 0; i < NUM_BTN_COLUMNS; i++)
  {
    for (uint8_t j = 0; j < NUM_BTN_ROWS; j++)
    {
      debounce_count[i][j] = 0;
    }
  }
}
//InstPads
static void scan()
{
  static uint8_t current = 0;
  uint8_t val;
  uint8_t i, j;

  // Select current columns
  digitalWrite(btncolumnpins[current], LOW);

  // Read the button inputs
  for ( j = 0; j < NUM_BTN_ROWS; j++)
  {
    val = digitalRead(btnrowpins[j]);

    if (val == LOW)
    {
      // active low: val is low when btn is pressed
      if ( debounce_count[current][j] < MAX_DEBOUNCE)
      {
        debounce_count[current][j]++;
        if ( debounce_count[current][j] == MAX_DEBOUNCE )
        {
          if(instSelectMode){
            Serial.print("Inst: ");
            Serial.print((current * NUM_BTN_ROWS) + j);
            Serial.print(" ");
            Serial.println(0);
            instNumber = (current * NUM_BTN_ROWS) + j;
            drawInstrument(instNumber);
          }else{
            Serial.print(drumStrings[(current * NUM_BTN_ROWS) + j]);
            Serial.print(1);
            Serial.print(" ");
            Serial.println("");
          }
          // int btnNum = (13 - (current * NUM_BTN_ROWS) + j);
          // pixels.setPixelColor(btnNum+9,pixels.Color(255,0,50));
        }
      }
    }
    else
    {
      // otherwise, button is released
      if ( debounce_count[current][j] > 0)
      {
        debounce_count[current][j]--;
        if ( debounce_count[current][j] == 0 )
        {
          Serial.print(drumStrings[(current * NUM_BTN_ROWS) + j]);
          Serial.print(0);
          Serial.print(" ");
          Serial.println("");
          // int btnNum = (13 - (current * NUM_BTN_ROWS) + j);
          // pixels.setPixelColor(btnNum+9,pixels.Color(0,0,0));
        }
      }
    }
  }// for j = 0 to 3;

  digitalWrite(btncolumnpins[current], HIGH);

  current++;
  if (current >= NUM_BTN_COLUMNS)
  {
    current = 0;
  }

}

```


-=-==--=--=












🔥👮🏽‍♀️🔥🎶🎛🎚⏳🛶🎶🔥👮🏽‍♀️🔥🎶🎛🎚⏳🛶🎶🔥👮🏽‍♀️🔥🎶🎛🎚⏳🛶🎶🌲⤘❥◎◉⦿⁍⁌⇶↬⟿⤻
🔥👮🏽‍♀️🔥🎶🎛🎚⏳🛶🎶🔥👮🏽‍♀️🔥🎶🎛🎚⏳🛶🎶🔥👮🏽‍♀️
### END🔥🎶🎛🎚⏳🛶🎶🌲⤘❥◎◉⦿⁍⁌⇶↬⟿⤻
🔥👮🏽‍♀️🔥🎶🎛🎚⏳🛶🎶🔥👮🏽‍♀️🔥🎶🎛🎚⏳🛶🎶🔥👮🏽‍♀️🔥🎶🎛🎚⏳🛶🎶🌲⤘❥◎◉⦿⁍⁌⇶↬⟿⤻
🔥👮🏽‍♀️🔥🎶🎛🎚⏳🛶🎶🔥👮🏽‍♀️🔥🎶🎛🎚⏳🛶🎶🔥👮🏽‍♀️🔥🎶🎛🎚⏳🛶🎶🌲⤘❥◎◉⦿⁍⁌⇶↬⟿⤻
🔥👮🏽‍♀️🔥🎶🎛🎚⏳🛶🎶🔥👮🏽‍♀️🔥🎶🎛🎚⏳🛶🎶🔥👮🏽‍♀️🔥🎶🎛🎚⏳🛶🎶🌲⤘❥◎◉⦿⁍⁌⇶↬⟿⤻
🔥👮🏽‍♀️🔥🎶🎛🎚⏳🛶🎶🔥👮🏽‍♀️🔥🎶🎛🎚⏳🛶🎶🔥👮🏽‍♀️🔥🎶🎛🎚⏳🛶🎶🌲⤘❥◎◉⦿⁍⁌⇶↬⟿⤻





General info

Analog pins are numbered normally, while digital pins are A0, A1, etc...
