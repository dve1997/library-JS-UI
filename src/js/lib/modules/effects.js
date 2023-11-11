import $ from "../core";

// Функция запуска анимации
$.prototype.animateOverTime = function (dur, cb) {
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
$.prototype.showBlocks = (dur, display, elements, ani) => {
  function _showBlocks() {
    for (let i = 0; i < elements.length; i++) {
      elements[i].style.display = display;

      const _fadeIn = (meaning) => {
        elements[i].style.opacity = meaning;
      };

      requestAnimationFrame(ani(dur, _fadeIn));
    }
  }

  return _showBlocks;
};

// Функция запуска анимации на скрытие элем
$.prototype.hideBlocks = (dur, elements, ani) => {
  function _hideBlocks() {
    for (let i = 0; i < elements.length; i++) {
      const _fadeOut = (meaning) => {
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
$.prototype.fadeIn = function (dur, display = "block") {
  const elements = this;
  const ani = this.animateOverTime;

  this.showBlocks(dur, display, elements, ani)();

  return this;
};

// Анимация добавления полченных элем
$.prototype.fadeOut = function (dur) {
  const elements = this;
  const ani = this.animateOverTime;

  this.hideBlocks(dur, elements, ani)();

  return this;
};

// Анимация тогла полченных элем
$.prototype.fadeToggle = function (dur, display = "block") {
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
