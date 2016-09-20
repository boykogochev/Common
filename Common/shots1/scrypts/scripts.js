$.fn.gallery = function(columnsPerRow) {
    columnsPerRow = columnsPerRow || 4;

    var $gallery = $(this);
    var $galleryList = $gallery.find('.gallery-container');
    var $selected = $gallery.children('.selected');
    var $img = $gallery.find('.image-in-gallery');
    var $selectedImg = $selected.children('.selected-image');
    var $leftArrow = $selected.children('.left-arrow');
    var $rightArrow = $selected.children('.right-arrow');
    var $blur = $('#blur');



    /*ARROW FUNCTIONS START HERE*/

    $leftArrow.on('mouseover', function(){
      $(this).addClass('hover-left-arrow');
      $(this).removeClass('left-arrow');
    })

    $leftArrow.on('mouseout', function(){
      $(this).addClass('left-arrow');
      $(this).removeClass('hover-left-arrow');
    })

    $rightArrow.on('mouseover', function(){
      $(this).addClass('hover-right-arrow');
      $(this).removeClass('right-arrow');
    })

    $rightArrow.on('mouseout', function(){
      $(this).addClass('right-arrow');
      $(this).removeClass('hover-right-arrow');
    })

    $rightArrow.on('click', function(){
      var image = $(this);
      var nextImage = $img.next();
      var src = nextImage.attr('src');    /*TODO Still not working!*/
      console.log(src);
      $selectedImg.attr('src', src);
      $img = nextImage;
    })
    /*ARROW FUNCTIONS EDNS HERE*/


    $img.on('click', function() {

        var clickedImg = $(this);
        var height = clickedImg.attr('height');
        console.log(height);
        var src = clickedImg.attr('src');

        $selectedImg.attr('src', src);
        $selected.show();
        $blur.addClass('visible-div');

    });
    $img.on('mouseover', function() {
        $(this).addClass('hover-image');
    })
    $img.on('mouseout', function() {
        $(this).removeClass('hover-image');
    })




    $selected.hide();





}
