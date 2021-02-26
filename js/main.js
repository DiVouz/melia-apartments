let imageSliderIndex = 0;
let imageSliderData = {
    "images": [
        {
            "src": "images/outside/1.png",
            "description": "Test1"
        },
        {
            "src": "images/outside/2.png",
            "description": "Test2"
        },
        {
            "src": "images/outside/3.png",
            "description": "Test3"
        }
    ]
};

$(document).ready(function() {
    setStickClass();

    squareTheRoundImgs();

    imageSliderGoTo(imageSliderIndex);
});

$(window).resize(function() {
    squareTheRoundImgs(true);
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
        if (element.is(':hidden')) {
            $("#extraFeaturesButton").html('Show Less');
        } else {
            $("#extraFeaturesButton").html('Show More');
        }

        element.stop(true, false).slideToggle("slow");
    }
}

function scrollToTab(tabId) {
    let element = $(`#${tabId}`);
    let navbarElement = $("#navbar");

    if (element && navbarElement) {
        $('html, body').stop(true, false).animate({
            scrollTop: element.offset().top - navbarElement.height() + 2
        }, 1000);
    }
}

function squareTheRoundImgs(force) {
    $(".square_round_img").each(function(index) {
        if (force) {
            $(this).height($(this).width());
        } else {
            $(this).one("load", function() {
                $(this).height($(this).width());
            });
        }
    });
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
                descElement.html(imageSliderData.images[index].description);
            }
        });
    }
}
