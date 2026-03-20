---
title: Circuit 03 - Buzzers
sidebar_position: 7
---

# Circuit 03 - Buzzers

## Background

In this circuit, we'll again bridge the gap between the digital world and the analog world. We'll be using a buzzer that makes a small "click" when you apply voltage to it (try it!). By itself that isn't terribly exciting, but if you turn the voltage on and off hundreds of times a second, the buzzer will produce a tone. And if you string a bunch of tones together, you've got music! This circuit and sketch will play a classic tune. We'll never let you down! 

<img src="\img\docs\discovery_kit\c03_diagram.png" />

## Parts List
| | Name | Quantity |
| --- | --- | --- |
| <img src="\img\docs\discovery_kit\parts_led_green.png" height="100px" /> | LED (Any colour) | 1 |
| <img src="\img\docs\discovery_kit\parts_resistor_330.png" height="100px" /> | 330Ω Resistor (Orange-Orange-Brown) | 1 |
| <img src="\img\docs\discovery_kit\parts_jumper.png" height="100px" /> | Jumper Wire | 7|
| <img src="\img\docs\discovery_kit\parts_push_button.png" height="100px" /> | Push Button | 1 |
| <img src="\img\docs\discovery_kit\parts_resistor_10k.png" height="100px" /> | 10kΩ Resistor (Black-Brown-Orange) | 1 |
| <img src="\img\docs\discovery_kit\parts_buzzer.png" height="100px" /> | Buzzer | 1 |

## Circuit Diagram

<img src="\img\docs\discovery_kit\c03_circuit.png" width="50%" />

## Breadboard Diagram

<img src="\img\docs\discovery_kit\c03_breadboard.png" />

## Code

Here's the code:

```c
int numOfNotes = 8;
int melody[] = {262, 196, 196, 220, 196, 0, 247, 26};
int durations[] = {4, 8, 8, 4, 4, 4, 4, 4};

void setup() {
  pinMode(11, OUTPUT);
  pinMode(8, OUTPUT);
  pinMode(2, INPUT);
}

void loop() {
  if (digitalRead(2) == HIGH) {
    digitalWrite(11, HIGH);
    for (int i = 0; i < numOfNotes; i++) {
      int duration = 1000 / durations[i];
      tone(8, melody[i], duration);
      int pause = duration * 1.30;
      delay(pause);
       noTone(8);
    }
  } else {
    digitalWrite(11, LOW);
  }
} 
```

## What You Should See

You should see - well, nothing more than what you should see in project 2! But you should be able to hear a song. If it isn't working, make sure you have assembled the circuit correctly and verified and uploaded the code to your board, or see the troubleshooting tips below. 

## Troubleshooting

### *No Sound*?
Given the size and shape of the piezo buzzer, it is easy to miss the right holes on the breadboard. Try double-checking its placement. 

## Musical Tone

<img src="\img\docs\discovery_kit\c03_treble_clef.png" />

| **Note** | G3 | A3 | B3 | C4 | D4 | E4 | F4 | G4 | A4 | B4 | C5 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **Freq** (Hz) | 196 | 220 | 247 | 262 | 294 | 330 | 349 | 392 | 440 | 494 | 523 |

## Real World Application

Many modern megaphones have settings that use a loud amplified buzzer. They are usually very loud and quite good at getting people’s attention. 

## The Code Explained

| Code | Explanation |
| --- | --- |
| ```int numOfNotes = 8; ``` | Declaring an integer (whole number) variable to remember the number of notes. |
| ```int melody[] = { ... }``` | ```int melody[]``` stores an array or list of all the notes to be played. |
| ```int noteDurations[] = { ... }``` | ```int noteDurations[] stores a list of the length of the notes to be played. The number of elements or items in each array must match. A note duration of 1 corresponds to a whole note, a duration of 2 is a half note, a duration of 4 is a quarter note, and a duration of 8 corresponds to an eighth note.
| ```for(...) { ``` | This is a ```for()``` loop. We won't go into the details of its function here, but we use it to play our tune. |
| ```tone(8, freq, length);``` | The ```tone``` function is used to play a tone with a buzzer. The first value is the pin the buzzer is attached to, the second value is the frequency, and the last value is the duration of the tone. |

## Exercise

1. Modify the code to play the following tune:
   Tone: E4, D4, C4, D4, E4, E4, E4, D4, D4, D4, E4, G4, G4
   Duration: 4, 4, 4, 4, 4, 4, 2, 4, 4, 2, 4, 4, 2
   **Hint:** You'll need to change the numOfNotes variable.
   What is the tune?
2. Play the tune faster by a factor of 2.
3. Modify the code so the LED blinks with the tone instead of always ON when the tone is playing.

|Prev|Next|
|---|---|
| [Circuit 02 - Push Buttons](c02-push-button.md) | [Circuit 04 – Potentiometers](c04-potentiometer.md) |