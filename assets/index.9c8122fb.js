var ne=Object.defineProperty,te=Object.defineProperties;var re=Object.getOwnPropertyDescriptors;var L=Object.getOwnPropertySymbols;var J=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable;var H=(e,t,r)=>t in e?ne(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,s=(e,t)=>{for(var r in t||(t={}))J.call(t,r)&&H(e,r,t[r]);if(L)for(var r of L(t))q.call(t,r)&&H(e,r,t[r]);return e},i=(e,t)=>te(e,re(t));var G=(e,t)=>{var r={};for(var a in e)J.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&L)for(var a of L(e))t.indexOf(a)<0&&q.call(e,a)&&(r[a]=e[a]);return r};import{j as n,B as F,A as ae,a as u,T as ce,I as K,d as oe,b as N,c as D,O as se,r as g,L as M,G as T,e as S,f as x,g as Q,h as X,i as Y,k as ie,l as le,m as de,n as I,F as ue,o as he,C as me,p as pe,q as fe,s as ve,t as P,u as ge,v as Se,D as R,S as _,w as z,x as U,R as Z,y as ye,z as we,E as be,H as Ce,J as Ie}from"./vendor.6cc63503.js";const xe=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))a(c);new MutationObserver(c=>{for(const o of c)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function r(c){const o={};return c.integrity&&(o.integrity=c.integrity),c.referrerpolicy&&(o.referrerPolicy=c.referrerpolicy),c.crossorigin==="use-credentials"?o.credentials="include":c.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(c){if(c.ep)return;c.ep=!0;const o=r(c);fetch(c.href,o)}};xe();const Ee=({connection:e,onConnectClick:t,onMenuClick:r})=>n(F,{sx:{flexGrow:1},children:n(ae,{position:"static",children:u(ce,{children:[n(K,{size:"large",edge:"start",color:"inherit","aria-label":"menu",sx:{mr:2},onClick:()=>r(),children:n(oe,{})}),n(N,{variant:"h6",component:"div",sx:{flexGrow:1},children:"OBS Web remote"}),n(D,{color:"inherit",onClick:()=>t(),children:e==="connected"?"Disconnect":"Connect"})]})})}),m=new se,O={version:"3",ip:window.location.hostname,port:4455,password:"",connectOnStartup:!1,overlayName:"EW/ATV",ignoreScenesOverlay:"EW/ATV Fullscreen",mainPreview:!0,mainRefreshInterval:1e3,scenePreview:!1,sceneRefreshInterval:2e3},A=e=>{localStorage.setItem("settings",JSON.stringify(e))},ke=()=>{try{const r=localStorage.getItem("settings");if(r){let a=JSON.parse(r);switch(a.version){case"1.0":{const e=a,{version:c}=e,o=G(e,["version"]);a=s(s({},O),o),console.info(`Settings were v${c} but will be interpreted with v${O.version} defaults added`),A(a);break}case"2":{const t=a,{version:c,preview:o,refreshInterval:d}=t,p=G(t,["version","preview","refreshInterval"]);a=i(s(s({},O),p),{mainPreview:o,mainRefreshInterval:d*1e3}),console.info(`Settings were v${c} but will be interpreted with v${O.version} defaults added`),A(a);break}case"3":return a;default:throw console.error("What's up with settings:",r),new Error("Could not parse stored settings")}return a}else return console.warn("No stored settings, making defaults"),A(O),O}catch{return console.warn("Unable to load settings, using defaults"),O}},W={connection:"disconnected",error:void 0,scenes:[],activeSceneName:"",settings:ke(),transition:{duration:0,from:void 0,to:void 0}},Ne=(e,t)=>{switch(t.type){case"connectionError":return i(s({},e),{error:t.payload.message});case"connecting":return i(s({},e),{connection:"connecting"});case"connected":{console.log("CONNECTED",t);const{scenes:r,activeSceneName:a,transition:c}=t.payload;return m.call("GetVersion"),i(s({},e),{connection:"connected",error:void 0,scenes:r,activeSceneName:a,transition:c})}case"disconnected":return i(s({},W),{connection:"disconnected"});case"currentSceneChanged":{const{newSceneName:r}=t.payload;return r!==e.activeSceneName?i(s({},e),{activeSceneName:t.payload.newSceneName}):e}case"transitionDurationChanged":return i(s({},e),{transition:i(s({},e.transition),{duration:e.transition.duration})});case"selectScene":{const{sceneName:r}=t.payload;return m.call("SetCurrentProgramScene",{sceneName:r}),i(s({},e),{activeSceneName:r,transition:i(s({},e.transition),{from:e.activeSceneName,to:r})})}case"transitionStarted":return e.activeSceneName!==e.transition.from?i(s({},e),{transition:i(s({},e.transition),{from:e.activeSceneName})}):e;case"transitionCompleted":{const{from:r,to:a}=e.transition;return r||a?i(s({},e),{transition:i(s({},e.transition),{from:void 0,to:void 0})}):e}case"setSceneItemEnabled":return m.call("SetSceneItemEnabled",t.payload),e;case"updateSceneItems":{const{sceneName:r,items:a}=t.payload,c=e.scenes.find(d=>d.name===r);if(!c)throw new Error(`Could not update scene ${r}`);const o=e.scenes.map(d=>d.id===c.id?i(s({},c),{items:a}):d);return i(s({},e),{scenes:o})}case"updateSceneItemEnabled":{const{sceneName:r,sceneItemId:a,sceneItemEnabled:c}=t.payload,o=e.scenes.map(d=>d.name===r?i(s({},d),{items:d.items.map(p=>p.id===a?i(s({},p),{enabled:c}):p)}):d);return i(s({},e),{scenes:o})}case"updateSettings":{const{settings:r}=t.payload;return A(r),m.disconnect(),i(s({},W),{settings:r})}default:throw new Error(`Unhandled action type: ${t}`)}},ee=({currentImage:e,refreshInterval:t})=>{const r=g.exports.useRef(null),a=g.exports.useRef(-1),c=g.exports.useCallback(o=>{var w,y;if(!o.length){console.info("Can't get screenshot without an activeSceneName");return}const d=(y=(w=r.current)==null?void 0:w.width)!=null?y:window.innerWidth*.8,p=performance.now();m.call("GetSourceScreenshot",{sourceName:o,imageFormat:"png",imageWidth:d}).then(({imageData:k})=>{var l;(l=r.current)==null||l.setAttribute("src",k),console.log(`Screenshot time: ${(performance.now()-p).toFixed()}ms`)})},[r]);return g.exports.useEffect(()=>{if(e&&c(e),a.current===-1&&t>0)return console.info(`Start a timer for ${t}ms`),a.current=window.setInterval(()=>e&&c(e),t),()=>{clearInterval(a.current),a.current=-1}},[e,t,a,c]),n("img",{ref:r,alt:"Preview",style:{display:"inline-block",width:"100%",background:"#00000022"}})},Pe=({name:e,items:t,scenePreview:r,sceneRefreshInterval:a,onSceneItemEnabledClick:c})=>{const o=e;return n(M,{component:"div",disablePadding:!0,children:u(T,{container:!0,children:[n(T,{item:!0,xs:6,children:t.map(({id:d,name:p,enabled:w})=>u(S,{sx:{pl:4},children:[n(x,{onClick:()=>c({sceneName:o,sceneItemId:d,sceneItemEnabled:!w}),children:w?n(Q,{color:"primary"}):n(X,{color:"error"})}),n(Y,{primary:p})]},`sceneItem-${d}`))}),r&&n(T,{item:!0,xs:6,children:n(ee,{refreshInterval:a,currentImage:e})})]})})},Oe=({scenes:e,activeName:t,transition:r,scenePreview:a,sceneRefreshInterval:c,onSceneClick:o,onSceneItemEnabledClick:d})=>{const[p,w]=g.exports.useState([]),{to:y,duration:k}=r,l=v=>{p.includes(v)?w(p.filter(E=>E!==v)):w([...p,v])};return u(T,{item:!0,xs:12,md:6,children:[n(N,{sx:{mt:4,mb:2},variant:"h6",component:"div",children:"Scenes"}),n(M,{dense:!1,children:e.map(({id:v,name:E,items:f})=>{const h=n(pe,{edge:"start",tabIndex:-1,checked:t===E,onClick:C=>{C.stopPropagation(),o({sceneName:E})},disabled:!!y});return u(ie,{disableGutters:!0,children:[n(le,{expandIcon:n(de,{onClick:()=>l(v)}),"aria-controls":"panel1a-content",id:"panel1a-header",children:u(I,{component:"div",disablePadding:!0,children:[n(x,{children:y&&y===E?n(ue,{in:!0,appear:!0,timeout:k,easing:{enter:"ease-in-out",exit:"ease-out"},children:h},v):h}),n(Y,{children:n(N,{component:"div",children:E})})]})}),n(he,{style:{backgroundColor:"#f3f2f3"},children:n(me,{children:n(Pe,{name:E,items:f,scenePreview:a,sceneRefreshInterval:c,onSceneItemEnabledClick:d})})})]},v)})})]})},Te="1.3.0",$e=({settings:e,onSettingsChanged:t,onClose:r})=>{const[a,c]=g.exports.useState(e),[o,d]=g.exports.useState(e.connectOnStartup),[p,w]=g.exports.useState(e.mainPreview),[y,k]=g.exports.useState(e.scenePreview);return u(F,{sx:{pt:1,pb:4},children:[n(F,{display:"flex",justifyContent:"flex-end",children:n(K,{"aria-label":"delete",onClick:()=>r(),children:n(fe,{})})}),u(M,{children:[n(S,{children:u(N,{variant:"h6",component:"div",children:["Version: ",Te]})}),n(S,{children:n(N,{variant:"h5",component:"div",children:"Connection Settings"})}),u(S,{children:[n(x,{children:n(ve,{})}),n(I,{children:n(P,{id:"outlined",label:"IP/Hostname",defaultValue:e.ip,onChange:l=>c(i(s({},a),{ip:l.currentTarget.value}))})})]}),u(S,{children:[n(x,{children:n(ge,{})}),n(I,{children:n(P,{label:"Port",defaultValue:e.port,onChange:l=>c(i(s({},a),{port:parseInt(l.currentTarget.value)}))})})]}),u(S,{children:[n(x,{children:n(Se,{})}),n(I,{children:n(P,{label:"Password",defaultValue:e.password,onChange:l=>c(i(s({},a),{password:l.currentTarget.value}))})})]}),n(R,{}),u(S,{children:[n(x,{children:n(_,{checked:o,onChange:l=>d(l.target.checked)})}),n(I,{children:"Connect on Startup"})]}),n(R,{}),n(S,{children:n(N,{variant:"h5",component:"div",children:"Overlays"})}),u(S,{children:[n(x,{children:n(z,{})}),n(I,{children:n(P,{label:"Overlay Name",defaultValue:e.overlayName,onChange:l=>c(i(s({},a),{overlayName:l.currentTarget.value}))})})]}),u(S,{children:[n(x,{children:n(z,{})}),n(I,{children:n(P,{label:"Ignore Scenes (CSV)",defaultValue:e.ignoreScenesOverlay,onChange:l=>c(i(s({},a),{ignoreScenesOverlay:l.currentTarget.value}))})})]}),n(R,{}),n(S,{children:n(N,{variant:"h5",component:"div",children:"Previews"})}),u(S,{children:[n(x,{children:n(_,{checked:p,onChange:l=>w(l.target.checked)})}),n(I,{children:"Main Preview"})]}),p&&u(S,{children:[n(x,{children:n(U,{})}),n(I,{children:n(P,{type:"number",label:"Main Refresh Interval",defaultValue:e.mainRefreshInterval,onChange:l=>{const v=parseInt(l.currentTarget.value);if(v<0){alert("This number must be greater than 1"),c(i(s({},a),{mainRefreshInterval:v}));return}c(i(s({},a),{mainRefreshInterval:parseInt(l.currentTarget.value)}))}})})]}),n(R,{}),u(S,{children:[n(x,{children:n(_,{checked:y,onChange:l=>k(l.target.checked)})}),n(I,{children:"Scene Preview"})]}),y&&u(S,{children:[n(x,{children:n(U,{})}),n(I,{children:n(P,{type:"number",label:"Scene Refresh Interval",defaultValue:e.sceneRefreshInterval,onChange:l=>{const v=parseInt(l.currentTarget.value);if(v<0){alert("This number must be greater than 1"),c(i(s({},a),{sceneRefreshInterval:v}));return}c(i(s({},a),{sceneRefreshInterval:parseInt(l.currentTarget.value)}))}})})]}),n(R,{}),n(I,{children:u(T,{container:!0,spacing:2,children:[n(T,{item:!0,xs:6,children:n(D,{variant:"outlined",color:"error",onClick:()=>r(),children:"Reset"})}),n(T,{item:!0,xs:6,children:n(D,{variant:"contained",color:"primary",onClick:()=>t(i(s({},a),{connectOnStartup:o,mainPreview:p,scenePreview:y})),children:"Save"})})]})})]})]})};class Re extends Z.Component{constructor(t){super(t);this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}render(){return this.state.hasError?n("h1",{children:"Something went wrong."}):this.props.children}}const Le=()=>{const[e,t]=g.exports.useReducer(Ne,W),{error:r}=e,a=e.settings.ignoreScenesOverlay.split(/\s*,\s*/),{overlayName:c}=e.settings,[o,d]=g.exports.useState(!1),p=()=>{const f=[];return e.scenes.forEach(b=>{if(a.includes(b.name))return!1;{const h=b.items.find(C=>c===C.name);h&&f.push({sceneName:b.name,sceneItemId:h.id,enabled:h.enabled})}}),f},w=()=>{p().forEach(({sceneName:f,sceneItemId:b})=>m.call("SetSceneItemEnabled",{sceneName:f,sceneItemId:b,sceneItemEnabled:o})),d(!o)},y=g.exports.useCallback(()=>{(async()=>{t({type:"connecting"});const{ip:f,port:b,password:h}=e.settings;console.log("Let's go!!!");try{const{obsWebSocketVersion:C}=await m.connect(`ws://${f}:${b}/`,h);console.log(`Connected to server ${C}`)}catch(C){console.error(C),t({type:"connectionError",payload:{message:`Could not connect to ${f} on ${b}. Message: ${C}`}})}})()},[e,t]),k=g.exports.useCallback(()=>(async()=>{await m.disconnect(),t({type:"disconnected"})})(),[t]),l=g.exports.useCallback(()=>{e.connection==="connected"?k():y()},[e,y,k]);g.exports.useEffect(()=>{e.settings.connectOnStartup&&y();const f=async h=>{const{sceneItems:C}=await m.call("GetSceneItemList",{sceneName:h});return(await Promise.all(C.map(async({sourceName:V,sceneItemId:$,sceneItemIndex:B})=>({id:$,index:B,name:V,enabled:(await m.call("GetSceneItemEnabled",{sceneName:h,sceneItemId:$})).sceneItemEnabled})))).reverse()},b=async()=>{const{currentProgramSceneName:h,scenes:C}=await m.call("GetSceneList"),j=(await Promise.all(C.map(async({sceneName:$,sceneIndex:B})=>({id:B,name:$,items:await f($)})))).reverse(),{transitionDuration:V}=await m.call("GetCurrentSceneTransition");t({type:"connected",payload:{scenes:j,activeSceneName:h,transition:{duration:V,from:void 0,to:void 0}}})};m.on("Identified",async()=>b()),m.on("CurrentProgramSceneChanged",({sceneName:h})=>{t({type:"currentSceneChanged",payload:{newSceneName:h}}),f(h)}),m.on("SceneItemEnableStateChanged",h=>t({type:"updateSceneItemEnabled",payload:h})),m.on("SceneTransitionStarted",()=>t({type:"transitionStarted"})),m.on("SceneTransitionEnded",()=>t({type:"transitionCompleted"})),m.on("CurrentSceneTransitionDurationChanged",({transitionDuration:h})=>t({type:"transitionDurationChanged",payload:{duration:h}})),m.on("SceneListChanged",()=>b()),m.on("ExitStarted",()=>t({type:"disconnected"}))},[]);const[v,E]=g.exports.useState(!1);return u(Re,{children:[n(Ee,{connection:e.connection,onConnectClick:l,onMenuClick:()=>E(!v)}),n(ye,{anchor:"left",open:v,children:n($e,{settings:e.settings,onClose:()=>E(!v),onSettingsChanged:f=>{E(!1),t({type:"updateSettings",payload:{settings:f}})}})}),u(we,{sx:{mt:4,mb:4},children:[r&&n(be,{variant:"filled",severity:"error",children:r}),e.connection==="connected"?u(Ce,{children:[e.settings.mainPreview&&n(ee,{currentImage:e.activeSceneName,refreshInterval:e.settings.mainRefreshInterval}),u(D,{variant:"contained",color:o?"error":"primary",onClick:()=>w(),children:[o?n(X,{}):n(Q,{})," ","Overlays ",o?"off":"on"]}),n(Oe,{scenes:e.scenes,activeName:e.activeSceneName,transition:e.transition,scenePreview:e.settings.scenePreview,sceneRefreshInterval:e.settings.sceneRefreshInterval,onSceneClick:f=>t({type:"selectScene",payload:f}),onSceneItemEnabledClick:f=>t({type:"setSceneItemEnabled",payload:f})})]}):n(N,{variant:"h4",component:"div",sx:{flexGrow:1},children:e.connection==="connecting"?"Connecting...":"Not Connected"})]})]})};Ie.render(n(Z.StrictMode,{children:n(Le,{})}),document.getElementById("root"));
