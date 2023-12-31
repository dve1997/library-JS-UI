import $ from "../core";

$.prototype.tabs = function () {
  for (let i = 0; i < this.length; i++) {
    $(this[i]).on("click", (e) => {
      $(this[i])
        .addClass("tab-item--active")
        .siblings()
        .removeClass("tab-item--active")
        .closest(".tab")
        .find(".tab-content")
        .removeClass("tab-content--active")
        .eq($(this[i]).index())
        .addClass("tab-content--active");
    });
  }
};

$(".tab-item").tabs();
