  // мобильное меню
  const burger=document.getElementById('burger');
  const menu=document.getElementById('menu');
  burger.addEventListener('click',()=>{
    const open=menu.classList.toggle('open');
    burger.setAttribute('aria-expanded',String(open));
  });
  menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
    menu.classList.remove('open');burger.setAttribute('aria-expanded','false');
  }));

  // reveal при скролле — только transform/opacity
  const io=new IntersectionObserver(es=>{
    es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});
  },{threshold:0.12});
  document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

  document.getElementById('year').textContent=new Date().getFullYear();
