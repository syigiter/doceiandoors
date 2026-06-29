(function(){
  var menuButton=document.getElementById('menuButton');
  var nav=document.getElementById('nav');
  if(menuButton&&nav){
    menuButton.addEventListener('click',function(){
      var isOpen=nav.classList.toggle('open');
      menuButton.setAttribute('aria-expanded',String(isOpen));
    });
    nav.querySelectorAll('a').forEach(function(link){
      link.addEventListener('click',function(){
        nav.classList.remove('open');
        menuButton.setAttribute('aria-expanded','false');
      });
    });
  }

  var year=document.getElementById('year');
  if(year) year.textContent=String(new Date().getFullYear());

  // Active nav highlight via IntersectionObserver
  var sections=document.querySelectorAll('section[id]');
  var navLinks=nav?nav.querySelectorAll('a[href^="#"]'):[];
  if(sections.length&&navLinks.length){
    var observer=new IntersectionObserver(function(entries){
      entries.forEach(function(e){
        if(e.isIntersecting){
          navLinks.forEach(function(a){
            a.classList.toggle('active',a.getAttribute('href')==='#'+e.target.id);
          });
        }
      });
    },{rootMargin:'-40% 0px -55% 0px'});
    sections.forEach(function(s){observer.observe(s);});
  }

  // Contact form — Formspree submission
  var form=document.getElementById('contactForm');
  var status=document.getElementById('formStatus');
  if(form&&status){
    form.addEventListener('submit',function(e){
      e.preventDefault();
      var data=new FormData(form);
      status.textContent='Sending…';
      status.className='';
      fetch(form.action,{method:'POST',body:data,headers:{Accept:'application/json'}})
        .then(function(r){
          if(r.ok){
            status.textContent='Message sent! We\'ll be in touch soon.';
            status.className='success';
            form.reset();
          } else {
            status.textContent='Something went wrong. Please email us directly.';
            status.className='error';
          }
        })
        .catch(function(){
          status.textContent='Network error. Please try again.';
          status.className='error';
        });
    });
  }
})();
