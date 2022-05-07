"use strict";(self.webpackChunklearn_at_carobotix=self.webpackChunklearn_at_carobotix||[]).push([[5141],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=s(n),p=a,m=h["".concat(c,".").concat(p)]||h[p]||d[p]||i;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},3267:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return h}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],l={title:"TinkerKit LCD - Tutorial 06 - TWI",sidebar_position:6,slug:"tinkerkit-lcd-tutorial-06-arduino-2-wires"},c=void 0,s={unversionedId:"tinkerkit/tinkerkit-lcd-6",id:"tinkerkit/tinkerkit-lcd-6",title:"TinkerKit LCD - Tutorial 06 - TWI",description:"The TinkerKit LCD module also supports TWI connections. TWI stands for \u201cTwo-Wire Interface\u201d and it\u2019s another way to call the I2C bus technology. Basically it allows to connect multiple devices in series. This means that you can hook a large number of LCD screens, connecting them \u201cin-line\u201d using the two TWI ports, one for input and one for output. One of them must be the master (or you can use a TInkerKit! shield), while the others must run the TWI firmware. The TWI port has four pins, that\u2019s why we need the 4-pin jumper wire (Molex KK 2.54mm) cable to connect them.",source:"@site/docs/tinkerkit/tinkerkit-lcd-6.md",sourceDirName:"tinkerkit",slug:"/tinkerkit/tinkerkit-lcd-tutorial-06-arduino-2-wires",permalink:"/tinkerkit/tinkerkit-lcd-tutorial-06-arduino-2-wires",editUrl:"https://github.com/carobot/carobot.github.io/tree/main/docs/tinkerkit/tinkerkit-lcd-6.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"TinkerKit LCD - Tutorial 06 - TWI",sidebar_position:6,slug:"tinkerkit-lcd-tutorial-06-arduino-2-wires"},sidebar:"tutorialSidebar",previous:{title:"TinkerKit LCD - Tutorial 05 - Arduino & 2 Wires",permalink:"/tinkerkit/tinkerkit-lcd-tutorial-05-arduino-2-wires"}},u=[{value:"Verify Requirement",id:"verify-requirement",children:[],level:2},{value:"Example Code",id:"example-code",children:[],level:2},{value:"LCD Module in TWI Chain",id:"lcd-module-in-twi-chain",children:[],level:2}],d={toc:u};function h(e){var t=e.components,l=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://www.canadarobotix.com/products/1654"},"TinkerKit LCD module")," also supports TWI connections. TWI stands for \u201cTwo-Wire Interface\u201d and it\u2019s another way to call the I2C bus technology. Basically it allows to connect multiple devices in series. This means that you can hook a large number of LCD screens, connecting them \u201cin-line\u201d using the two TWI ports, one for input and one for output. One of them must be the master (or you can use a TInkerKit! shield), while the others must run the TWI firmware. The TWI port has four pins, that\u2019s why we need the ",(0,i.kt)("a",{parentName:"p",href:"https://www.canadarobotix.com/products/1872"},"4-pin jumper wire (Molex KK 2.54mm)")," cable to connect them."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(94601).Z,width:"734",height:"489"})),(0,i.kt)("h2",{id:"verify-requirement"},"Verify Requirement"),(0,i.kt)("p",null,"First of all let\u2019s connect two modules, then we move to the code. We need the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/carobot/TKLCD-Library"},"TKLCD library")," that you can download from the link provided."),(0,i.kt)("p",null,"Between the examples of the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/carobot/TKLCD-Library"},"TKLCD library"),", there is one that is called ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/carobot/TKLCD-Library/blob/master/TKLCD/examples/TwiFirmware/TwiFirmware.ino"},"TwiFirmware"),". We have to load it into one of or our LCD modules, the other module doesn\u2019t need a firmware."),(0,i.kt)("h2",{id:"example-code"},"Example Code"),(0,i.kt)("p",null,"Now we have to declare our LCDs. One is a regular TKLCD_Local, while the TWI, it\u2019s a TKLCD_Twi"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"TKLCD_Local local;\nTKLCD_Twi twi;\n")),(0,i.kt)("p",null,"Then in the setup we initialize them normally"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"local.begin();\ntwi.begin();\n")),(0,i.kt)("p",null,"After this we can use them in the loop as a normal TKLCD, let\u2019s try to write something on them:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},'local.print("Hi TWI");\ndelay(2000);\nlocal.clear();\n \ntwi.println("Hi Local");\ndelay(2000);\ntwi.clear();\n')),(0,i.kt)("h2",{id:"lcd-module-in-twi-chain"},"LCD Module in TWI Chain"),(0,i.kt)("p",null,"Ok, that was rather easy, but the cool thing about TWI is that you can connect as much modules as you want. Now we try to connect three LCD modules. One will be the local master and the other two are TWI slaves. We have to load them with the TWI firmware."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(56993).Z,width:"734",height:"489"})),(0,i.kt)("p",null,"If we have more than one TWI, in order to understand which one we are controlling we need to define a different address for each. Let\u2019s open the TwiFirmware example in the TKLCD library and then, at line 88, there\u2019s this command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"#define MATRIX_I2CADDR 0x33 // change this in order to communicate with another LCD\n")),(0,i.kt)("p",null,"Every TWI module has an address that is defined in this line of the firmware program. By default it\u2019s ",(0,i.kt)("inlineCode",{parentName:"p"},"0x33")," but we can change it. If we have more than one module we have to define a different address for each module. Now we set one address to ",(0,i.kt)("inlineCode",{parentName:"p"},"0x33")," and the other to ",(0,i.kt)("inlineCode",{parentName:"p"},"0x44"),", then we upload them."),(0,i.kt)("p",null,"Now all we have to do is program the master module. We don\u2019t have to change barely anything from our program, we still have to declare just one TWI, but in the loop we have to set a different address everytime that we want to change the target TWI LCD. This is done using lcd.",(0,i.kt)("inlineCode",{parentName:"p"},"setActiveAddress(NEW_ADDRESS)"),"."),(0,i.kt)("p",null,"Here what we do is writing on the three screens in sequence:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},'local.print("I\'m a local");\ndelay(2000);\nlocal.clear();\n \ntwi.setActiveAddress(0x33);\ntwi.println("I\'m TWI 0x33");\ndelay(2000);\ntwi.clear();\n \ntwi.setActiveAddress(0x44);\ntwi.println("I\'m TWI 0x44");\ndelay(2000);\ntwi.clear();\n')),(0,i.kt)("p",null,"By changing addresses, you can connect a large array of TWI devices."))}h.isMDXComponent=!0},56993:function(e,t,n){t.Z=n.p+"assets/images/twi-chain-ac03a005a7c9f35ff1e961da6e05ac61.jpg"},94601:function(e,t,n){t.Z=n.p+"assets/images/twi-zoom-6d17f798f8a0e298d8c64eb5e0496020.jpg"}}]);