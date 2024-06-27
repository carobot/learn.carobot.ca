"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8340],{30636:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var i=r(74848),n=r(28453);const o={title:"TinkerKit LCD Serial",sidebar_position:4,slug:"tinkerkit-lcd-tutorial-03-lcd-serial"},l="TinkerKit Arduino LCD - LCD Serial",a={id:"tinkerkit/tinkerkit-lcd-3",title:"TinkerKit LCD Serial",description:"In this tutorial we use the TinkerKit LCD module from the Serial port of the TinkerKit! shield.",source:"@site/docs/tinkerkit/tinkerkit-lcd-3.md",sourceDirName:"tinkerkit",slug:"/tinkerkit/tinkerkit-lcd-tutorial-03-lcd-serial",permalink:"/learn.carobot.ca/tinkerkit/tinkerkit-lcd-tutorial-03-lcd-serial",draft:!1,unlisted:!1,editUrl:"https://github.com/carobot/learn.carobot.ca/tree/main/docs/tinkerkit/tinkerkit-lcd-3.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"TinkerKit LCD Serial",sidebar_position:4,slug:"tinkerkit-lcd-tutorial-03-lcd-serial"},sidebar:"tutorialSidebar",previous:{title:"Introduction to TinkerKit LCD",permalink:"/learn.carobot.ca/tinkerkit/tinkerkit-lcd-tutorial-02-introduction-to-lcd"},next:{title:"TinkerKit LCD Local (No Arduino)",permalink:"/learn.carobot.ca/tinkerkit/tinkerkit-lcd-tutorial-04-lcd-local-no-arduino"}},s={},d=[{value:"Verify Requirement",id:"verify-requirement",level:2},{value:"Connect the TinkerKit LCD",id:"connect-the-tinkerkit-lcd",level:2},{value:"Read Input and More Code",id:"read-input-and-more-code",level:2}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"tinkerkit-arduino-lcd---lcd-serial",children:"TinkerKit Arduino LCD - LCD Serial"}),"\n",(0,i.jsxs)(t.p,{children:["In this tutorial we use the ",(0,i.jsx)(t.a,{href:"https://www.canadarobotix.com/products/1654",children:"TinkerKit LCD module"})," from the Serial port of the TinkerKit! shield."]}),"\n",(0,i.jsx)(t.h2,{id:"verify-requirement",children:"Verify Requirement"}),"\n",(0,i.jsxs)(t.p,{children:["First of all let\u2019s get all the tools we need: the ",(0,i.jsx)(t.a,{href:"https://github.com/carobot/TKLCD-Library",children:"TKLCD library"})," and a ",(0,i.jsx)(t.a,{href:"https://www.canadarobotix.com/products/1168",children:"four-connectors wire"})," or ",(0,i.jsx)(t.a,{href:"https://www.canadarobotix.com/products/1872",children:"4-pin jumper wire (Molex KK 2.54mm)"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["To connect the LCD to the shield, we need a ",(0,i.jsx)(t.a,{href:"https://www.canadarobotix.com/products/1168",children:"four-connectors wire"})," or ",(0,i.jsx)(t.a,{href:"https://www.canadarobotix.com/products/1872",children:"4-pin jumper wire (Molex KK 2.54mm)"}),"; in fact it has four holes like the serial port, one more than the regular TinkerKit! connectors."]}),"\n",(0,i.jsxs)(t.p,{children:["The TKLCD library is available ",(0,i.jsx)(t.a,{href:"https://github.com/carobot/TKLCD-Library",children:"here"}),"; if you don\u2019t remember how to install a library, here\u2019s a brief summary:"]}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"unzip the downloaded file"}),"\n",(0,i.jsxs)(t.li,{children:["move the TKLCD folder inside the \u201clibraries\u201d folder, usually located in ",(0,i.jsx)(t.strong,{children:"Documents\\Arduino\\libraries"})," (if it\u2019s not there, just create it)"]}),"\n",(0,i.jsx)(t.li,{children:"close the Arduino software, if it\u2019s open, then relaunch it"}),"\n",(0,i.jsx)(t.li,{children:"to verify the installation, open the software and from the top menu click on sketch->import library. You should be able to see the TKLCD element in the list"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"With this library we can generally work with the module, both as independent or connected to the TinkerKit! shield through the serial port. We want to use it with the serial, so we have to do one more step: upload the firmware."}),"\n",(0,i.jsx)(t.p,{children:"The firmware is nothing more than a particular Arduino sketch and it\u2019s inside the examples of the TKLCD library. You can open it from File->Examples->TKLCD->SerialFirmware Mind that this firmware must be uploaded on the LCD module, and not on the Arduino Board. Connect the module using the USB cable, (the Arduino software recognizes it as an Arduino Leonardo) then load the firmware. You don\u2019t have to upload the firmware every time, just remember to reload it if you upload something else on the module, and then you want to use it again from the serial."}),"\n",(0,i.jsx)(t.h2,{id:"connect-the-tinkerkit-lcd",children:"Connect the TinkerKit LCD"}),"\n",(0,i.jsx)(t.p,{children:"Now, connect the LCD module to the TinkerKit! shield\u2019s SERIAL port and let\u2019s see what we can do with this module."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:r(70500).A+"",width:"734",height:"489"})}),"\n",(0,i.jsx)(t.p,{children:"First of all we have to include all the libraries required by the LCD module: TKLCD, LiquidCrystal and Wire. The last two don\u2019t need to be downloaded, they\u2019re included in the Arduino software and are selectable just like the other libraries from Sketch->Import Library. Now create a LCD object in the globals, like every other module."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-c",children:"TKLCD_Serial lcd = TKLCD_Serial();\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Then we have to initialize it in the ",(0,i.jsx)(t.code,{children:"setup()"}),":"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-c",children:"lcd.begin();\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Let\u2019s start by writing something on our LCD screen: inside the ",(0,i.jsx)(t.code,{children:"setup()"})," write"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-c",children:'lcd.print("Hello World!");\n'})}),"\n",(0,i.jsx)(t.p,{children:"and load it into the Arduino, you should see this on the LCD:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:r(47811).A+"",width:"238",height:"117"})}),"\n",(0,i.jsxs)(t.p,{children:["Every time that we want to print something new on the screen, we have to \u201crefresh\u201d it with the ",(0,i.jsx)(t.code,{children:"clear()"})," function. To write \u201cHello World!\u201d but with the two words alternating every second on the screen, we have to type:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-c",children:'lcd.clear();\r\nlcd.print("Hello");\r\ndelay(1000);\r\n\r\nlcd.clear();\r\nlcd.print("World!");\r\ndelay(1000);\n'})}),"\n",(0,i.jsx)(t.h2,{id:"read-input-and-more-code",children:"Read Input and More Code"}),"\n",(0,i.jsx)(t.p,{children:"Now let\u2019s use it to read the value of an input. Connect a light sensor to the TinkerKit! shield, then we\u2019ll use the LCD screen to read its values. Don\u2019t forget to include the normal TinkerKit! Library if you\u2019re using modules other than the LCD."}),"\n",(0,i.jsx)(t.p,{children:"Our loop function is now:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-c",children:'//read the light sensor\r\nint val = ldr.read();\r\n \r\n//print the values on the lcd\r\nlcd.clear();\r\nlcd.print("Light: ")\r\nlcd.print(val);\r\ndelay(20);\n'})}),"\n",(0,i.jsxs)(t.p,{children:["Now take a look at all the ",(0,i.jsx)(t.a,{href:"https://github.com/carobot/TKLCD-Library/tree/master/TKLCD/examples",children:"examples"})," included in the ",(0,i.jsx)(t.a,{href:"https://github.com/carobot/TKLCD-Library",children:"TKLCD library"})," to discover more functions."]})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},47811:(e,t,r)=>{r.d(t,{A:()=>i});const i=r.p+"assets/images/hello-world-9707c31a83cb98759ac7398df9f5f1a8.jpg"},70500:(e,t,r)=>{r.d(t,{A:()=>i});const i=r.p+"assets/images/ways-1-0b20e92035be7a800868905b91653efc.jpg"},28453:(e,t,r)=>{r.d(t,{R:()=>l,x:()=>a});var i=r(96540);const n={},o=i.createContext(n);function l(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);