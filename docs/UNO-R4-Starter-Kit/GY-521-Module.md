---
sidebar_position: 13
---
# GY-521 Module
The GY-521 module, based on the MPU-6050 sensor, is a popular choice for motion sensing applications. This module combines a 3-axis gyroscope and a 3-axis accelerometer on a single chip, allowing for accurate motion tracking in various projects.

## Materials
| Component                                   | Image                                                                                          |
|---------------------------------------------|------------------------------------------------------------------------------------------------|
| Breadboard                                  | <img src="/img/docs/UNO-R4-Starter-Kit/breadboard.webp" width="200" height="150" />       |
| Jumper wires                                | <img src="/img/docs/UNO-R4-Starter-Kit/jumper-wires.webp" width="200" height="150" />       |
| Arduino Uno R4 Minima                       | <img src="/img/docs/UNO-R4-Starter-Kit/arduino-r4-minima.webp" width="190" height="150" />               |
| GY-521 Gyroscope Module                     | <img src="/img/docs/UNO-R4-Starter-Kit/GY-521-module.jpg" width="190" height="150" />              |


## Instructions

1. Make the following connections using the breadboard and jumper wires.
#### Connections
(GY-521 to Arduino)
- VCC to 5V
- GND to GND
- SCL to SCL
- SDA to SDA
<img src="/img/docs/UNO-R4-Starter-Kit/GY-521.png" width="500" height="350" />

2. Navigate to the Library Manager on the Arduino IDE and download the MPU6050 library.

3. Paste the following code into your main Arduino sketch:
```cpp
// Importing the necessary libraries
#include <Wire.h>
#include <MPU6050.h>

MPU6050 mpu;

//Setting to print on serial monitor 9600
void setup() {
  Serial.begin(9600);
  Wire.begin();
  mpu.initialize();
  
  Serial.println("Testing Gyroscope and Accelerometer MPU6050");
}

void loop() {
  int16_t ax, ay, az, gx, gy, gz;
  mpu.getMotion6(&ax, &ay, &az, &gx, &gy, &gz);
  
  // Printing the data from each of the 3 axes
  Serial.print("a/g:\t");
  Serial.print(ax); Serial.print("\t");
  Serial.print(ay); Serial.print("\t");
  Serial.print(az); Serial.print("\t");
  Serial.print(gx); Serial.print("\t");
  Serial.print(gy); Serial.print("\t");
  Serial.println(gz);
  
  delay(1000); // The data is set to print every second
}
```

4. Connect your Arduino to your laptop using a USB-C cable and upload the code to the arduino.

5. Test! Move your gyroscope and observe the changes in print statements on your serial monitor.