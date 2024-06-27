"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7850],{50963:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var t=r(74848),i=r(28453);const l={sidebar_position:12},o="MAX7219 LED Matrix",s={id:"UNO-R4-Starter-Kit/MAX7219-LED-Matrix",title:"MAX7219 LED Matrix",description:"The MAX7219 is an integrated serial input/output common-cathode display driver that connects your microcontroller to a 8-digit 7-segment digital LED display or a 8x8 LED matrix. It is especially useful when you need to control a large number of LEDs with minimal pin usage. In this tutorial, we will learn how to set up and use the MAX7219 LED matrix module with an Arduino.",source:"@site/docs/UNO-R4-Starter-Kit/MAX7219-LED-Matrix.md",sourceDirName:"UNO-R4-Starter-Kit",slug:"/UNO-R4-Starter-Kit/MAX7219-LED-Matrix",permalink:"/learn.carobot.ca/UNO-R4-Starter-Kit/MAX7219-LED-Matrix",draft:!1,unlisted:!1,editUrl:"https://github.com/carobot/learn.carobot.ca/tree/main/docs/UNO-R4-Starter-Kit/MAX7219-LED-Matrix.md",tags:[],version:"current",sidebarPosition:12,frontMatter:{sidebar_position:12},sidebar:"tutorialSidebar",previous:{title:"IR Receiver Module",permalink:"/learn.carobot.ca/UNO-R4-Starter-Kit/IR-Receiver"},next:{title:"GY-521 Module",permalink:"/learn.carobot.ca/UNO-R4-Starter-Kit/GY-521-Module"}},a={},d=[{value:"Materials",id:"materials",level:2},{value:"Instructions",id:"instructions",level:2},{value:"Connections",id:"connections",level:4}];function c(e){const n={code:"code",h1:"h1",h2:"h2",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"max7219-led-matrix",children:"MAX7219 LED Matrix"}),"\n",(0,t.jsx)(n.p,{children:"The MAX7219 is an integrated serial input/output common-cathode display driver that connects your microcontroller to a 8-digit 7-segment digital LED display or a 8x8 LED matrix. It is especially useful when you need to control a large number of LEDs with minimal pin usage. In this tutorial, we will learn how to set up and use the MAX7219 LED matrix module with an Arduino."}),"\n",(0,t.jsx)(n.h2,{id:"materials",children:"Materials"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Component"}),(0,t.jsx)(n.th,{children:"Image"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Breadboard"}),(0,t.jsx)(n.td,{children:(0,t.jsx)("img",{src:"/img/docs/UNO-R4-Starter-Kit/breadboard.webp",width:"200",height:"150"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Jumper wires"}),(0,t.jsx)(n.td,{children:(0,t.jsx)("img",{src:"/img/docs/UNO-R4-Starter-Kit/jumper-wires.webp",width:"200",height:"150"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Arduino Uno R4 Minima"}),(0,t.jsx)(n.td,{children:(0,t.jsx)("img",{src:"/img/docs/UNO-R4-Starter-Kit/arduino-r4-minima.webp",width:"190",height:"150"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"MAX7219 Module"}),(0,t.jsx)(n.td,{children:(0,t.jsx)("img",{src:"/img/docs/UNO-R4-Starter-Kit/MAX7219-Module.jpg",width:"190",height:"150"})})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"instructions",children:"Instructions"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Make the following connections using the breadboard and jumper wires."}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"connections",children:"Connections"}),"\n",(0,t.jsx)(n.p,{children:"(MAX7219 to Arduino)"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Vcc to 5V"}),"\n",(0,t.jsx)(n.li,{children:"GND to GND"}),"\n",(0,t.jsx)(n.li,{children:"DIN to pin 12"}),"\n",(0,t.jsx)(n.li,{children:"CS to pin 11"}),"\n",(0,t.jsx)(n.li,{children:"CLK to pin 10"}),"\n"]}),"\n",(0,t.jsx)("img",{src:"/img/docs/UNO-R4-Starter-Kit/MAX7219-Module.png",width:"600",height:"300"}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Download the LedControl library from the Library Manager in the Arduino IDE."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Paste the following code into your main Arduino sketch:"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:'\r\n#include <LedControl.h>\r\n\r\nLedControl lc=LedControl(12,10,11,1);\r\n\r\n/* we always wait a bit between updates of the display */\r\nunsigned long delaytime1=500;\r\nunsigned long delaytime2=50;\r\nvoid setup() {\r\n  /*\r\n   The MAX72XX is in power-saving mode on startup,\r\n   we have to do a wakeup call\r\n   */\r\n  lc.shutdown(0,false);\r\n  /* Set the brightness to a medium values */\r\n  lc.setIntensity(0,8);\r\n  /* and clear the display */\r\n  lc.clearDisplay(0);\r\n}\r\n\r\n/*\r\n This method will display the characters for the\r\n word "Arduino" one after the other on the matrix. \r\n (you need at least 5x7 leds to see the whole chars)\r\n */\r\nvoid writeArduinoOnMatrix() {\r\n  /* here is the data for the characters */\r\n  byte a[5]={B01111110,B10001000,B10001000,B10001000,B01111110};\r\n  byte r[5]={B00010000,B00100000,B00100000,B00010000,B00111110};\r\n  byte d[5]={B11111110,B00010010,B00100010,B00100010,B00011100};\r\n  byte u[5]={B00111110,B00000100,B00000010,B00000010,B00111100};\r\n  byte i[5]={B00000000,B00000010,B10111110,B00100010,B00000000};\r\n  byte n[5]={B00011110,B00100000,B00100000,B00010000,B00111110};\r\n  byte o[5]={B00011100,B00100010,B00100010,B00100010,B00011100};\r\n\r\n  /* now display them one by one with a small delay */\r\n  lc.setRow(0,0,a[0]);\r\n  lc.setRow(0,1,a[1]);\r\n  lc.setRow(0,2,a[2]);\r\n  lc.setRow(0,3,a[3]);\r\n  lc.setRow(0,4,a[4]);\r\n  delay(delaytime1);\r\n  lc.setRow(0,0,r[0]);\r\n  lc.setRow(0,1,r[1]);\r\n  lc.setRow(0,2,r[2]);\r\n  lc.setRow(0,3,r[3]);\r\n  lc.setRow(0,4,r[4]);\r\n  delay(delaytime1);\r\n  lc.setRow(0,0,d[0]);\r\n  lc.setRow(0,1,d[1]);\r\n  lc.setRow(0,2,d[2]);\r\n  lc.setRow(0,3,d[3]);\r\n  lc.setRow(0,4,d[4]);\r\n  delay(delaytime1);\r\n  lc.setRow(0,0,u[0]);\r\n  lc.setRow(0,1,u[1]);\r\n  lc.setRow(0,2,u[2]);\r\n  lc.setRow(0,3,u[3]);\r\n  lc.setRow(0,4,u[4]);\r\n  delay(delaytime1);\r\n  lc.setRow(0,0,i[0]);\r\n  lc.setRow(0,1,i[1]);\r\n  lc.setRow(0,2,i[2]);\r\n  lc.setRow(0,3,i[3]);\r\n  lc.setRow(0,4,i[4]);\r\n  delay(delaytime1);\r\n  lc.setRow(0,0,n[0]);\r\n  lc.setRow(0,1,n[1]);\r\n  lc.setRow(0,2,n[2]);\r\n  lc.setRow(0,3,n[3]);\r\n  lc.setRow(0,4,n[4]);\r\n  delay(delaytime1);\r\n  lc.setRow(0,0,o[0]);\r\n  lc.setRow(0,1,o[1]);\r\n  lc.setRow(0,2,o[2]);\r\n  lc.setRow(0,3,o[3]);\r\n  lc.setRow(0,4,o[4]);\r\n  delay(delaytime1);\r\n  lc.setRow(0,0,0);\r\n  lc.setRow(0,1,0);\r\n  lc.setRow(0,2,0);\r\n  lc.setRow(0,3,0);\r\n  lc.setRow(0,4,0);\r\n  delay(delaytime1);\r\n}\r\n\r\n/*\r\n  This function lights up a some Leds in a row.\r\n The pattern will be repeated on every row.\r\n The pattern will blink along with the row-number.\r\n row number 4 (index==3) will blink 4 times etc.\r\n */\r\nvoid rows() {\r\n  for(int row=0;row<8;row++) {\r\n    delay(delaytime2);\r\n    lc.setRow(0,row,B10100000);\r\n    delay(delaytime2);\r\n    lc.setRow(0,row,(byte)0);\r\n    for(int i=0;i<row;i++) {\r\n      delay(delaytime2);\r\n      lc.setRow(0,row,B10100000);\r\n      delay(delaytime2);\r\n      lc.setRow(0,row,(byte)0);\r\n    }\r\n  }\r\n}\r\n\r\n/*\r\n  This function lights up a some Leds in a column.\r\n The pattern will be repeated on every column.\r\n The pattern will blink along with the column-number.\r\n column number 4 (index==3) will blink 4 times etc.\r\n */\r\nvoid columns() {\r\n  for(int col=0;col<8;col++) {\r\n    delay(delaytime2);\r\n    lc.setColumn(0,col,B10100000);\r\n    delay(delaytime2);\r\n    lc.setColumn(0,col,(byte)0);\r\n    for(int i=0;i<col;i++) {\r\n      delay(delaytime2);\r\n      lc.setColumn(0,col,B10100000);\r\n      delay(delaytime2);\r\n      lc.setColumn(0,col,(byte)0);\r\n    }\r\n  }\r\n}\r\n\r\n/* \r\n This function will light up every Led on the matrix.\r\n The led will blink along with the row-number.\r\n row number 4 (index==3) will blink 4 times etc.\r\n */\r\nvoid single() {\r\n  for(int row=0;row<8;row++) {\r\n    for(int col=0;col<8;col++) {\r\n      delay(delaytime2);\r\n      lc.setLed(0,row,col,true);\r\n      delay(delaytime2);\r\n      for(int i=0;i<col;i++) {\r\n        lc.setLed(0,row,col,false);\r\n        delay(delaytime2);\r\n        lc.setLed(0,row,col,true);\r\n        delay(delaytime2);\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\nvoid loop() { \r\n  writeArduinoOnMatrix();\r\n  rows();\r\n  columns();\r\n  single();\r\n}\n'})}),"\n",(0,t.jsxs)(n.ol,{start:"4",children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Connect your Arduino to your laptop using a USB-C cable and upload the code to the arduino."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Test!"}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>s});var t=r(96540);const i={},l=t.createContext(i);function o(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);