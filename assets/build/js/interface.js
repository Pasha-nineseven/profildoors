$(document).ready(function() {
	//menu-mobile
	$("body").on("click", ".js-menu-toggle", function(e){
		e.preventDefault();
		$(this).toggleClass('active');
		$('.menu-mobile').toggleClass('active');
	});
	$(document).click( function(e){
		var div = $( ".menu-toggle-view" );
		if ( !div.is(e.target)
		    && div.has(e.target).length === 0 ) {
			$('.menu-mobile').removeClass('active');
			$('.menu-toggle').removeClass('active');
		}
	});


	//index-top-slider
	if($('.home-slider').length>0){
		var slideCount = $('.slideCount');
		var slickSlide = $('.home-slider');
	
		slickSlide.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
			var i = (currentSlide ? currentSlide : 0) + 1;
			$(this).find('.slideCount').html('<span class="slideCountItem">' + i + '</span> ' + '/' + ' <span class="slideCountAll">' + slick.slideCount + '</span>');
		});
	
		slickSlide.slick({
			slide: '.home-slider__item',
			slideToShow: 1,
			fade: true,
			arrows:true,
			nextArrow: '.next-btn',
  			prevArrow: '.prev-btn'
		});
	}
	
	//gallery
	$(".js-gallery").fancybox({
        speed : 330,
        transitionEffect: "slide", 
        animationEffect: "zoom-in-out", 
        infobar: true,
        idleTime: true,
        toolbar  : true,
        image : {
            protect : true,
        },
    });

	//POPUP-INLINE
    $(".js-popup-inline").fancybox({
        speed : 330,
        transitionEffect: "slide", 
        animationEffect: "zoom-in-out", 
        infobar: true,
        idleTime: true,
        toolbar  : true,
    });

	//index-top-slider
	if($('.gallery-slider').length>0){
		var $g_slider = $('.gallery-slider');

	    $g_slider.slick({
			speed: 250,
			swipe: true,
			swipeToSlide: true,
			touchThreshold: 10,
			arrows:true,
			dots:false,
			useTransform:true,
			accessibility: false,
			infinite: true,
			slidesToShow: 1,
  			slidesToScroll: 1,
	    });
	}


	if($('.home-news__list').length>0){
		var $h_slider = $('.home-news__list');

	    $h_slider.slick({
			infinite: true,
			dots: false,
			arrows: true,
			slidesToShow: 3,
			slidesToScroll: 1,
			responsive: [
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					}
				},
			]
	    });
	}

	//tabs
	if($('#series-tabs').length>0){
		var $tabs = $('#series-tabs');
		$tabs.responsiveTabs({
			rotate: false,
			startCollapsed: 'accordion',
			collapsible: 'accordion',
			setHash: false,
		});
	}
	

	//video-play
	$("body").on("click", ".js-system-view__video", function(e){
		e.preventDefault();
		$(this).parents('.system-view').find('.videoPopUpBox').show();
		$(this).parents('.system-view').find('.video-js').trigger('play');
	});
	//video-close
	$("body").on("click", ".videoPopUpBox", function(e){
		e.preventDefault();
		$(this).hide();
		$(this).parents('.system-view').find('.video-js').trigger('pause');
	});

	//map
	if($('#page-map').length>0){
		ymaps.ready(function(){
			initMap1();
		});
	}

	//map-toggle
	$("body").on("click", ".js-b-where-map-toggle", function(e){
		e.preventDefault();
		$('.page-map').addClass('open');
	});
	$("body").on("click", ".js-b-where-map-close", function(e){
		e.preventDefault();
		$('.page-map').removeClass('open');
	});


	//select
	if($('.js-chosen').length>0){
		$('.js-chosen').chosen({
			width: '100%',
			no_results_text: 'Совпадений не найдено',
			placeholder_text_single: 'Любой'
		});
	};

	// form validate simple
	if($('.popup-form').length>0){
		var $pop = $('.m-dealer'),
			$content = $pop.find('.b-pop-content'),
			$form = $pop.find('form');

		$form.submit(function($e){
			$e.preventDefault();
			var bVerified = true;
			
			$form.find('.popup-form__item.required').each(function(){
				var $binp = $(this),
					$inp = $binp.find('input');
				
				if(!$inp.val().length){
					bVerified = false;
					$binp.addClass('m-error');
				} else $binp.removeClass('m-error');
			});
			
			if(bVerified){
				$content.removeClass('m-hidden');
				$form.hide();
				// $.ajax({
				// 	type: 'GET',
				//  url: url,
				// 	data: $form.serialize() + '&send=ok',
				// 	dataType: 'html',
				// 	success: function(result){
				// 		$content.html(result);
				// 	}
				// });
			}
		});
	}



	//home-news-mobile
	// slider_news_init();
	slider_doors_init();
	slider_other_init();
});

$(window).resize(function () {
	//home-news-mobile
	// slider_news_init();
	slider_doors_init();
	slider_other_init();
});

// functions
function slider_news_init(){
	var $s_news = $('.home-news__list');
	if ($(window).width() < 753) {
		$s_news.not('.slick-initialized').slick({
			infinite: true,
			dots: false,
			arrows: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			responsive: [
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					}
				},
			]
		});
	} else {
		if ($s_news.hasClass('slick-initialized')) {
			$s_news.slick("unslick");
		}
	}
}


function slider_doors_init(){
	var $s_doors = $('.home-doors__list');
	if ($(window).width() < 753) {
		$s_doors.not('.slick-initialized').slick({
			infinite: true,
			dots: false,
			arrows: true,
			slidesToShow: 5,
			slidesToScroll: 1,
			responsive: [
				{
					breakpoint: 700,
					settings: {
						slidesToShow: 4,
						slidesToScroll: 1,
					}
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 1,
					}
				},
			]
		});
	} else {
		if ($s_doors.hasClass('slick-initialized')) {
			$s_doors.slick("unslick");
		}
	}
}

function slider_other_init(){
	var $s_other = $('.series__in__list');
	if ($(window).width() < 753) {
		$s_other.not('.slick-initialized').slick({
			infinite: true,
			dots: false,
			arrows: true,
			slidesToShow: 3,
			slidesToScroll: 1,
			responsive: [
				{
					breakpoint: 700,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
					}
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
					}
				},
			]
		});
	} else {
		if ($s_other.hasClass('slick-initialized')) {
			$s_other.slick("unslick");
		}
	}
}

function initMap1() {
	var myMap = new ymaps.Map("page-map", {
        center:[53.9324054,27.6511743],
        zoom: 7,
        controls: []
    }); 
            
    var myPlacemark = new ymaps.Placemark([53.9324054,27.6511743],{
        	
        },{
        iconLayout: 'default#image',
	});    

    myMap.geoObjects.add(myPlacemark);
	myMap.controls.add(new ymaps.control.ZoomControl({options: { position: { right: 10, top: 50 }}}));
    myMap.behaviors.disable('scrollZoom')  
}


$(function() {
	$('.tabs-nav__item').click(function(e) {
		e.preventDefault();

		$('.tabs-nav__item').removeClass('active');
		$(this).addClass('active');

		//active tab
		let currentTab = $(this).attr('href');
		$('.tabs-content__item').hide();
		$(currentTab).show();

	});
});