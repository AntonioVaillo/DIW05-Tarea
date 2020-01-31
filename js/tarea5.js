
$(document).ready(function() {

    //Controlamos a través de la clase .close el cierre del div del detalle del curriculum
    $('.close').click(function() {
        $(this).parent('div').parent('div').collapse('toggle');
    });
});