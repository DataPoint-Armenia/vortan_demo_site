(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{37:function(e,t,n){},38:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(13),s=n.n(a),i=(n(37),n(38),n(29)),j=n(12),l=n(7),o=n(32),d=n(20),h=n(14),b=n(26),u=n(24),x=n(2);function O(){var e=r.a.useContext(p).results;return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)(u.a,{striped:!0,bordered:!0,hover:!0,children:[Object(x.jsx)("thead",{children:Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{children:"Suggest"}),Object(x.jsx)("th",{children:"Distance"}),Object(x.jsx)("th",{children:"Score"})]})}),Object(x.jsx)("tbody",{children:e.map((function(e,t){return Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:e.term}),Object(x.jsx)("td",{children:e.distance}),Object(x.jsx)("td",{children:e.score})]},t)}))})]})})}var g=r.a.createContext({lang:"hy"});function m(){var e=r.a.useState("hy"),t=Object(j.a)(e,2),n=t[0],c=t[1];return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("div",{style:{marginBottom:"2em"},children:[Object(x.jsxs)(l.a.Label,{children:[" ",Object(x.jsx)("b",{children:" Params "})," "]}),Object(x.jsxs)("div",{className:"mb-2",onChange:function(e){console.log(e.target.value),c(e.target.value)},children:[Object(x.jsx)(l.a.Check,{inline:!0,defaultChecked:!0,label:"Eastern",value:"hy",type:"radio",name:"lang_group",id:"inline-radio-1"}),Object(x.jsx)(l.a.Check,{inline:!0,label:"Western",value:"hyw",type:"radio",name:"lang_group",id:"inline-radio-2"})]},"inline-radio")]}),Object(x.jsx)(g.Provider,{value:{lang:n},children:Object(x.jsx)(v,{})})]})}var p=r.a.createContext({results:[]}),v=function(){var e=r.a.useState(""),t=Object(j.a)(e,2),n=t[0],c=t[1],a=r.a.useState([]),s=Object(j.a)(a,2),i=s[0],u=s[1],m=r.a.useState("secondary"),v=Object(j.a)(m,2),f=v[0],y=v[1],S=r.a.useState("Status"),C=Object(j.a)(S,2),k=C[0],F=C[1],P=r.a.useContext(g).lang;return Object(x.jsxs)("div",{children:[Object(x.jsx)("div",{style:{marginBottom:"1em"},children:Object(x.jsxs)(l.a,{onSubmit:function(e){e.preventDefault();var t={word:n};console.log(P),y("primary"),F("Loading..."),fetch("https://vortan-api.herokuapp.com/suggest?lang="+P,{method:"POST",headers:{"Content-Type":"application/json; charset=UTF-8"},body:JSON.stringify(t)}).then((function(e){e.json().then((function(e){u(e.suggest)})),y("success"),F("Success")})).catch((function(e){console.error("Error:",e),y("danger"),F("Error")}))},children:[Object(x.jsxs)(l.a.Label,{children:[" ",Object(x.jsx)("b",{children:" Input Term "}),"  "]}),Object(x.jsxs)(b.a,{children:[Object(x.jsx)(h.a,{xs:9,children:Object(x.jsx)(l.a.Group,{children:Object(x.jsx)(l.a.Control,{type:"text",placeholder:"\u057f\u057a\u0580\u0578\u0581",onChange:function(e){e.preventDefault(),c(e.target.value)}.bind(undefined)})})}),Object(x.jsx)(h.a,{children:Object(x.jsx)(o.a,{variant:"primary",type:"submit",block:!0,children:"Submit"})})]}),Object(x.jsx)(b.a,{children:Object(x.jsx)(h.a,{children:Object(x.jsx)(d.a,{variant:f,children:k})})})]})}),Object(x.jsx)(p.Provider,{value:{results:i},children:Object(x.jsx)(O,{})})]})},f=n(27),y=function(){return Object(x.jsx)("div",{style:{marginBottom:"1em"},children:Object(x.jsx)(f.a,{bg:"light",children:Object(x.jsx)(f.a.Brand,{children:"Vortan Spellcheck Demo"})})})},S=function(){return Object(x.jsxs)("div",{style:{margin:"1em",maxWidth:"400px"},children:[Object(x.jsx)(y,{}),Object(x.jsx)(d.a,{variant:"primary",children:"The first request might take much longer than subsequent ones because it triggers the backend to wake up from hibernation."}),Object(x.jsx)(m,{})]})};var C=function(){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)(i.a,{children:[Object(x.jsx)("meta",{charSet:"utf-8"}),Object(x.jsx)("title",{children:"Vortan Demo"}),Object(x.jsx)("meta",{"http-equiv":"Content-Security-Policy",content:"upgrade-insecure-requests"})]}),Object(x.jsx)(S,{})]})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,48)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};n(44);s.a.render(Object(x.jsx)(r.a.StrictMode,{children:Object(x.jsx)(C,{})}),document.getElementById("root")),k()}},[[45,1,2]]]);
//# sourceMappingURL=main.93f2338a.chunk.js.map