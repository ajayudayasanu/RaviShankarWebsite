$(document).ready(function () {
    // Slider Javascript
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        effect: 'fade',
        speed: 600,
        loop: true,
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
        keyboard: {
            enabled: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

    });


    // Navbar Scoll Animation
    $(window).on('scroll', function () {
        if ($(window).scrollTop()) {
            $('nav.navbar').addClass('padding fixed-top');
            $('.sidenav-open').addClass('fixed-btn');
        } else {
            $('nav.navbar').removeClass('padding');
        }
    });

    $(".sidenav-open").click(function (e) {
        e.preventDefault();
        $(".sidenav").addClass("slide");
        $(".bg-overlay-nav").addClass("slide");
    });

    $(".bg-overlay-nav,.sidenav ul li a").click(function (e) {
        $(".sidenav").removeClass("slide");
        $(".bg-overlay-nav").removeClass("slide");
    });

    // Sidenav Links Active Class Change
    $(".sidenav ul li a").click(function (e) {
        $(".sidenav ul li a.bg-active").removeClass("bg-active");
        $(this).addClass("bg-active");
    });

    // Skills Progress Bars
    $(".pbar1").animate({
        width: "99%",
    }, 1500);

    $(".pbar2").animate({
        width: "85%"
    }, 1500);

    $(".pbar3").animate({
        width: "78%"
    }, 1500);

    $(".pbar4").animate({
        width: "82%"
    }, 1500);
    $(".pbar5").animate({
        width: "90%"
    }, 1500);


    // Owl Carousel


    $("#owl-team").owlCarousel({
        items: 3,
        itemsCustom: false,
        itemsDesktop: [1199, 2],
        itemsDesktopSmall: [991, 2],
        itemsTablet: [768, 1],
        itemsTabletSmall: [600, 1],
        itemsMobile: [479, 1],
        singleItem: false,
        itemsScaleUp: false,

        //Autoplay
        autoPlay: true,
        stopOnHover: true,

        // Navigation
        navigation: false,
        navigationText: false,
        rewindNav: true,
        scrollPerPage: false,

        //Pagination
        pagination: true,
        paginationNumbers: false,

        // Responsive 
        responsive: true,
        responsiveRefreshRate: 200,
        responsiveBaseWidth: window,
    });

    $("#owl-tst").owlCarousel({
        items: 1,
        itemsCustom: false,
        itemsDesktop: [1199, 1],
        itemsDesktopSmall: [991, 1],
        itemsTablet: [768, 1],
        itemsTabletSmall: [600, 1],
        itemsMobile: [479, 1],
        singleItem: false,
        itemsScaleUp: false,

        //Autoplay
        autoPlay: true,
        stopOnHover: true,

        // Navigation
        navigation: false,
        navigationText: false,
        rewindNav: true,
        scrollPerPage: false,

        //Pagination
        pagination: true,
        paginationNumbers: false,

        // Responsive 
        responsive: true,
        responsiveRefreshRate: 200,
        responsiveBaseWidth: window,
    });



    // Example starter JavaScript for disabling form submissions if there are invalid fields
    (function () {
        'use strict';
        window.addEventListener('load', function () {
            // Fetch all the forms we want to apply custom Bootstrap validation styles to
            var forms = document.getElementsByClassName('needs-validation');
            // Loop over them and prevent submission
            var validation = Array.prototype.filter.call(forms, function (form) {
                form.addEventListener('submit', function (event) {
                    if (form.checkValidity() === false) {
                        event.preventDefault();
                        event.stopPropagation();
                    }
                    form.classList.add('was-validated');
                }, false);
            });
        }, false);
    })();




    /* Color Panel Js starts */


    $('.colorPicker').click(function () {
        $('.colors').slideToggle(300);
    });

    // Light Version

    $(".blue").click(function () {
        var element = document.createElement("link");
        element.setAttribute("rel", "stylesheet");
        element.setAttribute("type", "text/css");
        element.setAttribute("href", "css/colors/blue.css");
        document.getElementsByTagName("head")[0].appendChild(element);
    });
    $(".green").click(function () {
        var element = document.createElement("link");
        element.setAttribute("rel", "stylesheet");
        element.setAttribute("type", "text/css");
        element.setAttribute("href", "css/colors/green.css");
        document.getElementsByTagName("head")[0].appendChild(element);
    });
    $(".mayablue").click(function () {
        var element = document.createElement("link");
        element.setAttribute("rel", "stylesheet");
        element.setAttribute("type", "text/css");
        element.setAttribute("href", "css/colors/mayablue.css");
        document.getElementsByTagName("head")[0].appendChild(element);
    });
    $(".red").click(function () {
        var element = document.createElement("link");
        element.setAttribute("rel", "stylesheet");
        element.setAttribute("type", "text/css");
        element.setAttribute("href", "css/colors/red.css");
        document.getElementsByTagName("head")[0].appendChild(element);
    });
    $(".roman").click(function () {
        var element = document.createElement("link");
        element.setAttribute("rel", "stylesheet");
        element.setAttribute("type", "text/css");
        element.setAttribute("href", "css/colors/roman.css");
        document.getElementsByTagName("head")[0].appendChild(element);
    });
    $(".springgreen").click(function () {
        var element = document.createElement("link");
        element.setAttribute("rel", "stylesheet");
        element.setAttribute("type", "text/css");
        element.setAttribute("href", "css/colors/springgreen.css");
        document.getElementsByTagName("head")[0].appendChild(element);
    });
    $(".violet").click(function () {
        var element = document.createElement("link");
        element.setAttribute("rel", "stylesheet");
        element.setAttribute("type", "text/css");
        element.setAttribute("href", "css/colors/violet.css");
        document.getElementsByTagName("head")[0].appendChild(element);
    });
    $(".yellow").click(function () {
        var element = document.createElement("link");
        element.setAttribute("rel", "stylesheet");
        element.setAttribute("type", "text/css");
        element.setAttribute("href", "css/colors/yellow.css");
        document.getElementsByTagName("head")[0].appendChild(element);
    });

    // Dark Colors
    $(".dark-blue").click(function () {
        var element = document.createElement("link");
        element.setAttribute("rel", "stylesheet");
        element.setAttribute("type", "text/css");
        element.setAttribute("href", "css/colors/dark-blue.css");
        document.getElementsByTagName("head")[0].appendChild(element);
    });
    $(".dark-cyan").click(function () {
        var element = document.createElement("link");
        element.setAttribute("rel", "stylesheet");
        element.setAttribute("type", "text/css");
        element.setAttribute("href", "css/colors/dark-cyan.css");
        document.getElementsByTagName("head")[0].appendChild(element);
    });
    $(".dark-green").click(function () {
        var element = document.createElement("link");
        element.setAttribute("rel", "stylesheet");
        element.setAttribute("type", "text/css");
        element.setAttribute("href", "css/colors/dark-green.css");
        document.getElementsByTagName("head")[0].appendChild(element);
    });
    $(".dark-indigo").click(function () {
        var element = document.createElement("link");
        element.setAttribute("rel", "stylesheet");
        element.setAttribute("type", "text/css");
        element.setAttribute("href", "css/colors/dark-indigo.css");
        document.getElementsByTagName("head")[0].appendChild(element);
    });
    $(".dark-orange").click(function () {
        var element = document.createElement("link");
        element.setAttribute("rel", "stylesheet");
        element.setAttribute("type", "text/css");
        element.setAttribute("href", "css/colors/dark-orange.css");
        document.getElementsByTagName("head")[0].appendChild(element);
    });
    $(".dark-pink").click(function () {
        var element = document.createElement("link");
        element.setAttribute("rel", "stylesheet");
        element.setAttribute("type", "text/css");
        element.setAttribute("href", "css/colors/dark-pink.css");
        document.getElementsByTagName("head")[0].appendChild(element);
    });
    $(".dark-purple").click(function () {
        var element = document.createElement("link");
        element.setAttribute("rel", "stylesheet");
        element.setAttribute("type", "text/css");
        element.setAttribute("href", "css/colors/dark-purple.css");
        document.getElementsByTagName("head")[0].appendChild(element);
    });
    $(".dark-red").click(function () {
        var element = document.createElement("link");
        element.setAttribute("rel", "stylesheet");
        element.setAttribute("type", "text/css");
        element.setAttribute("href", "css/colors/dark-red.css");
        document.getElementsByTagName("head")[0].appendChild(element);
    });

    /* Color Panel Js Ends */


    // Smooth Scroll

    // Add smooth scrolling to all links
    $("a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });


});