(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{38:function(e,t,n){},39:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),s=n(11),i=n.n(s),a=(n(38),n(39),n(28)),j=n(15),o=n(12),d=n(33),u=n(20),h=n(31),l=n(14),b=n(32),x=n(24),O=n(4);function p(){var e=r.a.useContext(g).results;return Object(O.jsxs)(x.a,{striped:!0,bordered:!0,hover:!0,children:[Object(O.jsx)("thead",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:"Suggest"}),Object(O.jsx)("th",{children:"Distance"}),Object(O.jsx)("th",{children:"Score"})]})}),Object(O.jsx)("tbody",{children:e.map((function(e,t){return Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:e.term}),Object(O.jsx)("td",{children:e.distance}),Object(O.jsx)("td",{children:e.score})]},t)}))})]})}var g=r.a.createContext({results:[]}),m=function(){var e=r.a.useState(""),t=Object(j.a)(e,2),n=t[0],c=t[1],s=r.a.useState([]),i=Object(j.a)(s,2),a=i[0],x=i[1],m=r.a.useState("secondary"),f=Object(j.a)(m,2),v=f[0],y=f[1],S=r.a.useState("Status"),C=Object(j.a)(S,2),T=C[0],k=C[1];return Object(O.jsxs)("div",{style:{padding:"1em"},children:[Object(O.jsxs)(o.a,{onSubmit:function(e){e.preventDefault();var t={word:n};y("primary"),k("Loading..."),fetch("https://vortan-api.herokuapp.com/suggest",{method:"POST",headers:{"Content-Type":"application/json; charset=UTF-8"},body:JSON.stringify(t)}).then((function(e){e.json().then((function(e){x(e.suggest)})),y("success"),k("Success")})).catch((function(e){console.error("Error:",e),y("danger"),k("Error")}))},children:[Object(O.jsxs)(o.a.Group,{children:[Object(O.jsx)(o.a.Label,{children:"Input Term"}),Object(O.jsx)(o.a.Control,{type:"text",placeholder:"\u057f\u057a\u0580\u0578\u0581",onChange:function(e){c(e.target.value)}.bind(undefined)}),Object(O.jsx)(o.a.Text,{className:"text-muted",children:"Only supports single words for now"})]}),Object(O.jsx)(h.a,{fluid:!0,children:Object(O.jsxs)(b.a,{children:[Object(O.jsx)(l.a,{children:Object(O.jsx)(d.a,{variant:"primary",type:"submit",size:"lg",children:"Submit"})}),Object(O.jsx)(l.a,{children:Object(O.jsx)(u.a,{variant:v,children:T})})]})})]}),Object(O.jsx)(g.Provider,{value:{results:a},children:Object(O.jsx)(p,{})})]})},f=n(26),v=function(){return Object(O.jsx)("div",{style:{marginBottom:"1em"},children:Object(O.jsx)(f.a,{bg:"light",children:Object(O.jsx)(f.a.Brand,{children:"Vortan Spellcheck Demo"})})})},y=function(){return Object(O.jsxs)("div",{style:{margin:"1em",maxWidth:"400px"},children:[Object(O.jsx)(v,{}),Object(O.jsx)(u.a,{variant:"primary",children:"The first request might take much longer than subsequent ones because it triggers the backend to wake up from hibernation."}),Object(O.jsx)(m,{})]})};var S=function(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)(a.a,{children:[Object(O.jsx)("meta",{charSet:"utf-8"}),Object(O.jsx)("title",{children:"Vortan Demo"}),Object(O.jsx)("meta",{"http-equiv":"Content-Security-Policy",content:"upgrade-insecure-requests"})]}),Object(O.jsx)(y,{})]})},C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,48)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),s(e),i(e)}))};n(45);i.a.render(Object(O.jsx)(r.a.StrictMode,{children:Object(O.jsx)(S,{})}),document.getElementById("root")),C()}},[[46,1,2]]]);
//# sourceMappingURL=main.9b644e43.chunk.js.map