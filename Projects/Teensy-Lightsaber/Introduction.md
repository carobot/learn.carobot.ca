---
title: "Introduction to the Teensy Lightsaber"
sidebar_position: 1
---
There are are few more iconic items from film that the Lightsaber from the Star Wars
series. The sound, sight, and drive they provide to the plot cannot be mistaken with any other
film prop. Every cardboard tube and straight stick becomes an elegeant weapon for a more
civilized time in the hands of a fan.
It is with that dedication and love that we approached developing an in-house design
for the electronics a prop Lightsaber. There are several electronic controls for Lightsabers on
the market, most notably the Proffie board, however we think our design will allow for greater
customization of behavior. The ability to not only select, but edit and modify how sound files
are used, as well as modifying light patterns is beyond the scope of most the market-ready
boards.

### Design Features
This design features the [Teensy 4.1](https://www.canadarobotix.com/products/2588) and the matching [Teensy Propshield](https://www.canadarobotix.com/products/2705). The Teensy
series of microcontrollers boast dozens more pins than the Arduino or Raspberry Pi boards,
with more user-defined protocols. The form factor is also a consiteration, and the Teensy,
living up to its name, is only 61mm long and 18mm wide, making it excaption for embedded
roles where size is a premium. In that the screen-accurate Lightsabers are a maximum 50mm
wide outer diameter, this board is the only suitable choice so build on. The Teensy 4.1 also
includes a micro SD card slot, meaning the sound files to be played can be saved on the SD
card, saving valuable onbaord memory, and they can be changed easily by swapping SD
cards. The filenames of the sounds must remain the same, unless the code is changed to
accomodate new sound files.
The Teensy Prop shield is both an IMU, with gyroscope and 3-axis accelerator, and
and an RGB LED driver and 2 Watt single channel amplifier. The Teensy has libraries
specifically for the Propshield IMU but can also accept Arduino libraries for LED control. The
amplifier and soundboard have a GUI based tool that can be used to program sound triggers
for actions or they can be coded by the user, depending on their preference.
A singular drawback to these two boards is in the sound operation. The Teensy 4.x
series board removed the DAC from the 3.x series, meaning the Propshiel no longer has a
mating pin on the Teensy board. The Teensy 4.x series does have 2 Medium Quality Sound
pins, on pins 10 and 12, and we used a jumper wire to connect one of these to the input pin
on Propshield. This would normally degrade the sound quality, but Lightsaber sounds are by
nature low resolution, and may in fact be improved by increased noise and distortion.
The rest of the materials were selected from off-the-shelf components in the shop: waterproof
RGB LEDs, 18650 lithium battery, 5v up-converter, switches. We selected machinehead
pinheaders in order to maintain a low profile with the stacked boards.