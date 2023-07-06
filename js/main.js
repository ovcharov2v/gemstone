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

/***/ "./src/js/components/_animations.js":
/*!******************************************!*\
  !*** ./src/js/components/_animations.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var sal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sal.js */ "./node_modules/sal.js/dist/sal.js");
/* harmony import */ var sal_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sal_js__WEBPACK_IMPORTED_MODULE_0__);

document.addEventListener('loader-complete', function () {
  sal_js__WEBPACK_IMPORTED_MODULE_0___default()({
    selector: '.animation',
    once: true,
    animateClassName: 'animation--complete',
    threshold: .1
  });
});
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

/***/ }),

/***/ "./src/js/components/_cursor.js":
/*!**************************************!*\
  !*** ./src/js/components/_cursor.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var cursor = null;
var lastMouseCoords = {
  x: 0,
  y: 0
};
var lastScrollCoords = {
  x: 0,
  y: 0
};
document.addEventListener('mousemove', function (e) {
  var area = e.target.closest('[data-cursor]');
  if (area) {
    var newCursor = document.querySelector(".cursor--".concat(area.dataset.cursor));
    if (cursor && cursor !== newCursor) {
      cursor.classList.remove('cursor--active');
    }
    cursor = newCursor;
    cursor.classList.add('cursor--active');
    updateCursorPosition(e.pageX, e.pageY);
  } else {
    if (cursor) {
      cursor.classList.remove('cursor--active');
      cursor = null;
    }
  }
});
window.addEventListener('scroll', function (e) {
  var top = window.scrollY || document.documentElement.scrollTop;
  var left = window.scrollX || document.documentElement.scrollLeft;
  var deltaY = top - lastScrollCoords.y;
  var deltaX = left - lastScrollCoords.x;
  lastScrollCoords.y = top;
  lastScrollCoords.x = left;
  updateCursorPosition(lastMouseCoords.x + deltaX, lastMouseCoords.y + deltaY);
});
document.addEventListener('mouseleave', function () {
  if (cursor) {
    cursor.classList.remove('cursor--active');
    cursor = null;
  }
});
var updateCursorPosition = function updateCursorPosition(x, y) {
  if (cursor) {
    lastMouseCoords.x = x;
    lastMouseCoords.y = y;
    cursor.style.left = x + 'px';
    cursor.style.top = y + 'px';
  }
};

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
/*! no static exports found */
/***/ (function(module, exports) {

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
        });
        itemAccordion.classList.add("faq__elem--active");
      } else {
        itemAccordion.classList.remove("faq__elem--active");
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

var galleryLinkList = document.querySelectorAll('[data-gallery]');
var sliderList = {};
if (galleryLinkList.length) {
  galleryLinkList.forEach(function (galleryLink) {
    var gallery = document.querySelector("#".concat(galleryLink.dataset.gallery));
    galleryLink.addEventListener('click', function (e) {
      e.preventDefault();
      if (gallery) {
        document.body.style.overflow = 'hidden';
        gallery.classList.add('gallery--active');
        if (galleryLink.dataset.slide) {
          var gallerySlider = sliderList["".concat(galleryLink.dataset.gallery)];
          gallerySlider.slideTo("".concat(parseInt(galleryLink.dataset.slide) - 1));
        }
        setTimeout(function () {
          gallery.classList.add('gallery--animate');
        });
      }
    });
    gallery.addEventListener('click', function () {
      gallery.classList.remove('gallery--animate');
      setTimeout(function () {
        gallery.classList.remove('gallery--active');
        document.body.style.overflow = '';
      }, 300);
    });
  });
}
var galleryList = document.querySelectorAll('.gallery');
if (galleryList.length) {
  galleryList.forEach(function (gallery) {
    var slider = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](gallery.querySelector('.gallery__slider'), {
      slidesPerView: 1,
      spaceBetween: 0,
      loop: true,
      on: {
        init: function init(swiper) {
          sliderList["".concat(gallery.id)] = swiper;
        }
      }
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
    modules: [swiper__WEBPACK_IMPORTED_MODULE_0__["Mousewheel"]],
    slidesPerView: 4,
    spaceBetween: 20,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    touchStartPreventDefault: false,
    mousewheel: {
      releaseOnEdges: true
    },
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
    modules: [swiper__WEBPACK_IMPORTED_MODULE_0__["Mousewheel"]],
    slidesPerView: 1.1,
    spaceBetween: 30,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    touchStartPreventDefault: false,
    mousewheel: {
      releaseOnEdges: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1.1,
        spaceBetween: 30
      },
      768: {
        slidesPerView: 2,
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

/***/ "./src/js/components/_header.js":
/*!**************************************!*\
  !*** ./src/js/components/_header.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function headerWatcher() {
  var header = document.querySelector('.header');
  if (header.classList.contains('header--permanent-fixed')) return;
  var isHeaderFixed = header.classList.contains('header--fixed') || header.classList.contains('header--before-fix');
  if (window.scrollY < 600) {
    if (isHeaderFixed) {
      header.style.transform = 'translateY(-100%)';
      setTimeout(function () {
        header.classList.remove('header--fixed');
        header.style.transform = '';
      }, 300);
    }
  } else {
    if (!isHeaderFixed) {
      header.style.transform = 'translateY(-100%)';
      setTimeout(function () {
        header.classList.add('header--fixed');
        header.style.transform = '';
      }, 300);
    }
  }
  requestAnimationFrame(headerWatcher);
}
headerWatcher();

/***/ }),

/***/ "./src/js/components/_loader.js":
/*!**************************************!*\
  !*** ./src/js/components/_loader.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var loader = document.querySelector('.loader');
setTimeout(function () {
  loader.classList.add('loader--hide');
  setTimeout(function () {
    var evt = new Event('loader-complete');
    document.dispatchEvent(evt);
  }, 100);
  setTimeout(function () {
    loader.classList.add('loader--hidden');
  }, 900);
}, 1000);

/***/ }),

/***/ "./src/js/components/_menu.js":
/*!************************************!*\
  !*** ./src/js/components/_menu.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var menuBtnList = document.querySelectorAll('.js-show-menu');
var menu = document.querySelector('.menu');
menuBtnList.forEach(function (btn) {
  btn.addEventListener('click', function () {
    if (document.body.classList.contains('left-menu-show')) {
      document.body.classList.remove('left-menu-show');
      document.body.style.overflow = '';
      setTimeout(function () {
        menu.classList.remove('menu--animate');
      }, 300);
    } else {
      document.body.classList.add('left-menu-show');
      document.body.style.overflow = 'hidden';
      document.querySelector('.menu').classList.add('menu--active');
      setTimeout(function () {
        menu.classList.add('menu--animate');
      }, 300);
    }
  });
});
var menuLinks = document.querySelectorAll('.menu__nav-link');
var digitBox = document.querySelector('.menu__counter-digit-list');
var digitList = document.querySelectorAll('.menu__counter-digit');
menuLinks.forEach(function (link) {
  link.addEventListener("mouseenter", function () {
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
      touchStartPreventDefault: false,
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
/* harmony import */ var _vendor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vendor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/_loader */ "./src/js/components/_loader.js");
/* harmony import */ var _components_loader__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_loader__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/_animations */ "./src/js/components/_animations.js");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/_header */ "./src/js/components/_header.js");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_header__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/_menu */ "./src/js/components/_menu.js");
/* harmony import */ var _components_menu__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_menu__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_simple_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/_simple-slider */ "./src/js/components/_simple-slider.js");
/* harmony import */ var _components_dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/_dropdown */ "./src/js/components/_dropdown.js");
/* harmony import */ var _components_dropdown__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_components_dropdown__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_faq__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/_faq */ "./src/js/components/_faq.js");
/* harmony import */ var _components_faq__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_components_faq__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_plan_slider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/_plan-slider */ "./src/js/components/_plan-slider.js");
/* harmony import */ var _components_partners__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/_partners */ "./src/js/components/_partners.js");
/* harmony import */ var _components_cursor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/_cursor */ "./src/js/components/_cursor.js");
/* harmony import */ var _components_cursor__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_components_cursor__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_gallery__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/_gallery */ "./src/js/components/_gallery.js");
/* harmony import */ var _components_gallery1__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/_gallery1 */ "./src/js/components/_gallery1.js");
/* harmony import */ var _components_gallery2__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/_gallery2 */ "./src/js/components/_gallery2.js");















/***/ }),

/***/ "./src/js/vendor.js":
/*!**************************!*\
  !*** ./src/js/vendor.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ })

/******/ });
//# sourceMappingURL=main.js.map