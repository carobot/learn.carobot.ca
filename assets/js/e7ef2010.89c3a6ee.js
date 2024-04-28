"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1963],{65254:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>d,toc:()=>c});var t=n(74848),s=n(28453);const l={title:"8-Digit SPI 7-Segment LED Display",sidebar_position:1},r="How to use a 8-digit SPI 7-segment LED Display",d={id:"1519-8-digit-7-seg",title:"8-Digit SPI 7-Segment LED Display",description:"The 8-digit SPI 7-segment LED display consists of 8 7SEG LED displays which supports SPI interface for controlling the display data. This display only requires 5 wires to activate 8 digits.",source:"@site/guide/1519-8-digit-7-seg.md",sourceDirName:".",slug:"/1519-8-digit-7-seg",permalink:"/guide/1519-8-digit-7-seg",draft:!1,unlisted:!1,editUrl:"https://github.com/carobot/learn.carobot.ca/tree/main/guide/1519-8-digit-7-seg.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"8-Digit SPI 7-Segment LED Display",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Mini Voltage Meter",permalink:"/guide/mini-voltage-meter"},next:{title:"Micro Servo ",permalink:"/guide/micro-servo"}},o={},c=[{value:"Wiring",id:"wiring",level:2},{value:"Parts",id:"parts",level:2},{value:"Wiring Guide",id:"wiring-guide",level:2},{value:"Programming",id:"programming",level:2},{value:"Full Code",id:"full-code",level:3},{value:"Example",id:"example",level:2},{value:"Full Code",id:"full-code-1",level:3},{value:"Output",id:"output",level:3}];function a(e){const i={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.RP)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h1,{id:"how-to-use-a-8-digit-spi-7-segment-led-display",children:"How to use a 8-digit SPI 7-segment LED Display"}),"\n",(0,t.jsxs)(i.p,{children:["The 8-digit SPI 7-segment LED display consists of 8 7SEG LED displays which supports SPI interface for controlling the display data. This display only requires 5 wires to activate ",(0,t.jsx)(i.strong,{children:"8"})," digits."]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{src:n(90008).A+"",width:"911",height:"399"})}),"\n",(0,t.jsx)(i.h2,{id:"wiring",children:"Wiring"}),"\n",(0,t.jsxs)(i.p,{children:["The 8-digit SPI 7-segment LED display relies on the digital output pins to operate. In this guide, we will be using the ",(0,t.jsx)(i.a,{href:"https://www.canadarobotix.com/products/1519",children:"8-Digit SPI 7-Segment LED Display"})," from our store."]}),"\n",(0,t.jsx)(i.h2,{id:"parts",children:"Parts"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"https://www.canadarobotix.com/products/1519",children:"8-Digit SPI 7-Segment LED Display"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"https://www.canadarobotix.com/collections/cables-wires-and-connectors/products/1162",children:"M/F Jumper wires"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"https://www.canadarobotix.com/products/60",children:"Arduino Uno R3"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"https://www.arduino.cc/en/software",children:"Arduino IDE"})}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"wiring-guide",children:"Wiring Guide"}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"7SEG"}),(0,t.jsx)(i.th,{children:"Arduino"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"VCC"}),(0,t.jsx)(i.td,{children:"5V"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"DIN"}),(0,t.jsx)(i.td,{children:"Pin 7"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"LOAD"}),(0,t.jsx)(i.td,{children:"Pin 5"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"CLK"}),(0,t.jsx)(i.td,{children:"Pin 6"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"GND"}),(0,t.jsx)(i.td,{children:"GND"})]})]})]}),"\n",(0,t.jsx)(i.h2,{id:"programming",children:"Programming"}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Step 1:"})," Before we start coding, we first have to download the needed libraries.\n",(0,t.jsx)(i.img,{src:n(37522).A+"",width:"672",height:"246"})]}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Step 2:"})," Enter ",(0,t.jsx)(i.code,{children:"LedControl"})," and install the first search."]}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Step 3:"})," Declare your libraries"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-c",children:'#include "LedControl.h"\n'})}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Step 4:"})," Create an object using LedControl."]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-c",children:"LedControl lc = LedControl(7,6,5,1);\n"})}),"\n",(0,t.jsx)(i.admonition,{type:"info",children:(0,t.jsx)(i.p,{children:"ledControl(pin connected to DIN, CLK, LOAD, # of chips);"})}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Step 5:"})," Initialize the MAX7219 device."]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-c",children:"lc.shutdown(0,false);  // Enable display (false = turn on, true = turn off)\nlc.setIntensity(0,5);  // Set brightness level (0 is min, 15 is max)\nlc.clearDisplay(0);    // Clear display register\n//you are now done with setting up the 7SEG\n"})}),"\n",(0,t.jsx)(i.h3,{id:"full-code",children:"Full Code"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-c",children:'#include "LedControl.h"\nLedControl lc = LedControl(7,6,5,1);\n\nvoid setup(){\n    lc.shutdown(0,false);\n    lc.setIntensity(0,5);\n    lc.clearDisplay(0);\n}\n'})}),"\n",(0,t.jsx)(i.h2,{id:"example",children:"Example"}),"\n",(0,t.jsxs)(i.p,{children:["Let's write a code that allows the 7SEG to display an ascending number every second, starting with ",(0,t.jsx)(i.strong,{children:"0"})," on the right and ending with a ",(0,t.jsx)(i.strong,{children:"7"})," on the left."]}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Step 1:"})," For this example, we will use the ",(0,t.jsx)(i.strong,{children:"For Loop"}),"."]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-c",children:"void loop(){\n    for(int i = 0; i < 8; i++){\n        lc.setDigit(0, i, i, false);\n        delay(1000);\n    }\n    lc.clearDisplay(0); // clears the entire 8-digit 7-SEG\n    delay(1000); // wait for 1 second before restarting the whole sequence\n}\n"})}),"\n",(0,t.jsx)(i.admonition,{title:"setDigit()",type:"info",children:(0,t.jsx)(i.p,{children:"lc.setDigit(chip, position, number you want, decimal Y/N);"})}),"\n",(0,t.jsx)(i.h3,{id:"full-code-1",children:"Full Code"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-c",children:'#include "LedControl.h"\nLedControl lc = LedControl(7,6,5,1);\n\nvoid setup(){\n    lc.shutdown(0,false);\n    lc.setIntensity(0,5);\n    lc.clearDisplay(0);\n}\n\nvoid loop(){\n    for(int i = 0; i < 8; i++){\n        lc.setDigit(0, i, i, false);\n        delay(1000);\n    }\n    lc.clearDisplay(0);\n    delay(1000);\n}\n'})}),"\n",(0,t.jsx)(i.h3,{id:"output",children:"Output"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{src:n(83463).A+"",width:"640",height:"300"})})]})}function h(e={}){const{wrapper:i}={...(0,s.RP)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},83463:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/1519_01-46658678df3a56ee336c74b48b1e298f.gif"},90008:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/1519_01-4fb85884d045938e9c421469554f327d.png"},37522:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/2631_03-1f29377151a12f09691ddee1cb492f4c.png"},28453:(e,i,n)=>{n.d(i,{RP:()=>l});var t=n(96540);const s=t.createContext({});function l(e){const i=t.useContext(s);return t.useMemo((()=>"function"==typeof e?e(i):{...i,...e}),[i,e])}}}]);