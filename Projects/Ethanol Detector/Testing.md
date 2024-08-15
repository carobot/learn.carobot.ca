---
title: Testing and Interpretation
sidebar_position: 4
---

We use an OLED to display messages depending on their alcohol level:
1. #### If value is less than 200:

    Display: "Negligible alcohol level."
2. #### If value is between 200 and 279: 

    Display: "Low alcohol level" 
3. #### If value is between 280 and 349: 

    Display: "Moderate alcohol level" 
4. #### If value is between 350 and 449:

    Display: "High alcohol level"
5. #### If value is 450 or higher: 

    Display: "Extreme alcohol level"

The OLED provides an analog reading that correlates with the alcohol vapour concentration in the air surrounding the sensor.

The MQ3 alcohol sensor detects alcohol vapour in the air and outputs an analog voltage signal proportional to the concentration of alcohol. This analog voltage is then converted into a digital value  using the analog-to-digital converter (ADC) of the microcontroller.

However, calibrating this raw value from the sensor to obtain an accurate BAC or alcohol concentration typically requires additional calibration and testing. It's not a direct conversion from the sensor's output to BAC.

To estimate BAC or alcohol concentration, you would typically need to calibrate the sensor with known alcohol concentrations in a controlled environment and correlate the sensor's output with those concentrations. This calibration process can vary depending on factors like environmental conditions, sensor ageing, and the specific alcohol types being detected.

The maximum concentration of alcohol in the blood is achieved approximately 30-120 minutes after drinking; then alcohol gradually begins to "weather off". The human body processes alcohol at an average rate of 7-10 grams per hour. However, it also depends on whether the person ate before drinking, is eating while drinking, ate immediately after, or consumed any other food or drink that can help neutralise the alcohol in their system.  Knowing this, it's easy to calculate when the blood alcohol concentration reaches an acceptable level again.

The sensor's idle reading can also vary based on environmental factors, such as interference from nearby electronic devices.
