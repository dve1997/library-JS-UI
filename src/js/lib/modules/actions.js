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
  const lenghtElem = this.length;

  for (let i = 0; i < this.length; i++) {
    if (this[i].closest(selector)) {
      this[0] = this[i].closest(selector);
      this.length = 1;
    } else {
      let error = new Error("Selector is not defined");
      console.error(error);
      return;
    }
  }

  for (let j = this.length; j < lenghtElem; j++) {
    delete this[j];
  }

  return this;
};

// Возращаем все элем, кроме изначально переданного элем
$.prototype.siblings = function () {
  let numberOfItems = 0;
  let counter = 0;

  const copyObj = Object.assign({}, this);

  for (let i = 0; i < copyObj.length; i++) {
    const arr = copyObj[i].parentNode.children;

    for (let j = 0; j < arr.length; j++) {
      if (copyObj[i] === arr[j]) {
        continue;
      }

      this[counter] = arr[j];
      counter++;
    }

    numberOfItems += arr.length - 1;
  }

  this.length = numberOfItems;

  const objLength = Object.keys(this).length;
  for (; numberOfItems < objLength; numberOfItems++) {
    delete this[numberOfItems];
  }

  return this;
};
