$(document).ready(function(){
	var gnbOffset = $('#gnb-wrap').offset();
	var dw = $(document).width();
	if(dw > 767){
		$(window).scroll(function(){
			if( $(document).scrollTop() > gnbOffset.top ){
				$('#gnb-wrap').addClass('fixed-gnb');
			} else {
				  $('#gnb-wrap').removeClass('fixed-gnb');
			}

			//$('.go_menu, .search_menu, .all_menu, .page_msk').hide();
			$('.hb_menu').toggleClass('change');
		});
	}
	//var dw = $(document).width();
	$('.hb_menu').click(function(){
		$(this).toggleClass('change');
		if(dw <= 767){
			//console.log('mobile');
			$('.gnb-inner-wrap.gnb_wrapper').toggleClass('show');
			//$('.all_menu').show();
		} else {
			//console.log('pc');
			if($(this).hasClass('change')  == false ){
				$('.go_menu').hide();
			} else {
				//$('.go_menu, .search_menu, .all_menu').hide();
				$('.go_menu').show();
			}
		}
	});

    $('#gnb-wrap .scrollable.gnb, .gnb-inner-wrap.gnb_wrapper').on('mouseenter', function(){
        $('.gnb-inner-wrap.gnb_wrapper').show();
		$('.noti_list').trigger('resize');
    });

    $('#gnb-wrap .scrollable.gnb, .gnb-inner-wrap.gnb_wrapper').on('mouseleave', function(){
        $('.gnb-inner-wrap.gnb_wrapper').hide();
		$('.scrollable.gnb a').removeClass('current');
    });

    $('#gnb-wrap .search-bar').on('click', function(){
        $('.modal_search_wrapper').show();
    });

	$('.modal_search_wrapper .btn_search_close').on('click', function(){
        $('.modal_search_wrapper').hide();
    });

	$('.m_all_header .m_btn').click(function(){
		$('.hb_menu').toggleClass('change');
		$('.gnb-inner-wrap.gnb_wrapper').toggleClass('show');
		//$('.all_menu').hide();
	});

	$('.gnb-inner-wrap .all_menu > div a').on('mouseenter', function(){
		cnt = $(this).parent('div').index();
		current = cnt+1;
		$('.scrollable.gnb a').removeClass('current');
		$('.scrollable.gnb a:nth-child('+ current +')').addClass('current');
	});

	$('.scrollable.gnb a').on('mouseenter', function(){
		$('.scrollable.gnb a').removeClass('current');
		$(this).addClass('current');
	});
	

/*
	$('.search-bar .dummy_search').click(function(){
		if(dw <= 767){
			//console.log('mobile');
			//$('.search-bar').addClass('bkshow');
			//$('#gnb-wrap').addClass('bkshow');
			$('.gnb-inner-wrap.search_wrapper').addClass('show');
			//$('.go_menu, .search_menu, .all_menu').hide();
			$('.search_menu').show();
			$('.search_menu input[type="text"]').focus();
		} else {
			//console.log('pc');
			$('.go_menu, .search_menu, .all_menu').hide();
			$('.search_menu').show();
			$('.search_menu input[type="text"]').focus();
		}
	});

	$('.search-bar .btn_back').click(function(){
		//$('.search-bar').removeClass('bkshow');
		//$('#gnb-wrap').removeClass('bkshow');
		$('.gnb-inner-wrap').removeClass('show');
	});

	$('.search_menu .btn_search_close').click(function(){
		if(dw <= 767){
			$('.gnb-inner-wrap.search_wrapper').removeClass('show');
			$('.search_menu').hide();
		}else{
			$('.search_menu').hide();
		}
	});

	$('.go_menu .btn_search_close').click(function(){
		$('.go_menu, .search_menu, .all_menu, .page_msk').hide();
		$('.hb_menu').removeClass('change');
	});
*/
/*
	$('.gnb, .all_menu').mouseenter(function(){
		$('.page_msk').show();
		$('.go_menu, .search_menu, .all_menu').hide();
		$('.all_menu').show();
	});

	$('.gnb, .all_menu').mouseleave(function(){
		$('.page_msk').hide();
		$('.go_menu, .search_menu, .all_menu').hide();
	});
/*

	$('.goto_wrap, .receipt_system').mouseenter(function(){
		if($("#gnb-wrap").hasClass("fixed-gnb")){
			//console.log('in');
			$('.receipt_system').show();
		}
	});
	
	$('.goto_wrap, .receipt_system').mouseleave(function(){
		//console.log('out');
		$('.receipt_system').hide();
	});


	//
	/*$("#gnb-wrap").hashClass("fixed-gnb");
	$('.receipt_system').mouseenter(function(){
		console.log('in');
		$('.receipt_system').show();
	});
	$(' .receipt_system').mouseleave(function(){
		console.log('out');
		$('.receipt_system').hide();
	});*/
	//

	// images 苑� 梨꾩슦湲�
	$(".imgLiquid").imgLiquid();

	// 紐⑤컮�� �섎떒 怨좎젙 硫붾돱 愿���
	var didScroll;
	var lastScrollTop = 0;
	var delta = 5;
	var navbarHeight = $('.m_bottom_fixed').outerHeight();

	$(window).scroll(function(event){
		didScroll = true;
	});

	setInterval(function() {
		if (didScroll) {
			hasScrolled();
			didScroll = false;
		}
	}, 250);

	function hasScrolled() {
		var st = $(this).scrollTop();
		if(Math.abs(lastScrollTop - st) <= delta) return;
		if (st > lastScrollTop && st > navbarHeight){
			$('.m_bottom_fixed').removeClass('show');
		} else {
			if(st + $(window).height() < $(document).height()) {
				$('.m_bottom_fixed').addClass('show');
			}
		}
		lastScrollTop = st;
	}

	$('.m_bottom_fixed li').click(function(){
		$('.m_bottom_fixed li').removeClass('active');
		$(this).addClass('active');
	});

	var posY;
	$('.m_bottom_fixed li .more').click(function(){
		posY = $(window).scrollTop();
		$("html, body").toggleClass('not_scroll');
		$('.shadow').toggle();
		$('.fav_menu').toggleClass('show');
		$(window).scrollTop(posY);
	});
	$('.m_bottom_fixed li .last').click(function(){
		posY = $(window).scrollTop();
		$("html, body").toggleClass('not_scroll');
		$('.shadow').toggle();
		$('.last_view').toggleClass('show');
//		$('.last_view .thumb').imgLiquid();
		$(window).scrollTop(posY);
	});
	$('.bott_close').click(function(){
		$("html, body").removeClass('not_scroll');
		$('.shadow').hide();
		$('.fav_menu, .last_view').removeClass('show');
		$(window).scrollTop(posY);
	});
	$('.last_view .tit').click(function(){
		$('.last_view').toggleClass('open');
//		$('.last_view .thumb').imgLiquid();
	});
	$('.goto_top').click(function(){
/*		$(window).scrollTop(0);*/
		$('html, body').stop().animate({scrollTop: 0}, 0);
	});

	$('.video_work .more_btn').click(function(){
		$(this).hide();
		$('.video_work li.more_vid').show();
	});

	$('.nsc_area .more_btn').click(function(){
		$(this).parent().hide();
		$(this).parent().siblings().children(".more_vid").addClass("on");
	});

	// �щ씪�대뱶 Setting
	var main_bnr = new Swiper('.main_bnr', {
		slidesPerView: 'auto',
		centeredSlides: true,
		spaceBetween: 0,
		autoplay: {
			delay: 5000
		},
		loop: true,
		pagination: {
			el: '.swiper-pagination',
			type: 'fraction'
		},
		navigation: {
	        nextEl: '.swiper-button-next',
	        prevEl: '.swiper-button-prev',
	    },
	    breakpoints: {
			 767: {
				spaceBetween: 10,
				loop: false,
				pagination: {
					el: null,
				},
				scrollbar: {
			        el: '.swiper-scrollbar',
			    },
			 },
			 1024: {

			 }
	    }
	});

	main_bnr.on('slideChange', function(){
		var current = $('.main_bnr .swiper-slide-next').attr('data-swiper-slide-index');
		//console.log(current);
		$('.bnr_tit li').removeClass('active');
		$('.bnr_tit li').each(function(){
			$('.bnr_tit li').eq(current).addClass('active');
		})
	});

	$('.bnr_tit li').mouseenter(function(){
		main_bnr.autoplay.stop();
		idx = $(this).index();
		main_bnr.slideTo(idx);
		$('.bnr_tit li').removeClass('active');
		$(this).addClass('active');
	});
	$('.bnr_tit li').mouseleave(function(){
		main_bnr.autoplay.start();
	});
	$('.box_dummy.left').click(function(){
		main_bnr.slidePrev();
	});
	$('.box_dummy.right').click(function(){
		main_bnr.slideNext();
	});
	$('#main_bnr .swiper-button-play').click(function(){
		$('#main_bnr .swiper-button-play').hide();
		$('#main_bnr .swiper-button-pause').show();
		main_bnr.autoplay.start();
	});
	$('#main_bnr .swiper-button-pause').click(function(){
		$('#main_bnr .swiper-button-play').show();
		$('#main_bnr .swiper-button-pause').hide();
		main_bnr.autoplay.stop();
	});

	var scean_slide = new Swiper('.scean_slide', {
		slidesPerView: 'auto',
		grabCursor: true,
		scrollbar: {
	        el: '.swiper-scrollbar',
	      }
	});

	var m_list_bnr = new Swiper('.m_list_bnr', {
		slidesPerView: 1,
		loop: true,
		autoplay: {
			delay: 5000
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true
		},
	});

	var wc_slider = new Swiper('.wc_slider', {
		slidesPerView: 5,
		slidesPerColumn: 2,
		spaceBetween: 12,
		scrollbar: {
	        el: '.swiper-scrollbar',
	      },
	      breakpoints: {
				 767: {
					slidesPerView: 2,
					slidesPerColumn: 2,
					spaceBetween: 10,
				 },
				 1024: {

				 }
			 }
	});

	$(window).on('load resize', function(){
		//console.log(dw);
		if(dw < 420){
			var mp_list = new Swiper('.mp_list', {
				slidesPerView: 1,
				slidesPerColumn: 2,
				slidesPerGroup: 1,
				spaceBetween: 0,
				loop: false,
				pagination: {
					el: '.swiper-pagination',
					clickable: true
				}
		    });
		} else {
		}
	});

//	$('.quick').fixedsticky();

	// Tab
	$('.quick.mobile li').click(function(){
		$('.quick.mobile li').removeClass('on');
		$(this).addClass('on');
		var tabId =$(this).attr('data-tab');
		$('.recent_work .note').hide();
		$('.recent_work .note.'+tabId).show();
	});

	$('.setup_btn').click(function(){
		//alert(1);
		$('.list_setup_shadow').show();
		$('.contents-wrap .list-wrap .category-wrap').addClass('show');
	});
	$('.list_setup_shadow').click(function(){
		$('.list_setup_shadow').hide();
		$('.contents-wrap .list-wrap .category-wrap').removeClass('show');
	});

	$('.recent_work .more_btn').click(function(){
		$(this).hide();
		$('.recent_work .bottom_area').show();
	});

});

//modal �앹뾽 �먮룞 �믪씠
$(document).ready(function(){
	$(".modal .modal-body").css('max-height', $(window).height() -180 );
	$(window).resize(function() {
		$(".modal .modal-body").css('max-height', $(window).height() -180 );
	});
});