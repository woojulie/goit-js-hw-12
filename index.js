import{a as h,S as y,i as a}from"./assets/vendor-mdVVRe9K.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const m of s.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&o(m)}).observe(document,{childList:!0,subtree:!0});function i(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=i(e);fetch(e.href,s)}})();const L="45718127-30771d56f6b088ceef33bd7c7",w="https://pixabay.com/api/";async function u(r,t=1){try{return(await h.get(w,{params:{key:L,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15}})).data}catch{throw new Error("Failed to fetch images")}}function g(r){const t=document.querySelector(".gallery"),i=r.map(o=>`
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
        `).join("");t.insertAdjacentHTML("beforeend",i)}let c="",l=1,d=0;const b=document.querySelector("#search-form"),q=document.querySelector(".gallery"),f=document.querySelector("#load-more-btn"),n=document.querySelector(".loader"),p=new y(".gallery a",{captionsData:"alt",captionDelay:250});b.addEventListener("submit",async r=>{if(r.preventDefault(),q.innerHTML="",f.classList.add("is-hidden"),n.classList.remove("is-hidden"),c=r.currentTarget.elements.user_query.value.trim(),!c){a.warning({title:"Warning",message:"Please enter a search query."}),n.classList.add("is-hidden");return}l=1;try{const t=await u(c,l);if(d=t.totalHits,d===0){a.info({title:"No results",message:"No images found. Please try another search."}),n.classList.add("is-hidden");return}g(t.hits),p.refresh(),d>15&&f.classList.remove("is-hidden")}catch(t){console.error("Error fetching images:",t),a.error({title:"Error",message:"Failed to fetch images. Please try again later."})}finally{n.classList.add("is-hidden")}});f.addEventListener("click",async()=>{l+=1;try{const r=await u(c,l);g(r.hits),p.refresh();const{height:t}=document.querySelector(".gallery-item").getBoundingClientRect();window.scrollBy({top:t*2,behavior:"smooth"});const i=document.querySelectorAll(".gallery-item").length;Math.ceil(d/15)===l&&(f.classList.add("is-hidden"),a.info({title:"End of results",message:"We're sorry, but you've reached the end of search results."}))}catch(r){console.error("Error loading more images:",r),a.error({title:"Error",message:"Failed to load more images. Please try again later."})}});
//# sourceMappingURL=index.js.map
