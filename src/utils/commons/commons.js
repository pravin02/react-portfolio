import jQuery from 'jquery';
import Parallax from 'parallax-js';
import niceScroll from 'jquery.nicescroll';


// -----------------------------------------------------
// ------------------    INTRO TABS    -----------------
// -----------------------------------------------------

export function arlo_tm_intro_tabs() {
    var button = jQuery('.arlo_tm_intro_mainpart .main_filter ul li a');
    var tabList = jQuery('.arlo_tm_intro_mainpart .main_list');

    button.on('click', function () {
        var element = jQuery(this);
        var elAttr = element.attr('data-tab');
        button.removeClass('current');
        tabList.removeClass('current');
        element.addClass('current');
        jQuery("#" + elAttr).addClass('current');
        return false;
    });
}

// -----------------------------------------------------
// ------------------    NAV BG SCROLL    --------------
// -----------------------------------------------------

export function arlo_tm_bg_nav() {
    jQuery(window).on('scroll', function () {
        var menu = jQuery('.arlo_tm_classic_menu');
        var WinOffset = jQuery(window).scrollTop();

        if (WinOffset >= 150) {
            menu.addClass('animate');
        } else {
            menu.removeClass('animate');
        }
    });
}

export function arlo_tm_popup_news() {
    var list = jQuery('.arlo_tm_news .news_inner ul li');
    var popupMenu = jQuery('.arlo_tm_popup_news');
    var popupInner = popupMenu.find('.news_inner');
    var closer = popupMenu.find('.closer');
    var WW = jQuery(window).width();

    if (WW >= 1040) {
        list.each(function () {
            var element = jQuery(this);
            var button = element.find('.link,.title a');
            var elHTML = element.html();
            var image = element.find('.image .main');
            var imageURL = image.data('img-url');
            var title = element.find('.title');
            var titleHref = title.find('a').html();

            button.on('click', function () {
                popupMenu.addClass('opened');
                popupInner.html(elHTML);
                image = popupInner.find('.image .main');
                image.css({ backgroundImage: 'url(' + imageURL + ')' });
                title = popupInner.find('.title');
                title.html(titleHref);

                return false;
            });
        });
        closer.on('click', function () {
            popupMenu.removeClass('opened');
            popupInner.html('');
            return false;
        });
    }

}

// -----------------------------------------------------
// -------------    POPUP SCROLL -----------------------
// -----------------------------------------------------

export function arlo_tm_popupscroll() {
    var H = jQuery(window).height();
    var scrollable = jQuery('.arlo_tm_popup_news.scrollable');

    var popupBox = jQuery('.arlo_tm_popup_news');

    popupBox.css({ height: H - 100 });

    scrollable.each(function () {
        var element = jQuery(this);
        var wH = jQuery(window).height();

        element.css({ height: wH });

        element.niceScroll({
            touchbehavior: false,
            cursorwidth: 0,
            autohidemode: true,
            cursorborder: "0px solid #fff"
        });
    });
}

// -----------------------------------------------------
// --------------------   POPUP    ---------------------
// -----------------------------------------------------

export function arlo_tm_popup() {
    jQuery('.gallery_zoom').each(function () { // the containers for all your galleries
        jQuery(this).magnificPopup({
            delegate: 'a.zoom', // the selector for gallery item
            type: 'image',
            gallery: {
                enabled: true
            },
            removalDelay: 300,
            mainClass: 'mfp-fade'
        });

    });
    jQuery('.popup-youtube').each(function () { // the containers for all your galleries
        jQuery(this).magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });
    });
}

// -------------------------------------------------
// -------------------  ANCHOR ---------------------
// -------------------------------------------------

export function arlo_tm_anchor() {
    jQuery('.arlo_tm_leftpart .inner .menu ul li a,.arlo_tm_topbar .dropdown .dropdown_inner ul li a').off().on('click', function (e) {
        e.stopPropagation();
        var element = jQuery(this);
        var url = element.attr('href');
        if (url !== '#' && url.charAt(0) === '#') {
            jQuery('html, body').animate({
                scrollTop: jQuery(url).offset().top
            }, 1000);
        }
        return false;
    });

    jQuery('.arlo_tm_classic_menu .inner .menu ul li a').off().on('click', function (e) {
        e.stopPropagation();
        var element = jQuery(this);
        var url = element.attr('href');
        if (url !== '#' && url.charAt(0) === '#') {
            jQuery('html, body').animate({
                scrollTop: jQuery(url).offset().top - 90
            }, 1000);
        }
        return false;
    });
}

