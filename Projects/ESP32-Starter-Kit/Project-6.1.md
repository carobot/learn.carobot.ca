---
title: "Project 6.1: Two-way Data Communication - String Gauge to PC"
sidebar_position: 9
---

## Overview:
Project 6.1 involves creating a system where an ESP32 wirelessly transmits strain gauge sensor value to a computer. This project is built upon the earlier setup (we can reuse project 4.ino) by integrating wireless data transmission, allowing remote monitoring of sensor data.

## Material:
| Component                                   | Image                                                         |
|---------------------------------------------|---------------------------------------------------------------|
| [Strain Gauge](https://www.canadarobotix.com/products/3050) | <img src="/img/docs/projects/esp32-starter-kit/strain-gauge.png" width="200" />|
| [HX711 Amplifier](https://www.canadarobotix.com/products/2318) | <img src="/img/docs/projects/esp32-starter-kit/HX711.png" width="200" />|
| [ESP32 Dev Board](https://www.canadarobotix.com/products/2594)                                  | <img src="/img/docs/projects/esp32-starter-kit/ESP32.webp" width="200" />|
| [1.8" TFT LCD Screen](https://www.canadarobotix.com/products/3056)                                | <img src="/img/docs/projects/esp32-starter-kit/LCD-Screen.webp" width="200"  />|

## Objectives:
### Computer:
-  Socket Creating and Configuration: Create an UDP socket and configure it for non-blocking mode.
- Connection Setup: Set up the address and port details for both the client and the server (ESP32), and bind the socket to the client’s address.
- Receiving Data: Receive data continuously from the ESP32 and display it on the console.
### ESP32:
- Sensor and Display Initialization: Set up the HX711 load cell for weight measurement and initialize the TFT display
- Network Configuration: Configure the ESP32 to act as a WiFi access point and start a UDP server to send data to the client defined by its IP and PORT.
- Data Handling and Transmission: Measure the weight, display it on the TFT and send this data to the client.

## Hardware Assembly
<img src="/img/docs/projects/esp32-starter-kit/hardware-assembly-2.png" width="700"  />

## Network Diagram
<img src="/img/docs/projects/esp32-starter-kit/ESP32-15.png" width="700"  />

## Pseudocode:
#### Client:
```
Include necessary libraries
Define constants for buffer length, server and client ports, and server IP
Initialize signal handlers for clean shutdown
 
Main:
	Initialize socket and server/client structures
	Create and configure UDP socket
	Bind the socket to the client's address
	Connect the socket to the server's address
	Enter a loop:
    	Receive data from the server
    	Print received data to console
    	Check for "quit" command to terminate loop
	Close the socket and terminate
```
#### ESP32:
```
	Include necessary libraries for WiFi, HX711, and TFT display
Define constants for pin configurations and network settings
 
Setup:
	Initialize serial communication and TFT display
	Configure WiFi access point and display network details
	Initialize and configure HX711 load cell
	Start UDP server
	Begin task for sending data
 
Send Task:
	Loop continuously:
    	Measure weight with HX711
    	Format and send weight data via UDP to the client
    	Delay briefly
 
Loop:
	Measure weight
	Display weight on TFT display
	Delay briefly to update display
```
## Instructions:
1. Download project6_1.ino
2. Change your ESP32 name and password for the access point if you want
3. Verify and upload the instruction into the ESP32
4. Connect your computer to the ESP32 access point
5. Download client file from the folder
6. On your terminal, go to the client file and run:
```
make clean all
./client
```
7. To proceed measuring an object, we need to calibrate it first, so visit project 4 to see how we can calibrate a known weight object.
8. The weight of the object should be logged out to the screen

#### What you should see:
<img src="/img/docs/projects/esp32-starter-kit/ESP32-16.png" width="700" />

