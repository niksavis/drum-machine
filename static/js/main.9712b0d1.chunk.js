(this["webpackJsonpdrum-machine"]=this["webpackJsonpdrum-machine"]||[]).push([[0],{16:function(e,t,n){},17:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(9),s=n.n(a),o=(n(16),n(3)),i=(n(17),n(21)),d=n(22),u=n(23),m=[{keyCode:81,keyTrigger:"Q",id:"Heater-1",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"},{keyCode:87,keyTrigger:"W",id:"Heater-2",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"},{keyCode:69,keyTrigger:"E",id:"Heater-3",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"},{keyCode:65,keyTrigger:"A",id:"Heater-4",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"},{keyCode:83,keyTrigger:"S",id:"Clap",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"},{keyCode:68,keyTrigger:"D",id:"Open-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"},{keyCode:90,keyTrigger:"Z",id:"Kick-n'-Hat",url:"https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"},{keyCode:88,keyTrigger:"X",id:"Kick",url:"https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"},{keyCode:67,keyTrigger:"C",id:"Closed-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"}],l=n(0);function p(e){var t=e.clip,n=e.volume,c=e.setRecording,a=e.setDisplay,s=Object(r.useState)(!1),i=Object(o.a)(s,2),d=i[0],u=i[1],m=function(){var e=document.getElementById(t.keyTrigger);u(!0),setTimeout((function(){return u(!1)}),200),e.volume=n,e.currentTime=0,e.play(),c((function(e){return"".concat(e+t.keyTrigger," ")})),a((function(){return t.id})),document.getElementById("recording").focus()},p=function(e){e.keyCode===t.keyCode&&m()};return Object(r.useEffect)((function(){return document.addEventListener("keydown",p),function(){document.removeEventListener("keydown",p)}})),Object(l.jsxs)("div",{id:t.id,role:"button",tabIndex:"-1",onClick:m,onKeyDown:p,className:"drum-pad p-4 m-1 ".concat(d&&"drum-pad-activated"),children:[Object(l.jsx)("audio",{className:"clip",id:t.keyTrigger,src:t.url,children:Object(l.jsx)("track",{kind:"captions"})}),t.keyTrigger]})}var j=function(){var e=Object(r.useState)(1),t=Object(o.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(""),s=Object(o.a)(a,2),j=s[0],b=s[1],g=Object(r.useState)(.5),y=Object(o.a)(g,2),k=y[0],h=y[1],O=Object(r.useState)(""),f=Object(o.a)(O,2),v=f[0],x=f[1];return Object(l.jsx)(i.a,{className:"inner-container",id:"drum-machine",children:Object(l.jsxs)(d.a,{children:[Object(l.jsx)(u.a,{className:"pad-bank",children:m.map((function(e){return Object(l.jsx)(p,{clip:e,volume:n,setRecording:b,setDisplay:x},e.id)}))}),Object(l.jsxs)(u.a,{className:"controls-container",children:[Object(l.jsx)("h4",{children:"Volume"}),Object(l.jsx)("input",{className:"control",type:"range",step:"0.01",onChange:function(e){return c(e.target.value)},value:n,min:"0",max:"1"}),Object(l.jsx)("p",{id:"display",children:v}),Object(l.jsx)("input",{type:"text",id:"recording",value:j}),Object(l.jsx)("h4",{children:"Speed"}),Object(l.jsx)("input",{className:"control",type:"range",step:"0.01",onChange:function(e){return h(e.target.value)},value:k,min:"0.1",max:"1.2"}),Object(l.jsx)("br",{}),Object(l.jsx)("button",{onClick:function(){var e=0,t=j.split(" "),r=setInterval((function(){var r=document.getElementById(t[e]);r.volume=n,r.currentTime=0,r.play(),e+=1}),600*k);setTimeout((function(){return clearInterval(r)}),600*k*t.length-1)},type:"button",className:"btn btn-success",children:"play"}),Object(l.jsx)("button",{onClick:function(){return b("")},type:"button",className:"btn btn-danger",children:"clear"})]})]})})};s.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(j,{})}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.9712b0d1.chunk.js.map