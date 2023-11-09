import $ from "../core";

// Устанавливаем заданный атрибут полченным элем
$.prototype.setAtr = function (atrName, atrMeaning) {
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
$.prototype.removeAtr = function (atrName) {
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
$.prototype.getAtr = function (atrName) {
  if (atrName) {
    for (let i = 0; i < this.length; i++) {
      if (!this[i].getAttribute) {
        continue;
      }

      return this[i].getAttribute(atrName);
    }
  }
};
