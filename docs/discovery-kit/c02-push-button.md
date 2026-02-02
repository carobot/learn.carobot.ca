---
title: Circuit 02 - Push Buttons
sidebar_position: 5
---

# Circuit 02 - Push Buttons

## Background

In this circuit, we’ll be looking at one of the most common and simple inputs – a push button. When the button is pushed, it closes a circuit. Depending if the voltage provided is 5V or 0V, the Arduino reads this and reacts accordingly. In this circuit, you will also use a pull-down resistor, which helps clean up the voltage and prevents false readings from the button.

<img src="\img\docs\discovery_kit\c02_diagram.png" />

## Parts List
| | Name | Quantity |
| --- | --- | --- |
| <img src="\img\docs\discovery_kit\parts_led_green.png" height="100px" /> | LED (Any colour) | 1 |
| <img src="\img\docs\discovery_kit\parts_resistor_330.png" height="100px" /> | 330Ω Resistor (Orange-Orange-Brown) | 1 |
| <img src="\img\docs\discovery_kit\parts_jumper.png" height="100px" /> | Jumper Wire | 5 |
| <img src="\img\docs\discovery_kit\parts_push_button.png" height="100px" /> | Push Button | 1 |
| <img src="\img\docs\discovery_kit\parts_resistor_10k.png" height="100px" /> | 10kΩ Resistor (Black-Brown-Orange) | 1 |

## Circuit Diagram

<img src="\img\docs\discovery_kit\c02_circuit.png" width="50%" />

## Breadboard Diagram

<img src="\img\docs\discovery_kit\c02_breadboard.png" />

## Code
```c
void setup() {
  pinMode(11, OUTPUT);
  pinMode(2, INPUT);
}
void loop() {
  if (digitalRead(2) == HIGH) {
    digitalWrite(11, HIGH);
  } else {
    digitalWrite(11, LOW);
  }
}
```

## What You Should See

You should see the LED turn on and off as you press the buttons. If it isn't working, make sure you have assembled the circuit correctly and verified and uploaded the code to your board, or see the troubleshooting tips below.

## Troubleshooting

### *Light Not Turning On*?
Since the pushbutton is square, it is easy to put it in the wrong way. Give it a 90-degree twist and see if it starts working.

### *Light Always Turned On*?
This happens if you connect the 10kΩ resistor to the 5V rail instead of the GND rail, and the other leg of the push button to the GND instead of the 5V rail.

## Real World Application

The buttons used here are similar to the buttons used in most video game controllers.

## The Code Explained

| Code | Explanation |
| --- | --- |
| ```if (condition) { ``` | The "if" statement is a fundamental conditional statement in any program. If the test condition is TRUE, the first part of the code will be executed. |
| ```else { ``` | If the test condition is FALSE, the second part of the code will be executed. |
| ```digitalRead(2) == HIGH``` | ```digitalRead``` reads the input of a pin. Since we are using pin 2 as an INPUT from the pushbutton, we can see if the button got pushed or not. An input of ```HIGH``` means the button was pressed.

## Pull-up/down resistor to stable input

Let’s say you have a microcontroller unit (MCU) with one pin configured as an input. If there is nothing connected to the pin and your program reads the state of the pin, will it be high (VCC) or low (0V)? It is difficult to tell. This phenomenon is referred to as floating. To prevent this unknown state, a pull-up or pull-down resistor will ensure that the pin is in either a high or low state, while also using a low amount of current.

<img src="\img\docs\discovery_kit\c02_pull_up_or_pull_down_diagram.png" />

With a pull-up resistor, the input pin will read a high state when the switch is open. In other words, a small amount of current is flowing between VCC and the input pin (not to ground), thus the input pin reads close to VCC. When the switch is closed, it connects the input pin directly to ground. The current flows through the resistor to ground, thus the input pin reads a low state. With a pull-down resistor, everything is just reversed.

Keep in mind, if the resistor weren't there, your switch would connect Vcc to ground directly. This is known as a **short** and is very bad.

## Exercise

1. Modify the code so the LED is normally ON and pushing the button will turn the LED off instead.
2. Modify the code so the LED is normally OFF, and pushing the button will cause the LED to blink in a sequence.

|Prev|Next|
|---|---|
| [Circuit 01 - Blinking an LED](c01-blinking-a-led.md) | [Circuit 03 – Buzzers](c03-buzzer.md) |