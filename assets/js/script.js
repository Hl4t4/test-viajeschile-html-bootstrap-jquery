// En caso de usar tooltips
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

var cardImage1 = document.getElementById("card-image-1");
var cardImage2 = document.getElementById("card-image-2");
var cardImage3 = document.getElementById("card-image-3");
var cardImage4 = document.getElementById("card-image-4");



$(document).ready(function(){
    cardImage2.style.maxHeight = cardImage1.clientHeight + 'px';
    cardImage3.style.maxHeight = cardImage1.clientHeight + 'px';
    cardImage4.style.maxHeight = cardImage1.clientHeight + 'px';

    $(window).on('resize', function() {
        cardImage2.style.maxHeight = cardImage1.clientHeight + 'px';
        cardImage3.style.maxHeight = cardImage1.clientHeight + 'px';
        cardImage4.style.maxHeight = cardImage1.clientHeight + 'px';
    });

    function scrollToAnchor(aid){
        const destination = $(aid);
          $('html,body').animate({
            scrollTop: destination.offset().top
          },'slow');
      }
      
      $(document).on('click', '.nav-link', function(){
        scrollToAnchor($(this)[0].hash);
      })
});