var p=Object.defineProperty;var g=(o,e,t)=>e in o?p(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;var a=(o,e,t)=>(g(o,typeof e!="symbol"?e+"":e,t),t);import{d as C}from"./dialogues-f0c5e2f1.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();class f{constructor(e="Unknown",t="/dialogue-box/unknown.webp"){a(this,"name");a(this,"image");a(this,"avatarContainer");this.name=e,this.image=t,this.avatarContainer=document.createElement("div"),this.avatarContainer.className="avatar-container",this.setupDOM()}setupDOM(){let e=document.createElement("div");e.className="avatar";let t=document.createElement("img");t.src=this.image,e.appendChild(t),this.avatarContainer.appendChild(e);let n=document.createElement("span");n.textContent=this.name,this.avatarContainer.appendChild(n)}render(){return this.avatarContainer}}const m={MORE_TEXT:"Next",NO_MORE_TEXT:"Close",NO_MORE_TEXT_BUT_CONTENT:"View content"},d=240;class E{constructor(e="No message has been defined.",t=!1){a(this,"message");a(this,"hasContent");a(this,"messageContainer");a(this,"messageElement");a(this,"paginationElement");a(this,"buttonElement");a(this,"currentPageIndex");a(this,"numberOfPages");a(this,"pages");this.message=e,this.hasContent=t,this.messageContainer=document.createElement("div"),this.messageContainer.className="message-container",this.messageElement=document.createElement("p"),this.paginationElement=document.createElement("span"),this.buttonElement=document.createElement("button"),this.currentPageIndex=0,this.numberOfPages=0,this.pages=this.paginateMessage(),this.setupDOM()}setupDOM(){let e=document.createElement("div");e.className="pagination-container",e.appendChild(this.paginationElement),e.appendChild(this.buttonElement),this.messageContainer.appendChild(this.messageElement),this.messageContainer.appendChild(e),this.buttonElement.addEventListener("click",()=>{this.updateUI()}),this.updateUI()}render(){return this.messageContainer}paginateMessage(){const e=this.message.match(/\b.*?[.!?](?=\s|$)/g)||[],t=[];let n=e.shift()||"",s=1;for(;e.length>0;){const i=e.shift()||"";if(n.length+i.length+1<=d)n=n+" "+i;else if(n.length>d){const r=n.split(" ");for(n=r.shift()||"";r.length>0;){const l=r.shift()||"";n.length+l.length+1<=d?n=n+" "+l:(s++,t.push(n),n=l)}}else s++,t.push(n),n=i}return t.push(n),this.numberOfPages=s,t}updateUI(){const e=this.currentPageIndex+1;this.messageElement.textContent=this.pages[this.currentPageIndex],this.numberOfPages>1&&(this.paginationElement.textContent=e+"/"+this.numberOfPages),e===this.numberOfPages?(this.buttonElement.className="close",this.buttonElement.textContent=this.hasContent?m.NO_MORE_TEXT_BUT_CONTENT:m.NO_MORE_TEXT,this.buttonElement.addEventListener("click",()=>{const t=new CustomEvent("destroy");document.dispatchEvent(t)})):(this.buttonElement.className="next",this.currentPageIndex++,this.buttonElement.textContent=m.MORE_TEXT)}}class v{constructor(e){a(this,"npc");a(this,"dialogueContainer");a(this,"avatarComponent");a(this,"messageComponent");this.npc=e,this.dialogueContainer=document.createElement("div"),this.dialogueContainer.className="dialogue-box",this.npc.npcName&&(this.avatarComponent=new f(this.npc.npcName,`${this.npc.npcName}.png`)),this.messageComponent=new E(this.npc.message,!!this.npc.url),this.setupDOM(),document.addEventListener("destroy",async()=>{await WA.player.state.saveVariable("closeDialogueBoxEvent",{forceChange:new Date().getTime(),npc:this.npc},{public:!1,persist:!1,scope:"room"});const t=WA.iframeId;if(t){const n=await WA.ui.website.getById(t);n==null||n.close()}})}setupDOM(){if(this.npc.npcName){const t=this.avatarComponent.render();this.dialogueContainer.appendChild(t)}const e=this.messageComponent.render();this.dialogueContainer.appendChild(e)}render(){return this.dialogueContainer}}console.info('"Dialogue Box" script started successfully');let c;async function u(){const e=new URL(window.location.toString()).searchParams.get("id");if(c=C.find(t=>t.id===e),c&&c.message){const t=new v(c);h?h.appendChild(t.render()):console.error("Element with ID 'app' not found.")}else console.error("Undefined NPC data")}const h=document.getElementById("app");document.readyState==="loading"?document.addEventListener("DOMContentLoaded",u):u();
