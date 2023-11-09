import $ from "../core";

// Добавляем обработчик событий на полученные элем
$.prototype.on = function (eventType, callbackF) {
  if (eventType && callbackF) {
    for (let i = 0; i < this.length; i++) {
      this[i].addEventListener(eventType, callbackF);
    }
  } else {
    return this;
  }
};

// Удаляем обработчик событий с полученных элем
$.prototype.off = function (eventType, callbackF) {
  if (eventType && callbackF) {
    for (let i = 0; i < this.length; i++) {
      this[i].removeEventListener(eventType, callbackF);
    }
  } else {
    return this;
  }
};
