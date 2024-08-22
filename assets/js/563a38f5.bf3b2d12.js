"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8012],{71438:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var r=n(74848),i=n(28453);const s={title:"Project 6.1: Two-way Data Communication - String Gauge to PC",sidebar_position:9},o=void 0,a={id:"ESP32-Starter-Kit/Project-6.1",title:"Project 6.1: Two-way Data Communication - String Gauge to PC",description:"Overview:",source:"@site/Projects/ESP32-Starter-Kit/Project-6.1.md",sourceDirName:"ESP32-Starter-Kit",slug:"/ESP32-Starter-Kit/Project-6.1",permalink:"/Projects/ESP32-Starter-Kit/Project-6.1",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"Project 6.1: Two-way Data Communication - String Gauge to PC",sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Project 5.2: One-way Data Communication - LED Control",permalink:"/Projects/ESP32-Starter-Kit/Project-5.2"},next:{title:"Project 6.2: Two-way Data Communication - IMU Sensor to PC",permalink:"/Projects/ESP32-Starter-Kit/Project-6.2"}},d={},c=[{value:"Overview:",id:"overview",level:2},{value:"Material:",id:"material",level:2},{value:"Objectives:",id:"objectives",level:2},{value:"Computer:",id:"computer",level:3},{value:"ESP32:",id:"esp32",level:3},{value:"Hardware Assembly",id:"hardware-assembly",level:2},{value:"Network Diagram",id:"network-diagram",level:2},{value:"Pseudocode:",id:"pseudocode",level:2},{value:"Client:",id:"client",level:4},{value:"ESP32:",id:"esp32-1",level:4},{value:"Instructions:",id:"instructions",level:2},{value:"What you should see:",id:"what-you-should-see",level:4}];function l(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"overview",children:"Overview:"}),"\n",(0,r.jsx)(t.p,{children:"Project 6.1 involves creating a system where an ESP32 wirelessly transmits strain gauge sensor value to a computer. This project is built upon the earlier setup (we can reuse project 4.ino) by integrating wireless data transmission, allowing remote monitoring of sensor data."}),"\n",(0,r.jsx)(t.h2,{id:"material",children:"Material:"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Component"}),(0,r.jsx)(t.th,{children:"Image"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://www.canadarobotix.com/products/3050",children:"Strain Gauge"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)("img",{src:"/img/docs/projects/esp32-starter-kit/strain-gauge.png",width:"200"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://www.canadarobotix.com/products/2318",children:"HX711 Amplifier"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)("img",{src:"/img/docs/projects/esp32-starter-kit/HX711.png",width:"200"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://www.canadarobotix.com/products/2594",children:"ESP32 Dev Board"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)("img",{src:"/img/docs/projects/esp32-starter-kit/ESP32.webp",width:"200"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://www.canadarobotix.com/products/3056",children:'1.8" TFT LCD Screen'})}),(0,r.jsx)(t.td,{children:(0,r.jsx)("img",{src:"/img/docs/projects/esp32-starter-kit/LCD-Screen.webp",width:"200"})})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"objectives",children:"Objectives:"}),"\n",(0,r.jsx)(t.h3,{id:"computer",children:"Computer:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Socket Creating and Configuration: Create an UDP socket and configure it for non-blocking mode."}),"\n",(0,r.jsx)(t.li,{children:"Connection Setup: Set up the address and port details for both the client and the server (ESP32), and bind the socket to the client\u2019s address."}),"\n",(0,r.jsx)(t.li,{children:"Receiving Data: Receive data continuously from the ESP32 and display it on the console."}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"esp32",children:"ESP32:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Sensor and Display Initialization: Set up the HX711 load cell for weight measurement and initialize the TFT display"}),"\n",(0,r.jsx)(t.li,{children:"Network Configuration: Configure the ESP32 to act as a WiFi access point and start a UDP server to send data to the client defined by its IP and PORT."}),"\n",(0,r.jsx)(t.li,{children:"Data Handling and Transmission: Measure the weight, display it on the TFT and send this data to the client."}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"hardware-assembly",children:"Hardware Assembly"}),"\n",(0,r.jsx)("img",{src:"/img/docs/projects/esp32-starter-kit/hardware-assembly-2.png",width:"700"}),"\n",(0,r.jsx)(t.h2,{id:"network-diagram",children:"Network Diagram"}),"\n",(0,r.jsx)("img",{src:"/img/docs/projects/esp32-starter-kit/ESP32-15.png",width:"700"}),"\n",(0,r.jsx)(t.h2,{id:"pseudocode",children:"Pseudocode:"}),"\n",(0,r.jsx)(t.h4,{id:"client",children:"Client:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"Include necessary libraries\r\nDefine constants for buffer length, server and client ports, and server IP\r\nInitialize signal handlers for clean shutdown\r\n \r\nMain:\r\n\tInitialize socket and server/client structures\r\n\tCreate and configure UDP socket\r\n\tBind the socket to the client's address\r\n\tConnect the socket to the server's address\r\n\tEnter a loop:\r\n    \tReceive data from the server\r\n    \tPrint received data to console\r\n    \tCheck for \"quit\" command to terminate loop\r\n\tClose the socket and terminate\n"})}),"\n",(0,r.jsx)(t.h4,{id:"esp32-1",children:"ESP32:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"\tInclude necessary libraries for WiFi, HX711, and TFT display\r\nDefine constants for pin configurations and network settings\r\n \r\nSetup:\r\n\tInitialize serial communication and TFT display\r\n\tConfigure WiFi access point and display network details\r\n\tInitialize and configure HX711 load cell\r\n\tStart UDP server\r\n\tBegin task for sending data\r\n \r\nSend Task:\r\n\tLoop continuously:\r\n    \tMeasure weight with HX711\r\n    \tFormat and send weight data via UDP to the client\r\n    \tDelay briefly\r\n \r\nLoop:\r\n\tMeasure weight\r\n\tDisplay weight on TFT display\r\n\tDelay briefly to update display\n"})}),"\n",(0,r.jsx)(t.h2,{id:"instructions",children:"Instructions:"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"Download project6_1.ino"}),"\n",(0,r.jsx)(t.li,{children:"Change your ESP32 name and password for the access point if you want"}),"\n",(0,r.jsx)(t.li,{children:"Verify and upload the instruction into the ESP32"}),"\n",(0,r.jsx)(t.li,{children:"Connect your computer to the ESP32 access point"}),"\n",(0,r.jsx)(t.li,{children:"Download client file from the folder"}),"\n",(0,r.jsx)(t.li,{children:"On your terminal, go to the client file and run:"}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"make clean all\r\n./client\n"})}),"\n",(0,r.jsxs)(t.ol,{start:"7",children:["\n",(0,r.jsx)(t.li,{children:"To proceed measuring an object, we need to calibrate it first, so visit project 4 to see how we can calibrate a known weight object."}),"\n",(0,r.jsx)(t.li,{children:"The weight of the object should be logged out to the screen"}),"\n"]}),"\n",(0,r.jsx)(t.h4,{id:"what-you-should-see",children:"What you should see:"}),"\n",(0,r.jsx)("img",{src:"/img/docs/projects/esp32-starter-kit/ESP32-16.png",width:"700"})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var r=n(96540);const i={},s=r.createContext(i);function o(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);