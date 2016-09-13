$.fn.buttons = function(columnsPerRow) {
  var $buttons = $(this);
  var $icnoElemen = $buttons.find('.follow-icons');


  console.log($icnoElemen);
  /*var $galleryList = $gallery.find('.gallery-container');*/

//  $icnoElemen.on('click', function(){
//    console.log('item is clicked');
//  })

  var $facebook = $('#facebook');
  var $youtube = $('#youtube');
  var $twitter = $('#twitter');
  var $instagram = $('#instagram');
  var $google = $('#google');

  $facebook.on('click', function(){
    console.log('facebook is clicked');
    window.location.href = 'https://www.facebook.com/theshotsclub/?ref=ts&fref=ts';
  })

  $youtube.on('click', function(){
    console.log('youtube is clicked');
    /*TODO create The Shots Chanel*/
  })

  $twitter.on('click', function(){
    console.log('twitter is clicked');
    /*TODO create The Shots Twitter*/
  })

  $instagram.on('click', function(){
    console.log('instagram is clicked');
    /*TODO create The Shots Instagram*/
  })

  $google.on('click', function(){
    console.log('google is clicked');
    /*TODO create The Shots googple page*/
  })
}
