(this["webpackJsonpusereducer-6-march-btn-42"]=this["webpackJsonpusereducer-6-march-btn-42"]||[]).push([[0],{11:function(e,t,c){},12:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c(4),a=c.n(r),u=c(5),s=c(2);function o(e,t){switch(t.type){case"increment":return Object(s.a)(Object(s.a)({},e),{},{counter:e.counter+t.payload});case"decrement":return Object(s.a)(Object(s.a)({},e),{},{counter:e.counter-t.payload});default:return e}}var i=c(0),d=Object(n.createContext)(null),j=function(e){var t=e.children,c=Object(n.useReducer)(o,{counter:0}),r=Object(u.a)(c,2),a=r[0],s=r[1];return Object(i.jsx)(d.Provider,{value:{state:a,dispatch:s},children:t})};c(11);function b(){var e=Object(n.useContext)(d),t=e.state,c=e.dispatch;return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsxs)("h1",{children:[" ",t.counter," "]}),Object(i.jsxs)("button",{onClick:function(){return c({type:"increment",payload:42})},children:[" ","+"," "]}),Object(i.jsxs)("button",{onClick:function(){c({type:"decrement",payload:10})},children:[" ","-"," "]})]})}var l=document.getElementById("root");a.a.render(Object(i.jsx)(n.StrictMode,{children:Object(i.jsx)(j,{children:Object(i.jsx)(b,{})})}),l)}},[[12,1,2]]]);
//# sourceMappingURL=main.018c1f84.chunk.js.map