// -----------------------------------------------------
// -----------------    DOWN    ------------------------
// -----------------------------------------------------

export function arlo_tm_down() {
    jQuery('.arlo_tm_arrow_wrap a').on('click', function () {
        if (jQuery.attr(this, 'href') !== '#') {
            jQuery('html, body').animate({
                scrollTop: jQuery(jQuery.attr(this, 'href')).offset().top
            }, 1000);
        }
        return false;
    });
    jQuery('.arlo_tm_arrow_classic a').on('click', function () {
        if (jQuery.attr(this, 'href') !== '#') {
            jQuery('html, body').animate({
                scrollTop: jQuery(jQuery.attr(this, 'href')).offset().top - 90
            }, 1000);
        }
        return false;
    });
    jQuery('.arlo_tm_extra_hero_content .button_two a').on('click', function () {
        if (jQuery.attr(this, 'href') !== '#') {
            jQuery('html, body').animate({
                scrollTop: jQuery(jQuery.attr(this, 'href')).offset().top
            }, 1000);
        }
        return false;
    });
}

// -----------------------------------------------------
// ---------------    IMAGE TO SVG    ------------------
// -----------------------------------------------------

export function arlo_tm_imgtosvg() {
    jQuery('img.svg').each(function () {

        var jQueryimg = jQuery(this);
        var imgClass = jQueryimg.attr('class');
        var imgURL = jQueryimg.attr('src');

        jQuery.get(imgURL, function (data) {
            // Get the SVG tag, ignore the rest
            var jQuerysvg = jQuery(data).find('svg');

            // Add replaced image's classes to the new SVG
            if (typeof imgClass !== 'undefined') {
                jQuerysvg = jQuerysvg.attr('class', imgClass + ' replaced-svg');
            }

            // Remove any invalid XML tags as per http://validator.w3.org
            jQuerysvg = jQuerysvg.removeAttr('xmlns:a');

            // Replace image with new SVG
            jQueryimg.replaceWith(jQuerysvg);

        }, 'xml');

    });
}

// -------------------------------------------------
// -------------  SLIDER KENBURN  ------------------
// -------------------------------------------------

export function arlo_tm_kenburn_slider() {
    jQuery(function () {
        jQuery('.arlo_tm_hero_header .overlay_slider').vegas({
            timer: false,
            animation: ['kenburnsUp', 'kenburnsLeft', 'kenburnsRight'],
            delay: 7000,

            slides: [
                { src: 'img/slider/4.jpeg' },
                { src: 'img/slider/5.jpg' },
                { src: 'img/slider/6.jpg' },
            ]

        });
    });
}

// -------------------------------------------------
// --------------   MENU SCROLL  -------------------
// -------------------------------------------------

export function arlo_tm_scrollable() {



    var H = jQuery(window).height();
    var scrollable = jQuery('.arlo_tm_leftpart .inner .menu.scrollable');
    var verMenu = jQuery('.arlo_tm_leftpart .inner .menu');
    var logoHeight = jQuery('.arlo_tm_leftpart .inner .logo').outerHeight();
    var socialHeight = jQuery('.arlo_tm_leftpart .inner .bottom').outerHeight() + 100;

    verMenu.css({ height: H - logoHeight - socialHeight });

    scrollable.each(function () {
        var element = jQuery(this);

        element.css({ height: H - logoHeight - socialHeight }).niceScroll({
            touchbehavior: false,
            cursorwidth: 0,
            autohidemode: true,
            cursorborder: "0px solid #eee"
        });
    });
}

// -----------------------------------------------------
// -----------------    SWITCHER    --------------------
// -----------------------------------------------------

