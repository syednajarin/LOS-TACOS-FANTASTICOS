const toggle=document.querySelector(".menu-toggle"),links=document.querySelector(".nav-links");
toggle.addEventListener("click",()=>{const open=links.classList.toggle("open");toggle.setAttribute("aria-expanded",open)});
document.querySelectorAll(".nav-links a").forEach(a=>a.addEventListener("click",()=>links.classList.remove("open")));
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));
document.querySelector("#contact-form").addEventListener("submit",e=>{
 e.preventDefault();
 document.querySelector("#form-status").textContent="Thanks! This demo form is ready to connect to your email service or backend.";
 e.target.reset();
});
