import{d as m,c as u,a as s,w as i,F as d,b as l,r as a,o as f,e as h}from"./vendor.7f18f321.js";const _=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}};_();const g=l("div",{class:"arjs-loader"},[l("div",null,"Loading, please wait...")],-1),y=m({setup(p){return(r,c)=>{const o=a("a-entity"),e=a("a-nft"),t=a("a-scene");return f(),u(d,null,[g,s(t,{"vr-mode-ui":"enabled: false;",renderer:"logarithmicDepthBuffer: true;",embedded:"",arjs:"trackingMethod: best; sourceType: webcam;debugUIEnabled: false;"},{default:i(()=>[s(e,{type:"nft",url:"https://arjs-cors-proxy.herokuapp.com/https://raw.githack.com/AR-js-org/AR.js/master/aframe/examples/image-tracking/nft/trex/trex-image/trex",smooth:"true",smoothCount:"10",smoothTolerance:".01",smoothThreshold:"5"},{default:i(()=>[s(o,{"gltf-model":"https://arjs-cors-proxy.herokuapp.com/https://raw.githack.com/AR-js-org/AR.js/master/aframe/examples/image-tracking/nft/trex/scene.gltf",scale:"5 5 5",position:"50 150 0"})]),_:1}),s(o,{camera:""})]),_:1})],64)}}});h(y).mount("#app");
