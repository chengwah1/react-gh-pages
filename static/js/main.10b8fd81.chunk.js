(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),l=a.n(c),o=(a(15),a(6)),i=a(1),s=a(2),u=a(4),m=a(3),h=a(5),d=function(e){var t=e.players.length,a=e.players.reduce(function(e,t){return e+t.score},0);return r.a.createElement("table",{className:"stats"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"Player:"),r.a.createElement("td",null,t)),r.a.createElement("tr",null,r.a.createElement("td",null,"Total Points:"),r.a.createElement("td",null,a))))},p=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={isRuning:!1,elapsedTime:0,previousTime:0},a.handleStopwatch=function(){a.setState({isRuning:!a.state.isRuning}),a.state.isRuning||a.setState({previousTime:Date.now()})},a.tick=function(){if(a.state.isRuning){var e=Date.now();a.setState({previousTime:e,elapsedTime:a.state.elapsedTime+(e-a.state.previousTime)})}},a.handleReset=function(){a.setState({elapsedTime:0})},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.intervalID=setInterval(this.tick,100)}},{key:"componentWillUnmount",value:function(){clearInterval(this.intervalID)}},{key:"render",value:function(){return r.a.createElement("div",{className:"stopwatch"},r.a.createElement("h2",null,"Stopwatch"),r.a.createElement("span",{className:"stopwatch-time"},Math.floor(this.state.elapsedTime/1e3)),r.a.createElement("div",{className:"stopwatch-button"},r.a.createElement("button",{onClick:this.handleStopwatch},this.state.isRuning?"Stop":"Start"),r.a.createElement("button",{onClick:this.handleReset},"Restart")))}}]),t}(n.Component),v=function(e){return r.a.createElement("header",null,r.a.createElement(d,{players:e.players}),r.a.createElement("h1",null,e.title),r.a.createElement(p,null))},f=function(e){var t=e.index;return r.a.createElement("div",{className:"counter"},r.a.createElement("button",{className:"counter-action decrement",onClick:function(){return e.changeScore(t,-1)}}," - "),r.a.createElement("span",{className:"counter-score"},e.score),r.a.createElement("button",{className:"counter-action increment",onClick:function(){return e.changeScore(t,1)}}," + "))},y=function(e){return r.a.createElement("svg",{viewBox:"0 0 44 35",className:e.isHighScore?"is-high-score":null},r.a.createElement("path",{d:"M26.7616 10.6207L21.8192 0L16.9973 10.5603C15.3699 14.1207 10.9096 15.2672 7.77534 12.9741L0 7.24138L6.56986 28.8448H37.0685L43.5781 7.72414L35.7425 13.0948C32.6685 15.2672 28.3288 14.0603 26.7616 10.6207Z",transform:"translate(0 0.301727)"}),r.a.createElement("rect",{width:"30.4986",height:"3.07759",transform:"translate(6.56987 31.5603)"}))},E=function(e){return r.a.createElement("div",{className:"player"},r.a.createElement("span",{className:"player-name"},r.a.createElement("button",{className:"remove-player",onClick:function(){return e.removePlayer(e.id)}},"\u2716"),r.a.createElement(y,{isHighScore:e.isHighScore}),e.name),r.a.createElement(f,{score:e.score,index:e.index,changeScore:e.changeScore}))},g=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={value:""},a.handleChange=function(e){a.setState({value:e.target.value})},a.handleSubmit=function(e){e.preventDefault(),a.props.addPlayer(a.state.value),a.setState({value:""})},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("input",{type:"text",value:this.state.value,onChange:this.handleChange,placeholder:"enter a player's name"}),r.a.createElement("input",{type:"submit",placeholder:"Add Player"}))}}]),t}(n.Component),b=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={players:[{name:"John",score:0,id:1},{name:"Treasure",score:0,id:2},{name:"Ashley",score:0,id:3},{name:"James",score:0,id:4}]},a.getHighScore=function(){var e=a.state.players.map(function(e){return e.score}),t=Math.max.apply(Math,Object(o.a)(e));return t||null},a.handleScoreChange=function(e,t){a.setState(function(a){return{score:a.players[e].score+=t}})},a.handleRemovePlayer=function(e){a.setState(function(t){return{players:t.players.filter(function(t){return t.id!==e})}})},a.prevPlayerId=4,a.handleAddPlayer=function(e){a.setState(function(t){return{players:[].concat(Object(o.a)(t.players),[{name:e,score:0,id:a.prevPlayerId+=1}])}})},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.getHighScore();return r.a.createElement("div",{className:"scoreboard"},r.a.createElement(v,{title:"Scoreboard",players:this.state.players}),this.state.players.map(function(a,n){return r.a.createElement(E,{name:a.name,score:a.score,id:a.id,key:a.id.toString(),index:n,isHighScore:t===a.score,changeScore:e.handleScoreChange,removePlayer:e.handleRemovePlayer})}),r.a.createElement(g,{addPlayer:this.handleAddPlayer}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){e.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.10b8fd81.chunk.js.map