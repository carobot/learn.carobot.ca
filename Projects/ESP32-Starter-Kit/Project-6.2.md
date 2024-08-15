---
title: "Project 6.2: Two-way Data Communication - IMU Sensor to PC"
sidebar_position: 10
---

## Overview:
In Project 6.2, we build up from previous projects (Project 4) by implementing a system that supports bidirectional communication between a computer and an ESP32. This program not only allows the computer to receive data but also to send specific commands to request different types of data. By utilizing UDP protocol for network communication, this project involves the ESP32 sending sensor data based on requests and the computer dynamically displaying and logging this data to a separate file.

## Materials:
| Component                                   | Image                                                         |
|---------------------------------------------|---------------------------------------------------------------|
| [10 DOF IMU Sensor](https://www.canadarobotix.com/products/5134) | <img src="/img/docs/projects/esp32-starter-kit/IMU.png" width="200" />|
| [ESP32 Dev Board](https://www.canadarobotix.com/products/2594)                                  | <img src="/img/docs/projects/esp32-starter-kit/ESP32.webp" width="200" />|
| [1.8" TFT LCD Screen](https://www.canadarobotix.com/products/3056)                                | <img src="/img/docs/projects/esp32-starter-kit/LCD-Screen.webp" width="200"  />|

## Objectives:
### Computer:
- UDP protocol: Integrate the computer with UDP protocol as a client that is capable of sending and receiving packages
- Command Handling: Implement a loop to continuously listen for user commands via the console and send those commands to the ESP32 to request specific a type of data (e.g., accelerometer, gyroscope or temperature data).
- Data Retrieval and Logging: Log the received sensor data into a file for storing and display it in real-time on a console
### ESP32:
- UDP protocol: Integrate the ESP32 with UDP protocol as server that is capable of sending and receiving packages
- C0mmand Handling: Implement a loop to continuously listen for computer commands via UDP network, then process those commands and send back the data that the computer wants
- Data Display and Sending: Process sensor data to display it on the screen and send it the computer continuously

## Hardware Assembly:
<img src="/img/docs/projects/esp32-starter-kit/hardware-assembly-3.png" width="700"  />

## Network Diagram:
<img src="/img/docs/projects/esp32-starter-kit/ESP32-17.png" width="700"  />

## Pseudocode:
#### ESP32:
```
Include necessary libraries for networking, graphics, and sensors
Define constants and settings for WiFi, UDP, and sensor components
Setup function:
    Initialize serial and display settings
    Configure WiFi as an access point and display IP details
    Begin listening for UDP packets on a specified port
    Initialize and configure the MPU6050 sensor
    Create tasks for sending data, receiving data, and displaying data
Receive Task:
    Continuously check for and read incoming UDP packets
    Parse received data to determine response type
Send Task:
    Continuously check response type and send appropriate sensor data via UDP
    Handle and send data based on different types of data requests (acceleration, rotation,
    temperature)
Display Task:
    Continuously update and display sensor data on the TFT screen
    Display system and network status
Main Loop:
    Perform no operations, as all functionality is handled within tasks
```
#### Client:
```
Include necessary libraries
Define constants and global variables
    Define signal handling function to stop the program on SIGINT or SIGTSTP
    Define main function:
    Open log file for writing
    If file opening fails, terminate the program
    Configure client socket address structure
    Configure server socket address structure
    Convert and set server IP address
    Create UDP socket
    Set socket to non-blocking mode
    Bind the socket to the client's address
    Connect the socket to the server's address
    Create a thread for sending data
    Enter a loop that runs until the program is signaled to stop:
    Wait for incoming data on the socket
    If data is received, write it to the file
    On loop exit, join the send thread and close the file and socket
Define send function for the thread:
    Continuously read commands from the user
    Send these commands to the server
    If the user enters "0", stop the loop and exit the thread
```

## Instructions:
1. Download project6_2.ino
2. Change your ESP32 name and password for the access point if you want
3. Verify and upload project6_2.ino into the ESP32
4. Connect your computer to the ESP32 access point
5. Download client file from the folder
6. On your terminal, go to the client file and run:
```
make clean all
./client
```
7. Create a new terminal, go to the client file and run:
```
Tail -f log.txt
```
#### What you should see:
<img src="/img/docs/projects/esp32-starter-kit/ESP32-18.png" width="300"  />
<img src="/img/docs/projects/esp32-starter-kit/ESP32-19.png" width="700"  />
