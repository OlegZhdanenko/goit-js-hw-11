import{S as p,i as l}from"./assets/vendor-46aac873.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const d=new p(".js-list a",{captionDelay:250,captionsData:"alt",close:!0,enableKeyboard:!0,docClose:!0}),c=document.querySelector(".js-form");c.addEventListener("submit",f);const h=document.querySelector(".js-list"),a=document.querySelector(".loader");function f(n){n.preventDefault();const r=encodeURIComponent(n.currentTarget.elements.input.value);m(r).then(o=>{o.total||(l.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),c.reset()),a.style.display="none",h.innerHTML=y(o.hits),d.refresh()}).catch(o=>console.log(l.error({position:"topRight",message:`"${o}"`})))}function m(n){const r="41617344-22077a3acba128accdfbcd745",o="https://pixabay.com/api/";return a.style.display="block",fetch(`${o}?key=${r}&q=${n}&image_type=photo&orientation=horizontal&safesearch=true`).then(i=>{if(!i.ok)throw new Error(i.statusText);return i.json()})}function y(n){return n.map(({webformatURL:r,largeImageURL:o,tags:i,likes:e,views:t,comments:s,downloads:u})=>` <li>
    <a href="${o}"><img src="${r}" alt="${i}" width="350px" height="250px"></a>
    <ul class="discription-list">
    <li class="discription-item">
        <h2>Likes</h2>
        <p>${e}</p></li>
    <li class="discription-item">
        <h2>Views</h2>
        <p>${t}</p>
    </li>
    <li class="discription-item">
        <h2>Comments</h2>
        <p>${s}</p>
    </li>
    <li class="discription-item">
        <h2>Download</h2>
        <p>${u}</p>
    </li>
    </ul>
    </li>`).join("")}
//# sourceMappingURL=commonHelpers.js.map
