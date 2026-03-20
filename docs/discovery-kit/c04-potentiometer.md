---
title: Circuit 04 - Potentiometers (POT)
sidebar_position: 8
---

# Circuit 04 - Potentiometers (POT)

## Background

In this project, you’ll work with a potentiometer. A potentiometer is also known as a variable resistor. When it’s connected with 5 volts across its two outer pins, outputs of the middle pin will be a voltage between 0 and 5, depending on the position of the knob on the potentiometer. In this circuit, you’ll learn how to use a potentiometer to control the blinking and brightness of an LED.

<img src="\img\docs\discovery_kit\c04_diagram.png" />

## Parts List
| | Name | Quantity |
| --- | --- | --- |
| <img src="\img\docs\discovery_kit\parts_led_green.png" height="100px" /> | LED (Any colour) | 1 |
| <img src="\img\docs\discovery_kit\parts_resistor_330.png" height="100px" /> | 330Ω Resistor (Orange-Orange-Brown) | 1 |
| <img src="\img\docs\discovery_kit\parts_jumper.png" height="100px" /> | Jumper Wire (Any colour) | 6 |
| <img src="\img\docs\discovery_kit\parts_pot.png" height="100px" /> | Potentiometer (POT) | 1 |

## Circuit Diagram

<img src="\img\docs\discovery_kit\c04_circuit.png" width="50%" />

## Breadboard Diagram

<img src="\img\docs\discovery_kit\c04_breadboard.png" />

## Code
Here's the code for circuit #4:
```c
int sensorPin = A0; // The POT is connected to pin A0
int ledPin = 11;    // The LED is connected to pin 11

void setup() {
  pinMode(ledPin, OUTPUT);
}

void loop() {
  // store reading from potentiometer into integer 
  // variable "sensorValue"
  int sensorValue;
  sensorValue = analogRead(sensorPin);

  // change the blink speed using "sensorValue"
  digitalWrite(ledPin, HIGH);
  delay(sensorValue);

  digitalWrite(ledPin, LOW);
  delay(sensorValue);
}
```

## What You Should See

You should see the LED blink faster or slower in accordance with your potentiometer. If it isn't working, make sure you have assembled the circuit correctly and verified and uploaded the code to your board or see the - troubleshooting tips below.

## Troubleshooting

### *Sporadically Working?*
This is most likely due to a slightly dodgy connection with the potentiometer's pins. This can usually be conquered by holding the potentiometer down.

### *Not Working?*
Make sure you haven't accidentally connected the potentiometer's wiper to digital pin 0 rather than analog pin A0 (the row of pins beneath the power pins).

### *Still Backward??*
You can try operating the circuit upside down. Sometimes this helps.

## Real World Application

MP3 players' volume control is an example of a potentiometer in action.

## The Code Explained

| Code | Explanation |
| --- | --- |
| ```int sensorPin = A0; and int ledPin = 11;``` | Declaring two integer (whole number) variables to remember the pin numbers. |
| ```pinMode(ledPin, OUTPUT);``` | Same outcome as ```pinMode(11, OUTPUT);``` from circuit #1 but now we are using a variable instead. Using a variable is a good idea if you need to change the pin used during your project. |
| ```analogRead(sensorPin);``` | ```analogRead(sensorPin)``` returns an integer number ranging from 0 (0 volts) to 1032 by reading the ```sensorPin```|
| ```// single line comment``` | This is a comment. Text or code in the comment does not get executed in the program. Comments are usually used as places to put notes or information about the program. Use /* */ to make multi-line comments. |

## Digital versus Analog

If you look closely at your Arduino, you'll see some pins labeled "DIGITAL", and some labeled "ANALOG". What's the difference? 

<img src="\img\docs\discovery_kit\c04_digital_vs_analog.png"/>

**DIGITAL**: Many devices, such as LEDs and pushbuttons, have only two possible states: ON and OFF, or as they're known to the Arduino, "HIGH" (5 Volts) and "LOW" (0 Volts). The digital pins on an Arduino are great at getting these signals to and from the outside world, and can even do tricks like simulated dimming (by blinking on and off really fast), and serial communications (transferring data to
another device by HIGH and LOW). 

**ANALOG**: There are a lot of things out there that aren't just ON or OFF. Temperature levels, control knobs, etc. all have a continuous range of values between HIGH and LOW. For these situations, the Arduino offers six analog inputs that translate an input voltage into a number that ranges from 0 (0 Volts) to 1023 (5 Volts). The analog pins are perfect for measuring all those "real world" values, and allow you to interface the Arduino to all kinds of things.

|Prev|Next|
|---|---|
| [Circuit 03 - Buzzers](c03-buzzer.md) | [Circuit 05 – Multiple LEDs](c05-multiple-leds.md) |