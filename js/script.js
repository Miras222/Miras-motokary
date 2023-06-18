(function($){
    $(function(){
        
        /******* Scroll navigation items to sections ***********/
        $(".jq--scroll-our-service").click(function(){
            $("html, body").animate({scrollTop: $(".jq--our-service").offset().top}, 1000);
        });
        
        $(".jq--scroll-photo-gallery").click(function(){
            $("html, body").animate({scrollTop: $(".jq--photo-gallery").offset().top}, 1000);
        });
        
        $(".jq--scroll-cost").click(function(){
            $("html, body").animate({scrollTop: $(".jq--cost").offset().top}, 1300);
        });
        
        $(".jq--scroll-voucher").click(function(){
            $("html, body").animate({scrollTop: $(".jq--voucher").offset().top}, 1500);
        });
        
        $(".jq--scroll-reference").click(function(){
            $("html, body").animate({scrollTop: $(".jq--reference").offset().top}, 1700);
        });
        
        $(".jq--scroll-contact").click(function(){
            $("html, body").animate({scrollTop: $(".jq--contact").offset().top}, 1900);
        });
        
        /****** Scroll buttons to sections ********/

        $(".jq--scroll-first-btn").click(function(){
            $("html, body").animate({scrollTop: $(".jq--photo-gallery").offset().top}, 1000);
        });
        
        $(".jq--scroll-second-btn").click(function(){
            $("html, body").animate({scrollTop: $(".jq--contact").offset().top}, 1700);
        });
        

        /***** Mobile navigation ******/

        $(".jq--nav-icon").click(function(){
            
            $(".navbar-bg").fadeToggle();
            $(".mobile-nav-back").slideToggle();
            $("nav ul").slideToggle();
            
        });
        
        $(".jq--image-hamburger").click(function(){
            
        if($(".jq--image-hamburger").attr("src") == "img/hamburgerMenu.png")
        {
            $( $(".jq--image-hamburger").attr("src","img/crossMenu.png"));
        }
        else
        {
            $($(".jq--image-hamburger").attr("src","img/hamburgerMenu.png"));
        }
            
        });
    });
})(jQuery);