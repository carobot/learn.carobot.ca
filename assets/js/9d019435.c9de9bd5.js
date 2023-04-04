"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6435],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),s=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=s(n),h=a,g=c["".concat(d,".").concat(h)]||c[h]||u[h]||i;return n?r.createElement(g,o(o({ref:t},p),{},{components:n})):r.createElement(g,o({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=h;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},86109:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const i={title:"RFID/NFC Card Reader Kit",sidebar_position:11},o="How to use The RFID/NFC Card Reader Kit",l={unversionedId:"RFID-NFC-Card-Reader-Kit",id:"RFID-NFC-Card-Reader-Kit",title:"RFID/NFC Card Reader Kit",description:"The NFC controller is based on a collection of microcontrollers that allow for contactless communication of around 13.56 MHz. The batteryless and powerless NFC tags and cards send radio waves that activate the antenna of the receiving device. This device only works around a short distance of around 4 inches.",source:"@site/guide/2072-RFID-NFC-Card-Reader-Kit.md",sourceDirName:".",slug:"/RFID-NFC-Card-Reader-Kit",permalink:"/guide/RFID-NFC-Card-Reader-Kit",draft:!1,editUrl:"https://github.com/carobot/learn.carobot.ca/tree/main/guide/2072-RFID-NFC-Card-Reader-Kit.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{title:"RFID/NFC Card Reader Kit",sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"CAROBOT LCD Shield Kit",permalink:"/guide/LCD-shield-kit"},next:{title:"DSO138 Oscilloscope Kit",permalink:"/guide/oscilloscope-kit"}},d={},s=[{value:"How it works",id:"how-it-works",level:2},{value:"Wiring",id:"wiring",level:2},{value:"Parts",id:"parts",level:2},{value:"Wiring Guide",id:"wiring-guide",level:2},{value:"Programming",id:"programming",level:2},{value:"Full Code",id:"full-code",level:2},{value:"Output",id:"output",level:2}],p={toc:s},c="wrapper";function u(e){let{components:t,...i}=e;return(0,a.kt)(c,(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"how-to-use-the-rfidnfc-card-reader-kit"},"How to use The RFID/NFC Card Reader Kit"),(0,a.kt)("p",null,"The NFC controller is based on a collection of microcontrollers that allow for contactless communication of around 13.56 MHz. The batteryless and powerless NFC tags and cards send radio waves that activate the antenna of the receiving device. This device only works around a short distance of around 4 inches. "),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(18067).Z,width:"300",height:"300"})),(0,a.kt)("h2",{id:"how-it-works"},"How it works"),(0,a.kt)("p",null,"The RFID sends radio waves to the active tags, which then send radio waves back to the antenna of the RFID, where the data from the NFC tags and cards are received."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(82790).Z,width:"300",height:"163"})," ",(0,a.kt)("img",{src:n(61552).Z,width:"300",height:"121"})," "),(0,a.kt)("h2",{id:"wiring"},"Wiring"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"GND")," pin to ground "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"VCC")," pin to 5V"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"SDA")," pin to 10"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"SCL")," pin to 11")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(27958).Z,width:"300",height:"198"})," "),(0,a.kt)("h2",{id:"parts"},"Parts"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.canadarobotix.com/products/2072"},"RFID/NFC Card Reader Kit (13.56MHz, PN532, Module + Card + Key Chain)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.canadarobotix.com/products/1956"},"Diffused 10mm LED (Blue)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.canadarobotix.com/products/1770"},"220 Ohm Carbon Film Resistor")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.canadarobotix.com/products/60"},"Arduino Uno R3")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.canadarobotix.com/products/223"},"BreadBoard")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.canadarobotix.com/products/922"},"Jumper wires")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.arduino.cc/en/software"},"Arduino IDE"))),(0,a.kt)("h2",{id:"wiring-guide"},"Wiring Guide"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Use the provided 4 pin, right angled male header, and solder it to the GND, VCC, SDA and SCL pins"),(0,a.kt)("li",{parentName:"ul"},"Now connect each pin to its appropriate locations on the Arduino board (check our wiring) "),(0,a.kt)("li",{parentName:"ul"},"Connect the positive led of the LED to the resistor, and then the resistor to pin 13 on the Arduino and connect the negative led pin to ground"),(0,a.kt)("li",{parentName:"ul"},"Follow the provided code and watch the LED light up when it detects a card!!")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(1478).Z,width:"225",height:"300"})," "),(0,a.kt)("h2",{id:"programming"},"Programming"),(0,a.kt)("p",null,"The following code demonstrates how read the RFID and NFC cards or keys and receive the ID number."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 1:")," Include the libraries needed for this program. You can down load the zip files from onlien and add the zip files to\nthe library under ",(0,a.kt)("strong",{parentName:"p"},"Sketech")," and then under ",(0,a.kt)("strong",{parentName:"p"},"Include Library"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"#include <SoftwareSerial.h>\n#include <PN532_SWHSU.h>\n#include <PN532.h>\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 2:")," Create objects for ",(0,a.kt)("strong",{parentName:"p"},"SoftwareSerial"),", ",(0,a.kt)("strong",{parentName:"p"},"PN532_SWHSU")," and ",(0,a.kt)("strong",{parentName:"p"},"PN532"),". "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"SoftwareSerial SWSerial( 10, 11 ); // RX, TX\nPN532_SWHSU pn532swhsu( SWSerial );\nPN532 nfc( pn532swhsu );\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 3:")," Set the following varibales to store ",(0,a.kt)("strong",{parentName:"p"},"data")," and to store the ",(0,a.kt)("strong",{parentName:"p"},"pin number")," of the LED. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"int ledPin = 13; \n\n\nvoid setup(void) {\n  pinMode(ledPin, OUTPUT);\n  Serial.begin(9600);\n  nfc.begin();\n  uint32_t versiondata = nfc.getFirmwareVersion();\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 4:")," Creating an if statement to reconize whether any data was found from the scan, and whether any scan was recieved."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'if (! versiondata) {\n    Serial.print("Didn\'t Find PN53x Module");\n    while (1); // Halt\n  }\n\n  // Got valid data, print it out!\n  // Configure board to read RFID tags\n  nfc.SAMConfig();\n  Serial.println("Waiting for an ISO14443A Card ...");\n}\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 5:")," Next, we will create an array to store the card or key ID from the scan. We will also store the length of the ID if the scane was successful."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"void loop(void) {\n\n  boolean success;\n  uint8_t uid[] = { 0, 0, 0, 0, 0, 0, 0 };  // Buffer to store the returned UID\n  uint8_t uidLength;                       // Length of the UID (4 or 7 bytes depending on ISO14443A card type)\n  success = nfc.readPassiveTargetID(PN532_MIFARE_ISO14443A, &uid[0], &uidLength);\n\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 6:")," Then, when we are sure that the scan was successful, we will load the array up with the digits of the ID."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'if (success) {\n    Serial.println("Found A Card!");\n    digitalWrite(ledPin, HIGH);\n    Serial.print("UID Length: ");Serial.print(uidLength, DEC);Serial.println(" bytes");\n    Serial.print("UID Value: ");\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 7:")," Finally, we can print out the ID from the scaned card or key."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'    for (uint8_t i=0; i < uidLength; i++) {\n      Serial.print(" ");Serial.print(uid[i], DEC);\n    }\n    Serial.println("");\n    // 2 second halt\n    delay(1000);\n    digitalWrite(ledPin, LOW);\n  }\n}\n')),(0,a.kt)("h2",{id:"full-code"},"Full Code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'#include <SoftwareSerial.h>\n#include <PN532_SWHSU.h>\n#include <PN532.h>\nSoftwareSerial SWSerial( 10, 11 ); // RX, TX\nPN532_SWHSU pn532swhsu( SWSerial );\nPN532 nfc( pn532swhsu );\n\nint ledPin = 13; \n\n\nvoid setup(void) {\n  pinMode(ledPin, OUTPUT);\n  Serial.begin(9600);\n  nfc.begin();\n  uint32_t versiondata = nfc.getFirmwareVersion();\n  if (! versiondata) {\n    Serial.print("Didn\'t Find PN53x Module");\n    while (1); // Halt\n  }\n\n  // Got valid data, print it out!\n  // Configure board to read RFID tags\n  nfc.SAMConfig();\n  Serial.println("Waiting for an ISO14443A Card ...");\n}\n\nvoid loop(void) {\n\n  boolean success;\n  uint8_t uid[] = { 0, 0, 0, 0, 0, 0, 0 };  // Buffer to store the returned UID\n  uint8_t uidLength;                       // Length of the UID (4 or 7 bytes depending on ISO14443A card type)\n  success = nfc.readPassiveTargetID(PN532_MIFARE_ISO14443A, &uid[0], &uidLength);\n\n  if (success) {\n    Serial.println("Found A Card!");\n    digitalWrite(ledPin, HIGH);\n    Serial.print("UID Length: ");Serial.print(uidLength, DEC);Serial.println(" bytes");\n    Serial.print("UID Value: ");\n\n    for (uint8_t i=0; i < uidLength; i++) {\n      Serial.print(" ");Serial.print(uid[i], DEC);\n    }\n\n    Serial.println("");\n    // 2 second halt\n    delay(1000);\n    digitalWrite(ledPin, LOW);\n  }\n\n\n}\n')),(0,a.kt)("h2",{id:"output"},"Output"),(0,a.kt)("p",null,"Serial Monitor will display the ID number that is received from the Card or key that was scaned."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(50444).Z,width:"273",height:"300"}),"  ",(0,a.kt)("img",{src:n(8816).Z,width:"277",height:"300"})," "))}u.isMDXComponent=!0},18067:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/2072(1)-39d78541b30ff13f3b386b0759c2589e.jpg"},82790:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/2072(2)-ab7edc75333286e4f74fa8d21db54741.jpg"},61552:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/2072(3)-47f9835c5b253fdd71636e58c42e8dec.jpg"},27958:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/2072(4)-777f07c91a408477a209f5d941a18dbe.jpg"},1478:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/2072(5)-2852724663f4d053b86076560cf6ea8f.jpg"},50444:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/2072(6)-47043d6e5b319540de4b2efcd85eca5b.jpg"},8816:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/2072(7)-c0045d770a312aa0befc646a9d4daa45.jpg"}}]);