/* eslint-disable */

$(function() {

    /* GNB 메뉴 */
    $("ul#mainMenu>li").mouseover(function() {
        $(".subMenu").stop().fadeIn(300);
        $("#gnbBGarea").stop().fadeIn(300);
    });
    $("ul#mainMenu>li").mouseout(function() {
        $(".subMenu").stop().fadeOut(300);
        $("#gnbBGarea").stop().fadeOut(300);
    });
    /* GNB 메뉴 */


    /* 슬라이드 */
    setInterval(fnSlide, 3000);

    function fnSlide () {
        $("#slideImg").animate({"margin-left":"-1200px"},
        1000,
        "swing",
        function() {
            $("#slideImg>a:first-child").insertAfter("#slideImg>a:last-child");
            $("#slideImg").css({"margin":"0"});
        });
    }
    /* 슬라이드 */


    /* 모달 레이어팝업 */
    $(".contents").click(function() {
        $("#modal").css({"display":"block"});
    });
    $("#layer>button").click(function() {
        $("#modal").css({"display":"none"});
    });
    /* 모달 레이어팝업 */
});
