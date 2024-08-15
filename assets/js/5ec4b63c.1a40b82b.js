"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3034],{69787:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var i=t(74848),r=t(28453);const s={title:"Specifications",sidebar_position:2},o=void 0,a={id:"ESP32-Wifi-Tool/Specifications",title:"Specifications",description:"Functional Requirements",source:"@site/Projects/ESP32-Wifi-Tool/Specifications.md",sourceDirName:"ESP32-Wifi-Tool",slug:"/ESP32-Wifi-Tool/Specifications",permalink:"/Projects/ESP32-Wifi-Tool/Specifications",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Specifications",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction to the Wifi Tool",permalink:"/Projects/ESP32-Wifi-Tool/Introduction"},next:{title:"Introduction to the Ethanol Detector",permalink:"/Projects/Ethanol-Detector/Introduction"}},c={},l=[{value:"Functional Requirements",id:"functional-requirements",level:3},{value:"The four main functions of the Wireless Tool includes:",id:"the-four-main-functions-of-the-wireless-tool-includes",level:4},{value:"Performance Requirements",id:"performance-requirements",level:3},{value:"Operational Requirements",id:"operational-requirements",level:3},{value:"Tech Stack",id:"tech-stack",level:3},{value:"Bill of Material",id:"bill-of-material",level:3}];function d(e){const n={a:"a",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h3,{id:"functional-requirements",children:"Functional Requirements"}),"\n",(0,i.jsx)(n.h4,{id:"the-four-main-functions-of-the-wireless-tool-includes",children:"The four main functions of the Wireless Tool includes:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Packet Monitor:\nThe packet monitor enables the reception and surveillance of packets on a selected\nchannel. Utilizing the ESP32's Wi-Fi capabilities, the Packet Monitoring feature\ncaptures and analyzes wireless packets in promiscuous mode, allowing it to observe\nall nearby Wi-Fi traffic. The collected data is then displayed in real-time on the TFT\nLCD screen."}),"\n",(0,i.jsx)(n.li,{children:"Wi-Fi Scanner:\nThe Wi-Fi Scanning function identifies and lists nearby access points. By leveraging\nthe ESP32's scanning capabilities, it retrieves information about SSIDs, signal\nstrengths, channels, and security protocols. This valuable data is then presented to\nthe user for selecting a network."}),"\n",(0,i.jsx)(n.li,{children:"Beacon Spammer:\nThe spammer allows the user to select a desired channel to create and spam fake\nWi-Fi access points. This involves crafting and broadcasting false beacon frames.\nThis feature is intended for educational purposes, helping users understand how\nnetworks announce their presence."}),"\n",(0,i.jsx)(n.li,{children:"Deauthentication Detector:\nImplements de-authentication detection by monitoring the network for deauth\npackets. Scan all channels for any deauthentication attacks and display the number\nof detected packets for each channel. When an attack is detected, trigger the buzzer\nand LED to alert the user."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"performance-requirements",children:"Performance Requirements"}),"\n",(0,i.jsx)(n.p,{children:"The performance requirements for the system are centered around ensuring efficient and\nresponsive operation utilizing the ESP32S development board. The system must support\nreal-time processing and display of data on the TFT screen, ensuring that updates are\nsmooth and without noticeable delay. The ESP32S should handle multiple input signals\nfrom push buttons, ensuring accurate and immediate response to user interactions.\nAdditionally, the system must maintain stable Wi-Fi connectivity for tasks involving network\nmonitoring and packet analysis, leveraging the ESP32S\u2019s dual-core processing capabilities to manage these tasks concurrently without performance degradation. Power consumption\nshould be optimized to support powering from a fixed DC source (discussed in the next\nsection). Overall, the system must balance processing efficiency, low latency in user\ninteractions, and robust network performance to meet the intended functional\nrequirements."}),"\n",(0,i.jsx)(n.h3,{id:"operational-requirements",children:"Operational Requirements"}),"\n",(0,i.jsx)(n.p,{children:"The operational requirements for the system ensure it functions reliably and effectively\nunder various conditions. The ESP32S development board must operate within the\nstandard voltage range, typically 3.3 or 5V, to maintain stability and performance. The\nsystem should be capable of running continuously for extended periods without\noverheating or failure, and this is a software optimization needed to be achieved for the\nhardware level. All push buttons must provide tactile and responsive feedback, with a\ndebounce mechanism implemented to prevent erroneous multiple detections. The\ndebouncer may be designed differently depending on the actual application (breadboard,\nSMD, etc). The TFT screen should deliver clear and legible displays in various lighting\nconditions, with sufficient brightness and contrast levels. The system must support\nfirmware updates to allow for easy maintenance and feature enhancements. Additionally,\nthe Wi-Fi module must reliably connect and stay connected to networks under varying\nsignal strengths, handling packet monitoring and data transmission tasks effectively.\nOverall, the system should be user-friendly, durable, and capable of consistent\nperformance in diverse operational environments."}),"\n",(0,i.jsx)(n.h3,{id:"tech-stack",children:"Tech Stack"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Project tracking tool: Jira"}),"\n",(0,i.jsx)(n.li,{children:"Hardware:"}),"\n",(0,i.jsx)(n.li,{children:"ESP32 development module by NodeMCU or any equivalence"}),"\n",(0,i.jsx)(n.li,{children:"1.8\u201d TFT screen"}),"\n",(0,i.jsx)(n.li,{children:"Push-buttons"}),"\n",(0,i.jsx)(n.li,{children:"Electrolytic capacitors"}),"\n",(0,i.jsx)(n.li,{children:"Jumper wires"}),"\n",(0,i.jsx)(n.li,{children:"RGB LED module"}),"\n",(0,i.jsx)(n.li,{children:"Software:"}),"\n",(0,i.jsx)(n.li,{children:"Arduino IDE"}),"\n",(0,i.jsx)(n.li,{children:"Adafruit libraries listed in the source codes"}),"\n",(0,i.jsx)(n.li,{children:"TFT image converter"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"bill-of-material",children:"Bill of Material"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Description"}),(0,i.jsx)(n.th,{children:"Properties"}),(0,i.jsx)(n.th,{children:"Quantity"}),(0,i.jsx)(n.th,{children:"Image"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"https://www.canadarobotix.com/products/2594",children:"ESP32 Eval Board"})}),(0,i.jsx)(n.td,{children:"3.3V module"}),(0,i.jsx)(n.td,{children:"1"}),(0,i.jsx)(n.td,{children:(0,i.jsx)("img",{src:"/img/docs/Projects/ESP32-Wifi-Tool/ESP-32.webp",width:"300"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"https://www.canadarobotix.com/products/3056",children:"1.8\u201d TFT LCD"})}),(0,i.jsx)(n.td,{children:"Coloured 5V module"}),(0,i.jsx)(n.td,{children:"1"}),(0,i.jsx)(n.td,{children:(0,i.jsx)("img",{src:"/img/docs/Projects/ESP32-Wifi-Tool/1.8-LCD.webp",width:"300"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"https://www.canadarobotix.com/products/160",children:"Bread board"})}),(0,i.jsx)(n.td,{children:"Standard"}),(0,i.jsx)(n.td,{children:"2"}),(0,i.jsx)(n.td,{children:(0,i.jsx)("img",{src:"/img/docs/Projects/ESP32-Wifi-Tool/bread-board.jpg",width:"300"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"https://www.canadarobotix.com/products/2537",children:"RGB LED module"})}),(0,i.jsx)(n.td,{children:"Tri-colour"}),(0,i.jsx)(n.td,{children:"1"}),(0,i.jsx)(n.td,{children:(0,i.jsx)("img",{src:"/img/docs/Projects/ESP32-Wifi-Tool/RGBLED.png",width:"300"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"https://www.canadarobotix.com/products/545",children:"Tactile Push Button"})}),(0,i.jsx)(n.td,{children:"Standard"}),(0,i.jsx)(n.td,{children:"5"}),(0,i.jsx)(n.td,{children:(0,i.jsx)("img",{src:"/img/docs/Projects/ESP32-Wifi-Tool/switchbutton.webp",width:"300"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"https://www.canadarobotix.com/products/922",children:"Wires"})}),(0,i.jsx)(n.td,{children:"Connections wiring"}),(0,i.jsx)(n.td,{children:"Many"}),(0,i.jsx)(n.td,{children:(0,i.jsx)("img",{src:"/img/docs/Projects/ESP32-Wifi-Tool/jumperwires.webp",width:"300"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Capacitor #1"}),(0,i.jsx)(n.td,{children:"3.3uF electrolytic"}),(0,i.jsx)(n.td,{children:"5"}),(0,i.jsx)(n.td,{children:(0,i.jsx)("img",{src:"/img/docs/Projects/ESP32-Wifi-Tool/10uF-capacitor.webp",width:"300"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"https://www.canadarobotix.com/products/960",children:"Capacitor #2"})}),(0,i.jsx)(n.td,{children:"10uF electrolytic"}),(0,i.jsx)(n.td,{children:"2"}),(0,i.jsx)(n.td,{children:(0,i.jsx)("img",{src:"/img/docs/Projects/ESP32-Wifi-Tool/10uF-capacitor.webp",width:"300"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"https://www.canadarobotix.com/products/1488",children:"Micro USB Cable"})}),(0,i.jsx)(n.td,{children:"Micro-USB"}),(0,i.jsx)(n.td,{children:"1"}),(0,i.jsx)(n.td,{children:(0,i.jsx)("img",{src:"/img/docs/Projects/ESP32-Wifi-Tool/micro-usb-cable.webp",width:"300"})})]})]})]}),"\n",(0,i.jsx)(n.p,{children:"The proposed BoM is for constructing a minimal viable product in a timely manner. The\nRGB LED module is essentially an added feature which can act as a signaling device that\nprompts the user for designated events. For example, it is feasible to write an interrupt\nservice routine for making the LED blink at certain event(s). This implementation will be left\nto the readers for further investigation, and please also mind the possibility of needing to\nadd a current-limiting resistor for the LED module."})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var i=t(96540);const r={},s=i.createContext(r);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);