"use strict";(self.webpackChunklearn_at_carobotix=self.webpackChunklearn_at_carobotix||[]).push([[7638],{3905:function(t,e,a){a.d(e,{Zo:function(){return m},kt:function(){return k}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),u=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=u(t.components);return n.createElement(p.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),s=u(a),k=r,g=s["".concat(p,".").concat(k)]||s[k]||d[k]||l;return a?n.createElement(g,i(i({ref:e},m),{},{components:a})):n.createElement(g,i({ref:e},m))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=s;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},26326:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return m},default:function(){return s}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),i=["components"],o={title:"Chapter 4 - Programming Operator",sidebar_position:4},p=void 0,u={unversionedId:"intro-to-C/c04-operator",id:"intro-to-C/c04-operator",title:"Chapter 4 - Programming Operator",description:"Operators are symbols that carry out a specific function. For example '*' multiplies two numbers.",source:"@site/docs/intro-to-C/c04-operator.md",sourceDirName:"intro-to-C",slug:"/intro-to-C/c04-operator",permalink:"/intro-to-C/c04-operator",editUrl:"https://github.com/carobot/carobot.github.io/tree/main/docs/intro-to-C/c04-operator.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Chapter 4 - Programming Operator",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Chapter 3 - Literals",permalink:"/intro-to-C/c03-literals"},next:{title:"Chapter 5 - Constructs",permalink:"/intro-to-C/c05-constructs"}},m=[{value:"Arithemtic Operators",id:"arithemtic-operators",children:[],level:2},{value:"Assignment Operators",id:"assignment-operators",children:[],level:2},{value:"Relational Operators",id:"relational-operators",children:[],level:2},{value:"Logical Operators",id:"logical-operators",children:[],level:2},{value:"Exercise",id:"exercise",children:[],level:2}],d={toc:m};function s(t){var e=t.components,a=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Operators are symbols that carry out a specific function. For example '*' multiplies two numbers."),(0,l.kt)("h2",{id:"arithemtic-operators"},"Arithemtic Operators"),(0,l.kt)("p",null,"Arithemetic operators carry out mathematical operations like multiplications, division, addition and subtraction."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Signs"),(0,l.kt)("th",{parentName:"tr",align:null},"Purpose"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"+"),(0,l.kt)("td",{parentName:"tr",align:null},"Addition")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"Subtraction")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"*"),(0,l.kt)("td",{parentName:"tr",align:null},"Multiplication")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"/"),(0,l.kt)("td",{parentName:"tr",align:null},"Division")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Let\u2019s try using your Arduino board.")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"In your Arduino IDE try dividing 2 integers whose answer is a decimal (Eg: 9/4, 8/7 and 10/56). What do you notice?"),(0,l.kt)("li",{parentName:"ul"},"Even though the answer is a floating-point number, it is changed to an integer because the 2 variables used are integers. "),(0,l.kt)("li",{parentName:"ul"},"Try it again using floating points instead.")),(0,l.kt)("h2",{id:"assignment-operators"},"Assignment Operators"),(0,l.kt)("p",null,"Assignment operators are used when assigning a value to a variable. The most commonly used assignment operator is the equal sign (=)."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Operator"),(0,l.kt)("th",{parentName:"tr",align:null},"Example"),(0,l.kt)("th",{parentName:"tr",align:null},"Meaning"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"="),(0,l.kt)("td",{parentName:"tr",align:null},"a=b"),(0,l.kt)("td",{parentName:"tr",align:null},"a=b")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"+="),(0,l.kt)("td",{parentName:"tr",align:null},"a+=b"),(0,l.kt)("td",{parentName:"tr",align:null},"a = a+b")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-="),(0,l.kt)("td",{parentName:"tr",align:null},"a-=b"),(0,l.kt)("td",{parentName:"tr",align:null},"a = a-b")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"*="),(0,l.kt)("td",{parentName:"tr",align:null},"a*=b"),(0,l.kt)("td",{parentName:"tr",align:null},"a = a*b")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"/="),(0,l.kt)("td",{parentName:"tr",align:null},"a/=b"),(0,l.kt)("td",{parentName:"tr",align:null},"a = a/b")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"%="),(0,l.kt)("td",{parentName:"tr",align:null},"a%=b"),(0,l.kt)("td",{parentName:"tr",align:null},"a = a%b")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},"The symbol '%' returns the remainder of an equation.\n\nExample:\nif a = 11 and b = 5\nThen a%=b will return 1 because 11/5 = 2 R 1\n")),(0,l.kt)("p",null,"Using your own Arduino board, ",(0,l.kt)("strong",{parentName:"p"},"try the following:")),(0,l.kt)("p",null,"Create different expressions using assignment operators."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},"void setup(){\n    int a = 5;\n    int c = a;\n    //Instead of using variable names such as a, b and c,\n    //try using other names such as counter, num and temp\n    int num = 5;\n    int temp = num;\n}\n\nvoid loop(){\n\n}\n")),(0,l.kt)("h2",{id:"relational-operators"},"Relational Operators"),(0,l.kt)("p",null,"A relational operator verifies the relationship ",(0,l.kt)("strong",{parentName:"p"},"between two variables"),". If the statement is proven to be true then the output will be 1, if the statement is false then the output will be 0."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Operator"),(0,l.kt)("th",{parentName:"tr",align:null},"Meaning"),(0,l.kt)("th",{parentName:"tr",align:null},"Example"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"=="),(0,l.kt)("td",{parentName:"tr",align:null},"Equal to"),(0,l.kt)("td",{parentName:"tr",align:null},"22 == 4; false return = 0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},">"),(0,l.kt)("td",{parentName:"tr",align:null},"Greater than"),(0,l.kt)("td",{parentName:"tr",align:null},"22 > 4; true return = 1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"<"),(0,l.kt)("td",{parentName:"tr",align:null},"Less than"),(0,l.kt)("td",{parentName:"tr",align:null},"22 < 4; false return = 0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"!="),(0,l.kt)("td",{parentName:"tr",align:null},"Not equal to"),(0,l.kt)("td",{parentName:"tr",align:null},"22 != 4; true return = 1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},">="),(0,l.kt)("td",{parentName:"tr",align:null},"Greater than or equal to"),(0,l.kt)("td",{parentName:"tr",align:null},"22 >= 4; true return = 1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"<="),(0,l.kt)("td",{parentName:"tr",align:null},"Less than or equal to"),(0,l.kt)("td",{parentName:"tr",align:null},"22 <= 4; false return = 0")))),(0,l.kt)("h2",{id:"logical-operators"},"Logical Operators"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Operator"),(0,l.kt)("th",{parentName:"tr",align:null},"Meaning"),(0,l.kt)("th",{parentName:"tr",align:null},"Example (c=5, d=3)"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"&&"),(0,l.kt)("td",{parentName:"tr",align:null},"Logical and true only if all operands are true."),(0,l.kt)("td",{parentName:"tr",align:null},"((c==5) && (d==3)); false return = 0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"|","|"),(0,l.kt)("td",{parentName:"tr",align:null},"Logical and only true if one operand is true"),(0,l.kt)("td",{parentName:"tr",align:null},"((c==5) ","|","|"," (d==3)); true return = 1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"!"),(0,l.kt)("td",{parentName:"tr",align:null},"Not Logical true only if the operand is 0"),(0,l.kt)("td",{parentName:"tr",align:null},"!(c==5); false return = 0")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"AND")," is a word used to add an additional comment or condition"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"OR")," is used to describe an alternative choice"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"A"),(0,l.kt)("th",{parentName:"tr",align:null},"B"),(0,l.kt)("th",{parentName:"tr",align:null},"AND(&&)"),(0,l.kt)("th",{parentName:"tr",align:null},"OR(","|","|",")"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"1")))),(0,l.kt)("h2",{id:"exercise"},"Exercise"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Start by creating 3 variables with different values. (for more challenges try using three different types, int, float and double)."),(0,l.kt)("li",{parentName:"ol"},"Using ",(0,l.kt)("em",{parentName:"li"},"arithmetic operators")," create an expression where the output will be ",(0,l.kt)("strong",{parentName:"li"},"3"),". "),(0,l.kt)("li",{parentName:"ol"},"Then using any ",(0,l.kt)("em",{parentName:"li"},"relational operator")," create an expression where the output will be ",(0,l.kt)("strong",{parentName:"li"},"1"),". "),(0,l.kt)("li",{parentName:"ol"},"Use any ",(0,l.kt)("em",{parentName:"li"},"logical operator")," to return the value of ",(0,l.kt)("strong",{parentName:"li"},"0"),".")))}s.isMDXComponent=!0}}]);