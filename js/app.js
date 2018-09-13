document.addEventListener("DOMContentLoaded", function() {
  var hamburger = document.getElementById('hamburger');
var menu = document.getElementById("menu");
hamburger.addEventListener("click", function onClick(event) {
    hamburger.classList.toggle('hamburger-active');
  menu.classList.toggle("center-menu");
    
  
  
  });
  // gallery
  
  $left = $('#gal-left');
  $right = $('#gal-right');
  $left.on('click', backGal);
  $right.on('click', forwardGal);

  $items = $('[class^=chair-]');

  $visible = 0;
  function backGal(){
    if($visible !==0){
      $visible--;
    }else{
      $visible = $items.length - 1;
    }
    
    console.log('left');
    $items.css('opacity', '0');
    
    $($items[$visible]).css('opacity','1');
    
    
  };
  function forwardGal(){
    if($visible !== $items.length - 1){
      $visible++;
    }else{
      $visible = 0;
    }
    
    console.log('right');
    console.log($visible);
    $items.css('opacity', '0');
    
    $($items[$visible]).css('opacity','1');
  }

  // setInterval(forwardGal, 8000);
})
