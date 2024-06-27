"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5795],{96323:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>a,contentTitle:()=>d,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=i(74848),t=i(28453);const o={sidebar_position:26},d="DC Motor and Relay",l={id:"UNO-R4-Starter-Kit/DC-Motor",title:"DC Motor and Relay",description:"In this tutorial, we'll guide you through the process of controlling a DC motor using an Arduino R4 Minima and an L293D motor driver chip. DC motors are widely used in robotics and various electronic projects due to their simplicity and reliability. With the help of the L293D, a versatile H-bridge motor driver, you can easily control the direction and speed of the motor using an Arduino.",source:"@site/docs/UNO-R4-Starter-Kit/DC-Motor.md",sourceDirName:"UNO-R4-Starter-Kit",slug:"/UNO-R4-Starter-Kit/DC-Motor",permalink:"/learn.carobot.ca/UNO-R4-Starter-Kit/DC-Motor",draft:!1,unlisted:!1,editUrl:"https://github.com/carobot/learn.carobot.ca/tree/main/docs/UNO-R4-Starter-Kit/DC-Motor.md",tags:[],version:"current",sidebarPosition:26,frontMatter:{sidebar_position:26},sidebar:"tutorialSidebar",previous:{title:"Shift Registers and 4 Digit Display",permalink:"/learn.carobot.ca/UNO-R4-Starter-Kit/Shift-Registers-and-4-Digit-Display"},next:{title:"Stepper Motor",permalink:"/learn.carobot.ca/UNO-R4-Starter-Kit/Stepper-Motor"}},a={},s=[{value:"Materials",id:"materials",level:2},{value:"Instructions",id:"instructions",level:2},{value:"L293D Pin Configuration",id:"l293d-pin-configuration",level:4},{value:"Arduino to L293D:",id:"arduino-to-l293d",level:4},{value:"Motor Connections:",id:"motor-connections",level:4},{value:"Do not change any wiring for the next steps.",id:"do-not-change-any-wiring-for-the-next-steps",level:4}];function c(n){const e={code:"code",h1:"h1",h2:"h2",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"dc-motor-and-relay",children:"DC Motor and Relay"}),"\n",(0,r.jsx)(e.p,{children:"In this tutorial, we'll guide you through the process of controlling a DC motor using an Arduino R4 Minima and an L293D motor driver chip. DC motors are widely used in robotics and various electronic projects due to their simplicity and reliability. With the help of the L293D, a versatile H-bridge motor driver, you can easily control the direction and speed of the motor using an Arduino."}),"\n",(0,r.jsx)(e.h2,{id:"materials",children:"Materials"}),"\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"Component"}),(0,r.jsx)(e.th,{children:"Image"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Breadboard"}),(0,r.jsx)(e.td,{children:(0,r.jsx)("img",{src:"/img/docs/UNO-R4-Starter-Kit/breadboard.webp",width:"200",height:"150"})})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Jumper wires"}),(0,r.jsx)(e.td,{children:(0,r.jsx)("img",{src:"/img/docs/UNO-R4-Starter-Kit/jumper-wires.webp",width:"200",height:"150"})})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Arduino Uno R4 Minima"}),(0,r.jsx)(e.td,{children:(0,r.jsx)("img",{src:"/img/docs/UNO-R4-Starter-Kit/arduino-r4-minima.webp",width:"190",height:"150"})})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"3-6V Motor with Fan Blade"}),(0,r.jsx)(e.td,{children:(0,r.jsx)("img",{src:"/img/docs/UNO-R4-Starter-Kit/DC-Motor.jpg",width:"200",height:"200"})})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"L293D Motor Driver"}),(0,r.jsx)(e.td,{children:(0,r.jsx)("img",{src:"/img/docs/UNO-R4-Starter-Kit/L293.jpg",width:"200",height:"200"})})]})]})]}),"\n",(0,r.jsx)(e.h2,{id:"instructions",children:"Instructions"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsx)(e.li,{children:"Make the following connections using the breadboard and jumper wires."}),"\n"]}),"\n",(0,r.jsx)(e.h4,{id:"l293d-pin-configuration",children:"L293D Pin Configuration"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Vcc1 (Pin 16): Connect to 5V from the Arduino."}),"\n",(0,r.jsx)(e.li,{children:"Vcc2 (Pin 8): Connect to 5V from the Arduino."}),"\n",(0,r.jsx)(e.li,{children:"ENABLE1 (Pin 1): Connect to the Arduino pin defined as ENABLE (Pin 5 in the code)."}),"\n",(0,r.jsx)(e.li,{children:"INPUT1 (Pin 2): Connect to the Arduino pin defined as DIRA (Pin 3 in the code)."}),"\n",(0,r.jsx)(e.li,{children:"INPUT2 (Pin 7): Connect to the Arduino pin defined as DIRB (Pin 4 in the code)."}),"\n",(0,r.jsx)(e.li,{children:"EN 2 (Pin 9): Connect to 5V from the Arduino."}),"\n"]}),"\n",(0,r.jsx)(e.h4,{id:"arduino-to-l293d",children:"Arduino to L293D:"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"GND: Connect to L293D Pins 4, 5, 12, and 13 (GND)."}),"\n"]}),"\n",(0,r.jsx)(e.h4,{id:"motor-connections",children:"Motor Connections:"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Connect one terminal of the motor to L293D Pin 3 (OUTPUT1)."}),"\n",(0,r.jsx)(e.li,{children:"Connect the other terminal of the motor to Pin 6 (OUTPUT2)"}),"\n"]}),"\n",(0,r.jsx)("img",{src:"/img/docs/UNO-R4-Starter-Kit/DC-Motor.png",width:"600",height:"270"}),"\n",(0,r.jsxs)(e.ol,{start:"2",children:["\n",(0,r.jsx)(e.li,{children:"Paste the following code into your main Arduino sketch:"}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-cpp",children:'#define ENABLE 5\r\n#define DIRA 3\r\n#define DIRB 4\r\n\r\nint i;\r\n \r\nvoid setup() {\r\n  //---set pin direction\r\n  pinMode(ENABLE,OUTPUT);\r\n  pinMode(DIRA,OUTPUT);\r\n  pinMode(DIRB,OUTPUT);\r\n  Serial.begin(9600);\r\n}\r\n\r\nvoid loop() {\r\n  //---back and forth example\r\n    Serial.println("One way, then reverse");\r\n    digitalWrite(ENABLE,HIGH); // enable on\r\n    for (i=0;i<5;i++) {\r\n    digitalWrite(DIRA,HIGH); //one way\r\n    digitalWrite(DIRB,LOW);\r\n    delay(500);\r\n    digitalWrite(DIRA,LOW);  //reverse\r\n    digitalWrite(DIRB,HIGH);\r\n    delay(500);\r\n  }\r\n  digitalWrite(ENABLE,LOW); // disable\r\n  delay(2000);\r\n\r\n  Serial.println("fast Slow example");\r\n  //---fast/slow stop example\r\n  digitalWrite(ENABLE,HIGH); //enable on\r\n  digitalWrite(DIRA,HIGH); //one way\r\n  digitalWrite(DIRB,LOW);\r\n  delay(3000);\r\n  digitalWrite(ENABLE,LOW); //slow stop\r\n  delay(1000);\r\n  digitalWrite(ENABLE,HIGH); //enable on\r\n  digitalWrite(DIRA,LOW); //one way\r\n  digitalWrite(DIRB,HIGH);\r\n  delay(3000);\r\n  digitalWrite(DIRA,LOW); //fast stop\r\n  delay(2000);\r\n\r\n  Serial.println("PWM full then slow");\r\n  //---PWM example, full speed then slow\r\n  analogWrite(ENABLE,255); //enable on\r\n  digitalWrite(DIRA,HIGH); //one way\r\n  digitalWrite(DIRB,LOW);\r\n  delay(2000);\r\n  analogWrite(ENABLE,180); //half speed\r\n  delay(2000);\r\n  analogWrite(ENABLE,128); //half speed\r\n  delay(2000);\r\n  analogWrite(ENABLE,50); //half speed\r\n  delay(2000);\r\n  analogWrite(ENABLE,128); //half speed\r\n  delay(2000);\r\n  analogWrite(ENABLE,180); //half speed\r\n  delay(2000);\r\n  analogWrite(ENABLE,255); //half speed\r\n  delay(2000);\r\n  digitalWrite(ENABLE,LOW); //all done\r\n  delay(10000);\r\n}\r\n\n'})}),"\n",(0,r.jsxs)(e.ol,{start:"3",children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"Connect your Arduino to your laptop using a USB-C cable and upload the code to the arduino."}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"Test! Watch the DC motor run in different directions and speed. Ensure that the code is functioning properly with the serial monitor print statements."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.h1,{id:"relay",children:"Relay"}),"\n",(0,r.jsx)(e.h4,{id:"do-not-change-any-wiring-for-the-next-steps",children:"Do not change any wiring for the next steps."}),"\n",(0,r.jsxs)(e.ol,{start:"5",children:["\n",(0,r.jsx)(e.li,{children:"Open the Arduino IDE and paste the following code into your main Arduino Sketch."}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-cpp",children:'#define ENABLE 5\r\n#define DIRA 3\r\n#define DIRB 4\r\n\r\nint i;\r\n\r\nvoid setup() {\r\n  //---set pin direction\r\n  pinMode(ENABLE, OUTPUT);\r\n  pinMode(DIRA, OUTPUT);\r\n  pinMode(DIRB, OUTPUT);\r\n  Serial.begin(9600);\r\n}\r\n\r\nvoid loop() {\r\n\r\n  //---relay example\r\n  digitalWrite(ENABLE, HIGH); // enable on\r\n  for (i = 0; i < 5; i++)\r\n  {\r\n    Serial.println("spin");\r\n    digitalWrite(DIRA, HIGH); //motor spins\r\n    digitalWrite(DIRB, LOW);\r\n    delay(2000);\r\n    Serial.println("stop");\r\n    digitalWrite(DIRA, LOW); //motor stops\r\n    digitalWrite(DIRB, HIGH);\r\n    delay(2000);\r\n  }\r\n}\n'})}),"\n",(0,r.jsxs)(e.ol,{start:"6",children:["\n",(0,r.jsx)(e.li,{children:"Repeat Steps 3 and 4."}),"\n"]})]})}function h(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(c,{...n})}):c(n)}},28453:(n,e,i)=>{i.d(e,{R:()=>d,x:()=>l});var r=i(96540);const t={},o=r.createContext(t);function d(n){const e=r.useContext(o);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:d(n.components),r.createElement(o.Provider,{value:e},n.children)}}}]);