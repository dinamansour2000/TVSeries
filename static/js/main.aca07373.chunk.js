(this.webpackJsonpTVSeries=this.webpackJsonpTVSeries||[]).push([[0],{21:function(e,t,n){e.exports=n.p+"static/media/loader.b0a23662.gif"},22:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},23:function(e,t,n){e.exports=n(37)},28:function(e,t,n){},29:function(e,t,n){},35:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(18),o=n.n(i),c=(n(28),n(7)),s=n(8),l=n(10),u=n(9),m=n(5),h=function(e){return r.a.createElement("p",{className:"App-intro"},e.message)},d=(n(29),n(11)),p=function(e){var t=e.series;return r.a.createElement("li",null,r.a.createElement(d.b,{to:"/series/".concat(t.show.id)},t.show.name))},f=function(e){return r.a.createElement("div",null,r.a.createElement("ul",{className:"series-list"},e.list.map((function(e){return r.a.createElement(p,{series:e,key:e.show.id})}))))},v=n(21),g=n.n(v),E=function(e){return r.a.createElement("div",null,r.a.createElement("img",{style:{width:75},alt:"Loader icon",src:g.a}))},w=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={series:[],seriesName:"",isFetching:!1},e.onSeriesInputChange=function(t){e.setState({seriesName:t.target.value,isFetching:!0}),fetch("http://api.tvmaze.com/search/shows?q=".concat(t.target.value)).then((function(e){return e.json()})).then((function(t){return e.setState({series:t,isFetching:!1})}))},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this.state,t=e.series,n=e.seriesName,a=e.isFetching;return r.a.createElement("div",null,r.a.createElement(h,{message:"Here you can find all of your most loved series"}),r.a.createElement("div",null,r.a.createElement("input",{value:n,type:"text",onChange:this.onSeriesInputChange})),!a&&0===t.length&&""===n.trim()&&r.a.createElement("p",null,"Please enter series name into the input"),!a&&0===t.length&&""!==n.trim()&&r.a.createElement("p",null,"No TV series has been found with this name"),a&&r.a.createElement(E,null),!a&&r.a.createElement(f,{list:this.state.series}))}}]),n}(a.Component),b=n(22),y=n.n(b),j=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={show:null},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;fetch("http://api.tvmaze.com/shows/".concat(t,"?embed=episodes")).then((function(e){return e.json()})).then((function(t){return e.setState({show:t})}))}},{key:"render",value:function(){var e=this.state.show;return console.log(e),r.a.createElement("div",null,null===e&&r.a.createElement(E,null),null!==e&&r.a.createElement("div",null,r.a.createElement("p",null,e.name),r.a.createElement("p",null,"Premiered : ",e.premiered),r.a.createElement("p",null,"Rating : ",e.rating.average),r.a.createElement("p",null,"Episodes : ",e._embedded.episodes.length),r.a.createElement("p",null,null!==e.image&&r.a.createElement("img",{alt:"Show",src:e.image.medium}),null===e.image&&r.a.createElement("img",{alt:"No Image",src:y.a,style:{width:300}}))))}}]),n}(a.Component),k=function(e){return r.a.createElement(m.c,null,r.a.createElement(m.a,{exact:!0,path:"/",component:w}),r.a.createElement(m.a,{path:"/series/:id",component:j}))},S=(n(35),n(36),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("h1",{className:"App-title"},"TV Series List")),r.a.createElement(k,null))}}]),n}(a.Component)),O=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function N(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(r.a.createElement(d.a,null,r.a.createElement(S,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/TVSeries",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/TVSeries","/service-worker.js");O?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):N(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):N(t,e)}))}}()}},[[23,1,2]]]);
//# sourceMappingURL=main.aca07373.chunk.js.map