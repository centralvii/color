import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './swiperComponent.css';

export default function initializeSwiper() {
    const swiper = new Swiper('.swiper-container', {
        modules: [Navigation, Pagination],
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

    const swiperSlide = document.querySelectorAll('.swiper-slide');
    const swiperImages = [
        require('../../img/slider-img-first.png'),
        require('../../img/slider-img-first.png'),
        require('../../img/slider-img-first.png'),
    ];

    swiperSlide.forEach((item) => {
        swiperImages.forEach((image) => {
            item.style.backgroundImage = `url(${image})`;
        });
    });
}
