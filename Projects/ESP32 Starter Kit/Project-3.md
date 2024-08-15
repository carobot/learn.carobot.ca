---
title: "Project 3: Calibrating and Measuring an Object"
sidebar_position: 5
---

## Overview:
Project 3 is to design a weight measurement system using the HX711 load cell amplifier, strain gauge
and an ESP32 microcontroller. The challenge is to set up a system used to calibrate and another one
to measure an object with a known weight, and displaying the readings on TFT screen. For this
project, the object that I’m going to use is a canadian loonie with a weight of roughly 6.27g.

## Materials:
| Component                                   | Image                                                         |
|---------------------------------------------|---------------------------------------------------------------|
| [Strain Gauge](https://www.canadarobotix.com/products/3050) | <img src="/img/docs/projects/esp32-starter-kit/strain-gauge.png" width="200" />|
| [HX711 Amplifier](https://www.canadarobotix.com/products/2318) | <img src="/img/docs/projects/esp32-starter-kit/HX711.png" width="200" />|
| [1.8" TFT LCD Screen](https://www.canadarobotix.com/products/3056)                                | <img src="/img/docs/projects/esp32-starter-kit/LCD-Screen.webp" width="200"  />|
| [ESP32 Dev Board](https://www.canadarobotix.com/products/2594)                                  | <img src="/img/docs/projects/esp32-starter-kit/ESP32.webp" width="200" />|

## Objectives:
- Calibration of Load Cell: Calibrate the HX711 load cell amplifier with a known weight to ensure
accurate measurements.
- Weight Measurement: Use the calibrated value to measure the weight of an object and display
it on a TFT screen.

## Hardware Assembly:
<img src="/img/docs/projects/esp32-starter-kit/hardware-assembly-2.png" width="700"  />

## Pseudocode:

1. Calibrating weight:
```
Include the HX711 library
Define pins for HX711 data and clock
Initialize HX711 scale object
```
Setup:
```
Begin serial communication at 57600 baud rate
Start the HX711 with defined pins
```
Loop:
```
If the scale is ready:
Reset any previous scale settings
Print "Tare... remove any weights from the scale."
Wait 5 seconds
Zero the scale (tare it)
Print "Tare done..."
Prompt to place a known weight
Wait 5 seconds
Measure the weight and take 10 readings for accuracy
Print the measured weight
If the scale is not ready:
Print "HX711 not found."
Wait 1 second before the next loop iteration
```

2. Measuring weight:
```
Include necessary libraries for the HX711 load cell and Adafruit ST7735 TFT display
Define pins for the TFT display and HX711 load cell
Initialize HX711 scale and Adafruit ST7735 display objects
```
Setup:
```
Begin serial communication at 115200 baud
Initialize the TFT display with specific settings (black background, white text)
Configure the TFT display for text display (set text color, size, and initial cursor
position)
Initialize the HX711 scale, set the calibration factor, and tare the scale
```
Loop:
```
Clear the TFT display and reset cursor position
Read the current weight from the HX711 scale
Display the current weight on the TFT display formatted to five decimal places
with the unit "kg"
Pause for 1 second before refreshing the display
```

## Instructions:
● Calibrating an object:
1. Every calibration factor might be different, so this step can’t be skipped
2. Prepare an object with a known weight. Because I used a 5kg strain gauge, I personally
used a canadian lonnie with a weight of ~6.27g.
3. Use calibrating code that you wrote or you can download project3_calibrating.ino from
this repository.
4. After uploading, open your Serial Monitor at a baud rate of 115200 and the press
RESET button on the ESP32
5. Follow the instructions on the Serial Monitor, it should look like the picture below:
<img src="/img/docs/projects/esp32-starter-kit/ESP32-5.png" width="500"  />

6. Calculate your calibration factor using this equation:
Calibration factor: reading / known weight
7. In my case, the loonie is around 6.27g so I got a result of 2760. So my calibration factor
should be around 433.33. Save this number for later use when we measure loonies.

● Measuring the weight of an object:
1. Use your code that you write to measure an object or if you are stuck, visiting
project3.ino from the folder is another option.
2. Hold the strain gauge up like I did below and then press RESET, the weight displayed
on the screen should be close to 0.
<img src="/img/docs/projects/esp32-starter-kit/ESP32-6.png" width="600"  />

3. Put a loonie or (or your preferred object) on the strain gauge like I did:
<img src="/img/docs/projects/esp32-starter-kit/ESP32-7.png" width="200"  />

4. The weight should be displayed on the TFT screen like below:
<img src="/img/docs/projects/esp32-starter-kit/ESP32-8.png" width="200"  />


