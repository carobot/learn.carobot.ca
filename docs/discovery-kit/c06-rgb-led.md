---
title: Circuit 06 - RGB LEDs 
sidebar_position: 11
---

# Circuit 06 - RGB LED

## Background

You know what’s even more fun than a blinking LED? A multi-coloured one. RGB, or red-green-blue, LEDs have three different colour-emitting diodes that can be combined to create all sorts of colours. In this circuit, you’ll learn how to use an RGB LED to create unique colour combinations. Depending on how bright each diode is, nearly any colour is possible! 

<img src="\img\docs\discovery_kit\c06_diagram.png" />

## Parts List
| | Name | Quantity |
| --- | --- | --- |
| <img src="\img\docs\discovery_kit\parts_led_rgb.png" height="100px" /> | LED (RGB) | 1 |
| <img src="\img\docs\discovery_kit\parts_resistor_330.png" height="100px" /> | 330Ω Resistor (Orange-Orange-Brown) | 3 |
| <img src="\img\docs\discovery_kit\parts_jumper.png" height="100px" /> | Jumper Wire (Any colour) | 9 |
| <img src="\img\docs\discovery_kit\parts_pot.png" height="100px" /> | Potentiometer (POT) | 1 |

## Circuit Diagram

<img src="\img\docs\discovery_kit\c06_circuit.png" width="50%" />

## Breadboard Diagram

<img src="\img\docs\discovery_kit\c06_breadboard.png" />

Load the code in example **ADKL3_06A** and see what happens.

## What You Should See

You should see your LED turn on, but this time in new, crazy colours! If it isn't, make sure you have assembled the circuit correctly and verified and uploaded the code to your board or see the troubleshooting tips below.

## Troubleshooting

### *LED Remains Dark or Shows Incorrect Colour*
With the four pins of the LED so close together, it’s sometimes easy to misplace one. Double check each pin is where it should be

## Circuit 06B - Colour Mixer 

A LED blinking different colours is awesome but just the LED blinking by itself is not awesome enough. Let’s take it one step further and use the potentiometer to control the colour of the LED. Load the code **ADKL3_06B**. 

## What You Should See

You should see your LED turn on, but this time in new, crazy colours! If it isn't, make sure you have assembled the circuit correctly and verified and uploaded the code to your board or see the troubleshooting tips below. 

## Troubleshooting

### *Seeing Red?*
The red diode within the RGB LED may be a bit brighter than the other two. To make your colours more balanced, use a higher ohm resistor. Or adjust in code:

```analogWrite(RED_PIN, redIntensity);``` to ```analogWrite(RED_PIN, redIntensity/3);```

## The Code Explained

The idea behind the code is to divide the input from the potentiometer into three zone. One zone with the colour blue absent, one with red absent, and one with green absent. The other two colours will be calculated from the input. 

<img src="\img\docs\discovery_kit\c06_colours.png"/>

| Code | Explanation |
| --- | --- |
| ```(long)767 / (long)1023;``` | Type casting is a way to force a variable into another type. In our code, the number 767 and 1023 is treated as integer normally. By putting ```(long)``` in front of the number, the program will now treat them as long integer |

## Can you create all the colours in the colour wheel?

<img src="\img\docs\discovery_kit\c06_colour_wheel.png"/>

## Real World Application

Many electronics such as videogame consoles use RGB LEDs to have the versatility to show different colours in the same area. Often times the different colours represent different states of working condition. 

|Prev|Next|
|---|---|
| [Circuit 05 - Multiple LEDs](c05-multiple-leds.md) | [Circuit 07 – Temperature Sensor](c07-temperature-sensor.md) |