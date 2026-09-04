(function(){
  var mobileBtn=document.getElementById('mobileNavButton');
  var mainNav=document.getElementById('mainNav');
  if(mobileBtn && mainNav){
    mobileBtn.addEventListener('click',function(){
      var open=mainNav.classList.toggle('mobileOpen');
      mobileBtn.setAttribute('aria-expanded',open ? 'true':'false');
    });
  }
  document.querySelectorAll('.navButton').forEach(function(btn){
    btn.addEventListener('click',function(e){
      e.stopPropagation();
      var item=btn.closest('.navItem');
      document.querySelectorAll('.navItem.open').forEach(function(other){
        if(other!==item){other.classList.remove('open');}
      });
      item.classList.toggle('open');
    });
  });
  document.addEventListener('click',function(){
    document.querySelectorAll('.navItem.open').forEach(function(item){item.classList.remove('open');});
  });
})();