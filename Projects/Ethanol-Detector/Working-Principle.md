---
title: Working Principle
sidebar_position: 3
---

### MQ3 Alcohol Sensor
The [MQ3 sensor](https://www.canadarobotix.com/products/2175) is one of the most widely used in the MQ sensor series. It is a Metal Oxide Semiconductor (MOS ) sensor. Metal oxide sensors are also known as Chemiresistors because sensing is based on the change in resistance of the sensing material when exposed to alcohol.

<img src="/img/docs/projects/ethanol-detector/mq3-sensor-2.jpg" width="200" />

The MQ3 alcohol sensor operates on 5V DC and consumes approximately 800mW. It can detect alcohol concentrations ranging from 25 to 500 ppm.

1. #### What's MQ3 Sensor?
It's a gadget in a family of sensors called MQ, from the first sensor of its type, Methane Quality. It's like a special nose that can detect alcohol in the air.

2. #### How does it Work?
Inside, it has a material called Metal Oxide Semiconductor (MOS), which changes its resistance when it interacts with alcohol. This change indicates the level of alcohol present.

3. #### Power and Range
It needs 5 volts of electricity to work and uses about 800 milliwatts. It can sniff out alcohol levels from very little (25 parts per million) to quite a lot (500 parts per million) as a ratio of one gas to the other.

## Internal structure of MQ3 Alcohol Sensor
The MQ3 is a heater-driven sensor. It is therefore covered with two layers of fine stainless steel mesh known as an “anti-explosion network”. It ensures that the heater element inside the sensor does not cause an explosion because we are sensing flammable gas (volatiles).

<img src="/img/docs/projects/ethanol-detector/ethanol-4.jpg" width="400" />

It also protects the sensor and filters out suspended particles, allowing only gaseous elements to pass through the chamber.

1. #### Heater-Powered Sensor
 MQ3 sensor works using a heater inside it. This heater helps it to detect alcohol in the air.

2. #### Safety Measure
 To keep things safe, it's wrapped with two layers of fine steel mesh. This mesh is like a protective shield. It stops the heater from causing any accidents because alcohol can be flammable.

3. #### Filtering
 Apart from safety, these layers also act like filters. They keep out any solid bits floating in the air, allowing only the alcohol vapors to go through.

<img src="/img/docs/projects/ethanol-detector/ethanol-5.jpg" width="400" />

Two (H) of the six leads are in charge of heating the sensing element and are linked together by a Nickel-Chromium coil (a well-known conductive alloy).
The remaining four signal-carrying leads (A and B) are connected with platinum wires. These wires are connected to the body of the sensing element and convey slight variations in the current flowing through the sensing element.

1. #### How it Looks Inside
Imagine it like a tiny star with six legs. Two legs heat up the sensor, and the other four help to notice the alcohol. 

<img src="/img/docs/projects/ethanol-detector/ethanol-6.jpg" width="400" />

The ceramic substrate, on the other hand, improves heating efficiency and ensures that the sensor area is continuously heated to the working temperature.

#### What Makes it Work?
It's made of special materials like tin dioxide and ceramic. These materials react to alcohol and help the sensor to sense it.

![MQ-3 Sensor Working](/img/docs/projects/ethanol-detector/ethanol-gif-1.gif)

1. #### Heating up:
 Inside the sensor, there's a special layer called Tin Oxide (SnO2) that gets really hot. When it's hot, it attracts oxygen from the air around it.

2. #### Clean Air:
Normally, when there's no alcohol around, the oxygen sticks to the SnO2 layer. This makes a kind of block that stops electricity from flowing through the sensor.

3. #### Alcohol Presence: 
 But when alcohol is in the air, it grabs onto some of the oxygen instead of the SnO2 layer. This makes the block less strong, so electricity can pass through the sensor more easily.

So, when there's alcohol, it changes how electricity flows through the sensor, and that's how the MQ3 sensor can detect alcohol in the air.

![MQ3 Alcohol Sensor Module Working Animation](/img/docs/projects/ethanol-detector/ethanol-gif-2.gif)

The higher the concentration of alcohol in the air, the higher the output voltage; the lower the concentration, the lower the output voltage. 

