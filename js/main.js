$(document).ready(function(){
   $(".load").fadeOut()
   
   $(".loader-2").delay(1000).animate({
      "top":"100%"
   },1000)
   $(".loader").delay(1000).animate({
      "top":"-100%"
   },1200)
})


$(document).ready(function(){
          var sec = $('.media a, .logo-img p');
          var divs = $('.mini-cont');
            $(window).scroll(function(){
              if ( $(window).scrollTop() > 10 ) {
              $(".mini-cont").addClass("scale");
          } else {
              $(".mini-cont").removeClass("scale");
          }
            var percent = $(document).scrollTop() * 50 / ($(document).height() -   $(window).height());
            var paddingPercent = $(document).scrollTop() * 20/ ($(document).height() -   $(window).height());
            var headerPercent = $(document).scrollTop() / ($(document).height() -   $(window).height());
          divs.css('opacity', 1 - percent);
         
          // home text animation
          


             if($(window).scrollTop()<620 || $(window).scrollTop() > 1310){
                   sec.css("color","#000");
             } else {
                   
                   sec.css("color","#fff");
             }
              
      });
});


$(window).on("load",function() {
    function fade() {
        var animation_height = $(window).innerHeight() * 0.25;
        var ratio = Math.round( (1 / animation_height) * 10000 ) / 10000;

        $('.fade').each(function() {
            
            var objectTop = $(this).offset().top;
            var windowBottom = $(window).scrollTop() * 0.9 + $(window).innerHeight();
            
            if ( objectTop < windowBottom ) {
                if ( objectTop < windowBottom - animation_height ) {
                   
                    $(this).css( {
                        transition: 'opacity 0.1s easeInOut',
                        opacity: 1
                    } );

                } else {
                   
                    $(this).css( {
                        transition: 'opacity 0.25s easeInOut',
                        opacity: (windowBottom - objectTop) * ratio
                    } );
                }
            } else {
               
                $(this).css( 'opacity', 0 );
            }
        });
    }
    $('.fade').css( 'opacity', 0 );
    fade();
    $(window).scroll(function() {fade();});
});