$.fn.gallery = function(columnsPerRow) {
    columnsPerRow = columnsPerRow || 4;

    var $gallery = $(this);
    var $galleryList = $gallery.find('.gallery-container');
    var $selected = $gallery.children('.selected');
    var $img = $gallery.find('.image-in-gallery');
    var $selectedImg = $selected.children('.selected-image');
    var $leftArrow = $selected.children('.arrow');

    $img.on('click', function() {
        var clickedImg = $(this);
        var src = clickedImg.attr('src');
        console.log(src);
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
