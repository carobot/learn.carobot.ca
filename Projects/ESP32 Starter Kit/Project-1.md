---
title: "Project 1: Environment Setup"
sidebar_position: 3
---

## Overview:
This project is meant to help set up the environment before we continue with more complex projects.
It is important to download and install Arduino IDE first. After that, you run a program to print “Hello
World”

## How to install library for ESP32 board:
1. Go to tools > Board > Board Managers and then find and install esp32 by Espressif
Systems.
2. After installing, again, go to tools > Board > es32 > ES32 Dev Module

## Pseudocode:
Function setup:
```
Initialize serial communication with baud rate of 115200
```
Function loop:
```
Repeat indefinitely:
    Wait for 3000 milliseconds
    Print "Hello world" to the serial output
```

