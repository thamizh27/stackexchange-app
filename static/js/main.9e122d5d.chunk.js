(this.webpackJsonpstackexchange=this.webpackJsonpstackexchange||[]).push([[0],{10:function(e,t,c){},11:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c(1),a=c.n(s),i=c(4),r=c.n(i),j=c(2),o=(c(10),function(e){var t=e.searchText,c=Object(s.useState)(""),a=Object(j.a)(c,2),i=a[0],r=a[1];return Object(n.jsx)("div",{children:Object(n.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(i),r("")},children:[Object(n.jsx)("input",{className:"search",value:i,type:"text",placeholder:"Search here...",onChange:function(e){return r(e.target.value)}}),Object(n.jsx)("button",{type:"submit",children:"Submit"})]})})}),u=function(e){var t=e.question;return Object(n.jsxs)("div",{className:"content",children:[Object(n.jsxs)("h2",{children:["Question ID - ",t.owner.user_id]}),Object(n.jsx)("p",{className:"question",children:t.title}),t.answer_count<=1?Object(n.jsxs)("p",{className:"count",children:["This question contain"," ",Object(n.jsx)("span",{className:"number",children:t.answer_count})," answer."]}):Object(n.jsxs)("p",{className:"count",children:["This question contains"," ",Object(n.jsx)("span",{className:"number",children:t.answer_count})," answers."]}),Object(n.jsx)("div",{children:t.tags.map((function(e,t){return Object(n.jsxs)("span",{className:"tags",children:["# ",e]},t)}))})]})},l=function(){return Object(n.jsx)("div",{className:"loading",children:Object(n.jsx)("p",{children:"Loading. Please wait..."})})};var d=function(){return Object(n.jsx)("div",{className:"loading",children:Object(n.jsx)("p",{children:"Results Not Found..."})})};var h=function(){var e=Object(s.useState)("mediaquery"),t=Object(j.a)(e,2),c=t[0],a=t[1],i=Object(s.useState)([]),r=Object(j.a)(i,2),h=r[0],b=r[1],O=Object(s.useState)(!1),x=Object(j.a)(O,2),p=x[0],m=x[1];return Object(s.useEffect)((function(){m(!0),fetch("https://api.stackexchange.com/2.2/search/advanced?page=1&pagesize=20&order=desc&sort=activity&q=".concat(c,"&accepted=False&closed=False&migrated=False&notice=False&site=stackoverflow")).then((function(e){return e.json()})).then((function(e){b(e.items),m(!1)})).catch((function(e){console.log(e),m(!1)}))}),[c]),Object(n.jsxs)("div",{children:[Object(n.jsx)("header",{children:Object(n.jsx)("h1",{className:"title",children:"StackExchange App"})}),Object(n.jsx)(o,{searchText:function(e){return a(e)}}),!p&&0===h.length&&Object(n.jsx)(d,{}),p?Object(n.jsx)(l,{}):Object(n.jsx)("div",{className:"map-content",children:h.map((function(e){return Object(n.jsx)(u,{question:e},e.question_id)}))})]})};r.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(h,{})}),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.9e122d5d.chunk.js.map