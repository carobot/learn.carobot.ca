---
title: Circuit 05 - Multiple LEDs
sidebar_position: 5
---

# Circuit 05 - Multiple LEDs: Bar Graph and Dimming

## Background

So you have gotten one LED to blink on and off – fantastic! Now, it's time to up the stakes a little bit – by connecting FIVE LEDS AT ONCE. We'll also give our Arduino a little test by creating various lighting sequences. This circuit is a great setup to start practicing writing your own programs and getting a feel for the way Arduino works.

<img src="\img\docs\discovery_kit\c05_diagram.png" />

## Parts List
| | Name | Quantity |
| --- | --- | --- |
| <img src="\img\docs\discovery_kit\parts_led_green.png" height="100px" /> | LED (Any colour) | 5 |
| <img src="\img\docs\discovery_kit\parts_resistor_330.png" height="100px" /> | 330Ω Resistor (Orange-Orange-Brown) | 5 |
| <img src="\img\docs\discovery_kit\parts_jumper.png" height="100px" /> | Jumper Wire (Any colour) | 10 |
| <img src="\img\docs\discovery_kit\parts_pot.png" height="100px" /> | Potentiometer (POT) | 1 |

## Circuit Diagram

<img src="\img\docs\discovery_kit\c05_circuit.png" width="50%" />

## Breadboard Diagram

<img src="\img\docs\discovery_kit\c05_breadboard.png" />

## Code
Along with controlling the LEDs, we'll use loops and arrays again to keep your code neat and tidy:

     ```for()``` loops - used when you want to run a piece of code several times
     ```arrays[]``` - used to manage variables easier by grouping them together

Here's the code for circuit #5A:

```c
// use an "array" to keep track of all LED pins
int ledPins[] = {5,6,9,10,11};
int sensorPin = A0;

void setup() {
  int index; // used to keep track of the "for()" loop

  for(index = 0; index <= 4; index++) {
     pinMode(ledPints[index], OUTPUT);
     // ledPins[index] is replaced by the value in the array. For example, ledPins[0] is 5
  }
}

void loop() {
  int index;
  int sensorValue;

  sensorValue = analogRead(sensorPin);

  // Turn all the LEDs on/off using "for()" loop and array.
  
  for(index = 0; index <= 4; index++) {
     digitalWrite(ledPins[index], HIGH);
     delay(sensorValue);
  }

  for(index = 4; index >= 0; index--) {
     digitalWrite(ledPins[index], LOW);
     delay(sensorValue);
  }
}
```

If you don't want to type this into the Arduino IDE, go ahead and open example **ADKL3_05A**.

Please refer to [Using Example Code](using-example-code.md) for more information.

## What You Should See

This is very similar to circuit #4, but instead of one LED, you should see all the LEDs blink. If they aren't, make sure you have assembled the circuit correctly and verified and uploaded the code to your board or see the troubleshooting tips below

## Troubleshooting

### *Some LEDs Fail to Light*
It is easy to insert an LED backwards. Check the LEDs that aren't working and ensure they are inserted properly.

### *Starting Afresh*
It's easy to accidentally misplace a wire without noticing. Pulling everything out and starting with a fresh slate is often easier than trying to track down the problem.

## The Code Explained

| Code | Explanation |
| --- | --- |
| ```int ledPins[] = {...};``` | Declaring an array of integers. The numbers in the brackets {} are the numbers to be saved in the array. |
| ```for(i = 0; i <= 4; i++)``` | This is a ```for()``` loop. We are using ```i``` instead of ```index``` to save some space. In the first part inside the brackets, the variable ```i``` is assigned a value of zero. If ```i``` is less than or equal to 4, the loop is executed once and ```i``` is incremented. |
| ```ledPins[index]``` | The information in the array is treated like any other variable. To access it, we need to specify the index. Arrays are zero indexed, meaning the first element in the array has an index of 0, not 1. For example, ledPins[0] is 5, and ledPins[3] is 10. |

### Other Comparison Operators:
``` A == B;``` checks equality.

```A > B;``` checks if A is greater than B.

```A >= B;``` checks if A is greater than or equal to B.

```A < B;``` checks if A is less than B.

```A <= B;``` checks if A is less than or equal to B.

```A != B;``` checks if A does NOT equal B.

## Circuit 05B - Bar Graphs

While we have our circuit of 5 LEDs setup, let’s try a few more thing. Our next program will be to read the value of the potentiometer and display the value visually as a bar graph. 

To achieve that, we'll use:
     ```if/else``` - conditional statement

The idea is, if the voltage into analog pin A0 is: 

<img src="\img\docs\discovery_kit\c05_led_flowchart.png" />

Remember, the values from ```analogRead()``` range from 0 to 1024. You'll need to figure out a way to convert them into voltage. 

Try it yourself. If you are stuck, open example **ADKL3_05B**. One thing to keep in mind about programming is that as long as your program works, it will be one of many solutions. The example we have is a solution that can be easily understood. 

## What You Should See

You should see the LEDs turning On and OFF in sequence as you turn the potentiometer.

## Troubleshooting

### *Operating out of sequence?*

With five wires it's easy to cross a couple. Double check that the first LED is plugged into pin 5, then pin 6, 9, 10, and 11.


## Circuit 05C - Dimming

## Why Connect to Pin 5, 6, 9, 10, and 11?

Do you notice the special “~” marking and remember what do they mean? If your answer is PWM, then you are correct! 

Load example **ADKL3_05C** and we’ll explain and show you what PWM does. 

In order for the Arduino to output an (simulated) analog voltage between 0V-5V, a special technique called PWM is used. 

## What You Should See

As you turn the POT, all five LEDs should dim down or get brighter depending on the position of the knob

## The Shocking Truth Behind analogWrite():

We've seen that the Arduino can read analog voltages (voltages between 0 and 5 volts) using the **analogRead()** function. Is there a way for the Arduino to output analog voltages as well?

The answer is no... and yes. The Arduino does not have a true analog voltage output. But, because the Arduino is so fast, it can fake it using something called **PWM ("Pulse-Width Modulation")**. 

<img src="\img\docs\discovery_kit\c05_PWM.png" />

The Arduino is so fast that it can blink a pin on and off almost 1000 times per second. PWM goes one step further by varying the amount of time that the blinking pin spends HIGH vs. the time it spends LOW. If it spends most of its time HIGH, a LED connected to that pin will appear bright. If it spends most of its time LOW, the LED will look dim. Because the pin is blinking much faster than your eye can detect, the Arduino creates the illusion of a "true" analog output. 

## Real World Application 

Scrolling marquee displays are generally used to spread short segments of important information. They are built out of many LEDs. Some energy saving light also use PWM to save energy without causing much brightness impact. 

|Prev|Next|
|---|---|
| [Circuit 04 - Potentiometers](c04-potentiometer.md) | [Circuit 06 – RGB LED](c06-rgb-led.md) |