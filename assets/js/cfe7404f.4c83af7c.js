"use strict";(self.webpackChunklearn_at_carobotix=self.webpackChunklearn_at_carobotix||[]).push([[132],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),h=i,m=d["".concat(l,".").concat(h)]||d[h]||c[h]||a;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1313:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],s={title:"HC-SR04 Ultrasonic Sensor Guide",sidebar_position:5},l=void 0,p={unversionedId:"product_guide/ultrasonic-ranging-sensor",id:"product_guide/ultrasonic-ranging-sensor",title:"HC-SR04 Ultrasonic Sensor Guide",description:"Posted by Kelly M on Nov 27, 2021",source:"@site/docs/product_guide/1072-ultrasonic-ranging-sensor.md",sourceDirName:"product_guide",slug:"/product_guide/ultrasonic-ranging-sensor",permalink:"/product_guide/ultrasonic-ranging-sensor",editUrl:"https://github.com/carobot/carobot.github.io/tree/main/docs/product_guide/1072-ultrasonic-ranging-sensor.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"HC-SR04 Ultrasonic Sensor Guide",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"CAROBOT Motor Shield v3 Guide",permalink:"/product_guide/motor-shield-v3"}},u=[{value:"<strong>Wiring Guide</strong>",id:"wiring-guide",children:[],level:2},{value:"<strong>Programming </strong>",id:"programming-",children:[],level:2},{value:"<strong>Output</strong>",id:"output",children:[],level:2}],c={toc:u};function d(e){var t=e.components,s=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Posted by ",(0,a.kt)("strong",{parentName:"p"},"Kelly M")," on ",(0,a.kt)("strong",{parentName:"p"},"Nov 27, 2021")),(0,a.kt)("p",null,"The HC-SR04 ultrasonic sensor module is a very popular module for measuring distance or any other purposes. It emits an ultrasound signal at about 40 000 Hz which travels through the air and if there is an object or obstacle along its path, the sound will bounce back to the module."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(6692).Z,width:"480",height:"480"})),(0,a.kt)("p",null,"In this article, we will talk about how to wire and set up the module for operation with an Arduino Board.  "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Wiring"),"\nMost HC-SR04 modules operate at 5V and gives out digital outputs. For this project, we will be using the ",(0,a.kt)("a",{parentName:"p",href:"https://www.canadarobotix.com/products/1072"},"HC-SR04 Ultrasonic Sensor module")," we carry in our shop. This module consists of 4 pins:",(0,a.kt)("strong",{parentName:"p"}," VCC, TRIG, ECHO")," and ",(0,a.kt)("strong",{parentName:"p"},"GND"),". Both the TRIG and ECHO pins can be connected to any Digital output pins on an Arduino Board. "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Parts")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.canadarobotix.com/products/1072"},"HC-SR04 Ultrasonic Sensor")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.canadarobotix.com/products/60"},"Arduino Uno R3")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.canadarobotix.com/products/223"},"BreadBoard")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.canadarobotix.com/products/922"},"Jumper wires")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.arduino.cc/en/software"},"Arduino IDE"))),(0,a.kt)("h2",{id:"wiring-guide"},(0,a.kt)("strong",{parentName:"h2"},"Wiring Guide")),(0,a.kt)("p",null,"Insert the HC-SR04 module onto a breadboard and connect the pins with male to male jumper wires "),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(862).Z,width:"480",height:"313"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"HC-SR04 ",(0,a.kt)("strong",{parentName:"li"},"VCC")," -- Arduino ",(0,a.kt)("strong",{parentName:"li"},"5V pin ")),(0,a.kt)("li",{parentName:"ul"},"HC-SR04 ",(0,a.kt)("strong",{parentName:"li"},"Trig")," -- Arduino ",(0,a.kt)("strong",{parentName:"li"},"D3 pin")," "),(0,a.kt)("li",{parentName:"ul"},"HC-SR04 ",(0,a.kt)("strong",{parentName:"li"},"Echo")," -- Arduino ",(0,a.kt)("strong",{parentName:"li"},"D2 pin")," "),(0,a.kt)("li",{parentName:"ul"},"HC-SR04 ",(0,a.kt)("strong",{parentName:"li"},"GND")," -- Arduino ",(0,a.kt)("strong",{parentName:"li"},"GND pin"))),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(9716).Z,width:"480",height:"243"}),"\n",(0,a.kt)("img",{src:n(9598).Z,width:"480",height:"379"})),(0,a.kt)("h2",{id:"programming-"},(0,a.kt)("strong",{parentName:"h2"},"Programming ")),(0,a.kt)("p",null,"The following code demonstrates how the ultrasonic sensor works and measure the distance if an object or obstacle is in front of it. If you want to skip the steps and jump to the Full Code. "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 1:")," Define connection pins"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"#define echo 2 \n#define trig 3\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 2:")," Create variables for the duration of sound wave travel and for the distance measurement"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"long duration; \nint distance; \n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 3:")," Set up serial communication between Arduino and HC-SR04 sensor, set the ",(0,a.kt)("strong",{parentName:"p"},"trig")," pin as an ",(0,a.kt)("strong",{parentName:"p"},"output")," and ",(0,a.kt)("strong",{parentName:"p"},"echo")," pin as an ",(0,a.kt)("strong",{parentName:"p"},"input"),". "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"void setup(){\n  Serial.begin(9600);\n  pinMode(trig, OUTPUT);\n  pinMode(echo, INPUT);\n}\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 4:")," Clear the ",(0,a.kt)("strong",{parentName:"p"},"trig")," pin condition"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"void loop(){\n  digitalWrite(trig, LOW);\n  delayMicroseconds(2);\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 5:")," Set the ",(0,a.kt)("strong",{parentName:"p"},"trig")," pin HIGH for 10microseconds to generate the ultrasound. "),(0,a.kt)("p",null,"In order to generate the ultrasound, we need to set the TRIG pin as HIGH for 10milliseconds. This will send out a 8 cycle sonic burst which will travel at the speed sound and it will be received in the Echo pin. The Echo pin will output the time in microseconds the sound wave travelled. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"  digitalWrite(trig, HIGH);\n  delayMicroseconds(10);\n  digitalWrite(trig, LOW);\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 6:")," Reads the ",(0,a.kt)("strong",{parentName:"p"},"echo")," pin and returns the sound wave travel time in microseconds. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"}," duration = pulseIn(echo, HIGH);\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 7:")," Calculate the distance."),(0,a.kt)("p",null,"To get the distance in centimetre, we need to use the math formula, Time = Distance/ Speed. For example, if the object is 20 cm away from the sensor, and the speed of the sound is 340 m/s, and the sound wave will need to travel about 588 microseconds. However, the result you will get from the Echo pin will be double of the number since the sound wave needs to travel forward and bounce backward. So, we will need to multiply the received travel time value from the echo pin by 0.034 (which is the speed of the sound) and divide it by 2 (as it travels forward and backward). "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"  distance = duration * 0.034 /2;\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 8:")," Display the distance on Serial Monitor"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'  Serial.print("Distance: ");\n  Serial.print(distance);\n  Serial.println(" cm");\n}\n')),(0,a.kt)("p",null,"Full Code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'#define echo 2 \n#define trig 3\n\nlong duration; \nint distance; \n\nvoid setup(){\n  Serial.begin(9600);\n  pinMode(trig, OUTPUT);\n  pinMode(echo, INPUT);\n}\n\nvoid loop(){\n  digitalWrite(trig, LOW);\n  delayMicroseconds(2);\n\n  digitalWrite(trig, HIGH);\n  delayMicroseconds(10);\n  digitalWrite(trig, LOW);\n\n  duration = pulseIn(echo, HIGH);\n  distance = duration * 0.034 /2;\n\n  Serial.print("Distance: ");\n  Serial.print(distance);\n  Serial.println(" cm");\n}\n')),(0,a.kt)("h2",{id:"output"},(0,a.kt)("strong",{parentName:"h2"},"Output")),(0,a.kt)("p",null,"Serial Monitor will display the distance from the sensor to the object. In this example, I moved my hand forward and backwards to test the distance measurements."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(2966).Z,width:"400",height:"225"}),"\n",(0,a.kt)("img",{src:n(7981).Z,width:"150",height:"355"})))}d.isMDXComponent=!0},2966:function(e,t,n){t.Z=n.p+"assets/images/1072_01-ac8197ca078d8acbc301f18945d262a2.gif"},6692:function(e,t,n){t.Z=n.p+"assets/images/1072_01-13369d8b681e914e1f2dfd28edaba505.jpg"},862:function(e,t,n){t.Z=n.p+"assets/images/1072_01-3763bbf531d7c04b6e1be0487136fb54.png"},9716:function(e,t,n){t.Z=n.p+"assets/images/1072_02-1f05acd25c788f8ede78f28e4b6be0a0.png"},9598:function(e,t,n){t.Z=n.p+"assets/images/1072_03-f6667568d1c3ce9e1f0223755f388052.png"},7981:function(e,t){t.Z="data:image/png;base64,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"}}]);