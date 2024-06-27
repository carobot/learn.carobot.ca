"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6149],{77152:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>h,contentTitle:()=>s,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>a});var t=i(74848),r=i(28453);const l={title:"Photocell Module",sidebar_position:1},s="How to use The Photocell Module",o={id:"photocell-module",title:"Photocell Module",description:"The light sensor is a photoresist, which is also known as a light-dependent resistor or photocell. It is used not only to detect light but also to measure the brightness or illuminance level of the ambient light. It has a wide range of applications, such as measuring the brightness of ambient light and controlling the lights turning on and off.",source:"@site/guide/1748-photocell-module.md",sourceDirName:".",slug:"/photocell-module",permalink:"/learn.carobot.ca/guide/photocell-module",draft:!1,unlisted:!1,editUrl:"https://github.com/carobot/learn.carobot.ca/tree/main/guide/1748-photocell-module.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Photocell Module",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"I\xb2C LCD 16\xd72 or 20\xd74 Module",permalink:"/learn.carobot.ca/guide/I^2-LCD-16x2-or-20x4-module"},next:{title:"SW-18015P Motion Vibration Sensor Module",permalink:"/learn.carobot.ca/guide/motion-vibration-sensor-module"}},h={},a=[{value:"Wiring",id:"wiring",level:2},{value:"Parts",id:"parts",level:2},{value:"Wiring Guide",id:"wiring-guide",level:2},{value:"Programming",id:"programming",level:2},{value:"Detect light level and switch the LED on or off",id:"detect-light-level-and-switch-the-led-on-or-off",level:2},{value:"Full Code",id:"full-code",level:2},{value:"Output",id:"output",level:2},{value:"Determine light level",id:"determine-light-level",level:2},{value:"Full Code",id:"full-code-1",level:2},{value:"Output",id:"output-1",level:2},{value:"Controlling the LED by detecting the light level",id:"controlling-the-led-by-detecting-the-light-level",level:2},{value:"Full Code",id:"full-code-2",level:2},{value:"Output",id:"output-2",level:2}];function d(e){const n={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"how-to-use-the-photocell-module",children:"How to use The Photocell Module"}),"\n",(0,t.jsx)(n.p,{children:"The light sensor is a photoresist, which is also known as a light-dependent resistor or photocell. It is used not only to detect light but also to measure the brightness or illuminance level of the ambient light. It has a wide range of applications, such as measuring the brightness of ambient light and controlling the lights turning on and off."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:i(13093).A+"",width:"480",height:"333"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"How it works"}),(0,t.jsx)(n.br,{}),"\n","The more light the photoresist\u2019s face is exposed to, the smaller its resistance is. Therefore, we know how bright the ambient light is by measuring the photoresistor\u2019s resistance.\r\nIn this article, we'll talk about the setup and wiring of the module operating with an Arduino Board. At the end of the tutorial, you will learn how to use the light sensor to control the light turning on and off depending on the illuminance level of the light."]}),"\n",(0,t.jsx)(n.h2,{id:"wiring",children:"Wiring"}),"\n",(0,t.jsxs)(n.p,{children:["The light sensor module operates at 3.3V to 5V, while its analog input pin can convert the voltage (from 0V to 5V) to integer values (between 0 to 1023). There are a few types of light sensor modules in the market where some do not come with a potentiometer for adjusting the sensitivity. We will be using ",(0,t.jsx)(n.a,{href:"https://www.canadarobotix.com/products/1748",children:"Photocell Module"}),", the one we carry in our shop."]}),"\n",(0,t.jsx)(n.p,{children:"This module consists of 4 pins that allow it to connect to a microcontroller, like Arduino."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"GND"}),": Ground pin to connect the sensor to the ground with the microcontroller"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"VCC"}),": Power pin for 3.3V to 5V operation voltage with the microcontroller"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"D0"}),": Digital output pin based on a predefined threshold through the potentiometer and the operation voltage of the microcontroller."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"A0"}),": Analog input pin converts the voltage (between 0V and VCC) into integer values (between 0 and 1023), called analog value."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:i(59086).A+"",width:"480",height:"252"})}),"\n",(0,t.jsx)(n.h2,{id:"parts",children:"Parts"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.canadarobotix.com/products/1748",children:"Photocell Module"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.canadarobotix.com/products/60",children:"Arduino Uno R3"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.canadarobotix.com/products/922",children:"Jumper wires"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.arduino.cc/en/software",children:"Arduino IDE"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"wiring-guide",children:"Wiring Guide"}),"\n",(0,t.jsx)(n.p,{children:"Connect the pins with female to male jumper wires"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:i(88311).A+"",width:"480",height:"387"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Light Sensor ",(0,t.jsx)(n.strong,{children:"GND"})," pin -- Arduino ",(0,t.jsx)(n.strong,{children:"GND"})," pin"]}),"\n",(0,t.jsxs)(n.li,{children:["Light Sensor ",(0,t.jsx)(n.strong,{children:"VCC"})," pin -- Arduino ",(0,t.jsx)(n.strong,{children:"5V"})," pin"]}),"\n",(0,t.jsxs)(n.li,{children:["Light Sensor ",(0,t.jsx)(n.strong,{children:"D0"})," pin -- Arduino ",(0,t.jsx)(n.strong,{children:"D7"})," pin"]}),"\n",(0,t.jsxs)(n.li,{children:["Light Sensor ",(0,t.jsx)(n.strong,{children:"A0"})," pin -- Arduino ",(0,t.jsx)(n.strong,{children:"A0"})," pin"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Connecting for digital outputs"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{src:i(55672).A+"",width:"480",height:"266"}),"\r\n",(0,t.jsx)(n.img,{src:i(76801).A+"",width:"480",height:"319"})]}),"\n",(0,t.jsx)(n.p,{children:"**Connecting for Analog input **"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{src:i(46218).A+"",width:"480",height:"147"}),"\r\n",(0,t.jsx)(n.img,{src:i(1427).A+"",width:"480",height:"259"}),"\r\n",(0,t.jsx)(n.img,{src:i(6132).A+"",width:"480",height:"313"})]}),"\n",(0,t.jsx)(n.h2,{id:"programming",children:"Programming"}),"\n",(0,t.jsx)(n.p,{children:"**We will have 3 different coding projects. If you want to go to a specific one, please click on the title you want. **"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Detect light level and switch the LED on or off"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Determine light level"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Controlling the LED by detecting the light level"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"detect-light-level-and-switch-the-led-on-or-off",children:"Detect light level and switch the LED on or off"}),"\n",(0,t.jsx)(n.p,{children:"We want to turn on the internal LED on Arduino Uno when the brightness level is low on the ambient light."}),"\n",(0,t.jsx)(n.p,{children:"If you want to skip the steps, you can jump to the Full Code."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Step 1:"})," Define the connection pins."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:"#define sensor 7 \r\n#define internal_LED 13\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Step 2:"})," Create a variable to store the digital output from the light sensor."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:"int state = 0;\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Step 3:"})," Set up serial communication between Arduino and light sensor, and set internal led as an output, and sensor as input. This way the sensor will send the signal to Arduino, and Arduino will give out a signal and perform the action on the LED light."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:'void setup(){\r\n  pinMode(sensor, INPUT);\r\n  pinMode(internal_LED, OUTPUT);\r\n  Serial.begin(9600);\r\n}\r\n\r\n**Step 4:** Get digital output from sensor, and print out the data. \r\n\r\n```c\r\nvoid loop(){\r\n  state = digitalRead(sensor);\r\n  Serial.print("State: ");\r\n  Serial.print(state);\n'})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Step 5:"})," Determine if the LED should be on or off. The LED will be on if the sensor is HIGH (when the brightness level is low), and the LED will be off if the sensor is LOW (when the brightness level is high)."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:'  if (state == HIGH){\r\n    digitalWrite(internal_LED, HIGH);\r\n    Serial.println(" \\t LED ON");\r\n  }\r\n  else{\r\n    digitalWrite(internal_LED, LOW);\r\n    Serial.println("\\t LED OFF");\r\n  }\r\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"full-code",children:"Full Code"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:'#define sensor 7 \r\n#define internal_LED 13 \r\n\r\nint state = 0;\r\n\r\nvoid setup(){\r\n  pinMode(sensor, INPUT);\r\n  pinMode(internal_LED, OUTPUT);\r\n  Serial.begin(9600);\r\n}\r\n\r\nvoid loop(){\r\n  state = digitalRead(sensor);\r\n  Serial.print("State: ");\r\n  Serial.print(state);\r\n\r\n  if (state == HIGH){\r\n    digitalWrite(internal_LED, HIGH);\r\n    Serial.println(" \\t LED ON");\r\n  }\r\n  else{\r\n    digitalWrite(internal_LED, LOW);\r\n    Serial.println("\\t LED OFF");\r\n  }\r\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"output",children:"Output"}),"\n",(0,t.jsx)(n.p,{children:"When it is dark enough, the internal LED (The light next to pin 13) will turn on."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:i(22813).A+"",width:"398",height:"223"})}),"\n",(0,t.jsx)(n.p,{children:"The internal led light will turn on when it is dark. Take a closer look at the light near pin 13 on Arduino."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:i(80754).A+"",width:"400",height:"225"})}),"\n",(0,t.jsx)(n.p,{children:"When it is still bright"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:i(1703).A+"",width:"178",height:"145"})}),"\n",(0,t.jsx)(n.p,{children:"When it is dark"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:i(14014).A+"",width:"164",height:"117"})}),"\n",(0,t.jsx)(n.h2,{id:"determine-light-level",children:"Determine light level"}),"\n",(0,t.jsx)(n.p,{children:"In the following code, we will read the data from the analog pin and depending on the data, we will know the brightness level of the ambient light around us."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Noted that we are using the analog pin now, instead of the digital pin. Please check this image for the wiring."})}),"\n",(0,t.jsx)(n.p,{children:"If you want to skip the steps,you can jump to the Full Code."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Step 1:"})," Define the connection pin."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:"#define sensor A0\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Step 2:"})," Create a variable for storing analog input data."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:"int value = 0;\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Step 3:"})," Set up serial communication between Arduino and the light sensor, and set the sensor as an input. This way, the sensor will send the signal to Arduino, and Arduino will perform actions from receiving it."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:"void setup(){\r\n  Serial.begin(9600);\r\n  pinMode(sensor, INPUT);\r\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Step 4:"})," Get input value from analog pin."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:'void loop(){\r\n  value = analogRead(sensor);\r\n\r\n  Serial.print("Analog reading: ");\r\n  Serial.print(value);\n'})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Step 5:"})," Determine the brightness level of the ambient light around us. (You might want to test out the values yourself)"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:' if (value < 10){\r\n    Serial.println("\\t -- Very Bright");\r\n  }\r\n  else if (value < 200){\r\n    Serial.println("\\t -- Bright");\r\n  }\r\n  else if (value < 500){\r\n    Serial.println("\\t -- Light");\r\n  }\r\n  else if (value < 800){\r\n    Serial.println("\\t -- Dim");\r\n  }\r\n  else{\r\n    Serial.println("\\t -- Dark");\r\n  }\r\n\r\n  delay(500);\r\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"full-code-1",children:"Full Code"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:'#define sensor A0 \r\n\r\nint value = 0;\r\n\r\nvoid setup(){\r\n  Serial.begin(9600);\r\n  pinMode(sensor, INPUT);\r\n}\r\n\r\nvoid loop(){\r\n  value = analogRead(sensor);\r\n\r\n  Serial.print("Analog reading: ");\r\n  Serial.print(value);\r\n\r\n  if (value < 10){\r\n    Serial.println("\\t -- Very Bright");\r\n  }\r\n  else if (value < 200){\r\n    Serial.println("\\t -- Bright");\r\n  }\r\n  else if (value < 500){\r\n    Serial.println("\\t -- Light");\r\n  }\r\n  else if (value < 800){\r\n    Serial.println("\\t -- Dim");\r\n  }\r\n  else{\r\n    Serial.println("\\t -- Dark");\r\n  }\r\n\r\n  delay(500);\r\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"output-1",children:"Output"}),"\n",(0,t.jsx)(n.p,{children:"Move around and test it out!"}),"\n",(0,t.jsx)(n.p,{children:"Arduino will tell you the brightness level of the light around you depending on the analog output the sensor produces. The higher the value, the darker the brightness level."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{src:i(16117).A+"",width:"302",height:"480"}),"\r\n",(0,t.jsx)(n.img,{src:i(33228).A+"",width:"228",height:"225"})]}),"\n",(0,t.jsx)(n.h2,{id:"controlling-the-led-by-detecting-the-light-level",children:"Controlling the LED by detecting the light level"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Noted that we are using the analog pin now, instead of the digital pin. Please check this image for the wiring."})}),"\n",(0,t.jsx)(n.p,{children:"In the following code, we will detect the light level and control the light. If the brightness level is on a certain value, it means it is dark enough to turn on the light. Otherwise, the light will be off. If you want to skip the steps, you can jump to the Full Code."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Step 1:"})," Define the connection pins."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:"#define sensor A0\r\n#define internal_LED 13\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Step 2:"})," Create two variables to store analog input and store a value to compare with analog input."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:"const int analog_threshold = 500;\r\nint value = 0;\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Step 3:"})," Set the light sensor as input and the internal led as output. This way, the sensor will send a signal to Arduino, and Arduino will act upon it and send the output signal to the LED."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:"void setup(){\r\n  pinMode(sensor, INPUT);\r\n  pinMode(internal_LED, OUTPUT);\r\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Step 4:"})," Get analog input from sensor."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:"void loop(){\r\n  value = analogRead(sensor);\r\nStep 5: Compare the input with the value. If the input is less than the value, it means it is still bright. Otherwise, it means it is too dark.  \r\n\r\n  if (value > analog_threshold){\r\n    digitalWrite(internal_LED, HIGH);\r\n  }\r\n  else{\r\n    digitalWrite(internal_LED, LOW);\r\n  }\r\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"full-code-2",children:"Full Code"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:"#define sensor A0\r\n#define internal_LED 13\r\n\r\nconst int analog_threshold = 500;\r\nint value = 0;\r\n\r\nvoid setup(){\r\n  pinMode(sensor, INPUT);\r\n  pinMode(internal_LED, OUTPUT);\r\n}\r\n\r\nvoid loop(){\r\n  value = analogRead(sensor);\r\n\r\n  if (value > analog_threshold){\r\n    digitalWrite(internal_LED, HIGH);\r\n  }\r\n  else{\r\n    digitalWrite(internal_LED, LOW);\r\n  }\r\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"output-2",children:"Output"}),"\n",(0,t.jsx)(n.p,{children:"As we cover up the photocell, the brightness level will be lower than the threshold value, which Arduino will turn on the internal led (the light next to pin 13)."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:i(63395).A+"",width:"400",height:"190"})}),"\n",(0,t.jsx)(n.p,{children:"The internal led is next to pin 13 on Arduino. It will turn on and off according to the brightness level."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:i(13197).A+"",width:"400",height:"225"})})]})}function c(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},80754:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/1748_01-5c0cbf04eed4a432dbf2e23de1664dcb.gif"},13093:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/1748_01-8e0d21e26b0226169dc1b8a120fa3f5a.png"},13197:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/1748_02-3ba0442c13f6b33e0c93be9d04f2aaf2.gif"},59086:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/1748_02-df33e45a66e6f7d23445e400343152a0.png"},88311:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/1748_03-4ecc85ac03b8573dc3883aec2632449a.png"},55672:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/1748_04-b9b5e623091cbd865307371f94f92657.png"},76801:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/1748_05-443c4b3d32eae4cab0aecc7f57eb504a.png"},46218:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/1748_06-85d74fdfeb7078a160969637af60ce0f.png"},1427:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/1748_07-1d28c278ef552608c7c85d095c57657d.png"},6132:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/1748_08-0550278946610d828e1bbc81e0afc45a.png"},22813:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/1748_09-d16d0d5bb8b776a01650c96fb53280c7.png"},1703:(e,n,i)=>{i.d(n,{A:()=>t});const t="data:image/png;base64,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"},14014:(e,n,i)=>{i.d(n,{A:()=>t});const t="data:image/png;base64,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"},16117:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/1748_12-99ed2d47a9d06c5627e5d55cbc9367c4.png"},33228:(e,n,i)=>{i.d(n,{A:()=>t});const t="data:image/png;base64,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"},63395:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/1748_14-cfd5948f359ac0e08f060229e58246ee.png"},28453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>o});var t=i(96540);const r={},l=t.createContext(r);function s(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);