(this.webpackJsonpmafia_client=this.webpackJsonpmafia_client||[]).push([[0],{1:function(e,a,t){e.exports={game:"Game_game__RYcau",title:"Game_title__3Uagc",subtitle:"Game_subtitle__l7Thi",adminSelect:"Game_adminSelect__2t5sq",cardContainer:"Game_cardContainer__3b_U9",allNumbers:"Game_allNumbers__2owDI",playerList:"Game_playerList__1H81C",day:"Game_day__2tUXY",night:"Game_night__b9s5w",player:"Game_player__3MZVJ",job:"Game_job__UQMIx",jobImage:"Game_jobImage__Ijw2i",selected:"Game_selected__1JxE-",disabled:"Game_disabled__39JWk",buttons:"Game_buttons__5fBHq",coolButton:"Game_coolButton__3e5g_",smallButton:"Game_smallButton__2TzgO",mafiaButton:"Game_mafiaButton__3LrVC",policiaButton:"Game_policiaButton__1c0hW",pass:"Game_pass__-haMb",lobbyPlayers:"Game_lobbyPlayers__2iM2H"}},13:function(e,a,t){e.exports={landing:"Landing_landing__hdt2M",title:"Landing_title__3hFdR",input:"Landing_input__2dzEV",coolButton:"Landing_coolButton__2l2ZK"}},49:function(e,a,t){e.exports=t(91)},54:function(e,a,t){},88:function(e,a){},91:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),i=t(45),c=t.n(i),r=t(24),o=t(2),s=(t(54),t(7)),u=t(92),m=t(27);function d(e,a){return fetch(e,Object(m.a)(Object(m.a)({},a),{},{method:a&&a.method||"GET",headers:{"Content-Type":"application/json;charset=utf-8"}})).then((function(e){return function(e){if(!e.ok)throw console.log(e),Error(e.statusText);return e.json()}(e)}))}var f,p=t(13),_=t.n(p),b=["mafia.png","medico.png","policia.png","pueblo.png"],g=function(){var e=Object(n.useState)(""),a=Object(s.a)(e,2),t=a[0],i=a[1],c=Object(n.useState)(""),r=Object(s.a)(c,2),m=r[0],f=r[1],p=Object(u.a)(["mafia-session-id"]),g=Object(s.a)(p,2),y=(g[0],g[1]),E=Object(o.f)();Object(n.useEffect)((function(){h()}),[]);var h=function e(){var a=b.shift();f(a),b.push(a),setTimeout((function(){e()}),1e3)};return l.a.createElement("div",{className:_.a.landing},l.a.createElement("h1",{className:_.a.title},"MAFIA"),l.a.createElement("img",{src:m,alt:"roles"}),l.a.createElement("input",{type:"text",value:t,placeholder:"NOMBRE",className:_.a.input,onChange:function(e){return i(e.target.value)}}),l.a.createElement("button",{className:_.a.coolButton,onClick:function(){d("/api/players",{method:"POST",body:JSON.stringify({name:t})}).then((function(e){y("mafia-session-id",e.id),E.push("/game")})).catch((function(e){return console.log("Error while creating room",e)}))}},"Unirse al juego"))},y=t(47),E=t.n(y),h=t(1),j=t.n(h),v=function(e){var a=e.players,t=e.adminSelect,n=e.initGame;return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,"Sala de espera"),l.a.createElement("div",{className:j.a.adminSelect},l.a.createElement("label",null,"Moderador"),l.a.createElement("select",{onChange:function(e){return t(e.target.value)}},l.a.createElement("option",{value:""},"Seleccionar..."),a.map((function(e){return l.a.createElement("option",{key:e.id,value:e.id},e.name)})))),l.a.createElement("ul",{className:j.a.lobbyPlayers},a.map((function(e){return l.a.createElement("li",{key:e.id,className:j.a.player},e.name,e.isAdmin?l.a.createElement("img",{src:"eye.png",alt:"admin"}):null)}))),l.a.createElement("button",{onClick:n,style:{width:"100%"},className:j.a.coolButton},"Empezar"))},k=function(e){var a=e.player,t=e.me,n=e.handleClick,i=e.selected,c=e.disabled,r=[j.a.player];i&&r.push(j.a.selected),c&&r.push(j.a.disabled);var o=!c&&a.id!==t.id;return l.a.createElement("li",{className:r.join(" "),onClick:function(){return o&&n(a.id)}},l.a.createElement("span",null,a.name),function(e,a){return l.a.createElement("span",{className:j.a.job},(e.id===a.id||a.isAdmin)&&l.a.createElement("img",{src:"".concat(e.job,".png"),className:j.a.jobImage,alt:e.job}),l.a.createElement("img",{src:"".concat(e.status,".png"),alt:e.status}))}(a,t))},G=function(e){var a=e.game,t=e.me,i=e.events,c=Object(n.useState)(null),r=Object(s.a)(c,2),o=r[0],u=r[1],m=function(e){if(o&&o.id===e)u(null);else{var t=a.players.find((function(a){return a.id===e}));u(t)}};return t?l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{className:j.a.title},"Dia ",a.dayCount),"admin"!==a.turn&&l.a.createElement("h4",{className:j.a.subtitle},"Es el turno de ",l.a.createElement("b",null,a.turn)),l.a.createElement("div",{className:[j.a.playerList,j.a[a.daytime]].join(" ")},l.a.createElement("ul",null,a.players.map((function(e){if(e.isAdmin)return null;var n=t.job===a.turn&&o&&o.id===e.id,i="dead"===e.status;return l.a.createElement(k,{key:e.id,player:e,me:t,handleClick:m,selected:n,disabled:i})})))),l.a.createElement("div",{className:j.a.buttons},function(e,a,t,n){if(e===a.job){var i=[j.a.coolButton];switch(a.job){case"mafia":return i.push(j.a.mafiaButton),l.a.createElement("button",{disabled:!n,className:i.join(" "),onClick:function(){return t.kill(n.id)}},"Matar ",n?"a ".concat(n.name):"");case"policia":return i.push(j.a.policiaButton),l.a.createElement("button",{disabled:!n,className:i.join(" "),onClick:function(){return t.investigate(n.id)}},"Investigar ",n?"a ".concat(n.name):"");case"medico":return l.a.createElement("button",{disabled:!n,className:i.join(" "),onClick:function(){return t.protect(n.id)}},"Proteger ",n?"a ".concat(n.name):"");default:return null}}return null}(a.turn,t,i,o),t.isAdmin&&function(e,a,t){var n=[],i="day"===e.daytime?"noche":"dia";if("night"===e.daytime){var c=e.alreadyPlayed.includes("policia"),r=e.alreadyPlayed.includes("medico"),o=e.alreadyPlayed.includes("mafia");n.push(l.a.createElement("button",{key:"mafia",style:{flexGrow:1},className:[j.a.smallButton,j.a.mafiaButton].join(" "),onClick:function(){return a.changeTurn("mafia")},disabled:o},"Mafia")),n.push(l.a.createElement("button",{key:"medico",style:{flexGrow:1},className:j.a.smallButton,onClick:function(){return a.changeTurn("medico")},disabled:r},"Medico")),n.push(l.a.createElement("button",{key:"policia",style:{flexGrow:1},className:[j.a.smallButton,j.a.policeButton].join(" "),onClick:function(){return a.changeTurn("policia")},disabled:c},"Policia"))}var s=e.alreadyPlayed.length>=3||"day"===e.daytime;return n.push(l.a.createElement("button",{key:"pass",onClick:a.toggleDay,className:[j.a.smallButton,j.a.pass].join(" "),disabled:!s},"Pasar a ",i)),n.push(l.a.createElement("button",{key:"kick",disabled:!t,style:{flexGrow:2},onClick:function(){return a.kick(t.id)},className:j.a.smallButton},"Echar ",t?"a ".concat(t.name):"")),n.push(l.a.createElement("button",{key:"reset",style:{flexGrow:2},onClick:a.reset,className:j.a.smallButton},"Volver a empezar")),[].concat(n)}(a,i,o))):l.a.createElement("div",null,"Loading...")},N=function(){var e=Object(n.useState)(null),a=Object(s.a)(e,2),t=a[0],i=a[1],c=Object(n.useState)(null),r=Object(s.a)(c,2),o=r[0],m=r[1],d=Object(u.a)(["mafia-session-id"]),p=Object(s.a)(d,1)[0];Object(n.useEffect)((function(){var e=p["mafia-session-id"];(f=E()()).on("game",(function(a){if(a)if(console.log(a),"game_over"===a.status)alert("Gan\xf3 "+a.winner);else{i(a);var t=a.players.find((function(a){return a.id===e}));m(t)}})),f.on("investigate",(function(e){alert("Resultado: "+e),f.emit("changeTurn","admin")}))}),[]);var _=function(e){f.emit(e)},b={reset:function(){return _("reset")},toggleDay:function(){return _("toggleDay")},kick:function(e){return f.emit("kick",e)},kill:function(e){return f.emit("kill",e)},protect:function(e){return f.emit("protect",e)},changeTurn:function(e){return f.emit("changeTurn",e)},investigate:function(e){return f.emit("investigate",e)}};return t?l.a.createElement("div",{className:j.a.game},"new"===t.status&&l.a.createElement(v,{players:t.players,initGame:function(){t.players.length<5?alert("Se necesitan al menos 5 jugadores para comenzar"):_("beginGame")},adminSelect:function(e){f.emit("setAdmin",e)}}),"in_progress"===t.status&&l.a.createElement(G,{me:o,game:t,events:b})):l.a.createElement("div",null,"Loading...")};c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(r.a,null,l.a.createElement(o.c,null,l.a.createElement(o.a,{path:"/",exact:!0},l.a.createElement(g,null)),l.a.createElement(o.a,{path:"/game",exact:!0},l.a.createElement(N,null))))),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.8ee5ae66.chunk.js.map