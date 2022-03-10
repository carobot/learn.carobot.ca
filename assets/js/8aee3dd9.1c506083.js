"use strict";(self.webpackChunklearn_at_carobotix=self.webpackChunklearn_at_carobotix||[]).push([[8959],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return g}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=o.createContext({}),d=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=d(e.components);return o.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(n),g=r,h=c["".concat(u,".").concat(g)]||c[g]||s[g]||i;return n?o.createElement(h,a(a({ref:t},p),{},{components:n})):o.createElement(h,a({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=c;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var d=2;d<i;d++)a[d]=n[d];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return d},toc:function(){return p},default:function(){return c}});var o=n(7462),r=n(3366),i=(n(7294),n(3905)),a=["components"],l={title:"Infrared Sensor Module (TCRT5000) Guide",sidebar_position:3},u=void 0,d={unversionedId:"product_guide/infrared-sensor-module",id:"product_guide/infrared-sensor-module",title:"Infrared Sensor Module (TCRT5000) Guide",description:"The Infrared Sensor Module (TCRT5000) is a Line Tracking Module. It is an infrared distance module most used for object and obstacle detection, and robot applications like a line following robot car, product line decoder and much more.",source:"@site/guide/product_guide/2083-infrared-sensor-module.md",sourceDirName:"product_guide",slug:"/product_guide/infrared-sensor-module",permalink:"/guide/product_guide/infrared-sensor-module",editUrl:"https://github.com/carobot/carobot.github.io/tree/main/guide/product_guide/2083-infrared-sensor-module.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Infrared Sensor Module (TCRT5000) Guide",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Hakko FS-100 Tip Cleaning Paste Guide",permalink:"/guide/product_guide/tip-cleaning-paste"},next:{title:"CAROBOT Motor Shield v3 Guide",permalink:"/guide/product_guide/motor-shield-v3"}},p=[{value:"<strong>Wiring</strong>",id:"wiring",children:[],level:2},{value:"<strong>Parts</strong>",id:"parts",children:[],level:2},{value:"<strong>Wiring Guide</strong>",id:"wiring-guide",children:[],level:2},{value:"<strong>Programming</strong>",id:"programming",children:[],level:2},{value:"<strong>Output</strong>",id:"output",children:[],level:2}],s={toc:p};function c(e){var t=e.components,l=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The Infrared Sensor Module (TCRT5000) is a Line Tracking Module. It is an infrared distance module most used for object and obstacle detection, and robot applications like a line following robot car, product line decoder and much more."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(9304).Z,width:"480",height:"440"})),(0,i.kt)("p",null,"This article will talk about the pinout and wiring of the module operating with an Arduino Board. At the end of the tutorial, you will learn how to build a line decoder to detect objects. "),(0,i.kt)("h2",{id:"wiring"},(0,i.kt)("strong",{parentName:"h2"},"Wiring")),(0,i.kt)("p",null,"The infrared module operates at 3V to 5V DC and produces a digital output. There are two different types of infrared modules in the market where one can produce analog output and the other cannot. We will be using the ",(0,i.kt)("a",{parentName:"p",href:"https://www.canadarobotix.com/products/2083"},"Infrared Sensor Module (TCRT5000)")," (the one with no analog output), the one we carry in our shop. "),(0,i.kt)("p",null,"The module consists of 3 output pins that connect the TCRT5000 module to a microcontroller, like Arduino. "),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(811).Z,width:"476",height:"210"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"GND: Ground pin to connect the tracking sensor to the ground with the microcontroller"),(0,i.kt)("li",{parentName:"ul"},"VCC: Power pin for 3.3V to 5V operation voltage with the microcontroller "),(0,i.kt)("li",{parentName:"ul"},"OUT: Digital output pin based on a predefined threshold through the potentiometer and the operation voltage of the microcontroller.")),(0,i.kt)("h2",{id:"parts"},(0,i.kt)("strong",{parentName:"h2"},"Parts")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Infrared Sensor Module (TCRT5000)"),(0,i.kt)("li",{parentName:"ul"},"Arduino Uno R3"),(0,i.kt)("li",{parentName:"ul"},"Jumper wires"),(0,i.kt)("li",{parentName:"ul"},"LED lightbulb"),(0,i.kt)("li",{parentName:"ul"},"Breadboard"),(0,i.kt)("li",{parentName:"ul"},"220 ohms resistor "),(0,i.kt)("li",{parentName:"ul"},"Arduino IDE")),(0,i.kt)("h2",{id:"wiring-guide"},(0,i.kt)("strong",{parentName:"h2"},"Wiring Guide")),(0,i.kt)("p",null,"Connect all the pins with female to male jumper wires"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(3177).Z,width:"480",height:"290"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Connect the LED bulb on to the breadboard with a 220 ohms resistor")),(0,i.kt)("p",null,"It does not matter how you put the resistor on to the breadboard as both the legs can be ground or VCC."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"the longer leg of the LED (GND) -- same row with the resistor"),(0,i.kt)("li",{parentName:"ul"},"the shorter leg of the LED (VCC) -- different column with the resistor")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(7248).Z,width:"174",height:"364"})," ",(0,i.kt)("img",{src:n(3796).Z,width:"480",height:"312"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Connect the infrared sensor to Arduino")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Infrared Sensor Module GND -- Arduino GND pin "),(0,i.kt)("li",{parentName:"ul"},"Infrared Sensor Module VCC --  Arduino 5V pin "),(0,i.kt)("li",{parentName:"ul"},"Infrared Sensor Module OUT -- Arduino D7 pin ")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(4048).Z,width:"450",height:"290"}),"\n",(0,i.kt)("img",{src:n(7117).Z,width:"480",height:"306"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Connect Led to Arduino.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Breadboard GND rail -- Arduino GND pin "),(0,i.kt)("li",{parentName:"ul"},"same row as the led shorter leg (VCC) -- Arduino D6 pin ")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(3596).Z,width:"480",height:"237"}),"\n",(0,i.kt)("img",{src:n(1106).Z,width:"480",height:"267"})),(0,i.kt)("h2",{id:"programming"},(0,i.kt)("strong",{parentName:"h2"},"Programming")),(0,i.kt)("p",null,"We want to read the output from Serial Monitor, so we know what is really happening with the infrared sensor module. "),(0,i.kt)("p",null,"If you want to skip the steps and jump to the Full Code. "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 1:")," Define the connection pin"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"#define digital_pin 7\n#define led 6\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 2:")," Create a variable to store the sensor's output."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"int value = 0;\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 3:")," Set up serial communication between Arduino and the module and set the digital_pin as an input and the led light as an output."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"void setup(){\n  Serial.begin(9600);\n  pinMode(digital_pin, INPUT);\n  pinMode(led, OUTPUT);\n}\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 4:")," Read the sensor's output. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"void loop(){\n  value = digitalRead(digital_pin);\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 5:")," Print out the sensor's output. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},'  Serial.print("Digital Reading: ");\n  Serial.println(value);\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 6:")," The led light will light up according to the status of the sensor. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"  if (value == HIGH){\n    digitalWrite(led, HIGH);\n  }\n  else{\n    digitalWrite(led, LOW);\n  }\n  \n}\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Full Code")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},'#define digital_pin 7\n#define led 6\n\nint value = 0;\n\nvoid setup(){\n  Serial.begin(9600);\n  pinMode(digital_pin, INPUT);\n  pinMode(led, OUTPUT);\n}\n\nvoid loop(){\n  value = digitalRead(digital_pin);\n  Serial.print("Digital Reading: ");\n  Serial.println(value);\n  if (value == HIGH){\n    digitalWrite(led, HIGH);\n  }\n  else{\n    digitalWrite(led, LOW);\n  }\n  \n}\n')),(0,i.kt)("h2",{id:"output"},(0,i.kt)("strong",{parentName:"h2"},"Output")),(0,i.kt)("p",null,"We will cover up the LED with our fingers to demonstrate what it is like when it detects an object in front of it. "),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(5652).Z,width:"400",height:"225"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"When it detects an object")),(0,i.kt)("p",null,"The led light will be turned on "),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(1386).Z,width:"300",height:"234"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Serial Monitor:")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(4170).Z,width:"142",height:"208"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"When it does not detect anything")),(0,i.kt)("p",null,"The led will be turned off"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(1134).Z,width:"264",height:"268"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Serial Monitor:")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(6257).Z,width:"133",height:"163"})))}c.isMDXComponent=!0},5652:function(e,t,n){t.Z=n.p+"assets/images/2083_01-af3c1d2594a62eaa2bf5ec9f1ab1eeff.gif"},9304:function(e,t,n){t.Z=n.p+"assets/images/2083_01-76d6c02c83b79a3744658afa1e428eea.png"},811:function(e,t,n){t.Z=n.p+"assets/images/2083_02-440364f0c34e94f144cad3be6059f62d.png"},3177:function(e,t,n){t.Z=n.p+"assets/images/2083_03-5ba20988b19656bda260088b1ee0d217.png"},7248:function(e,t,n){t.Z=n.p+"assets/images/2083_04-c66355f492473224bdf89dacc03ab1bd.png"},3796:function(e,t,n){t.Z=n.p+"assets/images/2083_05-773e8a0682f091e80914628e42d50fa1.png"},4048:function(e,t,n){t.Z=n.p+"assets/images/2083_06-8ad68f0dbbfa727c795a8168cd601146.png"},7117:function(e,t,n){t.Z=n.p+"assets/images/2083_07-2caf511d1e9fe28f78f14a7e9d15a554.png"},3596:function(e,t,n){t.Z=n.p+"assets/images/2083_08-9815bd9c53f594687f518fcc2a168945.png"},1106:function(e,t,n){t.Z=n.p+"assets/images/2083_09-5ddca530206c0023ac2b1ce34db1ec2e.png"},1386:function(e,t,n){t.Z=n.p+"assets/images/2083_10-9be4f6816c2a031a1c22e4f3050a37e0.png"},4170:function(e,t){t.Z="data:image/png;base64,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"},1134:function(e,t,n){t.Z=n.p+"assets/images/2083_12-26fdf630a7e39008868ac48c0aedc9ca.png"},6257:function(e,t){t.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIUAAACjCAYAAACkL90XAAABC2lDQ1BpY2MAABiVY2BgXJGTnFvMJMDAkJtXUhTk7qQQERmlwH6HgZFBkoGZQZPBMjG5uMAxIMCHASf4do2BEURf1gWZxUAa4ExJLU5mYGD4wMDAEJ9cUFTCwMAIsounvKQAxI5gYGAQKYqIjGJgYMwBsdMh7AYQOwnCngJWExLkzMDAyMPAwOCQjsROQmJD7QIB1mSj5ExkhySXFpVBmVIMDAynGU8yJ7NO4sjm/iZgLxoobaL4UXOCkYT1JDfWwPLYt9kFVaydG2fVrMncX3v58EuD//9LUitKQJqdnQ0YQGGIHjYIsfxFDAwWXxkYmCcgxJJmMjBsb2VgkLiFEFNZwMDA38LAsO08APD9TdvF8UZ0AAAACXBIWXMAAAsSAAALEgHS3X78AAAKA0lEQVR42u2cWUhU/xvGH03HXDPBNCIXjJSSFMu8sStJLcKSJCRaqDSsRC+kAi8KWqhALI0wA7NciySTBCtKCbQoUzNxTNGplCS03FFT8/3fOIM5izNpf/zZ8wFBD+ec+X7f3jnrp8csJydH9u/fD0LUmJubm7MK5PemmJycZBXI701hZmZm9Mqtra1ISUkx+UP+dDtdqFQqZGdnIzs7G48ePVpwBS0tLYVSqfwrc58rg4ODqKqqQldXl+EVc3NzRUSkqalJAIilpaWsWLFCIiMj5cmTJzKdvLw8cXNzk9HRUTEFQ9tdunRJamtrjd7Xy5cvJTIyUvz8/MTX19fo7WprazXzUygU4u3tLZcvX5b5JjAwUFJTU+dcs/kmLy9Pli5dKuvXrxdra2s5ffq03nWRk5MjIiJKpVIAiFKplK6uLsnIyBAbGxuprq7+q4P18PCQvLw8k7e7efOmSU1RU1MjAOTTp0+a+QGQmpqav9oUC4GOjg6xtLSU+/fvi4hIbm6uAJCysjKd6+u8ynR2dkZcXByCgoLw4MEDdHR0wN/fH/7+/ti6davW+pOTk0hJSUFwcDDc3NywYcMG5OXlGdzu06dPKC8vx8jICBobG1FeXo7y8nL09vYCAMbHx3HhwgUEBQXB3d0dfn5+ePz48bwcRp2dnREREQEAUCgUAICRkRHExcVh1apV8PDwQHZ2tmZ9Q2OZOff6+noAmHXu/v7+aGxsxI4dO+Dk5IRDhw5BfX2nr55q3r59C1dXV+Tk5Bg138LCQri4uGDPnj2YmJhASkoKrK2tcffuXd3XFIZ25uXlhZaWFjg7O+PatWvYtWsXGhsbtdY7c+YMzp8/jy1btqCgoACjo6Po7u42uN3Tp0+RlJSEnp4e5OfnIykpCUlJSWhpaQEAJCYm4urVq9i+fTvy8/PR1dWFnp6eOTfE5OQkBgYGcPToUYSEhMDX1xcAcPjwYVRWViI/Px/Hjh1DbGwsWltbZx3LzLm7u7trGk/f3EdHR1FfX4+wsDB4enri1q1bKCgoQGlpqcF6qhkeHkZvby/6+/uNmnN7ezu8vb0BAFeuXIG9vT1iYmLQ3t6uewP1oXv66UNNQkKCBAcHa/4uKiqSlStX/nao6e3tFTMzM7l+/breQ6iu7QydPlQqlQCQ/Px8zTIvLy+5c+fOnE8f6p+AgAAZHBwUEZHv378LAElLS5PPnz+LSqWSZcuWyc2bNw2O5U/nrq51UlKSZpmPj49kZGQYtU8RMeka5cCBAxIZGSlKpVLs7OykoaFBTp06pbd+5iKit8M6OzuxZs0ag1347t07iIjmcDwfVFdXw8LCAtu3b5/3K/C6ujrEx8fj48eP+PHjBwDg/fv3AID09HSEhoYiPDwcLi4uGB8fNziWuc49OTlZ87utrS3GxsaM3qeVlZXRn+Pi4oLOzk4cOXIEx48fh6+vL5qamuDi4mLaLenw8DBev36NdevWGfzAgYEBmJubw9HREQDw4cMHNDQ0GD1ghUKBkZERrX0qFArY2toCAKqqqvDly5d5aQpHR0dcvHgRjo6OSExMBACsXbsWAPDw4UM0NzdrfuLj4w2OZa5zn1579e9z3acufHx88ObNG3R2duLs2bMAAKVSqTmlaDXFzCNFW1sbioqKEB0dDRFBbGys1jm5v78fw8PDAICQkBAsWbIEN27cQEVFBXbv3q01YV3bTR/w8+fPISJQqVRobm5GeHg4hoeHkZWVhbKyMuzduxcKhULzzVbz69cv9Pf3Y2hoyKQiOTg4IDU1FSUlJSgtLcXq1asRGBiIkydPYnBwEH19fSgsLERVVZXBseibu67rGF1z14Ux9VSpVNi2bRsqKiqMmm9UVBRsbGwQEREBGxsblJSUoK2tDQcPHjR8TaF+TgFAXF1dJTo6Wl69evXbuaaoqEizTlhYmGZ5cnKyWFlZib29vWRmZoqfn5+kp6fPup2ISGVlpTg5OYmtra1YWFiI+hb5xIkTYmFhIcuXL5d79+5JaGioJCQkaLbLzMzU7NPT09Po5xSfP3/WLAsNDRVPT0/5+fOnfP36VQICAsTS0lKsrKxk48aN8uLFi1nHMnPumzdv1rqmmDl3da17e3s1623atEnS0tJMqmdycrLR1xXFxcViZWUlbm5uYmZmJufOndP/nEL98OpPUV/wdHd3y+joqAwODoqDg4MUFxcbvY+JiQlpaWmRnp6e35Z/+/ZNxsbG/q/39J2dndLX16e13NBY1HOfD4ytZ11dncm1GRoakqqqKunu7ja4ntlc35LeuXMHWVlZ2LlzJxwcHHD79m3Y2dnh2bNn4Mu2/2Y9Leb6QZGRkbCxsUFFRQWGhoYQExODqKgoNsR/uJ5mubm5sm/fPv5rEOOeaBI2BSGmNwV9itlZFD7FzOcU9CnoU9CnoE+h/UJM160OfYp/3Kcw9JaUPsU/6lPoOn3Qp/jHfQpDNjd9in/Up9C3I/oU/7BPMXMBfQr6FFr/74M+BX0KzYUmfQr6FBqfYq5vSelTzC8LwqdYDO//FxMLwqdgPgXRuvvgN5poNQXzKYhWUzCfYn5hPgV9CvoU9CmYT0GfYgrmU0yDPgXzKehT0KdgPgV9CuZTAPQpmE+hD/oUzKegT8F8CvoUzKdYZDCfgizIejKfgpj2RJOwKQgxvSnoU8wO8ynoU9CnoE/BfAr6FFMwn2Ia9CmYT0Gfgj4F8ynoUzCfAqBPwXwKfdCnYD4FfQrmU9CnYD7FIoP5FGRB1pP5FET77oPfaKLVFMynIFpNwXyK+YX5FPQp6FPQp2A+BX2KKZhPMQ36FMynoE9Bn4L5FPQpmE8B0KdgPoU+6FMwn4I+BfMp6FMwn2KRwXwKsiDryXwKYtoTTcKmIMT0pqBPMTvMp6BPQZ+CPgXzKehTTMF8imnQp2A+BX0K+hTMp6BPwXwKgD4F8yn0QZ+C+RT0KZhPQZ+C+RSLDOZTkAVZT+ZTEO27D36jiVZTMJ+CaDUF8ynmF+ZT0KegT0GfgvkU9CmmYD7FNOhTMJ+CPgV9CuZT0KdgPgVAn4L5FPqgT8F8CvoUzKegT8F8ikUG8ynIgqwn8ymIaU80CZuCENObgj7F7DCfgj4FfQr6FMynoE8xBfMppkGfgvkU9CnoUzCfgj4F8ykA+hTMp9AHfQrmU9CnYD4FfQrmUywymE9BFmQ9mU9BtO8++I0mWk3BfAqi1RTMp5hfmE9Bn4I+BX0K5lPQp5iC+RTToE/BfAr6FPQpmE9Bn4L5FAB9CuZT6IM+BfMp6FMwn4I+BfMpFhnMpyALsp7MpyCmPdEkbApCTG8K+hSzw3wK+hT0KehTMJ+CPsUUzKeYBn0K5lPQp6BPwXwK+hTMpwDoUzCfQh/0KZhPQZ+C+RT0KZhPschgPgVZkPVkPgXRvvvgN5poNQXzKchM/gexEiB0I33D+QAAAABJRU5ErkJggg=="}}]);