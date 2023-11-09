import $ from "../core";

// Отображаем полченные элем
$.prototype.showElem = function () {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].style) {
      continue;
    }

    this[i].style.display = "";
  }

  return this;
};

// Скрываем полченные элем
$.prototype.hideElem = function () {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].style) {
      continue;
    }

    this[i].style.display = "none";
  }

  return this;
};

// Тоглим отображение полченных элем
$.prototype.toggleElem = function () {
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
