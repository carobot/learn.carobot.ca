---
sidebar_position: 15
---
# 15. Water Level Detection Sensor
The water level detection sensor is a fundamental component for monitoring water levels in various systems. It provides accurate readings that can be used to automate processes, prevent overflow, or trigger alerts when water levels reach specific thresholds.

## Materials
| Component                                   | Image                                                         |
|---------------------------------------------|---------------------------------------------------------------|
| [Breadboard](https://www.canadarobotix.com/products/160)                                  | <img src="/img/docs/UNO-R4-Starter-Kit/breadboard.webp" width="200" />|
| [Jumper wires](https://www.canadarobotix.com/products/922)                                | <img src="/img/docs/UNO-R4-Starter-Kit/jumper-wires.webp" width="200"  />|
| [Arduino Uno R4 Minima](https://www.canadarobotix.com/collections/featured-1/products/3060)| <img src="/img/docs/UNO-R4-Starter-Kit/arduino-r4-minima.webp" width="200" />|
| [Water Level Detection Sensor Module](https://www.canadarobotix.com/products/1756)         | <img src="/img/docs/UNO-R4-Starter-Kit/wlds.webp" width="200"/>|

## Instructions

1. Make the following connections using the breadboard and jumper wires.
#### Connections
(Water Level Detection Sensor Module to Arduino R4 Minima)
- S terminal to pint A0
- Positive terminal (+) to 5V
- Negative terminal (-) to GND
<img src="/img/docs/UNO-R4-Starter-Kit/WLDS.png" width="500" />

2. Paste the following code into your main Arduino sketch:
#### Code
```cpp
int adc_id = 0; // Water Sesnsor (A0) on Arduino R4 Minima
int HistoryValue = 0; // To store the previous ADC value
char printBuffer[128]; // Buffer to store the formatted string

void setup() {
  Serial.begin(9600); // Initialize serial communication at 9600 baud
}

void loop() {
  int value = analogRead(adc_id); // Read the analog value from pin A0

  // Check if the difference between the current and previous value is greater than 10
  if (((HistoryValue >= value) && ((HistoryValue - value) > 10)) || ((HistoryValue < value) && ((value - HistoryValue) > 10))) {
    sprintf(printBuffer, "ADC%d level is %d\n", adc_id, value); // Format the string
    Serial.print(printBuffer); // Print the formatted string to the serial monitor
    HistoryValue = value; // Update the previous value with the current value
  }

  delay(1000); // Small delay to avoid overwhelming the serial output
}
```

3. Connect your Arduino to your laptop using a USB-C cable and upload the code to the arduino.

4. Test! Watch the serial monitor as you submerge the water level detection sensor into water.

|Prev|Next|
|---|---|
|[14. PIR Motion Sensor](HCSR312-AM312.md)|[16. DS1307 RTC Module](DS1307-RTC-Module.md)|