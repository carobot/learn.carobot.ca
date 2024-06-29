"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7224],{69971:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>a});var i=t(74848),s=t(28453);const r={sidebar_position:7},o="7. Ultrasonic Sensor",c={id:"UNO-R4-Starter-Kit/Ultrasonic-Sensor",title:"7. Ultrasonic Sensor",description:"This tutorial will teach you how to use the ultrasonic sensor. The ultrasonic sensor calculates the distance of an object based on the reflected sound waves. Ultrasonic sensors have countless applications like obstacle detection, proximity sensing, and distance measurement.",source:"@site/docs/UNO-R4-Starter-Kit/Ultrasonic-Sensor.md",sourceDirName:"UNO-R4-Starter-Kit",slug:"/UNO-R4-Starter-Kit/Ultrasonic-Sensor",permalink:"/UNO-R4-Starter-Kit/Ultrasonic-Sensor",draft:!1,unlisted:!1,editUrl:"https://github.com/carobot/learn.carobot.ca/tree/main/docs/UNO-R4-Starter-Kit/Ultrasonic-Sensor.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"6. Servo",permalink:"/UNO-R4-Starter-Kit/Servo"},next:{title:"8. Membrane Switch Module",permalink:"/UNO-R4-Starter-Kit/Membrane-Switch-Module"}},l={},a=[{value:"Materials",id:"materials",level:2},{value:"Instructions",id:"instructions",level:2},{value:"Connections",id:"connections",level:4},{value:"Code",id:"code",level:4},{value:"Code",id:"code-1",level:4}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"7-ultrasonic-sensor",children:"7. Ultrasonic Sensor"}),"\n",(0,i.jsx)(n.p,{children:"This tutorial will teach you how to use the ultrasonic sensor. The ultrasonic sensor calculates the distance of an object based on the reflected sound waves. Ultrasonic sensors have countless applications like obstacle detection, proximity sensing, and distance measurement."}),"\n",(0,i.jsx)(n.h2,{id:"materials",children:"Materials"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Component"}),(0,i.jsx)(n.th,{children:"Image"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Breadboard"}),(0,i.jsx)(n.td,{children:(0,i.jsx)("img",{src:"/img/docs/UNO-R4-Starter-Kit/breadboard.webp",width:"200"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Jumper wires"}),(0,i.jsx)(n.td,{children:(0,i.jsx)("img",{src:"/img/docs/UNO-R4-Starter-Kit/jumper-wires.webp",width:"200"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Arduino Uno R4 Minima"}),(0,i.jsx)(n.td,{children:(0,i.jsx)("img",{src:"/img/docs/UNO-R4-Starter-Kit/arduino-r4-minima.webp",width:"200"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"HC-SRO4 Ultrasonic Sensor"}),(0,i.jsx)(n.td,{children:(0,i.jsx)("img",{src:"/img/docs/UNO-R4-Starter-Kit/ultrasonic-sensor.webp",width:"200"})})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"instructions",children:"Instructions"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Make the following connections with the breadboard and jumper wires."}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"connections",children:"Connections"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Vcc on the HC-SR04 to 5V"}),"\n",(0,i.jsx)(n.li,{children:"Trig to pin 12"}),"\n",(0,i.jsx)(n.li,{children:"Echo to pin 13"}),"\n",(0,i.jsx)(n.li,{children:"Gnd to GND"}),"\n"]}),"\n",(0,i.jsx)("img",{src:"/img/docs/UNO-R4-Starter-Kit/ultrasonic-sensor.png",width:"500"}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsx)(n.li,{children:'Create a new file in the same folder as your main Arduino sketch to contain the SR04 sensor code. Paste the following code into the new file and save it as "SR04.h":'}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"code",children:"Code"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:'#ifndef SR04_H\n#define SR04_H\n\n#if defined(ARDUINO) && ARDUINO >= 100\n\t#include "Arduino.h"\n#else\n\t#include "WProgram.h"\n#endif\n\n#include <inttypes.h>\n\n#define PULSE_TIMEOUT 150000L\t// 100ms\n#define DEFAULT_DELAY 10\n#define DEFAULT_PINGS 5\n\nclass SR04 {\npublic:\n\tSR04(int echoPin, int triggerPin);\n\tlong Distance();\n\tlong DistanceAvg(int wait=DEFAULT_DELAY, int count=DEFAULT_PINGS);\n\tvoid Ping();\n\tlong getDistance();\n\nprivate:\n\tlong MicrosecondsToCentimeter(long duration);\n\tlong _currentDistance;\n\tint _echoPin, _triggerPin;\n\tlong _duration, _distance;\n\tbool _autoMode;\n};\n\n#endif\n'})}),"\n",(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsx)(n.li,{children:"In your main Arduino sketch, paste the following code to include the SR04 library and create an instance of the SR04 class:"}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"code-1",children:"Code"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:'#include "SR04.h"\n\n#define TRIG_PIN 12\n#define ECHO_PIN 11\n\nSR04 sr04(ECHO_PIN, TRIG_PIN);\nlong distance;\n\nvoid setup() {\n   Serial.begin(9600);\n   delay(1000);\n}\n\nvoid loop() {\n   distance = sr04.Distance();\n   Serial.print(distance);\n   Serial.println(" cm");\n   delay(10);\n}\n'})}),"\n",(0,i.jsxs)(n.ol,{start:"4",children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Upload the code to your Arduino board."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Open the Arduino IDE's serial monitor to view the distance readings from the SR04 sensor as you move objects closer or farther away from it."}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>c});var i=t(96540);const s={},r=i.createContext(s);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);