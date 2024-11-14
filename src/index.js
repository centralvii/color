import "./fonts/inter.css"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "./normalize.css"

import "./styles.css"

import Swiper from "swiper"
import { Navigation, Pagination } from "swiper/modules"

import logoImage from "./img/svg/logo.svg"

const swiperSlide = document.querySelectorAll(".swiper-slide")
const logo = (document.querySelector(".nav__logo-img").src = logoImage)

const swiper = new Swiper(".swiper-container", {
    modules: [Navigation, Pagination],
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
})

const swiperImages = [
    require("./img/slider-img-first.png"),
    require("./img/slider-img-first.png"),
    require("./img/slider-img-first.png"),
]

swiperSlide.forEach((item) => {
    swiperImages.forEach((image) => {
        item.style.backgroundImage = `url(${image})`
    })
})
