(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{22:function(e,t,a){e.exports=a(35)},27:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n,r=a(0),c=a.n(r),s=a(13),i=a.n(s),l=(a(27),a(28),a(3)),o=a(6),u=a(7),m=a(9),p=a(8),d=a(10),v=a(1),h=a.n(v);!function(e){e.UPDATE_CITYS="UPDATE_CITYS",e.GET_CITY_DETAILS="GET_CITY_DETAILS",e.GET_CITYS="GET_CITYS",e.SET_CITYS="SET_CITYS",e.CLEAR_CITYS="CLEAR_CITYS",e.UNSELECT_CITY="UNSELECT_CITY"}(n||(n={}));var y,E="http://13.234.94.133:8080",f=function(){var e,t;return h.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,h.a.awrap(fetch("".concat(E,"/city")));case 3:return e=a.sent,a.next=6,h.a.awrap(e.json());case 6:return t=a.sent,a.abrupt("return",t);case 10:throw a.prev=10,a.t0=a.catch(0),a.t0;case 13:case"end":return a.stop()}}),null,null,[[0,10]])},b=function(e){var t,a;return h.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=4,h.a.awrap(fetch("".concat(E,"/weater/").concat(e)));case 4:return t=n.sent,n.next=7,h.a.awrap(t.json());case 7:return a=n.sent,n.abrupt("return",a);case 11:throw n.prev=11,n.t0=n.catch(0),n.t0;case 14:case"end":return n.stop()}}),null,null,[[0,11]])},N=function(e){var t,a;return h.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,h.a.awrap(fetch("".concat(E,"/weater/"),{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({citys:e})}));case 3:return t=n.sent,n.next=6,h.a.awrap(t.json());case 6:return a=n.sent,n.abrupt("return",a);case 10:throw n.prev=10,n.t0=n.catch(0),n.t0;case 13:case"end":return n.stop()}}),null,null,[[0,10]])},C=function(e){return{type:n.GET_CITY_DETAILS,data:e}},g=function(e){return{type:n.UPDATE_CITYS,data:e}},w=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).selectCity=function(e){a.props.GetCitys(e);var t=a.props.citysList.filter((function(t){return t.cityName===e.cityName})),n=a.props.citysList.map((function(e){return e.cityName})).indexOf(t[0].cityName);a.props.citysList[n].active=!a.props.citysList[n].active,a.setState({selected:e})},a.state={selected:{}},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.props.citysList;return c.a.createElement("ul",{className:"list-group"},t?t.map((function(t){return c.a.createElement("li",{key:JSON.stringify(t),onClick:function(){return e.selectCity(t)},className:"list-group-item"+(t.active?" list-group-item-dark":" ")},t.cityName)})):"")}}]),t}(c.a.Component),T=Object(l.b)((function(e){return{citysList:e.forecast.citysList}}),(function(e){return{GetCitys:function(t){return e(function(e){return{type:n.SET_CITYS,data:e}}(t))}}}))(w),O=function(e){return c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-header"},c.a.createElement("h4",{className:"card-title"},e.location.city," ",c.a.createElement("span",null,",",e.location.region)),c.a.createElement("p",{className:"card-text"},e.location.country),c.a.createElement("span",{className:"card-link"}," Wind speed: ",e.current_observation.wind.speed)),c.a.createElement("div",{className:"card-body"},c.a.createElement("h5",null,"Forcast"),c.a.createElement("br",null),c.a.createElement("div",{className:"card-columns"},e.forecasts.map((function(e){return c.a.createElement("div",{key:e.date,className:"card bg-light"},c.a.createElement("div",{className:"card-body text-center"},c.a.createElement("h5",{className:"card-text"},e.day),c.a.createElement("p",{className:"card-text"},"Low: ",e.low),c.a.createElement("p",{className:"card-text"},"High: ",e.high),c.a.createElement("p",{className:"card-text"},"Climate: ",e.text)))})))),c.a.createElement("div",{className:"card-footer"},c.a.createElement("p",{className:"card-text"},"Humidity : ",e.current_observation.atmosphere.humidity),c.a.createElement("p",{className:"card-text"},"Visibility : ",e.current_observation.atmosphere.visibility),c.a.createElement("p",{className:"card-text"},"Pressure: ",e.current_observation.atmosphere.pressure)))},_=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).submitHandler=function(e){e.preventDefault(),a.props.getWeaterDetials(a.state.location)},a.state={location:""},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("header",{className:"header"},c.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-secondary static-top"},c.a.createElement("div",{className:"container"},c.a.createElement("a",{href:"https://www.yahoo.com/?ilc=401",target:"_blank",rel:"noopener noreferrer"},c.a.createElement("img",{className:"brand",alt:"Yahoo",src:"https://poweredby.yahoo.com/purple.png",width:"134",height:"29"})),c.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarResponsive","aria-controls":"navbarResponsive","aria-expanded":"false","aria-label":"Toggle navigation"},c.a.createElement("span",{className:"navbar-toggler-icon"})),c.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarResponsive"},c.a.createElement("ul",{className:"navbar-nav ml-auto"},c.a.createElement("li",{className:"nav-item active"},c.a.createElement("form",{className:"nav-link navbar-form navbar-right",onSubmit:this.submitHandler,role:"search"},c.a.createElement("div",{className:"form-group"},c.a.createElement("input",{id:"city",type:"text",value:this.state.location,onChange:function(t){e.setState({location:t.target.value})},className:"form-control",placeholder:"Enter City",required:!0})),c.a.createElement("button",{type:"submit",disabled:this.state.location.length<2,className:"btn btn-light"},"Get Forecast"))))))))}}]),t}(c.a.Component),j=Object(l.b)(null,(function(e){return{getWeaterDetials:function(t){return e((a=t,function(e){var t;return h.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=4,h.a.awrap(b(a));case 4:t=n.sent,console.log(t),e(C(t)),n.next=13;break;case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0),e(C([]));case 13:case"end":return n.stop()}}),null,null,[[0,9]])}));var a}}}))(_),x=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).getDetails=function(){if(!a.props.selectedCitys.length)return alert("Please select city");a.props.GetWeaterDetials(a.props.selectedCitys)},a.state={location:"",data:"",cityList:[]},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.props.GetCitys()}},{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement(j,null),c.a.createElement("main",null,c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-sm-4"},c.a.createElement("h4",null,"City list :"),c.a.createElement(T,null),c.a.createElement("br",null),c.a.createElement("button",{onClick:this.getDetails,className:"btn btn-secondary secondary text-right"},"Get Forecast ")),c.a.createElement("div",{className:"col-sm-8"},c.a.createElement("div",{className:"container"},c.a.createElement("h3",null,"Weather Details :"),this.props.weatherDetails.map((function(e){return c.a.createElement(r.Fragment,{key:e.location.city},c.a.createElement(O,e),c.a.createElement("br",null))})))))))))}}]),t}(c.a.Component),S=Object(l.b)((function(e){var t=e.forecast;return{cityList:t.citysList,selectedCitys:t.selectedCitys,weatherDetails:t.weatherDetails}}),(function(e){return{GetCitys:function(){return e((function(e){var t;return h.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,h.a.awrap(f());case 3:t=a.sent,e(g(t)),a.next=11;break;case 7:a.prev=7,a.t0=a.catch(0),console.log(a.t0),e(g([]));case 11:case"end":return a.stop()}}),null,null,[[0,7]])}))},GetWeaterDetials:function(t){return e(function(e){return function(t){var a;return h.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,h.a.awrap(N(e));case 3:a=n.sent,t(C(a)),n.next=11;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0),t(C([]));case 11:case"end":return n.stop()}}),null,null,[[0,7]])}}(t))}}}))(x),I=(a(34),a(4)),L=a(20),D=a.n(L),Y=a(11),k=a(12),G={citysList:[],selectedCitys:[],weatherDetails:[]},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case n.UPDATE_CITYS:return Object(k.a)({},e,{citysList:Object(Y.a)(t.data)});case n.SET_CITYS:var a=t.data,r=[],c=e.selectedCitys.filter((function(e){return e.cityName===a.cityName}));return r=c.length?Object(Y.a)(e.selectedCitys.filter((function(e){return e.cityName!==a.cityName}))):[].concat(Object(Y.a)(e.selectedCitys),[a]),Object(k.a)({},e,{selectedCitys:r});case n.CLEAR_CITYS:return Object(k.a)({},e,{citysList:[]});case n.UNSELECT_CITY:var s=t.data,i=e.selectedCitys.filter((function(e){return e.cityName!==s.cityName}));return Object(k.a)({},e,{selectedCitys:Object(Y.a)(i)});case n.GET_CITY_DETAILS:return Object(k.a)({},e,{weatherDetails:Object(Y.a)(t.data)});default:return e}},U=a(21),W=Object(I.c)({forecast:A}),P=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||I.d,R=Object(I.e)(W,y,P(Object(I.a)(D.a,U.a))),F=function(){return c.a.createElement(l.a,{store:R},c.a.createElement(S,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[22,1,2]]]);
//# sourceMappingURL=main.a8965504.chunk.js.map