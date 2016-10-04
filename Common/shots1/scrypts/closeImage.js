$.fn.close = function() {

    var $close = $(this);
    var $selected = $('.selected');

    $(document).on('keyup', function(evt) {

        if (evt.keyCode == 27) {
            $selected.hide();
            $close.removeClass('visible-div');
        }
    });
    $close.on('click', function() {

        $selected.hide();
        $close.removeClass('visible-div');
    });

    
}
