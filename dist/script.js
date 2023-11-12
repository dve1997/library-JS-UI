/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/lib/components/dropdown.js":
/*!*******************************************!*\
  !*** ./src/js/lib/components/dropdown.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.dropdown = function () {
  for (let i = 0; i < this.length; i++) {
    const butId = this[i].getAttribute("id");
    (0,_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).on("click", e => {
      (0,_core__WEBPACK_IMPORTED_MODULE_0__["default"])(`[data-menu-toggle = ${butId}]`).fadeToggle(300);
    });
  }
};
(0,_core__WEBPACK_IMPORTED_MODULE_0__["default"])(".dropdow-toggle").dropdown();

/***/ }),

/***/ "./src/js/lib/core.js":
/*!****************************!*\
  !*** ./src/js/lib/core.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const $ = function (selector) {
  return new $.prototype.init(selector);
};
$.prototype.init = function (selector) {
  if (!selector) {
    return this;
  }
  if (selector.tagName) {
    this[0] = selector;
    this.length = 1;
    return this;
  }
  Object.assign(this, document.querySelectorAll(selector));
  this.length = document.querySelectorAll(selector).length;
  return this;
};
$.prototype.init.prototype = $.prototype;
window.$ = $;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ($);

/***/ }),

/***/ "./src/js/lib/lib.js":
/*!***************************!*\
  !*** ./src/js/lib/lib.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ "./src/js/lib/core.js");
/* harmony import */ var _modules_display__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/display */ "./src/js/lib/modules/display.js");
/* harmony import */ var _modules_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/class */ "./src/js/lib/modules/class.js");
/* harmony import */ var _modules_hadlers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/hadlers */ "./src/js/lib/modules/hadlers.js");
/* harmony import */ var _modules_attribut__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/attribut */ "./src/js/lib/modules/attribut.js");
/* harmony import */ var _modules_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/actions */ "./src/js/lib/modules/actions.js");
/* harmony import */ var _modules_effects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/effects */ "./src/js/lib/modules/effects.js");
/* harmony import */ var _components_dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/dropdown */ "./src/js/lib/components/dropdown.js");








/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_core__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/js/lib/modules/actions.js":
/*!***************************************!*\
  !*** ./src/js/lib/modules/actions.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


// Записываем в полученные элем переданный контент
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.html = function (content) {
  for (let i = 0; i < this.length; i++) {
    if (content) {
      this[i].innerHTML = content;
    } else {
      return this[i].innerHTML;
    }
  }
  return this;
};

// Возращаем элем по заданному индексу
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.eq = function (i) {
  const objLength = Object.keys(this).length;
  let elem = this[i];
  for (let i = 0; i < objLength; i++) {
    delete this[i];
  }
  this[0] = elem;
  this.length = 1;
  return this;
};

// Возращаем индекс полученного элем
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.index = function () {
  const elem = this[0];
  const parent = this[0].parentNode.children;
  const parentLength = parent.length;
  for (let i = 0; i < parentLength; i++) {
    if (parent[i] == elem) {
      return i;
    } else {
      continue;
    }
  }
};

// Возращем объект с заданным селектором из полученных элем
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.find = function (selector) {
  let lenghtNewObj = 0;
  const elements = Object.assign({}, this);
  if (selector) {
    for (let i = 0; i < elements.length; i++) {
      let arr = elements[i].querySelectorAll(selector);
      if (arr.length == 0) {
        continue;
      }
      for (let j = 0; j < arr.length; j++) {
        this[j] = arr[j];
        this.length = ++lenghtNewObj;
      }
    }
  }
  for (let k = this.length; k < elements.length; k++) {
    delete this[k];
  }
  return this;
};

// Возращем объект состоящий из одного или некольких элем с заданным родительским селектором из изначально полученных элем
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.closest = function (selector) {
  let elementsLenght = this.length;
  for (let i = 0; i < this.length; i++) {
    if (this[i].closest(selector) == null) {
      let error = new Error("Selector is not defined");
      console.error(error);
      return;
    }
    this[i] = this[i].closest(selector);
  }
  for (let k = this.length; k < elementsLenght; k++) {
    delete this[k];
  }
  return this;
};

// Возращаем все элем, кроме изначально переданного элем
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.siblings = function () {
  let lenghtNewObj = 0;
  const element = Object.assign({}, this);
  for (let i = 0; i < element.length; i++) {
    let arr = element[i].parentNode.children;
    for (let j = 0; j < arr.length; j++) {
      if (element[i] === arr[j]) {
        continue;
      }
      this[j] = arr[j];
      this.length = ++lenghtNewObj;
    }
  }
  for (let k = this.length; k < element.length; k++) {
    delete this[k];
  }
  return this;
};

/***/ }),

/***/ "./src/js/lib/modules/attribut.js":
/*!****************************************!*\
  !*** ./src/js/lib/modules/attribut.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


// Устанавливаем заданный атрибут полченным элем
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.setAtr = function (atrName, atrMeaning) {
  if (atrName && atrMeaning) {
    for (let i = 0; i < this.length; i++) {
      if (!this[i].setAttribute) {
        continue;
      }
      this[i].setAttribute(atrName, atrMeaning);
    }
  }
  return this;
};

// Удаляем заданный атрибут у полученных элем
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.removeAtr = function (atrName) {
  if (atrName) {
    for (let i = 0; i < this.length; i++) {
      if (!this[i].removeAttribute) {
        continue;
      }
      this[i].removeAttribute(atrName);
    }
  }
  return this;
};

// Возращаем значение заданного атрибута полученных элем
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.getAtr = function (atrName) {
  if (atrName) {
    for (let i = 0; i < this.length; i++) {
      if (!this[i].getAttribute) {
        continue;
      }
      return this[i].getAttribute(atrName);
    }
  }
};

/***/ }),

