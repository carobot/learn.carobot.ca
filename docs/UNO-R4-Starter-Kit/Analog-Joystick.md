---
sidebar_position: 10
---
# 10. Analog Joystick
Analog joysticks are versatile input devices commonly used in game controllers, robotics, and various DIY projects. They provide a simple and intuitive way to control the movement or direction of objects and can be easily interfaced with Arduino boards.

## Materials
| Component                                   | Image                                                         |
|---------------------------------------------|---------------------------------------------------------------|
| [Breadboard](https://www.canadarobotix.com/products/160)                                  | <img src="/img/docs/UNO-R4-Starter-Kit/breadboard.webp" width="200" />|
| [Jumper wires](https://www.canadarobotix.com/products/922)                                | <img src="/img/docs/UNO-R4-Starter-Kit/jumper-wires.webp" width="200"  />|
| [Arduino Uno R4 Minima](https://www.canadarobotix.com/collections/featured-1/products/3060)| <img src="/img/docs/UNO-R4-Starter-Kit/arduino-r4-minima.webp" width="200" />|
| [Joystick Module](https://www.canadarobotix.com/products/1240)                             | <img src="/img/docs/UNO-R4-Starter-Kit/joystick.webp" width="200" />|

## Instructions

1. Make the following connections using the breadboard and jumper wires.
#### Connections
(Joystick module to Arduino)
- GND to GND
- 5V to 5V
- VRx to A0
- VRy to A1
- SW to pin 2
<img src="/img/docs/UNO-R4-Starter-Kit/joystick-module.png" width="500" />

2. Paste the following code into your main Arduino sketch:
#### Code
```cpp
// Arduino pin numbers
const int SW_pin = 2;   // digital pin connected to switch output
const int X_pin = A0;   // analog pin connected to X output
const int Y_pin = A1;   // analog pin connected to Y output

void setup() {
  pinMode(SW_pin, INPUT);
  digitalWrite(SW_pin, HIGH);
  Serial.begin(9600);
}

void loop() {
  Serial.print("Switch:  ");
  Serial.print(digitalRead(SW_pin));
  Serial.print("\n");
  Serial.print("X-axis: ");
  Serial.print(analogRead(X_pin));
  Serial.print("\n");
  Serial.print("Y-axis: ");
  Serial.println(analogRead(Y_pin));
  Serial.print("\n\n");
  delay(1000);
}
```

3. Connect your Arduino to your laptop using a USB-C cable and upload the code to the arduino.

4. Test! Open the serial monitor and observe the print out statements as you move the joystick module.