"use strict";(self.webpackChunklearn_at_carobotix=self.webpackChunklearn_at_carobotix||[]).push([[683],{3905:function(A,e,t){t.d(e,{Zo:function(){return h},kt:function(){return w}});var n=t(67294);function i(A,e,t){return e in A?Object.defineProperty(A,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):A[e]=t,A}function o(A,e){var t=Object.keys(A);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(A);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(A,e).enumerable}))),t.push.apply(t,n)}return t}function a(A){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){i(A,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(A,e,Object.getOwnPropertyDescriptor(t,e))}))}return A}function r(A,e){if(null==A)return{};var t,n,i=function(A,e){if(null==A)return{};var t,n,i={},o=Object.keys(A);for(n=0;n<o.length;n++)t=o[n],e.indexOf(t)>=0||(i[t]=A[t]);return i}(A,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(A);for(n=0;n<o.length;n++)t=o[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(A,t)&&(i[t]=A[t])}return i}var s=n.createContext({}),l=function(A){var e=n.useContext(s),t=e;return A&&(t="function"==typeof A?A(e):a(a({},e),A)),t},h=function(A){var e=l(A.components);return n.createElement(s.Provider,{value:e},A.children)},u={inlineCode:"code",wrapper:function(A){var e=A.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(A,e){var t=A.components,i=A.mdxType,o=A.originalType,s=A.parentName,h=r(A,["components","mdxType","originalType","parentName"]),c=l(t),w=i,d=c["".concat(s,".").concat(w)]||c[w]||u[w]||o;return t?n.createElement(d,a(a({ref:e},h),{},{components:t})):n.createElement(d,a({ref:e},h))}));function w(A,e){var t=arguments,i=e&&e.mdxType;if("string"==typeof A||i){var o=t.length,a=new Array(o);a[0]=c;var r={};for(var s in e)hasOwnProperty.call(e,s)&&(r[s]=e[s]);r.originalType=A,r.mdxType="string"==typeof A?A:i,a[1]=r;for(var l=2;l<o;l++)a[l]=t[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},85665:function(A,e,t){t.r(e),t.d(e,{frontMatter:function(){return r},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return h},default:function(){return c}});var n=t(87462),i=t(63366),o=(t(67294),t(3905)),a=["components"],r={title:"Water Level Float Switch Guide",sidebar_position:13},s=void 0,l={unversionedId:"product_guide/water-level-float-switch",id:"product_guide/water-level-float-switch",title:"Water Level Float Switch Guide",description:"The float sensor is a device used to detect the level of liquid within a tank. The switch may be used in a pump, an indicator, an alarm, or other devices. The magnet inside the bulb structure is an electromagnetic ON/OFF switch that helps to sense the level of water present in the overhead tank or sump. It is usually used in applications, such as a pump/valve control and detecting the water level in fuel and water tanks and notify if the tank is full of water or when it is empty.",source:"@site/guide/product_guide/1993-water-level-float-switch.md",sourceDirName:"product_guide",slug:"/product_guide/water-level-float-switch",permalink:"/guide/product_guide/water-level-float-switch",editUrl:"https://github.com/carobot/carobot.github.io/tree/main/guide/product_guide/1993-water-level-float-switch.md",tags:[],version:"current",sidebarPosition:13,frontMatter:{title:"Water Level Float Switch Guide",sidebar_position:13},sidebar:"tutorialSidebar",previous:{title:"Soil Moisture Sensor (Resistive) Guide",permalink:"/guide/product_guide/soil-moisture-sensor-resistive"},next:{title:"Flame Sensor Guide",permalink:"/guide/product_guide/flame-sensor"}},h=[{value:"How it works",id:"how-it-works",children:[],level:2},{value:"Parts",id:"parts",children:[],level:2},{value:"Wiring",id:"wiring",children:[],level:2},{value:"Programming",id:"programming",children:[],level:2},{value:"Full Code",id:"full-code",children:[],level:2},{value:"Output",id:"output",children:[],level:2}],u={toc:h};function c(A){var e=A.components,r=(0,i.Z)(A,a);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The float sensor is a device used to detect the level of liquid within a tank. The switch may be used in a pump, an indicator, an alarm, or other devices. The magnet inside the bulb structure is an electromagnetic ON/OFF switch that helps to sense the level of water present in the overhead tank or sump. It is usually used in applications, such as a pump/valve control and detecting the water level in fuel and water tanks and notify if the tank is full of water or when it is empty. "),(0,o.kt)("p",null,(0,o.kt)("img",{src:t(32348).Z,width:"480",height:"320"})),(0,o.kt)("p",null,"In this article, we will talk about how the float sensor works and how to interface this sensor with Arduino. "),(0,o.kt)("h2",{id:"how-it-works"},"How it works"),(0,o.kt)("p",null,"The float sensor consists of an electromagnetic switch that the magnetic reed switch is placed in the stem of the sensor. A magnet is in the bulb structure of the sensor. When the water fills up in a reservoir, the bulb structure which has the magnet starts moving up once water reaches a certain level. It moves up close to the stem near the reed switch. Due to the force of attraction from the magnet reed switch closes indicating water level is high. When the water level goes down, the bulb moves down and reed switch contact breaks. Then, the system detects that the water level has gone down and acts accordingly. "),(0,o.kt)("p",null,(0,o.kt)("img",{src:t(27114).Z,width:"268",height:"162"})),(0,o.kt)("p",null,"There are many different float sensors in the market which bring various advantages and functions. We will be using ",(0,o.kt)("a",{parentName:"p",href:"https://www.canadarobotix.com/1993"},"Water Level Float Switch"),", the one we carry in our shop for this project. This sensor consists of two terminals, VCC and GND. The VCC terminal of the float sensor can be connected to any digital pins on the Arduino Board and the GND terminal is connected to the ground of Arduino Board. It acts as a switch and the digital pin of Arduino reads the switch state for either being HIGH or LOW. "),(0,o.kt)("h2",{id:"parts"},"Parts"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.canadarobotix.com/1993"},"Water Level Float Switch")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.canadarobotix.com/products/60"},"Arduino Uno R3")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.arduino.cc/en/software"},"Arduino IDE"))),(0,o.kt)("h2",{id:"wiring"},"Wiring"),(0,o.kt)("p",null,"Connect the two wires to Arduino Uno. Both wires are the same, so you can connect either one to GND and digital pin. "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Float Sensor ",(0,o.kt)("strong",{parentName:"li"},"wire 1")," -- Arduino ",(0,o.kt)("strong",{parentName:"li"},"D2")," pin "),(0,o.kt)("li",{parentName:"ul"},"Float Sensor ",(0,o.kt)("strong",{parentName:"li"},"wire 2")," -- Arduino ",(0,o.kt)("strong",{parentName:"li"},"GND")," pin ")),(0,o.kt)("p",null,(0,o.kt)("img",{src:t(59574).Z,width:"480",height:"255"}),"\n",(0,o.kt)("img",{src:t(2368).Z,width:"480",height:"265"})),(0,o.kt)("h2",{id:"programming"},"Programming"),(0,o.kt)("p",null,"In the following code, we connected the sensor's wires to digital pin 2 and GND pin on Arduino. The sensor acts as a switch and D2 pin of Arduino reads the switch state for either being HIGH or LOW. We also used the built-in LED in pin 13 of Arduino as an indication for float and message of the switch state will be displayed in Serial Monitor. "),(0,o.kt)("p",null,"If you want to skip the steps,you can jump to the Full Code. "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 1:")," Define the connection pins"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"#define float_sensor 2\n#define internal_LED 13\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 2:")," Create a variable for storing the sensor's output. In this case, the variable is set to HIGH because we pulled up the internal resistor for D2 pin that causes it to be HIGH at first."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"int state = 1;\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 3:")," Set up serial communication between Arduino and float sensor and set the sensor as an input and internal led as an output. "),(0,o.kt)("p",null,"Noted that the internal LED is connected to D13 pin on Arduino. You do not need to connect to an extra LED. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"void setup(){\n  Serial.begin(9600);\n  pinMode(float_sensor, INPUT_PULLUP);\n  pinMode(internal_LED, OUTPUT);\n}\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 4:")," Read the sensor's output state."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"void loop(){\n  state = digitalRead(float_sensor);\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 5:"),' If the sensor\'s state is LOW, the bulb is raised up to the water level. The internal led will be turned on and "WATER LEVEL - HIGH" will be showed on the Serial Monitor. Otherwise, the internal led will be turned off and "WATER LEVEL - LOW" will be showed on the Serial Monitor.'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},'  if (state == LOW){\n    digitalWrite(internal_LED, HIGH);\n    Serial.println("WATER LEVEL - HIGH");\n  }\n  else{\n    digitalWrite(internal_LED, LOW);\n    Serial.println("WATER LEVEL - LOW");\n  }\n}\n')),(0,o.kt)("h2",{id:"full-code"},"Full Code"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},'#define float_sensor 2\n#define internal_LED 13\n\nint state = 1;\n\nvoid setup(){\n  Serial.begin(9600);\n  pinMode(float_sensor, INPUT_PULLUP);\n  pinMode(internal_LED, OUTPUT);\n}\n\nvoid loop(){\n  state = digitalRead(float_sensor);\n  if (state == LOW){\n    digitalWrite(internal_LED, HIGH);\n    Serial.println("WATER LEVEL - HIGH");\n  }\n  else{\n    digitalWrite(internal_LED, LOW);\n    Serial.println("WATER LEVEL - LOW");\n  }\n}\n')),(0,o.kt)("h2",{id:"output"},"Output"),(0,o.kt)("p",null,"Test by hand!"),(0,o.kt)("p",null,"When the bulb is low, the internal led is turned off and the state is LOW. Vice versa, when the bulb is held up, the internal led is turned on and the state is HIGH. "),(0,o.kt)("p",null,(0,o.kt)("img",{src:t(2350).Z,width:"399",height:"291"})),(0,o.kt)("p",null,"The internal led will go on and off according to the state of the switch. The internal led is right next to pin 13 on Arduino. "),(0,o.kt)("p",null,(0,o.kt)("img",{src:t(4243).Z,width:"398",height:"357"})),(0,o.kt)("p",null,"Serial Monitor: "),(0,o.kt)("p",null,(0,o.kt)("img",{src:t(63039).Z,width:"140",height:"178"})),(0,o.kt)("p",null,"When it is in water"),(0,o.kt)("p",null,(0,o.kt)("img",{src:t(3413).Z,width:"270",height:"480"}),"\n",(0,o.kt)("img",{src:t(56388).Z,width:"480",height:"337"})),(0,o.kt)("p",null,"Serial Monitor: "),(0,o.kt)("p",null,(0,o.kt)("img",{src:t(6380).Z,width:"145",height:"159"})),(0,o.kt)("p",null,"When there is not enough water"),(0,o.kt)("p",null,(0,o.kt)("img",{src:t(19711).Z,width:"337",height:"374"}),"\n",(0,o.kt)("img",{src:t(15541).Z,width:"466",height:"334"})),(0,o.kt)("p",null,"Serial Monitor: "),(0,o.kt)("p",null,(0,o.kt)("img",{src:t(40414).Z,width:"128",height:"116"})))}c.isMDXComponent=!0},4243:function(A,e,t){e.Z=t.p+"assets/images/1993_01-1028226ebd59d08a21ae67f4d77bd353.gif"},32348:function(A,e){e.Z="data:image/jpeg;base64,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"},27114:function(A,e,t){e.Z=t.p+"assets/images/1993_01-86d8bc958cd97d3d52ed38718500b4ea.png"},3413:function(A,e,t){e.Z=t.p+"assets/images/1993_02-f10cb1617a38ddcd3d611eeb8bd443db.gif"},59574:function(A,e,t){e.Z=t.p+"assets/images/1993_02-db4af7f9d8e33e91013e01fd600c21af.png"},2368:function(A,e,t){e.Z=t.p+"assets/images/1993_03-501378154a8c8dca1dca6f0a2dce2e5a.png"},2350:function(A,e,t){e.Z=t.p+"assets/images/1993_04-b28f2d8f287c4bc1d69d1584e9d64ee8.png"},63039:function(A,e){e.Z="data:image/png;base64,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"},56388:function(A,e,t){e.Z=t.p+"assets/images/1993_06-afa9e106e9ae8eee4d766fd7ff2df93b.png"},6380:function(A,e){e.Z="data:image/png;base64,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"},19711:function(A,e,t){e.Z=t.p+"assets/images/1993_08-b96362051fc161cf64af214d498db6b8.png"},15541:function(A,e,t){e.Z=t.p+"assets/images/1993_09-6d90504cd0f3ce42543235709e853387.png"},40414:function(A,e){e.Z="data:image/png;base64,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"}}]);