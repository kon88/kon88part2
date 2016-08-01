
$(document).ready(function(){

// Slick Slider

$('.mySlider').slick({
    autoplay: true,
    autoplaySpeed: 4000,
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    speed: 500,
    cssEase: 'linear',
    responsive: [
        {
            breakpoint: 1050,
            settings: {
                arrows: false
            }
        }
    ]
});

// header animation
var controller = new ScrollMagic.Controller();

$('.wbText').lettering();
var letters = $('.wbText span');
var tl = new TimelineMax({delay:.5});

tl.from('.initial', .75, {autoAlpha: 0, scale: 2.5, rotation: 180, ease: Back.easeOut})
.from('.header .icons', .75, {autoAlpha: 0, scale: 3, ease: Back.easeOut}, "-=.5")
.staggerFrom(letters, .25, {
  autoAlpha: 0,
  cycle: {
    x: function() {
      return Math.random() * 200;
    }
  },
  ease: Back.easeOut
}, .1);

var scene = new ScrollMagic.Scene({
    triggerElement: ".header", offset:0
}).setTween(tl).addTo(controller);

var heading = $('.portfolio h1');
var cards = $('.portfolio [class^="col"]');
var footer = $('footer ul li');
var tl2 = new TimelineMax();

tl2.from(heading, 1, {autoAlpha:0, scale:2}).
staggerFrom(cards, 1, {autoAlpha:0},.4).
staggerFrom(footer, 1, {delay: .5, autoAlpha:0, rotation:180, scale:1.5},.2);  
    
var scene2 = new ScrollMagic.Scene({
    triggerElement: ".portfolio", offset:0
}).setTween(tl2).addTo(controller);

});


    
        