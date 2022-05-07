"use strict";(self.webpackChunklearn_at_carobotix=self.webpackChunklearn_at_carobotix||[]).push([[519],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||a;return n?o.createElement(h,i(i({ref:t},d),{},{components:n})):o.createElement(h,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},56634:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return d},default:function(){return c}});var o=n(87462),r=n(63366),a=(n(67294),n(3905)),i=["components"],l={title:"CAROBOT Motor Shield v3 Guide",sidebar_position:4},s=void 0,p={unversionedId:"product_guide/motor-shield-v3",id:"product_guide/motor-shield-v3",title:"CAROBOT Motor Shield v3 Guide",description:"The CAROBOT Motor Shield allows you to easily control motor direction and speed using an Arduino. By allowing you to simply address Arduino pins, it makes it very simple to incorporate a motor into your project. It also allows you to be able to power a motor with a separate power supply of up to 12v. For all of these reasons, this motor shield is a popular device that is commonly used in projects, such as robot cars, and much more.",source:"@site/guide/product_guide/2337-motor-shield-v3.md",sourceDirName:"product_guide",slug:"/product_guide/motor-shield-v3",permalink:"/guide/product_guide/motor-shield-v3",editUrl:"https://github.com/carobot/carobot.github.io/tree/main/guide/product_guide/2337-motor-shield-v3.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"CAROBOT Motor Shield v3 Guide",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Infrared Sensor Module (TCRT5000) Guide",permalink:"/guide/product_guide/infrared-sensor-module"},next:{title:"HC-SR04 Ultrasonic Sensor Guide",permalink:"/guide/product_guide/ultrasonic-ranging-sensor"}},d=[{value:"Parts",id:"parts",children:[],level:2},{value:"Wiring Guide",id:"wiring-guide",children:[],level:2},{value:"Wiring PinOut",id:"wiring-pinout",children:[],level:2},{value:"Motor Pinout",id:"motor-pinout",children:[],level:2},{value:"Servo Motor Pinout",id:"servo-motor-pinout",children:[],level:2},{value:"Connecting a gear motor onto the Shield",id:"connecting-a-gear-motor-onto-the-shield",children:[],level:2},{value:"Programming",id:"programming",children:[],level:2},{value:"Code Explanation",id:"code-explanation",children:[],level:2},{value:"Full Code:",id:"full-code",children:[],level:2},{value:"Output",id:"output",children:[],level:2},{value:"Connecting a servo motor onto the Shield",id:"connecting-a-servo-motor-onto-the-shield",children:[],level:2},{value:"Programming",id:"programming-1",children:[],level:2},{value:"Code Explanation",id:"code-explanation-1",children:[],level:2},{value:"Full Code:",id:"full-code-1",children:[],level:2},{value:"Output",id:"output-1",children:[],level:2}],u={toc:d};function c(e){var t=e.components,l=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The CAROBOT Motor Shield allows you to easily control motor direction and speed using an Arduino. By allowing you to simply address Arduino pins, it makes it very simple to incorporate a motor into your project. It also allows you to be able to power a motor with a separate power supply of up to 12v. For all of these reasons, this motor shield is a popular device that is commonly used in projects, such as robot cars, and much more. "),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(90949).Z,width:"480",height:"311"})),(0,a.kt)("p",null,"In this article, we will talk about the setup and operation of the CAROBOT Motor shield with Arduino. "),(0,a.kt)("h2",{id:"parts"},"Parts"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.canadarobotix.com/2337"},"CAROBOT Motor Shield V3")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.canadarobotix.com/60"},"Arduino Uno R3")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.canadarobotix.com/2664"},"Gear Motor")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.canadarobotix.com/1621"},"Servo Motor"))),(0,a.kt)("h2",{id:"wiring-guide"},"Wiring Guide"),(0,a.kt)("p",null,"The pins of the motor shield is designed to stack on Arduino Uno as it will only align with it. In order to make it work with other versions of Arduino boards, you will need to use jumper wires to connect the according pins. "),(0,a.kt)("p",null,"All you need to do is to stack the motor shield onto Arduino Uno. "),(0,a.kt)("p",null,"Make sure you match the pins with Arduino Uno before stacking. "),(0,a.kt)("p",null," ",(0,a.kt)("img",{src:n(90617).Z,width:"400",height:"208"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"After stacking")),(0,a.kt)("p",null,"The header pins will not go all the way down in the stackable pins. "),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"Side view")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"Top view")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{src:n(10725).Z,width:"480",height:"279"})),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{src:n(38706).Z,width:"480",height:"363"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{src:n(53352).Z,width:"480",height:"300"})),(0,a.kt)("td",{parentName:"tr",align:null})))),(0,a.kt)("h2",{id:"wiring-pinout"},"Wiring PinOut"),(0,a.kt)("p",null,"The motor shield has 6 channels, which allows for the control of 4 DC motors and 2 stepper motors. "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"2 connections for 5V ",(0,a.kt)("strong",{parentName:"li"},"'hobby' servos")," connected to the Arduino's high-resolution dedicated timer"),(0,a.kt)("li",{parentName:"ul"},"4 ",(0,a.kt)("strong",{parentName:"li"},"H-Bridges")," that can run motors on 4.5V DC to 13.5V DC")),(0,a.kt)("p",null,"There are pins on the Arduino that are always in use by the shield. By addressing these pins, you can select a motor channel to initiate, specify the motor direction and stop and start the motor "),(0,a.kt)("h2",{id:"motor-pinout"},"Motor Pinout"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Motor #"),(0,a.kt)("th",{parentName:"tr",align:null},"Pin 1"),(0,a.kt)("th",{parentName:"tr",align:null},"Pin 2"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Motor 1 (M1)"),(0,a.kt)("td",{parentName:"tr",align:null},"10"),(0,a.kt)("td",{parentName:"tr",align:null},"9")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Motor 2 (M2)"),(0,a.kt)("td",{parentName:"tr",align:null},"11"),(0,a.kt)("td",{parentName:"tr",align:null},"12")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Motor 3 (M3)"),(0,a.kt)("td",{parentName:"tr",align:null},"4"),(0,a.kt)("td",{parentName:"tr",align:null},"3")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Motor 4 (M4)"),(0,a.kt)("td",{parentName:"tr",align:null},"5"),(0,a.kt)("td",{parentName:"tr",align:null},"6")))),(0,a.kt)("h2",{id:"servo-motor-pinout"},"Servo Motor Pinout"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Servo #"),(0,a.kt)("th",{parentName:"tr",align:null},"Pin"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Servo 1"),(0,a.kt)("td",{parentName:"tr",align:null},"8")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Servo 2"),(0,a.kt)("td",{parentName:"tr",align:null},"9")))),(0,a.kt)("p",null,"For more information about the technical specs, check out the motor shield's official page on the our website. "),(0,a.kt)("h2",{id:"connecting-a-gear-motor-onto-the-shield"},"Connecting a gear motor onto the Shield"),(0,a.kt)("p",null,"To control a motor using the CAROBOT Motor Shield, first plug the motor's positive (red) wire into one of Channel A's terminal on the motor shield, and the motor's ground (black) wire into the other Channel A's terminal on the shield. "),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(99890).Z,width:"400",height:"311"}),"\n",(0,a.kt)("img",{src:n(17790).Z,width:"400",height:"351"}),"\n",(0,a.kt)("img",{src:n(49665).Z,width:"480",height:"308"})),(0,a.kt)("p",null,'Next, connect your external power supply to the CAROBOT Motor Shield. Connect the positive (red) wire from the power supply to the "VIN" terminal, and the ground (black) wire to the "GND" terminal. '),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("img",{src:n(84597).Z,width:"400",height:"300"})),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("img",{src:n(53964).Z,width:"400",height:"328"})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{src:n(47831).Z,width:"480",height:"342"})),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{src:n(73601).Z,width:"480",height:"343"}))))),(0,a.kt)("h2",{id:"programming"},"Programming"),(0,a.kt)("p",null,"To begin controlling motors, you will need to install the motor shield library online. "),(0,a.kt)("p",null,"Step 1: Go to ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Arduino > Sketch > Include Library > Manage Libraries"))),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(10539).Z,width:"480",height:"137"})),(0,a.kt)("p",null,'Step 2: Type in "',(0,a.kt)("strong",{parentName:"p"},"Adafruit motor"),'" to locate the library. '),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(75155).Z,width:"480",height:"264"})),(0,a.kt)("p",null,'Step 3: Find "',(0,a.kt)("strong",{parentName:"p"},"Adafruit Motor Shield V2 Library"),'" and click ',(0,a.kt)("strong",{parentName:"p"},"Install.")," "),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(86863).Z,width:"480",height:"272"})),(0,a.kt)("p",null,"Step 4: Go to ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Arduino > Sketch > Include Library"))," and you will be able to see the library installed onto your Arduino. "),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(25355).Z,width:"423",height:"480"})),(0,a.kt)("p",null,"Step 5: Once you have installed the library, go to ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"File > Examples > Adafruit_MotorShield > DCMotorTest"))),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(73372).Z,width:"397",height:"480"})),(0,a.kt)("h2",{id:"code-explanation"},"Code Explanation"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 1:")," Include libraries"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"#include <Wire.h>\n#include <Adafruit_MotorShield.h>\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 2:")," Create a motor object to control the motor "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"Adafruit_MotorShield AFMS = Adafruit_MotorShield(); \n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 3:")," Define the connection pin. We connected the motor in M1 channel, so we will use AFMS.getMotor(1). "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"Adafruit_DCMotor *myMotor = AFMS.getMotor(1);\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 4:")," Set up serial communication between Arduino and the motor and print out message. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'void setup() {\n  Serial.begin(9600);           \n  Serial.println("Adafruit Motorshield v2 - DC Motor test!");\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 5:")," Let the program begin and set the speed and turn on the motor. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"  AFMS.begin();  // create with the default frequency 1.6KHz\n  \n  // Set the speed to start, from 0 (off) to 255 (max speed)\n  myMotor->setSpeed(150);\n  myMotor->run(FORWARD);\n  // turn on motor\n  myMotor->run(RELEASE);\n}\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 6:")," Let the motor go forward and set the speed to increase 1 every time until it reaches to the max speed. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'void loop() {\n  uint8_t i;\n  \n  Serial.print("tick");\n\n  myMotor->run(FORWARD);\n  for (i=0; i<255; i++) {\n    myMotor->setSpeed(i);  \n    delay(10);\n  }\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 7:")," Once the motor reaches to the max speed, it will slow down and decrease its speed by 1 each time. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"}," for (i=255; i!=0; i--) {\n    myMotor->setSpeed(i);  \n    delay(10);\n  }\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 8:")," Let the motor move backwards and set the speed to increase 1 every time until it reaches to the max speed. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"myMotor->run(BACKWARD);\n  for (i=0; i<255; i++) {\n    myMotor->setSpeed(i);  \n    delay(10);\n  }\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 9:")," Once the motor reaches to the max speed, it will slow down and decrease its speed by 1 each time. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"for (i=255; i!=0; i--) {\n    myMotor->setSpeed(i);  \n    delay(10);\n  }\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 10:")," set the motor to go full speed and delay for 1 second. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"myMotor->run(RELEASE);\n  delay(1000);\n}\n")),(0,a.kt)("h2",{id:"full-code"},"Full Code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'#include <Wire.h>\n#include <Adafruit_MotorShield.h>\n\nAdafruit_MotorShield AFMS = Adafruit_MotorShield(); \n\nAdafruit_DCMotor *myMotor = AFMS.getMotor(1);\n\nvoid setup() {\n  Serial.begin(9600);           \n  Serial.println("Adafruit Motorshield v2 - DC Motor test!");\n\n  AFMS.begin();  // create with the default frequency 1.6KHz\n  \n  // Set the speed to start, from 0 (off) to 255 (max speed)\n  myMotor->setSpeed(150);\n  myMotor->run(FORWARD);\n  // turn on motor\n  myMotor->run(RELEASE);\n}\n\nvoid loop() {\n  uint8_t i;\n  \n  Serial.print("tick");\n\n  myMotor->run(FORWARD);\n  for (i=0; i<255; i++) {\n    myMotor->setSpeed(i);  \n    delay(10);\n  }\n  for (i=255; i!=0; i--) {\n    myMotor->setSpeed(i);  \n    delay(10);\n  }\n  \n  Serial.print("tock");\n\n  myMotor->run(BACKWARD);\n  for (i=0; i<255; i++) {\n    myMotor->setSpeed(i);  \n    delay(10);\n  }\n  for (i=255; i!=0; i--) {\n    myMotor->setSpeed(i);  \n    delay(10);\n  }\n\n  Serial.print("tech");\n  myMotor->run(RELEASE);\n  delay(1000);\n}\n')),(0,a.kt)("h2",{id:"output"},"Output"),(0,a.kt)("p",null,"Now, you should see the DC motor turn on and move back and forth. "),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(93882).Z,width:"362",height:"480"})),(0,a.kt)("h2",{id:"connecting-a-servo-motor-onto-the-shield"},"Connecting a servo motor onto the Shield"),(0,a.kt)("p",null,"Hobby servos are the easiest way to get going with motor control. They consist of 3 pins: +5V, GND and signal inputs. The motor brings out the PWM output lines from Arduino pins 8 and 9 to two 3-pin headers so that it is easier to plug in and go. "),(0,a.kt)("p",null,"To control a motor using the CAROBOT Motor Shield, first plug the servo motor's pins into the headers. "),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(51986).Z,width:"468",height:"344"}),"\n",(0,a.kt)("img",{src:n(6238).Z,width:"400",height:"336"}),"\n",(0,a.kt)("img",{src:n(99061).Z,width:"480",height:"251"})),(0,a.kt)("p",null,"We do not need an external power supply for the servo motor as the motor receives power from the Arduino's on-board 5V regulator, powered directly from the USB or DC power jack on the Arduino. "),(0,a.kt)("h2",{id:"programming-1"},"Programming"),(0,a.kt)("p",null,"There is a built-in Servo Library in Arduino that you can use for this project. "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 1: Go to ",(0,a.kt)("em",{parentName:"strong"},"File > Examples > Servo > Sweep"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 2:")," Change the connection pin to be ",(0,a.kt)("strong",{parentName:"p"},"pin 8")," instead of 9. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"void setup() {\n  myservo.attach(8);  // attaches the servo on pin 9 to the servo object\n}\n")),(0,a.kt)("h2",{id:"code-explanation-1"},"Code Explanation"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 1:")," Include Library"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"#include <Servo.h>\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 2:")," Create a servo object to control the servo"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"Servo myservo;  // create servo object to control a servo\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 3:")," Create a variable to store the position of the servo"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"int pos = 0;    // variable to store the servo position\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 4:")," Define the connection pin"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"void setup() {\n  myservo.attach(8);  // attaches the servo on pin 9 to the servo object\n}\nStep 5: The servo will go from 0 degree to 180 degree by adding 1 degree each time and delay for 15 milliseconds. \n\nvoid loop() {\n  for (pos = 0; pos <= 180; pos += 1) { // goes from 0 degrees to 180 degrees\n    // in steps of 1 degree\n    myservo.write(pos);              // tell servo to go to position in variable 'pos'\n    delay(15);                       // waits 15ms for the servo to reach the position\n  }\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 6:")," The servo will go back to the original position from 180 degree to 0 degree by decreasing 1 degree each other and delay for 15milliseconds. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"for (pos = 180; pos >= 0; pos -= 1) { // goes from 180 degrees to 0 degrees\n    myservo.write(pos);              // tell servo to go to position in variable 'pos'\n    delay(15);                       // waits 15ms for the servo to reach the position\n  }\n}\n")),(0,a.kt)("h2",{id:"full-code-1"},"Full Code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"#include <Servo.h>\n\nServo myservo;  // create servo object to control a servo\n\nint pos = 0;    // variable to store the servo position\n\nvoid setup() {\n  myservo.attach(8);  // attaches the servo on pin 9 to the servo object\n}\n\nvoid loop() {\n  for (pos = 0; pos <= 180; pos += 1) { // goes from 0 degrees to 180 degrees\n    // in steps of 1 degree\n    myservo.write(pos);              // tell servo to go to position in variable 'pos'\n    delay(15);                       // waits 15ms for the servo to reach the position\n  }\n  for (pos = 180; pos >= 0; pos -= 1) { // goes from 180 degrees to 0 degrees\n    myservo.write(pos);              // tell servo to go to position in variable 'pos'\n    delay(15);                       // waits 15ms for the servo to reach the position\n  }\n}\n")),(0,a.kt)("h2",{id:"output-1"},"Output"),(0,a.kt)("p",null,"Now, you should be able to see the servo motor arm going back and forth.\n",(0,a.kt)("img",{src:n(91962).Z,width:"400",height:"235"})))}c.isMDXComponent=!0},90617:function(e,t,n){t.Z=n.p+"assets/images/2337_01-2c08fbf922f8d276b361a339dc3639cd.gif"},90949:function(e,t,n){t.Z=n.p+"assets/images/2337_01-d6c29cca7cac6cdcb8efb94834a11346.png"},99890:function(e,t,n){t.Z=n.p+"assets/images/2337_02-97cb862a8d350f3cea0631a77668342c.gif"},10725:function(e,t,n){t.Z=n.p+"assets/images/2337_02-46c9ad56f307bc8977acdfc1ce8c71b1.png"},17790:function(e,t,n){t.Z=n.p+"assets/images/2337_03-101801295cc8e1713d8fe3ec02d147e1.gif"},53352:function(e,t,n){t.Z=n.p+"assets/images/2337_03-37129fa3c11a4f00b6ac0248911e7448.png"},84597:function(e,t,n){t.Z=n.p+"assets/images/2337_04-7c587e70304edf5362caeca6b86a7429.gif"},38706:function(e,t,n){t.Z=n.p+"assets/images/2337_04-0b0e86349fa3aec2f22d9fdd93dddc1d.png"},53964:function(e,t,n){t.Z=n.p+"assets/images/2337_05-b8a5a63fe6c6b769168174af524e9a27.gif"},49665:function(e,t,n){t.Z=n.p+"assets/images/2337_05-fc3e5f8fa158c6ee4ab67a44e7b3ac7a.png"},93882:function(e,t,n){t.Z=n.p+"assets/images/2337_06-63cde74d3581296347c9b60c842141c9.gif"},47831:function(e,t,n){t.Z=n.p+"assets/images/2337_06-d59dbbae4b7e83510c3fbfdaf6291506.png"},6238:function(e,t,n){t.Z=n.p+"assets/images/2337_07-3ac53eb16dea92b99edee379ec0ff41d.gif"},73601:function(e,t,n){t.Z=n.p+"assets/images/2337_07-24172cf33c3a4ec0fba23aca3f22c443.png"},91962:function(e,t,n){t.Z=n.p+"assets/images/2337_08-9c846af48ad593dc308a5f5901611640.gif"},10539:function(e,t,n){t.Z=n.p+"assets/images/2337_08-ce58a691c781de3fde1594d0db41436f.png"},75155:function(e,t,n){t.Z=n.p+"assets/images/2337_09-c31c1d51bc4f5805a2e898b8c7896497.png"},86863:function(e,t,n){t.Z=n.p+"assets/images/2337_10-4fc8c0fe9e82ad843090e88ca58634a9.png"},25355:function(e,t,n){t.Z=n.p+"assets/images/2337_11-0652a4e49680b87aefe802ba7b1af5b0.png"},73372:function(e,t,n){t.Z=n.p+"assets/images/2337_12-93e5f5a3cc145ae7268ca15b69d3d420.png"},51986:function(e,t,n){t.Z=n.p+"assets/images/2337_13-686fc67632b948254437bc60a69a5a67.png"},99061:function(e,t,n){t.Z=n.p+"assets/images/2337_14-39f3dabae5ad1a96360a7660a7aec932.png"}}]);