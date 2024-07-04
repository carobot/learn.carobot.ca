---
sidebar_position: 5
---
# 5. Ball Switch
This tutorial will teach you to how to use "pull-up" to turn on an LED using a button.

## Materials
| Component                                   | Image                                                         |
|---------------------------------------------|---------------------------------------------------------------|
| [Breadboard](https://www.canadarobotix.com/products/160)                                  | <img src="/img/docs/UNO-R4-Starter-Kit/breadboard.webp" width="200" />|
| [Jumper wires](https://www.canadarobotix.com/products/922)                                | <img src="/img/docs/UNO-R4-Starter-Kit/jumper-wires.webp" width="200"  />|
| [Arduino Uno R4 Minima](https://www.canadarobotix.com/collections/featured-1/products/3060)| <img src="/img/docs/UNO-R4-Starter-Kit/arduino-r4-minima.webp" width="200" />|
| [LED (white, red, blue, or green)](https://www.canadarobotix.com/products/1282)            | <img src="/img/docs/UNO-R4-Starter-Kit/LED.jpg" width="200" />|
| [Resistors (220 ohms for the LED, optional if using internal pull-up resistors for buttons)](https://www.canadarobotix.com/products/5138) | <img src="/img/docs/UNO-R4-Starter-Kit/resistors.webp" width="200" />|
| [Tilt Sensor](https://www.canadarobotix.com/products/2326)                   | <img src="/img/docs/UNO-R4-Starter-Kit/ball-switch.webp" width="200"  />|

## Instructions
1. Make the following connections using the breadboard and jumper wires:
- LED positive terminal to pin 13
- LED negative terminal to a 220 ohm resistor. Place the other leg of the resistor into ground.
Use male to female jumper wires for the following connections.
- One leg of the ball switch to pin 2
- The other leg of the ball switch to GND
<img src="/img/docs/UNO-R4-Starter-Kit/Ball-Switch.png" width="500" />

2. Paste the following code into the Arduino IDE.
#### Code
```cpp
const int ledPin = 13; // the LED attached to pin 13
const int switchPin = 2; // the ball switch attached to pin 2

void setup() {
  pinMode(ledPin, OUTPUT); // initialize the ledPin as an output
  pinMode(switchPin, INPUT_PULLUP); // set pin 2 as an input with an internal pull-up resistor
}

void loop() {
  int switchState = digitalRead(switchPin); // read the state of the ball switch
  if (switchState == HIGH) {
    digitalWrite(ledPin, LOW); // turn the LED off if the switch is not tilted
  } else {
    digitalWrite(ledPin, HIGH); // turn the LED on if the switch is tilted
  }
}

```

3. Upload the code to the arduino and run the code.

4. Test the code! Tilt the ball switch and watch the LED turn off!

|Prev|Next|
|---|---|
|[4. Passive Buzzer](Passive-Buzzer.md)|[6. Servo](Servo.md)|