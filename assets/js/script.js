$(document).ready(function(){
    $('#top-toggle').click(function(){
        $('.free-delivery').hide();
    })

    $('.country').click(function(){
        $('#country-toggle').toggle();
    })
    $('.fa-bars').click(function(){
        $(this).toggleClass('fa-times');
        $('#navigation').toggleClass('navtoggle');
    })






    // Slick Slider
    $('.carausel-box').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 3,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });
    
})







