document.addEventListener("DOMContentLoaded", function () {
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

  function changeItem(a) {
    $items.css('opacity', '0');
    $($items[$visible]).css('opacity', '1');
  };

  function changeCircle(a) {
    $circles.css('background-color', 'lightgray');
    $($circles[$visible]).css('background-color', 'gray');


  };

  function clickCircle(e) {
    $visible = ($(this).data('circle'));
    changeItem($visible);
    changeCircle($visible);
  };

  function backGal() {
    if ($visible !== 0) {
      $visible--;
    } else {
      $visible = $items.length - 1;
    }

    changeItem($visible);
    changeCircle($visible);



  };

  function forwardGal() {
    if ($visible !== $items.length - 1) {
      $visible++;
    } else {
      $visible = 0;
    }

    changeItem($visible);
    changeCircle($visible);
  }

  $arrow = $('.list_arrow');
  $arrow.on('click', arrowOpener);
  $chairColor = $('.panel_left').find('.color');
  $colorPrice = $('.panel_right').find('.color');
  $colorPhoto = $('.changePhoto');
  $chairModel = $('.panel_left').find('.title');
  $modelPrice = $('.panel_right').find('.title');
  $chairMaterial = $('.panel_left').find('.pattern');
  $materialPrice = $('.panel_right').find('.pattern');
  $transport = $("#transport");
  $transportYes = $('.panel_left').find('.transport');
  $transportPrice = $('.panel_right').find('.transport');
  $chairSum = $('.sum');

  function arrowOpener() {
    $(this).toggleClass('rot');
    $(this).next().slideToggle(300);
  }

  function closeList(a){
    $cos = a.parent();
    $arr = $cos.parent().find('.list_arrow');
    $arr.toggleClass('rot');
    $cos.slideToggle(300);
    
  }

  $colors = $('.colors').find('li');
  $colors.on('click', getColor);

  function getColor() {
    $price = $(this).data('price');
    $color = $(this).data('color');
    $photo = $(this).data('img')
    
    $chairColor.text($color);
    $colorPrice.text($price);
    $url = 'url("images/' + $photo + '")';
    $colorPhoto.css('background-image', $url);
    closeList($(this));
    calculator();


  }
  $models = $('.models').find('li');
  $models.on('click', getModel);

  function getModel() {
    $price = $(this).data('price');
    $model = $(this).data('model');

    $chairModel.text($model);
    $modelPrice.text($price);
    calculator();
    closeList($(this));
  }

  $materials = $('.materials').find('li');
  $materials.on('click', getMaterial);

  function getMaterial() {
    $price = $(this).data('price');
    $material = $(this).data('material');
    console.log($material);


    $chairMaterial.text($material);
    $materialPrice.text($price);
    calculator();
    closeList($(this));
  }

  $transport.on('change', getTransport);

  function getTransport() {

    $price = $(this).data('price');
    $name = $(this).data('name');
    if ($(this).prop('checked')) {
      $transportYes.text($name);
      $transportPrice.text($price);
    } else {
      $transportYes.text('');
      $transportPrice.text('');
    }
    calculator();
    
  }

$panelRight = $('.panel_right');
$panelRight.on('change', calculator);
  function calculator(){
    $values = $panelRight.find('.value');
    $sum = 0;
    $values.each( function(){
      if($(this).text()===""){
        $sum+= 0;
      }else{
        $sum+= parseInt($(this).text());
      }
    });
      
    
   $chairSum.text($sum); 
  }

})