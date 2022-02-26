var U=Object.defineProperty;var G=Object.getOwnPropertySymbols;var J=Object.prototype.hasOwnProperty,Y=Object.prototype.propertyIsEnumerable;var K=(t,e,n)=>e in t?U(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Z=(t,e)=>{for(var n in e||(e={}))J.call(e,n)&&K(t,n,e[n]);if(G)for(var n of G(e))Y.call(e,n)&&K(t,n,e[n]);return t};import{r as k,o as d,c as u,a as l,F as x,b as M,d as j,w as H,e as P,t as y,f as X,g as h,n as q,h as C,u as w,i as z,j as N,k as g,l as ee,m as E,v as te,p as L,q as se,s as ne,x as oe,y as ae,z as re,A as le,B as D,C as B,D as V,E as I,G as W,H as ie,I as ce,J as de,K as ue}from"./vendor.6050b5ca.js";const me=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}};me();var T=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n};const pe=[{name:"Components",href:"/",current:!1},{name:"Notify",href:"/notify",current:!1},{name:"Trello",href:"/trello",current:!1}],fe={name:"Nav",components:{},setup(){return{links:pe}}},ge={class:"text-gray-600 bg-blue-50 body-font"},he={class:"container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between"},ve=l("a",{class:"flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"},[l("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",class:"w-10 h-10 text-white p-2 bg-blue-500 rounded-full",viewBox:"0 0 24 24"},[l("path",{d:"M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"})]),l("span",{class:"ml-3 text-xl"},"Utilities App")],-1),_e={class:"hidden sm:flex"},ye=l("div",null,[l("a",{href:"https://github.com/Eirene"},[l("img",{class:"h-10 w-10 rounded-full",src:"https://avatars.githubusercontent.com/u/1826433?v=4",alt:"github.com/Eirene"})])],-1);function xe(t,e,n,s,i,r){const a=k("router-link");return d(),u("header",ge,[l("div",he,[ve,l("div",_e,[(d(!0),u(x,null,M(s.links,o=>(d(),j(a,{key:o.name,to:o.href,class:"text-gray-900 px-4 pt-1 font-medium"},{default:H(()=>[P(y(o.name),1)]),_:2},1032,["to"]))),128))]),ye])])}var be=T(fe,[["render",xe]]);const ke={name:"Footer"},we={class:"mt-auto"},Te=X('<div class="bg-gray-100"><div class="container mx-auto py-4 px-5 flex flex-wrap"><p class="text-gray-500 text-sm text-center sm:text-left"><a href="https://github.com/Eirene" rel="noopener noreferrer" class="text-gray-600 ml-1" target="_blank"> Irina Sorokina - https://github.com/Eirene</a></p><p class="text-gray-600 ml-auto text-sm"> Vue 3 Composition API + Tailwind.css </p></div></div>',1),Me=[Te];function Ce(t,e,n,s,i,r){return d(),u("footer",we,Me)}var Ae=T(ke,[["render",Ce]]);const $e={class:"min-h-screen flex flex-col"},Se=l("div",{id:"modal"},null,-1),Ne={setup(t){return(e,n)=>{const s=k("router-view");return d(),u(x,null,[l("div",$e,[h(be),l("main",null,[l("div",{class:q(["mx-auto py-10",e.$route.name!=="Trello"?"container":"px-8"])},[h(s)],2)]),h(Ae)]),Se],64)}}},Ee={name:"PageNotFound"},Ve={class:"text-center"},De=l("h1",null,"PAGE NOT FOUND!",-1),Fe=P(" Go to "),Le=P("main page?");function je(t,e,n,s,i,r){const a=k("router-link");return d(),u("div",Ve,[De,l("p",null,[Fe,h(a,{class:"text-blue-500",to:"/"},{default:H(()=>[Le]),_:1})])])}var Pe=T(Ee,[["render",je]]);const qe=["onDragover","onDragleave","onDrop"],Be={class:"space-y-1 text-center"},Re=l("svg",{class:"mx-auto h-12 w-12 text-gray-400",stroke:"currentColor",fill:"none",viewBox:"0 0 48 48","aria-hidden":"true"},[l("path",{d:"M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1),Ge={class:"text-sm text-gray-600"},Ke={for:"assetsFieldHandle",class:"relative cursor-pointer font-medium"},Ze=l("span",{class:"text-indigo-600 hover:text-indigo-500"},"Upload a file",-1),He=l("span",{class:"pl-1"},"or drag and drop",-1),ze=l("p",{class:"text-xs text-gray-500"},"PNG, JPG, GIF up to 10MB",-1),Ie={key:0,class:"mt-4 inline-block"},We={setup(t){const e=C([]),n=C(null),s=()=>{e.value=[...n.value.files]},i=c=>{e.value.splice(c,1)},r=c=>{c.currentTarget.classList.contains("bg-green-100")||(c.currentTarget.classList.remove("bg-gray-100"),c.currentTarget.classList.add("bg-green-100"))},a=c=>{c.currentTarget.classList.add("bg-gray-100"),c.currentTarget.classList.remove("bg-green-100")},o=c=>{n.value.files=c.dataTransfer.files,s(),c.currentTarget.classList.add("bg-gray-100"),c.currentTarget.classList.remove("bg-green-100")};return(c,p)=>(d(),u("div",{onDragover:g(r,["prevent"]),onDragenter:p[0]||(p[0]=g(()=>{},["prevent"])),onDragleave:g(a,["prevent"]),onDrop:g(o,["prevent"]),class:"flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md bg-gray-100 max-w-lg mx-auto mb-12"},[l("div",Be,[Re,l("div",Ge,[l("label",Ke,[Ze,l("input",{type:"file",multiple:"",id:"assetsFieldHandle",ref_key:"inputFile",ref:n,accept:".pdf,.jpg,.jpeg,.png",onChange:s,class:"sr-only"},null,544)]),He]),ze,e.value.length?(d(),u("ul",Ie,[(d(!0),u(x,null,M(e.value,(_,A)=>(d(),u("li",{class:"text-sm p-1 text-left",key:A},[l("span",null,y(_.name),1),h(w(z),{class:"inline ml-3 cursor-pointer h-5 w-5 text-red-500",onClick:$=>i(A)},null,8,["onClick"])]))),128))])):N("",!0)])],40,qe))}},Oe={name:"Collections2Wallet",components:{TrashIcon:z},setup(){const t=[{key:4,updateAuthority:"27yh2L9qvaEtEjS2hmqp3pJcdc1pjYhniWkcnZLCqFsE",mint:"9hnHr8CD7fAmP9zhNRQHo522zK2jKNZuJLSNA74U4GhR",data:{name:"Posh Platypus #56",symbol:"PPP",uri:"https://arweave.net/or3IBpG7GvLu6L8Z4Ze5c8awtxnq7u8JY-0caaUFUuk",sellerFeeBasisPoints:500,creators:[{address:"4fcDkzSKfj49pTPUpAjPaxCVqXcPjRuyDK9xdCffSdLE",verified:1,share:0},{address:"5ri5fGm9i8Kthx6n2p48on7Zoa7Bj8DFcks6LWZtCYet",verified:0,share:100}]},primarySaleHappened:1,isMutable:0,editionNonce:null},{key:4,updateAuthority:"85wCamHhqkfRLK827wsvnma2teCoGuq5vfDhbe3yAZ6",mint:"7oVz8BM34V8bEEp1aSPMYZTfB3gJDH66cXTJuSQGjruj",data:{name:"AutoSol #183",symbol:"AuSo",uri:"https://arweave.net/wvOu37BFP4Az3unmerj42CF4o84N97ihEkisosuNFhw",sellerFeeBasisPoints:700,creators:[{address:"FAM6HYSoJpRfY58sksjsQe3ugjT28cNxqQXJ18kiVinC",verified:1,share:0},{address:"ExBkQ7BMgheBXvfoZ7jgmSCx2pkZ6oYd92Mberf8iSTe",verified:0,share:30},{address:"4QF6WzLpnnvSZseguVuz12J7ZCjG7f6bV7TwNZnxQ1uG",verified:0,share:30},{address:"HX5WRkVJ8u8wzsKbthQHmp1GcK3uFLKbk93aCeJyWGhe",verified:0,share:30},{address:"8dngin1RSX4oE34XehdbEs8MnDTBzZZk4ENDNgYAbvAg",verified:0,share:10}]},primarySaleHappened:1,isMutable:1,editionNonce:null},{key:4,updateAuthority:"85wCamHhqkfRLK827wsvnma2teCoGuq5vfDhbe3yAZ6",mint:"EjABgtDfPKyG5959ghV8jHbgbmK5Ys6r4wZnYMgpktNK",data:{name:"AutoSol #259",symbol:"AuSo",uri:"https://arweave.net/IGxbf2pHth7xS7YLNdfS_DpKTAtMeJFVoFraByDqkwo",sellerFeeBasisPoints:700,creators:[{address:"FAM6HYSoJpRfY58sksjsQe3ugjT28cNxqQXJ18kiVinC",verified:1,share:0},{address:"ExBkQ7BMgheBXvfoZ7jgmSCx2pkZ6oYd92Mberf8iSTe",verified:0,share:30},{address:"4QF6WzLpnnvSZseguVuz12J7ZCjG7f6bV7TwNZnxQ1uG",verified:0,share:30},{address:"HX5WRkVJ8u8wzsKbthQHmp1GcK3uFLKbk93aCeJyWGhe",verified:0,share:30},{address:"8dngin1RSX4oE34XehdbEs8MnDTBzZZk4ENDNgYAbvAg",verified:0,share:10}]},primarySaleHappened:1,isMutable:1,editionNonce:null},{key:4,updateAuthority:"85wCamHhqkfRLK827wsvnma2teCoGuq5vfDhbe3yAZ6",mint:"AfPbLF1jy3v747iTQAVZVZxETpmkuBiBowEtCSSVg8o8",data:{name:"AutoSol #98",symbol:"AuSo",uri:"https://arweave.net/1d8YXE14WD03vR8aZ7VJXBxCwexwotsR1SAwW2Fj36Q",sellerFeeBasisPoints:700,creators:[{address:"FAM6HYSoJpRfY58sksjsQe3ugjT28cNxqQXJ18kiVinC",verified:1,share:0},{address:"ExBkQ7BMgheBXvfoZ7jgmSCx2pkZ6oYd92Mberf8iSTe",verified:0,share:30},{address:"4QF6WzLpnnvSZseguVuz12J7ZCjG7f6bV7TwNZnxQ1uG",verified:0,share:30},{address:"HX5WRkVJ8u8wzsKbthQHmp1GcK3uFLKbk93aCeJyWGhe",verified:0,share:30},{address:"8dngin1RSX4oE34XehdbEs8MnDTBzZZk4ENDNgYAbvAg",verified:0,share:10}]},primarySaleHappened:1,isMutable:1,editionNonce:null},{key:4,updateAuthority:"CLPQEAPyYKKRF38HmFTuhPKttdRaVNxetB5j5cYZ8fUz",mint:"3gd4RP93YtpXmkVSWjGF36KRfxGPUhuyyLqR6KTfcsAR",data:{name:"TEST NFT",symbol:"",uri:"https://arweave.net/nZb_RAEVHi_xdVlPo8IVRR_SPx1PvOcNkYKljsfHNPM",sellerFeeBasisPoints:1e4,creators:[{address:"Ej9K6JjrPpAszUBWjnG2ohduRrg7eW75X1KapBBsvubi",verified:1,share:0},{address:"HnRhVs3iiSWcVw4RgUAELAVVwnMtS58F6AMWG3yYLVyV",verified:0,share:100}]},primarySaleHappened:1,isMutable:1,editionNonce:null},{key:4,updateAuthority:"H6CWQ1jVGQGTGQUGqhgeedrVC8jufRztakKxEf4uxsn6",mint:"BtDmwb6AXe7Th2PmWWyvnRZu3NLvRkkLU8SMVPVhqaif",data:{name:"Pixel Titz #687",symbol:"TITZ",uri:"https://arweave.net/S9geAX2VyC3148l_Jaze2ZxuM6vhGe3fQoh4hM_46eg",sellerFeeBasisPoints:1500,creators:[{address:"DGVpp1n361FKVnCTew52AA3eAgV7zBgjs7cC2QNhzfuP",verified:1,share:0},{address:"FGDtH76rrcnSELfgjWXfWgQ64dZsmHugoGka3DUkyz7Y",verified:0,share:100}]},primarySaleHappened:1,isMutable:1,editionNonce:null},{key:4,updateAuthority:"MnsTrZvprZrmqxFVmQMBNETgF1h4uxijPTXTvY91zZo",mint:"4Gts38cGT1RyqUwqvxbxxhk9rgTRFx9sBF2fRvg3AbSS",data:{name:"Monsterz #2374",symbol:"MNSTRZ",uri:"https://arweave.net/7koduwr9hjoQf_nPuiBzhroG2aEK0JPEWR6cWV1rwz0",sellerFeeBasisPoints:1e3,creators:[{address:"CSb762GTTNYNkFavFwN4bCaoqeET4WShT7zWeeF2eiWy",verified:1,share:0},{address:"mNstrZc7FLny87TF4nWCNVWB5he9zGigBm2LEG7CRAQ",verified:0,share:15},{address:"mnstrzQBEgTeeiLbMzJnV4u7sbgeEgorU9TrfcHWP3a",verified:0,share:85}]},primarySaleHappened:1,isMutable:1,editionNonce:null}];let e=[],n=[];const s=ee([{quantity:1,selectedCollection:"",quantityDescription:"max 1",quantityMax:1,walletErrorText:"",collection:"",wallet_to_send:"",mints:[]}]),i=C(!1),r=C(!0),a=()=>{for(let f of t)n.push(f.updateAuthority);const m=[...new Set(n)];for(let f=0;f<m.length;f++){let b=t.filter(v=>v.updateAuthority===m[f]);e.push({collection:m[f],data:b})}return e},o=m=>{s.length>1&&(s.splice(m,1),i.value=s.length===e.length)},c=()=>{s.length<e.length&&s.push({quantity:1,wallet_to_send:"",selectedCollection:e[0].collection,quantityDescription:"max 1",quantityMax:1,collection:e[0].collection,walletErrorText:"",mints:[]}),i.value=s.length===e.length},p=m=>{const f=e.find(v=>v.collection===m.selectedCollection);if(!f){console.error(`Original collection object for collection ID "${m.selectedCollection}" was not found in collections array.`,{collections:e});return}const b=[];if(m.quantity===m.quantityMax)m.mints=f.data.map(v=>v.mint);else{for(;b.length<m.quantity;){let v=Math.floor(Math.random()*(m.quantity+1));b.indexOf(v)===-1&&b.push(v)}m.mints=b.map(v=>f.data[v].mint)}},_=(m,f)=>{const b=m.target.value,R=e.filter(Q=>Q.collection===b)[0].data.length;s[f].collection=b,s[f].quantityMax=R,s[f].quantityDescription=`max ${R}`},A=m=>s[m].walletErrorText="",$=()=>{if(s.forEach(m=>{m.wallet_to_send===""?(m.walletErrorText="Please, fill the field",r.value=!1):r.value=!0}),!r.value)return!1;s.forEach(m=>{p(m)}),s.forEach(m=>{delete m.quantity,delete m.selectedCollection,delete m.quantityDescription,delete m.quantityMax,delete m.walletErrorText})};return(()=>{a(),s[0].collection=e[0].collection,s[0].selectedCollection=e[0].collection})(),{obj:t,collections:e,formData:s,addMoreDisabled:i,onDeleteEntry:o,onAddMore:c,onChange:_,onInput:A,formSubmit:$}}},Qe={class:"text-center mx-auto max-w-2xl py-4 mb-12"},Ue={class:"grid grid-cols-12 gap-4"},Je={class:"col-span-12 md:col-span-5"},Ye=l("label",{for:"collections",class:"tailwind-label"},"Collections",-1),Xe=["onUpdate:modelValue","onChange"],et=["value"],tt={class:"col-span-3 md:col-span-2"},st=l("label",{for:"quantity",class:"tailwind-label"},"Quantity",-1),nt=["max","onUpdate:modelValue"],ot={key:0,class:"mt-2 text-sm text-gray-500",id:"quantity-description"},at={class:"col-span-8 md:col-span-4"},rt=l("label",{for:"wallet",class:"tailwind-label"},"Wallet",-1),lt=["onUpdate:modelValue","onInput"],it={key:0,class:"mt-2 text-sm text-red-500",id:"wallet-error"},ct={class:"col-span-1 md:col-span-1 flex"},dt=["onClick"],ut={class:"text-center mt-8"},mt=["disabled"],pt=l("button",{type:"submit",class:"ml-4 inline-flex items-center px-6 py-3 text-base font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-700 text-green-50 bg-gradient-to-r from-green-500 to-teal-700 hover:from-teal-700 hover:to-green-500"}," Send ",-1);function ft(t,e,n,s,i,r){const a=k("TrashIcon");return d(),u("div",Qe,[l("form",{action:"",onSubmit:e[1]||(e[1]=g((...o)=>s.formSubmit&&s.formSubmit(...o),["prevent"]))},[(d(!0),u(x,null,M(s.formData,(o,c)=>(d(),u("div",{class:"my-4 py-4 px-6 bg-sky-100 rounded-2xl text-sky-900",key:c},[l("div",Ue,[l("div",Je,[l("div",null,[Ye,E(l("select",{"onUpdate:modelValue":p=>o.selectedCollection=p,onChange:p=>s.onChange(p,c),id:"collections",name:"location",class:"mt-1 tailwind-input"},[(d(!0),u(x,null,M(s.collections,(p,_)=>(d(),u("option",{key:_,value:p.collection},y(p.data[0].data.symbol||p.data[0].data.name.substring(0,p.data[0].data.name.lastIndexOf(" "))),9,et))),128))],40,Xe),[[te,o.selectedCollection]])])]),l("div",tt,[st,l("div",null,[E(l("input",{type:"number",name:"quantity",id:"quantity",class:"mt-1 tailwind-input",min:"1",max:o.quantityMax,"onUpdate:modelValue":p=>o.quantity=p},null,8,nt),[[L,o.quantity,void 0,{number:!0}]]),o.quantityDescription?(d(),u("p",ot,y(o.quantityDescription),1)):N("",!0)])]),l("div",at,[rt,l("div",null,[E(l("input",{"onUpdate:modelValue":p=>o.wallet_to_send=p,onInput:p=>s.onInput(c),type:"text",name:"wallet",id:"wallet",class:"mt-1 tailwind-input"},null,40,lt),[[L,o.wallet_to_send]])]),o.walletErrorText?(d(),u("p",it,y(o.walletErrorText),1)):N("",!0)]),l("div",ct,[l("span",{class:"mt-7",onClick:p=>s.onDeleteEntry(c)},[h(a,{class:"w-6 h-6 cursor-pointer text-red-600 hover:text-red-800"})],8,dt)])])]))),128)),l("div",ut,[l("button",{type:"button",onClick:e[0]||(e[0]=g((...o)=>s.onAddMore&&s.onAddMore(...o),["prevent"])),disabled:s.addMoreDisabled,class:q(["inline-flex items-center px-6 py-3 text-base font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 text-cyan-50 bg-gradient-to-r from-cyan-500 to-sky-500 hover:from-sky-500 hover:to-cyan-500",s.addMoreDisabled?"disabled:opacity-50":""])}," Add More ",10,mt),pt])],32)])}var gt=T(Oe,[["render",ft]]);const ht={name:"MultiSelect",components:{Multiselect:se},props:{items:{type:Array,required:!0}},setup(t,e){const n=C([]),s=ne(t,"items");return oe(n,i=>{e.emit("update:modelValue",i)}),{multiselectValue:n,options:s}}},vt={class:"text-center mx-auto max-w-2xl p-4 mb-12"};function _t(t,e,n,s,i,r){const a=k("Multiselect");return d(),u("div",vt,[l("pre",null,"MultiSelect: "+y(s.multiselectValue),1),h(a,{modelValue:s.multiselectValue,"onUpdate:modelValue":e[0]||(e[0]=o=>s.multiselectValue=o),mode:"tags",options:s.options},null,8,["modelValue","options"])])}var yt=T(ht,[["render",_t]]);const xt={setup(t,{expose:e}){const n=C(null),s=["Batman","Robin","Joker"];return e({multiSelect:n,multiSelectOptions:s}),(i,r)=>(d(),u(x,null,[h(gt),h(yt,{modelValue:n.value,"onUpdate:modelValue":r[0]||(r[0]=a=>n.value=a),items:s},null,8,["modelValue"]),h(We)],64))}},bt={props:{messages:{type:Array,required:!0}},computed:{maxLength(){return this.$store.getters.getMessageFilter.length}},methods:{loadMore(){this.$store.dispatch("loadMessages").catch(t=>{console.log(t)})}}},kt={class:"text-center mt-3 mb-6"},wt=["disabled"];function Tt(t,e,n,s,i,r){return d(),u(x,null,[l("ul",null,[(d(!0),u(x,null,M(n.messages,(a,o)=>(d(),u("li",{key:o,class:"px-4 py-2"},y(a.title),1))),128))]),l("div",kt,[l("button",{onClick:e[0]||(e[0]=(...a)=>r.loadMore&&r.loadMore(...a)),disabled:r.maxLength===0,type:"button",class:q(["tailwind-btn-primary",{"disabled:bg-opacity-40":r.maxLength===0}])}," Load More ",10,wt)])],64)}var Mt=T(bt,[["render",Tt]]);const Ct={components:{Notify:Mt,RefreshIcon:ae},data:()=>({loading:!1}),mounted(){this.getNotifyLazy()},computed:Z({},re(["getMessageMain"])),methods:{getNotifyLazy(){this.loading=!0,setTimeout(()=>{this.getNotify()},1e3)},getNotify(){this.loading=!0,le.get("https://my-json-server.typicode.com/eirene/utilities-app/db").then(t=>{let e=t.data.messages,n=[],s=[];for(let i=0;i<e.length;i++)e[i].main?s.push(e[i]):n.push(e[i]);this.$store.dispatch("setMessageMain",s),this.$store.dispatch("setMessage",n)}).catch(t=>{console.log(t)}).finally(()=>{this.loading=!1})}}},At={class:"max-w-lg mx-auto bg-white shadow overflow-hidden rounded-md py-2"},$t={class:"my-2 mx-4 flex justify-between items-center"},St=l("h3",{class:"py-2 text-xl font-medium"},"Notify App",-1),Nt={key:0,class:"animate-pulse"},Et=l("div",{class:"h-4 m-4 block bg-gray-200 rounded"},null,-1),Vt=l("div",{class:"h-4 m-4 block bg-gray-200 rounded w-4/6"},null,-1),Dt=[Et,Vt];function Ft(t,e,n,s,i,r){const a=k("RefreshIcon"),o=k("Notify");return d(),u("div",At,[l("div",$t,[St,h(a,{onClick:r.getNotifyLazy,class:"cursor-pointer h-5 w-5 text-blue-500"},null,8,["onClick"])]),t.loading?(d(),u("div",Nt,Dt)):N("",!0),h(o,{messages:t.getMessageMain},null,8,["messages"])])}var Lt=T(Ct,[["render",Ft]]);function O(){const t=D(),e=t.state.trello.board,n=(r,a,o)=>{const c=r.dataTransfer.getData("from-column-index"),p=e.columns[c].tasks,_=r.dataTransfer.getData("from-task-index");t.commit("trello/MOVE_TASK",{fromTasks:p,fromTaskIndex:_,toTasks:a,toTaskIndex:o})},s=(r,a)=>{const o=r.dataTransfer.getData("from-column-index");t.commit("trello/MOVE_COLUMN",{fromColumnIndex:o,toColumnIndex:a})};return{moveTaskOrColumn:(r,a,o,c)=>{r.dataTransfer.getData("type")==="task"?n(r,a,c!==void 0?c:a.length):s(r,o)},moveTask:n,moveColumn:s}}const jt={class:"w-full flex-no-shrink font-bold"},Pt={key:0,class:"w-full flex-no-shrink mt-1 text-sm"},qt={props:{column:Object,task:Object,board:Object,taskIndex:Number,columnIndex:Number},setup(t){const e=B(),{moveTaskOrColumn:n}=O(),s=r=>{e.push({name:"task",params:{id:r.id}})},i=(r,a,o)=>{r.dataTransfer.effectAllowed="move",r.dataTransfer.dropEffect="move",r.dataTransfer.setData("from-task-index",a),r.dataTransfer.setData("from-column-index",o),r.dataTransfer.setData("type","task")};return(r,a)=>(d(),u("div",{class:"task",draggable:"true",onDragover:a[0]||(a[0]=g(()=>{},["prevent"])),onDragenter:a[1]||(a[1]=g(()=>{},["prevent"])),onDragstart:a[2]||(a[2]=o=>i(o,t.taskIndex,t.columnIndex)),onDrop:a[3]||(a[3]=g(o=>w(n)(o,t.column.tasks,t.columnIndex,t.taskIndex),["stop"])),onClick:a[4]||(a[4]=o=>s(t.task))},[l("span",jt,y(t.task.name),1),t.task.description?(d(),u("p",Pt,y(t.task.description),1)):N("",!0)],32))}};const Bt={class:"flex items-center mb-2 font-bold text-cyan-50"},Rt={props:{column:Object,columnIndex:Number},setup(t){const e=D();B();const n=e.state.trello.board,{moveTaskOrColumn:s}=O(),i=(a,o)=>{e.commit("trello/CREATE_TASK",{tasks:o,name:a.target.value}),a.target.value=""},r=(a,o)=>{a.dataTransfer.effectAllowed="move",a.dataTransfer.dropEffect="move",a.dataTransfer.setData("from-column-index",o),a.dataTransfer.setData("type","column")};return(a,o)=>(d(),u("div",{class:"columns",draggable:"true",onDrop:o[1]||(o[1]=c=>w(s)(c,t.column.tasks,t.columnIndex,0)),onDragover:o[2]||(o[2]=g(()=>{},["prevent"])),onDragenter:o[3]||(o[3]=g(()=>{},["prevent"])),onDragstart:o[4]||(o[4]=g(c=>r(c,t.columnIndex),["self"]))},[l("div",Bt,y(t.column.name),1),(d(!0),u(x,null,M(t.column.tasks,(c,p)=>(d(),j(qt,{task:c,taskIndex:p,column:t.column,columnIndex:t.columnIndex,board:w(n),key:p},null,8,["task","taskIndex","column","columnIndex","board"]))),128)),l("input",{onKeyup:o[0]||(o[0]=V(c=>i(c,t.column.tasks),["enter"])),type:"text",placeholder:"+ Enter new task",class:"new-task"},null,32)],32))}};const Gt={class:"flex items-start overflow-x-auto text-gray-800"},Kt={class:"columns"},Zt=["onKeyup"],Ht=["onClick"],zt={setup(t){const e=D(),n=B(),s=I(),i=e.state.trello.board,r=C(""),a=W(()=>s.name==="task"),o=()=>n.push({name:"Trello"}),c=()=>{e.commit("trello/CREATE_COLUMN",{name:r.value}),r.value=""};return(p,_)=>{const A=k("router-view");return d(),u("div",Gt,[(d(!0),u(x,null,M(w(i).columns,($,F)=>(d(),j(Rt,{column:$,columnIndex:F,key:F},null,8,["column","columnIndex"]))),128)),l("div",Kt,[l("div",null,[E(l("input",{type:"text","onUpdate:modelValue":_[0]||(_[0]=$=>r.value=$),onKeyup:V(c,["enter"]),class:"new-column",placeholder:"New Column Name"},null,40,Zt),[[L,r.value]])])]),w(a)?(d(),u("div",{key:0,onClick:g(o,["self"]),class:"absolute inset-0 backdrop-blur-sm bg-black/50"},[h(A)],8,Ht)):N("",!0)])}}};const It={class:"task-view"},Wt={class:"flex flex-col flex-grow items-start justify-between px-4"},Ot=["value"],Qt=["value"],Ut={setup(t){const e=D(),n=I(),s=W(()=>e.getters["trello/getTask"](n.params.id)),i=(r,a)=>{e.commit("trello/UPDATE_TASK",{task:s,key:a,value:r.target.value})};return(r,a)=>(d(),u("div",It,[l("div",Wt,[l("input",{value:w(s).name,type:"text",onChange:a[0]||(a[0]=o=>i(o,"name")),onKeyup:a[1]||(a[1]=V(o=>i(o,"name"),["enter"])),class:"p-2 w-full mr-2 block border-none text-xl font-bold"},null,40,Ot),l("textarea",{value:w(s).description,onChange:a[2]||(a[2]=o=>i(o,"description")),onKeyup:a[3]||(a[3]=V(o=>i(o,"description"),["enter"])),class:"relative w-full bg-transparent px-2 mt-2 h-64 border-none leading-normal"},null,40,Qt)])]))}},Jt={},Yt={class:"text-center mx-auto max-w-2xl py-4 mb-12"},Xt=l("p",null,"This is test page",-1),es=[Xt];function ts(t,e){return d(),u("div",Yt,es)}var ss=T(Jt,[["render",ts]]);const ns=[{path:"/",name:"Home",component:xt},{path:"/notify",name:"Notify",component:Lt},{path:"/trello",name:"Trello",component:zt,children:[{path:"task/:id",name:"task",component:Ut}]},{path:"/test",name:"Test",component:ss},{path:"/:notFound(.*)",name:"PageNotFound",component:Pe}],os=ie({history:ce(),routes:ns});function as(t){const e=[];if(t.length>3){for(let n=0;n<3;n++)t[n].main=!0,e.push(t[n]);return e}else{for(let n=0;n<t.length;n++)t[n].main=!0,e.push(t[n]);return e}}var rs={state:{messages:[],messagesMain:[]},mutations:{setMessage(t,e){t.messages=e},setMessageMain(t,e){t.messagesMain=e},loadMessages(t,e){t.messagesMain=[...t.messagesMain,...e]}},actions:{setMessage({commit:t},e){t("setMessage",e)},setMessageMain({commit:t},e){t("setMessageMain",e)},loadMessages({commit:t,getters:e}){let n=e.getMessageFilter;t("loadMessages",as(n))}},getters:{getMessage(t){return t.messages},getMessageMain(t){return t.messagesMain},getMessageFilter(t){return t.messages.filter(e=>e.main===!1)}}};function S(){return Math.random().toString(16).slice(2)}var ls={columns:[{name:"todo",tasks:[{description:"description",name:"first task",id:S(),userAssigned:null},{description:"todo",name:"second task",id:S(),userAssigned:null},{description:"todo",name:"and third",id:S(),userAssigned:null}]},{name:"in-progress",tasks:[{description:"in-progress",name:"first task",id:S(),userAssigned:null}]},{name:"done",tasks:[{description:"done",name:"first task",id:S(),userAssigned:null}]}]};const is=JSON.parse(localStorage.getItem("board"))||ls;var cs={namespaced:!0,plugins:["saveStatePlugin"],state:()=>({board:is}),mutations:{CREATE_TASK(t,{tasks:e,name:n}){e.push({name:n,id:S(),description:""})},CREATE_COLUMN(t,{name:e}){t.board.columns.push({name:e,tasks:[]})},UPDATE_TASK(t,{task:e,key:n,value:s}){e[n]=s},MOVE_TASK(t,{fromTasks:e,toTasks:n,fromTaskIndex:s,toTaskIndex:i}){const r=e.splice(s,1)[0];n.splice(i,0,r)},MOVE_COLUMN(t,{fromColumnIndex:e,toColumnIndex:n}){const s=t.board.columns,i=s.splice(e,1)[0];s.splice(n,0,i)}},actions:{},getters:{getTask(t){return e=>{for(const n of t.board.columns)for(const s of n.tasks)if(s.id===e)return s}}}},ds=de({state:{},mutations:{},actions:{},modules:{notify:rs,trello:cs}});ue(Ne).use(os).use(ds).mount("#app");