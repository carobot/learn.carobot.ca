"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6379],{15238:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var t=n(74848),i=n(28453);const o={sidebar_position:13},s="13. GY-521 Module",a={id:"UNO-R4-Starter-Kit/GY-521-Module",title:"13. GY-521 Module",description:"The GY-521 module, based on the MPU-6050 sensor, is a popular choice for motion sensing applications. This module combines a 3-axis gyroscope and a 3-axis accelerometer on a single chip, allowing for accurate motion tracking in various projects.",source:"@site/docs/UNO-R4-Starter-Kit/GY-521-Module.md",sourceDirName:"UNO-R4-Starter-Kit",slug:"/UNO-R4-Starter-Kit/GY-521-Module",permalink:"/UNO-R4-Starter-Kit/GY-521-Module",draft:!1,unlisted:!1,editUrl:"https://github.com/carobot/learn.carobot.ca/tree/main/docs/UNO-R4-Starter-Kit/GY-521-Module.md",tags:[],version:"current",sidebarPosition:13,frontMatter:{sidebar_position:13},sidebar:"tutorialSidebar",previous:{title:"12. MAX7219 LED Matrix",permalink:"/UNO-R4-Starter-Kit/MAX7219-LED-Matrix"},next:{title:"14. PIR Motion Sensor",permalink:"/UNO-R4-Starter-Kit/HCSR312-AM312"}},d={},l=[{value:"Materials",id:"materials",level:2},{value:"Instructions",id:"instructions",level:2},{value:"Connections",id:"connections",level:4},{value:"Code",id:"code",level:4}];function c(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"13-gy-521-module",children:"13. GY-521 Module"}),"\n",(0,t.jsx)(r.p,{children:"The GY-521 module, based on the MPU-6050 sensor, is a popular choice for motion sensing applications. This module combines a 3-axis gyroscope and a 3-axis accelerometer on a single chip, allowing for accurate motion tracking in various projects."}),"\n",(0,t.jsx)(r.h2,{id:"materials",children:"Materials"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Component"}),(0,t.jsx)(r.th,{children:"Image"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://www.canadarobotix.com/products/160",children:"Breadboard"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)("img",{src:"/img/docs/UNO-R4-Starter-Kit/breadboard.webp",width:"200"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://www.canadarobotix.com/products/922",children:"Jumper wires"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)("img",{src:"/img/docs/UNO-R4-Starter-Kit/jumper-wires.webp",width:"200"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://www.canadarobotix.com/collections/featured-1/products/3060",children:"Arduino Uno R4 Minima"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)("img",{src:"/img/docs/UNO-R4-Starter-Kit/arduino-r4-minima.webp",width:"200"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"GY-521 Gyroscope Module"}),(0,t.jsx)(r.td,{children:(0,t.jsx)("img",{src:"/img/docs/UNO-R4-Starter-Kit/GY-521-module.jpg",width:"200"})})]})]})]}),"\n",(0,t.jsx)(r.h2,{id:"instructions",children:"Instructions"}),"\n",(0,t.jsxs)(r.ol,{children:["\n",(0,t.jsx)(r.li,{children:"Make the following connections using the breadboard and jumper wires."}),"\n"]}),"\n",(0,t.jsx)(r.h4,{id:"connections",children:"Connections"}),"\n",(0,t.jsx)(r.p,{children:"(GY-521 to Arduino)"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"VCC to 5V"}),"\n",(0,t.jsx)(r.li,{children:"GND to GND"}),"\n",(0,t.jsx)(r.li,{children:"SCL to SCL"}),"\n",(0,t.jsx)(r.li,{children:"SDA to SDA"}),"\n"]}),"\n",(0,t.jsx)("img",{src:"/img/docs/UNO-R4-Starter-Kit/GY-521.png",width:"500"}),"\n",(0,t.jsxs)(r.ol,{start:"2",children:["\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsx)(r.p,{children:"Navigate to the Library Manager on the Arduino IDE and download the MPU6050 library."}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsx)(r.p,{children:"Paste the following code into your main Arduino sketch:"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(r.h4,{id:"code",children:"Code"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-cpp",children:'// Importing the necessary libraries\r\n#include <Wire.h>\r\n#include <MPU6050.h>\r\n\r\nMPU6050 mpu;\r\n\r\n//Setting to print on serial monitor 9600\r\nvoid setup() {\r\n  Serial.begin(9600);\r\n  Wire.begin();\r\n  mpu.initialize();\r\n  \r\n  Serial.println("Testing Gyroscope and Accelerometer MPU6050");\r\n}\r\n\r\nvoid loop() {\r\n  int16_t ax, ay, az, gx, gy, gz;\r\n  mpu.getMotion6(&ax, &ay, &az, &gx, &gy, &gz);\r\n  \r\n  // Printing the data from each of the 3 axes\r\n  Serial.print("a/g:\\t");\r\n  Serial.print(ax); Serial.print("\\t");\r\n  Serial.print(ay); Serial.print("\\t");\r\n  Serial.print(az); Serial.print("\\t");\r\n  Serial.print(gx); Serial.print("\\t");\r\n  Serial.print(gy); Serial.print("\\t");\r\n  Serial.println(gz);\r\n  \r\n  delay(1000); // The data is set to print every second\r\n}\n'})}),"\n",(0,t.jsxs)(r.ol,{start:"4",children:["\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsx)(r.p,{children:"Connect your Arduino to your laptop using a USB-C cable and upload the code to the arduino."}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsx)(r.p,{children:"Test! Move your gyroscope and observe the changes in print statements on your serial monitor."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Prev"}),(0,t.jsx)(r.th,{children:"Next"})]})}),(0,t.jsx)(r.tbody,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/UNO-R4-Starter-Kit/MAX7219-LED-Matrix",children:"12. MAX7219 LED Matrix"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/UNO-R4-Starter-Kit/HCSR312-AM312",children:"14. PIR Motion Sensor"})})]})})]})]})}function h(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,r,n)=>{n.d(r,{R:()=>s,x:()=>a});var t=n(96540);const i={},o=t.createContext(i);function s(e){const r=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(o.Provider,{value:r},e.children)}}}]);