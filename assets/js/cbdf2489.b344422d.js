"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[281],{49680:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var n=i(74848),s=i(28453);const r={sidebar_position:24},a="24. Shift Registers and 7-Segment Display",o={id:"UNO-R4-Starter-Kit/Shift-Registers-and-Display",title:"24. Shift Registers and 7-Segment Display",description:"The 74HC595 is an 8-bit serial-in, parallel-out shift register. This means it can take in a serial data input (one bit at a time) and then output the data in parallel (all 8 bits at once). This functionality is particularly useful for expanding the number of output pins available on a microcontroller. A 7-segment display is a simple electronic display device that can display digits from 0 to 9. It consists of seven LEDs (segments) arranged in a pattern that can form each digit. Each segment is labeled with a letter from 'a' to 'g'.",source:"@site/docs/UNO-R4-Starter-Kit/Shift-Registers-and-Display.md",sourceDirName:"UNO-R4-Starter-Kit",slug:"/UNO-R4-Starter-Kit/Shift-Registers-and-Display",permalink:"/UNO-R4-Starter-Kit/Shift-Registers-and-Display",draft:!1,unlisted:!1,editUrl:"https://github.com/carobot/learn.carobot.ca/tree/main/docs/UNO-R4-Starter-Kit/Shift-Registers-and-Display.md",tags:[],version:"current",sidebarPosition:24,frontMatter:{sidebar_position:24},sidebar:"tutorialSidebar",previous:{title:"23. Photocell",permalink:"/UNO-R4-Starter-Kit/Photocell"},next:{title:"25. Shift Registers and 4 Digit Display",permalink:"/UNO-R4-Starter-Kit/Shift-Registers-and-4-Digit-Display"}},l={},d=[{value:"Materials",id:"materials",level:2},{value:"Instructions",id:"instructions",level:2},{value:"74HC595 Shift Register Connections",id:"74hc595-shift-register-connections",level:4},{value:"7 Segment Display to Shift Register",id:"7-segment-display-to-shift-register",level:4},{value:"Code",id:"code",level:4}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"24-shift-registers-and-7-segment-display",children:"24. Shift Registers and 7-Segment Display"}),"\n",(0,n.jsx)(t.p,{children:"The 74HC595 is an 8-bit serial-in, parallel-out shift register. This means it can take in a serial data input (one bit at a time) and then output the data in parallel (all 8 bits at once). This functionality is particularly useful for expanding the number of output pins available on a microcontroller. A 7-segment display is a simple electronic display device that can display digits from 0 to 9. It consists of seven LEDs (segments) arranged in a pattern that can form each digit. Each segment is labeled with a letter from 'a' to 'g'."}),"\n",(0,n.jsx)(t.h2,{id:"materials",children:"Materials"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Component"}),(0,n.jsx)(t.th,{children:"Image"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://www.canadarobotix.com/products/160",children:"Breadboard"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)("img",{src:"/img/docs/UNO-R4-Starter-Kit/breadboard.webp",width:"200"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://www.canadarobotix.com/products/922",children:"Jumper wires"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)("img",{src:"/img/docs/UNO-R4-Starter-Kit/jumper-wires.webp",width:"200"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://www.canadarobotix.com/collections/featured-1/products/3060",children:"Arduino Uno R4 Minima"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)("img",{src:"/img/docs/UNO-R4-Starter-Kit/arduino-r4-minima.webp",width:"200"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://www.canadarobotix.com/products/5138",children:"Resistors (220 ohms for the LED, optional if using internal pull-up resistors for buttons)"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)("img",{src:"/img/docs/UNO-R4-Starter-Kit/resistors.webp",width:"200"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://www.canadarobotix.com/products/1887",children:"7 Segment Display"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)("img",{src:"/img/docs/UNO-R4-Starter-Kit/7-seg.webp",width:"200"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://www.canadarobotix.com/products/848",children:"74HC595 Shift Register"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)("img",{src:"/img/docs/UNO-R4-Starter-Kit/74HC595.png",width:"200"})})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"instructions",children:"Instructions"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Make the following connections using the breadboard and jumper wires."}),"\n"]}),"\n",(0,n.jsx)(t.h4,{id:"74hc595-shift-register-connections",children:"74HC595 Shift Register Connections"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"DS (Data Pin) to Arduino pin 2"}),"\n",(0,n.jsx)(t.li,{children:"SH_CP (Clock Pin) to Arduino pin 4"}),"\n",(0,n.jsx)(t.li,{children:"ST_CP (Latch Pin) to Arduino pin 3"}),"\n",(0,n.jsx)(t.li,{children:"VCC to 5V on Arduino"}),"\n",(0,n.jsx)(t.li,{children:"GND to GND on Arduino"}),"\n"]}),"\n",(0,n.jsx)(t.h4,{id:"7-segment-display-to-shift-register",children:"7 Segment Display to Shift Register"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Q0 (Pin 15 on 74HC595): Connect to Segment A (Pin 10 on 7-segment display)"}),"\n",(0,n.jsx)(t.li,{children:"Q1 (Pin 1 on 74HC595): Connect to Segment B (Pin 7 on 7-segment display)"}),"\n",(0,n.jsx)(t.li,{children:"Q2 (Pin 2 on 74HC595): Connect to Segment C (Pin 4 on 7-segment display)"}),"\n",(0,n.jsx)(t.li,{children:"Q3 (Pin 3 on 74HC595): Connect to Segment D (Pin 2 on 7-segment display)"}),"\n",(0,n.jsx)(t.li,{children:"Q4 (Pin 4 on 74HC595): Connect to Segment E (Pin 1 on 7-segment display)"}),"\n",(0,n.jsx)(t.li,{children:"Q5 (Pin 5 on 74HC595): Connect to Segment F (Pin 9 on 7-segment display)"}),"\n",(0,n.jsx)(t.li,{children:"Q6 (Pin 6 on 74HC595): Connect to Segment G (Pin 5 on 7-segment display)"}),"\n",(0,n.jsx)(t.li,{children:"Q7 (Pin 7 on 74HC595): Connect to Decimal Point (Pin 6 on 7-segment display)(optional)"}),"\n"]}),"\n",(0,n.jsx)("img",{src:"/img/docs/UNO-R4-Starter-Kit/shift-registers-and-displays.png",width:"600"}),"\n",(0,n.jsxs)(t.ol,{start:"2",children:["\n",(0,n.jsx)(t.li,{children:"Paste the following code into your main Arduino sketch:"}),"\n"]}),"\n",(0,n.jsx)(t.h4,{id:"code",children:"Code"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-cpp",children:"byte seven_seg_digits[10] = { B11111100,  // = 0\n                              B01100000,  // = 1\n                              B11011010,  // = 2\n                              B11110010,  // = 3\n                              B01100110,  // = 4\n                              B10110110,  // = 5\n                              B10111110,  // = 6\n                              B11100000,  // = 7\n                              B11111110,  // = 8\n                              B11100110   // = 9\n                             };\n \n\nint latchPin = 3;\n\nint clockPin = 4;\n\nint dataPin = 2;\n \nvoid setup() {\n  Serial.begin(9600);\n  pinMode(latchPin, OUTPUT);\n  pinMode(clockPin, OUTPUT);\n  pinMode(dataPin, OUTPUT);\n}\n \n\nvoid sevenSegWrite(byte digit) {\n  digitalWrite(latchPin, LOW);\n  shiftOut(dataPin, clockPin, LSBFIRST, seven_seg_digits[digit]);  \n  digitalWrite(latchPin, HIGH);\n}\n \nvoid loop() {       \n  \n  for (byte digit = 10; digit > 0; --digit) {\n    delay(1000);\n    sevenSegWrite(digit - 1); \n    Serial.println(digit - 1);\n  }\n   \n  // suspend 4 seconds\n  delay(3000);\n}\n"})}),"\n",(0,n.jsxs)(t.ol,{start:"3",children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Connect your Arduino to your laptop using a USB-C cable and upload the code to the arduino."}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Test! Check to see if the numbers bring printed onto the serial monitor are corresponding to the numbers on the hex display."}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Prev"}),(0,n.jsx)(t.th,{children:"Next"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/UNO-R4-Starter-Kit/Photocell",children:"23. Photocell"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/UNO-R4-Starter-Kit/Shift-Registers-and-4-Digit-Display",children:"25. Shift Registers and 4 Digit Display"})})]})})]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>a,x:()=>o});var n=i(96540);const s={},r=n.createContext(s);function a(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);