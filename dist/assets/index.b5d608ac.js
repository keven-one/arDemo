import{d,c as u,a as r,w as c,F as f,b as m,r as i,o as p,e as _}from"./vendor.7f18f321.js";const h=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}};h();const g=m("div",null,"5",-1),y=d({setup(l){return window.AFRAME.registerComponent("markerhandler",{init:function(){this.el.sceneEl.addEventListener("markerFound",()=>{window.location.href="https://www.baidu.com/"})}}),(o,a)=>{const n=i("a-entity"),e=i("a-marker"),t=i("a-scene");return p(),u(f,null,[g,r(t,{embedded:"",arjs:""},{default:c(()=>[r(e,{preset:"hiro",emitevents:"true"},{default:c(()=>[r(n,{position:"0 0 0",scale:"0.05 0.05 0.05","gltf-model":o.window.location.host+"/arrow.gltf"},null,8,["gltf-model"])]),_:1}),r(n,{camera:""})]),_:1})],64)}}});_(y).mount("#app");