(self.webpackChunkuniswap=self.webpackChunkuniswap||[]).push([[4819],{6133:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return u}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),o={id:"transact",title:"Transact"},l="getExecutionDetails",s={unversionedId:"reference/transact",id:"version-1.0.0/reference/transact",isDocsHomePage:!1,title:"Transact",description:"The function formats trade data for execution against the relevant Uniswap exchange.",source:"@site/SDK_versioned_docs/version-1.0.0/reference/06-transact.md",sourceDirName:"reference",slug:"/reference/transact",permalink:"/sdk/1.0.0/reference/transact",version:"1.0.0",sidebarPosition:6,frontMatter:{id:"transact",title:"Transact"},sidebar:"version-V1/sdksidebar",previous:{title:"Orchestration",permalink:"/sdk/1.0.0/reference/orchestration"},next:{title:"Constants",permalink:"/sdk/1.0.0/reference/constants"}},c=[{value:"Function Signature",id:"function-signature",children:[]},{value:"Input Parameters",id:"input-parameters",children:[]},{value:"Example Usage",id:"example-usage",children:[]}],p={toc:c};function u(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"getexecutiondetails"},"getExecutionDetails"),(0,i.kt)("p",null,"The function formats trade data for execution against the relevant Uniswap exchange."),(0,i.kt)("h2",{id:"function-signature"},"Function Signature"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"export function getExecutionDetails(\n  trade: TradeDetails,\n  maxSlippage?: number,\n  deadline?: number,\n  recipient?: string\n): ExecutionDetails;\n")),(0,i.kt)("h2",{id:"input-parameters"},"Input Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"trade"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"TradeDetails")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The trade to execute.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"maxSlippage?"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The maximum slippage to allow, in basis points. Defaults to 200 ","(","2%",")",".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"deadline?"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:"left"},"When the transaction will expire. Defaults to 10 minutes in the future.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"recipient?"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:"left"},"An optional recipient address. Defaults to the ",(0,i.kt)("inlineCode",{parentName:"td"},"msg.sender"))))),(0,i.kt)("h2",{id:"example-usage"},"Example Usage"),(0,i.kt)("p",null,"Method arguments are returned as one of: ",(0,i.kt)("inlineCode",{parentName:"p"},"BigNumber"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"number"),", or ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),". ",(0,i.kt)("inlineCode",{parentName:"p"},"BigNumber"),"s are large number objects, ",(0,i.kt)("inlineCode",{parentName:"p"},"numbers")," are small numbers in base 10, and ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),"s are addresses."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'const tradeDetails: TradeDetails = tradeExactEthForTokensWithData(\n  reserves,\n  "1000000000000000000"\n);\n\nconst executionDetails: ExecutionDetails = await getExecutionDetails(\n  tradeDetails\n);\n\n/*\n{\n  // the address of the relevant exchange\n  exchangeAddress: 0x09cabEC1eAd1c0Ba254B09efb3EE13841712bE14,\n\n  // the name of the method that must be called\n  methodName: "ethToTokenSwapInput",\n\n  // the id of the method name\n  methodId: "0xf39b5b9b",\n\n  // the ether value that must be sent with the transaction\n  value: <BigNumber>,\n\n  // method arguments as an array\n  methodArguments: MethodArgument[]\n}\n*/\n')))}u.isMDXComponent=!0},3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);