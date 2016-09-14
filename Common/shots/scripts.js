$.fn.gallery = function() {


    var $gallery = $(this);
    var $image = $('.image-in-gallery');
    var $blur = $('#blur');


    $img.on('click', function() {
     console.log('clicked');
        var clickedImg = $(this);
        var src = clickedImg.attr('src');

        $selectedImg.attr('src', src);


        $selected.show();


    });

    $leftArrow.on('mouseover', function(){
      console.log('dhaj');
      $leftArrow.show();
    });

    $selected.on('click', function() {
        $selected.hide();
    });
    $selected.hide();
    $leftArrow.hide();




}
