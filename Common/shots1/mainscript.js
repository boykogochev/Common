$.fn.buttons = function(columnsPerRow) {
  var $buttons = $(this);
  var $icnoElemen = $buttons.find('.follow-icons');


  console.log($icnoElemen);
  /*var $galleryList = $gallery.find('.gallery-container');*/

  $icnoElemen.on('click', function(){
    console.log('item is clicked');
  })
}
