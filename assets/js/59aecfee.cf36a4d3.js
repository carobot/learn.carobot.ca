"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9226],{21174:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var o=t(74848),i=t(28453);const s={title:"Micro Servo ",sidebar_position:1},r="How to use a Micro Servo Motor",a={id:"micro-servo",title:"Micro Servo ",description:"The micro servo motor (0.12s / 1.2kg-cm - 9g SG90) is a small motor which turns up to 180 degrees or ranges between 90, 180, or 270 degrees depending on the make or type, but never 360.",source:"@site/guide/1713-micro-servo.md",sourceDirName:".",slug:"/micro-servo",permalink:"/guide/micro-servo",draft:!1,unlisted:!1,editUrl:"https://github.com/carobot/learn.carobot.ca/tree/main/guide/1713-micro-servo.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Micro Servo ",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"8-Digit SPI 7-Segment LED Display",permalink:"/guide/1519-8-digit-7-seg"},next:{title:"I\xb2C LCD 16\xd72 or 20\xd74 Module",permalink:"/guide/I^2-LCD-16x2-or-20x4-module"}},c={},d=[{value:"How it works",id:"how-it-works",level:2},{value:"Wiring",id:"wiring",level:2},{value:"Parts",id:"parts",level:2},{value:"Wiring Guide",id:"wiring-guide",level:2},{value:"Programming",id:"programming",level:2},{value:"Full Code",id:"full-code",level:2},{value:"Output",id:"output",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.RP)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"how-to-use-a-micro-servo-motor",children:"How to use a Micro Servo Motor"}),"\n",(0,o.jsx)(n.p,{children:"The micro servo motor (0.12s / 1.2kg-cm - 9g SG90) is a small motor which turns up to 180 degrees or ranges between 90, 180, or 270 degrees depending on the make or type, but never 360."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:t(78088).A+"",width:"300",height:"300"})}),"\n",(0,o.jsx)(n.h2,{id:"how-it-works",children:"How it works"}),"\n",(0,o.jsx)(n.p,{children:"The Servo motor is an electromechanical device that rotates and changes movement based on the supplied current and voltage. The Servo works as a closed loop system that provides torque and velocity as commanded from its controller. This allows the servo to receive feedback to know when to close the loop. When connected to a programmable circuit board, this device uses the Pulse Width Modulation pins."}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.img,{src:t(37830).A+"",width:"300",height:"210"})," ",(0,o.jsx)(n.img,{src:t(69935).A+"",width:"300",height:"165"})," ",(0,o.jsx)(n.img,{src:t(73916).A+"",width:"300",height:"90"})]}),"\n",(0,o.jsx)(n.h2,{id:"wiring",children:"Wiring"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Red Wire"}),": connected to 5V"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Black Wire"}),": connected to ground"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Brown Wire"}),": connect to a PWM pin (#~)"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:t(98337).A+"",width:"225",height:"300"})}),"\n",(0,o.jsx)(n.h2,{id:"parts",children:"Parts"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://www.canadarobotix.com/products/1713",children:"Micro Servo (0.12s / 1.2kg-cm - 9g SG90)"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://www.canadarobotix.com/products/553",children:"Trimpot 10K with Knob (Potentiometer)"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://www.canadarobotix.com/products/60",children:"Arduino Uno R3"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://www.canadarobotix.com/products/223",children:"BreadBoard"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://www.canadarobotix.com/products/922",children:"Jumper wires"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://www.arduino.cc/en/software",children:"Arduino IDE"})}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"wiring-guide",children:"Wiring Guide"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Connect the voltage and ground wires to the appropriate connection to the Servo"}),"\n",(0,o.jsx)(n.li,{children:"Connect the signal wire of the Servo to a PWM pin in the digital input pin section of the Arduino board"}),"\n",(0,o.jsx)(n.li,{children:"Connect the terminal pins of the potentiometer to voltage and ground"}),"\n",(0,o.jsx)(n.li,{children:"Connect the wiper pin of the potentiometer to an analog pin"}),"\n",(0,o.jsx)(n.li,{children:"Follow the code provided and observe how the servo rotates as you change the values of the potentiometer"}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"programming",children:"Programming"}),"\n",(0,o.jsx)(n.p,{children:"The following code demonstrates how you can move the servo motor by mapping the potentiometer. If you want to skip the steps, you can jump to the Full Code."}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Step 1:"})," Create variables for the sensors pin and a variable to store the data that is collected"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-c",children:"int sensor = A0; //sensor pin connection\n"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Step 2:"})," Set up serial communication, set the ",(0,o.jsx)(n.strong,{children:"sensor"})," pin as an ",(0,o.jsx)(n.strong,{children:"INPUT"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-c",children:"void setup() {\n Serial.begin(9600); // start the serial port\n pinMode(sensor, INPUT); //setting the pin to the Arduino\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Step 3:"})," Read the data from the ",(0,o.jsx)(n.strong,{children:"sensor"}),", and convert the data into a volts measurement"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-c",children:"void loop() {\n\n //5V\n float volts = analogRead(sensor)*0.0048828125;  // value from sensor * (5/1024)\n"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Step 4:"})," Now convert the volts measurement into distance, a measurement we understand.\n",(0,o.jsxs)(n.strong,{children:["This calculation is found in the datasheet gragh of the component and can be found ",(0,o.jsx)(n.a,{href:"https://cdn.shopify.com/s/files/1/0015/7571/4865/files/datasheet_GP2Y0A41SK0F.pdf?325",children:"here!"})]})]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-c",children:"int distance = 13*pow(volts, -1); // worked out from datasheet graph\n delay(1000); // slow down serial port \n"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Step 5:"})," Finally use the distance we calculated and display ONLY when the distance is less than or equal to its max limit."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-c",children:"if (distance <= 30){\n   Serial.println(distance);   // prints the distance\n }\n}\n"})}),"\n",(0,o.jsx)(n.h2,{id:"full-code",children:"Full Code"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-c",children:"#include <Servo.h>\n\nServo servo;  // Servo object\n\nint servoPin = 9;\nint potpin = 0;  // analog pin used to connect the potentiometer\nint val;    // variable to read the value from the analog pin\n\nvoid setup() {\n servo.attach(servoPin);  // attaches the servo on pin 9 to the servo object\n}\n\nvoid loop() {\n val = analogRead(potpin);            // reads the value of the potentiometer (value between 0 and 1023)\n val = map(val, 0, 1023, 0, 180);     // scales the values to use with the servo (value between 0 and 180)\n servo.write(val);                  // sets the servo position according to the scaled value\n delay(15);                         \n}\n"})}),"\n",(0,o.jsx)(n.h2,{id:"output",children:"Output"}),"\n",(0,o.jsx)(n.p,{children:"Serial Monitor will display distance that is measure from the proximity sensor, only if the distance measure is less than or equal to the max limit which is 30cm for this exact component."})]})}function h(e={}){const{wrapper:n}={...(0,i.RP)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},78088:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/1713(1)-5880f0160ba95f8ca8cae1abb0ecf5d8.jpg"},98337:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/1713(2)-ec0aede5c0aae0994eb652cf943e55dc.jpg"},37830:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/1713(3)-37ef96064769f61ec471c7ac64caa5ca.jpg"},69935:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/1713(4)-70eec649c3d9cab9fd7dfb773c06963d.jpg"},73916:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/1713(5)-afa3847f686ba12980280d18d10c93e3.jpg"},28453:(e,n,t)=>{t.d(n,{RP:()=>s});var o=t(96540);const i=o.createContext({});function s(e){const n=o.useContext(i);return o.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}}}]);