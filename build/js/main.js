/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/js/main.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/components/_animated-header.js":
/*!***********************************************!*\
  !*** ./src/js/components/_animated-header.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");

var headerList = document.querySelectorAll('.animated-header');
if (headerList.length) {
  document.addEventListener('loader-complete', function () {
    headerList.forEach(function (header) {
      gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to(header.querySelector('.animated-header__elem'), {
        y: 0,
        duration: .7,
        ease: 'circ',
        scrollTrigger: {
          trigger: header
        }
      });
    });
  });
}

/***/ }),

/***/ "./src/js/components/_animated-line.js":
/*!*********************************************!*\
  !*** ./src/js/components/_animated-line.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");

var linesList = document.querySelectorAll('.animated-line');
if (linesList.length) {
  linesList.forEach(function (line) {
    var progress = line.querySelector('.animated-line__progress');
    gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to(progress, {
      width: '100%',
      duration: .7,
      scrollTrigger: {
        trigger: progress
      }
    });
  });
}

/***/ }),

/***/ "./src/js/components/_cursor.js":
/*!**************************************!*\
  !*** ./src/js/components/_cursor.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var cursor = null;
document.addEventListener('mousemove', function (e) {
  var area = e.target.closest('[data-cursor]');
  if (area) {
    console.log(area.dataset.cursor);
    var newCursor = document.querySelector(".cursor--".concat(area.dataset.cursor));
    if (cursor && cursor !== newCursor) {
      cursor.classList.remove('cursor--active');
    }
    cursor = newCursor;
    cursor.classList.add('cursor--active');
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
  } else {
    if (cursor) {
      cursor.classList.remove('cursor--active');
      cursor = null;
    }
  }
});

/***/ }),

/***/ "./src/js/components/_dropdown.js":
/*!****************************************!*\
  !*** ./src/js/components/_dropdown.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var dropdownList = document.querySelectorAll('.dropdown');
if (dropdownList.length) {
  dropdownList.forEach(function (dropdown) {
    dropdown.addEventListener('click', function (evt) {
      evt.stopPropagation();
      dropdown.classList.toggle('dropdown--active');
      dropdownList.forEach(function (el) {
        if (el !== dropdown) {
          el.classList.remove('dropdown--active');
        }
      });
    });
    var input = dropdown.querySelector('.dropdown__value');
    var optionsList = dropdown.querySelectorAll('.dropdown__option');
    optionsList.forEach(function (option) {
      // Multi select
      if (dropdown.classList.contains('dropdown--multi-select')) {
        dropdown.addEventListener('click', function (evt) {
          evt.stopPropagation();
          if (!evt.target.closest('.dropdown__options-list')) {
            dropdown.classList.toggle('dropdown--active');
          } else {
            var checkedOptionsList = dropdown.querySelectorAll(':checked');
            var optionsValues = [];
            checkedOptionsList.forEach(function (checkedOption) {
              optionsValues.push(checkedOption.value);
            });
            if (optionsValues.length) {
              input.value = input.dataset.prefix + ': ' + optionsValues.join(', ');
            } else {
              input.value = '';
            }
          }
        });
      }
      // Single select
      else {
        option.addEventListener('click', function (e) {
          e.preventDefault();
          if (dropdown.classList.contains('dropdown--navigate')) {
            window.location.href = option.dataset.value;
          } else {
            input.value = option.dataset.value;
            dropdown.querySelector('.dropdown__option--selected').classList.remove('dropdown__option--selected');
            option.classList.add('dropdown__option--selected');
            if (dropdown.classList.contains('dropdown--with-flag')) {
              var currentFlag = dropdown.querySelector('.dropdown__value-box .dropdown__flag');
              var nextFlag = option.querySelector('.dropdown__flag');
              currentFlag.src = nextFlag.src;
            }
          }
        });
      }
    });
  });
}
document.addEventListener('click', closeAllSelects);
function closeAllSelects() {
  dropdownList.forEach(function (dropdown) {
    dropdown.classList.remove('dropdown--active');
  });
}

/***/ }),

