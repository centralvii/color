import './normalize.css';
import './fonts/inter.css';
import './styles.css';
import logoImage from './img/svg/logo.svg';

import Slider from './components/slider/Slider';

const sliderSection = document.querySelector('#slider-section');
sliderSection.innerHTML = '';
document.querySelector('.nav__logo-img').src = logoImage;

const images = [
    require('./img/slider-img-first.png'),
    require('./img/slider-img-first.png'),
    require('./img/slider-img-first.png'),
];

sliderSection.appendChild(Slider(images));
