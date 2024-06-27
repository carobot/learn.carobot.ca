"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8933],{4201:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var i=e(74848),r=e(28453);const o={sidebar_position:10},s="Analog Joystick",a={id:"UNO-R4-Starter-Kit/Analog-Joystick",title:"Analog Joystick",description:"Analog joysticks are versatile input devices commonly used in game controllers, robotics, and various DIY projects. They provide a simple and intuitive way to control the movement or direction of objects and can be easily interfaced with Arduino boards.",source:"@site/docs/UNO-R4-Starter-Kit/Analog-Joystick.md",sourceDirName:"UNO-R4-Starter-Kit",slug:"/UNO-R4-Starter-Kit/Analog-Joystick",permalink:"/UNO-R4-Starter-Kit/Analog-Joystick",draft:!1,unlisted:!1,editUrl:"https://github.com/carobot/learn.carobot.ca/tree/main/docs/UNO-R4-Starter-Kit/Analog-Joystick.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"DHT11 Temperature and Humidity Sensor",permalink:"/UNO-R4-Starter-Kit/DHT11-Temp-and-Humidity-Sensor"},next:{title:"IR Receiver Module",permalink:"/UNO-R4-Starter-Kit/IR-Receiver"}},d={},c=[{value:"Materials",id:"materials",level:2},{value:"Instructions",id:"instructions",level:2},{value:"Connections",id:"connections",level:4}];function l(n){const t={code:"code",h1:"h1",h2:"h2",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"analog-joystick",children:"Analog Joystick"}),"\n",(0,i.jsx)(t.p,{children:"Analog joysticks are versatile input devices commonly used in game controllers, robotics, and various DIY projects. They provide a simple and intuitive way to control the movement or direction of objects and can be easily interfaced with Arduino boards."}),"\n",(0,i.jsx)(t.h2,{id:"materials",children:"Materials"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Component"}),(0,i.jsx)(t.th,{children:"Image"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Breadboard"}),(0,i.jsx)(t.td,{children:(0,i.jsx)("img",{src:"/img/docs/UNO-R4-Starter-Kit/breadboard.webp",width:"200",height:"150"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Jumper wires"}),(0,i.jsx)(t.td,{children:(0,i.jsx)("img",{src:"/img/docs/UNO-R4-Starter-Kit/jumper-wires.webp",width:"200",height:"150"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Arduino Uno R4 Minima"}),(0,i.jsx)(t.td,{children:(0,i.jsx)("img",{src:"/img/docs/UNO-R4-Starter-Kit/arduino-r4-minima.webp",width:"190",height:"150"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Joystick Module"}),(0,i.jsx)(t.td,{children:(0,i.jsx)("img",{src:"/img/docs/UNO-R4-Starter-Kit/joystick.webp",width:"200",height:"200"})})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"instructions",children:"Instructions"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Make the following connections using the breadboard and jumper wires."}),"\n"]}),"\n",(0,i.jsx)(t.h4,{id:"connections",children:"Connections"}),"\n",(0,i.jsx)(t.p,{children:"(Joystick module to Arduino)"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"GND to GND"}),"\n",(0,i.jsx)(t.li,{children:"5V to 5V"}),"\n",(0,i.jsx)(t.li,{children:"VRx to A0"}),"\n",(0,i.jsx)(t.li,{children:"VRy to A1"}),"\n",(0,i.jsx)(t.li,{children:"SW to pin 2"}),"\n"]}),"\n",(0,i.jsx)("img",{src:"/img/docs/UNO-R4-Starter-Kit/joystick-module.png",width:"550",height:"300"}),"\n",(0,i.jsxs)(t.ol,{start:"2",children:["\n",(0,i.jsx)(t.li,{children:"Paste the following code into your main Arduino sketch:"}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-cpp",children:'// Arduino pin numbers\r\nconst int SW_pin = 2;   // digital pin connected to switch output\r\nconst int X_pin = A0;   // analog pin connected to X output\r\nconst int Y_pin = A1;   // analog pin connected to Y output\r\n\r\nvoid setup() {\r\n  pinMode(SW_pin, INPUT);\r\n  digitalWrite(SW_pin, HIGH);\r\n  Serial.begin(9600);\r\n}\r\n\r\nvoid loop() {\r\n  Serial.print("Switch:  ");\r\n  Serial.print(digitalRead(SW_pin));\r\n  Serial.print("\\n");\r\n  Serial.print("X-axis: ");\r\n  Serial.print(analogRead(X_pin));\r\n  Serial.print("\\n");\r\n  Serial.print("Y-axis: ");\r\n  Serial.println(analogRead(Y_pin));\r\n  Serial.print("\\n\\n");\r\n  delay(1000);\r\n}\n'})}),"\n",(0,i.jsxs)(t.ol,{start:"3",children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Connect your Arduino to your laptop using a USB-C cable and upload the code to the arduino."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Test! Open the serial monitor and observe the print out statements as you move the joystick module."}),"\n"]}),"\n"]})]})}function h(n={}){const{wrapper:t}={...(0,r.R)(),...n.components};return t?(0,i.jsx)(t,{...n,children:(0,i.jsx)(l,{...n})}):l(n)}},28453:(n,t,e)=>{e.d(t,{R:()=>s,x:()=>a});var i=e(96540);const r={},o=i.createContext(r);function s(n){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof n?n(t):{...t,...n}}),[t,n])}function a(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:s(n.components),i.createElement(o.Provider,{value:t},n.children)}}}]);