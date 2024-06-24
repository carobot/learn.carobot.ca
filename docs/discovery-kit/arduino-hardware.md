---
title: Getting Started – Arduino Uno and Hardware
sidebar_position: 3
---

# Getting Started – Arduino Uno and Hardware

First, let’s understand a bit more about the Arduino Uno and some of the components of this kit. The header pins are one of the most important parts for putting our example circuits together. Take a moment and locate the input/output ports of your Arduino Uno.

## Arduino Uno

![](/img/docs/discovery_kit/hardware_arduino.png)

| Label | Description |
| --- | --- |
| ![](/img/docs/discovery_kit/hardware_1.png) | **Power In (5.5x2.1mm Barrel Jack)** - Can be used with either a 9V-12V wall-wart or battery. |
| ![](/img/docs/discovery_kit/hardware_2.png) | **Power In (USB Port)** - Provides power and communicates with your board when plugged into your computer via USB. |
| ![](/img/docs/discovery_kit/hardware_3.png) | **LED (RX: Receiving)** - This shows when the Arduino is receiving data (such as when being programmed). |
| ![](/img/docs/discovery_kit/hardware_4.png) | **LED (TX: Transmitting)** - This shows when your Arduino is transmitting data (such as when running a program). |
| ![](/img/docs/discovery_kit/hardware_5.png) | **LED (Pin 13: Troubleshooting)** - This LED is incorporated into your sketch to show if your program is running properly. |
| ![](/img/docs/discovery_kit/hardware_6.png) | **Pins (ARef, Ground, Digital, Rx, Tx)** - These various pins can be used for inputs, outputs, power, and ground. <br/><br/>**Pins 3, 5, 6, 9, 10, and 11** - These six digital pins can be programmed for analog output. The details on how to use these pins are discussed more in Project #4. |
| ![](/img/docs/discovery_kit/hardware_7.png) | **LED (Indicates Arduino is ON)** - This is a simple power indicator LED. |
| ![](/img/docs/discovery_kit/hardware_8.png) | **Reset Button** - This is a way to manually reset your Arduino, which makes your code restart. |
| ![](/img/docs/discovery_kit/hardware_9.png) | **ICSP Pins (Uploading Code without Bootloader)** - This is for "In-Circuit Serial Programming," used if you want to bypass the boot loader. |
| ![](/img/docs/discovery_kit/hardware_10.png) | **Pins (Analog In, Power In, Ground, Power Out, Reset)** - These various pins can be used for inputs, outputs, power, and ground. |

<img src="\img\docs\discovery_kit\hardware_pins.png" width="50%" />

## Breadboard

![](/img/docs/discovery_kit/hardware_breadboard.png)

| Label | Description |
| --- | --- |
| ![](/img/docs/discovery_kit/hardware_positive.png) | **Power Rail** - Each + sign runs power anywhere in the vertical column. |
| ![](/img/docs/discovery_kit/hardware_negative.png) | **Ground Rail** - Each - sign runs to ground anywhere in the vertical column. |
| ![](/img/docs/discovery_kit/hardware_row.png) | **Horizontal Rows** - Each of these rows numbered 1-30 are comprised of five horizontal sockets. Components placed in the same row will be connected in a circuit when power is running. <br/><br/>For example, “a1” is connected to “e1” but not connected to “f1”, “a2” or “f2”. |

|Prev|Next|
|---|---|
| [Introduction - What is Arduino?](introduction.md) | [Getting Started - Arduino IDE](arduino-ide.md) |