$(document).ready(function () {
    $('.e_sumo').SumoSelect({
        TriggerChangeCombined: true,
        forceCustomRendering: true,
        placeholder: '지역'
    });

    // .SumoSelect 요소 선택
    var sumoSelect = $(".SumoSelect");

    // 페이지 로드 시 초기 검사
    var selectedOptionText = sumoSelect.find(".options li.opt  label").text();
    if (selectedOptionText !== "지역") {
        $(this).addClass('dd')
    }


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