/***/ "./src/js/components/_faq.js":
/*!***********************************!*\
  !*** ./src/js/components/_faq.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");

var accordionItems = document.querySelectorAll(".faq__elem");
if (accordionItems.length) {
  accordionItems.forEach(function (itemAccordion) {
    var accordionTitle = itemAccordion.querySelector(".faq__title-box");
    var accordionContent = itemAccordion.querySelector(".faq__content");
    accordionTitle.addEventListener("click", function () {
      if (!itemAccordion.classList.contains("faq__elem--active")) {
        var accordionItemsActive = document.querySelectorAll(".faq__elem--active");
        accordionItemsActive.forEach(function (itemAccordionActive) {
          var accordionContent = itemAccordionActive.querySelector(".faq__content");
          itemAccordionActive.classList.remove("faq__elem--active");
          gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to(accordionContent, {
            duration: .5,
            height: 0,
            display: "none",
            autoAlpha: 0,
            ease: "expo.inOut"
          });
        });
        itemAccordion.classList.add("faq__elem--active");
        gsap__WEBPACK_IMPORTED_MODULE_0__["default"].set(accordionContent, {
          height: "auto",
          display: "block",
          autoAlpha: 1
        });
        gsap__WEBPACK_IMPORTED_MODULE_0__["default"].from(accordionContent, {
          duration: .5,
          height: 0,
          display: "none",
          autoAlpha: 0,
          ease: "expo.inOut"
        });
      } else {
        itemAccordion.classList.remove("faq__elem--active");
        gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to(accordionContent, {
          duration: .5,
          height: 0,
          display: "none",
          autoAlpha: 0,
          ease: "expo.inOut"
        });
      }
    });
  });
}

/***/ }),

/***/ "./src/js/components/_gallery.js":
/*!***************************************!*\
  !*** ./src/js/components/_gallery.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");


var galleryAnim = function galleryAnim(elem) {
  return gsap__WEBPACK_IMPORTED_MODULE_1__["default"].timeline({
    paused: true
  }).fromTo(elem, {
    opacity: 0
  }, {
    y: 0,
    opacity: 1,
    duration: .3,
    onComplete: function onComplete() {
      document.body.style.overflow = '';
    },
    onReverseComplete: function onReverseComplete() {
      document.body.style.overflow = '';
      elem.classList.remove('gallery--active');
    }
  });
};
var galleryLinkList = document.querySelectorAll('[data-gallery]');
if (galleryLinkList.length) {
  galleryLinkList.forEach(function (galleryLink) {
    var gallery = document.querySelector("#".concat(galleryLink.dataset.gallery));
    var animation = galleryAnim(gallery);
    galleryLink.addEventListener('click', function (e) {
      e.preventDefault();
      if (gallery) {
        document.body.style.overflow = 'hidden';
        gallery.classList.add('gallery--active');
        animation.play();
      }
    });
    gallery.addEventListener('click', function () {
      animation.reverse();
    });
  });
}
var galleryList = document.querySelectorAll('.gallery');
if (galleryList.length) {
  galleryList.forEach(function (gallery) {
    var slider = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](gallery.querySelector('.gallery__slider'), {
      slidesPerView: 1,
      spaceBetween: 0,
      loop: true
    });
    var nextButton = gallery.querySelector('.gallery__button--next');
    nextButton.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      slider.slideNext();
    });
    var prevButton = gallery.querySelector('.gallery__button--prev');
    prevButton.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      slider.slidePrev();
    });
  });
}

/***/ }),

/***/ "./src/js/components/_gallery1.js":
/*!****************************************!*\
  !*** ./src/js/components/_gallery1.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");

var sliderElem = document.querySelector('.gallery1__slider');
if (sliderElem) {
  var markEvenSlides = function markEvenSlides() {
    var evenSlides = sliderElem.querySelectorAll('.gallery1__slide--even');
    if (evenSlides.length) evenSlides.forEach(function (slide) {
      slide.classList.remove('gallery1__slide--even');
    });
    var visibleSlides = sliderElem.querySelectorAll('.swiper-slide-visible');
    visibleSlides.forEach(function (slide, index) {
      if (index % 2 === 1) {
        slide.classList.add('gallery1__slide--even');
      }
    });
  };
  var slider = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](sliderElem.querySelector('.swiper'), {
    slidesPerView: 4,
    spaceBetween: 20,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    on: {
      init: function init() {
        markEvenSlides();
      }
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      1300: {
        slidesPerView: 4,
        spaceBetween: 40
      }
    }
  });
  var progressValue = sliderElem.querySelector('.gallery1__progress-value');
  slider.on('transitionStart', function () {
    markEvenSlides();
    progressValue.style.width = "".concat(slider.progress * 100, "%");
  });
  slider.on('sliderMove', function () {
    markEvenSlides();
  });
}

/***/ }),

