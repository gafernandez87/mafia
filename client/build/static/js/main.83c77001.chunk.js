(this.webpackJsonpmafia_client=this.webpackJsonpmafia_client||[]).push([[0],{1:function(e,a,t){e.exports={game:"Game_game__RYcau",title:"Game_title__3Uagc",subtitle:"Game_subtitle__l7Thi",adminSelect:"Game_adminSelect__2t5sq",cardContainer:"Game_cardContainer__3b_U9",allNumbers:"Game_allNumbers__2owDI",playerList:"Game_playerList__1H81C",day:"Game_day__2tUXY",night:"Game_night__b9s5w",player:"Game_player__3MZVJ",job:"Game_job__UQMIx",jobImage:"Game_jobImage__Ijw2i",selected:"Game_selected__1JxE-",disabled:"Game_disabled__39JWk",buttons:"Game_buttons__5fBHq",coolButton:"Game_coolButton__3e5g_",smallButton:"Game_smallButton__2TzgO",mafiaButton:"Game_mafiaButton__3LrVC",policiaButton:"Game_policiaButton__1c0hW",pass:"Game_pass__-haMb"}},49:function(e,a,t){e.exports=t(91)},54:function(e,a,t){},88:function(e,a){},9:function(e,a,t){e.exports={landing:"Landing_landing__hdt2M",title:"Landing_title__3hFdR",newRoom:"Landing_newRoom__1mEHR",subtitle:"Landing_subtitle__sOLCb",roomName:"Landing_roomName__lQ_vz",input:"Landing_input__2dzEV",button:"Landing_button__3Vf0K"}},91:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),i=t(45),r=t.n(i),c=t(24),o=t(2),u=(t(54),t(7)),s=t(92),m=t(27);function d(e,a){return fetch(e,Object(m.a)(Object(m.a)({},a),{},{method:a&&a.method||"GET",headers:{"Content-Type":"application/json;charset=utf-8"}})).then((function(e){return function(e){if(!e.ok)throw console.log(e),Error(e.statusText);return e.json()}(e)}))}var _,f=t(9),p=t.n(f),b=function(){var e=Object(n.useState)(""),a=Object(u.a)(e,2),t=a[0],i=a[1],r=Object(s.a)(["mafia-session-id"]),c=Object(u.a)(r,2),m=(c[0],c[1]),_=Object(o.f)();return l.a.createElement("div",{className:p.a.landing},l.a.createElement("h2",{className:p.a.title},"Mafia!"),l.a.createElement("section",{className:p.a.newRoom},l.a.createElement("p",{className:p.a.subtitle},"Ingresa tu nombre"),l.a.createElement("label",{className:p.a.roomName},"Nombre"),l.a.createElement("input",{type:"text",className:p.a.input,value:t,onChange:function(e){return i(e.target.value)}}),l.a.createElement("button",{className:p.a.button,onClick:function(){d("/api/players",{method:"POST",body:JSON.stringify({name:t})}).then((function(e){m("mafia-session-id",e.id),_.push("/game")})).catch((function(e){return console.log("Error while creating room",e)}))}},"Unirse al juego")))},g=t(47),E=t.n(g),h=t(1),y=t.n(h),j=function(e){var a=e.players,t=e.adminSelect,n=e.initGame;return l.a.createElement(l.a.Fragment,null,l.a.createElement("h4",null,"Jugadores"),l.a.createElement("div",{className:y.a.adminSelect},l.a.createElement("label",null,"Moderador"),l.a.createElement("select",{onChange:function(e){return t(e.target.value)}},l.a.createElement("option",{value:""},"Seleccionar..."),a.map((function(e){return l.a.createElement("option",{key:e.name,value:e.name},e.name)})))),l.a.createElement("ul",null,a.map((function(e){return l.a.createElement("li",{key:e.id},e.name," ",e.isAdmin?" -> A":"")}))),l.a.createElement("button",{onClick:n},"Empezar"))},v=function(e){var a=e.player,t=e.me,n=e.handleClick,i=e.selected,r=e.disabled,c=[y.a.player];i&&c.push(y.a.selected),r&&c.push(y.a.disabled);var o=!r&&a.id!==t.id;return l.a.createElement("li",{className:c.join(" "),onClick:function(){return o&&n(a.id)}},l.a.createElement("span",null,a.name),function(e,a){return l.a.createElement("span",{className:y.a.job},(e.id===a.id||a.isAdmin)&&l.a.createElement("img",{src:"".concat(e.job,".png"),className:y.a.jobImage,alt:e.job}),l.a.createElement("img",{src:"".concat(e.status,".png"),alt:e.status}))}(a,t))},k=function(e){var a=e.game,t=e.me,i=e.events,r=Object(n.useState)(null),c=Object(u.a)(r,2),o=c[0],s=c[1],m=function(e){var t=a.players.find((function(a){return a.id===e}));s(t)};return t?l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{className:y.a.title},"Juego en curso"),"admin"!==a.turn&&l.a.createElement("h4",{className:y.a.subtitle},"Es el turno de ",l.a.createElement("b",null,a.turn)),l.a.createElement("div",{className:[y.a.playerList,y.a.day].join(" ")},l.a.createElement("ul",null,a.players.map((function(e){if(e.isAdmin)return null;var n=t.job===a.turn&&o&&o.id===e.id,i="dead"===e.status;return l.a.createElement(v,{key:e.id,player:e,me:t,handleClick:m,selected:n,disabled:i})})))),l.a.createElement("div",{className:y.a.buttons},function(e,a,t,n){if(e===a.job){var i=[y.a.coolButton];switch(a.job){case"mafia":return i.push(y.a.mafiaButton),l.a.createElement("button",{className:i.join(" "),onClick:function(){return t.kill(n.id)}},"Matar ",n?"a ".concat(n.name):"");case"policia":return i.push(y.a.policiaButton),l.a.createElement("button",{className:i.join(" "),onClick:function(){return t.investigate(n.id)}},"Investigar ",n?"a ".concat(n.name):"");case"medico":return l.a.createElement("button",{className:i.join(" "),onClick:function(){return t.protect(n.id)}},"Proteger ",n?"a ".concat(n.name):"");default:return null}}return null}(a.turn,t,i,o),t.isAdmin&&function(e,a,t){var n=[],i="day"===e.daytime?"noche":"dia";if("night"===e.daytime){var r=e.alreadyPlayed.includes("policia"),c=e.alreadyPlayed.includes("medico"),o=e.alreadyPlayed.includes("mafia");n.push(l.a.createElement("button",{key:"mafia",style:{flexGrow:1},className:[y.a.smallButton,y.a.mafiaButton].join(" "),onClick:function(){return a.changeTurn("mafia")},disabled:o},"Mafia")),n.push(l.a.createElement("button",{key:"medico",style:{flexGrow:1},className:y.a.smallButton,onClick:function(){return a.changeTurn("medico")},disabled:c},"Medico")),n.push(l.a.createElement("button",{key:"policia",style:{flexGrow:1},className:[y.a.smallButton,y.a.policeButton].join(" "),onClick:function(){return a.changeTurn("policia")},disabled:r},"Policia"))}var u=e.alreadyPlayed.length>=3||"day"===e.daytime;return n.push(l.a.createElement("button",{key:"pass",onClick:a.toggleDay,className:[y.a.smallButton,y.a.pass].join(" "),disabled:!u},"Pasar a ",i)),n.push(l.a.createElement("button",{key:"kick",style:{flexGrow:2},onClick:function(){return a.kick(t.id)},className:y.a.smallButton},"Echar ",t?"a ".concat(t.name):"")),n.push(l.a.createElement("button",{key:"reset",style:{flexGrow:2},onClick:a.reset,className:y.a.smallButton},"Volver a empezar")),[].concat(n)}(a,i,o))):l.a.createElement("div",null,"Loading...")},N=function(){var e=Object(n.useState)(null),a=Object(u.a)(e,2),t=a[0],i=a[1],r=Object(n.useState)(null),c=Object(u.a)(r,2),o=c[0],m=c[1],d=Object(s.a)(["mafia-session-id"]),f=Object(u.a)(d,1)[0];Object(n.useEffect)((function(){var e=f["mafia-session-id"];(_=E()()).on("game",(function(a){if(a)if(console.log(a),"game_over"===a.status)alert("Gan\xf3 "+a.winner);else{i(a);var t=a.players.find((function(a){return a.id===e}));m(t)}})),_.on("investigate",(function(e){alert("Resultado: "+e),_.emit("changeTurn","admin")}))}),[]);var p=function(e){_.emit(e)},b={reset:function(){return p("reset")},toggleDay:function(){return p("toggleDay")},kick:function(e){return _.emit("kick",e)},kill:function(e){return _.emit("kill",e)},protect:function(e){return _.emit("protect",e)},changeTurn:function(e){return _.emit("changeTurn",e)},investigate:function(e){return _.emit("investigate",e)}};return t?l.a.createElement("div",{className:y.a.game},"new"===t.status&&l.a.createElement(j,{players:t.players,initGame:function(){t.players.length<5?alert("Se necesitan al menos 5 jugadores para comenzar"):p("beginGame")},adminSelect:function(e){_.emit("setAdmin",e)}}),"in_progress"===t.status&&l.a.createElement(k,{me:o,game:t,events:b})):l.a.createElement("div",null,"Loading")};r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(c.a,null,l.a.createElement(o.c,null,l.a.createElement(o.a,{path:"/",exact:!0},l.a.createElement(b,null)),l.a.createElement(o.a,{path:"/game",exact:!0},l.a.createElement(N,null))))),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.83c77001.chunk.js.map