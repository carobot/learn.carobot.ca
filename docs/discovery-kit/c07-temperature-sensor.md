---
title: Circuit 07 - Temperature Sensor
sidebar_position: 12
---

# Circuit 07 - Temperature Sensor

## Background

A temperature sensor is exactly what it sounds like – a sensor used to measure ambient temperature. This particular sensor has three pins – a positive, a ground, and a signal. For every centigrade degree it reads, it outputs about 10 millivolts. In this circuit, you’ll learn how to integrate the temperature sensor with your Arduino, use it to mix the colour of a LED and use the Arduino IDE’s debug window to display the value. 

<img src="\img\docs\discovery_kit\c07_diagram.png" />

## Parts List
| | Name | Quantity |
| --- | --- | --- |
| <img src="\img\docs\discovery_kit\parts_led_rgb.png" height="100px" /> | LED (RGB) | 1 |
| <img src="\img\docs\discovery_kit\parts_resistor_330.png" height="100px" /> | 330Ω Resistor (Orange-Orange-Brown) | 3 |
| <img src="\img\docs\discovery_kit\parts_jumper.png" height="100px" /> | Jumper Wire (Any colour) | 9 |
| <img src="\img\docs\discovery_kit\parts_tmp.png" height="100px" /> | TMP | 1 |

DO NOT mix up the temperature sensor and the transistor, they’re almost identical. Also, make sure you insert the temperature sensor in the correct orientation as shown in the diagram. There’s a flat surface and a round side. 

## Circuit Diagram

<img src="\img\docs\discovery_kit\c07_circuit.png" width="50%" />

## Breadboard Diagram

<img src="\img\docs\discovery_kit\c07_breadboard.png" />

After you load example **ADKL3_07**, open the Arduino IDE’s serial monitor. Once it is open, ensure the baud rate is set to 9600. If not, change it to 9600.

<img src="\img\docs\discovery_kit\c07_instructions.png" />

## What You Should See

Once you open the serial monitor, you should be able to read the temperature your temperature sensor is detecting on the serial monitor in the Arduino IDE and you should also see the RGB LED change colour as the temperature change. Warm it up with your hand and have a look. If it isn’t working, make sure you assembled the circuit correctly and verified and uploaded the code to your board or see the troubleshooting tips below. 

## Troubleshooting

### *Gibberish is Displayed?*
This happens because the serial monitor is receiving data at a different speed than expected. To fix this, click the pull-down box that reads “*** baud” and change it to “9600 baud”. 

### *Temperature Value is Unchanging?*
Try pinching the sensor with your fingers to heat it up or pressing a bag of ice against it to cool it down. 

## The Code Explained

| Code | Explanation |
| --- | --- |
| ```Serial.begin(9600); ``` | Before using the serial monitor, you must call ```Serial.begin()``` to initialize it. 9600 is the “baud rate”, or communications speed. When two devices are communicating with each other, both must be set to the same speed. |
| ```Serial.print(degreesC);``` | The ```Serial.print()``` command can print out almost anything you throw at it to the serial monitor. This includes variables of all types, quoted text (AKA “strings”), etc. |
| ```Serial.println(degreesF);``` | ```Serial.print()``` will print everything on the same line. On the other hand, ```Serial.println()``` will move to the next line. By using both of these commands together, you can create easy-to-read printouts of text and data. |

## Real World Application

Building climate control systems use a temperature sensor to monitor and maintain their settings.

<img src="\img\docs\discovery_kit\c07_temperature.png" />

|Prev|Next|
|---|---|
| [Circuit 06 - RGB LEDs](c06-rgb-led.md) | [Circuit 08 -Photo Resistors](c08-photo-resistor.md) |