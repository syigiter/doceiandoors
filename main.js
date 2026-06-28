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
})();
