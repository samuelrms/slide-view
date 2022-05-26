import SlideNav from './slide.js'
import initTemas from './temas.js';

initTemas()

const slide = new SlideNav('.slide', '.slide-wrapper');
slide.init();
slide.addArrow('.prev', '.next')
slide.addControl('.custom-control')