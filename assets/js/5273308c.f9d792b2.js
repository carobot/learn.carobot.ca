"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4634],{22822:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var i=n(74848),r=n(28453);const s={sidebar_position:19},o="19. LCD 1602 Module",d={id:"UNO-R4-Starter-Kit/LCD-1602-Module",title:"19. LCD 1602 Module",description:"The LCD 1602 module is a popular display device that uses a 16x2 character grid, perfect for various projects requiring a simple and efficient way to present information. Coupled with the Arduino Uno R4 Minima, this module allows you to display static and dynamic content, such as sensor readings, time, and interactive messages.",source:"@site/docs/UNO-R4-Starter-Kit/LCD-1602-Module.md",sourceDirName:"UNO-R4-Starter-Kit",slug:"/UNO-R4-Starter-Kit/LCD-1602-Module",permalink:"/UNO-R4-Starter-Kit/LCD-1602-Module",draft:!1,unlisted:!1,editUrl:"https://github.com/carobot/learn.carobot.ca/tree/main/docs/UNO-R4-Starter-Kit/LCD-1602-Module.md",tags:[],version:"current",sidebarPosition:19,frontMatter:{sidebar_position:19},sidebar:"tutorialSidebar",previous:{title:"18. RC522 RFID Module",permalink:"/UNO-R4-Starter-Kit/RFID-module"},next:{title:"20. Thermometer",permalink:"/UNO-R4-Starter-Kit/Thermometer"}},l={},c=[{value:"Materials",id:"materials",level:2},{value:"Instructions",id:"instructions",level:2},{value:"Connections",id:"connections",level:4},{value:"Code",id:"code",level:4}];function a(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"19-lcd-1602-module",children:"19. LCD 1602 Module"}),"\n",(0,i.jsx)(t.p,{children:"The LCD 1602 module is a popular display device that uses a 16x2 character grid, perfect for various projects requiring a simple and efficient way to present information. Coupled with the Arduino Uno R4 Minima, this module allows you to display static and dynamic content, such as sensor readings, time, and interactive messages."}),"\n",(0,i.jsx)(t.h2,{id:"materials",children:"Materials"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Component"}),(0,i.jsx)(t.th,{children:"Image"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"https://www.canadarobotix.com/products/160",children:"Breadboard"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)("img",{src:"/img/docs/UNO-R4-Starter-Kit/breadboard.webp",width:"200"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"https://www.canadarobotix.com/products/922",children:"Jumper wires"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)("img",{src:"/img/docs/UNO-R4-Starter-Kit/jumper-wires.webp",width:"200"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"https://www.canadarobotix.com/collections/featured-1/products/3060",children:"Arduino Uno R4 Minima"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)("img",{src:"/img/docs/UNO-R4-Starter-Kit/arduino-r4-minima.webp",width:"200"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"https://www.canadarobotix.com/products/1297",children:"LCD 1602 Module"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)("img",{src:"/img/docs/UNO-R4-Starter-Kit/LCD1602.webp",width:"200"})})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"instructions",children:"Instructions"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Make the following connections using the breadboard and jumper wires."}),"\n"]}),"\n",(0,i.jsx)(t.h4,{id:"connections",children:"Connections"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"RS (Register Select) pin to Arduino digital pin 7"}),"\n",(0,i.jsx)(t.li,{children:"E (Enable) pin to Arduino digital pin 8"}),"\n",(0,i.jsx)(t.li,{children:"D4 pin to Arduino digital pin 9"}),"\n",(0,i.jsx)(t.li,{children:"D5 pin to Arduino digital pin 10"}),"\n",(0,i.jsx)(t.li,{children:"D6 pin to Arduino digital pin 11"}),"\n",(0,i.jsx)(t.li,{children:"D7 pin to Arduino digital pin 12"}),"\n",(0,i.jsx)(t.li,{children:"GND to GND"}),"\n",(0,i.jsx)(t.li,{children:"VDD to 5V"}),"\n",(0,i.jsx)(t.li,{children:"VO to the middle pin of a 10k potentiometer (the other two pins of the potentiometer to 5V and GND)"}),"\n"]}),"\n",(0,i.jsx)("img",{src:"/img/docs/UNO-R4-Starter-Kit/LCD1602.png",width:"500"}),"\n",(0,i.jsxs)(t.ol,{start:"2",children:["\n",(0,i.jsx)(t.li,{children:"Paste the following code into your main Arduino sketch:"}),"\n"]}),"\n",(0,i.jsx)(t.h4,{id:"code",children:"Code"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-cpp",children:'#include <LiquidCrystal.h>\n\n// Initialize the library with the numbers of the interface pins\nLiquidCrystal lcd(7, 8, 9, 10, 11, 12);\n\nvoid setup() {\n  // Set up the LCD\'s number of columns and rows\n  lcd.begin(16, 2);\n  // Print a message to the LCD\n  lcd.print("Hello, World!");\n}\n\nvoid loop() {\n  // Set the cursor to column 0, line 1\n  // (note: line 1 is the second row, since counting begins with 0)\n  lcd.setCursor(0, 1);\n  // Print the number of seconds since reset\n  lcd.print(millis() / 1000);\n}\n'})}),"\n",(0,i.jsxs)(t.ol,{start:"3",children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Connect your Arduino to your laptop using a USB-C cable and upload the code to the arduino."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Test! Observe the text on the LCD display and the time changing!"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Prev"}),(0,i.jsx)(t.th,{children:"Next"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"/UNO-R4-Starter-Kit/RFID-module",children:"18. RC522 RFID Module"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"/UNO-R4-Starter-Kit/Thermometer",children:"20. Thermometer"})})]})})]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>d});var i=n(96540);const r={},s=i.createContext(r);function o(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);