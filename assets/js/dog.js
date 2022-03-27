$(function() {
    container();
});


$(window).resize(function() {
    container();
});

function container() {

    var gNum = 0; //組數的初始值
    var dX = 0; //水平座標位置
    var divWidth = $(".container").width(); //外層寬度
    var ulNum; //為總組數
    var liLength = $(".container .dog_box li").length;
    var ulWidth;
    var liWidth;

    if ($(window).width() < 768) {
        liWidth = divWidth;
        ulNum = liLength;
    } else {
        liWidth = divWidth / 2;
        ulNum = liLength / 2;
    }

    $(".container .dog_box li").css("width", liWidth);

    ulWidth = liWidth * liLength; //ul的寬度

    $(".container ul").css("width", ulWidth);

    if (ulNum <= 1) {
        $(".right_btn").hide();
        $(".left_btn").hide();
    } else {
        $(".right_btn").show();
        $(".left_btn").show();


    }

    leftAnimate();


    function leftAnimate() {
        $(".container ul").stop().animate({ "left": dX }, 700);

    }


    $(".right_btn").click(function() {
        if (gNum < ulNum - 1) {
            gNum++;
            dX = gNum * divWidth * -1;
        } else {
            gNum = 0;
            dX = 0;
        }
        leftAnimate();

    });

    $(".left_btn").click(function() {
        if (gNum > 0) {
            gNum--;
            dX = gNum * divWidth * -1;
        }
        leftAnimate();

    });

}