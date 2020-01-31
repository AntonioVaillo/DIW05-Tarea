$(document).ready(function() {

    $('.close').click(function() {
        $(this).parent('div').parent('div').collapse('toggle');
    });
});