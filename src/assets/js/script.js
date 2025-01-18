var owl = $('.course-slide');
owl.owlCarousel({
    autoplay: true,
    autoplayTimeout: 5000,
    singleItem: true,
    margin: 20,
    loop: false,
    nav: true,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        575: {
            items: 2
        },
        768: {
            items: 2
        },
        992: {
            items: 3
        },
        1200: {
            items: 3.5
        }
    }
})

var owl = $('.top-ranks-slide');
owl.owlCarousel({
    autoplay: true,
    autoplayTimeout: 5000,
    singleItem: true,
    margin: 20,
    loop: true,
    nav: true,
    dots: false,
    responsive: {
        0: {
            items: 1
        }
    }
})

var owl = $('.educators-slide');
owl.owlCarousel({
    autoplay: true,
    autoplayTimeout: 5000,
    singleItem: true,
    margin: 20,
    loop: false,
    nav: true,
    dots: false,
    responsive: {
        0: {
            items: 2
        },
        575: {
            items: 3
        },
        768: {
            items: 4
        },
        992: {
            items: 4
        },
        1200: {
            items: 6
        }
    }
})

var owl = $('.testimonial-slide');
owl.owlCarousel({
    autoplay: true,
    autoplayTimeout: 5000,
    singleItem: true,
    margin: 20,
    loop: true,
    nav: true,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        575: {
            items: 1
        },
        768: {
            items: 2
        },
        992: {
            items: 3
        },
        1200: {
            items: 4
        }
    }
})

var owl = $('.blog-slider');
owl.owlCarousel({
    autoplay: true,
    autoplayTimeout: 5000,
    singleItem: true,
    margin: 20,
    loop: true,
    nav: true,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        575: {
            items: 1
        },
        768: {
            items: 2
        },
        992: {
            items: 3
        },
        1200: {
            items: 4
        }
    }
})