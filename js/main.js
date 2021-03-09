let imageSliderIndex = 0;
let imageSliderData = {
    "images": [
        {
            "src": "images/outside/1.jpg",
            "description": {
                "en": "",
                "gr": ""
            }
        },
        {
            "src": "images/outside/2.jpg",
            "description": {
                "en": "",
                "gr": ""
            }
        },
        {
            "src": "images/outside/3.jpg",
            "description": {
                "en": "",
                "gr": ""
            }
        },
        {
            "src": "images/outside/4.jpg",
            "description": {
                "en": "",
                "gr": ""
            }
        },
        {
            "src": "images/studio1/1.jpg",
            "description": {
                "en": "Bedroom | Studio 1",
                "gr": "Bedroom | Studio 1"
            }
        },
        {
            "src": "images/studio1/2.jpg",
            "description": {
                "en": "Bedroom | Studio 1",
                "gr": "Bedroom | Studio 1"
            }
        },
        {
            "src": "images/studio1/3.jpg",
            "description": {
                "en": "Kitchenette | Studio 1",
                "gr": "Kitchenette | Studio 1"
            }
        },
        {
            "src": "images/studio1/4.jpg",
            "description": {
                "en": "Bathroom | Studio 1",
                "gr": "Bathroom | Studio 1"
            }
        },
        {
            "src": "images/studio2/1.jpg",
            "description": {
                "en": "Bedroom | Studio 2",
                "gr": "Bedroom | Studio 2"
            }
        },
        {
            "src": "images/studio2/2.jpg",
            "description": {
                "en": "Bedroom | Studio 2",
                "gr": "Bedroom | Studio 2"
            }
        },
        {
            "src": "images/studio2/3.jpg",
            "description": {
                "en": "Bedroom | Studio 2",
                "gr": "Bedroom | Studio 2"
            }
        },
        {
            "src": "images/studio2/4.jpg",
            "description": {
                "en": "Kitchenette | Studio 2",
                "gr": "Kitchenette | Studio 2"
            }
        },
        {
            "src": "images/outside/5.jpg",
            "description": {
                "en": "",
                "gr": ""
            }
        },
        {
            "src": "images/outside/6.jpg",
            "description": {
                "en": "",
                "gr": ""
            }
        },
        {
            "src": "images/outside/7.jpg",
            "description": {
                "en": "",
                "gr": ""
            }
        },
        {
            "src": "images/outside/8.jpg",
            "description": {
                "en": "",
                "gr": ""
            }
        },
        {
            "src": "images/outside/9.jpg",
            "description": {
                "en": "",
                "gr": ""
            }
        },
        {
            "src": "images/outside/10.jpg",
            "description": {
                "en": "",
                "gr": ""
            }
        },
        {
            "src": "images/outside/11.jpg",
            "description": {
                "en": "",
                "gr": ""
            }
        },
        {
            "src": "images/outside/12.jpg",
            "description": {
                "en": "",
                "gr": ""
            }
        },
        {
            "src": "images/outside/13.jpg",
            "description": {
                "en": "Panormos beach",
                "gr": "Panormos beach"
            }
        },
        {
            "src": "images/outside/14.jpg",
            "description": {
                "en": "Kastani beach",
                "gr": "Kastani beach"
            }
        },
        {
            "src": "images/outside/15.jpg",
            "description": {
                "en": "Milia beach",
                "gr": "Milia beach"
            }
        },
        {
            "src": "images/outside/16.jpg",
            "description": {
                "en": "",
                "gr": ""
            }
        },
        {
            "src": "images/outside/17.jpg",
            "description": {
                "en": "",
                "gr": ""
            }
        },
        {
            "src": "images/outside/18.jpg",
            "description": {
                "en": "",
                "gr": ""
            }
        },
        {
            "src": "images/outside/19.jpg",
            "description": {
                "en": "",
                "gr": ""
            }
        },
        {
            "src": "images/outside/20.jpg",
            "description": {
                "en": "",
                "gr": ""
            }
        },
        {
            "src": "images/outside/21.jpg",
            "description": {
                "en": "",
                "gr": ""
            }
        },
        {
            "src": "images/outside/22.jpg",
            "description": {
                "en": "",
                "gr": ""
            }
        },
        {
            "src": "images/outside/23.jpg",
            "description": {
                "en": "",
                "gr": ""
            }
        },
        {
            "src": "images/outside/24.jpg",
            "description": {
                "en": "",
                "gr": ""
            }
        },
        {
            "src": "images/outside/25.jpg",
            "description": {
                "en": "",
                "gr": ""
            }
        },
        {
            "src": "images/outside/26.jpg",
            "description": {
                "en": "",
                "gr": ""
            }
        },
        {
            "src": "images/outside/27.jpg",
            "description": {
                "en": "",
                "gr": ""
            }
        }
    ]
};