export function arlo_tm_switcher() {
    var switcherOpener = jQuery('.arlo_tm_leftpart .inner .resize');
    var switcherIcon = jQuery('.arlo_tm_leftpart .inner .resize a span');
    var leftPart = jQuery('.arlo_tm_leftpart');
    var rightPart = jQuery('.arlo_tm_rightpart');
    var WW = jQuery(window).width();

    switcherOpener.on('click', function () {
        if (WW >= 1600) {
            if (switcherOpener.hasClass('opened')) {
                switcherOpener.removeClass('opened');
                switcherIcon.removeClass('opened');
                leftPart.removeClass('opened');
                rightPart.removeClass('opened');
            } else {
                switcherOpener.addClass('opened');
                switcherIcon.addClass('opened');
                leftPart.addClass('opened');
                rightPart.addClass('opened');
            }
        } else {
            if (switcherOpener.hasClass('opened')) {
                switcherOpener.removeClass('opened');
                switcherIcon.removeClass('opened');
                leftPart.removeClass('opened2');
                rightPart.removeClass('opened');
            } else {
                switcherOpener.addClass('opened');
                switcherIcon.addClass('opened');
                leftPart.addClass('opened2');
                rightPart.addClass('opened');
            }
        }
        // setTimeout(function () { jQuery('#ripple').ripples('updateSize'); }, 101);
        // setTimeout(function () { jQuery('#ripple').ripples('updateSize'); }, 201);
        // setTimeout(function () { jQuery('#ripple').ripples('updateSize'); }, 301);
        if (jQuery('.jarallax').length) {
            // jQuery('.jarallax').jarallax('destroy');
            // setTimeout(function () { arlo_tm_jarallax(); }, 300);

        }
        return false;
    });
}

// -----------------------------------------------------
// ---------------   MOBILE MENU    --------------------
// -----------------------------------------------------

export function arlo_mobile_menu() {
    var trigger = jQuery('.arlo_tm_topbar .topbar_inner .trigger');
    var triggerClose = trigger.find('a .close');
    var triggerMenu = trigger.find('a .menu');
    var dropdown = jQuery('.arlo_tm_topbar .dropdown');

    trigger.on('click', function () {
        var element = jQuery(this);
        if (element.hasClass('opened')) {
            element.removeClass('opened');
            triggerMenu.removeClass('closed');
            triggerClose.removeClass('opened');
            dropdown.slideUp();
        } else {
            element.addClass('opened');
            triggerMenu.addClass('closed');
            triggerClose.addClass('opened');
            dropdown.slideDown();
        }
        return false;
    });
}

// -----------------------------------------------------
// ---------------   DATA IMAGES    --------------------
// -----------------------------------------------------

export function arlo_tm_data_images() {



    var data = jQuery('*[data-img-url]');

    data.each(function () {
        var element = jQuery(this);
        var url = element.data('img-url');
        element.css({ backgroundImage: 'url(' + url + ')' });
    });
}

// -------------------------------------------------
// -------------   ANIMATE TEXT  -------------------
// -------------------------------------------------

export function arlo_tm_animate_text() {
    var animateSpan = jQuery('.arlo_tm_animation_text_word');

    animateSpan.typed({
        strings: ["Freelancer", "Web Developer", "Photographer"],
        loop: true,
        startDelay: 1e3,
        backDelay: 2e3
    });
}

// -----------------------------------------------------
// --------------------    JARALLAX    -----------------
// -----------------------------------------------------

export function arlo_tm_jarallax() {
    jQuery('.jarallax').each(function () {
        let element = jQuery(this);
        let customSpeed = element.data('speed');
        customSpeed = customSpeed ?? 0.5;
        element.jarallax({
            speed: customSpeed,
            automaticResize: true
        });
    });
}

// -----------------------------------------------------
// --------------------   SKILLS    --------------------
// -----------------------------------------------------

export function tdProgress(container) {



    container.find('.progress_inner').each(function () {
        var progress = jQuery(this);
        var pValue = parseInt(progress.data('value'), 10);
        var pColor = progress.data('color');
        var pBarWrap = progress.find('.bar');
        var pBar = progress.find('.bar_in');
        pBar.css({ width: pValue + '%', backgroundColor: pColor });
        setTimeout(function () { pBarWrap.addClass('open'); });
    });
}

// -------------------------------------------------
// -----------------    PORTFOLIO    ---------------
// -------------------------------------------------

// filterable 

export function arlo_tm_portfolio() {
    if (jQuery().isotope) {

        // Needed variables
        var list = jQuery('.arlo_tm_portfolio .portfolio_list ul');
        var filter = jQuery('.arlo_tm_portfolio .portfolio_filter ul');

        if (filter.length) {
            // Isotope Filter 
            filter.find('a').on('click', function () {
                var selector = jQuery(this).attr('data-filter');
                list.isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 750,
                        easing: 'linear',
                        queue: false
                    }
                });
                return false;
            });

            // Change active element class
            filter.find('a').on('click', function () {
                filter.find('a').removeClass('current');
                jQuery(this).addClass('current');
                return false;
            });
        }
    }
}

