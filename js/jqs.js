/** @format */
// fade of camera down --
$(window).on("load", function () {
  $(window)
    .scroll(function () {
      var windowBottom = $(this).scrollTop() + $(this).innerHeight();
      $(".hidelement").each(function () {
        var objectBottom = $(this).offset().top + $(this).outerHeight();
        if (objectBottom < windowBottom) {
          if ($(this).css("opacity") == 0) {
            $(this).fadeTo(500, 1);
          }
        } else {
          if ($(this).css("opacity") == 1) {
            $(this).fadeTo(500, 0);
          }
        }
      });
    })
    .scroll(); //invoke scroll-handler on page-load
});
// gallery function
// $(function () {
//   var selectedClass = "";
//   $(".filter").click(function () {
//     selectedClass = $(this).attr("data-rel");
//     if ((selectedClass = 4)) {
//       $(".all").show("slow");
//     } else if ((selectedClass = 3)) {
//       $(".pro1,.pro2").hide("slow");
//     } else if ((selectedClass = 2)) {
//       $(".pro2,.pro3").hide("slow");
//     } else {
//       $(".pro1,.pro3").hide("slow");
//     }
//   });
// });
// gallery filter down --
$(document).ready(function () {
  $(".all-filter").click(function () {
    $(".all").show("slow");
  });
});
$(document).ready(function () {
  $(".filter-pro").click(function () {
    $("#pro").toggleClass("text-info");
    $("#new,#all,#free").removeClass("text-info");
    $(".all").show("slow");
    $(".pro").fadeOut("slow");
  });
});
$(document).ready(function () {
  $(".filter-new").click(function () {
    $("#new").toggleClass("text-info");
    $("#free,#pro,#all").removeClass("text-info");
    $(".all").show("slow");
    $(".new").hide("slow");
  });
});
$(document).ready(function () {
  $(".filter-free").click(function () {
    $("#free").toggleClass("text-info");
    $("#all,#pro,#new").removeClass("text-info");
    $(".all").show("slow");
    $(".free").fadeOut("slow");
  });
});
// services scroll item scripts --

$(window).on("load", function () {
  $(window)
    .scroll(function () {
		var hT = $('#scroll-to').offset().top,
		hH = $('#scroll-to').outerHeight(),
		wH = $(window).height(),
		wS = $(this).scrollTop();
	if (wS > (hT+hH-wH)){
		 $(".animate-right").css("right", "80px");
		//  $(".animate-right").animate({right: '80px'})
		 $(".animate-left").css("left", "80px");
		 //$(".animate-left").animate({left: '80px'})

	}else {
		$(".animate-right").css("right", "10px");
		// $(".animate-right").animate({right: '10px'})
		 $(".animate-left").css("left", "10px");
		// $(".animate-left").animate({left: '10px'})
	}
     

    })
  
});