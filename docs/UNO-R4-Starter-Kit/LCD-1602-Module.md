---
sidebar_position: 19
---
# 19. LCD 1602 Module
The LCD 1602 module is a popular display device that uses a 16x2 character grid, perfect for various projects requiring a simple and efficient way to present information. Coupled with the Arduino Uno R4 Minima, this module allows you to display static and dynamic content, such as sensor readings, time, and interactive messages.

## Materials
| Component                                   | Image                                                         |
|---------------------------------------------|---------------------------------------------------------------|
| [Breadboard](https://www.canadarobotix.com/products/160)                                  | <img src="/img/docs/UNO-R4-Starter-Kit/breadboard.webp" width="200" />|
| [Jumper wires](https://www.canadarobotix.com/products/922)                                | <img src="/img/docs/UNO-R4-Starter-Kit/jumper-wires.webp" width="200"  />|
| [Arduino Uno R4 Minima](https://www.canadarobotix.com/collections/featured-1/products/3060)| <img src="/img/docs/UNO-R4-Starter-Kit/arduino-r4-minima.webp" width="200" />|
| [LCD 1602 Module](https://www.canadarobotix.com/products/1297)                             | <img src="/img/docs/UNO-R4-Starter-Kit/LCD1602.webp" width="200"  />|

## Instructions

1. Make the following connections using the breadboard and jumper wires.
#### Connections
- RS (Register Select) pin to Arduino digital pin 7
- E (Enable) pin to Arduino digital pin 8
- D4 pin to Arduino digital pin 9
- D5 pin to Arduino digital pin 10
- D6 pin to Arduino digital pin 11
- D7 pin to Arduino digital pin 12
- GND to GND
- VDD to 5V
- VO to the middle pin of a 10k potentiometer (the other two pins of the potentiometer to 5V and GND)
<img src="/img/docs/UNO-R4-Starter-Kit/LCD1602.png" width="500" />

2. Paste the following code into your main Arduino sketch:
#### Code
```cpp
#include <LiquidCrystal.h>

// Initialize the library with the numbers of the interface pins
LiquidCrystal lcd(7, 8, 9, 10, 11, 12);

void setup() {
  // Set up the LCD's number of columns and rows
  lcd.begin(16, 2);
  // Print a message to the LCD
  lcd.print("Hello, World!");
}

void loop() {
  // Set the cursor to column 0, line 1
  // (note: line 1 is the second row, since counting begins with 0)
  lcd.setCursor(0, 1);
  // Print the number of seconds since reset
  lcd.print(millis() / 1000);
}
```

3. Connect your Arduino to your laptop using a USB-C cable and upload the code to the arduino.

4. Test! Observe the text on the LCD display and the time changing!

|Prev|Next|
|---|---|
|[18. RC522 RFID Module](RFID-Module.md)|[20. Thermometer](Thermometer.md)|