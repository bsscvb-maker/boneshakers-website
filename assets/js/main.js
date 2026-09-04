(function(){
  function syncHeaderOffset(){
    var header=document.querySelector('.globalHeader');
    if(header){
      document.body.classList.add('bssc-fixed-header');
      document.documentElement.style.setProperty('--bssc-header-h',header.offsetHeight+'px');
    }
  }
  syncHeaderOffset();
  window.addEventListener('load',syncHeaderOffset);
  window.addEventListener('resize',syncHeaderOffset);

  var mobileBtn=document.getElementById('mobileNavButton');
  var mainNav=document.getElementById('mainNav');
  if(mobileBtn && mainNav){
    mobileBtn.addEventListener('click',function(){
      var open=mainNav.classList.toggle('mobileOpen');
      mobileBtn.setAttribute('aria-expanded',open ? 'true':'false');
      setTimeout(syncHeaderOffset,0);
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