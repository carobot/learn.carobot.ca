"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1457],{22258:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>a,toc:()=>d});var i=s(74848),r=s(28453);const t={title:"Soil Moisture Sensor Module (Resistance)",sidebar_position:8},o="How to use a Soil Moisture Sensor (Resistance)",a={id:"soil-moisture-sensor-resistive",title:"Soil Moisture Sensor Module (Resistance)",description:"The Soil Moisture Sensor Module (Resistance) consists of two probes which are used to measure the volumetric content of water. The two probes allow the current to pass through and then it gets the resistance value to measure the moisture value. However, the major issue with resistive soil moisture sensor is the corrosion of the sensor probes. it is because it is in contact with the soil while there is also a DC current flowing which causes electrolysis of the sensors.",source:"@site/guide/2638-soil-moisture-sensor-resistive.md",sourceDirName:".",slug:"/soil-moisture-sensor-resistive",permalink:"/guide/soil-moisture-sensor-resistive",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"Soil Moisture Sensor Module (Resistance)",sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Infrared Extra-Long-Range Proximity Sensor",permalink:"/guide/Extra-Long-Range-Proximity-Sensor"},next:{title:"Soil Moisture Sensor Module (Capacitive)",permalink:"/guide/soil-poisture-sensor-capacitive"}},l={},d=[{value:"Wiring",id:"wiring",level:2},{value:"Parts",id:"parts",level:2},{value:"Wiring Guide",id:"wiring-guide",level:2},{value:"Programming",id:"programming",level:2},{value:"Full Code",id:"full-code",level:2},{value:"Final Build",id:"final-build",level:2},{value:"Full Code",id:"full-code-1",level:2},{value:"Output",id:"output",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"how-to-use-a-soil-moisture-sensor-resistance",children:"How to use a Soil Moisture Sensor (Resistance)"}),"\n",(0,i.jsx)(n.p,{children:"The Soil Moisture Sensor Module (Resistance) consists of two probes which are used to measure the volumetric content of water. The two probes allow the current to pass through and then it gets the resistance value to measure the moisture value. However, the major issue with resistive soil moisture sensor is the corrosion of the sensor probes. it is because it is in contact with the soil while there is also a DC current flowing which causes electrolysis of the sensors."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(95898).A+"",width:"468",height:"444"})}),"\n",(0,i.jsx)(n.p,{children:"In this article, we will talk about how to wire and set up the module for operation with an Arduino Board."}),"\n",(0,i.jsx)(n.h2,{id:"wiring",children:"Wiring"}),"\n",(0,i.jsxs)(n.p,{children:["Most soil moisture sensor module operates between 3.3V to 5V and produce an analog output. For this project, we will be using ",(0,i.jsx)(n.a,{href:"https://www.canadarobotix.com/2638",children:"Soil Moisture Sensor Module (Resistance)"}),", the one we carry in our shop."]}),"\n",(0,i.jsx)(n.h2,{id:"parts",children:"Parts"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://www.canadarobotix.com/2638",children:"Soil Moisture Sensor Module (Resistance)"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://www.canadarobotix.com/products/60",children:"Arduino Uno R3"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://www.canadarobotix.com/products/922",children:"Jumper wires"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://www.arduino.cc/en/software",children:"Arduino IDE"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"wiring-guide",children:"Wiring Guide"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Step 1:"})," Connect the pins the female to female jumper wires"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(8286).A+"",width:"480",height:"390"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Step 2:"})," Connect the other female heads to the amplifier"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.img,{src:s(94037).A+"",width:"480",height:"208"}),"\r\n",(0,i.jsx)(n.img,{src:s(58124).A+"",width:"367",height:"430"})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Step 3:"})," Connect the pins on the amplifier with female to female jumper wires"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.img,{src:s(18019).A+"",width:"480",height:"233"}),"\r\n",(0,i.jsx)(n.img,{src:s(70266).A+"",width:"480",height:"131"})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Step 4:"})," Connect the amplifier to Arduino Board."]}),"\n",(0,i.jsx)(n.p,{children:"First, connect the other female head end with a male to male jumper wires."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(91377).A+"",width:"480",height:"280"})}),"\n",(0,i.jsx)(n.p,{children:"Then, connect to Arduino Board."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Amplifier ",(0,i.jsx)(n.strong,{children:"GND"})," -- Arduino ",(0,i.jsx)(n.strong,{children:"GND"})," pin"]}),"\n",(0,i.jsxs)(n.li,{children:["Amplifier ",(0,i.jsx)(n.strong,{children:"VCC"})," -- Arduino ",(0,i.jsx)(n.strong,{children:"VCC"})," pin"]}),"\n",(0,i.jsxs)(n.li,{children:["Amplifier ",(0,i.jsx)(n.strong,{children:"A0"})," -- Arduino ",(0,i.jsx)(n.strong,{children:"A0"})," pin"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.img,{src:s(81160).A+"",width:"480",height:"315"}),"\r\n",(0,i.jsx)(n.img,{src:s(11007).A+"",width:"480",height:"235"})]}),"\n",(0,i.jsx)(n.h2,{id:"programming",children:"Programming"}),"\n",(0,i.jsx)(n.p,{children:"Before we get the accurate value for result, we need to know what are the values when the sensor is in water and when it is dry. If you want to skip the steps and jump to the Final Build."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Step 1:"})," Create a variable for storing the sensor's output"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:"int value = 0;\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Step 2:"})," Set up serial communication between Arduino and the sensor."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:"void setup(){\r\n  Serial.begin(9600);\r\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Step 3:"})," Read the sensor's output"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:"void loop(){\r\n  value = analogRead(A0);\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Step 4:"})," Print out the value and wait for half a second for the next reading."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:"  Serial.println(value);\r\n  delay(500);\r\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"full-code",children:"Full Code"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:"int value = 0;\r\n\r\nvoid setup(){\r\n  Serial.begin(9600);\r\n}\r\n\r\nvoid loop(){\r\n  value = analogRead(A0);\r\n  Serial.println(value);\r\n  delay(500);\r\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"Now that you can measure the threshold values for the sensor. The values will vary depending on the water level."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Step 1:"})," Put the sensor in a dry spot and record the highest value. I got 1023 in this example."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(14070).A+"",width:"480",height:"354"})}),"\n",(0,i.jsx)(n.p,{children:"Serial Monitor:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(5628).A+"",width:"35",height:"160"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Step 2:"})," Put the sensor in a cup of water and record the lowest value. I got 352 in this example."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(41541).A+"",width:"354",height:"466"})}),"\n",(0,i.jsx)(n.p,{children:"Serial Monitor:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(13710).A+"",width:"32",height:"159"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Step 3:"})," Wipe down the water on the sensor."]}),"\n",(0,i.jsx)(n.h2,{id:"final-build",children:"Final Build"}),"\n",(0,i.jsx)(n.p,{children:"Now that we know the values when the sensor is in water and when it is not. We can use those values as the threshold and determine the moistness percentage with the map function on Arduino. If you want to skip the steps and jump to the Full Code."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Step 1:"})," Create variables to store the threshold values, sensor's output and percentage result."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:"const int dry = 1023;\r\nconst int wet = 352;\r\nint value = 0;\r\nint percentage = 0;\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Step 2:"})," Set up serial communication between Arduino and the sensor."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:"void setup(){\r\n  Serial.begin(9600);\r\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Step 3:"})," Read the sensor's output."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:"void loop(){\r\n  value = analogRead(A0);\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Step 4:"})," Use map function to change the range from the two threshold values to be from 0 to 100."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:"percentage = map(value, dry, wet, 0, 100);\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Step 5:"})," Print message according to the percentage, and wait for half a second for next reading."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:'if (percentage >= 100){\r\n    Serial.println("100%");\r\n  }\r\n  else if (percentage <= 0){\r\n    Serial.println("0%");\r\n  }\r\n  else {\r\n    Serial.print(percentage);\r\n    Serial.println("%");\r\n  }\r\n  delay(500);\r\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"full-code-1",children:"Full Code"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:'const int dry = 1023;\r\nconst int wet = 352;\r\nint value = 0;\r\nint percentage = 0;\r\n\r\nvoid setup(){\r\n  Serial.begin(9600);\r\n}\r\n\r\nvoid loop(){\r\n  value = analogRead(A0);\r\n  percentage = map(value, dry, wet, 0, 100);\r\n  if (percentage >= 100){\r\n    Serial.println("100%");\r\n  }\r\n  else if (percentage <= 0){\r\n    Serial.println("0%");\r\n  }\r\n  else {\r\n    Serial.print(percentage);\r\n    Serial.println("%");\r\n  }\r\n  delay(500);\r\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"output",children:"Output"}),"\n",(0,i.jsx)(n.p,{children:"When it is in the water"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(13207).A+"",width:"51",height:"114"})}),"\n",(0,i.jsx)(n.p,{children:"When it is not in the water"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(91064).A+"",width:"43",height:"163"})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},95898:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/2638_01-8e21fb1f75959eed85fd89a8ac5d9459.jpg"},8286:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/2638_01-9e28cf92fcb084b9a616079295238951.png"},94037:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/2638_02-50663ecae2a51ec3afc662ae630e5042.png"},58124:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/2638_03-b4a6f941427aaad22e3ff037c35d4ee1.png"},18019:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/2638_04-c5272d7e5092e6b3950a5b6007fad8fa.png"},70266:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/2638_05-93f80fa0ce1d4a93a553ae3162c46f94.png"},91377:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/2638_06-2c412e7d09f6b993772b6b299aaa2745.png"},81160:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/2638_07-730189c1d522280e891ebc4539b2e714.png"},11007:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/2638_08-2da35af593555fe773645abdec20a86f.png"},14070:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/2638_09-d777b1dca68daf94507cfc5aa6bccc2c.png"},5628:(e,n,s)=>{s.d(n,{A:()=>i});const i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAACgCAYAAACG/dUvAAABC2lDQ1BpY2MAABiVY2BgXJGTnFvMJMDAkJtXUhTk7qQQERmlwH6HgZFBkoGZQZPBMjG5uMAxIMCHASf4do2BEURf1gWZxUAa4ExJLU5mYGD4wMDAEJ9cUFTCwMAIsounvKQAxI5gYGAQKYqIjGJgYMwBsdMh7AYQOwnCngJWExLkzMDAyMPAwOCQjsROQmJD7QIB1mSj5ExkhySXFpVBmVIMDAynGU8yJ7NO4sjm/iZgLxoobaL4UXOCkYT1JDfWwPLYt9kFVaydG2fVrMncX3v58EuD//9LUitKQJqdnQ0YQGGIHjYIsfxFDAwWXxkYmCcgxJJmMjBsb2VgkLiFEFNZwMDA38LAsO08APD9TdvF8UZ0AAAACXBIWXMAAAsSAAALEgHS3X78AAADeElEQVR42u3WPUjrehgG8KeHSJp+gVAQ1AouKlWouIjgIEo37dIKddLB0U2sY0UR1MFBQTdBdHESUXDToXRQQSkBq4MoESqKUtpSg/TjOdMpt9d7TwuXC2d4X8jyzz/hSd6Q92chSfwh9QN/UNUVJpfLIR6P4+3t7du5p6cnnJ+f4+7uDuVyubJeKpWg6zpisRheX1/rS0OS7+/vnJmZoaIoXFpa4l9rf3+fVquV3d3d1DSN8/PzJMlSqcSenh56PB729fVRVVX6/X5+fX3RNE3a7Xa2tLSwvb2diqJwa2uLtQok6fF4ODExQa/XWxXm+fmZDQ0NPDg4IEnu7e0RAE9PT1kul5lMJit7Ly8vCYCxWIzlcpmpVKpybnl5mY2NjSwWi7XDZDIZkuTw8HBVmLW1Nba2tpIkC4UCfT4fNU1jOBz+dqONjQ3a7Xbmcrmq9c/PTwaDQfb29tZ8Mz8AwOVy/WMLDcNAZ2cnAGB1dRVOpxPT09MwDKNqXzweRyQSwe7uLhwOBwAgkUjA7/fD7XYjHo/j+Pj4v33A2WwWLpcLyWQSKysr2N7ehqZpyGazlT26riMQCCAajSIYDFbWm5qaEA6HMTs7C0VRMD4+DtM0a3/Av+rvbZqbm2N/fz8HBgYYiURIkmNjYxwZGSFJGobB5uZmRqPR377+q6srAuDOzk7tNv1bdXV14eLiAqlUCtFoFABwe3tbad3U1BQGBwexsLDw2wf2+XxwOp34+Pio3aZsNotMJoNCoQDTNJHJZGCaJkKhEGw2GwKBAGw2G46OjvDw8IDJyUk8Pj7i7OwMo6OjuL+/rxzpdBovLy84OTmBaZooFovY3NxEPp/H0NBQ7TZZrVYCqDpCoRBJ8vDwkKqqsq2tjRaLhYuLiyTJ6+vrb9cA4Pr6Om9ubqgoCjVNo9vtpsPhqOs/Y6lnNuXzeSQSCXR0dMDtdtf1M02n09B1Haqqwuv1wul01rzGIoNSwohnxDPiGfGMeEY8I56RqS1hxDPiGfGMeEY8I54Rz8jUljDiGfGMeEY8I54Rz4hnJIyEEc+IZ8Qz4hnxjHhGBqWEEc+IZ8Qz4hnxjHhGPCNTW8KIZ8Qz4hnxjHhGPCOekaktYcQz4hnxjHhGPCOeEc9IGAkjnhHPiGfEM+IZ8YwMSgkjnhHPiGfEM+IZ8Yx4Rqb2/1M/AcIB/gqCGB9JAAAAAElFTkSuQmCC"},41541:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/2638_11-213d44ef29aec260a9c3ae9c55653f09.png"},13710:(e,n,s)=>{s.d(n,{A:()=>i});const i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAACfCAYAAACY5ttUAAABC2lDQ1BpY2MAABiVY2BgXJGTnFvMJMDAkJtXUhTk7qQQERmlwH6HgZFBkoGZQZPBMjG5uMAxIMCHASf4do2BEURf1gWZxUAa4ExJLU5mYGD4wMDAEJ9cUFTCwMAIsounvKQAxI5gYGAQKYqIjGJgYMwBsdMh7AYQOwnCngJWExLkzMDAyMPAwOCQjsROQmJD7QIB1mSj5ExkhySXFpVBmVIMDAynGU8yJ7NO4sjm/iZgLxoobaL4UXOCkYT1JDfWwPLYt9kFVaydG2fVrMncX3v58EuD//9LUitKQJqdnQ0YQGGIHjYIsfxFDAwWXxkYmCcgxJJmMjBsb2VgkLiFEFNZwMDA38LAsO08APD9TdvF8UZ0AAAACXBIWXMAAAsSAAALEgHS3X78AAAC3ElEQVR42u3WzUsqURgG8MdpUBudhRWUVkQEEhEkQtDCZa36J/pHpDbRqjaBq2jRLqhVbaNFLURBxegDF/YFtslyk1KOPq0a7sUWGhda3OeFA4c5zPCcOcw7Pw9J4hfLwC+X+TVptVq4urpCrVZDNBrF8PBw1w+5u7vD7e0twuEwotEoDKOHfZFko9FgIBDg6OgoJycnaZomU6kUv8rv9xPAX+Pk5IStVouzs7McHx9nPB6nz+fj0tIS39/f2W2BJNvtNiuVintxfX2doVCIjuO4AQ4PD/n8/OyOZrPJdrvN6+tr975MJkMAPDs76zqACQAejwfhcBgA0Gg0kMvlMDExgb6+PvdNeb1eDA4OdrzB6elpd55OpxEIBBCLxXo7ApIsFApcXFykZVkcGRnh4+NjxxHYts3l5WXm8/mOnZyfn9Pv9/Pg4IC9lBvg6emJOzs7TCaTHBsb48LCAuv1OkmyWCzy9PSUqVSKU1NTDIVCvL+/dx9SLBY5MDDAjY0N9lr47mI2myUA7u7udqyl02kC4Pb2Nkny4eGBkUiEq6ur/El9+73Mzc3Btm1Uq9WOtfn5edi2DcdxAAArKytIJBJYW1v7WSMgyUqlwqOjI9brdTabTW5ubtIwDGazWVarVR4fH9NxHH58fDCZTNIwDF5eXrJcLhMA9/b2eHNz446Xl5fejiCfz9M0Tfb393NoaIjBYNDtA+VymZZl0ev10rIsBoNB7u/vkyRzuVxHfwDAra2trgN4vv4Fr6+vuLi4gM/nw8zMDGzbxp9dslQq4e3tDbFYDKZp/rNW7Pnvf0YKIA/IA/KAPCAPyAPygALIA/KAPCAPyAPygDygAPKAPCAPyAPygDwgDyiAPCAPyAPygDwgD8gDCiAPyAPygDwgD8gD8oACyAPygDwgD8gD8oA8oADygDwgD8gD8oA8IA8ogDwgD8gD8oA8IA/IAwogD8gD8oA8IA/IA/LAJ22cTJjaI+kzAAAAAElFTkSuQmCC"},13207:(e,n,s)=>{s.d(n,{A:()=>i});const i="data:image/png;base64,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"},91064:(e,n,s)=>{s.d(n,{A:()=>i});const i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAACjCAYAAAATvud1AAABC2lDQ1BpY2MAABiVY2BgXJGTnFvMJMDAkJtXUhTk7qQQERmlwH6HgZFBkoGZQZPBMjG5uMAxIMCHASf4do2BEURf1gWZxUAa4ExJLU5mYGD4wMDAEJ9cUFTCwMAIsounvKQAxI5gYGAQKYqIjGJgYMwBsdMh7AYQOwnCngJWExLkzMDAyMPAwOCQjsROQmJD7QIB1mSj5ExkhySXFpVBmVIMDAynGU8yJ7NO4sjm/iZgLxoobaL4UXOCkYT1JDfWwPLYt9kFVaydG2fVrMncX3v58EuD//9LUitKQJqdnQ0YQGGIHjYIsfxFDAwWXxkYmCcgxJJmMjBsb2VgkLiFEFNZwMDA38LAsO08APD9TdvF8UZ0AAAACXBIWXMAAAsSAAALEgHS3X78AAADMUlEQVR42u3YP0gyARzG8efsjbqoG1oOIhwrMByaijaXoCkiAsnNJiGiqVFwMmhoiZorkCYLomhoEQwcBA1JmoIK6Q9BmcQV5vNOJ+8LL7zLy/UePL/JweDHcf388jHK5TLD4TD8MIFWqwW/TCAQCPhnWZL+WdYwDP8+2be3N+TzeTw+Pv71j8/OzvDy8uLdtuVyme7s7e2xu7uboVCIpmlydXWVJHlwcMBQKMSpqSleX1+3vxsOh/n5+UmvBqVSiSR5e3vLzs5O7u/vkyR3d3cJgMfHxwwGg6xUKkylUlxeXub9/T1t22axWKSX074GmUwGtm1jfn4ezWYT6+vrME0TOzs7cBwHlmXBsiw4joNEIoF4PI6xsTFP39kf7jt7c3OD4eFhAMDa2hr6+vqwuLiIYrGIaDSKmZkZPDw8YHp6GldXV8hkMt/3D1av12FZFqrVKtLpNLa2tmCaJur1OjY2NrC5uYmjoyMcHh5iYmICCwsLyOVy3i7b0dEBALBtG7VaDfF4HIlEAqOjo6hWq7BtGwAwPj6OdDqNoaEh5HI5zM7OYm5uDs1m0/uf25GRERQKBdRqNSSTSQDA5eVl+9XIZrMolUqIRCKIRCKIRqPo7e1FpVLx/nS9vr6yp6eHS0tL7XMFgIVCgc/PzxwYGOD5+TlPTk44OTnJu7s79vf38+Pjw/vTRZLZbJZdXV0MBoM0DIOpVIokGYvFuLKyQpJ0HIexWIyDg4Pc3t729HT99qNAko1Gg/l8nk9PTyTJVqvF09NTvr+/87vH8FXPwkejZdWzf3qy6tl/dWcvLi7807NfX1/+6Vk3vn3Rs+4HX/Ssm4i+6Fk3vn3Rs+418EXP/npn//uedZ+selY+K5+Vz8pn5bPyWfmsfFY+K59Vz4o8tax8Vj0rn5XPymfls/JZ+ax8Vj4rn5XPymfls/JZ+ax8Vj4rn5Uialn1rHxWPiuflc/KZ+Wz8ln1rHxWPiufVc/KZ+Wz8ln5rHxWPiuf1bLyWfmsfFY+K5+Vz8pn5bPyWfmsfFY+K5+Vz8pn5bPyWfmsfFY+K0XUsupZ+ax8Vj4rn5XPymfls+pZ+ew3zk8x8zwn0q4+jwAAAABJRU5ErkJggg=="},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>a});var i=s(96540);const r={},t=i.createContext(r);function o(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);