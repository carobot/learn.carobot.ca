"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7299],{53686:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>a,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var i=t(74848),s=t(28453);const r={title:"TFT LCD Touch Screen Module for Arduino",sidebar_position:1},o="How to use The TFT LCD Touch Screen Module for Arduino",l={id:"touch-screen-module",title:"TFT LCD Touch Screen Module for Arduino",description:"The TFT LCD Touch Screen Module for the Arduino is a version of a liquid crystal display(LCD) that uses thin film transistors(TFT) electronic that allows a user to create an interactable interface between the user and the system. As the name may suggest, this screen module has the touch screen function.",source:"@site/guide/2631-touch-screen-module.md",sourceDirName:".",slug:"/touch-screen-module",permalink:"/guide/touch-screen-module",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"TFT LCD Touch Screen Module for Arduino",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"1.3 inch I\xb2C OLED Display",permalink:"/guide/i2c-oled"},next:{title:"Rotary Encoder Module",permalink:"/guide/rotary-encoder-module"}},d={},c=[{value:"Wiring",id:"wiring",level:2},{value:"Parts",id:"parts",level:2},{value:"Wiring Guide",id:"wiring-guide",level:2},{value:"Programming",id:"programming",level:2},{value:"Full Code",id:"full-code",level:3},{value:"Example",id:"example",level:2},{value:"Full Code",id:"full-code-1",level:3},{value:"Output",id:"output",level:3},{value:"Touch Screen",id:"touch-screen",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"how-to-use-the-tft-lcd-touch-screen-module-for-arduino",children:"How to use The TFT LCD Touch Screen Module for Arduino"}),"\n",(0,i.jsx)(n.p,{children:"The TFT LCD Touch Screen Module for the Arduino is a version of a liquid crystal display(LCD) that uses thin film transistors(TFT) electronic that allows a user to create an interactable interface between the user and the system. As the name may suggest, this screen module has the touch screen function."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(28406).A+"",width:"500",height:"330"})}),"\n",(0,i.jsx)(n.h2,{id:"wiring",children:"Wiring"}),"\n",(0,i.jsxs)(n.p,{children:["This module is quite simple to use, due to the fact that no wires are required, all you have to do is to simply plug the display onto the Arduino Uno. Make sure that the side with more pins is being plugged into the side of the Arduino that has the numbers 0-13. In this guide, we will be using the ",(0,i.jsx)(n.a,{href:"https://www.canadarobotix.com/products/2631",children:'3.5" TFT LCD Touch Screen Module for Arduino'})," from the website."]}),"\n",(0,i.jsx)(n.h2,{id:"parts",children:"Parts"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://www.canadarobotix.com/products/2631",children:'3.5" TFT LCD Touch Screen Module for Arduino'})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://www.canadarobotix.com/products/60",children:"Arduino Uno R3"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://www.arduino.cc/en/software",children:"Arduino IDE"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"wiring-guide",children:"Wiring Guide"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Analog Pins"}),(0,i.jsx)(n.th,{children:"Digital Pins"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.img,{src:t(31488).A+"",width:"557",height:"242"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.img,{src:t(86523).A+"",width:"572",height:"238"})})]})})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"(Note: the pins are not fully pressed in order to show where each pin should go)"})}),"\n",(0,i.jsx)(n.p,{children:"Once the pins are in place, push down until the pins can no longer seen. That is the indication that the module has been properly placed."}),"\n",(0,i.jsx)(n.h2,{id:"programming",children:"Programming"}),"\n",(0,i.jsx)(n.p,{children:"The following code is to demonstrate how the Touch Screen Module works, if you want to skip these steps, yuo can jump to the Full Code."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Step 1:"})," Before we start coding, we first have to download the needed libraries."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(37522).A+"",width:"672",height:"246"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Step 2:"})," Enter ",(0,i.jsx)(n.code,{children:"Adafruit_GFX"}),", ",(0,i.jsx)(n.code,{children:"MCUFRIEND_kbv"})," and ",(0,i.jsx)(n.code,{children:"TouchScreen"})," in the search bar and install all three libraries."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Step 3:"})," Declare your libraries."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:"#include <Adafruit_GFX.h>\n#include <MCUFRIEND_kbv.h>\n#include <TouchScreen.h>\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Step 4:"})," Declare the pins which the LCD is connected to."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:"#define LCD_RD A0\n#define LCD_WR A1\n#define LCD_CD A2\n#define LCD_CS A3\n#define LCD_RESET A4\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"(Optional)"})," You can declare the colors with the corresponding HEX numbers."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:"#define BLACK   0x0000\n#define BLUE    0x001F\n#define RED     0xF800\n#define GREEN   0x07E0\n#define CYAN    0x07FF\n#define MAGENTA 0xF81F\n#define YELLOW  0xFFE0\n#define WHITE   0xFFFF\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Step 5:"})," Create an object using the MCUFRIEND_kbv library. in this case, it is named tft."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:"MCUFRIEND_kbv tft(LCD_CS, LCD_CD, LCD_WR, LCD_RD, LCD_RESET);\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Step 6:"})," We can start of by setting up the screen."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:"tft.reset(); //resets the hardware\ntft.begin(0x9486); //starts up the screen for ILI9486 IC\ntft.setRotation(1); //sets the rotation of the screen\n//The screen is now fully setup\n"})}),"\n",(0,i.jsx)(n.h3,{id:"full-code",children:"Full Code"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:"//Libraries\n#include <Adafruit_GFX.h>\n#include <MCUFRIEND_kbv.h>\n#include <TouchScreen.h>\n//Pins\n#define LCD_RD A0\n#define LCD_WR A1\n#define LCD_CD A2\n#define LCD_CS A3\n#define LCD_RESET A4\n//Colors\n#define BLACK   0x0000\n#define BLUE    0x001F\n#define RED     0xF800\n#define GREEN   0x07E0\n#define CYAN    0x07FF\n#define MAGENTA 0xF81F\n#define YELLOW  0xFFE0\n#define WHITE   0xFFFF\n\nvoid setup(){\n  tft.reset(); //resets the hardware\n  tft.begin(0x9481); //starts up the screen\n  tft.setRotation(1); //sets the rotation of the screen\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,i.jsx)(n.p,{children:"Here is a demonstration of the screen"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Step 1:"})," Let's start by filling the screen with your favorite colors! This will still be in ",(0,i.jsx)(n.code,{children:"setup()"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:"tft.fillScreen(GREEN);\ndelay(1000); //delay is put here so that we can fully see the colors\ntft.fillScreen(MAGENTA);\ndelay(1000);\ntft.fillScreen(BLUE);\ndelay(1000);\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Step 2:"})," Next, let's print in the classic ",(0,i.jsx)(n.code,{children:"Hello World!"})," on the top left corner of the screen. Note that the starting point of all objects are on the top left."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:'tft.setCursor(10, 10);\ntft.setTextColor(WHITE);\ntft.setTextSize(4);\ntft.print("Hello");\n\ntft.setCursor(150, 10);\ntft.setTextColor(WHITE);\ntft.setTextSize(4);\ntft.print("World!");\n'})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Step 3:"})," Finally, let's put in a blinking CAROBOT sign in the middle of the screen."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:'void loop(){\n  tft.fillRect(80, 140, 321, 60, BLACK);\n  delay(1000); //by delaying the loop for 1 second, the CAROBOT sign will be visible for one second\n  tft.fillRect(80, 140, 321, 60, WHITE);\n  tft.setCursor(160, 155);\n  tft.setTextColor(RED);\n  tft.setTextSize(4);\n  tft.print("CAROBOT");\n  delay(1000); //by delaying the loop for 1 second, the CAROBOT sign will be invisible for one second\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"full-code-1",children:"Full Code"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:'//Libraries\n#include <Adafruit_GFX.h>\n#include <MCUFRIEND_kbv.h>\n//Pins\n#define LCD_RD A0\n#define LCD_WR A1\n#define LCD_CD A2\n#define LCD_CS A3\n#define LCD_RESET A4\n//Colors\n#define BLACK   0x0000\n#define BLUE    0x001F\n#define RED     0xF800\n#define GREEN   0x07E0\n#define CYAN    0x07FF\n#define MAGENTA 0xF81F\n#define YELLOW  0xFFE0\n#define WHITE   0xFFFF\n\nvoid setup(){\n  tft.reset(); //resets the hardware\n  tft.begin(0x9481); //starts up the screen\n  tft.setRotation(1); //sets the rotation of the screen\n\n  tft.fillScreen(GREEN);\n  delay(1000); //delay is put here so that we can fully see the colors\n  tft.fillScreen(MAGENTA);\n  delay(1000);\n  tft.fillScreen(BLUE);\n  delay(1000);\n  //Hello\n  tft.setCursor(10, 10);\n  tft.setTextColor(WHITE);\n  tft.setTextSize(4);\n  tft.print("Hello");\n  //World!\n  tft.setCursor(150, 10);\n  tft.setTextColor(WHITE);\n  tft.setTextSize(4);\n  tft.print("World!");\n}\n\nvoid loop(){\n  //Blinking CAROBOT sign\n  tft.fillRect(80, 140, 321, 60, BLACK);\n  delay(1000); //by delaying the loop for 1 second, the CAROBOT sign will be visible for one second\n  tft.fillRect(80, 140, 321, 60, WHITE);\n  tft.setCursor(160, 155);\n  tft.setTextColor(RED);\n  tft.setTextSize(4);\n  tft.print("CAROBOT");\n  delay(1000); //by delaying the loop for 1 second, the CAROBOT sign will be invisible for one second\n}\n'})}),"\n",(0,i.jsx)(n.admonition,{title:"fillRect();",type:"info",children:(0,i.jsxs)(n.p,{children:["tft.fillRect(",(0,i.jsx)(n.em,{children:"X coordinate"}),", ",(0,i.jsx)(n.em,{children:"Y coordinate"}),", ",(0,i.jsx)(n.em,{children:"Length"}),", ",(0,i.jsx)(n.em,{children:"Width"}),", ",(0,i.jsx)(n.em,{children:"Color"}),");"]})}),"\n",(0,i.jsx)(n.h3,{id:"output",children:"Output"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(45519).A+"",width:"640",height:"376"})}),"\n",(0,i.jsx)(n.h2,{id:"touch-screen",children:"Touch Screen"}),"\n",(0,i.jsx)(n.p,{children:"If you want to use the touch screen function, the first thing you want to do is to calibrate your coordinates to make sure every thing is accurate."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Step 1:"})," First of all, go to ",(0,i.jsx)(n.em,{children:"File -> Examples -> MCUFRIEND_kbv -> TouchScreen_Calibr_native"}),"\n",(0,i.jsx)(n.img,{src:t(19085).A+"",width:"500",height:"629"})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Step 2:"})," Press ",(0,i.jsx)(n.em,{children:"crtl+shift+M"})," to open serial monitor"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Step 3:"})," Follow the instructions and ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"tap and hold"})})," on each of the crosshairs. Once the calibration is done, now you can go ahead and copy the information from the ",(0,i.jsx)(n.strong,{children:"Serial Monitor"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"You're calibration is now done!"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Step 4:"})," Now go to ",(0,i.jsx)(n.em,{children:"File -> Examples -> MCUFRIEND_kbv -> TouchScreen_new"}),"\n",(0,i.jsx)(n.img,{src:t(76580).A+"",width:"500",height:"635"})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Step 5:"})," Paste the previously copied calibration calculations here.\n",(0,i.jsx)(n.img,{src:t(6495).A+"",width:"500",height:"255"})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Step 6:"})," Now you can upload ",(0,i.jsx)(n.code,{children:"TouchScreen_new"})," onto your Arduino and see the magic happen."]}),"\n",(0,i.jsx)(n.admonition,{title:"Exit Button",type:"info",children:(0,i.jsx)(n.p,{children:"If you press the exit button, you will be led to a drawing board where you can draw whatever you want."})})]})}function a(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},45519:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/2631_01-71cb94e2cfa2f96051507eb3d7b6d716.gif"},31488:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/2631_01-8c6bc5543b5042988d28d8bc5b67fbaa.png"},86523:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/2631_02-b5a0e96feae0a6cbfdd616f44500a1d4.png"},37522:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/2631_03-1f29377151a12f09691ddee1cb492f4c.png"},19085:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/2631_04-d26ef44871f217db6613e129bb7de469.png"},76580:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/2631_05-f2e6e5d3f16e4d628e74387e4471cd92.png"},6495:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/2631_06-f58f77d5926753ab89e10833d678925f.png"},28406:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/2631_07-7001d544a5f6eea4901d20fc499bc163.png"},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>l});var i=t(96540);const s={},r=i.createContext(s);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);