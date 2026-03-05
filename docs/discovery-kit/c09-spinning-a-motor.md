---
title: Circuit 09 - Spinning a Motor
sidebar_position: 14
---

# Circuit 09 - Spinning a Motor

## Background

Enough with the LEDs, potentiometer, and photo-resistor. Now we are going to make something move and tackle spinning a motor. Keep the circuit you have from circuit #7 however, we’ll add
more stuff to it.

Spinning a motor requires the use of a transistor, which can switch a larger amount of current than the Arduino can. When using a transistor, you just need to make sure its maximum specs are high enough for your use. The transistor we are using for this project is rated at 40V max and 1 Amp max! 

<img src="\img\docs\discovery_kit\c09_diagram.png" />

## Parts List
| | Name | Quantity |
| --- | --- | --- |
| <img src="\img\docs\discovery_kit\parts_led_rgb.png" height="100px" /> | LED (RGB) | 1 |
| <img src="\img\docs\discovery_kit\parts_resistor_330.png" height="100px" /> | 330Ω Resistor (Orange-Orange-Brown) | 2 |
| <img src="\img\docs\discovery_kit\parts_npn.png" height="100px" /> | PN2222 | 1 |
| <img src="\img\docs\discovery_kit\parts_jumper.png" height="100px" /> | Jumper Wire (Any colour) | 7 |
| <img src="\img\docs\discovery_kit\parts_ldr.png" height="100px" /> | Photo-Resistsor | 1 |
| <img src="\img\docs\discovery_kit\parts_resistor_10k.png" height="100px" /> | 10kΩ Resistor | 1 |
| <img src="\img\docs\discovery_kit\parts_motor.png" height="100px" /> | DC Motor | 1 |

DO NOT mix up the transistor and the temperature sensor, they’re almost identical. Also, make sure you insert the transistor in the correct orientation as shown in the diagram. There’s a flat surface and a round side. 

## Circuit Diagram

<img src="\img\docs\discovery_kit\c09_circuit.png" width="50%" />

## Breadboard Diagram

<img src="\img\docs\discovery_kit\c09_breadboard.png" />

Load example code **ADKL3_09A**.

## What You Should See

You should see the LED grow brighter or dimmer and the DC motor spin faster and slower in accordance with how much light your photo resistor is reading. If your project is not working check the troubleshooting section below. 

## Troubleshooting

### *Motor Not Spinning?*
If you sourced your own transistor, double check with the data sheet that the pinout is compatible with a PN2222 (many are reversed). Also double check to make sure the diode is in the right direction. 

### *Still No Luck?*
If you sourced your own motor, double check that it will work with 5 volts and that it does not draw too much power. 

### *Still Not Working?*
Sometimes the Arduino board will disconnect from the computer. Try un-plugging and then re-plugging it into your USB port. 

## Real World Application

Radio Controlled (RC) cars use Direct Current (DC) motors to turn the wheels for propulsion. 

## Circuit 09B - Spinning a Motor with Serial Input

Ok, let’s try to go more advanced and control the speed of the motor by using input. You can try using the potentiometer or the already assembled photoresistor circuit to control the speed of the motor as a side project but in the next code, you are going to control the speed using input from your keyboard. Well…more like serial communication using a command prompt-like interface. 

Load example code **ADKL3_09B**

## What You Should See

Once you open up the serial monitor, you should be prompt for an input between 0-255. The speed should spin at a speed according to your input. 

## Troubleshooting

### *Gibberish is Displayed?*
This happens because the serial monitor is receiving data at a difference speed than expected. To fix this, click the pull-down box that reads “*** baud” and change it to “9600 baud”. 

## Putting it all together

At this point you're probably starting to get your own ideas for projects that do fun things, or help solve a real problem. Excellent! Here are some tips on programming in general. 

Most of the sketches you write will be a loop with some or all of these steps:
1. Perform some sort of input
2. Make some calculations or decisions
3. Perform some sort of output
4. Repeat! (Or not!) 

We've already shown you how to use a bunch of different input sensors and output devices (and we still have a few more to go). Feel free to make use of the examples in your own sketches - this is the whole idea behind the "Open Source" movement. 

It's usually pretty easy to pull pieces of different sketches together, just open them in two windows, and copy and paste between them. This is one of the reasons we've been promoting "good programming habits". Things like using constants for pin numbers, and breaking your sketch into functions, make it much easier to re-use your code in new sketches. For example, if you pull in two pieces of code that use the same pin, you can easily change one of the constants to a new pin. (Don't forget that not all of the pins support ```analogWrite();``` the compatible pins are marked on your board.)

If you need help, there are internet forums where you can ask questions. Try Arduino's forum at **arduino.cc/forum**. When you're ready to move to more advanced topics, take a look at Arduino's tutorials page at **arduino.cc/en/Tutorial**.

Finally, when you create something really cool, consider sharing it with the world so that others can learn from your genius. (And be sure to let us know so we can put it on our home page!) 

# Congratulations! You've just finished the 9 circuits in this guide!.

This is just the beginning of your exploration into embedded electronics and coding. Our website has a wealth of tutorials to whet your appetite for more knowledge. So log on to our website for more information about Arduino, or to plan ahead for your next project! 

carobot.cc

|Prev|Next|
|---|---|
| [Circuit 08 - Photo-Resistors](c08-photo-resistor.md) | [Using Example Code](using-example-code.md) |