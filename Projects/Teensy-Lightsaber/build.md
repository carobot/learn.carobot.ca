---
title: Building the Lightsaber
sidebar_position: 2
---
### Materials
| Component                           | Count | Image |
|-------------------------------------|-------|-------|
| [Teensy 4.1](https://www.canadarobotix.com/products/2588) | 1     | <img src="/img/docs/projects/teensy-lightsaber/lightsaber-1.webp" width="200" /> |
| [Teensy Propshield](https://www.canadarobotix.com/products/2705) | 1     | <img src="/img/docs/projects/teensy-lightsaber/lightsaber-2.webp" width="200" /> |
| [Breakaway Female Headers (Machine)](https://www.canadarobotix.com/products/1645)  | 2     | <img src="/img/docs/projects/teensy-lightsaber/lightsaber-3.webp" width="200" /> |
| [Breakaway Male Headers (Machine)](https://www.canadarobotix.com/products/434)    | 2     | <img src="/img/docs/projects/teensy-lightsaber/lightsaber-4.webp" width="200" /> |
| [Wires](https://www.canadarobotix.com/products/2924) | 1     | <img src="/img/docs/projects/teensy-lightsaber/lightsaber-5.webp" width="200" /> |
| [Resistor (2200 Ohm)](https://www.canadarobotix.com/products/849) | 1     | <img src="/img/docs/projects/teensy-lightsaber/lightsaber-6.webp" width="200" /> |
| [Micro SD card](https://www.canadarobotix.com/products/2140) | 1     | <img src="/img/docs/projects/teensy-lightsaber/lightsaber-7.webp" width="200" /> |
| [2 switch buttons](https://www.canadarobotix.com/products/545) | 2     | <img src="/img/docs/projects/teensy-lightsaber/lightsaber-8.webp" width="200" /> |


### Building the Lightsaber

The wiring for the lightsaber can be found in the diagram below:


### Programming the Lightsaber

The program for the lightsaber uses a state machine to achieve the functionality of a lightsaber. There are 3 main states: ON, ON STANDBY, and OFF. The state changes when the power button is pressed. The second button changes the colour of the lightsaber. The IMU will detect one of 3 movements: twist, swing, and clash. This prompts the speaker to output different sound effects based on movement detected. The pseudocode to implement this state machine is defined below:

```
state = OFF

while true:
    if state == OFF:
        if Button1_Press:
            PlaySound("Saber On")
            TurnOnBladeLEDs()
            state = ON_STANDBY

    elif state == ON_STANDBY:
        PlaySound("Saber Hum")
        if Gyroscope_Delta:
            PlaySound("Twirl")
        if Accelerometer_Delta_Slow:
            PlayRandomSound("Saber Swing", 1, 3)
        if Accelerometer_Delta_Rapid:
            PlaySound("Clash")
        if Button2_Press:
            ChangeLEDColor()
        if Button1_Press:
            PlaySound("Saber Off")
            TurnOffBladeLEDs()
            state = OFF
```

