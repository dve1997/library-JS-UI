import $ from "../core";

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

$.prototype.removeAtr = function (atrName) {
  if (atrName) {
    for (let i = 0; i < this.length; i++) {
      if (!this[i].setAttribute) {
        continue;
      }

      this[i].removeAttribute(atrName);
    }
  }

  return this;
};

$.prototype.getAtr = function (atrName) {
  if (atrName) {
    for (let i = 0; i < this.length; i++) {
      if (!this[i].setAttribute) {
        continue;
      }

      return this[i].getAttribute(atrName);
    }
  }
};
