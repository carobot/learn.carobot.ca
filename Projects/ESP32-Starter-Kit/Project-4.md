---
title: "Project 4: Sensor Data on Screen"
sidebar_position: 6
---

## Overview:
Project 4 aims to create an integrated system using ESP32 microcontroller along with the MPU6050
sensor and an ST7725 TFT display. This project focuses on capturing real-time data and displaying it
on a TFT display.

## Material:
| Component                                   | Image                                                         |
|---------------------------------------------|---------------------------------------------------------------|
| [10 DOF IMU Sensor](https://www.canadarobotix.com/products/5134) | <img src="/img/docs/projects/esp32-starter-kit/IMU.png" width="200" />|
| [1.8" TFT LCD Screen](https://www.canadarobotix.com/products/3056)                                | <img src="/img/docs/projects/esp32-starter-kit/LCD-Screen.webp" width="200"  />|
| [ESP32 Dev Board](https://www.canadarobotix.com/products/2594)                                  | <img src="/img/docs/projects/esp32-starter-kit/ESP32.webp" width="200" />|

## Objectives:
- Sensor Data Acquisition: Utilize the MPU6050 to gather real-time accelerometer, gyroscope, and temperature data.
- Data Visualisation: Implement a graphical interface on the ST7735 TFT display to show sensor data.

## Hardware Assembly:
<img src="/img/docs/projects/esp32-starter-kit/hardware-assembly-3.png" width="700" />

## Pin Connection:
| LCD Pin | Description  | To ESP32 Pin |
|---------|--------------|--------------|
| GND     | Ground (0V)  | GND          |
| VCC_IN  | Power        | 5V           |
| SDA     | Serial Data  | P21          |
| SCL     | Serial Clock | P22          |

## Pseudocode:
```
	Include necessary libraries for MPU6050 and TFT display
Define TFT display pins
Initialize MPU6050 sensor object
Initialize TFT display object with specified pins
 
Function setup:
	Initialize TFT display with black background, white text color, size 1 text
	Initialize serial communication at 115200 baud rate
	Start MPU6050 sensor
	Configure MPU6050 settings for accelerometer, gyro, and bandwidth
	Wait for 100 milliseconds
 
Function loop:
	Clear the TFT display and reset cursor to top-left
	Declare sensor event variables for acceleration, gyro, and temperature
	Retrieve sensor data from MPU6050
 
	Display "Acceleration" label and values for X, Y, Z on TFT display
	Display a separator line
	Display "Rotation" label and values for X, Y, Z on TFT display
	Display a separator line
	Display "Temperature" label and value on TFT display
	Display a separator line
	Wait for 100 milliseconds
```

#### What you should see:
<img src="/img/docs/projects/esp32-starter-kit/ESP32-9.png" width="300" />

