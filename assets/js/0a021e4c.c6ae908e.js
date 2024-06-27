"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2357],{80868:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>o,frontMatter:()=>s,metadata:()=>l,toc:()=>h});var t=r(74848),i=r(28453);const s={title:"Arrays",sidebar_position:6},a="How to Use Arrays in C",l={id:"intro-to-C/c06-arrays",title:"Arrays",description:"Learning Goals",source:"@site/docs/intro-to-C/c06-arrays.md",sourceDirName:"intro-to-C",slug:"/intro-to-C/c06-arrays",permalink:"/learn.carobot.ca/intro-to-C/c06-arrays",draft:!1,unlisted:!1,editUrl:"https://github.com/carobot/learn.carobot.ca/tree/main/docs/intro-to-C/c06-arrays.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Arrays",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Programming Constructs",permalink:"/learn.carobot.ca/intro-to-C/c05-constructs"},next:{title:"Functions",permalink:"/learn.carobot.ca/intro-to-C/c07-functions"}},c={},h=[{value:"Learning Goals",id:"learning-goals",level:2},{value:"What is a Data Structure?",id:"what-is-a-data-structure",level:2},{value:"What is an Array?",id:"what-is-an-array",level:2},{value:"Parallel Arrays",id:"parallel-arrays",level:3},{value:"Character Strings",id:"character-strings",level:2},{value:"Syntax",id:"syntax",level:3},{value:"Your Turn!",id:"your-turn",level:2}];function d(e){const n={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"how-to-use-arrays-in-c",children:"How to Use Arrays in C"}),"\n",(0,t.jsx)(n.h2,{id:"learning-goals",children:"Learning Goals"}),"\n",(0,t.jsx)(n.p,{children:"By the end of this tutorial, you should be able to:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Describe the purpose of an array"}),"\n",(0,t.jsx)(n.li,{children:"Declare and initialize and array"}),"\n",(0,t.jsx)(n.li,{children:"Insert values into an array"}),"\n",(0,t.jsx)(n.li,{children:"Recognize the opportunities to use an array"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"what-is-a-data-structure",children:"What is a Data Structure?"}),"\n",(0,t.jsx)(n.p,{children:"A data structure is a tool which can be used to hold multiple pieces of similar data. There are many different forms of data structures, each having their own advantages and disadvantages."}),"\n",(0,t.jsx)(n.h2,{id:"what-is-an-array",children:"What is an Array?"}),"\n",(0,t.jsxs)(n.p,{children:["An ",(0,t.jsx)(n.strong,{children:"array"})," is a powerful, flexible and simple form of data structure."]}),"\n",(0,t.jsx)(n.p,{children:"Advantages:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Can be used for any data types, this may include ",(0,t.jsx)(n.code,{children:"int"}),", ",(0,t.jsx)(n.code,{children:"char"})," and ",(0,t.jsx)(n.code,{children:"bool"})]}),"\n",(0,t.jsx)(n.li,{children:"It is extremely simple to setup"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Disadvantages:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"It can require more code to accomplish tasks compared to other data structures"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Here is the format of an array:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-t",children:"datatype arrayName [arraySize];\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"datatype"})," is the type of the array, ",(0,t.jsx)(n.code,{children:"arrayName"})," is the designated name of the array, the ",(0,t.jsx)(n.code,{children:"[ ]"})," brackets indentify the data structure as an array and ",(0,t.jsx)(n.code,{children:"arraySize"})," is how many of the array you want to declare."]}),"\n",(0,t.jsx)(n.p,{children:"Lets imagine that we want to declare 5 different integers:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:"int numOne = 5;\r\nint numTwo = 3;\r\nint numThree = 9;\r\nint numFour = 1;\r\nint numFive = 8;\n"})}),"\n",(0,t.jsx)(n.p,{children:"Instead of this repetitive way of declaring new integers, we can try using an array:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:"int num[5] = {5, 3, 9, 1, 8};\n"})}),"\n",(0,t.jsxs)(n.p,{children:["This statement creates an array storage named ",(0,t.jsx)(n.code,{children:"num"})," that consists of 5 ",(0,t.jsx)(n.code,{children:"int"})," elements."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.em,{children:["(Note: ",(0,t.jsx)(n.code,{children:"int num[5]"})," ",(0,t.jsx)(n.strong,{children:"does not"})," include ",(0,t.jsx)(n.code,{children:"num[5]"}),", it only includes ",(0,t.jsx)(n.code,{children:"num[0]"})," to ",(0,t.jsx)(n.code,{children:"num[4]"}),")"]})}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"int value"}),(0,t.jsx)(n.th,{children:"5"}),(0,t.jsx)(n.th,{children:"3"}),(0,t.jsx)(n.th,{children:"9"}),(0,t.jsx)(n.th,{children:"1"}),(0,t.jsx)(n.th,{children:"8"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"index"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"0"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"1"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"2"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"3"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"4"})})]})})]}),"\n",(0,t.jsx)(n.p,{children:"If the initialization of the array already contains all the variables that are required, you can simply type:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:"int num[] = {5, 3, 9, 1, 8};\n"})}),"\n",(0,t.jsx)(n.p,{children:"This will have the exact same effect as the previous example that includes an arraySize."}),"\n",(0,t.jsxs)(n.p,{children:["If we specify fewer initial values than the size of the array, the program will automatically assign the rest of the values as ",(0,t.jsx)(n.code,{children:"0"}),". Here is an example:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:"int num[5] = {5, 3, 9};\r\n\r\nvoid setup(){\r\n    Serial.println(num[0]);\r\n    Serial.println(num[1]);\r\n    Serial.println(num[2]);\r\n    Serial.println(num[3]);\r\n    Serial.println(num[4]);\r\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Serial Monitor"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:"5\r\n3\r\n9\r\n0\r\n0\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"(Note: if you specify a arraySize smaller than the amount of initial values, there will be a syntax error)"})}),"\n",(0,t.jsx)(n.h3,{id:"parallel-arrays",children:"Parallel Arrays"}),"\n",(0,t.jsx)(n.p,{children:"A easy way to store tabular information is through the use of parallel arrays. One array can hold the key while the other holds the value."}),"\n",(0,t.jsx)(n.p,{children:"Lets say we want to list the different products (SKU) and the amount we have:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:'int n = 4; //4 for the number of arraySize\r\nint sku[] = {2000, 2001, 2002, 2003};\r\nint amount[] = {17, 15, 19, 20};\r\n\r\nvoid setup(){\r\n    for(int i = 0; i < n; i++){\r\n        Serial.print(sku[i]);\r\n        Serial.print(" has ");\r\n        Serial.print(amount[i]);\r\n        Serial.println(" in stock.");\r\n    }\r\n}\r\n\r\nvoid loop(){\r\n\r\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Serial Monitor"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-t",children:"2000 has 17 in stock.\r\n2001 has 15 in stock.\r\n2002 has 19 in stock.\r\n2003 has 20 in stock.\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"sku[]"})," holds the key data while ",(0,t.jsx)(n.code,{children:"amount[]"})," holds the value data, being the SKU and amount in stock respectively."]}),"\n",(0,t.jsx)(n.h2,{id:"character-strings",children:"Character Strings"}),"\n",(0,t.jsxs)(n.p,{children:["There are many ways to identify a string in C, one of the most common ways is through the use of an array of characters or ",(0,t.jsx)(n.code,{children:"char"}),". There is a special property with the ",(0,t.jsx)(n.strong,{children:"string"}),", which is the ",(0,t.jsx)(n.strong,{children:"terminator element"})," that follows the final character of the string array. We call this element the ",(0,t.jsx)(n.strong,{children:"null terminator"}),". It is identified by the escape sequence ",(0,t.jsx)(n.code,{children:"\\0"}),".\r\nThe ",(0,t.jsx)(n.strong,{children:"value"})," of the index identifying the null terminator is the amount of characters in the string array. here is an example:"]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"0"}),(0,t.jsx)(n.th,{children:"1"}),(0,t.jsx)(n.th,{children:"2"}),(0,t.jsx)(n.th,{children:"3"}),(0,t.jsx)(n.th,{children:"4"}),(0,t.jsx)(n.th,{children:"5"}),(0,t.jsx)(n.th,{children:"6"}),(0,t.jsx)(n.th,{children:"7"}),(0,t.jsx)(n.th,{children:"8"}),(0,t.jsx)(n.th,{children:"9"}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.em,{children:"10"})})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"c"}),(0,t.jsx)(n.td,{children:"h"}),(0,t.jsx)(n.td,{children:"a"}),(0,t.jsx)(n.td,{children:"r"}),(0,t.jsx)(n.td,{children:"a"}),(0,t.jsx)(n.td,{children:"c"}),(0,t.jsx)(n.td,{children:"t"}),(0,t.jsx)(n.td,{children:"e"}),(0,t.jsx)(n.td,{children:"r"}),(0,t.jsx)(n.td,{children:"s"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.em,{children:"\\0"})})})]})})]}),"\n",(0,t.jsx)(n.p,{children:"As you can see, the amount of memory locations of the string array is 1 more than the amount of characters in the string. You can even add spaces!"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"0"}),(0,t.jsx)(n.th,{children:"1"}),(0,t.jsx)(n.th,{children:"2"}),(0,t.jsx)(n.th,{children:"3"}),(0,t.jsx)(n.th,{children:"4"}),(0,t.jsx)(n.th,{children:"5"}),(0,t.jsx)(n.th,{children:"6"}),(0,t.jsx)(n.th,{children:"7"}),(0,t.jsx)(n.th,{children:"8"}),(0,t.jsx)(n.th,{children:"9"}),(0,t.jsx)(n.th,{children:"10"}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.em,{children:"11"})})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"H"}),(0,t.jsx)(n.td,{children:"i"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"I"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"a"}),(0,t.jsx)(n.td,{children:"m"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"J"}),(0,t.jsx)(n.td,{children:"o"}),(0,t.jsx)(n.td,{children:"e"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.em,{children:"\\0"})})})]})})]}),"\n",(0,t.jsx)(n.h3,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsxs)(n.p,{children:["Since the null terminator ",(0,t.jsx)(n.code,{children:"\\0"})," requires a memory slot, all string arrays will have one additional storage spot to provide space for the terminator. Here is an example:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:'//characters has 10 letters, but since \\0 requires one more spot\r\n//the arraySize will increase by one into 11\r\nchar name[11] = "characters";\n'})}),"\n",(0,t.jsxs)(n.p,{children:["The most efficient way of printing a string array is through the use of the ",(0,t.jsx)(n.strong,{children:"For Loop"}),", by utilizing the int ",(0,t.jsx)(n.code,{children:"i"})," within the construct. Here is an example:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:'int nameNum = 10;\r\nchar name[11] = "characters";\r\n\r\nvoid setup(){\r\n    for(int i = 0; i < nameNum; i++){\r\n        Serial.print(name[i]);\r\n    }\r\n}\r\n\r\nvoid loop(){\r\n\r\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Serial Monitor"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-t",children:"characters\n"})}),"\n",(0,t.jsx)(n.h2,{id:"your-turn",children:"Your Turn!"}),"\n",(0,t.jsx)(n.p,{children:"Try messing around with the different code, for example:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Create different arrays and use the ",(0,t.jsx)(n.strong,{children:"For Loop"})," to print out different codes/passwords"]}),"\n",(0,t.jsx)(n.li,{children:"Create your own string array and find out different ways to print out the word"}),"\n"]})]})}function o(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>l});var t=r(96540);const i={},s=t.createContext(i);function a(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);