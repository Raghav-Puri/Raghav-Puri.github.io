let owl = $('.owl-clients');

owl.owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 1000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 2
        },
        576: {
            items: 3
        },
        768: {
            items: 4
        },
        992: {
            items: 4
        },
        1200: {
            items: 5
        }
    }
});

$('#clients-next').click(function() {
    owl.trigger('next.owl.carousel');
});
$('#clients-prev').click(function() {
    owl.trigger('prev.owl.carousel');
});