$(document).ready(()=>{

    // karuzela

    $('.slider-brand-content').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        // autoplay: true,
        arrows: false,
        responsive: [
        {
            breakpoint: 700,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 899,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        }
        ]
    });

    $('.right-arrow').click(()=>{
        $('.slider-brand-content').slick('slickNext');
    });

    $('.left-arrow').click(()=>{
        $('.slider-brand-content').slick('slickPrev');
    });

 
});