/***/ "./src/js/components/_gallery2.js":
/*!****************************************!*\
  !*** ./src/js/components/_gallery2.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");

var sliderElem = document.querySelector('.gallery2__slider');
if (sliderElem) {
  var slider = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](sliderElem.querySelector('.swiper'), {
    slidesPerView: 1.1,
    spaceBetween: 30,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    breakpoints: {
      320: {
        slidesPerView: 1.1,
        spaceBetween: 30
      },
      768: {
        slidesPerView: 1.7,
        spaceBetween: 60
      }
    }
  });
  var progressValue = sliderElem.querySelector('.gallery2__progress-value');
  slider.on('transitionStart', function () {
    progressValue.style.width = "".concat(slider.progress * 100, "%");
  });
}

/***/ }),

/***/ "./src/js/components/_loader.js":
/*!**************************************!*\
  !*** ./src/js/components/_loader.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");

var loader = document.querySelector('.loader');
gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to(loader, {
  opacity: 0,
  duration: .3,
  delay: 1,
  onComplete: function onComplete() {
    loader.classList.add('loader--hidden');
    var evt = new Event('loader-complete');
    document.dispatchEvent(evt);
  }
});

/***/ }),

/***/ "./src/js/components/_menu.js":
/*!************************************!*\
  !*** ./src/js/components/_menu.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");

var menuAnim = gsap__WEBPACK_IMPORTED_MODULE_0__["default"].timeline({
  paused: true
}).fromTo('.menu', {
  xPercent: 100
}, {
  xPercent: 0,
  duration: .3,
  onReverseComplete: function onReverseComplete() {
    document.querySelector('.menu').classList.remove('menu--active');
  }
});
var menuBtnList = document.querySelectorAll('.js-show-menu');
menuBtnList.forEach(function (btn) {
  btn.addEventListener('click', function () {
    if (document.body.classList.contains('left-menu-show')) {
      document.body.classList.remove('left-menu-show');
      document.body.style.overflow = '';
      menuAnim.reverse();
    } else {
      document.body.classList.add('left-menu-show');
      document.body.style.overflow = 'hidden';
      document.querySelector('.menu').classList.add('menu--active');
      menuAnim.play();
    }
  });
});
var menuLinks = document.querySelectorAll('.menu__nav-link');
var digitBox = document.querySelector('.menu__counter-digit-list');
var digitList = document.querySelectorAll('.menu__counter-digit');
menuLinks.forEach(function (link) {
  link.addEventListener("mouseenter", function () {
    console.log(digitBox.length);
    digitBox.style.transform = "translateY(-".concat(100 * (parseInt(link.dataset.digit) / digitList.length), "%)");
  });
  link.addEventListener("mouseleave", function () {
    digitBox.style.transform = "translateY(0)";
  });
});

/***/ }),

/***/ "./src/js/components/_partners.js":
/*!****************************************!*\
  !*** ./src/js/components/_partners.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");

var partnersSlider;
var initPartnersSlider = function initPartnersSlider() {
  var slider = document.querySelector('.partners__slider');
  if (!slider) return;
  var width = window.innerWidth;
  if (width >= 768) {
    if (partnersSlider) {
      partnersSlider.destroy(true, true);
      partnersSlider = undefined;
    }
  } else {
    if (!partnersSlider) {
      partnersSlider = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](slider, {
        slidesPerView: 1.5,
        spaceBetween: 36
      });
    }
  }
};
initPartnersSlider();
window.addEventListener('resize', initPartnersSlider);

/***/ }),

/***/ "./src/js/components/_plan-slider.js":
/*!*******************************************!*\
  !*** ./src/js/components/_plan-slider.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");

var apartmentSliderWrapper = document.querySelector('.plan-slider');
var apartmentSlider = document.querySelector('.plan-slider__elem');
if (apartmentSlider) {
  var slider = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](apartmentSlider, {
    slidesPerView: 1,
    spaceBetween: 0,
    grabCursor: true
  });
  slider.on('transitionStart', function () {
    var activeButton = apartmentSliderWrapper.querySelector('.plan-slider__nav-btn--current');
    activeButton.classList.remove('plan-slider__nav-btn--current');
    var newsButton = apartmentSliderWrapper.querySelector(".plan-slider__nav-btn[data-slide=\"".concat(parseInt(slider.realIndex) + 1, "\"]"));
    newsButton.classList.add('plan-slider__nav-btn--current');
  });
  var buttonList = apartmentSliderWrapper.querySelectorAll('.plan-slider__nav-btn');
  buttonList.forEach(function (button) {
    button.addEventListener('click', function () {
      if (!button.classList.contains('plan-slider__nav-btn--current')) {
        slider.slideTo(parseInt(button.dataset.slide) - 1);
        var activeButton = apartmentSliderWrapper.querySelector('.plan-slider__nav-btn--current');
        activeButton.classList.remove('plan-slider__nav-btn--current');
        button.classList.add('plan-slider__nav-btn--current');
      }
    });
  });
}

/***/ }),

