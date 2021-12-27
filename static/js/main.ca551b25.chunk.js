(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{44:function(e,t,n){},45:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(18),s=n.n(a),i=(n(44),n(45),n(37)),j=n(12),o=n(11),d=n(33),b=n(23),l=n(27),h=n(22),u=n(14),O=n(31),x=n(2);function g(){var e=r.a.useContext(y).results;return Object(x.jsx)(x.Fragment,{children:e.map((function(e,t){return Object(x.jsxs)(O.a,{striped:!0,bordered:!0,hover:!0,children:[Object(x.jsx)("thead",{children:Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{children:e.original_term}),Object(x.jsx)("th",{children:"Distance"}),Object(x.jsx)("th",{children:"Score"}),Object(x.jsx)("th",{children:"POS Tags"})]})}),Object(x.jsx)("tbody",{children:e.suggestions.map((function(e,t){return Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:e.term}),Object(x.jsx)("td",{children:e.distance}),Object(x.jsx)("td",{children:e.score}),Object(x.jsx)("td",{children:e.tags.join(", ")})]},t)}))})]})}))})}var m=n(35),p=n(15),v=r.a.createContext({lang:"hy"});function f(){var e=r.a.useState("hy"),t=Object(j.a)(e,2),n=t[0],c=t[1],a=r.a.useState("tokenize"),s=Object(j.a)(a,2),i=s[0],d=s[1];return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("div",{style:{marginBottom:"2em"},children:[Object(x.jsxs)(o.a.Label,{children:[" ",Object(x.jsx)("b",{children:" Params "})," "]}),Object(x.jsxs)(h.a,{children:[Object(x.jsx)(u.a,{children:Object(x.jsxs)(m.a,{type:"radio",value:n,onChange:function(e){return c(e)},name:"optionsLang",children:[Object(x.jsx)(p.a,{id:"tbg-btn-1",value:"hy",variant:"outline-secondary",children:"Eastern"}),Object(x.jsx)(p.a,{id:"tbg-btn-2",value:"hyw",variant:"outline-secondary",children:"Western"})]})}),Object(x.jsx)("br",{}),Object(x.jsxs)(u.a,{children:[Object(x.jsxs)(m.a,{type:"radio",value:i,onChange:function(e){return d(e)},name:"optionsMode",children:[Object(x.jsx)(p.a,{id:"tbg-btn-1",value:"tokenize",variant:"outline-secondary",children:"Tokens"}),Object(x.jsx)(p.a,{id:"tbg-btn-2",value:"phrase",variant:"outline-secondary",children:"Phrase"})]}),Object(x.jsx)("br",{})]})]})]}),Object(x.jsx)(v.Provider,{value:{lang:n,mode:i},children:Object(x.jsx)(S,{})})]})}var y=r.a.createContext({results:[]}),S=function(){var e=r.a.useState(""),t=Object(j.a)(e,2),n=t[0],c=t[1],a=r.a.useState([]),s=Object(j.a)(a,2),i=s[0],O=s[1],m=r.a.useState("secondary"),p=Object(j.a)(m,2),f=p[0],S=p[1],C=r.a.useState("Status"),k=Object(j.a)(C,2),P=k[0],T=k[1],F=r.a.useContext(v),B=F.lang,D=F.mode;return Object(x.jsxs)("div",{children:[Object(x.jsx)("div",{style:{marginBottom:"1em"},children:Object(x.jsx)(o.a,{onSubmit:function(e){e.preventDefault();var t={word:n};S("primary"),T("Loading..."),fetch("https://vortan-api.herokuapp.com/suggest?lang="+B+"&mode="+D,{method:"POST",headers:{"Content-Type":"application/json; charset=UTF-8"},body:JSON.stringify(t)}).then((function(e){e.json().then((function(e){O(e.tokens)})),S("success"),T("Success")})).catch((function(e){console.error("Error:",e),S("danger"),T("Error")}))},children:Object(x.jsxs)(h.a,{children:[Object(x.jsx)(u.a,{children:Object(x.jsxs)(o.a.Label,{children:[" ",Object(x.jsx)("b",{children:" Input Term "}),"  "]})}),Object(x.jsx)(u.a,{children:Object(x.jsx)(o.a.Group,{children:Object(x.jsxs)(d.a,{children:[Object(x.jsx)(o.a.Control,{type:"text",placeholder:"\u057f\u057a\u0580\u0578\u0581",onChange:function(e){e.preventDefault(),c(e.target.value)}.bind(undefined)}),Object(x.jsx)(d.a.Append,{children:Object(x.jsx)(b.a,{type:"submit",variant:"primary",children:"Submit"})})]})})}),Object(x.jsx)(u.a,{children:Object(x.jsx)(l.a,{variant:f,children:P})})]})})}),Object(x.jsx)(y.Provider,{value:{results:i},children:Object(x.jsx)(g,{})})]})},C=n(34),k=function(){return Object(x.jsx)("div",{style:{marginBottom:"1em"},children:Object(x.jsx)(C.a,{bg:"light",children:Object(x.jsx)(C.a.Brand,{children:"Vortan Spellcheck Demo"})})})},P=function(){return Object(x.jsxs)("div",{style:{margin:"1em",maxWidth:"400px"},children:[Object(x.jsx)(k,{}),Object(x.jsx)(l.a,{variant:"primary",children:"The first request might take much longer than subsequent ones because it triggers the backend to wake up from hibernation."}),Object(x.jsx)(f,{})]})};var T=function(){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)(i.a,{children:[Object(x.jsx)("meta",{charSet:"utf-8"}),Object(x.jsx)("title",{children:"Vortan Demo"}),Object(x.jsx)("meta",{"http-equiv":"Content-Security-Policy",content:"upgrade-insecure-requests"})]}),Object(x.jsx)(P,{})]})},F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,54)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};n(51);s.a.render(Object(x.jsx)(r.a.StrictMode,{children:Object(x.jsx)(T,{})}),document.getElementById("root")),F()}},[[52,1,2]]]);
//# sourceMappingURL=main.ca551b25.chunk.js.map