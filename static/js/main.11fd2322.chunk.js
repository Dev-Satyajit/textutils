(this.webpackJsonptextutils=this.webpackJsonptextutils||[]).push([[0],{26:function(e,t,a){},27:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),s=a(17),r=a.n(s),l=(a(26),a(27),a(0));function i(){return Object(l.jsx)("div",{className:"footer",children:Object(l.jsx)("div",{className:"footer-text",children:"Satyajit \xa9 2021"})})}var o=a(10);function b(e){return Object(l.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary fixed-top",children:Object(l.jsxs)("div",{className:"container-fluid",children:[Object(l.jsx)(o.b,{className:"navbar-brand",to:"/textutils/",children:e.title}),Object(l.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(l.jsx)("span",{className:"navbar-toggler-icon"})}),Object(l.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(l.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(o.b,{className:"nav-link active","aria-current":"page",to:"/textutils/",children:"Home"})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(o.b,{className:"nav-link",to:"/textutils/about",children:"About"})}),Object(l.jsxs)("li",{className:"nav-item dropdown",children:[Object(l.jsx)("a",{className:"nav-link dropdown-toggle",href:"/",id:"navbarDropdown",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false",children:"Account"}),Object(l.jsxs)("ul",{className:"dropdown-menu","aria-labelledby":"navbarDropdown",children:[Object(l.jsx)("li",{children:Object(l.jsx)("a",{className:"dropdown-item",href:"/textutils",children:"Profile"})}),Object(l.jsx)("li",{children:Object(l.jsx)("a",{className:"dropdown-item",href:"/textutils",children:"Reset Password"})}),Object(l.jsx)("li",{children:Object(l.jsx)("hr",{className:"dropdown-divider"})}),Object(l.jsx)("li",{children:Object(l.jsx)("a",{className:"dropdown-item",href:"/textutils",children:"Logout"})})]})]})]}),Object(l.jsxs)("form",{className:"d-flex",children:[Object(l.jsx)("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),Object(l.jsx)("button",{className:"btn btn-outline-light",type:"submit",children:"Search"})]})]})]})})}b.defaultProps={title:"Title here"};var j=a(9),d=a(12);function h(e){var t=Object(n.useState)(""),a=Object(j.a)(t,2),c=a[0],s=a[1];if(0===c.length)var r=0;else r=c.split(" ").length;var i=Object(n.useState)({color:"inherit"}),o=Object(j.a)(i,2),b=o[0],h=o[1],x=Object(n.useState)({color:"inherit"}),u=Object(j.a)(x,2),m=u[0],O=u[1],p=Object(n.useState)("btn btn-primary mx-2"),v=Object(j.a)(p,2),g=v[0],f=v[1],N=Object(n.useState)("btn btn-outline-primary mx-2"),w=Object(j.a)(N,2),y=w[0],C=w[1],S=Object(n.useState)("Enable dark mode"),k=Object(j.a)(S,2),P=k[0],T=k[1];return Object(l.jsxs)("div",{className:"textForm",style:b,children:[Object(l.jsx)(d.a,{children:Object(l.jsx)("title",{children:"TextUtils | Home"})}),Object(l.jsx)("button",{className:g+" my-3",onClick:function(){"inherit"===b.color?(T("Disable dark mode"),h({color:"white",backgroundColor:"#18191A"}),O({color:"white",backgroundColor:"#242526",border:"none"}),f("btn btn-outline-light mx-2"),C("btn btn-light mx-2")):(T("Enable dark mode"),h({color:"inherit"}),O({}),f("btn btn-primary mx-2"),C("btn btn-outline-primary mx-2"))},children:P}),Object(l.jsxs)("div",{className:"container my-3",children:[Object(l.jsx)("h1",{children:e.heading}),Object(l.jsx)("div",{className:"mb-3",children:Object(l.jsx)("textarea",{className:"form-control",value:c,onChange:function(e){s(e.target.value)},id:"myBox",rows:"8",style:m})}),Object(l.jsx)("button",{className:g,onClick:function(){var e=c.toUpperCase();s(e)},children:"Convert to UPPERCASE"}),Object(l.jsx)("button",{className:g,onClick:function(){var e=c.toLowerCase();s(e)},children:"Convert to lowercase"}),Object(l.jsx)("button",{type:"button",className:y,onClick:function(){s("")},children:"Clear text"})]}),Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("h1",{children:"Text summery"}),Object(l.jsxs)("p",{children:[r," words and ",c.length," characters"]}),Object(l.jsx)("h2",{children:"Preview"}),Object(l.jsx)("p",{children:c})]})]})}var x=a(3);function u(){return Object(l.jsxs)("div",{className:"about",children:[Object(l.jsx)(d.a,{children:Object(l.jsx)("title",{children:"TextUtils | About"})}),Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("h1",{children:"About TextUtils"}),Object(l.jsx)("p",{children:"You can use this application to convert your text to UPPERCASE, lowercase, Sentence case and also can determine the number of words and characters."})]})]})}var m=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)(o.a,{children:[Object(l.jsx)(b,{title:"TextUtils"}),Object(l.jsxs)(x.c,{children:[Object(l.jsx)(x.a,{path:"/textutils/about",children:Object(l.jsx)(u,{})}),Object(l.jsx)(x.a,{path:"/textutils/",children:Object(l.jsx)(h,{heading:"Enter your text here"})})]}),Object(l.jsx)(i,{})]})})},O=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,34)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),s(e),r(e)}))};r.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(m,{})}),document.getElementById("root")),O()}},[[33,1,2]]]);
//# sourceMappingURL=main.11fd2322.chunk.js.map