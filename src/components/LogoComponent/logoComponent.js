import logoImage from '../../img/svg/logo.svg';

export default function initializeLogo() {
    const logo = document.querySelector('.nav__logo-img');
    if (logo) {
        logo.src = logoImage;
    }
}
