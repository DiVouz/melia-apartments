$(document).ready(function() {
    setStickClass();

    squareTheRoundImgs();
});

$(window).resize(function() {
    squareTheRoundImgs();
});

function setStickClass() {
    const stickyElm = document.querySelector('.navbar');

    const observer = new IntersectionObserver( 
        ([e]) => e.target.classList.toggle('isSticky', e.intersectionRatio < 1),
        {threshold: [1]}
    );

    observer.observe(stickyElm);
}

function toggleExtraFeatures(forceOpen) {
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

function squareTheRoundImgs() {
    $(".square_round_img").each(function(index) {
        $(this).height($(this).width());
    });
}
