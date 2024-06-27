"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7224],{69971:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var r=t(74848),i=t(28453);const s={sidebar_position:7},o="Ultrasonic Sensor",c={id:"UNO-R4-Starter-Kit/Ultrasonic-Sensor",title:"Ultrasonic Sensor",description:"This tutorial will teach you how to use the ultrasonic sensor. The ultrasonic sensor calculates the distance of an object based on the reflected sound waves. Ultrasonic sensors have countless applications like obstacle detection, proximity sensing, and distance measurement.",source:"@site/docs/UNO-R4-Starter-Kit/Ultrasonic-Sensor.md",sourceDirName:"UNO-R4-Starter-Kit",slug:"/UNO-R4-Starter-Kit/Ultrasonic-Sensor",permalink:"/UNO-R4-Starter-Kit/Ultrasonic-Sensor",draft:!1,unlisted:!1,editUrl:"https://github.com/carobot/learn.carobot.ca/tree/main/docs/UNO-R4-Starter-Kit/Ultrasonic-Sensor.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Servo",permalink:"/UNO-R4-Starter-Kit/Servo"},next:{title:"Membrane Switch Module",permalink:"/UNO-R4-Starter-Kit/Membrane-Switch-Module"}},a={},l=[{value:"Materials",id:"materials",level:2},{value:"Instructions",id:"instructions",level:2},{value:"Connections",id:"connections",level:4}];function d(n){const e={code:"code",h1:"h1",h2:"h2",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"ultrasonic-sensor",children:"Ultrasonic Sensor"}),"\n",(0,r.jsx)(e.p,{children:"This tutorial will teach you how to use the ultrasonic sensor. The ultrasonic sensor calculates the distance of an object based on the reflected sound waves. Ultrasonic sensors have countless applications like obstacle detection, proximity sensing, and distance measurement."}),"\n",(0,r.jsx)(e.h2,{id:"materials",children:"Materials"}),"\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"Component"}),(0,r.jsx)(e.th,{children:"Image"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Breadboard"}),(0,r.jsx)(e.td,{children:(0,r.jsx)("img",{src:"/img/docs/UNO-R4-Starter-Kit/breadboard.webp",width:"200",height:"150"})})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Jumper wires"}),(0,r.jsx)(e.td,{children:(0,r.jsx)("img",{src:"/img/docs/UNO-R4-Starter-Kit/jumper-wires.webp",width:"200",height:"150"})})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Arduino Uno R4 Minima"}),(0,r.jsx)(e.td,{children:(0,r.jsx)("img",{src:"/img/docs/UNO-R4-Starter-Kit/arduino-r4-minima.webp",width:"190",height:"150"})})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"HC-SRO4 Ultrasonic Sensor"}),(0,r.jsx)(e.td,{children:(0,r.jsx)("img",{src:"/img/docs/UNO-R4-Starter-Kit/ultrasonic-sensor.webp",width:"200",height:"200"})})]})]})]}),"\n",(0,r.jsx)(e.h2,{id:"instructions",children:"Instructions"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsx)(e.li,{children:"Make the following connections with the breadboard and jumper wires."}),"\n"]}),"\n",(0,r.jsx)(e.h4,{id:"connections",children:"Connections"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Vcc on the HC-SR04 to 5V"}),"\n",(0,r.jsx)(e.li,{children:"Trig to pin 12"}),"\n",(0,r.jsx)(e.li,{children:"Echo to pin 13"}),"\n",(0,r.jsx)(e.li,{children:"Gnd to GND"}),"\n"]}),"\n",(0,r.jsx)("img",{src:"/img/docs/UNO-R4-Starter-Kit/ultrasonic-sensor.png",width:"600",height:"350"}),"\n",(0,r.jsxs)(e.ol,{start:"2",children:["\n",(0,r.jsx)(e.li,{children:'Create a new file in the same folder as your main Arduino sketch to contain the SR04 sensor code. Paste the following code into the new file and save it as "SR04.h":'}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-cpp",children:'#ifndef SR04_H\r\n#define SR04_H\r\n\r\n#if defined(ARDUINO) && ARDUINO >= 100\r\n\t#include "Arduino.h"\r\n#else\r\n\t#include "WProgram.h"\r\n#endif\r\n\r\n#include <inttypes.h>\r\n\r\n#define PULSE_TIMEOUT 150000L\t// 100ms\r\n#define DEFAULT_DELAY 10\r\n#define DEFAULT_PINGS 5\r\n\r\nclass SR04 {\r\npublic:\r\n\tSR04(int echoPin, int triggerPin);\r\n\tlong Distance();\r\n\tlong DistanceAvg(int wait=DEFAULT_DELAY, int count=DEFAULT_PINGS);\r\n\tvoid Ping();\r\n\tlong getDistance();\r\n\r\nprivate:\r\n\tlong MicrosecondsToCentimeter(long duration);\r\n\tlong _currentDistance;\r\n\tint _echoPin, _triggerPin;\r\n\tlong _duration, _distance;\r\n\tbool _autoMode;\r\n};\r\n\r\n#endif\n'})}),"\n",(0,r.jsxs)(e.ol,{start:"3",children:["\n",(0,r.jsx)(e.li,{children:"In your main Arduino sketch, paste the following code to include the SR04 library and create an instance of the SR04 class:"}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-cpp",children:'#include "SR04.h"\r\n\r\n#define TRIG_PIN 12\r\n#define ECHO_PIN 11\r\n\r\nSR04 sr04(ECHO_PIN, TRIG_PIN);\r\nlong distance;\r\n\r\nvoid setup() {\r\n   Serial.begin(9600);\r\n   delay(1000);\r\n}\r\n\r\nvoid loop() {\r\n   distance = sr04.Distance();\r\n   Serial.print(distance);\r\n   Serial.println(" cm");\r\n   delay(10);\r\n}\n'})}),"\n",(0,r.jsxs)(e.ol,{start:"4",children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"Upload the code to your Arduino board."}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"Open the Arduino IDE's serial monitor to view the distance readings from the SR04 sensor as you move objects closer or farther away from it."}),"\n"]}),"\n"]})]})}function h(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(d,{...n})}):d(n)}},28453:(n,e,t)=>{t.d(e,{R:()=>o,x:()=>c});var r=t(96540);const i={},s=r.createContext(i);function o(n){const e=r.useContext(s);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:o(n.components),r.createElement(s.Provider,{value:e},n.children)}}}]);