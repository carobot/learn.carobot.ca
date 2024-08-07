"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4643],{88701:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>d,toc:()=>a});var r=s(74848),i=s(28453);const t={title:"Sound Sensor Module",sidebar_position:1},o="How to use The Sound Sensor Module",d={id:"sound-sensor",title:"Sound Sensor Module",description:"The sound sensor module utilizes a microphone to sense any sounds. In this guide, we will be using the Sound Sensor Module from our shop.",source:"@site/guide/2105-sound-sensor.md",sourceDirName:".",slug:"/sound-sensor",permalink:"/guide/sound-sensor",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Sound Sensor Module",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Basic 16x2 Character LCD",permalink:"/guide/2074-16x2-LCD"},next:{title:"Mini PIR Sensor Module",permalink:"/guide/mini-pir-sensor"}},l={},a=[{value:"Parts",id:"parts",level:2},{value:"Wiring Guide",id:"wiring-guide",level:2},{value:"Programming",id:"programming",level:2},{value:"Full Code",id:"full-code",level:3},{value:"Output",id:"output",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"how-to-use-the-sound-sensor-module",children:"How to use The Sound Sensor Module"}),"\n",(0,r.jsxs)(n.p,{children:["The sound sensor module utilizes a microphone to sense any sounds. In this guide, we will be using the ",(0,r.jsx)(n.a,{href:"https://www.canadarobotix.com/products/2105",children:"Sound Sensor Module"})," from our shop."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:s(27051).A+"",width:"377",height:"400"})}),"\n",(0,r.jsx)(n.h2,{id:"parts",children:"Parts"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://www.canadarobotix.com/products/2105",children:"Sound Sensor Module"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://www.canadarobotix.com/products/2031",children:"M/M Jumper wires"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://www.canadarobotix.com/products/60",children:"Arduino Uno R3"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://www.arduino.cc/en/software",children:"Arduino IDE"})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"wiring-guide",children:"Wiring Guide"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Step 1:"})," Connect the sensor pins to the Arduino"]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Sensor"}),(0,r.jsx)(n.th,{children:"Arduino"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"G"}),(0,r.jsx)(n.td,{children:"GND"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"+"}),(0,r.jsx)(n.td,{children:"5V"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"D0"}),(0,r.jsx)(n.td,{children:"Pin 3"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"programming",children:"Programming"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Step 1:"})," Declare the pin connected to the sensor as well as a boolean value"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:"int sensorPin = 3;\r\nboolean val = 0;\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Step 2:"})," Activate the pin connected to the sensor as well as activating the serial monitor"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:"void setup(){\r\n  pinMode(sensorPin, INPUT);\r\n  Serial.begin(9600);\r\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Step 3:"})," Read the sensor pin and put the value into ",(0,r.jsx)(n.code,{children:"val"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:"val = digitalRead(sensorPin);\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Step 4:"})," Create an ",(0,r.jsx)(n.code,{children:"if/else"})," statement for when the sensor hears sound"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:'if (val == HIGH) {\r\n  Serial.println("ON");\r\n}else{\r\n  Serial.println("OFF");\r\n}\r\ndelay(1000);\n'})}),"\n",(0,r.jsx)(n.h3,{id:"full-code",children:"Full Code"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:'int sensorPin = 3;\r\nboolean val = 0;\r\n\r\nvoid setup(){\r\n  pinMode(sensorPin, INPUT);\r\n  Serial.begin (9600);\r\n}\r\n  \r\nvoid loop (){\r\n  val = digitalRead(sensorPin);\r\n  if (val == HIGH){\r\n    Serial.println("ON");\r\n  }\r\n  else{\r\n    Serial.println("OFF");\r\n  }\r\n  delay(1000);\r\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"output",children:"Output"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Serial Monitor"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:s(13232).A+"",width:"45",height:"321"})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},27051:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/2105_01-2e363b41bc6b756a77520a08dde69439.png"},13232:(e,n,s)=>{s.d(n,{A:()=>r});const r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAFBCAMAAADUhdY9AAAAAXNSR0IB2cksfwAAAAlwSFlzAAASdAAAEnQB3mYfeAAAAFpQTFRF////2raOZjkAAAAAOWaO2v//tmYAAABmtv//jjkAADmO/7ZmAAA5jrba///atmY5AGa2ZgA5jtr/Zrb/Zra2/9qOOTmO2o45OY7aOQA5jo5mOWa2ZgAAjjk5swafGQAAASFJREFUeJztmW1vgjAURq+rsNk5xmRO9+L//5ujgKCp4dkSYtPknIRwSR5ob9PDl5rB3Vk9OLcurHSPT7Zxzs+Gn7cvVr36EK/bp3o2XL3twq1srHxvS5Hef/Qj1O0LB1/8I11tjn+fSWP7z6/59EWXjdnBiXS3gt9hSZwvqh+VBlgeLI7AYsgMLI7AYsgMLI7AYsgMLI7AYsiMweKwCQP1VNxg3N/dBu/EHIuIyZ1wnXZDui8iJi/DDLb9q+diNh0+OQx0up2+nknPWMguRfpscbdwfpi2+BsCLAoWqy5FGoshOVisuhRpLIbkYLHqUqSxGJKDxapLkcZiSA4Wqy5FGoshOVisuhRpLIbkcF4cwXkxZAYWR2AxZAYWR2AxLMsv41xGluxJYgcAAAAASUVORK5CYII="},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>d});var r=s(96540);const i={},t=r.createContext(i);function o(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);