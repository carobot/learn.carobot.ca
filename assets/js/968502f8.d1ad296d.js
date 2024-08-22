"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3643],{38192:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var t=i(74848),o=i(28453);const s={title:"HC-SR501 PIR Motion Sensor",sidebar_position:1},r="Using the HC-SR501 PIR Motion Sensor with ESP-Wroom 32",d={id:"HC-SR501-and-ESP-WROOM-32",title:"HC-SR501 PIR Motion Sensor",description:"Introduction",source:"@site/guide/0345-HC-SR501-and-ESP-WROOM-32.md",sourceDirName:".",slug:"/HC-SR501-and-ESP-WROOM-32",permalink:"/guide/HC-SR501-and-ESP-WROOM-32",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"HC-SR501 PIR Motion Sensor",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"ESP WROOM 32",permalink:"/guide/ESP-WROOM-32"},next:{title:"Piezo Vibration Sensor",permalink:"/guide/Piezo-Vibration-Sensor-Small-Horizontal"}},l={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Materials",id:"materials",level:2},{value:"Wiring and Setup",id:"wiring-and-setup",level:2},{value:"Full Code",id:"full-code",level:2},{value:"Programming &amp; Logic",id:"programming--logic",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Output",id:"output",level:2},{value:"Possible applications:",id:"possible-applications",level:2},{value:"Conclusion",id:"conclusion",level:2}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"using-the-hc-sr501-pir-motion-sensor-with-esp-wroom-32",children:"Using the HC-SR501 PIR Motion Sensor with ESP-Wroom 32"}),"\n",(0,t.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,t.jsx)(n.p,{children:"The goal of this tutorial is to demonstrate how to use HC-SR501 and ESP WROOM 32 to create a simple motion detector. You will learn how to wire the components, upload the code, and test the functionality. You will also learn some basic concepts of motion sensing, digital input/output, and serial communication."}),"\n",(0,t.jsx)("a",{href:"/img/docs/product_guide/0000.jpeg",children:(0,t.jsx)("img",{src:"/img/docs/product_guide/0345-HC-SR501-and-ESP-WROOM-32-0003.jpg",alt:"Wiring Diagram",width:"50%",height:"100%"})}),"\n",(0,t.jsx)(n.h2,{id:"materials",children:"Materials"}),"\n",(0,t.jsx)(n.p,{children:"To follow this tutorial, you will need the following materials:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.canadarobotix.com/products/2594",children:"ESP WROOM 32"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.canadarobotix.com/products/2327",children:"HC-SR501 PIR Motion Sensor"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.canadarobotix.com/products/223",children:"BreadBoard"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.canadarobotix.com/products/922",children:"Jumper wires"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.arduino.cc/en/software",children:"Arduino IDE"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"wiring-and-setup",children:"Wiring and Setup"}),"\n",(0,t.jsx)(n.p,{children:"The wiring and setup of the AM2320 sensor and the ESP32 board depend on the communication mode you choose: single-wire or I2C. In this tutorial, we will use the I2C mode, which requires two resistors as pull-up for the SDA and SCL lines\xb2\xb3. The wiring diagram is shown below:"}),"\n",(0,t.jsx)("a",{href:"/img/docs/product_guide/0000.jpeg",children:(0,t.jsx)("img",{src:"/img/docs/product_guide/0345-HC-SR501-and-ESP-WROOM-32-0002.jpg",alt:"Wiring Diagram",width:"70%",height:"100%"})}),"\n",(0,t.jsx)(n.p,{children:"Below are the pinouts for each module:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"http://localhost:3000/img/docs/product_guide/pir_2.jpg",children:"HC-SR501 PIR Motion Sensor"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"http://localhost:3000/img/docs/product_guide/esp.jpg",children:"ESP32 Pinout"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The AM2320 temperature sensor is connected to an ESP-WROOM-32 microcontroller using the following pin configuration:"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"AM2320 Temperature Sensor"}),(0,t.jsx)(n.th,{children:"ESP-WROOM-32 Pin"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"VCC"}),(0,t.jsx)(n.td,{children:"3.3V"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"GND"}),(0,t.jsx)(n.td,{children:"GND"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"OUT"}),(0,t.jsx)(n.td,{children:"GPIO4"})]})]})]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Connect the VCC pin of the HC-SR501 to the 3.3V pin of the ESP-WROOM-32."}),"\n",(0,t.jsx)(n.li,{children:"Connect the GND pin of the HC-SR501 to the GND pin of the ESP-WROOM-32."}),"\n",(0,t.jsx)(n.li,{children:"Connect the OUT pin of the HC-SR501 to a GPIO4 pin on the ESP-WROOM-32 ."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"full-code",children:"Full Code"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:'int motionSensorPin = 2; // GPIO pin connected to the motion sensor\r\n\r\nvoid setup() {\r\n  Serial.begin(9600); // Initialize serial communication\r\n  pinMode(motionSensorPin, INPUT); // Set motion sensor pin as input\r\n}\r\n\r\nvoid loop() {\r\n  int motionDetected = digitalRead(motionSensorPin); // Read motion sensor pin state\r\n\r\n  if (motionDetected == HIGH) {\r\n    Serial.println("Motion detected!");\r\n  } else {\r\n    Serial.println("No motion detected.");\r\n  }\r\n\r\n  delay(1000); // Delay for 1 second\r\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"programming--logic",children:"Programming & Logic"}),"\n",(0,t.jsx)(n.p,{children:"Let's go through the logic of the code line by line:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"We start by declaring a variable motionSensorPin to hold the GPIO pin number connected to the motion sensor (in this case, GPIO 2)."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"In the setup() function:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"We initialize serial communication at a baud rate of 9600 to communicate with the computer."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"We set the motionSensorPin as an input pin using the pinMode() function."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"In the loop() function:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"We read the state of the motionSensorPin using the digitalRead() function and store it in the motionDetected variable."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:'If the motion sensor pin state is HIGH, we print "Motion detected!" to the serial monitor using Serial.println().'}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:'If the motion sensor pin state is LOW, we print "No motion detected." to the serial monitor.'}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"We introduce a delay of 1 second using the delay() function."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"If you encounter any issues, make sure the wiring connections are correct."}),"\n",(0,t.jsx)(n.li,{children:"Check that the motion sensor is receiving power (3.3V) and properly grounded."}),"\n",(0,t.jsx)(n.li,{children:"Ensure the motion sensor's OUT pin is connected to the correct GPIO pin on the ESP-WROOM-32."}),"\n",(0,t.jsx)(n.li,{children:"Verify that you have selected the correct board and port settings in the Arduino IDE."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"output",children:"Output"}),"\n",(0,t.jsx)(n.p,{children:"The possible output in the serial monitor can vary depending on the motion detected or not detected by the HC-SR501 sensor. Here are two examples of the possible output:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Output when motion is detected:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:"Motion detected!\r\nMotion detected!\r\nMotion detected!\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsx)(n.li,{children:"Output when no motion is detected:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:"Motion detected!\r\nMotion detected!\r\nMotion detected!\n"})}),"\n",(0,t.jsx)(n.p,{children:'In the first example, the sensor continuously detects motion, so the "Motion detected!" message is printed repeatedly. In the second example, no motion is detected, so the "No motion detected." message is printed continuously. The output will reflect the real-time status of the motion detected by the sensor.'}),"\n",(0,t.jsx)("a",{href:"/img/docs/product_guide/0000.jpeg",children:(0,t.jsx)("img",{src:"/img/docs/product_guide/0345-HC-SR501-and-ESP-WROOM-32-0003.jpg",alt:"Wiring Diagram",width:"50%",height:"100%"})}),"\n",(0,t.jsx)(n.h2,{id:"possible-applications",children:"Possible applications:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Security Systems:"})," The motion sensor can be used in security systems to detect unauthorized movement or intruders. When motion is detected, the ESP-WROOM-32 can trigger an alarm, send a notification to a smartphone, or activate surveillance cameras."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Home Automation:"})," The motion sensor can be integrated into home automation systems to automate lighting, HVAC (heating, ventilation, and air conditioning), and other appliances based on occupancy. For example, lights can turn on automatically when someone enters a room and turn off when the room is vacant."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Smart Lighting:"})," The motion sensor can be used to control lighting in various environments, such as staircases, hallways, and outdoor spaces. Lights can be turned on only when motion is detected, providing convenience and enhancing safety."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Automatic Door Opening:"})," The motion sensor can be employed to automatically open doors when someone approaches, providing hands-free access to buildings, shops, or residential spaces."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,t.jsx)(n.p,{children:"In this tutorial, we have successfully learned how to interface the HC-SR501 PIR motion sensor with the ESP-WROOM-32 development board. By understanding the wiring connections, uploading the provided code, and comprehending the programming logic, you can build motion detection systems or incorporate this knowledge into your projects. Remember to troubleshoot any issues and utilize the serial monitor to observe the output. Enjoy experimenting with the capabilities of the HC-SR501 and ESP-WROOM-32!"})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>d});var t=i(96540);const o={},s=t.createContext(o);function r(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);