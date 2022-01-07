import { Slide, SlideNav } from './slide.js'

const slide = new SlideNav('.slide', '.slide-wrapper')
slide.init()

slide.changeSlide(1)
slide.activePrevSlide()

slide.addArrow('.prev', '.next')
slide.addControl('.custom-control')
