$(function() {
    // Owl Carousel
    var owl_one = $(".owl-one");
    owl_one.owlCarousel({
      items: 2,
      margin: 10,
      dots: true,
      nav: false,
      loop: true,
      responsive:{
        0:{
          dotsEach: 3,
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:2
        }
    }
    });
  });
  
  $(function() {
    // Owl Carousel
    var owl_two = $(".owl-two");
    owl_two.owlCarousel({
      items: 3,
      margin: 10,
      dots: true,
      nav: false,
      loop: true,
      responsive:{
        0:{
          dotsEach: 3,
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
    });
  });

  

