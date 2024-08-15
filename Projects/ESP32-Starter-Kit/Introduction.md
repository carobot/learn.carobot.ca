---
title: Introduction to the ESP32
sidebar_position: 1
---

## What is the ESP 32?
<img src="/img/docs/projects/esp32-starter-kit/ESP32.webp" width="300" />
The [ESP32](https://www.canadarobotix.com/products/2594) is a range of cost-effective, energy-efficient microcontrollers that integrate Wi-Fi and dual-mode Bluetooth. This series includes microcontrollers that are powered by either the Tensilica Xtensa LX6 microprocessor in dual-core and single-core configurations, the Xtensa LX7
dual-core microprocessor, or a single-core RISC-V microprocessor. These microcontrollers feature in-built antenna switches, RF balun, power amplifier, low-noise receive amplifier, filters, and power management modules. The ESP32 is designed and developed by Espressif Systems, a company headquartered in Shanghai, China, and is produced using the 40 nm technology by TSMC. It serves as the successor to the ESP8266 microcontroller.
<img src="/img/docs/projects/esp32-starter-kit/ESP32-2.webp" width="300" />
<img src="/img/docs/projects/esp32-starter-kit/ESP32-3.webp" width="300" />
### What does it do?
The document serves as a comprehensive guide for various ESP32-related projects, ranging from
basic to intermediate levels. It provides step-by-step instructions on how to interact with the ESP32
using a computer as an access point. The guide includes detailed information on installing necessary
libraries, assembling hardware, writing firmware, and executing multiple projects that enhance
learning through practical application.

### Who is it for?
The guide is designed for individuals interested in learning and developing skills in microcontroller
applications, specifically using the ESP32. It is suitable for hobbyists, university students, and
professionals who want to explore the capabilities of ESP32 in creating interactive projects and
developing IoT solutions.

### What's the best thing about it?
The best thing about the ESP32 Starter Kit Guide is its structured approach to learning through
projects. Each project is documented with objectives, materials required, detailed assembly
instructions, and pseudocode to assist learners in understanding and implementing the concepts.
This hands-on approach is excellent for reinforcing learning and enabling users to build confidence in
handling electronics and programming microcontrollers.

For the next 6 projects, we will be using the NodeMCU 32S version which has the following features:

1. Compatible with Bluetooth v4.2 BR/EDR and BLE specification
2. Class-1, Class-2 and Class-3 transmitter without external power amplifier
3. Frequency range: 2.4 GHZ ~ 2.5 GHZ
4. 520 kB (8 kB RTC FAST Memory included) of on-chip SRAM for data and instructions
5. Integrated 802.11 b/g/n WIFI transceiver
6. Operating voltage: 2.2 to 3.6V operating range
7. Operating current: 80mA
8. Operating temperature range: -40°C ~ +80°C
Before jumping into the next section, let’s take a look at the ESP32 pin layout.
<img src="/img/docs/projects/esp32-starter-kit/ESP32-4.webp" width="600" />
