"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1003],{4268:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>m});var t=n(74848),r=n(28453);const s={title:"Programming",sidebar_position:3},i="How to Program Chassis Robot Motors with Arduino",d={id:"chassis-robot/programming",title:"Programming",description:"Development Tools Needed",source:"@site/docs/2934-chassis-robot/programming.md",sourceDirName:"2934-chassis-robot",slug:"/chassis-robot/programming",permalink:"/chassis-robot/programming",draft:!1,unlisted:!1,editUrl:"https://github.com/carobot/learn.carobot.ca/tree/main/docs/2934-chassis-robot/programming.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Programming",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Wiring",permalink:"/chassis-robot/wiring"}},a={},m=[{value:"Development Tools Needed",id:"development-tools-needed",level:2},{value:"Programming",id:"programming",level:2},{value:"Full Code",id:"full-code",level:2},{value:"Next Steps",id:"next-steps",level:2}];function l(e){const o={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.RP)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.h1,{id:"how-to-program-chassis-robot-motors-with-arduino",children:"How to Program Chassis Robot Motors with Arduino"}),"\n",(0,t.jsx)(o.h2,{id:"development-tools-needed",children:"Development Tools Needed"}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsx)(o.li,{children:(0,t.jsx)(o.a,{href:"https://www.arduino.cc/en/software",children:"Arduino IDE"})}),"\n"]}),"\n",(0,t.jsx)(o.h2,{id:"programming",children:"Programming"}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.strong,{children:"Step 1:"})," Include the following libraries so we can communicate with the motors of the Chassis. Write out these variable which we will use later on in the program."]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-c",children:"#include <Wire.h>\n#include <Adafruit_MotorShield.h>\n\nint maxSpeed = 150;\nuint8_t i;\n"})}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.strong,{children:"Step 2:"})," Create an object for each motor so that we have an object to reference to when communicating with the motors"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-c",children:"// Create the motor shield object \nAdafruit_MotorShield AFMS = Adafruit_MotorShield(); \n\n// Create an object for each motor with a corresponding 1-4 in the \n// brackets to indicate which motor is which\nAdafruit_DCMotor *myMotor1 = AFMS.getMotor(1);\nAdafruit_DCMotor *myMotor2 = AFMS.getMotor(2);\nAdafruit_DCMotor *myMotor3 = AFMS.getMotor(3);\nAdafruit_DCMotor *myMotor4 = AFMS.getMotor(4);\n"})}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.strong,{children:"Step 3:"})," In the step up we will specify the speed and direction the motors of the chassis shall travel in\n",(0,t.jsx)(o.strong,{children:"NOTE:"})," the motors that will be the 'back' of the robot will have to set as moving backwards in order for the robot to travel forwards and vice versa to travel backwards."]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-c",children:"void setup(){\n  Serial.begin(9600); // access to serial monitor\n  \n  AFMS.begin();  // create with the default frequency 1.6KHz\n  \n  // Set the speed to start, from 0 (off) to 255 (max speed)\n  // Front wheel\n  myMotor1->setSpeed(150);\n  myMotor1->run(FORWARD);\n\n  // Back wheel\n  myMotor2->setSpeed(150);\n  myMotor2->run(BACKWARD);\n\n  // Back wheel\n  myMotor3->setSpeed(150);\n  myMotor3->run(BACKWARD);\n\n  // Front wheel\n  myMotor4->setSpeed(150);\n  myMotor4->run(FORWARD);\n\n  // turn on motor\n  myMotor1->run(RELEASE);\n  myMotor2->run(RELEASE);\n  myMotor3->run(RELEASE);\n  myMotor4->run(RELEASE);\n}\n\n"})}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.strong,{children:"Step 4:"})," Lets create functions for commands we want our robot to perform. Mess around with the value of 'i' in the for loops to change the degree the robot will turn."]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-c",children:"//MOVE FORWARDS\nvoid move_forward(){\n  //sets direction the motor should move\n  myMotor1->run(FORWARD);\n  myMotor2->run(BACKWARD);\n  myMotor3->run(BACKWARD);\n  myMotor4->run(FORWARD);\n  // runs motor at set speed\n  myMotor1->setSpeed(maxSpeed);  \n  myMotor2->setSpeed(maxSpeed);  \n  myMotor3->setSpeed(maxSpeed);  \n  myMotor4->setSpeed(maxSpeed);  \n  \n}\n\n//MOVE BACKWARDS\nvoid move_backward(){\n  //sets direction the motor should move\n  myMotor1->run(BACKWARD);\n  myMotor2->run(FORWARD);\n  myMotor3->run(FORWARD);\n  myMotor4->run(BACKWARD);\n  // runs motor at set speed\n  myMotor1->setSpeed(maxSpeed);  \n  myMotor2->setSpeed(maxSpeed);  \n  myMotor3->setSpeed(maxSpeed);  \n  myMotor4->setSpeed(maxSpeed);  \n}\n\n//TURN RIGHT\nvoid turn_right(){\n  myMotor1->run(BACKWARD);\n  myMotor2->run(FORWARD);\n  myMotor3->run(BACKWARD);\n  myMotor4->run(FORWARD);\n  // runs motor at set speed\n  for (i=0; i<maxSpeed; i++) {\n    myMotor1->setSpeed(i);  \n    myMotor2->setSpeed(i);  \n    myMotor3->setSpeed(i);  \n    myMotor4->setSpeed(i);  \n    delay(10);\n  }\n  // runs motor at set speed\n  for (i=maxSpeed; i!=0; i--) {\n    myMotor1->setSpeed(i);  \n    myMotor2->setSpeed(i);  \n    myMotor3->setSpeed(i);  \n    myMotor4->setSpeed(i);  \n    delay(10);\n  }\n}\n\n//TURN LEFT\nvoid turn_left(){\n  myMotor1->run(FORWARD);\n  myMotor2->run(BACKWARD);\n  myMotor3->run(FORWARD);\n  myMotor4->run(BACKWARD);\n  // runs motor at set speed\n  for (i=0; i<maxSpeed; i++) {\n    myMotor1->setSpeed(i);  \n    myMotor2->setSpeed(i);  \n    myMotor3->setSpeed(i);  \n    myMotor4->setSpeed(i);  \n    delay(10);\n  }\n  // runs motor at set speed\n  for (i=maxSpeed; i!=0; i--) {\n    myMotor1->setSpeed(i);  \n    myMotor2->setSpeed(i);  \n    myMotor3->setSpeed(i);  \n    myMotor4->setSpeed(i);  \n    delay(10);\n  }\n}\n"})}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.strong,{children:"Step 5:"})," Finally, we can now call our functions in the loop() method and have our robot move in a way we want."]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-c",children:"/// the robot will move forwards for 10 seconds and them will turn to the right\n// then the robot will move backwards for 5 seconds and then turn to the left\nvoid loop(){\n  move_forward();\n  delay(10000);//will run forwards for 10 seconds\n  turn_right();\n  move_backward();\n  delay(5000); // will run backwards for 5 seconds\n  turn_left();\n}\n"})}),"\n",(0,t.jsx)(o.h2,{id:"full-code",children:"Full Code"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-c",children:"#include <Wire.h>\n#include <Adafruit_MotorShield.h>\n\nint maxSpeed = 150;\nuint8_t i;\n\n// Create the motor shield object \nAdafruit_MotorShield AFMS = Adafruit_MotorShield(); \n\n// Create an object for each motor with a corresponding 1-4 in the \n// brackets to indicate which motor is which\nAdafruit_DCMotor *myMotor1 = AFMS.getMotor(1);\nAdafruit_DCMotor *myMotor2 = AFMS.getMotor(2);\nAdafruit_DCMotor *myMotor3 = AFMS.getMotor(3);\nAdafruit_DCMotor *myMotor4 = AFMS.getMotor(4);\n\nvoid setup(){\n  Serial.begin(9600); // access to serial monitor\n  \n  AFMS.begin();  // create with the default frequency 1.6KHz\n  \n  // Set the speed to start, from 0 (off) to 255 (max speed)\n  // Front wheel\n  myMotor1->setSpeed(150);\n  myMotor1->run(FORWARD);\n\n  // Back wheel\n  myMotor2->setSpeed(150);\n  myMotor2->run(BACKWARD);\n\n  // Back wheel\n  myMotor3->setSpeed(150);\n  myMotor3->run(BACKWARD);\n\n  // Front wheel\n  myMotor4->setSpeed(150);\n  myMotor4->run(FORWARD);\n\n  // turn on motor\n  myMotor1->run(RELEASE);\n  myMotor2->run(RELEASE);\n  myMotor3->run(RELEASE);\n  myMotor4->run(RELEASE);\n}\n\n//MOVE FORWARDS\nvoid move_forward(){\n  //sets direction the motor should move\n  myMotor1->run(FORWARD);\n  myMotor2->run(BACKWARD);\n  myMotor3->run(BACKWARD);\n  myMotor4->run(FORWARD);\n  // runs motor at set speed\n  myMotor1->setSpeed(maxSpeed);  \n  myMotor2->setSpeed(maxSpeed);  \n  myMotor3->setSpeed(maxSpeed);  \n  myMotor4->setSpeed(maxSpeed);  \n  \n}\n\n//MOVE BACKWARDS\nvoid move_backward(){\n  //sets direction the motor should move\n  myMotor1->run(BACKWARD);\n  myMotor2->run(FORWARD);\n  myMotor3->run(FORWARD);\n  myMotor4->run(BACKWARD);\n  // runs motor at set speed\n  myMotor1->setSpeed(maxSpeed);  \n  myMotor2->setSpeed(maxSpeed);  \n  myMotor3->setSpeed(maxSpeed);  \n  myMotor4->setSpeed(maxSpeed);  \n}\n\n//TURN RIGHT\nvoid turn_right(){\n  myMotor1->run(BACKWARD);\n  myMotor2->run(FORWARD);\n  myMotor3->run(BACKWARD);\n  myMotor4->run(FORWARD);\n  // runs motor at set speed\n  for (i=0; i<maxSpeed; i++) {\n    myMotor1->setSpeed(i);  \n    myMotor2->setSpeed(i);  \n    myMotor3->setSpeed(i);  \n    myMotor4->setSpeed(i);  \n    delay(10);\n  }\n  // runs motor at set speed\n  for (i=maxSpeed; i!=0; i--) {\n    myMotor1->setSpeed(i);  \n    myMotor2->setSpeed(i);  \n    myMotor3->setSpeed(i);  \n    myMotor4->setSpeed(i);  \n    delay(10);\n  }\n}\n\n//TURN LEFT\nvoid turn_left(){\n  myMotor1->run(FORWARD);\n  myMotor2->run(BACKWARD);\n  myMotor3->run(FORWARD);\n  myMotor4->run(BACKWARD);\n  // runs motor at set speed\n  for (i=0; i<maxSpeed; i++) {\n    myMotor1->setSpeed(i);  \n    myMotor2->setSpeed(i);  \n    myMotor3->setSpeed(i);  \n    myMotor4->setSpeed(i);  \n    delay(10);\n  }\n  // runs motor at set speed\n  for (i=maxSpeed; i!=0; i--) {\n    myMotor1->setSpeed(i);  \n    myMotor2->setSpeed(i);  \n    myMotor3->setSpeed(i);  \n    myMotor4->setSpeed(i);  \n    delay(10);\n  }\n}\n\n\n// the robot will move forwards for 10 seconds and them will turn to the right\n// then the robot will move backwards for 5 seconds and then turn to the left\nvoid loop(){\n  move_forward();\n  delay(10000);//will run forwards for 10 seconds\n  turn_right();\n  move_backward();\n  delay(5000); // will run backwards for 5 seconds\n  turn_left();\n}\n"})}),"\n",(0,t.jsx)(o.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,t.jsx)(o.p,{children:"Now that you have the basic functions needed to move your robot, you can try on your own to modify the code to make the robot move in different ways."})]})}function h(e={}){const{wrapper:o}={...(0,r.RP)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,o,n)=>{n.d(o,{RP:()=>s});var t=n(96540);const r=t.createContext({});function s(e){const o=t.useContext(r);return t.useMemo((()=>"function"==typeof e?e(o):{...o,...e}),[o,e])}}}]);