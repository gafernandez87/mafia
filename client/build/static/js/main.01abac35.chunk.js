(this.webpackJsonpmafia_client=this.webpackJsonpmafia_client||[]).push([[0],{1:function(e,a,t){e.exports={game:"Game_game__RYcau",title:"Game_title__3Uagc",subtitle:"Game_subtitle__l7Thi",adminSelect:"Game_adminSelect__2t5sq",cardContainer:"Game_cardContainer__3b_U9",allNumbers:"Game_allNumbers__2owDI",playerList:"Game_playerList__1H81C",day:"Game_day__2tUXY",night:"Game_night__b9s5w",player:"Game_player__3MZVJ",job:"Game_job__UQMIx",jobImage:"Game_jobImage__Ijw2i",selected:"Game_selected__1JxE-",disabled:"Game_disabled__39JWk",buttons:"Game_buttons__5fBHq",coolButton:"Game_coolButton__3e5g_",smallButton:"Game_smallButton__2TzgO",mafiaButton:"Game_mafiaButton__3LrVC",policiaButton:"Game_policiaButton__1c0hW",pass:"Game_pass__-haMb",lobbyPlayers:"Game_lobbyPlayers__2iM2H"}},13:function(e,a,t){e.exports={landing:"Landing_landing__hdt2M",title:"Landing_title__3hFdR",input:"Landing_input__2dzEV",coolButton:"Landing_coolButton__2l2ZK"}},27:function(e,a,t){e.exports={notification:"notification_notification__l2thW",coolButton:"notification_coolButton__1hWlD",close:"notification_close__1nEyt"}},50:function(e,a,t){e.exports=t(92)},55:function(e,a,t){},89:function(e,a){},92:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),i=t(46),c=t.n(i),o=t(24),r=t(2),s=(t(55),t(7)),u=t(93),m=t(28);function d(e,a){return fetch(e,Object(m.a)(Object(m.a)({},a),{},{method:a&&a.method||"GET",headers:{"Content-Type":"application/json;charset=utf-8"}})).then((function(e){return function(e){if(!e.ok)throw console.log(e),Error(e.statusText);return e.json()}(e)}))}var f,p=t(13),b=t.n(p),g=["mafia","medico","policia","pueblo"],_=function(){var e=Object(n.useState)(""),a=Object(s.a)(e,2),t=a[0],i=a[1],c=Object(n.useState)(null),o=Object(s.a)(c,2),m=o[0],f=o[1],p=Object(u.a)(["mafia-session-id"]),_=Object(s.a)(p,2),y=(_[0],_[1]),E=Object(r.f)();Object(n.useEffect)((function(){h()}),[]);var h=function e(){var a=g.shift();f(a),g.push(a),setTimeout((function(){e()}),1e3)};return l.a.createElement("div",{className:b.a.landing},l.a.createElement("h1",{className:b.a.title},"MAFIA"),l.a.createElement("img",{src:"mafia.png",alt:"roles",style:{display:"mafia"===m?"block":"none"}}),l.a.createElement("img",{src:"medico.png",alt:"roles",style:{display:"medico"===m?"block":"none"}}),l.a.createElement("img",{src:"policia.png",alt:"roles",style:{display:"policia"===m?"block":"none"}}),l.a.createElement("img",{src:"pueblo.png",alt:"roles",style:{display:"pueblo"===m?"block":"none"}}),l.a.createElement("input",{type:"text",value:t,placeholder:"NOMBRE",className:b.a.input,onChange:function(e){return i(e.target.value)}}),l.a.createElement("button",{className:b.a.coolButton,onClick:function(){d("/api/players",{method:"POST",body:JSON.stringify({name:t})}).then((function(e){y("mafia-session-id",e.id),E.push("/game")})).catch((function(e){return console.log("Error while creating room",e)}))}},"Unirse al juego"))},y=t(48),E=t.n(y),h=t(1),v=t.n(h),j=function(e){var a=e.players,t=e.adminSelect,n=e.initGame;return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,"Sala de espera"),l.a.createElement("div",{className:v.a.adminSelect},l.a.createElement("label",null,"Moderador"),l.a.createElement("select",{onChange:function(e){return t(e.target.value)}},l.a.createElement("option",{value:""},"Seleccionar..."),a.map((function(e){return l.a.createElement("option",{key:e.id,value:e.id},e.name)})))),l.a.createElement("ul",{className:v.a.lobbyPlayers},a.map((function(e){return l.a.createElement("li",{key:e.id,className:v.a.player},e.name,e.isAdmin?l.a.createElement("img",{src:"eye.png",alt:"admin"}):null)}))),l.a.createElement("button",{onClick:n,style:{width:"100%"},className:v.a.coolButton},"Empezar"))},k=function(e){var a=e.player,t=e.me,n=e.handleClick,i=e.selected,c=e.disabled,o=[v.a.player];i&&o.push(v.a.selected),c&&o.push(v.a.disabled);var r=!c&&(a.id!==t.id||a.id===t.id&&"medico"===t.job);return l.a.createElement("li",{className:o.join(" "),onClick:function(){return r&&n(a.id)}},l.a.createElement("span",null,a.name),function(e,a){return l.a.createElement("span",{className:v.a.job},(e.id===a.id||a.isAdmin)&&l.a.createElement("img",{src:"".concat(e.job,".png"),className:v.a.jobImage,alt:e.job}),l.a.createElement("img",{src:"".concat(e.status,".png"),alt:e.status}))}(a,t))},G=function(e){var a=e.game,t=e.me,i=e.events,c=Object(n.useState)(null),o=Object(s.a)(c,2),r=o[0],u=o[1],m=function(e){if(r&&r.id===e)u(null);else{var t=a.players.find((function(a){return a.id===e}));u(t)}};return t?l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{className:v.a.title},"Dia ",a.dayCount),"admin"!==a.turn&&l.a.createElement("h4",{className:v.a.subtitle},"Es el turno de ",l.a.createElement("b",null,a.turn)),l.a.createElement("div",{className:[v.a.playerList,v.a[a.daytime]].join(" ")},l.a.createElement("ul",null,a.players.map((function(e){if(e.isAdmin)return null;var n=t.job===a.turn&&r&&r.id===e.id,i="dead"===e.status;return l.a.createElement(k,{key:e.id,player:e,me:t,handleClick:m,selected:n,disabled:i})})))),l.a.createElement("div",{className:v.a.buttons},function(e,a,t,n){if("dead"===a.status)return null;if(e!==a.job)return null;var i=[v.a.coolButton];switch(a.job){case"mafia":return i.push(v.a.mafiaButton),l.a.createElement("button",{disabled:!n,className:i.join(" "),onClick:function(){return t.kill(n.id)}},"Matar ",n?"a ".concat(n.name):"");case"policia":return i.push(v.a.policiaButton),l.a.createElement("button",{disabled:!n,className:i.join(" "),onClick:function(){return t.investigate(n.id)}},"Investigar ",n?"a ".concat(n.name):"");case"medico":return l.a.createElement("button",{disabled:!n,className:i.join(" "),onClick:function(){return t.protect(n.id)}},"Proteger ",n?"a ".concat(n.name):"");default:return null}}(a.turn,t,i,r),t.isAdmin&&function(e,a,t){var n=[],i="day"===e.daytime?"noche":"dia";if("night"===e.daytime){var c=e.alreadyPlayed.includes("policia"),o=e.alreadyPlayed.includes("medico"),r=e.alreadyPlayed.includes("mafia");n.push(l.a.createElement("button",{key:"mafia",style:{flexGrow:1},className:[v.a.smallButton,v.a.mafiaButton].join(" "),onClick:function(){return a.changeTurn("mafia")},disabled:r},"Mafia")),n.push(l.a.createElement("button",{key:"medico",style:{flexGrow:1},className:v.a.smallButton,onClick:function(){return a.changeTurn("medico")},disabled:o},"Medico")),n.push(l.a.createElement("button",{key:"policia",style:{flexGrow:1},className:[v.a.smallButton,v.a.policeButton].join(" "),onClick:function(){return a.changeTurn("policia")},disabled:c},"Policia"))}var s=e.alreadyPlayed.length>=3||"day"===e.daytime;return n.push(l.a.createElement("button",{key:"pass",onClick:a.toggleDay,className:[v.a.smallButton,v.a.pass].join(" "),disabled:!s},"Pasar a ",i)),n.push(l.a.createElement("button",{key:"kick",disabled:!t,style:{flexGrow:2},onClick:function(){return a.kick(t.id)},className:v.a.smallButton},"Echar ",t?"a ".concat(t.name):"")),n.push(l.a.createElement("button",{key:"reset",style:{flexGrow:2},onClick:a.reset,className:v.a.smallButton},"Volver a empezar")),[].concat(n)}(a,i,r))):l.a.createElement("div",null,"Loading...")},N=t(27),O=t.n(N),B=function(e){var a=e.message,t=e.visible,n=e.handleOk;return console.log("visible",t),t?l.a.createElement("div",{className:O.a.notification},a,l.a.createElement("button",{onClick:n,className:O.a.coolButton},"OK")):null},C=function(){var e=Object(n.useState)(null),a=Object(s.a)(e,2),t=a[0],i=a[1],c=Object(n.useState)(null),o=Object(s.a)(c,2),r=o[0],m=o[1],d=Object(n.useState)({visible:!1,message:""}),p=Object(s.a)(d,2),b=p[0],g=p[1],_=Object(u.a)(["mafia-session-id"]),y=Object(s.a)(_,1)[0];Object(n.useEffect)((function(){var e=y["mafia-session-id"];(f=E()()).on("game",(function(a){if(a)if(console.log(a),"game_over"===a.status)g({visible:!0,message:l.a.createElement(l.a.Fragment,null,l.a.createElement("h3",null,"Juego terminado"),l.a.createElement("p",{style:{fontSize:"20px",marginBottom:"40px"}},"Gan\xf3 ","pueblo"===a.winner?"el pueblo!":"la mafia!"))});else{if(i(a),!r){var t=a.players.find((function(a){return a.id===e}));m(t)}if("policia"===a.turn)"dead"===a.players.find((function(e){return"policia"===e.job})).status&&setTimeout((function(){f.emit("changeTurn",{nextTurn:"admin",from:"policia"})}),3e3);else if("medico"===a.turn){"dead"===a.players.find((function(e){return"medico"===e.job})).status&&setTimeout((function(){f.emit("changeTurn",{nextTurn:"admin",from:"medico"})}),3e3)}}})),f.on("investigate",(function(e){g({visible:!0,message:l.a.createElement(l.a.Fragment,null,l.a.createElement("b",{style:{fontSize:"17px"}},"Resultado de la investigacion:"),l.a.createElement("h2",null,e?l.a.createElement("b",{style:{color:"green"}},"POSITIVO"):l.a.createElement("b",{style:{color:"red"}},"NEGATIVO")))}),f.emit("changeTurn",{nextTurn:"admin"})}))}),[]);var h=function(e){f.emit(e)},k={reset:function(){return h("reset")},toggleDay:function(){return h("toggleDay")},kick:function(e){return f.emit("kick",e)},kill:function(e){return f.emit("kill",e)},protect:function(e){return f.emit("protect",e)},changeTurn:function(e){return f.emit("changeTurn",{nextTurn:e})},investigate:function(e){return f.emit("investigate",e)}};return t?l.a.createElement("div",{className:v.a.game},l.a.createElement(B,{visible:b.visible,message:b.message,handleOk:function(){g({visible:!1,message:""})}}),"new"===t.status&&l.a.createElement(j,{players:t.players,initGame:function(){t.players.length<5?g({visible:!0,message:l.a.createElement("h3",null,"Se necesitan al menos 5 jugadores para comenzar")}):h("beginGame")},adminSelect:function(e){f.emit("setAdmin",e)}}),"in_progress"===t.status&&l.a.createElement(G,{me:r,game:t,events:k})):l.a.createElement("div",null,"Loading...")};c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(o.a,null,l.a.createElement(r.c,null,l.a.createElement(r.a,{path:"/",exact:!0},l.a.createElement(_,null)),l.a.createElement(r.a,{path:"/game",exact:!0},l.a.createElement(C,null))))),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.01abac35.chunk.js.map