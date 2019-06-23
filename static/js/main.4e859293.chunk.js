(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,t,a){e.exports=a(38)},38:function(e,t,a){"use strict";a.r(t);var r={};a.r(r),a.d(r,"addTime",function(){return D}),a.d(r,"deleteTime",function(){return W});var n=a(0),s=a.n(n),i=a(15),c=a.n(i),o=a(7),l=a(17),u=function(){return s.a.createElement("div",{className:"container mt-4"},s.a.createElement("div",{className:"jumbotron bg-secondary text-white text-uppercase text-center"},s.a.createElement("h1",null,"Calculadora de JOBS")))},m=a(1),p=a(12),d=a(18),f=a.n(d),h=a(22);var b=Object(m.b)({times:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TIME":return[].concat(Object(h.a)(e),[{id:Date.now(),times:t.payload.times}]);case"DELETE_TIME":return e.filter(function(e){return e.id!==t.id});default:return e}}}),E={key:"root",storage:f.a},v=Object(p.a)(E,b),T=Object(m.c)(v),y=Object(p.b)(T),w=a(2),j=a.n(w),O=a(8),k=a(6),S=a(19),H=a(20),I=a(24),x=a(21),g=a(3),N=a(23),D=function(e){return{type:"ADD_TIME",payload:{times:e}}},W=function(e){return{type:"DELETE_TIME",id:e}},M=function(e){function t(e){var a;return Object(S.a)(this,t),(a=Object(I.a)(this,Object(x.a)(t).call(this,e))).completaZeroEsquerda=function(e){return e<10?"0"+e:e},a.isHoraInicialMenorHoraFinal=function(e,t){var a=e.split(":"),r=t.split(":"),n=parseInt(a[0],10),s=parseInt(r[0],10);if(n!==s)return n<s;var i=parseInt(a[1],10),c=parseInt(r[1],10);return i!==c?i<c:void 0},a.state={times:{},somaHora:[],totalSomaHora:""},a.diffHours=a.diffHours.bind(Object(g.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(g.a)(a)),a.handleDeleteTime=a.handleDeleteTime.bind(Object(g.a)(a)),a.catchPropsSumHoursWorked=a.catchPropsSumHoursWorked.bind(Object(g.a)(a)),a}return Object(N.a)(t,e),Object(H.a)(t,[{key:"diffHours",value:function(e,t){if(!this.isHoraInicialMenorHoraFinal(e,t)){var a=t;t=e,e=a}var r=e.split(":"),n=t.split(":"),s=parseInt(n[0],10)-parseInt(r[0],10),i=parseInt(n[1],10)-parseInt(r[1],10);return i<0&&(i+=60,s-=1),this.completaZeroEsquerda(s)+":"+this.completaZeroEsquerda(i)}},{key:"handleSubmit",value:function(){var e=Object(k.a)(j.a.mark(function e(t){var a;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,this.diffHours(this.state.times.firstTime,this.state.times.lastTime);case 3:return a=e.sent,e.next=6,this.setState({times:Object(O.a)({},this.state.times,{diffTime:a})});case 6:return e.next=8,this.props.addTime(this.state.times);case 8:return e.next=10,this.setState({times:{}});case 10:return e.next=12,this.catchPropsSumHoursWorked();case 12:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"catchPropsSumHoursWorked",value:function(){var e=Object(k.a)(j.a.mark(function e(){var t,a=this;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.setState({totalSomaHora:""});case 2:return e.next=4,this.props.times.reduce(function(e,t){e=0===e?["00","00"]:e.split(":"),t=t.times.diffTime.split(":");var r=parseInt(e[0],10)+parseInt(t[0],10),n=parseInt(e[1],10)+parseInt(t[1],10);return n>=60&&(n-=60,r+=1),a.completaZeroEsquerda(r)+":"+a.completaZeroEsquerda(n)},0);case 4:return t=e.sent,e.next=7,this.setState({totalSomaHora:t});case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"handleDeleteTime",value:function(){var e=Object(k.a)(j.a.mark(function e(t,a){return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.next=3,this.props.deleteTime(t);case 3:return e.next=5,this.catchPropsSumHoursWorked();case 5:case"end":return e.stop()}},e,this)}));return function(t,a){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=Object(k.a)(j.a.mark(function e(){return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.catchPropsSumHoursWorked();case 2:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"container"},s.a.createElement("form",{onSubmit:this.handleSubmit},s.a.createElement("div",{className:"form-row"},s.a.createElement("div",{className:"col"},s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{for:"firstTime"},"In\xedcio:"),s.a.createElement("input",{type:"time",id:"firstTime",className:"form-control",onChange:function(t){return e.setState({times:Object(O.a)({},e.state.times,{firstTime:t.target.value})})},value:this.state.times.firstTime||""}))),s.a.createElement("div",{className:"col"},s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{for:"lastTime"},"Fim:"),s.a.createElement("input",{type:"time",id:"lastTime",className:"form-control",onChange:function(t){return e.setState({times:Object(O.a)({},e.state.times,{lastTime:t.target.value})})},value:this.state.times.lastTime||""})))),s.a.createElement("button",{type:"submit",className:"btn btn-primary mt-3"},"Salvar")),s.a.createElement("table",{className:"table mt-5"},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",{scope:"col"},"In\xedcio"),s.a.createElement("th",{scope:"col"},"T\xe9rmino"),s.a.createElement("th",{scope:"col"},"Horas Trabalhadas"),s.a.createElement("th",{scope:"col",className:"text-right"},"#"))),s.a.createElement("tbody",null,this.props.times.map(function(t){var a=t.id,r=t.times,n=r.firstTime,i=r.lastTime,c=r.diffTime;return s.a.createElement("tr",{key:a},s.a.createElement("td",null,n),s.a.createElement("td",null,i),s.a.createElement("td",null,c),s.a.createElement("th",{scope:"row"},s.a.createElement("button",{type:"button",className:"close","aria-label":"Close",onClick:function(t){return e.handleDeleteTime(a,t)}},s.a.createElement("span",{"aria-hidden":"true"},"\xd7"))))}))),s.a.createElement("div",{className:"mb-3"},"Horas trabalhadas: ",s.a.createElement("strong",null,this.state.totalSomaHora)))}}]),t}(n.Component),C=Object(o.b)(function(e){return{times:e.times}},function(e){return Object(m.a)(r,e)})(M),P=function(){return s.a.createElement("div",{className:"App"},s.a.createElement(u,null),s.a.createElement(o.a,{store:T},s.a.createElement(l.a,{loading:null,persistor:y},s.a.createElement(C,null))))};a(37),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(s.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[25,1,2]]]);
//# sourceMappingURL=main.4e859293.chunk.js.map