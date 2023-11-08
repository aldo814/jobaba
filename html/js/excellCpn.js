$(document).ready(function () {
    $('.e_sumo').SumoSelect({
        TriggerChangeCombined: true,
        forceCustomRendering: true,
        placeholder: '지역',
        //selectAll: true 전체선택
    });

    if ($('.opt').hasClass('selected')) {
        // 'CaptionCont' 요소에 'addClass' 클래스를 추가
        $('.CaptionCont').addClass('on');
    } else{
         $('.CaptionCont').removeClass('on');
    }

    $('.ee_search .SumoSelect').click(function(){
           if ($('.opt').hasClass('selected')) {
        // 'CaptionCont' 요소에 'addClass' 클래스를 추가
        $('.CaptionCont').addClass('on');
    } else{
        $('.CaptionCont').removeClass('on');
    }

    });



    $('.ei_wrap .item a').click(function (e) {
        var activeTab = $(this).attr("rel");
        $('.ei_more > .item').not("#" + activeTab).hide();
        $('.ei_more > .item').not("#" + activeTab).removeClass('show');
        $("#" + activeTab).fadeIn();
        $("#" + activeTab).addClass('show');
        $('.appGo').css('display', 'flex');
    });

    $('.ei_more .close_btn').click(function () {
        $(this).parent().hide();
        $('.appGo').hide()
    });
    var ww = $(window).width();
    var guideSlide = undefined;

    function initSwiper() {
        if (ww < 768 && guideSlide == undefined) {
            guideSlide = $('.eg_wrap').slick({
                slidesToShow: 3,
                dots: true
            });
        } else if (ww >= 768 && guideSlide != undefined) {
            guideSlide.slick('unslick');
            guideSlide = undefined;
        }
    }
    initSwiper();

    if (ww < 1024) {
        $('.ec_intro').addClass('mB');
    } else {
        $('.ec_intro').removeClass('mB');
    }

    $(window).on('resize', function () {
        ww = $(window).width();
        initSwiper();

        if (ww < 1024) {
            $('.ec_intro').addClass('mB');
        } else {
            $('.ec_intro').removeClass('mB');
        }
    });
})
