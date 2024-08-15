"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4784],{30394:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>a});var r=i(74848),t=i(28453);const o={title:"Building a Robot with Real-Time Temperature Display",sidebar_position:1},s="Tutorial: Building a Robot with Real-Time Temperature Display",l={id:"robot-with-real-time-temperature-display",title:"Building a Robot with Real-Time Temperature Display",description:"In this tutorial, we will guide you through the process of building a robot that moves around and displays real-time temperature on a screen. By following the step-by-step instructions, you will learn how to assemble the necessary components, wire them together, and program the robot using Arduino IDE. Let's get started!",source:"@site/Projects/robot-with-real-time-temperature-display.md",sourceDirName:".",slug:"/robot-with-real-time-temperature-display",permalink:"/Projects/robot-with-real-time-temperature-display",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Building a Robot with Real-Time Temperature Display",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Current Projects",permalink:"/Projects/Introduction"},next:{title:"Introduction to the ESP32",permalink:"/Projects/ESP32-Starter-Kit/Introduction"}},d={},a=[{value:"Materials",id:"materials",level:2},{value:"Wiring &amp; Setup",id:"wiring--setup",level:2},{value:"I2C OLED Pinout",id:"i2c-oled-pinout",level:3},{value:"L293D Pinout",id:"l293d-pinout",level:3},{value:"Step 1: Wiring Connections",id:"step-1-wiring-connections",level:3},{value:"Step 2: Physical Assembly",id:"step-2-physical-assembly",level:3},{value:"1. Powering the ESP-WROOM-32:",id:"1-powering-the-esp-wroom-32",level:3},{value:"2. Connect the motors to the L293D motor controller",id:"2-connect-the-motors-to-the-l293d-motor-controller",level:3},{value:"3. Connecting the AM2320 temperature sensor and 0.96 Inch I2C OLED :",id:"3-connecting-the-am2320-temperature-sensor-and-096-inch-i2c-oled-",level:3},{value:"4. Attach the wheels to the motor shafts:",id:"4-attach-the-wheels-to-the-motor-shafts",level:3},{value:"5. Put everything together:",id:"5-put-everything-together",level:3},{value:"Step 3: Install Libraries",id:"step-3-install-libraries",level:3},{value:"Step 4: Install Board",id:"step-4-install-board",level:3},{value:"Full Code",id:"full-code",level:2},{value:"Programming &amp; Logic",id:"programming--logic",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Hardware Tips",id:"hardware-tips",level:3},{value:"Software tips",id:"software-tips",level:3},{value:"Output",id:"output",level:2},{value:"Conclusion",id:"conclusion",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"tutorial-building-a-robot-with-real-time-temperature-display",children:"Tutorial: Building a Robot with Real-Time Temperature Display"}),"\n",(0,r.jsx)(n.p,{children:"In this tutorial, we will guide you through the process of building a robot that moves around and displays real-time temperature on a screen. By following the step-by-step instructions, you will learn how to assemble the necessary components, wire them together, and program the robot using Arduino IDE. Let's get started!"}),"\n",(0,r.jsx)("img",{src:"img\\docs\\projects\\robot-temperature-0001.gif",width:"",height:"100%"}),"\n",(0,r.jsx)("img",{src:"img\\docs\\projects\\robot-temperature-0009.jpg",width:"50.51%",height:"100%"}),"\n",(0,r.jsx)(n.h2,{id:"materials",children:"Materials"}),"\n",(0,r.jsx)(n.p,{children:"To build this robot, you will need the following components:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://www.canadarobotix.com/products/2594",children:"ESP WROOM 32"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://www.canadarobotix.com/products/2873",children:"AM2320 Temperature Sensor"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://www.canadarobotix.com/products/2007",children:"0.96-inch I2C OLED Display"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://www.canadarobotix.com/products/2473",children:"L293D Motor Controller"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://www.canadarobotix.com/products/2797",children:"Rounded Robot Chassis"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://www.canadarobotix.com/products/223",children:"BreadBoard"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://www.canadarobotix.com/products/922",children:"Jumper wires"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://www.canadarobotix.com/products/174",children:"6-AA Battery Holder"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://www.canadarobotix.com/products/1916",children:"Panasonic Battery AA (4-pack)"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://www.arduino.cc/en/software",children:"Arduino IDE"})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"wiring--setup",children:"Wiring & Setup"}),"\n",(0,r.jsx)(n.p,{children:"Connect the components according to the following wiring diagram:"}),"\n",(0,r.jsx)("a",{href:"/img/docs/product_guide/0000.jpeg",children:(0,r.jsx)("img",{src:"/img/docs/product_guide/0000.jpeg",alt:"Wiring Diagram",width:"80%",height:"70%"})}),"\n",(0,r.jsx)(n.p,{children:"Below are some of the pinouts:"}),"\n",(0,r.jsx)(n.h3,{id:"i2c-oled-pinout",children:"I2C OLED Pinout"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:i(42611).A+"",width:"636",height:"626"})}),"\n",(0,r.jsx)(n.h3,{id:"l293d-pinout",children:"L293D Pinout"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:i(92998).A+"",width:"450",height:"430"})}),"\n",(0,r.jsx)(n.h3,{id:"step-1-wiring-connections",children:"Step 1: Wiring Connections"}),"\n",(0,r.jsx)(n.p,{children:"The AM2320 temperature sensor is connected to an ESP-WROOM-32 microcontroller using the following pin configuration:"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"AM2320 Temperature Sensor"}),(0,r.jsx)(n.th,{children:"ESP-WROOM-32 Pin"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"VCC"}),(0,r.jsx)(n.td,{children:"3.3V"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"GND"}),(0,r.jsx)(n.td,{children:"GND"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"SDA"}),(0,r.jsx)(n.td,{children:"GPIO21 (SDA)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"SCL"}),(0,r.jsx)(n.td,{children:"GPIO22 (SCL)"})]})]})]}),"\n",(0,r.jsx)(n.p,{children:"The 0.96 Inch I2C OLED module is connected to an ESP-WROOM-32 microcontroller using the following pin configuration:"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.th,{children:["0.96 Inch I",(0,r.jsx)("sup",{children:"2"}),"C OLED Module"]}),(0,r.jsx)(n.th,{children:"ESP-WROOM-32 Pin"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"VCC"}),(0,r.jsx)(n.td,{children:"3.3V"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"GND"}),(0,r.jsx)(n.td,{children:"GND"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"SDA"}),(0,r.jsx)(n.td,{children:"GPIO21 (SDA)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"SCL"}),(0,r.jsx)(n.td,{children:"GPIO22 (SCL)"})]})]})]}),"\n",(0,r.jsx)(n.p,{children:"The L293D motor driver is connected to an ESP-WROOM-32 microcontroller using the following pin configuration:"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"L293D Motor Driver"}),(0,r.jsx)(n.th,{children:"ESP-WROOM-32 Pin"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"IN1"}),(0,r.jsx)(n.td,{children:"GPIO12"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"IN2"}),(0,r.jsx)(n.td,{children:"GPIO13"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"IN3"}),(0,r.jsx)(n.td,{children:"GPIO14"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"IN4"}),(0,r.jsx)(n.td,{children:"GPIO15"})]})]})]}),"\n",(0,r.jsx)(n.p,{children:"The first DC motor is connected to the motor driver using the following configuration:"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"DC Motor 1"}),(0,r.jsx)(n.th,{children:"Connection"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Output 1 (OUT1)"}),(0,r.jsx)(n.td,{children:"Motor Driver"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Output 2 (OUT2)"}),(0,r.jsx)(n.td,{children:"Motor Driver"})]})]})]}),"\n",(0,r.jsx)(n.p,{children:"The second DC motor is connected to the motor driver using the following configuration:"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"DC Motor 2"}),(0,r.jsx)(n.th,{children:"Connection"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Output 3 (OUT3)"}),(0,r.jsx)(n.td,{children:"Motor Driver"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Output 4 (OUT4)"}),(0,r.jsx)(n.td,{children:"Motor Driver"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"step-2-physical-assembly",children:"Step 2: Physical Assembly"}),"\n",(0,r.jsx)(n.h3,{id:"1-powering-the-esp-wroom-32",children:"1. Powering the ESP-WROOM-32:"}),"\n",(0,r.jsx)("img",{src:"img\\docs\\robot-temperature-0007.jpg",width:"50%",height:"50%"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Identify the VIN pin on the ESP-WROOM-32 module."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Connect the positive terminal (+) of the power supply to the VIN pin."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Connect the negative terminal (-) of the power supply to the GND pin of the ESP-WROOM-32."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"2-connect-the-motors-to-the-l293d-motor-controller",children:"2. Connect the motors to the L293D motor controller"}),"\n",(0,r.jsx)("img",{src:"img\\docs\\robot-temperature-0005.jpg",width:"30%",height:"10%"}),"\n",(0,r.jsx)(n.p,{children:"** Note: you only need 1 ESP-wroom 32, this is to show how its wired. **"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Find the IN1-IN4 pins on the L293D motor controller."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Connect Motor 1\u2019s positive wire to OUT1 and negative wire to OUT2."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Connect Motor 2\u2019s positive wire to OUT3 and negative wire to OUT4."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"3-connecting-the-am2320-temperature-sensor-and-096-inch-i2c-oled-",children:"3. Connecting the AM2320 temperature sensor and 0.96 Inch I2C OLED :"}),"\n",(0,r.jsx)("img",{src:"img\\docs\\robot-temperature-0004.jpg",width:"30%",height:"10%"}),"\n",(0,r.jsx)(n.p,{children:"Connect the VCC, GND, SDA, and SCL pins of the OLED module/Temp senosr to the corresponding pins on the ESP-WROOM-32."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"VCC to 3.3V power supply pin"}),"\n",(0,r.jsx)(n.li,{children:"GND to GND pin"}),"\n",(0,r.jsx)(n.li,{children:"SDA to GPIO21 (SDA) pin"}),"\n",(0,r.jsx)(n.li,{children:"SCL to GPIO22 (SCL) pin."}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"4-attach-the-wheels-to-the-motor-shafts",children:"4. Attach the wheels to the motor shafts:"}),"\n",(0,r.jsx)("img",{src:"img\\docs\\robot-temperature-0006.jpg",width:"50%",height:"50%"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Identify the motor shafts of Motors 1 and 2."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Attach the wheels securely to the motor shafts. Ensure they are aligned properly and tightly fixed to prevent slipping."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"5-put-everything-together",children:"5. Put everything together:"}),"\n",(0,r.jsx)("img",{src:"img\\docs\\robot-temperature-0008.jpg",width:"50%",height:"50%"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Place battery in the housing between the 2 brackets"}),"\n",(0,r.jsx)(n.li,{children:"Place the ciruit on top"}),"\n",(0,r.jsx)(n.li,{children:"Connect power"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"step-3-install-libraries",children:"Step 3: Install Libraries"}),"\n",(0,r.jsx)(n.p,{children:"The libraries that are used are:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Adafruit SSD1306 (Within IDE)"}),"\n",(0,r.jsx)(n.li,{children:"Adafruit GFX Library (Within IDE)"}),"\n",(0,r.jsx)(n.li,{children:"Adafruit BusIO (Within IDE)"}),"\n",(0,r.jsx)(n.li,{children:"Adafruit AM2320 Sensor Library (Within IDE)"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Click ",(0,r.jsx)(n.a,{href:"https://support.arduino.cc/hc/en-us/articles/5145457742236-Add-libraries-to-Arduino-IDE",children:"here"})," for instructions to install libraries within the arduino application."]}),"\n",(0,r.jsx)(n.h3,{id:"step-4-install-board",children:"Step 4: Install Board"}),"\n",(0,r.jsx)(n.p,{children:"In order to interact with the ESP Wroom 32 Using the Arduino IDE, you must install the following board:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"ESP32 By Espressif (Within IDE)"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Click ",(0,r.jsx)(n.a,{href:"https://support.arduino.cc/hc/en-us/articles/5145457742236-Add-libraries-to-Arduino-IDE",children:"here"})," for instructions how to install boards within the arduino application."]}),"\n",(0,r.jsx)(n.h2,{id:"full-code",children:"Full Code"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-arduino",children:'#include <Wire.h>\r\n#include <Adafruit_AM2320.h>\r\n#include <Adafruit_GFX.h>\r\n#include <Adafruit_SSD1306.h>\r\n\r\n#define SCREEN_WIDTH 128 // OLED display width, in pixels\r\n#define SCREEN_HEIGHT 64 // OLED display height, in pixels\r\n\r\n// Declaration for an SSD1306 display connected to I2C (SDA, SCL pins)\r\n#define OLED_RESET     -1 // Reset pin # (or -1 if sharing Arduino reset pin)\r\nAdafruit_SSD1306 display(SCREEN_WIDTH, SCREEN_HEIGHT, &Wire, OLED_RESET);\r\n\r\n// Initialize the AM2320 sensor\r\nAdafruit_AM2320 am2320 = Adafruit_AM2320();\r\n\r\n// Initialize the motor driver pins\r\nint motor1Pin1 = 12;\r\nint motor1Pin2 = 13;\r\nint motor2Pin1 = 14;\r\nint motor2Pin2 = 15;\r\n\r\nvoid setup() {\r\n  // Start the serial communication\r\n  Serial.begin(9600);\r\n\r\n  // Initialize the OLED display\r\n  if(!display.begin(SSD1306_SWITCHCAPVCC, 0x3C)) {\r\n    Serial.println(F("SSD1306 allocation failed"));\r\n    for(;;); // Don\'t proceed, loop forever\r\n  }\r\n\r\n  // Clear the screen\r\n  display.clearDisplay();\r\n\r\n  // Initialize the AM2320 sensor\r\n  am2320.begin();\r\n\r\n  // Initialize the motor driver pins as outputs\r\n  pinMode(motor1Pin1, OUTPUT);\r\n  pinMode(motor1Pin2, OUTPUT);\r\n  pinMode(motor2Pin1, OUTPUT);\r\n  pinMode(motor2Pin2, OUTPUT);\r\n}\r\n\r\nvoid loop() {\r\n  // Read the temperature and humidity from the AM2320 sensor\r\n  float temperature = am2320.readTemperature();\r\n  \r\n  // Display the temperature on the OLED display\r\n  display.clearDisplay();\r\n  display.setTextSize(1);\r\n  display.setTextColor(SSD1306_WHITE);\r\n  display.setCursor(0,0);\r\n  display.print("Temperature:");\r\n  display.setCursor(80,0);\r\n  display.print(temperature);\r\n  \r\n  // Move the robot in a circle\r\n  digitalWrite(motor1Pin1, HIGH);\r\n  digitalWrite(motor1Pin2, LOW);\r\n  \r\n  digitalWrite(motor2Pin1, LOW);\r\n  digitalWrite(motor2Pin2, HIGH);\r\n\r\n  \r\n   delay(2000); \r\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"programming--logic",children:"Programming & Logic"}),"\n",(0,r.jsx)(n.p,{children:"Let's go through the logic of the code line by line:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"This code includes the necessary libraries for the I2C communication protocol, the AM2320 temperature and humidity sensor, the OLED display, and the motor driver."}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-arduino",children:"#include <Wire.h>\r\n#include <Adafruit_Sensor.h>\r\n#include <Adafruit_AM2320.h>\r\n#include <Adafruit_GFX.h>\r\n#include <Adafruit_SSD1306.h>\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsx)(n.li,{children:"This code defines the screen width and height for the OLED display and initializes it."}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-arduino",children:"#define SCREEN_WIDTH 128 // OLED display width, in pixels\r\n#define SCREEN_HEIGHT 64 // OLED display height, in pixels\r\n\r\n// Declaration for an SSD1306 display connected to I2C (SDA, SCL pins)\r\n#define OLED_RESET     -1 // Reset pin # (or -1 if sharing Arduino reset pin)\r\nAdafruit_SSD1306 display(SCREEN_WIDTH, SCREEN_HEIGHT, &Wire, OLED_RESET);\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"3",children:["\n",(0,r.jsx)(n.li,{children:"Initialize the AM2320 temperature sensor object."}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-arduino",children:"Adafruit_AM2320 am2320;\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"4",children:["\n",(0,r.jsx)(n.li,{children:"This code initializes the pins for the L293D motor driver."}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-arduino",children:"int motor1Pin1 = 12;\r\nint motor1Pin2 = 13;\r\nint motor2Pin1 = 14;\r\nint motor2Pin2 = 15;\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"5",children:["\n",(0,r.jsx)(n.li,{children:"This code initializes the serial communication, OLED display, AM2320 sensor and L293D motor driver pins as outputs."}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-arduino",children:' void setup() {\r\n  // Start the serial communication\r\n  Serial.begin(9600);\r\n\r\n  // Initialize the OLED display\r\n  if(!display.begin(SSD1306_SWITCHCAPVCC, 0x3C)) {\r\n    Serial.println(F("SSD1306 allocation failed"));\r\n    for(;;); // Don\'t proceed, loop forever\r\n  }\r\n\r\n  // Clear the screen\r\n  display.clearDisplay();\r\n\r\n  // Initialize the AM2320 sensor\r\n  am2320.begin();\r\n\r\n  // Initialize the motor driver pins as outputs\r\n  pinMode(motor1Pin1, OUTPUT);\r\n  pinMode(motor1Pin2, OUTPUT);\r\n  pinMode(motor2Pin1, OUTPUT);\r\n  pinMode(motor2Pin2, OUTPUT);\r\n}\n'})}),"\n",(0,r.jsxs)(n.ol,{start:"6",children:["\n",(0,r.jsx)(n.li,{children:"This code reads the temperature from the AM2320 sensor and displays it on the OLED display. It also moves the robot in a circle by controlling the two DC motors using the L293D motor driver."}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-arduino",children:'  void loop() {\r\n  // Read the temperature and humidity from the AM2320 sensor\r\n  float temperature = am2320.readTemperature();\r\n  \r\n  // Display the temperature on the OLED display\r\n  display.clearDisplay();\r\n  display.setTextSize(1);\r\n  display.setTextColor(SSD1306_WHITE);\r\n  display.setCursor(0,0);\r\n  display.print("Temperature:");\r\n  display.setCursor(80,0);\r\n  display.print(temperature);\r\n  \r\n  // Move the robot in a circle\r\n  digitalWrite(motor1Pin1, HIGH);\r\n  digitalWrite(motor1Pin2, LOW);\r\n  \r\n  digitalWrite(motor2Pin1, LOW);\r\n  digitalWrite(motor2Pin2, HIGH);\r\n\r\n  \r\n   delay(2000); \r\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,r.jsx)(n.h3,{id:"hardware-tips",children:"Hardware Tips"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Battery: Ensure that you provide an adequate battery for your components. Check the power requirements of the motors, ESP32, OLED display, and other peripherals. Consider using separate power sources or using a power regulator to distribute power appropriately."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Wiring Connections: Double-check all your wiring connections to ensure they are secure and properly connected. Loose or incorrect connections can cause issues with functionality. Use jumper wires or connectors that provide a reliable and stable connection."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Grounding: Pay attention to proper grounding of your circuit. Connect the ground (GND) pins of all components together to establish a common ground reference. This helps prevent potential noise or interference issues."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Mounting: Securely mount your components to prevent movement or vibration-related issues. Use appropriate mounting hardware or brackets to hold the motors, ESP32 board, sensor, and display in place."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Test Connections: Before fully assembling your robot, test each component individually to verify its functionality. This helps identify any faulty components or wiring issues early on."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Documentation and Labeling: Document your wiring connections, pin assignments, and any modifications made to the original design. Label wires and components to make troubleshooting and future maintenance easier."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"software-tips",children:"Software tips"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Library Inclusion: Ensure that all the required libraries, namely Wire, Adafruit_AM2320, Adafruit_GFX, and Adafruit_SSD1306, are installed correctly. Verify that the libraries are up to date and compatible with your Arduino IDE version."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Display Initialization: Check the OLED display initialization code. Confirm that the I2C address (0x3C) matches the address of your specific display module. If the display fails to initialize, you may need to double-check the wiring connections or try a different I2C address."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Motor Driver Pins: Validate the pin assignments for the motor driver connections. Confirm that the pins 12, 13, 14, and 15 are correctly connected to the motor driver inputs."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Motor Control Logic: Review the motor control logic in the loop() function. Ensure that the motor control pins are set to appropriate logic levels (HIGH and LOW) to achieve the desired circular motion. Double-check the wiring of the motor driver and verify that the motors are connected properly."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Serial Communication: If any debugging is required, ensure that the Arduino board is connected to the computer and the correct baud rate (9600) is set for the serial communication."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Timing and Delays: Adjust the delay time (2000) in the loop() function to control the duration of each movement cycle. Modify this value as needed for the desired speed and behavior of the robot."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"output",children:"Output"}),"\n",(0,r.jsx)(n.p,{children:"Once the code is uploaded to the ESP WROOM 32, the robot will start moving around. The OLED display will show the real-time temperature readings from the AM2320 sensor."}),"\n",(0,r.jsx)("img",{src:"img\\docs\\robot-temperature-0002.jpg",width:"30%",height:"30%"}),"\n",(0,r.jsx)("img",{src:"img\\docs\\robot-temperature-0001.gif",width:"22%",height:"10%"}),"\n",(0,r.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,r.jsx)(n.p,{children:"Congratulations on successfully building a robot that moves and displays real-time temperature! You have learned how to wire the components, program the ESP WROOM 32 using Arduino IDE, and troubleshoot any potential issues. Feel free to further enhance your robot by adding WiFi or Bluetooth control or exploring additional sensors and functionalities. Have fun experimenting and exploring the world of robotics!"})]})}function c(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},92998:(e,n,i)=>{i.d(n,{A:()=>r});const r=i.p+"assets/images/2473-L293D-Pinout-277986b89faaa06a48253af1995f9bf9.png"},42611:(e,n,i)=>{i.d(n,{A:()=>r});const r=i.p+"assets/images/2609-OLED-Pinout-I2C-3a33a30aa145af4b6c0389ad6fc67c64.jpeg"},28453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>l});var r=i(96540);const t={},o=r.createContext(t);function s(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);