(function(){
  // Safe GA4 event tracking helper
  function trackEvent(eventName, params) {
    if (typeof window.gtag === "function") {
      window.gtag("event", eventName, params || {});
    }
  }

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
      try{
        trackEvent('contact_form_submit',{page_path:window.location.pathname});
      }catch(err){}
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
      return false;
    });
  }

  // Catalog/PDF click tracking
  document.querySelectorAll('a[href$=".pdf"]').forEach(function(link){
    link.addEventListener('click',function(){
      trackEvent('catalog_click',{
        link_url:link.getAttribute('href'),
        link_text:link.textContent.trim(),
        page_path:window.location.pathname
      });
    });
  });

  // Contact CTA click tracking (contact links and #contact anchors, but not email/phone/pdf)
  document.querySelectorAll('a[href="/contact"],a[href="#contact"]').forEach(function(link){
    link.addEventListener('click',function(){
      trackEvent('contact_cta_click',{
        link_url:link.getAttribute('href'),
        link_text:link.textContent.trim(),
        page_path:window.location.pathname
      });
    });
  });

  // Email click tracking
  document.querySelectorAll('a[href^="mailto:"]').forEach(function(link){
    link.addEventListener('click',function(){
      trackEvent('email_click',{
        link_url:link.getAttribute('href'),
        link_text:link.textContent.trim(),
        page_path:window.location.pathname
      });
    });
  });

  // Phone click tracking
  document.querySelectorAll('a[href^="tel:"]').forEach(function(link){
    link.addEventListener('click',function(){
      trackEvent('phone_click',{
        link_url:link.getAttribute('href'),
        link_text:link.textContent.trim(),
        page_path:window.location.pathname
      });
    });
  });
})();
