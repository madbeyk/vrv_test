import $ from 'jquery';
import 'what-input';

// Foundation JS relies on a global varaible. In ES6, all imports are hoisted
// to the top of the file so if we used`import` to import Foundation,
// it would execute earlier than we have assigned the global variable.
// This is why we have to use CommonJS require() here since it doesn't
// have the hoisting behavior.
window.jQuery = $;
require('foundation-sites');

// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';


$(document).foundation();
Foundation.DropdownMenu.defaults.closingTime = 600;
Foundation.DropdownMenu.defaults.hoverDelay = 300;

  $('.dropdown').on('show.zf.dropdown', function (ev, $el) {
    //console.log('dropdown show ...');
    $el.css({
      "display": "none"
    })
			.slideDown(300);
  });

  $('.dropdown').on('hide.zf.dropdown', function (ev, $el) {
    //console.log('dropdown hide ...');
    $el.children(".dropdown-pane")
    .css('display', 'inherit')
		.slideUp(600);
  });


$(document).ready(function() {
  var width = $(window).width();
  if (width<560) $('#nazevfirmy').removeClass('big');
  Foundation.Motion.animateIn('#logo', 'scale-in-up');
  Foundation.Motion.animateIn('#topmenu', 'fade-in slow');
  Foundation.Motion.animateIn('#slider', 'fade-in slow');
  Foundation.Motion.animateIn('#intro', 'fade-in slow');
  $(".anim-scale-in-down").each(function () {Foundation.Motion.animateIn(this, 'scale-in-down bounce-in');});
  $(".anim-hinge").each(function () {Foundation.Motion.animateIn(this, 'hinge-in-from-top slow');});
  $(".anim-right").each(function () {Foundation.Motion.animateIn(this, 'slide-in-right');});

	$(window).scroll(function() {
		var scroll = $(window).scrollTop();
    //console.log('scroll :'+scroll);

		if (scroll >= 20) {
      $('#logo').addClass('small');
      $('#top-bar').addClass('small');
      $('#right-menu').addClass('small');
      $("li.mega-menu").each(function () {$(this).addClass('small');});
      $('#nazevfirmy.big').fadeOut('quick');
		} else {
      $('#logo').removeClass('small');
      $('#top-bar').removeClass('small');
      $('#right-menu').removeClass('small');
      $("li.mega-menu").each(function () {$(this).removeClass('small');});
      $('#nazevfirmy.big').fadeIn('quick');
		}
	}).resize(function(){
    var width = $(window).width();
    if (width<560) $('#nazevfirmy').removeClass('big');
    if (width>=560) $('#nazevfirmy').addClass('big');
    console.log('resize ...');
	});

  var opened=false;
  
  $("button.menuicon").on("click", function () {
    if (opened==true) {
      console.log("menu zavrit");
      //$(this).parent().removeClass("opened");
      opened=false;
      $(this).fadeOut(20).html('<i class="fa fa-bars" aria-hidden="true"></i>').fadeIn(250);
      $('#responsive-menu').fadeOut(250);
      
    } else {
      console.log("menu otevrit");
      //$(this).parent().addClass("opened");
      opened=true;
      $(this).fadeOut(20).html('<i class="fa fa-times" aria-hidden="true"></i>').fadeIn(250);
      $('#responsive-menu').fadeIn(250);
    }
  });      
	
  $("#searchbut").on("click", function () {
      console.log("serchbut click");
      var vis=$("#search").hasClass('visible');
      if (vis==true) {
        $("#search").removeClass('visible');
        } else {
        $("#search").addClass('visible');
        $("#search").focus();
        }
      });

      $('#slick').slick({
        slidesToShow:4,
        pauseOnHover:true,
        centerMode:false,
        autoplaySpeed: 5000,
        centerPadding:'1%',
        autoplay:true,
        mobileFirst:true,
        dots: false,
        slidesToScroll: 1,
        arrows:false,
        responsive: [
          {
            breakpoint: 1360,
            settings: {
              slidesToShow: 4,
            }
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
            }
          },
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 0,
            settings: {
              slidesToShow: 1,
            }
          }
          ]

        });
	


// Default setting



  });
  

    