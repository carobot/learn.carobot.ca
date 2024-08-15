"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3351],{95851:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>a,contentTitle:()=>l,default:()=>o,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var i=n(74848),t=n(28453);const s={title:"Literals",sidebar_position:3},l="How to Use Programming Literals in C",d={id:"intro-to-C/c03-literals",title:"Literals",description:"Literals are data used for representing fixed values or constant variables that cannot be changed or modified. They can be used directly in the code. For example:",source:"@site/docs/intro-to-C/c03-literals.md",sourceDirName:"intro-to-C",slug:"/intro-to-C/c03-literals",permalink:"/intro-to-C/c03-literals",draft:!1,unlisted:!1,editUrl:"https://github.com/carobot/learn.carobot.ca/tree/main/docs/intro-to-C/c03-literals.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Literals",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Variable Types",permalink:"/intro-to-C/c02-types"},next:{title:"Programming Operators",permalink:"/intro-to-C/c04-operator"}},a={},c=[{value:"Integers",id:"integers",level:2},{value:"Floating-Point Literals",id:"floating-point-literals",level:2},{value:"Character Literals",id:"character-literals",level:2},{value:"String Literals",id:"string-literals",level:2},{value:"What are Literals used for?",id:"what-are-literals-used-for",level:2},{value:"Escape Sequences",id:"escape-sequences",level:2}];function h(e){const r={code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.h1,{id:"how-to-use-programming-literals-in-c",children:"How to Use Programming Literals in C"}),"\n",(0,i.jsxs)(r.p,{children:["Literals are data used for representing fixed values or constant variables that ",(0,i.jsx)(r.strong,{children:"cannot"})," be changed or modified. They can be used directly in the code. For example:"]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-c",children:"const int = 10\n"})}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.em,{children:"The 10 represents the value 10, not a variable named 10."})}),"\n",(0,i.jsx)(r.h2,{id:"integers",children:"Integers"}),"\n",(0,i.jsx)(r.p,{children:"An integer is known as a numeric literal without a fraction or an exponent. In C programming there are three different types of integer literals:"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:["Decimal","\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:"Eg: 0, -10, 22"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["Octal (base 8 system)","\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:"Eg: 021, 077, 033"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["Hexadecimal (base 16)","\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:"Eg: 0x7f, 0x2a, 0x521"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.strong,{children:"Example: change 78 to octal"})}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-c",children:"Divide 78 by 8 until 0\r\n\r\n78 \xf7 8 = 9 R 6\r\n\r\n9 \xf7 8 = 1 R 1\r\n\r\n1 \xf7 8 = 0 R 1\r\n\r\nThe output will be 116\n"})}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.em,{children:"(Reminder: the remainder from the first division should be in the ones digit)"})}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.strong,{children:"What the code should look like"})}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-c",children:"void setup(){\r\n    Serial.begin(9600);\r\n    Serial.println(78, OCT);\r\n}\r\nvoid loop(){\r\n\r\n}\n"})}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.strong,{children:"Serial Monitor"})}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-c",children:"116\n"})}),"\n",(0,i.jsx)(r.h1,{id:"you-try",children:"YOU TRY!"}),"\n",(0,i.jsx)(r.p,{children:"In serial.print() enter a number then a comma and OCT. See what the output is in the serial monitor."}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.em,{children:"Eg: serial.print(78, OCT); should print out 116"})}),"\n",(0,i.jsx)(r.h2,{id:"floating-point-literals",children:"Floating-Point Literals"}),"\n",(0,i.jsxs)(r.p,{children:["A floating-point literal isa ",(0,i.jsx)(r.strong,{children:"numeric literal that contains a decimal point"}),". It is usually stored in either a decimal form or an exponent form."]}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.strong,{children:"Example:"})}),"\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"Valid Entries"}),(0,i.jsx)(r.th,{children:"Invalid Entires"})]})}),(0,i.jsxs)(r.tbody,{children:[(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"-22.5"}),(0,i.jsx)(r.td,{children:"123E"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"0.00034235"}),(0,i.jsx)(r.td,{children:"3554"})]})]})]}),"\n",(0,i.jsx)(r.h2,{id:"character-literals",children:"Character Literals"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:["Character literals are used to store ",(0,i.jsx)(r.strong,{children:"a single character within a single quote (\u2018x\u2019)"}),". To store multiple characters, you will use a character array instead."]}),"\n"]}),"\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"Valid Entries"}),(0,i.jsx)(r.th,{children:"Invalid Entries"})]})}),(0,i.jsxs)(r.tbody,{children:[(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"'a'"}),(0,i.jsx)(r.td,{children:"'Programming'"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"'F'"}),(0,i.jsx)(r.td,{children:"'Flower'"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"'3'"}),(0,i.jsx)(r.td,{children:"'integer'"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"','"}),(0,i.jsx)(r.td,{children:"'sign'"})]})]})]}),"\n",(0,i.jsx)(r.h2,{id:"string-literals",children:"String Literals"}),"\n",(0,i.jsxs)(r.p,{children:["String literals are similar to character literals, the difference is that string literals are capable of storing multiple ",(0,i.jsx)(r.strong,{children:"characters enclosed in double quotation marks (\u201cbook\u201d)"}),"."]}),"\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"Valid Entries"}),(0,i.jsx)(r.th,{children:"Invalid Entries"})]})}),(0,i.jsxs)(r.tbody,{children:[(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:'"myAge"'}),(0,i.jsx)(r.td,{children:"'True'"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:'"remainingNumber"'}),(0,i.jsx)(r.td,{children:"'false'"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:'"percentYield"'}),(0,i.jsx)(r.td,{children:"'Keys'"})]})]})]}),"\n",(0,i.jsx)(r.h2,{id:"what-are-literals-used-for",children:"What are Literals used for?"}),"\n",(0,i.jsx)(r.p,{children:"Using a literal, you can use the variable name rather than rewriting the value again and again."}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.strong,{children:"Example:"})}),"\n",(0,i.jsx)(r.p,{children:"Instead of using 11"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-c",children:"void setup(){\r\n    pinMode(11, OUTPUT);\r\n}\r\nvoid loop(){\r\n    digitalWrite(11, HIGH);\r\n    delay(1000);\r\n    digitalWrite(11, LOW);\r\n    delay(1000);\r\n}\n"})}),"\n",(0,i.jsx)(r.p,{children:"Use a declared integer (Eg. int LED = 11)"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-c",children:"int LED = 11; //<---Declare an integer\r\nvoid setup(){\r\n    pinMode(LED), OUTPUT);\r\n}\r\nvoid loop(){\r\n    digitalWrite(LED), HIGH);\r\n    delay(1000);\r\n    digitalWrite(LED, LOW);\r\n    delay(1000);\r\n}\n"})}),"\n",(0,i.jsx)(r.h2,{id:"escape-sequences",children:"Escape Sequences"}),"\n",(0,i.jsxs)(r.p,{children:["Some characters/shortcuts that we used cannot be typed in C programming. For example, ",(0,i.jsx)(r.em,{children:"enter"})," (for a new line), and ",(0,i.jsx)(r.em,{children:"tab"})," (for indent). Escape sequences are used to replace of these actions."]}),"\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"Escape Sequences"}),(0,i.jsx)(r.th,{children:"Characters"})]})}),(0,i.jsxs)(r.tbody,{children:[(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"\\f"}),(0,i.jsx)(r.td,{children:"Form Feed"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"\\n"}),(0,i.jsx)(r.td,{children:"Newline"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"\\r"}),(0,i.jsx)(r.td,{children:"Return"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"\\t"}),(0,i.jsx)(r.td,{children:"Horizontal Tab"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"\\v"}),(0,i.jsx)(r.td,{children:"Vertical Tab"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"\\"}),(0,i.jsx)(r.td,{children:"Backslash"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"\\\u2019"}),(0,i.jsx)(r.td,{children:"Single Quotation mark"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"\\\u201d"}),(0,i.jsx)(r.td,{children:"Double Quotation mark"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"?"}),(0,i.jsx)(r.td,{children:"Question mark"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"\\0"}),(0,i.jsx)(r.td,{children:"Null Character"})]})]})]})]})}function o(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},28453:(e,r,n)=>{n.d(r,{R:()=>l,x:()=>d});var i=n(96540);const t={},s=i.createContext(t);function l(e){const r=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),i.createElement(s.Provider,{value:r},e.children)}}}]);