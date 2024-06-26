"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9191],{72612:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>a,contentTitle:()=>d,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var i=n(74848),r=n(28453);const s={sidebar_position:3},d="Making Sounds",o={id:"UNO-R4-Starter-Kit/Making-Sounds",title:"Making Sounds",description:"Learning how to use a simple buzzer!",source:"@site/docs/UNO-R4-Starter-Kit/Making-Sounds.md",sourceDirName:"UNO-R4-Starter-Kit",slug:"/UNO-R4-Starter-Kit/Making-Sounds",permalink:"/UNO-R4-Starter-Kit/Making-Sounds",draft:!1,unlisted:!1,editUrl:"https://github.com/carobot/learn.carobot.ca/tree/main/docs/UNO-R4-Starter-Kit/Making-Sounds.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Digital Input",permalink:"/UNO-R4-Starter-Kit/Digital-Input"},next:{title:"Passive Buzzer",permalink:"/UNO-R4-Starter-Kit/Passive-Buzzer"}},a={},l=[{value:"Materials",id:"materials",level:2},{value:"Instructions",id:"instructions",level:2}];function c(t){const e={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...t.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"making-sounds",children:"Making Sounds"}),"\n",(0,i.jsx)(e.p,{children:"Learning how to use a simple buzzer!"}),"\n",(0,i.jsx)(e.h2,{id:"materials",children:"Materials"}),"\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"Component"}),(0,i.jsx)(e.th,{children:"Image"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"Breadboard"}),(0,i.jsx)(e.td,{children:(0,i.jsx)("img",{src:"/img/docs/UNO-R4-Starter-Kit/breadboard.webp",width:"200",height:"150"})})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"Jumper wires"}),(0,i.jsx)(e.td,{children:(0,i.jsx)("img",{src:"/img/docs/UNO-R4-Starter-Kit/jumper-wires.webp",width:"200",height:"150"})})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"Arduino Uno R4 Minima"}),(0,i.jsx)(e.td,{children:(0,i.jsx)("img",{src:"/img/docs/UNO-R4-Starter-Kit/arduino-r4-minima.webp",width:"190",height:"150"})})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"Buzzer"}),(0,i.jsx)(e.td,{children:(0,i.jsx)("img",{src:"/img/docs/UNO-R4-Starter-Kit/Making-Sounds/buzzer.webp",width:"150",height:"150"})})]})]})]}),"\n",(0,i.jsx)(e.h2,{id:"instructions",children:"Instructions"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"Place the buzzer in the middle of the breadboard."}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"Connect the negative terminal to the ground and the postive terminal to pin 12."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)("img",{src:"/img/docs/UNO-R4-Starter-Kit/Making-Sounds/wiring-diagram.png",width:"250",height:"300"}),"\n",(0,i.jsxs)(e.ol,{start:"3",children:["\n",(0,i.jsx)(e.li,{children:"Paste the following code into your Arduino IDE:"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-cpp",children:"int buzzer = 12; // the pin of the active buzzer\r\n\r\nvoid setup() {\r\n  pinMode(buzzer, OUTPUT); // initialize the buzzer pin as an output\r\n}\r\n\r\nvoid loop() {\r\n  int sound_duration = 500;\r\n  for (int i = 0; i < 20; i++) {\r\n    // use the if function to gradually shorten the interval of the sound\r\n    if (i < 5) {\r\n      sound_duration = 500;\r\n    } else if (i < 10) {\r\n      sound_duration = 300;\r\n    } else if (i < 20) {\r\n      sound_duration = 100;\r\n    }\r\n    // activate the active buzzer\r\n    digitalWrite(buzzer, HIGH);\r\n    delay(sound_duration); // wait for sound_duration ms\r\n    // deactivate the active buzzer\r\n    digitalWrite(buzzer, LOW);\r\n    delay(sound_duration); // wait for sound_duration ms\r\n  }\r\n  // activate the active buzzer\r\n  digitalWrite(buzzer, HIGH);\r\n  delay(5000); // keep playing sound for 5 seconds\r\n}\n"})}),"\n",(0,i.jsxs)(e.ol,{start:"4",children:["\n",(0,i.jsx)(e.li,{children:"Upload the code and watch the buzzer sound!"}),"\n"]})]})}function u(t={}){const{wrapper:e}={...(0,r.R)(),...t.components};return e?(0,i.jsx)(e,{...t,children:(0,i.jsx)(c,{...t})}):c(t)}},28453:(t,e,n)=>{n.d(e,{R:()=>d,x:()=>o});var i=n(96540);const r={},s=i.createContext(r);function d(t){const e=i.useContext(s);return i.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function o(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(r):t.components||r:d(t.components),i.createElement(s.Provider,{value:e},t.children)}}}]);