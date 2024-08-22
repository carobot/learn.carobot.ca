"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5304],{20752:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var s=r(74848),t=r(28453);const i={title:"Infrared Long-Range Proximity Sensor",sidebar_position:6},o="How to use an Infrared Proximity Sensor (Long-Range)",a={id:"Long-Range-Proximity-Sensor",title:"Infrared Long-Range Proximity Sensor",description:"The sharp infrared distance proximity sensor is a sensor for distance measurements. This sensor is typically used for measuring larger ranges(approximately 20 cm to 150 cm (8\u2033 to 60\u2033)), although it is quite accurate.",source:"@site/guide/0350-Long-Range-Proximity-Sensor.md",sourceDirName:".",slug:"/Long-Range-Proximity-Sensor",permalink:"/guide/Long-Range-Proximity-Sensor",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Infrared Long-Range Proximity Sensor",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Infrared Medium-Range Proximity Sensor",permalink:"/guide/Medium-Range-Proximity-Sensor"},next:{title:"Infrared Extra-Long-Range Proximity Sensor",permalink:"/guide/Extra-Long-Range-Proximity-Sensor"}},d={},c=[{value:"How it works",id:"how-it-works",level:2},{value:"Wiring",id:"wiring",level:2},{value:"Parts",id:"parts",level:2},{value:"Wiring Guide",id:"wiring-guide",level:2},{value:"Programming",id:"programming",level:2},{value:"Full Code",id:"full-code",level:2},{value:"Output",id:"output",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"how-to-use-an-infrared-proximity-sensor-long-range",children:"How to use an Infrared Proximity Sensor (Long-Range)"}),"\n",(0,s.jsx)(n.p,{children:"The sharp infrared distance proximity sensor is a sensor for distance measurements. This sensor is typically used for measuring larger ranges(approximately 20 cm to 150 cm (8\u2033 to 60\u2033)), although it is quite accurate."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:r(71453).A+"",width:"300",height:"300"})}),"\n",(0,s.jsx)(n.h2,{id:"how-it-works",children:"How it works"}),"\n",(0,s.jsx)(n.p,{children:"The component uses a specific light sensor to detect a light wavelength in the Infrared (IR) wave spectrum. The intensity of the light is received when an object is close to the sensor. The light bounces off the object and into the light sensor, which results in a change to the intensity."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.img,{src:r(98068).A+"",width:"300",height:"142"})," ",(0,s.jsx)(n.img,{src:r(84711).A+"",width:"300",height:"288"})]}),"\n",(0,s.jsx)(n.h2,{id:"wiring",children:"Wiring"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Red Wire"}),": connected to 5V"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Black Wire"}),": connected to ground"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Yellow Wire"}),": connect to an analog pin"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:r(81785).A+"",width:"225",height:"300"})}),"\n",(0,s.jsx)(n.h2,{id:"parts",children:"Parts"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.canadarobotix.com/products/350",children:"Sharp Infrared Long-Range Proximity Sensor (Analog 20-150cm)"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.canadarobotix.com/products/60",children:"Arduino Uno R3"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.canadarobotix.com/products/223",children:"BreadBoard"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.canadarobotix.com/products/1765",children:"10 k\u2126 resistor"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.canadarobotix.com/products/922",children:"Jumper wires"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.arduino.cc/en/software",children:"Arduino IDE"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"wiring-guide",children:"Wiring Guide"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Connect the Voltage and Ground Wires to the breadboard"}),"\n",(0,s.jsx)(n.li,{children:"Connect the component wire (yellow wire) to an analog pin"}),"\n",(0,s.jsx)(n.li,{children:"Follow the code provided"}),"\n",(0,s.jsx)(n.li,{children:"Under the Tools folder select you board and pick the port you are using to upload the code onto the Arduino"}),"\n",(0,s.jsx)(n.li,{children:"Watch the change in data from the Serial Monitor found under the Tools tab"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:r(47486).A+"",width:"225",height:"300"})}),"\n",(0,s.jsx)(n.h2,{id:"programming",children:"Programming"}),"\n",(0,s.jsx)(n.p,{children:"The following code demonstrates how the short proximity sensor works and measures the distance when the sensor is moved\r\ntowards or away from an object, within the range of 20-150cm. If you want to skip the steps, you can jump to the Full Code."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Step 1:"})," Create variables for the sensors pin and a variable to store the data that is collected"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"int sensor = A0; //sensor pin connection\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Step 2:"})," Set up serial communication, set the ",(0,s.jsx)(n.strong,{children:"sensor"})," pin as an ",(0,s.jsx)(n.strong,{children:"INPUT"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"void setup() {\r\n Serial.begin(9600); // start the serial port\r\n pinMode(sensor, INPUT); //setting the pin to the Arduino\r\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Step 3:"})," Read the data from the ",(0,s.jsx)(n.strong,{children:"sensor"}),", and convert the data into a volts measurement"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"void loop() {\r\n\r\n //5V\r\n float volts = analogRead(sensor)*0.0048828125;  // value from sensor * (5/1024)\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Step 4:"})," Now convert the volts measurement into distance, a measurement we understand.\r\n",(0,s.jsxs)(n.strong,{children:["This calculation is found in the datasheet gragh of the component and can be found ",(0,s.jsx)(n.a,{href:"https://cdn.shopify.com/s/files/1/0015/7571/4865/files/datasheet_gp2y0a02yk_e.pdf?292",children:"here!"})]})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"int distance = 13*pow(volts, -1); // worked out from datasheet graph\r\n delay(1000); // slow down serial port \n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Step 5:"})," Finally use the distance we calculated and display ONLY when the distance is less than or equal to its max limit."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"if (distance >= 20 && distance <= 150){\r\n   Serial.println(distance);   // prints the distance\r\n }\r\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"full-code",children:"Full Code"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"int sensor = A0; //sensor pin connection\r\n\r\nvoid setup() {\r\n Serial.begin(9600); //start the serial port\r\n pinMode(sensor, INPUT); //setting the pin to the Arduino\r\n}\r\n\r\nvoid loop() {\r\n\r\n //5V\r\n float volts = analogRead(sensor)*0.0048828125;  // value from sensor * (5/1024)\r\n int distance = 13*pow(volts, -1); // worked out from datasheet graph\r\n delay(1000); // slow down serial port \r\n \r\n if (distance >= 20 && distance <= 150){\r\n   Serial.println(distance);   // prints the distance\r\n }\r\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"output",children:"Output"}),"\n",(0,s.jsx)(n.p,{children:"Serial Monitor will display distance that is measure from the proximity sensor, only if the distance measure is greater than or equal to 20 and less than or equal to the max limit which is 150cm for this exact component."})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},71453:(e,n,r)=>{r.d(n,{A:()=>s});const s=r.p+"assets/images/0350(1)-8c0a3b75d0415adbaebfb114bda8a637.jpg"},98068:(e,n,r)=>{r.d(n,{A:()=>s});const s=r.p+"assets/images/0350(2)-44ffec6853c8aa71cc2849948a8d7572.jpg"},84711:(e,n,r)=>{r.d(n,{A:()=>s});const s=r.p+"assets/images/0350(3)-f9f4810ca8d35c298a2417aca19a07d6.jpg"},47486:(e,n,r)=>{r.d(n,{A:()=>s});const s=r.p+"assets/images/0350(4)-f9a71bb4b4472484da0cdf72e6cb98d3.jpg"},81785:(e,n,r)=>{r.d(n,{A:()=>s});const s=r.p+"assets/images/0350(5)-e6f6133f53dd5d69be7081e5953eccc7.jpg"},28453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>a});var s=r(96540);const t={},i=s.createContext(t);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);