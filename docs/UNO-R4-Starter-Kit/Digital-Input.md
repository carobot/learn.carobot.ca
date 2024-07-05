---
sidebar_position: 2
---
# 2. Digital Input
This will teach you about digital inputs using buttons and LEDs. This is really important for user input interactions, sensors, and communication!

## Materials
| Component                                   | Image                                                         |
|---------------------------------------------|---------------------------------------------------------------|
| [Breadboard](https://www.canadarobotix.com/products/160)                                  | <img src="/img/docs/UNO-R4-Starter-Kit/breadboard.webp" width="200" />|
| [Jumper wires](https://www.canadarobotix.com/products/922)                                | <img src="/img/docs/UNO-R4-Starter-Kit/jumper-wires.webp" width="200"  />|
| [Arduino Uno R4 Minima](https://www.canadarobotix.com/collections/featured-1/products/3060)| <img src="/img/docs/UNO-R4-Starter-Kit/arduino-r4-minima.webp" width="200" />|
| [LED (white, red, blue, or green)](https://www.canadarobotix.com/products/1282)            | <img src="/img/docs/UNO-R4-Starter-Kit/LED.jpg" width="200"/>|
| [Resistor (220 ohms for the LED, optional if using internal pull-up resistors for buttons)](https://www.canadarobotix.com/products/5138) | <img src="/img/docs/UNO-R4-Starter-Kit/resistors.webp" width="200"/>              |
| [2 push buttons](https://www.canadarobotix.com/products/545)                              | <img src="/img/docs/UNO-R4-Starter-Kit/push-button.webp" width="200"  />|

## Instructions
1. Make the following connections using the jumper wires:
#### Connections
- LED: Connect the anode (longer leg) to digital pin 5 and the cathode (shorter leg) to ground through a 220-ohm resistor.
- Button A: Connect one leg to digital pin 9 and the other leg to ground.
- Button B: Connect one leg to digital pin 8 and the other leg to ground.
<img src="/img/docs/UNO-R4-Starter-Kit/Digital-Input/Digital-Input.png" width="500"  />

2. Once wired, upload the following code to your Arduino IDE:
#### Code
```cpp
int ledPin = 5;
int buttonApin = 9;
int buttonBpin = 8;

void setup() {
  pinMode(ledPin, OUTPUT);
  pinMode(buttonApin, INPUT_PULLUP);  
  pinMode(buttonBpin, INPUT_PULLUP);  
}

void loop() {
  if (digitalRead(buttonApin) == LOW) {
    digitalWrite(ledPin, HIGH);
    Serial.println("ON");
  } else if (digitalRead(buttonBpin) == LOW) {
    digitalWrite(ledPin, LOW);
    Serial.println("OFF");
  }
}
```
3. Test! Play around with the buttons and customize the digital inputs.

|Prev|Next|
|---|---|
|[1. RGB LED Module](RBG-LED.md)|[3. Making Sounds](Making-Sounds.md)|