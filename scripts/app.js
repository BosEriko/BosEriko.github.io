$(function(){
    /* Tooltip Enable Start */
    $('[data-toggle="tooltip"]').tooltip();
    /* Tooltip Enable End */

    /* Smooth Scroll Start */
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
    /* Smooth Scroll End */

    /* Welcome Screen Parallax Scrolling Start */
    function parallaxBackgroundSize(){
        var viewWidth = $(window).width();
        var viewHeight = $(window).height();
        if(viewWidth >= viewHeight){
            $(".welcome-screen").css("background-size","100% auto");
        }else{
            $(".welcome-screen").css("background-size","auto 100%");
        }
    }
    parallaxBackgroundSize();
    $(window).resize(function(){
        parallaxBackgroundSize();
    });
    $(window).scroll(function(){
        var windowScroll = $(this).scrollTop();
        var limit = $(window).height();
        var headerHeight = $("header").outerHeight();
        var headerScrollNum = limit - headerHeight;
        $(".welcome-screen").css("background-position", "center -" + (windowScroll / 3) + "px");
        if(windowScroll <= limit) {
            $(".welcome-screen-text").css("opacity" , 1 - windowScroll / limit);
        }
        $(".welcome-screen > .filter").css("margin-top", (windowScroll / 2) + "px");
        if(headerScrollNum <= windowScroll){
            $("header").addClass("fixed");
        }else{
            $("header").removeClass("fixed");
        }
    });
    /* Welcome Screen Parallax Scrolling End */

    /* Navigation Menu Toggle Start */
    $('.logo-and-nav-button .nav-button a').click(function(e){
        $("nav.main ul").slideToggle();
        e.preventDefault();
    });
    /* Navigation Menu Toggle End */

    /* Active Class on Menu Start */
    function activeClassFunc(){
        var welcomeScreenActivator = $(".welcome-screen").height();
        var aboutMeActivator = welcomeScreenActivator + $("#about-me").height();
        var behanceActivator = aboutMeActivator + $("#behance").height();
        var dribbbleActivator = behanceActivator + $("#dribbble").height();
        var codepenActivator = dribbbleActivator + $("#codepen").height();
        var heightActivator = $(window).height() - ($(window).height()*.9);
        var limitActivator = $(this).scrollTop();
        if((codepenActivator - heightActivator) < limitActivator){
            /* GitHub Code */
            $(".welcome-screen header nav.main ul li.github-link").addClass("active");
            $(".welcome-screen header nav.main ul li.github-link").siblings().removeClass("active");

        }else if((dribbbleActivator - heightActivator) < limitActivator){
            /* CodePen Code */
            $(".welcome-screen header nav.main ul li.codepen-link").addClass("active");
            $(".welcome-screen header nav.main ul li.codepen-link").siblings().removeClass("active");

        }else if((behanceActivator - heightActivator) < limitActivator){
            /* Dribbble Code */
            $(".welcome-screen header nav.main ul li.dribbble-link").addClass("active");
            $(".welcome-screen header nav.main ul li.dribbble-link").siblings().removeClass("active");

        }else if((aboutMeActivator - heightActivator) < limitActivator){
            /* Behance Code */
            $(".welcome-screen header nav.main ul li.behance-link").addClass("active");
            $(".welcome-screen header nav.main ul li.behance-link").siblings().removeClass("active");

        }else if((welcomeScreenActivator - heightActivator) < limitActivator){
            /* About Me Code */
            $(".welcome-screen header nav.main ul li.about-me-link").addClass("active");
            $(".welcome-screen header nav.main ul li.about-me-link").siblings().removeClass("active");
        }else{
            /* Welcome Screen Code */
            $(".welcome-screen header nav.main ul li").removeClass("active");
        }
    }
    activeClassFunc();
    $(window).scroll(function(){
        activeClassFunc();
    });
    /* Active Class on Menu End */

    /* Animation Start */
    function animationFunc(){
        var welcomeScreenActivator = $(".welcome-screen").height();
        var aboutMeActivator = welcomeScreenActivator + $("#about-me").height();
        var behanceActivator = aboutMeActivator + $("#behance").height();
        var dribbbleActivator = behanceActivator + $("#dribbble").height();
        var codepenActivator = dribbbleActivator + $("#codepen").height();
        var heightActivator = $(window).height() - ($(window).height()*.5);
        var limitActivator = $(this).scrollTop();
        if((codepenActivator - heightActivator) < limitActivator){
            /* GitHub Code */
            $(".github .left-section").addClass("animated");
            $(".github .right-section").addClass("animated");
        }else if((dribbbleActivator - heightActivator) < limitActivator){
            /* CodePen Code */
            $(".codepen .left-section").addClass("animated");
            $(".codepen .right-section").addClass("animated");
        }else if((behanceActivator - heightActivator) < limitActivator){
            /* Dribbble Code */
            $(".dribbble .left-section").addClass("animated");
            $(".dribbble .right-section").addClass("animated");
        }else if((aboutMeActivator - heightActivator) < limitActivator){
            /* Behance Code */
            $(".behance .left-section").addClass("animated");
            $(".behance .right-section").addClass("animated");
        }else if((welcomeScreenActivator - heightActivator) < limitActivator){
            /* About Me Code */
            $(".about-me .left-section").addClass("animated");
            $(".about-me .right-section").addClass("animated");
        }
    }
    animationFunc();
    $(window).scroll(function(){
        animationFunc();
    });
    /* Animation End */

    /* Loading Screen Start */
    $("title").html("Loading — Refresh the page if it keeps loading.");
    $(window).on("load", function() {
        $("body").css("overflow-y", "scroll");
        $(".loading-screen").fadeOut();
        $("title").html("Bos Eriko Reyes - Front-end Website Developer/Designer");
    });
    setTimeout(function() {
        $(".loading-screen a.force-load").addClass("show");
    }, 5000);
    $(".loading-screen a.force-load").click(function(e){
        $("body").css("overflow-y", "scroll");
        $(".loading-screen").fadeOut();
        $("title").html("Bos Eriko Reyes - Front-end Website Developer/Designer");
        e.preventDefault();
    });
    /* Loading Screen End */
});
