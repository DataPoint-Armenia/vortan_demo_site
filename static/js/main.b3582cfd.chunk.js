(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{26:function(e,t,n){},27:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),s=n(8),i=n.n(s),j=(n(26),n(27),n(18)),a=n(15),d=n(3),o=function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(a.a,{bg:"light",children:Object(d.jsx)(a.a.Brand,{children:"Vortan"})})})},u=n(16),h=n(9),l=n(21),b=n(14);function x(){var e=r.a.useContext(O).results;return Object(d.jsx)("div",{style:{padding:"1em"},children:Object(d.jsxs)(b.a,{striped:!0,bordered:!0,hover:!0,children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"Suggest"}),Object(d.jsx)("th",{children:"Distance"}),Object(d.jsx)("th",{children:"Score"})]})}),Object(d.jsx)("tbody",{children:e.map((function(e,t){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:e.term}),Object(d.jsx)("td",{children:e.distance}),Object(d.jsx)("td",{children:e.score})]},t)}))})]})})}var O=r.a.createContext({results:[]}),g=function(){var e=r.a.useState(""),t=Object(u.a)(e,2),n=t[0],c=t[1],s=r.a.useState([]),i=Object(u.a)(s,2),j=i[0],a=i[1];return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)(h.a,{style:{padding:"1em"},onSubmit:function(e){e.preventDefault();var t={word:n};fetch("http://45.79.68.92/suggest",{method:"POST",headers:{"Content-Type":"application/json; charset=UTF-8"},body:JSON.stringify(t)}).then((function(e){e.json().then((function(e){a(e.suggest)}))}))},children:[Object(d.jsxs)(h.a.Group,{children:[Object(d.jsx)(h.a.Label,{children:"Input Term"}),Object(d.jsx)(h.a.Control,{type:"text",placeholder:"\u057f\u057a\u0580\u0578\u0581",onChange:function(e){c(e.target.value)}.bind(undefined)}),Object(d.jsx)(h.a.Text,{className:"text-muted",children:"Only supports single words for now"})]}),Object(d.jsx)(l.a,{variant:"primary",type:"submit",children:"Submit"})]}),Object(d.jsx)(O.Provider,{value:{results:j},children:Object(d.jsx)(x,{})})]})},p=function(){return Object(d.jsx)("div",{style:{margin:"1em",maxWidth:"400px"},children:Object(d.jsx)(g,{})})};var f=function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)(j.a,{children:[Object(d.jsx)("meta",{charSet:"utf-8"}),Object(d.jsx)("title",{children:"Vortan Demo"}),Object(d.jsx)("meta",{"http-equiv":"Content-Security-Policy",content:"upgrade-insecure-requests"})]}),Object(d.jsx)(o,{}),Object(d.jsx)(p,{})]})},m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,36)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),s(e),i(e)}))};n(33);i.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(f,{})}),document.getElementById("root")),m()}},[[34,1,2]]]);
//# sourceMappingURL=main.b3582cfd.chunk.js.map