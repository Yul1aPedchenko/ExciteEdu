import"./mobile-menu-1c3f592d.js";const c=[{id:0,image:src="./img/physics.png",title:"Definition of physics and its role in science"}],n=[...c];document.getElementById("searchBar").addEventListener("keyup",t=>{const s=t.target.value.toLowerCase(),e=n.filter(i=>i.title.toLowerCase().includes(s));l=3,r(e)});let l=9;const r=(t,s=!1)=>{const e=t.slice(0,l).map(i=>`<li class="themes__item">
                <img src=${i.image} alt="themes img" class="themes__img">
                <h2 class="themes__title">${i.title}</h2>
                <a href="#" class="themes__link">Start learn</a>
              </li>`).join("");s?document.getElementById("root").innerHTML+=e:document.getElementById("root").innerHTML=e};r(n);document.getElementById("load-more").addEventListener("click",()=>{l+=3;const t=Array.from(document.querySelectorAll(".themes__item")).map(e=>e.querySelector(".themes__title").textContent),s=n.filter(e=>!t.includes(e.title));r(s,!0)});
