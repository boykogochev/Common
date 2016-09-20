$.fn.buttons = function(columnsPerRow) {
    var $buttons = $(this);
    var $icnoElemen = $buttons.find('.follow-icons');




    var $facebook = $('#facebook');
    var $youtube = $('#youtube');
    var $twitter = $('#twitter');
    var $instagram = $('#instagram');
    var $google = $('#google');

    var $menuButton = $('.header-list-items a');

    console.log($menuButton);

    $menuButton.on('mouseover', function() {
        $(this).addClass('active-button');
    })

    $menuButton.on('mouseout', function() {
        $(this).removeClass('active-button');

    })

    /*FACEBOOK ACTION START HERE*/

    $facebook.on('click', function() {
        console.log('facebook is clicked');
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
        console.log('youtube is clicked');
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
        console.log('twitter is clicked');
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
        console.log('instagram is clicked');
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
        console.log('google is clicked');
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


}
