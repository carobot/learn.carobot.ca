"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8064],{82729:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var t=n(74848),i=n(28453);const s={sidebar_position:8},o="8. Membrane Switch Module",l={id:"UNO-R4-Starter-Kit/Membrane-Switch-Module",title:"8. Membrane Switch Module",description:"This tutorial will help you learn how to use a membrane switch module. This makes user interface a lot easier!",source:"@site/docs/UNO-R4-Starter-Kit/Membrane-Switch-Module.md",sourceDirName:"UNO-R4-Starter-Kit",slug:"/UNO-R4-Starter-Kit/Membrane-Switch-Module",permalink:"/UNO-R4-Starter-Kit/Membrane-Switch-Module",draft:!1,unlisted:!1,editUrl:"https://github.com/carobot/learn.carobot.ca/tree/main/docs/UNO-R4-Starter-Kit/Membrane-Switch-Module.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"7. Ultrasonic Sensor",permalink:"/UNO-R4-Starter-Kit/Ultrasonic-Sensor"},next:{title:"9. DHT11 Temperature and Humidity Sensor",permalink:"/UNO-R4-Starter-Kit/DHT11-Temp-and-Humidity-Sensor"}},c={},d=[{value:"Materials",id:"materials",level:2},{value:"Instructions",id:"instructions",level:2},{value:"Connections",id:"connections",level:4},{value:"Code",id:"code",level:4}];function a(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"8-membrane-switch-module",children:"8. Membrane Switch Module"}),"\n",(0,t.jsx)(r.p,{children:"This tutorial will help you learn how to use a membrane switch module. This makes user interface a lot easier!"}),"\n",(0,t.jsx)(r.h2,{id:"materials",children:"Materials"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Component"}),(0,t.jsx)(r.th,{children:"Image"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://www.canadarobotix.com/products/160",children:"Breadboard"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)("img",{src:"/img/docs/UNO-R4-Starter-Kit/breadboard.webp",width:"200"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://www.canadarobotix.com/products/922",children:"Jumper wires"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)("img",{src:"/img/docs/UNO-R4-Starter-Kit/jumper-wires.webp",width:"200"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://www.canadarobotix.com/collections/featured-1/products/3060",children:"Arduino Uno R4 Minima"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)("img",{src:"/img/docs/UNO-R4-Starter-Kit/arduino-r4-minima.webp",width:"200"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://www.canadarobotix.com/products/1171",children:"Membrane Switch Module"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)("img",{src:"/img/docs/UNO-R4-Starter-Kit/membrane-switch.webp",width:"200"})})]})]})]}),"\n",(0,t.jsx)(r.h2,{id:"instructions",children:"Instructions"}),"\n",(0,t.jsxs)(r.ol,{children:["\n",(0,t.jsx)(r.li,{children:"Make the following connections using the breadboard and jumper wires:"}),"\n"]}),"\n",(0,t.jsx)(r.h4,{id:"connections",children:"Connections"}),"\n",(0,t.jsx)(r.p,{children:"(Membrane Switch to Arduino R4)"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"Terminal 1 to pin 2"}),"\n",(0,t.jsx)(r.li,{children:"Terminal 2 to pin 3"}),"\n",(0,t.jsx)(r.li,{children:"Terminal 3 to pin 4"}),"\n",(0,t.jsx)(r.li,{children:"Terminal 4 to pin 5"}),"\n",(0,t.jsx)(r.li,{children:"Terminal 5 to pin 6"}),"\n",(0,t.jsx)(r.li,{children:"Terminal 6 to pin 7"}),"\n",(0,t.jsx)(r.li,{children:"Terminal 7 to pin 8"}),"\n",(0,t.jsx)(r.li,{children:"Terminal 8 to pin 9"}),"\n"]}),"\n",(0,t.jsx)("img",{src:"/img/docs/UNO-R4-Starter-Kit/membrane-switch.png",width:"500"}),"\n",(0,t.jsxs)(r.ol,{start:"2",children:["\n",(0,t.jsx)(r.li,{children:"Paste the following code into your Arduino IDE:"}),"\n"]}),"\n",(0,t.jsx)(r.h4,{id:"code",children:"Code"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-cpp",children:"const byte ROWS = 4;\r\nconst byte COLS = 4;\r\n\r\n// Define the pins for rows and columns\r\nbyte rowPins[ROWS] = {9, 8, 7, 6};\r\nbyte colPins[COLS] = {5, 4, 3, 2};\r\n\r\nchar keys[ROWS][COLS] = {\r\n  {'1', '2', '3', 'A'},\r\n  {'4', '5', '6', 'B'},\r\n  {'7', '8', '9', 'C'},\r\n  {'*', '0', '#', 'D'}\r\n};\r\n\r\nvoid setup() {\r\n  Serial.begin(9600);\r\n  // Set row pins as INPUT_PULLUP\r\n  for (byte row = 0; row < ROWS; row++) {\r\n    pinMode(rowPins[row], INPUT_PULLUP);\r\n  }\r\n  // Set column pins as OUTPUT and HIGH\r\n  for (byte col = 0; col < COLS; col++) {\r\n    pinMode(colPins[col], OUTPUT);\r\n    digitalWrite(colPins[col], HIGH);\r\n  }\r\n}\r\n\r\nvoid loop() {\r\n  // Scan each column\r\n  for (byte col = 0; col < COLS; col++) {\r\n    digitalWrite(colPins[col], LOW);  // Set current column to LOW\r\n    delay(10);  // Delay for stability\r\n    // Scan each row in the current column\r\n    for (byte row = 0; row < ROWS; row++) {\r\n      if (digitalRead(rowPins[row]) == LOW) {\r\n        // Key pressed, print the corresponding key\r\n        Serial.print(\"Key pressed: \");\r\n        Serial.println(keys[row][col]);\r\n        delay(200);  // Delay for debounce\r\n      }\r\n    }\r\n    digitalWrite(colPins[col], HIGH);  // Set current column back to HIGH\r\n  }\r\n}\n"})}),"\n",(0,t.jsxs)(r.ol,{start:"3",children:["\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsx)(r.p,{children:"Upload the code to your arduino and run."}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsx)(r.p,{children:"Test! Observe the serial monitor as you press buttons into the membrane keypad."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Prev"}),(0,t.jsx)(r.th,{children:"Next"})]})}),(0,t.jsx)(r.tbody,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/UNO-R4-Starter-Kit/Ultrasonic-Sensor",children:"7. Ultrasonic Sensor"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/UNO-R4-Starter-Kit/DHT11-Temp-and-Humidity-Sensor",children:"9. DHT11 Temperature and Humidity Sensor"})})]})})]})]})}function h(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},28453:(e,r,n)=>{n.d(r,{R:()=>o,x:()=>l});var t=n(96540);const i={},s=t.createContext(i);function o(e){const r=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);