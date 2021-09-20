import {Swiper, Mousewheel, Navigation, Controller} from 'swiper'
Swiper.use([ Mousewheel, Navigation, Controller ])

import { gsap, Power2 } from 'gsap'

document.addEventListener("DOMContentLoaded", () => {


	const swiperImg = new Swiper('.slider-img', {
		loop: false,
		speed: 1000,
		mousewheel: {
			invert: true,
		},
		navigation: {
			prevEl: '.swiper-button-prev',
			nextEl: '.swiper-button-next'
		}
	})

	const swiperText = new Swiper('.slider-img__decor', {
		loop: false,
		speed: 1000,
		mousewheel: {
			invert: true,
		}
	})
	
	swiperText.controller.control = swiperImg
	swiperImg.controller.control = swiperText

	// Slide change

	let curnum = document.getElementById('current')

	swiperImg.on('slideChange', function() {
		let ind = swiperText.realIndex + 1
		console.log(ind)
		gsap.to(curnum, .2, {
			force3D: true,
			y: -10,
			opacity: 0,
			ease: Power2.easeOut,
			onComplete: function() {
				gsap.to(curnum, .1, {
					force3D: true,
					y: 10
				}),
				curnum.innerHTML = `0${ind}`
			}
		})
		gsap.to(curnum, .2, {
			force3D: true, 
			y: 0, 
			opacity: 1,
			ease: Power2.easeOut,
			delay: .3
		})
	})







	const swiperImg2 = new Swiper('.slider-img2', {
		loop: false,
		speed: 1000,
		mousewheel: {
			invert: true,
		},
		navigation: {
			prevEl: '.swiper-button-prev',
			nextEl: '.swiper-button-next'
		}
	})

	const swiperText2 = new Swiper('.slider-img__decor2', {
		loop: false,
		speed: 1000,
		mousewheel: {
			invert: true,
		}
	})
	
	swiperText2.controller.control = swiperImg2
	swiperImg2.controller.control = swiperText2

	// Slide change

	let curnum2 = document.getElementById('current2')

	swiperImg2.on('slideChange', function() {
		let ind = swiperText2.realIndex + 1
		console.log(ind)
		gsap.to(curnum2, .2, {
			force3D: true,
			y: -10,
			opacity: 0,
			ease: Power2.easeOut,
			onComplete: function() {
				gsap.to(curnum2, .1, {
					force3D: true,
					y: 10
				}),
				curnum2.innerHTML = `0${ind}`
			}
		})
		gsap.to(curnum2, .2, {
			force3D: true, 
			y: 0, 
			opacity: 1,
			ease: Power2.easeOut,
			delay: .3
		})
	})







	const swiperImg3 = new Swiper('.slider-img3', {
		loop: false,
		speed: 1000,
		mousewheel: {
			invert: true,
		},
		navigation: {
			prevEl: '.swiper-button-prev',
			nextEl: '.swiper-button-next'
		}
	})

	const swiperText3 = new Swiper('.slider-img__decor3', {
		loop: false,
		speed: 1000,
		mousewheel: {
			invert: true,
		}
	})
	
	swiperText3.controller.control = swiperImg3
	swiperImg3.controller.control = swiperText3

	// Slide change

	let curnum3 = document.getElementById('current3')

	swiperImg3.on('slideChange', function() {
		let ind = swiperText3.realIndex + 1
		console.log(ind)
		gsap.to(curnum3, .2, {
			force3D: true,
			y: -10,
			opacity: 0,
			ease: Power2.easeOut,
			onComplete: function() {
				gsap.to(curnum3, .1, {
					force3D: true,
					y: 10
				}),
				curnum3.innerHTML = `0${ind}`
			}
		})
		gsap.to(curnum3, .2, {
			force3D: true, 
			y: 0, 
			opacity: 1,
			ease: Power2.easeOut,
			delay: .3
		})
	})







	const swiperImg4 = new Swiper('.slider-img4', {
		loop: false,
		speed: 1000,
		mousewheel: {
			invert: true,
		},
		navigation: {
			prevEl: '.swiper-button-prev',
			nextEl: '.swiper-button-next'
		}
	})

	const swiperText4 = new Swiper('.slider-img__decor4', {
		loop: false,
		speed: 1000,
		mousewheel: {
			invert: true,
		}
	})
	
	swiperText4.controller.control = swiperImg4
	swiperImg4.controller.control = swiperText4

	// Slide change

	let curnum4 = document.getElementById('current4')

	swiperImg4.on('slideChange', function() {
		let ind = swiperText4.realIndex + 1
		console.log(ind)
		gsap.to(curnum4, .2, {
			force3D: true,
			y: -10,
			opacity: 0,
			ease: Power2.easeOut,
			onComplete: function() {
				gsap.to(curnum4, .1, {
					force3D: true,
					y: 10
				}),
				curnum4.innerHTML = `0${ind}`
			}
		})
		gsap.to(curnum4, .2, {
			force3D: true, 
			y: 0, 
			opacity: 1,
			ease: Power2.easeOut,
			delay: .3
		})
	})
});
