/*
    Import all individual JS into a single bundle.js
*/
import './swiper/swiper.js';
// import './cumpleanos.js';
// import './instant.js';
// import './institucional.js';
// import './nota.js';
// import './sliders.js';
import './scripts.js';
// import './template-nota-A-carrousel.js';

/*
    Compile all SCSS and CSS files into a single styles.css
    NOTE: the order is important - files below might redefine styles defined in files above
*/
import '../css/swipper/swiper.css';
import '../css/styles.scss';
