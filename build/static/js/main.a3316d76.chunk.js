(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{39:function(e,n,t){"use strict";t.r(n);var o=t(0),a=t(2),c=t(15),r=t.n(c),u=t(16),l=t(3),i=t(4),s=t.n(i),d="/api/persons",b={getAll:function(){return s.a.get(d)},create:function(e){return s.a.post(d,e)},update:function(e,n){return s.a.put("".concat(d,"/").concat(e),n)},del:function(e){return s.a.delete("".concat(d,"/").concat(e))}},f=function(e){var n=e.message,t=e.error;return null===n?null:t?Object(o.jsx)("div",{style:{color:"red",background:"lightgrey",fontSize:20,borderStyle:"solid",borderRadius:5,padding:10,marginBottom:10},children:n}):Object(o.jsx)("div",{style:{color:"green",background:"lightgrey",fontSize:20,borderStyle:"solid",borderRadius:5,padding:10,marginBottom:10},children:n})},j=void 0,m=function(e){var n=e.person;return Object(o.jsxs)("div",{children:[n.name," ",n.number]},n.name)},h=function(e){return Object(o.jsx)("form",{onSubmit:function(e){e.preventDefault()},children:Object(o.jsxs)("div",{children:["filter shown with",Object(o.jsx)("input",{value:e.filter,onChange:e.handleFilterChange})]})})},g=function(e){return Object(o.jsxs)("form",{onSubmit:e.addEntry,children:[Object(o.jsxs)("div",{children:["name:",Object(o.jsx)("input",{value:e.newName,onChange:e.handleNameChagne}),Object(o.jsx)("br",{}),"number:",Object(o.jsx)("input",{value:e.newNumber,onChange:e.handleNumberChange})]}),Object(o.jsx)("div",{children:Object(o.jsx)("button",{type:"submit",children:"add"})})]})},O=function(e){var n=e.target,t=e.persons,a=e.setPersons,c=e.setShown,r=e.shown;return Object(o.jsx)("button",{onClick:function(e){e.preventDefault(),window.confirm("do you truly want to delte ".concat(n.name))&&(console.log(n),b.del(n.id).then((function(e){a(t.filter((function(e){return e!==n}))),c(r.filter((function(e){return e!==n})))})))},children:"delete"})},p=function(){var e=Object(a.useState)([]),n=Object(l.a)(e,2),t=n[0],c=n[1],r=Object(a.useState)(""),i=Object(l.a)(r,2),s=i[0],d=i[1],p=Object(a.useState)(""),v=Object(l.a)(p,2),w=v[0],x=v[1],y=Object(a.useState)(""),C=Object(l.a)(y,2),L=C[0],S=C[1],k=Object(a.useState)(!1),N=Object(l.a)(k,2),D=N[0],E=N[1],A=Object(a.useState)(null),B=Object(l.a)(A,2),P=B[0],T=B[1],z=Object(a.useState)([]),F=Object(l.a)(z,2),I=F[0],J=F[1],R=Object(a.useState)(!1),U=Object(l.a)(R,2),q=U[0],G=U[1];Object(a.useEffect)((function(){console.log("effect"),b.getAll().then((function(e){console.log("promise fulfilled"),c(e.data),J(e.data)}))}),[]),console.log("render",t.length,"persons"),console.log(t);return console.log(t),Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:"Phonebook"}),Object(o.jsx)(f,{message:P,error:D}),Object(o.jsx)(h,{filter:L,handleFilterChange:function(e){S(e.target.value),J(t.filter((function(n){return n.name.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())})))}}),Object(o.jsx)("h2",{children:"add a new"}),Object(o.jsx)(g,{handleNameChagne:function(e){d(e.target.value)},handleNumberChange:function(e){x(e.target.value)},newName:s,addEntry:function(e){e.preventDefault();var n,o={name:s,number:w},a=Object(u.a)(t);try{var r=function(){var e=n.value;if(e.name===s)return window.confirm("".concat(e.name," is already in this wonderful phonebook. would u like to update their cool number with a new one?"))&&b.update(e.id,o).then((function(n){console.log("updating"),console.log(n.data),c(t.map((function(e){return e.name===n.data.name?n.data:e}))),e.name.toLocaleLowerCase().includes(L.toLocaleLowerCase())&&J(I.filter((function(n){return n.name!==e.name}))),console.log(t)})).then((function(n){E(!1),T("Changed ".concat(e.name,"'s number successfully :D")),setTimeout((function(){T(null)}),3e3)})).catch((function(n){E(!0),T("Info of ".concat(e.name," already deleted sorry chummo")),c(t.filter((function(n){return n.name!==e.name}))),e.name.toLocaleLowerCase().includes(L.toLocaleLowerCase())&&J(I.filter((function(n){return n.name!==e.name}))),j.forceUpdate(),G(!0),setTimeout((function(){T(null)}),5e3)})),{v:void 0}};for(a.s();!(n=a.n()).done;){var l=r();if("object"===typeof l)return l.v}}catch(i){a.e(i)}finally{a.f()}q?G(!1):(b.create(o).then((function(e){c(t.concat(e.data)),o.name.toLocaleLowerCase().includes(L.toLocaleLowerCase())&&J(I.concat(o)),d(""),x("")})).then((function(e){E(!1),T("Added ".concat(o.name,"'s number successfully :D")),setTimeout((function(){T(null)}),3e3)})),c(t.concat(o)),d(""),x(""))},newNumber:w}),Object(o.jsx)("h2",{children:"Numbers"}),I?I.map((function(e){return[Object(o.jsx)(m,{person:e},e.name),Object(o.jsx)(O,{target:e,setPersons:c,persons:t,setShown:J,shown:I},"del ".concat(e.name))]})):Object(o.jsx)("div",{})]})};r.a.render(Object(o.jsx)(p,{}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.a3316d76.chunk.js.map