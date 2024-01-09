import{S as u,i as d}from"./assets/vendor-46aac873.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const h=new u(".js-list a",{captionDelay:250,captionsData:"alt",close:!0,enableKeyboard:!0,docClose:!0}),l=document.querySelector(".js-form");l.addEventListener("submit",f);const p=document.querySelector(".js-list"),c=document.querySelector(".loader");function f(s){s.preventDefault();const o=s.currentTarget.elements.input.value;m(o).then(i=>{i.total||(d.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),l.reset()),c.style.visibility="hidden",p.innerHTML=y(i.hits),h.refresh()}).catch(i=>console.log(i))}function m(s){const o="41617344-22077a3acba128accdfbcd745",i="https://pixabay.com/api/";return c.style.visibility="visible",fetch(`${i}?key=${o}&q=${s}&image_type=photo&orientation=horizontal&safesearch=true`).then(r=>{if(!r.ok)throw new Error(r.statusText);return r.json()})}function y(s){return l.reset(),s.map(({webformatURL:o,largeImageURL:i,tags:r,likes:e,views:t,comments:n,downloads:a})=>` <li>
    <a href="${i}"><img src="${o}" alt="${r}" width="350px" height="250px"></a>
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
        <p>${n}</p>
    </li>
    <li class="discription-item">
        <h2>Download</h2>
        <p>${a}</p>
    </li>
    </ul>
    </li>`).join("")}
//# sourceMappingURL=commonHelpers.js.map
