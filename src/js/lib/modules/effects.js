import $ from "../core";

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

// Анимация удаление полченных элем
$.prototype.fadeIn = function (dur, display = "block") {
  for (let i = 0; i < this.length; i++) {
    this[i].style.display = display;

    const _fadeIn = (meaning) => {
      this[i].style.opacity = meaning;
    };

    const ani = this.animateOverTime(dur, _fadeIn);
    requestAnimationFrame(ani);
  }

  return this;
};

// Анимация добавления полченных элем
$.prototype.fadeOut = function (dur) {
  for (let i = 0; i < this.length; i++) {
    const _fadeOut = (meaning) => {
      this[i].style.opacity = 1 - meaning;

      if (meaning === 1) {
        this[i].style.display = "none";
      }
    };

    const ani = this.animateOverTime(dur, _fadeOut);
    requestAnimationFrame(ani);
  }

  return this;
};
