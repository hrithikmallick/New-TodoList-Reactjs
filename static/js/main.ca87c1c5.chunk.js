(this.webpackJsonpnewtodo=this.webpackJsonpnewtodo||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var c=n(1),o=n.n(c),i=n(6),r=n.n(i),s=(n(12),n(7)),a=n(5),l=(n(13),n(0)),j=function(t){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"todo_style",children:[Object(l.jsx)("i",{className:"fa fa-times","aria-hidden":"true",onClick:function(){t.onSelect(t.id)}}),Object(l.jsx)("li",{children:t.text})]})})},u=function(){var t,e=Object(c.useState)(),n=Object(a.a)(e,2),o=n[0],i=n[1];t=null===localStorage.getItem("todos")?[]:JSON.parse(localStorage.getItem("todos"));var r=Object(c.useState)(t),u=Object(a.a)(r,2),d=u[0],b=u[1],f=function(t){t.preventDefault(),b((function(t){return[].concat(Object(s.a)(t),[o])}))},O=function(t){b((function(e){return e.filter((function(e,n){return n!==t}))})),localStorage.setItem("todos",JSON.stringify(d))};return Object(c.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(d))}),[d]),Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:"main_div",children:Object(l.jsxs)("div",{className:"center_div",children:[Object(l.jsx)("br",{}),Object(l.jsx)("h1",{children:"ToDo list"}),Object(l.jsx)("br",{}),Object(l.jsxs)("form",{onSubmit:f,children:[Object(l.jsx)("input",{type:"text",name:"todo",onChange:function(t){i(t.target.value)},placeholder:"Add a Item"}),Object(l.jsx)("button",{onClick:f,children:"+"})]}),Object(l.jsx)("ol",{children:d.map((function(t,e){return Object(l.jsx)(j,{id:e,onSelect:O,text:t},e)}))})]})})})},d=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(e){var n=e.getCLS,c=e.getFID,o=e.getFCP,i=e.getLCP,r=e.getTTFB;n(t),c(t),o(t),i(t),r(t)}))};r.a.render(Object(l.jsx)(o.a.StrictMode,{children:Object(l.jsx)(u,{})}),document.getElementById("root")),d()}},[[15,1,2]]]);
//# sourceMappingURL=main.ca87c1c5.chunk.js.map