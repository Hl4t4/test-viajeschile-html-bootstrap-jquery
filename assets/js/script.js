// En caso de usar tooltips
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

// Binding de cards de imagenes
var cardImage1 = document.getElementById("card-image-1");
var cardImage2 = document.getElementById("card-image-2");
var cardImage3 = document.getElementById("card-image-3");
var cardImage4 = document.getElementById("card-image-4");

// Variable para lugar de premio de alerta
var prizeNumber = 10000;

const alertPlaceholder = document.getElementById('surprisePrize')
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    appendAlert('Felicidades has sido la persona #' + prizeNumber + ' en presionar nuestro logo. por un monto total de $' + (Math.random()*10000).toFixed(0), 'success')
    prizeNumber++;
  })
}

$(document).ready(function(){
    // Una vez cargada la página ajusta que todas las imagenes en los cards tengan el mismo alto
    cardImage1 = document.getElementById("card-image-1");
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