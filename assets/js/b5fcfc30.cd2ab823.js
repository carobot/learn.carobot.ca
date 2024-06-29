"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1533],{82313:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>a});var i=t(74848),r=t(28453);const o={sidebar_position:16},s="16. DS1307 RTC Module",d={id:"UNO-R4-Starter-Kit/DS1307-RTC-Module",title:"16. DS1307 RTC Module",description:"An RTC module is a highly useful component in projects that require precise timekeeping. Unlike your Arduino's built-in timer, which resets every time the power is cycled, an RTC module retains the correct time and date even when powered down, thanks to its onboard battery backup.",source:"@site/docs/UNO-R4-Starter-Kit/DS1307-RTC-Module.md",sourceDirName:"UNO-R4-Starter-Kit",slug:"/UNO-R4-Starter-Kit/DS1307-RTC-Module",permalink:"/UNO-R4-Starter-Kit/DS1307-RTC-Module",draft:!1,unlisted:!1,editUrl:"https://github.com/carobot/learn.carobot.ca/tree/main/docs/UNO-R4-Starter-Kit/DS1307-RTC-Module.md",tags:[],version:"current",sidebarPosition:16,frontMatter:{sidebar_position:16},sidebar:"tutorialSidebar",previous:{title:"15. Water Level Detection Sensor",permalink:"/UNO-R4-Starter-Kit/Water-Level-Detection-Sensor"},next:{title:"17. Sound Sensor",permalink:"/UNO-R4-Starter-Kit/Sound-Sensor"}},l={},a=[{value:"Materials",id:"materials",level:2},{value:"Instructions",id:"instructions",level:2},{value:"Connections",id:"connections",level:4},{value:"Code",id:"code",level:4}];function c(e){const n={code:"code",h1:"h1",h2:"h2",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"16-ds1307-rtc-module",children:"16. DS1307 RTC Module"}),"\n",(0,i.jsx)(n.p,{children:"An RTC module is a highly useful component in projects that require precise timekeeping. Unlike your Arduino's built-in timer, which resets every time the power is cycled, an RTC module retains the correct time and date even when powered down, thanks to its onboard battery backup."}),"\n",(0,i.jsx)(n.h2,{id:"materials",children:"Materials"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Component"}),(0,i.jsx)(n.th,{children:"Image"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Breadboard"}),(0,i.jsx)(n.td,{children:(0,i.jsx)("img",{src:"/img/docs/UNO-R4-Starter-Kit/breadboard.webp",width:"200"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Jumper wires"}),(0,i.jsx)(n.td,{children:(0,i.jsx)("img",{src:"/img/docs/UNO-R4-Starter-Kit/jumper-wires.webp",width:"200"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Arduino Uno R4 Minima"}),(0,i.jsx)(n.td,{children:(0,i.jsx)("img",{src:"/img/docs/UNO-R4-Starter-Kit/arduino-r4-minima.webp",width:"200"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"DS1307 RTC Module"}),(0,i.jsx)(n.td,{children:(0,i.jsx)("img",{src:"/img/docs/UNO-R4-Starter-Kit/DS1307-RTC.webp",width:"200"})})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"instructions",children:"Instructions"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Make the following connections using the breadboard and jumper wires."}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"connections",children:"Connections"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"GND to GND"}),"\n",(0,i.jsx)(n.li,{children:"VCC to 5V"}),"\n",(0,i.jsx)(n.li,{children:"SDA to SDA"}),"\n",(0,i.jsx)(n.li,{children:"SCL to SCL"}),"\n"]}),"\n",(0,i.jsx)("img",{src:"/img/docs/UNO-R4-Starter-Kit/Ds1307.png",width:"600"}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:'Download the "RTClib" library from the Library Manager in the Arduino IDE.'}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Paste the following code into your main Arduino sketch:"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"code",children:"Code"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:"// Importing the necessary libraries\n#include <Wire.h>\n#include <RTClib.h>\n\nRTC_DS1307 rtc;\n\nvoid setup() {\n  // setting the serial monitor to print the output\n  Serial.begin(9600);\n  Wire.begin();\n\n  if (!rtc.begin()) {\n    Serial.println(\"Couldn't find RTC\");\n    while (1);\n  }\n\n  if (!rtc.isrunning()) {\n    Serial.println(\"RTC is NOT running, let's set the time!\");\n\n    rtc.adjust(DateTime(F(__DATE__), F(__TIME__)));\n  }\n}\n\nvoid loop() {\n  DateTime now = rtc.now();\n  // printing out the present date and time\n  Serial.print(now.year(), DEC);\n  Serial.print('/');\n  Serial.print(now.month(), DEC);\n  Serial.print('/');\n  Serial.print(now.day(), DEC);\n  Serial.print(\" \");\n  Serial.print(now.hour(), DEC);\n  Serial.print(':');\n  Serial.print(now.minute(), DEC);\n  Serial.print(':');\n  Serial.print(now.second(), DEC);\n  Serial.println();\n  // print every second\n  delay(1000);\n}\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"4",children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Connect your Arduino to your laptop using a USB-C cable and upload the code to the arduino."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Test! Observe the serial monitor print out the date and time on the serial monitor."}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>d});var i=t(96540);const r={},o=i.createContext(r);function s(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);