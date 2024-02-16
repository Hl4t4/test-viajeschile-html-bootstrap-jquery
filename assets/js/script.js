// En caso de usar tooltips
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

// Binding de cards de imagenes
var cardImage1 = document.getElementById("card-image-1");
var cardImage2 = document.getElementById("card-image-2");
var cardImage3 = document.getElementById("card-image-3");
var cardImage4 = document.getElementById("card-image-4");



$(document).ready(function(){
    // Una vez cargada la página ajusta que todas las imagenes en los cards tengan el mismo alto
    cardImage2.style.maxHeight = cardImage1.clientHeight + 'px';
    cardImage3.style.maxHeight = cardImage1.clientHeight + 'px';
    cardImage4.style.maxHeight = cardImage1.clientHeight + 'px';

    // Ajuste de alto de los cards con imagenes cuando se ajusta el tamaño de la página
    $(window).on('resize', function() {
        cardImage2.style.maxHeight = cardImage1.clientHeight + 'px';
        cardImage3.style.maxHeight = cardImage1.clientHeight + 'px';
        cardImage4.style.maxHeight = cardImage1.clientHeight + 'px';
    });

    // Funcion de ayuda para agregar un smooth scroll mas lento que el de css por defecto
    function scrollToAnchor(aid){
        const destination = $(aid);
          $('html,body').animate({
            scrollTop: destination.offset().top
          },'slow');
      }
      
      // Listener usando jquery para escuchar los clicks en la navbar para moverse dentro de la página
      $(document).on('click', '.nav-link', function(){
        scrollToAnchor($(this)[0].hash);
      })
});