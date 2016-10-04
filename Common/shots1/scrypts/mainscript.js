$.fn.buttons = function(columnsPerRow) {
    var $buttons = $(this);
    var $icnoElemen = $buttons.find('.follow-icons');

    var $facebook = $('#facebook');
    var $youtube = $('#youtube');
    var $twitter = $('#twitter');
    var $instagram = $('#instagram');
    var $google = $('#google');
    var $iOSLink = $('.ios-link');
    var $googleLink = $('.google-link')
    var $menuButton = $('.header-list-items a');
    var $logo = $('.logo-image');
    var $buttonsReSize = $('li');

    var $backgroundButtonDiv = $( "<div class='background-button'></div>" );

    $(window).on('load', function(){
      alert('Site Is Under Construction!')
    })

    $(window).on('scroll', function(){
      var height = $(window).scrollTop();
      /*console.log(height);*/
      if (height) {
        $logo.css("width", '10%');
        $logo.css('margin-left', '150px')
        $buttons.append($backgroundButtonDiv);
        $buttonsReSize.css("font-size", "12px");
        $buttonsReSize.css("padding-top", "0px");
        /*$backgroundButtonDiv.animate({height: '300px', opacity: '0.4'}, "slow");*/
        $backgroundButtonDiv.animate({width: '99%', opacity: '0.4'}, "slow");
        $backgroundButtonDiv.animate({opacity: '0.5'}, 'slow');
      }
      else {
        $logo.css("width", '20%');
        $logo.css('margin-left', '')
        $backgroundButtonDiv.remove();
        $buttonsReSize.css("font-size", "17px");
        $buttonsReSize.css("padding-top", "20px");
        $backgroundButtonDiv.animate({width: '10%', opacity: '0.4'}, "slow");
      }

    })


    $menuButton.on('mouseover', function() {
        $(this).addClass('active-button');
    })

    $menuButton.on('mouseout', function() {
        $(this).removeClass('active-button');

    })

    /*FACEBOOK ACTION START HERE*/

    $facebook.on('click', function() {
        window.open('https://www.facebook.com/theshotsclub/?ref=ts&fref=ts');
    })

    $facebook.on('mouseover', function() {
        $(this).removeClass('inactive');
        $(this).addClass('active');

    })

    $facebook.on('mouseout', function() {
        $(this).removeClass('active');
        $(this).addClass('inactive');
    })

    /*YOUTUBE ACTION START HERE*/

    $youtube.on('click', function() {
        window.open('https://www.youtube.com/channel/UCjUvTHQvxzh37Mrl53MvOAw');
    })

    $youtube.on('mouseover', function() {
        $(this).removeClass('inactive');
        $(this).addClass('active');

    })

    $youtube.on('mouseout', function() {
        $(this).removeClass('active');
        $(this).addClass('inactive');
    })

    /*TWITTER ACTION START HERE*/

    $twitter.on('click', function() {
        window.open('https://twitter.com/TheShotsBar');
    })

    $twitter.on('mouseover', function() {
        $(this).removeClass('inactive');
        $(this).addClass('active');

    })

    $twitter.on('mouseout', function() {
        $(this).removeClass('active');
        $(this).addClass('inactive');
    })

    /*INSTAGRAM ACTION START HERE*/

    $instagram.on('click', function() {
        window.open('https://www.instagram.com/theshotsclub/');
    })

    $instagram.on('mouseover', function() {
        $(this).removeClass('inactive');
        $(this).addClass('active');

    })

    $instagram.on('mouseout', function() {
        $(this).removeClass('active');
        $(this).addClass('inactive');
    })

    /*GOOGLE ACTION START HERE*/

    $google.on('click', function() {
        window.open('https://plus.google.com/104245368109497815106');
    })

    $google.on('mouseover', function() {
        $(this).removeClass('inactive');
        $(this).addClass('active');

    })

    $google.on('mouseout', function() {
        $(this).removeClass('active');
        $(this).addClass('inactive');
    })

    /*APP ACTION START HERE*/

    $iOSLink.on('click', function() {
        window.open('https://itunes.apple.com/bg/app/the-shots-bar-unofficial/id977950197?mt=8');
    })

    $googleLink.on('click', function() {

        window.open('https://play.google.com/store/apps/details?id=com.stoitsev.theshotshybrid');
    })
}
