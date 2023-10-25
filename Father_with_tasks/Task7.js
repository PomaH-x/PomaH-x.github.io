$(document).ready(function(){
    $('.gallery').slick({
     slidesToShow: 3,
     slidesToScroll: 1,
     prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
     nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
     dots: true,
     appendDots: $('.gallery'),
     responsive: [
         {
           breakpoint: 768,
           settings: {
             slidesToShow: 1,
             slidesToScroll: 1
           }
         }
     ]
    });
   });
