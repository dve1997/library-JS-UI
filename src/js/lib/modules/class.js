import $ from "../core";

// Добавляем классы у полченных элем
$.prototype.addClass = function (...className) {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].classList) {
      continue;
    }

    this[i].classList.add(...className);
  }

  return this;
};

// Удаляем классы у полченных элем
$.prototype.removeClass = function (...className) {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].classList) {
      continue;
    }

    this[i].classList.remove(...className);
  }

  return this;
};

// Тоглим класс у полченных элем
$.prototype.toggleClass = function (className) {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].classList) {
      continue;
    }

    this[i].classList.toggle(className);
  }

  return this;
};
