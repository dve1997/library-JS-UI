import $ from "../core";

$.prototype.accrodion = function () {
  for (let i = 0; i < this.length; i++) {
    $(this[i]).on("click", (e) => {
      $(this[i])
        .addClass("accordion-head--active")
        .siblings()
        .removeClass("accordion-head--active")
        .closest(".accordion")
        .find(".accordion-head, .accordion-content")
        .removeClass("accordion-content--active")
        .eq($(this[i]).index())[0]
        .nextElementSibling.classList.add("accordion-content--active");
    });
  }
};

$(".accordion-head").accrodion();
