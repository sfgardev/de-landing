$(function () {

    //#region [Variables]
    var $popOverlay = $('.popup-overlay')
    var $popWindow = $('.contacts__form--popup')
    var $popThankYou = $('.contacts__form--thank-you')
    var $popClose = $('.close__btn')
    var $formOpen = $('#popup')
    //#endregion
    
    //Pop-up window
    $(function () {
        $popClose.on('click', function () {
            $popOverlay.fadeOut();
            $popWindow.fadeOut();
            $popThankYou.fadeOut();
        });
        $formOpen.on('click', function () {
            $popOverlay.fadeIn();
            $popWindow.fadeIn();
        })
    });
    
    //Ajax request
    $('form').submit(function () {
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: th.serialize()
        }).done(function () {
            $popWindow.fadeOut();
            $popThankYou.fadeIn();
            setTimeout(function () {
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });
});