---
sidebar_position: 26
---
# 26. DC Motor and Relay
In this tutorial, we'll guide you through the process of controlling a DC motor using an Arduino R4 Minima and an L293D motor driver chip. DC motors are widely used in robotics and various electronic projects due to their simplicity and reliability. With the help of the L293D, a versatile H-bridge motor driver, you can easily control the direction and speed of the motor using an Arduino.

## Materials
| Component                                   | Image                                                         |
|---------------------------------------------|---------------------------------------------------------------|
| [Breadboard](https://www.canadarobotix.com/products/160)                                  | <img src="/img/docs/UNO-R4-Starter-Kit/breadboard.webp" width="200" />|
| [Jumper wires](https://www.canadarobotix.com/products/922)                                | <img src="/img/docs/UNO-R4-Starter-Kit/jumper-wires.webp" width="200"  />|
| [Arduino Uno R4 Minima](https://www.canadarobotix.com/collections/featured-1/products/3060)| <img src="/img/docs/UNO-R4-Starter-Kit/arduino-r4-minima.webp" width="200" />|
| [3-6V Motor with Fan Blade](https://www.canadarobotix.com/products/2207)                   | <img src="/img/docs/UNO-R4-Starter-Kit/DC-Motor.jpg" width="200" />|
| [L293D Motor Driver](https://www.canadarobotix.com/products/2473)                          | <img src="/img/docs/UNO-R4-Starter-Kit/L293.jpg" width="200" height="200" />|



## Instructions

1. Make the following connections using the breadboard and jumper wires.

#### L293D Pin Configuration
- Vcc1 (Pin 16): Connect to 5V from the Arduino.
- Vcc2 (Pin 8): Connect to 5V from the Arduino.
- ENABLE1 (Pin 1): Connect to the Arduino pin defined as ENABLE (Pin 5 in the code).
- INPUT1 (Pin 2): Connect to the Arduino pin defined as DIRA (Pin 3 in the code).
- INPUT2 (Pin 7): Connect to the Arduino pin defined as DIRB (Pin 4 in the code).
- EN 2 (Pin 9): Connect to 5V from the Arduino.

#### Arduino to L293D:
- GND: Connect to L293D Pins 4, 5, 12, and 13 (GND).

#### Motor Connections:
- Connect one terminal of the motor to L293D Pin 3 (OUTPUT1).
- Connect the other terminal of the motor to Pin 6 (OUTPUT2)
 <img src="/img/docs/UNO-R4-Starter-Kit/DC-Motor.png" width="600" />                     

2. Paste the following code into your main Arduino sketch:
#### Code
```cpp
#define ENABLE 5
#define DIRA 3
#define DIRB 4

int i;
 
void setup() {
  //---set pin direction
  pinMode(ENABLE,OUTPUT);
  pinMode(DIRA,OUTPUT);
  pinMode(DIRB,OUTPUT);
  Serial.begin(9600);
}

void loop() {
  //---back and forth example
    Serial.println("One way, then reverse");
    digitalWrite(ENABLE,HIGH); // enable on
    for (i=0;i<5;i++) {
    digitalWrite(DIRA,HIGH); //one way
    digitalWrite(DIRB,LOW);
    delay(500);
    digitalWrite(DIRA,LOW);  //reverse
    digitalWrite(DIRB,HIGH);
    delay(500);
  }
  digitalWrite(ENABLE,LOW); // disable
  delay(2000);

  Serial.println("fast Slow example");
  //---fast/slow stop example
  digitalWrite(ENABLE,HIGH); //enable on
  digitalWrite(DIRA,HIGH); //one way
  digitalWrite(DIRB,LOW);
  delay(3000);
  digitalWrite(ENABLE,LOW); //slow stop
  delay(1000);
  digitalWrite(ENABLE,HIGH); //enable on
  digitalWrite(DIRA,LOW); //one way
  digitalWrite(DIRB,HIGH);
  delay(3000);
  digitalWrite(DIRA,LOW); //fast stop
  delay(2000);

  Serial.println("PWM full then slow");
  //---PWM example, full speed then slow
  analogWrite(ENABLE,255); //enable on
  digitalWrite(DIRA,HIGH); //one way
  digitalWrite(DIRB,LOW);
  delay(2000);
  analogWrite(ENABLE,180); //half speed
  delay(2000);
  analogWrite(ENABLE,128); //half speed
  delay(2000);
  analogWrite(ENABLE,50); //half speed
  delay(2000);
  analogWrite(ENABLE,128); //half speed
  delay(2000);
  analogWrite(ENABLE,180); //half speed
  delay(2000);
  analogWrite(ENABLE,255); //half speed
  delay(2000);
  digitalWrite(ENABLE,LOW); //all done
  delay(10000);
}

```

3. Connect your Arduino to your laptop using a USB-C cable and upload the code to the arduino.

4. Test! Watch the DC motor run in different directions and speed. Ensure that the code is functioning properly with the serial monitor print statements.

# Relay

#### Do not change any wiring for the next steps.

5. Open the Arduino IDE and paste the following code into your main Arduino Sketch.
```cpp
#define ENABLE 5
#define DIRA 3
#define DIRB 4

int i;

void setup() {
  //---set pin direction
  pinMode(ENABLE, OUTPUT);
  pinMode(DIRA, OUTPUT);
  pinMode(DIRB, OUTPUT);
  Serial.begin(9600);
}

void loop() {

  //---relay example
  digitalWrite(ENABLE, HIGH); // enable on
  for (i = 0; i < 5; i++)
  {
    Serial.println("spin");
    digitalWrite(DIRA, HIGH); //motor spins
    digitalWrite(DIRB, LOW);
    delay(2000);
    Serial.println("stop");
    digitalWrite(DIRA, LOW); //motor stops
    digitalWrite(DIRB, HIGH);
    delay(2000);
  }
}
```

6. Repeat Steps 3 and 4.