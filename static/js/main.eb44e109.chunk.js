(this.webpackJsonpblendingboard=this.webpackJsonpblendingboard||[]).push([[0],{14:function(e,t,r){"use strict";r.r(t);var l=r(2),s=r.n(l),o=r(8),a=r.n(o),c=r(3),n=r(1),i=r(4),d=r(0);function g(e){var t=e.color,r=e.letter,l=e.onClick,s=e.selected,o=e.blocked,a=e.style,c=void 0===a?{}:a;return c=Object(i.a)({border:"1px solid black",textAlign:"center",backgroundColor:o?"grey":"rgba(".concat(t,",").concat(s?"1":"0.4",")"),cursor:o?"no-drop":"pointer",fontWeight:600,borderRadius:"10px",display:"inline-block",padding:"5px 10px",marginRight:"10px"},c),Object(d.jsx)("div",{children:Object(d.jsx)("div",{style:c,onClick:function(){return o?null:l(r)},children:r})})}function u(e){var t=e.letters,r=e.selectedLetters,l=e.color,s=e.onLetterClick,o=e.blockedLetters,a=e.style;return Object(d.jsx)("div",{style:a||{},children:t.map((function(e,t){return Object(d.jsx)(g,{color:l,letter:e,selected:r.some((function(t){return t===e})),blocked:o.some((function(t){return t===e})),onClick:s},t)}))})}function p(e){var t=e.lettersConfig,r=e.style,s=e.emitChoosePreset,o=Object(l.useState)(Object(n.a)(t)),a=Object(c.a)(o,2),i=a[0],g=a[1],p=Object(l.useState)([]),b=Object(c.a)(p,2),j=(b[0],b[1]),f=Object(l.useState)([]),m=Object(c.a)(f,2),h=m[0],y=m[1],x=Object(l.useState)([]),O=Object(c.a)(x,2),v=O[0],L=O[1],C=Object(l.useState)(JSON.parse(localStorage.getItem("presets"))?JSON.parse(localStorage.getItem("presets")):[]),S=Object(c.a)(C,2),k=S[0],w=(S[1],Object(l.useState)(localStorage.getItem("selectedPreset"))),N=Object(c.a)(w,2),T=N[0],R=N[1];return Object(d.jsxs)("div",{style:r||{},children:[Object(d.jsxs)("select",{name:"preset",value:T,onChange:function(e){return function(e){R(e),s(e);var t=JSON.parse(localStorage.getItem(e));g(t.transformed)}(e.target.value)},children:[Object(d.jsx)("option",{value:"Default",children:"Default"}),k.map((function(e){return Object(d.jsx)("option",{value:e,children:e})}))]}),Object(d.jsx)("div",{style:{textAlign:"center",fontWeight:"600",fontSize:"80px"},children:0===h.length||""===h.join()?"Start Typing...":h.join("")}),Object(d.jsxs)("div",{style:{margin:"20px",height:"78vh",overflowY:"auto"},children:[Object(d.jsx)("div",{style:{width:"90%",float:"left",textAlign:"center"},children:Object(d.jsxs)("div",{style:{display:"inline-block"},children:[i.map((function(e,t){return Object(d.jsx)(u,{style:e.style?e.style:{},letters:e.letters,selectedLetters:e.selectedLetters,color:e.color,onLetterClick:function(e){return function(e,t){console.log(e,t);var r=Object(n.a)(h),l=Object(n.a)(i);i[t].selectedLetters.some((function(t){return t===e}))?(l[t].selectedLetters=[],r[t]=""):(l[t].selectedLetters=[e],r[t]=e),j(l),L([].concat(Object(n.a)(v),[r.join("")])),y(r)}(e,t)},blockedLetters:e.blockedLetters},t)})),Object(d.jsx)("div",{style:{clear:"both"}})]})}),Object(d.jsx)("div",{style:{float:"left",display:"inline-block"},children:Object(n.a)(v).reverse().map((function(e){return Object(d.jsx)("p",{style:{fontWeight:"600",fontSize:"30px"},children:e})}))}),Object(d.jsx)("div",{style:{clear:"both"}})]})]})}function b(e){var t,r=e.getAllSelectedLetters,s=e.initialConfig,o=e.getSelectedLettersByColor,a=e.getSelectedAllOrNoneLettersByColor,i=e.desSelectLetterByColor,p=e.uniqueId,b=Object(l.useState)(s),j=Object(c.a)(b,2),f=j[0],m=j[1],h=Object(l.useState)([]),y=Object(c.a)(h,2),x=(y[0],y[1]),O=Object(l.useState)(!1),v=Object(c.a)(O,2),L=v[0],C=v[1],S=function(e){var t=Object(n.a)(e).map((function(e){return e.selectedLetters}));t=t.flat(1),r(t)},k=function(e,t,r){o(e,t,r)},w=function(e,t,r,l){var s=Object(n.a)(f);f[t].selectedLetters.some((function(t){return t===e}))?s[t].selectedLetters=s[t].selectedLetters.filter((function(t){return t!==e})):s[t].selectedLetters=[].concat(Object(n.a)(s[t].selectedLetters),[e]),x(s),S(s),l?i(r,e):k(r,s[t].selectedLetters)};return Object(l.useEffect)((function(){m(s)}),[s]),Object(l.useEffect)((function(){var e=function(e,t,r){var l;return function(){var s=this,o=arguments,a=function(){l=null,r||e.apply(s,o)},c=r&&!l;clearTimeout(l),l=setTimeout(a,t),c&&e.apply(s,o)}}((function(){C(!L)}),500);window.addEventListener("resize",e)})),Object(d.jsx)("div",{children:Object(d.jsxs)("div",{id:"container-"+p,style:{margin:"20px",position:"relative"},children:[Object(d.jsxs)("div",{style:{marginTop:(null===(t=document.getElementById("container-"+p))||void 0===t?void 0:t.clientHeight)/2-20+"px",width:"9%",float:"left"},children:[Object(d.jsx)(g,{letter:"None",onClick:function(){var e=Object(n.a)(f);e.map((function(e){return e.selectedLetters=[],e})),x(e),S(e),a("none")},style:{float:"right"}}),Object(d.jsx)(g,{letter:"All",onClick:function(){var e=Object(n.a)(f);e.map((function(e){return e.selectedLetters=Object(n.a)(e.letters),e})),x(e),S(e),a("all")},style:{float:"right"}}),Object(d.jsx)("div",{style:{clear:"both"}})]}),Object(d.jsx)("div",{style:{width:"90%",float:"left",textAlign:"center"},children:Object(d.jsxs)("div",{style:{display:"inline-block"},children:[f.map((function(e,t){return Object(d.jsxs)("div",{style:{float:"left",marginRight:"20px",textAlign:"left"},children:[Object(d.jsxs)("span",{onClick:function(){return function(e){var t=Object(n.a)(f);t[e].selectedLetters.length===Object(n.a)(t[e].letters).length?t[e].selectedLetters=[]:t[e].selectedLetters=Object(n.a)(t[e].letters),console.log(e),console.log(t[e]),x(t),S(t),k(t[e].color,t[e].selectedLetters,t[e].letters)}(t)},style:{cursor:"pointer"},children:[e.categoryName," "]}),Object(d.jsx)("br",{}),Object(d.jsx)("div",{style:{border:"solid 2px green",borderRadius:"10%",padding:"20px"},children:Object(d.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[0===e.subCategories.length&&Object(d.jsx)(u,{style:e.style?e.style:{},letters:e.letters,selectedLetters:e.selectedLetters,color:e.color,onLetterClick:function(r){return w(r,t,e.color,e.selectedLetters.some((function(e){return e===r})))},blockedLetters:e.blockedLetters},t),e.subCategories.map((function(r,l){return Object(d.jsxs)("div",{style:{float:"left",marginRight:"20px"},children:[r.subCategoryName,Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)(u,{style:e.style?e.style:{},letters:r.letters,selectedLetters:e.selectedLetters,color:e.color,onLetterClick:function(r){return w(r,t,e.color,e.selectedLetters.some((function(e){return e===r})))},blockedLetters:e.blockedLetters},l)]})}))]})})]})})),Object(d.jsx)("div",{style:{clear:"both"}})]})}),Object(d.jsx)("div",{style:{clear:"both"}})]})},p)}var j=Object(l.forwardRef)((function(e,t){var r=e.getTransformToMainContainerLetterArrayProps,s=e.style;Object(l.useImperativeHandle)(t,(function(){return{choosePresetExternal:function(e){console.log(e),K(e)}}}));var o=Object(l.useState)(JSON.parse(localStorage.getItem("presets"))?JSON.parse(localStorage.getItem("presets")):[]),a=Object(c.a)(o,2),g=a[0],u=a[1],p=Object(l.useState)(localStorage.getItem("selectedPreset")?localStorage.getItem("selectedPreset"):"Default"),j=Object(c.a)(p,2),f=j[0],m=j[1],h=Object(l.useState)(),y=Object(c.a)(h,2),x=y[0],O=y[1],v=Object(l.useState)(!1),L=Object(c.a)(v,2),C=L[0],S=(L[1],Object(l.useState)(Date.now())),k=Object(c.a)(S,2),w=(k[0],k[1]),N=[[{categoryName:"Consonants",subCategories:[],letters:["","b","c","d","f","g","h","j","k","l","m","n","p","r","s","t","v","w","y","z"],color:"0,0,255",selectedLetters:["","b","c","d","f","g","h","j","k","l","m","n","p","r","s","t","v","w","y","z"],blockedLetters:[],style:{display:"grid",gridTemplateColumns:"repeat(5,auto)",gridGap:"5px",float:"left",marginRight:"20px",width:"300px"}},{categoryName:"Short Vowels",subCategories:[],letters:["e","i","o","u","y"],color:"79, 255, 67",selectedLetters:["e","i","o","u","y"],blockedLetters:[],style:{display:"grid",gridTemplateColumns:"repeat(4,auto)",gridGap:"5px",float:"left",marginRight:"20px",width:"300px"}},{categoryName:"Consonants",subCategories:[],letters:["","b","c","d","f","g","h","j","k","l","m","n","p","r","s","t","v","w","y","z"],color:"255,0,0",selectedLetters:["","b","c","d","f","g","h","j","k","l","m","n","p","r","s","t","v","w","y","z"],blockedLetters:[],style:{display:"grid",gridTemplateColumns:"repeat(5,auto)",gridGap:"5px",float:"left",marginRight:"20px",width:"300px"}},{categoryName:"Endings",subCategories:[{subCategoryName:"subCategoryName",letters:["e","ed","es","ing","s"]}],letters:["e","ed","es","ing","s"],color:"255,0,255",selectedLetters:["e"],blockedLetters:[],style:{display:"grid",gridTemplateColumns:"repeat(5,auto)",gridGap:"5px",float:"left",marginRight:"20px",width:"300px"}}],[{categoryName:"Blends",subCategories:[],letters:["bl","br","cl","cr","dr","fl","fr","gl","gr","pl","pr","sc","scr","shr","sk","sl","sm","sn","sp","spl","squ","st","str","sw","thr","tr"],color:"0,0,255",selectedLetters:[],blockedLetters:[],style:{display:"grid",gridTemplateColumns:"repeat(5,auto)",gridGap:"5px",float:"left",marginRight:"20px",width:"300px"}},{categoryName:"Long Vowels",subCategories:[],letters:["a","ai","aigh","ay","e","ea","eau","ee","ei","eigh","ew","ey","i","ie","igh","o","oa","oe","oo","ough","ow","u","ue","ui","y"],color:"79, 255, 67",selectedLetters:[],blockedLetters:[],style:{display:"grid",gridTemplateColumns:"repeat(4,auto)",gridGap:"5px",float:"left",marginRight:"20px",width:"300px"}},{categoryName:"Double Consonants",subCategories:[],letters:["bb","dd","ff","gg","ll","mm","nn","pp","rr","ss","tt","zz"],color:"255,0,0",selectedLetters:[],blockedLetters:[],style:{display:"grid",gridTemplateColumns:"repeat(5,auto)",gridGap:"5px",float:"left",marginRight:"20px",width:"300px"}},{categoryName:"categoryName",subCategories:[],letters:[],color:"255,0,255",selectedLetters:[],blockedLetters:[],style:{display:"grid",gridTemplateColumns:"repeat(5,auto)",gridGap:"5px",float:"left",marginRight:"20px",width:"300px"}}],[{categoryName:"Consonant Diagraphs",subCategories:[],letters:["ch","gh","gn","kn","ph","qu","sh","th","wh","wr"],color:"0,0,255",selectedLetters:[],blockedLetters:[],style:{display:"grid",gridTemplateColumns:"repeat(5,auto)",gridGap:"5px",float:"left",marginRight:"20px",width:"300px"}},{categoryName:"r-Controlled Vowels",subCategories:[],letters:["air","ar","are","ear","eer","er","ir","oar","oor","or","ore","our","ur"],color:"79, 255, 67",selectedLetters:[],blockedLetters:[],style:{display:"grid",gridTemplateColumns:"repeat(4,auto)",gridGap:"5px",float:"left",marginRight:"20px",width:"300px"}},{categoryName:"Blends",subCategories:[],letters:["mp","nd","ng","nk","nt","nx","sp","st"],color:"255,0,0",selectedLetters:[],blockedLetters:[],style:{display:"grid",gridTemplateColumns:"repeat(5,auto)",gridGap:"5px",float:"left",marginRight:"20px",width:"300px"}},{categoryName:"categoryName",subCategories:[],letters:[],color:"255,0,255",selectedLetters:[],blockedLetters:[],style:{display:"grid",gridTemplateColumns:"repeat(5,auto)",gridGap:"5px",float:"left",marginRight:"20px",width:"300px"}}],[{categoryName:"Consonant Triagraphs",subCategories:[],letters:["scr","shr","spl","spr","squ","str","thr"],color:"0,0,255",selectedLetters:[],blockedLetters:[],style:{display:"grid",gridTemplateColumns:"repeat(5,auto)",gridGap:"5px",float:"left",marginRight:"20px",width:"300px"}},{categoryName:"Vowel Teams",subCategories:[],letters:["au"],color:"79, 255, 67",selectedLetters:[],blockedLetters:[],style:{display:"grid",gridTemplateColumns:"repeat(4,auto)",gridGap:"5px",float:"left",marginRight:"20px",width:"300px"}},{categoryName:"Consonant Diagraphs",subCategories:[],letters:["ch","ck","gh","gn","mb","ph","sh","th","ve"],color:"255,0,0",selectedLetters:[],blockedLetters:[],style:{display:"grid",gridTemplateColumns:"repeat(5,auto)",gridGap:"5px",float:"left",marginRight:"20px",width:"300px"}},{categoryName:"categoryName",subCategories:[],letters:[],color:"255,0,255",selectedLetters:[],blockedLetters:[],style:{display:"grid",gridTemplateColumns:"repeat(5,auto)",gridGap:"5px",float:"left",marginRight:"20px",width:"300px"}}],[{categoryName:"categoryName",subCategories:[],letters:["gn","kn","wr","qu"],color:"0,0,255",selectedLetters:[],blockedLetters:[],style:{display:"grid",gridTemplateColumns:"repeat(5,auto)",gridGap:"5px",float:"left",marginRight:"20px",width:"300px"}},{categoryName:"Diphthongs",subCategories:[],letters:["oi","ou","ow","oy"],color:"79, 255, 67",selectedLetters:[],blockedLetters:[],style:{display:"grid",gridTemplateColumns:"repeat(4,auto)",gridGap:"5px",float:"left",marginRight:"20px",width:"300px"}},{categoryName:"Consonant Tiagraphs",subCategories:[],letters:["dge","tch"],color:"255,0,0",selectedLetters:[],blockedLetters:[],style:{display:"grid",gridTemplateColumns:"repeat(5,auto)",gridGap:"5px",float:"left",marginRight:"20px",width:"300px"}},{categoryName:"categoryName",subCategories:[],letters:[],color:"255,0,255",selectedLetters:[],blockedLetters:[],style:{display:"grid",gridTemplateColumns:"repeat(5,auto)",gridGap:"5px",float:"left",marginRight:"20px",width:"300px"}}]],T=Object(l.useState)(N),R=Object(c.a)(T,2),I=R[0],G=R[1],A={},D=[],J=Object(n.a)(I).map((function(e,t){var r={};return e.map((function(e){r[e.color]={letters:e.letters}})),D.push(r),e=e.map((function(e){return e.selectedLetters})).flat()}));I.flat(1).map((function(e){var t=[].concat(Object(n.a)(A[e.color]&&A[e.color].selectedLetters?A[e.color].selectedLetters:[]),Object(n.a)(e.selectedLetters)),r=new Set(t);t=Array.from(r);var l=[].concat(Object(n.a)(A[e.color]&&A[e.color].letters?A[e.color].letters:[]),Object(n.a)(e.letters)),s=new Set(l);l=Array.from(s),A[e.color]={selectedLetters:t}}));var P=Object(l.useState)(Object(n.a)(J)),z=Object(c.a)(P,2),B=z[0],E=z[1],M=Object(l.useState)(A),q=Object(c.a)(M,2),V=q[0],W=q[1],H=function(e,t,r){console.log(e,t);var l=Object(i.a)({},V),s=[].concat(Object(n.a)(l[e].selectedLetters),Object(n.a)(t));0===t.length&&r&&(s=s.filter((function(e){return!r.some((function(t){return t===e}))})),console.log(s));var o=new Set(s);s=Array.from(o),l[e]={selectedLetters:s},W(l),F(l)},Y=function(e,t){var r=Object(i.a)({},V),l=Object(n.a)(r[e].selectedLetters),s=l.indexOf(t);s>-1&&l.splice(s,1);var o=new Set(l);l=Array.from(o),r[e]={selectedLetters:l},W(r),F(r)},F=function(e){var t=[];for(var l in e){var s={letters:e[l].selectedLetters,color:l,selectedLetters:[],blockedLetters:[],style:{display:"grid",gridTemplateColumns:"repeat(5,auto)",gridGap:"5px",float:"left",marginRight:"20px"}};t.push(s)}r(t)},K=function(e){var t,r=[];(w(Date.now()),localStorage.setItem("selectedPreset",e),m(e),"Default"===e)?(G(N),r=[].concat(N),E(N)):function(){var l=JSON.parse(localStorage.getItem(e)).preset;console.log(l);var s=[].concat(N);for(t=0;t<s.length;t++){var o=Object(n.a)(s[t]);o=o.map((function(e){var t=Object(i.a)({},e);return t.selectedLetters=Object(n.a)(l[t.color].selectedLetters.filter((function(e){return t.letters.includes(e)}))),t})),s[t]=o}console.log(s),r=Object(n.a)(s),G(Object(n.a)(s))}();var l={},s=[],o=Object(n.a)(r).map((function(e,t){var r={};return e.map((function(e){r[e.color]={letters:e.letters}})),s.push(r),e=e.map((function(e){return e.selectedLetters})).flat()}));r.flat(1).map((function(e){var t=[].concat(Object(n.a)(l[e.color]&&l[e.color].selectedLetters?l[e.color].selectedLetters:[]),Object(n.a)(e.selectedLetters)),r=new Set(t);t=Array.from(r);var s=[].concat(Object(n.a)(l[e.color]&&l[e.color].letters?l[e.color].letters:[]),Object(n.a)(e.letters)),o=new Set(s);s=Array.from(o),l[e.color]={selectedLetters:t}})),E(Object(n.a)(o)),W(l),F(l),w(Date.now())};return Object(l.useEffect)((function(){var e=[];for(var t in A){var r={letters:A[t].selectedLetters,color:t,selectedLetters:[],blockedLetters:[],style:{display:"grid",gridTemplateColumns:"repeat(5,auto)",gridGap:"5px",float:"left",marginRight:"20px"}};e.push(r)}localStorage.setItem("Default",JSON.stringify({preset:V,transformed:e}));var l=localStorage.getItem("selectedPreset");l=l&&"null"!==l?localStorage.getItem("selectedPreset"):"Default",K(l)}),[]),Object(d.jsxs)("div",{style:s||{},children:[Object(d.jsxs)("div",{children:[Object(d.jsxs)("select",{name:"preset",value:f,onChange:function(e){return K(e.target.value)},children:[Object(d.jsx)("option",{value:"Default",children:"Default"}),g.map((function(e){return Object(d.jsx)("option",{value:e,children:e})}))]}),Object(d.jsx)("input",{type:"text",value:x,onChange:function(e){return O(e.target.value)}}),Object(d.jsx)("button",{onClick:function(){try{var e=[];for(var t in V){var r={letters:V[t].selectedLetters,color:t,selectedLetters:[],blockedLetters:[],style:{display:"grid",gridTemplateColumns:"repeat(5,auto)",gridGap:"5px",float:"left",marginRight:"20px"}};e.push(r)}var l=localStorage.getItem("presets");l=JSON.parse(l)?JSON.parse(l):[],l=Array.from(new Set([].concat(Object(n.a)(l),[x]))),localStorage.setItem("presets",JSON.stringify(l)),localStorage.setItem("selectedPreset",x),m(x),u(l),localStorage.setItem(x,JSON.stringify({preset:V,transformed:e}))}catch(s){alert(s)}},children:"Save as preset"}),Object(d.jsx)("button",{onClick:function(){localStorage.removeItem(f),localStorage.setItem("selectedPreset",""),m(null);var e=Object(n.a)(g);e.splice(e.indexOf(f),1),localStorage.setItem("presets",JSON.stringify(e)),u(e),K("Default")},children:"Delete preset"})]}),Object(d.jsxs)("div",{style:{textAlign:"center",fontWeight:"600",fontSize:"80px"},children:[B.flat(1).length," Selected"]}),Object(d.jsx)("div",{style:{height:"78vh",overflowY:"auto"},children:!C&&I.map((function(e,t){return Object(d.jsx)(b,{uniqueId:t,initialConfig:e,desSelectLetterByColor:Y,getSelectedLettersByColor:H,getSelectedAllOrNoneLettersByColor:function(e){return function(e,t){var r=Object(i.a)({},V),l=[];for(var s in V){l="none"===e?Object(n.a)(r[s].selectedLetters).filter((function(e){return!D[t][s].letters.some((function(t){return t===e}))})):[].concat(Object(n.a)(r[s].selectedLetters),Object(n.a)(D[t][s].letters));var o=new Set(l);l=Array.from(o),r[s]={selectedLetters:l}}W(r),F(r)}(e,t)},getAllSelectedLetters:function(e){return function(e,t){console.log(e,t);var r=Object(n.a)(B);r[t]=e,E(r)}(e,t)}})}))})]})}));var f=function(){var e=Object(l.useState)([]),t=Object(c.a)(e,2),r=t[0],s=t[1],o=Object(l.useState)("openerScreen"),a=Object(c.a)(o,2),n=a[0],i=a[1],g=Object(l.useRef)();return Object(d.jsxs)("div",{children:["openerScreen"===n&&Object(d.jsx)("div",{style:{height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"},children:Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{style:{border:"solid 1px black",cursor:"pointer",padding:"10px"},onClick:function(){return i("SelectionContainer")},children:"Setup Area"}),Object(d.jsx)("div",{style:{border:"solid 1px black",cursor:"pointer",padding:"10px"},onClick:function(){return i("MainContainer")},children:"Main Screen"})]})}),Object(d.jsxs)("div",{style:{margin:"20px auto",width:"70%"},children:[Object(d.jsx)("div",{style:{display:"inline-block"},children:Object(d.jsx)("img",{src:"https://omarbarbosahmh.github.io/blendingboard/assets/question.png",alt:"question",width:"50px"})}),"MainContainer"===n&&Object(d.jsx)("div",{style:{float:"right",display:"inline-block",cursor:"pointer"},onClick:function(){return i("SelectionContainer")},children:Object(d.jsx)("img",{src:"https://omarbarbosahmh.github.io/blendingboard/assets/burguer.png",alt:"burguer icon",width:"50px"})}),"SelectionContainer"===n&&Object(d.jsx)("div",{style:{float:"right",display:"inline-block",cursor:"pointer"},onClick:function(){return i("MainContainer")},children:Object(d.jsx)("img",{src:"https://omarbarbosahmh.github.io/blendingboard/assets/check.png",alt:"burguer icon",width:"50px"})}),Object(d.jsx)("div",{style:{clear:"both"}})]}),"MainContainer"===n&&Object(d.jsx)(p,{emitChoosePreset:function(e){g.current.choosePresetExternal(e)},lettersConfig:r}),Object(d.jsx)(j,{ref:g,style:{display:"MainContainer"===n?"none":"inline"},getTransformToMainContainerLetterArrayProps:s})]})};a.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(f,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.eb44e109.chunk.js.map