(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{14:function(e,n,t){e.exports=t(37)},19:function(e,n,t){},37:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(13),c=t.n(o),u=(t(19),t(2)),l=function(e){var n=e.addPerson,t=e.newName,a=e.newNumber,o=e.handleNameChange,c=e.handleNumberChange;return r.a.createElement("form",{onSubmit:n},r.a.createElement("div",null,"name:",r.a.createElement("input",{value:t,onChange:o})),r.a.createElement("div",null,"number:",r.a.createElement("input",{value:a,onChange:c})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add")))},i=function(e){var n=e.person,t=e.removePerson;return r.a.createElement("li",null,n.name," ",n.number," ",r.a.createElement("button",{onClick:function(){return t(n)}},"delete"))},m=function(e){var n=e.persons,t=e.removePerson;return r.a.createElement("ul",null,n.map((function(e){return r.a.createElement(i,{key:e.id,person:e,removePerson:t})})))},d=function(e){var n=e.searchName,t=e.handleSearchNameChange;return r.a.createElement("div",null,"filter shown with",r.a.createElement("input",{value:n,onChange:t}))},s=t(3),f=t.n(s),h="http://localhost:3001/api/persons",b=function(){return f.a.get(h).then((function(e){return e.data}))},g=function(e){return f.a.post(h,e).then((function(e){return e.data}))},v=function(e,n){return f.a.put("".concat(h,"/").concat(e),n).then((function(e){return e.data}))},p=function(e){return f.a.delete("".concat(h,"/").concat(e)).then((function(e){return e.data}))},E={color:"green",background:"lightgrey",fontSize:16,borderStyle:"solid",borderRadius:5,padding:10,marginBottom:10},w=function(e){var n=e.message;return null===n?null:r.a.createElement("div",{style:E},n)},S={color:"red",background:"lightgrey",fontSize:20,borderStyle:"solid",borderRadius:5,padding:10,marginBottom:10},j=function(e){var n=e.message;return null===n?null:r.a.createElement("div",{style:S},n)},O=function(){var e=Object(a.useState)([]),n=Object(u.a)(e,2),t=n[0],o=n[1],c=Object(a.useState)(""),i=Object(u.a)(c,2),s=i[0],f=i[1],h=Object(a.useState)(""),E=Object(u.a)(h,2),S=E[0],O=E[1],y=Object(a.useState)(""),C=Object(u.a)(y,2),N=C[0],k=C[1],P=Object(a.useState)(null),B=Object(u.a)(P,2),z=B[0],D=B[1],J=Object(a.useState)(null),L=Object(u.a)(J,2),R=L[0],T=L[1];Object(a.useEffect)((function(){b().then((function(e){return o(e)}))}),[]);var W=t.filter((function(e){return e.name.toLowerCase().includes(N.toLowerCase())})),x=function(e){D(e),setTimeout((function(){D(null)}),2e3)};return r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(w,{message:z}),r.a.createElement(j,{message:R}),r.a.createElement(d,{handleSearchNameChange:function(e){k(e.target.value)}}),r.a.createElement("h3",null,"Add a new"),r.a.createElement(l,{addPerson:function(e){e.preventDefault();var n={name:s,number:S},a=t.find((function(e){return e.name===n.name}));a?window.confirm("".concat(a.name," is already added to phonebook, replace the old number with a new one?"))&&v(a.id,n).then((function(e){o(t.map((function(n){return n.id!==a.id?n:e}))),x("".concat(e.name," updated"))})).catch((function(e){!function(e){T(e),setTimeout((function(){T(null)}),5e3)}("the note '".concat(a.name,"' was already deleted from server"))})):g(n).then((function(e){o(t.concat(e)),x("".concat(e.name," added"))})),f(""),O("")},newName:s,newNumber:S,handleNameChange:function(e){f(e.target.value)},handleNumberChange:function(e){O(e.target.value)}}),r.a.createElement("h2",null,"Numbers"),r.a.createElement(m,{persons:W,removePerson:function(e){window.confirm("Delete ".concat(e.name," ?"))&&p(e.id).then((function(){o(t.filter((function(n){return n.id!==e.id}))),x("".concat(e.name," deleted"))}))}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[14,1,2]]]);
//# sourceMappingURL=main.a16875f8.chunk.js.map