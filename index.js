import{a as g,i as a,S as y}from"./assets/vendor-mdVVRe9K.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const f of s.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&o(f)}).observe(document,{childList:!0,subtree:!0});function i(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(t){if(t.ep)return;t.ep=!0;const s=i(t);fetch(t.href,s)}})();const L="45718127-30771d56f6b088ceef33bd7c7",w="https://pixabay.com/api/";async function u(r,e=1){try{return(await g.get(w,{params:{key:L,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:15}})).data}catch{throw new Error("Failed to fetch images")}}function m(r){const e=document.querySelector(".gallery"),i=r.map(o=>`
        <li class="gallery-item">
      <a class="gallery-link" href="${o.largeImageURL}">
      <img class="gallery-img" src="${o.webformatURL}" alt="${o.tags}" />
      </a>
      <ul class="img-info">
        <li class="info-list-item">
          <p class="info-text">Likes</p>
          <p class="info-item">${o.likes}</p>
        </li>
        <li class="info-list-item">
          <p class="info-text">Views</p>
          <p class="info-item">${o.views}</p>
        </li>
        <li class="info-list-item">
           <p class="info-text">Comments</p>
          <p class="info-item">${o.comments}</p>
        </li>
        <li class="info-list-item">
          <p class="info-text">Downloads</p>
          <p class="info-item">${o.downloads}</p>
        </li>
      </ul>
    </li>
        `).join("");e.insertAdjacentHTML("beforeend",i)}const b=document.querySelector("#search-form"),p=document.querySelector(".gallery"),l=document.querySelector(".load-more-btn");let n="",c=1,h=0,d;b.addEventListener("submit",async r=>{if(r.preventDefault(),n=r.currentTarget.elements.user_query.value.trim(),n===""){a.error({title:"Error",message:"Please enter a search query"});return}c=1,p.innerHTML="";try{const e=await u(n,c);if(h=e.totalHits,e.hits.length===0){a.warning({title:"No results",message:"Sorry, there are no images matching your search query."}),l.classList.add("is-hidden");return}m(e.hits),d=new y(".gallery a"),d.refresh(),l.classList.remove("is-hidden")}catch(e){a.error({title:"Error",message:e.message})}});l.addEventListener("click",async()=>{c+=1;try{const r=await u(n,c);if(r.hits.length<h){a.info({title:"End of results",message:"You've reached the end of search results.",position:"topCenter",title:"Info",timeout:4e3}),l.classList.add("is-hidden");return}m(r.hits),d.refresh();const{height:e}=p.firstElementChild.getBoundingClientRect();window.scrollBy({top:e*2,behavior:"smooth"})}catch(r){a.error({title:"Error",message:r.message})}});
//# sourceMappingURL=index.js.map
