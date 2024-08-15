"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2501],{1577:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>d,toc:()=>l});var o=s(74848),t=s(28453);const i={title:"MQ-3 Alcohol Ethanol Gas Sensor",sidebar_position:1},r="How to use The MQ-3 Alcohol Ethanol Gas Sensor",d={id:"alcohol-ethanol-gas-sensor",title:"MQ-3 Alcohol Ethanol Gas Sensor",description:"The MQ-3 sensor is one of the most commonly used sensors in the MQ sensor series. It is a chemiresisotors because sensing is based on the change of resistance of the sensing material when it is exposed to alcohol.",source:"@site/guide/2175-alcohol-ethanol-gas-sensor.md",sourceDirName:".",slug:"/alcohol-ethanol-gas-sensor",permalink:"/guide/alcohol-ethanol-gas-sensor",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"MQ-3 Alcohol Ethanol Gas Sensor",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Mini PIR Sensor Module",permalink:"/guide/mini-pir-sensor"},next:{title:"Photodiode Module",permalink:"/guide/photodiode-sensor-module"}},a={},l=[{value:"Wiring",id:"wiring",level:2},{value:"Parts",id:"parts",level:2},{value:"Wiring Guide",id:"wiring-guide",level:2},{value:"Programming",id:"programming",level:2},{value:"Full Code",id:"full-code",level:2},{value:"Output",id:"output",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"how-to-use-the-mq-3-alcohol-ethanol-gas-sensor",children:"How to use The MQ-3 Alcohol Ethanol Gas Sensor"}),"\n",(0,o.jsx)(n.p,{children:"The MQ-3 sensor is one of the most commonly used sensors in the MQ sensor series. It is a chemiresisotors because sensing is based on the change of resistance of the sensing material when it is exposed to alcohol."}),"\n",(0,o.jsx)(n.p,{children:"In this article, we will talk about how to wire and set up the module for operation with an Arduino Board."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:s(56236).A+"",width:"277",height:"164"})}),"\n",(0,o.jsx)(n.h2,{id:"wiring",children:"Wiring"}),"\n",(0,o.jsx)(n.p,{children:"MQ-03 alcohol sensor operates at 5V DC and draws around 800mW. It can detect alcohol concentrations anywhere from 25ppm to 500 ppm. It comes with both the digital and analog output pins. The analog output voltage provided by the sensor varies in proportion to the alcohol concentration. The higher the alcohol concentration in the air, the higher the output voltage; whereas lower concentration gives lower output voltage. The same analog signal is fed to a LM393 comparator to digitize it and is made available at the digital output pin."}),"\n",(0,o.jsx)(n.p,{children:"The sensor has a built-in potentiometer for adjusting the sensitivity of the digital output where it can be used to set a threshold, so that when the alcohol concentration exceeds the value, the sensor will output LOW otherwise HIGH. The sensor also comes with two LEDs, the power LED will light up when the sensor is powered, while the status LED will light up when the digital output goes LOW."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:s(75239).A+"",width:"443",height:"342"})}),"\n",(0,o.jsxs)(n.p,{children:["For this project, we will be using ",(0,o.jsx)(n.a,{href:"https://www.canadarobotix.com/2175",children:"MQ-3 Alcohol Sensor"}),", the one we carry in our shop. This module consists of 4 pins: VCC, A0, D0 and GND."]}),"\n",(0,o.jsx)(n.h2,{id:"parts",children:"Parts"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://www.canadarobotix.com/2175",children:"MQ-3 Alcohol Sensor"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://www.canadarobotix.com/223",children:"BreadBoard"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://www.canadarobotix.com/products/60",children:"Arduino Uno R3"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://www.canadarobotix.com/products/922",children:"Jumper wires"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://www.arduino.cc/en/software",children:"Arduino IDE"})}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"wiring-guide",children:"Wiring Guide"}),"\n",(0,o.jsx)(n.p,{children:"Connect the pins with male to male jumper wires on the breadboard"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:s(6398).A+"",width:"480",height:"319"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["MQ-3 ",(0,o.jsx)(n.strong,{children:"VCC"})," -- Arduino ",(0,o.jsx)(n.strong,{children:"5V"})," pin"]}),"\n",(0,o.jsxs)(n.li,{children:["MQ-3 ",(0,o.jsx)(n.strong,{children:"D0"})," -- Arduino ",(0,o.jsx)(n.strong,{children:"D7"})," pin"]}),"\n",(0,o.jsxs)(n.li,{children:["MQ-3 ",(0,o.jsx)(n.strong,{children:"GND"})," -- Arduino ",(0,o.jsx)(n.strong,{children:"GND"})," pin"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.img,{src:s(89489).A+"",width:"480",height:"310"}),"\r\n",(0,o.jsx)(n.img,{src:s(95624).A+"",width:"480",height:"266"})]}),"\n",(0,o.jsx)(n.h2,{id:"programming",children:"Programming"}),"\n",(0,o.jsx)(n.p,{children:"The code below demonstrates how the MQ-03 sensor works and detects alcohol. If you want to skip the steps and jump to the Full Code."}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Step 1:"})," Calibrate the sensor by blowing your alcohol breath on the sensor or squeeze the isopropyl alcohol bottle to breathe the vapours of the alcohol into the sensor and adjust the pot clockwise so that the Status LED is ON and then adjust the pot back counterclockwise just until the LED goes OFF."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Step 2:"})," Define the connection pin."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-c",children:"#define sensor 7\n"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Step 3:"})," Create a variable for storing the sensor's value"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-c",children:"int sensorValue;  //variable to store sensor value\n"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Step 4:"})," Set up serial communication between Arduino and mq-03 sensor and set the sensor as an input."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-c",children:"void setup() {\r\n  Serial.begin(9600); // sets the serial port to 9600\r\n  pinMode(sensor, INPUT);\r\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Step 5:"})," Read the sensor's output"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-c",children:"void loop() {\r\n  sensorValue = digitalRead(sensor); // read digital output pin\n"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Step 6:"})," Print out the message accordingly."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-c",children:'Serial.print("Digital Output: ");\r\n  Serial.print(sensorValue);\r\n  \r\n  // Determine the status\r\n  if (sensorValue) {\r\n    Serial.println("  |  Alcohol: -");\r\n  } else {\r\n    Serial.println("  |  Alcohol: Detected!");\r\n  }\n'})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Step 7:"})," Delay 2 seconds for the next reading."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-c",children:"  delay(2000); // wait 2s for next reading\r\n}\n"})}),"\n",(0,o.jsx)(n.h2,{id:"full-code",children:"Full Code"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-c",children:'#define sensor 7\r\n\r\nint sensorValue;  //variable to store sensor value\r\n\r\nvoid setup() {\r\n  Serial.begin(9600); // sets the serial port to 9600\r\n  pinMode(sensor, INPUT);\r\n}\r\n\r\nvoid loop() {\r\n  sensorValue = digitalRead(sensor); // read digital output pin\r\n  Serial.print("Digital Output: ");\r\n  Serial.print(sensorValue);\r\n  \r\n  // Determine the status\r\n  if (sensorValue) {\r\n    Serial.println("  |  Alcohol: -");\r\n  } else {\r\n    Serial.println("  |  Alcohol: Detected!");\r\n  }\r\n  \r\n  delay(2000); // wait 2s for next reading\r\n}\n'})}),"\n",(0,o.jsx)(n.h2,{id:"output",children:"Output"}),"\n",(0,o.jsx)(n.p,{children:"When there is no alcohol detected"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:s(32483).A+"",width:"250",height:"145"})}),"\n",(0,o.jsx)(n.p,{children:"When alcohol is detected"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:s(68378).A+"",width:"288",height:"148"})})]})}function c(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},56236:(e,n,s)=>{s.d(n,{A:()=>o});const o=s.p+"assets/images/2175_01-f80af2d5c48651061bc61d5a39d9671a.png"},75239:(e,n,s)=>{s.d(n,{A:()=>o});const o=s.p+"assets/images/2175_02-512e74247ec45deaed2871b8b4fc48f3.png"},6398:(e,n,s)=>{s.d(n,{A:()=>o});const o=s.p+"assets/images/2175_03-3e9ccd8d2fb23f3a04eddc627ec12bb7.png"},89489:(e,n,s)=>{s.d(n,{A:()=>o});const o=s.p+"assets/images/2175_04-ad5efff9a998e7fb7fcb98cab974e754.png"},95624:(e,n,s)=>{s.d(n,{A:()=>o});const o=s.p+"assets/images/2175_05-6b277856f7d6e74e0a51adb0d5683fd1.png"},32483:(e,n,s)=>{s.d(n,{A:()=>o});const o="data:image/png;base64,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"},68378:(e,n,s)=>{s.d(n,{A:()=>o});const o="data:image/png;base64,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"},28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>d});var o=s(96540);const t={},i=o.createContext(t);function r(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);