export function arlo_tm_projects() {
    jQuery('.arlo_tm_portfolio_animation_wrap').each(function () {
        jQuery(this).on('mouseenter', function () {
            if (jQuery(this).data('title')) {
                jQuery('.arlo_tm_portfolio_titles').html(jQuery(this).data('title') + '<span class="work__cat">' + jQuery(this).data('category') + '</span>');
                jQuery('.arlo_tm_portfolio_titles').addClass('visible');
            }

            jQuery(document).on('mousemove', function (e) {
                jQuery('.arlo_tm_portfolio_titles').css({
                    left: e.clientX - 10,
                    top: e.clientY + 25
                });
            });
        }).on('mouseleave', function () {
            jQuery('.arlo_tm_portfolio_titles').removeClass('visible');
        });
    });
}


// -----------------------------------------------------
// --------------    ISOTOPE MASONRY    ----------------
// -----------------------------------------------------

export function arlo_tm_isotope() {
    jQuery('.masonry').isotope({
        itemSelector: '.masonry_item',
        masonry: {

        }
    });
}

// -----------------------------------------------------
// ----------------    CONTACT FORM    -----------------
// -----------------------------------------------------

export function arlo_tm_contact_form() {
    jQuery(".contact_form #send_message").on('click', function () {

        var name = jQuery(".contact_form #name").val();
        var email = jQuery(".contact_form #email").val();
        var message = jQuery(".contact_form #message").val();
        var subject = jQuery(".contact_form #subject").val();
        var success = jQuery(".contact_form .returnmessage").data('success');

        jQuery(".contact_form .returnmessage").empty(); //To empty previous error/success message.
        //checking for blank fields	
        if (name === '' || email === '' || message === '') {

            jQuery('div.empty_notice').slideDown(500).delay(2000).slideUp(500);
        }
        else {
            // Returns successful data submission message when the entered information is stored in database.
            jQuery.post("modal/contact.php", { ajax_name: name, ajax_email: email, ajax_message: message, ajax_subject: subject }, function (data) {

                jQuery(".contact_form .returnmessage").append(data);//Append returned message to message paragraph


                if (jQuery(".contact_form .returnmessage span.contact_error").length) {
                    jQuery(".contact_form .returnmessage").slideDown(500).delay(2000).slideUp(500);
                } else {
                    jQuery(".contact_form .returnmessage").append("<span class='contact_success'>" + success + "</span>");
                    jQuery(".contact_form .returnmessage").slideDown(500).delay(4000).slideUp(500);
                }

                if (data === "") {
                    jQuery("#contact_form")[0].reset();//To reset form fields on success
                }

            });
        }
        return false;
    });
}

// -----------------------------------------------------
// ----------------    PLACEHOLDER    ------------------
// -----------------------------------------------------

export function arlo_tm_location() {
    var button = jQuery('.href_location');
    button.on('click', function () {
        var element = jQuery(this);
        var address = element.text();
        address = address.replace(/ /g, '+');
        var text = 'https://maps.google.com?q=';
        window.open(text + address);
        return false;
    });
}

// -------------------------------------------------
// -------------  RIPPLE  --------------------------
// -------------------------------------------------

export function arlo_tm_ripple() {
    jQuery('#ripple').ripples({
        resolution: 500,
        dropRadius: 20,
        perturbance: 0.04
    });
}

// -------------------------------------------------
// -------------  VIDEO PLAYER ---------------------
// -------------------------------------------------

export function arlo_tm_videoplayer() {
    jQuery(".youtube-bg").mb_YTPlayer();
}

// -----------------------------------------------------
// --------------------    TOTOP    --------------------
// -----------------------------------------------------

export function arlo_tm_totop() {



    jQuery(".arlo_tm_footer .footer_inner .top a").on('click', function (e) {
        e.preventDefault();
        jQuery("html, body").animate({ scrollTop: 0 }, 'slow');
        return false;
    });
}

// -----------------------------------------------------
// -------------    PARALLAX ANIMATION    --------------
// -----------------------------------------------------

export function arlo_tm_about_animation() {
    if (jQuery('.parallax').length > 0) {
        var scene = jQuery('.parallax').get(0);
        new Parallax(scene, {
            relativeInput: true,
            onReady: function () {
                console.log('ready!');
            }
        });
    }
}
