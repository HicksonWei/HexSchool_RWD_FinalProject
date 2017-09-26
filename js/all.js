$(document).ready(function () {
    
    //滑動至斷點
    $('.p1').click(function (e) {
        e.preventDefault();
        let p1Target = $(this).attr('href');
        let p1TargetPos = $(p1Target).offset().top - 50;
        console.log(p1TargetPos);
        $('body').animate({ scrollTop: p1TargetPos }, 1000);
    });
    $('.p2').click(function (e) {
        e.preventDefault();
        let p2Target = $(this).attr('href');
        let p2TargetPos = $(p2Target).offset().top - 55;
        console.log(p2TargetPos);
        $('body').animate({ scrollTop: p2TargetPos }, 1000);
    });
    $('.p3').click(function (e) {
        e.preventDefault();
        let p3Target = $(this).attr('href');
        let p3TargetPos = $(p3Target).offset().top - 50;
        console.log(p3TargetPos);
        $('body').animate({ scrollTop: p3TargetPos }, 1000);
    });

    //menu彈出
    $('.logo').mouseenter(function () {
        var innerWidth = window.innerWidth;
        if(innerWidth <= 768){
            return;
        }else{
            $(this).addClass('animated rubberBand');
            $('.menu').fadeIn('slow');
        }
    });
    $('.navbar').mouseleave(function () {
        if(innerWidth <= 768){
            return;
        }else{
            $('.menu').fadeOut('slow');
            $('.logo').removeClass('animated rubberBand');
        }
    });

    //愛心
    $('.heart').click(function () {
        if ($(this).children().hasClass('fa-heart-o')) {
            $(this).children().removeClass('fa-heart-o');
            $(this).children().addClass('fa-heart');
        }
        else {
            $(this).children().removeClass('fa-heart');
            $(this).children().addClass('fa-heart-o');
        }

    });

    //購物車按鈕
    $('.add').click(function () {
        $(this).toggleClass('active');
        let countCheck = $('body .active').length;
        console.log(countCheck);
        if (countCheck > 0) {
            $('.total').show();
            $('.total span').empty().append(countCheck);
        }
        else {
            $('.total').hide();
        }
    });

    //購物車分類
    $('.aside li').mouseenter(function () {
        $(this).addClass('trigger');
    });
    $('.aside li').mouseleave(function () {
        $(this).removeClass('trigger');
    });
    $('.aside li').click(function () {
        $('.aside li').removeClass('on');
        $(this).addClass('on');
    });

    $('.all').hover(function () {
        $('.list li').removeClass('off');
    }, function () {
        $('.list li').removeClass('off');
    });
    $('.burger-link').hover(function () {
        $('.brunch').addClass('off');
        $('.other').addClass('off');
        $('.burger').removeClass('off');
    }, function () {
        $('.brunch').addClass('off');
        $('.other').addClass('off');
        $('.burger').removeClass('off');
    });
    $('.brunch-link').hover(function () {
        $('.burger').addClass('off');
        $('.other').addClass('off');
        $('.brunch').removeClass('off');
    }, function () {
        $('.burger').addClass('off');
        $('.other').addClass('off');
        $('.brunch').removeClass('off');
    });
    $('.other-link').hover(function () {
        $('.brunch').addClass('off');
        $('.burger').addClass('off');
        $('.other').removeClass('off');
    }, function () {
        $('.brunch').addClass('off');
        $('.burger').addClass('off');
        $('.other').removeClass('off');
    });

    //burger
    $('.rwd_menu').click(function(){
        $('.menu').toggleClass('pop animated bounceInLeft', 1000);
        $('.pop').show();
        if(innerWidth > 768){
            $('.pop').hide();
        }
    });

    //bottom_bar
    $('.item_burger').click(function () {
        $('.brunch').addClass('off');
        $('.other').addClass('off');
        $('.burger').removeClass('off');
        $('body').animate({scrollTop: 400}, 1000);
    });
    $('.item_brunch').click(function () {
        $('.burger').addClass('off');
        $('.other').addClass('off');
        $('.brunch').removeClass('off');
        $('body').animate({scrollTop: 400}, 1000);
    });
    $('.item_other').click(function () {
        $('.brunch').addClass('off');
        $('.burger').addClass('off');
        $('.other').removeClass('off');
        $('body').animate({scrollTop: 400}, 1000);
    });
    $('.item_search').click(function(){
        $('.item_input').toggleClass('open');
        $('.item_burger').toggleClass('disappear');
        $('.item_brunch').toggleClass('disappear');
        $('.item_other').toggleClass('disappear');
    });

    //停止連結
    $('.halt').click(function(e){
        e.preventDefault();
    });
   
});









