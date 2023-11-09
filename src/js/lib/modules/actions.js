import $ from "../core";

// Записываем в полученные элем переданный контент
$.prototype.html = function (content) {
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
$.prototype.eq = function (i) {
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
$.prototype.index = function () {
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
$.prototype.find = function (selector) {
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
$.prototype.closest = function (selector) {
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
$.prototype.siblings = function () {
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
