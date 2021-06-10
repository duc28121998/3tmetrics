// $(document).ready(function(){
//     $('#owl-carousel').owlCarousel({
//         loop: true,
//         margin: 30,
//         dots: false,
//         nav: true,
//         items: 2,
//     })
// });
// $(document).ready(function(){
//   $('#owl-carousel').owlCarousel({
//       loop: true,
//       autoolay: true,
//     margin: 10,
//     nav:true,
//     autoplayHoverPause: true,
//     items: 1,
//     animateOut: 'fadeOut',
//     animateOut: 'fadeIn',
//     navText: ["<span class='fa fa-chevron-left'></span>","<span class='fa fa-chevron-right'></span>"]
//     response:{
//       0:{
//         items: 1,
//         nav: false
//       },
//       600:{
//         items: 1,
//         nav: false
//       },
//       1000:{
//         items: 1,
//         nav: true
//       },

//     }

//   })
// });

// $(document).ready(function () {
//   $('.owl-carousel').owlCarousel()

// })
$(document).ready(function () {
  $('.js-carousel').owlCarousel({
    loop: true,
    autoplay: true,
    stagePadding: 7,
    margin: 20,
    nav: true,
    autoplayHoverPause: true,
    items: 3,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    navText: [
      "<span class='fa fa-chevron-left'></span>",
      "<span class='fa fa-chevron-right'></span>",
    ],
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: true,
        loop: false,
      },
    },
  })
})
//Owl Carousel Image:
