const nav=document.getElementById('nav'),menu=document.getElementById('menu'),links=document.getElementById('links');
menu.addEventListener('click',()=>links.classList.toggle('open'));
links.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>links.classList.remove('open')));
window.addEventListener('scroll',()=>nav.classList.toggle('scrolled',scrollY>30));
const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});
document.querySelectorAll('.reveal,.timeline-item,.skill-card,.cert,.project,.service-row').forEach(el=>{el.classList.add('reveal');io.observe(el)});
document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{const t=document.querySelector(a.getAttribute('href'));if(t){e.preventDefault();t.scrollIntoView({behavior:'smooth'})}}));
