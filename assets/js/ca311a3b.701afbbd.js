"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3686],{61668:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>a});var t=r(74848),i=r(28453);const s={title:"Raindrops Detection Sensor Module",sidebar_position:1},d="How to use The Raindrops Detetion Sensor Module",o={id:"raindrops-sensor",title:"Raindrops Detection Sensor Module",description:"The raindrops detection sensor module is a sensor that detects water drops with a voltage limit from 3.3V-5V. In this guide, we will be using the Raindrops Detection Sensor Module from our store.",source:"@site/guide/2758-raindrops-sensor.md",sourceDirName:".",slug:"/raindrops-sensor",permalink:"/guide/raindrops-sensor",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Raindrops Detection Sensor Module",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Rotary Encoder Module",permalink:"/guide/rotary-encoder-module"},next:{title:"Super Current Wireless Charging Module",permalink:"/guide/wireless-charging-module"}},l={},a=[{value:"Part",id:"part",level:2},{value:"Wiring Guide",id:"wiring-guide",level:2},{value:"Programming",id:"programming",level:2},{value:"Full Code",id:"full-code",level:3},{value:"Output",id:"output",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"how-to-use-the-raindrops-detetion-sensor-module",children:"How to use The Raindrops Detetion Sensor Module"}),"\n",(0,t.jsxs)(n.p,{children:["The raindrops detection sensor module is a sensor that detects water drops with a voltage limit from 3.3V-5V. In this guide, we will be using the ",(0,t.jsx)(n.a,{href:"https://www.canadarobotix.com/products/2758",children:"Raindrops Detection Sensor Module"})," from our store."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:r(12067).A+"",width:"400",height:"397"})}),"\n",(0,t.jsx)(n.h2,{id:"part",children:"Part"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.canadarobotix.com/products/2758",children:"Raindrops Detection Sensor Module"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.canadarobotix.com/products/2031",children:"M/M Jumper wires"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.canadarobotix.com/products/60",children:"Arduino Uno R3"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.arduino.cc/en/software",children:"Arduino IDE"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"wiring-guide",children:"Wiring Guide"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Step 1:"})," First of all, connect the sensor module to the sensor"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:r(75208).A+"",width:"400",height:"275"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Step 2:"})," Connect the sensor pins with the Arduino"]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Sensor"}),(0,t.jsx)(n.th,{children:"Arduino"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"VCC"}),(0,t.jsx)(n.td,{children:"5V"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"GND"}),(0,t.jsx)(n.td,{children:"GND"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"A0"}),(0,t.jsx)(n.td,{children:"A0"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"programming",children:"Programming"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Step 1:"})," Define your pins and values"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:"#define rainfall A0\r\nint value;\r\nint set = 10; //set value to compare to value\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Step 2:"})," Start the serial monitor and activate the pin"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:"void setup(){\r\n  Serial.begin(9600);\r\n  pinMode(rainfall,INPUT);\r\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Step 3:"})," In loop(), read the value of the sensor and map it out for a new value to compare to set"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:"value = analogRead(rainfall);\r\nvalue = map(value,0,1023,225,0);\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Step 4:"})," Add a ",(0,t.jsx)(n.code,{children:"if/else"})," statement to tell what the serial monitor should print when water is detected"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:'if(value >= set){\r\n  Serial.println("rain detected");\r\n}else{\r\n  Serial.println("no rain detected");\r\n}\r\ndelay(200);\n'})}),"\n",(0,t.jsx)(n.h3,{id:"full-code",children:"Full Code"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:'#define rainfall A0\r\nint value;\r\nint set = 10;\r\n\r\nvoid setup(){\r\n  Serial.begin(9600);\r\n  pinMode(rainfall,INPUT);\r\n}\r\n\r\nvoid loop(){\r\n value = analogRead(rainfall);\r\n value = map(value,0,1023,225,0);\r\n \r\n if(value >= set){\r\n  Serial.println("rain detected");\r\n }else{\r\n  Serial.println("no rain detected");\r\n }\r\n \r\n delay(200);\r\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"output",children:"Output"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Wiring"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:r(42096).A+"",width:"640",height:"536"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Serial Monitor"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:r(93111).A+"",width:"408",height:"640"})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},42096:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/2758_01-d2091c57bf91c09fab5d3d704ae4bd38.gif"},12067:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/2758_01-9f71af5c54d5dae3c3423bb6ebe7b4ad.png"},93111:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/2758_02-3775aa96ac407ee934208087fd49aed4.gif"},75208:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/2758_02-c03435e4bc5b1acf3f6f624c76f6fe0b.png"},28453:(e,n,r)=>{r.d(n,{R:()=>d,x:()=>o});var t=r(96540);const i={},s=t.createContext(i);function d(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);