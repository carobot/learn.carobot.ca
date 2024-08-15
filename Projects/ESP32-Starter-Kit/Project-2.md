---
title: "Project 2: 'Hello world' on Screen"
sidebar_position: 4
---

## Overview:
In this project, we will integrate a TFT LCD display with ESP32 using specialized libraries to manage
graphics and display some strings to the screen. You should attempt to write code using pseudocode
and library methods I provided in this repository (#to be included).

## Materials:
| Component                                   | Image                                                         |
|---------------------------------------------|---------------------------------------------------------------|
| [ESP32 Dev Board](https://www.canadarobotix.com/products/2594)                                  | <img src="/img/docs/projects/esp32-starter-kit/ESP32.webp" width="200" />|
| [1.8" TFT LCD Screen](https://www.canadarobotix.com/products/3056)                                | <img src="/img/docs/projects/esp32-starter-kit/LCD-Screen.webp" width="200"  />|

### Objectives:
- Interface with a TFT Display: Understand the wiring and software configuration needed to drive
an Adafruit ST7735 TFT display using ESP32 microcontroller
- Implement Basic Graphics Programming: Use the Adafruit GFX library to display text and
manage simple graphics

### Hardware Assembly
<img src="/img/docs/projects/esp32-starter-kit/hardware-assembly.png" width="700"  />

### Pin Connection:
| LCD Pin | Description    | To ESP32 Pin |
|---------|----------------|--------------|
| 1. RST  | Reset          | P27          |
| 2. CS   | Chip Select    | P5           |
| 3. D/C  | Data/Cmd       | P32          |
| 4. DIN  | MOSI Slave     | P23          |
| 5. CLK  | Clock          | P18          |
| 6. VCC  | Power          | 5V           |
| 7. BL   | Blacklight     | 5V           |
| 8. GND  | Ground (0V)    | GND          |

### Pseudocode:
```
Include Adafruit_GFX and Adafruit_ST7735 libraries for display control
Include SPI library for communication
Define pin connections for TFT display
Create TFT display object with specified control pins
```
Function setup:
```
Initialize the TFT display with specific configuration
Clear the display screen to black
Set text color to white
Set text size to normal
Set cursor position to top-left corner of the display
Display "Hello World" on the screen
Wait for 5 seconds
```
Function loop:
```
Do nothing (endless loop)
```
#### What you should see:

