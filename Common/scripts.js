$.fn.gallery = function (columnsPerRow) {
  columnsPerRow = columnsPerRow || 4;

  var $gallery = $(this);
  var $galleryList = $gallery.find('.gallery-container');
  var $selected = $gallery.children('.selected');
  var $img = $gallery.find('img');


  $img.on('click', function(){
    var clickedImg = $(this);
    var src = clickedImg.attr('src');
    console.log(src);
    $img.attr('src', src);
    console.log($selected.attr('src'));

    $selected.show();
  });
  $selected.hide();





}
