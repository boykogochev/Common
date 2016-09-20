$.fn.footerIcons = function() {
    var $footerIcons = $(this);

    var $facebook = $footerIcons.find('#facebook');
    var $youtube = $footerIcons.find('#youtube');
    var $twitter = $footerIcons.find('#twitter');
    var $instagram = $footerIcons.find('#instagram');
    var $google = $footerIcons.find('#google');

    $facebook.on('click', function(){
      window.open('https://www.facebook.com/theshotsclub/?ref=ts&fref=ts');
    })

    $youtube.on('click', function(){
      window.open('https://www.youtube.com/channel/UCjUvTHQvxzh37Mrl53MvOAw');
    })

    $twitter.on('click', function(){
      window.open('https://twitter.com/TheShotsBar');
    })

    $instagram.on('click', function(){
      window.open('https://www.instagram.com/theshotsclub/');
    })

    $google.on('click', function(){
      window.open('https://plus.google.com/104245368109497815106');
    })
  }
  $.fn.scrollView = function () {
    return this.each(function () {
      $('html, body').animate({
        scrollTop: $(this).offset().top
      }, 1000);
    });
  }
