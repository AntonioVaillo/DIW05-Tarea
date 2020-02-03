$(document).ready(function() {

    //Controlamos a través de la clase .close el cierre del div del detalle del curriculum
    $('.close').click(function() {
        $(this).parent('div').parent('div').collapse('toggle');
    });

    
});


//Funcion que permite desplazar el scroll después de hacer click en el menú
//Así evitamos que se solape el menú y se vea correctamente la sección correspondiente
$('.nav-link').click(function() {
    
    var y = $(window).scrollTop();  //Current position at page
    var id = $(this).attr('href');

    $('html, body').animate({
        scrollTop: ($(id).offset().top) - 60
    }, 600);

});
