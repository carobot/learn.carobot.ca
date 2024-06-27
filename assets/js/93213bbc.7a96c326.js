"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7646],{81517:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>d,toc:()=>h});var r=i(74848),t=i(28453);const o={title:"Piezo Vibration Sensor",sidebar_position:1},s="How to use a Piezo Vibration Sensor",d={id:"Piezo-Vibration-Sensor-Small-Horizontal",title:"Piezo Vibration Sensor",description:"The Piezo Vibration Sensor (Small Horizontal) is a flexible component which reads the vibrations based on whether the component is touched or not.",source:"@site/guide/1012-Piezo-Vibration-Sensor-Small-Horizontal.md",sourceDirName:".",slug:"/Piezo-Vibration-Sensor-Small-Horizontal",permalink:"/guide/Piezo-Vibration-Sensor-Small-Horizontal",draft:!1,unlisted:!1,editUrl:"https://github.com/carobot/learn.carobot.ca/tree/main/guide/1012-Piezo-Vibration-Sensor-Small-Horizontal.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Piezo Vibration Sensor",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"HC-SR501 PIR Motion Sensor",permalink:"/guide/HC-SR501-and-ESP-WROOM-32"},next:{title:"HC-SR04 Ultrasonic Sensor",permalink:"/guide/ultrasonic-ranging-sensor"}},a={},h=[{value:"How it works",id:"how-it-works",level:2},{value:"Wiring",id:"wiring",level:2},{value:"Parts",id:"parts",level:2},{value:"Wiring Guide",id:"wiring-guide",level:2},{value:"Programming",id:"programming",level:2},{value:"Full Code",id:"full-code",level:2},{value:"Output",id:"output",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"how-to-use-a-piezo-vibration-sensor",children:"How to use a Piezo Vibration Sensor"}),"\n",(0,r.jsx)(n.p,{children:"The Piezo Vibration Sensor (Small Horizontal) is a flexible component which reads the vibrations based on whether the component is touched or not."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:i(89211).A+"",width:"300",height:"300"})}),"\n",(0,r.jsx)(n.h2,{id:"how-it-works",children:"How it works"}),"\n",(0,r.jsx)(n.p,{children:"This component does not require any connection to voltage or any power source. Instead the sensor uses a certain material to measure the voltage across the piezo when a mechanical stress is applied. The pressure applied to the sensor causes the component to send a signal to the Arduino which is then converted into voltage."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.img,{src:i(61558).A+"",width:"300",height:"249"})," ",(0,r.jsx)(n.img,{src:i(93073).A+"",width:"300",height:"180"})]}),"\n",(0,r.jsx)(n.h2,{id:"wiring",children:"Wiring"}),"\n",(0,r.jsx)(n.p,{children:"The sensor is not polarized meaning you can wire the component however you like."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Pin 1: Connected to A0 on the Arduino"}),"\n",(0,r.jsx)(n.li,{children:"Pin 2: Connected to A1 on the Arduino"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:i(66124).A+"",width:"300",height:"289"})}),"\n",(0,r.jsx)(n.h2,{id:"parts",children:"Parts"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://www.canadarobotix.com/products/1012",children:"Piezo Vibration Sensor (Small Horizontal)"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://www.canadarobotix.com/products/60",children:"Arduino Uno R3"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://www.canadarobotix.com/products/223",children:"BreadBoard"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://www.canadarobotix.com/products/1956",children:"Diffused 10mm LED (Blue)"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://www.canadarobotix.com/products/1770",children:"10 k\u2126 resistor"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://www.canadarobotix.com/products/922",children:"Jumper wires"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://www.arduino.cc/en/software",children:"Arduino IDE"})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"wiring-guide",children:"Wiring Guide"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Connect one of the sensors pins to the analog pin A0 and the other to A1"}),"\n",(0,r.jsx)(n.li,{children:"Connect the positive led of the LED to the resistor, and then the resistor to pin 13 on the Arduino and connect the           negative led pin to ground"}),"\n",(0,r.jsx)(n.li,{children:"Follow the provided code and watch the LED light up when the sensor is NOT touched and turn off when the sensor is touched"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:i(29759).A+"",width:"225",height:"300"})}),"\n",(0,r.jsx)(n.h2,{id:"programming",children:"Programming"}),"\n",(0,r.jsx)(n.p,{children:"The following code demonstrates how the Piezo vibration sensor works and how to work the sensor in relation to an LED."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Step 1:"})," Create variables for the sensors pin, the led pin, and the threshold."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:"int GroundPin= A0;\r\nint sensorPin= A1;\r\nint LEDPin= 13;\r\n\r\n//defines normal and threshold voltage levels\r\nint threshold= 500;\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Step 2:"})," Set up serial communication, set the ",(0,r.jsx)(n.strong,{children:"GroundPin"})," and the ",(0,r.jsx)(n.strong,{children:"LEDpin"})," pin as an ",(0,r.jsx)(n.strong,{children:"OUTPUT"}),", and set the ",(0,r.jsx)(n.strong,{children:"GroundPin"})," as ",(0,r.jsx)(n.strong,{children:"LOW"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:"void setup(){\r\n  Serial.begin(9600);\r\n  pinMode(GroundPin, OUTPUT);\r\n  digitalWrite(GroundPin, LOW);\r\n  pinMode(LEDPin, OUTPUT);\r\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Step 3:"})," Read the data from the ",(0,r.jsx)(n.strong,{children:"sensorPin"})," and print it out to the serial monitor. Now in order to have the LED change from High to low voltage we much check when the reading is greated than the threshold. When this is true we can set the LED to ",(0,r.jsx)(n.strong,{children:"HIGH"})," for a delay of 1 second and then turn the LED back to ",(0,r.jsx)(n.strong,{children:"LOW"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:"void loop(){\r\n  int reading= analogRead(sensorPin);\r\n  Serial.println(reading);\r\n  if (reading > threshold) {\r\n    digitalWrite(LEDPin, HIGH);\r\n    delay(1000);\r\n    digitalWrite(LEDPin, LOW);\r\n  }\r\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"full-code",children:"Full Code"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:"int GroundPin= A0;\r\nint sensorPin= A1;\r\nint LEDPin= 13;\r\n\r\n//defines normal and threshold voltage levels\r\nint threshold= 500;\r\n\r\n//sets GroundPin and LEDPin as output pins, with GroundPin being set to LOW\r\nvoid setup(){\r\n  Serial.begin(9600);\r\n  pinMode(GroundPin, OUTPUT);\r\n  digitalWrite(GroundPin, LOW);\r\n  pinMode(LEDPin, OUTPUT);\r\n}\r\n\r\n//if the reading is higher than the threshold value, then the LED is turned on\r\nvoid loop(){\r\n  int reading= analogRead(sensorPin);\r\n  Serial.println(reading);\r\n  if (reading > threshold) {\r\n    digitalWrite(LEDPin, HIGH);\r\n    delay(1000);\r\n    digitalWrite(LEDPin, LOW);\r\n  }\r\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"output",children:"Output"}),"\n",(0,r.jsx)(n.p,{children:"The following code will result with the the LED being turned on when the sensor is not touched and turned off when the sensor is touched."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.img,{src:i(89786).A+"",width:"246",height:"300"})," ",(0,r.jsx)(n.img,{src:i(3797).A+"",width:"238",height:"300"})]})]})}function c(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},89211:(e,n,i)=>{i.d(n,{A:()=>r});const r=i.p+"assets/images/1012(1)-e3b42f4ad5c07575a00dc09f3a0c2a45.jpg"},61558:(e,n,i)=>{i.d(n,{A:()=>r});const r=i.p+"assets/images/1012(2)-30972492915505628c60bfa0e92d6f9d.jpg"},93073:(e,n,i)=>{i.d(n,{A:()=>r});const r=i.p+"assets/images/1012(3)-c2e7822e72038bd3b99cdaa078dd09a8.jpg"},66124:(e,n,i)=>{i.d(n,{A:()=>r});const r=i.p+"assets/images/1012(4)-ce8c54d56a1697bf68fdae1a2340cb1b.jpg"},29759:(e,n,i)=>{i.d(n,{A:()=>r});const r=i.p+"assets/images/1012(5)-139edf1f7e0977d836e719dabc460e4b.jpg"},89786:(e,n,i)=>{i.d(n,{A:()=>r});const r=i.p+"assets/images/1012(6)-6829441b43b606412f185ad3a4d36d16.jpg"},3797:(e,n,i)=>{i.d(n,{A:()=>r});const r=i.p+"assets/images/1012(7)-5a42f8e0913ded9dae28d081c1dfc9ce.jpg"},28453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>d});var r=i(96540);const t={},o=r.createContext(t);function s(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);