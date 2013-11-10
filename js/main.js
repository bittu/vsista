$(document).ready(function() {
	$("body").queryLoader2({
        barColor: "#ed4e6e",
        backgroundColor: "#fff1b0",
        percentage: false,
        barHeight: 50,
        completeAnimation: "grow",
        minimumTime: 500,
		onComplete: function() {
			$("#effect1").textEffect();
		}
    });
	
	$("#effect1").on("texteffectend", function() {
		$("#effect2").textEffect();
	});
	$("#effect2").on("texteffectend", function() {
		$("#effect3").textEffect();
	});
	$("#effect3").on("texteffectend", function() {
		$("#effect4").textEffect();
	});
	$("#effect4").on("texteffectend", function() {
		$("#effect5").textEffect();
	});
	$("#effect5").on("texteffectend", function() {
		$("#effect6").textEffect();
	});
	
	$(".openseseme").on("click", function() {
		$(".wishes-overlay").animate({
			top: "-100%"
		}, {
			duration: 1000,
			easing: "easeInOutQuint",
			complete: function() {
				$(".wishes-overlay").remove();
			}
		});
	});
	
	timerid = setInterval(slider, 5000);
	
	/*var isOn = 0,
            sets, fx, toAnimate = "#effect1",
            settings = {
                animation: 8,
                animationType: "in",
                backwards: !1,
                easing: "easeOutQuint",
                speed: 1E3,
				color: "#FFF",
                sequenceDelay: 100,
                startDelay: 0,
                offsetX: 100,
                offsetY: 50,
                onComplete: fireThis,
                restoreHTML: !0
            };
        jQuery(document).ready(function () {
            fx = jQuery("#effect");
            jQuery.cjTextFx(settings);
            jQuery.cjTextFx.animate(toAnimate)
        });

        function fireThis() {
            if (isOn !== 5) {
                isOn < 5 ? isOn++ : isOn = 0;
                switch (isOn) {
                case 1:
                    toAnimate = "#effect2";
                    sets = {
                        animation: 11
                    };
                    break;
                case 2:
                    toAnimate = "#effect3";
                    sets = {
                        animation: 1
                    };
                    break;
                case 3:
                    toAnimate = "#effect4";
                    sets = {
                        animation: 6,
                        backwards: !0
                    };
                    break;
				case 4:
                    toAnimate = "#effect5";
                    sets = {
                        animation: 2,
                        easing: "easeOutBounce"
                    };
                    break;
				case 5:
                    toAnimate = "#effect6", sets = {
                        animation: 14,
                        startDelay: 1E3,
                        linked: !0,
                        hyperlink: "generator.html",
                        color: "#0000FF",
                        linkTarget: "_self",
                        onComplete: null
                    }
                }
                jQuery.cjTextFx.animate(toAnimate, sets)
            }
        };*/
		
		
});

var slides = $(".txtslider li");
var timer = 0;

function slider() {
	
		if(timer > slides.length-1)
			timer = 0;
			
		var $slide = $(slides[timer++]);
		var title = $slide.find("span.title");
		var caption = $slide.find("span.caption");
		
		txtAnimate(title, caption);
	
}

function txtAnimate(title, caption) {
	
	$(".txtslider").find("span.title.show").removeClass("show").animate({
		opacity : 0,
		left: '-100%',
		top: 0
	}, {
		duration: 500,
			easing: 'easeOutBounce',
			complete : function() {
				$(".txtslider").find("span.caption.show").removeClass("show").animate({
					opacity : 0,
					left: "-100%",
					bottom: 0
					}, {
					duration: 500,
					easing: 'easeOutBounce',
					complete : function() {
						
					}
				});
			}
		});
	
	title.addClass("show").animate({
		opacity : 0.8,
		left: '5%',
		top: '0'
	}, {
		duration: 500,
		easing: 'easeOutBack',
		complete : function() {
			caption.addClass("show").animate({
				opacity : 0.7,
				left: "0",
				bottom: "20%"
				}, {
				duration: 500,
				easing: 'easeOutBack',
				complete : function() {
					
				}
			});
		}
	});
}


