---
title: Circuit 01 - Blinking a LED
sidebar_position: 5
---

# Circuit 01 - Blinking a LED

## Background

LEDs (light-emitting diodes) are small, powerful lights that are used in many different applications. To start off, you will work making an LED blink. ­That's right – it's as simple as turning a light on and off. It might not seem like much, but establishing this important baseline will give you a solid foundation as we work toward more complex experiments.

Although the LED lit up like a little light bulb, it is very different. LED has very little resistance and consume very little power. As a result, the 330Ω is necessary because connecting the LED straight to the (+) and (-) terminals is a short circuit.

<img src="\img\docs\discovery_kit\c01_diagram.png" />

## Parts List
| | Name | Quantity |
| --- | --- | --- |
| <img src="\img\docs\discovery_kit\parts_led_green.png" height="100px" /> | LED (Any colour) | 1 |
| <img src="\img\docs\discovery_kit\parts_resistor_330.png" height="100px" /> | 330Ω Resistor (Orange-Orange-Brown) | 1 |
| <img src="\img\docs\discovery_kit\parts_jumper.png" height="100px" /> | Jumper Wire (Any colour) | 3 |

## Circuit Diagram

<img src="\img\docs\discovery_kit\c01_circuit.png" width="25%" />

## Breadboard Diagram

<img src="\img\docs\discovery_kit\c01_breadboard.png" />

Now that the circuit is assembled, let’s write the code. For this project, the code is a simple blinking of a LED. Open up the Arduino IDE and write the following code into the sketch.

## Code
```c
void setup() {
  pinMode(11, OUTPUT);
}
void loop() {
  digitalWrite(11, HIGH);
  delay(1000);
  digitalWrite(11, LOW);
  delay(1000);
}
```
**Please play careful attention, there are both round ( ) brackets and curly \{ \} brackets (braces).*

## Upload

**Confirm the correct COM port (Tools > Port) is selected!**

| Steps | | | Explanation |
| --- | --- | --- | --- |
| **1** | <img src="\img\docs\discovery_kit\ide_verify.png" /> | Verify | This compiles your code. The IDE changes it from text into instructions the computer can understand. |
| **2** | <img src="\img\docs\discovery_kit\ide_upload.png" /> | Upload | This sends the instructions via the USB cable to the computer chip on the Arduino board. The Arduino will then begin running your code automatically. |

## What You Should See

Once upload is completed with “Done” showing on the Arduino IDE. You should see your LED blink on and off. If it isn't, make sure you have assembled the circuit correctly and verified and uploaded the code to your board or see the troubleshooting tips below.

## Troubleshooting

### LED Not Lighting Up?
First, check all the wiring. Is it correct? LEDs will only work in one direction. Try taking it out and turning it 180 degrees to switch the leg (no need to worry, installing it backwards does no permanent harm).

### Program Not Uploading?
This happens sometimes. The most likely cause is a confused serial port, you can change this in “tools > serial port > (usually COM3 or above)”. If it still won’t upload, try a different USB port or a cable.

### Still No Success?
Remove everything from the breadboard and built the circuit again. If you are still having problem, send us an e-mail and we will get back to you as soon as we can: [support@carobot.ca](mailto:support@carobot.ca)

## Real World Application

Almost all modern flat screen televisions and monitors have LED indicator lights to show they are on or off.

## The Code Explained

Every Arduino program need to consist of two functions, ```setup()``` and ```loop()```. It is out of the scope of this guide to teach the basic of programming. However, you don’t need knowledge in programming to follow this guide.

| Code | Explanation |
| --- | --- |
| ```void setup()``` | Declare the ```setup``` function. The ```setup``` function will only be executed once in the program. |
| ```void loop()``` | Declare the ```loop``` function. The ```loop``` function will be repeated indefinitely until the power is out. |
| ```pinMode(11, OUTPUT);``` | Tell the Arduino whether you want to use pin 11 as an INPUT or OUTPUT. |
| ```digitalWrite(11, HIGH);``` | ```digitalWrite``` set the output of a pin. Since we are using pin 11 as an OUTPUT, we can set it to:<br/>HIGH (output 5 volts [V]) – ON<br/>LOW (output 0V) – OFF |
| ```delay(1000);``` | Do nothing and wait for 1000 milliseconds = 1 second. |

## Exercise

1. Modify the code so the LED turn ON for 2 second and off for 1.5 second.
1. Morse code is a way to communicate using ON-OFF sequence. The international help signal is “SOS”. The sequence for “S” is three short pulses and the sequence for “O” is three long pulses. Modify the code to generate the “SOS” sequence: <img src="\img\docs\discovery_kit\c01_morse_code.png" /> (Use 100 ms for dot and pulse, 300 ms for dash)
1. Look up Morse code on Wikipedia and try to spell your name using the LED.


|Prev|Next|
|---|---|
| [Getting Started - Arduino IDE](arduino-ide.md) | [Circuit 02 – Push Buttons](c02-push-button.md) |