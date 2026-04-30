---
title: Rewriting the SwissCHEESE Library in Python
sidebar_position: 5
---

# Rewriting the SwissCHEESE Library in Python

## Objective

As you may recall, trying to access the original SwissCHEESE library in Micropython required numerous complicated steps and procedures. Since the library was written in C and was designed for the Arduino Uno, we had to wrap it and integrate it into custom Micropython firmware that we then flashed to the ESP32 board. This procedure is both difficult and impractical, which is why we want to rewrite the entire C library in Python instead. This approach eliminates the need to create and upload custom firmware and significantly reduces setup time and complexity. Once rewritten, the library can be easily accessed from platforms like Thonny IDE and BIPES, making development much easier and more accessible.

## Prerequisites

You should have the following items before you start the procedure:

- **An ESP32 board**
  - You also need a compatible USB cable that supports data transfer, otherwise you won’t be able to upload the library to the board

- **Python installed on your computer**
  - You can check if Python is installed by running `python --version` in command line
  - If Python isn’t installed, go to [Python Downloads](https://www.python.org/downloads/) and choose the latest version

- **Thonny IDE**
  - This is an IDE that allows us to write MicroPython code and upload it to the ESP32
  - Download Thonny from [https://thonny.org/](https://thonny.org/)

- **SwissCHEESE library**
  - You should already have the SwissCHEESE library downloaded, including:
    - `CAROBOT_SwissCHEESE.h`
    - `CAROBOT_SwissCHEESE.cpp`
  - Download it here: [https://github.com/carobot/CAROBOT-SwissCHEESE/archive/refs/heads/master.zip](https://github.com/carobot/CAROBOT-SwissCHEESE/archive/refs/heads/master.zip)

- **An IDE capable of running python**
  - Most people use Visual Studio Code for their programming needs

## Procedure

1. Create a new Python file in your chosen IDE. This file will contain the SwissCHEESE library rewritten in Python. Once you’ve created your file and given it a suitable name, paste the following code:

```python
from machine import Pin, ADC, PWM
import time
import math

# ---- Constants ----
SC_MAX = 1023
SC_X1 = 0
SC_X4 = 1
NORTH = 1
SOUTH = 0

# ESP32 analog input defaults
I0 = 36
I1 = 39
I2 = 34
I3 = 35
I4 = 32
I5 = 33

# ESP32 output defaults
O0 = 2
O1 = 4
O2 = 5
O3 = 18
O4 = 19
O5 = 21
O6 = 22
O7 = 23

# Motor defaults for ESP32
M1 = 25
M2 = 26

PWMA = 25
AIN1 = 27
AIN2 = 14
PWMB = 26
BIN1 = 12
BIN2 = 13


def _map(x, in_min, in_max, out_min, out_max):
    if in_max == in_min:
        return out_min
    return int((x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min)


def _constrain(x, low, high):
    return max(low, min(high, x))


class SCDigital:
    def __init__(self, pin, pull=None):
        self.pin_num = pin
        if pull == "up":
            self.pin = Pin(pin, Pin.IN, Pin.PULL_UP)
        elif pull == "down":
            self.pin = Pin(pin, Pin.IN, Pin.PULL_DOWN)
        else:
            self.pin = Pin(pin, Pin.IN)

    def read(self):
        return self.pin.value()


class SCAnalog:
    def __init__(self, pin):
        self.pin_num = pin
        self.pin = ADC(Pin(pin))
        try:
            self.pin.atten(ADC.ATTN_11DB)
        except:
            pass
        try:
            self.pin.width(ADC.WIDTH_10BIT)
        except:
            pass
        self._oldVal = 0
        self._increasing = False
        self._decreasing = False

    def read(self):
        val = self.pin.read()

        # Normalize to 0-1023 if ADC returns 0-4095
        if val > 1023:
            val = int(val * 1023 / 4095)

        if val > self._oldVal:
            self._increasing = True
            self._decreasing = False
        elif val < self._oldVal:
            self._increasing = False
            self._decreasing = True

        self._oldVal = val
        return val

    def increasing(self):
        self.read()
        return self._increasing

    def decreasing(self):
        self.read()
        return self._decreasing


class SCAnalog2:
    def __init__(self, pinX, pinY, pinZ=None):
        self.pinX = ADC(Pin(pinX))
        self.pinY = ADC(Pin(pinY))
        self.pinZ = ADC(Pin(pinZ)) if pinZ is not None else None

        for p in [self.pinX, self.pinY, self.pinZ]:
            if p is not None:
                try:
                    p.atten(ADC.ATTN_11DB)
                except:
                    pass
                try:
                    p.width(ADC.WIDTH_10BIT)
                except:
                    pass

    def _read_adc(self, adc_obj):
        val = adc_obj.read()
        if val > 1023:
            val = int(val * 1023 / 4095)
        return val

    def readX(self):
        return self._read_adc(self.pinX)

    def readY(self):
        return self._read_adc(self.pinY)

    def readZ(self):
        if self.pinZ is None:
            return 0
        return self._read_adc(self.pinZ)


class SCOutput:
    def __init__(self, pin):
        self.pin_num = pin
        self._state = 0
        self.pwm = PWM(Pin(pin), freq=1000, duty=0)

    def write(self, value):
        value = _constrain(int(value), 0, SC_MAX)
        duty = int(value * 1023 / SC_MAX)
        self.pwm.duty(duty)

    def state(self):
        return self._state

    def on(self):
        self.write(1023)
        self._state = 1

    def off(self):
        self.write(0)
        self._state = 0

    def blink(self, delay1, delay2=None):
        if delay2 is None:
            delay2 = delay1
        self.on()
        time.sleep_ms(int(delay1))
        self.off()
        time.sleep_ms(int(delay2))


class SCButton(SCDigital):
    def __init__(self, pin, pull=None):
        super().__init__(pin, pull=pull)
        self._toggleState = 0
        self._oldState = self.read()
        self._pressedState = 0
        self._releasedState = 0
        self._heldState = 0
        self._heldTime = 500
        self._millisMark = time.ticks_ms()

    def update(self):
        newState = self.read()

        if newState != self._oldState:
            if newState == 1:
                self._pressedState = 1
                self._millisMark = time.ticks_ms()
            else:
                self._releasedState = 1
                self._toggleState = 0 if self._toggleState else 1

            self._oldState = newState
            time.sleep_ms(50)
        else:
            diff = time.ticks_diff(time.ticks_ms(), self._millisMark)
            self._heldState = 1 if (newState == 1 and diff > self._heldTime) else 0

    def get(self):
        return self.pressed()

    def readSwitch(self):
        self.update()
        return self._toggleState

    def pressed(self):
        self.update()
        if self._pressedState:
            self._pressedState = 0
            return True
        return False

    def released(self):
        self.update()
        if self._releasedState:
            self._releasedState = 0
            return True
        return False

    def held(self):
        self.update()
        return self._heldState


class SCTiltSensor(SCDigital):
    pass


class SCTouchSensor(SCButton):
    pass


class SCPotentiometer(SCAnalog):
    def __init__(self, pin):
        super().__init__(pin)
        self._minVal = 1023
        self._maxVal = 0
        self._mappedVal = 0
        self._steps = 0

    def read(self):
        val = super().read()
        if val < self._minVal:
            self._minVal = val
        if val > self._maxVal:
            self._maxVal = val
        self._mappedVal = _map(val, self._minVal, self._maxVal, 0, 1023)
        self._mappedVal = _constrain(self._mappedVal, 0, 1023)
        return self._mappedVal

    def readStep(self, steps):
        self._steps = steps
        return int(_map(self.read(), 0, 1023, 0, steps))


class SCLightSensor(SCAnalog):
    pass


class SCThermistor(SCAnalog):
    ADCres = 1023.0
    Beta = 3950
    Kelvin = 273.15
    Rb = 10000
    Ginf = 120.6685

    def readCelsius(self):
        raw = self.read()
        if raw <= 0:
            return None
        Rthermistor = self.Rb * (self.ADCres / raw - 1)
        tempC = self.Beta / (math.log(Rthermistor * self.Ginf))
        return tempC - self.Kelvin

    def readFahrenheit(self):
        c = self.readCelsius()
        if c is None:
            return None
        return (c * 9.0) / 5.0 + 32.0


class SCHallSensor(SCAnalog):
    def __init__(self, pin):
        super().__init__(pin)
        self._zeroValue = 512

    def polarity(self):
        return NORTH if self.read() >= self._zeroValue else SOUTH


class SCJoystick(SCAnalog2):
    def __init__(self, pinX, pinY):
        super().__init__(pinX, pinY)
        self._minVal = 1023
        self._maxVal = 0
        self._mappedVal = 0

    def readX(self):
        val = super().readX()
        if val < self._minVal:
            self._minVal = val
        if val > self._maxVal:
            self._maxVal = val
        self._mappedVal = _constrain(_map(val, self._minVal, self._maxVal, 0, 1023), 0, 1023)
        return self._mappedVal

    def readY(self):
        val = super().readY()
        if val < self._minVal:
            self._minVal = val
        if val > self._maxVal:
            self._maxVal = val
        self._mappedVal = _constrain(_map(val, self._minVal, self._maxVal, 0, 1023), 0, 1023)
        return self._mappedVal


class SCGyro(SCAnalog2):
    def __init__(self, pinX, pinY, model):
        super().__init__(pinX, pinY)
        self._sensitivityInCount = 14633
        if model == SC_X4:
            self._sensitivityInCount //= 4
        self._xZeroVoltage = 503
        self._yZeroVoltage = 503

    def calibrate(self):
        self._xZeroVoltage = 0
        self._yZeroVoltage = 0
        for _ in range(50):
            self._xZeroVoltage += self.readX()
            self._yZeroVoltage += self.readY()
            time.sleep_ms(20)
        self._xZeroVoltage //= 50
        self._yZeroVoltage //= 50

    def readXAxisRate(self):
        return ((self.readX() - self._xZeroVoltage) * self._sensitivityInCount) // 1000

    def readYAxisRate(self):
        return ((self.readY() - self._yZeroVoltage) * self._sensitivityInCount) // 1000


class SCAccelerometer(SCAnalog2):
    def __init__(self, pinX, pinY, pinZ=None):
        super().__init__(pinX, pinY, pinZ)
        self._gain = 1.414
        self._zeroOffset = 478

    def readXinG(self):
        return (self.readX() - self._zeroOffset) / 96.0

    def readYinG(self):
        return (self.readY() - self._zeroOffset) / 96.0

    def readZinG(self):
        return (self.readZ() - self._zeroOffset) / 96.0

    def inclination(self):
        xVal = self.readX() - self._zeroOffset
        yVal = self.readY() - self._zeroOffset
        if xVal <= 96 and yVal <= 96:
            return int(math.atan2(xVal, yVal) * 180 / math.pi)
        return 0


class SCBuzzer(SCOutput):
    def __init__(self, pin):
        self.pin_num = pin
        self._state = 0
        self.pwm = PWM(Pin(pin), freq=1000, duty=0)

    def tone(self, frequency, duration=None):
        self.pwm.freq(int(frequency))
        self.pwm.duty(512)
        self._state = 1
        if duration is not None:
            time.sleep_ms(int(duration))
            self.noTone()

    def noTone(self):
        self.pwm.duty(0)
        self._state = 0


class SCLed(SCOutput):
    def brightness(self, value):
        self.write(value)


class SCMosFet(SCOutput):
    pass


class SCRelay(SCOutput):
    pass


class SCInfrared(SCDigital):
    pass


class SCServo:
    def __init__(self, pin, freq=50):
        self.pin_num = pin
        self.pwm = PWM(Pin(pin), freq=freq, duty=0)

    def write(self, angle):
        angle = _constrain(int(angle), 0, 180)
        min_duty = 26
        max_duty = 128
        duty = int(min_duty + (max_duty - min_duty) * angle / 180)
        self.pwm.duty(duty)


class SCUltrasonic:
    def __init__(self, trigger_pin, echo_pin):
        self.trigger = Pin(trigger_pin, Pin.OUT)
        self.echo = Pin(echo_pin, Pin.IN)
        self.trigger.value(0)

    def read(self):
        self.trigger.value(0)
        time.sleep_us(2)
        self.trigger.value(1)
        time.sleep_us(10)
        self.trigger.value(0)

        timeout = 30000

        start_wait = time.ticks_us()
        while self.echo.value() == 0:
            if time.ticks_diff(time.ticks_us(), start_wait) > timeout:
                return -1

        start = time.ticks_us()

        while self.echo.value() == 1:
            if time.ticks_diff(time.ticks_us(), start) > timeout:
                return -1

        end = time.ticks_us()
        duration = time.ticks_diff(end, start)
        distance_cm = duration / 58.0
        return distance_cm


class SCMotor:
    def __init__(self, pin):
        self.pin = pin
        self.pwm = PWM(Pin(pin), freq=1000, duty=0)

        if pin == M1:
            self.in1 = Pin(AIN1, Pin.OUT)
            self.in2 = Pin(AIN2, Pin.OUT)
        elif pin == M2:
            self.in1 = Pin(BIN1, Pin.OUT)
            self.in2 = Pin(BIN2, Pin.OUT)
        else:
            self.in1 = None
            self.in2 = None

    def speed(self, speed):
        speed = _constrain(int(speed), -255, 255)
        if self.in1 is None or self.in2 is None:
            return

        if speed > 0:
            self.in1.value(1)
            self.in2.value(0)
        elif speed < 0:
            self.in1.value(0)
            self.in2.value(1)
        else:
            self.in1.value(0)
            self.in2.value(0)

        self.pwm.duty(abs(speed) * 4)

    def forward(self, value=255):
        self.speed(abs(int(value)))

    def backward(self, value=255):
        self.speed(-abs(int(value)))

    def stop(self):
        if self.in1 is None or self.in2 is None:
            return
        self.in1.value(1)
        self.in2.value(1)
        self.pwm.duty(0)
```

2. Save your changes and open Thonny IDE. Ensure that your ESP32 board is connected to your computer and that Thonny is able to see your device. Click on “File” and click “Open”. Find your Python file and open it in Thonny.

3. Once you’ve opened your file, click on “File”, then press “Save As”. When it asks where you want to save to, click “MicroPython device”

4. Afterwards, give your file a suitable name and click OK. Your file should now be uploading to the ESP32 board. Keep in mind that you may need to press the boot button (labelled “100”) during the upload process.

5. Now, you can try accessing the library in Thonny. In the IDE, paste the following code:

```python
import swisscheese
#Please ensure your import matches the file name. If you saved as Swiss_Cheese or another name, make sure your import matches that.
import time

led = swisscheese.SCLed(2)

while True: 
   led.on()
   time.sleep(1)
   led.off()
   time.sleep(1)
```

You should see the ESP32’s built-in LED blink on and off in 1-second intervals.

Congratulations! You’ve completed this tutorial. Check out the next tutorial to learn how to create custom BIPES blocks that utilise our custom library.
