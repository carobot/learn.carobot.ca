"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6303],{5803:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>c});var r=n(74848),s=n(28453);const t={title:"NeoPixel Compatible (16 LED 4x4 Grid)",sidebar_position:9},l="How to use The 16 LED 4x4 Grid NeoPixel",o={id:"2736-16LED-4x4Grid-NeoPixel",title:"NeoPixel Compatible (16 LED 4x4 Grid)",description:"The 16 LED 4x4 Grid NeoPixel is a version of the NeoPixel series that includes 16 LEDs in a 4x4 grid format. In this guide, we will be using the NeoPixel Compatible WS2812 5050 RGB LED (16 LED 4x4 Grid) from our store.",source:"@site/guide/2736-16LED-4x4Grid-NeoPixel.md",sourceDirName:".",slug:"/2736-16LED-4x4Grid-NeoPixel",permalink:"/guide/2736-16LED-4x4Grid-NeoPixel",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"NeoPixel Compatible (16 LED 4x4 Grid)",sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Soil Moisture Sensor Module (Capacitive)",permalink:"/guide/soil-poisture-sensor-capacitive"},next:{title:"NeoPixel Compatible (8 LED 32mm Ring)",permalink:"/guide/2737-8LED-32mmRing-NeoPixel"}},d={},c=[{value:"Parts",id:"parts",level:2},{value:"Wiring Guide",id:"wiring-guide",level:2},{value:"Programming",id:"programming",level:2},{value:"Example",id:"example",level:2},{value:"Full Code",id:"full-code",level:3},{value:"Output",id:"output",level:2}];function a(e){const i={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.h1,{id:"how-to-use-the-16-led-4x4-grid-neopixel",children:"How to use The 16 LED 4x4 Grid NeoPixel"}),"\n",(0,r.jsxs)(i.p,{children:["The 16 LED 4x4 Grid NeoPixel is a version of the NeoPixel series that includes 16 LEDs in a 4x4 grid format. In this guide, we will be using the ",(0,r.jsx)(i.a,{href:"https://www.canadarobotix.com/products/2736v",children:"NeoPixel Compatible WS2812 5050 RGB LED (16 LED 4x4 Grid)"})," from our store."]}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{src:n(84023).A+"",width:"269",height:"231"})}),"\n",(0,r.jsx)(i.h2,{id:"parts",children:"Parts"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.a,{href:"https://www.canadarobotix.com/products/2736v",children:"NeoPixel Compatible WS2812 5050 RGB LED (16 LED 4x4 Grid)"})}),"\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.a,{href:"https://www.canadarobotix.com/collections/cables-wires-and-connectors/products/1162",children:"M/F Jumper wires"})}),"\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.a,{href:"https://www.canadarobotix.com/products/60",children:"Arduino Uno R3"})}),"\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.a,{href:"https://www.arduino.cc/en/software",children:"Arduino IDE"})}),"\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.a,{href:"https://www.canadarobotix.com/products/2852",children:"Soldering Iron"})}),"\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.a,{href:"https://www.canadarobotix.com/products/964",children:"Lead Free Solder"})}),"\n"]}),"\n",(0,r.jsx)(i.h2,{id:"wiring-guide",children:"Wiring Guide"}),"\n",(0,r.jsxs)(i.table,{children:[(0,r.jsx)(i.thead,{children:(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.th,{children:"NeoPixel"}),(0,r.jsx)(i.th,{children:"Arduino"})]})}),(0,r.jsxs)(i.tbody,{children:[(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"VCC"}),(0,r.jsx)(i.td,{children:"5V"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"GND"}),(0,r.jsx)(i.td,{children:"GND"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"IN"}),(0,r.jsx)(i.td,{children:"Pin 6"})]})]})]}),"\n",(0,r.jsxs)(i.p,{children:["Soldering is ",(0,r.jsx)(i.strong,{children:(0,r.jsx)(i.em,{children:"required"})})," to wire everything properly. Use jumper wires to connect the NeoPixel with the Arduino."]}),"\n",(0,r.jsx)(i.h2,{id:"programming",children:"Programming"}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.strong,{children:"Step 1:"})," Before we start coding, we first have to download the needed libraries.\r\n",(0,r.jsx)(i.img,{src:n(68936).A+"",width:"500",height:"211"})]}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.strong,{children:"Step 2:"})," Enter ",(0,r.jsx)(i.code,{children:"NeoPixel"})," and install the highlighted search."]}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{src:n(48916).A+"",width:"672",height:"246"})}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.strong,{children:"Step 3:"})," Declare your libraries"]}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-c",children:'#include "Adafruit_NeoPixel.h"\n'})}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.strong,{children:"Step 4:"})," Declare an object using ",(0,r.jsx)(i.code,{children:"Adafruit_NeoPixel"}),"."]}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-c",children:"Adafruit_NeoPixel pixels(16, 6, NEO_GRB + NEO_KHZ800);\n"})}),"\n",(0,r.jsx)(i.admonition,{title:"Adafruit_NeoPixel();",type:"info",children:(0,r.jsx)(i.p,{children:"Adafruit_NeoPixel pixels(# of LEDS, digital pin #, LED type + LED type);"})}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.strong,{children:"Step 5:"})," Initialize the NeoPixel project."]}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-c",children:"void setup(){\r\n    pixels.begin();\r\n}\n"})}),"\n",(0,r.jsx)(i.p,{children:"Now that everything has been initialized, you can code whatever you want."}),"\n",(0,r.jsx)(i.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(i.p,{children:"Here are a few commands you can use to control the NeoPixel:"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-c",children:"object.setBrightness(0-255); //sets the brightness of the NeoPixels\n"})}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-c",children:"object.clear(); //clears all the pixels\n"})}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-c",children:"object.setPixelColor(pixel#, object.Color(R, G, B)); //sets a color for a specific pixel\n"})}),"\n",(0,r.jsx)(i.admonition,{title:"RGB",type:"info",children:(0,r.jsx)(i.p,{children:"The (R, G, B) can go from (0, 0, 0) to (255, 255, 255)"})}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-c",children:"object.show(); //shows whatever pixel you have updated with setPixelColor\n"})}),"\n",(0,r.jsx)(i.p,{children:"Here is an example of how to use the 16 LED 4x4 Grid NeoPixel."}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.strong,{children:"Step 1:"})," Initialize the NeoPixel."]}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-c",children:'#include "Adafruit_NeoPixel.h"\r\n#ifdef __AVR__\r\n    #include <avr/power.h> // this is required for 16 MHz Adafruit Trinket\r\n#endif\r\n\r\nint PIN = 6;\r\nint NUMPIXELS = 16;\r\n\r\nAdafruit_NeoPixel pixels(NUMPIXELS, PIN, NEO_GRB + NEO_KHZ800);\r\n\r\nvoid setup(){\r\n    pixels.begin();\r\n    pixels.setBrightness(10);\r\n}\n'})}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.strong,{children:"Step 2:"})," Let's start by clearing the NeoPixel to make sure there is nothing on the LEDs."]}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-c",children:"void loop(){\r\n    pixels.clear();\r\n}\n"})}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.strong,{children:"Step 3:"})," Let's create a for loop that makes one LED light up after the other every second."]}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-c",children:"for(int i = NUMPIXELS; i >= 0; i--){\r\n    pixels.setPixelColor(i, pixels.Color(255, 255, i*10)); //this should cause a white color to slowly turn into green\r\n    pixels.show();\r\n    delay(100);\r\n}\n"})}),"\n",(0,r.jsx)(i.h3,{id:"full-code",children:"Full Code"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-c",children:'#include "Adafruit_NeoPixel.h"\r\n#ifdef __AVR__\r\n    #include <avr/power.h> // this is required for 16 MHz Adafruit Trinket\r\n#endif\r\n\r\nint PIN = 6;\r\nint NUMPIXELS = 16;\r\n\r\nAdafruit_NeoPixel pixels(NUMPIXELS, PIN, NEO_GRB + NEO_KHZ800);\r\n\r\nvoid setup(){\r\n    pixels.begin();\r\n    pixels.setBrightness(10); //to not ruin my eyes\r\n}\r\n\r\nvoid loop(){\r\n    pixels.clear();\r\n    for(int i = NUMPIXELS; i >= 0; i--){\r\n        pixels.setPixelColor(i, pixels.Color(255, 255, i*10)); //this should cause a white color to slowly turn into green\r\n        pixels.show();\r\n        delay(100);\r\n    }\r\n}\n'})}),"\n",(0,r.jsx)(i.h2,{id:"output",children:"Output"}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{src:n(51156).A+"",width:"640",height:"628"})})]})}function h(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},48916:(e,i,n)=>{n.d(i,{A:()=>r});const r=n.p+"assets/images/2631_03-1f29377151a12f09691ddee1cb492f4c.png"},51156:(e,i,n)=>{n.d(i,{A:()=>r});const r=n.p+"assets/images/2736_01-b92acff2e9d0ee25d30592c57905f8ba.gif"},84023:(e,i,n)=>{n.d(i,{A:()=>r});const r=n.p+"assets/images/2736_01-b696e8f916a6178247b1c2842905111f.png"},68936:(e,i,n)=>{n.d(i,{A:()=>r});const r=n.p+"assets/images/2737_01-362a46003431d7f7c1b7b0a1d866ae75.png"},28453:(e,i,n)=>{n.d(i,{R:()=>l,x:()=>o});var r=n(96540);const s={},t=r.createContext(s);function l(e){const i=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(t.Provider,{value:i},e.children)}}}]);