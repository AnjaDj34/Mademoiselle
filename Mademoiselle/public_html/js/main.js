

$(document).ready(function(){
    
    //ANIMATION
    function animation() {
        let  windowHeight = $(window).height();
        let scroll = $(window).scrollTop();
        $('.animation').each(function () {
            let position = $(this).offset().top;
            let animationName = $(this).attr('data-animation');
            let delay = $(this).attr('data-delay');

            if (position < windowHeight + scroll - 100) {
                $(this).addClass(animationName);
                $(this).css('animation-delay', delay);
            }
        });
    }


    $(window).scroll(function () {
        animation();
    });
    animation();

    if($('.professional-slider').length > 0){
        $(".professional-slider").owlCarousel({
            
            loop:true,
            autoplay:true,
            staggePadding:0,
             responsive:{
                0:{
                    items:1,
                    margin:0
                }
            }
            
           });
    }
   
    
    
});