/***/ "./src/js/lib/modules/class.js":
/*!*************************************!*\
  !*** ./src/js/lib/modules/class.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


// Добавляем классы у полченных элем
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.addClass = function (...className) {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].classList) {
      continue;
    }
    this[i].classList.add(...className);
  }
  return this;
};

// Удаляем классы у полченных элем
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.removeClass = function (...className) {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].classList) {
      continue;
    }
    this[i].classList.remove(...className);
  }
  return this;
};

// Тоглим класс у полченных элем
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.toggleClass = function (className) {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].classList) {
      continue;
    }
    this[i].classList.toggle(className);
  }
  return this;
};

/***/ }),

/***/ "./src/js/lib/modules/display.js":
/*!***************************************!*\
  !*** ./src/js/lib/modules/display.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


// Отображаем полченные элем
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.showElem = function () {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].style) {
      continue;
    }
    this[i].style.display = "";
  }
  return this;
};

// Скрываем полченные элем
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.hideElem = function () {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].style) {
      continue;
    }
    this[i].style.display = "none";
  }
  return this;
};

// Тоглим отображение полченных элем
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.toggleElem = function () {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].style) {
      continue;
    }
    if (this[i].style.display == "none") {
      this[i].style.display = "";
    } else {
      this[i].style.display = "none";
    }
    console.log(this);
  }
  return this;
};

/***/ }),

/***/ "./src/js/lib/modules/effects.js":
/*!***************************************!*\
  !*** ./src/js/lib/modules/effects.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


// Функция запуска анимации
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.animateOverTime = function (dur, cb) {
  let timeStart;
  function _animateOverTime() {
    const time = new Date().getTime();
    if (!timeStart) {
      timeStart = time;
    }
    let timeChange = time - timeStart;
    let meaning = Math.min(timeChange / dur, 1);
    cb(meaning);
    if (meaning < 1) {
      requestAnimationFrame(_animateOverTime);
    }
  }
  return _animateOverTime;
};

// Функция запуска анимации на показ элем
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.showBlocks = (dur, display, elements, ani) => {
  function _showBlocks() {
    for (let i = 0; i < elements.length; i++) {
      elements[i].style.display = display;
      const _fadeIn = meaning => {
        elements[i].style.opacity = meaning;
      };
      requestAnimationFrame(ani(dur, _fadeIn));
    }
  }
  return _showBlocks;
};

// Функция запуска анимации на скрытие элем
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.hideBlocks = (dur, elements, ani) => {
  function _hideBlocks() {
    for (let i = 0; i < elements.length; i++) {
      const _fadeOut = meaning => {
        elements[i].style.opacity = 1 - meaning;
        if (meaning === 1) {
          elements[i].style.display = "none";
        }
      };
      requestAnimationFrame(ani(dur, _fadeOut));
    }
  }
  return _hideBlocks;
};

// Анимация удаление полченных элем
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.fadeIn = function (dur, display = "block") {
  const elements = this;
  const ani = this.animateOverTime;
  this.showBlocks(dur, display, elements, ani)();
  return this;
};

// Анимация добавления полченных элем
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.fadeOut = function (dur) {
  const elements = this;
  const ani = this.animateOverTime;
  this.hideBlocks(dur, elements, ani)();
  return this;
};

// Анимация тогла полченных элем
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.fadeToggle = function (dur, display = "block") {
  const ani = this.animateOverTime;
  let elementsHide = {};
  let elementsShow = {};
  let countH = 0;
  let countS = 0;
  for (let i = 0; i < this.length; i++) {
    if (window.getComputedStyle(this[i]).display === "block") {
      elementsHide[i] = this[i];
      elementsHide.length = ++countH;
      if (i === this.length - 1) {
        this.hideBlocks(dur, elementsHide, ani)();
      }
    } else {
      elementsShow[i] = this[i];
      elementsShow.length = ++countS;
      if (i === this.length - 1) {
        this.showBlocks(dur, display, elementsShow, ani)();
      }
    }
  }
  return this;
};

/***/ }),

/***/ "./src/js/lib/modules/hadlers.js":
/*!***************************************!*\
  !*** ./src/js/lib/modules/hadlers.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


// Добавляем обработчик событий на полученные элем
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.on = function (eventType, callbackF) {
  if (eventType && callbackF) {
    for (let i = 0; i < this.length; i++) {
      this[i].addEventListener(eventType, callbackF);
    }
  } else {
    return this;
  }
};

// Удаляем обработчик событий с полученных элем
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.off = function (eventType, callbackF) {
  if (eventType && callbackF) {
    for (let i = 0; i < this.length; i++) {
      this[i].removeEventListener(eventType, callbackF);
    }
  } else {
    return this;
  }
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/lib */ "./src/js/lib/lib.js");

$(".container").html(`
<div class="dropdown">
        <button
          class="btn btn-primary dropdow-toggle"
          id="dpordown-menu-toggle"
        >
          Dropdown action
        </button>
        <div class="dropdown-menu" data-menu-toggle="dpordown-menu-toggle">
          <a href="#" class="dropdown-item">action 1</a>
          <a href="#" class="dropdown-item">action 2</a>
          <a href="#" class="dropdown-item">action 3</a>
        </div>
      </div>`);
$(".dropdow-toggle").dropdown();
})();

/******/ })()
;
//# sourceMappingURL=script.js.map