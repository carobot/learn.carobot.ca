---
title: Getting Started - Arduino IDE
sidebar_position: 4
---

# Getting Started - Arduino IDE

In order to get your Arduino up and running, you’ll need to download the Arduino IDE (Integrated Development Environment). It will allow you to program the Arduino to do exactly what you want. It’s an editor for writing programs.

## 1. Download the IDE

[arduino.cc/en/Main/Software](https://www.arduino.cc/en/Main/Software)

Depending on the OS (Operating System) you have, download the latest IDE (not the BETA) under “download” in the middle of the page.

## 2. Connect your Arduino to your Computer

Use the USB A-to-B cable provided (or any other USB A-to-B cable) to connect the Arduino to one of your computer’s USB inputs.

## 3. Install Drivers

| Platform | Driver |
| --- | --- |
| ![](/img/docs/discovery_kit/ide_windows.png) | Windows will try to install a driver for the Arduino by itself but the process with fail. That’s alright because Windows don’t have the Arduino driver. To install the driver, you’ll have to manually find it for Windows. Go to the following web address for more instruction:<br/><br/>[http://arduino.cc/en/Guide/Windows](http://arduino.cc/en/Guide/Windows) |
| ![](/img/docs/discovery_kit/ide_mac.png) | No driver is needed. But you can still go to the following web address for more details:<br/><br/>[http://arduino.cc/en/Guide/MacOSX](http://arduino.cc/en/Guide/MacOSX) |
| ![](/img/docs/discovery_kit/ide_linux.png) | Go to the following web address for more instructions:<br/><br/>[http://arduino.cc/en/Guide/Linux](http://arduino.cc/en/Guide/Linux) |

## 4. Open the Arduino IDE

Open the Arduino IDE software on your computer, arduino.exe, in the folder where you installed the Arduino software. Get familiar with the interface because this is where you are going to write the code for your Arduino project.

![](/img/docs/discovery_kit/ide_sketch.png)

### Important Command

| Open | Verify | Upload |
| --- | --- | --- |
| ![](/img/docs/discovery_kit/ide_open.png) | ![](/img/docs/discovery_kit/ide_verify.png) | ![](/img/docs/discovery_kit/ide_upload.png) |

| Label | Description |
| --- | --- |
| ![](/img/docs/discovery_kit/hardware_1.png) | **Verify:** Compiles and approves your code. It will catch errors in syntax (like missing semi-colons or parenthesis). |
| ![](/img/docs/discovery_kit/hardware_2.png) | **Upload:** Sends your code to the Arduino board. When you click it, you should see the lights on your board blink rapidly. |
| ![](/img/docs/discovery_kit/hardware_3.png) | **New:** This buttons opens up a new  code window tab. |
| ![](/img/docs/discovery_kit/hardware_4.png) | **Open:** This button will let you open up an existing sketch. |
| ![](/img/docs/discovery_kit/hardware_5.png) | **Save:** This saves the currently active sketch. |
| ![](/img/docs/discovery_kit/hardware_6.png) | **Serial Monitor:** This will open a window that displays any serial information your Arduino is transmitting. It is very useful for debugging. |
| ![](/img/docs/discovery_kit/hardware_7.png) | **Sketch Name:** This shows the name of the sketch you are currently working on. |
| ![](/img/docs/discovery_kit/hardware_8.png) | **Code Area:** This is the area where you compose the code for your sketch. |
| ![](/img/docs/discovery_kit/hardware_9.png) | **Message Area:** This is where the IDE tells you if there were any errors in your code. |

## 5. Identify the Arduino Board

But before you can upload any code, you have to setup your IDE to identify your Arduino Uno.

![](/img/docs/discovery_kit/ide_port.png)

**First**, select which type of Arduino board. For our case, select Arduino Uno. If you are using another board, select it here.

**Then** select the serial port that the Arduino is connected to:

| Platform | Port | |
| --- | --- | --- |
| ![](/img/docs/discovery_kit/ide_windows.png) | Select the serial device of the Arduino board from the **Tools > Serial Port** menu. This is likely to be **COM3 or higher** (COM1 and COM2 are usually reserved for hardware serial ports). To find out, you can disconnect your Arduino board and re-open the menu; the entry that disappears should be the Arduino board. Reconnect the board and select that serial port. | <img src="\img\docs\discovery_kit\ide_port_windows.png" /> |
| ![](/img/docs/discovery_kit/ide_mac.png) | Select the serial device of the Arduino board from the Tools > Serial Port menu. On the Mac, this should be something with /dev/tty.usbmodem (for the Uno or Mega 2560) or /dev/tty.usbserial (for older boards) in it. | <img src="\img\docs\discovery_kit\ide_port_mac.png" /> |
| ![](/img/docs/discovery_kit/ide_linux.png) | Go to the following web address for more instructions:<br/><br/>[http://arduino.cc/en/Guide/Linux](http://arduino.cc/en/Guide/Linux) | |

**There are three main steps to any Arduino project:**

| Step 1 | Step 2 | Step 3 |
| --- | --- | --- |
| **ASSEMBLE**<br/><br/>The circuit | **WRITE**<br/><br/>The code | **UPLOAD & RUN**<br/><br/>See it work! |

## 6. Setup the Arduino and Breadboard Holder and Start Building

Now that you’ve identified the Arduino for the IDE, you are ready to have some fun.

<img src="\img\docs\discovery_kit\ide_step6.png" />

**NOTE:** Line-up the text of the breadboard as shown in the diagram above so you can follow this guidebook easier.

<table>
    <tr style={{ border: '2px solid red' }}>
        <td style={{ width: '100px' }}><img src="\img\docs\discovery_kit\ide_electricity.png" /></td>
        <td><span style={{ color: 'red' }} >5V Electricity.</span> Your Arduino runs on five volts. This is the power that will be supplied from your computer via USB and will be the driving force behind any components you use in your circuits. By plugging your Arduino board into your computer, you are supplying it with just the right voltage it needs to thrive! 5V can’t hurt you, so don’t be afraid to touch anything in your circuit.</td>
    </tr>
</table>

|Prev|Next|
|---|---|
| [Getting Started – Arduino Uno and Hardware](arduino-hardware.md) | [Circuit 01 – Blinking a LED](c01-blinking-a-led.md) |