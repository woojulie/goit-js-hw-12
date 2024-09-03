import{a as p,S as y,i as g}from"./assets/vendor-mdVVRe9K.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const h="45718127-30771d56f6b088ceef33bd7c7",L="https://pixabay.com/api/";async function f(s,t=1){try{return(await p.get(L,{params:{key:h,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15}})).data}catch{throw new Error("Failed to fetch images")}}function u(s){const t=document.querySelector(".gallery"),i=s.map(o=>`
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
        `).join("");t.insertAdjacentHTML("beforeend",i)}let c="",a=1,b=0;const w=document.querySelector("#search-form"),q=document.querySelector(".gallery"),l=document.querySelector("#load-more-btn"),d=document.querySelector(".loader"),m=new y(".gallery a",{captionsData:"alt",captionDelay:250});w.addEventListener("submit",async s=>{s.preventDefault(),q.innerHTML="",l.classList.add("is-hidden"),d.classList.remove("is-hidden"),c=s.currentTarget.elements.user_query.value.trim(),a=1;try{const t=await f(c,a);b=t.totalHits,u(t.hits),m.refresh(),t.totalHits>15&&l.classList.remove("is-hidden")}catch(t){console.error("Error fetching images:",t)}finally{d.classList.add("is-hidden")}});l.addEventListener("click",async()=>{a+=1;try{const s=await f(c,a);u(s.hits),m.refresh(),document.querySelectorAll(".gallery-item").length>=15&&(l.classList.add("is-hidden"),g.info({title:"End of results",message:"We're sorry, but you've reached the end of search results."}))}catch(s){console.error("Error loading more images:",s)}});
//# sourceMappingURL=index.js.map
