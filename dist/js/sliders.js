/**
 *  Video Swiper Init & Settings:
 */
 var mySwiper = new Swiper ('.videos__swiper', {
    // Optional parameters
    loop: false,
    slidesPerView: 'auto',
    spaceBetween: 15,
    
    // Navigation arrows
    navigation: {
        nextEl: '#videos-next',
        prevEl: '#videos-prev',
    },
})

var mySwiper = new Swiper ('.paises__swiper', {
    // Optional parameters
    loop: false,
    slidesPerView: 'auto',
    spaceBetween: 10,
    
    // Navigation arrows
    navigation: {
        nextEl: '#paises-next',
        prevEl: '#paises-prev',
    },
})

/**
 *  Podcast Swiper Init & Settings:
 */
 var mySwiper = new Swiper ('.podcast__swiper', {
    // Optional parameters
    loop: false,
    slidesPerView: 'auto',
    spaceBetween: 15,

    // Navigation arrows
    navigation: {
        nextEl: '#podcast-next',
        prevEl: '#podcast-prev',
    },
})

/**
 *  Fotogaleria Swiper Init & Settings:
 */
var mySwiper = new Swiper ('.fotogaleria__swiper', {
    // Optional parameters
    loop: false,
    slidesPerView: 1,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '#fotogaleria-next',
        prevEl: '#fotogaleria-prev',
    },
})