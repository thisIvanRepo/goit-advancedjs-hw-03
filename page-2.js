/* empty css                      */import{i as a,S as u}from"./assets/vendor-B07T6_gy.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const f={form:document.querySelector(".form-js"),input:document.querySelector(".input-js"),list:document.querySelector(".colection-images-js")},m={BASE_URL:"https://pixabay.com/api/",API_KEY:"49425225-4fab9228e9772b9206d5850f9",IMAGE_TYPE:"photo",ORIENTATION:"horizontal",SEFESEARCH:!0},{BASE_URL:p,API_KEY:d,IMAGE_TYPE:g,ORIENTATION:h,SEFESEARCH:y}=m;function E(o){return o?fetch(`${p}?key=${d}&q=${o}&image_type=${g}&orientation=${h}&safesearch=${y}`).then(r=>{if(!r.ok)throw new Error(`Error data: ${r.status}`);return r.json()}).then(r=>r.hits.length===0?(a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),[]):r.hits).catch(r=>{a.error({title:"Error",message:"Something went wrong. Please try again!"}),console.log(r)}):(a.error({title:"Error",message:"Please enter a valid search query!"}),Promise.resolve([]))}function b(o){return console.log(o),o.map(({webformatURL:i,largeImageURL:n,tags:e,likes:t,views:s,comments:l,downloads:c})=>`
		    <li class="gallery-item">
			    <a class="gallery-link" href="${n}">
				    <img
					    class="gallery-image"
					    src="${i}"
					    alt="${e}"
					  />
			    </a>
          <div class="info">
            <p class="info-item">
              <b>Likes:</b> ${t}
            </p>
            <p class="info-item">
              <b>Views:</b> ${s}
            </p>
            <p class="info-item">
              <b>Comments:</b> ${l}
            </p>
            <p class="info-item">
              <b>Downloads:</b> ${c}
            </p>
		    </li>`).join("")}const{form:S,input:$,list:P}=f;let A=new u(".gallery-link",{captionsData:"alt",captionDelay:250});S.addEventListener("submit",o=>{o.preventDefault();const r=$.value.trim();E(r).then(i=>{P.innerHTML=b(i),A.refresh()}).catch(i=>console.log(i))});
//# sourceMappingURL=page-2.js.map
