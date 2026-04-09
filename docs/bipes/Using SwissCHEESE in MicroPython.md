---
title: Accessing the SwissCHEESE Library Using MicroPython
sidebar_position: 4
---

# Accessing the SwissCHEESE Library Using MicroPython

## Objective

Normally, typing “import swisscheese” in MicroPython would cause an error, as there is no module named swisscheese that MicroPython can import. Our goal is to create custom MicroPython firmware that wraps the library, which we can flash (upload) onto the ESP32 board. Doing so will allow the ESP32 board to access the SwissCHEESE library and its built-in functions. This tutorial will not import the full library, but rather a select few functions.

## Prerequisites

You should have the following items before you start the procedure:

- **An ESP32 board**
  - A compatible USB cable that supports data transfer, otherwise you won’t be able to flash the firmware to the board

- **Python installed on your computer**
  - You can check if Python is installed by running `python --version` in the command line
  - If Python isn’t installed, go to [Python Downloads](https://www.python.org/downloads/) and choose the latest version

- **Thonny IDE**
  - This is an IDE that allows us to write MicroPython code and upload it to the ESP32
  - Download Thonny from [https://thonny.org/](https://thonny.org/)

- **Git**
  - We use several Git commands during the procedure and need to clone the MicroPython repository from GitHub
  - Ensure Git is installed and set up before starting

- **SwissCHEESE library**
  - You should already have the SwissCHEESE library downloaded, including:
    - `CAROBOT_SwissCHEESE.h`
    - `CAROBOT_SwissCHEESE.cpp`
  - Download it here: [https://github.com/carobot/CAROBOT-SwissCHEESE/archive/refs/heads/master.zip](https://github.com/carobot/CAROBOT-SwissCHEESE/archive/refs/heads/master.zip)

- **Adequate disk space**
  - Ensure you have at least **10 GB of free space**

- **Time requirement**
  - The setup may take a while, so ensure you have **1–1.5 hours available**

## Procedure

1. The first step is to download WSL, as it makes the process much easier than if we were to stick to Windows. WSL, or Windows Subsystem for Linux, allows us to run a Linux environment on Windows, allowing us to use tools that otherwise wouldn’t be accessible.

First, open Windows PowerShell as an administrator, then type the following command, which will install WSL and Ubuntu. Once the download is complete, restart your computer. 

```shell
wsl --install
```

2. Next, we need to install the required tools inside Ubuntu. When you open Ubuntu for the first time, it should ask you to create a username and password. Once you’ve finished the setup, open the Ubuntu terminal and type the following commands one by one. These tools are needed for creating our firmware and building ESP32 projects.

```shell
sudo apt update
sudo apt upgrade -y
sudo apt install -y git build-essential cmake ninja-build ccache \
python3 python3-pip python3-venv wget flex bison gperf \
libffi-dev libssl-dev dfu-util libusb-1.0-0
```

3. Afterwards, we need to install ESP-IDF. ESP-IDF is the official ESP development environment used by MicroPython, as outlined in the documentation. Without ESP-IDF, we wouldn’t be able to build the firmware. To install ESP-IDF, run the following commands in the Ubuntu terminal:

```shell
cd ~
git clone -b v5.5.1 https://github.com/espressif/esp-idf.git
cd esp-idf
./install.sh
. ./export.sh
```

4. Next, we need to download MicroPython from the GitHub repository. This will allow us to modify the firmware source code, such as by adding our custom library. Run the following commands in Ubuntu:

```shell
cd ~
git clone https://github.com/micropython/micropython.git
cd micropython
git checkout v1.27.0
git submodule update --init --recursive
```

This step may take a while, so please be patient.

5. Once you’ve cloned the repository, we need to build mpy-cross, which will allow us to compile Python scripts into bytecode, which is what is run on microcontrollers like the ESP32 board. Type the following command into Ubuntu:

```shell
make -C mpy-cross
```

6. Next, we need to create a module folder to store our custom firmware. This makes it easily accessible and keeps our work nice and organized. Run the following commands in Ubuntu: 

```shell
mkdir ~/swisscheese-usermod #Creates a new directory
cd ~/swisscheese-usermod
cp /mnt/c/Users/YourName/Downloads/CAROBOT_SwissCHEESE.* . 
#Copies the library files into the new directory
```

7. Now, we need to create an Arduino.h file and an Arduino.cpp file. This is because the SwissCHEESE library tries to include Arduino.h and Arduino.cpp, which don’t exist yet, since MicroPython isn't meant to be used with Arduino. As such, we need to create our own Arduino files. In Ubuntu, type “nano Arduino.h”, then paste the following code:

```C
#ifndef ARDUINO_H
#define ARDUINO_H

#include <stdint.h>
#include <stdbool.h>
#include <stdlib.h>
#include <math.h>

typedef bool boolean;
typedef uint8_t byte;

#ifndef HIGH
#define HIGH 1
#endif
#ifndef LOW
#define LOW 0
#endif
#ifndef INPUT
#define INPUT 0
#endif
#ifndef OUTPUT
#define OUTPUT 1
#endif

#ifndef USB_VID
#define USB_VID 0
#endif
#ifndef USB_PID
#define USB_PID 0
#endif

#ifndef A0
#define A0 36
#define A1 39
#define A2 34
#define A3 35
#define A4 32
#define A5 33
#endif

#ifdef __cplusplus
extern "C" {
#endif

void pinMode(uint8_t pin, uint8_t mode);
int digitalRead(uint8_t pin);
void digitalWrite(uint8_t pin, uint8_t value);
int analogRead(uint8_t pin);
void analogWrite(uint8_t pin, int value);
void delay(uint32_t ms);
uint32_t millis(void);

#ifdef __cplusplus
}
#endif

static inline long map(long x, long in_min, long in_max, long out_min, long out_max) {
    if (in_max == in_min) return out_min;
    return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

template <typename T>
static inline T constrain(T x, T a, T b) {
    return (x < a) ? a : ((x > b) ? b : x);
}

#endif
```

Afterward, press “ctrl + x”, then press “enter”, then press “ctrl + o” to save your changes. Now, type “nano Arduino.cpp”, and paste the following code: 

```C
#include "Arduino.h"

extern "C" {
#include "driver/gpio.h"
#include "esp_timer.h"
#include "freertos/FreeRTOS.h"
#include "freertos/task.h"
}

void pinMode(uint8_t pin, uint8_t mode) {
    gpio_config_t io_conf = {};
    io_conf.pin_bit_mask = (1ULL << pin);
    io_conf.mode = (mode == OUTPUT) ? GPIO_MODE_OUTPUT : GPIO_MODE_INPUT;
    io_conf.pull_up_en = GPIO_PULLUP_DISABLE;
    io_conf.pull_down_en = GPIO_PULLDOWN_DISABLE;
    io_conf.intr_type = GPIO_INTR_DISABLE;
    gpio_config(&io_conf);
}

int digitalRead(uint8_t pin) {
    return gpio_get_level((gpio_num_t)pin);
}

void digitalWrite(uint8_t pin, uint8_t value) {
    gpio_set_level((gpio_num_t)pin, value ? 1 : 0);
}

int analogRead(uint8_t pin) {
    (void)pin;
    return 0;
}

void analogWrite(uint8_t pin, int value) {
    gpio_set_level((gpio_num_t)pin, value > 0 ? 1 : 0);
}

void delay(uint32_t ms) {
    vTaskDelay(pdMS_TO_TICKS(ms));
}

uint32_t millis(void) {
    return (uint32_t)(esp_timer_get_time() / 1000ULL);
}
```

Once again, type “ctrl + x” then “enter” then “ctrl + o” to save your changes.

8. Now, we create the wrapper module, which is what allows us to access the library from MicroPython. It also defines the functions we can use. In Ubuntu, run “nano modswisscheese.cpp” and paste the following code:

```C
extern "C" {
#include "py/runtime.h"
}

#include "CAROBOT_SwissCHEESE.h"

static mp_obj_t sc_led_on(mp_obj_t pin_obj) {
    int pin = mp_obj_get_int(pin_obj);
    SCLed led(pin);
    led.on();
    return mp_const_none;
}
static MP_DEFINE_CONST_FUN_OBJ_1(sc_led_on_obj, sc_led_on);

static mp_obj_t sc_led_off(mp_obj_t pin_obj) {
    int pin = mp_obj_get_int(pin_obj);
    SCLed led(pin);
    led.off();
    return mp_const_none;
}
static MP_DEFINE_CONST_FUN_OBJ_1(sc_led_off_obj, sc_led_off);

static mp_obj_t sc_digital_read(mp_obj_t pin_obj) {
    int pin = mp_obj_get_int(pin_obj);
    SCDigital input(pin);
    return mp_obj_new_bool(input.read());
}
static MP_DEFINE_CONST_FUN_OBJ_1(sc_digital_read_obj, sc_digital_read);

static mp_obj_t sc_button_pressed(mp_obj_t pin_obj) {
    int pin = mp_obj_get_int(pin_obj);
    SCButton btn(pin);
    return mp_obj_new_bool(btn.pressed());
}
static MP_DEFINE_CONST_FUN_OBJ_1(sc_button_pressed_obj, sc_button_pressed);

static mp_obj_t sc_button_held(mp_obj_t pin_obj) {
    int pin = mp_obj_get_int(pin_obj);
    SCButton btn(pin);
    return mp_obj_new_bool(btn.held());
}
static MP_DEFINE_CONST_FUN_OBJ_1(sc_button_held_obj, sc_button_held);

static mp_obj_t sc_button_released(mp_obj_t pin_obj) {
    int pin = mp_obj_get_int(pin_obj);
    SCButton btn(pin);
    return mp_obj_new_bool(btn.released());
}
static MP_DEFINE_CONST_FUN_OBJ_1(sc_button_released_obj, sc_button_released);

static mp_obj_t sc_buzzer_on(mp_obj_t pin_obj) {
    int pin = mp_obj_get_int(pin_obj);
    SCBuzzer buzzer(pin);
    buzzer.on();
    return mp_const_none;
}
static MP_DEFINE_CONST_FUN_OBJ_1(sc_buzzer_on_obj, sc_buzzer_on);

static mp_obj_t sc_buzzer_off(mp_obj_t pin_obj) {
    int pin = mp_obj_get_int(pin_obj);
    SCBuzzer buzzer(pin);
    buzzer.off();
    return mp_const_none;
}
static MP_DEFINE_CONST_FUN_OBJ_1(sc_buzzer_off_obj, sc_buzzer_off);

static mp_obj_t sc_analog_read(mp_obj_t pin_obj) {
    int pin = mp_obj_get_int(pin_obj);
    SCAnalog input(pin);
    return mp_obj_new_int(input.read());
}
static MP_DEFINE_CONST_FUN_OBJ_1(sc_analog_read_obj, sc_analog_read);

static const mp_rom_map_elem_t swisscheese_module_globals_table[] = {
    { MP_ROM_QSTR(MP_QSTR___name__), MP_ROM_QSTR(MP_QSTR_swisscheese) },
    { MP_ROM_QSTR(MP_QSTR_led_on), MP_ROM_PTR(&sc_led_on_obj) },
    { MP_ROM_QSTR(MP_QSTR_led_off), MP_ROM_PTR(&sc_led_off_obj) },
    { MP_ROM_QSTR(MP_QSTR_digital_read), MP_ROM_PTR(&sc_digital_read_obj) },
    { MP_ROM_QSTR(MP_QSTR_button_pressed), MP_ROM_PTR(&sc_button_pressed_obj) },
    { MP_ROM_QSTR(MP_QSTR_button_held), MP_ROM_PTR(&sc_button_held_obj) },
    { MP_ROM_QSTR(MP_QSTR_button_released), MP_ROM_PTR(&sc_button_released_obj) },
    { MP_ROM_QSTR(MP_QSTR_buzzer_on), MP_ROM_PTR(&sc_buzzer_on_obj) },
    { MP_ROM_QSTR(MP_QSTR_buzzer_off), MP_ROM_PTR(&sc_buzzer_off_obj) },
    { MP_ROM_QSTR(MP_QSTR_analog_read), MP_ROM_PTR(&sc_analog_read_obj) },
};

static MP_DEFINE_CONST_DICT(swisscheese_module_globals, swisscheese_module_globals_table);

extern "C" const mp_obj_module_t swisscheese_user_cmodule = {
    .base = { &mp_type_module },
    .globals = (mp_obj_dict_t *)&swisscheese_module_globals,
};

MP_REGISTER_MODULE(MP_QSTR_swisscheese, swisscheese_user_cmodule);
```

Afterward, save your changes the way we outlined above.

9. Now, run “nano micropython.cmake” in Ubuntu, and paste the code below. This file essentially tells MicroPython to include our custom files in the firmware. If we skip this step, our module is ignored, and our custom firmware isn’t included.

```C
add_library(usermod_swisscheese INTERFACE)

target_sources(usermod_swisscheese INTERFACE
    ${CMAKE_CURRENT_LIST_DIR}/Arduino.cpp
    ${CMAKE_CURRENT_LIST_DIR}/CAROBOT_SwissCHEESE.cpp
    ${CMAKE_CURRENT_LIST_DIR}/modswisscheese.cpp
)

target_include_directories(usermod_swisscheese INTERFACE
    ${CMAKE_CURRENT_LIST_DIR}
)

target_link_libraries(usermod INTERFACE usermod_swisscheese)
```

Don’t forget to save your changes once you’re done editing.

10. Next, we need to build and compile our firmware. Run the following commands in Ubuntu:

```shell
cd ~/micropython/ports/esp32
make BOARD=ESP32_GENERIC USER_C_MODULES=~/swisscheese-usermod/micropython.cmake
```

11. Now, we need to actually flash our custom firmware onto the ESP32 board. Open Windows PowerShell and run the following commands:

```shell
pip install esptool
esptool.py --chip esp32 --port COMX erase_flash 
#Please replace COMX with the port that your ESP32 board is connected to
esptool.py --chip esp32 --port COMX --baud 460800 write_flash -z 0x1000 \\wsl$\Ubuntu\home\<your-username>\micropython\ports\esp32\build-ESP32_GENERIC\micropython.bin
```

Note that you may have to hold down the boot button while flashing. This button is usually labeled 100 or BOOT.

12. Finally, we can test our firmware in Thonny. First, open Thonny, then select MicroPython. Afterward, select the port your ESP32 board is connected to. Paste the following code into Thonny: 

```Python
import swisscheese

swisscheese.led_on(2)
```

You should see the ESP32’s built-in LED turn on. This confirms that the firmware is working as intended. To turn it off, type “swisscheese.led_off(2)”. If you want, you can wire an external LED to the board using a breadboard and try to turn it on by changing the pin number. The functions you should have access to are: 

```Python
swisscheese.led_on(pin)
swisscheese.led_off(pin)

swisscheese.digital_read(pin)

swisscheese.button_pressed(pin)
swisscheese.button_held(pin)
swisscheese.button_released(pin)

swisscheese.buzzer_on(pin)
swisscheese.buzzer_off(pin)

swisscheese.analog_read(pin)
```

Feel free to edit the modswisscheese.cpp file to add more functions. Congratulations! You’ve completed the tutorial.