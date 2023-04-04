"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1213],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=s(n),d=i,g=m["".concat(p,".").concat(d)]||m[d]||c[d]||a;return n?r.createElement(g,l(l({ref:t},u),{},{components:n})):r.createElement(g,l({ref:t},u))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:i,l[1]=o;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},62930:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>s});var r=n(87462),i=(n(67294),n(3905));const a={title:"NeoPixel Compatible (24 LED 86mm Ring)",sidebar_position:9},l="How to use The 24 LED 86mm NeoPixel",o={unversionedId:"2742-24LED-86mmRing-NeoPixel",id:"2742-24LED-86mmRing-NeoPixel",title:"NeoPixel Compatible (24 LED 86mm Ring)",description:"The 24 LED 86mm NeoPixel is a version of the NeoPixel series that includes 24 LEDs in a 86mm ring format. In this guide, we will be using the NeoPixel Compatible WS2812 5050 RGB LED (24 LED 86mm Ring) from our store.",source:"@site/guide/2742-24LED-86mmRing-NeoPixel.md",sourceDirName:".",slug:"/2742-24LED-86mmRing-NeoPixel",permalink:"/guide/2742-24LED-86mmRing-NeoPixel",draft:!1,editUrl:"https://github.com/carobot/learn.carobot.ca/tree/main/guide/2742-24LED-86mmRing-NeoPixel.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"NeoPixel Compatible (24 LED 86mm Ring)",sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"NeoPixel Compatible (7 LED 24mm Disc)",permalink:"/guide/2739-7LED-24mmDisc-NeoPixel"},next:{title:"NeoPixel Compatible (64 LED 8x8 Grid)",permalink:"/guide/2743-64LED-8x8Grid-NeoPixel"}},p={},s=[{value:"Parts",id:"parts",level:2},{value:"Wiring Guide",id:"wiring-guide",level:2},{value:"Programming",id:"programming",level:2},{value:"Example",id:"example",level:2},{value:"Full Code",id:"full-code",level:3},{value:"Output",id:"output",level:2}],u={toc:s},m="wrapper";function c(e){let{components:t,...a}=e;return(0,i.kt)(m,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"how-to-use-the-24-led-86mm-neopixel"},"How to use The 24 LED 86mm NeoPixel"),(0,i.kt)("p",null,"The 24 LED 86mm NeoPixel is a version of the NeoPixel series that includes 24 LEDs in a 86mm ring format. In this guide, we will be using the ",(0,i.kt)("a",{parentName:"p",href:"https://www.canadarobotix.com/products/2742"},"NeoPixel Compatible WS2812 5050 RGB LED (24 LED 86mm Ring)")," from our store."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(8384).Z,width:"465",height:"458"})),(0,i.kt)("h2",{id:"parts"},"Parts"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.canadarobotix.com/products/2742"},"NeoPixel Compatible WS2812 5050 RGB LED (24 LED 86mm Ring)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.canadarobotix.com/collections/cables-wires-and-connectors/products/1162"},"M/F Jumper wires")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.canadarobotix.com/products/60"},"Arduino Uno R3")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.arduino.cc/en/software"},"Arduino IDE")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.canadarobotix.com/products/2852"},"Soldering Iron")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.canadarobotix.com/products/964"},"Lead Free Solder"))),(0,i.kt)("h2",{id:"wiring-guide"},"Wiring Guide"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"NeoPixel"),(0,i.kt)("th",{parentName:"tr",align:null},"Arduino"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"5V"),(0,i.kt)("td",{parentName:"tr",align:null},"5V")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"GND"),(0,i.kt)("td",{parentName:"tr",align:null},"GND")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"DI"),(0,i.kt)("td",{parentName:"tr",align:null},"Pin 6")))),(0,i.kt)("p",null,"Soldering is ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"required"))," to wire everything properly. Use jumper wires to connect the NeoPixel with the Arduino."),(0,i.kt)("h2",{id:"programming"},"Programming"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 1:")," Before we start coding, we first have to download the needed libraries.\n",(0,i.kt)("img",{src:n(61091).Z,width:"500",height:"211"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 2:")," Enter ",(0,i.kt)("inlineCode",{parentName:"p"},"NeoPixel")," and install the highlighted search."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(89249).Z,width:"672",height:"246"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 3:")," Declare your libraries"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},'#include "Adafruit_NeoPixel.h"\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 4:")," Declare an object using ",(0,i.kt)("inlineCode",{parentName:"p"},"Adafruit_NeoPixel"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"Adafruit_NeoPixel pixels(24, 6, NEO_GRB + NEO_KHZ800);\n")),(0,i.kt)("admonition",{title:"Adafruit_NeoPixel();",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Adafruit_NeoPixel pixels(# of LEDS, digital pin #, LED type + LED type);")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 5:")," Initialize the NeoPixel project."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"void setup(){\n    pixels.begin();\n}\n")),(0,i.kt)("p",null,"Now that everything has been initialized, you can code whatever you want."),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"Here are a few commands you can use to control the NeoPixel:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"object.setBrightness(0-255); //sets the brightness of the NeoPixels\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"object.clear(); //clears all the pixels\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"object.setPixelColor(pixel#, object.Color(R, G, B)); //sets a color for a specific pixel\n")),(0,i.kt)("admonition",{title:"RGB",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"The (R, G, B) can go from (0, 0, 0) to (255, 255, 255)")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"object.show(); //shows whatever pixel you have updated with setPixelColor\n")),(0,i.kt)("p",null,"Here is an example of how to use the 24 LED 86mm Ring NeoPixel."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 1:")," Initialize the NeoPixel."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},'#include "Adafruit_NeoPixel.h"\n#ifdef __AVR__\n    #include <avr/power.h> // this is required for 16 MHz Adafruit Trinket\n#endif\n\nint PIN = 6;\nint NUMPIXELS = 24;\n\nAdafruit_NeoPixel pixels(NUMPIXELS, PIN, NEO_GRB + NEO_KHZ800);\n\nvoid setup(){\n    pixels.begin();\n    pixels.setBrightness(10);\n}\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 2:")," Let's start by clearing the NeoPixel to make sure there is nothing on the LEDs."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"void loop(){\n    pixels.clear();\n}\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 3:")," Let's create a for loop that makes one LED light up after the other every second."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"for(int i = NUMPIXELS; i >= 0; i--){\n    pixels.setPixelColor(i, pixels.Color(i*10, 255, 255)); //this should cause a white color to slowly turn into blue\n    pixels.show();\n    delay(100);\n}\n")),(0,i.kt)("h3",{id:"full-code"},"Full Code"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},'#include "Adafruit_NeoPixel.h"\n#ifdef __AVR__\n    #include <avr/power.h> // this is required for 16 MHz Adafruit Trinket\n#endif\n\nint PIN = 6;\nint NUMPIXELS = 24;\n\nAdafruit_NeoPixel pixels(NUMPIXELS, PIN, NEO_GRB + NEO_KHZ800);\n\nvoid setup(){\n    pixels.begin();\n    pixels.setBrightness(10); //to not ruin my eyes\n}\n\nvoid loop(){\n    pixels.clear();\n    for(int i = NUMPIXELS; i >= 0; i--){\n        pixels.setPixelColor(i, pixels.Color(i*10, 255, 255)); //this should cause a white color to slowly turn into pink\n        pixels.show();\n        delay(100);\n    }\n}\n')),(0,i.kt)("h2",{id:"output"},"Output"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(24085).Z,width:"640",height:"628"})))}c.isMDXComponent=!0},89249:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/2631_03-1f29377151a12f09691ddee1cb492f4c.png"},61091:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/2737_01-362a46003431d7f7c1b7b0a1d866ae75.png"},24085:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/2742_01-ce062f2fce8b5d4861299023328c92c8.gif"},8384:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/2742_01-12386d8549ea4714a743f6e2d73ae6f9.png"}}]);