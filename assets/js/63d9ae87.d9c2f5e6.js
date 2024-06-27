"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1630],{35113:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>a});var t=r(74848),i=r(28453);const l={sidebar_position:1,sidebar_label:"RBG LED Module"},o="RBG LED Module",s={id:"UNO-R4-Starter-Kit/RBG-LED",title:"RBG LED Module",description:"This LED is unique and has the ability to shine with all colours on the spectrum!",source:"@site/docs/UNO-R4-Starter-Kit/RBG-LED.md",sourceDirName:"UNO-R4-Starter-Kit",slug:"/UNO-R4-Starter-Kit/RBG-LED",permalink:"/learn.carobot.ca/UNO-R4-Starter-Kit/RBG-LED",draft:!1,unlisted:!1,editUrl:"https://github.com/carobot/learn.carobot.ca/tree/main/docs/UNO-R4-Starter-Kit/RBG-LED.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"RBG LED Module"},sidebar:"tutorialSidebar",previous:{title:"Tutorials",permalink:"/learn.carobot.ca/Tutorials"},next:{title:"Digital Input",permalink:"/learn.carobot.ca/UNO-R4-Starter-Kit/Digital-Input"}},d={},a=[{value:"Materials",id:"materials",level:2},{value:"Instructions",id:"instructions",level:2},{value:"Connections",id:"connections",level:4}];function c(e){const n={code:"code",h1:"h1",h2:"h2",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"rbg-led-module",children:"RBG LED Module"}),"\n",(0,t.jsx)(n.p,{children:"This LED is unique and has the ability to shine with all colours on the spectrum!"}),"\n",(0,t.jsx)(n.h2,{id:"materials",children:"Materials"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Component"}),(0,t.jsx)(n.th,{children:"Image"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Breadboard (optional)"}),(0,t.jsx)(n.td,{children:(0,t.jsx)("img",{src:"/img/docs/UNO-R4-Starter-Kit/breadboard.webp",width:"200",height:"150"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Jumper wires"}),(0,t.jsx)(n.td,{children:(0,t.jsx)("img",{src:"/img/docs/UNO-R4-Starter-Kit/jumper-wires.webp",width:"200",height:"150"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Arduino Uno R4 Minima"}),(0,t.jsx)(n.td,{children:(0,t.jsx)("img",{src:"/img/docs/UNO-R4-Starter-Kit/arduino-r4-minima.webp",width:"190",height:"150"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"10K Ohm resistor (optional)"}),(0,t.jsx)(n.td,{children:(0,t.jsx)("img",{src:"/img/docs/UNO-R4-Starter-Kit/resistors.webp",width:"190",height:"150"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"1 RGB LED"}),(0,t.jsx)(n.td,{children:(0,t.jsx)("img",{src:"/img/docs/UNO-R4-Starter-Kit/RGB-LED/RGB-LED-2.jpg",width:"150",height:"150"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"USB-C cable"}),(0,t.jsx)(n.td,{})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"instructions",children:"Instructions"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Make the following connections between the Arduino Uno R4 Minima to the RGB-LED module."}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"connections",children:"Connections"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Red to pin 6"}),"\n",(0,t.jsx)(n.li,{children:"Ground to GND"}),"\n",(0,t.jsx)(n.li,{children:"Green to pin 5"}),"\n",(0,t.jsx)(n.li,{children:"Blue to pin 3"}),"\n"]}),"\n",(0,t.jsx)("img",{src:"/img/docs/UNO-R4-Starter-Kit/RGB-LED/RGB-LED-3.png",width:"300",height:"400"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"10K Ohm Resistor between ground and RGB LED (this is optional and is recommended if you intend to leave the LED on for extended periods of time. This reduces the chance of frying your LED module due to increased resistance)"}),"\n"]}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsx)(n.li,{children:"Copy the following code into the Arduino IDE."}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:"// Define Pins\r\n#define BLUE 3\r\n#define GREEN 5\r\n#define RED 6\r\n\r\nvoid setup() {\r\n  pinMode(RED, OUTPUT);\r\n  pinMode(GREEN, OUTPUT);\r\n  pinMode(BLUE, OUTPUT);\r\n  digitalWrite(RED, HIGH);\r\n  digitalWrite(GREEN, LOW);\r\n  digitalWrite(BLUE, LOW);\r\n}\r\n\r\n// define variables\r\nint redValue;\r\nint greenValue;\r\nint blueValue;\r\n\r\n// main loop\r\nvoid loop() {\r\n  #define delayTime 10 // you can change the time it takes to fade between the colours\r\n\r\n  redValue = 255; // choose a value between 1 and 255 to change the color.\r\n  greenValue = 0;\r\n  blueValue = 0;\r\n\r\n  // the following for loops loop through the entire colour cycle\r\n\r\n  for (int i = 0; i < 255; i += 1) { // fades out red and brings green to full when i=255\r\n    redValue -= 1;\r\n    greenValue += 1;\r\n    analogWrite(RED, redValue);\r\n    analogWrite(GREEN, greenValue);\r\n    delay(delayTime);\r\n  }\r\n\r\n  redValue = 0;\r\n  greenValue = 255;\r\n  blueValue = 0;\r\n\r\n  for (int i = 0; i < 255; i += 1) { // fades out green and brings blue to full when i=255\r\n    greenValue -= 1;\r\n    blueValue += 1;\r\n    analogWrite(GREEN, greenValue);\r\n    analogWrite(BLUE, blueValue);\r\n    delay(delayTime);\r\n  }\r\n\r\n  redValue = 0;\r\n  greenValue = 0;\r\n  blueValue = 255;\r\n\r\n  for (int i = 0; i < 255; i += 1) { // fades out blue and brings red to full when i=255\r\n    blueValue -= 1;\r\n    redValue += 1;\r\n    analogWrite(BLUE, blueValue);\r\n    analogWrite(RED, redValue);\r\n    delay(delayTime);\r\n  }\r\n}\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Connect your Arduino to your laptop using the USB-C cable and upload the code to the arduino."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Watch the LED change colours!"}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>s});var t=r(96540);const i={},l=t.createContext(i);function o(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);