"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6290],{96421:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var s=r(74848),t=r(28453);const i={title:"Infrared Short-Range Proximity Sensor",sidebar_position:4},o="How to use an Infrared Proximity Sensor (Short-Range)",a={id:"short-proxmity-sensor",title:"Infrared Short-Range Proximity Sensor",description:"The sharp distance proximity sensor is a sensor for distance measurements. This sensor is typically used for measuring shorter ranges(approximately 4 cm to 30 cm (1.5\u2033 to 12\u2033)), although it is quite accurate.",source:"@site/guide/1124-short-proxmity-sensor.md",sourceDirName:".",slug:"/short-proxmity-sensor",permalink:"/guide/short-proxmity-sensor",draft:!1,unlisted:!1,editUrl:"https://github.com/carobot/learn.carobot.ca/tree/main/guide/1124-short-proxmity-sensor.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Infrared Short-Range Proximity Sensor",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Infrared Sensor Module with Adjustable Reference",permalink:"/guide/infrared-sensor-module-with-adjustable-reference"},next:{title:"Infrared Medium-Range Proximity Sensor",permalink:"/guide/Medium-Range-Proximity-Sensor"}},d={},c=[{value:"How it works",id:"how-it-works",level:2},{value:"Wiring",id:"wiring",level:2},{value:"Parts",id:"parts",level:2},{value:"Wiring Guide",id:"wiring-guide",level:2},{value:"Programming",id:"programming",level:2},{value:"Full Code",id:"full-code",level:2},{value:"Output",id:"output",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"how-to-use-an-infrared-proximity-sensor-short-range",children:"How to use an Infrared Proximity Sensor (Short-Range)"}),"\n",(0,s.jsx)(n.p,{children:"The sharp distance proximity sensor is a sensor for distance measurements. This sensor is typically used for measuring shorter ranges(approximately 4 cm to 30 cm (1.5\u2033 to 12\u2033)), although it is quite accurate."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:r(93737).A+"",width:"300",height:"300"})}),"\n",(0,s.jsx)(n.h2,{id:"how-it-works",children:"How it works"}),"\n",(0,s.jsx)(n.p,{children:"The component uses a specific light sensor to detect a light wavelength in the Infrared (IR) wave spectrum. The intensity of the light is received when an object is close to the sensor. The light bounces off the object and into the light sensor, which results in a change to the intensity."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.img,{src:r(50099).A+"",width:"300",height:"234"})," ",(0,s.jsx)(n.img,{src:r(34514).A+"",width:"300",height:"142"})," ",(0,s.jsx)(n.img,{src:r(38288).A+"",width:"300",height:"79"})]}),"\n",(0,s.jsx)(n.h2,{id:"wiring",children:"Wiring"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Red Wire"}),": connected to 5V"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Black Wire"}),": connected to ground"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Yellow Wire"}),": connect to an analog pin"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:r(68141).A+"",width:"225",height:"300"})}),"\n",(0,s.jsx)(n.h2,{id:"parts",children:"Parts"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.canadarobotix.com/products/1124",children:"Sharp Infrared Short-Range Proximity Sensor (Analog 4-30cm)"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.canadarobotix.com/products/60",children:"Arduino Uno R3"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.canadarobotix.com/products/223",children:"BreadBoard"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.canadarobotix.com/products/1765",children:"10 k\u2126 resistor"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.canadarobotix.com/products/922",children:"Jumper wires"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.arduino.cc/en/software",children:"Arduino IDE"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"wiring-guide",children:"Wiring Guide"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Connect the Voltage and Ground Wires to the breadboard"}),"\n",(0,s.jsx)(n.li,{children:"Connect the component wire (yellow wire) to an analog pin"}),"\n",(0,s.jsx)(n.li,{children:"Follow the code provided"}),"\n",(0,s.jsx)(n.li,{children:"Under the Tools folder select you board and pick the port you are using to upload the code onto the Arduino"}),"\n",(0,s.jsx)(n.li,{children:"Watch the change in data from the Serial Monitor found under the Tools tab"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:r(17604).A+"",width:"225",height:"300"})}),"\n",(0,s.jsx)(n.h2,{id:"programming",children:"Programming"}),"\n",(0,s.jsx)(n.p,{children:"The following code demonstrates how the short proximity sensor works and measures the distance when the sensor is moved\r\ntowards or away from an object, within the range of 4-30cm. If you want to skip the steps, you can jump to the Full Code."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Step 1:"})," Create variables for the sensors pin and a variable to store the data that is collected"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"int sensor = A0; //sensor pin connection\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Step 2:"})," Set up serial communication, set the ",(0,s.jsx)(n.strong,{children:"sensor"})," pin as an ",(0,s.jsx)(n.strong,{children:"INPUT"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"void setup() {\r\n Serial.begin(9600); // start the serial port\r\n pinMode(sensor, INPUT); //setting the pin to the Arduino\r\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Step 3:"})," Read the data from the ",(0,s.jsx)(n.strong,{children:"sensor"}),", and convert the data into a volts measurement"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"void loop() {\r\n\r\n //5V\r\n float volts = analogRead(sensor)*0.0048828125;  // value from sensor * (5/1024)\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Step 4:"})," Now convert the volts measurement into distance, a measurement we understand.\r\n",(0,s.jsxs)(n.strong,{children:["This calculation is found in the datasheet gragh of the component and can be found ",(0,s.jsx)(n.a,{href:"https://cdn.shopify.com/s/files/1/0015/7571/4865/files/datasheet_GP2Y0A41SK0F.pdf?325",children:"here!"})]})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"int distance = 13*pow(volts, -1); // worked out from datasheet graph\r\n delay(1000); // slow down serial port \n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Step 5:"})," Finally use the distance we calculated and display ONLY when the distance is less than or equal to its max limit."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"if (distance <= 30){\r\n   Serial.println(distance);   // prints the distance\r\n }\r\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"full-code",children:"Full Code"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"int sensor = A0; //sensor pin connection\r\n\r\nvoid setup() {\r\n Serial.begin(9600); // start the serial port\r\n pinMode(sensor, INPUT); //setting the pin to the Arduino\r\n}\r\n\r\nvoid loop() {\r\n\r\n //5V\r\n float volts = analogRead(sensor)*0.0048828125;  // value from sensor * (5/1024)\r\n int distance = 13*pow(volts, -1); // worked out from datasheet graph\r\n delay(1000); // slow down serial port \r\n \r\n if (distance <= 30){\r\n   Serial.println(distance);   // prints the distance\r\n }\r\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"output",children:"Output"}),"\n",(0,s.jsx)(n.p,{children:"Serial Monitor will display distance that is measure from the proximity sensor, only if the distance measure is less than or equal to the max limit which is 30cm for this exact component."})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},93737:(e,n,r)=>{r.d(n,{A:()=>s});const s=r.p+"assets/images/1124(1)-e602a81e342289f15ad3a0d4358ab88b.jpg"},38288:(e,n,r)=>{r.d(n,{A:()=>s});const s=r.p+"assets/images/1124(2)-9bb1ee8e8cb69028fef9c86ac4fc7906.jpg"},50099:(e,n,r)=>{r.d(n,{A:()=>s});const s=r.p+"assets/images/1124(3)-e816aa5ac32763261a35cefa27f123be.jpg"},34514:(e,n,r)=>{r.d(n,{A:()=>s});const s=r.p+"assets/images/1124(4)-08083fd90453c8fe493645ab15599e9a.jpg"},68141:(e,n,r)=>{r.d(n,{A:()=>s});const s=r.p+"assets/images/1124(5)-9c0cb387b51f5aab3e2a51f4c19bc860.jpg"},17604:(e,n,r)=>{r.d(n,{A:()=>s});const s=r.p+"assets/images/1124(6)-aab5a2052036c8ae7d09bf0e27b62dfc.jpg"},28453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>a});var s=r(96540);const t={},i=s.createContext(t);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);