$(document).ready(function() {
    setStickClass();

    setFirstParalHeight();

    imageSliderGoTo(imageSliderIndex);
});

$(window).resize(function() {
    setFirstParalHeight();

    if (!window.matchMedia("(max-width: 960px)").matches) {
        toggleExtraNavbarMenu(false);
        toggleSmallLangMenu(false);
    }
});

function setStickClass() {
    const stickyElm = document.querySelector('.navbar');

    const observer = new IntersectionObserver( 
        ([e]) => e.target.classList.toggle('isSticky', e.intersectionRatio < 1),
        {threshold: [1]}
    );

    observer.observe(stickyElm);
}

function toggleExtraFeatures() {
    let element = $("#extraFeatures");
    
    if (element) {
        element.stop(true, false).slideToggle(600, function() {
            initExtraFeatures();
        });
    }
}

function scrollToTab(tabId) {
    let element = $(`#${tabId}`);
    let navbarElement = $("#navbar");

    if (element && navbarElement) {
        let extraNavbarMenu = $("#navbar_more_menu");
        if (extraNavbarMenu && !extraNavbarMenu.is(':hidden')) {
            toggleExtraNavbarMenu(false);
            toggleBigLangMenu(false);
            toggleSmallLangMenu(false);
        }
        
        $('html, body').stop(true, false).animate({
            scrollTop: element.offset().top - navbarElement.height() + 2
        }, 1200);
    }
}

function imageSliderAdd(amount) {
    imageSliderIndex += amount;

    if (imageSliderIndex > (imageSliderData.images.length - 1)) {
        imageSliderIndex = imageSliderIndex % imageSliderData.images.length;
    } else if (imageSliderIndex < 0) {
        imageSliderIndex = Math.abs(imageSliderIndex + imageSliderData.images.length) % imageSliderData.images.length;
    }

    imageSliderGoTo(imageSliderIndex);    
}

function imageSliderGoTo(index) {
    if (index > imageSliderData.images.length) {
        index = imageSliderData.images.length;
    } else if (index < 0) {
        index = 0;
    }

    imageSliderIndex = index;

    let imgElement = $("#imagesTab_img");
    let descElement = $("#imagesTab_description");

    if (imgElement) {
        imgElement.stop(true, false).animate({
            opacity: -1.0,
        }, 200, function() {
            imgElement.attr("src", imageSliderData.images[index].src);
            imgElement.stop(true, false).animate({
                opacity: 1.0,
            }, 200);

            if (descElement) {
                descElement.html(imageSliderData.images[index].description[currentLan]);
                
                if (imageSliderData.images[index].description[currentLan] != null && imageSliderData.images[index].description[currentLan] != '') {
                    descElement.addClass('titleOn');
                } else {
                    descElement.removeClass('titleOn');
                }
            }
        });
    }
}

function setFirstParalHeight() {
    let paralElement = $(".parallax.paral1");
    let navbarElement = $(".navbar");

    if (paralElement) {
        paralElement.css('height', $(window).height() - navbarElement.outerHeight() - 1);
    }
}

function toggleExtraNavbarMenu(forceOpen) {
    let element = $("#navbar_more_menu");
    
    if (element) {
        if (forceOpen != null) {
            if (forceOpen == true) {
                element.stop(true, false).slideDown(0);
            } else {
                element.stop(true, false).slideUp(0);
            }
        } else {
            element.stop(true, false).slideToggle(600);
        }
    }
}

function toggleBigLangMenu(forceOpen) {
    let element = $("#big_lang_choose");
    
    if (element) {
        if (forceOpen != null) {
            if (forceOpen == true) {
                element.stop(true, false).slideDown(0);
            } else {
                element.stop(true, false).slideUp(0);
            }
        } else {
            element.stop(true, false).slideToggle(400);
        }
    }
}

function toggleSmallLangMenu(forceOpen) {
    let element = $("#small_lang_choose");
    
    if (element) {
        if (forceOpen != null) {
            if (forceOpen == true) {
                element.stop(true, false).slideDown(0);
            } else {
                element.stop(true, false).slideUp(0);
            }
        } else {
            element.stop(true, false).slideToggle(400);
        }
    }
}
