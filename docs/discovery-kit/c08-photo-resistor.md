---
title: Circuit 08 - Photo-Resistor
sidebar_position: 5
---

# Circuit 08 - Photo-Resistor

## Background

So you’ve already played with a potentiometer, which varies resistance based on the twisting of a knob. In this circuit, you’ll be using a photo resistor, which changes resistance based on how much light the sensor receives. Since the Arduino can’t directly interpret resistance (rather it reads voltage), we use a voltage divider to use our photo resistor. This voltage divider will output a high voltage when it is getting a lot of light and a low voltage when it is not. 

<img src="\img\docs\discovery_kit\c08_diagram.png" />

## Parts List
| | Name | Quantity |
| --- | --- | --- |
| <img src="\img\docs\discovery_kit\parts_led_rgb.png" height="100px" /> | LED (RGB) | 1 |
| <img src="\img\docs\discovery_kit\parts_resistor_330.png" height="100px" /> | 330Ω Resistor (Orange-Orange-Brown) | 1 |
| <img src="\img\docs\discovery_kit\parts_jumper.png" height="100px" /> | Jumper Wire (Any colour) | 5 |
| <img src="\img\docs\discovery_kit\parts_ldr.png" height="100px" /> | Photo-Resistsor | 1 |
| <img src="\img\docs\discovery_kit\parts_resistor_10k.png" height="100px" /> | 10kΩ Resistor | 1 |

## Circuit Diagram

<img src="\img\docs\discovery_kit\c08_circuit.png" width="50%" />

## Breadboard Diagram

<img src="\img\docs\discovery_kit\c08_breadboard.png" />

Load example code **ADKL3_08**.

## What You Should See

You should see the LED grow brighter or dimmer in accordance with how much light your photo resistor is reading. If it isn't working, make sure you have assembled the circuit correctly and verified and uploaded the code to your board or see the troubleshooting tips below. 

## Troubleshooting

### *LED Remains Dark?*
This is a mistake we continue to make time and time again, if only they could make an LED that worked both ways. Pull it up and give it a twist. 

### *It Isn't Responding to Changes in Light?*
Given that the spacing of the wires on the photo-resistor is not standard, it is easy to misplace it. Double check it’s in the right place. 

### *Still Not Quite Working?*
You may be in a room which is either too bright or dark. Try turning the lights on or off to see if this helps. Or if you have a flashlight nearby give that a try. 

## Real World Application

A street lamp uses a light sensor to detect when to turn the lights on at night.

## Measuring Resistive sensors

Many of the sensors you'll use (potentiometers, photo resistors, etc.) are resistors in disguise. Their resistance changes in proportion to whatever they're sensing (light level, etc.). 

The Arduino's analog input pins measure voltage, not resistance. But we can easily use resistive sensors with the Arduino by including them as part of a "voltage divider". 

<img src="\img\docs\discovery_kit\c08_resistive_sensors.png" />

A voltage divider consists of two resistors. The "top" resistor is the sensor you'll be using. The "bottom" one is a normal, fixed resistor. When you connect the top resistor to 5 Volts, and the bottom resistor to ground, the middle will output a voltage proportional to the values of the two resistors. When one of the resistors changes (as it will when your sensor senses things), the output voltage will change as well!

Although the sensor's resistance will vary depending on which one you are using, resistive sensors usually have a value around 10K Ohms. That’s why we use a 10K resistor as the fixed "bottom" resistor because we want the fixed resistor to be close to this value of the resistive sensors (at least in the same magnitude).

To calculate the output voltage in a voltage division setup: 

<img src="\img\docs\discovery_kit\c08_formula.png" />

## How Do I know the Resistance of my Resistor?

Resistance value on a resistor can be decoded by reading the color band on the
resistor. Some resistor have four bands, some have five.

<img src="\img\docs\discovery_kit\c08_resistor_colours.png" />

|Prev|Next|
|---|---|
| [Circuit 07 - Temperature Sensor](c07-temperature-sensor.md) | [Circuit 09 - Spinning a Motor](c09-spinning-a-motor.md) |