---
title: Introduction to the Wifi Tool
sidebar_position: 1
---
## Rationale
The Wi-Fi and how data packets are transferred between devices have been seen as a
“black-box” to most audiences today. This ESP-32 microcontroller based project will help
you unfold the technical layers that are abstracted away from us. This project is also a great
starting point to strengthen your hardware prototyping as well as software coding skills.
Most importantly, you will use it as a sandbox and adjust the hardware and software per
your liking.

## Overview
This prototype is a direct re-engineering to “Your Swiss Army Knife for Wireless Networks”
project by Cipher (2023). The major function of the device is to monitor network traffic on
the move. It monitors the Wi-Fi traffic, scans for nearby Wi-Fi APs, simulates beacon spams,
and detects authentication attacks.

## Goals
The goal of this project is to achieve an intermediate-level understanding of the ESP32
functionalities as well as to explore its Wi-Fi capabilities on an educational level. We will
utilize the on-board antenna of the development board to accomplish the wireless
connectivity, and program the microcontroller with the Arduino IDE via a micro-USB cable.

## Continual Development
Both the hardware and software presented in this project are nowhere close to
optimization. For example, the push-button debounce can be designed much more
effectively with proper implementation of a debouncing circuit, and the entire breadboard
prototype can be integrated onto a customized PCB with surface-mount components. On
the other side, the code base can be migrated onto a more robust platform such as the
Expressif IDF. However, these implementations will be left open to the end-user as
continual development ideas. Afterall, this is merely a starting point for educational needs.