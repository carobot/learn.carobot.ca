---
sidebar_position: 16
---
# DS1307 RTC Module
An RTC module is a highly useful component in projects that require precise timekeeping. Unlike your Arduino's built-in timer, which resets every time the power is cycled, an RTC module retains the correct time and date even when powered down, thanks to its onboard battery backup.

## Materials
| Component                                   | Image                                                                                          |
|---------------------------------------------|------------------------------------------------------------------------------------------------|
| Breadboard                                  | <img src="/img/docs/UNO-R4-Starter-Kit/breadboard.webp" width="200" height="150" />       |
| Jumper wires                                | <img src="/img/docs/UNO-R4-Starter-Kit/jumper-wires.webp" width="200" height="150" />       |
| Arduino Uno R4 Minima                       | <img src="/img/docs/UNO-R4-Starter-Kit/arduino-r4-minima.webp" width="190" height="150" />               |
| DS1307 RTC Module                           | <img src="/img/docs/UNO-R4-Starter-Kit/DS1307-RTC.webp" width="200" height="200" />               |

## Instructions

1. Make the following connections using the breadboard and jumper wires.
#### Connections
- GND to GND
- VCC to 5V
- SDA to SDA
- SCL to SCL
<img src="/img/docs/UNO-R4-Starter-Kit/Ds1307.png" width="600" height="350" />

2. Download the "RTClib" library from the Library Manager in the Arduino IDE.

3. Paste the following code into your main Arduino sketch:
```cpp
// Importing the necessary libraries
#include <Wire.h>
#include <RTClib.h>

RTC_DS1307 rtc;

void setup() {
  // setting the serial monitor to print the output
  Serial.begin(9600);
  Wire.begin();

  if (!rtc.begin()) {
    Serial.println("Couldn't find RTC");
    while (1);
  }

  if (!rtc.isrunning()) {
    Serial.println("RTC is NOT running, let's set the time!");

    rtc.adjust(DateTime(F(__DATE__), F(__TIME__)));
  }
}

void loop() {
  DateTime now = rtc.now();
  // printing out the present date and time
  Serial.print(now.year(), DEC);
  Serial.print('/');
  Serial.print(now.month(), DEC);
  Serial.print('/');
  Serial.print(now.day(), DEC);
  Serial.print(" ");
  Serial.print(now.hour(), DEC);
  Serial.print(':');
  Serial.print(now.minute(), DEC);
  Serial.print(':');
  Serial.print(now.second(), DEC);
  Serial.println();
  // print every second
  delay(1000);
}
```

4. Connect your Arduino to your laptop using a USB-C cable and upload the code to the arduino.

5. Test! Observe the serial monitor print out the date and time on the serial monitor.