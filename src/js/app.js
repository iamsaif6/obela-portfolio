
// Offcanvas Menu
// #############################

$('.menu-trigger').click(function () {
     $('.offcanvas-menu').addClass('active');
     $('.menu-overlay').addClass('active');
});

$('.close-btn,.menu-overlay,.nav-close-trigger').click(function () {
     $('.offcanvas-menu').removeClass('active');
     $('.menu-overlay').removeClass('active');
});


// Skill Bar
// #############################

$('.single-member-wrap').mouseover(function () {
     $(this).find("#bar4").barfiller({
          barColor: "#C99AFF"
     });
     $(this).find("#bar5").barfiller({
          barColor: "#C99AFF"
     });
     $(this).find("#bar6").barfiller({
          barColor: "#C99AFF"
     });
 
});



$('#skill-sec').waypoint(function() {
     $('#bar1').barfiller({
                    barColor: "#7FB7FA"
               });
               $('#bar2').barfiller({
                    barColor: "#FFAC1B"
               });
               $('#bar3').barfiller({
                    barColor: "#C99AFF"
               });
    });

//     Counter up
// #############################

$('.counter').counterUp({
     delay: 5,
    time: 300
});


//    Mix it UP
// #############################

$(document).ready(function () {
     var mix = mixitup('#grid');
 
});
 

//    Carousel
// #############################


$('.review-wrapper').owlCarousel({
     items: 1,
     loop: true,
     dots: true,
     nav: false
     
})

//   Sticky
// #############################

$("#sticky-trigger").waypoint(function(direction){
     if(direction == "down"){
       $("nav").addClass("sticky");
     }  else {
       $("nav").removeClass("sticky");
     }
 });




 
 