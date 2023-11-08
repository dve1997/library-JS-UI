import $ from "../core";

$.prototype.on = function (eventType, callbackF) {
  if (eventType && callbackF) {
    for (let i = 0; i < this.length; i++) {
      this[i].addEventListener(eventType, callbackF);
    }
  } else {
    return this;
  }
};

$.prototype.off = function (eventType, callbackF) {
  if (eventType && callbackF) {
    for (let i = 0; i < this.length; i++) {
      this[i].removeEventListener(eventType, callbackF);
    }
  } else {
    return this;
  }
};
