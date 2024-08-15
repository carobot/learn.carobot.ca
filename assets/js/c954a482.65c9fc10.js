"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4949],{73011:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>o});var n=r(74848),i=r(28453);const s={title:"Project 2: 'Hello world' on Screen",sidebar_position:4},d=void 0,c={id:"ESP32-Starter-Kit/Project-2",title:"Project 2: 'Hello world' on Screen",description:"Overview:",source:"@site/Projects/ESP32-Starter-Kit/Project-2.md",sourceDirName:"ESP32-Starter-Kit",slug:"/ESP32-Starter-Kit/Project-2",permalink:"/Projects/ESP32-Starter-Kit/Project-2",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Project 2: 'Hello world' on Screen",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Project 1: Environment Setup",permalink:"/Projects/ESP32-Starter-Kit/Project-1"},next:{title:"Project 3: Calibrating and Measuring an Object",permalink:"/Projects/ESP32-Starter-Kit/Project-3"}},l={},o=[{value:"Overview:",id:"overview",level:2},{value:"Materials:",id:"materials",level:2},{value:"Objectives:",id:"objectives",level:3},{value:"Hardware Assembly",id:"hardware-assembly",level:3},{value:"Pin Connection:",id:"pin-connection",level:3},{value:"Pseudocode:",id:"pseudocode",level:3},{value:"What you should see:",id:"what-you-should-see",level:4}];function a(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"overview",children:"Overview:"}),"\n",(0,n.jsx)(t.p,{children:"In this project, we will integrate a TFT LCD display with ESP32 using specialized libraries to manage\r\ngraphics and display some strings to the screen. You should attempt to write code using pseudocode\r\nand library methods I provided in this repository (#to be included)."}),"\n",(0,n.jsx)(t.h2,{id:"materials",children:"Materials:"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Component"}),(0,n.jsx)(t.th,{children:"Image"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://www.canadarobotix.com/products/2594",children:"ESP32 Dev Board"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)("img",{src:"/img/docs/projects/esp32-starter-kit/ESP32.webp",width:"200"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://www.canadarobotix.com/products/3056",children:'1.8" TFT LCD Screen'})}),(0,n.jsx)(t.td,{children:(0,n.jsx)("img",{src:"/img/docs/projects/esp32-starter-kit/LCD-Screen.webp",width:"200"})})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"objectives",children:"Objectives:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Interface with a TFT Display: Understand the wiring and software configuration needed to drive\r\nan Adafruit ST7735 TFT display using ESP32 microcontroller"}),"\n",(0,n.jsx)(t.li,{children:"Implement Basic Graphics Programming: Use the Adafruit GFX library to display text and\r\nmanage simple graphics"}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"hardware-assembly",children:"Hardware Assembly"}),"\n",(0,n.jsx)("img",{src:"/img/docs/projects/esp32-starter-kit/hardware-assembly.png",width:"700"}),"\n",(0,n.jsx)(t.h3,{id:"pin-connection",children:"Pin Connection:"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"LCD Pin"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"To ESP32 Pin"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"1. RST"}),(0,n.jsx)(t.td,{children:"Reset"}),(0,n.jsx)(t.td,{children:"P27"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"2. CS"}),(0,n.jsx)(t.td,{children:"Chip Select"}),(0,n.jsx)(t.td,{children:"P5"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"3. D/C"}),(0,n.jsx)(t.td,{children:"Data/Cmd"}),(0,n.jsx)(t.td,{children:"P32"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"4. DIN"}),(0,n.jsx)(t.td,{children:"MOSI Slave"}),(0,n.jsx)(t.td,{children:"P23"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"5. CLK"}),(0,n.jsx)(t.td,{children:"Clock"}),(0,n.jsx)(t.td,{children:"P18"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"6. VCC"}),(0,n.jsx)(t.td,{children:"Power"}),(0,n.jsx)(t.td,{children:"5V"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"7. BL"}),(0,n.jsx)(t.td,{children:"Blacklight"}),(0,n.jsx)(t.td,{children:"5V"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"8. GND"}),(0,n.jsx)(t.td,{children:"Ground (0V)"}),(0,n.jsx)(t.td,{children:"GND"})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"pseudocode",children:"Pseudocode:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"Include Adafruit_GFX and Adafruit_ST7735 libraries for display control\r\nInclude SPI library for communication\r\nDefine pin connections for TFT display\r\nCreate TFT display object with specified control pins\n"})}),"\n",(0,n.jsx)(t.p,{children:"Function setup:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:'Initialize the TFT display with specific configuration\r\nClear the display screen to black\r\nSet text color to white\r\nSet text size to normal\r\nSet cursor position to top-left corner of the display\r\nDisplay "Hello World" on the screen\r\nWait for 5 seconds\n'})}),"\n",(0,n.jsx)(t.p,{children:"Function loop:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"Do nothing (endless loop)\n"})}),"\n",(0,n.jsx)(t.h4,{id:"what-you-should-see",children:"What you should see:"})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>d,x:()=>c});var n=r(96540);const i={},s=n.createContext(i);function d(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);