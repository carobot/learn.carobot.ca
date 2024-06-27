"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[281],{49680:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var t=n(74848),s=n(28453);const r={sidebar_position:24},a="Shift Registers and 7-Segment Display",l={id:"UNO-R4-Starter-Kit/Shift-Registers-and-Display",title:"Shift Registers and 7-Segment Display",description:"The 74HC595 is an 8-bit serial-in, parallel-out shift register. This means it can take in a serial data input (one bit at a time) and then output the data in parallel (all 8 bits at once). This functionality is particularly useful for expanding the number of output pins available on a microcontroller. A 7-segment display is a simple electronic display device that can display digits from 0 to 9. It consists of seven LEDs (segments) arranged in a pattern that can form each digit. Each segment is labeled with a letter from 'a' to 'g'.",source:"@site/docs/UNO-R4-Starter-Kit/Shift-Registers-and-Display.md",sourceDirName:"UNO-R4-Starter-Kit",slug:"/UNO-R4-Starter-Kit/Shift-Registers-and-Display",permalink:"/UNO-R4-Starter-Kit/Shift-Registers-and-Display",draft:!1,unlisted:!1,editUrl:"https://github.com/carobot/learn.carobot.ca/tree/main/docs/UNO-R4-Starter-Kit/Shift-Registers-and-Display.md",tags:[],version:"current",sidebarPosition:24,frontMatter:{sidebar_position:24},sidebar:"tutorialSidebar",previous:{title:"Photocell",permalink:"/UNO-R4-Starter-Kit/Photocell"},next:{title:"Shift Registers and 4 Digit Display",permalink:"/UNO-R4-Starter-Kit/Shift-Registers-and-4-Digit-Display"}},o={},d=[{value:"Materials",id:"materials",level:2},{value:"Instructions",id:"instructions",level:2},{value:"74HC595 Shift Register Connections",id:"74hc595-shift-register-connections",level:4},{value:"7 Segment Display to Shift Register",id:"7-segment-display-to-shift-register",level:4}];function c(e){const i={code:"code",h1:"h1",h2:"h2",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h1,{id:"shift-registers-and-7-segment-display",children:"Shift Registers and 7-Segment Display"}),"\n",(0,t.jsx)(i.p,{children:"The 74HC595 is an 8-bit serial-in, parallel-out shift register. This means it can take in a serial data input (one bit at a time) and then output the data in parallel (all 8 bits at once). This functionality is particularly useful for expanding the number of output pins available on a microcontroller. A 7-segment display is a simple electronic display device that can display digits from 0 to 9. It consists of seven LEDs (segments) arranged in a pattern that can form each digit. Each segment is labeled with a letter from 'a' to 'g'."}),"\n",(0,t.jsx)(i.h2,{id:"materials",children:"Materials"}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"Component"}),(0,t.jsx)(i.th,{children:"Image"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Breadboard"}),(0,t.jsx)(i.td,{children:(0,t.jsx)("img",{src:"/img/docs/UNO-R4-Starter-Kit/breadboard.webp",width:"200",height:"150"})})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Jumper wires"}),(0,t.jsx)(i.td,{children:(0,t.jsx)("img",{src:"/img/docs/UNO-R4-Starter-Kit/jumper-wires.webp",width:"200",height:"150"})})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Arduino Uno R4 Minima"}),(0,t.jsx)(i.td,{children:(0,t.jsx)("img",{src:"/img/docs/UNO-R4-Starter-Kit/arduino-r4-minima.webp",width:"190",height:"150"})})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"220 Ohm Resistors"}),(0,t.jsx)(i.td,{children:(0,t.jsx)("img",{src:"/img/docs/UNO-R4-Starter-Kit/resistors.webp",width:"150",height:"150"})})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"7 Segment Display"}),(0,t.jsx)(i.td,{children:(0,t.jsx)("img",{src:"/img/docs/UNO-R4-Starter-Kit/7-seg.webp",width:"250",height:"250"})})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"74HC595 Shift Register"}),(0,t.jsx)(i.td,{children:(0,t.jsx)("img",{src:"/img/docs/UNO-R4-Starter-Kit/74HC595.png",width:"190",height:"150"})})]})]})]}),"\n",(0,t.jsx)(i.h2,{id:"instructions",children:"Instructions"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsx)(i.li,{children:"Make the following connections using the breadboard and jumper wires."}),"\n"]}),"\n",(0,t.jsx)(i.h4,{id:"74hc595-shift-register-connections",children:"74HC595 Shift Register Connections"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"DS (Data Pin) to Arduino pin 2"}),"\n",(0,t.jsx)(i.li,{children:"SH_CP (Clock Pin) to Arduino pin 4"}),"\n",(0,t.jsx)(i.li,{children:"ST_CP (Latch Pin) to Arduino pin 3"}),"\n",(0,t.jsx)(i.li,{children:"VCC to 5V on Arduino"}),"\n",(0,t.jsx)(i.li,{children:"GND to GND on Arduino"}),"\n"]}),"\n",(0,t.jsx)(i.h4,{id:"7-segment-display-to-shift-register",children:"7 Segment Display to Shift Register"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Q0 (Pin 15 on 74HC595): Connect to Segment A (Pin 10 on 7-segment display)"}),"\n",(0,t.jsx)(i.li,{children:"Q1 (Pin 1 on 74HC595): Connect to Segment B (Pin 7 on 7-segment display)"}),"\n",(0,t.jsx)(i.li,{children:"Q2 (Pin 2 on 74HC595): Connect to Segment C (Pin 4 on 7-segment display)"}),"\n",(0,t.jsx)(i.li,{children:"Q3 (Pin 3 on 74HC595): Connect to Segment D (Pin 2 on 7-segment display)"}),"\n",(0,t.jsx)(i.li,{children:"Q4 (Pin 4 on 74HC595): Connect to Segment E (Pin 1 on 7-segment display)"}),"\n",(0,t.jsx)(i.li,{children:"Q5 (Pin 5 on 74HC595): Connect to Segment F (Pin 9 on 7-segment display)"}),"\n",(0,t.jsx)(i.li,{children:"Q6 (Pin 6 on 74HC595): Connect to Segment G (Pin 5 on 7-segment display)"}),"\n",(0,t.jsx)(i.li,{children:"Q7 (Pin 7 on 74HC595): Connect to Decimal Point (Pin 6 on 7-segment display)(optional)"}),"\n"]}),"\n",(0,t.jsx)("img",{src:"/img/docs/UNO-R4-Starter-Kit/shift-registers-and-displays.png",width:"650",height:"300"}),"\n",(0,t.jsxs)(i.ol,{start:"2",children:["\n",(0,t.jsx)(i.li,{children:"Paste the following code into your main Arduino sketch:"}),"\n"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-cpp",children:"byte seven_seg_digits[10] = { B11111100,  // = 0\r\n                              B01100000,  // = 1\r\n                              B11011010,  // = 2\r\n                              B11110010,  // = 3\r\n                              B01100110,  // = 4\r\n                              B10110110,  // = 5\r\n                              B10111110,  // = 6\r\n                              B11100000,  // = 7\r\n                              B11111110,  // = 8\r\n                              B11100110   // = 9\r\n                             };\r\n \r\n\r\nint latchPin = 3;\r\n\r\nint clockPin = 4;\r\n\r\nint dataPin = 2;\r\n \r\nvoid setup() {\r\n  Serial.begin(9600);\r\n  pinMode(latchPin, OUTPUT);\r\n  pinMode(clockPin, OUTPUT);\r\n  pinMode(dataPin, OUTPUT);\r\n}\r\n \r\n\r\nvoid sevenSegWrite(byte digit) {\r\n  digitalWrite(latchPin, LOW);\r\n  shiftOut(dataPin, clockPin, LSBFIRST, seven_seg_digits[digit]);  \r\n  digitalWrite(latchPin, HIGH);\r\n}\r\n \r\nvoid loop() {       \r\n  \r\n  for (byte digit = 10; digit > 0; --digit) {\r\n    delay(1000);\r\n    sevenSegWrite(digit - 1); \r\n    Serial.println(digit - 1);\r\n  }\r\n   \r\n  // suspend 4 seconds\r\n  delay(3000);\r\n}\n"})}),"\n",(0,t.jsxs)(i.ol,{start:"3",children:["\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:"Connect your Arduino to your laptop using a USB-C cable and upload the code to the arduino."}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:"Test! Check to see if the numbers bring printed onto the serial monitor are corresponding to the numbers on the hex display."}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,i,n)=>{n.d(i,{R:()=>a,x:()=>l});var t=n(96540);const s={},r=t.createContext(s);function a(e){const i=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(r.Provider,{value:i},e.children)}}}]);