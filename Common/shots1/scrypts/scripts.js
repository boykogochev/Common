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
    var $curentImage;



    /*ARROW FUNCTIONS START HERE*/

    $leftArrow.on('mouseover', function() {
        $(this).addClass('hover-left-arrow');
        $(this).removeClass('left-arrow');
    })

    $leftArrow.on('mouseout', function() {
        $(this).addClass('left-arrow');
        $(this).removeClass('hover-left-arrow');
    })

    $leftArrow.on('click', function() {
        var arrow = $(this);
        var $nextImage = $curentImage.parent('.float').prev().find('.image-in-gallery');

        if ($nextImage.length > 0) {
            var src = $nextImage.attr('src');
            $selectedImg.attr('src', src);
            $curentImage = $nextImage;
        }


    })

    $rightArrow.on('mouseover', function() {
        $(this).addClass('hover-right-arrow');
        $(this).removeClass('right-arrow');
    })

    $rightArrow.on('mouseout', function() {
        $(this).addClass('right-arrow');
        $(this).removeClass('hover-right-arrow');
    })

    $rightArrow.on('click', function() {
        var arrow = $(this);
        var $nextImage = $curentImage.parent('.float').next().find('.image-in-gallery');

        if ($nextImage.length > 0) {
            var src = $nextImage.attr('src');
            $selectedImg.attr('src', src);
            $curentImage = $nextImage;
        }

    })

    $(document).on('keydown', function(evt) {

        if (evt.keyCode == 39) {
            var $nextImage = $curentImage.parent('.float').next().find('.image-in-gallery');

            if ($nextImage.length > 0) {
                var src = $nextImage.attr('src');
                $selectedImg.attr('src', src);
                $curentImage = $nextImage;
            }
        }
    });

    $(document).on('keydown', function(evt) {

        if (evt.keyCode == 37) {
            var $nextImage = $curentImage.parent('.float').prev().find('.image-in-gallery');

            if ($nextImage.length > 0) {
                var src = $nextImage.attr('src');
                $selectedImg.attr('src', src);
                $curentImage = $nextImage;
            }
        }
    });
    /*ARROW FUNCTIONS EDNS HERE*/


    $img.on('click', function() {
        var clickedImg = $(this);
        $curentImage = clickedImg;
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