/***/ "./src/js/components/_scaled-block.js":
/*!********************************************!*\
  !*** ./src/js/components/_scaled-block.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");

var blockList = document.querySelectorAll('.scaled-block');
if (blockList.length) {
  blockList.forEach(function (block) {
    gsap__WEBPACK_IMPORTED_MODULE_0__["default"].fromTo(block, {
      scale: 1.1
    }, {
      scale: 1,
      duration: .4,
      scrollTrigger: {
        trigger: block,
        start: "40% bottom"
      }
    });
  });
}

/***/ }),

/***/ "./src/js/components/_simple-slider.js":
/*!*********************************************!*\
  !*** ./src/js/components/_simple-slider.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");

var simpleSliderList = document.querySelectorAll('.simple-slider');
if (simpleSliderList.length) {
  simpleSliderList.forEach(function (simpleSlider) {
    var slider = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](simpleSlider.querySelector('.swiper'), {
      modules: [swiper__WEBPACK_IMPORTED_MODULE_0__["Pagination"]],
      slidesPerView: 1,
      spaceBetween: 0,
      pagination: {
        el: simpleSlider.querySelector('.simple-slider__pagination'),
        type: 'fraction',
        formatFractionCurrent: function formatFractionCurrent(number) {
          return number;
        },
        formatFractionTotal: function formatFractionTotal(number) {
          return number;
        },
        renderFraction: function renderFraction(currentClass, totalClass) {
          return "<span class=\"".concat(currentClass, "\"></span>/<span class=\"").concat(totalClass, "\"></span>");
        }
      }
    });
    slider.on('transitionStart', function () {
      var progressValue = simpleSlider.querySelector('.simple-slider__progress-value');
      progressValue.style.width = "".concat(slider.progress * 100, "%");
    });
  });
}

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vendor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vendor */ "./src/js/vendor.js");
/* harmony import */ var _components_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/_loader */ "./src/js/components/_loader.js");
/* harmony import */ var _components_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/_menu */ "./src/js/components/_menu.js");
/* harmony import */ var _components_simple_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/_simple-slider */ "./src/js/components/_simple-slider.js");
/* harmony import */ var _components_animated_line__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/_animated-line */ "./src/js/components/_animated-line.js");
/* harmony import */ var _components_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/_dropdown */ "./src/js/components/_dropdown.js");
/* harmony import */ var _components_dropdown__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_components_dropdown__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_faq__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/_faq */ "./src/js/components/_faq.js");
/* harmony import */ var _components_plan_slider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/_plan-slider */ "./src/js/components/_plan-slider.js");
/* harmony import */ var _components_partners__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/_partners */ "./src/js/components/_partners.js");
/* harmony import */ var _components_cursor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/_cursor */ "./src/js/components/_cursor.js");
/* harmony import */ var _components_cursor__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_components_cursor__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_gallery__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/_gallery */ "./src/js/components/_gallery.js");
/* harmony import */ var _components_gallery1__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/_gallery1 */ "./src/js/components/_gallery1.js");
/* harmony import */ var _components_gallery2__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/_gallery2 */ "./src/js/components/_gallery2.js");
/* harmony import */ var _components_scaled_block__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/_scaled-block */ "./src/js/components/_scaled-block.js");
/* harmony import */ var _components_animated_header__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/_animated-header */ "./src/js/components/_animated-header.js");
















/***/ }),

/***/ "./src/js/vendor.js":
/*!**************************!*\
  !*** ./src/js/vendor.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap/ScrollTrigger */ "./node_modules/gsap/ScrollTrigger.js");


gsap__WEBPACK_IMPORTED_MODULE_0__["default"].registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__["ScrollTrigger"]);

/***/ })

/******/ });
//# sourceMappingURL=main.js.map