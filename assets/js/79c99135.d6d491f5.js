"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5373],{55375:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var t=i(74848),o=i(28453);const r={title:"HC-SR501 Sensor",sidebar_position:1},s="How to use The HC-SR501 Sensor",a={id:"ultrasonic-motion-detector",title:"HC-SR501 Sensor",description:"HC-SR501 is based on infrared technology, an automatic control module with high sensitivity and ultra-low-voltage operating mode, making it highly reliable to use. It is widely used in various auto-sensing electrical equipment, like battery-powered automatic controlled products.",source:"@site/guide/2327-ultrasonic-motion-detector.md",sourceDirName:".",slug:"/ultrasonic-motion-detector",permalink:"/learn.carobot.ca/guide/ultrasonic-motion-detector",draft:!1,unlisted:!1,editUrl:"https://github.com/carobot/learn.carobot.ca/tree/main/guide/2327-ultrasonic-motion-detector.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"HC-SR501 Sensor",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Flex Sensor 2.2",permalink:"/learn.carobot.ca/guide/flex-sensor"},next:{title:"MQ-2 Smoke Sensor",permalink:"/learn.carobot.ca/guide/smoke-sensor"}},l={},d=[{value:"Wiring",id:"wiring",level:2},{value:"Parts",id:"parts",level:2},{value:"Wiring Guide",id:"wiring-guide",level:2},{value:"Programming",id:"programming",level:2},{value:"Full Code",id:"full-code",level:2},{value:"Output",id:"output",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"how-to-use-the-hc-sr501-sensor",children:"How to use The HC-SR501 Sensor"}),"\n",(0,t.jsx)(n.p,{children:"HC-SR501 is based on infrared technology, an automatic control module with high sensitivity and ultra-low-voltage operating mode, making it highly reliable to use. It is widely used in various auto-sensing electrical equipment, like battery-powered automatic controlled products."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:i(42413).A+"",width:"480",height:"362"})}),"\n",(0,t.jsx)(n.h2,{id:"wiring",children:"Wiring"}),"\n",(0,t.jsx)(n.p,{children:"The HC-SR501 sensor operates at 5V to 20V, and the digital output pin gives out a HIGH or LOW signal depending on if the sensor detects any motions. Thus, the sensor can be used without connecting to a microcontroller and just by a power supply and a load. For instance, it can be connected to the power supply and a lightbulb. Then, when it detects motion within its range (less than 120 degrees, within 7m), the digital output pin will be triggered and send a HIGH signal that gives power to the lightbulb to turn on."}),"\n",(0,t.jsx)(n.p,{children:"There are a few types of similar motion sensors in the market where the main difference is they have a smaller detection range and do not have a potentiometer to adjust the sensitivity and time delay compared to the one we will be using, the HC-SR501 sensor, the one we carry in our shop."}),"\n",(0,t.jsx)(n.p,{children:"Under the white plastic shield, you will see the actual infrared sensor. The white plastic shield is used to reflect the motion from all around, making the sensor much more sensitive."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:i(25597).A+"",width:"480",height:"354"})}),"\n",(0,t.jsx)(n.p,{children:"**The infrared sensor under the white plastic shield. **"}),"\n",(0,t.jsx)(n.p,{children:"This module consists of 3 pins that allow it to connect to power supply, load or even a microcontroller easily, like an Arduino."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"GND:"})," Ground pin to connect the sensor to the ground with the microcontroller or power supply"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"VCC:"})," Power pin for 5V to 20V operation voltage with the microcontroller or power supply"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"OUT:"})," Digital output pin based on a predefined threshold through the potentiometer and the operation voltage of the microcontroller or power supply."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Back side of the module"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:i(96482).A+"",width:"480",height:"341"})}),"\n",(0,t.jsx)(n.h2,{id:"parts",children:"Parts"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.canadarobotix.com/products/2327",children:"HC-SR501 sensor"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.canadarobotix.com/products/60",children:"Arduino Uno R3"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.canadarobotix.com/products/922",children:"Jumper wires"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.arduino.cc/en/software",children:"Arduino IDE"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"wiring-guide",children:"Wiring Guide"}),"\n",(0,t.jsx)(n.p,{children:"Connect the pins with female to male jumper wires"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:i(44390).A+"",width:"480",height:"279"})}),"\n",(0,t.jsxs)(n.p,{children:["HC-SR501 sensor ",(0,t.jsx)(n.strong,{children:"GND"})," pin -- Arduino ",(0,t.jsx)(n.strong,{children:"GND"})," pin\r\nHC-SR501 sensor ",(0,t.jsx)(n.strong,{children:"VCC"})," pin -- Arduino ",(0,t.jsx)(n.strong,{children:"5V"})," pin\r\nHC-SR501 sensor ",(0,t.jsx)(n.strong,{children:"OUT"})," pin -- Arduino ",(0,t.jsx)(n.strong,{children:"D2"})," pin"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:i(9583).A+"",width:"480",height:"208"})}),"\n",(0,t.jsx)(n.h2,{id:"programming",children:"Programming"}),"\n",(0,t.jsx)(n.p,{children:"In the following code, we will read out the sensor. Next, the code will read the sensor's state (HIGH or LOW) and print a message to the Serial Monitor. The code can also be used to control simple relays to turn a bigger light on or off."}),"\n",(0,t.jsx)(n.p,{children:"If you want to skip the steps, you can jump to the Full Code."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Step 1:"})," Define the connection pin."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:"#define sensor 2\n"})}),"\n",(0,t.jsx)(n.p,{children:"Step 2: Create a variable to store the sensor's state."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:"int state = 0;\n"})}),"\n",(0,t.jsx)(n.p,{children:"Step 3: Set up serial communication between Arduino and the sensor and set the sensor as input. This way, the sensor can send signal to Arduino and Arduino will send out messages accordingly."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:"void setup() {\r\n  Serial.begin(9600);// setup Serial Monitor to display information\r\n  pinMode(sensor, INPUT);// Input from sensor\r\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"Step 4: Read the state of the sensor."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:"void loop() {\r\n  state =digitalRead(sensor);\n"})}),"\n",(0,t.jsx)(n.p,{children:'Step 5: If the sensor is triggered, print out "Motion detected". Otherwise, print "==nothing moves".'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:'  if(state){\r\n    Serial.println("Motion detected");\r\n  }\r\n  else{\r\n     Serial.println("===nothing moves");\r\n  }\n'})}),"\n",(0,t.jsx)(n.p,{children:"Step 6: Stop for half a second."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:"  delay(500);\r\n\r\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"full-code",children:"Full Code"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:'#define sensor 2\r\n\r\nint state = 0;\r\n\r\nvoid setup() {\r\n  Serial.begin(9600);// setup Serial Monitor to display information\r\n  pinMode(sensor, INPUT);// Input from sensor\r\n}\r\n\r\nvoid loop() {\r\n  state =digitalRead(sensor);\r\n  if(state){\r\n    Serial.println("Motion detected");\r\n  }\r\n  else{\r\n     Serial.println("===nothing moves");\r\n  }\r\n  delay(500);\r\n\r\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"output",children:"Output"}),"\n",(0,t.jsx)(n.p,{children:"It will print out a message according to its state whether if it detects anything within the range."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:i(40560).A+"",width:"133",height:"194"})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},42413:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/2327_01-707eeac05e5d3f7a97fab3e4e9cc9c4b.jpg"},25597:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/2327_01-dc2fa0a274a17a1a05a8e30dd3c7433c.png"},96482:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/2327_02-97b2e7fb6c35686dfac7d625df730d28.jpg"},44390:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/2327_02-5139283d188236e62be16495a7503e1f.png"},9583:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/2327_03-4fca20ec5b736c5337de092cc90adb5c.png"},40560:(e,n,i)=>{i.d(n,{A:()=>t});const t="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIUAAADCCAYAAABnhwHoAAABC2lDQ1BpY2MAABiVY2BgXJGTnFvMJMDAkJtXUhTk7qQQERmlwH6HgZFBkoGZQZPBMjG5uMAxIMCHASf4do2BEURf1gWZxUAa4ExJLU5mYGD4wMDAEJ9cUFTCwMAIsounvKQAxI5gYGAQKYqIjGJgYMwBsdMh7AYQOwnCngJWExLkzMDAyMPAwOCQjsROQmJD7QIB1mSj5ExkhySXFpVBmVIMDAynGU8yJ7NO4sjm/iZgLxoobaL4UXOCkYT1JDfWwPLYt9kFVaydG2fVrMncX3v58EuD//9LUitKQJqdnQ0YQGGIHjYIsfxFDAwWXxkYmCcgxJJmMjBsb2VgkLiFEFNZwMDA38LAsO08APD9TdvF8UZ0AAAACXBIWXMAAAsSAAALEgHS3X78AAAMKUlEQVR42u2ce0yTZxvGr9ZiFbBV1DnjYMQDGI1anRqIJCQq0SUOZzyBGiN4iEYT3JZ5YJnGQ9Q541TCFJOJMjc1GohRQ1ChnqPRBA8gKERwyzDZJggSq6twf3/49Y3Q9u0BKdZev8QE+vS54caLvo99b38aEREQ8hZa/ggIQ0E6PhSVlZXYsWNHhzR3+vRp3L9/36//gjqiBy0ATJgwAePGjWuxsGrVKnTv3t2tItu2bUNxcbHDtRs3biAjIwOvXr3y+Q9048aNKCgoaHMP3vIuanrSwzt/pbh27RoqKysBAE1NTfjtt9/g7hk0KyvLaZrnzp2Lx48fQ6/Xv9e/kWo9vE81fX75yMnJAQCcP38eNTU1yuPFxcWIi4uDwWDAsGHDkJeXBwCoqqpCUVERLBYLSktLUVRUhKKiItTV1eHPP/+EyWSCyWRCQkKC3RdWq2kymVBaWoopU6YgLCwMKSkpaG5udtlMc3MzduzYgbi4OERERODOnTvKmsViwdKlS9GvXz9ERkYiOzvbZQ9q+wBARLBr1y5ER0fDaDQiJiYGeXl5baqp1oPPEBEZP368jBs3TiIjI6W5uVnmzJkj48ePF4PBILW1tRIWFiaJiYly+fJlWblypWg0Grl586bs3btXTCaTBAUFSUREhJhMJjGZTHL9+nWxWCxiNptl/fr10rdvX3kbtZr3798XANKvXz9ZsWKFHD9+XDp37iwnT54UV3z33XdiMBhkzZo1cvnyZRk0aJDs3LlTRESSkpJk6NChYjabZdu2bdKpUyepqKhQ7UFtn4jI9u3bRa/XS05OjpSVlcmBAwfk7Nmzbaqp1oOvUEKxa9cu0el0curUKQkJCZGsrCwxGAySlZUlGo1G/v77b2XTp59+KosXL1Y+j4yMlMOHDzv8AidOnLALhVpNWyi++eYbZW3w4MGyd+9e1Ubq6upEo9FIRkaG8tiYMWNk586d8u+//woA2b17t1RXV8ujR4/EaDTKvn37VHtwta9nz56yYcMGp9+TpzXVevAlOtsrRu/evZGQkICUlBSMHDkS4eHhysvrwIED0bt3b+XVJTY2FlVVVV6/OrlTMz09Xfk4JCQE//33n2rNW7duQUSQmJhot3b79m0AwJ49e5CZmQkA6NOnD6xWq2pNtX21tbV4+vQpRo0a5VHvajXVevAlurc/SU5ORn5+PpKTk5XHPv74Y1RXV6OxsRGhoaEAgJKSEowcOVJ5TufOnWGxWNz+ou7U1Gg0Dj92RkNDA7RarfIvprt37+LevXtITk5GVFQUACA3NxfDhw93uN9RD672ffTRR7h06RKmTJnyTmrm5uY67aHDDpqzZ89GeXk5UlNTlccSExOh1WqxefNmNDQ04Ndff0VJSQlmzpypPGfw4ME4f/48RASPHj3CgwcP7A6A9fX1ePHihds1PWXChAno1KkTMjMzYTabMX36dGUtPDwcY8aMwbfffovnz5/j2bNnOHLkCK5evarag6t9s2bNQnZ2Ni5evIimpiZUVFSgtLTU65pqPXTIQfP3339vcV3Jz88Xo9EoIiJHjx4Vg8EgWq1WdDqdrFu3rsVzr1y5ImFhYRISEiI6nU5ycnJanCkACACZNGmS8rizmmVlZQJA6urqlOeOHj1adu/e7fJamJ6eLnq9Xrp16yZZWVkyduxY5Xr8119/yahRoyQoKEj0er189tlnUlhY6LIHtX1Wq1UWLFggwcHBotFoRK/XS2ZmZptqqvXg04OmO1itVqmsrJQXL144XH/9+rU8fPhQamtr5V3V9IZ//vlHXr586XS9pqZGnj175nEPavtevXolFRUVYrVa30lNVz20NxreJSW8IUYYCsJQEIaCBEQo6uvrkZ2drfpuY0fOaDAU7YyjeYOamhqkpqaisbHR6b6OnNFgKNoZb+cN/GVGIyBD4Wr2wZs5DBt//PGHUnP+/PmwWq2qMxquvpfWcwrDhw/H4cOHVftbs2YN9u3bh9jYWEycOBGFhYXo27cvfvjhB9X+Fi5ciO+//75FrcLCQsTFxaGpqUl1nqK4uBgzZ85Enz598MknnyApKcn3qWjLO19qsw/ezmE4q5mbm6s6o+FqDsObOYWkpCQxGAzy9ddfCwAZMGCALFmyRGJiYlT7y87OlpCQkBbvVk6ePFmWL1/ucp5i0qRJ8sUXX0hZWZlcu3ZNjhw54vN3NCEikpaWJv3797f7M3HiRNU1tdkHb+cw3JmncDSjobbP2zmFpKQkiY+PFxGRbt26yaZNm8RsNktUVJRqfxaLRXr16iU//fSTiIiUl5eLVquV8vJylzMa8fHxMmTIECkoKJDm5uYOeZtbBwBpaWmYN2+e3atI165dERwc7HTNhqPZhydPnrRpDsPTeQq1fW2ZU7DtCQoKwuzZs/HkyRPlcuWsvy5dumDx4sXIzMxEWloaMjIykJCQgOjoaBQWFgIqsx379+/HV199hcmTJ2PQoEH48ccffT5foQOAgwcP4ty5c3aLERERiI6Odrq2fv16wMnsQ1vnMDydp1DbpzZr4fLQpdW2+H5tuOpv2bJl2L59O44ePYpDhw7h2LFjgBszGlFRUThz5gwePnyIrVu3YurUqSgtLcWQIUN8G4pp06Zh7NixdouhoaEwGo1O11z9hq1evRqbN29Geno6Tp48iZKSEmzZskV5jm3eYOHChaiqqnI5CfU2thmNoKAgBAcHqz737TmFmJgYLFmyxOOwedpfeHg4vvzyS6SkpCAiIgKff/658rhtnuLEiRNoampCfn6+cvj9+eefsWjRIkRFRWHt2rXIyclpcQB/7w+armYfvJnDcGeewtGMhqt9recURowYIXv27FHtLzk5WTkXhIWFSXV1tVy8eFGio6Pd6u/ChQvK+eFtnM1TNDQ0SGxsrAQHB0uPHj3EaDRKampqxxw025P2mMPwFNtsgm1O4fnz52IwGCQvL6/d+1PD2TyFrebr1685T9FeHDx4EL/88gumTp0Kg8GAAwcOIDQ0FGfPnm1xZiD/P4sFQijq6+tRUFAAs9mMxsZGxMfHY8aMGW7/t0iGgvBtbv4ICENBOj4U9FP4Xw/0U7jRg7fQT0E/hU9q+vzyQT8F/RS2xuinoJ+Cfgr6KeinoJ/CQ+inUOmBfgr6KeinaH3QpJ+Cfgr6KeinoJ+C8IYYYSgIQ0EYChLgoaCfIsBDQT8FQ2EH/RQfYCjop6Cfgn4K+inop6Cfgn4Kh9BP0Qr6KeinsFukn8L7/uinoJ+Cfgr6Kein8Hvop/AM+ilIYIaC+NG9D8JQEIbiDfRT+F8P9FO40YO30E9BP4VPavr88kE/Bf0Utsbop6Cfgn4K+inop6CfwkPop1DpgX4K+inop2h90KSfgn4K+inop6CfgvCGGGEoCENBGAoS4KGgnyLAQ0E/BUNhB/0UH2Ao6Kegn4J+Cvop6Kegn4J+CofQT9EK+inop7BbpJ/C+/7op6Cfgn4K+inop/B76KfwDPopSGCGgvjRvQ/CUBCG4g30U/hfD/RTuNGDt9BPQT+FT2r6/PJBPwX9FLbG6Kegn4J+Cvop6Kegn8JD6KdQ6YF+Cvop6KdofdCkn4J+Cvop6Kegn4LwhhhhKAhDQRgKEuChoJ8iwENBPwVDYQf9FB9gKOinoJ+Cfgr6KeinoJ+CfgqH0E/RCvop6KewW6Sfwvv+6Kegn4J+Cvop6Kfwe+in8Az6KUhghoL40b0PwlAQhuIN9FP4Xw/0U7jRg7fQT0E/hU9q+vzyQT8F/RS2xuinoJ+Cfgr6KeinoJ/CQ+inUOmBfgr6KeinaH3QpJ+Cfgr6KeinoJ+C8IYYYSgIQ0EYChLgoaCfIsBDQT8FQ2EH/RQfYCjop6Cfgn4K+inop6Cfgn4Kh9BP0Qr6KeinsFukn8L7/uinoJ+Cfgr6Kein8Hvop/AM+ilIYIaC+NG9D8JQEIbiDfRT+F8P9FO40YO30E9BP4VPavr88kE/Bf0Utsbop6Cfgn4K+inop6CfwkPop1DpgX4K+inop2h90KSfgn4K+inop6CfgvCGGGEoCENBGAoS4KGgnyLAQ0E/BUNhB/0UH2Ao6Kegn4J+Cvop6Kegn4J+CofQT9EK+inop7BbpJ/C+/7op6Cfgn4K+inop/B76KfwDPopSGCGgvjRvQ/yfvI/L5IvxOmzz78AAAAASUVORK5CYII="},28453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>a});var t=i(96540);const o={},r=t.createContext(o);function s(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);