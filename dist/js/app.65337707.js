(function(e){function t(t){for(var a,r,o=t[0],l=t[1],c=t[2],h=0,f=[];h<o.length;h++)r=o[h],s[r]&&f.push(s[r][0]),s[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);u&&u(t);while(f.length)f.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,o=1;o<n.length;o++){var l=n[o];0!==s[l]&&(a=!1)}a&&(i.splice(t--,1),e=r(r.s=n[0]))}return e}var a={},s={app:0},i=[];function r(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=a,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var u=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0596":function(e,t,n){},"073b":function(e,t,n){"use strict";var a=n("a04d"),s=n.n(a);s.a},"0861":function(e,t,n){"use strict";var a=n("4eae"),s=n.n(a);s.a},"0dbe":function(e,t,n){},"0eb0":function(e,t,n){"use strict";var a=n("7c14"),s=n.n(a);s.a},"0fbc":function(e,t,n){"use strict";var a=n("2593"),s=n.n(a);s.a},"21bb":function(e,t,n){"use strict";var a=n("bcc9"),s=n.n(a);s.a},"222f":function(e,t,n){"use strict";var a=n("640c"),s=n.n(a);s.a},2342:function(e,t,n){"use strict";var a=n("83b9"),s=n.n(a);s.a},2593:function(e,t,n){},"33f3":function(e,t,n){"use strict";var a=n("afa2"),s=n.n(a);s.a},"34c6":function(e,t,n){"use strict";var a=n("581f"),s=n.n(a);s.a},"42cd":function(e,t,n){"use strict";var a=n("fb74"),s=n.n(a);s.a},"44b9":function(e,t,n){"use strict";var a=n("f416"),s=n.n(a);s.a},"4eae":function(e,t,n){},"53d7":function(e,t,n){"use strict";var a=n("730d"),s=n.n(a);s.a},5452:function(e,t,n){"use strict";var a=n("0596"),s=n.n(a);s.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var a=n("2b0e"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},i=[],r={beforeMount:function(){this.$store.dispatch("getMe")}},o=r,l=(n("5c0b"),n("2877")),c=Object(l["a"])(o,s,i,!1,null,null,null);c.options.__file="App.vue";var u=c.exports,h=(n("6762"),n("2fdb"),n("7f7f"),n("75fc")),f=n("2f62"),d=n("bc3a"),v=n.n(d);a["a"].use(f["a"]);var p={isLoggedIn:!1,user:null,followed:[],followedLive:[],searchResults:[],appData:null},_={isLoggedIn:function(e){return e.isLoggedIn},user:function(e){return e.user||!1},userID:function(e){return!(!e.user||!e.user._id)&&e.user._id},twitchID:function(e){return!(!e.user||!e.user.id)&&e.user.id},followed:function(e){return e.followed},followedLive:function(e){return e.followedLive},favorites:function(e){return!(!e.user||!e.user.favorites)&&e.user.favorites},searchResults:function(e){return e.searchResults},appData:function(e){return e.appData}},m={setFollowedLive:function(e,t){a["a"].set(e,"followedLive",t)},favorite:function(e,t){var n=e.user.favorites;n.push(t),a["a"].set(e.user,"favorites",n)},unfavorite:function(e,t){var n=e.user.favorites.filter(function(e){return e.channelId!==t.channelId});a["a"].set(e.user,"favorites",n)},setLoggedIn:function(e,t){a["a"].set(e,"isLoggedIn",t)},setUser:function(e,t){a["a"].set(e,"user",t)},setFollowed:function(e,t){a["a"].set(e,"followed",t)},setSearchResults:function(e,t){var n=t.streams;n&&n.length?a["a"].set(e,"searchResults",Object(h["a"])(n)):a["a"].set(e,"searchResults",[])},toggleStream:function(e,t){var n=t.name,s=Object(h["a"])(e.favorites);s.includes(n)?s.splice(s.indexOf(n),1):s.push(n),a["a"].set(e,"favorites",s)},setAppData:function(e,t){var n=t.data;a["a"].set(e,"appData",n)}},g={getFollowedStatus:function(e,t){var n=e.commit,a=t.channel;return v.a.get("/data/getChannelLiveStatus?channel=".concat(a)).then(function(e){n("setFollowedLive",e.data.streams)})},toggleFavorite:function(e,t){var n=e.commit,a=t.channelData,s=t.toggle,i=s?"favorite":"unfavorite";return v.a.post("/api/".concat(i),{channelData:a}).then(function(){n(i,a)})},favorite:function(e,t){var n=e.commit,a=t.channelData;return v.a.post("/api/favorite",{channelData:a}).then(function(){n("favorite",a)})},unfavorite:function(e,t){var n=e.commit,a=t.channelData;return v.a.post("/api/unfavorite",{channelData:a}).then(function(){n("unfavorite",a)})},getMe:function(e){var t=e.commit;return v.a.get("/api/me").then(function(e){!e||e.data.code&&401===e.data.code?(t("setUser",null),t("setLoggedIn",!1)):(t("setUser",e.data.user),t("setLoggedIn",!0))})},getApp:function(e){var t=e.commit;return v.a.get("/api/app").then(function(e){var n=e.data;t("setAppData",{data:n})})},getUserChannels:function(e,t){var n=e.commit,a=t.userID;return v.a.get("/data/getUserChannels?userID=".concat(a),{userID:a}).then(function(e){var t=e.data.follows;n("setFollowed",t)})},search:function(e,t){var n=e.commit,a=t.query;return v.a.get("/data/searchStreams?query=".concat(a,"&limit=10")).then(function(e){var t=e.data.streams;n("setSearchResults",{streams:t})})},getUserIdByUserName:function(e,t){var n=e.commit,a=t.userName;return v.a.get("/data/getUserIdByUserName?userName=".concat(a),{userName:a}).then(function(e){var t=e.data;n("setUser",{name:a,id:t})})}},b=new f["a"].Store({state:p,getters:_,mutations:m,actions:g}),y=n("8c4f"),w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home flex-center"},[n("div",{staticClass:"home__header"},[n("h1",[e._v("HydraStreamer")]),e.isLoggedIn?n("h2",[e._v("Welcome back!")]):e._e()]),n("div",{staticClass:"home__button"},[e.isLoggedIn?e._e():n("div",[e.isLoggedIn?e._e():n("a",{attrs:{href:"/auth/twitch"}},[n("button",{staticClass:"button"},[e._v("Login with Twitch")])])]),e.isLoggedIn?n("div",[e.isLoggedIn?n("router-link",{attrs:{to:{path:"watch"}}},[n("button",{staticClass:"button"},[e._v("Watch")])]):e._e(),n("br"),e.isLoggedIn?n("a",{attrs:{href:"/logout"}},[n("button",{staticClass:"button"},[e._v("Logout")])]):e._e()],1):e._e()])])},C=[],O=n("cebc"),I={computed:Object(O["a"])({},Object(f["b"])(["isLoggedIn"]))},F=I,L=(n("21bb"),Object(l["a"])(F,w,C,!1,null,null,null));L.options.__file="Home.vue";var x=L.exports,P=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"watch"},[n("Header",{on:{onToggleSettings:function(t){e.settingsVisible=!e.settingsVisible},onToggleChat:function(t){e.chatVisible=!e.chatVisible}}}),n("div",{staticClass:"watch__view",class:{"chat-open":e.chatVisible}},[n("div",{staticClass:"watch__videos"},[e.favorites.length?n("Grid",{attrs:{channels:e.favorites}}):e._e()],1),e.chatVisible?n("div",{staticClass:"watch__chat"},[e.favorites.length?n("ChatPanel",{attrs:{channels:e.favorites}}):e._e()],1):e._e()]),n("Footer"),n("WarningScreen"),!e.favorites.length||e.favorites.length&&e.settingsVisible?n("div",{staticClass:"watch__add expand-to-fit"},[n("div",{staticClass:"watch__actions",on:{click:function(t){if(t.target!==t.currentTarget)return null;e.settingsVisible=!1}}},[n("div",{staticClass:"watch__action-items",class:{minimized:e.showSearch||e.showFavorites}},[n("MyFavorites",{on:{open:e.toggleFavorites}}),n("SearchChannels",{on:{open:e.toggleSearch}})],1),n("div",{staticClass:"watch__search"},[e.showFavorites?n("Follows"):e._e(),e.showSearch?n("Search"):e._e()],1),e.showFavorites||e.showSearch?n("div",{staticClass:"watch__close-search",on:{click:e.hideSearch}},[e._v("\n        close search\n      ")]):e._e()])]):e._e()],1)},j=[],S=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header"},[n("div",{staticClass:"header__icon header__settings-icon",on:{click:function(t){e.$emit("onToggleSettings")}}},[n("eva-icon",{attrs:{name:"plus-square"}}),n("span",[e._v("Add a Stream")])],1),n("div",{staticClass:"spacer"}),n("div",{staticClass:"header__icon header__chat-icon",on:{click:function(t){e.$emit("onToggleChat")}}},[n("span",[e._v("Toggle Chat")]),n("eva-icon",{attrs:{name:"message-square"}})],1)])},E=[],k=(n("5452"),{}),D=Object(l["a"])(k,S,E,!1,null,null,null);D.options.__file="Header.vue";var $=D.exports,M=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"footer"},[e._m(0),n("div",{staticClass:"footer__icon"},[n("a",{attrs:{href:"https://github.com/gedrick/HydraStreamer",target:"_blank"}},[n("eva-icon",{attrs:{name:"github",fill:"white"}})],1)]),n("div",{staticClass:"footer__icon"},[n("a",{attrs:{href:"https://twitter.com/nostalgiatriggr",target:"_blank"}},[n("eva-icon",{attrs:{name:"twitter",fill:"white"}})],1)]),n("div",{staticClass:"footer__icon"},[n("a",{attrs:{href:"/logout"}},[n("eva-icon",{attrs:{name:"log-out",fill:"white"}})],1)])])},R=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"footer__icon"},[n("span",{staticClass:"footer__version"},[e._v("v1.0.0")])])}],V=(n("53d7"),{}),T=Object(l["a"])(V,M,R,!1,null,null,null);T.options.__file="Footer.vue";var N=T.exports,A=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"warning-screen expand-to-fit"},[n("div",[n("eva-icon",{attrs:{name:"arrow-circle-left",fill:"white"}}),n("br"),e._m(0)],1)])},U=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",[e._v("Rotate"),n("br"),e._v("your device!")])}],B=(n("efa9"),{}),q=Object(l["a"])(B,A,U,!1,null,null,null);q.options.__file="WarningScreen.vue";var H=q.exports,W=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"grid",style:{"grid-template-rows":e.templateRows,"grid-template-columns":e.templateColumns}},e._l(e.channels,function(e){return n("ChannelBox",{key:e.name,attrs:{channel:e}})}),1)},G=[],z=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.channel?n("div",{staticClass:"channel-box flex-center"},[e.isLoading?n("LoadingBox"):e._e(),e.isOffline?n("div",{staticClass:"channel-box__offline flex-center"},[n("button",{staticClass:"button",on:{click:e.launchPlayer}},[n("span",{staticClass:"orange"},[e._v(e._s(e.channel.name))]),n("br"),e._v("is offline. Reload?\n    ")]),n("div",{staticClass:"horizontal"},[n("button",{staticClass:"button--small",on:{click:e.hideChannel}},[e._v("Hide for Now")]),n("button",{staticClass:"button--small",on:{click:e.playerRemoveChannel}},[e._v("Unfavorite")])])]):e._e(),!e.isLoading&&e.isLoaded?n("div",[n("ChannelOverlay",{attrs:{onPlay:e.playerPlay,onPause:e.playerPause,onMute:e.playerToggleMuted,onRemoveChannel:e.playerRemoveChannel,player:e.player}})],1):e._e(),n("div",{directives:[{name:"show",rawName:"v-show",value:!e.isLoading&&!e.isOffline,expression:"!isLoading && !isOffline"}],staticClass:"channel-box__container expand-to-fit",attrs:{id:"container--"+e.channel.name}})],1):e._e()},J=[],Y=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},Q=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"loading-box"},[n("div",{staticClass:"loading-box__loader"},[n("div",{staticClass:"loading-box__loader--large"}),n("div",{staticClass:"loading-box__loader--small"})])])}],K=(n("0eb0"),{}),X=Object(l["a"])(K,Y,Q,!1,null,null,null);X.options.__file="LoadingBox.vue";var Z=X.exports,ee=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"channel-overlay expand-to-fit",class:{visible:e.overlayIsVisible},on:{mouseenter:e.showOverlay,mouseleave:e.hideOverlay,click:e.toggleOverlay}},[n("div",{staticClass:"channel-overlay__controls"},[e.playerIsPaused?n("span",{staticClass:"fa fa-play",on:{click:e.onPlay}}):e._e(),e.playerIsPaused?e._e():n("span",{staticClass:"fa fa-pause",on:{click:e.onPause}}),n("span",{staticClass:"fas",class:{"fa-volume-mute":e.playerIsMuted,"fa-volume-up":!e.playerIsMuted},on:{click:e.onToggleMute}}),n("span",{staticClass:"fa fa-close",on:{click:e.onRemoveChannel}})]),n("div",{staticClass:"channel-overlay__info"},[n("span",[e._v(e._s(e.getChannelName))])])])},te=[],ne={props:{onPlay:Function,onPause:Function,onMute:Function,onVolumeUp:Function,onVolumeDown:Function,onRemoveChannel:Function,player:Object},data:function(){return{overlayIsVisible:!1}},computed:{playerIsPaused:function(){return this.player.isPaused()},playerIsMuted:function(){return this.player.getMuted()},getChannelName:function(){return this.player.getChannel()}},methods:{toggleOverlay:function(e){this.overlayIsVisible=!this.overlayIsVisible},showOverlay:function(){this.overlayIsVisible=!0},hideOverlay:function(){this.overlayIsVisible=!1},onToggleMute:function(){this.player.getMuted()?this.onMute(!1):this.onMute(!0)}}},ae=ne,se=(n("0fbc"),Object(l["a"])(ae,ee,te,!1,null,null,null));se.options.__file="ChannelOverlay.vue";var ie=se.exports,re=window.Twitch,oe={components:{LoadingBox:Z,ChannelOverlay:ie},props:{channel:Object},data:function(){return{isLoading:!0,isLoaded:!1,isOffline:!1,player:null,qualities:null,volume:0,bPlaying:null,bPaused:null,bEnded:null,bOffline:null,playerLoadTimeout:5e3}},mounted:function(){this.launchPlayer()},beforeDestroy:function(){this.player&&this.player.removeEventListener&&(this.player.pause(),this.player.removeEventListener(re.Player.PLAYING,this.bPlaying),this.player.removeEventListener(re.Player.PAUSED,this.bPaused),this.player.removeEventListener(re.Player.ENDED,this.bEnded),this.player.removeEventListener(re.Player.OFFLINE,this.bOffline))},methods:{hideChannel:function(){this.$store.commit("unfavorite",this.channel)},playerRemoveChannel:function(){this.channel.id;this.$store.dispatch("unfavorite",{channelData:this.channel})},launchPlayer:function(){this.isLoading=!0,this.isLoaded=!1,this.isOffline=!1;var e={width:"100%",height:"100%",channel:this.channel.name,muted:!0,autoplay:!0,controls:!1};this.bindFunctions();var t="container--".concat(this.channel.name);this.player=new re.Player(t,e),this.player.setVolume(1),this.playerToggleMuted(!0),this.player.addEventListener(re.Player.PLAYING,this.bPlaying),this.player.addEventListener(re.Player.PAUSED,this.bPaused),this.player.addEventListener(re.Player.ENDED,this.bEnded),this.player.addEventListener(re.Player.OFFLINE,this.bOffline)},bindFunctions:function(){this.bPlaying=this.playing.bind(this),this.bPaused=this.paused.bind(this),this.bEnded=this.ended.bind(this),this.bOffline=this.offline.bind(this)},playing:function(){this.isLoading=!1,this.isLoaded=!0,this.qualities=this.player.getQualities(),console.log("player ".concat(this.channel.name," has started playing"))},paused:function(){console.log("player ".concat(this.channel.name," has paused"))},ended:function(){console.log("player ".concat(this.channel.name," has ended"))},offline:function(){this.isLoading=!1,this.isLoaded=!1,this.isOffline=!0,console.log("player ".concat(this.channel.name," has gone or is offline"))},playerPlay:function(){this.player.play()},playerPause:function(){this.player.pause()},playerToggleMuted:function(e){this.player.setMuted(e)}}},le=oe,ce=(n("34c6"),Object(l["a"])(le,z,J,!1,null,null,null));ce.options.__file="ChannelBox.vue";var ue=ce.exports,he={components:{ChannelBox:ue},props:{channels:Array},computed:{channelCount:function(){return this.channels.length},templateRows:function(){switch(this.channelCount){case 1:case 2:return"100%";case 3:case 4:case 5:case 6:return"50% 50%";default:return"33.3% 33.3% 33.3%"}},templateColumns:function(){switch(this.channelCount){case 1:return"100%";case 2:case 3:case 4:return"50% 50%";default:return"33.3% 33.3% 33.3%"}}}},fe=he,de=(n("2342"),Object(l["a"])(fe,W,G,!1,null,null,null));de.options.__file="Grid.vue";var ve=de.exports,pe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"chat-panel"},[n("div",{staticClass:"chat-panel__tabs"},e._l(e.channels,function(t){return n("div",{key:t.channelId,staticClass:"chat-panel__tab",class:{selected:e.activeChannel===t.channelId},on:{click:function(n){e.selectChat(t.channelId)}}},[e._v("\n      "+e._s(t.name)+"\n    ")])}),0),n("div",{staticClass:"chat-panel__container"},[n("Chat",{attrs:{channel:e.getActiveChannel}})],1)])},_e=[],me=(n("7514"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.channel?n("div",{staticClass:"chat"},[n("iframe",{attrs:{frameborder:"0",scrolling:"yes",id:"chat_embed",src:"https://www.twitch.tv/embed/"+e.channel.name+"/chat"}})]):e._e()}),ge=[],be={props:{channel:Object}},ye=be,we=(n("44b9"),Object(l["a"])(ye,me,ge,!1,null,null,null));we.options.__file="Chat.vue";var Ce=we.exports,Oe={components:{Chat:Ce},props:{channels:Array},data:function(){return{activeChannel:!1}},computed:{getActiveChannel:function(){var e=this;return this.channels.find(function(t){return t.channelId===e.activeChannel})}},methods:{selectChat:function(e){this.activeChannel=e}},mounted:function(){this.activeChannel=this.channels[0].channelId}},Ie=Oe,Fe=(n("42cd"),Object(l["a"])(Ie,pe,_e,!1,null,null,null));Fe.options.__file="ChatPanel.vue";var Le=Fe.exports,xe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"add-channel"},[n("div",{staticClass:"action-button flex-center"},[n("span",{staticClass:"icon fa fa-search",on:{click:e.showSearch}}),n("span",{staticClass:"label"},[e._v("Search")])])])},Pe=[],je={name:"AddChannel",props:["hasChannels"],data:function(){return{searchIsOpen:!1}},methods:{showSearch:function(){this.$emit("open")}}},Se=je,Ee=(n("7c19"),Object(l["a"])(Se,xe,Pe,!1,null,null,null));Ee.options.__file="SearchChannels.vue";var ke=Ee.exports,De=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"my-follows"},[n("div",{staticClass:"action-button flex-center"},[n("span",{staticClass:"icon fa fa-list",on:{click:e.showFavorites}}),n("span",{staticClass:"label"},[e._v("Online People I Follow")])])])},$e=[],Me={data:function(){return{searchIsOpen:!1}},methods:{showFavorites:function(){this.$emit("open")}}},Re=Me,Ve=Object(l["a"])(Re,De,$e,!1,null,null,null);Ve.options.__file="MyFavorites.vue";var Te=Ve.exports,Ne=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"search"},[n("div",{staticClass:"search__container"},[n("div",{staticClass:"search__terms"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.terms,expression:"terms"}],ref:"terms",staticClass:"text-input",attrs:{placeholder:"search by stream or game",type:"text"},domProps:{value:e.terms},on:{keypress:e.doSearch,input:function(t){t.target.composing||(e.terms=t.target.value)}}})]),n("div",{staticClass:"search__results"},e._l(e.searchResults,function(e){return n("ChannelResult",{key:e._id,attrs:{result:e}})}),1)])])},Ae=[],Ue=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.result?n("div",{staticClass:"search-result",on:{click:function(t){e.toggleFavorite(e.result.channel.name)}}},[n("div",{staticClass:"search-result__image"},[n("div",{staticClass:"search-result__image-preview"},[n("img",{attrs:{src:e.previewImage}}),n("div",{staticClass:"search-result__viewers"},[e._v(e._s(e.result.viewers)+" viewers")])])]),n("div",{staticClass:"search-result__title"},[n("div",{staticClass:"search-result__streamer-name"},[e._v(e._s(e.result.channel.display_name))]),n("div",{staticClass:"search-result__streamer-game"},[e._v("playing "+e._s(e.result.channel.game))])]),n("div",{staticClass:"search-result__favorite"},[n("span",{class:{"far fa-heart":!e.resultIsFavorited,"fas fa-heart":e.resultIsFavorited}})])]):e._e()},Be=[],qe=(n("f386"),{props:{result:Object},computed:Object(O["a"])({},Object(f["b"])(["favorites"]),{previewImage:function(){return this.result.preview&&this.result.preview.small?this.result.preview.small:""},resultIsFavorited:function(){var e=this;return this.favorites.filter(function(t){return t.name===e.result.channel.name}).length>0},channelData:function(){return{name:this.result.channel.name,icon:this.result.preview.small,game:this.result.game,channelId:this.result.channel._id}}}),methods:{toggleFavorite:function(){this.$store.dispatch("toggleFavorite",{channelData:this.channelData,toggle:!this.resultIsFavorited})}}}),He=qe,We=(n("d2cb"),Object(l["a"])(He,Ue,Be,!1,null,null,null));We.options.__file="ChannelResult.vue";var Ge=We.exports,ze={name:"Search",components:{ChannelResult:Ge},data:function(){return{terms:"",working:!1}},computed:Object(O["a"])({},Object(f["b"])(["searchResults"])),mounted:function(){this.$refs.terms.focus()},methods:{doSearch:function(){var e=this;this.terms.length>=3&&!this.working&&(this.working=!0,this.$store.dispatch("search",{query:this.terms}).then(function(){e.working=!1}))}}},Je=ze,Ye=(n("073b"),Object(l["a"])(Je,Ne,Ae,!1,null,"94b30d7a",null));Ye.options.__file="Search.vue";var Qe=Ye.exports,Ke=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"follows"},[e.followedLive.length?e._e():n("p",[e._v("Doesn't look like anyone you follow is online. Maybe try searching for a new streamer?")]),e._l(e.followedLive,function(e){return n("FollowResult",{key:e.channel._id,attrs:{channel:e}})})],2)},Xe=[],Ze=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"follow-result",class:{favorite:e.isFavorite},on:{click:e.toggleFavorite}},[n("div",{staticClass:"follow-result__name"},[e._v(e._s(e.channel.channel.name))])])},et=[],tt={props:{channel:Object},computed:Object(O["a"])({},Object(f["b"])(["favorites"]),{isFavorite:function(){var e=this.channel.channel._id;return void 0!==this.favorites.find(function(t){return t.channelId===e})},channelData:function(){return{name:this.channel.channel.name,icon:this.channel.preview.small,game:this.channel.channel.game,channelId:this.channel.channel._id}}}),methods:{toggleFavorite:function(){this.$store.dispatch("toggleFavorite",{channelData:this.channelData,toggle:!this.isFavorite})}}},nt=tt,at=(n("0861"),Object(l["a"])(nt,Ze,et,!1,null,null,null));at.options.__file="FollowResult.vue";var st=at.exports,it={components:{FollowResult:st},computed:Object(O["a"])({},Object(f["b"])(["followed","followedLive"])),mounted:function(){var e=[];this.followed.map(function(t){return e.push(t.channel._id)}),this.$store.dispatch("getFollowedStatus",{channel:e.join(",")})}},rt=it,ot=(n("33f3"),Object(l["a"])(rt,Ke,Xe,!1,null,null,null));ot.options.__file="Follows.vue";var lt=ot.exports,ct={name:"Watch",components:{Header:$,Footer:N,WarningScreen:H,Grid:ve,ChatPanel:Le,MyFavorites:Te,SearchChannels:ke,Search:Qe,Follows:lt},data:function(){return{settingsVisible:!1,chatVisible:!1,showSearch:!1,showFavorites:!1}},methods:{toggleSearch:function(){this.showFavorites=!1,this.showSearch=!this.showSearch},toggleFavorites:function(){this.showSearch=!1,this.showFavorites=!this.showFavorites},hideSearch:function(){this.showFavorites=!1,this.showSearch=!1}},beforeMount:function(){this.$store.dispatch("getUserChannels",{userID:this.twitchID})},computed:Object(O["a"])({},Object(f["b"])(["user","twitchID","favorites"]))},ut=ct,ht=(n("222f"),Object(l["a"])(ut,P,j,!1,null,null,null));ht.options.__file="Watch.vue";var ft=ht.exports,dt=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"admin"},[e._v("\n  hello and welcome to the admin view. it consists solely of you.\n")])},vt=[],pt={},_t=Object(l["a"])(pt,dt,vt,!1,null,null,null);_t.options.__file="Admin.vue";var mt=_t.exports,gt=function(e,t,n){b.dispatch("getMe").then(function(){b.getters.isLoggedIn?n():n({path:"/"})})},bt=function(e,t,n){b.dispatch("getMe").then(function(){b.getters.user&&b.getters.user.roles&&b.getters.user.roles.includes("administrator")?n():n({path:"/"})})};a["a"].use(y["a"]);var yt=new y["a"]({routes:[{path:"/",name:"home",component:x},{path:"/watch",name:"watch",component:ft,beforeEnter:gt},{path:"/admin",name:"/admin",component:mt,beforeEnter:bt}]}),wt=n("00e7"),Ct=n.n(wt),Ot=n("0665"),It=n.n(Ot);v.a.interceptors.response.use(function(e){return e},function(e){401!==e.response.status||"#/"===window.location.hash||(window.location.href="/")}),a["a"].config.productionTip=!1,a["a"].use(Ct.a),a["a"].use(It.a),new a["a"]({router:yt,store:b,render:function(e){return e(u)}}).$mount("#app")},"581f":function(e,t,n){},"5c0b":function(e,t,n){"use strict";var a=n("5e27"),s=n.n(a);s.a},"5e27":function(e,t,n){},"640c":function(e,t,n){},"730d":function(e,t,n){},"7c14":function(e,t,n){},"7c19":function(e,t,n){"use strict";var a=n("b804"),s=n.n(a);s.a},"83b9":function(e,t,n){},a04d:function(e,t,n){},afa2:function(e,t,n){},b804:function(e,t,n){},bb86:function(e,t,n){},bcc9:function(e,t,n){},d2cb:function(e,t,n){"use strict";var a=n("bb86"),s=n.n(a);s.a},efa9:function(e,t,n){"use strict";var a=n("0dbe"),s=n.n(a);s.a},f416:function(e,t,n){},fb74:function(e,t,n){}});
//# sourceMappingURL=app.65337707.js.map