---
title: Rewriting the SwissCHEESE Library in Python
sidebar_position: 6
---

# Rewriting the SwissCHEESE Library in Python

## Objective

Now that we’ve successfully rewritten the SwissCHEESE library in Python and uploaded it to our ESP32 board, we can now create custom BIPES blocks that use our library and mimic the functionality of the original CarduBlock blocks. 

<img src="\img\Cardublock_Blocks.png"/>

## Prerequisites

You should have the following items before you start the procedure:

- **An ESP32 board**
  - You should have the python SwissCHEESE library already uploaded to the board

- **Python installed on your computer**
  - You can check if Python is installed by running `python --version` in command line
  - If Python isn’t installed, go to [Python Downloads](https://www.python.org/downloads/) and choose the latest version

- **BIPES Offline Library**
  - You need to have this library installed to access BIPES locally and create new blocks
  - You can download the library from https://github.com/carobot/BIPES-offline 
  - Click the green code button and select “Download ZIP”, then export all files from the ZIP file

- **An IDE capable of running python**
  - Most people use Visual Studio Code for their programming needs

- **Ensure the "Make" command works in command line**
  - I found the easiest way to get “make” to work is to download MSYS2 and run "make" in their command line

## Procedure

1. After downloading the BIPES repository, extract all contents and open the folder in VS Code. Navigate to BIPES-offline-master/ui/core/block-definitions.js and paste the following code at the bottom of the file: 

```javascript
Blockly.Blocks['swisscheese_led_status'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("LED")
        .appendField("pin#")
        .appendField(new Blockly.FieldDropdown([
          ["O0 (GPIO2)", "2"],
          ["O1 (GPIO4)", "4"],
          ["O2 (GPIO5)", "5"],
          ["O3 (GPIO18)", "18"],
          ["O4 (GPIO19)", "19"],
          ["O5 (GPIO21)", "21"],
          ["O6 (GPIO22)", "22"],
          ["O7 (GPIO23)", "23"]
        ]), "PIN")
        .appendField("status")
        .appendField(new Blockly.FieldDropdown([
          ["ON", "ON"],
          ["OFF", "OFF"]
        ]), "STATUS");


    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(6);
    this.setTooltip("Turn LED/output on or off");
    this.setHelpUrl("");
  }
};


Blockly.Blocks['swisscheese_led_level'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("LED")
        .appendField("pin#")
        .appendField(new Blockly.FieldDropdown([
          ["O0 (GPIO2)", "2"],
          ["O1 (GPIO4)", "4"],
          ["O2 (GPIO5)", "5"],
          ["O3 (GPIO18)", "18"],
          ["O4 (GPIO19)", "19"],
          ["O5 (GPIO21)", "21"],
          ["O6 (GPIO22)", "22"],
          ["O7 (GPIO23)", "23"]
        ]), "PIN")
        .appendField("level");
    this.appendValueInput("LEVEL")
        .setCheck("Number");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(6);
    this.setTooltip("Set LED brightness level");
    this.setHelpUrl("");
  }
};


Blockly.Blocks['swisscheese_button'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Button")
        .appendField("pin#")
        .appendField(new Blockly.FieldDropdown([
          ["I0 (GPIO36)", "36"],
          ["I1 (GPIO39)", "39"],
          ["I2 (GPIO34)", "34"],
          ["I3 (GPIO35)", "35"],
          ["I4 (GPIO32)", "32"],
          ["I5 (GPIO33)", "33"]
        ]), "PIN");
    this.setOutput(true, "Number");
    this.setColour(6);
    this.setTooltip("Read button value");
    this.setHelpUrl("");
  }
};


Blockly.Blocks['swisscheese_rotary'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("RotaryPotentiometer")
        .appendField("pin#")
        .appendField(new Blockly.FieldDropdown([
          ["I0 (GPIO36)", "36"],
          ["I1 (GPIO39)", "39"],
          ["I2 (GPIO34)", "34"],
          ["I3 (GPIO35)", "35"],
          ["I4 (GPIO32)", "32"],
          ["I5 (GPIO33)", "33"]
        ]), "PIN");
    this.setOutput(true, "Number");
    this.setColour(6);
    this.setTooltip("Read potentiometer value");
    this.setHelpUrl("");
  }
};


Blockly.Blocks['swisscheese_tone'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Tone")
        .appendField("pin#")
        .appendField(new Blockly.FieldDropdown([
          ["O0 (GPIO2)", "2"],
          ["O1 (GPIO4)", "4"],
          ["O2 (GPIO5)", "5"],
          ["O3 (GPIO18)", "18"],
          ["O4 (GPIO19)", "19"],
          ["O5 (GPIO21)", "21"],
          ["O6 (GPIO22)", "22"],
          ["O7 (GPIO23)", "23"]
        ]), "PIN")
        .appendField("frequency");
    this.appendValueInput("FREQ")
        .setCheck("Number");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(6);
    this.setTooltip("Play tone at frequency");
    this.setHelpUrl("");
  }
};


Blockly.Blocks['swisscheese_tone_ms'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Tone")
        .appendField("pin#")
        .appendField(new Blockly.FieldDropdown([
          ["O0 (GPIO2)", "2"],
          ["O1 (GPIO4)", "4"],
          ["O2 (GPIO5)", "5"],
          ["O3 (GPIO18)", "18"],
          ["O4 (GPIO19)", "19"],
          ["O5 (GPIO21)", "21"],
          ["O6 (GPIO22)", "22"],
          ["O7 (GPIO23)", "23"]
        ]), "PIN")
        .appendField("frequency");
    this.appendValueInput("FREQ")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("milliseconds");
    this.appendValueInput("MS")
        .setCheck("Number");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(6);
    this.setTooltip("Play tone for a fixed duration");
    this.setHelpUrl("");
  }
};


Blockly.Blocks['swisscheese_notone'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("NoTone")
        .appendField("pin#")
        .appendField(new Blockly.FieldDropdown([
          ["O0 (GPIO2)", "2"],
          ["O1 (GPIO4)", "4"],
          ["O2 (GPIO5)", "5"],
          ["O3 (GPIO18)", "18"],
          ["O4 (GPIO19)", "19"],
          ["O5 (GPIO21)", "21"],
          ["O6 (GPIO22)", "22"],
          ["O7 (GPIO23)", "23"]
        ]), "PIN");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(6);
    this.setTooltip("Stop tone");
    this.setHelpUrl("");
  }
};


Blockly.Blocks['swisscheese_ultrasonic'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Ultrasonic")
        .appendField("trigger #")
        .appendField(new Blockly.FieldDropdown([
          ["O0 (GPIO2)", "2"],
          ["O1 (GPIO4)", "4"],
          ["O2 (GPIO5)", "5"],
          ["O3 (GPIO18)", "18"],
          ["O4 (GPIO19)", "19"],
          ["O5 (GPIO21)", "21"],
          ["O6 (GPIO22)", "22"],
          ["O7 (GPIO23)", "23"]
        ]), "TRIG")
        .appendField("echo #")
        .appendField(new Blockly.FieldDropdown([
          ["I0 (GPIO36)", "36"],
          ["I1 (GPIO39)", "39"],
          ["I2 (GPIO34)", "34"],
          ["I3 (GPIO35)", "35"],
          ["I4 (GPIO32)", "32"],
          ["I5 (GPIO33)", "33"]
        ]), "ECHO");
    this.setOutput(true, "Number");
    this.setColour(6);
    this.setTooltip("Read ultrasonic distance");
    this.setHelpUrl("");
  }
};


Blockly.Blocks['swisscheese_infrared'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Infrared")
        .appendField("pin#")
        .appendField(new Blockly.FieldDropdown([
          ["I0 (GPIO36)", "36"],
          ["I1 (GPIO39)", "39"],
          ["I2 (GPIO34)", "34"],
          ["I3 (GPIO35)", "35"],
          ["I4 (GPIO32)", "32"],
          ["I5 (GPIO33)", "33"]
        ]), "PIN");
    this.setOutput(true, "Number");
    this.setColour(6);
    this.setTooltip("Read infrared sensor");
    this.setHelpUrl("");
  }
};


Blockly.Blocks['swisscheese_ldr'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("LDR")
        .appendField("pin#")
        .appendField(new Blockly.FieldDropdown([
          ["I0 (GPIO36)", "36"],
          ["I1 (GPIO39)", "39"],
          ["I2 (GPIO34)", "34"],
          ["I3 (GPIO35)", "35"],
          ["I4 (GPIO32)", "32"],
          ["I5 (GPIO33)", "33"]
        ]), "PIN");
    this.setOutput(true, "Number");
    this.setColour(6);
    this.setTooltip("Read light sensor value");
    this.setHelpUrl("");
  }
};


Blockly.Blocks['swisscheese_servo'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Servo")
        .appendField("pin#")
        .appendField(new Blockly.FieldDropdown([
          ["O0 (GPIO2)", "2"],
          ["O1 (GPIO4)", "4"],
          ["O2 (GPIO5)", "5"],
          ["O3 (GPIO18)", "18"],
          ["O4 (GPIO19)", "19"],
          ["O5 (GPIO21)", "21"],
          ["O6 (GPIO22)", "22"],
          ["O7 (GPIO23)", "23"]
        ]), "PIN")
        .appendField("angle");
    this.appendValueInput("ANGLE")
        .setCheck("Number");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(40);
    this.setTooltip("Set servo angle");
    this.setHelpUrl("");
  }
};


Blockly.Blocks['swisscheese_motor_backward'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("MotorBackward")
        .appendField("motor#")
        .appendField(new Blockly.FieldDropdown([
          ["1 (GPIO25)", "1"],
          ["2 (GPIO26)", "2"]
        ]), "MOTOR");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(30);
    this.setTooltip("Run motor backward");
    this.setHelpUrl("");
  }
};


Blockly.Blocks['swisscheese_motor_forward'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("MotorForward")
        .appendField("motor#")
        .appendField(new Blockly.FieldDropdown([
          ["1 (GPIO25)", "1"],
          ["2 (GPIO26)", "2"]
        ]), "MOTOR");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(30);
    this.setTooltip("Run motor forward");
    this.setHelpUrl("");
  }
};


Blockly.Blocks['swisscheese_motor_speed'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("MotorSpeed")
        .appendField("motor#")
        .appendField(new Blockly.FieldDropdown([
          ["1 (GPIO25)", "1"],
          ["2 (GPIO26)", "2"]
        ]), "MOTOR")
        .appendField("speed");
    this.appendValueInput("SPEED")
        .setCheck("Number");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(30);
    this.setTooltip("Set motor speed");
    this.setHelpUrl("");
  }
};


Blockly.Blocks['swisscheese_motor_stop'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("MotorStop")
        .appendField("motor#")
        .appendField(new Blockly.FieldDropdown([
          ["1 (GPIO25)", "1"],
          ["2 (GPIO26)", "2"]
        ]), "MOTOR");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(30);
    this.setTooltip("Stop motor");
    this.setHelpUrl("");
  }
};
```

These block definitions tell BIPES crucial information about your custom blocks, such as colour, dropdown menu options, and the block names.

2. Once you’ve pasted the block definitions, find generator-stubs.js. It should be in the same folder as the block definitions. Once you’ve opened the generator stubs, paste the following code: 

```javascript
Blockly.Python['swisscheese_led_status'] = function(block) {
  const pin = block.getFieldValue('PIN');
  const status = block.getFieldValue('STATUS');

  Blockly.Python.definitions_['import_swisscheese_two'] = 'import swisscheese_two';

  Blockly.Python.definitions_['sc_led_cache'] = '_sc_led_cache = {}';
  Blockly.Python.definitions_['sc_get_led'] =
    'def _sc_get_led(pin):\n' +
    '    if pin not in _sc_led_cache:\n' +
    '        _sc_led_cache[pin] = swisscheese_two.SCLed(pin)\n' +
    '    return _sc_led_cache[pin]';

  return `_sc_get_led(${pin}).${status === 'ON' ? 'on' : 'off'}()\n`;
};

Blockly.Python['swisscheese_led_level'] = function(block) {
  const pin = block.getFieldValue('PIN');
  const level = Blockly.Python.valueToCode(block, 'LEVEL', Blockly.Python.ORDER_NONE) || '0';

  Blockly.Python.definitions_['import_swisscheese_two'] = 'import swisscheese_two';

  Blockly.Python.definitions_['sc_led_cache'] = '_sc_led_cache = {}';
  Blockly.Python.definitions_['sc_get_led'] =
    'def _sc_get_led(pin):\n' +
    '    if pin not in _sc_led_cache:\n' +
    '        _sc_led_cache[pin] = swisscheese_two.SCLed(pin)\n' +
    '    return _sc_led_cache[pin]';

  return `_sc_get_led(${pin}).brightness(${level})\n`;
};

Blockly.Python['swisscheese_button'] = function(block) {
  const pin = block.getFieldValue('PIN');

  Blockly.Python.definitions_['import_swisscheese_two'] = 'import swisscheese_two';

  Blockly.Python.definitions_['sc_button_cache'] = '_sc_button_cache = {}';
  Blockly.Python.definitions_['sc_get_button'] =
    'def _sc_get_button(pin):\n' +
    '    if pin not in _sc_button_cache:\n' +
    '        _sc_button_cache[pin] = swisscheese_two.SCButton(pin)\n' +
    '    return _sc_button_cache[pin]';

  return [`_sc_get_button(${pin}).read()`, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['swisscheese_rotary'] = function(block) {
  const pin = block.getFieldValue('PIN');

  Blockly.Python.definitions_['import_swisscheese_two'] = 'import swisscheese_two';

  Blockly.Python.definitions_['sc_pot_cache'] = '_sc_pot_cache = {}';
  Blockly.Python.definitions_['sc_get_pot'] =
    'def _sc_get_pot(pin):\n' +
    '    if pin not in _sc_pot_cache:\n' +
    '        _sc_pot_cache[pin] = swisscheese_two.SCPotentiometer(pin)\n' +
    '    return _sc_pot_cache[pin]';

  return [`_sc_get_pot(${pin}).read()`, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['swisscheese_tone'] = function(block) {
  const pin = block.getFieldValue('PIN');
  const freq = Blockly.Python.valueToCode(block, 'FREQ', Blockly.Python.ORDER_NONE) || '1000';

  Blockly.Python.definitions_['import_swisscheese_two'] = 'import swisscheese_two';

  Blockly.Python.definitions_['sc_buzzer_cache'] = '_sc_buzzer_cache = {}';
  Blockly.Python.definitions_['sc_get_buzzer'] =
    'def _sc_get_buzzer(pin):\n' +
    '    if pin not in _sc_buzzer_cache:\n' +
    '        _sc_buzzer_cache[pin] = swisscheese_two.SCBuzzer(pin)\n' +
    '    return _sc_buzzer_cache[pin]';

  return `_sc_get_buzzer(${pin}).tone(${freq})\n`;
};

Blockly.Python['swisscheese_tone_ms'] = function(block) {
  const pin = block.getFieldValue('PIN');
  const freq = Blockly.Python.valueToCode(block, 'FREQ', Blockly.Python.ORDER_NONE) || '1000';
  const ms = Blockly.Python.valueToCode(block, 'MS', Blockly.Python.ORDER_NONE) || '500';

  Blockly.Python.definitions_['import_swisscheese_two'] = 'import swisscheese_two';

  Blockly.Python.definitions_['sc_buzzer_cache'] = '_sc_buzzer_cache = {}';
  Blockly.Python.definitions_['sc_get_buzzer'] =
    'def _sc_get_buzzer(pin):\n' +
    '    if pin not in _sc_buzzer_cache:\n' +
    '        _sc_buzzer_cache[pin] = swisscheese_two.SCBuzzer(pin)\n' +
    '    return _sc_buzzer_cache[pin]';

  return `_sc_get_buzzer(${pin}).tone(${freq}, ${ms})\n`;
};

Blockly.Python['swisscheese_notone'] = function(block) {
  const pin = block.getFieldValue('PIN');

  Blockly.Python.definitions_['import_swisscheese_two'] = 'import swisscheese_two';

  Blockly.Python.definitions_['sc_buzzer_cache'] = '_sc_buzzer_cache = {}';
  Blockly.Python.definitions_['sc_get_buzzer'] =
    'def _sc_get_buzzer(pin):\n' +
    '    if pin not in _sc_buzzer_cache:\n' +
    '        _sc_buzzer_cache[pin] = swisscheese_two.SCBuzzer(pin)\n' +
    '    return _sc_buzzer_cache[pin]';

  return `_sc_get_buzzer(${pin}).noTone()\n`;
};

Blockly.Python['swisscheese_ultrasonic'] = function(block) {
  const trig = block.getFieldValue('TRIG');
  const echo = block.getFieldValue('ECHO');

  Blockly.Python.definitions_['import_swisscheese_two'] = 'import swisscheese_two';

  Blockly.Python.definitions_['sc_ultrasonic_cache'] = '_sc_ultrasonic_cache = {}';
  Blockly.Python.definitions_['sc_get_ultrasonic'] =
    'def _sc_get_ultrasonic(trig, echo):\n' +
    '    key = (trig, echo)\n' +
    '    if key not in _sc_ultrasonic_cache:\n' +
    '        _sc_ultrasonic_cache[key] = swisscheese_two.SCUltrasonic(trig, echo)\n' +
    '    return _sc_ultrasonic_cache[key]';

  return [`_sc_get_ultrasonic(${trig}, ${echo}).read()`, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['swisscheese_infrared'] = function(block) {
  const pin = block.getFieldValue('PIN');

  Blockly.Python.definitions_['import_swisscheese_two'] = 'import swisscheese_two';

  Blockly.Python.definitions_['sc_infrared_cache'] = '_sc_infrared_cache = {}';
  Blockly.Python.definitions_['sc_get_infrared'] =
    'def _sc_get_infrared(pin):\n' +
    '    if pin not in _sc_infrared_cache:\n' +
    '        _sc_infrared_cache[pin] = swisscheese_two.SCInfrared(pin)\n' +
    '    return _sc_infrared_cache[pin]';

  return [`_sc_get_infrared(${pin}).read()`, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['swisscheese_ldr'] = function(block) {
  const pin = block.getFieldValue('PIN');

  Blockly.Python.definitions_['import_swisscheese_two'] = 'import swisscheese_two';

  Blockly.Python.definitions_['sc_ldr_cache'] = '_sc_ldr_cache = {}';
  Blockly.Python.definitions_['sc_get_ldr'] =
    'def _sc_get_ldr(pin):\n' +
    '    if pin not in _sc_ldr_cache:\n' +
    '        _sc_ldr_cache[pin] = swisscheese_two.SCLightSensor(pin)\n' +
    '    return _sc_ldr_cache[pin]';

  return [`_sc_get_ldr(${pin}).read()`, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['swisscheese_servo'] = function(block) {
  const pin = block.getFieldValue('PIN');
  const angle = Blockly.Python.valueToCode(block, 'ANGLE', Blockly.Python.ORDER_NONE) || '90';

  Blockly.Python.definitions_['import_swisscheese_two'] = 'import swisscheese_two';

  Blockly.Python.definitions_['sc_servo_cache'] = '_sc_servo_cache = {}';
  Blockly.Python.definitions_['sc_get_servo'] =
    'def _sc_get_servo(pin):\n' +
    '    if pin not in _sc_servo_cache:\n' +
    '        _sc_servo_cache[pin] = swisscheese_two.SCServo(pin)\n' +
    '    return _sc_servo_cache[pin]';

  return `_sc_get_servo(${pin}).write(${angle})\n`;
};

Blockly.Python['swisscheese_motor_backward'] = function(block) {
  const motor = block.getFieldValue('MOTOR');
  const motorPin = motor === '1' ? 'swisscheese_two.M1' : 'swisscheese_two.M2';

  Blockly.Python.definitions_['import_swisscheese_two'] = 'import swisscheese_two';

  Blockly.Python.definitions_['sc_motor_cache'] = '_sc_motor_cache = {}';
  Blockly.Python.definitions_['sc_get_motor'] =
    'def _sc_get_motor(pin):\n' +
    '    if pin not in _sc_motor_cache:\n' +
    '        _sc_motor_cache[pin] = swisscheese_two.SCMotor(pin)\n' +
    '    return _sc_motor_cache[pin]';

  return `_sc_get_motor(${motorPin}).backward()\n`;
};

Blockly.Python['swisscheese_motor_forward'] = function(block) {
  const motor = block.getFieldValue('MOTOR');
  const motorPin = motor === '1' ? 'swisscheese_two.M1' : 'swisscheese_two.M2';

  Blockly.Python.definitions_['import_swisscheese_two'] = 'import swisscheese_two';

  Blockly.Python.definitions_['sc_motor_cache'] = '_sc_motor_cache = {}';
  Blockly.Python.definitions_['sc_get_motor'] =
    'def _sc_get_motor(pin):\n' +
    '    if pin not in _sc_motor_cache:\n' +
    '        _sc_motor_cache[pin] = swisscheese_two.SCMotor(pin)\n' +
    '    return _sc_motor_cache[pin]';

  return `_sc_get_motor(${motorPin}).forward()\n`;
};

Blockly.Python['swisscheese_motor_speed'] = function(block) {
  const motor = block.getFieldValue('MOTOR');
  const speed = Blockly.Python.valueToCode(block, 'SPEED', Blockly.Python.ORDER_NONE) || '255';
  const motorPin = motor === '1' ? 'swisscheese_two.M1' : 'swisscheese_two.M2';

  Blockly.Python.definitions_['import_swisscheese_two'] = 'import swisscheese_two';

  Blockly.Python.definitions_['sc_motor_cache'] = '_sc_motor_cache = {}';
  Blockly.Python.definitions_['sc_get_motor'] =
    'def _sc_get_motor(pin):\n' +
    '    if pin not in _sc_motor_cache:\n' +
    '        _sc_motor_cache[pin] = swisscheese_two.SCMotor(pin)\n' +
    '    return _sc_motor_cache[pin]';

  return `_sc_get_motor(${motorPin}).speed(${speed})\n`;
};

Blockly.Python['swisscheese_motor_stop'] = function(block) {
  const motor = block.getFieldValue('MOTOR');
  const motorPin = motor === '1' ? 'swisscheese_two.M1' : 'swisscheese_two.M2';

  Blockly.Python.definitions_['import_swisscheese_two'] = 'import swisscheese_two';

  Blockly.Python.definitions_['sc_motor_cache'] = '_sc_motor_cache = {}';
  Blockly.Python.definitions_['sc_get_motor'] =
    'def _sc_get_motor(pin):\n' +
    '    if pin not in _sc_motor_cache:\n' +
    '        _sc_motor_cache[pin] = swisscheese_two.SCMotor(pin)\n' +
    '    return _sc_motor_cache[pin]';

  return `_sc_get_motor(${motorPin}).stop()\n`;
};
```

Note that I have the library saved on my ESP32 board as swisscheese_two, which is why the generator stubs import swisscheese_two. Ensure that you alter the generator stubs to match your file name. For example, if you have the file saved as swissCHEESE, replace all instances of swisscheese_two with swissCHEESE. These generator stubs tell BIPES what code our custom blocks should generate when used.

3. Now, navigate to BIPES-offline-master/ui/toolbox/esp32.xml and scroll to the bottom of the file. Above the last line, paste the following code:

```xml
<category name="SwissCHEESE">
  <block type="swisscheese_led_status"></block>
  <block type="swisscheese_led_level"></block>
  <block type="swisscheese_button"></block>
  <block type="swisscheese_rotary"></block>
  <block type="swisscheese_tone"></block>
  <block type="swisscheese_tone_ms"></block>
  <block type="swisscheese_notone"></block>
  <block type="swisscheese_ultrasonic"></block>
  <block type="swisscheese_infrared"></block>
  <block type="swisscheese_ldr"></block>
  <block type="swisscheese_servo"></block>
  <block type="swisscheese_motor_backward"></block>
  <block type="swisscheese_motor_forward"></block>
  <block type="swisscheese_motor_speed"></block>
  <block type="swisscheese_motor_stop"></block>
</category>
```

This creates a new sidebar category for our custom SwissCHEESE blocks. Feel free to rename the category and/or blocks to your liking.

4. After saving all your changes, open your chosen command line and navigate to BIPES-offline-master. In command line, type **make offline** and wait for the system to finish compiling your changes. Now, open BIPES-offline-master/ui/index_offline.html in your web browser. Ensure your board type is set to ESP32. You should now see your custom blocks under the SwissCHEESE category on the left of the screen.

Congratulations! You’ve completed this tutorial. Have fun testing out your new blocks!
