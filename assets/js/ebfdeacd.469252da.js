"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8283],{25645:(t,i,n)=>{n.r(i),n.d(i,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>a});var e=n(74848),r=n(28453);const s={sidebar_position:2},o="Digital Input",d={id:"UNO-R4-Starter-Kit/Digital-Input",title:"Digital Input",description:"This will teach you about digital inputs using buttons and LEDs. This is really important for user input interactions, sensors, and communication!",source:"@site/docs/UNO-R4-Starter-Kit/Digital-Input.md",sourceDirName:"UNO-R4-Starter-Kit",slug:"/UNO-R4-Starter-Kit/Digital-Input",permalink:"/learn.carobot.ca/UNO-R4-Starter-Kit/Digital-Input",draft:!1,unlisted:!1,editUrl:"https://github.com/carobot/learn.carobot.ca/tree/main/docs/UNO-R4-Starter-Kit/Digital-Input.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"RBG LED Module",permalink:"/learn.carobot.ca/UNO-R4-Starter-Kit/RBG-LED"},next:{title:"Making Sounds",permalink:"/learn.carobot.ca/UNO-R4-Starter-Kit/Making-Sounds"}},l={},a=[{value:"Materials",id:"materials",level:2},{value:"Instructions",id:"instructions",level:2},{value:"Connections",id:"connections",level:4}];function c(t){const i={code:"code",h1:"h1",h2:"h2",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...t.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(i.h1,{id:"digital-input",children:"Digital Input"}),"\n",(0,e.jsx)(i.p,{children:"This will teach you about digital inputs using buttons and LEDs. This is really important for user input interactions, sensors, and communication!"}),"\n",(0,e.jsx)(i.h2,{id:"materials",children:"Materials"}),"\n",(0,e.jsxs)(i.table,{children:[(0,e.jsx)(i.thead,{children:(0,e.jsxs)(i.tr,{children:[(0,e.jsx)(i.th,{children:"Component"}),(0,e.jsx)(i.th,{children:"Image"})]})}),(0,e.jsxs)(i.tbody,{children:[(0,e.jsxs)(i.tr,{children:[(0,e.jsx)(i.td,{children:"Breadboard"}),(0,e.jsx)(i.td,{children:(0,e.jsx)("img",{src:"/img/docs/UNO-R4-Starter-Kit/breadboard.webp",width:"200",height:"150"})})]}),(0,e.jsxs)(i.tr,{children:[(0,e.jsx)(i.td,{children:"Jumper wires"}),(0,e.jsx)(i.td,{children:(0,e.jsx)("img",{src:"/img/docs/UNO-R4-Starter-Kit/jumper-wires.webp",width:"200",height:"150"})})]}),(0,e.jsxs)(i.tr,{children:[(0,e.jsx)(i.td,{children:"Arduino Uno R4 Minima"}),(0,e.jsx)(i.td,{children:(0,e.jsx)("img",{src:"/img/docs/UNO-R4-Starter-Kit/arduino-r4-minima.webp",width:"190",height:"150"})})]}),(0,e.jsxs)(i.tr,{children:[(0,e.jsx)(i.td,{children:"LED (white, red, blue, or green)"}),(0,e.jsx)(i.td,{children:(0,e.jsx)("img",{src:"/img/docs/UNO-R4-Starter-Kit/LED.jpg",width:"150",height:"100"})})]}),(0,e.jsxs)(i.tr,{children:[(0,e.jsx)(i.td,{children:"Resistor (220 ohms for the LED, optional if using internal pull-up resistors for buttons)"}),(0,e.jsx)(i.td,{children:(0,e.jsx)("img",{src:"/img/docs/UNO-R4-Starter-Kit/resistors.webp",width:"190",height:"150"})})]}),(0,e.jsxs)(i.tr,{children:[(0,e.jsx)(i.td,{children:"2 push buttons"}),(0,e.jsx)(i.td,{children:(0,e.jsx)("img",{src:"/img/docs/UNO-R4-Starter-Kit/push-button.webp",width:"190",height:"150"})})]})]})]}),"\n",(0,e.jsx)(i.h2,{id:"instructions",children:"Instructions"}),"\n",(0,e.jsxs)(i.ol,{children:["\n",(0,e.jsx)(i.li,{children:"Make the following connections using the jumper wires:"}),"\n"]}),"\n",(0,e.jsx)(i.h4,{id:"connections",children:"Connections"}),"\n",(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsx)(i.li,{children:"LED: Connect the anode (longer leg) to digital pin 5 and the cathode (shorter leg) to ground through a 220-ohm resistor."}),"\n",(0,e.jsx)(i.li,{children:"Button A: Connect one leg to digital pin 9 and the other leg to ground."}),"\n",(0,e.jsx)(i.li,{children:"Button B: Connect one leg to digital pin 8 and the other leg to ground."}),"\n"]}),"\n",(0,e.jsx)("img",{src:"/img/docs/UNO-R4-Starter-Kit/Digital-Input/Digital-Input.png",width:"300",height:"300"}),"\n",(0,e.jsxs)(i.ol,{start:"2",children:["\n",(0,e.jsx)(i.li,{children:"Once wired, upload the following code to your Arduino IDE:"}),"\n"]}),"\n",(0,e.jsx)(i.pre,{children:(0,e.jsx)(i.code,{className:"language-cpp",children:'int ledPin = 5;\r\nint buttonApin = 9;\r\nint buttonBpin = 8;\r\n\r\nvoid setup() {\r\n  pinMode(ledPin, OUTPUT);\r\n  pinMode(buttonApin, INPUT_PULLUP);  \r\n  pinMode(buttonBpin, INPUT_PULLUP);  \r\n}\r\n\r\nvoid loop() {\r\n  if (digitalRead(buttonApin) == LOW) {\r\n    digitalWrite(ledPin, HIGH);\r\n    Serial.println("ON");\r\n  } else if (digitalRead(buttonBpin) == LOW) {\r\n    digitalWrite(ledPin, LOW);\r\n    Serial.println("OFF");\r\n  }\r\n}\n'})}),"\n",(0,e.jsxs)(i.ol,{start:"3",children:["\n",(0,e.jsx)(i.li,{children:"Test! Play around with the buttons and customize the digital inputs."}),"\n"]})]})}function h(t={}){const{wrapper:i}={...(0,r.R)(),...t.components};return i?(0,e.jsx)(i,{...t,children:(0,e.jsx)(c,{...t})}):c(t)}},28453:(t,i,n)=>{n.d(i,{R:()=>o,x:()=>d});var e=n(96540);const r={},s=e.createContext(r);function o(t){const i=e.useContext(s);return e.useMemo((function(){return"function"==typeof t?t(i):{...i,...t}}),[i,t])}function d(t){let i;return i=t.disableParentContext?"function"==typeof t.components?t.components(r):t.components||r:o(t.components),e.createElement(s.Provider,{value:i},t.children)}}}]);