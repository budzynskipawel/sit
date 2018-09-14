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

  $items.on('touchmove', forwardGal);
  $circles = $('.circles div');
  $circles.on('click', clickCircle);
  setInterval(forwardGal, 8000);
  $visible = 0;

  function changeItem(a){
    $items.css('opacity', '0');
    $($items[$visible]).css('opacity','1');
  };

  function changeCircle(a){
    $circles.css('background-color', 'lightgray');
    $($circles[$visible]).css('background-color', 'gray');
    
    
  };

  function clickCircle(e){
$visible = ($(this).data('circle'));
changeItem($visible);
   changeCircle($visible);
  };

  function backGal(){
    if($visible !==0){
      $visible--;
    }else{
      $visible = $items.length - 1;
    }
    
   changeItem($visible);
   changeCircle($visible);
    
    
    
  };
  function forwardGal(){
    if($visible !== $items.length - 1){
      $visible++;
    }else{
      $visible = 0;
    }
    
    changeItem($visible);
   changeCircle($visible);
  }
  
  
})
