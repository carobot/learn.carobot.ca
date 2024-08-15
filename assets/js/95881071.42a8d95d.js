"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[246],{94572:(t,e,i)=>{i.r(e),i.d(e,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var n=i(74848),r=i(28453);const s={sidebar_position:5},l="5. Ball Switch",o={id:"UNO-R4-Starter-Kit/Ball-Switch",title:"5. Ball Switch",description:'This tutorial will teach you to how to use "pull-up" to turn on an LED using a button.',source:"@site/docs/UNO-R4-Starter-Kit/Ball-Switch.md",sourceDirName:"UNO-R4-Starter-Kit",slug:"/UNO-R4-Starter-Kit/Ball-Switch",permalink:"/UNO-R4-Starter-Kit/Ball-Switch",draft:!1,unlisted:!1,editUrl:"https://github.com/carobot/learn.carobot.ca/tree/main/docs/UNO-R4-Starter-Kit/Ball-Switch.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"4. Passive Buzzer",permalink:"/UNO-R4-Starter-Kit/Passive-Buzzer"},next:{title:"6. Servo",permalink:"/UNO-R4-Starter-Kit/Servo"}},d={},c=[{value:"Materials",id:"materials",level:2},{value:"Instructions",id:"instructions",level:2},{value:"Code",id:"code",level:4}];function a(t){const e={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h1,{id:"5-ball-switch",children:"5. Ball Switch"}),"\n",(0,n.jsx)(e.p,{children:'This tutorial will teach you to how to use "pull-up" to turn on an LED using a button.'}),"\n",(0,n.jsx)(e.h2,{id:"materials",children:"Materials"}),"\n",(0,n.jsxs)(e.table,{children:[(0,n.jsx)(e.thead,{children:(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.th,{children:"Component"}),(0,n.jsx)(e.th,{children:"Image"})]})}),(0,n.jsxs)(e.tbody,{children:[(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:(0,n.jsx)(e.a,{href:"https://www.canadarobotix.com/products/160",children:"Breadboard"})}),(0,n.jsx)(e.td,{children:(0,n.jsx)("img",{src:"/img/docs/UNO-R4-Starter-Kit/breadboard.webp",width:"200"})})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:(0,n.jsx)(e.a,{href:"https://www.canadarobotix.com/products/922",children:"Jumper wires"})}),(0,n.jsx)(e.td,{children:(0,n.jsx)("img",{src:"/img/docs/UNO-R4-Starter-Kit/jumper-wires.webp",width:"200"})})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:(0,n.jsx)(e.a,{href:"https://www.canadarobotix.com/collections/featured-1/products/3060",children:"Arduino Uno R4 Minima"})}),(0,n.jsx)(e.td,{children:(0,n.jsx)("img",{src:"/img/docs/UNO-R4-Starter-Kit/arduino-r4-minima.webp",width:"200"})})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:(0,n.jsx)(e.a,{href:"https://www.canadarobotix.com/products/1282",children:"LED (white, red, blue, or green)"})}),(0,n.jsx)(e.td,{children:(0,n.jsx)("img",{src:"/img/docs/UNO-R4-Starter-Kit/LED.jpg",width:"200"})})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:(0,n.jsx)(e.a,{href:"https://www.canadarobotix.com/products/5138",children:"Resistors (220 ohms for the LED, optional if using internal pull-up resistors for buttons)"})}),(0,n.jsx)(e.td,{children:(0,n.jsx)("img",{src:"/img/docs/UNO-R4-Starter-Kit/resistors.webp",width:"200"})})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:(0,n.jsx)(e.a,{href:"https://www.canadarobotix.com/products/2326",children:"Tilt Sensor"})}),(0,n.jsx)(e.td,{children:(0,n.jsx)("img",{src:"/img/docs/UNO-R4-Starter-Kit/ball-switch.webp",width:"200"})})]})]})]}),"\n",(0,n.jsx)(e.h2,{id:"instructions",children:"Instructions"}),"\n",(0,n.jsxs)(e.ol,{children:["\n",(0,n.jsx)(e.li,{children:"Make the following connections using the breadboard and jumper wires:"}),"\n"]}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsx)(e.li,{children:"LED positive terminal to pin 13"}),"\n",(0,n.jsx)(e.li,{children:"LED negative terminal to a 220 ohm resistor. Place the other leg of the resistor into ground.\nUse male to female jumper wires for the following connections."}),"\n",(0,n.jsx)(e.li,{children:"One leg of the ball switch to pin 2"}),"\n",(0,n.jsx)(e.li,{children:"The other leg of the ball switch to GND"}),"\n"]}),"\n",(0,n.jsx)("img",{src:"/img/docs/UNO-R4-Starter-Kit/Ball-Switch.png",width:"500"}),"\n",(0,n.jsxs)(e.ol,{start:"2",children:["\n",(0,n.jsx)(e.li,{children:"Paste the following code into the Arduino IDE."}),"\n"]}),"\n",(0,n.jsx)(e.h4,{id:"code",children:"Code"}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-cpp",children:"const int ledPin = 13; // the LED attached to pin 13\nconst int switchPin = 2; // the ball switch attached to pin 2\n\nvoid setup() {\n  pinMode(ledPin, OUTPUT); // initialize the ledPin as an output\n  pinMode(switchPin, INPUT_PULLUP); // set pin 2 as an input with an internal pull-up resistor\n}\n\nvoid loop() {\n  int switchState = digitalRead(switchPin); // read the state of the ball switch\n  if (switchState == HIGH) {\n    digitalWrite(ledPin, LOW); // turn the LED off if the switch is not tilted\n  } else {\n    digitalWrite(ledPin, HIGH); // turn the LED on if the switch is tilted\n  }\n}\n\n"})}),"\n",(0,n.jsxs)(e.ol,{start:"3",children:["\n",(0,n.jsxs)(e.li,{children:["\n",(0,n.jsx)(e.p,{children:"Upload the code to the arduino and run the code."}),"\n"]}),"\n",(0,n.jsxs)(e.li,{children:["\n",(0,n.jsx)(e.p,{children:"Test the code! Tilt the ball switch and watch the LED turn off!"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(e.table,{children:[(0,n.jsx)(e.thead,{children:(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.th,{children:"Prev"}),(0,n.jsx)(e.th,{children:"Next"})]})}),(0,n.jsx)(e.tbody,{children:(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:(0,n.jsx)(e.a,{href:"/UNO-R4-Starter-Kit/Passive-Buzzer",children:"4. Passive Buzzer"})}),(0,n.jsx)(e.td,{children:(0,n.jsx)(e.a,{href:"/UNO-R4-Starter-Kit/Servo",children:"6. Servo"})})]})})]})]})}function h(t={}){const{wrapper:e}={...(0,r.R)(),...t.components};return e?(0,n.jsx)(e,{...t,children:(0,n.jsx)(a,{...t})}):a(t)}},28453:(t,e,i)=>{i.d(e,{R:()=>l,x:()=>o});var n=i(96540);const r={},s=n.createContext(r);function l(t){const e=n.useContext(s);return n.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function o(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(r):t.components||r:l(t.components),n.createElement(s.Provider,{value:e},t.children)}}}]);