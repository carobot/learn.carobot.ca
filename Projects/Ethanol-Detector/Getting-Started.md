---
title: Getting Started
sidebar_position: 2
---

## Materials Required
| Component                                   | Image                                                         |
|---------------------------------------------|---------------------------------------------------------------|
| [MQ3 Alcohol Sensor Module](https://www.canadarobotix.com/products/2175) | <img src="/img/docs/projects/ethanol-detector/mq3-sensor.webp" width="200" />|
| [0.96′ I2C OLED display](https://www.canadarobotix.com/products/2006) | <img src="/img/docs/projects/ethanol-detector/oled-module.webp" width="200" />|
| [Arduino Mega](https://www.canadarobotix.com/products/266) or [Uno](https://www.canadarobotix.com/products/60) | <img src="/img/docs/projects/ethanol-detector/arduino-mega.webp" width="200" />|
| [Small Breadboard](https://www.canadarobotix.com/products/223) | <img src="/img/docs/projects/ethanol-detector/breadboard.webp" width="200" />|
| [Jumper Wires](https://www.canadarobotix.com/products/2175) | <img src="/img/docs/projects/esp32-starter-kit/jumper-wires.png" width="200" />|

## Hardware Setup
| Component   | Wire | To Arduino Pin |
|-------------|------|----------------|
| OLED        | VCC  | 5V             |
|             | GND  | GND            |
|             | SCL  | A5             |
|             | SDA  | A4             |
|-------------|------|----------------|
| Gas Sensor  | VCC  | 5V             |
|             | GND  | GND            |
|             | AD   | A0             |

<img src="/img/docs/projects/ethanol-detector/ethanol-1.png" width="700" />

## Software Setup
#### Downloading Arduino IDE:
1. Visit the Arduino website and download the latest version of the Arduino IDE for your operating system.
2. Follow the installation instructions provided on the website.

#### Connecting the Arduino Board:
1. Connect the Arduino board to your computer using a USB cable.
2. Ensure the connection is secure. Sometimes a loose connection can cause the board to be not recognized. A tight connection resolved this issue for me (thanks to a helpful YouTube comment).

#### Installing Required Libraries:
1. Open the Arduino IDE.
2. Go to Sketch > Include Library > Manage Libraries.
3. In the Library Manager, search for and install the following libraries:
    - Adafruit GFX Library: This core graphics library provides a common set of graphics primitives (points, lines, circles, etc.) and needs to be paired with a hardware-specific library.
    - Adafruit SSD1306 OLED Display Library: This library is specifically for OLED displays based on SSD1306 drivers.

#### Setting Up the Arduino IDE:
1. Select your Arduino board model under Tools > Board.
2. Select the correct port under Tools > Port where your Arduino is connected.

<img src="/img/docs/projects/ethanol-detector/ethanol-3.png" width="700" />


