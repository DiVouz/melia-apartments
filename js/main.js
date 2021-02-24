$(document).ready(function() {
    setStickClass();
});

function setStickClass() {
    const stickyElm = document.querySelector('.navbar');

    const observer = new IntersectionObserver( 
        ([e]) => e.target.classList.toggle('isSticky', e.intersectionRatio < 1),
        {threshold: [1]}
    );

    observer.observe(stickyElm);
}